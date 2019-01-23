var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "HyperDualMatrixTools.jl Documentation",
    "title": "HyperDualMatrixTools.jl Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "#HyperDualMatrixTools.jl-Documentation-1",
    "page": "HyperDualMatrixTools.jl Documentation",
    "title": "HyperDualMatrixTools.jl Documentation",
    "category": "section",
    "text": "This package provides an overloaded factorize and \\ that work with hyperdual-valued arrays.It is essentially base on the hyper dual type defined by the HyperDualNumbers.jl package."
},

{
    "location": "#Motivation-1",
    "page": "HyperDualMatrixTools.jl Documentation",
    "title": "Motivation",
    "category": "section",
    "text": "The idea is that for a hyperdual-valued matrix M = A + varepsilon_1 B + varepsilon_2 C + varepsilon_1 varepsilon_2 D, its inverse is given by M^-1 = (I - varepsilon_1 A^-1 B - varepsilon_2 A^-1 C - varepsilon_1varepsilon_2 A^-1 (D - B A^-1 C - C A^-1 B)) A^-1. Therefore, only the inverse of A is required to evaluate the inverse of M. This package should be useful for evaluation of second derivatives of functions that use \\ (e.g., with iterative solvers)."
},

{
    "location": "#How-it-works-1",
    "page": "HyperDualMatrixTools.jl Documentation",
    "title": "How it works",
    "category": "section",
    "text": "HyperDualMatrixTools.jl makes available a HyperDualFactors type which contains the factors of A (i.e., the output of factorize, e.g., L and U, or Q and R) and the non-real parts of M (i.e., B, C, and D). HyperDualMatrixTools.jl overloads factorize so that for a hyperdual-valued matrix M, factorize(M) creates an instance of HyperDualFactors. Finally, HyperDualMatrixTools.jl also overloads \\ to efficiently solve hyperdual-valued linear systems of the type M x = y by using the default \\ with the factors of A only."
},

{
    "location": "#Usage-1",
    "page": "HyperDualMatrixTools.jl Documentation",
    "title": "Usage",
    "category": "section",
    "text": "DocTestSetup = quote\n    using HyperDualMatrixTools\nendCreate your hyperdual-valued matrix M:n = 4\nA, B, C, D = rand(n, n), randn(n, n), rand(n, n), randn(n, n)\nM = A + ε₁ * B + ε₂ * C + ε₁ε₂ * D\ntypeof(M)\n\n# output\n\nArray{HyperDualNumbers.Hyper{Float64},2}(The ε₁, ε₂, and ε₁ε₂ constants are provided by HyperDualMatrixTools.jl for convenience.)Factorize M:Mf = factorize(M)\ntypeof(Mf)\n\n# output\n\nHyperDualFactorsApply \\ to solve systems of the type M * x = yy = rand(n, 4) * [1.0, ε₁, ε₂, ε₁ε₂]\nx = Mf \\ y\nM * x ≈ y\n\n# output\n\ntrue"
},

{
    "location": "#LinearAlgebra.factorize",
    "page": "HyperDualMatrixTools.jl Documentation",
    "title": "LinearAlgebra.factorize",
    "category": "function",
    "text": "factorize(M::Array{Hyper256,2})\n\nEfficient factorization of hyperdual-valued matrices. See HyperDualFactors for details.\n\n\n\n\n\nfactorize(M::SparseMatrixCSC{Hyper256,Int64})\n\nEfficient factorization of hyperdual-valued sparse matrices. See HyperDualFactors for details.\n\n\n\n\n\n"
},

{
    "location": "#Base.:\\",
    "page": "HyperDualMatrixTools.jl Documentation",
    "title": "Base.:\\",
    "category": "function",
    "text": "\\(M::HyperDualFactors, y::AbstractVecOrMat{Float64})\n\nBacksubstitution for HyperDualFactors. See HyperDualFactors for details.\n\n\n\n\n\n\\(M::HyperDualFactors, y::AbstractVecOrMat{Hyper256})\n\nBacksubstitution for HyperDualFactors. See HyperDualFactors for details.\n\n\n\n\n\n\\(Af::Factorization{Float64}, y::AbstractVecOrMat{Hyper256})\n\nBacksubstitution for HyperDual-valued RHS.\n\n\n\n\n\n"
},

{
    "location": "#Functions-1",
    "page": "HyperDualMatrixTools.jl Documentation",
    "title": "Functions",
    "category": "section",
    "text": "factorize\\"
},

{
    "location": "#HyperDualMatrixTools.HyperDualFactors",
    "page": "HyperDualMatrixTools.jl Documentation",
    "title": "HyperDualMatrixTools.HyperDualFactors",
    "category": "type",
    "text": "HyperDualFactors\n\nContainer type to work efficiently with backslash on hyperdual-valued sparse matrices.\n\nfactorize(M) will create an instance containing\n\nAf = factorize(realpart.(M)) — the factors of the real part\nB = ε₁part.(M) — the varepsilon_1 part\nC = ε₂part.(M) — the varepsilon_2 part\nD = ε₁ε₂part.(M) — the varepsilon_1varepsilon_2 part\n\nfor a hyperdual-valued matrix M.\n\nThis is because only the factors of the real part are needed when solving a linear system of the type M x = b for a hyperdual-valued matrix M = A + varepsilon_1 B + varepsilon_2 C + varepsilon_1 varepsilon_2 D. In fact, the inverse of M is given by M^-1 = (I - varepsilon_1 A^-1 B - varepsilon_2 A^-1 C - varepsilon_1varepsilon_2 A^-1 (D - B A^-1 C - C A^-1 B)) A^-1.\n\n\n\n\n\n"
},

{
    "location": "#New-types-1",
    "page": "HyperDualMatrixTools.jl Documentation",
    "title": "New types",
    "category": "section",
    "text": "HyperDualFactors"
},

]}
