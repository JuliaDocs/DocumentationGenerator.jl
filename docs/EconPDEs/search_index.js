var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status)This package provides the function pdesolvethat solves (system of) nonlinear ODEs/PDEs arising in economic models.It is fast: the underlying algorithm has a quadratic rate of convergence around the solution.\nIt is robust: the underlying algorithm is based on a combination of upwinding and non-linear time stepping (more details here)\nIt is simple-to-use: one can solve a PDE in less than 10 lines of codes. No need to explicitly set up the finite-difference scheme."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "The examples folder  solves a variety of macro-finance models:Habit Model (Campbell Cochrane (1999) and Wachter (2005))\nLong Run Risk Model (Bansal Yaron (2004))\nDisaster Model (Wachter (2013))\nHeterogeneous Agent Models (Garleanu Panageas (2015), Di Tella (2017), Haddad (2015))\nConsumption with Borrowing Constraint (Wang Wang Yang (2016), Achdou Han Lasry Lions Moll (2018))\nInvestment with Borrowing Constraint (Bolton Chen Wang (2009))"
},

{
    "location": "#A-Simple-Example-1",
    "page": "Readme",
    "title": "A Simple Example",
    "category": "section",
    "text": "For instance, to solve the PDE giving the price-dividend ratio in the Long Run Risk model: <img src=\"img/by.png\">using EconPDEs\n# define state grid\nstate = OrderedDict(:μ => range(-0.05, stop = 0.1, length = 1000))\n\n# define initial guess\ny0 = OrderedDict(:V => ones(1000))\n\n# define pde function that specifies PDE to solve. The function takes two arguments:\n# 1. state variable `state`, a named tuple. \n# The state can be accessed with `state.x` where `x` denotes the name of the state variable.\n# 2. current solution `sol`, a named tuple. \n# The current solution at the current state can be accessed with `sol.y` where `y` denotes the name of initial guess. \n# Its derivative can be accessed with `sol.yx` where `x` denotes the name of state variable.\n# Its second derivative can be accessed with `sol.yxx`,\n# It returns two outputs\n# 1. a tuple with the value of PDE at current solution and current state \n# 2. a tuple with drift of state variable, used for upwinding \nfunction f(state, sol)\n	μbar = 0.018 ; ϑ = 0.00073 ; θμ = 0.252 ; νμ = 0.528 ; ρ = 0.025 ; ψ = 1.5 ; γ = 7.5\n	Vt = 1 / sol.V - ρ + (1 - 1 / ψ) * (state.μ - 0.5 * γ * ϑ) + θμ * (μbar - state.μ) * sol.Vμ / sol.V +\n	0.5 * νμ^2 * ϑ * sol.Vμμ / sol.V + 0.5 * (1 / ψ - γ) / (1- 1 / ψ) * νμ^2 *  ϑ * sol.Vμ^2/sol.V^2\n	(Vt,), (θμ * (μbar - state.μ),)\nend\n\n# the function `pdesolve` takes three arguments: (i) a function encoding the ode / pde (ii) a state grid corresponding to a discretized version of the state space (iii) an initial guess for the array(s) to solve for. \npdesolve(f, state, y0)More complicated ODEs / PDES (including PDE with two state variables or systems of multiple PDEs) can be found in the examples folder. "
},

{
    "location": "#Boundary-Conditions-1",
    "page": "Readme",
    "title": "Boundary Conditions",
    "category": "section",
    "text": "When solving a PDE using a finite scheme approach, one needs to specify the value of the solution outside the grid (\"ghost node\") to construct the second derivative and, in some cases, the first derivative at the boundary. By default, this package assumes that the value outside the grid is the same as the value at the boundary. I go through several cases for lower boundaries (upper boundaries are similar):First Case: at the lower boundary of the grid, the state variable has a positive drift and positive volatility.This happens in models where the state space is unbounded (see Habit, Long Run Risk, and Disaster models). Because the PDE needs to be solved on a grid, one needs to impose reflecting boundaries, i.e. that the first derivative of the value function is null at the border. In term of finite difference scheme, this means that the value of the function outside the grid is equal to the value *at* the boundary. This is the default boundary condition used by `pdesolve`Second Case: at the lower boundary of the grid, the state variable has a positive drift and zero volatility.This happens in heterogeneous agent models such as GarleanuPanageas and DiTella models. In this case, the second derivative does not appear in the PDE at the boundary. Because of upwinding, the first derivative does not use the value of the function outside the grid either. Therefore, there is no need to specify the value of the function outside the grid.Third case: at the lower boundary of the grid, the state variable has a negative drift and zero volatility.This happens in consumption / saving models with borrowing constraint. Typically, the agent would like to consume but there is an exogeneous constraint on how low his wealth can be. In this case, specify the value of the first derivative to be such that the agent chooses to stay in the state space when the drift of the state variable initially makes it go outside the boundary. See WangWangYang model or AchdouHanLasryLionsMoll in the example folder.Sometime, the boundary condition does not fall into one of these cases. When this happens, specify particular values for the derivative at the boundaries using the bc option (see BoltonChenWang model in the example folder)."
},

{
    "location": "#Time-Iteration-1",
    "page": "Readme",
    "title": "Time Iteration",
    "category": "section",
    "text": "In some cases, one may want to save the iteration over time rather than the stationary solution. In this case, use pdesolve(f, state, y0, ts)  where ts is a vector of time and y_0 is the solution at time ts[1]. See ArbitrageHoldingCosts for an example."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the packageusing Pkg\nPkg.add(\"EconPDEs\")"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [EconPDEs]\nOrder = [:type, :function]"
},

]}
