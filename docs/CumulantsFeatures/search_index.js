var documenterSearchIndex = {"docs": [

{
    "location": "#CumulantsFeatures.cumfsel-Union{Tuple{N}, Tuple{T}, Tuple{SymmetricTensor{T,2},SymmetricTensor{T,N},String}, Tuple{SymmetricTensor{T,2},SymmetricTensor{T,N},String,Int64}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsFeatures.cumfsel",
    "category": "method",
    "text": "function cumfsel(Σ::SymmetricTensor{T,2}, c::SymmetricTensor{T, N}, f::String, k::Int = Σ.dats) where {T <: AbstractFloat, N}\n\nReturns an Array of tuples (ind::Array{Bool}, fval::Float64, i::Int). Given k-th Array ind are marginals removed after k -steps as those with low N\'th order dependency, fval, the value of the target function at step k and i, a feature removed at step k.\n\nUses Σ - the covariance matrix and c - the N\'th cumulant tensor to measure the N\'th order dependencies between marginals. Function f is the optimization function, [\"hosvd\", \"norm\", \"mev\"] are supported.\n\n\njulia> srand(42);\n\njulia> x = rand(12,10);\n\njulia> c = cumulants(x, 4);\n\njulia> cumfsel(c[2], c[4], \"hosvd\")\n10-element Array{Any,1}:\n (Bool[true, true, true, false, true, true, true, true, true, true], 27.2519, 4)\n (Bool[true, true, false, false, true, true, true, true, true, true], 22.6659, 3)\n (Bool[true, true, false, false, false, true, true, true, true, true], 18.1387, 5)\n (Bool[false, true, false, false, false, true, true, true, true, true], 14.4492, 1)\n (Bool[false, true, false, false, false, true, true, false, true, true], 11.2086, 8)\n (Bool[false, true, false, false, false, true, true, false, true, false], 7.84083, 10)\n (Bool[false, false, false, false, false, true, true, false, true, false], 5.15192, 2)\n (Bool[false, false, false, false, false, false, true, false, true, false], 2.56748, 6)\n (Bool[false, false, false, false, false, false, true, false, false, false], 0.30936, 9)\n (Bool[false, false, false, false, false, false, false, false, false, false], 0.0, 7)\n\n\n\n\n\n"
},

{
    "location": "#CumulantsFeatures.cumfsel-Union{Tuple{SymmetricTensor{T,2}}, Tuple{T}, Tuple{SymmetricTensor{T,2},Int64}} where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsFeatures.cumfsel",
    "category": "method",
    "text": "cumfsel(Σ::Matrix{T}, k::Int = size(Σ, 1))\n\ncumfsel that uses as default the mev method\n\n\n\n\n\n"
},

{
    "location": "#CumulantsFeatures.hosvdc4detect-Union{Tuple{Array{T,2}}, Tuple{T}, Tuple{Array{T,2},Float64}, Tuple{Array{T,2},Float64,Int64}} where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsFeatures.hosvdc4detect",
    "category": "method",
    "text": "function hosvdc4detect(X::Matrix{T}, β::Float64 = 4.1, r::Int = 3; b::Int = 4)\n\nTakes data in the form of matrix where first index correspond to realisations and second to feratures (marginals). Using the HOSVD of the 4\'th cumulant\'s tensor of data returns the array of Bool that correspond to outlier realisations. β is the sensitivity parameter while r a number of specific directions, data are projected onto. Parameter b is a size of blocks in a SymmetricTensors structure\n\njulia> srand(42);\n\njulia> x = vcat(rand(8,2), 20*rand(2,2))\n10×2 Array{Float64,2}:\n  0.533183    0.956916\n  0.454029    0.584284\n  0.0176868   0.937466\n  0.172933    0.160006\n  0.958926    0.422956\n  0.973566    0.602298\n  0.30387     0.363458\n  0.176909    0.383491\n 11.8582      5.25618\n 14.9036     10.059\n\njulia> rxdetect(x, 0.95)\n10-element Array{Bool,1}:\n false\n false\n false\n false\n false\n false\n false\n false\n  true\n  true\n\n\n\n\n\n"
},

{
    "location": "#CumulantsFeatures.rxdetect-Union{Tuple{Array{T,2}}, Tuple{T}, Tuple{Array{T,2},Float64}} where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsFeatures.rxdetect",
    "category": "method",
    "text": "function rxdetect(X::Matrix{T}, alpha::Float64 = 0.99)\n\nTakes data in the form of matrix where first index correspond to realisations and second to feratures (marginals). Using the RX (Reed-Xiaoli) Anomaly Detection returns the array of Bool that correspond to outlier realisations. alpha is the sensitivity parameter of the RX detector\n\njulia> srand(42);\n\njulia> x = vcat(rand(8,2), 20*rand(2,2))\n10×2 Array{Float64,2}:\n  0.533183    0.956916\n  0.454029    0.584284\n  0.0176868   0.937466\n  0.172933    0.160006\n  0.958926    0.422956\n  0.973566    0.602298\n  0.30387     0.363458\n  0.176909    0.383491\n 11.8582      5.25618\n 14.9036     10.059\n\njulia> rxdetect(x, 0.95)\n10-element Array{Bool,1}:\n false\n false\n false\n false\n false\n false\n false\n false\n  true\n  true\n\n\n\n\n\n"
},

{
    "location": "#CumulantsFeatures.greedesearchdata-Union{Tuple{N}, Tuple{T}, Tuple{SymmetricTensor{T,2},SymmetricTensor{T,N},Function,Int64}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsFeatures.greedesearchdata",
    "category": "method",
    "text": "greedesearchdata(Σ::SymmetricTensor{T,2}, c::SymmetricTensor{T, N}, maxfunction::Function, k::Int)\n\nreturns array of bools that are non-outliers features\n\n\n\n\n\n"
},

{
    "location": "#CumulantsFeatures.greedestep-Union{Tuple{N}, Tuple{T}, Tuple{Array{T,2},Array{T,N},Function,Array{Bool,1}}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsFeatures.greedestep",
    "category": "method",
    "text": "greedestep(c::Vector{Array{Float}}, maxfunction::Function, ls::Vector{Bool})\n\nReturns vector of bools that determines bands that maximise a function. True means include a band, false exclude a band. It changes one true to false in input ls\n\njulia> a = reshape(collect(1.:9.), 3,3);\n\njulia> b = reshape(collect(1.: 27.), 3,3,3);\n\njulia> testf(ar,bool)= det(ar[1][bool,bool])\n\njulia> greedestep(ar, testf, [true, true, true])\n3-element Array{Bool,1}:\ntrue\ntrue\nfalse\n\n\n\n\n\n"
},

{
    "location": "#CumulantsFeatures.hosvdapprox-Union{Tuple{N}, Tuple{T}, Tuple{Array{T,2},Array{T,N}}, Tuple{Array{T,2},Array{T,N},Array{Bool,1}}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsFeatures.hosvdapprox",
    "category": "method",
    "text": "detoverdetfitfunction(a::Array{N}, b::Array{N})\n\ncomputes the maximizing function det(Cn)/det(C2)^(n/2). It assumes, that product of singular values from HOSVD of tensor is a good approximation of hyperdeterminant of the tensor (whatever that means). Returns the value of the maximizin function\n\n\n\n\n\n"
},

{
    "location": "#CumulantsFeatures.hosvdstep-Union{Tuple{T}, Tuple{Array{T,2},Array{Bool,1},Float64,Int64,SymmetricTensor{T,4}}} where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsFeatures.hosvdstep",
    "category": "method",
    "text": "hosvdstep(X::Matrix{T}, ls::Vector{Bool}, β::Float64, r::Int, cc::SymmetricTensor{T,4}) where T <: AbstractFloat\n\nReturns Vector{Bool} - outliers form an itteration step of th hosvd algorithm and Vector{Float64} vector of univariate kurtosis for data projected on specific directions\n\n\n\n\n\n"
},

{
    "location": "#CumulantsFeatures.reduceband-Union{Tuple{N}, Tuple{T}, Tuple{Array{T,N},Array{Bool,1}}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsFeatures.reduceband",
    "category": "method",
    "text": "reduceband(ar::Array{N}, k::Vector{Bool})\n\nReturns n-array without values at indices in ind\n\njulia>  reshape(collect(1.:27.),(3,3,3))\n3×3×3 Array{Float64,3}:\n[:, :, 1] =\n 1.0  4.0  7.0\n 2.0  5.0  8.0\n 3.0  6.0  9.0\n\n[:, :, 2] =\n 10.0  13.0  16.0\n 11.0  14.0  17.0\n 12.0  15.0  18.0\n\n[:, :, 3] =\n 19.0  22.0  25.0\n 20.0  23.0  26.0\n 21.0  24.0  27.0\n\njulia> reduceband(reshape(collect(1.:27.),(3,3,3)), [true, false, false])\n1×1×1 Array{Float64,3}:\n[:, :, 1] =\n 1.0\n\nTODO reimplement in blocks\n\n\n\n\n\n"
},

{
    "location": "#CumulantsFeatures.unfoldsym-Union{Tuple{Array{T,N}}, Tuple{N}, Tuple{T}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsFeatures.unfoldsym",
    "category": "method",
    "text": "function unfoldsym{T <: Real, N}(ar::Array{T,N})\n\nReturns a matrix of size (i, k^(N-1)) that is an unfold of symmetric array ar\n\n\n\n\n\n"
},

{
    "location": "#CumulantsFeatures.unfoldsym-Union{Tuple{SymmetricTensor{T,N}}, Tuple{N}, Tuple{T}} where N where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsFeatures.unfoldsym",
    "category": "method",
    "text": "TODO reimplement in blocks\n\n\n\n\n\n"
},

{
    "location": "#CumulantsFeatures.updatemoments-Union{Tuple{T}, Tuple{Array{SymmetricTensor{Float64,N} where N,1},Int64,Array{T,2},Array{Bool,1},Array{Bool,1}}} where T<:AbstractFloat",
    "page": "Home",
    "title": "CumulantsFeatures.updatemoments",
    "category": "method",
    "text": "updatemoments(ma::Vector{SymmetricTensor{Float64,N} where N}, t::Int, X::Matix{T}, ls::Vector{Bool}, lsold::Vector{Bool})\n\nReturns Array{SymmetricTensor} - an array of updated moments (after outliers removal)  and t - number of realisations of data after outliers removal\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CumulantsFeatures]\nOrder = [:type, :function]"
},

]}
