let anonymous_module = Module()
    @eval anonymous_module begin
        import Pkg, TOML
    end
    Base.include(anonymous_module, joinpath(@__DIR__, "utils", "rewrite.jl"))
    @eval anonymous_module begin
        function main(args)
            if length(args) == 2
                pkgdir = args[1]
                makefile = args[2]
            else
                makefile = joinpath(pwd(), "make.jl")
                pkgdir = normpath(joinpath(pwd(), ".."))
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

            documenter_version = v"0.24.10"
            try
                manifest = joinpath(docsdir, "Manifest.toml")
                if isfile(manifest)
                    pm = TOML.parsefile(manifest)
                    global documenter_version = VersionNumber(first(pm["Documenter"])["version"])
                else
                    @warn("No Mainfest.toml found at `$(manifest)`. Defaulting to $(documenter_version).")
                end
            catch err
                @error(exception = err)
            end

            @info("Detected Documenter version $(documenter_version).")

            expr, bpath = fix_makefile(makefile, documenter_version)

            @info("`cd`ing to `$(docsdir)` and setting `tls[:SOURCE_PATH]` to `$(makefile)`.")
            task_local_storage()[:SOURCE_PATH] = makefile
            cd(docsdir) do
                @info("Evaluating the following `make` expr:")
                @info(expr)
                Base.eval(Main, expr)
            end
        end
    end
    anonymous_module.main(ARGS)
end
