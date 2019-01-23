var documenterSearchIndex = {"docs": [

{
    "location": "#Cumulants.cumulants-Union{Tuple{Array{T,2}}, Tuple{T}, Tuple{Array{T,2},Int64}, Tuple{Array{T,2},Int64,Int64}} where T<:AbstractFloat",
    "page": "Home",
    "title": "Cumulants.cumulants",
    "category": "method",
    "text": "cumulants(X::Matrix, m::Int, b::Int)\n\nReturns [SymmetricTensor{Float, 1}, SymmetricTensor{Float, 2}, ..., SymmetricTensor{Float, m}], vector of cumulant tensors\n\njulia> M =  [[-0.88626   0.279571];[-0.704774  0.131896]];\n\njulia> convert(Array, cumulants(M, 3)[3])\n2×2×2 Array{Float64,3}:\n[:, :, 1] =\n 0.0  0.0\n 0.0  0.0\n\n[:, :, 2] =\n 0.0  0.0\n 0.0  0.0\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.naivecumulant-Union{Tuple{Array{T,2}}, Tuple{T}, Tuple{Array{T,2},Int64}} where T<:AbstractFloat",
    "page": "Home",
    "title": "Cumulants.naivecumulant",
    "category": "method",
    "text": "naivecumulant(data::Matrix, m::Int)\n\nReturns Array{Float, m} the m\'th cumulant tensor\n\njulia> M =  [[-0.88626   0.279571];[-0.704774  0.131896]];\n\njulia> naivecumulant(M, 3)\n2×2×2 Array{Float64,3}:\n[:, :, 1] =\n 0.0  0.0\n 0.0  0.0\n\n[:, :, 2] =\n 0.0  0.0\n 0.0  0.0\n\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.naivemoment-Union{Tuple{Array{T,2}}, Tuple{T}, Tuple{Array{T,2},Int64}} where T<:AbstractFloat",
    "page": "Home",
    "title": "Cumulants.naivemoment",
    "category": "method",
    "text": "naivemoment(data::Matrix{Float}, m::Int)\n\nReturns Array{Float, m} the m\'th moment tensor\n\njulia> M =  [[-0.88626   0.279571];[-0.704774  0.131896]];\n\njulia> naivemoment(M, 3)\n2×2×2 Array{Float64,3}:\n[:, :, 1] =\n  -0.523092   0.142552\n  0.142552  -0.0407653\n\n[:, :, 2] =\n  0.142552   -0.0407653\n  -0.0407653   0.0120729\n\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.moment-Union{Tuple{T}, Tuple{Array{T,2},Int64}, Tuple{Array{T,2},Int64,Int64}} where T<:AbstractFloat",
    "page": "Home",
    "title": "StatsBase.moment",
    "category": "method",
    "text": "moment(X::Matrix}, m::Int, b::Int)\n\nReturns: SymmetricTensor{Float, m}, a tensor of the m\'th moment of X, where b is a block size. Calls 1 core or multicore moment function.\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.IndexPart",
    "page": "Home",
    "title": "Cumulants.IndexPart",
    "category": "type",
    "text": "Type that stores a partition of multiindex into subests, sizes of subests, size of original multitindex and number of subsets\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.accesscum-Union{Tuple{T}, Tuple{Tuple,IndexPart,Vararg{SymmetricTensor{T,N} where N,N} where N}} where T<:AbstractFloat",
    "page": "Home",
    "title": "Cumulants.accesscum",
    "category": "method",
    "text": "accesscum(mulind::Tuple{Int, ...}, ::IndexPart,     cum::SymmetricTensor{Float}...)\n\nReturns: vector of blocks from cumulants. Each block correspond to a subests  of partition (part) of multiindex (multiind).\n\n```jldoctest  julia> cum = SymmetricTensor([1.0 2.0 3.0; 2.0 4.0 6.0; 3.0 6.0 5.0]);\n\njulia> accesscum((1,1,1,1), IndexPart(Array{Int64,1}[[1,2],[3,4]],[2,2],4,2), cum) Array{Float64,N}[ [1.0 2.0; 2.0 4.0], [1.0 2.0; 2.0 4.0]]\n\njulia> accesscum((1,1,1,2), IndexPart(Array{Int64,1}[[1,2],[3,4]],[2,2],4,2), cum)\n\nArray{Float64,N}[ [1.0 2.0; 2.0 4.0], [3.0 0.0; 6.0 0.0]]\n\njulia> accesscum((1,1,1,1), IndexPart(Array{Int64,1}[[1,4],[2,3]],[2,2],4,2), cum)\n\nArray{Float64,N}[ [1.0 2.0; 2.0 4.0], [1.0 2.0; 2.0 4.0]]  ```\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.blockel-Union{Tuple{T}, Tuple{Array{T,2},Tuple,Tuple,Int64}} where T<:AbstractFloat",
    "page": "Home",
    "title": "Cumulants.blockel",
    "category": "method",
    "text": "blockel(X::Matrix{T}, i::Tuple, j::Tuple, b::Int)\n\nReturns Float, the element of the block (indexed by j) of the moment\'s tensor of X, at index cd i inside a block, where b is a standard blocks\' size\n\njulia> M = [1. 2.  5. 6. ; 3. 4.  7. 8.];\n\njulia> mom_el(M, (1,1), (1,1), 2)\n5.0\n\njulia> mom_el(M, (1,1), (2,2), 2)\n37.0\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.cumulant-Union{Tuple{T}, Tuple{Array{T,2},Vararg{SymmetricTensor{T,N} where N,N} where N}} where T<:AbstractFloat",
    "page": "Home",
    "title": "Cumulants.cumulant",
    "category": "method",
    "text": "cumulant(X::Vector{Matrix}, cum::SymmetricTensor...)\n\nReturns: SymmetricTensor{Float, m}, a tensor of the m\'th cumulant of X, given Vector of cumulants of order 2, ..., m-2\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.indpart",
    "page": "Home",
    "title": "Cumulants.indpart",
    "category": "function",
    "text": "indpart(nind::Int, npart::Int, e::Int = 1)\n\nReturns vector of IndexPart type, that includes partitions of set [1, 2, ..., nind] into npart subests of size != e, sizes of each subest, size of original set and number of partitions\n\njulia>indpart(4,2)\n3-element Array{Cumulants.IndexPart,1}:\n IndexPart(Array{Int64,1}[[1,2],[3,4]],[2,2],4,2)\n IndexPart(Array{Int64,1}[[1,3],[2,4]],[2,2],4,2)\n IndexPart(Array{Int64,1}[[1,4],[2,3]],[2,2],4,2)\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.mixel-Union{Tuple{T}, Tuple{Array{T,2},Tuple}} where T<:AbstractFloat",
    "page": "Home",
    "title": "Cumulants.mixel",
    "category": "method",
    "text": "mixel(X::Matrix{T}, ind::Tuple)\n\nReturns Float, mixed element for cumulants 4-6 at ind multi-index\n\njulia> M =  [[-0.88626   0.279571];[-0.704774  0.131896]];\n\njulia> mixel(M, (1,1,1,1))\n-1.232956812564408\n\nmixel(M, (1,1,1,1,1,1))\n1.015431116914347\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.momel-Union{Tuple{T}, Tuple{Array{T,2},Tuple}} where T<:AbstractFloat",
    "page": "Home",
    "title": "Cumulants.momel",
    "category": "method",
    "text": "momel(X::Matrix{Float}, ind::Tuple)\n\nReturns Float, an element of moment\'s tensor at ind multiindex\n\njulia> M =  [[-0.88626   0.279571];[-0.704774  0.131896]];\n\njulia> momel(M, (1,1,1,1))\n0.4318298020613279\n\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.moment1c-Union{Tuple{T}, Tuple{Array{T,2},Int64}, Tuple{Array{T,2},Int64,Int64}} where T<:AbstractFloat",
    "page": "Home",
    "title": "Cumulants.moment1c",
    "category": "method",
    "text": "momentn1c(X::Matrix{Float}, m::Int, b::Int)\n\nReturns: SymmetricTensor{Float, m}, a tensor of the m\'th moment of X, where b is a block size. Uses 1 core implementation\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.momentblock-Union{Tuple{T}, Tuple{Array{T,2},Tuple,Tuple,Int64}} where T<:AbstractFloat",
    "page": "Home",
    "title": "Cumulants.momentblock",
    "category": "method",
    "text": "momentblock(X::Matrix{T}, j::Tuple, dims::Tuple, b::Int)\n\nReturns a block of a moment\'s tensor of X. A block is indexed by j and if size dims, b is a standatd block size.\n\njulia> M = [1. 2.  5. 6. ; 3. 4.  7. 8.];\n\njulia> momentblock(M, (1,1), (2,2), 2)\n2×2 Array{Float64,2}:\n 5.0   7.0\n 7.0  10.0\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.momentnc-Union{Tuple{T}, Tuple{Array{T,2},Int64}, Tuple{Array{T,2},Int64,Int64}} where T<:AbstractFloat",
    "page": "Home",
    "title": "Cumulants.momentnc",
    "category": "method",
    "text": "momentnc(X::Matrix}, m::Int, b::Int)\n\nReturns: SymmetricTensor{Float, m}, a tensor of the m\'th moment of X, where b is a block size. Uses multicore parallel implementation via pmap()\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.outerprodcum-Union{Tuple{T}, Tuple{Int64,Int64,Vararg{SymmetricTensor{T,N} where N,N} where N}} where T<:AbstractFloat",
    "page": "Home",
    "title": "Cumulants.outerprodcum",
    "category": "method",
    "text": "outerprodcum(retd::Int, npart::Int, cum::SymmetricTensor...; exclpartlen::Int = 1)\n\nReturns retd dims outer products of npart cumulants in SymmetricTensor form. exclpartlen is a length of partitions to be excluded in calculations, in this algorithm exclpartlen = 1\n\njulia> cum = SymmetricTensor([1.0 2.0 3.0; 2.0 4.0 6.0; 3.0 6.0 5.0]);\n\njulia> outerprodcum(4,2,cum, cum)\nSymmetricTensors.SymmetricTensor{Float64,4}(Union{Array{Float64,4}, Void}[[3.0 6.0; 6.0 12.0]\n\n[6.0 12.0; 12.0 24.0]\n\n[6.0 12.0; 12.0 24.0]\n\n[12.0 24.0; 24.0 48.0] nothing; nothing nothing]\n\nUnion{Array{Float64,4}, Void}[nothing nothing; nothing nothing]\n\nUnion{Array{Float64,4}, Void}[[9.0 18.0; 18.0 36.0]\n\n[18.0 36.0; 36.0 72.0] nothing; nothing nothing]\n\nUnion{Array{Float64,4}, Void}[[23.0 46.0; 46.0 92.0] [45.0; 90.0]; nothing [75.0]], 2, 2, 3, false)\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.outprodblocks-Union{Tuple{T}, Tuple{IndexPart,Array{Array{T,N} where N,1}}} where T<:AbstractFloat",
    "page": "Home",
    "title": "Cumulants.outprodblocks",
    "category": "method",
    "text": "outprodblocks(n::Int, part::Vector{Vector{Int}}, blocks::Vector{Array{T}}\n\nReturns: n dims Array of outer product of blocks, given partition of indices, part.\n\njulia> blocks = 2-element Array{Array{Float64,N},1}[[1.0 2.0; 2.0 4.0], [1.0 2.0; 2.0 4.0]];\n\njulia> outprodblocks(IndexPart(Array{Int64,1}[[1,2],[3,4]],[2,2],4,2), blocks)\n\n2×2×2×2 Array{Float64,4}:\n[:, :, 1, 1] =\n 1.0  2.0\n 2.0  4.0\n\n[:, :, 2, 1] =\n 2.0  4.0\n 4.0  8.0\n\n[:, :, 1, 2] =\n 2.0  4.0\n 4.0  8.0\n\n[:, :, 2, 2] =\n 4.0   8.0\n 8.0  16.0\n\n\n\n\n\n"
},

{
    "location": "#Cumulants.usebl-Tuple{Tuple,Int64,Int64,Int64}",
    "page": "Home",
    "title": "Cumulants.usebl",
    "category": "method",
    "text": "usebl(bind::Tuple, n::Int, b::Int, nbar::Int)\n\nReturns: Tuple{Int}, sizes of the last block\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Cumulants]\nOrder = [:type, :function]"
},

]}
