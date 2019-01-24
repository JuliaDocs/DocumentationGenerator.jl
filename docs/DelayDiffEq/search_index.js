var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DelayDiffEq.jl-1",
    "page": "Readme",
    "title": "DelayDiffEq.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)DelayDiffEq.jl is a component package in the DifferentialEquations ecosystem. It holds the delay differential equation solvers and utilities. It is built on top of OrdinaryDiffEq to extend those solvers for delay differential equations. While completely independent and usable on its own, users interested in using this functionality should check out DifferentialEquations.jl."
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "DelayDiffEq.jl is part of the JuliaDiffEq common interface, but can be used independently of DifferentialEquations.jl. The only requirement is that the user passes a DelayDiffEq.jl algorithm to solve. For example, we can solve the DDE tutorial from the documentation using the MethodOfSteps(Tsit5()) algorithm:using DelayDiffEq\nconst p0 = 0.2; const q0 = 0.3; const v0 = 1; const d0 = 5\nconst p1 = 0.2; const q1 = 0.3; const v1 = 1; const d1 = 1\nconst d2 = 1; const beta0 = 1; const beta1 = 1; const tau = 1\nfunction bc_model(du,u,h,p,t)\n  du[1] = (v0/(1+beta0*(h(p, t-tau)[3]^2))) * (p0 - q0)*u[1] - d0*u[1]\n  du[2] = (v0/(1+beta0*(h(p, t-tau)[3]^2))) * (1 - p0 + q0)*u[1] +\n          (v1/(1+beta1*(h(p, t-tau)[3]^2))) * (p1 - q1)*u[2] - d1*u[2]\n  du[3] = (v1/(1+beta1*(h(p, t-tau)[3]^2))) * (1 - p1 + q1)*u[2] - d2*u[3]\nend\nlags = [tau]\nh(p, t) = ones(3)\ntspan = (0.0,10.0)\nu0 = [1.0,1.0,1.0]\nprob = DDEProblem(bc_model,u0,h,tspan,constant_lags = lags)\nalg = MethodOfSteps(Tsit5())\nsol = solve(prob,alg)\nusing Plots; plot(sol)Both constant and state-dependent lags are supported. Interfacing with OrdinaryDiffEq.jl for implicit methods for stiff equations is also supported."
},

{
    "location": "#Available-Solvers-1",
    "page": "Readme",
    "title": "Available Solvers",
    "category": "section",
    "text": "For the list of available solvers, please refer to the DifferentialEquations.jl DDE Solvers page. For options for the solve command, see the common solver options page."
},

