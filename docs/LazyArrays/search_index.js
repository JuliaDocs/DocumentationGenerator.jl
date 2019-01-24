var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LazyArrays.jl-1",
    "page": "Readme",
    "title": "LazyArrays.jl",
    "category": "section",
    "text": "(Image: Travis) (Image: codecov)Lazy arrays and linear algebra in JuliaThis package supports lazy analogues of array operations like vcat, hcat, and multiplication. This helps with the implementation of matrix-free methods for iterative solvers.The package has been designed with high-performance in mind, so should outperform the non-lazy analogues from Base for many operations like copyto! and broadcasting. Some operations will be inherently slower due to extra computation, like getindex. Please file an issue for any examples that are significantly slower than their the analogue in Base."
},

{
    "location": "#Concatenation-1",
    "page": "Readme",
    "title": "Concatenation",
    "category": "section",
    "text": "Vcat is the lazy analogue of vcat. For lazy vectors like ranges, it creating such a vector is allocation-free. copyto! allows for allocation-free population of a vector.julia> using LazyArrays, BenchmarkTools\n\njulia> A = Vcat(1:5,2:3) # allocation-free\n7-element Vcat{Int64,1,Tuple{UnitRange{Int64},UnitRange{Int64}}}:\n 1\n 2\n 3\n 4\n 5\n 2\n 3\n\njulia> Vector(A) == vcat(1:5, 2:3)\ntrue\n\njulia> b = Array{Int}(undef, length(A)); @btime copyto!(b, A);\n  26.670 ns (0 allocations: 0 bytes)\n\njulia> @btime vcat(1:5, 2:3); # takes twice as long due to memory creation\n  43.336 ns (1 allocation: 144 bytes)Similarly, Hcat is the lazy analogue of hcat.julia> A = Hcat(1:3, randn(3,10))\n3×11 Hcat{Float64,Tuple{UnitRange{Int64},Array{Float64,2}}}:\n 1.0   0.350927   0.339103  -1.03526   …   0.786593    0.0416694\n 2.0  -1.10206    1.52817    0.223099      0.851804    0.430933\n 3.0  -1.26467   -0.743712  -0.828781     -0.0637502  -0.066743\n\njulia> Matrix(A) == hcat(A.arrays...)\ntrue\n\njulia> b = Array{Int}(undef, length(A)); @btime copyto!(b, A);\n  26.670 ns (0 allocations: 0 bytes)\n\njulia> B = Array{Float64}(undef, size(A)...); @btime copyto!(B, A);\n  109.625 ns (1 allocation: 32 bytes)\n\njulia> @btime hcat(A.arrays...); # takes twice as long due to memory creation\n  274.620 ns (6 allocations: 560 bytes)"
},

{
    "location": "#Broadcasting-1",
    "page": "Readme",
    "title": "Broadcasting",
    "category": "section",
    "text": "Base now includes a lazy broadcast object called Broadcasting, but this is not a subtype of AbstractArray. Here we have BroadcastArray which replicates the functionality of Broadcasting while supporting the array interface.julia> A = randn(6,6);\n\njulia> B = BroadcastArray(exp, A);\n\njulia> Matrix(B) == exp.(A)\ntrue\n\njulia> B = BroadcastArray(+, A, 2);\n\njulia> B == A .+ 2\ntrue"
},

{
    "location": "#Multiplication-1",
    "page": "Readme",
    "title": "Multiplication",
    "category": "section",
    "text": "Following Base\'s lazy broadcasting, we introduce lazy multiplication. The type Mul support multiplication of any two objects, not necessarily arrays. (In the future there will be a MulArray a la BroadcastArray.)Mul is designed to work along with broadcasting, and to lower to BLAS calls whenever possible:julia> A = randn(5,5); b = randn(5); c = randn(5); d = similar(c);\n\njulia> d .= 2.0 .* Mul(A,b) .+ 3.0 .* c # Calls gemv!\n5-element Array{Float64,1}:\n -2.5366335879717514\n -5.305097174484744  \n -9.818431932350942  \n  2.421562605495651  \n  0.26792916096572983\n\njulia> 2*(A*b) + 3c\n5-element Array{Float64,1}:\n -2.5366335879717514\n -5.305097174484744  \n -9.818431932350942  \n  2.421562605495651  \n  0.26792916096572983\n\njulia> function mymul(A, b, c, d) # need to put in function for benchmarking\n       d .= 2.0 .* Mul(A,b) .+ 3.0 .* c\n       end\nmymul (generic function with 1 method)\n\njulia> @btime mymul(A, b, c, d) # calls gemv!\n  77.444 ns (0 allocations: 0 bytes)\n5-element Array{Float64,1}:\n -2.5366335879717514\n -5.305097174484744  \n -9.818431932350942  \n  2.421562605495651  \n  0.26792916096572983\n\njulia> @btime 2*(A*b) + 3c; # does not call gemv!\n  241.659 ns (4 allocations: 512 bytes)"
},

