var documenterSearchIndex = {"docs": [

{
    "location": "#COSMO.assemble!-Union{Tuple{T}, Tuple{Workspace{T},AbstractArray{T,2},AbstractArray{T,1},Union{Constraint{T}, Array{Constraint{T},1}}}, Tuple{Workspace{T},AbstractArray{T,2},AbstractArray{T,1},Union{Constraint{T}, Array{Constraint{T},1}},Settings}, Tuple{Workspace{T},AbstractArray{T,2},AbstractArray{T,1},Union{Constraint{T}, Array{Constraint{T},1}},Settings,Union{Nothing, Array{Float64,1}}}, Tuple{Workspace{T},AbstractArray{T,2},AbstractArray{T,1},Union{Constraint{T}, Array{Constraint{T},1}},Settings,Union{Nothing, Array{Float64,1}},Union{Nothing, Array{Float64,1}}}} where T<:AbstractFloat",
    "page": "Home",
    "title": "COSMO.assemble!",
    "category": "method",
    "text": "assemble!(model, P, q, constraint(s), [settings, x0, y0])\n\nAssembles a COSMO.Model with a cost function defind by P and q, and a number of constraints.\n\nThe positive semidefinite matrix P and vector q are used to specify the cost function of the optimization problem:\n\nmin   1/2 x\'Px + q\'x\ns.t.  Ax + b ∈ C\n\nconstraints is a COSMO.Constraint or an array of COSMO.Constraint objects that are used to describe the constraints on x.\n\n\n\nThe optinal arguments x0 and y0 can be used to provide the solver with warm starting values for the primal variable x and the dual variable y. The optinal argument settings can be used to pass custom solver settings.\n\n\n\n\n\n"
},

{
    "location": "#COSMO.optimize!-Tuple{COSMO.Workspace}",
    "page": "Home",
    "title": "COSMO.optimize!",
    "category": "method",
    "text": "optimize!(model)\n\nAttempts to solve the optimization problem defined in COSMO.Model object with the user settings defined in COSMO.Settings. Returns a COSMO.Result object.\n\n\n\n\n\n"
},

{
    "location": "#COSMO.Constraint",
    "page": "Home",
    "title": "COSMO.Constraint",
    "category": "type",
    "text": "Constraint(A, b, convex_set, dim = 0, indices = 0:0)\n\nCreates a COSMO constraint: Ax + b ∈ convex_set.\n\nBy default the following convex sets are supported: ZeroSet, Nonnegatives, SecondOrderCone, PsdCone.\n\nExamples\n\njulia> Constraint([1 0;0 1], zeros(2), COSMO.PsdCone)\nConstraint\nSize of A: (2, 2)\nConvexSet: COSMO.PsdCone\n\n\n\nThe optinal arguments dim and indices can be used to specify A and b for subparts of variable x. If x has dimension dim = 4, then x[2] and x[3] can be constrained to the zero cone in the following way:\n\nExamples\n\njulia> c = Constraint([1 0;0 1], zeros(2), COSMO.ZeroSet, 4, 2:3)\nConstraint\nSize of A: (2, 4)\nConvexSet: COSMO.ZeroSet\n\nNotice that extra columns of A have been added automatically.\n\njulia>Matrix(c.A)\n2×4 Array{Float64,2}:\n0.0  1.0  0.0  0.0\n0.0  0.0  1.0  0.0\n\n\n\n\n\n"
},

{
    "location": "#COSMO.Result",
    "page": "Home",
    "title": "COSMO.Result",
    "category": "type",
    "text": "Result{T <: AbstractFloat}\n\nObject returned by the COSMO solver after calling optimize!(model, settings). It has the following fields:\n\nFieldname Type Description\nx Vector{T} Primal variable\ny Vector{T} Dual variable\ns Vector{T} (Primal) set variable\nobj_val T Objective value\niter Int64 Number of iterations\nstatus Symbol Solution status\ninfo COSMO.ResultInfo Struct with more information\ntimes COSMO.ResultTimes Struct with several measured times\n\n\n\n\n\n"
},

{
    "location": "#COSMO.Settings",
    "page": "Home",
    "title": "COSMO.Settings",
    "category": "type",
    "text": "Settings(;arg=val)\n\nCreates a COSMO settings object that is used to pass user settings to the solver.\n\nArgument Description Values (default)\nrho ADMM rho step 0.1\nsigma ADMM sigma step 1e-6.\nalpha Relaxation parameter 1.6\neps_abs Absolute residual tolerance 1e-4\neps_rel Relative residual tolerance 1e-4\nepspriminf Primal infeasibility tolerance 1e-4\nepsdualinf Dual infeasibility tolerance 1e-4\nmax_iter Maximum number of iterations 2500\nverbose Verbose printing false\nverbose_timing Verbose timing false\ncheck_termination Check termination interval 40\ncheck_infeasibility Check infeasibility interval 40\nscaling Number of scaling iterations 10\nadaptive_rho Automatic adaptation of step size parameter true\ntime_limit set solver time limit in s 0\n\n\n\n\n\n"
},

{
    "location": "#COSMO.Workspace",
    "page": "Home",
    "title": "COSMO.Workspace",
    "category": "type",
    "text": "Model()\n\nInitializes an empty COSMO model that can be filled with problem data using assemble!(model, P, q,constraints, [settings]).\n\n\n\n\n\n"
},

{
    "location": "#COSMO.set!-Union{Tuple{T}, Tuple{Workspace,AbstractArray{#s31,2} where #s31<:Real,AbstractArray{#s30,1} where #s30<:Real,AbstractArray{#s29,2} where #s29<:Real,AbstractArray{#s28,1} where #s28<:Real,Array{#s27,1} where #s27<:AbstractConvexSet{T}}, Tuple{Workspace,AbstractArray{#s26,2} where #s26<:Real,AbstractArray{#s25,1} where #s25<:Real,AbstractArray{#s24,2} where #s24<:Real,AbstractArray{#s18,1} where #s18<:Real,Array{#s17,1} where #s17<:AbstractConvexSet{T},Settings}} where T",
    "page": "Home",
    "title": "COSMO.set!",
    "category": "method",
    "text": "set!(model, P, q, A, b, convex_sets, [settings])\n\nSets model data directly based on provided fields.\n\n\n\n\n\n"
},

{
    "location": "#COSMO.warm_start!-Tuple{COSMO.Workspace}",
    "page": "Home",
    "title": "COSMO.warm_start!",
    "category": "method",
    "text": "warm_start!(model, [x0, y0])\n\nProvides the COSMO.Model with warm starting values for the primal variable x and/or the dual variable y.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [COSMO]\nOrder = [:type, :function]"
},

]}
