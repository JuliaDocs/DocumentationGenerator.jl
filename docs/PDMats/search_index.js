var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PDMats.jl-1",
    "page": "Readme",
    "title": "PDMats.jl",
    "category": "section",
    "text": "Uniform interface for positive definite matrices of various structures.(Image: Build Status) (Image: Coverage Status) (Image: PDMats) (Image: PDMats)Positive definite matrices are widely used in machine learning and probabilistic modeling, especially in applications related to graph analysis and Gaussian models. It is not uncommon that positive definite matrices used in practice have special structures (e.g. diagonal), which can be exploited to accelerate computation.PDMats.jl supports efficient computation on positive definite matrices of various structures. In particular, it provides uniform interfaces to use positive definite matrices of various structures for writing generic algorithms, while ensuring that the most efficient implementation is used in actual computation."
},

{
    "location": "#Positive-definite-matrix-types-1",
    "page": "Readme",
    "title": "Positive definite matrix types",
    "category": "section",
    "text": "This package defines an abstract type AbstractPDMat{T<:Real} as the base type for positive definite matrices with different internal representations.Elemenent types are in princple all Real types, but in practice this is limited by the support for floating point types in Base.LinAlg.Cholesky.Float64     Fully supported from Julia 0.3.\nFloat32     Fully supported from Julia 0.4.2. Full, diagonal and scale matrix types are supported in Julia 0.3 or higher.\nFloat16     Promoted to Float32 for full, diagonal and scale matrix. Currently unsupported for sparse matrix.\nBigFloat    Supported in Julia 0.4 for full, diagonal and scale matrix. Currently unsupported for sparse matrix.\nPDMat: full covariance matrix, defined asstruct PDMat{T<:Real,S<:AbstractMatrix} <: AbstractPDMat{T}\n    dim::Int                    # matrix dimension\n    mat::S                      # input matrix\n    chol::Cholesky{T,S}         # Cholesky factorization of mat\nend\n\n# Constructors\n\nPDMat(mat, chol)    # with both the input matrix and a Cholesky factorization\n\nPDMat(mat)          # with the input matrix, of type Matrix or Symmetric\n                    # Remarks: the Cholesky factorization will be computed\n                    # upon construction.\n\nPDMat(chol)         # with the Cholesky factorization\n                    # Remarks: the full matrix will be computed upon\n                    # construction.PDiagMat: diagonal matrix, defined asstruct PDiagMat{T<:Real,V<:AbstractVector} <: AbstractPDMat{T}\n    dim::Int                    # matrix dimension\n    diag::V                     # the vector of diagonal elements\n    inv_diag::V                 # the element-wise inverse of diag\nend\n\n# Constructors\n\nPDiagMat(v,inv_v)   # with the vector of diagonal elements and its inverse\nPDiagMat(v)         # with the vector of diagonal elements\n                    # inv_diag will be computed upon constructionScalMat: uniform scaling matrix, as v * eye(d), defined asstruct ScalMat{T<:Real} <: AbstractPDMat{T}\n    dim::Int         # matrix dimension\n    value::T         # diagonal value (shared by all diagonal elements)\n    inv_value::T     # inv(value)\nend\n\n\n# Constructors\n\nScalMat(d, v, inv_v) # with dimension d, diagonal value v and its inverse inv_v\nScalMat(d, v)        # with dimension d and diagonal value vPDSparseMat: sparse covariance matrix, defined asstruct PDSparseMat{T<:Real,S<:AbstractSparseMatrix} <: AbstractPDMat{T}\n    dim::Int                       # matrix dimension\n    mat::SparseMatrixCSC           # input matrix\n    chol::CholTypeSparse           # Cholesky factorization of mat\nend\n\n# Constructors\n\nPDSparseMat(mat, chol)    # with both the input matrix and a Cholesky factorization\n\nPDSparseMat(mat)          # with the sparse input matrix, of type SparseMatrixCSC\n                          # Remarks: the Cholesky factorization will be computed\n                          # upon construction.\n\nPDSparseMat(chol)         # with the Cholesky factorization\n                          # Remarks: the sparse matrix \'mat\' will be computed upon\n                          # construction."
},

