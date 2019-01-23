var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#GeophysicalFlows.jl-Documentation-1",
    "page": "Home",
    "title": "GeophysicalFlows.jl Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "#Overview-1",
    "page": "Home",
    "title": "Overview",
    "category": "section",
    "text": "GeophysicalFlows.jl is a collection of modules which leverage the  FourierFlows.jl framework to provide solvers for problems in Geophysical Fluid Dynamics, on periodic domains and using Fourier-based pseudospectral  methods."
},

{
    "location": "#Developers-1",
    "page": "Home",
    "title": "Developers",
    "category": "section",
    "text": "GeophysicalFlows is currently being developed by Gregory L. Wagner and Navid C. Constantinou."
},

{
    "location": "modules/twodturb/#",
    "page": "TwoDTurb Module",
    "title": "TwoDTurb Module",
    "category": "page",
    "text": ""
},

{
    "location": "modules/twodturb/#TwoDTurb-Module-1",
    "page": "TwoDTurb Module",
    "title": "TwoDTurb Module",
    "category": "section",
    "text": "newcommandJmathsfJ"
},

{
    "location": "modules/twodturb/#Basic-Equations-1",
    "page": "TwoDTurb Module",
    "title": "Basic Equations",
    "category": "section",
    "text": "This module solves two-dimensional incompressible turbulence. The flow is given through a streamfunction psi as (uupsilon) = (-partial_ypsi partial_xpsi). The dynamical variable used here is the component of the vorticity of the flow normal to the plane of motion, q=partial_x upsilon- partial_y u = nabla^2psi. The equation solved by the module is:partial_t q + J(psi q) = underbrace-leftmu(-1)^n_mu nabla^2n_mu\n+nu(-1)^n_nu nabla^2n_nuright q_textrmdissipation + f where J(a b) = (partial_x a)(partial_y b)-(partial_y a)(partial_x b). On the right hand side, f(xyt) is forcing, mu is hypoviscosity, and nu is hyperviscosity. Plain old linear drag corresponds to n_mu=0, while normal viscosity corresponds to n_nu=1."
},

{
    "location": "modules/twodturb/#Implementation-1",
    "page": "TwoDTurb Module",
    "title": "Implementation",
    "category": "section",
    "text": "The equation is time-stepped forward in Fourier space:partial_t widehatq = - widehatJ(psi q) -left(mu k^2n_mu\n+nu k^2n_nuright) widehatq  + widehatf In doing so the Jacobian is computed in the conservative form: J(ab) = partial_y  (partial_x a) b -partial_x (partial_y a) b.Thus:mathcalL = -mu k^-2n_mu - nu k^2n_nu mathcalN(widehatq) = - mathrmik_x mathrmFFT(u q)-\n	mathrmik_y mathrmFFT(upsilon q) + widehatf "
},

