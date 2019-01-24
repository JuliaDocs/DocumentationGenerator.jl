var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NLsolve.jl-1",
    "page": "Readme",
    "title": "NLsolve.jl",
    "category": "section",
    "text": "Solving non-linear systems of equations in Julia.NLsolve.jl is part of the JuliaNLSolvers family.(Image: Build Status)"
},

{
    "location": "#Non-linear-systems-of-equations-1",
    "page": "Readme",
    "title": "Non-linear systems of equations",
    "category": "section",
    "text": "The NLsolve package solves systems of nonlinear equations. Formally, if F is a multivalued function, then this package looks for some vector x that satisfies F(x)=0 to some accuracy.The package is also able to solve mixed complementarity problems, which are similar to systems of nonlinear equations, except that the equality to zero is allowed to become an inequality if some boundary condition is satisfied. See further below for a formal definition and the related commands.There is also an identical API for solving fixed points (i.e., taking as input a function F(x), and solving F(x) = x)."
},

{
    "location": "#Simple-example-1",
    "page": "Readme",
    "title": "Simple example",
    "category": "section",
    "text": "We consider the following bivariate function of two variables:(x, y) -> ((x+3)*(y^3-7)+18, sin(y*exp(x)-1))In order to find a zero of this function and display it, you would write the following program:using NLsolve\n\nfunction f!(F, x)\n    F[1] = (x[1]+3)*(x[2]^3-7)+18\n    F[2] = sin(x[2]*exp(x[1])-1)\nend\n\nfunction j!(J, x)\n    J[1, 1] = x[2]^3-7\n    J[1, 2] = 3*x[2]^2*(x[1]+3)\n    u = exp(x[1])*cos(x[2]*exp(x[1])-1)\n    J[2, 1] = x[2]*u\n    J[2, 2] = u\nend\n\nnlsolve(f!, j!, [ 0.1; 1.2])First, note that the function f! computes the residuals of the nonlinear system, and stores them in a preallocated vector passed as first argument. Similarly, the function j! computes the Jacobian of the system and stores it in a preallocated matrix passed as first argument. Residuals and Jacobian functions can take different shapes, see below.Second, when calling the nlsolve function, it is necessary to give a starting point to the iterative algorithm.Finally, the nlsolve function returns an object of type SolverResults. In particular, the field zero of that structure contains the solution if convergence has occurred. If r is an object of type SolverResults, then converged(r) indicates if convergence has occurred."
},

{
    "location": "#Specifying-the-function-and-its-Jacobian-1",
    "page": "Readme",
    "title": "Specifying the function and its Jacobian",
    "category": "section",
    "text": "There are various ways of specifying the residuals function and possibly its Jacobian."
},

{
    "location": "#With-functions-modifying-arguments-in-place-1",
    "page": "Readme",
    "title": "With functions modifying arguments in-place",
    "category": "section",
    "text": "This is the most efficient method, because it minimizes the memory allocations.In the following, it is assumed that you have defined a function f!(F::AbstractVector, x::AbstractVector) or, more generally, f!(F::AbstractArray, x::AbstractArray) computing the residual of the system at point x and putting it into the F argument.In turn, there 3 ways of specifying how the Jacobian should be computed:"
},

{
    "location": "#Finite-differencing-1",
    "page": "Readme",
    "title": "Finite differencing",
    "category": "section",
    "text": "If you do not have a function that compute the Jacobian, it is possible to have it computed by finite difference. In that case, the syntax is simply:nlsolve(f!, initial_x)Alternatively, you can construct an object of type OnceDifferentiable and pass it to nlsolve, as in:\ninitial_x = ...\ninitial_F = similar(initial_x)\ndf = OnceDifferentiable(f!, initial_x, initial_F)\nnlsolve(df, initial_x)Notice, we passed initial_x and initial_F to the constructor for df. This does not need to be the actual initial x and the residual vector at x, but it is used to initialize cache variables in df, so the types and dimensions of them have to be as if they were."
},

{
    "location": "#Automatic-differentiation-1",
    "page": "Readme",
    "title": "Automatic differentiation",
    "category": "section",
    "text": "Another option if you do not have a function computing the Jacobian is to use automatic differentiation, thanks to the ForwardDiff package. The syntax is simply:nlsolve(f!, initial_x, autodiff = :forward)"
},

