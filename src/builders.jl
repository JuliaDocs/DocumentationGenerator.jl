function build_git_docs(packagespec, buildpath, uri)
    pkgname = packagespec.name
    return mktempdir() do dir
        return cd(dir) do
            run(`git clone --depth=1 $(uri) $(pkgname)`)
            docsproject = joinpath(dir, pkgname)
            return cd(docsproject) do
                return build_local_docs(packagespec, buildpath, nothing, docsproject, gitdirdocs = true)
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
        download(string(uri, "/search_index.js"), joinpath(buildpath, "search_index.js"))
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
    docspage = download(uri)
    docspage = read(docspage, String)

    try
        doc = Gumbo.parsehtml(docspage)
        for el in PreOrderDFS(doc.root)
            if el isa HTMLElement && Gumbo.tag(el) == :meta && "content" in keys(Gumbo.attrs(el))
                content = getattr(el, "content")
                m = match(r"\d+;\s*url\=(.*)$", content)

                if m !== nothing
                    @info("Found redirect from `$(uri)` to `$(m[1])`.")
                    return m[1]
                end
            end
        end
    catch err
        @error("Failed to determine if there's a redirect in `$(uri)`.", err=err)
    end
    return uri
end

function build_local_docs(packagespec, buildpath, uri, pkgroot = nothing; gitdirdocs = false)
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
        mod = try_use_package(packagespec)

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
                            "using_failed" => mod ≠ nothing,
                            "success" => true
                        )
                    else
                        @error("Errored while trying to generate Documenter docs at $(docdir).")
                        documenter_errored = true
                    end
                end
            end
        catch err
            @error("Errored while trying to generate Documenter docs at $(docdir).", exception = (err, catch_backtrace()))
            documenter_errored = true
        end

        documenter_errored && @warn("Building vendored Documenter docs failed.")
        @info("Building fallback documentation.")

        # fallback docs (readme & docstrings)
        return mktempdir() do docsdir
            output = build_readme_docs(pkgname, pkgroot, docsdir, mod)
            if output !== nothing
                cp(output, buildpath, force = true)
                return Dict(
                    "doctype" => "fallback_autodocs",
                    "documenter_errored" => documenter_errored,
                    "installable" => true,
                    "using_failed" => mod ≠ nothing,
                    "success" => true
                )
            end
            return Dict(
                "doctype" => "fallback_autodocs",
                "documenter_errored" => documenter_errored,
                "installable" => true,
                "using_failed" => mod ≠ nothing,
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

        cmd = ```
            $(first(Base.julia_cmd()))
                --project="$(docdir)"
                --compiled-modules=no
                -O0
                $(rundcocumenter)
                $(pkgdir)
                $(makefile)
            ```

        try
            run(cmd)

            return builddir
        catch err
            @error("Failed to evaluate specified make.jl-file.", exception=err)
            return nothing
        end
    end
end

function build_readme_docs(pkgname, pkgroot, docsdir, mod)
    @info("Generating readme-only fallback docs.")

    if pkgroot === nothing || !ispath(pkgroot)
        @error("Julia could not find the package directory. Aborting.")
        return
    end

    pkgloads = mod !== nothing

    readme = find_readme(pkgroot)
    doc_src = joinpath(docsdir, "src")
    mkpath(doc_src)
    index = joinpath(doc_src, "index.md")
    preprocess_readme(readme, index)

    pages = ["Readme" => "index.md"]
    modules = :(Module[Module()])

    if pkgloads
        @info("Deploying `autodocs`.")
        add_autodocs(doc_src, mod)
        push!(pages, "Docstrings" => "autodocs.md")
        modules = :(Module[$mod])
    end

    @eval Module() begin
        using Pkg
        Pkg.add("Documenter")
        using Documenter
        makedocs(
            format = Documenter.HTML(),
            sitename = "$($pkgname).jl",
            modules = $(modules),
            root = $(docsdir),
            pages = $(pages)
        )
    end

    build_dir = joinpath(docsdir, "build")
    if ispath(build_dir)
        return build_dir
    end
    return nothing
end

function find_readme(pkgroot)
    for file in readdir(pkgroot)
        if occursin("readme", lowercase(file))
            readme = joinpath(pkgroot, file)
            if isfile(readme)
                return readme
            end
        end
    end
end

function preprocess_readme(readme, output_path; documenter = true)
    # GFM compatible rendering:
    rendergfm(readme, output_path; documenter = documenter)
    # copy local assets
    copylocallinks(readme, output_path)
end

function add_autodocs(docsdir, mod)
    open(joinpath(docsdir, "autodocs.md"), "w") do io
        println(io, """
        ```@autodocs
        Modules = [$(Symbol(mod))]
        ```
        """)
    end
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
                download("https://github.com/JuliaLang/julia/releases/download/v$(packagespec.version)/julia-$(packagespec.version).tar.gz", joinpath(envdir, string(packagespec.uuid)*".tar.gz"))
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

function render_readme_html(pkgroot, buildpath)
    outpath = joinpath(buildpath, "_readme")
    try
        readme = find_readme(pkgroot)

        mkpath(outpath)
        readmehtml = joinpath(outpath, "readme.html")
        @info("Rendering readme to HTML.")
        preprocess_readme(readme, readmehtml; documenter = false)
        @info("Done rendering readme to HTML.")

        return outpath
    catch err
        @error("Error trying to copy package source.", exception=err)
    end
end
