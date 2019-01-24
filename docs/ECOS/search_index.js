var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ECOS.jl-1",
    "page": "Readme",
    "title": "ECOS.jl",
    "category": "section",
    "text": "PackageEvaluator Build Status\n[![][pkg-0.5-img]][pkg-0.5-url] [![Build Status][build-img]][build-url] [![Build Status][winbuild-img]][winbuild-url]\n[![][pkg-0.6-img]][pkg-0.6-url] [![Coveralls branch][coveralls-img]][coveralls-url] [![Codecov branch][codecov-img]][codecov-url]Julia wrapper for the ECOS embeddable conic optimization interior point solver."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You can install ECOS.jl through the Julia package manager:julia> Pkg.add(\"ECOS\")ECOS.jl will automatically install and setup the ECOS solver itself using BinaryProvider.jl."
},

{
    "location": "#Custom-Installation-1",
    "page": "Readme",
    "title": "Custom Installation",
    "category": "section",
    "text": "After ECOS.jl is installed and built, you can replace the installed binary dependencies with custom builds by overwritting the binaries and libraries in ECOS.jl\'s deps/usr folder (e.g. in Julia v0.6 $HOME/.julia/v0.6/ECOS/deps/usr).Note that the custom binaries will not be overwritten by subsequent builds of the currently installed version of ECOS.jl. However, if ECOS.jl is updated and the update includes new BinaryProvider versions of the ECOS binaries, then the custom binaries will be overwritten by the new BinaryProvider versions."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The ECOS interface is completely wrapped. ECOS functions corresponding to the C API are available as ECOS.setup, ECOS.solve, ECOS.cleanup, and ECOS.ver (these are not exported from the module). Function arguments are extensively documented in the source, and an example of usage can be found in test/direct.jl.ECOS.jl also supports the [JuliaOpt] [MathProgBase] standard solver interface. Thanks to this support ECOS can be used as a solver with both the [JuMP] and [Convex.jl] modeling languages.All ECOS solver options can be set through the direct interface and through MathProgBase. The list of options is defined the ecos.h header, which we reproduce here:gamma          # scaling the final step length\ndelta          # regularization parameter\neps            # regularization threshold\nfeastol        # primal/dual infeasibility tolerance\nabstol         # absolute tolerance on duality gap\nreltol         # relative tolerance on duality gap\nfeastol_inacc  # primal/dual infeasibility relaxed tolerance\nabstol_inacc   # absolute relaxed tolerance on duality gap\nreltol_inacc   # relative relaxed tolerance on duality gap\nnitref         # number of iterative refinement steps\nmaxit          # maximum number of iterations\nverbose        # verbosity bool for PRINTLEVEL < 3To use these settings you can either pass them as keyword arguments to setup (direct interface) or as arguments to the ECOSSolver constructor (MathProgBase interface), e.g.# Direct\nmy_prob = ECOS.setup(n, m, ..., c, h, b; maxit=10, feastol=1e-5)\n# MathProgBase (with JuMP)\nm = Model(solver=ECOS.ECOSSolver(maxit=10, feastol=1e-5))"
},

{
    "location": "#JuMP-example-1",
    "page": "Readme",
    "title": "JuMP example",
    "category": "section",
    "text": "This example shows how we can model a simple knapsack problem with JuMP and use ECOS to solve it.using JuMP\nusing ECOS\n\nitems  = [:Gold, :Silver, :Bronze]\nvalues = Dict(:Gold => 5.0,  :Silver => 3.0,  :Bronze => 1.0)\nweight = Dict(:Gold => 2.0,  :Silver => 1.5,  :Bronze => 0.3)\n\nm = Model(solver=ECOSSolver())\n@variable(m, 0 <= take[items] <= 1)  # Define a variable for each item\n@objective(m, Max, sum(values[item] * take[item] for item in items))\n@constraint(m, sum(weight[item] * take[item] for item in items) <= 3)\nsolve(m)\n\nprintln(getvalue(take))\n# take\n# [  Gold] = 0.9999999680446406\n# [Silver] = 0.46666670881026834\n# [Bronze] = 0.9999999633898735ECOS.jl is licensed under the MIT License (see LICENSE.md), but note that ECOS itself is GPL v3.[MathProgBase]: https://github.com/JuliaOpt/MathProgBase.jl [JuMP]: https://github.com/JuliaOpt/JuMP.jl [Convex.jl]: https://github.com/JuliaOpt/Convex.jl [Homebrew.jl]: https://github.com/JuliaLang/Homebrew.jl [JuliaOpt]: http://juliaopt.org[pkg-0.5-img]: http://pkg.julialang.org/badges/ECOS0.5.svg [pkg-0.5-url]: http://pkg.julialang.org/?pkg=ECOS [pkg-0.6-img]: http://pkg.julialang.org/badges/ECOS0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=ECOS[build-img]: https://travis-ci.org/JuliaOpt/ECOS.jl.svg?branch=master [build-url]: https://travis-ci.org/JuliaOpt/ECOS.jl [winbuild-img]: https://ci.appveyor.com/api/projects/status/n0c8b6t1w39jho6d/branch/master?svg=true [winbuild-url]: https://ci.appveyor.com/project/JuliaOpt/ecos-jl/branch/master [coveralls-img]: https://coveralls.io/repos/github/JuliaOpt/ECOS.jl/badge.svg?branch=master [coveralls-url]: https://coveralls.io/github/JuliaOpt/ECOS.jl?branch=master [codecov-img]: http://codecov.io/github/JuliaOpt/ECOS.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/JuliaOpt/ECOS.jl?branch=master"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ECOS]\nOrder = [:type, :function]"
},

]}
