var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "#Motivation-1",
    "page": "Readme",
    "title": "Motivation",
    "category": "section",
    "text": "This package solves non linear least squares optimization problems. The package is inspired by the Ceres library.  This package is written with large scale problems in mind (in particular for sparse Jacobians). "
},

{
    "location": "#Simple-Syntax-1",
    "page": "Readme",
    "title": "Simple Syntax",
    "category": "section",
    "text": "The symple syntax mirrors the Optim.jl syntaxusing LeastSquaresOptim\nfunction rosenbrock(x)\n	[1 - x[1], 100 * (x[2]-x[1]^2)]\nend\nx0 = zeros(2)\noptimize(rosenbrock, x0, Dogleg())\noptimize(rosenbrock, x0, LevenbergMarquardt())You can also add the options : x_tol, f_tol, g_tol, iterations, Δ (initial radius), autodiff (:central to use finite difference method or :forward to use ForwardDiff package) as well as lower / upper arguments to impose boundary constraints."
},

{
    "location": "#Choice-of-Optimizer-/-Least-Square-Solver-1",
    "page": "Readme",
    "title": "Choice of Optimizer / Least Square Solver",
    "category": "section",
    "text": "You can specify two least squares optimizers, Dogleg() and LevenbergMarquardt()\nYou can specify three least squares solvers (used within the optimizer)- `LeastSquaresOptim.QR()` or  `LeastSquaresOptim.Cholesky()` for dense jacobians\n- `LeastSquaresOptim.LSMR()`. A conjugate gradient method ([LSMR]([http://web.stanford.edu/group/SOL/software/lsmr/) with diagonal preconditioner). Beyond `Matrix` and `SparseMatrixCSC`, the jacobian can be any type that defines the following interface:\n\n	- `mul!(y, A, x, α::Number, β::Number)` updates y to αAx + βy\n	- `mul!(x, A\', y, α::Number, β::Number)` updates x to αA\'y + βx\n	- `colsumabs2!(x, A)` updates x to the sum of squared elements of each column\n	- `size(A, d)` returns the nominal dimensions along the dth axis in the equivalent matrix representation of A.\n	- `eltype(A)` returns the element type implicit in the equivalent matrix representation of A.\n\n	Similarly, `x` or `f(x)` may be custom types. An example of the interface can be found in the package [SparseFactorModels.jl](https://github.com/matthieugomez/SparseFactorModels.jl).\n\n	Moreover, you can optionally specifying a function `preconditioner!` and a matrix `P` such that `preconditioner!(P, x, J, λ)` updates `P` as a preconditioner for `J\'J + λ`. The preconditioner can be any type that supports `A_ldiv_B!(x, P, y)`. By default, the preconditioner is chosen as the diagonal of the matrix `J\'J + λ`.The optimizers and solvers are presented in more depth in the Ceres documentation. For dense jacobians, the default option is Doglel(QR()). For sparse jacobians, the default option is  LevenbergMarquardt(LSMR())optimize(rosenbrock, x0, Dogleg(LeastSquaresOptim.QR()))\noptimize(rosenbrock, x0, LevenbergMarquardt(LeastSquaresOptim.LSMR()))"
},

{
    "location": "#Alternative-in-place-Syntax-1",
    "page": "Readme",
    "title": "Alternative in-place Syntax",
    "category": "section",
    "text": "The alternative syntax is useful when specifying in-place functions or the jacobian. Pass optimize a LeastSquaresProblem object with:x an initial set of parameters.\nf!(out, x) that writes f(x) in out.\nthe option output_length to specify the length of the output vector. \nOptionally, g! a function such that g!(out, x) writes the jacobian at x in out. Otherwise, the jacobian will be computed following the :autodiff argument.using LeastSquaresOptim\nfunction rosenbrock_f!(out, x)\n out[1] = 1 - x[1]\n out[2] = 100 * (x[2]-x[1]^2)\nend\noptimize!(LeastSquaresProblem(x = zeros(2), f! = rosenbrock_f!, output_length = 2, autodiff = :central), Dogleg())\n\n# if you want to use gradient\nfunction rosenbrock_g!(J, x)\n    J[1, 1] = -1\n    J[1, 2] = 0\n    J[2, 1] = -200 * x[1]\n    J[2, 2] = 100\nend\noptimize!(LeastSquaresProblem(x = zeros(2), f! = rosenbrock_f!, g! = rosenbrock_g!, output_length = 2), Dogleg())"
},

{
    "location": "#Related-packages-1",
    "page": "Readme",
    "title": "Related packages",
    "category": "section",
    "text": "Related:LSqfit.jl fits curves (i.e. models of the form y = f(x, β))\nOptim.jl solves general optimization problems.\nNLSolve.jl solves non linear equations by least squares minimization."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Nocedal, Jorge and Stephen Wright An Inexact Levenberg-Marquardt method for Large Sparse Nonlinear Least Squares  (1985) The Journal of the Australian Mathematical Society\nFong, DC. and Michael Saunders. (2011) LSMR: An Iterative Algorithm for Sparse Least-Squares Problems.  SIAM Journal on Scientific Computing\nAgarwal, Sameer, Keir Mierle and Others. (2010) Ceres Solver"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the package,using Pkg\nPkg.add(\"LeastSquaresOptim\")"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LeastSquaresOptim]\nOrder = [:type, :function]"
},

]}
