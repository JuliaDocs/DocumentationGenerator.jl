var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CumulantsFeatures.jl-1",
    "page": "Readme",
    "title": "CumulantsFeatures.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: DOI)CumulantsFeatures.jl provides multivariate cumulants based algorithms used to select a features subset or detect an outlier subset out of realisations of multivariate data. In both cases,the ordinary data subset is assumed to be modelled by the Gaussian multivariate distribution, while the outlier data subset is assumed to be modelled by the non-Gaussian multivariate distribution. The algorithms handles t realisations of n variate data presented in the form of t x n matrix of Floats. In the case of features selection one has to compute multivariate cumulants first using Cumulants.jl.As of 24/09/2018 @kdomino is the lead maintainer of this package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia, runpkg> add CumulantsFeaturesto install the files. Julia 0.7 or later is required. Requires SymmetricTensors Cumulants and CumulantsUpdates modules."
},

{
    "location": "#Features-selection-1",
    "page": "Readme",
    "title": "Features selection",
    "category": "section",
    "text": "Given the Σ- covariance matrix of data and c - the N-th cumulant\'s tensor select k marginals with low N\'th order dependencies by running:\njulia> function cumfsel(Σ::SymmetricTensor{T,2}, c::SymmetricTensor{T, N}, f::String, k::Int = Σ.dats) where {T <: AbstractFloat, N}\nTo compute the covariance matrix and N-th cumulant\'s tensor use Cumulants.jl Σ.dats is a size of the Σ matrix stored in the SymmetricTensor type, see SymmetricTensors.jl. The f is the optimization function, [\"hosvd\", \"norm\", \"mev\"] are supported. The \"hosvd\" uses the Higher Order Singular Value decomposition approximation of the higher order cumulant\'s tensor to extract information. While using \"hosvd\" we have the following family of methods. For N=3 the Joint Skewness Band Selection (JSBS) - see X. Geng, K. Sun, L. Ji, H. Tang & Y. Zhao \'Joint Skewness and Its Application in Unsupervised Band Selection for Small Target Detection Sci Rep. vol.5 (2015) https://www.nature.com/articles/srep09915. For N = 4 the Joint Kurtosis Features Selection (JKFS) - see K. Domino: \'The use of the Higher Order Singular Value Decomposition of the 4-cumulant\'s tensors in features selection and outlier detection\', arXiv:1804.00541 (2018). For N = 5 the Joint Hyper Kurtosis Features Selection (JHKFS). For application of HOSVD based methods see also P. Głomb, K. Domino, M. Romaszewski, M. Cholewa \'Band selection with Higher Order Multivariate Cumulants for small target detection in hyperspectral images\', arXiv:1808.03513 (2018). The \"norm\" uses the norm of the higher order cumulant\'s tensor, this is a benchmark method for comparison. The \"mev\" uses only second order correlations, see: C. Sheffield, \'Selecting band combinations from multispectral data\', Photogrammetric Engineering and Remote Sensing, vol. 51 (1985)\njulia> srand(42);\n\njulia> using Cumulants\n\njulia> using SymmetricTensors\n\njulia> x = rand(12,10);\n\njulia> c = cumulants(x, 4);\n\njulia> cumfsel(c[2], c[4], \"hosvd\")\n10-element Array{Any,1}:\n (Bool[true, true, true, false, true, true, true, true, true, true], 27.2519, 4)        \n (Bool[true, true, false, false, true, true, true, true, true, true], 22.6659, 3)       \n (Bool[true, true, false, false, false, true, true, true, true, true], 18.1387, 5)      \n (Bool[false, true, false, false, false, true, true, true, true, true], 14.4492, 1)     \n (Bool[false, true, false, false, false, true, true, false, true, true], 11.2086, 8)    \n (Bool[false, true, false, false, false, true, true, false, true, false], 7.84083, 10)  \n (Bool[false, false, false, false, false, true, true, false, true, false], 5.15192, 2)  \n (Bool[false, false, false, false, false, false, true, false, true, false], 2.56748, 6)\n (Bool[false, false, false, false, false, false, true, false, false, false], 0.30936, 9)\n (Bool[false, false, false, false, false, false, false, false, false, false], 0.0, 7)  \nReturns an Array of tuples (ind::Array{Bool}, fval::Float64, i::Int). First tuple corresponds to the marginal with lowest N\'th order dependencies with other marginals, while last tuple to the marginal with highest N\'th order dependencies. The k\'th array gives an outcome after k steps. Here ind shows k marginals that yields lowest N\'th order dependencies, fval the value of the target function at k\'th step and i numerates the marginal removed at step k.To limit number of steps (e.g. to 2) run:\njulia> cumfsel(Array(c[2]), Array(c[4]), \"hosvd\", 2)\n2-element Array{Any,1}:\n (Bool[true, true, true, false, true, true, true, true, true, true], 27.2519, 4)\n (Bool[true, true, false, false, true, true, true, true, true, true], 22.6659, 3)\nIf running\njulia> cumfsel(Σ::SymmetricTensor{T,2}, k::Int = Σ.dats)\nThe mev optimization function will be used."
},

