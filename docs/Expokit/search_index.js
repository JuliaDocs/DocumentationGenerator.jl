var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status)"
},

{
    "location": "#Expokit-1",
    "page": "Readme",
    "title": "Expokit",
    "category": "section",
    "text": "This package provides Julia implementations of some routines contained in EXPOKIT. Those routines allow an efficient calculation of the action of matrix exponentials on vectors for large sparse matrices. For more details about the methods see R.B. Sidje, ACM Trans. Math. Softw., 24(1):130-156, 1998 (or its preprint).Note: Apart from expmv (which is called expv in EXPOKIT) also phimv, padm and chbv are available."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Pkg.add(\"Expokit\")"
},

{
    "location": "#expmv-1",
    "page": "Readme",
    "title": "expmv",
    "category": "section",
    "text": "w = expmv!{T}( w::Vector{T}, t::Number, A, v::Vector{T}; kwargs...)The function expmv! calculates w = exp(t*A)*v, where A is a matrix or any type that supports size, eltype and mul! and v is a dense vector by using Krylov subspace projections. The result is stored in w.The following keywords are supportedtol: tolerance to control step size (default: 1e-7)\nm: size of Krylov subspace (default: min(30,size(A,1)))\nnorm: user-supplied function to calculate vector norm (dafault: Base.norm)\nanorm: operator/matrix norm of A to estimate first time-step (default: opnorm(A, Inf))For convenience, the following versions of expmv are providedv = expmv!{T}( t::Number, A, v::Vector{T}; kwargs...)\nw = expmv{T}( t::Number, A, v::Vector{T}; kwargs...)"
},

{
    "location": "#phimv-1",
    "page": "Readme",
    "title": "phimv",
    "category": "section",
    "text": "w = phimv!{T}( w::Vector{T}, t::Number, A, u::Vector{T}, v::Vector{T}; kwargs...)The function phimv! calculates w = e^{tA}v + t φ(t A) u with φ(z) = (exp(z)-1)/z, where A is a matrix or any type that supports size, eltype and mul!, u and v are dense vectors by using Krylov subspace projections. The result is stored in w. The supported keywords are the same as for expmv!."
},

{
    "location": "#chbv-1",
    "page": "Readme",
    "title": "chbv",
    "category": "section",
    "text": "chbv!{T}(w::Vector{T}, A, v::Vector{T})The function chbv! calculates w = exp(A)*v using the partial fraction expansion of the uniform rational Chebyshev approximation of type (14,14). "
},

{
    "location": "#padm-1",
    "page": "Readme",
    "title": "padm",
    "category": "section",
    "text": "padm(A; p=6)The function padm calculates the matrix exponential exp(A) of A using the irreducible  (p,p)-degree rational Pade approximation to the exponential function."
},

{
    "location": "autodocs/#Expokit.chbv-Union{Tuple{T}, Tuple{Any,Array{T,1}}} where T",
    "page": "Docstrings",
    "title": "Expokit.chbv",
    "category": "method",
    "text": "chbv(A, vec)\n\nCalculate matrix exponential acting on some vector using the Chebyshev method.\n\nInput\n\nA   – matrix which can be dense or sparse\nvec – vector on which the matrix exponential of A is applied\n\nNotes\n\nThis Julia implementation is based on Expokit\'s CHBV Matlab code by Roger B. Sidje, see below.\n\n\n\ny = chbv( H, x )\nCHBV computes the direct action of the matrix exponential on\na vector: y = exp(H) * x. It uses the partial fraction expansion of\nthe uniform rational Chebyshev approximation of type (14,14).\nAbout 14-digit accuracy is expected if the matrix H is symmetric\nnegative definite. The algorithm may behave poorly otherwise.\nSee also PADM, EXPOKIT.\n\nRoger B. Sidje (rbs@maths.uq.edu.au)\nEXPOKIT: Software Package for Computing Matrix Exponentials.\nACM - Transactions On Mathematical Software, 24(1):130-156, 1998\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Expokit.expmv-Union{Tuple{T}, Tuple{Number,Any,Array{T,1}}} where T",
    "page": "Docstrings",
    "title": "Expokit.expmv",
    "category": "method",
    "text": "expmv{T}(t, A, vec; [tol], [m], [norm], [anorm])\n\nCalculate matrix exponential acting on some vector, w = e^tAv, using the Krylov subspace approximation.\n\nSee R.B. Sidje, ACM Trans. Math. Softw., 24(1):130-156, 1998 and http://www.maths.uq.edu.au/expokit\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Expokit.padm-Tuple{Any}",
    "page": "Docstrings",
    "title": "Expokit.padm",
    "category": "method",
    "text": "padm(A; p=6)\n\nCalculate matrix exponential using Pade approximants.\n\npadm uses the irreducible (p, p)-degree rational Pade approximation to the exponential function. The result is always a dense matrix.\n\nInput\n\nA – matrix which can be dense or sparse\np – (optional, default: 6) degree of the rational Pade approximation to        the exponential function\n\nNotes\n\nThis Julia implementation originated from Expokit\'s PADM Matlab code by Roger B. Sidje, see below.\n\n\n\nE = padm( A, p )   PADM computes the matrix exponential exp(A) using the irreducible    (p,p)-degree rational Pade approximation to the exponential function.\n\nE = padm( A )   p is internally set to 6 (recommended and generally satisfactory).\n\nSee also CHBV, EXPOKIT and the MATLAB supplied functions EXPM and EXPM1.\n\nRoger B. Sidje (rbs@maths.uq.edu.au)   EXPOKIT: Software Package for Computing Matrix Exponentials.   ACM - Transactions On Mathematical Software, 24(1):130-156, 1998\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Expokit.phimv-Union{Tuple{T}, Tuple{Number,Any,Array{T,1},Array{T,1}}} where T",
    "page": "Docstrings",
    "title": "Expokit.phimv",
    "category": "method",
    "text": "phimv{T}(t, A, u, vec; [tol], [m], [norm], [anorm])\n\nCalculate the solution of a nonhomogeneous linear ODE problem with constant input w = e^tAv + tφ(tA)u using the Krylov subspace approximation.\n\nInput\n\nA   – matrix which can be dense or sparse\nu   – vector, constant input of the ODE\nvec – vector on which the matrix exponential of A is applied\ntol – (optional, default: 1e-7) the requested accuracy tolerance on w\nm   – (optional, default: min(30, n)) maximum size of the Krylov basis\n\n\n\n[w, err] = phiv( t, A, u, v, tol, m )\nPHIV computes an approximation of ``w = exp(tA)v + t φ(tA)u``\nfor a general matrix A using Krylov subspace projection techniques.\nHere, ``φ(z) = (\\exp(z)-1)/z`` and ``w`` is the solution of the\nnonhomogeneous linear ODE problem ``w\' = Aw + u``, ``w(0) = v``.\nIt does not compute the matrix functions in isolation but instead,\nit computes directly the action of these functions on the\noperand vectors. This way of doing so allows for addressing large\nsparse problems. The matrix under consideration interacts only\nvia matrix-vector products (matrix-free method).\n\nRoger B. Sidje (rbs@maths.uq.edu.au)\nEXPOKIT: Software Package for Computing Matrix Exponentials.\nACM - Transactions On Mathematical Software, 24(1):130-156, 1998\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Expokit]\nOrder = [:type, :function]"
},

]}