{
    "location": "#Jacobian-available-1",
    "page": "Readme",
    "title": "Jacobian available",
    "category": "section",
    "text": "If, in addition to f!(F::AbstractArray, x::AbstractArray), you have a function j!(J::AbstractArray, x::AbstractArray) for computing the Jacobian of the system, then the syntax is, as in the example above:nlsolve(f!, j!, initial_x)Again it is also possible to specify two functions f!(F::AbstractArray, x::AbstractArray) and j!(J::AbstractArray, x::AbstractArray) that work on arbitrary arrays x.Note, that you should not assume that the Jacobian J passed into j! is initialized to a zero matrix. You must set all the elements of the matrix in the function j!.Alternatively, you can construct an object of type OnceDifferentiable and pass it to nlsolve, as in:df = OnceDifferentiable(f!, j!, initial_x, initial_F)\nnlsolve(df, initial_x)"
},

{
    "location": "#Optimization-of-simultaneous-residuals-and-Jacobian-1",
    "page": "Readme",
    "title": "Optimization of simultaneous residuals and Jacobian",
    "category": "section",
    "text": "If, in addition to f! and j!, you have a function fj!(F::AbstractArray, J::AbstractArray, x::AbstractArray) that computes both the residual and the Jacobian at the same time, you can use the following syntaxdf = OnceDifferentiable(f!, j!, fj!, initial_x, initial_F)\nnlsolve(df, initial_x)If the function fj! uses some optimization that make it cost less than calling f! and j! successively, then this syntax can possibly improve the performance."
},

{
    "location": "#Providing-only-fj!-1",
    "page": "Readme",
    "title": "Providing only fj!",
    "category": "section",
    "text": "If a function is available for calculating residuals and the Jacobian, there is a special syntax for an, arguably, simpler approach. First, define the function asfunction myfun!(F, J, x)\n    # shared calculations begin\n    # ...\n    # shared calculation end\n    if !(F == nothing)\n        # mutating calculations specific to f! goes here\n    end\n    if !(J == nothing)\n        # mutating calculations specific to j! goes\n    end\nendand solve usingnlsolve(only_fj!(myfun), initial_x)This will make enable nlsolve to efficiently calculate F(x) and J(x) together, but still be efficient when calculating either F(x) or J(x) separately."
},

{
    "location": "#With-functions-returning-residuals-and-Jacobian-as-output-1",
    "page": "Readme",
    "title": "With functions returning residuals and Jacobian as output",
    "category": "section",
    "text": "Here it is assumed that you have a function f(x::AbstractArray) that returns a newly-allocated vector containing the residuals. Simply pass it to nlsolve, and it will automatically detect if f is defined for one or two arguments:nlsolve(f, initial_x)Note, that this means that if you have a function f with a method that accepts one argument, and another method that accepts two arguments, it will assume that the two argument version is a mutating f, such as described above.Via the autodiff keyword both finite-differencing and autodifferentiation can be used to compute the Jacobian in that case.If, in addition to f(x::AbstractArray), there is a function j(x::AbstractArray) returning a newly-allocated matrix containing the Jacobian, we again simply pass these to nlsolve:nlsolve(f, j, initial_x)If, in addition to f and j, there is a function fj returning a tuple of a newly-allocated vector of residuals and a newly-allocated matrix of the Jacobian, the approach is the same:nlsolve(f, j, fj, initial_x)"
},

{
    "location": "#With-functions-taking-several-scalar-arguments-1",
    "page": "Readme",
    "title": "With functions taking several scalar arguments",
    "category": "section",
    "text": "If you have a function f(x::Float64, y::Float64, ...) that takes the point of interest as several scalars and returns a vector or a tuple containing the residuals, you can use the helper function n_ary. The complete syntax is therefore:nlsolve(n_ary(f), initial_x)Finite-differencing is used to compute the Jacobian."
},

