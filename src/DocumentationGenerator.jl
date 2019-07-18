module DocumentationGenerator

using Pkg
using Pkg.TOML
using Pkg.Types
using Documenter

"""
    default_docs(package, root, pkgroot)

Generates a default documentation for a package without Documenter.jl docs.
"""
function default_docs(package, root, pkgroot)
    @info("Generating default fallback docs (readme + exported methods).")
    doc_source = joinpath(root, "src")
    mkpath(doc_source)
    pages = ["Docstrings" => "autodocs.md"]
    handle_readme(pages, pkgroot, doc_source)
    pkg_sym = Symbol(package)
    @eval Module() begin
        using Pkg
        Pkg.add("Documenter")
        using Documenter
        using $pkg_sym
        open(joinpath($doc_source, "autodocs.md"), "w") do io
            println(io, """
            ```@autodocs
            Modules = [$($pkg_sym)]
            ```
            """)
        end
        makedocs(
            format = Documenter.HTML(),
            sitename = "$($package).jl",
            modules = [$pkg_sym],
            root = $root,
            pages = $(reverse(pages))
        )
    end
end

function handle_readme(pages, pkgroot, doc_source)
    for file in readdir(pkgroot)
        if occursin("readme", lowercase(file))
            readme = joinpath(pkgroot, file)
            if isfile(readme)
                newreadmepath = joinpath(doc_source, "index.md")
                rendergfm(readme, newreadmepath)
                copylocallinks(readme, newreadmepath)
                push!(pages, "Readme" => "index.md")
                break
            end
        end
    end
end

function rendergfm(file, fileout)
    try
        commonmarker = find_ruby_gem("commonmarker")
        cmd = `$(commonmarker) $(file)`
        rendered = read(cmd, String)
        open(fileout, "w") do io
            # lots of backticks so the @raw block doesn't end prematurely
            println(io, "````````````@raw html\n", rendered, "\n````````````")
        end
    catch err
        cp(file, fileout)
        @error("Rendering GFM failed. Falling back to Julia implementation.", error = err)
    end
end

"""
    readme_docs(package, root, pkgroot)

Generates README based fallback docs when the package installs but can't be loaded.
"""
function readme_docs(package, root, pkgroot)
    @info("Generating readme-only fallback docs.")
    doc_source = joinpath(root, "src")
    mkpath(doc_source)
    pages = []
    handle_readme(pages, pkgroot, doc_source)
    pkg_sym = Symbol(package)
    @eval Module() begin
        using Pkg
        Pkg.add("Documenter")
        using Documenter
        makedocs(
            format = Documenter.HTML(),
            sitename = "$($package).jl",
            modules = [Module()],
            root = $root,
            pages = $(reverse(pages))
        )
    end
end

function find_ruby_gem(gem)
    which = Sys.iswindows() ? "where" : "which"
    so = IOBuffer()
    p = run(pipeline(`$which $gem`, stdout = so), wait = false)
    # gem is on path
    success(p) && return chomp(String(take!(so)))
    so = IOBuffer()
    p = run(pipeline(`$which gem`, stdout = so), wait = false)
    if !success(p)
        @error("`gem` not found on PATH")
        return ""
    end
    gempath = chomp(String(take!(so)))

    p = run(pipeline(`$gempath environment gempath`, stdout = so), wait = false)
    if success(p)
        paths = chomp(String(take!(so)))
        paths = split(paths, Sys.iswindows() ? ';' : ':')
        for path in paths
            gempath = joinpath(path, "bin", gem)
            isfile(gempath) && return gempath
        end
    end

    if Sys.isunix()
        fallback = joinpath("/usr/local/bin", gem)
        isfile(fallback) && return fallback
    end

    return ""
end

using Markdown
"""
    copylocallinks(originalreadme, readmepath)

Copy relative link targets in the `originalreadme` such that they are reachable from `readmepath` as well.
"""
function copylocallinks(originalreadme, readmepath)
    basepath = normpath(joinpath(originalreadme, ".."))
    newbasepath = normpath(joinpath(readmepath, ".."))
    contents = String(read(readmepath))
    md = Markdown.parse(contents)
    links = []
    recurseMDcontents(md, links)
    for link in links
        occursin(r"^http\:\/\/.*", link) && continue
        isabspath(link) && continue
        isfile(joinpath(basepath, link)) || continue

        ispath(dirname(joinpath(newbasepath, link))) || mkpath(dirname(joinpath(newbasepath, link)))
        try
            cp(joinpath(basepath, link), joinpath(newbasepath, link))
        catch err
            @error("copying asset `$(link)` failed", exception=err)
        end
    end
