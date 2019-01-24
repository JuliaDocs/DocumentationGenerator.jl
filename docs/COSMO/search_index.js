var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: COSMO Logo) (Image: Build Status) (Image: codecov)This repository hosts a Julia implementation of the COSMO solver. It solves convex optimization problems of the following form:<img src=\"https://latex.codecogs.com/gif.latex?\\begin{array}{ll}&space;\\mbox{minimize}&space;&&space;\\textstyle{\\frac{1}{2}}x^\\top&space;Px&space;&plus;&space;q^\\top&space;x\\&space;\\mbox{subject&space;to}&space;&&space;Ax&space;&plus;&space;s&space;=&space;b&space;\\&space;&&space;s&space;\\in&space;\\mathcal{C},&space;\\end{array}\" title=\"\\begin{array}{ll} \\mbox{minimize} & \\textstyle{\\frac{1}{2}}x^\\top Px + q^\\top x\\ \\mbox{subject to} & Ax + s = b \\ & s \\in \\mathcal{C}, \\end{array}\" />with decision variables x ϵ R^n, s ϵ R^m and data matrices P=P\'>=0, q ϵ R^n, A ϵ R^(m×n), and b ϵ R^m. The convex set C is a composition of convex sets and cones. By default COSMO supports the zero cone, the non-negative orthant, second order cones and positive semidefinite cones. COSMO allows you to:solve semidefinite programs with quadratic objective functions directly\ndetect infeasible problems without a homogeneous self-dual embedding of the problem\ndescribe your optimisation problem using JuMP (COSMO requires JuMP v0.19-beta)\nuse chordal decomposition techniques to decompose chordally structured SDPs\ndefine your own convex sets for constraints"
},

{
    "location": "#Upcoming-changes-1",
    "page": "Readme",
    "title": "Upcoming changes",
    "category": "section",
    "text": "Update of PSD decomposition related code to Julia v1.0"
},

{
    "location": "#Installation-/-Usage-1",
    "page": "Readme",
    "title": "Installation / Usage",
    "category": "section",
    "text": "The solver is written for Julia v1.0\nAdd the package via the package manager (type ]): add https://github.com/oxfordcontrol/COSMO.jl\nMake the package available with using COSMO"
},

{
    "location": "#Example-JuMP-1",
    "page": "Readme",
    "title": "Example - JuMP",
    "category": "section",
    "text": "We consider the problem of finding the closest correlation matrix X, i.e. PSD and ones on the diagonal, to a random matrix C.using COSMO, JuMP, LinearAlgebra, SparseArrays, Test, Random\nrng = Random.MersenneTwister(12345);\n\n# Original problem has the following format:\n# min_X   1/2 ||X-C||^2\n# s.t.    Xii = 1\n#         X ⪴ 0\n\n# create a random test matrix C\nn = 8\nC = -1 .+ rand(rng, n, n) .* 2;\nc = vec(C);\n\n# define problem in JuMP\nq = -vec(C);\nr = 0.5 * vec(C)\' * vec(C);\nm = Model(with_optimizer(COSMO.Optimizer, verbose=true, eps_abs = 1e-4));\n@variable(m, X[1:n, 1:n], PSD);\nx = vec(X);\n@objective(m, Min, 0.5 * x\' * x  + q\' * x + r)\nfor i = 1:n\n  @constraint(m, X[i, i] == 1.)\nend\n\n# solve and get results\nstatus = JuMP.optimize!(m)\nobj_val = JuMP.objective_value(m)\nX_sol = JuMP.value.(X)"
},

{
    "location": "#Example-Direct-solver-interface-1",
    "page": "Readme",
    "title": "Example - Direct solver interface",
    "category": "section",
    "text": "using COSMO, LinearAlgebra, SparseArrays, Test\n\n# Linear program example\n# min c\'x\n# s.t. Ax <= b\n#      x >= 1,  x2 >= 5, x1+x3 >= 4\n# with data matrices\nc = [1; 2; 3; 4.]\nA = Matrix(1.0I, 4, 4)\nb = [10; 10; 10; 10]\nn = 4\n# -------------------\n# create constraints A * x + b in set\n# -------------------\n# Ax <= b\nc1 = COSMO.Constraint(-A, b, COSMO.Nonnegatives)\n# x >= 1\nc2 = COSMO.Constraint(Matrix(1.0I, n, n), -ones(n), COSMO.Nonnegatives)\n# x2 >= 5\nc3 = COSMO.Constraint(1, -5, COSMO.Nonnegatives, n, 2:2)\n# x1 + x3 >= 4\nc4 = COSMO.Constraint([1 0 1 0], -4, COSMO.Nonnegatives)\n\n# -------------------\n# define cost function\n# -------------------\nP = spzeros(4, 4)\nq = c\n\n# -------------------\n# assemble solver model\n# -------------------\nsettings = COSMO.Settings(max_iter=2500, verbose=true, eps_abs = 1e-4, eps_rel = 1e-5)\nmodel = COSMO.Model()\nassemble!(model, P, q, [c1; c2; c3; c4], settings)\nres = COSMO.optimize!(model);\n\n@testset \"Linear Problem\" begin\n  @test isapprox(res.x[1:4], [3; 5; 1; 1], atol=1e-2, norm = (x -> norm(x, Inf)))\n  @test isapprox(res.obj_val, 20.0, atol=1e-2)\nend"
},

