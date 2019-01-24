var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Cumulants.jl-1",
    "page": "Readme",
    "title": "Cumulants.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: DOI)Calculates cummulant tensors of any order for multivariate data. Functions return tensor or array of tensors in SymmetricTensors type. Requires SymmetricTensors.jl. To convert to array, run:julia> Array(data::SymmetricTensors{T, N})As of 01/01/2017 kdomino is the lead maintainer of this package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia, runpkg> add Cumulantsto install the files. Julia 0.7 or later is required."
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": ""
},

{
    "location": "#Moment-1",
    "page": "Readme",
    "title": "Moment",
    "category": "section",
    "text": "julia> moment(data::Matrix{T}, m::Int, b::Int = 2) where T<: AbstractFloatReturns a SymmetricTensor{T, m} of the moment of order m of multivariate data represented by a t by n matrix, i.e. data with n marginal variables and t realisations. The argument b with defalt value 2, is an optional Int that determines the size of the blocks in SymmetricTensors type.julia> data = reshape(collect(1.:15.),(5,3))\n5×3 Array{Float64,2}:\n 1.0   6.0  11.0\n 2.0   7.0  12.0\n 3.0   8.0  13.0\n 4.0   9.0  14.0\n 5.0  10.0  15.0julia> m = moment(data, 3)\nSymmetricTensor{Float64,3}(Union{Nothing, Array{Float64,3}}[[45.0 100.0; 100.0 230.0]\n\n[100.0 230.0; 230.0 560.0] nothing; nothing nothing]\n\nUnion{Nothing, Array{Float64,3}}[[155.0 360.0; 360.0 890.0] [565.0; 1420.0]; nothing [2275.0]], 2, 2, 3, false)To convert to array use:julia> Array(m)\n3×3×3 Array{Float64,3}:\n[:, :, 1] =\n  45.0  100.0  155.0\n 100.0  230.0  360.0\n 155.0  360.0  565.0\n\n[:, :, 2] =\n 100.0  230.0   360.0\n 230.0  560.0   890.0\n 360.0  890.0  1420.0\n\n[:, :, 3] =\n 155.0   360.0   565.0\n 360.0   890.0  1420.0\n 565.0  1420.0  2275.0\n ```\n\n ### Cumulants\n\n ```julia\njulia> cumulants(data::Matrix{T}, m::Int = 4, b::Int = 2) where T<: AbstractFloatReturns a vector of SymmetricTensor{T, i} i = 1,2,3,...,m of cumulants of order 1,2,3,...,m. Cumulants are calculated for multivariate data represented by matrix of size t by n, i.e. data with n marginal variables and t realisations. The argument b with default value 2, is an optional Int that determines a size of blocks in SymmetricTensors type.julia> c = cumulants(data, 3);\n\njulia> c[2]\nSymmetricTensor{Float64,2}(Union{Nothing, Array{Float64,2}}[[2.0 2.0; 2.0 2.0] [2.0; 2.0]; nothing [2.0]], 2, 2, 3, false)\n\njulia> c[3]\nSymmetricTensor{Float64,3}(Union{Nothing, Array{Float64,3}}[[0.0 0.0; 0.0 0.0]\n\n[0.0 0.0; 0.0 0.0] nothing; nothing nothing]\n\nUnion{Nothing, Array{Float64,3}}[[0.0 0.0; 0.0 0.0] [0.0; 0.0]; nothing [0.0]], 2, 2, 3, false)\nTo convert to array:julia> Array(c[2])\n3×3 Array{Float64,2}:\n 2.0  2.0  2.0\n 2.0  2.0  2.0\n 2.0  2.0  2.0\n\n julia> Array(c[3])\n3×3×3 Array{Float64,3}:\n[:, :, 1] =\n 0.0  0.0  0.0\n 0.0  0.0  0.0\n 0.0  0.0  0.0\n\n[:, :, 2] =\n 0.0  0.0  0.0\n 0.0  0.0  0.0\n 0.0  0.0  0.0\n\n[:, :, 3] =\n 0.0  0.0  0.0\n 0.0  0.0  0.0\n 0.0  0.0  0.0Parallel computation available, it is efficient for large number of data realisations, e.g. t = 1000000. For parallel computation just runjulia> addprocs(n)\njulia> @everywhere using CumulantsNaive algorithms of moment and cumulant tensors calculations are also available.julia> naivemoment(data::Matrix{T}, m::Int = 4) where T<: AbstractFloatReturns array{T, m} of the m\'th moment of data. calculated using a naive algorithm.julia> naivemoment(data, 3)\n3×3×3 Array{Float64,3}:\n[:, :, 1] =\n  45.0  100.0  155.0\n 100.0  230.0  360.0\n 155.0  360.0  565.0\n\n[:, :, 2] =\n 100.0  230.0   360.0\n 230.0  560.0   890.0\n 360.0  890.0  1420.0\n\n[:, :, 3] =\n 155.0   360.0   565.0\n 360.0   890.0  1420.0\n 565.0  1420.0  2275.0julia> naivecumulant(data::Matrix{T}, m::Int = 4) where T<: AbstractFloatReturns Array{T, m} of the m\'th cumulant of data, calculated using a naive algorithm. Works for 1 <= m  < 7, for m >= 7 throws exception.julia> naivecumulant(data, 2)\n3×3 Array{Float64,2}:\n 2.0  2.0  2.0\n 2.0  2.0  2.0\n 2.0  2.0  2.0julia> naivecumulant(data, 3)\n3×3×3 Array{Float64,3}:\n[:, :, 1] =\n 0.0  0.0  0.0\n 0.0  0.0  0.0\n 0.0  0.0  0.0\n\n[:, :, 2] =\n 0.0  0.0  0.0\n 0.0  0.0  0.0\n 0.0  0.0  0.0\n\n[:, :, 3] =\n 0.0  0.0  0.0\n 0.0  0.0  0.0\n 0.0  0.0  0.0"
},

