var documenterSearchIndex = {"docs": [

{
    "location": "#BasisMatrices.Interpoland-Tuple{Basis,Function}",
    "page": "Home",
    "title": "BasisMatrices.Interpoland",
    "category": "method",
    "text": "Construct an Interpoland from a function.\n\nThe function must have the signature f(::AbstractMatrix)::AbstractArray where each column of the input matrix is a vector of values along a single dimension\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.complete_polynomial",
    "page": "Home",
    "title": "BasisMatrices.complete_polynomial",
    "category": "function",
    "text": "Construct basis matrix for complete polynomial of degree d, given input data z. z is assumed to be the degree 1 realization of each variable. For example, if variables are q, r, and s, then z should be z = [q r s]\n\nOutput is a basis matrix. In our example, with d set to 2 we would have\n\nout = [ones(size(z,1)) q q.^2 q.*r q.*s r r.^2 r.*s s s.^2]\n\nTODO: Currently a bit more code repetition than is desireable. It would be       nice to cut down on the repetition between the complete_polynomial       functions TODO: Current algorithm for computing derivatives is kind of slow – Is       there any obvious ways to improve this?\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.evalbase-Tuple{SplineParams,AbstractArray,AbstractArray{Int64,1}}",
    "page": "Home",
    "title": "BasisMatrices.evalbase",
    "category": "method",
    "text": "Evaluate spline basis matrices for a certain order derivative at x\n\nArguments\n\np::SplineParams: A SplineParams summarizing spline properties\nx(nodes(p)) : the nodes at which to evaluate the basis matrices\norder(0) : The order(s) of derivative for which to evaluate the basis\n\nmatrices. order=0 corresponds to the function itself, negative numbers correspond to integrals.\n\nReturns\n\nB::SparseMatrixCSC : Matrix containing the evaluation of basis functions\n\nat each point in x. Each column represents a basis function.\n\nx: Points at which the functions were evaluated\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.nodes-Tuple{SplineParams}",
    "page": "Home",
    "title": "BasisMatrices.nodes",
    "category": "method",
    "text": "Construct interpolation nodes, given SplineParams\n\nNote that p.k - 1 additional nodes will be inserted\n\nArguments\n\np::SplineParams: SplineParams instance\n\nReturns\n\nx::Vector: The Vector of 1d interpolation nodes.\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.a_chain-Tuple{Int64}",
    "page": "Home",
    "title": "BasisMatrices.a_chain",
    "category": "method",
    "text": "Finds all of the unidimensional disjoint sets of Chebychev extrema that are used to construct the grid.  It improves on past algorithms by noting  that A_n = S_n [evens] except for A_1= 0  and A_2 = -1 1. Additionally, A_n = A_n+1 [odds] This prevents the calculation of these nodes repeatedly. Thus we only need to calculate biggest of the Sn\'s to build the sequence of ``An`` \'s\n\nSee section 3.2 of the paper...\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.basis_eltype",
    "page": "Home",
    "title": "BasisMatrices.basis_eltype",
    "category": "function",
    "text": "basis_eltype(p::Union{BasisParams,Type{<:BasisParams}, x)\n\nReturn the eltype of the Basis matrix that would be obtained by calling evalbase(p, x)\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.build_B!-Union{Tuple{T}, Tuple{AbstractArray{T,2},Int64,Union{Int64, AbstractArray{Int64,1}},Array{Float64,2},Array{Int64,2}}} where T",
    "page": "Home",
    "title": "BasisMatrices.build_B!",
    "category": "method",
    "text": "Compute the matrix B(pts) from equation 22 in JMMV 2013. This is the basis matrix\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.build_grid",
    "page": "Home",
    "title": "BasisMatrices.build_grid",
    "category": "function",
    "text": "Use disjoint Smolyak sets to construct Smolyak grid of degree d and density parameter mu\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.cheby2n!-Union{Tuple{N}, Tuple{T}, Tuple{AbstractArray{T,N} where N,AbstractArray{T,N},Int64}, Tuple{AbstractArray{T,N} where N,AbstractArray{T,N},Int64,Int64}} where N where T<:Number",
    "page": "Home",
    "title": "BasisMatrices.cheby2n!",
    "category": "method",
    "text": "Computes first n Chebychev polynomials of the kind kind evaluated at each point in x and places them in out. The trailing dimension of out indexes the chebyshev polynomials. All inner dimensions correspond to points in x.\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.check_basis_structure-Tuple{Int64,Any,Any}",
    "page": "Home",
    "title": "BasisMatrices.check_basis_structure",
    "category": "method",
    "text": "Do common transformations to all constructor of BasisMatrix\n\nArguments\n\nN::Int: The number of dimensions in the corresponding Basis\nx::AbstractArray: The points for which the BasisMatrix should be\n\nconstructed\n\norder::Array{Int}: The order of evaluation for each dimension of the basis\n\nReturns\n\nm::Int: the total number of derivative order basis functions to compute.\n\nThis will be the number of rows in the matrix form of order\n\norder::Matrix{Int}: A m × N matrix that, for each of the m desired\n\nspecifications, gives the derivative order along all N dimensions\n\nminorder::Matrix{Int}: A 1 × N matrix specifying the minimum desired\n\nderivative order along each dimension\n\nnumbases::Matrix{Int}: A 1 × N matrix specifying the total number of\n\ndistinct derivative orders along each dimension\n\nx::AbstractArray: The properly transformed points at which to evaluate\n\nthe basis\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.lookup",
    "page": "Home",
    "title": "BasisMatrices.lookup",
    "category": "function",
    "text": "lookup(table::AbstractVector, x, p::Int=0)\n\nFor a sorted vector table, return the index of the last point smaller than x. p specifies endpoint adjustments and takes one of 4 values:\n\np=0: no adjustment made\np=1: if x < minimum(table), then return sum(table .== table[1])\np=2: if x > maximum(table), then return length(table)-sum(table .== table[end])\np=3: do both adjustments 1 and 2\n\nIf p > 3, the p=3 case is applied\n\nWhen x is a vector, a vector of integers is returned\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.phi_chain-Tuple{Int64}",
    "page": "Home",
    "title": "BasisMatrices.phi_chain",
    "category": "method",
    "text": "For each number in 1 to n, compute the Smolyak indices for the corresponding basis functions. This is the n in phi_n. The output is A dictionary whose keys are the Smolyak index n and values are ranges containing all basis polynomial subscripts for that Smolyak index\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.poly_inds",
    "page": "Home",
    "title": "BasisMatrices.poly_inds",
    "category": "function",
    "text": "Build indices specifying all the Cartesian products of Chebychev polynomials needed to build Smolyak polynomial\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.s_n-Tuple{Int64}",
    "page": "Home",
    "title": "BasisMatrices.s_n",
    "category": "method",
    "text": "Finds the set S_n , which is the nth Smolyak set of Chebychev extrema\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.smol_inds-Tuple{Int64,AbstractArray{Int64,1}}",
    "page": "Home",
    "title": "BasisMatrices.smol_inds",
    "category": "method",
    "text": "smol_inds(d::Int, mu::AbstractVector{Int})\n\nFinds all of the indices that satisfy the requirement that d leq sum_i=1^d leq d + mu_i.\n\nThis is the anisotropic version of the method that allows mu to vary for each dimension\n\n\n\n\n\n"
},

{
    "location": "#BasisMatrices.smol_inds-Tuple{Int64,Int64}",
    "page": "Home",
    "title": "BasisMatrices.smol_inds",
    "category": "method",
    "text": "smol_inds(d::Int, mu::Int)\n\nFinds all of the indices that satisfy the requirement that d leq sum_i=1^d leq d + mu.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BasisMatrices]\nOrder = [:type, :function]"
},

]}
