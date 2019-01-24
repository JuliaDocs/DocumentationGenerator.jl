var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DiffEqCallbacks.jl-1",
    "page": "Readme",
    "title": "DiffEqCallbacks.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby)(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)(Image: DiffEqCallbacks) (Image: DiffEqCallbacks)This is a library of callbacks for extending the solvers of DifferentialEquations.jl."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To use the callbacks provided in this library with DifferentialEquations.jl solvers, just pass it to the solver via the callback keyword argument:sol = solve(prob,alg;callback=cb)For more information on using callbacks, see the manual page."
},

{
    "location": "#ManifoldProjection-1",
    "page": "Readme",
    "title": "ManifoldProjection",
    "category": "section",
    "text": "This projects the solution to a manifold, conserving a property while conserving the order.ManifoldProjection(g;nlsolve=NLSOLVEJL_SETUP(),save=true)g: The residual function for the manifold: g(resid,u). This is an inplace function which writes to the residual the difference from the manifold components.\nnlsolve: A nonlinear solver as defined in the nlsolve format\nsave: Whether to do the standard saving (applied after the callback)"
},

{
    "location": "#AutoAbstol-1",
    "page": "Readme",
    "title": "AutoAbstol",
    "category": "section",
    "text": "Many problem solving environments such as MATLAB provide a way to automatically adapt the absolute tolerance to the problem. This helps the solvers automatically \"learn\" what appropriate limits are. Via the callback interface, DiffEqCallbacks.jl implements a callback AutoAbstol which has the same behavior as the MATLAB implementation, that is the absolute tolerance starts at init_curmax (default 1-e6), and at each iteration it is set to the maximum value that the state has thus far reached times the relative tolerance.To generate the callback, use the constructor:AutoAbstol(save=true;init_curmax=1e-6)save determines whether this callback has saving enabled, and init_curmax is the initial abstol. If this callback is used in isolation, save=true is required for normal saving behavior. Otherwise, save=false should be set to ensure extra saves do not occur."
},

{
    "location": "#Domain-Controls-1",
    "page": "Readme",
    "title": "Domain Controls",
    "category": "section",
    "text": "The domain controls are efficient methods for preserving a domain relation for the solution value u. Unlike the isoutofdomain method, these methods use interpolations and extrapolations to more efficiently choose stepsizes, but require that the solution is well defined slightly outside of the domain."
},

{
    "location": "#PositiveDomain-1",
    "page": "Readme",
    "title": "PositiveDomain",
    "category": "section",
    "text": "PositiveDomain(u=nothing; save=true, abstol=nothing, scalefactor=nothing)"
},

{
    "location": "#GeneralDomain-1",
    "page": "Readme",
    "title": "GeneralDomain",
    "category": "section",
    "text": "GeneralDomain(g, u=nothing; nlsolve=NLSOLVEJL_SETUP(), save=true,\n                       abstol=nothing, scalefactor=nothing, autonomous=numargs(g)==2,\n                       nlopts=Dict(:ftol => 10*eps()))"
},

{
    "location": "#StepsizeLimiter-1",
    "page": "Readme",
    "title": "StepsizeLimiter",
    "category": "section",
    "text": "The stepsize limiter lets you define a function dtFE(u,p,t) which changes the allowed maximal stepsize throughout the computation. The constructor is:StepsizeLimiter(dtFE;safety_factor=9//10,max_step=false,cached_dtcache=0.0)dtFE is the maximal timestep and is calculated using the previous t and u. safety_factor is the factor below the true maximum that will be stepped to which defaults to 9//10. max_step=true makes every step equal to safety_factor*dtFE(u,p,t) when the solver is set to adaptive=false. cached_dtcache should be set to match the type for time when not using Float64 values."
},

