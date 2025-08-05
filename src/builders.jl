using Markdown
using GithubMarkdown
using HTMLSanitizer
using Highlights
using Downloads
using Documenter

function build_git_docs(packagespec, buildpath, uri; src_prefix="", href_prefix="", html_size_threshold_bytes=nothing)
    pkgname = packagespec.name
    return mktempdir() do dir
        return cd(dir) do
            run(`git clone --depth=1 $(uri) $(pkgname)`)
            docsproject = joinpath(dir, pkgname)
            return cd(docsproject) do
                return build_local_docs(packagespec, buildpath, nothing, docsproject, gitdirdocs = true; src_prefix=src_prefix, href_prefix=href_prefix, html_size_threshold_bytes=html_size_threshold_bytes)
            end
        end
    end
end

function build_hosted_docs(packagespec, buildpath, uri)
    pkgname = packagespec.name
    # js redirect
    open(joinpath(buildpath, "index.html"), "w") do io
        println(io,
            """
            <!DOCTYPE html>
            <html>
                <head>
                    <meta http-equiv="Content-Type" content="0; $(uri)" />
                    <script type="text/javascript">
                        window.onload = function () {
                            window.location.replace("$(uri)");
                        }
                    </script>
                </head>
                <body>
                    Redirecting to <a href="$(uri)">$(uri)</a>.
                </body>
            </html>
            """
        )
    end

    # check for meta redirects and follow them
    uri = maybe_redirect(uri)

    # download search index
    try
        Downloads.download(string(uri, "/search_index.js"), joinpath(buildpath, "search_index.js"))
    catch err
        @error("Search index download failed for `$(uri)`.", exception = err)
    end
    return Dict(
        "doctype" => :hosted,
        "success" => true,
        "hosted_uri" => uri
    )
end

using Gumbo, AbstractTrees
function maybe_redirect(uri)
    docspage = Downloads.download(uri)
    docspage = read(docspage, String)

    try
        doc = Gumbo.parsehtml(docspage)
        for el in PreOrderDFS(doc.root)
            if el isa HTMLElement && Gumbo.tag(el) == :meta && "content" in keys(Gumbo.attrs(el))
                content = getattr(el, "content")
                m = match(r"\d+;\s*url\=(.*)$", content)
                if m !== nothing
                    new = m[1]
                    if startswith(new, "./")
                        new =  joinpath(uri, new[3:end])
                    end
                    @info "Found redirect from $(uri) to $(new)"
                    return new
                end
            end
        end
    catch err
        @error("Failed to determine if there's a redirect in `$(uri)`.", err=err)
    end
    return uri
end

function build_local_docs(packagespec, buildpath, uri, pkgroot = nothing; gitdirdocs = false, src_prefix="", href_prefix="", html_size_threshold_bytes=nothing)
    uri = something(uri, "docs")
    mktempdir() do envdir
        pkgname = packagespec.name
        installable = try_install_package(packagespec, envdir)

        documenter_errored = false

        if !installable
            @error("$(pkgname) is not installable. Stopped building docs.")
            return Dict(
                "installable" => false,
                "success" => false
            )
        end
        if pkgroot === nothing
            pkgfile = Base.find_package(pkgname)
            pkgroot = normpath(joinpath(pkgfile, "..", ".."))
        end
        could_use_pkg = try_use_package(packagespec, envdir)

        # actual Documenter docs
        try
            for docdir in joinpath.(pkgroot, unique([uri, "docs", "doc"]))
                if isdir(docdir)
                    @info("Building vendored Documenter.jl documentation at $(docdir).")
                    output = build_documenter(packagespec, docdir)
                    @info("Documentation built at $(output).")
                    if output !== nothing
                        @info("Copying build documentation from $(output) to $(buildpath)")
                        cp(output, buildpath, force = true)
                        return Dict(
                            "doctype" => gitdirdocs ? "git-repo" : "documenter",
                            "documenter_errored" => documenter_errored,
                            "installable" => true,
                            "using_failed" => !could_use_pkg,
                            "success" => true
                        )
                    else
                        @error("Errored while trying to generate Documenter docs at $(docdir).")
                        documenter_errored = true
                    end
                end
            end
        catch err
            @error("Errored while trying to generate Documenter of $(pkgname)", exception = (err, catch_backtrace()))

            documenter_errored = true
        end

        documenter_errored && @warn("Building vendored Documenter docs failed.")
        @info("Building fallback documentation.")

        # fallback docs (readme & docstrings)
        return mktempdir() do docsdir
            output = build_readme_docs(pkgname, pkgroot, docsdir, src_prefix, href_prefix, could_use_pkg, html_size_threshold_bytes)
            if output !== nothing
                cp(output, buildpath, force = true)
                return Dict(
                    "doctype" => "fallback_autodocs",
                    "documenter_errored" => documenter_errored,
                    "installable" => true,
                    "using_failed" => !could_use_pkg,
                    "success" => true
                )
            end
            return Dict(
                "doctype" => "fallback_autodocs",
                "documenter_errored" => documenter_errored,
                "installable" => true,
                "using_failed" => !could_use_pkg,
                "success" => false
            )
        end
    end