{
    "location": "modules/twodturb/#AbstractTypes-and-Functions-1",
    "page": "TwoDTurb Module",
    "title": "AbstractTypes and Functions",
    "category": "section",
    "text": "ParamsFor the unforced case (f=0) parameters AbstractType is build with Params and it includes:nu:   Float; viscosity or hyperviscosity coefficient.\nnnu: Integer0; the order of viscosity n_nu. Case n_nu=1 give normal viscosity.\nmu: Float; bottom drag or hypoviscosity coefficient.\nnmu: Integerge 0; the order of hypodrag n_mu. Case n_mu=0 give plain linear drag mu.For the forced case (fne 0) parameters AbstractType is build with ForcedParams. It includes all parameters in Params and additionally:calcF!: Function that calculates the forcing widehatfVarsFor the unforced case (f=0) variables AbstractType is build with Vars and it includes:q: Array of Floats; relative vorticity.\nU: Array of Floats; x-velocity, u.\nV: Array of Floats; y-velocity, v.\nsol: Array of Complex; the solution, widehatq.\nqh: Array of Complex; the Fourier transform widehatq.\nUh: Array of Complex; the Fourier transform widehatu.\nVh: Array of Complex; the Fourier transform widehatv.For the forced case (fne 0) variables AbstractType is build with ForcedVars. It includes all variables in Vars and additionally:Fh: Array of Complex; the Fourier transform widehatf.\nprevsol: Array of Complex; the values of the solution sol at the previous time-step (useful for calculating the work done by the forcing).calcN! functionThe nonlinear term mathcalN(widehatq) is computed via functions:calcN_advection!: computes - widehatJ(psi q) and stores it in array N.function calcN_advection!(N, sol, t, s, v, p, g)\n  @. v.Uh =  im * g.l  * g.invKrsq * sol\n  @. v.Vh = -im * g.kr * g.invKrsq * sol\n  @. v.qh = sol\n\n  A_mul_B!(v.U, g.irfftplan, v.Uh)\n  A_mul_B!s(v.V, g.irfftplan, v.Vh)\n  A_mul_B!(v.q, g.irfftplan, v.qh)\n\n  @. v.U *= v.q # U*q\n  @. v.V *= v.q # V*q\n\n  A_mul_B!(v.Uh, g.rfftplan, v.U) # \\hat{U*q}\n  A_mul_B!(v.Vh, g.rfftplan, v.V) # \\hat{U*q}\n\n  @. N = -im*g.kr*v.Uh - im*g.l*v.Vh\n  nothing\nendcalcN_forced!: computes - widehatJ(psi q) via calcN_advection! and then adds to it the forcing widehatf computed via calcF! function. Also saves the solution widehatq of the previous time-step in array prevsol.function calcN_forced!(N, sol, t, s, v, p, g)\n  calcN_advection!(N, sol, t, s, v, p, g)\n  if t == s.t # not a substep\n    v.prevsol .= s.sol # used to compute budgets when forcing is stochastic\n    p.calcF!(v.Fh, sol, t, s, v, p, g)\n  end\n  @. N += v.Fh\n  nothing\nendupdatevars!: uses sol to compute q, u, v, widehatu, and widehatv and stores them into corresponding arrays of Vars/ForcedVars."
},

{
    "location": "modules/twodturb/#Examples-1",
    "page": "TwoDTurb Module",
    "title": "Examples",
    "category": "section",
    "text": "examples/twodturb/McWilliams.jl: A script that simulates decaying two-dimensional turbulence reproducing the results of the paper by\nMcWilliams, J. C. (1984). The emergence of isolated coherent vortices in turbulent flow. J. Fluid Mech., 146, 21-43.\nexamples/twodturb/IsotropicRingForcing.jl: A script that simulates stochastically forced two-dimensional turbulence. The forcing is temporally delta-corraleted and its spatial structure is isotropic with power in a narrow annulus of total radius k_f in wavenumber space."
},

{
    "location": "modules/barotropicqg/#",
    "page": "BarotropicQG Module",
    "title": "BarotropicQG Module",
    "category": "page",
    "text": ""
},

{
    "location": "modules/barotropicqg/#BarotropicQG-Module-1",
    "page": "BarotropicQG Module",
    "title": "BarotropicQG Module",
    "category": "section",
    "text": "newcommandJmathsfJ"
},

{
    "location": "modules/barotropicqg/#Basic-Equations-1",
    "page": "BarotropicQG Module",
    "title": "Basic Equations",
    "category": "section",
    "text": "This module solves the quasi-geostrophic barotropic vorticity equation on a beta-plane of variable fluid depth H-h(xy). The flow is obtained through a streamfunction psi as (u upsilon) = (-partial_ypsi partial_xpsi). All flow fields can be obtained from the quasi-geostrophic potential vorticity (QGPV). Here the QGPV isunderbracef_0 + beta y_textplanetary PV + underbrace(partial_x upsilon\n	- partial_y u)_textrelative vorticity +\n	underbracefracf_0 hH_texttopographic PVThe dynamical variable is the component of the vorticity of the flow normal to the plane of motion, zetaequiv partial_x upsilon- partial_y u = nabla^2psi. Also, we denote the topographic PV with etaequiv f_0 hH. Thus, the equation solved by the module is:partial_t zeta + J(psi underbracezeta + eta_equiv q) +\nbetapartial_xpsi = underbrace-leftmu + nu(-1)^n_nu nabla^2n_nu\nright zeta _textrmdissipation + f where J(a b) = (partial_x a)(partial_y b)-(partial_y a)(partial_x b). On the right hand side, f(xyt) is forcing, mu is linear drag, and nu is hyperviscosity. Plain old viscosity corresponds to n_nu=1. The sum of relative vorticity and topographic PV is denoted with qequivzeta+eta."
},

