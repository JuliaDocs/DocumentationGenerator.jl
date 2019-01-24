var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DiffEqBase.jl-1",
    "page": "Readme",
    "title": "DiffEqBase.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)DiffEqBase.jl is a component package in the DiffEq ecosystem. It holds the common types and utility functions which are shared by other component packages in order to reduce the size of dependencies. This is so that the packages for the common interface do not require one another, allowing users to use the functionality of individual packages if they so please. Users interested in using this functionality in full should check out DifferentialEquations.jlThe documentation for the interfaces here can be found in DiffEqDocs.jl and DiffEqDevDocs.jl. Specific parts to note are:Overview\nDeveloping a Problem\nThe Common Solver Options\nPerformance Overloads Interface"
},

{
    "location": "autodocs/#DiffEqBase.AffineDiffEqOperator",
    "page": "Docstrings",
    "title": "DiffEqBase.AffineDiffEqOperator",
    "category": "type",
    "text": "AffineDiffEqOperator{T} <: AbstractDiffEqOperator{T}\n\nEx: (A₁(t) + ... + Aₙ(t))*u + B₁(t) + ... + Bₙ(t)\n\nAffineDiffEqOperator{T}(As,Bs,u_cache=nothing)\n\nTakes in two tuples for split Affine DiffEqs\n\nupdate_coefficients! works by updating the coefficients of the component operators.\nFunction calls L(u,p,t) and L(u,p,t,du) are fallbacks interpretted in this form. This will allow them to work directly in the nonlinear ODE solvers without modification.\nf(u,p,t,du) is only allowed if a u_cache is given\nB(t) can be Union{Number,AbstractArray}, in which case they are constants. Otherwise they are interpreted they are functions v=B(t) and B(v,t)\n\nSolvers will see this operator from integrator.f and can interpret it by checking the internals of As and Bs. For example, it can check is_constant(As[1]) etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.check_error-Tuple{DiffEqBase.DEIntegrator}",
    "page": "Docstrings",
    "title": "DiffEqBase.check_error",
    "category": "method",
    "text": "check_error(integrator)\n\nCheck state of integrator and return one of the Return Codes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.reeval_internals_due_to_modification!-Tuple{DiffEqBase.DEIntegrator}",
    "page": "Docstrings",
    "title": "DiffEqBase.reeval_internals_due_to_modification!",
    "category": "method",
    "text": "reeval_internals_due_to_modification!(integrator::DDEIntegrator)\n\nRecalculate interpolation data and update ODE integrator after changes by callbacks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.remake-Tuple{Any}",
    "page": "Docstrings",
    "title": "DiffEqBase.remake",
    "category": "method",
    "text": "remake(thing; <keyword arguments>)\n\nRe-construct thing with new field values specified by the keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.set_t!-Tuple{DiffEqBase.DEIntegrator,Real}",
    "page": "Docstrings",
    "title": "DiffEqBase.set_t!",
    "category": "method",
    "text": "set_t!(integrator::DEIntegrator, t::Real)\n\nSet current time point of the integrator to t.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.set_u!-Tuple{DiffEqBase.DEIntegrator,Any}",
    "page": "Docstrings",
    "title": "DiffEqBase.set_u!",
    "category": "method",
    "text": "set_u!(integrator::DEIntegrator, u)\n\nSet current state of the integrator to u.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.step!-Tuple{DiffEqBase.DEIntegrator}",
    "page": "Docstrings",
    "title": "DiffEqBase.step!",
    "category": "method",
    "text": "step!(integ::DEIntegrator [, dt [, stop_at_tdt]])\n\nPerform one (successful) step on the integrator.\n\nAlternative, if a dt is given, then step! the integrator until there is a temporal difference ≥ dt in integ.t.  When true is passed to the optional third argument, the integrator advances exactly dt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.u_modified!-Tuple{DiffEqBase.DEIntegrator,Any}",
    "page": "Docstrings",
    "title": "DiffEqBase.u_modified!",
    "category": "method",
    "text": "savevalues!(integrator::DEIntegrator,\n  force_save=false) -> Tuple{Bool, Bool}\n\nTry to save the state and time variables at the current time point, or the saveat point by using interpolation when appropriate. It returns a tuple that is (saved, savedexactly). If savevalues! saved value, then saved is true, and if savevalues! saved at the current time point, then savedexactly is true.\n\nThe saving priority/order is as follows:\n\nsave_on\nsaveat\nforce_save\nsave_everystep/timeseries_steps\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.ExplicitRKTableau",
    "page": "Docstrings",
    "title": "DiffEqBase.ExplicitRKTableau",
    "category": "type",
    "text": "ExplicitRKTableau\n\nHolds a tableau which defines an explicit Runge-Kutta method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.ImplicitRKTableau",
    "page": "Docstrings",
    "title": "DiffEqBase.ImplicitRKTableau",
    "category": "type",
    "text": "ImplicitRKTableau\n\nHolds a tableau which defines an implicit Runge-Kutta method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.check_error!-Tuple{DiffEqBase.DEIntegrator}",
    "page": "Docstrings",
    "title": "DiffEqBase.check_error!",
    "category": "method",
    "text": "check_error!(integrator)\n\nSame as check_error but also set solution\'s return code (integrator.sol.retcode) and run postamble!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.copy_fields-Tuple{AbstractArray,DEDataArray}",
    "page": "Docstrings",
    "title": "DiffEqBase.copy_fields",
    "category": "method",
    "text": "copy_fields(arr:AbstractArray, template::DEDataArray)\n\nCreate DEDataArray that wraps arr with all other fields set to a deep copy of the value in template.\n\ncopy_fields!(dest::T, src::T2) where {T<:DEDataArray,T2<:DEDataArray}\n\nReplace all fields of dest except of its wrapped array with a copy of the value in src. Arrays are recursively copied.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant!-Tuple{Any,Any,DiffEqBase.ConstantInterpolation,Any,Any,Any,Any,Type{Val{0}}}",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant!",
    "category": "method",
    "text": "Constant Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant!-Tuple{Any,Any,DiffEqBase.ConstantInterpolation,Any,Any,Any,Any,Type{Val{1}}}",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant!",
    "category": "method",
    "text": "Constant Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant!-Tuple{Any,Any,DiffEqBase.HermiteInterpolation,Any,Any,Any,Any,Any,Any,Type{Val{0}}}",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant!",
    "category": "method",
    "text": "Hairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 190\n\nHermite Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant!-Tuple{Any,Any,DiffEqBase.HermiteInterpolation,Any,Any,Any,Any,Any,Any,Type{Val{1}}}",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant!",
    "category": "method",
    "text": "Hermite Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant!-Tuple{Any,Any,DiffEqBase.HermiteInterpolation,Any,Any,Any,Any,Any,Any,Type{Val{2}}}",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant!",
    "category": "method",
    "text": "Hermite Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant!-Tuple{Any,Any,DiffEqBase.HermiteInterpolation,Any,Any,Any,Any,Any,Any,Type{Val{3}}}",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant!",
    "category": "method",
    "text": "Hermite Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant!-Tuple{Any,Any,DiffEqBase.LinearInterpolation,Any,Any,Any,Any,Type{Val{0}}}",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant!",
    "category": "method",
    "text": "Linear Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant!-Tuple{Any,Any,DiffEqBase.LinearInterpolation,Any,Any,Any,Any,Type{Val{1}}}",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant!",
    "category": "method",
    "text": "Linear Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant-Tuple{Any,DiffEqBase.ConstantInterpolation,Any,Any,Any,Any,Type{Val{0}}}",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant",
    "category": "method",
    "text": "Constant Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant-Tuple{Any,DiffEqBase.HermiteInterpolation,Any,Any,Any,Any,Any,Any,Type{Val{0}}}",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant",
    "category": "method",
    "text": "Hairer Norsett Wanner Solving Ordinary Differential Equations I - Nonstiff Problems Page 190\n\nHermite Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant-Tuple{Any,DiffEqBase.HermiteInterpolation,Any,Any,Any,Any,Any,Any,Type{Val{1}}}",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant",
    "category": "method",
    "text": "Hermite Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant-Tuple{Any,DiffEqBase.HermiteInterpolation,Any,Any,Any,Any,Any,Any,Type{Val{2}}}",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant",
    "category": "method",
    "text": "Hermite Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant-Tuple{Any,DiffEqBase.HermiteInterpolation,Any,Any,Any,Any,Any,Any,Type{Val{3}}}",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant",
    "category": "method",
    "text": "Hermite Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolant-Tuple{Any,DiffEqBase.LinearInterpolation,Any,Any,Any,Any,Type{Val{0}}}",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolant",
    "category": "method",
    "text": "Linear Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolation",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolation",
    "category": "function",
    "text": "interpolation(tval::Number,t,u,ks)\n\nGet the value at tval where the solution is known at the times t (sorted), with values u and derivatives ks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolation!",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolation!",
    "category": "function",
    "text": "interpolation(tvals,t,u,ks)\n\nGet the value at tvals where the solution is known at the times t (sorted), with values u and derivatives ks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.interpolation!",
    "page": "Docstrings",
    "title": "DiffEqBase.interpolation!",
    "category": "function",
    "text": "interpolation!(out,tval::Number,t,u,ks)\n\nGet the value at tval where the solution is known at the times t (sorted), with values u and derivatives ks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.numargs-Tuple{Any}",
    "page": "Docstrings",
    "title": "DiffEqBase.numargs",
    "category": "method",
    "text": "numparameters(f)\n\nReturns the number of parameters of f for the method which has the most parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.set_ut!-Tuple{DiffEqBase.DEIntegrator,Any,Any}",
    "page": "Docstrings",
    "title": "DiffEqBase.set_ut!",
    "category": "method",
    "text": "set_ut!(integrator::DEIntegrator, u, t)\n\nSet current state of the integrator to u and t\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.undefined_exports-Tuple{Any}",
    "page": "Docstrings",
    "title": "DiffEqBase.undefined_exports",
    "category": "method",
    "text": "undefined_exports(mod)\n\nList symbols export\'ed but not actually defined.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RecursiveArrayTools.recursivecopy!-Union{Tuple{T}, Tuple{T,T}} where T<:DEDataArray",
    "page": "Docstrings",
    "title": "RecursiveArrayTools.recursivecopy!",
    "category": "method",
    "text": "recursivecopy!(dest::T, src::T) where {T<:DEDataArray}\n\nRecursively copy fields of src to dest.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DiffEqBase]\nOrder = [:type, :function]"
},

]}