end

function build_legacy_documenter(packagespec, docdir)
    open(joinpath(docdir, "Project.toml"), "w") do io
        println(io, """
            [deps]
            Documenter = "e30172f5-a6a5-5a46-863b-614d45cd2de4"

            [compat]
            Documenter = "~0.20"
        """)
    end
    build_documenter(packagespec, docdir)
end

function build_documenter(packagespec, docdir)
    pkgdir = normpath(joinpath(docdir, ".."))
    cd(pkgdir) do
        docsproject = joinpath(docdir, "Project.toml")
        docsmanifest = joinpath(docdir, "Manifest.toml")
        if !isfile(docsproject)
            return build_legacy_documenter(packagespec, docdir)
        end

        # fix permissions to allow us to add the main pacakge to the docs project
        chmod(docsproject, 0o660)
        isfile(docsmanifest) && chmod(docsmanifest, 0o660)

        chmod(joinpath(pkgdir, "Project.toml"), 0o660)
        isfile(joinpath(pkgdir, "Manifest.toml")) && chmod(joinpath(pkgdir, "Manifest.toml"), 0o660)

        rundcocumenter = joinpath(@__DIR__, "rundocumenter.jl")

        makefile = joinpath(docdir, "make.jl")
        if !isfile(makefile)
            @warn("No `make.jl` file found in `$(docdir)`. Trying the first `*.jl` file instead.")
            jlfiles = filter(file -> endswith(file, ".jl"), readdir(docdir))
            if isempty(jlfiles)
                @error("No `*.jl` files found in `$(docdir)`. Aborting.")
                return nothing
            end
            makefile = joinpath(docdir, jlfiles[1])
            @info("Using $(makefile) to generate Documenter docs.")
        end
        _, builddir = fix_makefile(makefile)
        pkgimagesopt = VERSION >= v"1.9" ? "--pkgimages=no" : ""
        cmd = ```
            $(julia())
                --project="$(docdir)"
                $(isempty(pkgimagesopt) ? [] : pkgimagesopt)
                $(rundcocumenter)
                $(pkgdir)
                $(makefile)
            ```

        try
            # We'll remove the JULIA_LOAD_PATH, since that can affect how the sub-process
            # loads dependencies and therefore affect how the make.jl script gets executed.
            #
            # This is in particular necessary when we run a build as part of the test suite,
            # which sets it.
            run(addenv(cmd, "JULIA_LOAD_PATH" => nothing))
            return builddir
        catch err
            @error("Failed to evaluate specified make.jl-file.", exception=err)
            return nothing
        end
    end
end

