if length(ARGS) == 1
    dir = ARGS[1]
else
    @info("No directory specified. Falling back to `pwd()`.")
    dir = pwd()
end

using Pkg

include(joinpath(@__DIR__, "utils", "rewrite.jl"))

Pkg.develop(PackageSpec(path=joinpath(dir, "..")))
Pkg.instantiate()
Pkg.status()

@info(pwd())


expr, bpath = fix_makefile(joinpath(pwd(), "make.jl"))

@info(expr)

eval(expr)
