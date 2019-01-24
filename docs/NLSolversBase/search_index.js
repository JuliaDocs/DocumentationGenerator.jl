var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NLSolversBase.jl-1",
    "page": "Readme",
    "title": "NLSolversBase.jl",
    "category": "section",
    "text": "Base functionality for optimization and solving systems of equations in Julia.NLSolversBase.jl is the core, common dependency of several packages in the JuliaNLSolvers family.PackageEvaluator Build Status\n[![][pkg-0.4-img]][pkg-0.4-url] [![Build Status][build-img]][build-url]\n[![][pkg-0.5-img]][pkg-0.5-url] [![Codecov branch][cov-img]][cov-url]\n[![][pkg-0.6-img]][pkg-0.6-url] [![Coverage Status][coveralls-img]][coveralls-url]"
},

{
    "location": "#Purpose-1",
    "page": "Readme",
    "title": "Purpose",
    "category": "section",
    "text": "The package aims at establishing common ground for Optim.jl, LineSearches.jl, and NLsolve.jl. The common ground is mainly the types used to hold objective related callables, information about the objectives, and an interface to interact with these types."
},

{
    "location": "#NDifferentiable-1",
    "page": "Readme",
    "title": "NDifferentiable",
    "category": "section",
    "text": "There are currently three main types: NonDifferentiable, OnceDifferentiable, and TwiceDifferentiable. There\'s also a more experimental TwiceDifferentiableHV for optimization algorithms that use Hessian-vector products. An NDifferentiable instance can be used to hold relevant functions forOptimization: (Image: Objective for optimization)\nSolving systems of equations: (Image: Objective for systems of equations)The words in front of Differentiable in the type names (Non, Once, Twice) are not meant to indicate a specific classification of the function as such (a OnceDifferentiable might be constructed for an infinitely differentiable function), but signals to an algorithm if the correct functions have been constructed or if automatic differentiation should be used to further differentiate the function."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#Optimization-1",
    "page": "Readme",
    "title": "Optimization",
    "category": "section",
    "text": "Say we want to minimize the Hosaki test function(Image: Himmelblau test function)The relevant functions are coded in Julia asfunction f(x)\n    a = (1.0 - 8.0 * x[1] + 7.0 * x[1]^2 - (7.0 / 3.0) * x[1]^3 + (1.0 / 4.0) * x[1]^4)\n    return a * x[2]^2 * exp(-x[2])\nend\n\nfunction g!(G, x)\n    G[1] = (x[1]^3 - 7.0 * x[1]^2 + 14.0 * x[1] - 8)* x[2]^2 * exp(-x[2])\n    G[2] = 2.0 * (1.0 - 8.0 * x[1] + 7.0 * x[1]^2 - (7.0 / 3.0) * x[1]^3 + (1.0 / 4.0) * x[1]^4) * x[2] * exp(-x[2]) - (1.0 - 8.0 * x[1] + 7.0 * x[1]^2 - (7.0 / 3.0) * x[1]^3 + (1.0 / 4.0) * x[1]^4) * x[2]^2 * exp(-x[2])\nend\n\nfunction fg!(G, x)\n    g!(G, x)\n    f(x)\nend\n\nfunction h!(H, x)\n    H[1, 1] = (3.0 * x[1]^2 - 14.0 * x[1] + 14.0) * x[2]^2 * exp(-x[2])\n    H[1, 2] = 2.0 * (x[1]^3 - 7.0 * x[1]^2 + 14.0 * x[1] - 8.0) * x[2] * exp(-x[2])  - (x[1]^3 - 7.0 * x[1]^2 + 14.0 * x[1] - 8.0) * x[2]^2 * exp(-x[2])\n    H[2, 1] =  2.0 * (x[1]^3 - 7.0 * x[1]^2 + 14.0 * x[1] - 8.0) * x[2] * exp(-x[2])  - (x[1]^3 - 7.0 * x[1]^2 + 14.0 * x[1] - 8.0) * x[2]^2 * exp(-x[2])\n    H[2, 2] = 2.0 * (1.0 - 8.0 * x[1] + 7.0 * x[1]^2 - (7.0 / 3.0) * x[1]^3 + (1.0 / 4.0) * x[1]^4) * exp(-x[2]) - 4.0 * ( 1.0 - 8.0 * x[1] + 7.0 *  x[1]^2 - (7.0 / 3.0) * x[1]^3 + (1.0 / 4.0) * x[1]^4) * x[2] * exp(-x[2]) + (1.0 - 8.0 * x[1] + 7.0 * x[1]^2 - (7.0 / 3.0) * x[1]^3 + (1.0 / 4.0) * x[1]^4) * x[2]^2 * exp(-x[2])\nendThe NDifferentiable interface can be used as shown below to create various objectives:x = zeros(2)\nnd   = NonDifferentiable(f, x)\nod   = OnceDifferentiable(f, g!, x)\nodfg = OnceDifferentiable(f, g!, fg! x)\ntd1  = Twicedifferentiable(f, g!, h! x)\ntdfg = Twicedifferentiable(f, g!, fg!, h! x)"
},

