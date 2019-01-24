var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#OrdinaryDiffEq.jl-1",
    "page": "Readme",
    "title": "OrdinaryDiffEq.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov)OrdinaryDiffEq.jl is a component package in the DifferentialEquations ecosystem. It holds the ordinary differential equation solvers and utilities. While completely independent and usable on its own, users interested in using this functionality should check out DifferentialEquations.jl."
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "OrdinaryDiffEq.jl is part of the JuliaDiffEq common interface, but can be used independently of DifferentialEquations.jl. The only requirement is that the user passes an OrdinaryDiffEq.jl algorithm to solve. For example, we can solve the ODE tutorial from the docs using the Tsit5() algorithm:using OrdinaryDiffEq\nf(u,p,t) = 1.01*u\nu0=1/2\ntspan = (0.0,1.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,Tsit5(),reltol=1e-8,abstol=1e-8)\nusing Plots\nplot(sol,linewidth=5,title=\"Solution to the linear ODE with a thick line\",\n     xaxis=\"Time (t)\",yaxis=\"u(t) (in μm)\",label=\"My Thick Line!\") # legend=false\nplot!(sol.t, t->0.5*exp(1.01t),lw=3,ls=:dash,label=\"True Solution!\")That example uses the out-of-place syntax f(u,p,t), while the inplace syntax (more efficient for systems of equations) is shown in the Lorenz example:using OrdinaryDiffEq\nfunction lorenz(du,u,p,t)\n du[1] = 10.0(u[2]-u[1])\n du[2] = u[1]*(28.0-u[3]) - u[2]\n du[3] = u[1]*u[2] - (8/3)*u[3]\nend\nu0 = [1.0;0.0;0.0]\ntspan = (0.0,100.0)\nprob = ODEProblem(lorenz,u0,tspan)\nsol = solve(prob,Tsit5())\nusing Plots; plot(sol,vars=(1,2,3))For \"refined ODEs\" like dynamical equations and SecondOrderODEProblems, refer to the DiffEqDocs. For example, in DiffEqTutorials.jl we show how to solve equations of motion using symplectic methods:function HH_acceleration(dv,v,u,p,t)\n    x,y  = u\n    dx,dy = dv\n    dv[1] = -x - 2x*y\n    dv[2] = y^2 - y -x^2\nend\ninitial_positions = [0.0,0.1]\ninitial_velocities = [0.5,0.0]\nprob = SecondOrderODEProblem(HH_acceleration,initial_velocities,initial_positions,tspan)\nsol2 = solve(prob, KahanLi8(), dt=1/10);Other refined forms are IMEX and semi-linear ODEs (for exponential integrators)."
},

{
    "location": "#Available-Solvers-1",
    "page": "Readme",
    "title": "Available Solvers",
    "category": "section",
    "text": "For the list of available solvers, please refer to the DifferentialEquations.jl ODE Solvers, Dynamical ODE Solvers, and the Split ODE Solvers pages."
},

