var documenterSearchIndex = {"docs": [

{
    "location": "#ProximalAlgorithms.AFBA-Tuple{Any,Any}",
    "page": "Home",
    "title": "ProximalAlgorithms.AFBA",
    "category": "method",
    "text": "Asymmetric forward-backward-adjoint algorithm\n\nAFBA(x0, y0; kwargs)\n\nSolves convex optimization problems of the form\n\nminimize f(x) + g(x) + (h □ l)(L x),\n\nwhere f is smooth, g and h are possibly nonsmooth and l is strongly convex. Symbol □ denotes the infimal convolution, and L is a linear mapping. Points x0 and y0 are the initial primal and dual iterates, respectively.\n\nKeyword arguments are as follows:\n\nf: smooth, convex function (default: zero)\ng: convex function (possibly nonsmooth, default: zero)\nh: convex function (possibly nonsmooth, default: zero)\nl: strongly convex function (possibly nonsmooth, default: indicator of {0})\nL: linear operator (default: identity)\nbetaQ: Lipschitz constant of gradient of f (default: zero)\nbetaR: Lipschitz constant of gradient of l conjugate (default: zero)\ngamma1: stepsize corresponding to the primal updates (default: see [1] for each case)\ngamma2: stepsize corresponding to the dual updates (default: see [1] for each case)\ntheta: nonnegative algorithm parameter (default: \'1\')\nmu: algorithm parameter in the range 0,1\ntol: primal-dual termination tolerance (default: 1e-5)\nmaxit: maximum number of iterations (default: 10000)\nverbose, verbosity level (default: 1)\nverbose_freq, verbosity frequency for verbose = 1 (default: 100)\n\nThe iterator implements Algorithm 3 of [1] with constant stepsize (α_n=λ) for several prominant special cases:\n\nθ = 2          ==>   Corresponds to the Vu-Condat Algorithm [2,3].\nθ = 1, μ=1\nθ = 0, μ=1\nθ ∈ [0,∞), μ=0\n\nSee [1, Figure 1] for other special cases and relation to other algorithms.\n\n[1] Latafat, Patrinos. \"Asymmetric forward–backward–adjoint splitting for solving monotone inclusions involving three operators\"  Computational Optimization and Applications, pages 1–37, 2017. [2] Condat. \"A primal–dual splitting method for convex optimization involving Lipschitzian, proximable and linear composite terms\" Journal of Optimization Theory and Applications 158.2 (2013): 460-479. [3] Vũ. \"A splitting algorithm for dual monotone inclusions involving cocoercive operators\"\" Advances in Computational Mathematics, 38(3), pp.667-681.\n\n\n\n\n\n"
},

{
    "location": "#ProximalAlgorithms.ChambollePock-Tuple{Any,Any}",
    "page": "Home",
    "title": "ProximalAlgorithms.ChambollePock",
    "category": "method",
    "text": "Chambolle-Pock primal-dual algorithm\n\nChambollePock(x0, y0; kwargs)\n\nSolves convex optimization problems of the form\n\nminimize g(x) + (h □ l)(L x).\n\nwhere g and h are possibly nonsmooth and l is strongly convex. Symbol □ denotes the infimal convolution, and L is a linear mapping. Points x0 and y0 are the initial primal and dual iterates, respectively.\n\nSee documentation of AFBA for the list of keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "#ProximalAlgorithms.FBS-Tuple{Any}",
    "page": "Home",
    "title": "ProximalAlgorithms.FBS",
    "category": "method",
    "text": "Forward-backward splitting\n\nFBS(x0; kwargs...)\n\nSolves a problem of the form\n\nminimize fs(As*x) + fq(Aq*x) + g(x)\n\nwhere fs is a smooth function, fq is a quadratic function, g is a proximable function and As, Aq are linear operators. Parameter x0 is the initial point. Keyword arguments specify the problem and additional options as follows:\n\nfs, smooth function (default: identically zero function)\nfq, quadratic function (default: identically zero function)\ng, proximable function (default: identically zero function)\nAs, linear operator (default: identity)\nAq, linear operator (default: identity)\ngamma, stepsize (default: unspecified, determine automatically)\nmaxit, maximum number of iteration (default: 10000)\ntol, halting tolerance on the fixed-point residual (default: 1e-4)\nadaptive, adaptively adjust gamma (default: false if gamma is provided)\nfast, enables accelerated method (default: false)\nverbose, verbosity level (default: 1)\nverbose_freq, verbosity frequency for verbose = 1 (default: 100)\n\n\n\n\n\n"
},

{
    "location": "#ProximalAlgorithms.VuCondat-Tuple{Any,Any}",
    "page": "Home",
    "title": "ProximalAlgorithms.VuCondat",
    "category": "method",
    "text": "Vũ-Condat primal-dual algorithm\n\nVuCondat(x0, y0; kwargs)\n\nSolves convex optimization problems of the form\n\nminimize f(x) + g(x) + (h □ l)(L x).\n\nwhere f is smooth, g and h are possibly nonsmooth and l is strongly convex.\n\nSymbol □ denotes the infimal convolution, and L is a linear mapping. Points x0 and y0 are the initial primal and dual iterates, respectively.\n\nSee documentation of AFBA for the list of keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ProximalAlgorithms]\nOrder = [:type, :function]"
},

]}