{
    "location": "#Multivalued-objective-1",
    "page": "Readme",
    "title": "Multivalued objective",
    "category": "section",
    "text": "If we consider the gradient of the Himmelblau function above, we can try to solve (Image: FOCs) without caring about the objective value. Then we can still create NDifferentiables, but we need to specify the cache to hold the value of (Image: Multivalued objective). Currently, the only relevant ones are NonDifferentiable and OnceDifferentiable. TwiceDifferentiable could be used for higher order (tensor) methods, though they are rarely worth the cost. The relevant functions coded in Julia are:function f!(F, x)\n    F[1] = (x[1]^3 - 7.0 * x[1]^2 + 14.0 * x[1] - 8)* x[2]^2 * exp(-x[2])\n    F[2] = 2.0 * (1.0 - 8.0 * x[1] + 7.0 * x[1]^2 - (7.0 / 3.0) * x[1]^3 + (1.0 / 4.0) * x[1]^4) * x[2] * exp(-x[2]) - (1.0 - 8.0 * x[1] + 7.0 * x[1]^2 - (7.0 / 3.0) * x[1]^3 + (1.0 / 4.0) * x[1]^4) * x[2]^2 * exp(-x[2])\nend\n\nfunction j!(J, x)\n    J[1, 1] = (3.0 * x[1]^2 - 14.0 * x[1] + 14.0) * x[2]^2 * exp(-x[2])\n    J[1, 2] = 2.0 * (x[1]^3 - 7.0 * x[1]^2 + 14.0 * x[1] - 8.0) * x[2] * exp(-x[2])  - (x[1]^3 - 7.0 * x[1]^2 + 14.0 * x[1] - 8.0) * x[2]^2 * exp(-x[2])\n    J[2, 1] =  2.0 * (x[1]^3 - 7.0 * x[1]^2 + 14.0 * x[1] - 8.0) * x[2] * exp(-x[2])  - (x[1]^3 - 7.0 * x[1]^2 + 14.0 * x[1] - 8.0) * x[2]^2 * exp(-x[2])\n    J[2, 2] = 2.0 * (1.0 - 8.0 * x[1] + 7.0 * x[1]^2 - (7.0 / 3.0) * x[1]^3 + (1.0 / 4.0) * x[1]^4) * exp(-x[2]) - 4.0 * ( 1.0 - 8.0 * x[1] + 7.0 *  x[1]^2 - (7.0 / 3.0) * x[1]^3 + (1.0 / 4.0) * x[1]^4) * x[2] * exp(-x[2]) + (1.0 - 8.0 * x[1] + 7.0 * x[1]^2 - (7.0 / 3.0) * x[1]^3 + (1.0 / 4.0) * x[1]^4) * x[2]^2 * exp(-x[2])\nend\n\nfunction fj!(F, G, x)\n    g!(G, x)\n    f!(F, x)\nendThe NDifferentiable interface can be used as shown below to create various objectives:x = zeros(2)\nF = zeros(2)\nnd   = NonDifferentiable(f!, x, F)\nod   = OnceDifferentiable(f!, j!, x, F)\nodfj = OnceDifferentiable(f!, j!, fj! x, F)"
},

{
    "location": "#Interface-1",
    "page": "Readme",
    "title": "Interface",
    "category": "section",
    "text": "To extract information about the objective, and to update given some input, we provide a function based interface. For all purposes it should be possible to use a function to extract/update information, and no field access should be necessary. Actually, we proactively discourage it, as it makes it much more difficult to make changes in the future."
},