{
    "location": "#If-the-Jacobian-is-sparse-1",
    "page": "Readme",
    "title": "If the Jacobian is sparse",
    "category": "section",
    "text": "If the Jacobian of your function is sparse, it is possible to ask the routines to manipulate sparse matrices instead of full ones, in order to increase performance on large systems. This means that we must necessarily provide an appropriate Jacobian type so the solver knows what to feed j!.df = OnceDifferentiable(f!, j!, x0, F0, J0)\nnlsolve(df, initial_x)It is possible to give an optional third function fj! to the constructor, as for the full Jacobian case.Note that the Jacobian matrix is not reset across function calls. As a result, you need to be careful and ensure that you don\'t forget to overwrite all nonzeros elements that could have been initialized by a previous function call. If in doubt, you can clear the sparse matrix at the beginning of the function. If J is the sparse Jacobian, this can be achieved with:fill!(a, 0)\ndropzeros!(a) # if you also want to remove the sparsity pattern"
},

{
    "location": "#Fine-tunings-1",
    "page": "Readme",
    "title": "Fine tunings",
    "category": "section",
    "text": "Three algorithms are currently available. The choice between these is achieved by setting the optional method argument of nlsolve. The default algorithm is the trust region method."
},

{
    "location": "#Trust-region-method-1",
    "page": "Readme",
    "title": "Trust region method",
    "category": "section",
    "text": "This is the well-known solution method which relies on a quadratic approximation of the least-squares objective, considered to be valid over a compact region centered around the current iterate.This method is selected with method = :trust_region.This method accepts the following custom parameters:factor: determines the size of the initial trust region. This size is set to the product of factor and the euclidean norm of initial_x if nonzero, or else to factor itself. Default: 1.0.\nautoscale: if true, then the variables will be automatically rescaled. The scaling factors are the norms of the Jacobian columns. Default: true."
},

{
    "location": "#Newton-method-with-linesearch-1",
    "page": "Readme",
    "title": "Newton method with linesearch",
    "category": "section",
    "text": "This is the classical Newton algorithm with optional linesearch.This method is selected with method = :newton.This method accepts a custom parameter linesearch, which must be equal to a function computing the linesearch. Currently, available values are taken from the LineSearches package. By default, no linesearch is performed. Note: it is assumed that a passed linesearch function will at least update the solution vector and evaluate the function at the new point."
},

{
    "location": "#Anderson-acceleration-1",
    "page": "Readme",
    "title": "Anderson acceleration",
    "category": "section",
    "text": "This method is selected with method = :anderson.It is also known as DIIS or Pulay mixing, this method is based on the acceleration of the fixed-point iteration xₙ₊₁ = xₙ + beta*f(xₙ), where by default beta=1. It does not use Jacobian information or linesearch, but has a history whose size is controlled by the m parameter: m=0 (the default) corresponds to the simple fixed-point iteration above, and higher values use a larger history size to accelerate the iterations. Higher values of m usually increase the speed of convergence, but increase the storage and computation requirements and might lead to instabilities. This method is useful to accelerate a fixed-point iteration xₙ₊₁ = g(xₙ) (in which case use this solver with f(x) = g(x) - x).Reference: H. Walker, P. Ni, Anderson acceleration for fixed-point iterations, SIAM Journal on Numerical Analysis, 2011"
},

{
    "location": "#Common-options-1",
    "page": "Readme",
    "title": "Common options",
    "category": "section",
    "text": "Other optional arguments to nlsolve, available for all algorithms, are:xtol: norm difference in x between two successive iterates under which convergence is declared. Default: 0.0.\nftol: infinite norm of residuals under which convergence is declared. Default: 1e-8.\niterations: maximum number of iterations. Default: 1_000.\nstore_trace: should a trace of the optimization algorithm\'s state be stored? Default: false.\nshow_trace: should a trace of the optimization algorithm\'s state be shown on STDOUT? Default: false.\nextended_trace: should additifonal algorithm internals be added to the state trace? Default: false."
},

{
    "location": "#Fixed-Points-1",
    "page": "Readme",
    "title": "Fixed Points",
    "category": "section",
    "text": "There is a fixedpoint() wrapper around nlsolve() which maps an input function F(x) to G(x) = F(x) - x, and likewise for the in-place. This allows convenient solution of fixed-point problems, e.g. of the kind commonly encountered in computational economics. Some notes:The default method is :anderson with m = 5. Naive \"Picard\"-style iteration can be achieved by setting m=0, but that isn\'t advisable for contractions whose Lipschitz constants are close to 1. If convergence fails, though, you may consider lowering it.\nAutodifferentiation is supported; e.g. fixedpoint(f!, init_x; method = :newton, autodiff = :true).\nTolerances and iteration bounds can be set exactly as in nlsolve(), since this function is a wrapper, e.g. fixedpoint(f, init_x; iterations = 500, ...).Note: If you are supplying your own derivative, make sure that it is appropriately transformed (i.e., we currently map f -> f - x, but are waiting on the API to stabilize before mapping J -> J - I, so you\'ll need to do that yourself.)"
},