{
    "location": "#Detection-1",
    "page": "Readme",
    "title": "Detection",
    "category": "section",
    "text": ""
},

{
    "location": "#RX-detector-1",
    "page": "Readme",
    "title": "RX detector",
    "category": "section",
    "text": "\n  rxdetect(X::Matrix{T}, α::Float64 = 0.99)\nTakes data X in the form of matrix where first index correspond to realisations and second to features (marginals). Using the RX (Reed-Xiaoli) Anomaly Detection returns the array of Bool that correspond to outlier realisations. α is the sensitivity (threshold) parameter of the RX detector.julia> srand(42);\n\njulia> x = vcat(rand(8,2), 20*rand(2,2))\n10×2 Array{Float64,2}:\n  0.533183    0.956916\n  0.454029    0.584284\n  0.0176868   0.937466\n  0.172933    0.160006\n  0.958926    0.422956\n  0.973566    0.602298\n  0.30387     0.363458\n  0.176909    0.383491\n 11.8582      5.25618\n 14.9036     10.059   \n\njulia> rxdetect(x, 0.95)\n10-element Array{Bool,1}:\n false\n false\n false\n false\n false\n false\n false\n false\n  true\n  true"
},

{
    "location": "#The-HOSVD-of-the-4\'th-cumulant-1",
    "page": "Readme",
    "title": "The HOSVD of the 4\'th cumulant",
    "category": "section",
    "text": "\n  function hosvdc4detect(X::Matrix{T}, β::Float64 = 4.1, r::Int = 3)\nTakes data in the form of matrix where first index correspond to realisations and second to features (marginals). Using the HOSVD of the 4\'th cumulant\'s tensor of data returns the array of Bool that correspond to outlier realisations. For the detector introduction see see K. Domino: \'The use of the Higher Order Singular Value Decomposition of the 4-cumulant\'s tensors in features selection and outlier detection\', arXiv:1804.00541 (2018). The parameter β is the sensitivity parameter while r a number of specific directions, data are projected onto.\njulia> srand(42);\n\njulia> x = vcat(rand(8,2), 20*rand(2,2))\n10×2 Array{Float64,2}:\n  0.533183    0.956916\n  0.454029    0.584284\n  0.0176868   0.937466\n  0.172933    0.160006\n  0.958926    0.422956\n  0.973566    0.602298\n  0.30387     0.363458\n  0.176909    0.383491\n 11.8582      5.25618\n 14.9036     10.059\n\njulia> rxdetect(x, 0.95)\n10-element Array{Bool,1}:\n false\n false\n false\n false\n false\n false\n false\n false\n  true\n  true"
},

{
    "location": "#Data-generation-and-tests-1",
    "page": "Readme",
    "title": "Data generation and tests",
    "category": "section",
    "text": "In folder tests there following Julia executable files."
},

{
    "location": "#Features-selection-2",
    "page": "Readme",
    "title": "Features selection",
    "category": "section",
    "text": "The executable file jkfs_select.jl generates multivariate data with non-Gaussian subset of marginals modelled by the t-Student copula. This file is parametrised by an integer being a number of degrees of freedom of the t-Student copula. Returns a .jld2 file with data in \\jkfsdata_select folder. Run jkfs_data_analysis.jl within, to achieve results of features selection given different methods."
},

{
    "location": "#Outlier-detection-1",
    "page": "Readme",
    "title": "Outlier detection",
    "category": "section",
    "text": "The executable file jkfs_outliers.jl generates multivariate data with non-Gaussian outliers subset of realisations modeled by the t-Student copula.  This file is parametrised by an integer being a number of degrees of freedom of the t-Student copula. Returns a .jld2 file with data in \\data_outliers folder. Run detect.jl within to detect outliers and compare the \"HOSVD\" based method with the \"RX\" detector."
},

{
    "location": "#Citing-this-work-1",
    "page": "Readme",
    "title": "Citing this work",
    "category": "section",
    "text": "This project was partially financed by the National Science Centre, Poland – project number 2014/15/B/ST6/05204.While using this module, please cite K. Domino: \'The use of the Higher Order Singular Value Decomposition of the 4-cumulant\'s tensors in features selection and outlier detection\', arXiv:1804.00541."
},

