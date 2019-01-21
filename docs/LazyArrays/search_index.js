var documenterSearchIndex = {"docs": [

{
    "location": "#LazyArrays.Mul-Tuple",
    "page": "Home",
    "title": "LazyArrays.Mul",
    "category": "method",
    "text": "Mul(A1, A2, …, AN)\n\nrepresents lazy multiplication A1A2…*AN. The factors must have compatible axes. If any argument is itself a Mul, it automatically gets flatten. That is, we assume associativity. Use Mul((A, B, C)) to stop flattening\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.cache-Tuple{AbstractArray}",
    "page": "Home",
    "title": "LazyArrays.cache",
    "category": "method",
    "text": "cache(array::AbstractArray)\n\nCaches the entries of an array.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.AbstractStridedLayout",
    "page": "Home",
    "title": "LazyArrays.AbstractStridedLayout",
    "category": "type",
    "text": "AbstractStridedLayout\n\nis an abstract type whose subtypes are returned by MemoryLayout(A) if an array A has storage laid out at regular offsets in memory, and which can therefore be passed to external C and Fortran functions expecting this memory layout.\n\nJulia\'s internal linear algebra machinery will automatically (and invisibly) dispatch to BLAS and LAPACK routines if the memory layout is BLAS compatible and the element type is a Float32, Float64, ComplexF32, or ComplexF64. In this case, one must implement the strided array interface, which requires overrides of strides(A::MyMatrix) and unknown_convert(::Type{Ptr{T}}, A::MyMatrix).\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.Add-Tuple",
    "page": "Home",
    "title": "LazyArrays.Add",
    "category": "method",
    "text": "Add(A1, A2, …, AN)\n\nA lazy representation of A1 .+ A2 .+ … .+ AN; i.e., a shorthand for BroadcastArray(+, A1, A2, …, AN).\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.BroadcastLayout",
    "page": "Home",
    "title": "LazyArrays.BroadcastLayout",
    "category": "type",
    "text": "BroadcastLayout(f, layouts)\n\nis returned by MemoryLayout(A) if a matrix A is a BroadcastArray. f is a function that broadcast operation is applied and layouts is a tuple of MemoryLayout of the broadcasted arguments.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.ColumnMajor",
    "page": "Home",
    "title": "LazyArrays.ColumnMajor",
    "category": "type",
    "text": "ColumnMajor()\n\nis returned by MemoryLayout(A) if an array A has storage in memory as a column major array, so that stride(A,1) == 1 and stride(A,i) ≥ size(A,i-1) * stride(A,i-1) for 2 ≤ i ≤ ndims(A).\n\nArrays with ColumnMajor memory layout must conform to the DenseArray interface.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.DecreasingStrides",
    "page": "Home",
    "title": "LazyArrays.DecreasingStrides",
    "category": "type",
    "text": "DecreasingStrides()\n\nis returned by MemoryLayout(A) if an array A has storage in memory as a strided array with decreasing strides, so that stride(A,ndims(A)) ≥ 1 and stride(A,i) ≥ size(A,i+1) * stride(A,i+1)for1 ≤ i ≤ ndims(A)-1`.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.DenseColumnMajor",
    "page": "Home",
    "title": "LazyArrays.DenseColumnMajor",
    "category": "type",
    "text": "DenseColumnMajor()\n\nis returned by MemoryLayout(A) if an array A has storage in memory equivalent to an Array, so that stride(A,1) == 1 and stride(A,i) ≡ size(A,i-1) * stride(A,i-1) for 2 ≤ i ≤ ndims(A). In particular, if A is a matrix then strides(A) ==(1, size(A,1))`.\n\nArrays with DenseColumnMajor memory layout must conform to the DenseArray interface.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.DenseRowMajor",
    "page": "Home",
    "title": "LazyArrays.DenseRowMajor",
    "category": "type",
    "text": "DenseRowMajor()\n\nis returned by MemoryLayout(A) if an array A has storage in memory as a row major array with dense entries, so that stride(A,ndims(A)) == 1 and stride(A,i) ≡ size(A,i+1) * stride(A,i+1) for 1 ≤ i ≤ ndims(A)-1. In particular, if A is a matrix then strides(A) ==(size(A,2), 1)`.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.HermitianLayout",
    "page": "Home",
    "title": "LazyArrays.HermitianLayout",
    "category": "type",
    "text": "HermitianLayout(layout, uplo)\n\nis returned by MemoryLayout(A) if a matrix A has storage in memory as a hermitianized version of layout, where the entries used are dictated by the uplo, which can be \'U\' or L\'.\n\nA matrix that has memory layout HermitianLayout(layout, uplo) must overrided hermitiandata(A) to return a matrix B such that MemoryLayout(B) == layout and A[k,j] == B[k,j] for j ≥ k if uplo == \'U\' (j ≤ k if uplo == \'L\') and A[k,j] == conj(B[j,k]) for j < k if uplo == \'U\' (j > k if uplo == \'L\').\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.IncreasingStrides",
    "page": "Home",
    "title": "LazyArrays.IncreasingStrides",
    "category": "type",
    "text": "IncreasingStrides()\n\nis returned by MemoryLayout(A) if an array A has storage in memory as a strided array with  increasing strides, so that stride(A,1) ≥ 1 and stride(A,i) ≥ size(A,i-1) * stride(A,i-1) for 2 ≤ i ≤ ndims(A).\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.LowerTriangularLayout",
    "page": "Home",
    "title": "LazyArrays.LowerTriangularLayout",
    "category": "type",
    "text": "LowerTriangularLayout(layout)\n\nis returned by MemoryLayout(A) if a matrix A has storage in memory equivalent to a LowerTriangular(B) where B satisfies MemoryLayout(B) == layout.\n\nA matrix that has memory layout LowerTriangularLayout(layout) must overrided triangulardata(A) to return a matrix B such that MemoryLayout(B) == layout and A[k,j] ≡ zero(eltype(A)) for j > k and A[k,j] ≡ B[k,j] for j ≤ k.\n\nMoreover, transpose(A) and adjoint(A) must return a matrix that has memory layout UpperTriangularLayout.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.MemoryLayout-Tuple{Any}",
    "page": "Home",
    "title": "LazyArrays.MemoryLayout",
    "category": "method",
    "text": "MemoryLayout(A)\n\nspecifies the layout in memory for an array A. When you define a new AbstractArray type, you can choose to override MemoryLayout to indicate how an array is stored in memory. For example, if your matrix is column major with stride(A,2) == size(A,1), then override as follows:\n\nMemoryLayout(::MyMatrix) = DenseColumnMajor()\n\nThe default is UnknownLayout() to indicate that the layout in memory is unknown.\n\nJulia\'s internal linear algebra machinery will automatically (and invisibly) dispatch to BLAS and LAPACK routines if the memory layout is compatible.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.RowMajor",
    "page": "Home",
    "title": "LazyArrays.RowMajor",
    "category": "type",
    "text": "RowMajor()\n\nis returned by MemoryLayout(A) if an array A has storage in memory as a row major array, so that stride(A,ndims(A)) == 1 and stride(A,i) ≥ size(A,i+1) * stride(A,i+1)for1 ≤ i ≤ ndims(A)-1`.\n\nIf A is a matrix  with RowMajor memory layout, then transpose(A) should return a matrix whose layout is ColumnMajor.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.ScalarLayout",
    "page": "Home",
    "title": "LazyArrays.ScalarLayout",
    "category": "type",
    "text": "ScalarLayout()\n\nis returned by MemoryLayout(A) if A is a scalar, which does not live in memory\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.StridedLayout",
    "page": "Home",
    "title": "LazyArrays.StridedLayout",
    "category": "type",
    "text": "StridedLayout()\n\nis returned by MemoryLayout(A) if an array A has storage laid out at regular offsets in memory. Arrays with StridedLayout must conform to the DenseArray interface.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.SymmetricLayout",
    "page": "Home",
    "title": "LazyArrays.SymmetricLayout",
    "category": "type",
    "text": "SymmetricLayout(layout, uplo)\n\nis returned by MemoryLayout(A) if a matrix A has storage in memory as a symmetrized version of layout, where the entries used are dictated by the uplo, which can be \'U\' or L\'.\n\nA matrix that has memory layout SymmetricLayout(layout, uplo) must overrided symmetricdata(A) to return a matrix B such that MemoryLayout(B) == layout and A[k,j] == B[k,j] for j ≥ k if uplo == \'U\' (j ≤ k if uplo == \'L\') and A[k,j] == B[j,k] for j < k if uplo == \'U\' (j > k if uplo == \'L\').\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.UnitLowerTriangularLayout",
    "page": "Home",
    "title": "LazyArrays.UnitLowerTriangularLayout",
    "category": "type",
    "text": "UnitLowerTriangularLayout(ML::MemoryLayout)\n\nis returned by MemoryLayout(A) if a matrix A has storage in memory equivalent to a UnitLowerTriangular(B) where B satisfies MemoryLayout(B) == layout.\n\nA matrix that has memory layout UnitLowerTriangularLayout(layout) must overrided triangulardata(A) to return a matrix B such that MemoryLayout(B) == layout and A[k,j] ≡ zero(eltype(A)) for j > k, A[k,j] ≡ one(eltype(A)) for j == k, A[k,j] ≡ B[k,j] for j < k.\n\nMoreover, transpose(A) and adjoint(A) must return a matrix that has memory layout UnitUpperTriangularLayout.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.UnitUpperTriangularLayout",
    "page": "Home",
    "title": "LazyArrays.UnitUpperTriangularLayout",
    "category": "type",
    "text": "UnitUpperTriangularLayout(ML::MemoryLayout)\n\nis returned by MemoryLayout(A) if a matrix A has storage in memory equivalent to a UpperTriangularLayout(B) where B satisfies MemoryLayout(B) == ML.\n\nA matrix that has memory layout UnitUpperTriangularLayout(layout) must overrided triangulardata(A) to return a matrix B such that MemoryLayout(B) == layout and A[k,j] ≡ B[k,j] for j > k, A[k,j] ≡ one(eltype(A)) for j == k, A[k,j] ≡ zero(eltype(A)) for j < k.\n\nMoreover, transpose(A) and adjoint(A) must return a matrix that has memory layout UnitLowerTriangularLayout.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.UnknownLayout",
    "page": "Home",
    "title": "LazyArrays.UnknownLayout",
    "category": "type",
    "text": "UnknownLayout()\n\nis returned by MemoryLayout(A) if it is unknown how the entries of an array A are stored in memory.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.UpperTriangularLayout",
    "page": "Home",
    "title": "LazyArrays.UpperTriangularLayout",
    "category": "type",
    "text": "UpperTriangularLayout(ML::MemoryLayout)\n\nis returned by MemoryLayout(A) if a matrix A has storage in memory equivalent to a UpperTriangularLayout(B) where B satisfies MemoryLayout(B) == ML.\n\nA matrix that has memory layout UpperTriangularLayout(layout) must overrided triangulardata(A) to return a matrix B such that MemoryLayout(B) == layout and A[k,j] ≡ B[k,j] for j ≥ k and A[k,j] ≡ zero(eltype(A)) for j < k.\n\nMoreover, transpose(A) and adjoint(A) must return a matrix that has memory layout LowerTriangularLayout.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.colsupport-Tuple{Any,Any}",
    "page": "Home",
    "title": "LazyArrays.colsupport",
    "category": "method",
    "text": "\"     colsupport(A, j)\n\ngives an iterator containing the possible non-zero entries in the j-th column of A.\n\n\n\n\n\n"
},

{
    "location": "#LazyArrays.rowsupport-Tuple{Any,Any}",
    "page": "Home",
    "title": "LazyArrays.rowsupport",
    "category": "method",
    "text": "\"     rowsupport(A, k)\n\ngives an iterator containing the possible non-zero entries in the k-th row of A.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LazyArrays]\nOrder = [:type, :function]"
},

]}
