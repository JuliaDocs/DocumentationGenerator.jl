var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BasisMatrices-1",
    "page": "Readme",
    "title": "BasisMatrices",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io) (Image: Coverage Status)Portions of this library are inspired by the CompEcon Matlab toolbox by Paul Fackler and Mario Miranda. The original Matlab code was written to accompany the publicationMiranda, Mario J., and Paul L. Fackler. Applied computational economics and finance. MIT press, 2004.The portions of this package that are based on their code have been licensed with their permission."
},

{
    "location": "#Quick-(and-incomplete-intro)-1",
    "page": "Readme",
    "title": "Quick (and incomplete intro)",
    "category": "section",
    "text": ""
},

{
    "location": "#Matlab-esque-interface-1",
    "page": "Readme",
    "title": "Matlab-esque interface",
    "category": "section",
    "text": "For an API similar to the original CompEcon Matlab package by Miranda and Fackler, please see the CompEcon.jl package."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "Here\'s an example of how to use the Julia-based API to set up multi-dimensional basis matrix and work with it.ygrid0 = linspace(-4, 4, 10)\nagrid0 = linspace(0.0.^0.4, 100.0.^0.4, 25).^(1/0.4)\n\n# method one, using the Basis constructor multiple times\nbasis = Basis(SplineParams(agrid0, 0, 3),  # cubic spline\n              SplineParams(ygrid0, 0, 1))  # linear\n\n# method two, constructing separately, then calling `Basis` with the two\na_basis = Basis(SplineParams(agrid0, 0, 3))\ny_basis = Basis(SplineParams(ygrid0, 0, 1))\nbasis = Basis(a_basis, y_basis)\n\n# Construct state vector (matrix). Note that for higher order splines points\n# are added to the input vector, so let\'s extract the actual grid points used\n# from the second argument\nS, (agrid, ygrid) = nodes(basis)\n\n# construct basis matrix and its lu-factorization for very fast inversion\n# NOTE: I am doing this in a round-about way. I could have just done\n#       Φ = BasisMatrix(basis), but doing it this way gives me the direct\n#       representation so I get Φ_y without repeating any calculations\nΦ_direct = BasisMatrix(basis, Direct(), S, [0 0])\nΦ_y = Φ_direct.vals[2]\nΦ = convert(Expanded, Φ_direct, [0 0]).vals[1]\nlu_Φ = lufact(Φ)"
},

{
    "location": "#Basic-Overview-of-Julian-API-1",
    "page": "Readme",
    "title": "Basic Overview of Julian API",
    "category": "section",
    "text": "This section provides a sketch of the type based Julian API."
},

{
    "location": "#Theoretical-Foundation-1",
    "page": "Readme",
    "title": "Theoretical Foundation",
    "category": "section",
    "text": "To understand the Julian API and type system, we first need to understand the fundamental theory behind the interpolation scheme implemented here. Interpolation in BasisMatrices is built around three key concepts:An functional Basis: for each dimension, the basis specifies\nfamily of basis function (B spline, Chebyshev polynomials, ect.)\ndomain (bounds)\ninterpolation nodes (grid on domain)\nA BasisMatrix:\nRepresents the evaluation of basis functions at the interpolation nodes\nConstructed one dimension at a time, then combined with tensor product\nA coefficient vector: used to map from domain of the Basis into real line"
},

{
    "location": "#Core-types-1",
    "page": "Readme",
    "title": "Core types",
    "category": "section",
    "text": "Functionality implemented around 5 core types (or type families) that relate closely to the theoretical concepts outlined above."
},

