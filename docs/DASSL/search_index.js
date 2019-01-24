var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DASSL.jl-1",
    "page": "Readme",
    "title": "DASSL.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)This is an implementation of DASSL algorithm for solving algebraic differential equations.  To inastall a stable version runPkg.add(\"DASSL\")"
},

{
    "location": "#Common-Interface-Example-1",
    "page": "Readme",
    "title": "Common Interface Example",
    "category": "section",
    "text": "This package is compatible with the JuliaDiffEq common solver interface which is documented in the DifferentialEquations.jl documentation. Following the DAE Tutorial, one can use dassl() as follows:using DASSL\nu0 = [1.0, 0, 0]\ndu0 = [-0.04, 0.04, 0.0]\ntspan = (0.0,100000.0)\n\nfunction resrob(r,yp,y,p,t)\n    r[1]  = -0.04*y[1] + 1.0e4*y[2]*y[3]\n    r[2]  = -r[1] - 3.0e7*y[2]*y[2] - yp[2]\n    r[1] -=  yp[1]\n    r[3]  =  y[1] + y[2] + y[3] - 1.0\nend\n\nprob = DAEProblem(resrob,u0,du0,tspan)    \nsol = solve(prob, dassl())For more details on using this interface, see the ODE tutorial."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "To solve a scalar equation y\'(t)+y(t)=0 with initial data y(0)=0.0 up to time t=10.0 run the following codeusing DASSL\nF(t,y,dy) = dy+y                   # the equation solved is F(t,y,dy)=0\ny0        = 1.0                    # the initial value\ntspan     = [0.0,10.0]             # time span over which we integrate\n(tn,yn)   = dasslSolve(F,y0,tspan) # returns (tn,yn)You can also change the relative error tolerance rtol, absolute error tolerance atol as well as initial step size h0 as follows(tn,yn)   = dasslSolve(F,y0,tspan)To test the convergence and execution time for index-1 problem run convergence.jl from the test directory.Naturally, DASSL.jl also supports multiple equations.  For example the pendulum equationu\'-v=0\nv\'+sin(u)=0with initial data u(0)=0.0 and v(0)=1.0 can be solved by defining the following residual functionfunction F(t,y,dy)\n       [\n       dy[1]-y[2],           #  y[1]=u,   y[2]=v\n       dy[2]+sin(y[1])       # dy[1]=u\', dy[2]=v\'\n       ]\nendThe initial data shoud now be set as a vectory0      = [0.0,1.0]           # y0=[u(0),v(0)]The solution can be computed by callingtspan   = [0.0,10.0]\n(tn,yn) = dasslSolve(F,y0,tspan)"
},

{
    "location": "#Output-1",
    "page": "Readme",
    "title": "Output",
    "category": "section",
    "text": "Apart from producing the times tn and values yn, dasslSolve also produces the derivatives dyn (as the byproduct of BDF algorithm), e.g.(tn,yn,dyn) = dasslSolve(F,y0,tspan)The decision to produce these values is that it is not entirely trivial to compute y\' from F(t,y,y\')=0 when t and y are given."
},

{
    "location": "#Keyword-arguments-1",
    "page": "Readme",
    "title": "Keyword arguments",
    "category": "section",
    "text": "DASSL supports a number of keyword arguments, the names of most of them are compatible with the namse used in ODE package.reltol=1e-3/abstol=1e-5 set the relative/absolute local error tolerances\ninitstep=1e-4/minstep=0/maxstep=Inf set the initial/minimal/maximal step sizes (when step size drops below minimum the integration stops)\njacobian The most expensive step during the integration is solving the nonlinear equation F(t,y,a*y+b)=0 via Newton\'s method, which requires a jacobian of the form dF/dy+a*dF/dy\'.  By default, the solver approximates this Jacobian by a method of finite differences but you can provide your own method as a function (t,y,dy,a)->dF/dy+a*dF/dy\'.  For the pendulum equation we would define jacobian as\njacobian=(t,y,dy,a)->[[a,cos(y[1])] [-1,a]]\nmaxorder=6 Apart from selecting the current step size DASSL method can also dynamically change the order of BDF method used.  BDF is stable up to 6-th order, which is the defaul upper limit but for some systems of equations it may make more sense to use lower orders.\ndy0=zero(y) When solving differential algebraic equations it is important to start with consistent initial conditions, i.e. to choose y and y\' such that F(t,y,y\')=0 initially.  DASSL tries to guess the initial value of y\', but if it fails you can set your own initial condtions for the derivative.\nnorm=dassl_norm/weights=dassl_weights DASSL computes the error roughly as err=norm(yc-y0), and accepting the step when err<1.  The local error tolerances reltol and abstol are hidden in the definition of dassl_norm(v, wt)=norm(v./wt)/sqrt(length(v)), where weights wt are defined by dassl_weights(y,reltol,abstol)=reltol*abs(y).+abstol.  You can supply your own weights and norms when they are more appropriate for the problem at hand.\nfactorize_jacobian=true is a Boolean option which forces the factorization of Jacobian before storing it.  It dramatically increases performance for large systems, but may decrease the computation speed for small systems."
},

{
    "location": "#Iterator-version-1",
    "page": "Readme",
    "title": "Iterator version",
    "category": "section",
    "text": "DASSL.jl supports an iterative version of solver (implemented via coroutines, so debugging might be a little tricky) via dasslIterator.  In the following example the dasslIterator is used to stop the integration when the solution y drops below 0.1F(t,y,dy)=dy+y\n\n# iterator version of dassl solver\nfor (t,y,dy) in dasslIterator(F,1.0,0.0)\n    if y < 0.1\n        @show (t,y,dy)\n        break\n    end\nend"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DASSL]\nOrder = [:type, :function]"
},

]}
