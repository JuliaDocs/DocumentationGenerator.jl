var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: DynamicalSystems.jl logo: The Double Pendulum)Repository containing core system and data definitions used in the library DynamicalSystems.jl.Documentation Travis AppVeyor Gitter\n(Image: ) (Image: Build Status) (Image: Build status) (Image: Gitter)"
},

{
    "location": "autodocs/#DynamicalSystemsBase.ContinuousDynamicalSystem",
    "page": "Docstrings",
    "title": "DynamicalSystemsBase.ContinuousDynamicalSystem",
    "category": "type",
    "text": "ContinuousDynamicalSystem(eom, state, p [, jacobian [, J]]; t0 = 0.0)\n\nA DynamicalSystem restricted to continuous-time systems (also called ODEs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalSystemsBase.DiscreteDynamicalSystem",
    "page": "Docstrings",
    "title": "DynamicalSystemsBase.DiscreteDynamicalSystem",
    "category": "type",
    "text": "DiscreteDynamicalSystem(eom, state, p [, jacobian [, J]]; t0::Int = 0)\n\nA DynamicalSystem restricted to discrete-time systems (also called maps).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalSystemsBase.DynamicalSystem",
    "page": "Docstrings",
    "title": "DynamicalSystemsBase.DynamicalSystem",
    "category": "type",
    "text": "DynamicalSystem\n\nThe central structure of DynamicalSystems.jl. All functions of the suite that can use known equations of motion expect an instance of this type.\n\nConstructing a DynamicalSystem\n\nDiscreteDynamicalSystem(eom, state, p [, jacobian [, J0]]; t0::Int = 0)\nContinuousDynamicalSystem(eom, state, p [, jacobian [, J0]]; t0 = 0.0)\n\nwith eom the equations of motion function (see below). p is a parameter container, which we highly suggest to use a mutable object like Array, LMArray or a dictionary. Pass nothing in the place of p if your system does not have parameters.\n\nt0, J0 allow you to choose the initial time and provide an initialized Jacobian matrix. See CDS_KWARGS for the default options used to evolve continuous systems (through OrdinaryDiffEq).\n\nEquations of motion\n\nThe are two \"versions\" for DynamicalSystem, depending on whether the equations of motion (eom) are in-place (iip) or out-of-place (oop). Here is how to define them:\n\noop : The eom must be in the form eom(x, p, t) -> SVector which means that given a state x::SVector and some parameter container p it returns an SVector (from the StaticArrays module) containing the next state.\niip : The eom must be in the form eom!(xnew, x, p, t) which means that given a state x::Vector and some parameter container p, it writes in-place the new state in xnew.\n\nt stands for time (integer for discrete systems). iip is suggested for big systems, whereas oop is suggested for small systems. The break-even point at around 100 dimensions, and for using functions that use the tangent space (like e.g. lyapunovs or gali), the break-even point is at around 10 dimensions.\n\nThe constructor deduces automatically whether eom is iip or oop. It is not possible however to deduce whether the system is continuous or discrete just from the equations of motion, hence the 2 constructors.\n\nJacobian\n\nThe optional argument jacobian for the constructors is a function and (if given) must also be of the same form as the eom, jacobian(x, p, n) -> SMatrix for the out-of-place version and jacobian!(xnew, x, p, n) for the in-place version.\n\nIf jacobian is not given, it is constructed automatically using the module ForwardDiff. It is heavily advised to provide a Jacobian function, as it gives multiple orders of magnitude speedup.\n\nInterface to DifferentialEquations.jl\n\nContinuous systems are solved using DifferentialEquations.jl. The following two interfaces are provided:\n\nContinuousDynamicalSystem(prob::ODEProblem [, jacobian [, J0]])\nODEProblem(continuous_dynamical_system, tspan, args...)\n\nwhere in the second case args stands for the standard extra arguments of ODEProblem: callback, mass_matrix.\n\nIf you want to use callbacks with tangent_integrator or parallel_integrator, then invoke them with extra arguments as shown in the Advanced Documentation.\n\nRelevant Functions\n\ntrajectory, set_parameter!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalSystemsBase.dimension-Union{Tuple{DynamicalSystem{IIP,S,D,F,P,JAC,JM,IAD} where IAD where JM where JAC where P where F}, Tuple{D}, Tuple{S}, Tuple{IIP}} where D where S where IIP",
    "page": "Docstrings",
    "title": "DynamicalSystemsBase.dimension",
    "category": "method",
    "text": "dimension(thing) -> D\n\nReturn the dimension of the thing, in the sense of state-space dimensionality.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalSystemsBase.get_deviations",
    "page": "Docstrings",
    "title": "DynamicalSystemsBase.get_deviations",
    "category": "function",
    "text": "get_deviations(tang_integ)\n\nReturn the deviation vectors of the tangent_integrator in a form of a matrix with columns the vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalSystemsBase.get_state-Tuple{Any}",
    "page": "Docstrings",
    "title": "DynamicalSystemsBase.get_state",
    "category": "method",
    "text": "get_state(ds::DynamicalSystem)\n\nReturn the state of ds.\n\nget_state(integ [, i::Int = 1])\n\nReturn the state of the integrator, in the sense of the state of the dynamical system.\n\nIf the integrator is a parallel_integrator, passing i will return the i-th state. The function also correctly returns the true state of the system for tangent integrators.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalSystemsBase.integrator",
    "page": "Docstrings",
    "title": "DynamicalSystemsBase.integrator",
    "category": "function",
    "text": "integrator(ds::DynamicalSystem [, u0]; diffeq...) -> integ\n\nReturn an integrator object that can be used to evolve a system interactively using step!(integ [, Δt]). Optionally specify an initial state u0.\n\nThe state of this integrator is a vector.\n\ndiffeq... are keyword arguments propagated into init of DifferentialEquations.jl. See trajectory for examples. Only valid for continuous systems.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalSystemsBase.jacobian",
    "page": "Docstrings",
    "title": "DynamicalSystemsBase.jacobian",
    "category": "function",
    "text": "jacobian(ds::DynamicalSystem, u = ds.u0, t = ds.t0)\n\nReturn the jacobian of the system at u, at t.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalSystemsBase.parallel_integrator",
    "page": "Docstrings",
    "title": "DynamicalSystemsBase.parallel_integrator",
    "category": "function",
    "text": "parallel_integrator(ds::DynamicalSystem, states; kwargs...)\n\nReturn an integrator object that can be used to evolve many states of a system in parallel at the exact same times, using step!(integ [, Δt]).\n\nstates are expected as vectors of vectors.\n\nKeyword Arguments\n\ndiffeq... : Keyword arguments propagated into init of DifferentialEquations.jl. See trajectory for examples. Only valid for continuous systems. These keywords can also include callback for event handling.\n\nIt is heavily advised to use the functions get_state and set_state! to manipulate the integrator. Provide i as a second argument to change the i-th state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalSystemsBase.set_deviations!",
    "page": "Docstrings",
    "title": "DynamicalSystemsBase.set_deviations!",
    "category": "function",
    "text": "set_deviations!(tang_integ, Q)\n\nSet the deviation vectors of the tangent_integrator to Q, which must be a matrix with each column being a deviation vector.\n\nAutomatically does u_modified!(tang_integ, true).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalSystemsBase.set_parameter!-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "DynamicalSystemsBase.set_parameter!",
    "category": "method",
    "text": "set_parameter!(ds::DynamicalSystem, index, value)\nset_parameter!(ds::DynamicalSystem, values)\n\nChange one or many parameters of the system by setting p[index] = value in the first case and p .= values in the second.\n\nThe same function also works for any integrator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalSystemsBase.set_state!-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "DynamicalSystemsBase.set_state!",
    "category": "method",
    "text": "set_state!(integ, u [, i::Int = 1])\n\nSet the state of the integrator to u, in the sense of the state of the dynamical system. Works for any integrator (normal, tangent, parallel).\n\nFor parallel integrator, you can choose which state to set (using i).\n\nAutomatically does u_modified!(integ, true).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalSystemsBase.tangent_integrator",
    "page": "Docstrings",
    "title": "DynamicalSystemsBase.tangent_integrator",
    "category": "function",
    "text": "tangent_integrator(ds::DynamicalSystem, Q0 | k::Int; kwargs...)\n\nReturn an integrator object that evolves in parallel both the system as well as deviation vectors living on the tangent space.\n\nQ0 is a matrix whose columns are initial values for deviation vectors. If instead of a matrix Q0 an integer k is given, then k random orthonormal vectors are choosen as initial conditions.\n\nKeyword Arguments\n\nu0 : Optional different initial state.\ndiffeq... : Keyword arguments propagated into init of DifferentialEquations.jl. See trajectory for examples. Only valid for continuous systems. These keywords can also include callback for event handling.\n\nIt is heavily advised to use the functions get_state, get_deviations, set_state!, set_deviations! to manipulate the integrator.\n\nDescription\n\nIf J is the jacobian of the system then the tangent dynamics are the equations that evolve in parallel the system as well as a deviation vector (or matrix) w:\n\nbeginaligned\ndotu = f(u p t) \ndotw = J(u p t) times w\nendaligned\n\nwith f being the equations of motion and u the system state. Similar equations hold for the discrete case.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicalSystemsBase.trajectory",
    "page": "Docstrings",
    "title": "DynamicalSystemsBase.trajectory",
    "category": "function",
    "text": "trajectory(ds::DynamicalSystem, T [, u]; kwargs...) -> dataset\n\nReturn a dataset that will contain the trajectory of the system, after evolving it for total time T, optionally starting from state u. See Dataset for info on how to use this object.\n\nA W×D dataset is returned, with W = length(t0:dt:T) with t0:dt:T representing the time vector (not returned) and D the system dimension. For discrete systems both T and dt must be integers.\n\nKeyword Arguments\n\ndt :  Time step of value output during the solving of the continuous system. For discrete systems it must be an integer. Defaults to 0.01 for continuous and 1 for discrete.\nTtr : Transient time to evolve the initial state before starting saving states.\ndiffeq... : Keyword arguments propagated into init of DifferentialEquations.jl. For example abstol = 1e-9.  Only valid for continuous systems. If you want to specify a solver, do so by using the name alg, e.g.: alg = Tsit5(), maxiters = 1000. This requires you to have been first using OrdinaryDiffEq to access the solvers. See DynamicalSystemsBase.CDS_KWARGS for default values. These keywords can also include callback for event handling. Using a SavingCallback with trajectory will lead to unexpected behavior!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DynamicalSystemsBase]\nOrder = [:type, :function]"
},

]}