{
    "location": "#Inverses-1",
    "page": "Readme",
    "title": "Inverses",
    "category": "section",
    "text": "We also have lazy inverses PInv(A), designed to work alongside Mul to  to lower to BLAS calls whenever possible:julia> A = randn(5,5); b = randn(5); c = similar(b);\n\njulia> c .= Mul(PInv(A), b)\n5-element Array{Float64,1}:\n -2.5366335879717514\n -5.305097174484744  \n -9.818431932350942  \n  2.421562605495651  \n  0.26792916096572983\n\njulia> c .= Ldiv(A, b) # shorthand for above\n5-element Array{Float64,1}:\n -2.5366335879717514\n -5.305097174484744  \n -9.818431932350942  \n  2.421562605495651  \n  0.26792916096572983"
},

{
    "location": "#Kronecker-products-1",
    "page": "Readme",
    "title": "Kronecker products",
    "category": "section",
    "text": "We can represent Kronecker products of arrays without constructing the full array.julia> A = randn(2,2); B = randn(3,3);\n\njulia> K = Kron(A,B)\n6×6 Kron{Float64,2,Tuple{Array{Float64,2},Array{Float64,2}}}:\n  1.99255  -1.45132    0.864789  -0.785538   0.572163  -0.340932\n -2.7016    0.360785  -1.78671    1.06507   -0.142235   0.70439\n  1.89938  -2.69996    0.200992  -0.748806   1.06443   -0.0792386\n -1.84225   1.34184   -0.799557  -2.45355    1.7871    -1.06487\n  2.49782  -0.333571   1.65194    3.32665   -0.444258   2.20009\n -1.75611   2.4963    -0.185831  -2.33883    3.32464   -0.247494\n\njulia> C = Matrix{Float64}(undef, 6, 6); @btime copyto!(C, K);\n  61.528 ns (0 allocations: 0 bytes)\n\njulia> C == kron(A,B)\ntrue"
},