{
    "location": "#Single-valued-objectives-1",
    "page": "Readme",
    "title": "Single-valued objectives",
    "category": "section",
    "text": "To retrieve relevant information about single-valued functions, the following functions are available where applicable:# obj is the objective function defined as shown above\nvalue(df)       # return the objective evaluated at df.x_f\ngradient(df)    # return the gradient evaluated at df.x_df\ngradient(df, i) # return the gradient evaluated at df.x_df\nhessian(df)     # return the hessian evaluated at df.x_hTo update the various quantities, use:# obj is the objective function defined as shown above\nvalue!(df, x)     # update the objective if !(df.x_f==x) and set df.x_f to x\nvalue!!(df, x)    # update the objective and set df.x_f to x\ngradient!(df, x)  # update the gradient if !(df.x_df==x) and set df.x_df to x\ngradient!!(df, x) # update the gradient and set df.x_df to x\nhessian!(df,x)    # update the hessian if !(df.x_df==x) and set df.x_h to x\nhessian!!(df,x)   # update the hessian and set df.x_h to x"
},

{
    "location": "#Multivalued-1",
    "page": "Readme",
    "title": "Multivalued",
    "category": "section",
    "text": "To retrieve relevant information about multivalued functions, the following functions are available where applicable:# obj is the objective function defined as shown above\nvalue(df)    # return the objective evaluated at df.x_f\njacobian(df) # return the jacobian evaluated at df.x_df\njacobian(df) # return the jacobian evaluated at df.x_dfTo update the various quantities, use:# obj is the objective function defined as shown above\nvalue!(df, x)     # update the objective if !(df.x_f==x) and set df.x_f to x\nvalue!!(df, x)    # update the objective and set df.x_f to x\njacobian!(df, x)  # update the jacobian if !(df.x_df==x) and set df.x_df to x\njacobian!!(df, x) # update the jacobian and set df.x_df to x"
},

{
    "location": "#Special-single-function-interface-1",
    "page": "Readme",
    "title": "Special single-function interface",
    "category": "section",
    "text": "In some cases the objective and partial derivaties share common terms that are expensive to calculate. One such case is if the underlying problem requires solution of a model or simulation of a some system. In that case the only_fg!/only_fj! and only_fgh! interfaces can be used."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "Say we have some common functionality in common_calc(...) that is used in both the objective and partial derivative. Then we might construct a OnceDifferentiable instance asfunction f(x)\n    common_calc(...)\n    # calculations specific to f\n    return f\nend\nfunction g!(G, x)\n    common_calc(...)\n    # mutating calculations specific to g!\nend\nOnceDifferentiable(f, g!, x0)However, in many algorithms f and g! are evaluated together, so the common calculations are done twice instead of once. We can use the special interface as shown below.function fg!(F, G, x)\n    common_calc(...)\n    if !(G == nothing)\n        # mutating calculations specific to g!\n    end\n    if !(F == nothing)\n        # calculations specific to f\n        return f\n    end\nend\nOnceDifferentiable(only_fg!(fg!), x0)Notice the important check in the if statements. This makes sure that G is only updated when we want to, and, if only G is to be updated, that we don\'t calculate  the objective.[build-img]: https://travis-ci.org/JuliaNLSolvers/NLSolversBase.jl.svg?branch=master [build-url]: https://travis-ci.org/JuliaNLSolvers/NLSolversBase.jl[pkg-0.4-img]: http://pkg.julialang.org/badges/NLSolversBase0.4.svg [pkg-0.4-url]: http://pkg.julialang.org/?pkg=NLSolversBase&ver=0.4 [pkg-0.5-img]: http://pkg.julialang.org/badges/NLSolversBase0.5.svg [pkg-0.5-url]: http://pkg.julialang.org/?pkg=NLSolversBase&ver=0.5 [pkg-0.6-img]: http://pkg.julialang.org/badges/NLSolversBase_0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=NLSolversBase&ver=0.6[cov-img]: http://codecov.io/github/JuliaNLSolvers/NLSolversBase.jl/coverage.svg?branch=master [cov-url]: http://codecov.io/github/JuliaNLSolvers/NLSolversBase.jl?branch=master[coveralls-img]: https://coveralls.io/repos/JuliaNLSolvers/NLSolversBase.jl/badge.svg?branch=master [coveralls-url]: https://coveralls.io/github/JuliaNLSolvers/NLSolversBase.jl?branch=master"
},