{
    "location": "#Mixed-complementarity-problems-1",
    "page": "Readme",
    "title": "Mixed complementarity problems",
    "category": "section",
    "text": "Given a multivariate function f and two vectors a and b, the solution to the mixed complementarity problem (MCP) is a vector x such that one of the following holds for every index i:either f_i(x) = 0 and a_i <= x_i <= b_i\nor f_i(x) > 0 and x_i = a_i\nor f_i(x) < 0 and x_i = b_iThe vector a can contain elements equal to -Inf, while the vector b can contain elements equal to Inf. In the particular case where all elements of a are equal to -Inf, and all elements of b are equal to Inf, the MCP is exactly equivalent to the multivariate root finding problem described above.The package solves MCPs by reformulating them as the solution to a system of nonlinear equations (as described by Miranda and Fackler, 2002, though NLsolve uses the sign convention opposite to theirs).The function mcpsolve solves MCPs. It takes the same arguments as nlsolve, except that the vectors a and b must immediately follow the argument(s) corresponding to f (and possibly its derivative). There is also an extra optional argument reformulation, which can take two values:reformulation = :smooth: use a smooth reformulation of the problem using the Fischer function. This is the default, since it is more robust for complex problems.\nreformulation = :minmax: use a min-max reformulation of the problem. It is faster than the smooth approximation, since it uses less algebra, but is less robust since the reformulated problem has kinks.Here is a complete example:using NLsolve\n\nfunction f!(F, x)\n    F[1]=3*x[1]^2+2*x[1]*x[2]+2*x[2]^2+x[3]+3*x[4]-6\n    F[2]=2*x[1]^2+x[1]+x[2]^2+3*x[3]+2*x[4]-2\n    F[3]=3*x[1]^2+x[1]*x[2]+2*x[2]^2+2*x[3]+3*x[4]-1\n    F[4]=x[1]^2+3*x[2]^2+2*x[3]+3*x[4]-3\nend\n\nr = mcpsolve(f!, [0., 0., 0., 0.], [Inf, Inf, Inf, Inf],\n             [1.25, 0., 0., 0.5], reformulation = :smooth, autodiff = :forward)The solution is:julia> r.zero\n4-element Array{Float64,1}:\n  1.22474\n  0.0\n -1.378e-19\n  0.5The lower bounds are hit for the second and third components, hence the second and third components of the function are positive at the solution. On the other hand, the first and fourth components of the function are zero at the solution.julia> F = similar(r.zero)\n\njulia> f!(F, r.zero)\n\njulia> F\n4-element Array{Float64,1}:\n -1.26298e-9\n  3.22474\n  5.0\n  3.62723e-11"
},

{
    "location": "#Todolist-1",
    "page": "Readme",
    "title": "Todolist",
    "category": "section",
    "text": "Broyden updating of Jacobian in trust-region\nHomotopy methods\nLMMCP algorithm by C. Kanzow\nQR updating of the least-squares problem in the Anderson acceleration solver"
},

{
    "location": "#Related-Packages-1",
    "page": "Readme",
    "title": "Related Packages",
    "category": "section",
    "text": "JuMP.jl can also solve non linear equations. Just reformulate your problem as an optimization problem with non linear constraints: use the set of equations as constraints, and enter 1.0 as the objective function. JuMP currently supports a number of open-source and commercial solvers.\nComplementarity.jl brings the powerful modeling language of JuMP.jl to complementarity problems. It supports two solvers: PATHSolver.jl and NLsolve.jl."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Nocedal, Jorge and Wright, Stephen J. (2006): \"Numerical Optimization\", second edition, SpringerMINPACK by Jorge More\', Burt Garbow, and Ken Hillstrom at Argonne National LaboratoryMiranda, Mario J. and Fackler, Paul L. (2002): \"Applied Computational Economics and Finance\", MIT Press"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NLsolve]\nOrder = [:type, :function]"
},

]}