{
    "location": "#Performance-analysis-1",
    "page": "Readme",
    "title": "Performance analysis",
    "category": "section",
    "text": "To analyse the computational time of cumulants vs naivecumulants and moment vs naivemoment, we supply the executable script comptimes.jl. This script returns to a .jld file computational times, given following parameters:-m (Int): cumulant\'s order, by default m = 4,\n-n (vararg Int): numbers of marginal variables, by default m = 20 24 28,\n-t (vararg Int): number of realisations of random variable, by defalut t = 10000.Be careful while using n>4 and large m, where naive algorithms might need a large computational time and memory usage. Naive algorithms does not use the block structures, hence they computes and stores a whole cumulant tensor regardless its symmetry. All comparisons performed by this script use one core.To analyse the computational time of cumulants for different block sizes 1 =< b =< Int(sqrt(n)), we supply the executable script comptimeblocks.jl. This script returns to a .jld file computational times, given following parameters:-m (Int): cumulant\'s order, by default m = 4,\n-n (Int): numbers of marginal variables, by default m = 48,\n-t (vararg Int): number of realisations of random variable, by default t = 10000 20000.Computational times and parameters are saved in the .jld file in /res directory. All comparisons performed by this script use one core.To analyse the computational time of moment on different numbers of processes, we supply the executable script comptimeprocs.jl. This script returns to a .jld file computational times, given following parameters:-m (Int): moment\'s order, by default m = 4,\n-n (Int): numbers of marginal variables, by default m = 50,\n-t (Int): number of realisations of random variable, by default t = 100000,\n-p (Int): maximal number of processes, by default p = 4,\n-b (Int): blocks size, by default b = 2.All result files are saved in /res directory. To plot a graph run /res/plotcomptimes.jl followed by a *.jld file nameFor the computational example on data use the following.The script gandata.jl generates t = 150000000 realisations of n = 4 dimensional data form the t-multivariate distribution with ν = 14 degrees of freedom, and theoretical super-diagonal elements of those cumulants. Results are saved in data/datafortests.jldThe script testondata.jl computes cumulant tensors of order m = 1 - 6 for data/datafortests.jld, results are saved in data/cumulants.jld.To read cumulants.jld please runjulia> using JLD\n\njulia> using SymmetricTensors\n\njulia> load(\"cumulants.jld\")\nTo plot super-diagonal elements of those cumulants and their theoretical values from t-student distribution pleas run plotsuperdiag.jl"
},