{
    "location": "#FunctionCallingCallback-1",
    "page": "Readme",
    "title": "FunctionCallingCallback",
    "category": "section",
    "text": "The function calling callback lets you define a function func(u,t,integrator) which gets calls at the time points of interest. The constructor is:FunctionCallingCallback(func;\n               funcat=Vector{Float64}(),\n               func_everystep=isempty(funcat),\n               func_start = true\n               tdir=1)func(t, u, integrator) is the function to be called.\nfuncat values that the function is sure to be evaluated at.\nfunc_everystep whether to call the function after each integrator step.\nfunc_start whether the function is called the initial condition.\ntdir should be sign(tspan[end]-tspan[1]). It defaults to 1 and should be adapted if tspan[1] > tspan[end]."
},

{
    "location": "#SavingCallback-1",
    "page": "Readme",
    "title": "SavingCallback",
    "category": "section",
    "text": "The saving callback lets you define a function save_func(u, t, integrator) which returns quantities of interest that shall be saved. The constructor is:SavingCallback(save_func, saved_values::SavedValues;\n               saveat=Vector{eltype(saved_values.t)}(),\n               save_everystep=isempty(saveat),\n               save_start = true,\n               tdir=1)save_func(u, t, integrator) returns the quantities which shall be saved. Note that this should allocate the output (not as a view to u).\nsaved_values::SavedValues is the types that save_func will return, i.e. save_func(t, u, integrator)::savevalType. It\'s specified via SavedValues(typeof(t),savevalType), i.e. give the type for time and the type that save_func will output (or higher compatible type).\nsaveat mimics saveat in solve from solve.\nsave_everystep mimics save_everystep from solve.\nsave_start mimics save_start from solve.\ntdir should be sign(tspan[end]-tspan[1]). It defaults to 1 and should be adapted if tspan[1] > tspan[end].The outputted values are saved into saved_values. Time points are found via saved_values.t and the values are saved_values.saveval."
},

{
    "location": "#IterativeCallback-1",
    "page": "Readme",
    "title": "IterativeCallback",
    "category": "section",
    "text": "IterativeCallback is a callback to be used to iteratively apply some affect. For example, if given the first effect at t₁, you can define t₂ to apply the next effect.A IterativeCallback is constructed as follows:function IterativeCallback(time_choice, user_affect!,tType = Float64;\n                           initialize = DiffEqBase.INITIALIZE_DEFAULT,\n                           initial_affect = false, kwargs...)where time_choice(integrator) determines the time of the next callback and user_affect! is the effect applied to the integrator at the stopping points. If nothing is returned for the time choice then the iterator ends."
},

{
    "location": "#PeriodicCallback-1",
    "page": "Readme",
    "title": "PeriodicCallback",
    "category": "section",
    "text": "PeriodicCallback can be used when a function should be called periodically in terms of integration time (as opposed to wall time), i.e. at t = tspan[1], t = tspan[1] + Δt, t = tspan[1] + 2Δt, and so on. This callback can, for example, be used to model a digital controller for an analog system, running at a fixed rate.A PeriodicCallback can be constructed as follows:PeriodicCallback(f, Δt::Number; kwargs...)where f is the function to be called periodically, Δt is the period, and kwargs are keyword arguments accepted by the DiscreteCallback constructor."
},

{
    "location": "#TerminateSteadyState-1",
    "page": "Readme",
    "title": "TerminateSteadyState",
    "category": "section",
    "text": "TerminateSteadyState can be used to solve the problem for the steady-state by running the solver until the derivatives of the problem converge to 0 or tspan[2] is reached. This is an alternative approach to root finding (see the Steady State Solvers section). The constructor of this callback is:TerminateSteadyState(abstol = 1e-8, reltol = 1e-6, test = allDerivPass)where abstol and reltol are the absolute and relative tolerance, respectively. These tolerances may be specified as scalars or as arrays of the same length as the states of the problem. test represents the function that evaluates the condition for termination. The default condition is that all derivatives should become smaller than abstol and the states times reltol. The user can pass any other function to implement a different termination condition. Such function should take four arguments: integrator (see Integrator Interface for details), abstol and reltol."
},