{
    "location": "#Common-interface-1",
    "page": "Readme",
    "title": "Common interface",
    "category": "section",
    "text": "All subtypes of AbstractPDMat share the same API, i.e. with the same set of methods to operate on their instances. These methods are introduced below, where a is an instance of a subtype of AbstractPDMat to represent a positive definite matrix, x be a column vector or a matrix with size(x,1) == dim(a), and c be a positive real value.\ndim(a)      # return the dimension of `a`.\n            # Let `a` represent a d x d matrix, then `dim(a)` returns d.\n\nsize(a)     # return the size tuple of `a`, i.e. `(dim(a), dim(a))`.\n\nsize(a, i)  # return the i-th dimension of `a`.\n\nndims(a)    # the number of dimensions, which is always 2.\n\neltype(a)   # the element type\n\nMatrix(a)   # return a copy of the matrix in full form.\n\ndiag(a)     # return a vector of diagonal elements.\n\ninv(a)      # inverse of `a`, of a proper subtype of `AbstractPDMat`.\n            # Note: when `a` is an instance of either `PDMat`, `PDiagMat`,\n            # and `ScalMat`, `inv(a)` is of the same type of `a`.\n            # This needs not be required for customized subtypes -- the\n            # inverse does not always has the same pattern as `a`.\n\neigmax(a)   # maximum eigenvalue of `a`.\n\neigmin(a)   # minimum eigenvalue of `a`.\n\nlogdet(a)   # log-determinant of `a`, computed in a numerically stable way.\n\na * x       # multiple `a` with `x` (forward transform)\n\na \\ x       # multiply `inv(a)` with `x` (backward transform).\n            # The internal implementation may not explicitly instantiate\n            # the inverse of `a`.\n\na * c       # scale `a` by a positive scale `c`.\n            # The result is in general of the same type of `a`.\n\nc * a       # equivalent to a * c.\n\na + b       # add two positive definite matrices\n\npdadd(a, b, c)      # add `a` with `b * c`, where both `a` and `b` are\n                    # instances of `AbstractPDMat`.\n\npdadd(m, a)         # add `a` to a dense matrix `m` of the same size.\n\npdadd(m, a, c)      # add `a * c` to a dense matrix `m` of the same size.\n\npdadd!(m, a)        # add `a` to a dense matrix `m` of the same size inplace.\n\npdadd!(m, a, c)     # add `a * c` to a dense matrix `m` of the same size,\n                    # inplace.\n\npdadd!(r, m, a)     # add `a` to a dense matrix `m` of the same size, and write\n                    # the result to `r`.\n\npdadd!(r, m, a, c)  # add `a * c` to a dense matrix `m` of the same size, and\n                    # write the result to `r`.\n\nquad(a, x)          # compute x\' * a * x when `x` is a vector.\n                    # perform such computation in a column-wise fashion, when\n                    # `x` is a matrix, and return a vector of length `n`,\n                    # where `n` is the number of columns in `x`.\n\nquad!(r, a, x)      # compute x\' * a * x in a column-wise fashion, and write\n                    # the results to `r`.\n\ninvquad(a, x)       # compute x\' * inv(a) * x when `x` is a vector.\n                    # perform such computation in a column-wise fashion, when\n                    # `x` is a matrix, and return a vector of length `n`.\n\ninvquad!(r, a, x)   # compute x\' * inv(a) * x in a column-wise fashion, and\n                    # write the results to `r`.\n\nX_A_Xt(a, x)        # compute `x * a * x\'` for a matrix `x`.\n\nXt_A_X(a, x)        # compute `x\' * a * x` for a matrix `x`.\n\nX_invA_Xt(a, x)     # compute `x * inv(a) * x\'` for a matrix `x`.\n\nXt_invA_X(a, x)     # compute `x\' * inv(a) * x` for a matrix `x`.\n\nwhiten(a, x)        # whitening transform. `x` can be a vector or a matrix.\n                    #\n                    # Note: If the covariance of `x` is `a`, then the\n                    # covariance of the transformed result is an identity\n                    # matrix.\n\nwhiten!(a, x)       # whitening transform inplace, directly updating `x`.\n\nwhiten!(r, a, x)    # write the transformed result to `r`.\n\nunwhiten(a, x)      # inverse of whitening transform. `x` can be a vector or\n                    # a matrix.\n                    #\n                    # Note: If the covariance of `x` is an identity matrix,\n                    # then the covariance of the transformed result is `a`.\n                    # Note: the un-whitening transform is useful for\n                    # generating Gaussian samples.\n\nunwhiten!(a, x)     # un-whitening transform inplace, updating `x`.\n\nunwhiten!(r, a, x)  # write the transformed result to `r`.\n\ntest_pdmat(a, amat)     # test the correctness of implementation, given an\n                        # instance of some sub-type of `AbstractPDMat`, and\n                        # a corresponding full matrix.\n                        #\n                        # Note: this function is provided for the developers\n                        # who want to define their own customized sub types."
},

