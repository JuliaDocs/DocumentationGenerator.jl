if length(ARGS) == 2
    pkgdir = ARGS[1]
    docsdir = ARGS[2]
else
    docsdir = pwd()
    pkgdir = normpath(joinpath(pwd(), ".."))
    @info("No directory specified. Falling back to `$(pkgdir)`/`$(docsdir)`.")
end

using Pkg

include(joinpath(@__DIR__, "utils", "rewrite.jl"))


@info("Developing $(pkgdir):")
Pkg.develop(PackageSpec(path=pkgdir))
@info("Instantiating:")
Pkg.instantiate()
Pkg.status()

expr, bpath = fix_makefile(joinpath(docsdir, "make.jl"))

@info("Evaluating the following `make` expr:")
@info(expr)

eval(expr)
