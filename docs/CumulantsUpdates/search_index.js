var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: DOI) (Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "#CumulantsUpdates.jl-1",
    "page": "Readme",
    "title": "CumulantsUpdates.jl",
    "category": "section",
    "text": "Updates following statistics of n-variate datad\'th moment tensor,\nan array of moment tensors of order 1,2,...,d.Given t realisations of n-variate data: X ∈ ℜᵗˣⁿ, and the update X + ∈ ℜᵘˣⁿ returns array of updated cumulant tensors of order 1,2,...,d.To store symmetric tensors uses a SymmetricTensors type, requires SymmetricTensors.jl. To convert to array, run:julia> Array(st::SymmetricTensors{T, d})to convert back, run:julia>  SymmetricTensor(a::Array{T,d})Requires Cumulants.jl.As of 01/01/2017 kdomino is the lead maintainer of this package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia, runpkg> add CumulantsUpdatesto install the files. Julia 0.7 or later is required."
},

{
    "location": "#Parallel-computation-1",
    "page": "Readme",
    "title": "Parallel computation",
    "category": "section",
    "text": "For parallel computation just runjulia> addprocs(n)\njulia> @everywhere using CumulantsUpdates"
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": ""
},

{
    "location": "#Data-update-1",
    "page": "Readme",
    "title": "Data update",
    "category": "section",
    "text": "To update data X ∈ ℜᵗˣⁿ by the update X+ ∈ ℜᵘˣⁿ in the observation window of size t and get ℜᵗˣⁿ ∋ X\' = vcat(X,X+)[1+u:end, :] run:julia> dataupdat(X::Matrix{T}, Xplus::Matrix{T}) where T<:AbstractFloatthe condition u < t must be fulfilled.julia> a = ones(4,4)\n4×4 Array{Float64,2}:\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n\njulia> b = zeros(2,4)\n2×4 Array{Float64,2}:\n 0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0\n\njulia> dataupdat(a,b)\n4×4 Array{Float64,2}:\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n 0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0"
},

{
    "location": "#Moment-update-1",
    "page": "Readme",
    "title": "Moment update",
    "category": "section",
    "text": "To update the moment tensor M::SymmetricTensor{T, d} for  data X ∈ ℜᵗˣⁿ, given the update X+ ∈ ℜᵘˣⁿ where u < t runjulia> momentupdat(M::SymmetricTensor{T, d}, X::Matrix{T}, Xplus::Matrix{T}) where {T<:AbstractFloat, d}Returns a SymmetricTensor{T, d} of the moment tensor of updated multivariate data: ℜᵗˣⁿ ∈ X\' = dataupdat(X,X+), i.e.: M = moment(X, d), momentupdat(M, X, X+) = moment(X\', d). If u ≪ t momentupdat() is much faster than a recalculation.julia> x = ones(6, 2);\n\njulia> SymmetricTensor{Float64,3}(Union{Nothing, Array{Float64,3}}[[1.0 1.0; 1.0 1.0]\n\n[1.0 1.0; 1.0 1.0]], 2, 1, 2, true)\n\n\njulia> y = 2*ones(2,2);\n\njulia> momentupdat(m, x, y)\nSymmetricTensor{Float64,3}(Union{Nothing, Array{Float64,3}}[[3.33333 3.33333; 3.33333 3.33333]\n\n[3.33333 3.33333; 3.33333 3.33333]], 2, 1, 2, true)\nFunction momentarray(X, d) can be used to compute an array of moments of order 1, ..., d of data X ∈ ℜᵗˣⁿjulia> momentarray(X::Matrix{T}, d::Int, b::Int) where {T<:AbstractFloat, d}b - is a SymmetricTensor parameter, a block size.One can update an array of moments by calling:julia> momentupdat(M::Array{SymmetricTensor{T, d}}, X::Matrix{T}, Xplus::Matrix{T}) where {T<:AbstractFloat, d}Returns an Array{SymmetricTensor{T, d}} of moment tensors of order 1, ..., d of updated multivariate data: ℜᵗˣⁿ ∋ X\' = dataupdat(X,X+), i.e. Mₐᵣ = momentarray(X, d), momentupdat(Mₐᵣ, X, X+) = momentarray(X\', d). "
},

