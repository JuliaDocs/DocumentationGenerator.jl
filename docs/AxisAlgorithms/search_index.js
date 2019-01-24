var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AxisAlgorithms-1",
    "page": "Readme",
    "title": "AxisAlgorithms",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov)AxisAlgorithms is a collection of filtering and linear algebra algorithms for multidimensional arrays. For algorithms that would typically apply along the columns of a matrix, you can instead pick an arbitrary axis (dimension).Note that all functions come in two variants, a ! version that uses pre-allocated output (where the output is the first argument) and a version that allocates the output. Below, the ! versions will be described."
},

{
    "location": "#Tridiagonal-and-Woodbury-inversion-1",
    "page": "Readme",
    "title": "Tridiagonal and Woodbury inversion",
    "category": "section",
    "text": "If F is an LU-factorization of a tridiagonal matrix, or a Woodbury matrix created from such a factorization, then A_ldiv_B_md!(dest, F, src, axis) will solve the equation F\\b for 1-dimensional slices along dimension axis. Unlike many linear algebra algorithms, this one is safe to use as a mutating algorithm with dest=src. The tridiagonal case does not create temporaries, and it has excellent cache behavior."
},

{
    "location": "#Matrix-multiplication-1",
    "page": "Readme",
    "title": "Matrix multiplication",
    "category": "section",
    "text": "Multiply a matrix M to all 1-dimensional slices along a particular dimension. Here you have two algorithms to choose from:A_mul_B_perm!(dest, M, src, axis) uses permutedims and standard BLAS-accelerated routines; it allocates temporary storage.\nA_mul_B_md!(dest, M, src, axis) is a non-allocating naive routine. This also has optimized implementations for sparse M and 2x2 matrices.In general it is very difficult to get efficient cache behavior for multidimensional multiplication, and often using A_mul_B_perm! is the best strategy. However, there are cases where A_mul_B_md! is faster. It\'s a good idea to time both and see which works better for your case."
},

{
    "location": "autodocs/#AxisAlgorithms.A_ldiv_B_md!-Tuple{Any,Any,Any,Integer}",
    "page": "Docstrings",
    "title": "AxisAlgorithms.A_ldiv_B_md!",
    "category": "method",
    "text": "A_ldiv_B_md!(dest, F, src, dim) solves a tridiagonal system along dimension dim of src, storing the result in dest. Currently, F must be an LU-factorized tridiagonal matrix. If desired, you may safely use the same array for both src and dest, so that this becomes an in-place algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisAlgorithms.A_ldiv_B_md-Tuple{Any,Any,Integer}",
    "page": "Docstrings",
    "title": "AxisAlgorithms.A_ldiv_B_md",
    "category": "method",
    "text": "A_ldiv_B_md(F, src, dim) solves F for slices b of src along dimension dim, storing the result along the same dimension of the output. Currently, F must be an LU-factorized tridiagonal matrix or a Woodbury matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisAlgorithms.A_mul_B_md!-Tuple{Any,AbstractArray{T,2} where T,Any,Integer}",
    "page": "Docstrings",
    "title": "AxisAlgorithms.A_mul_B_md!",
    "category": "method",
    "text": "A_mul_B_md!(dest, M, src, dim) computes M*x for slices x of src along dimension dim, storing the result in dest. M must be an AbstractMatrix. This uses an in-place naive algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisAlgorithms.A_mul_B_md-Tuple{AbstractArray{T,2} where T,Any,Integer}",
    "page": "Docstrings",
    "title": "AxisAlgorithms.A_mul_B_md",
    "category": "method",
    "text": "A_mul_B_md(M, src, dim) computes M*x for slices x of src along dimension dim, storing the resulting vector along the same dimension of the output. M must be an AbstractMatrix. This uses an in-place naive algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisAlgorithms.A_mul_B_perm!-Tuple{Any,AbstractArray{T,2} where T,Any,Integer}",
    "page": "Docstrings",
    "title": "AxisAlgorithms.A_mul_B_perm!",
    "category": "method",
    "text": "A_mul_B_perm!(dest, M, src, dim) computes M*x for slices x of src along dimension dim, storing the result in dest. M must be an AbstractMatrix. This uses permutedims to make dimension dim into the first dimension, performs a standard matrix multiplication, and restores the original dimension ordering. In many cases, this algorithm exhibits the best cache behavior.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AxisAlgorithms.A_mul_B_perm-Tuple{AbstractArray{T,2} where T,Any,Integer}",
    "page": "Docstrings",
    "title": "AxisAlgorithms.A_mul_B_perm",
    "category": "method",
    "text": "A_mul_B_perm(M, src, dim) computes M*x for slices x of src along dimension dim, storing the resulting vector along the same dimension of the output. M must be an AbstractMatrix. This uses permutedims to make dimension dim into the first dimension, performs a standard matrix multiplication, and restores the original dimension ordering. In many cases, this algorithm exhibits the best cache behavior.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AxisAlgorithms]\nOrder = [:type, :function]"
},

]}
