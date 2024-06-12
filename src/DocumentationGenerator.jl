module DocumentationGenerator
using Pkg
using JSON, Downloads
include("utils/misc.jl")
include("utils/pkgtools.jl")
include("utils/runners.jl")
include("builders.jl")
include("metadata.jl")
include("registry.jl")

## when job doesn't log anything to stdout
const RUNNER_TIMEOUT = 60*60
## maxtime a job is allowed to run
const RUNNER_MAX_TIMEOUT = 3*60*60
## graceful termination timeout
const RUNNER_KILL_TIMEOUT = 60


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

function build_package_docs(packagespec::Pkg.Types.PackageSpec, buildpath, registry; src_prefix="", href_prefix="")
    type, uri = doctype(packagespec, registry)

    @info("$(packagespec.name) specifies docs of type $(type).")
    out = try
        if type == "hosted"
            build_hosted_docs(packagespec, buildpath, uri)
        elseif type == "git-repo"
            build_git_docs(packagespec, buildpath, uri; src_prefix=src_prefix, href_prefix=href_prefix)
        elseif type == "vendored"
            build_local_docs(packagespec, buildpath, uri; src_prefix=src_prefix, href_prefix=href_prefix)
        elseif type == "vendored-no-load"
            build_local_docs(packagespec, buildpath, uri; src_prefix=src_prefix, href_prefix=href_prefix, load_package=false)
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
        registry = joinpath(homedir(), ".julia/registries/General"),
        timeout = RUNNER_TIMEOUT,
        max_timeout = RUNNER_MAX_TIMEOUT,
        kill_timeout = RUNNER_KILL_TIMEOUT
    )

    has_xvfb = try
        success(`xvfb-run --help`)
    catch err
        @warn("No `xvfb` installed. Running without it.")
        false
    end

    regpath = get_registry(basepath; sync = sync_registry)
    process_queue = []

    # make sure registry is updated *before* we start multiple processes that might try that at the same time
    Pkg.Registry.update()


    envmod = []

    local x_server_proc
    if has_xvfb
        display_server = string(':', find_free_x_servernum())

        @info("Running Xvfb on display $(display_server).")

        x_server_proc = run(`Xvfb $(display_server)`, wait=false)
        envmod = ["DISPLAY" => display_server]
    end

    withenv(envmod...) do
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
                                           update_only = update_only,
                                           timeout = timeout,
                                           max_timeout = max_timeout,
                                           kill_timeout = kill_timeout)
                    push!(process_queue, proc)
                end
        end

        # wait for all queued processes to finish
        for proc in process_queue
            wait(proc)
        end
    end

    if has_xvfb
        kill(x_server_proc)
    end

    # record dependency relations specified in registry
    generate_dependency_list(packages, basepath = basepath, registry = registry, filter_versions = filter_versions)
end

function http_get_request(url)
    output = IOBuffer()
    response = Downloads.request(url, output = output, method = "GET")
    return (response, String(take!(output)))
end

function get_pkg_eval_data()
    pkg_eval = Dict()
    latest_date = ""

    resp, bodystring = try
        http_get_request("https://raw.githubusercontent.com/JuliaCI/NanosoldierReports/master/pkgeval/by_date/latest")
    catch ex
        @warn "Failed to fetch latest Nanosoldier report" ex
        return pkg_eval, latest_date
    end

    if resp.status == 200
        latest_date = bodystring
        if occursin(r"\d{4}\-\d{2}/\d{2}", latest_date)
            last_db_url = "https://raw.githubusercontent.com/JuliaCI/NanosoldierReports/master/pkgeval/by_date/$(latest_date)/db.json"
            resp, body_string = try
                 http_get_request(last_db_url)
            catch ex
                @warn "Failed to fetch Nanosoldier report" ex
                nothing, ""
            end
            if resp !== nothing && resp.status == 200
                pkg_eval = JSON.parse(body_string)
            end
        end
    end

    return pkg_eval, latest_date
end