function build_readme_docs(pkgname, pkgroot, docsdir, src_prefix, href_prefix, could_use_pkg, html_size_threshold_bytes=nothing)
    @info("Generating readme-only fallback docs.")

    if pkgroot === nothing || !ispath(pkgroot)
        @error("Julia could not find the package directory. Aborting.")
        return
    end

    readme = find_readme(pkgroot)
    doc_src = joinpath(docsdir, "src")
    mkpath(doc_src)
    index = joinpath(doc_src, "index.md")

    render_html(readme, index, src_prefix, href_prefix; documenter = true)

    pages = ["Readme" => "index.md"]

    if could_use_pkg
        @info("Deploying `autodocs`.")
        add_autodocs(doc_src, Symbol(pkgname))
        push!(pages, "Docstrings" => "autodocs.md")
    end

    if !isfile(index)
        open(index, "w") do io
            println(io, """
            # $pkgname
            """)

            if !could_use_pkg
                println(io, """
                > No documentation or readme found for this package.
                """)
            end
        end
    end
    doc_format_str = if isnothing(html_size_threshold_bytes)
        "Documenter.HTML()"
    else
        "Documenter.HTML(;size_threshold=$html_size_threshold_bytes)"
    end
    makejl_str = """
    using Pkg
    Pkg.add(name="Documenter", version="1")
    Pkg.develop(path="$(pkgroot)")

    using Documenter
    using $(pkgname)

    makedocs(
        format = $(doc_format_str),
        sitename = "$(pkgname).jl",
        modules = [$(pkgname)],
        root = "$(docsdir)",
        pages = $(pages),
        remotes = nothing,
        repo = "",
        doctest = false,
        warnonly = true,
    )
    """

    makejl_path = joinpath(docsdir, "make.jl")

    open(makejl_path, "w") do io
        println(io, makejl_str)
    end

    cmd = ```
    $(julia())
        --project="$(docsdir)"
        $(makejl_path)
    ```

    @info "running autodocs generation in $docsdir" makejl_str

    succeeded = try
        success(pipeline(addenv(cmd, "JULIA_LOAD_PATH" => nothing); stdout=stdout, stderr=stderr))
    catch err
        @error "autodocs $pkgname issue" exception=(err, catch_backtrace())
        false
    end

    if !succeeded
        @error("Failed to generate readme autodocs for $pkgname")
    end

    build_dir = joinpath(docsdir, "build")
    if ispath(build_dir) && succeeded
        return build_dir
    end
    return nothing
end

function find_readme(pkgroot)
    allfiles = readdir(pkgroot)
    # look for readme.md/readme first
    for file in allfiles
        if lowercase(file) in ("readme.md", "readme")
            readme = joinpath(pkgroot, file)
            if isfile(readme)
                return readme
            end
        end
    end
    # if we didn't find one of those, take the first file that contains "readme"
    for file in allfiles
        if occursin("readme", lowercase(file))
            readme = joinpath(pkgroot, file)
            if isfile(readme)
                return readme
            end
        end
    end
end

function add_autodocs(docsdir, mod)
    open(joinpath(docsdir, "autodocs.md"), "w") do io
        println(io, """
        ```@autodocs
        Modules = [$mod]
        ```
        """)
    end
end

# Borrowed from Documenter.jl (MIT)
function submodules(modules::Vector{Module})
    out = Set{Module}()
    for each in modules
        submodules(each, out)
    end
    out
end
function submodules(root::Module, seen = Set{Module}())
    push!(seen, root)
    for name in names(root, all=true)
        if Base.isidentifier(name) && isdefined(root, name) && !Base.isdeprecated(root, name)
            object = getfield(root, name)
            if isa(object, Module) && !(object in seen) && parentmodule(object::Module) == root
                submodules(object, seen)
            end
        end
    end
    return seen
end

function monkeypatchdocsearch(packagespec, buildpath)
    uuid = packagespec.uuid
    name = packagespec.name
    if !(get(ENV, "DISABLE_CENTRALIZED_SEARCH", false) in ("true", "1", 1))
        searchjs = joinpath(buildpath, "assets", "search.js")
        if isfile(searchjs)
            @info "monkey patching search.js for $(name)"
            rm(searchjs, force=true)
            template = String(read(joinpath(@__DIR__, "search.js.template")))
            template = replace(template, "{{{UUID}}}" => String(uuid))
            open(searchjs, "w") do io
                print(io, template)
            end
        end
    end