end
function recurseMDcontents(md, links)
    isdefined(md, :content) && foreach(c -> recurseMDcontents(c, links), md.content)
end
recurseMDcontents(md::Markdown.Link, links) = push!(links, md.url)
recurseMDcontents(md::Markdown.Image, links) = push!(links, md.url)

function get_method_from_registry(pspec, registry, root)
    if isfile(registry)
        uuid = string(pspec.uuid)
        toml = Pkg.TOML.parsefile(registry)
        if haskey(toml, uuid)
            pkg = toml[uuid]
            if haskey(pkg, "method") && haskey(pkg, "location")
                return (pkg["method"], pkg["location"])
            else
                @warn("Invalid registry entry for $(pspec.name).")
            end
        else
            @info("$(pspec.name) ($(uuid)) not found in documentation registry.")
        end
    else
        @warn("No registry found. Falling back to `vendored` docs.")
    end
    return ("vendored", joinpath(root, "docs"))
end

function parseall(str)
    pos = firstindex(str)
    exs = []
    while pos <= lastindex(str)
        ex, pos = Meta.parse(str, pos)
        push!(exs, ex)
    end
    if length(exs) == 0
        throw(ParseError("end of input"))
    elseif length(exs) == 1
        return exs[1]
    else
        return Expr(:block, exs...)
    end
end

"""
Rewrites the docs/make.jl for a given package to not deploy and respect
our build folders. This respects any custom scripts needed to build the docs
while disabling deploy + putting the right args into makedocs
"""
function rewrite_makefile(makefile)
    ast = parseall(read(makefile, String))
    make_expr = Expr(:block)
    push!(make_expr.args, :(using Pkg))
    buildpath = joinpath(dirname(makefile), "build")
    for elem in ast.args
        # skip deply(...) - we don't want to deploy
        Meta.isexpr(elem, :call) && elem.args[1] == :deploydocs && continue
        if Meta.isexpr(elem, :call) && elem.args[1] == :makedocs
            # rewrite makedoc call to respect our requirements
            new_args = []
            for argument in elem.args
                if Meta.isexpr(argument, :kw)
                    name, arg = argument.args
                    # assure that we generate HTML
                    if name == :format
                        html = :(Documenter.HTML())
                        if Meta.isexpr(arg, :call) && arg.args[1] == :(Documenter.HTML)
                            append!(html.args, arg.args[2:end])
                        end
                        argument.args[2] = html
                    end
                    # filter out root + build dir
                    if name == :build
                        # if there is a custom build folder, record it!
                        cd(dirname(makefile)) do
                            buildpath = abspath(arg)
                        end
                    end
                end
                push!(new_args, argument)
            end
            push!(new_args,
                Expr(:kw, :root, dirname(makefile)),
            )
            elem = Expr(:call, new_args...)
        end
        # Pkg.add packages required by package build script
        if Meta.isexpr(elem, :using)
            pkgs = Symbol[]
            for arg in elem.args
                if Meta.isexpr(arg, :.) && length(arg.args) == 1
                    push!(pkgs, arg.args[1])
                end
            end
            push!(make_expr.args, Expr(:call, :(Pkg.add), [string.(pkgs)...]))
        end

        push!(make_expr.args, elem)
    end
    return make_expr, buildpath
end

struct PkgNoWork <: Exception
    name::String
end

function install_and_use(pspec)
    # add dependencies as well? will be trivial with a package containing Project.toml
    try
        Pkg.add(pspec)
    catch e
        @warn("Pkg build failed for ", pspec, " due to ", e)
    end
    pkg_sym = Symbol(pspec.name)

    # needs to be main, because documenter wants to have the symbol in main -.-
    pkg_module = try
        @eval(Main, (using $pkg_sym; $pkg_sym))
    catch e
        @warn("Could not load `$pkg_sym`.")
        nothing
    end
    pkgdir = Base.find_package(pspec.name)
    if pkgdir == nothing
       throw(PkgNoWork("Package not added"))
    end
    return pkg_module, normpath(joinpath(dirname(Base.find_package(pspec.name)), ".."))
