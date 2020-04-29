module DocumentationGenerator
using Pkg
using JSON

include("utils/markdown.jl")
include("utils/misc.jl")
include("utils/pkgtools.jl")
include("utils/runners.jl")
include("utils/license.jl")
include("builders.jl")
include("metadata.jl")
include("registry.jl")

function try_install_package(packagespec, envdir)
    @assert ispath(envdir)
    success = false
    try
        Pkg.activate(envdir)
        Pkg.add(packagespec)
        success = true
    catch err
        @error("Could not `Pkg.add($(packagespec))`.", exception=err)
    end
    return success
end

function try_use_package(packagespec)
    pkg_sym = Symbol(packagespec.name)

    pkg_module = try
        @eval(Main, (using $pkg_sym; $pkg_sym))
    catch err
        @error("`using $(pkg_sym) did not succeed.`", exception=err)
        nothing
    end

    return pkg_module
end

function build_package_docs(packagespec::Pkg.Types.PackageSpec, buildpath, registry)
    type, uri = doctype(packagespec, registry)

    @info("$(packagespec.name) specifies docs of type $(type).")
    out = try
        if type == "hosted"
            build_hosted_docs(packagespec, buildpath, uri)
        elseif type == "git-repo"
            build_git_docs(packagespec, buildpath, uri)
        elseif type == "vendored"
            build_local_docs(packagespec, buildpath, uri)
        else
            @error("Invalid doctype specified: $(type).")
            Dict(
                "success" => false
            )
        end
    catch err
        @error("Error while generating docs.", exception=(err, catch_backtrace()))
        Dict(
            "success" => false
        )
    end

    return out
end

function build_documentation(
        packages;
        processes::Int = 8,
        sleeptime = 0.5,
        juliacmd = first(Base.julia_cmd()),
        basepath = joinpath(@__DIR__, ".."),
        envpath = normpath(joinpath(@__DIR__, "..")),
        filter_versions = last,
        sync_registry = true,
        deployment_url = "pkg.julialang.org/docs",
        update_only = false,
        registry = joinpath(homedir(), ".julia/registries/General")
    )

    regpath = get_registry(basepath, sync = sync_registry)
    process_queue = []

    # make sure registry is updated *before* we start multiple processes that might try that at the same time
    Pkg.Registry.update()

    for package in packages
            # make sure we're not queueing new processes over the limit
            while length(process_queue) >= processes
                filter!(process_running, process_queue)
                sleep(sleeptime)
            end

            # separate process for each version of a package
            for version in vcat(filter_versions(package.versions))
                proc = start_builder(package, version;
                                       basepath = basepath,
                                       juliacmd = juliacmd,
                                       registry_path = regpath,
                                       deployment_url = deployment_url,
                                       update_only = update_only)
                push!(process_queue, proc)
            end
    end

    # wait for all queued processes to finish
    for proc in process_queue
        wait(proc)
    end

    # record dependency relations specified in registry
    @info "Generating deps info"
    deps = dependencies_per_package(registry)
    rdeps = reverse_dependencies_per_package(deps)
    for package in packages
        for version in vcat(filter_versions(package.versions))
            try
                builddir = joinpath(basepath, "build", get_docs_dir(package.name, package.uuid), string(version))
                metatoml = joinpath(builddir, "meta.toml")
                isfile(metatoml) || continue

                meta = Pkg.TOML.parsefile(metatoml)
                meta["deps"] = collect(alldeps(package.uuid, string(version), deps))
                meta["reversedeps"] = collect(allreversedeps(package.uuid, string(version), rdeps))
                open(metatoml, "w") do io
                    Pkg.TOML.print(io, meta)
                end
                open(joinpath(builddir, "pkg.json"), "w") do f
                    readme = joinpath(builddir, "_readme", "readme.html")
                    isfile(readme) && (meta["readme"] = read(readme, String))
                    print(f, JSON.json(meta))
                end
            catch err
                @error(exception=(err, catch_backtrace()))
            end
        end
    end
end

function start_builder(package, version;
        basepath = error("`basepath` is a required argument."),
        juliacmd = error("`juliacmd` is a required argument."),
        registry_path = error("`registry_path` is a required argument."),
        deployment_url = error("`deployment_url` is a required argument."),
        update_only = error("`update_only` is a required argument."),
        src_prefix = nothing,
        href_prefix = nothing
    )

    workerfile = joinpath(@__DIR__, "workerfile.jl")
    buildpath = joinpath(basepath, "build")
    logpath = joinpath(basepath, "logs")

    isdir(buildpath) || mkpath(buildpath)
    isdir(logpath) || mkpath(logpath)

    name = package.name
    uuid = package.uuid
    url = package.url
    src_prefix  = hasfield(package, :src_prefix) ? package.src_prefix : string("/docs/", get_docs_dir(name, uuid), '/', string(version), '/')
    href_prefix = hasfield(package, :href_prefix) ? package.href_prefix : string("/ui/Code/docs/", get_docs_dir(name, uuid), '/', string(version), '/')

    builddir = joinpath(buildpath, get_docs_dir(name, uuid), string(version))
    isdir(builddir) || mkpath(builddir)


    logfile = joinpath(builddir, "..", "$(version).log")

    thisproject = Base.active_project()

    cmd = ```
        $(juliacmd)
            --project="$(thisproject)"
            --color=no
            --compiled-modules=no
            -O0
            $workerfile
            $uuid
            $name
            $url
            $version
            $builddir
            $registry_path
            $deployment_url
            $src_prefix
            $href_prefix
            $(update_only ? "update" : "build")
    ```

    process, task = run_with_timeout(cmd, log=logfile, name = string("docs build for ", name, "@", version, " (", uuid, ")"))

    return process
end
end