function generate_dependency_list(packages;
        basepath = joinpath(@__DIR__, ".."),
        registry = joinpath(homedir(), ".julia/registries/General"),
        filter_versions = last
    )
    @info "Generating deps info"
    pkg_eval_data, pkg_eval_fetch_date = get_pkg_eval_data()
    deps = dependencies_per_package(registry)
    rdeps = reverse_dependencies_per_package(deps)
    for package in packages
        for version in vcat(filter_versions(package.versions))
            try
                builddir = joinpath(basepath, "build", get_docs_dir(package.name, package.uuid), string(version))
                metatoml = joinpath(builddir, "meta.toml")
                isfile(metatoml) || continue

                meta = Pkg.TOML.parsefile(metatoml)

                ## older db.json formats were indexed by package UUID but new ones use name
                pkgeval = if haskey(pkg_eval_data, "tests")
                    if haskey(pkg_eval_data["tests"], package.uuid)
                        pkg_eval_data["tests"][package.uuid]
                    elseif haskey(pkg_eval_data["tests"], package.name)
                        pkg_eval_data["tests"][package.name]
                    else
                        Dict()
                    end
                else
                    Dict()
                end

                if !isempty(pkgeval)
                    meta["pkgeval"] = pkgeval
                    if pkg_eval_fetch_date != ""
                        meta["pkgeval"]["report_url"] = "https://github.com/JuliaCI/NanosoldierReports/blob/master/pkgeval/by_date/$(pkg_eval_fetch_date)/report.md"
                        meta["pkgeval"]["log_url"] = "https://s3.amazonaws.com/julialang-reports/nanosoldier/pkgeval/by_date/$(pkg_eval_fetch_date)/$(meta["name"]).primary.log"
                    end
                end
                meta["deps"] = collect(alldeps(package.uuid, string(version), deps))
                meta["reversedeps"] = collect(allreversedeps(package.uuid, string(version), rdeps))
                open(metatoml, "w") do io
                    if VERSION < v"1.6"
                        Pkg.TOML.print(io, meta)
                    else
                        Pkg.TOML.print(x -> string(x), io, meta)
                    end
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

function with_juliaenv(func, temp_path=tempname())
    current_project = Base.active_project()
    Pkg.activate(temp_path)
    try
        func()
    catch ex
        rethrow()
    finally
        Pkg.activate(current_project)
    end
end

function start_builder(package, version;
        basepath = error("`basepath` is a required argument."),
        juliacmd = error("`juliacmd` is a required argument."),
        registry_path = error("`registry_path` is a required argument."),
        deployment_url = error("`deployment_url` is a required argument."),
        update_only = error("`update_only` is a required argument."),
        src_prefix = nothing,
        href_prefix = nothing,
        timeout = RUNNER_TIMEOUT,
        max_timeout = RUNNER_MAX_TIMEOUT,
        kill_timeout = RUNNER_KILL_TIMEOUT,
    )

    workerfile = joinpath(@__DIR__, "workerfile.jl")
    buildpath = joinpath(basepath, "build")
    logpath = joinpath(basepath, "logs")

    isdir(buildpath) || mkpath(buildpath)
    isdir(logpath) || mkpath(logpath)

    name = package.name
    uuid = package.uuid
    url = package.url
    server_type = package.server_type
    api_url = package.api_url
    src_prefix  = haskey(package, :src_prefix) ? package.src_prefix : string("/docs/", get_docs_dir(name, uuid), '/', string(version), "/_packagesource/")
    href_prefix = haskey(package, :href_prefix) ? package.href_prefix : string("/ui/Code/docs/", get_docs_dir(name, uuid), '/', string(version), "/_packagesource/")

    builddir = joinpath(buildpath, get_docs_dir(name, uuid), string(version))
    isdir(builddir) || mkpath(builddir)

    logfile = joinpath(builddir, "..", "$(version).log")
    docgen_path = dirname(dirname(Base.find_package("DocumentationGenerator")))
    with_juliaenv() do
        Pkg.develop(path=docgen_path)
        Pkg.add("Pkg")
        ## api_url needs to be set to "-", since empty string should not be passed as CLI argument
        pkgimagesopt = VERSION >= v"1.9" ? "--pkgimages=no" : ""
        cmd = ```
            $(juliacmd)
                --project=$(Base.active_project())
                --color=no
                --compiled-modules=no
                $(isempty(pkgimagesopt) ? [] : pkgimagesopt)
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
                $(server_type)
                $(isempty(api_url) ? "-" : api_url)
                $(update_only ? "update" : "build")

        ```
        process, task = run_with_timeout(cmd,
                                         log=logfile,
                                         name = string("docs build for ", name, "@", version, " (", uuid, ")"),
                                         timeout = timeout,
                                         max_timeout = max_timeout,
                                         kill_timeout = kill_timeout)
       return process
    end
end
end