end

function readstr_buffer(x::IOStream)
    return read(x, String)
end

function readstr_buffer(x::Base.GenericIOBuffer{Array{UInt8,1}})
    return String(take!(x))
end

"""
    run_with_timeout(
        command; log=stdout, timeout = 5*60, name = "",
        wait_time = 1, verbose = true
    )

Runs `command` and pipes all output to `log`. The process will be terminated after
`timeout` seconds without any output. `name` describes the process in log messages,
and `verbose` determines whether meta-logs ("process started" etc.) will be printed.
"""
function run_with_timeout(
        command; log=stdout, timeout = 5*60, name = "",
        wait_time = 1, verbose = true, kill_timeout = 60
)

    out_io = IOBuffer()
    err_io = IOBuffer()
    out_file, err_file = "", ""
    if VERSION < v"1.1"
        out_file, out_io = mktemp()
        err_file, err_io = mktemp()
    end
    pipe = pipeline(command, stdout = out_io, stderr = err_io)
    process = run(pipe, wait = false)
    if VERSION < v"1.1"
        out_io = open(out_file)
        err_io = open(err_file)
    end
    timeout_start = time()
    task = @async begin
        logfallback = false
        io = try
            log isa String ? open(log, "w") : log
        catch err
            @error "Error opening logfile, falling back to stdout" error=err
            logfallback = true
            stdout
        end
        try
            tstart = time()
            verbose && @info("starting $name")
            while process_running(process)
                elapsed = (time() - timeout_start)
                if elapsed > timeout
                    verbose && @info("Terminating $name")
                    kill(process)
                    # Handle scenarios where SIGTERM is blocked/ignored/handled by the process
                    start_time = time()
                    while process_running(process)
                        if time() - start_time > kill_timeout
                            verbose && @info("Killing $name")
                            kill(process, signum = SIGKILL)
                        end
                        sleep(5)
                    end
                    break
                end
                errstr, outstr = readstr_buffer.((out_io, err_io))
                is_silent = length(errstr) == 0 && length(outstr) == 0
                isempty(outstr) || println(io, outstr)
                isempty(errstr) || println(io, errstr)

                # if something printed reset timeout
                if !is_silent
                    timeout_start = time()
                end

                sleep(wait_time)
            end

            verbose && @info("$name completed in $(round(time() - tstart, digits=1)) seconds")
        catch err
            @error "Error while running $(name) with timeout." error=err
        finally
            errstr, outstr = readstr_buffer.((out_io, err_io))
            isempty(outstr) || println(io, outstr)
            isempty(errstr) || println(io, errstr)

            flush(io)
            if log isa String && !logfallback
                close(io)
            end
        end
    end
    return process, task
end

"""
    installable_on_version(version = VERSION; registry=joinpath(homedir(), ".julia/registries/General"))

Returns a vector of named tuples `(name, url, versions)` of packages in `registry`
compatible with Julia version `version`.
"""
function installable_on_version(version = VERSION; registry=joinpath(homedir(), ".julia/registries/General"))
    allpkgs = []
    for initial in filter!(isdir, joinpath.(registry, readdir(registry)))
        for pkg in filter!(isdir, joinpath.(registry, initial, readdir(initial)))
            "Compat.toml" in readdir(pkg) || continue
            pkgtoml = Pkg.TOML.parsefile(joinpath(pkg, "Package.toml"))
            versions = Pkg.TOML.parsefile(joinpath(pkg, "Versions.toml"))
            compat = Pkg.TOML.parsefile(joinpath(pkg, "Compat.toml"))
            for pkgver in keys(compat)
                try
                    if haskey(compat[pkgver], "julia")
                        if any(in.(version, Pkg.Types.VersionRange.(compat[pkgver]["julia"])))
                            push!(allpkgs,
                                (
                                    name = pkgtoml["name"],
                                    url = pkgtoml["repo"],
                                    versions = [
                                                VersionNumber(v) for v in keys(versions) if
                                                    VersionNumber(v) in VersionRange(pkgver)
                                               ]
                                )
                            )
                        end
                    end
                catch err
                    @error err
                end
            end
        end
    end
    allpkgs