{
    "location": "#Settings-1",
    "page": "Readme",
    "title": "Settings",
    "category": "section",
    "text": "Settings can be specified using the COSMO.Settings struct. The following settings are available:Argument Description Values (default)\nrho ADMM rho step 0.1\nsigma ADMM sigma step 1e-6.\nalpha Relaxation parameter 1.6\neps_abs Absolute residual tolerance 1e-4\neps_rel Relative residual tolerance 1e-4\nepspriminf Primal infeasibility tolerance 1e-4\nepsdualinf Dual infeasibility tolerance 1e-4\nmax_iter Maximum number of iterations 2500\nverbose Verbose printing false\nverbose_timing Verbose timing false\ncheck_termination Check termination interval 40\ncheck_infeasibility Check infeasibility interval 40\nscaling Number of scaling iterations 10\nadaptive_rho Automatic adaptation of step size parameter true\ntime_limit set solver time limit in s 0.0For more low-level settings, see the Settings definition in /src/types.jl."
},

{
    "location": "#Result-1",
    "page": "Readme",
    "title": "Result",
    "category": "section",
    "text": "After attempting to solve the problem, COSMO will return a result object with the following fields:Fieldname Type Description\nx Vector{Float64} Primal variable\ny Vector{Float64} Dual variable\ns Vector{Float64} (Primal) set variable\nobj_val Float64 Objective value\niter Int64 Number of iterations\nstatus Symbol Solution status\ninfo COSMO.ResultInfo Struct with more information\ntimes COSMO.ResultTimes Struct with several measured times"
},

{
    "location": "#Status-Codes-1",
    "page": "Readme",
    "title": "Status Codes",
    "category": "section",
    "text": "COSMO will return one of the following statuses:Status Code Description\n:Solved A optimal solution was found\n:Unsolved Default value\n:Maxiterreached Solver reached iteration limit (set with Settings.max_iter)\n:Timelimitreached Solver reached time limit (set with Settings.timelimit)\n:Primal_infeasible Problem is primal infeasible\n:Dual_infeasible Problem is dual infeasible"
},

{
    "location": "#Timings-1",
    "page": "Readme",
    "title": "Timings",
    "category": "section",
    "text": "If settings.verbose_timing is set to true, COSMO will report the following times in result.times:Time Name Description\nsolver_time Total time used to solve the problem\nsetup_time Setup time = graphTime + factorTime\ngraph_time Time used to perform chordal decomposition\nfactor_time Time used to factor the system of linear equations\niter_time Time spent in iteration loop\nproj_time Time spent in projection functions\npost_time Time used for post processingIt holds: solver_time = setup_time+ iter_time + post_time, setup_time = graph_time+ factor_time, proj_time is a subset of iter_time."
},

{
    "location": "#Test-problems-1",
    "page": "Readme",
    "title": "Test problems",
    "category": "section",
    "text": "A set of benchmark problems with conic constraints has been collected and made available here: https://github.com/migarstka/SDPBenchmarkProblems"
},

{
    "location": "#Issues-/-Tasks-/-Future-Work-1",
    "page": "Readme",
    "title": "Issues / Tasks / Future Work",
    "category": "section",
    "text": "Current issues, tasks and future ideas are listed in Issues:exclamation:. Please report any issues or bugs that you encounter."
},

{
    "location": "#Licence-1",
    "page": "Readme",
    "title": "Licence",
    "category": "section",
    "text": "This project is licensed under the Apache License - see the LICENSE.md file for details."
},

{
    "location": "#Contact-1",
    "page": "Readme",
    "title": "Contact",
    "category": "section",
    "text": "Send an email :email: to Michael Garstka :rocket:!"
},

