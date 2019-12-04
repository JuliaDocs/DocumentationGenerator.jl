using Pkg

include(joinpath(@__DIR__, "utils", "rewrite.jl"))

Pkg.develop(PackageSpec(path=joinpath(pwd(), "..")))
Pkg.instantiate()
Pkg.status()

@info(pwd())


expr, bpath = fix_makefile(joinpath(pwd(), "make.jl"))

@info(expr)

eval(expr)
