var documenterSearchIndex = {"docs": [

{
    "location": "#SymmetricTensors.SymmetricTensor",
    "page": "Home",
    "title": "SymmetricTensors.SymmetricTensor",
    "category": "type",
    "text": "Type constructor\n\nframe - stores ArrayNArrays{T,N} bls - Int, size of ordinary block bln - Int, number of blocks datasize - Int, size of data stored (in each direction the same) sqr - Bool, is the last block size a same as ordinary\'s block size\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.SymmetricTensor-Union{Tuple{Array{T,N}}, Tuple{N}, Tuple{T}, Tuple{Array{T,N},Int64}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "SymmetricTensors.SymmetricTensor",
    "category": "method",
    "text": "SymmetricTensor(data::Array{N}, bls::Int)\n\nReturns: data in SymmetricTensor form.\n\njulia> a = reshape(collect(1.:16.), 4, 4);\n\njulia> SymmetricTensor(a*a\')\nSymmetricTensors.SymmetricTensor{Float64,2}(Union{Array{Float64,2}, Void}[[276.0 304.0; 304.0 336.0][332.0 360.0; 368.0 400.0]; nothing [404.0 440.0; 440.0 480.0]], 2, 2, 4, true)\n\n\n\n\n\n"
},

{
    "location": "#Base.rand-Union{Tuple{N}, Tuple{T}, Tuple{Type{SymmetricTensor{T,N}},Int64}, Tuple{Type{SymmetricTensor{T,N}},Int64,Int64}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "Base.rand",
    "category": "method",
    "text": "rand(SymmetricTensor{T, N}, n::Int, b::Int = 2)\n\nReturns N-dimensional random SymmetricTensor with elements of type T drawn from uniform distribution on [0,1), n denotes data size and b denotes block size.\n\n\n\n\n\n"
},

{
    "location": "#Base.setindex!-Union{Tuple{N}, Tuple{T}, Tuple{SymmetricTensor{T,N},T,Vararg{Int64,N} where N}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "Base.setindex!",
    "category": "method",
    "text": "setindex!(st::SymmetricTensor{T,N}, x::T,  mulind::Int...)\n\nChange a SymmetricTensors value at the given multi-index\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.diag-Union{Tuple{SymmetricTensor{T,N}}, Tuple{N}, Tuple{T}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "SymmetricTensors.diag",
    "category": "method",
    "text": "diag(st::SymmetricTensor{N})\n\nReturn vector of floats, the super-diag of st\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.unfold-Union{Tuple{N}, Tuple{T}, Tuple{Array{T,N},Int64}} where N where T<:Real",
    "page": "Home",
    "title": "SymmetricTensors.unfold",
    "category": "method",
    "text": "unfold(ar::Array{N}, mode::Int)\n\nReturns an matrix being an unfold of N dims array in given mode.\n\njulia> A = reshape(collect(1.:8.), 2, 2, 2);\n\njulia> unfold(A, 1)\n2×4 Array{Float64,2}:\n 1.0  3.0  5.0  7.0\n 2.0  4.0  6.0  8.0\n\n julia> unfold(A, 2)\n 2×4 Array{Float64,2}:\n  1.0  2.0  5.0  6.0\n  3.0  4.0  7.0  8.0\n\n  julia> unfold(A, 3)\n  2×4 Array{Float64,2}:\n   1.0  2.0  3.0  4.0\n   5.0  6.0  7.0  8.0\n\n\n\n\n\n"
},

{
    "location": "#Core.Array-Union{Tuple{SymmetricTensor{T,N}}, Tuple{N}, Tuple{T}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "Core.Array",
    "category": "method",
    "text": "Array(st::SymmetricTensor{N})\n\nReturn N dims array converted from SymmetricTensor type\n\n\n\n\n\n"
},

{
    "location": "#Base.getindex-Tuple{SymmetricTensor,Vararg{Int64,N} where N}",
    "page": "Home",
    "title": "Base.getindex",
    "category": "method",
    "text": "getindex(st::SymmetricTensor, mulind::Tuple)\n\nReturns a Symmetric Tensor element for a given multi-index\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.fixpointperms-Union{Tuple{Tuple{Vararg{Int64,N}}}, Tuple{N}} where N",
    "page": "Home",
    "title": "SymmetricTensors.fixpointperms",
    "category": "method",
    "text": "fixpointperms(j::NTuple{N, Int}) where N\n\nReturns Vactor{Vector}, a fix point permutation of given multiindex\n\nTODO: this is a naive implementation\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.frtest-Union{Tuple{Array{Union{Nothing, Array{T,N}},N}}, Tuple{N}, Tuple{T}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "SymmetricTensors.frtest",
    "category": "method",
    "text": "frtest(data::ArrayNArrays{T,N})\n\nReturns assertion error if: all sizes of nullable array not equal, at least   some undergiagonal block not null, some blocks (not last) not squared,   some diagonal blocks not symmetric.\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.getblock-Tuple{SymmetricTensor,Tuple}",
    "page": "Home",
    "title": "SymmetricTensors.getblock",
    "category": "method",
    "text": "getblock(st::SymmetricTensor, i::Tuple)\n\nReturns a block from Symmetric Tensor, works for all multi-indices also not sorted\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.getblockunsafe-Tuple{SymmetricTensor,Tuple}",
    "page": "Home",
    "title": "SymmetricTensors.getblockunsafe",
    "category": "method",
    "text": "getblockunsafe(st::SymmetricTensor, i::Tuple)\n\nReturns a block from Symmetric Tensor, unsafe works only if multi-index is sorted\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.ind2range-Tuple{Int64,Int64,Int64}",
    "page": "Home",
    "title": "SymmetricTensors.ind2range",
    "category": "method",
    "text": "ind2range(i::Int, bls::Int, dats::Int)\n\nReturns a range given index i, size of a block and size of data\n\njulia> ind2range(2,3,5)\n4:5\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.issymetric-Union{Tuple{Array{T,N}}, Tuple{N}, Tuple{T}, Tuple{Array{T,N},Float64}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "SymmetricTensors.issymetric",
    "category": "method",
    "text": "issymetric(ar::Array{N}, atol::Float64)\n\nReturns: Assertion Error if not symmetric given a tolerance.\n\njulia> A = reshape(collect(1.:8.), 2, 2, 2);\n\njulia> julia> issymetric(A)\nERROR: AssertionError: not symmetric\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.pyramidindices-Tuple{Int64,Int64}",
    "page": "Home",
    "title": "SymmetricTensors.pyramidindices",
    "category": "method",
    "text": "pyramidindices(dims::Int, tensize::Int)\n\njulia> pyramidindices(2,3)\n6-element Array{Tuple{Int64,Int64},1}:\n (1,1)\n (1,2)\n (1,3)\n (2,2)\n (2,3)\n (3,3)\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.randblock-Union{Tuple{N}, Tuple{T}, Tuple{Type{T},Tuple{Vararg{Int64,N}},Tuple{Vararg{Int64,N}}}} where N where T<:Real",
    "page": "Home",
    "title": "SymmetricTensors.randblock",
    "category": "method",
    "text": "randblock(::Type{T}, dims::NTuple{N, Int}, j::NTuple{N, Int})\n\nReturns a block of size dims and position j by a uniformly distributed random number of type T\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.randsymarray",
    "page": "Home",
    "title": "SymmetricTensors.randsymarray",
    "category": "function",
    "text": "randsymarray(T, dim::Int, N::Int = 4)\n\nReturns N-dimmensional random super-symmetric array with Float64 elements drawn from uniform distribution on [0,1), dim denotes data size.\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.randsymarray-Union{Tuple{T}, Tuple{Type{T},Int64}, Tuple{Type{T},Int64,Int64}} where T<:Real",
    "page": "Home",
    "title": "SymmetricTensors.randsymarray",
    "category": "method",
    "text": "randsymarray(T, dim ::Int, N::Int = 4)\n\nReturns N-dimmensional random super-symmetric array with elements of type T drawn from uniform distribution on [0,1), dim denotes data size.\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.setindexunsafe!-Union{Tuple{N}, Tuple{T}, Tuple{SymmetricTensor{T,N},T,Vararg{Int64,N} where N}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "SymmetricTensors.setindexunsafe!",
    "category": "method",
    "text": "setindexunsafe!(st::SymmetricTensor{T,N}, x::T,  mulind::Int...)\n\nUnsafe change a SymmetricTensors value at the given multi-index\n\n\n\n\n\n"
},

{
    "location": "#SymmetricTensors.sizetest-Tuple{Int64,Int64}",
    "page": "Home",
    "title": "SymmetricTensors.sizetest",
    "category": "method",
    "text": "sizetest(dats::Int, bls::Int)\n\nReturns: DimensionMismatch if blocks size is grater than data size.\n\njulia> SymmetricTensors.sizetest(2,3)\nERROR: DimensionMismatch(\"bad block size 3 > 2\")\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [SymmetricTensors]\nOrder = [:type, :function]"
},

]}