{
    "location": "modules/barotropicqg/#Implementation-1",
    "page": "BarotropicQG Module",
    "title": "Implementation",
    "category": "section",
    "text": "The equation is time-stepped forward in Fourier space:partial_t widehatzeta = - widehatJ(psi q) +betafracmathrmik_xk^2widehatzeta -left(mu\n+nu k^2n_nuright) widehatzeta  + widehatf In doing so the Jacobian is computed in the conservative form: J(fg) = partial_y  (partial_x f) g -partial_x (partial_y f) g.Thus:mathcalL = betafracmathrmik_xk^2 - mu - nu k^2n_nu mathcalN(widehatzeta) = - mathrmik_x mathrmFFT(u q)-\n	mathrmik_y mathrmFFT(upsilon q) "
},

{
    "location": "modules/barotropicqg/#Examples-1",
    "page": "BarotropicQG Module",
    "title": "Examples",
    "category": "section",
    "text": "examples/barotropicqg/decayingbetaturb.jl: An script that simulates decaying quasi-geostrophic flow on a beta-plane demonstrating zonation.\nexamples/barotropicqg/forcedbetaturb.jl: An script that simulates forced-dissipative quasi-geostrophic flow on a beta-plane demonstrating zonation. The forcing is temporally delta-corraleted and its spatial structure is isotropic with power in a narrow annulus of total radius kf in wavenumber space.\nexamples/barotropicqg/ACConelayer.jl: A script that simulates barotropic quasi-geostrophic flow above topography reproducing the results of the paper by\nConstantinou, N. C. (2018). A barotropic model of eddy saturation. J. Phys. Oceanogr., 48 (2), 397-411."
},

{
    "location": "man/types/#",
    "page": "Private types",
    "title": "Private types",
    "category": "page",
    "text": ""
},

{
    "location": "man/types/#Private-types-1",
    "page": "Private types",
    "title": "Private types",
    "category": "section",
    "text": ""
},

{
    "location": "man/types/#Private-types-in-module-GeophysicalFlows:-1",
    "page": "Private types",
    "title": "Private types in module GeophysicalFlows:",
    "category": "section",
    "text": "Modules = [GeophysicalFlows]\nPublic = false\nOrder = [:type]"
},

{
    "location": "man/types/#GeophysicalFlows.TwoDTurb.ForcedVars-Tuple{Any}",
    "page": "Private types",
    "title": "GeophysicalFlows.TwoDTurb.ForcedVars",
    "category": "method",
    "text": "ForcedVars(g)\n\nReturns the vars for forced two-dimensional turbulence with grid g.\n\n\n\n\n\n"
},

{
    "location": "man/types/#GeophysicalFlows.TwoDTurb.Params",
    "page": "Private types",
    "title": "GeophysicalFlows.TwoDTurb.Params",
    "category": "type",
    "text": "Params(nu, nnu, mu, nmu, calcF!)\n\nReturns the params for two-dimensional turbulence.\n\n\n\n\n\n"
},

{
    "location": "man/types/#GeophysicalFlows.TwoDTurb.StochasticForcedVars-Tuple{Any}",
    "page": "Private types",
    "title": "GeophysicalFlows.TwoDTurb.StochasticForcedVars",
    "category": "method",
    "text": "StochasticForcedVars(g; T)\n\nReturns the vars for stochastically forced two-dimensional turbulence with grid g.\n\n\n\n\n\n"
},

{
    "location": "man/types/#GeophysicalFlows.TwoDTurb.Vars-Tuple{Any}",
    "page": "Private types",
    "title": "GeophysicalFlows.TwoDTurb.Vars",
    "category": "method",
    "text": "Vars(g)\n\nReturns the vars for unforced two-dimensional turbulence with grid g.\n\n\n\n\n\n"
},