{
    "location": "#Representing-the-Basis-1",
    "page": "Readme",
    "title": "Representing the Basis",
    "category": "section",
    "text": "The first two groups of type are helper types used to facilitate construction of the Basis. They are the BasisFamily and the BasisParams types:First is the BasisFamily:abstract type BasisFamily end\nstruct Cheb <: BasisFamily end\nstruct Lin <: BasisFamily end\nstruct Spline <: BasisFamily end\n\nabstract type BasisParams end\nmutable struct ChebParams <: BasisParams\n    n::Int\n    a::Float64\n    b::Float64\nend\n\nmutable struct SplineParams <: BasisParams\n    breaks::Vector{Float64}\n    evennum::Int\n    k::Int\nend\n\nmutable struct LinParams <: BasisParams\n    breaks::Vector{Float64}\n    evennum::Int\nendBasisFamily is an abstract type, whose subtypes are singletons that specify the class of functions in the basis.BasisParams is an abstract type, whose subtypes are type types that hold all information needed to construct the Basis of a particular classThen we have the central Basis type:mutable struct Basis{N,TP<:Tuple}\n    params::TP     # params to construct basis\nendThe params field of this type contains an N element tuple, where each element is a subtype of BasisParams. This represents an N dimensional basis.The Basis has support for the following methods:A whole slew of constructors\ngetindex(b::Basis, i::Int): which extracts the univariate Basis along the ith dimension\nndims: The number of dimensions\nlength: the product of the n field\nsize(b::Basis, i::Int): The ith element of the n field (number of basis functions in dimension i)\nsize(b::Basis): b.n as a tuple instead of a vector (similar to size(a::Array))\n==: test two basis for equality\nnodes(b::Basis)->(Matrix, Vector{Vector{Float64}}): the interpolation nodes. the first element is the tensor product of all dimensions, second element is a vector of vectors, where the ith element contains the nodes along dimension i.\nmin and max gives an N element tuple of the lower and upper bounds of the domain in each dimension."
},

{
    "location": "#BasisMatrix-representation-1",
    "page": "Readme",
    "title": "BasisMatrix representation",
    "category": "section",
    "text": "Next we turn to representing the BasisMatrix, which is responsible for keeping track of the basis functions evaluated at the interpolation nodes. To keep track of this representation, we have another family of helper types:abstract type AbstractBasisMatrixRep end\nconst ABSR = AbstractBasisMatrixRep\n\nstruct Tensor <: ABSR end\nstruct Direct <: ABSR end\nstruct Expanded <: ABSR endAbstractBasisMatrixRep is an abstract types, whose subtypes are singletons that specify how the basis matrices are stored. To understand how they are different, we need to see the structure of the BasisMatrix type:mutable struct BasisMatrix{BST<:ABSR, TM<:AbstractMatrix}\n    order::Matrix{Int}\n    vals::Matrix{TM}\nendThe order field keeps track of what order of derivative or integral the arrays inside vals correspond to.The content inside vals will vary based on the type Parameter BST<:AbstractBasisMatrixRep:for BST==Tensor vals will store the evaluation of the basis functions at each of the integration nodes independently. Thus, the [d, i] element will be the derivative order d Basis at the interpolation nodes along the ith dimension (each column is a basis function, each row is an interpolation node). This is the most compact and memory efficient representation\nFor BST==Direct vals will expand along the first dimension (rows) of the array so that for each i, the [d, i] element will have length(basis) rows and basis.n[i] (modulo loss or addition of basis functions from derivative/integral operators.)\nFor BST==Expanded vals will be expanded along both the rows and the columns and will contain a single Matrix for each desired derivative order. This format is the least memory efficient, but simplest conceptually for thinking about how to compute a coefficient vector (if y is f(x) then coefs[d] = b.vals[d] \\ y)See the file demo/basismatformats.jl for a more detailed description of the basis matrix formats."
},

{
    "location": "#Convenience-Interpoland-type-1",
    "page": "Readme",
    "title": "Convenience Interpoland type",
    "category": "section",
    "text": "Finally the convenient Interpoland type:mutable struct Interpoland{TB<:Basis,TC<:AbstractArray,TBM<:BasisMatrix{Tensor}}\n    basis::TB  # the basis -- can\'t change\n    coefs::TC  # coefficients -- might change\n    bmat::TBM  # BasisMatrix at nodes of `b` -- can\'t change\nendThe main purpose of this type is to keep track of the coefficient vector and the Basis so the user doesn\'t have to carry both of them around. It also holds a BasisMatrix for the evaluation of the basis matrices at the interpolation nodes. This means that if the coefficient vector needs to be updated, this BasisMatrix will not be re-computed."
},