{
    "location": "autodocs/#NLSolversBase.gradient!-Tuple{AbstractObjective,Any}",
    "page": "Docstrings",
    "title": "NLSolversBase.gradient!",
    "category": "method",
    "text": "Evaluates the gradient value at x.\n\nStores the value in obj.DF.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLSolversBase.gradient-Tuple{AbstractObjective,Any}",
    "page": "Docstrings",
    "title": "NLSolversBase.gradient",
    "category": "method",
    "text": "Evaluates the gradient value at x\n\nThis does not update obj.DF or obj.x_df.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLSolversBase.gradient-Tuple{AbstractObjective,Integer}",
    "page": "Docstrings",
    "title": "NLSolversBase.gradient",
    "category": "method",
    "text": "Get the ith element of the most recently evaluated gradient of obj.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLSolversBase.gradient-Tuple{AbstractObjective}",
    "page": "Docstrings",
    "title": "NLSolversBase.gradient",
    "category": "method",
    "text": "Get the most recently evaluated gradient of obj.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLSolversBase.hessian-Tuple{AbstractObjective}",
    "page": "Docstrings",
    "title": "NLSolversBase.hessian",
    "category": "method",
    "text": "Get the most recently evaluated Hessian of obj\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLSolversBase.jacobian-Tuple{AbstractObjective}",
    "page": "Docstrings",
    "title": "NLSolversBase.jacobian",
    "category": "method",
    "text": "Get the most recently evaluated Jacobian of obj.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLSolversBase.value!!-Tuple{AbstractObjective,Any}",
    "page": "Docstrings",
    "title": "NLSolversBase.value!!",
    "category": "method",
    "text": "Force (re-)evaluation of the objective value at x.\n\nReturns f(x) and stores the value in obj.F\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLSolversBase.value!-Tuple{AbstractObjective,Any}",
    "page": "Docstrings",
    "title": "NLSolversBase.value!",
    "category": "method",
    "text": "Evaluates the objective value at x.\n\nReturns f(x) and stores the value in obj.F\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLSolversBase.value-Tuple{AbstractObjective,Any}",
    "page": "Docstrings",
    "title": "NLSolversBase.value",
    "category": "method",
    "text": "Evaluates the objective value at x.\n\nReturns f(x), but does not store the value in obj.F\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLSolversBase.value-Tuple{AbstractObjective}",
    "page": "Docstrings",
    "title": "NLSolversBase.value",
    "category": "method",
    "text": "Get the most recently evaluated objective value of obj.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLSolversBase.f!_from_f-Tuple{Any,AbstractArray,Any}",
    "page": "Docstrings",
    "title": "NLSolversBase.f!_from_f",
    "category": "method",
    "text": "f!_from_f(f, F::Abstractarray)\n\nReturn an inplace version of f\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLSolversBase.gradient!!-Tuple{AbstractObjective,Any}",
    "page": "Docstrings",
    "title": "NLSolversBase.gradient!!",
    "category": "method",
    "text": "Force (re-)evaluation of the gradient value at x.\n\nStores the value in obj.DF.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLSolversBase.nconstraints-Tuple{ConstraintBounds}",
    "page": "Docstrings",
    "title": "NLSolversBase.nconstraints",
    "category": "method",
    "text": "nconstraints(bounds) -> nc\n\nThe number of linear/nonlinear constraint functions supplied by the user. This does not include bounds-constraints on variables.\n\nSee also: nconstraints_x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLSolversBase.nconstraints_x-Tuple{ConstraintBounds}",
    "page": "Docstrings",
    "title": "NLSolversBase.nconstraints_x",
    "category": "method",
    "text": "nconstraints_x(bounds) -> nx\n\nThe number of \"meaningful\" constraints (not ±Inf) on the x coordinates.\n\nSee also: nconstraints.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLSolversBase.parse_constraints-Union{Tuple{T}, Tuple{Type{T},Any,Any}} where T",
    "page": "Docstrings",
    "title": "NLSolversBase.parse_constraints",
    "category": "method",
    "text": "parse_constraints(T, l, u) -> eq, val, ineq, σ, b\n\nFrom user-supplied constraints of the form\n\nl_i ≤  v_i  ≤ u_i\n\n(which include both inequality and equality constraints, the latter when l_i == u_i), convert into the following representation:\n\n- `eq`, a vector of the indices for which `l[eq] == u[eq]`\n- `val = l[eq] = u[eq]`\n- `ineq`, `σ`, and `b` such that the inequality constraints can be written as\n         σ[k]*(v[ineq[k]] - b[k]) ≥ 0\n   where `σ[k] = ±1`.\n\nNote that since the same v_i might have both lower and upper bounds, ineq might have the same index twice (once with σ=-1 and once with σ=1).\n\nSupplying ±Inf for elements of l and/or u implies that v_i is unbounded in the corresponding direction. In such cases there is no corresponding entry in ineq/σ/b.\n\nT is the element-type of the non-Int outputs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NLSolversBase]\nOrder = [:type, :function]"
},

]}
