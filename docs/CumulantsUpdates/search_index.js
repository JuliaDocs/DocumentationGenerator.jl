var documenterSearchIndex = {"docs": [

{
    "location": "#CumulantsUpdates.DataMoments",
    "page": "Home",
    "title": "CumulantsUpdates.DataMoments",
    "category": "type",
    "text": "mutable struct DataMoments{T <: AbstractFloat}\n\nstructure that stores data (X), array of moments (M) and parameters: d - maximal moment order b - a size of a block\n\n\n\n\n\n"
},

{
    "location": "#CumulantsUpdates.DataMoments-Union{Tuple{T}, Tuple{Array{T,2},Int64,Int64}} where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsUpdates.DataMoments",
    "category": "method",
    "text": "DataMoments(X, d, b)\n\na constructor, claculates an Array of moments given data and parameters\n\n\n\n\n\n"
},

{
    "location": "#CumulantsUpdates.cums2moms-Union{Tuple{Array{SymmetricTensor{T,N} where N,1}}, Tuple{T}} where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsUpdates.cums2moms",
    "category": "method",
    "text": "cums2moms(cum::Vector{SymmetricTensor})\n\nReturns vector of Symmetric Tensors of moments given vector of Symmetric Tensors of cumulants\n\n\n\n\n\n"
},

{
    "location": "#CumulantsUpdates.cumulantsupdate!-Union{Tuple{T}, Tuple{DataMoments{T},Array{T,2}}} where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsUpdates.cumulantsupdate!",
    "category": "method",
    "text": "function cumulantsupdate!(dm::DataMoments{T}, Xplus::Matrix{T}) where T <: AbstractFloat\n\nupdates the DataMoments structure in a sliding window, given an updat Xplus and returns cumululants of updated data.\n\n\njulia> x = ones(10,2);\n\njulia> s = DataMoments(x, 4, 2);\n\njulia> y = zeros(4,2);\n\njulia> cumulantsupdate!(s,y)[4]\nSymmetricTensors{Float64,4}(Union{Array{Float64,4}, Void}[[0.0064 0.0064; 0.0064 0.0064]\n\n[0.0064 0.0064; 0.0064 0.0064]\n\n[0.0064 0.0064; 0.0064 0.0064]\n\n[0.0064 0.0064; 0.0064 0.0064]], 2, 1, 2, true)\n\n\n\n\n\n\n"
},

{
    "location": "#CumulantsUpdates.dataupdat-Union{Tuple{T}, Tuple{Array{T,2},Array{T,2}}} where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsUpdates.dataupdat",
    "category": "method",
    "text": "dataupdat(X::Matrix{T}, Xplus::Matrix{T}) where T<:AbstractFloat\n\nReturns Matrix{Float} of size(X), first u = size(Xup, 1) rows of X are removed and at the end the updat Xplus is appended.\n\n\njulia> a = ones(4,4);\n\njulia> b = zeros(2,4);\n\njulia> dataupdat(a,b)\n4×4 Array{Float64,2}:\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n 0.0  0.0  0.0  0.0\n 0.0  0.0  0.0  0.0\n\n\n\n\n\n\n"
},

{
    "location": "#CumulantsUpdates.loaddm-Tuple{String}",
    "page": "Home",
    "title": "CumulantsUpdates.loaddm",
    "category": "method",
    "text": "loaddm(str::String)\n\nloads a DataMoment structure from a given direcory\n\n\n\n\n\n"
},

{
    "location": "#CumulantsUpdates.momentarray-Union{Tuple{Array{T,2}}, Tuple{T}, Tuple{Array{T,2},Int64}, Tuple{Array{T,2},Int64,Int64}} where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsUpdates.momentarray",
    "category": "method",
    "text": "momentarray(X::Matrix{Float}, m::Int, b::Int)\n\nReturns an array of Symmetric Tensors of moments given data and maximum moment order - d\n\n\n\n\n\n"
},

{
    "location": "#CumulantsUpdates.momentupdat-Union{Tuple{T}, Tuple{Array{SymmetricTensor{T,N} where N,1},Array{T,2},Array{T,2}}} where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsUpdates.momentupdat",
    "category": "method",
    "text": "momentupdat(M::Vector{SymmetricTensor{T}}, X::Matrix{T}, Xplus::Matrix{T})\n\nReturns Vector{SymmetricTensor} of updated moments\n\n\n\n\n\n"
},

{
    "location": "#CumulantsUpdates.momentupdat-Union{Tuple{d}, Tuple{T}, Tuple{SymmetricTensor{T,d},Array{T,2},Array{T,2}}} where d where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsUpdates.momentupdat",
    "category": "method",
    "text": "momentupdat(M::SymmetricTensor{Float, N}, X::Matrix, Xplus::Matrix)\n\nReturns SymmetricTensor{Float, N} updated moment, given original moment, original data and update of data - dataup\n\njulia> x = ones(6, 2);\n\njulia> m = moment(x, 3);\n\njulia> y = 2*ones(2,2);\n\njulia> momentupdat(m, x, y)\nSymmetricTensors.SymmetricTensor{Float64,3}(Union{Array{Float64,3}, Void}[[3.33333 3.33333; 3.33333 3.33333]\n[3.33333 3.33333; 3.33333 3.33333]], 2, 1, 2, true)\n\n\n\n\n\n\n"
},

{
    "location": "#CumulantsUpdates.moms2cums!-Union{Tuple{Array{SymmetricTensor{T,N} where N,1}}, Tuple{T}} where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsUpdates.moms2cums!",
    "category": "method",
    "text": "moms2cums!(M::Vector{SymmetricTensor})\n\nChanges vector of Symmetric Tensors of moments to vector of Symmetric Tensors of cumulants\n\n\njulia> m = momentarray(ones(20,3), 3);\n\njulia> moms2cums!(m)\n\njulia> m[3]\n\nSymmetricTensors.SymmetricTensor{Float64,3}(Union{Array{Float64,3}, Void}[[0.0 0.0; 0.0 0.0]\n[0.0 0.0; 0.0 0.0] #undef; #undef #undef]\n\n\n\n\n\n"
},

{
    "location": "#CumulantsUpdates.savedm-Tuple{DataMoments,String}",
    "page": "Home",
    "title": "CumulantsUpdates.savedm",
    "category": "method",
    "text": "savedm(dm::DataMoments, str::String)\n\nsaves a DataMoment structure at a given direcory\n\n\n\n\n\n"
},

{
    "location": "#LinearAlgebra.norm-Union{Tuple{SymmetricTensor{T,m}}, Tuple{m}, Tuple{T}, Tuple{SymmetricTensor{T,m},Union{Float64, Int64}}} where m where T<:AbstractFloat",
    "page": "Home",
    "title": "LinearAlgebra.norm",
    "category": "method",
    "text": "norm(bt::SymmetricTensor{T, m}, p::Union{Float64, Int}=2) where {T<:AbstractFloat, m}\n\nReturns Float, a p-norm of bt, supported for p ≠ 0\n\n\njulia> te = [-0.112639 0.124715 0.124715 0.268717 0.124715 0.268717 0.268717 0.046154];\n\njulia> st = convert(SymmetricTensor, (reshape(te, (2,2,2))));\n\njulia> norm(st)\n0.5273572868359742\n\njulia> norm(st, 2.5)\n0.4468668679541424\n\njulia> norm(st, 1)\n1.339089\n\n\n\n\n\n"
},

{
    "location": "#CumulantsUpdates.cnorms-Union{Tuple{Array{SymmetricTensor{T,N} where N,1}}, Tuple{T}} where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsUpdates.cnorms",
    "category": "method",
    "text": "cnorms(c::Vector{SymmetricTensor{T}})\n\nReturns vector of Floats of norms of cumulants of order 3, ..., k , ..., m, normalsed by √||C₂||ᵏ .....\n\n\n\n\n\n"
},

{
    "location": "#CumulantsUpdates.rep-Tuple{Tuple}",
    "page": "Home",
    "title": "CumulantsUpdates.rep",
    "category": "method",
    "text": "rep(ind::Tuple)\n\naxiliary for cnorm count how many times a block should be counted\n\njulia> rep((1,2,3))\n6\n\njulia> rep((1,2,2))\n3\n\njulia> rep((1,1,1))\n1\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CumulantsUpdates]\nOrder = [:type, :function]"
},

]}