end

function copy_package_source(packagespec, buildpath)
    outpath = joinpath(buildpath, "_packagesource")
    try
        mktempdir() do envdir
            if packagespec.name == "julia"
                Downloads.download("https://github.com/JuliaLang/julia/releases/download/v$(packagespec.version)/julia-$(packagespec.version).tar.gz", joinpath(envdir, string(packagespec.uuid)*".tar.gz"))
                run(`tar -xzf $(joinpath(envdir, string(packagespec.uuid)*".tar.gz"))  -C $envdir`)
                docs_path = joinpath(envdir, packagespec.name*"-"*string(packagespec.version), "doc", "_build", "html", "en")
                src_path = joinpath(envdir, packagespec.name*"-"*string(packagespec.version))
                cp(docs_path , joinpath(buildpath, "_docsbuild"), force = true)
                cp(src_path, outpath, force = true)
                return outpath
            end
            pkgname = packagespec.name
            installable = try_install_package(packagespec, envdir)

            if !installable
                @error("Package not installable. Can't get source code.")
                return
            end
            pkgfile = Base.find_package(pkgname)
            pkgroot = normpath(joinpath(pkgfile, "..", ".."))

            @info("Copying source code for $(pkgname).")
            if isdir(pkgroot)
                cp(pkgroot, outpath; force=true)
            end
            @info("Done copying source code for $(pkgname).")
            return outpath
        end
    catch err
        @error("Error trying to copy package source.", exception=err)
    end
end

function render_html(input, output, src_prefix="", href_prefix=""; documenter = false)
    if input === nothing
        @error("Package doesn't seem to have a readme. ")

        return
    end

    io = IOBuffer()
    GithubMarkdown.rendergfm(io, input; documenter = false)

    allow_class_on_code = deepcopy(HTMLSanitizer.WHITELIST)
    allow_class_on_code[:attributes]["code"] = ["class"]

    out = sanitize(String(take!(io)), prettyprint = false, whitelist = allow_class_on_code)

    out = postprocess_html_readme(out; src_prefix = src_prefix, href_prefix = href_prefix)
    out = out.children[2]

    print(io, out)
    out = String(take!(io))

    out = replace(out, r"^<body>" => "")
    out = replace(out, r"</body>$" => "")

    open(output, "w") do io
        documenter && println(io, "````````````@raw html")
        println(io, out)
        documenter && println(io, "````````````")
    end
end

function render_readme_html(pkgroot, buildpath, src_prefix="", href_prefix=""; documenter = false)
    outpath = joinpath(buildpath, "_readme")
    try
        readme = find_readme(pkgroot)

        mkpath(outpath)
        readmehtml = joinpath(outpath, "readme.html")

        @info("Rendering readme to HTML.")
        render_html(readme, readmehtml, src_prefix, href_prefix; documenter = false)
        @info("Done rendering readme to HTML.")

        return readmehtml
    catch err
        @error("Error trying to render readme to HTML.", exception=err)
    end
end

function should_rewrite_url(url)
    if occursin(r"^\.?\.?//?"i, url)
        return true
    elseif startswith(url, '#')
        return false
    else
        return !occursin(r"^\w+://"i, url)
    end
end

function replace_url(el, attr, url_prefix; fix_github = false)
    old_src = getattr(el, attr)
    if should_rewrite_url(old_src)
        setattr!(el, attr, string(url_prefix, old_src))
    end
    if fix_github
        url = getattr(el, attr)
        setattr!(el, attr, github_to_raw(url))
    end
end

function github_to_raw(url)
    m = match(r"(https?)\:\/\/(?:www\.)?github.com/(.*?)/(.*?)/blob/(.*)", url)
    if m !== nothing
        return string(m[1], "://raw.githubusercontent.com/", m[2], "/", m[3], "/", m[4])
    end
    return url