{
    "location": "#Cumulants-update-1",
    "page": "Readme",
    "title": "Cumulants update",
    "category": "section",
    "text": "Presented functions are design for sequent update of multivariate cumulant tensors. Hence it can be applied in a data streaming scheme. Suppose one has data X ∈ ℜᵗˣⁿ and subsequent coming updates X+ ∈ ℜᵘˣⁿ such that u ≪ t. Suppose one want to compute cumulant tensors in an observation window of size t each time the update comes. To store data amd moments we use the following structure mutable struct DataMoments{T <: AbstractFloat} with following fields: X - data, d - maximal order of a moment series, b - a block size, M - moment series. To initialise, we can use the following constructor:julia> DataMoments(X::Matrix{T}, d::Int, b::Int) where T <: AbstractFloathere an array of moments will be computed. To update a DataMoments structure and compute updated cumulants run:\njulia> cumulantsupdate!(dm::DataMoments{T}, Xplus::Matrix{T}) where T <: AbstractFloat\nThe function updates a DataMoment structure and returns a series of cumulants of order 1, ..., dm.d for updated data. See:\njulia> x = ones(10,2);\n\njulia> s = DataMoments(x, 4, 2);\n\njulia> y = zeros(4,2);\n\njulia> cumulantsupdate!(s,y)[4]\nSymmetricTensor{Float64,4}(Union{Nothing, Array{Float64,4}}[[-0.1056 -0.1056; -0.1056 -0.1056]\n\n[-0.1056 -0.1056; -0.1056 -0.1056]\n\n[-0.1056 -0.1056; -0.1056 -0.1056]\n\n[-0.1056 -0.1056; -0.1056 -0.1056]], 2, 1, 2, true)\n                 To save the DataMoments structure use:\njulia> savedm(dm::DataMoments, dir::String)To load it use\njulia> loaddm(dir::String)returns a DataMoments structure stored in a given directory."
},

{
    "location": "#The-p-norm-1",
    "page": "Readme",
    "title": "The p-norm",
    "category": "section",
    "text": "julia> norm(st::SymmetricTensor{T, d}, p::Union{Float64, Int}) where {T<:AbstractFloat, d}Returns a p-norm of the tensor stored as SymmetricTensors, supported for k ≠ 0. The output of norm(st, p) = norn(convert(Array, st),p). However norm(st::SymmetricTensor, p) uses the block structure implemented in SymmetricTensors, hence is faster and decreases the computer memory requirement.julia> te = [-0.112639 0.124715 0.124715 0.268717 0.124715 0.268717 0.268717 0.046154];\n\njulia> st = SymmetricTensor(reshape(te, (2,2,2)));\n\njulia> norm(st)\n0.5273572868359742\n\njulia> norm(st, 2.5)\n0.4468668679541424\n\njulia> norm(st, 1)\n1.339089"
},