{
    "location": "autodocs/#BasisMatrices.Interpoland-Tuple{Basis,Function}",
    "page": "Docstrings",
    "title": "BasisMatrices.Interpoland",
    "category": "method",
    "text": "Construct an Interpoland from a function.\n\nThe function must have the signature f(::AbstractMatrix)::AbstractArray where each column of the input matrix is a vector of values along a single dimension\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.complete_polynomial",
    "page": "Docstrings",
    "title": "BasisMatrices.complete_polynomial",
    "category": "function",
    "text": "Construct basis matrix for complete polynomial of degree d, given input data z. z is assumed to be the degree 1 realization of each variable. For example, if variables are q, r, and s, then z should be z = [q r s]\n\nOutput is a basis matrix. In our example, with d set to 2 we would have\n\nout = [ones(size(z,1)) q q.^2 q.*r q.*s r r.^2 r.*s s s.^2]\n\nTODO: Currently a bit more code repetition than is desireable. It would be       nice to cut down on the repetition between the complete_polynomial       functions TODO: Current algorithm for computing derivatives is kind of slow – Is       there any obvious ways to improve this?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.evalbase-Tuple{SplineParams,AbstractArray,AbstractArray{Int64,1}}",
    "page": "Docstrings",
    "title": "BasisMatrices.evalbase",
    "category": "method",
    "text": "Evaluate spline basis matrices for a certain order derivative at x\n\nArguments\n\np::SplineParams: A SplineParams summarizing spline properties\nx(nodes(p)) : the nodes at which to evaluate the basis matrices\norder(0) : The order(s) of derivative for which to evaluate the basis\n\nmatrices. order=0 corresponds to the function itself, negative numbers correspond to integrals.\n\nReturns\n\nB::SparseMatrixCSC : Matrix containing the evaluation of basis functions\n\nat each point in x. Each column represents a basis function.\n\nx: Points at which the functions were evaluated\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.nodes-Tuple{SplineParams}",
    "page": "Docstrings",
    "title": "BasisMatrices.nodes",
    "category": "method",
    "text": "Construct interpolation nodes, given SplineParams\n\nNote that p.k - 1 additional nodes will be inserted\n\nArguments\n\np::SplineParams: SplineParams instance\n\nReturns\n\nx::Vector: The Vector of 1d interpolation nodes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.a_chain-Tuple{Int64}",
    "page": "Docstrings",
    "title": "BasisMatrices.a_chain",
    "category": "method",
    "text": "Finds all of the unidimensional disjoint sets of Chebychev extrema that are used to construct the grid.  It improves on past algorithms by noting  that A_n = S_n [evens] except for A_1= 0  and A_2 = -1 1. Additionally, A_n = A_n+1 [odds] This prevents the calculation of these nodes repeatedly. Thus we only need to calculate biggest of the Sn\'s to build the sequence of ``An`` \'s\n\nSee section 3.2 of the paper...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.basis_eltype",
    "page": "Docstrings",
    "title": "BasisMatrices.basis_eltype",
    "category": "function",
    "text": "basis_eltype(p::Union{BasisParams,Type{<:BasisParams}, x)\n\nReturn the eltype of the Basis matrix that would be obtained by calling evalbase(p, x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.build_B!-Union{Tuple{T}, Tuple{AbstractArray{T,2},Int64,Union{Int64, AbstractArray{Int64,1}},Array{Float64,2},Array{Int64,2}}} where T",
    "page": "Docstrings",
    "title": "BasisMatrices.build_B!",
    "category": "method",
    "text": "Compute the matrix B(pts) from equation 22 in JMMV 2013. This is the basis matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.build_grid",
    "page": "Docstrings",
    "title": "BasisMatrices.build_grid",
    "category": "function",
    "text": "Use disjoint Smolyak sets to construct Smolyak grid of degree d and density parameter mu\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.cheby2n!-Union{Tuple{N}, Tuple{T}, Tuple{AbstractArray{T,N} where N,AbstractArray{T,N},Int64}, Tuple{AbstractArray{T,N} where N,AbstractArray{T,N},Int64,Int64}} where N where T<:Number",
    "page": "Docstrings",
    "title": "BasisMatrices.cheby2n!",
    "category": "method",
    "text": "Computes first n Chebychev polynomials of the kind kind evaluated at each point in x and places them in out. The trailing dimension of out indexes the chebyshev polynomials. All inner dimensions correspond to points in x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.check_basis_structure-Tuple{Int64,Any,Any}",
    "page": "Docstrings",
    "title": "BasisMatrices.check_basis_structure",
    "category": "method",
    "text": "Do common transformations to all constructor of BasisMatrix\n\nArguments\n\nN::Int: The number of dimensions in the corresponding Basis\nx::AbstractArray: The points for which the BasisMatrix should be\n\nconstructed\n\norder::Array{Int}: The order of evaluation for each dimension of the basis\n\nReturns\n\nm::Int: the total number of derivative order basis functions to compute.\n\nThis will be the number of rows in the matrix form of order\n\norder::Matrix{Int}: A m × N matrix that, for each of the m desired\n\nspecifications, gives the derivative order along all N dimensions\n\nminorder::Matrix{Int}: A 1 × N matrix specifying the minimum desired\n\nderivative order along each dimension\n\nnumbases::Matrix{Int}: A 1 × N matrix specifying the total number of\n\ndistinct derivative orders along each dimension\n\nx::AbstractArray: The properly transformed points at which to evaluate\n\nthe basis\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.lookup",
    "page": "Docstrings",
    "title": "BasisMatrices.lookup",
    "category": "function",
    "text": "lookup(table::AbstractVector, x, p::Int=0)\n\nFor a sorted vector table, return the index of the last point smaller than x. p specifies endpoint adjustments and takes one of 4 values:\n\np=0: no adjustment made\np=1: if x < minimum(table), then return sum(table .== table[1])\np=2: if x > maximum(table), then return length(table)-sum(table .== table[end])\np=3: do both adjustments 1 and 2\n\nIf p > 3, the p=3 case is applied\n\nWhen x is a vector, a vector of integers is returned\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.phi_chain-Tuple{Int64}",
    "page": "Docstrings",
    "title": "BasisMatrices.phi_chain",
    "category": "method",
    "text": "For each number in 1 to n, compute the Smolyak indices for the corresponding basis functions. This is the n in phi_n. The output is A dictionary whose keys are the Smolyak index n and values are ranges containing all basis polynomial subscripts for that Smolyak index\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.poly_inds",
    "page": "Docstrings",
    "title": "BasisMatrices.poly_inds",
    "category": "function",
    "text": "Build indices specifying all the Cartesian products of Chebychev polynomials needed to build Smolyak polynomial\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.s_n-Tuple{Int64}",
    "page": "Docstrings",
    "title": "BasisMatrices.s_n",
    "category": "method",
    "text": "Finds the set S_n , which is the nth Smolyak set of Chebychev extrema\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.smol_inds-Tuple{Int64,AbstractArray{Int64,1}}",
    "page": "Docstrings",
    "title": "BasisMatrices.smol_inds",
    "category": "method",
    "text": "smol_inds(d::Int, mu::AbstractVector{Int})\n\nFinds all of the indices that satisfy the requirement that d leq sum_i=1^d leq d + mu_i.\n\nThis is the anisotropic version of the method that allows mu to vary for each dimension\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BasisMatrices.smol_inds-Tuple{Int64,Int64}",
    "page": "Docstrings",
    "title": "BasisMatrices.smol_inds",
    "category": "method",
    "text": "smol_inds(d::Int, mu::Int)\n\nFinds all of the indices that satisfy the requirement that d leq sum_i=1^d leq d + mu.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BasisMatrices]\nOrder = [:type, :function]"
},

]}