{
    "location": "autodocs/#CumulantsFeatures.cumfsel-Union{Tuple{N}, Tuple{T}, Tuple{SymmetricTensor{T,2},SymmetricTensor{T,N},String}, Tuple{SymmetricTensor{T,2},SymmetricTensor{T,N},String,Int64}} where N where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsFeatures.cumfsel",
    "category": "method",
    "text": "function cumfsel(Σ::SymmetricTensor{T,2}, c::SymmetricTensor{T, N}, f::String, k::Int = Σ.dats) where {T <: AbstractFloat, N}\n\nReturns an Array of tuples (ind::Array{Bool}, fval::Float64, i::Int). Given k-th Array ind are marginals removed after k -steps as those with low N\'th order dependency, fval, the value of the target function at step k and i, a feature removed at step k.\n\nUses Σ - the covariance matrix and c - the N\'th cumulant tensor to measure the N\'th order dependencies between marginals. Function f is the optimization function, [\"hosvd\", \"norm\", \"mev\"] are supported.\n\n\njulia> srand(42);\n\njulia> x = rand(12,10);\n\njulia> c = cumulants(x, 4);\n\njulia> cumfsel(c[2], c[4], \"hosvd\")\n10-element Array{Any,1}:\n (Bool[true, true, true, false, true, true, true, true, true, true], 27.2519, 4)\n (Bool[true, true, false, false, true, true, true, true, true, true], 22.6659, 3)\n (Bool[true, true, false, false, false, true, true, true, true, true], 18.1387, 5)\n (Bool[false, true, false, false, false, true, true, true, true, true], 14.4492, 1)\n (Bool[false, true, false, false, false, true, true, false, true, true], 11.2086, 8)\n (Bool[false, true, false, false, false, true, true, false, true, false], 7.84083, 10)\n (Bool[false, false, false, false, false, true, true, false, true, false], 5.15192, 2)\n (Bool[false, false, false, false, false, false, true, false, true, false], 2.56748, 6)\n (Bool[false, false, false, false, false, false, true, false, false, false], 0.30936, 9)\n (Bool[false, false, false, false, false, false, false, false, false, false], 0.0, 7)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsFeatures.cumfsel-Union{Tuple{SymmetricTensor{T,2}}, Tuple{T}, Tuple{SymmetricTensor{T,2},Int64}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsFeatures.cumfsel",
    "category": "method",
    "text": "cumfsel(Σ::Matrix{T}, k::Int = size(Σ, 1))\n\ncumfsel that uses as default the mev method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsFeatures.hosvdc4detect-Union{Tuple{Array{T,2}}, Tuple{T}, Tuple{Array{T,2},Float64}, Tuple{Array{T,2},Float64,Int64}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsFeatures.hosvdc4detect",
    "category": "method",
    "text": "function hosvdc4detect(X::Matrix{T}, β::Float64 = 4.1, r::Int = 3; b::Int = 4)\n\nTakes data in the form of matrix where first index correspond to realisations and second to feratures (marginals). Using the HOSVD of the 4\'th cumulant\'s tensor of data returns the array of Bool that correspond to outlier realisations. β is the sensitivity parameter while r a number of specific directions, data are projected onto. Parameter b is a size of blocks in a SymmetricTensors structure\n\njulia> srand(42);\n\njulia> x = vcat(rand(8,2), 20*rand(2,2))\n10×2 Array{Float64,2}:\n  0.533183    0.956916\n  0.454029    0.584284\n  0.0176868   0.937466\n  0.172933    0.160006\n  0.958926    0.422956\n  0.973566    0.602298\n  0.30387     0.363458\n  0.176909    0.383491\n 11.8582      5.25618\n 14.9036     10.059\n\njulia> rxdetect(x, 0.95)\n10-element Array{Bool,1}:\n false\n false\n false\n false\n false\n false\n false\n false\n  true\n  true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsFeatures.rxdetect-Union{Tuple{Array{T,2}}, Tuple{T}, Tuple{Array{T,2},Float64}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsFeatures.rxdetect",
    "category": "method",
    "text": "function rxdetect(X::Matrix{T}, alpha::Float64 = 0.99)\n\nTakes data in the form of matrix where first index correspond to realisations and second to feratures (marginals). Using the RX (Reed-Xiaoli) Anomaly Detection returns the array of Bool that correspond to outlier realisations. alpha is the sensitivity parameter of the RX detector\n\njulia> srand(42);\n\njulia> x = vcat(rand(8,2), 20*rand(2,2))\n10×2 Array{Float64,2}:\n  0.533183    0.956916\n  0.454029    0.584284\n  0.0176868   0.937466\n  0.172933    0.160006\n  0.958926    0.422956\n  0.973566    0.602298\n  0.30387     0.363458\n  0.176909    0.383491\n 11.8582      5.25618\n 14.9036     10.059\n\njulia> rxdetect(x, 0.95)\n10-element Array{Bool,1}:\n false\n false\n false\n false\n false\n false\n false\n false\n  true\n  true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsFeatures.greedesearchdata-Union{Tuple{N}, Tuple{T}, Tuple{SymmetricTensor{T,2},SymmetricTensor{T,N},Function,Int64}} where N where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsFeatures.greedesearchdata",
    "category": "method",
    "text": "greedesearchdata(Σ::SymmetricTensor{T,2}, c::SymmetricTensor{T, N}, maxfunction::Function, k::Int)\n\nreturns array of bools that are non-outliers features\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsFeatures.greedestep-Union{Tuple{N}, Tuple{T}, Tuple{Array{T,2},Array{T,N},Function,Array{Bool,1}}} where N where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsFeatures.greedestep",
    "category": "method",
    "text": "greedestep(c::Vector{Array{Float}}, maxfunction::Function, ls::Vector{Bool})\n\nReturns vector of bools that determines bands that maximise a function. True means include a band, false exclude a band. It changes one true to false in input ls\n\njulia> a = reshape(collect(1.:9.), 3,3);\n\njulia> b = reshape(collect(1.: 27.), 3,3,3);\n\njulia> testf(ar,bool)= det(ar[1][bool,bool])\n\njulia> greedestep(ar, testf, [true, true, true])\n3-element Array{Bool,1}:\ntrue\ntrue\nfalse\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsFeatures.hosvdapprox-Union{Tuple{N}, Tuple{T}, Tuple{Array{T,2},Array{T,N}}, Tuple{Array{T,2},Array{T,N},Array{Bool,1}}} where N where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsFeatures.hosvdapprox",
    "category": "method",
    "text": "detoverdetfitfunction(a::Array{N}, b::Array{N})\n\ncomputes the maximizing function det(Cn)/det(C2)^(n/2). It assumes, that product of singular values from HOSVD of tensor is a good approximation of hyperdeterminant of the tensor (whatever that means). Returns the value of the maximizin function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsFeatures.hosvdstep-Union{Tuple{T}, Tuple{Array{T,2},Array{Bool,1},Float64,Int64,SymmetricTensor{T,4}}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsFeatures.hosvdstep",
    "category": "method",
    "text": "hosvdstep(X::Matrix{T}, ls::Vector{Bool}, β::Float64, r::Int, cc::SymmetricTensor{T,4}) where T <: AbstractFloat\n\nReturns Vector{Bool} - outliers form an itteration step of th hosvd algorithm and Vector{Float64} vector of univariate kurtosis for data projected on specific directions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsFeatures.reduceband-Union{Tuple{N}, Tuple{T}, Tuple{Array{T,N},Array{Bool,1}}} where N where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsFeatures.reduceband",
    "category": "method",
    "text": "reduceband(ar::Array{N}, k::Vector{Bool})\n\nReturns n-array without values at indices in ind\n\njulia>  reshape(collect(1.:27.),(3,3,3))\n3×3×3 Array{Float64,3}:\n[:, :, 1] =\n 1.0  4.0  7.0\n 2.0  5.0  8.0\n 3.0  6.0  9.0\n\n[:, :, 2] =\n 10.0  13.0  16.0\n 11.0  14.0  17.0\n 12.0  15.0  18.0\n\n[:, :, 3] =\n 19.0  22.0  25.0\n 20.0  23.0  26.0\n 21.0  24.0  27.0\n\njulia> reduceband(reshape(collect(1.:27.),(3,3,3)), [true, false, false])\n1×1×1 Array{Float64,3}:\n[:, :, 1] =\n 1.0\n\nTODO reimplement in blocks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsFeatures.unfoldsym-Union{Tuple{Array{T,N}}, Tuple{N}, Tuple{T}} where N where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsFeatures.unfoldsym",
    "category": "method",
    "text": "function unfoldsym{T <: Real, N}(ar::Array{T,N})\n\nReturns a matrix of size (i, k^(N-1)) that is an unfold of symmetric array ar\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsFeatures.unfoldsym-Union{Tuple{SymmetricTensor{T,N}}, Tuple{N}, Tuple{T}} where N where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsFeatures.unfoldsym",
    "category": "method",
    "text": "TODO reimplement in blocks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CumulantsFeatures.updatemoments-Union{Tuple{T}, Tuple{Array{SymmetricTensor{Float64,N} where N,1},Int64,Array{T,2},Array{Bool,1},Array{Bool,1}}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "CumulantsFeatures.updatemoments",
    "category": "method",
    "text": "updatemoments(ma::Vector{SymmetricTensor{Float64,N} where N}, t::Int, X::Matix{T}, ls::Vector{Bool}, lsold::Vector{Bool})\n\nReturns Array{SymmetricTensor} - an array of updated moments (after outliers removal)  and t - number of realisations of data after outliers removal\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CumulantsFeatures]\nOrder = [:type, :function]"
},

]}