{
    "location": "#Convert-cumulants-to-moments-and-moments-to-cumulants-1",
    "page": "Readme",
    "title": "Convert cumulants to moments and moments to cumulants",
    "category": "section",
    "text": "Given M a vector of moments of order 1, ..., d to change it to a vector of cumulants of order 1, ..., d usingjulia> function moms2cums!(M::Vector{SymmetricTensor{T}}) where T <: AbstractFloatOne can convert a vector of cumulants c to a vector of moments by runningjulia> function cums2moms(c::Vector{SymmetricTensor{T}}) where T <: AbstractFloat\njulia> m = momentarray(ones(20,3), 3, 2)\n3-element Array{SymmetricTensor{Float64,N} where N,1}:\n SymmetricTensor{Float64,1}(Union{Nothing, Array{Float64,1}}[[1.0, 1.0], [1.0]], 2, 2, 3, false)                                                                                                                              \n SymmetricTensor{Float64,2}(Union{Nothing, Array{Float64,2}}[[1.0 1.0; 1.0 1.0] [1.0; 1.0]; nothing [1.0]], 2, 2, 3, false)                                                                                                   \n SymmetricTensor{Float64,3}(Union{Nothing, Array{Float64,3}}[[1.0 1.0; 1.0 1.0]\n[1.0 1.0; 1.0 1.0] nothing; nothing nothing]\nUnion{Nothing, Array{Float64,3}}[[1.0 1.0; 1.0 1.0] [1.0; 1.0]; nothing [1.0]], 2, 2, 3, false)\n\n\njulia> moms2cums!(m)\n\njulia> m\n3-element Array{SymmetricTensor{Float64,N} where N,1}:\n SymmetricTensor{Float64,1}(Union{Nothing, Array{Float64,1}}[[1.0, 1.0], [1.0]], 2, 2, 3, false)                                                                                                                          \n SymmetricTensor{Float64,2}(Union{Nothing, Array{Float64,2}}[[0.0 0.0; 0.0 0.0] [0.0; 0.0]; #undef [0.0]], 2, 2, 3, false)                                                                                                \n SymmetricTensor{Float64,3}(Union{Nothing, Array{Float64,3}}[[0.0 0.0; 0.0 0.0]\n[0.0 0.0; 0.0 0.0] #undef; #undef #undef]\nUnion{Nothing, Array{Float64,3}}[[0.0 0.0; 0.0 0.0] [0.0; 0.0]; #undef [0.0]], 2, 2, 3, false)\n\n\njulia> cums2moms(m)\n3-element Array{SymmetricTensor{Float64,N} where N,1}:\n SymmetricTensor{Float64,1}(Union{Nothing, Array{Float64,1}}[[1.0, 1.0], [1.0]], 2, 2, 3, false)                                                                                                                          \n SymmetricTensor{Float64,2}(Union{Nothing, Array{Float64,2}}[[1.0 1.0; 1.0 1.0] [1.0; 1.0]; #undef [1.0]], 2, 2, 3, false)                                                                                                \n SymmetricTensor{Float64,3}(Union{Nothing, Array{Float64,3}}[[1.0 1.0; 1.0 1.0]\n[1.0 1.0; 1.0 1.0] #undef; #undef #undef]\nUnion{Nothing, Array{Float64,3}}[[1.0 1.0; 1.0 1.0] [1.0; 1.0]; #undef [1.0]], 2, 2, 3, false)\n\n\n"
},

{
    "location": "#Performance-tests-1",
    "page": "Readme",
    "title": "Performance tests",
    "category": "section",
    "text": "To analyse the computational time of cumulants updates vs Cumulants.jl recalculation, we supply the executable script comptimes.jl. The script saves computational times to the res/*.jld file. The scripts accept following parameters:-d (Int): cumulant\'s maximum order, by default d = 4,\n-n (vararg Int): numbers of marginal variables, by default n = 40,\n-t (Int): number of realisations of random variable, by default t = 500000,\n-u (vararg Int): number of realisations of update, by default u = 10000, 15000, 20000,\n-b (Int): blocks size, by default b = 4,\n-p (Int): numbers of processes, by default p = 3.To analyse the computational time of cumulants updates for different block sizes 1 < b ≤ Int(√n)+2, we supply the executable script comptimesblocks.jl. The script saves computational times to the res/*.jld file. The scripts accept following parameters:-d (Int): cumulant\'s order, by default d = 4,\n-n (Int): numbers of marginal variables, by default n = 48,\n-u (vararg Int): number of realisations of the update, by default u = 10000, 20000.\n-p (Int): numbers of processes, by default p = 3.To analyse the computational time of cumulants updates for different number of workers, we supply the executable script comptimesprocs.jl. The script saves computational times to the res/*.jld file. The scripts accept following parameters:-d (Int): cumulant\'s order, by default d = 4,\n-n (Int): numbers of marginal variables, by default n = 48,\n-u (vararg Int): number of realisations of the update, by default u = 10000, 20000,\n-b (Int): blocks size, by default b = 4,\n-p (Int): maximal numbers of processes, by default p = 6.To plot computational times run executable res/plotcomptimes.jl on chosen *.jld file."
},

