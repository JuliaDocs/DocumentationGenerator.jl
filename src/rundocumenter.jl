let anonymous_module = Module()
    @eval anonymous_module begin
        import Pkg, TOML
    end
    Base.include(anonymous_module, joinpath(@__DIR__, "utils", "rewrite.jl"))
    @eval anonymous_module begin
        function main(args)
            if length(args) == 3
                pkgdir = args[1]
                makefile = args[2]
                html_size_threshold_bytes = args[3] == "-" ? nothing : tryparse(Int, args[3])
            else
                makefile = joinpath(pwd(), "make.jl")
                pkgdir = normpath(joinpath(pwd(), ".."))
                html_size_threshold_bytes = nothing
                @info("No directory specified. Falling back to pkgdir=`$(pkgdir)` and makefile=`$(makefile)`.")
            end
            docsdir = dirname(makefile)

            try
                Pkg.instantiate()
            catch err
                @error("Error while instantiating docs directory:", err)
            end
            try
                Pkg.develop(Pkg.PackageSpec(path=pkgdir))
            catch err
                @error("Error while developing parent directory $(pkgdir):", err)
            end
            Pkg.status()

            documenter_version = v"1.8.1"
            try
                manifest = joinpath(docsdir, "Manifest.toml")
                if isfile(manifest)
                    pm = TOML.parsefile(manifest)
                    if VersionNumber(get(pm, "manifest_format", "1.0")) > v"1"
                        deps = pm["deps"]
                    else
                        deps = pm
                    end
                    if haskey(deps, "Documenter")
                        documenter_version = VersionNumber(first(deps["Documenter"])["version"])
                    else
                        @warn("Documenter not found in `$(manifest). Defaulting to $(documenter_version).")
                    end
                else
                    @warn("No Mainfest.toml found at `$(manifest)`. Defaulting to $(documenter_version).")
                end
            catch err
                @error(exception = err)
            end

            @info("Using Documenter version $(documenter_version).")

            expr, bpath = fix_makefile(makefile, documenter_version; html_size_threshold_bytes)

            @info("`cd`ing to `$(docsdir)` and setting `tls[:SOURCE_PATH]` to `$(makefile)`.")
            task_local_storage()[:SOURCE_PATH] = makefile
            cd(docsdir) do
                @info("Evaluating the following `make` expr:")
                println(stderr, "\n------------------\n", expr, "\n------------------\n")
                Base.eval(Main, expr)
            end
        end
    end
    anonymous_module.main(ARGS)
end
