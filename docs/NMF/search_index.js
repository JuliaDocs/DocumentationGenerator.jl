var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NMF.jl-1",
    "page": "Readme",
    "title": "NMF.jl",
    "category": "section",
    "text": "A Julia package for non-negative matrix factorization (NMF).(Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "#Development-Status-1",
    "page": "Readme",
    "title": "Development Status",
    "category": "section",
    "text": "Note: Nonnegative Matrix Factorization is an area of active research. New algorithms are proposed every year. Contributions are very welcomed."
},

{
    "location": "#Done-1",
    "page": "Readme",
    "title": "Done",
    "category": "section",
    "text": "Lee & Seung\'s Multiplicative Update (for both MSE & Divergence objectives)\n(Naive) Projected Alternate Least Squared\nALS Projected Gradient Methods\nRandom Initialization\nNNDSVD Initialization"
},

{
    "location": "#To-do-1",
    "page": "Readme",
    "title": "To do",
    "category": "section",
    "text": "Sparse NMF\nProbabilistic NMF"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "Non-negative Matrix Factorization (NMF) generally refers to the techniques for factorizing a non-negative matrix X into the product of two lower rank matrices W and H, such that WH optimally approximates X in some sense. Such techniques are widely used in text mining, image analysis, and recommendation systems. This package provides two sets of tools, respectively for initilization and optimization. A typical NMF procedure consists of two steps: (1) use an initilization function that initialize W and H; and (2) use an optimization algorithm to pursue the optimal solution.Most types and functions (except the high-level function nnmf) in this package are not exported. Users are encouraged to use them with the prefix NMF. This way allows us to use shorter names within the package and makes the codes more explicit and clear on the user side."
},

{
    "location": "#High-Level-Interface-1",
    "page": "Readme",
    "title": "High-Level Interface",
    "category": "section",
    "text": "The package provides a high-level function nnmf that runs the entire procedure (initialization + optimization):nnmf(X, k, ...)This function factorizes the input matrix X into the product of two non-negative matrices W and H. In general, it returns a result instance of type NMFResult, which is defined asstruct Result\n    W::Matrix{Float64}    # W matrix\n    H::Matrix{Float64}    # H matrix\n    niters::Int           # number of elapsed iterations\n    converged::Bool       # whether the optimization procedure converges\n    objvalue::Float64     # objective value of the last step\nendThe function supports the following keyword arguments:init:  A symbol that indicates the initialization method (default = nndsvdar). \nThis argument accepts the following values:\nrandom:  matrices filled with uniformly random values\nnndsvd:  standard version of NNDSVD\nnndsvda:  NNDSVDa variant\nnndsvdar:  NNDSVDar variant  \nalg:  A symbol that indicates the factorization algorithm (default = alspgrad).\nThis argument accepts the following values:\nmultmse:  Multiplicative update (using MSE as objective)\nmultdiv:  Multiplicative update (using divergence as objective)\nprojals:  (Naive) Projected Alternate Least Square\nalspgrad:  Alternate Least Square using Projected Gradient Descent\nmaxiter: Maximum number of iterations (default = 100).\ntol: tolerance of changes upon convergence (default = 10e-6).\nverbose: whether to show procedural information (default = false)."
},

{
    "location": "#Initialization-1",
    "page": "Readme",
    "title": "Initialization",
    "category": "section",
    "text": "NMF.randinit(X, k[; zeroh=false, normalize=false])\nInitialize W and H given the input matrix X and the rank k. This function returns a pair (W H). \nSuppose the size of X is (p n), then the size of W and H are respectively (p k) and (k n).\nUsage:\njulia   W, H = NMF.randinit(X, 3)\nFor some algorithms (e.g. ALS), only W needs to be initialized. For such cases, one may set the keyword argument zerohto be true, then in the output H will be simply a zero matrix of size (k n).\nAnother keyword argument is normalize. If normalize is set to true, columns of W will be normalized such that each column sum to one.\nNMF.nndsvd(X, k[; zeroh=false, variant=:std])\nUse the Non-Negative Double Singular Value Decomposition (NNDSVD) algorithm to initialize W and H. \nReference: C. Boutsidis, and E. Gallopoulos. SVD based initialization: A head start for nonnegative matrix factorization. Pattern Recognition, 2007.\nUsage:\njulia   W, H = NMF.nndsvd(X, k)\nThis function has two keyword arguments:\nzeroh: have H initialized when it is set to true, or set H to all zeros when it is set to false.\nvariant: the variant of the algorithm. Default is std, meaning to use the standard version, which would generate a rather sparse W. Other values are a and ar, respectively corresponding to the variants: NNDSVDa and NNDSVDar. Particularly, ar is recommended for dense NMF."
},