{
    "location": "#Define-Customized-Subtypes-1",
    "page": "Readme",
    "title": "Define Customized Subtypes",
    "category": "section",
    "text": "In some situation, it is useful to define a customized subtype of AbstractPDMat to capture positive definite matrices with special structures. For this purpose, one has to define a subset of methods (as listed below), and other methods will be automatically provided.\n# Let `M` be the name of the subtype, then the following methods need\n# to be implemented for `M`:\n\ndim(a::M)       # return the dimension of `a`\n\nMatrix(a::M)    # return a copy of the matrix in full form, of type\n                # `Matrix{eltype(M)}`.\n\ndiag(a::M)      # return the vector of diagonal elements, of type\n                # `Vector{eltype(M)}`.\n\npdadd!(m, a, c)     # add `a * c` to a dense matrix `m` of the same size\n                    # inplace.\n\n* (a::M, c::Real)        # return a scaled version of `a`.\n\n* (a::M, x::DenseVecOrMat)  # transform `x`, i.e. compute `a * x`.\n\n\\ (a::M, x::DenseVecOrMat)  # inverse transform `x`, i.e. compute `inv(a) * x`.\n\ninv(a::M)       # compute the inverse of `a`.\n\nlogdet(a::M)    # compute the log-determinant of `a`.\n\neigmax(a::M)    # compute the maximum eigenvalue of `a`.\n\neigmin(a::M)    # compute the minimum eigenvalue of `a`.\n\nwhiten!(r::DenseVecOrMat, a::M, x::DenseVecOrMat)  # whitening transform,\n                                                   # write result to `r`.\n\nunwhiten!(r::DenseVecOrMat, a::M, x::DenseVecOrMat)  # un-whitening transform,\n                                                     # write result to `r`.\n\nquad(a::M, x::DenseVector)      # compute `x\' * a * x`\n\nquad!(r::AbstractArray, a::M, x::DenseMatrix)   # compute `x\' * a * x` in\n                                                # a column-wise manner\n\ninvquad(a::M, x::DenseVector)   # compute `x\' * inv(a) * x`\n\ninvquad!(r::AbstractArray, a::M, x::DenseMatrix) # compute `x\' * inv(a) * x`\n                                                 # in a column-wise manner\n\nX_A_Xt(a::M, x::DenseMatrix)        # compute `x * a * x\'`\n\nXt_A_X(a::M, x::DenseMatrix)        # compute `x\' * a * x`\n\nX_invA_Xt(a::M, x::DenseMatrix)     # compute `x * inv(a) * x\'`\n\nXt_invA_X(a::M, x::DenseMatrix)     # compute `x\' * inv(a) * x`"
},