{
    "location": "autodocs/#COSMO.assemble!-Union{Tuple{T}, Tuple{Workspace{T},AbstractArray{T,2},AbstractArray{T,1},Union{Constraint{T}, Array{Constraint{T},1}}}, Tuple{Workspace{T},AbstractArray{T,2},AbstractArray{T,1},Union{Constraint{T}, Array{Constraint{T},1}},Settings}, Tuple{Workspace{T},AbstractArray{T,2},AbstractArray{T,1},Union{Constraint{T}, Array{Constraint{T},1}},Settings,Union{Nothing, Array{Float64,1}}}, Tuple{Workspace{T},AbstractArray{T,2},AbstractArray{T,1},Union{Constraint{T}, Array{Constraint{T},1}},Settings,Union{Nothing, Array{Float64,1}},Union{Nothing, Array{Float64,1}}}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "COSMO.assemble!",
    "category": "method",
    "text": "assemble!(model, P, q, constraint(s), [settings, x0, y0])\n\nAssembles a COSMO.Model with a cost function defind by P and q, and a number of constraints.\n\nThe positive semidefinite matrix P and vector q are used to specify the cost function of the optimization problem:\n\nmin   1/2 x\'Px + q\'x\ns.t.  Ax + b ∈ C\n\nconstraints is a COSMO.Constraint or an array of COSMO.Constraint objects that are used to describe the constraints on x.\n\n\n\nThe optinal arguments x0 and y0 can be used to provide the solver with warm starting values for the primal variable x and the dual variable y. The optinal argument settings can be used to pass custom solver settings.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#COSMO.optimize!-Tuple{COSMO.Workspace}",
    "page": "Docstrings",
    "title": "COSMO.optimize!",
    "category": "method",
    "text": "optimize!(model)\n\nAttempts to solve the optimization problem defined in COSMO.Model object with the user settings defined in COSMO.Settings. Returns a COSMO.Result object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#COSMO.Constraint",
    "page": "Docstrings",
    "title": "COSMO.Constraint",
    "category": "type",
    "text": "Constraint(A, b, convex_set, dim = 0, indices = 0:0)\n\nCreates a COSMO constraint: Ax + b ∈ convex_set.\n\nBy default the following convex sets are supported: ZeroSet, Nonnegatives, SecondOrderCone, PsdCone.\n\nExamples\n\njulia> Constraint([1 0;0 1], zeros(2), COSMO.PsdCone)\nConstraint\nSize of A: (2, 2)\nConvexSet: COSMO.PsdCone\n\n\n\nThe optinal arguments dim and indices can be used to specify A and b for subparts of variable x. If x has dimension dim = 4, then x[2] and x[3] can be constrained to the zero cone in the following way:\n\nExamples\n\njulia> c = Constraint([1 0;0 1], zeros(2), COSMO.ZeroSet, 4, 2:3)\nConstraint\nSize of A: (2, 4)\nConvexSet: COSMO.ZeroSet\n\nNotice that extra columns of A have been added automatically.\n\njulia>Matrix(c.A)\n2×4 Array{Float64,2}:\n0.0  1.0  0.0  0.0\n0.0  0.0  1.0  0.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#COSMO.Result",
    "page": "Docstrings",
    "title": "COSMO.Result",
    "category": "type",
    "text": "Result{T <: AbstractFloat}\n\nObject returned by the COSMO solver after calling optimize!(model, settings). It has the following fields:\n\nFieldname Type Description\nx Vector{T} Primal variable\ny Vector{T} Dual variable\ns Vector{T} (Primal) set variable\nobj_val T Objective value\niter Int64 Number of iterations\nstatus Symbol Solution status\ninfo COSMO.ResultInfo Struct with more information\ntimes COSMO.ResultTimes Struct with several measured times\n\n\n\n\n\n"
},

{
    "location": "autodocs/#COSMO.Settings",
    "page": "Docstrings",
    "title": "COSMO.Settings",
    "category": "type",
    "text": "Settings(;arg=val)\n\nCreates a COSMO settings object that is used to pass user settings to the solver.\n\nArgument Description Values (default)\nrho ADMM rho step 0.1\nsigma ADMM sigma step 1e-6.\nalpha Relaxation parameter 1.6\neps_abs Absolute residual tolerance 1e-4\neps_rel Relative residual tolerance 1e-4\nepspriminf Primal infeasibility tolerance 1e-4\nepsdualinf Dual infeasibility tolerance 1e-4\nmax_iter Maximum number of iterations 2500\nverbose Verbose printing false\nverbose_timing Verbose timing false\ncheck_termination Check termination interval 40\ncheck_infeasibility Check infeasibility interval 40\nscaling Number of scaling iterations 10\nadaptive_rho Automatic adaptation of step size parameter true\ntime_limit set solver time limit in s 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#COSMO.Workspace",
    "page": "Docstrings",
    "title": "COSMO.Workspace",
    "category": "type",
    "text": "Model()\n\nInitializes an empty COSMO model that can be filled with problem data using assemble!(model, P, q,constraints, [settings]).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#COSMO.set!-Union{Tuple{T}, Tuple{Workspace,AbstractArray{#s31,2} where #s31<:Real,AbstractArray{#s30,1} where #s30<:Real,AbstractArray{#s29,2} where #s29<:Real,AbstractArray{#s28,1} where #s28<:Real,Array{#s27,1} where #s27<:AbstractConvexSet{T}}, Tuple{Workspace,AbstractArray{#s26,2} where #s26<:Real,AbstractArray{#s25,1} where #s25<:Real,AbstractArray{#s24,2} where #s24<:Real,AbstractArray{#s18,1} where #s18<:Real,Array{#s17,1} where #s17<:AbstractConvexSet{T},Settings}} where T",
    "page": "Docstrings",
    "title": "COSMO.set!",
    "category": "method",
    "text": "set!(model, P, q, A, b, convex_sets, [settings])\n\nSets model data directly based on provided fields.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#COSMO.warm_start!-Tuple{COSMO.Workspace}",
    "page": "Docstrings",
    "title": "COSMO.warm_start!",
    "category": "method",
    "text": "warm_start!(model, [x0, y0])\n\nProvides the COSMO.Model with warm starting values for the primal variable x and/or the dual variable y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [COSMO]\nOrder = [:type, :function]"
},

]}