{
    "location": "man/types/#Private-types-in-module-TwoDTurb:-1",
    "page": "Private types",
    "title": "Private types in module TwoDTurb:",
    "category": "section",
    "text": "Modules = [GeophysicalFlows.TwoDTurb]\nPublic = false\nOrder = [:type]"
},

{
    "location": "man/types/#GeophysicalFlows.BarotropicQG.ForcedVars-Tuple{Any}",
    "page": "Private types",
    "title": "GeophysicalFlows.BarotropicQG.ForcedVars",
    "category": "method",
    "text": "ForcedVars(g)\n\nReturns the vars for forced two-dimensional barotropic QG problem with grid g.\n\n\n\n\n\n"
},

{
    "location": "man/types/#GeophysicalFlows.BarotropicQG.Params",
    "page": "Private types",
    "title": "GeophysicalFlows.BarotropicQG.Params",
    "category": "type",
    "text": "Params(g::TwoDGrid, f0, beta, FU, eta, mu, nu, nnu, calcFU, calcFq)\n\nReturns the params for an unforced two-dimensional barotropic QG problem.\n\n\n\n\n\n"
},

{
    "location": "man/types/#GeophysicalFlows.BarotropicQG.Params-Tuple{Any,Any,Any,Function,Any,Any,Any,Any,Any}",
    "page": "Private types",
    "title": "GeophysicalFlows.BarotropicQG.Params",
    "category": "method",
    "text": "Params(g::TwoDGrid, f0, beta, eta::Function, mu, nu, nnu, calcFU, calcFq)\n\nConstructor for Params that accepts a generating function for the topographic PV.\n\n\n\n\n\n"
},

{
    "location": "man/types/#GeophysicalFlows.BarotropicQG.StochasticForcedVars-Tuple{Any}",
    "page": "Private types",
    "title": "GeophysicalFlows.BarotropicQG.StochasticForcedVars",
    "category": "method",
    "text": "StochasticForcedVars(g)\n\nReturns the vars for stochastically forced two-dimensional barotropic QG problem with grid g.\n\n\n\n\n\n"
},

{
    "location": "man/types/#GeophysicalFlows.BarotropicQG.Vars-Tuple{Any}",
    "page": "Private types",
    "title": "GeophysicalFlows.BarotropicQG.Vars",
    "category": "method",
    "text": "Vars(g)\n\nReturns the vars for unforced two-dimensional barotropic QG problem with grid g.\n\n\n\n\n\n"
},

{
    "location": "man/types/#Private-types-in-module-BarotropicQG:-1",
    "page": "Private types",
    "title": "Private types in module BarotropicQG:",
    "category": "section",
    "text": "Modules = [GeophysicalFlows.BarotropicQG]\nPublic = false\nOrder = [:type]"
},

{
    "location": "man/functions/#",
    "page": "Functions",
    "title": "Functions",
    "category": "page",
    "text": ""
},

{
    "location": "man/functions/#Functions-1",
    "page": "Functions",
    "title": "Functions",
    "category": "section",
    "text": ""
},

{
    "location": "man/functions/#Functions-exported-from-GeophysicalFlows:-1",
    "page": "Functions",
    "title": "Functions exported from GeophysicalFlows:",
    "category": "section",
    "text": "Modules = [GeophysicalFlows]\nPrivate = false\nOrder = [:function]"
},