{
    "location": "#Factorization-Algorithms-1",
    "page": "Readme",
    "title": "Factorization Algorithms",
    "category": "section",
    "text": "This package provides multiple factorization algorithms. Each algorithm corresponds to a type. One can create an algorithm instance by choosing a type and specifying the options, and run the algorithm using NMFsolve:"
},

{
    "location": "#The-NMF.solve!-Function-1",
    "page": "Readme",
    "title": "The NMF.solve! Function",
    "category": "section",
    "text": "NMF.solve!(alg, X, W, H)Use the algorithm alg to factorize X into W and H. Here, W and H must be pre-allocated matrices (respectively of size (p k) and (k n)). W and H must be appropriately initialized before this function is invoked. For some algorithms, both W and H must be initialized (e.g. multiplicative updating); while for others, only W needs to be initialized (e.g. ALS).The matrices W and H are updated in place."
},

{
    "location": "#Algorithms-1",
    "page": "Readme",
    "title": "Algorithms",
    "category": "section",
    "text": "Multiplicative Updating\nReference: Daniel D. Lee and H. Sebastian Seung. Algorithms for Non-negative Matrix Factorization. Advances in NIPS, 2001.\nThis algorithm has two different kind of objectives: minimizing mean-squared-error (mse) and minimizing divergence (div). Both W and H need to be initialized.\njulia   MultUpdate(obj=:mse,        # objective, either :mse or :div              maxiter=100,     # maximum number of iterations              verbose=false,   # whether to show procedural information              tol=1.0e-6,      # tolerance of changes on W and H upon convergence              lambda=1.0e-9)   # regularization coefficients (added to the denominator)\nNote: the values above are default values for the keyword arguments. One can override part (or all) of them.(Naive) Projected Alternate Least Square\nThis algorithm alternately updates W and H while holding the other fixed. Each update step solves W or H without enforcing the non-negativity constrait, and forces all negative entries to zeros afterwards. Only W needs to be initialized. \njulia   ProjectedALS(maxiter::Integer=100,    # maximum number of iterations                verbose::Bool=false,     # whether to show procedural information                tol::Real=1.0e-6,        # tolerance of changes on W and H upon convergence                lambda_w::Real=1.0e-6,   # L2 regularization coefficient for W                lambda_h::Real=1.0e-6)   # L2 regularization coefficient for H\nAlternate Least Square Using Projected Gradient Descent\nReference: Chih-Jen Lin. Projected Gradient Methods for Non-negative Matrix Factorization. Neural Computing, 19 (2007).\nThis algorithm adopts the alternate least square strategy. A efficient projected gradient descent method is used to solve each sub-problem. Both W and H need to be initialized.\njulia   ALSPGrad(maxiter::Integer=100,      # maximum number of iterations (in main procedure)            maxsubiter::Integer=200,   # maximum number of iterations in solving each sub-problem            tol::Real=1.0e-6,          # tolerance of changes on W and H upon convergence            tolg::Real=1.0e-4,         # tolerable gradient norm in sub-problem (first-order optimality)            verbose::Bool=false)       # whether to show procedural information"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Here are examples that demonstrate how to use this package to factorize a non-negative dense matrix."
},

{
    "location": "#Use-High-level-Function:-nnmf-1",
    "page": "Readme",
    "title": "Use High-level Function: nnmf",
    "category": "section",
    "text": "... # prepare input matrix X\n\nr = nnmf(X, k; alg=:multmse, maxiter=30, tol=1.0e-4)\n\nW = r.W\nH = r.H"
},

{
    "location": "#Use-Multiplicative-Update-1",
    "page": "Readme",
    "title": "Use Multiplicative Update",
    "category": "section",
    "text": "import NMF\n\n # initialize\nW, H = NMF.randinit(X, 5)\n\n # optimize \nNMF.solve!(NMF.MultUpdate(obj=:mse,maxiter=100), X, W, H)"
},

{
    "location": "#Use-Naive-ALS-1",
    "page": "Readme",
    "title": "Use Naive ALS",
    "category": "section",
    "text": "import NMF\n\n # initialize\nW, H = NMF.randinit(X, 5)\n\n # optimize \nNMF.solve!(NMF.ProjectedALS(maxiter=50), X, W, H)"
},

{
    "location": "#Use-ALS-with-Projected-Gradient-Descent-1",
    "page": "Readme",
    "title": "Use ALS with Projected Gradient Descent",
    "category": "section",
    "text": "import NMF\n\n # initialize\nW, H = NMF.nndsvdar(X, 5)\n\n # optimize \nNMF.solve!(NMF.ALSPGrad(maxiter=50, tolg=1.0e-6), X, W, H)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NMF]\nOrder = [:type, :function]"
},

]}