{
    "location": "autodocs/#LazyArrays.Mul-Tuple",
    "page": "Docstrings",
    "title": "LazyArrays.Mul",
    "category": "method",
    "text": "Mul(A1, A2, …, AN)\n\nrepresents lazy multiplication A1A2…*AN. The factors must have compatible axes. If any argument is itself a Mul, it automatically gets flatten. That is, we assume associativity. Use Mul((A, B, C)) to stop flattening\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.cache-Tuple{AbstractArray}",
    "page": "Docstrings",
    "title": "LazyArrays.cache",
    "category": "method",
    "text": "cache(array::AbstractArray)\n\nCaches the entries of an array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.AbstractStridedLayout",
    "page": "Docstrings",
    "title": "LazyArrays.AbstractStridedLayout",
    "category": "type",
    "text": "AbstractStridedLayout\n\nis an abstract type whose subtypes are returned by MemoryLayout(A) if an array A has storage laid out at regular offsets in memory, and which can therefore be passed to external C and Fortran functions expecting this memory layout.\n\nJulia\'s internal linear algebra machinery will automatically (and invisibly) dispatch to BLAS and LAPACK routines if the memory layout is BLAS compatible and the element type is a Float32, Float64, ComplexF32, or ComplexF64. In this case, one must implement the strided array interface, which requires overrides of strides(A::MyMatrix) and unknown_convert(::Type{Ptr{T}}, A::MyMatrix).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.Add-Tuple",
    "page": "Docstrings",
    "title": "LazyArrays.Add",
    "category": "method",
    "text": "Add(A1, A2, …, AN)\n\nA lazy representation of A1 .+ A2 .+ … .+ AN; i.e., a shorthand for BroadcastArray(+, A1, A2, …, AN).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.BroadcastLayout",
    "page": "Docstrings",
    "title": "LazyArrays.BroadcastLayout",
    "category": "type",
    "text": "BroadcastLayout(f, layouts)\n\nis returned by MemoryLayout(A) if a matrix A is a BroadcastArray. f is a function that broadcast operation is applied and layouts is a tuple of MemoryLayout of the broadcasted arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.ColumnMajor",
    "page": "Docstrings",
    "title": "LazyArrays.ColumnMajor",
    "category": "type",
    "text": "ColumnMajor()\n\nis returned by MemoryLayout(A) if an array A has storage in memory as a column major array, so that stride(A,1) == 1 and stride(A,i) ≥ size(A,i-1) * stride(A,i-1) for 2 ≤ i ≤ ndims(A).\n\nArrays with ColumnMajor memory layout must conform to the DenseArray interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.DecreasingStrides",
    "page": "Docstrings",
    "title": "LazyArrays.DecreasingStrides",
    "category": "type",
    "text": "DecreasingStrides()\n\nis returned by MemoryLayout(A) if an array A has storage in memory as a strided array with decreasing strides, so that stride(A,ndims(A)) ≥ 1 and stride(A,i) ≥ size(A,i+1) * stride(A,i+1)for1 ≤ i ≤ ndims(A)-1`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.DenseColumnMajor",
    "page": "Docstrings",
    "title": "LazyArrays.DenseColumnMajor",
    "category": "type",
    "text": "DenseColumnMajor()\n\nis returned by MemoryLayout(A) if an array A has storage in memory equivalent to an Array, so that stride(A,1) == 1 and stride(A,i) ≡ size(A,i-1) * stride(A,i-1) for 2 ≤ i ≤ ndims(A). In particular, if A is a matrix then strides(A) ==(1, size(A,1))`.\n\nArrays with DenseColumnMajor memory layout must conform to the DenseArray interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.DenseRowMajor",
    "page": "Docstrings",
    "title": "LazyArrays.DenseRowMajor",
    "category": "type",
    "text": "DenseRowMajor()\n\nis returned by MemoryLayout(A) if an array A has storage in memory as a row major array with dense entries, so that stride(A,ndims(A)) == 1 and stride(A,i) ≡ size(A,i+1) * stride(A,i+1) for 1 ≤ i ≤ ndims(A)-1. In particular, if A is a matrix then strides(A) ==(size(A,2), 1)`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.HermitianLayout",
    "page": "Docstrings",
    "title": "LazyArrays.HermitianLayout",
    "category": "type",
    "text": "HermitianLayout(layout, uplo)\n\nis returned by MemoryLayout(A) if a matrix A has storage in memory as a hermitianized version of layout, where the entries used are dictated by the uplo, which can be \'U\' or L\'.\n\nA matrix that has memory layout HermitianLayout(layout, uplo) must overrided hermitiandata(A) to return a matrix B such that MemoryLayout(B) == layout and A[k,j] == B[k,j] for j ≥ k if uplo == \'U\' (j ≤ k if uplo == \'L\') and A[k,j] == conj(B[j,k]) for j < k if uplo == \'U\' (j > k if uplo == \'L\').\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.IncreasingStrides",
    "page": "Docstrings",
    "title": "LazyArrays.IncreasingStrides",
    "category": "type",
    "text": "IncreasingStrides()\n\nis returned by MemoryLayout(A) if an array A has storage in memory as a strided array with  increasing strides, so that stride(A,1) ≥ 1 and stride(A,i) ≥ size(A,i-1) * stride(A,i-1) for 2 ≤ i ≤ ndims(A).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.LowerTriangularLayout",
    "page": "Docstrings",
    "title": "LazyArrays.LowerTriangularLayout",
    "category": "type",
    "text": "LowerTriangularLayout(layout)\n\nis returned by MemoryLayout(A) if a matrix A has storage in memory equivalent to a LowerTriangular(B) where B satisfies MemoryLayout(B) == layout.\n\nA matrix that has memory layout LowerTriangularLayout(layout) must overrided triangulardata(A) to return a matrix B such that MemoryLayout(B) == layout and A[k,j] ≡ zero(eltype(A)) for j > k and A[k,j] ≡ B[k,j] for j ≤ k.\n\nMoreover, transpose(A) and adjoint(A) must return a matrix that has memory layout UpperTriangularLayout.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.MemoryLayout-Tuple{Any}",
    "page": "Docstrings",
    "title": "LazyArrays.MemoryLayout",
    "category": "method",
    "text": "MemoryLayout(A)\n\nspecifies the layout in memory for an array A. When you define a new AbstractArray type, you can choose to override MemoryLayout to indicate how an array is stored in memory. For example, if your matrix is column major with stride(A,2) == size(A,1), then override as follows:\n\nMemoryLayout(::MyMatrix) = DenseColumnMajor()\n\nThe default is UnknownLayout() to indicate that the layout in memory is unknown.\n\nJulia\'s internal linear algebra machinery will automatically (and invisibly) dispatch to BLAS and LAPACK routines if the memory layout is compatible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.RowMajor",
    "page": "Docstrings",
    "title": "LazyArrays.RowMajor",
    "category": "type",
    "text": "RowMajor()\n\nis returned by MemoryLayout(A) if an array A has storage in memory as a row major array, so that stride(A,ndims(A)) == 1 and stride(A,i) ≥ size(A,i+1) * stride(A,i+1)for1 ≤ i ≤ ndims(A)-1`.\n\nIf A is a matrix  with RowMajor memory layout, then transpose(A) should return a matrix whose layout is ColumnMajor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.ScalarLayout",
    "page": "Docstrings",
    "title": "LazyArrays.ScalarLayout",
    "category": "type",
    "text": "ScalarLayout()\n\nis returned by MemoryLayout(A) if A is a scalar, which does not live in memory\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.StridedLayout",
    "page": "Docstrings",
    "title": "LazyArrays.StridedLayout",
    "category": "type",
    "text": "StridedLayout()\n\nis returned by MemoryLayout(A) if an array A has storage laid out at regular offsets in memory. Arrays with StridedLayout must conform to the DenseArray interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.SymmetricLayout",
    "page": "Docstrings",
    "title": "LazyArrays.SymmetricLayout",
    "category": "type",
    "text": "SymmetricLayout(layout, uplo)\n\nis returned by MemoryLayout(A) if a matrix A has storage in memory as a symmetrized version of layout, where the entries used are dictated by the uplo, which can be \'U\' or L\'.\n\nA matrix that has memory layout SymmetricLayout(layout, uplo) must overrided symmetricdata(A) to return a matrix B such that MemoryLayout(B) == layout and A[k,j] == B[k,j] for j ≥ k if uplo == \'U\' (j ≤ k if uplo == \'L\') and A[k,j] == B[j,k] for j < k if uplo == \'U\' (j > k if uplo == \'L\').\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.UnitLowerTriangularLayout",
    "page": "Docstrings",
    "title": "LazyArrays.UnitLowerTriangularLayout",
    "category": "type",
    "text": "UnitLowerTriangularLayout(ML::MemoryLayout)\n\nis returned by MemoryLayout(A) if a matrix A has storage in memory equivalent to a UnitLowerTriangular(B) where B satisfies MemoryLayout(B) == layout.\n\nA matrix that has memory layout UnitLowerTriangularLayout(layout) must overrided triangulardata(A) to return a matrix B such that MemoryLayout(B) == layout and A[k,j] ≡ zero(eltype(A)) for j > k, A[k,j] ≡ one(eltype(A)) for j == k, A[k,j] ≡ B[k,j] for j < k.\n\nMoreover, transpose(A) and adjoint(A) must return a matrix that has memory layout UnitUpperTriangularLayout.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.UnitUpperTriangularLayout",
    "page": "Docstrings",
    "title": "LazyArrays.UnitUpperTriangularLayout",
    "category": "type",
    "text": "UnitUpperTriangularLayout(ML::MemoryLayout)\n\nis returned by MemoryLayout(A) if a matrix A has storage in memory equivalent to a UpperTriangularLayout(B) where B satisfies MemoryLayout(B) == ML.\n\nA matrix that has memory layout UnitUpperTriangularLayout(layout) must overrided triangulardata(A) to return a matrix B such that MemoryLayout(B) == layout and A[k,j] ≡ B[k,j] for j > k, A[k,j] ≡ one(eltype(A)) for j == k, A[k,j] ≡ zero(eltype(A)) for j < k.\n\nMoreover, transpose(A) and adjoint(A) must return a matrix that has memory layout UnitLowerTriangularLayout.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.UnknownLayout",
    "page": "Docstrings",
    "title": "LazyArrays.UnknownLayout",
    "category": "type",
    "text": "UnknownLayout()\n\nis returned by MemoryLayout(A) if it is unknown how the entries of an array A are stored in memory.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.UpperTriangularLayout",
    "page": "Docstrings",
    "title": "LazyArrays.UpperTriangularLayout",
    "category": "type",
    "text": "UpperTriangularLayout(ML::MemoryLayout)\n\nis returned by MemoryLayout(A) if a matrix A has storage in memory equivalent to a UpperTriangularLayout(B) where B satisfies MemoryLayout(B) == ML.\n\nA matrix that has memory layout UpperTriangularLayout(layout) must overrided triangulardata(A) to return a matrix B such that MemoryLayout(B) == layout and A[k,j] ≡ B[k,j] for j ≥ k and A[k,j] ≡ zero(eltype(A)) for j < k.\n\nMoreover, transpose(A) and adjoint(A) must return a matrix that has memory layout LowerTriangularLayout.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.colsupport-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "LazyArrays.colsupport",
    "category": "method",
    "text": "\"     colsupport(A, j)\n\ngives an iterator containing the possible non-zero entries in the j-th column of A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LazyArrays.rowsupport-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "LazyArrays.rowsupport",
    "category": "method",
    "text": "\"     rowsupport(A, k)\n\ngives an iterator containing the possible non-zero entries in the k-th row of A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LazyArrays]\nOrder = [:type, :function]"
},

]}
