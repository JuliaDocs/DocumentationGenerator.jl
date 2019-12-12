module DocumentationGenerator
using Pkg

include("utils/markdown.jl")
include("utils/misc.jl")
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
    out = if type == "hosted"
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
        update_only = false
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
end

function start_builder(package, version;
        basepath = error("`basepath` is a required argument."),
        juliacmd = error("`juliacmd` is a required argument."),
        registry_path = error("`registry_path` is a required argument."),
        deployment_url = error("`deployment_url` is a required argument."),
        update_only = error("`update_only` is a required argument.")
    )

    workerfile = joinpath(@__DIR__, "workerfile.jl")
    buildpath = joinpath(basepath, "build")
    logpath = joinpath(basepath, "logs")

    isdir(buildpath) || mkpath(buildpath)
    isdir(logpath) || mkpath(logpath)

    name = package.name
    uuid = package.uuid
    url = package.url

    builddir = joinpath(buildpath, get_docs_dir(name, uuid), string(version))
    isdir(builddir) || mkpath(builddir)

    logfile = joinpath(logpath, "$(name)-$(uuid)-$(version).log")

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
            $(update_only ? "update" : "build")
    ```

    process, task = run_with_timeout(cmd, log=logfile, name = string("docs build for ", name, "@", version, " (", uuid, ")"))

    return process
end
end
