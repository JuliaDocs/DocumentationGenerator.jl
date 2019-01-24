var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IterativeRefinement-1",
    "page": "Readme",
    "title": "IterativeRefinement",
    "category": "section",
    "text": "<!– (Image: Lifecycle) –> (Image: Lifecycle)<!– (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) –> (Image: Build Status) (Image: codecov.io)This package is an implementation of multi-precision iterative refinement for linear matrix-vector problems of the formA x = b."
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": "julia> using LinearAlgebra, IterativeRefinement\njulia> x, bnorm, bcomp = rfldiv(A,b)This provides an accurate solution vector x and estimated bounds on norm-wise and component-wise relative error. By default LU decomposition is used."
},

{
    "location": "#Advanced-Usage-1",
    "page": "Readme",
    "title": "Advanced Usage",
    "category": "section",
    "text": "See the function docstring for details.If one has several right-hand-sides, one can equilibrate and factor A in advance; see the tests for an example."
},

{
    "location": "#Background-1",
    "page": "Readme",
    "title": "Background",
    "category": "section",
    "text": "The purpose of iterative refinement is to improve the accuracy of a solution.  If x is the exact solution, a simple solve of the form y = A \\ b will have a relative forward error (norm(y-x)/norm(x)) of approximately ϵ * O(n) * cond(A) where ϵ is the unit roundoff error in the standard precision. Iterative refinement with higher precision residuals can reduce this to ϵ * O(n), as long as the matrix A is not very badly conditioned relative to ϵ.Why not do everything in high precision? The factorization step is typically much more expensive in high precision, whereas the residual computation is relatively cheap. Furthermore, this scheme provides useful error bounds.For typical use, one would have a working precision of Float64 (ϵ = 2.2e-16), so that fast LAPACK/BLAS routines dominate the runtime. rfldiv will then use Double64 from DoubleFloats.jl for the residuals."
},

{
    "location": "#Reference-1",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": "To be precise, this package implements Algorithm 3 from J.Demmel et al., \"Error bounds from extra precise iterative refinement\", LAPACK Working Note Nr. 165 (2005), also published as ACM TOMS, 32, 325 (2006).  The work described therein eventually turned into a collection of subroutines included in some versions of LAPACK.  This implementation is based on the paper; minor modifications were introduced based on experimentation."
},

{
    "location": "autodocs/#IterativeRefinement.condInfest-Union{Tuple{T}, Tuple{Union{DenseArray{T,2}, ReinterpretArray{T,2,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, ReshapedArray{T,2,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, SubArray{T,2,A,I,L} where L where I<:Tuple{Vararg{Union{Int64, AbstractRange{Int64}, AbstractCartesianIndex},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, DenseArray}},Factorization{T}}, Tuple{Union{DenseArray{T,2}, ReinterpretArray{T,2,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, ReshapedArray{T,2,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, SubArray{T,2,A,I,L} where L where I<:Tuple{Vararg{Union{Int64, AbstractRange{Int64}, AbstractCartesianIndex},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, DenseArray}},Factorization{T},Any}} where T",
    "page": "Docstrings",
    "title": "IterativeRefinement.condInfest",
    "category": "method",
    "text": "condInfest(A,F,anorm)\n\ncomputes an approximation to the condition of matrix A in the infinity-norm, using factorization F and the precomputed infinity norm anorm of A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IterativeRefinement.equilibrators-Union{Tuple{AbstractArray{T,2}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "IterativeRefinement.equilibrators",
    "category": "method",
    "text": "equilibrators(A) -> R,C\n\ncompute row- and column-wise scaling vectors R,C for a matrix A such that the absolute value of the largest element in any row or column of Diagonal(R)*A*Diagonal(C) is close to unity. Designed to reduce the condition number of the working matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IterativeRefinement.rfldiv-Union{Tuple{T}, Tuple{AbstractArray{T,2},AbstractArray{T,1}}, Tuple{AbstractArray{T,2},AbstractArray{T,1},Any}} where T",
    "page": "Docstrings",
    "title": "IterativeRefinement.rfldiv",
    "category": "method",
    "text": "rfldiv(A,b,f=lu; kwargs...) -> x,bnorm,bcomp\n\nCompute an accurate solution to a linear system A x = b using extra-precise iterative refinement, with error bounds.\n\nReturns solution x, a normwise relative forward error estimate bnorm, and maximum componentwise relative error estimate bcomp. Specifically,  bnorm is an estimate of  xtrue - x  x (max norms). If the problem is so ill-conditioned that a good solution is unrealizable, bnorm and bcomp are set to unity (unless expert).\n\nArguments\n\nA: a matrix,\nb: a vector with the same eltype,\nf: a factorization function such as lu.\n\nKeywords\n\nDT: higher-precision type for refinement; defaults to Float64 if the eltype of A and b is Float32, Double64 for Float64, etc.\nverbosity: 0(default): quiet, 1: report on iterations, 2: details.\nequilibrate::Bool: whether the function should equilibrate A (default true).\nmaxiter: default 20.\ntol: relative tolerance for convergence, in units of eps(T).\nexpert::Bool: whether to return questionable bounds in extreme cases.\nκ: the (max-norm) condition of A (see below).\nF: a factorization of A (see below).\n\nIf A has already been equilibrated, and a Factorization object F and condition estimate κ have already been computed, they may be provided as keyword arguments; no check for consistency is done here.\n\nUses the algorithm of Demmel et al. ACM TOMS, 32, 325 (2006).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IterativeRefinement.norm1est!-Union{Tuple{T}, Tuple{Any,Any,AbstractArray{T,1}}} where T",
    "page": "Docstrings",
    "title": "IterativeRefinement.norm1est!",
    "category": "method",
    "text": "norm1est!(applyA!,applyAH!,y::Vector) => γ\n\nEstimate the 1-norm of a linear operator A expressed as functions which apply A and adjoint(A) to a vector such as y.\n\ncf. N.J. Higham, SIAM J. Sci. Stat. Comp. 11, 804 (1990)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [IterativeRefinement]\nOrder = [:type, :function]"
},

]}