{
    "location": "#Citing-this-work-1",
    "page": "Readme",
    "title": "Citing this work",
    "category": "section",
    "text": "Krzysztof Domino, Piotr Gawron, Łukasz Pawela, Efficient Computation of Higher-Order Cumulant Tensors, SIAM J. Sci. Comput. 40, A1590 (2018) (Image: DOI), https://arxiv.org/abs/1701.05420This project was partially financed by the National Science Centre, Poland – project number 2014/15/B/ST6/05204."
},

{
    "location": "autodocs/#Cumulants.cumulants-Union{Tuple{Array{T,2}}, Tuple{T}, Tuple{Array{T,2},Int64}, Tuple{Array{T,2},Int64,Int64}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Cumulants.cumulants",
    "category": "method",
    "text": "cumulants(X::Matrix, m::Int, b::Int)\n\nReturns [SymmetricTensor{Float, 1}, SymmetricTensor{Float, 2}, ..., SymmetricTensor{Float, m}], vector of cumulant tensors\n\njulia> M =  [[-0.88626   0.279571];[-0.704774  0.131896]];\n\njulia> convert(Array, cumulants(M, 3)[3])\n2×2×2 Array{Float64,3}:\n[:, :, 1] =\n 0.0  0.0\n 0.0  0.0\n\n[:, :, 2] =\n 0.0  0.0\n 0.0  0.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.naivecumulant-Union{Tuple{Array{T,2}}, Tuple{T}, Tuple{Array{T,2},Int64}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Cumulants.naivecumulant",
    "category": "method",
    "text": "naivecumulant(data::Matrix, m::Int)\n\nReturns Array{Float, m} the m\'th cumulant tensor\n\njulia> M =  [[-0.88626   0.279571];[-0.704774  0.131896]];\n\njulia> naivecumulant(M, 3)\n2×2×2 Array{Float64,3}:\n[:, :, 1] =\n 0.0  0.0\n 0.0  0.0\n\n[:, :, 2] =\n 0.0  0.0\n 0.0  0.0\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.naivemoment-Union{Tuple{Array{T,2}}, Tuple{T}, Tuple{Array{T,2},Int64}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Cumulants.naivemoment",
    "category": "method",
    "text": "naivemoment(data::Matrix{Float}, m::Int)\n\nReturns Array{Float, m} the m\'th moment tensor\n\njulia> M =  [[-0.88626   0.279571];[-0.704774  0.131896]];\n\njulia> naivemoment(M, 3)\n2×2×2 Array{Float64,3}:\n[:, :, 1] =\n  -0.523092   0.142552\n  0.142552  -0.0407653\n\n[:, :, 2] =\n  0.142552   -0.0407653\n  -0.0407653   0.0120729\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsBase.moment-Union{Tuple{T}, Tuple{Array{T,2},Int64}, Tuple{Array{T,2},Int64,Int64}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "StatsBase.moment",
    "category": "method",
    "text": "moment(X::Matrix}, m::Int, b::Int)\n\nReturns: SymmetricTensor{Float, m}, a tensor of the m\'th moment of X, where b is a block size. Calls 1 core or multicore moment function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.IndexPart",
    "page": "Docstrings",
    "title": "Cumulants.IndexPart",
    "category": "type",
    "text": "Type that stores a partition of multiindex into subests, sizes of subests, size of original multitindex and number of subsets\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.accesscum-Union{Tuple{T}, Tuple{Tuple,IndexPart,Vararg{SymmetricTensor{T,N} where N,N} where N}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Cumulants.accesscum",
    "category": "method",
    "text": "accesscum(mulind::Tuple{Int, ...}, ::IndexPart,     cum::SymmetricTensor{Float}...)\n\nReturns: vector of blocks from cumulants. Each block correspond to a subests  of partition (part) of multiindex (multiind).\n\n```jldoctest  julia> cum = SymmetricTensor([1.0 2.0 3.0; 2.0 4.0 6.0; 3.0 6.0 5.0]);\n\njulia> accesscum((1,1,1,1), IndexPart(Array{Int64,1}[[1,2],[3,4]],[2,2],4,2), cum) Array{Float64,N}[ [1.0 2.0; 2.0 4.0], [1.0 2.0; 2.0 4.0]]\n\njulia> accesscum((1,1,1,2), IndexPart(Array{Int64,1}[[1,2],[3,4]],[2,2],4,2), cum)\n\nArray{Float64,N}[ [1.0 2.0; 2.0 4.0], [3.0 0.0; 6.0 0.0]]\n\njulia> accesscum((1,1,1,1), IndexPart(Array{Int64,1}[[1,4],[2,3]],[2,2],4,2), cum)\n\nArray{Float64,N}[ [1.0 2.0; 2.0 4.0], [1.0 2.0; 2.0 4.0]]  ```\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.blockel-Union{Tuple{T}, Tuple{Array{T,2},Tuple,Tuple,Int64}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Cumulants.blockel",
    "category": "method",
    "text": "blockel(X::Matrix{T}, i::Tuple, j::Tuple, b::Int)\n\nReturns Float, the element of the block (indexed by j) of the moment\'s tensor of X, at index cd i inside a block, where b is a standard blocks\' size\n\njulia> M = [1. 2.  5. 6. ; 3. 4.  7. 8.];\n\njulia> mom_el(M, (1,1), (1,1), 2)\n5.0\n\njulia> mom_el(M, (1,1), (2,2), 2)\n37.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.cumulant-Union{Tuple{T}, Tuple{Array{T,2},Vararg{SymmetricTensor{T,N} where N,N} where N}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Cumulants.cumulant",
    "category": "method",
    "text": "cumulant(X::Vector{Matrix}, cum::SymmetricTensor...)\n\nReturns: SymmetricTensor{Float, m}, a tensor of the m\'th cumulant of X, given Vector of cumulants of order 2, ..., m-2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.indpart",
    "page": "Docstrings",
    "title": "Cumulants.indpart",
    "category": "function",
    "text": "indpart(nind::Int, npart::Int, e::Int = 1)\n\nReturns vector of IndexPart type, that includes partitions of set [1, 2, ..., nind] into npart subests of size != e, sizes of each subest, size of original set and number of partitions\n\njulia>indpart(4,2)\n3-element Array{Cumulants.IndexPart,1}:\n IndexPart(Array{Int64,1}[[1,2],[3,4]],[2,2],4,2)\n IndexPart(Array{Int64,1}[[1,3],[2,4]],[2,2],4,2)\n IndexPart(Array{Int64,1}[[1,4],[2,3]],[2,2],4,2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.mixel-Union{Tuple{T}, Tuple{Array{T,2},Tuple}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Cumulants.mixel",
    "category": "method",
    "text": "mixel(X::Matrix{T}, ind::Tuple)\n\nReturns Float, mixed element for cumulants 4-6 at ind multi-index\n\njulia> M =  [[-0.88626   0.279571];[-0.704774  0.131896]];\n\njulia> mixel(M, (1,1,1,1))\n-1.232956812564408\n\nmixel(M, (1,1,1,1,1,1))\n1.015431116914347\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.momel-Union{Tuple{T}, Tuple{Array{T,2},Tuple}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Cumulants.momel",
    "category": "method",
    "text": "momel(X::Matrix{Float}, ind::Tuple)\n\nReturns Float, an element of moment\'s tensor at ind multiindex\n\njulia> M =  [[-0.88626   0.279571];[-0.704774  0.131896]];\n\njulia> momel(M, (1,1,1,1))\n0.4318298020613279\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.moment1c-Union{Tuple{T}, Tuple{Array{T,2},Int64}, Tuple{Array{T,2},Int64,Int64}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Cumulants.moment1c",
    "category": "method",
    "text": "momentn1c(X::Matrix{Float}, m::Int, b::Int)\n\nReturns: SymmetricTensor{Float, m}, a tensor of the m\'th moment of X, where b is a block size. Uses 1 core implementation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.momentblock-Union{Tuple{T}, Tuple{Array{T,2},Tuple,Tuple,Int64}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Cumulants.momentblock",
    "category": "method",
    "text": "momentblock(X::Matrix{T}, j::Tuple, dims::Tuple, b::Int)\n\nReturns a block of a moment\'s tensor of X. A block is indexed by j and if size dims, b is a standatd block size.\n\njulia> M = [1. 2.  5. 6. ; 3. 4.  7. 8.];\n\njulia> momentblock(M, (1,1), (2,2), 2)\n2×2 Array{Float64,2}:\n 5.0   7.0\n 7.0  10.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.momentnc-Union{Tuple{T}, Tuple{Array{T,2},Int64}, Tuple{Array{T,2},Int64,Int64}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Cumulants.momentnc",
    "category": "method",
    "text": "momentnc(X::Matrix}, m::Int, b::Int)\n\nReturns: SymmetricTensor{Float, m}, a tensor of the m\'th moment of X, where b is a block size. Uses multicore parallel implementation via pmap()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.outerprodcum-Union{Tuple{T}, Tuple{Int64,Int64,Vararg{SymmetricTensor{T,N} where N,N} where N}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Cumulants.outerprodcum",
    "category": "method",
    "text": "outerprodcum(retd::Int, npart::Int, cum::SymmetricTensor...; exclpartlen::Int = 1)\n\nReturns retd dims outer products of npart cumulants in SymmetricTensor form. exclpartlen is a length of partitions to be excluded in calculations, in this algorithm exclpartlen = 1\n\njulia> cum = SymmetricTensor([1.0 2.0 3.0; 2.0 4.0 6.0; 3.0 6.0 5.0]);\n\njulia> outerprodcum(4,2,cum, cum)\nSymmetricTensors.SymmetricTensor{Float64,4}(Union{Array{Float64,4}, Void}[[3.0 6.0; 6.0 12.0]\n\n[6.0 12.0; 12.0 24.0]\n\n[6.0 12.0; 12.0 24.0]\n\n[12.0 24.0; 24.0 48.0] nothing; nothing nothing]\n\nUnion{Array{Float64,4}, Void}[nothing nothing; nothing nothing]\n\nUnion{Array{Float64,4}, Void}[[9.0 18.0; 18.0 36.0]\n\n[18.0 36.0; 36.0 72.0] nothing; nothing nothing]\n\nUnion{Array{Float64,4}, Void}[[23.0 46.0; 46.0 92.0] [45.0; 90.0]; nothing [75.0]], 2, 2, 3, false)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.outprodblocks-Union{Tuple{T}, Tuple{IndexPart,Array{Array{T,N} where N,1}}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Cumulants.outprodblocks",
    "category": "method",
    "text": "outprodblocks(n::Int, part::Vector{Vector{Int}}, blocks::Vector{Array{T}}\n\nReturns: n dims Array of outer product of blocks, given partition of indices, part.\n\njulia> blocks = 2-element Array{Array{Float64,N},1}[[1.0 2.0; 2.0 4.0], [1.0 2.0; 2.0 4.0]];\n\njulia> outprodblocks(IndexPart(Array{Int64,1}[[1,2],[3,4]],[2,2],4,2), blocks)\n\n2×2×2×2 Array{Float64,4}:\n[:, :, 1, 1] =\n 1.0  2.0\n 2.0  4.0\n\n[:, :, 2, 1] =\n 2.0  4.0\n 4.0  8.0\n\n[:, :, 1, 2] =\n 2.0  4.0\n 4.0  8.0\n\n[:, :, 2, 2] =\n 4.0   8.0\n 8.0  16.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cumulants.usebl-Tuple{Tuple,Int64,Int64,Int64}",
    "page": "Docstrings",
    "title": "Cumulants.usebl",
    "category": "method",
    "text": "usebl(bind::Tuple, n::Int, b::Int, nbar::Int)\n\nReturns: Tuple{Int}, sizes of the last block\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Cumulants]\nOrder = [:type, :function]"
},

]}