{
    "location": "autodocs/#OrdinaryDiffEq.NLFunctional-Tuple{Any}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.NLFunctional",
    "category": "method",
    "text": "(S::NLFunctional)(integrator) -> (z, η, iter, fail_convergence)\n\nPerform functional iteration that is used by implicit methods, where z is the solution, η is used to measure the iteration error (see [HW96]), iter is the number of iteration, and fail_convergence reports whether the algorithm succeed.  It solves\n\nG(z) = dtf(tmp + γz p t+ch)\nz = G(z)\n\nby iterating\n\nzᵏ¹ = G(zᵏ)\n\n[HW96]: Ernst Hairer and Gerhard Wanner, \"Solving Ordinary Differential\n\nEquations II, Springer Series in Computational Mathematics. ISBN 978-3-642-05221-7. Section IV.8. doi:10.1007/978-3-642-05221-7\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.NLNewton-Tuple{Any}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.NLNewton",
    "category": "method",
    "text": "(S::NLNewton)(integrator) -> (z, η, iter, fail_convergence)\n\nPerform numerically stable modified NLNewton iteration that is specialized for implicit methods (see [HS96] and [HW96]), where z is the solution, η is used to measure the iteration error (see [HW96]), iter is the number of iteration, and fail_convergence reports whether the algorithm succeed. It solves\n\nG(z) = dtf(tmp + γz p t+ch) - z = 0\n\nby iterating\n\nW Δᵏ = dtf(tmp + γzᵏ p t+ch) - zᵏ\nzᵏ¹ = zᵏ + Δᵏ\n\nwhere W=M-dt⋅γJ, M is the mass matrix, dt is the step size, γ is a constant, and J is the Jacobian matrix.\n\n[HS96]: M.E.Hoseaa and L.F.Shampine, \"Analysis and implementation of TR-BDF2\",\n\nApplied Numerical Mathematics, Volume 20, Issues 1–2, February 1996, Pages 21-37. doi:10.1016/0168-9274(95)00115-8\n\n[HW96]: Ernst Hairer and Gerhard Wanner, \"Solving Ordinary Differential\n\nEquations II, Springer Series in Computational Mathematics. ISBN 978-3-642-05221-7. Section IV.8. doi:10.1007/978-3-642-05221-7\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.addsteps!",
    "page": "Docstrings",
    "title": "DiffEqBase.addsteps!",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.addsteps!",
    "page": "Docstrings",
    "title": "DiffEqBase.addsteps!",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.addsteps!",
    "page": "Docstrings",
    "title": "DiffEqBase.addsteps!",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.addsteps!",
    "page": "Docstrings",
    "title": "DiffEqBase.addsteps!",
    "category": "function",
    "text": "An Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\nCalled to add the extra k9, k10, k11 steps for the Order 5 interpolation when needed\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.addsteps!",
    "page": "Docstrings",
    "title": "DiffEqBase.addsteps!",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.addsteps!",
    "page": "Docstrings",
    "title": "DiffEqBase.addsteps!",
    "category": "function",
    "text": "By default, Hermite interpolant so update the derivative at the two ends\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.addsteps!",
    "page": "Docstrings",
    "title": "DiffEqBase.addsteps!",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.addsteps!",
    "page": "Docstrings",
    "title": "DiffEqBase.addsteps!",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.addsteps!",
    "page": "Docstrings",
    "title": "DiffEqBase.addsteps!",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.addsteps!",
    "page": "Docstrings",
    "title": "DiffEqBase.addsteps!",
    "category": "function",
    "text": "An Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\nCalled to add the extra k9, k10, k11 steps for the Order 5 interpolation when needed\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqBase.addsteps!",
    "page": "Docstrings",
    "title": "DiffEqBase.addsteps!",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.constructDormandPrince",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.constructDormandPrince",
    "category": "function",
    "text": "constructDormandPrince()\n\nConstructs the tableau object for the Dormand-Prince Order 4/5 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.ode_interpolant-Union{Tuple{TI}, Tuple{Any,Any,Any,Any,Any,Any,Any,Type{Val{TI}}}} where TI",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.ode_interpolant",
    "category": "method",
    "text": "odeinterpolant and odeinterpolant! dispatch\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Anas5ConstantCache",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Anas5ConstantCache",
    "category": "type",
    "text": "An Optimized Runge-Kutta method for the solution of Orbital Problems by Z.A. Anastassi and T.E. Simos Journal of Computational and Applied Mathematics, Volume 175, Issue 1, 1 March 2005, Pages 1 to 9.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.BS3ConstantCache-Tuple{Type,Type}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.BS3ConstantCache",
    "category": "method",
    "text": "constructBogakiShampine3()\n\nConstructs the tableau object for the Bogakai-Shampine Order 2/3 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.BS3ConstantCache-Union{Tuple{T2}, Tuple{T}, Tuple{Type{T},Type{T2}}} where T2<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T} where T<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.BS3ConstantCache",
    "category": "method",
    "text": "constructBogakiShampine3()\n\nConstructs the tableau object for the Bogakai-Shampine Order 2/3 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.BS5ConstantCache-Tuple{Type,Type}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.BS5ConstantCache",
    "category": "method",
    "text": "An Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.BS5ConstantCache-Union{Tuple{T2}, Tuple{T}, Tuple{Type{T},Type{T2}}} where T2<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T} where T<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.BS5ConstantCache",
    "category": "method",
    "text": "An Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Feagin10ConstantCache-Tuple{Type,Type}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Feagin10ConstantCache",
    "category": "method",
    "text": "constructFeagin10\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Feagin10ConstantCache-Union{Tuple{T2}, Tuple{T}, Tuple{Type{T},Type{T2}}} where T2<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T} where T<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Feagin10ConstantCache",
    "category": "method",
    "text": "constructFeagin10\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Feagin12ConstantCache-Tuple{Type,Type}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Feagin12ConstantCache",
    "category": "method",
    "text": "constructFeagin12\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Feagin12ConstantCache-Union{Tuple{T2}, Tuple{T}, Tuple{Type{T},Type{T2}}} where T2<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T} where T<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Feagin12ConstantCache",
    "category": "method",
    "text": "constructFeagin12\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Feagin14ConstantCache-Tuple{Type,Type}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Feagin14ConstantCache",
    "category": "method",
    "text": "constructFeagin14\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Feagin14ConstantCache-Union{Tuple{T2}, Tuple{T}, Tuple{Type{T},Type{T2}}} where T2<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T} where T<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Feagin14ConstantCache",
    "category": "method",
    "text": "constructFeagin14\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.ODEIntegrator",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.ODEIntegrator",
    "category": "type",
    "text": "ODEIntegrator\n\nFundamental struct allowing interactively stepping through the numerical solving of a differential equation. The full documentation is hosted here: http://docs.juliadiffeq.org/latest/basics/integrator.html. This docstring describes basic functionality only!\n\nInitialize using integrator = init(prob::ODEProblem, alg; kwargs...). The keyword args which are accepted are the same Common Solver Options used by solve.\n\nFor reference, relevant fields of the ODEIntegrator are:\n\nt - time of the proposed step\nu - value at the proposed step\nopts - common solver options\nalg - the algorithm associated with the solution\nf - the function being solved\nsol - the current state of the solution\ntprev - the last timepoint\nuprev - the value at the last timepoint\n\nopts holds all of the common solver options, and can be mutated to change the solver characteristics. For example, to modify the absolute tolerance for the future timesteps, one can do:\n\nintegrator.opts.abstol = 1e-9\n\nFor more info see the linked documentation page.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.TanYam7ConstantCache-Tuple{Type,Type}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.TanYam7ConstantCache",
    "category": "method",
    "text": "On the Optimization of Some Nine-Stage Seventh-order Runge-Kutta Method, by M. Tanaka, S. Muramatsu and S. Yamashita, Information Processing Society of Japan, Vol. 33, No. 12 (1992) pages 1512-1526.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.TanYam7ConstantCache-Union{Tuple{T2}, Tuple{T}, Tuple{Type{T},Type{T2}}} where T2<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T} where T<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.TanYam7ConstantCache",
    "category": "method",
    "text": "On the Optimization of Some Nine-Stage Seventh-order Runge-Kutta Method, by M. Tanaka, S. Muramatsu and S. Yamashita, Information Processing Society of Japan, Vol. 33, No. 12 (1992) pages 1512-1526.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.TsitPap8ConstantCache-Tuple{Type,Type}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.TsitPap8ConstantCache",
    "category": "method",
    "text": "Cheap Error Estimation for Runge-Kutta methods, by Ch. Tsitouras and S.N. Papakostas,  Siam Journal on Scientific Computing, Vol. 20, Issue 6, Nov 1999.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.TsitPap8ConstantCache-Union{Tuple{T2}, Tuple{T}, Tuple{Type{T},Type{T2}}} where T2<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T} where T<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.TsitPap8ConstantCache",
    "category": "method",
    "text": "Cheap Error Estimation for Runge-Kutta methods, by Ch. Tsitouras and S.N. Papakostas,  Siam Journal on Scientific Computing, Vol. 20, Issue 6, Nov 1999.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Vern6ConstantCache-Tuple{Type,Type}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Vern6ConstantCache",
    "category": "method",
    "text": "From Verner\'s Website\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Vern6ConstantCache-Union{Tuple{T2}, Tuple{T}, Tuple{Type{T},Type{T2}}} where T2<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T} where T<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Vern6ConstantCache",
    "category": "method",
    "text": "From Verner\'s Website\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Vern9ConstantCache-Tuple{Type,Type}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Vern9ConstantCache",
    "category": "method",
    "text": "From Verner\'s Webiste\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Vern9ConstantCache-Union{Tuple{T2}, Tuple{T}, Tuple{Type{T},Type{T2}}} where T2<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T} where T<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Vern9ConstantCache",
    "category": "method",
    "text": "From Verner\'s Webiste\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.WOperator",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.WOperator",
    "category": "type",
    "text": "WOperator(mass_matrix,gamma,J[;transform=false])\n\nA linear operator that represents the W matrix of an ODEProblem, defined as\n\nW = MM - gamma J\n\nor, if transform=true:\n\nW = frac1gammaMM - J\n\nwhere MM is the mass matrix (a regular AbstractMatrix or a UniformScaling), γ is a real number proportional to the time step, and J is the Jacobian operator (must be a AbstractDiffEqLinearOperator). A WOperator can also be constructed using a *DEFunction directly as\n\nWOperator(f,gamma[;transform=false])\n\nf needs to have a jacobian and jac_prototype, but the prototype does not need to be a diffeq operator –- it will automatically be converted to one.\n\nWOperator supports lazy * and mul! operations, the latter utilizing an internal cache (can be specified in the constructor; default to regular Vector). It supports all of AbstractDiffEqLinearOperator\'s interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.BS5Interp-Tuple{Type,Type}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.BS5Interp",
    "category": "method",
    "text": "An Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\nUsed in the lazy construction of the dense output\n\nk9, k10, k11 are not computed until called in the dense routine\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.BS5Interp-Union{Tuple{T2}, Tuple{T}, Tuple{Type{T},Type{T2}}} where T2<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T} where T<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.BS5Interp",
    "category": "method",
    "text": "An Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\nUsed in the lazy construction of the dense output\n\nk9, k10, k11 are not computed until called in the dense routine\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.BS5Interp_polyweights-Tuple{Type}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.BS5Interp_polyweights",
    "category": "method",
    "text": "Coefficients for the polynomial bᵢΘ = ri1Θ + ri2Θ^2 + ri3*Θ^3 + ...\n\nThese coefficients are taken from RKSuite\n\nNote that RKSuite has an error: r081 should be 0 and r011 should be 1. This is pretty easy to spot since the first order interpolation is linear from y₀.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.BS5Interp_polyweights-Union{Tuple{Type{T}}, Tuple{T}} where T<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.BS5Interp_polyweights",
    "category": "method",
    "text": "Coefficients for the polynomial bᵢΘ = ri1Θ + ri2Θ^2 + ri3*Θ^3 + ...\n\nThese coefficients are taken from RKSuite\n\nNote that RKSuite has an error: r081 should be 0 and r011 should be 1. This is pretty easy to spot since the first order interpolation is linear from y₀.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Tsit5Interp-Tuple{Type}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Tsit5Interp",
    "category": "method",
    "text": "Coefficients for the polynomial bᵢΘ = ri1Θ + ri2Θ^2 + ri3*Θ^3 + ...\n\nThese are the coefficients of the expanded form of the polynomials from\n\nRunge–Kutta pairs of order 5(4) satisfying only the first column simplifying assumption\n\nCh. Tsitouras\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Tsit5Interp-Union{Tuple{Type{T}}, Tuple{T}} where T<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Tsit5Interp",
    "category": "method",
    "text": "Coefficients for the polynomial bᵢΘ = ri1Θ + ri2Θ^2 + ri3*Θ^3 + ...\n\nThese are the coefficients of the expanded form of the polynomials from\n\nRunge–Kutta pairs of order 5(4) satisfying only the first column simplifying assumption\n\nCh. Tsitouras\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Vern6Interp_polyweights-Tuple{Type}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Vern6Interp_polyweights",
    "category": "method",
    "text": "Coefficients for the polynomial bᵢΘ = ri1Θ + ri2Θ^2 + ri3*Θ^3 + ...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.Vern6Interp_polyweights-Union{Tuple{Type{T}}, Tuple{T}} where T<:Union{Float32, Float64, Dual{Tag{T,W},K,3} where K<:Union{Float32, Float64} where W<:Union{Float32, Float64} where T}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.Vern6Interp_polyweights",
    "category": "method",
    "text": "Coefficients for the polynomial bᵢΘ = ri1Θ + ri2Θ^2 + ri3*Θ^3 + ...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq._ode_interpolant-Tuple{Any,Any,Any,Any,Any,Union{DP8Cache, DP8ConstantCache},Nothing,Type{Val{0}}}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq._ode_interpolant",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq._ode_interpolant-Tuple{Any,Any,Any,Any,Any,Union{Rodas4Cache, Rodas4ConstantCache},Nothing,Type{Val{0}}}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq._ode_interpolant",
    "category": "method",
    "text": "From MATLAB ODE Suite by Shampine\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.alg_cache_expRK-Tuple{OrdinaryDiffEq.OrdinaryDiffEqExponentialAlgorithm,Any,Any,Any,Any,Any,Any,Any,Any,Any,Any,Any}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.alg_cache_expRK",
    "category": "method",
    "text": "alg_cache_expRK(alg,u,uEltypeNoUnits,uprev,f,t,dt,p,du1,tmp,dz,plist)\n\nConstruct the non-standard caches (not uType or rateType) for ExpRK integrators.\n\nplist is a list of integers each corresponding to the order of a phiv(!) call in perform_step!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.alg_cache_exprb-Tuple{OrdinaryDiffEq.OrdinaryDiffEqAdaptiveExponentialAlgorithm,Any,Any,Any,Any,Any,Any,Any,Any,Any,Any}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.alg_cache_exprb",
    "category": "method",
    "text": "alg_cache_exprb(alg,uEltypeNoUnits,uprev,f,t,p,du1,tmp,dz,plist)\n\nConstruct the non-standard caches (not uType or rateType) for Exprb integrators.\n\nplist is a list of integers each corresponding to the order of a phiv(!) call in perform_step!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.calc_J!-Tuple{Any,OrdinaryDiffEq.OrdinaryDiffEqMutableCache,Any}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.calc_J!",
    "category": "method",
    "text": "calc_J!(integrator,cache,is_compos)\n\nInterface for calculating the jacobian.\n\nFor constant caches, a new jacobian object is returned whereas for mutable caches cache.J is updated. In both cases, if integrator.f has a custom jacobian update function, then it will be called for the update. Otherwise, either ForwardDiff or finite difference will be used depending on the jac_config of the cache.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.calc_J-Tuple{Any,OrdinaryDiffEq.OrdinaryDiffEqConstantCache,Any}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.calc_J",
    "category": "method",
    "text": "calc_J(integrator,cache,is_compos)\n\nInterface for calculating the jacobian.\n\nFor constant caches, a new jacobian object is returned whereas for mutable caches cache.J is updated. In both cases, if integrator.f has a custom jacobian update function, then it will be called for the update. Otherwise, either ForwardDiff or finite difference will be used depending on the jac_config of the cache.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.calculate_residuals!-NTuple{6,Any}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.calculate_residuals!",
    "category": "method",
    "text": "calculate_residuals!(out, u₀, u₁, α, ρ)\n\nSave element-wise residuals\n\nfracũα+maxu₀u₁*ρ\n\nin out.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.calculate_residuals!-NTuple{7,Any}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.calculate_residuals!",
    "category": "method",
    "text": "calculate_residuals!(out, ũ, u₀, u₁, α, ρ)\n\nSave element-wise residuals\n\nfracũα+maxu₀u₁*ρ\n\nin out.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.calculate_residuals-NTuple{5,Any}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.calculate_residuals",
    "category": "method",
    "text": "calculate_residuals(u₀, u₁, α, ρ)\n\nCalculate element-wise residuals\n\nfracũα+maxu₀u₁*ρ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.calculate_residuals-NTuple{6,Any}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.calculate_residuals",
    "category": "method",
    "text": "calculate_residuals(ũ, u₀, u₁, α, ρ)\n\nCalculate element-wise residuals\n\nfracũα+maxu₀u₁*ρ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.choosedeg!-Union{Tuple{T}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.choosedeg!",
    "category": "method",
    "text": "choosedeg!(cache) -> nothing\n\nCalculate ms[mdeg] (the degree of the Chebyshev polynomial) and cache.recind (the index of recurrence parameters for that degree), where recf[recind:(recind+ms[mdeg]-2)] are the μ,κ pairs for the mdeg degree method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.expRK_operators-Tuple{Union{OrdinaryDiffEqAdaptiveExponentialAlgorithm, OrdinaryDiffEqExponentialAlgorithm},Any,Any}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.expRK_operators",
    "category": "method",
    "text": "expRK_operators(alg,dt,A) -> ops\n\nCompute operator(s) for an ExpRK algorithm. dt is the time step and A is the matrix form of the linear operator (from either a linear problem or a SplitODEProblem). All ExpRK methods that use caching operators should implement this method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.hermite_interpolant-Tuple{Any,Any,Any,Any,Any,Nothing,Type{Val{0}}}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.hermite_interpolant",
    "category": "method",
    "text": "Hairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 190\n\nHerimte Interpolation, chosen if no other dispatch for ode_interpolant\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.hermite_interpolant-Tuple{Any,Any,Any,Any,Any,Nothing,Type{Val{1}}}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.hermite_interpolant",
    "category": "method",
    "text": "Herimte Interpolation, chosen if no other dispatch for ode_interpolant\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.hermite_interpolant-Tuple{Any,Any,Any,Any,Any,Nothing,Type{Val{2}}}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.hermite_interpolant",
    "category": "method",
    "text": "Herimte Interpolation, chosen if no other dispatch for ode_interpolant\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.hermite_interpolant-Tuple{Any,Any,Any,Any,Any,Nothing,Type{Val{3}}}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.hermite_interpolant",
    "category": "method",
    "text": "Herimte Interpolation, chosen if no other dispatch for ode_interpolant\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.linear_interpolant-Tuple{Any,Any,Any,Any,Nothing,Type{Val{1}}}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.linear_interpolant",
    "category": "method",
    "text": "Linear Interpolation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.ode_interpolation",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.ode_interpolation",
    "category": "function",
    "text": "ode_interpolation(tval::Number,ts,timeseries,ks)\n\nGet the value at tval where the solution is known at the times ts (sorted), with values timeseries and derivatives ks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.ode_interpolation",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.ode_interpolation",
    "category": "function",
    "text": "ode_interpolation(tvals,ts,timeseries,ks)\n\nGet the value at tvals where the solution is known at the times ts (sorted), with values timeseries and derivatives ks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.ode_interpolation!",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.ode_interpolation!",
    "category": "function",
    "text": "ode_interpolation(tvals,ts,timeseries,ks)\n\nGet the value at tvals where the solution is known at the times ts (sorted), with values timeseries and derivatives ks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.ode_interpolation!",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.ode_interpolation!",
    "category": "function",
    "text": "ode_interpolation!(out,tval::Number,ts,timeseries,ks)\n\nGet the value at tval where the solution is known at the times ts (sorted), with values timeseries and derivatives ks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.reset_alg_dependent_opts!-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.reset_alg_dependent_opts!",
    "category": "method",
    "text": "If no user default, then this will change the default to the defaults for the second algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OrdinaryDiffEq.ssp_coefficient-Tuple{Any}",
    "page": "Docstrings",
    "title": "OrdinaryDiffEq.ssp_coefficient",
    "category": "method",
    "text": "ssp_coefficient(alg)\n\nReturn the SSP coefficient of the ODE algorithm alg. If one time step of size dt with alg can be written as a convex combination of explicit Euler steps with step sizes cᵢ * dt, the SSP coefficient is the minimal value of 1/cᵢ.\n\nExamples\n\njulia> ssp_coefficient(SSPRK104())\n6\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [OrdinaryDiffEq]\nOrder = [:type, :function]"
},

]}