{
    "location": "#Citing-this-work-1",
    "page": "Readme",
    "title": "Citing this work",
    "category": "section",
    "text": "Krzysztof Domino, Piotr Gawron, Sliding window high order cumulant tensors calculation algorithm, arXiv:1701.06446This project was partially financed by the National Science Centre, Poland – project number 2014/15/B/ST6/05204."
},

{
    "location": "autodocs/#CumulantsUpdates.DataMoments",
    "page": "Docstrings",
    "title": "CumulantsUpdates.DataMoments",
    "category": "type",
    "text": "mutable struct DataMoments{T <: AbstractFloat}\n\nstructure that stores data (X), array of moments (M) and parameters: d - maximal moment order b - a size of a block\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsUpdates.DataMoments-Union{Tuple{T}, Tuple{Array{T,2},Int64,Int64}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsUpdates.DataMoments",
    "category": "method",
    "text": "DataMoments(X, d, b)\n\na constructor, claculates an Array of moments given data and parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsUpdates.cums2moms-Union{Tuple{Array{SymmetricTensor{T,N} where N,1}}, Tuple{T}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsUpdates.cums2moms",
    "category": "method",
    "text": "cums2moms(cum::Vector{SymmetricTensor})\n\nReturns vector of Symmetric Tensors of moments given vector of Symmetric Tensors of cumulants\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsUpdates.cumulantsupdate!-Union{Tuple{T}, Tuple{DataMoments{T},Array{T,2}}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsUpdates.cumulantsupdate!",
    "category": "method",
    "text": "function cumulantsupdate!(dm::DataMoments{T}, Xplus::Matrix{T}) where T <: AbstractFloat\n\nupdates the DataMoments structure in a sliding window, given an updat Xplus and returns cumululants of updated data.\n\n\njulia> x = ones(10,2);\n\njulia> s = DataMoments(x, 4, 2);\n\njulia> y = zeros(4,2);\n\njulia> cumulantsupdate!(s,y)[4]\nSymmetricTensors{Float64,4}(Union{Array{Float64,4}, Void}[[0.0064 0.0064; 0.0064 0.0064]\n\n[0.0064 0.0064; 0.0064 0.0064]\n\n[0.0064 0.0064; 0.0064 0.0064]\n\n[0.0064 0.0064; 0.0064 0.0064]], 2, 1, 2, true)\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsUpdates.dataupdat-Union{Tuple{T}, Tuple{Array{T,2},Array{T,2}}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsUpdates.dataupdat",
    "category": "method",
    "text": "dataupdat(X::Matrix{T}, Xplus::Matrix{T}) where T<:AbstractFloat\n\nReturns Matrix{Float} of size(X), first u = size(Xup, 1) rows of X are removed and at the end the updat Xplus is appended.\n\n\njulia> a = ones(4,4);\n\njulia> b = zeros(2,4);\n\njulia> dataupdat(a,b)\n4×4 Array{Float64,2}:\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n 0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsUpdates.loaddm-Tuple{String}",
    "page": "Docstrings",
    "title": "CumulantsUpdates.loaddm",
    "category": "method",
    "text": "loaddm(str::String)\n\nloads a DataMoment structure from a given direcory\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsUpdates.momentarray-Union{Tuple{Array{T,2}}, Tuple{T}, Tuple{Array{T,2},Int64}, Tuple{Array{T,2},Int64,Int64}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsUpdates.momentarray",
    "category": "method",
    "text": "momentarray(X::Matrix{Float}, m::Int, b::Int)\n\nReturns an array of Symmetric Tensors of moments given data and maximum moment order - d\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsUpdates.momentupdat-Union{Tuple{T}, Tuple{Array{SymmetricTensor{T,N} where N,1},Array{T,2},Array{T,2}}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsUpdates.momentupdat",
    "category": "method",
    "text": "momentupdat(M::Vector{SymmetricTensor{T}}, X::Matrix{T}, Xplus::Matrix{T})\n\nReturns Vector{SymmetricTensor} of updated moments\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsUpdates.momentupdat-Union{Tuple{d}, Tuple{T}, Tuple{SymmetricTensor{T,d},Array{T,2},Array{T,2}}} where d where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsUpdates.momentupdat",
    "category": "method",
    "text": "momentupdat(M::SymmetricTensor{Float, N}, X::Matrix, Xplus::Matrix)\n\nReturns SymmetricTensor{Float, N} updated moment, given original moment, original data and update of data - dataup\n\njulia> x = ones(6, 2);\n\njulia> m = moment(x, 3);\n\njulia> y = 2*ones(2,2);\n\njulia> momentupdat(m, x, y)\nSymmetricTensors.SymmetricTensor{Float64,3}(Union{Array{Float64,3}, Void}[[3.33333 3.33333; 3.33333 3.33333]\n[3.33333 3.33333; 3.33333 3.33333]], 2, 1, 2, true)\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsUpdates.moms2cums!-Union{Tuple{Array{SymmetricTensor{T,N} where N,1}}, Tuple{T}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsUpdates.moms2cums!",
    "category": "method",
    "text": "moms2cums!(M::Vector{SymmetricTensor})\n\nChanges vector of Symmetric Tensors of moments to vector of Symmetric Tensors of cumulants\n\n\njulia> m = momentarray(ones(20,3), 3);\n\njulia> moms2cums!(m)\n\njulia> m[3]\n\nSymmetricTensors.SymmetricTensor{Float64,3}(Union{Array{Float64,3}, Void}[[0.0 0.0; 0.0 0.0]\n[0.0 0.0; 0.0 0.0] #undef; #undef #undef]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsUpdates.savedm-Tuple{DataMoments,String}",
    "page": "Docstrings",
    "title": "CumulantsUpdates.savedm",
    "category": "method",
    "text": "savedm(dm::DataMoments, str::String)\n\nsaves a DataMoment structure at a given direcory\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.norm-Union{Tuple{SymmetricTensor{T,m}}, Tuple{m}, Tuple{T}, Tuple{SymmetricTensor{T,m},Union{Float64, Int64}}} where m where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "LinearAlgebra.norm",
    "category": "method",
    "text": "norm(bt::SymmetricTensor{T, m}, p::Union{Float64, Int}=2) where {T<:AbstractFloat, m}\n\nReturns Float, a p-norm of bt, supported for p ≠ 0\n\n\njulia> te = [-0.112639 0.124715 0.124715 0.268717 0.124715 0.268717 0.268717 0.046154];\n\njulia> st = convert(SymmetricTensor, (reshape(te, (2,2,2))));\n\njulia> norm(st)\n0.5273572868359742\n\njulia> norm(st, 2.5)\n0.4468668679541424\n\njulia> norm(st, 1)\n1.339089\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsUpdates.cnorms-Union{Tuple{Array{SymmetricTensor{T,N} where N,1}}, Tuple{T}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsUpdates.cnorms",
    "category": "method",
    "text": "cnorms(c::Vector{SymmetricTensor{T}})\n\nReturns vector of Floats of norms of cumulants of order 3, ..., k , ..., m, normalsed by √||C₂||ᵏ .....\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsUpdates.rep-Tuple{Tuple}",
    "page": "Docstrings",
    "title": "CumulantsUpdates.rep",
    "category": "method",
    "text": "rep(ind::Tuple)\n\naxiliary for cnorm count how many times a block should be counted\n\njulia> rep((1,2,3))\n6\n\njulia> rep((1,2,2))\n3\n\njulia> rep((1,1,1))\n1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CumulantsUpdates]\nOrder = [:type, :function]"
},

]}
