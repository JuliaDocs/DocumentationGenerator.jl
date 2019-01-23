var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "DualMatrixTools.jl Documentation",
    "title": "DualMatrixTools.jl Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "#DualMatrixTools.jl-Documentation-1",
    "page": "DualMatrixTools.jl Documentation",
    "title": "DualMatrixTools.jl Documentation",
    "category": "section",
    "text": "This package provides an overloaded factorize and \\ that work with dual-valued arrays.It is essentially based on the dual type defined by the DualNumbers.jl package."
},

{
    "location": "#Motivation-1",
    "page": "DualMatrixTools.jl Documentation",
    "title": "Motivation",
    "category": "section",
    "text": "The idea is that for a dual-valued matrix M = A + varepsilon B, its inverse is given by M^-1 = (I - varepsilon_1 A^-1 B) A^-1. Therefore, only the inverse of A is required to evaluate the inverse of M. This package should be useful for evaluation of first derivatives of functions that use \\ (e.g., with iterative solvers)."
},

{
    "location": "#How-it-works-1",
    "page": "DualMatrixTools.jl Documentation",
    "title": "How it works",
    "category": "section",
    "text": "DualMatrixTools.jl makes available a DualFactors type which contains the factors of A (i.e., the output of factorize, e.g., L and U, or Q and R) and the non-real part of M (i.e., B). DualMatrixTools.jl overloads factorize so that for a dual-valued matrix M, factorize(M) creates an instance of DualFactors. Finally, DualMatrixTools.jl also overloads \\ to efficiently solve dual-valued linear systems of the type M x = y by using the default \\ with the factors of A only."
},

{
    "location": "#Usage-1",
    "page": "DualMatrixTools.jl Documentation",
    "title": "Usage",
    "category": "section",
    "text": "DocTestSetup = quote\n    using DualMatrixTools\nendCreate your hyperdual-valued matrix M:n = 4\nA, B = rand(n, n), randn(n, n)\nM = A + ε * B\ntypeof(M)\n\n# output\n\nArray{DualNumbers.Dual{Float64},2}Factorize M:Mf = factorize(M)\ntypeof(Mf)\n\n# output\n\nDualFactorsApply \\ to solve systems of the type M * x = yy = rand(n, 2) * [1.0, ε]\nx = Mf \\ y\nM * x ≈ y\n\n# output\n\ntrue"
},

{
    "location": "#LinearAlgebra.factorize",
    "page": "DualMatrixTools.jl Documentation",
    "title": "LinearAlgebra.factorize",
    "category": "function",
    "text": "factorize(M::Array{Dual128,2})\n\nEfficient factorization of dual-valued matrices. See DualFactors for details.\n\n\n\n\n\nfactorize(M::SparseMatrixCSC{Dual128,Int64})\n\nEfficient factorization of dual-valued sparse matrices. See DualFactors for details.\n\n\n\n\n\n"
},

{
    "location": "#Base.:\\",
    "page": "DualMatrixTools.jl Documentation",
    "title": "Base.:\\",
    "category": "function",
    "text": "\\(M::DualFactors, y::AbstractVecOrMat{Float64})\n\nBacksubstitution for DualFactors. See DualFactors for details.\n\n\n\n\n\n\\(M::DualFactors, y::AbstractVecOrMat{Dual128})\n\nBacksubstitution for DualFactors. See DualFactors for details.\n\n\n\n\n\n\\(Af::Factorization{Float64}, y::AbstractVecOrMat{Dual128})\n\nBacksubstitution for Dual-valued RHS.\n\n\n\n\n\n"
},

{
    "location": "#Functions-1",
    "page": "DualMatrixTools.jl Documentation",
    "title": "Functions",
    "category": "section",
    "text": "factorize\\"
},

{
    "location": "#DualMatrixTools.DualFactors",
    "page": "DualMatrixTools.jl Documentation",
    "title": "DualMatrixTools.DualFactors",
    "category": "type",
    "text": "DualFactors\n\nContainer type to work efficiently with backslash on dual-valued sparse matrices.\n\nfactorize(M) will create an instance containing\n\nAf = factorize(realpart.(M)) — the factors of the real part\nB = dualpart.(M) — the dual part\n\nfor a dual-valued matrix M.\n\nThis is because only the factors of the real part are needed when solving a linear system of the type M x = b for a dual-valued matrix M = A + varepsilon B. In fact, the inverse of M is given by M^-1 = (I - varepsilon A^-1 B) A^-1.\n\n\n\n\n\n"
},

{
    "location": "#New-types-1",
    "page": "DualMatrixTools.jl Documentation",
    "title": "New types",
    "category": "section",
    "text": "DualFactors"
},

]}