{
    "location": "autodocs/#DelayDiffEq.Discontinuity",
    "page": "Docstrings",
    "title": "DelayDiffEq.Discontinuity",
    "category": "type",
    "text": "Discontinuity(t, order::Int)\n\nObject of discontinuity of order order at time t, i.e. discontinuity of orderth derivative at time t.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.MethodOfSteps-Tuple{Any}",
    "page": "Docstrings",
    "title": "DelayDiffEq.MethodOfSteps",
    "category": "method",
    "text": "MethodOfSteps(alg; constrained::Bool=false, fixedpoint_abstol=nothing,\n              fixedpoint_reltol=nothing, fixedpoint_norm=nothing,\n              max_fixedpoint_iters::Int=10)\n\nConstruct an algorithm that solves delay differential equations by the method of steps, where alg is an ODE algorithm from OrdinaryDiffEq.jl without lazy interpolation upon which the calculation of steps is based.\n\nIf the algorithm is constrained only steps of size at most the minimal delay will be taken. If it is unconstrained, fixed-point iteration is applied for step sizes that exceed the minimal delay.\n\nThe absolute and relative tolerance of the fixed-point iterations can be set by fixedpoint_abstol and fixedpoint_reltol, respectively, either as scalars or vectors. Based on these tolerances error estimates are calculated during the fixed-point iterations with a norm that may be specified as fixedpoint_norm. Fixed-point iterations are stopped if the error estimate is less than 1 or after the maximal number max_fixedpoint_iters of iteration steps.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.auto_dt_reset!-Tuple{DelayDiffEq.DDEIntegrator}",
    "page": "Docstrings",
    "title": "DiffEqBase.auto_dt_reset!",
    "category": "method",
    "text": "auto_dt_reset!(dde_int::DDEIntegrator)\n\nAutomatically determine initial time step of dde_int.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.get_proposed_dt-Tuple{DelayDiffEq.DDEIntegrator}",
    "page": "Docstrings",
    "title": "DiffEqBase.get_proposed_dt",
    "category": "method",
    "text": "get_proposed_dt(integrator::DDEIntegrator)\n\nGet the time step that integrator will take after the current step.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.initialize!-Tuple{DelayDiffEq.DDEIntegrator}",
    "page": "Docstrings",
    "title": "DiffEqBase.initialize!",
    "category": "method",
    "text": "initialize!(integrator::DDEIntegrator)\n\nSet initial values of integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.reeval_internals_due_to_modification!-Union{Tuple{DDEIntegrator}, Tuple{not_initialization}, Tuple{DDEIntegrator,Type{Val{not_initialization}}}} where not_initialization",
    "page": "Docstrings",
    "title": "DiffEqBase.reeval_internals_due_to_modification!",
    "category": "method",
    "text": "reeval_internals_due_to_modification!(integrator::DDEIntegrator)\n\nRecalculate interpolation data and update ODE integrator after changes by callbacks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.reinit!",
    "page": "Docstrings",
    "title": "DiffEqBase.reinit!",
    "category": "function",
    "text": "reinit!(integrator::DDEIntegrator[, u0 = integrator.sol.prob.u0;\n        t0 = integrator.sol.prob.tspan[1],\n        tf = integrator.sol.prob.tspan[2],\n        erase_sol = true,\n        kwargs...])\n\nReinitialize integrator with (optionally) different initial state u0, different integration interval from t0 to tf, and erased solution if erase_sol = true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.set_proposed_dt!-Tuple{DelayDiffEq.DDEIntegrator,Any}",
    "page": "Docstrings",
    "title": "DiffEqBase.set_proposed_dt!",
    "category": "method",
    "text": "set_proposed_dt!(integrator::DDEIntegrator, dt)\n\nSet the time step that integrator will take after the current step to dt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.terminate!-Tuple{DelayDiffEq.DDEIntegrator}",
    "page": "Docstrings",
    "title": "DiffEqBase.terminate!",
    "category": "method",
    "text": "terminate!(integrator::DDEIntegrator)\n\nStop further calculations of integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.u_modified!-Tuple{DelayDiffEq.DDEIntegrator,Bool}",
    "page": "Docstrings",
    "title": "DiffEqBase.u_modified!",
    "category": "method",
    "text": "u_modified!(integrator::DDEIntegrator, bool::Bool)\n\nSignal integrator whether state vector u was modified by a callback.\n\nA modified u will lead to recalculations in order to prevent discontinuities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.DiscontinuityCallback-Tuple{Any,Array{#s19131,1} where #s19131<:Discontinuity}",
    "page": "Docstrings",
    "title": "DelayDiffEq.DiscontinuityCallback",
    "category": "method",
    "text": "DiscontinuityCallback(lags, discontinuities::Vector{<:Discontinuity};\n                      [interp_points::Int=10, abstol=1e-12, reltol=0])\n\nCallback that tracks discontinuities that are propagated by dependent lags of the form (u,p,t) -> lag(u,p,t).\n\nHereby a number interp_points of interpolation points are used to first check for different signs of functions f(t) = T + lag(u(t)pt) - t, where T is time point of a previous discontinuity and t is contained in the current time interval. This shows that the current time interval contains propagated discontinuities of which the exact time point is then determined by a root finding algorithm. The sign at the lower bound of the time interval, i.e. at tprev, is set to 0 with absolute tolerance abstol and relative tolerance reltol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.HistoryFunction",
    "page": "Docstrings",
    "title": "DelayDiffEq.HistoryFunction",
    "category": "type",
    "text": "HistoryFunction(h, sol, integrator)\n\nWrap history function h, solution sol, and integrator integrator to create a common interface for retrieving values at any time point with varying accuracy.\n\nBefore the initial time point of solution sol values are calculated by history function h, for time points in the time span of sol interpolated values of sol are returned, and after the final time point of sol an inter- or extrapolation of the current state of integrator integrator is retrieved.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.add_next_discontinuities!",
    "page": "Docstrings",
    "title": "DelayDiffEq.add_next_discontinuities!",
    "category": "function",
    "text": "add_next_discontinuities!(integrator::DDEIntegrator, order[, t=integrator.t])\n\nAdd discontinuities of next order that are propagated from discontinuity of order order at time t in integrator, but only if order is less or equal than the order of the applied method or the problem is neutral.\n\nDiscontinuities caused by constant delays are immediately calculated, and discontinuities caused by dependent delays are tracked by a callback.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.advance_ode_integrator!-Tuple{DelayDiffEq.DDEIntegrator}",
    "page": "Docstrings",
    "title": "DelayDiffEq.advance_ode_integrator!",
    "category": "method",
    "text": "advance_ode_integrator!(integrator::DDEIntegrator)\n\nAdvance ODE integrator of integrator to next time interval, values and complete interpolation data of integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.agrees-NTuple{4,Any}",
    "page": "Docstrings",
    "title": "DelayDiffEq.agrees",
    "category": "method",
    "text": "agrees(h, u, p, t)\n\nDetermine whether history function evaluates to u at time point t for parameters p.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.assign_expr-Union{Tuple{name}, Tuple{Val{name},Type,Type}} where name",
    "page": "Docstrings",
    "title": "DelayDiffEq.assign_expr",
    "category": "method",
    "text": "assign_expr(::Val{name}, ::Type{T}, ::Type{cache})\n\nCreate expression that extracts field name of type T from cache of type cache to variable name.\n\nHereby u, uprev, uprev2, and function f are updated, if required.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.build_linked_cache-NTuple{9,Any}",
    "page": "Docstrings",
    "title": "DelayDiffEq.build_linked_cache",
    "category": "method",
    "text": "build_linked_cache(cache, alg, u, uprev, uprev2, f, t, dt)\n\nCreate cache for algorithm alg from existing cache cache with updated u, uprev, uprev2, f, t, and dt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.build_solution_array-Tuple{DelayDiffEq.DDEIntegrator}",
    "page": "Docstrings",
    "title": "DelayDiffEq.build_solution_array",
    "category": "method",
    "text": "build_solution_array(integrator::DDEIntegrator)\n\nCreate a DiffEqArray of the time points and values that form the solution of integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.build_solution_interpolation-Tuple{DelayDiffEq.DDEIntegrator,RecursiveArrayTools.DiffEqArray}",
    "page": "Docstrings",
    "title": "DelayDiffEq.build_solution_interpolation",
    "category": "method",
    "text": "build_solution_interpolation(integrator::DDEIntegrator, sol::DiffEqArray)\n\nCreate interpolation data to solution of integrator, which is formed by time points and values in sol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.constant_extrapolant!-Tuple{Any,Any,DiffEqBase.DEIntegrator,Any,Any}",
    "page": "Docstrings",
    "title": "DelayDiffEq.constant_extrapolant!",
    "category": "method",
    "text": "constant_extrapolant!(val, t, integrator::DEIntegrator, idxs, deriv)\n\nCalculate constant extrapolation of derivative deriv at time t and indices idxs for integrator, and save result in val if val is not nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.constant_extrapolant-Tuple{Any,DiffEqBase.DEIntegrator,Any,Any}",
    "page": "Docstrings",
    "title": "DelayDiffEq.constant_extrapolant",
    "category": "method",
    "text": "constant_extrapolant(t, integrator::DEIntegrator, idxs, deriv)\n\nCalculate constant extrapolation of derivative deriv at time t and indices idxs for integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.determine_discontinuity_existence-Tuple{Int64,Int64,Any,Any}",
    "page": "Docstrings",
    "title": "DelayDiffEq.determine_discontinuity_existence",
    "category": "method",
    "text": "determine_discontinuity_existence(prev_sign::Int, next_sign::Int, Θs, f)\n\nDetermine whether function f has a root in the interval [0, 1] by checking signs of f at 0 and 1 (prev_sign and next_sign, respectively) and at interpolation points in Θs.\n\nThis corresponds to the existence of a propagated discontinuity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.find_discontinuity_time-Tuple{DelayDiffEq.DDEIntegrator,DelayDiffEq.DiscontinuityCallback,Int64,Int64,Any,Any}",
    "page": "Docstrings",
    "title": "DelayDiffEq.find_discontinuity_time",
    "category": "method",
    "text": "find_discontinuity_time(integrator::DDEIntegrator, callback::DiscontinuityCallback,\n                        prev_sign::Int, next_sign::Int, Θs, f)\n\nFind time of propagated discontinuity for a certain dependent delay and previous discontinuity, which is root of the function f, in the current time interval of integrator with interpolation points Θs. Hereby f shows signs prev_sign and next_sign at both ends of the time interval.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.fsal_typeof-Union{Tuple{ODEIntegrator{#s19134,uType,tType,P,eigenType,tTypeNoUnits,tdirType,ksEltype,SolType,F,CacheType,O,FSALType,EventErrorType} where EventErrorType where #s19134<:OrdinaryDiffEqAlgorithm}, Tuple{FSALType}, Tuple{O}, Tuple{CacheType}, Tuple{F}, Tuple{SolType}, Tuple{ksEltype}, Tuple{tdirType}, Tuple{tTypeNoUnits}, Tuple{eigenType}, Tuple{P}, Tuple{tType}, Tuple{uType}} where FSALType where O where CacheType where F where SolType where ksEltype where tdirType where tTypeNoUnits where eigenType where P where tType where uType",
    "page": "Docstrings",
    "title": "DelayDiffEq.fsal_typeof",
    "category": "method",
    "text": "fsal_typeof(integrator::ODEIntegrator)\n\nReturn type of FSAL of integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DelayDiffEq.reduce_solution!-Tuple{DelayDiffEq.DDEIntegrator,Any}",
    "page": "Docstrings",
    "title": "DelayDiffEq.reduce_solution!",
    "category": "method",
    "text": "reduce_solution!(integrator::DDEIntegrator, tmax)\n\nRemove time points of ODE solution of integrator up to time tmax that are not required for calculation of DDE solution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.apply_callback!-Tuple{DelayDiffEq.DDEIntegrator,DelayDiffEq.DiscontinuityCallback,Any,Any}",
    "page": "Docstrings",
    "title": "DiffEqBase.apply_callback!",
    "category": "method",
    "text": "apply_callback!(integrator::DDEIntegrator, callback::DiscontinuityCallback, cb_time,\n                order)\n\nHandle discontinuity of order order at time integrator.tprev + cb_time in the current time interval of integrator that was found by callback. Cause the current step to fail, and add the found discontinuity to both the heap of discontinuities and of time stops.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.postamble!-Tuple{DelayDiffEq.DDEIntegrator}",
    "page": "Docstrings",
    "title": "DiffEqBase.postamble!",
    "category": "method",
    "text": "postamble!(integrator::DDEIntegrator)\n\nClean up solution of integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.handle_discontinuities!-Tuple{DelayDiffEq.DDEIntegrator}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.handle_discontinuities!",
    "category": "method",
    "text": "handle_discontinuities!(integrator::DDEIntegrator)\n\nHandle discontinuities at the current time point of integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.perform_step!-Tuple{DelayDiffEq.DDEIntegrator}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.perform_step!",
    "category": "method",
    "text": "perform_step!(integrator::DDEIntegrator)\n\nCalculate next step of integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DelayDiffEq]\nOrder = [:type, :function]"
},

]}
