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

expr, bpath = fix_makefile(makefile)


@info("`cd`ing to `$(docsdir)`.") # so that @__DIR__ points to the right place
cd(docsdir)

@info("Evaluating the following `make` expr:")
@info(expr)

eval(expr)