end

function postprocess_html_readme(html; src_prefix="", href_prefix="")
    doc = parsehtml(html, preserve_whitespace = true).root

    if !endswith(src_prefix, '/')
        src_prefix = string(src_prefix, '/')
    end
    if !endswith(href_prefix, '/')
        href_prefix = string(href_prefix, '/')
    end

    # We'll be transforming some of the elements in the tree. For headings and
    # code highlighting, we actually have to mutate the tree. So in that case
    # we must perform the mutation after iterating with PreOrderDFS(), since the
    # iteration is stateful and will get confused if the tree's structure gets
    # changed underneath it.
    heading_elements, highlight_elements = HTMLElement[], HTMLElement[]
    for el in AbstractTrees.PreOrderDFS(doc)
        if el isa HTMLElement
            if Gumbo.tag(el) in [:h1, :h2, :h3, :h4, :h5]
                push!(heading_elements, el)
            elseif Gumbo.tag(el) == :code
                if Gumbo.tag(el.parent) == :pre && length(el.children) == 1 && typeof(el.children[1]) == HTMLText
                    push!(highlight_elements, el)
                end
            end
        end
    end

    # Mutate <h*> tags
    header_refs = Set([]) # this is to avoid duplicate IDs
    for el in heading_elements
        # For heading elements we essentially just push a new <a>
        # tag between the <h*> tag and the child nodes.
        heading = replace(text(el), r"\s" => "-")
        heading = replace(heading, r"[^\w-]" => "")

        while heading in header_refs
            new_heading = replace(heading, r"_\d+$" => s -> begin
                string('_', parse(Int, s[2:end]) + 1)
            end)
            if new_heading == heading
                heading = string(heading, "_1")
            else
                heading = new_heading
            end
        end

        orig_content = deepcopy(el.children)
        a_el = HTMLElement{:a}(orig_content, el, Dict(
            "href" => string('#', heading),
            "class" => "docs-heading-anchor"
        ))

        for c in orig_content
            c.parent = a_el
        end

        el.children = [a_el]

        setattr!(el, "id", heading)
        push!(header_refs, heading)
    end

    # Mutate the highlighting-related elements
    for el in highlight_elements
        highlight_syntax_html(el)
    end

    # Update the 'src' and 'href' attributes of all the tags that have them,
    # applying a URL prefix.
    for el in AbstractTrees.PreOrderDFS(doc)
        if el isa HTMLElement
            if hasattr(el, "src")
                replace_url(el, "src", src_prefix, fix_github = true)
            elseif hasattr(el, "href")
                replace_url(el, "href", href_prefix)
            end
        end
    end

    return doc
end

function highlight_syntax_html(el)
    lexer = nothing
    content = Gumbo.text(el)
    m = match(r"language\-(.+)\b", hasattr(el, "class") ? getattr(el, "class") : "")
    if m ≠ nothing
        # language specified
        m = m[1]
        if m == "julia" || m == "jl"
            lexer = Lexers.JuliaLexer
        elseif m == "julia-console" || m == "jldoctest" || m == "jl-doctest" || m == "jl-console" || m == "jl-repl"
            lexer = Lexers.JuliaConsoleLexer
        elseif m == "matlab"
            lexer = Lexers.MatlabLexer
        elseif m == "r"
            lexer = Lexers.RLexer
        elseif m == "fortran"
            lexer = Lexers.FortranLexer
        end
    else
        # no language, but looks like REPL content
        if startswith(content, "julia>")
            lexer = Lexers.JuliaConsoleLexer
        end
    end

    if lexer ≠ nothing
        io = IOBuffer()
        Highlights.highlight(io, MIME("text/html"), content, lexer)
        highlighted_content = String(take!(io))
        parsed = Gumbo.parsehtml(highlighted_content, preserve_whitespace = true).root.children[2].children[1]
        parsed.parent = el.parent
        el.children = [parsed]
    end
end
