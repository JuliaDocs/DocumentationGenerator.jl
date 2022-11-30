if length(ARGS) == 2
    pkgdir = ARGS[1]
    makefile = ARGS[2]
else
    makefile = joinpath(pwd(), "make.jl")
    pkgdir = normpath(joinpath(pwd(), ".."))
    @info("No directory specified. Falling back to pkgdir=`$(pkgdir)` and makefile=`$(makefile)`.")
end
docsdir = dirname(makefile)

using Pkg

include(joinpath(@__DIR__, "utils", "rewrite.jl"))
try
    Pkg.instantiate()
catch err
    @error("Error while instantiating docs directory:", err)
end
try
    Pkg.develop(PackageSpec(path=pkgdir))
catch err
    @error("Error while developing parent directory $(pkgdir):", err)
end
Pkg.status()

documenter_version = v"0.24.10"
try
    manifest = joinpath(docsdir, "Manifest.toml")
    if isfile(manifest)
        pm = Pkg.TOML.parsefile(manifest)
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
    eval(expr)
end