{
    "location": "autodocs/#DiffEqCallbacks.SavedValues",
    "page": "Docstrings",
    "title": "DiffEqCallbacks.SavedValues",
    "category": "type",
    "text": "SavedValues{tType<:Real, savevalType}\n\nA struct used to save values of the time in t::Vector{tType} and additional values in saveval::Vector{savevalType}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqCallbacks.SavedValues-Union{Tuple{savevalType}, Tuple{tType}, Tuple{Type{tType},Type{savevalType}}} where savevalType where tType",
    "page": "Docstrings",
    "title": "DiffEqCallbacks.SavedValues",
    "category": "method",
    "text": "SavedValues(tType::DataType, savevalType::DataType)\n\nReturn SavedValues{tType, savevalType} with empty storage vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqCallbacks.FunctionCallingCallback-Tuple{Any}",
    "page": "Docstrings",
    "title": "DiffEqCallbacks.FunctionCallingCallback",
    "category": "method",
    "text": "FunctionCallingCallback(func;\n                funcat=Vector{Float64}(),\n                func_everystep=isempty(funcat),\n                func_start = true,\n                tdir=1)\n\nA DiscreteCallback applied after every step to call func(u,t,integrator) If func_everystep, every step of the integrator gives a func call. If funcat is specified, the function is called at the given times, using interpolation if necessary. If the time tdir direction is not positive, i.e. tspan[1] > tspan[2], tdir = -1 has to be specified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqCallbacks.SavingCallback-Tuple{Any,SavedValues}",
    "page": "Docstrings",
    "title": "DiffEqCallbacks.SavingCallback",
    "category": "method",
    "text": "SavingCallback(save_func, saved_values::SavedValues;\n                saveat=Vector{eltype(saved_values.t)}(),\n                save_everystep=isempty(saveat),\n                save_start = true,\n                tdir=1)\n\nA DiscreteCallback applied after every step, saving the time t and the value of save_func(u, t, integrator) in saved_values.\n\nIf save_everystep, every step of the integrator is saved. If saveat is specified, the values are saved at the given times, using interpolation if necessary. If the time tdir direction is not positive, i.e. tspan[1] > tspan[2], tdir = -1 has to be specified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqCallbacks.affect!-Union{Tuple{uType}, Tuple{S}, Tuple{T}, Tuple{Any,AbstractDomainAffect{T,S,uType}}} where uType where S where T",
    "page": "Docstrings",
    "title": "DiffEqCallbacks.affect!",
    "category": "method",
    "text": "affect!(integrator, f::AbstractDomainAffect)\n\nApply domain callback f to integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqCallbacks.isaccepted-Tuple{Any,Any,Any,Any,DiffEqCallbacks.AbstractDomainAffect,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "DiffEqCallbacks.isaccepted",
    "category": "method",
    "text": "isaccepted(u, abstol, f::AbstractDomainAffect, args...)\n\nReturn whether u is an acceptable state vector at the next time point given absolute tolerance abstol, callback f, and other optional arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqCallbacks.modify_u!-Tuple{Any,DiffEqCallbacks.AbstractDomainAffect}",
    "page": "Docstrings",
    "title": "DiffEqCallbacks.modify_u!",
    "category": "method",
    "text": "modify_u!(integrator, f::AbstractDomainAffect)\n\nModify current state vector u of integrator if required, and return whether it actually was modified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqCallbacks.setup-Tuple{DiffEqCallbacks.AbstractDomainAffect,Any}",
    "page": "Docstrings",
    "title": "DiffEqCallbacks.setup",
    "category": "method",
    "text": "setup(f::AbstractDomainAffect, integrator)\n\nSetup callback f and return an arbitrary tuple whose elements are used as additional arguments in checking whether time step is accepted.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DiffEqCallbacks]\nOrder = [:type, :function]"
},

]}