{
    "location": "man/functions/#GeophysicalFlows.TwoDTurb.Problem-Tuple{}",
    "page": "Functions",
    "title": "GeophysicalFlows.TwoDTurb.Problem",
    "category": "method",
    "text": "Problem(; parameters...)\n\nConstruct a 2D turbulence problem.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.TwoDTurb.dissipation-Tuple{Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.TwoDTurb.dissipation",
    "category": "method",
    "text": "dissipation(prob)\n\nReturns the domain-averaged dissipation rate. nnu must be >= 1.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.TwoDTurb.drag-Tuple{Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.TwoDTurb.drag",
    "category": "method",
    "text": "drag(prob)\n\nReturns the extraction of domain-averaged energy by drag/hypodrag mu.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.TwoDTurb.energy-Tuple{Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.TwoDTurb.energy",
    "category": "method",
    "text": "energy(prob)\n\nReturns the domain-averaged kinetic energy in the Fourier-transformed vorticity solution sol.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.TwoDTurb.enstrophy-Tuple{Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.TwoDTurb.enstrophy",
    "category": "method",
    "text": "enstrophy(prob)\n\nReturns the domain-averaged enstrophy in the Fourier-transformed vorticity solution sol.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.TwoDTurb.set_q!-Tuple{Any,Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.TwoDTurb.set_q!",
    "category": "method",
    "text": "set_q!(prob, q)\n\nSet the solution sol as the transform of q and update variables v on the grid g.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.TwoDTurb.updatevars!-Tuple{Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.TwoDTurb.updatevars!",
    "category": "method",
    "text": "updatevars!(prob)\n\nUpdate the vars in v on the grid g with the solution in sol.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.TwoDTurb.work-Tuple{Any,GeophysicalFlows.TwoDTurb.ForcedVars,Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.TwoDTurb.work",
    "category": "method",
    "text": "work(prob)\nwork(sol, v, g)\n\nReturns the domain-averaged rate of work of energy by the forcing Fh.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#Functions-exported-from-TwoDTurb:-1",
    "page": "Functions",
    "title": "Functions exported from TwoDTurb:",
    "category": "section",
    "text": "Modules = [GeophysicalFlows.TwoDTurb]\nPrivate = false\nOrder = [:function]"
},

{
    "location": "man/functions/#GeophysicalFlows.BarotropicQG.dissipation-NTuple{4,Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.BarotropicQG.dissipation",
    "category": "method",
    "text": "dissipation(prob)\ndissipation(s, v, p, g)\n\nReturns the domain-averaged dissipation rate. nnu must be >= 1.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.BarotropicQG.drag-NTuple{4,Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.BarotropicQG.drag",
    "category": "method",
    "text": "drag(prob)\ndrag(s, v, p, g)\n\nReturns the extraction of domain-averaged energy by drag mu.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.BarotropicQG.energy-Tuple{Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.BarotropicQG.energy",
    "category": "method",
    "text": "Calculate the domain-averaged kinetic energy.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.BarotropicQG.enstrophy-Tuple{Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.BarotropicQG.enstrophy",
    "category": "method",
    "text": "Returns the domain-averaged enstrophy.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.BarotropicQG.meanenergy-Tuple{Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.BarotropicQG.meanenergy",
    "category": "method",
    "text": "Returns the energy of the domain-averaged U.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.BarotropicQG.meanenstrophy-Tuple{Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.BarotropicQG.meanenstrophy",
    "category": "method",
    "text": "Returns the enstrophy of the domain-averaged U.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.BarotropicQG.set_zeta!-Tuple{Any,GeophysicalFlows.BarotropicQG.Vars,Any,Any,Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.BarotropicQG.set_zeta!",
    "category": "method",
    "text": "set_zeta!(prob, zeta)\nset_zeta!(s, v, g, zeta)\n\nSet the solution s.sol as the transform of zeta and update variables v on the grid g.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.BarotropicQG.updatevars!-NTuple{4,Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.BarotropicQG.updatevars!",
    "category": "method",
    "text": "updatevars!(v, s, g)\n\nUpdate the vars in v on the grid g with the solution in s.sol.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#GeophysicalFlows.BarotropicQG.work-Tuple{Any,GeophysicalFlows.BarotropicQG.ForcedVars,Any}",
    "page": "Functions",
    "title": "GeophysicalFlows.BarotropicQG.work",
    "category": "method",
    "text": "work(prob)\nwork(s, v, p, g)\n\nReturns the domain-averaged rate of work of energy by the forcing Fqh.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#Functions-exported-from-BarotropicQG:-1",
    "page": "Functions",
    "title": "Functions exported from BarotropicQG:",
    "category": "section",
    "text": "Modules = [GeophysicalFlows.BarotropicQG]\nPrivate = false\nOrder = [:function]"
},

]}