{
    "location": "autodocs/#PDMats.AbstractPDMat",
    "page": "Docstrings",
    "title": "PDMats.AbstractPDMat",
    "category": "type",
    "text": "The base type for positive definite matrices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PDMats.PDMat",
    "page": "Docstrings",
    "title": "PDMats.PDMat",
    "category": "type",
    "text": "Full positive definite matrix together with a Cholesky factorization object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PDMats.PDSparseMat",
    "page": "Docstrings",
    "title": "PDMats.PDSparseMat",
    "category": "type",
    "text": "Sparse positive definite matrix together with a Cholesky factorization object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PDMats.PDiagMat",
    "page": "Docstrings",
    "title": "PDMats.PDiagMat",
    "category": "type",
    "text": "Positive definite diagonal matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PDMats.ScalMat",
    "page": "Docstrings",
    "title": "PDMats.ScalMat",
    "category": "type",
    "text": "Scaling matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PDMats.invquad!-Tuple{AbstractArray,PDMat,Union{DenseArray{T,2}, ReinterpretArray{T,2,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, ReshapedArray{T,2,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, SubArray{T,2,A,I,L} where L where I<:Tuple{Vararg{Union{Int64, AbstractRange{Int64}, AbstractCartesianIndex},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, DenseArray}} where T}",
    "page": "Docstrings",
    "title": "PDMats.invquad!",
    "category": "method",
    "text": "invquad!(r::AbstractArray, a::AbstractPDMat, x::StridedMatrix)\n\nOverwrite r with the value of the quadratic form defined by inv(a) applied columnwise to x\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PDMats.invquad-Union{Tuple{S}, Tuple{T}, Tuple{AbstractPDMat{T},Union{DenseArray{S,2}, ReinterpretArray{S,2,S1,A} where S1 where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, ReshapedArray{S,2,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, SubArray{S,2,A,I,L} where L where I<:Tuple{Vararg{Union{Int64, AbstractRange{Int64}, AbstractCartesianIndex},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, DenseArray}}}} where S<:Real where T<:Real",
    "page": "Docstrings",
    "title": "PDMats.invquad",
    "category": "method",
    "text": "invquad(a::AbstractPDMat, x::StridedVecOrMat)\n\nReturn the value of the quadratic form defined by inv(a) applied to x.\n\nFor most PDMat types this is done in a way that does not require evaluation of inv(a).\n\nIf x is a vector the quadratic form is x\' * a * x.  If x is a matrix the quadratic form is applied column-wise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PDMats.quad!-Tuple{AbstractArray,PDMat,Union{DenseArray{T,2}, ReinterpretArray{T,2,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, ReshapedArray{T,2,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, SubArray{T,2,A,I,L} where L where I<:Tuple{Vararg{Union{Int64, AbstractRange{Int64}, AbstractCartesianIndex},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, DenseArray}} where T}",
    "page": "Docstrings",
    "title": "PDMats.quad!",
    "category": "method",
    "text": "quad!(r::AbstractArray, a::AbstractPDMat, x::StridedMatrix)\n\nOverwrite r with the value of the quadratic form defined by a applied columnwise to x\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PDMats.quad-Union{Tuple{S}, Tuple{T}, Tuple{AbstractPDMat{T},Union{DenseArray{S,2}, ReinterpretArray{S,2,S1,A} where S1 where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, ReshapedArray{S,2,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, SubArray{S,2,A,I,L} where L where I<:Tuple{Vararg{Union{Int64, AbstractRange{Int64}, AbstractCartesianIndex},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, DenseArray}}}} where S<:Real where T<:Real",
    "page": "Docstrings",
    "title": "PDMats.quad",
    "category": "method",
    "text": "quad(a::AbstractPDMat, x::StridedVecOrMat)\n\nReturn the value of the quadratic form defined by a applied to x\n\nIf x is a vector the quadratic form is x\' * a * x.  If x is a matrix the quadratic form is applied column-wise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PDMats.whiten-Tuple{AbstractPDMat,Union{DenseArray{T,1}, DenseArray{T,2}, ReinterpretArray{T,1,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, ReinterpretArray{T,2,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, ReshapedArray{T,1,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, ReshapedArray{T,2,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, SubArray{T,1,A,I,L} where L where I<:Tuple{Vararg{Union{Int64, AbstractRange{Int64}, AbstractCartesianIndex},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, DenseArray}, SubArray{T,2,A,I,L} where L where I<:Tuple{Vararg{Union{Int64, AbstractRange{Int64}, AbstractCartesianIndex},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, DenseArray}} where T}",
    "page": "Docstrings",
    "title": "PDMats.whiten",
    "category": "method",
    "text": "whiten(a::AbstractPDMat, x::StridedVecOrMat)\nwhiten!(a::AbstractPDMat, x::StridedVecOrMat)\nwhiten!(r::StridedVecOrMat, a::AbstractPDMat, x::StridedVecOrMat)\nunwhiten(a::AbstractPDMat, x::StridedVecOrMat)\nunwhiten!(a::AbstractPDMat, x::StridedVecOrMat)\nunwhiten!(r::StridedVecOrMat, a::AbstractPDMat, x::StridedVecOrMat)\n\nAllocating and in-place versions of the whitening transform (or its inverse) defined by a applied to x\n\nIf the covariance of x is a then the covariance of the result will be I. The name whiten indicates that this function transforms a correlated multivariate random variable to \"white noise\".\n\njulia> using PDMats\n\njulia> X = vcat(ones(4)\', (1:4)\')\n2×4 Array{Float64,2}:\n 1.0  1.0  1.0  1.0\n 1.0  2.0  3.0  4.0\n\njulia> a = PDMat(X * X\')\nPDMat{Float64,Array{Float64,2}}(2, [4.0 10.0; 10.0 30.0], Cholesky{Float64,Array{Float64,2}}([2.0 5.0; 10.0 2.23607], \'U\', 0))\n\njulia> W = whiten(a, X)\n2×4 Array{Float64,2}:\n  0.5       0.5       0.5       0.5    \n -0.67082  -0.223607  0.223607  0.67082\n\njulia> W * W\'\n2×2 Array{Float64,2}:\n 1.0  0.0\n 0.0  1.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [PDMats]\nOrder = [:type, :function]"
},

]}