end

const DOCS_REGISTRY = "https://github.com/JuliaDocs/DocumentationGeneratorRegistry.git"
function download_registry(basepath; sync = true)
    tomlpath = joinpath(basepath, "DocumentationGeneratorRegistry", "Registry.toml")
    if sync
        try
            rm(joinpath(basepath, "DocumentationGeneratorRegistry"), force = true, recursive = true)
            cd(basepath)
            run(`git clone --depth=1 $DOCS_REGISTRY DocumentationGeneratorRegistry`)
            @assert isfile(tomlpath)
            return tomlpath
        catch err
            @warn("Couldn't download docs registry.", exception = err)
        end
    else
        if isfile(tomlpath)
            return tomlpath
        else
            @warn("No registry found at `$(tomlpath)`. Cloning again.")
            return download_registry(basepath; sync = true)
        end
    end
    return ""
end

get_docs_dir(name, uuid) = get_docs_dir(name, UUID(uuid))
get_docs_dir(name, uuid::UUID) = joinpath(name, Base.package_slug(uuid, 5))

"""
    build_documentation(name, url, version; basepath=joinpath(@__DIR__, ".."))

Asynchronously build documentation for package `name`@`version` at `url` and
save the HTML docs to `\$basepath/build` with logs in `\$basepath/logs`.

Note that this will overwrite previous builds/logs.
"""
function build_documentation(uuid, name, url, version;
                             basepath = joinpath(@__DIR__, ".."),
                             envpath = normpath(joinpath(@__DIR__, "..")),
                             juliacmd = first(Base.julia_cmd()),
                             registry_path = "",
                             deployment_url = "")
    workerfile = joinpath(@__DIR__, "worker_work.jl")
    buildpath = joinpath(basepath, "build")
    logpath = joinpath(basepath, "logs")

    isdir(buildpath) || mkpath(buildpath)
    isdir(logpath) || mkpath(logpath)

    builddir = joinpath(buildpath, get_docs_dir(name, uuid), string(version))
    isdir(builddir) || mkpath(builddir)
    logfile = joinpath(logpath, "$(name)-$(uuid) $version.log")
    cmd = `$(juliacmd) --project=$(envpath) --color=no --compiled-modules=no -O0 $workerfile $uuid $name $url $version $builddir $registry_path $deployment_url`
    process, task = run_with_timeout(cmd, log=logfile, name = string("docs build for package ", name, " (", uuid, ")"))
    return process
end

get_uuids(pkg_name::String) = Pkg.Types.registered_uuids(Pkg.Types.Context().env, pkg_name)

function build_documentations(
        packages;
        processes::Int = 8, sleeptime = 0.5,
        juliacmd = first(Base.julia_cmd()),
        basepath = joinpath(@__DIR__, ".."),
        envpath = normpath(joinpath(@__DIR__, "..")),
        filter_versions = last,
        sync_registry = true,
        deployment_url = "pkg.julialang.org/docs"
    )
    regpath = download_registry(basepath, sync = sync_registry)

    process_queue = []
    for package in packages
        uuid = get(package, :uuid, nothing)
        if uuid == nothing
            uuids = get_uuids(package.name)
            length(uuids) > 1 && (@error "Package $(name) has multiple uuids", uuids)
            uuid = uuids[1]
        end
        #those somehow get stuck - might be random
        while length(process_queue) >= processes
            filter!(process_running, process_queue)
            sleep(sleeptime)
        end
        process = nothing
        if !haskey(package, :latest_docs_version)
            for version in vcat(filter_versions(sort(package.versions, rev=true)))
                process = build_documentation(uuid, package.name, package.url, version, envpath = envpath,
                                                    basepath = basepath, juliacmd = juliacmd,
                                                    registry_path = regpath, deployment_url = deployment_url)
                push!(process_queue, process)
            end
        else
            process = build_documentation(uuid, package.name, package.repo, package.latest_docs_version,
                                                envpath = envpath, basepath = basepath, juliacmd = juliacmd,
                                                registry_path = regpath, deployment_url = deployment_url)
            push!(process_queue, process)
        end
    end
    for proc in process_queue
        wait(proc)
    end
end

end
