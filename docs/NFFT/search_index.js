var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NFFT.jl-1",
    "page": "Readme",
    "title": "NFFT.jl",
    "category": "section",
    "text": "(Image: Build Status)This package provides a Julia implementation of the Non-equidistant Fast Fourier Transform (NFFT). This algorithm is also referred as Gridding in the literature (e.g. in MRI literature). For a detailed introduction into the NFFT and its application please have a look at www.nfft.org.The NFFT is a fast implementation of the Non-equidistant Discrete Fourier Transform (NDFT) that is basically a DFT with non-equidistant sampling nodes in either Fourier or time/space domain.  In contrast to the FFT, the NFFT is an approximative algorithm whereas the accuracy can be controlled  by two parameters: the window width m and the oversampling factor sigma."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "In Julia, runPkg.add(\"NFFT\")"
},

{
    "location": "#Basic-usage-1",
    "page": "Readme",
    "title": "Basic usage",
    "category": "section",
    "text": "Basic usage of NFFT.jl is shown in the following example for 1D:using NFFT \n\nM, N = 1024, 512\nx = range(-0.4, stop=0.4, length=M)  # nodes at which the NFFT is evaluated\nfHat = randn(ComplexF64,M)           # data to be transformed\np = NFFTPlan(x, N)                   # create plan. m and sigma are optional parameters\nf = nfft_adjoint(p, fHat)            # calculate adjoint NFFT\ng = nfft(p, f)                       # calculate forward NFFTIn 2D:M, N = 1024, 16\nx = rand(2, M) .- 0.5\nfHat = randn(ComplexF64,M)\np = NFFTPlan(x, (N,N))\nf = nfft_adjoint(p, fHat)\ng = nfft(p, f)"
},

{
    "location": "#Directional-NFFT-1",
    "page": "Readme",
    "title": "Directional NFFT",
    "category": "section",
    "text": "There are special methods for computing 1D NFFT\'s for each 1D slice along a particular dimension of a higher dimensional array.M = 11\ny = rand(M) .- 0.5\nN = (16,20)\nP1 = NFFTPlan(y, 1, N)\nf = randn(ComplexF64,N)\nfHat = nfft(P1, f)Here size(f) = (16,20) and size(fHat) = (11,20) since we compute an NFFT along the first dimension. To compute the NFFT along the second dimension P2 = NFFTPlan(y, 2, N)\nfHat = nfft(P2, f)Now size(fHat) = (16,11)."
},

{
    "location": "autodocs/#NFFT.NFFTPlan",
    "page": "Docstrings",
    "title": "NFFT.NFFTPlan",
    "category": "type",
    "text": "    NFFTPlan(x, N, ...) -> plan\n\nCompute D dimensional NFFT plan for sampling locations x (a vector or a D-by-M matrix) that can be applied on arrays of size N (a tuple of length D).\n\nThe optional arguments control the accuracy.\n\nIt takes as optional keywords all the keywords supported by plan_fft function (like flags and timelimit).  See documentation of plan_fft for reference.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NFFT.NFFTPlan-Union{Tuple{T}, Tuple{D}, Tuple{AbstractArray{T,1},Integer,Tuple{Vararg{Int64,D}}}, Tuple{AbstractArray{T,1},Integer,Tuple{Vararg{Int64,D}},Any}, Tuple{AbstractArray{T,1},Integer,Tuple{Vararg{Int64,D}},Any,Any}, Tuple{AbstractArray{T,1},Integer,Tuple{Vararg{Int64,D}},Any,Any,Any}, Tuple{AbstractArray{T,1},Integer,Tuple{Vararg{Int64,D}},Any,Any,Any,Any}} where T where D",
    "page": "Docstrings",
    "title": "NFFT.NFFTPlan",
    "category": "method",
    "text": "    NFFTPlan(x, d, N, ...) -> plan\n\nCompute directional NFFT plan: A 1D plan that is applied along dimension d of a D dimensional array of size N with sampling locations x (a vector).\n\nIt takes as optional keywords all the keywords supported by plan_fft function (like flags and timelimit).  See documentation of plan_fft for reference.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NFFT.nfft-Union{Tuple{T}, Tuple{D}, Tuple{NFFTPlan{D,0,T} where T,AbstractArray{T,D},Vararg{Any,N} where N}} where T where D",
    "page": "Docstrings",
    "title": "NFFT.nfft",
    "category": "method",
    "text": "    nfft(p, f) -> fHat\n\nFor a non-directional D dimensional plan p this calculates the NFFT of a D dimensional array f of size N. fHat is a vector of length M. (M and N are defined in the plan creation)\n\nFor a directional D dimensional plan p both f and fHat are D dimensional arrays, and the dimension specified in the plan creation is affected.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NFFT.nfft_adjoint-Union{Tuple{T}, Tuple{DIM}, Tuple{D}, Tuple{NFFTPlan{D,DIM,T} where T,AbstractArray{T,N} where N,Vararg{Any,N} where N}} where T where DIM where D",
    "page": "Docstrings",
    "title": "NFFT.nfft_adjoint",
    "category": "method",
    "text": "    nfft_adjoint(p, f) -> fHat\n\nFor a non-directional D dimensional plan p this calculates the adjoint NFFT of a length M vector fHat f is a D dimensional array of size N. (M and N are defined in the plan creation)\n\nFor a directional D dimensional plan p both f and fHat are D dimensional arrays, and the dimension specified in the plan creation is affected.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NFFT.nfft!-Union{Tuple{T}, Tuple{NFFTPlan,AbstractArray{T,N} where N,Union{DenseArray{T,N}, ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, SubArray{T,N,A,I,L} where L where I<:Tuple{Vararg{Union{Int64, AbstractRange{Int64}, AbstractCartesianIndex},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, DenseArray}} where N}, Tuple{NFFTPlan,AbstractArray{T,N} where N,Union{DenseArray{T,N}, ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray}, SubArray{T,N,A,I,L} where L where I<:Tuple{Vararg{Union{Int64, AbstractRange{Int64}, AbstractCartesianIndex},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, ReshapedArray{T,N,A,MI} where MI<:Tuple{Vararg{SignedMultiplicativeInverse{Int64},N} where N} where A<:Union{ReinterpretArray{T,N,S,A} where S where A<:Union{SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, SubArray{T,N,A,I,true} where I<:Tuple{AbstractUnitRange,Vararg{Any,N} where N} where A<:DenseArray where N where T, DenseArray} where N where T, DenseArray}} where N,Any}} where T",
    "page": "Docstrings",
    "title": "NFFT.nfft!",
    "category": "method",
    "text": "    nfft!(p, f, fHat) -> fHat\n\nCalculate the NFFT of f with plan p and store the result in fHat.\n\nBoth f and fHat must be complex arrays.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NFFT.nfft_adjoint!",
    "page": "Docstrings",
    "title": "NFFT.nfft_adjoint!",
    "category": "function",
    "text": "    nfft_adjoint!(p, fHat, f) -> f\n\nCalculate the adjoint NFFT of fHat and store the result in f.\n\nBoth f and fHat must be complex arrays.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NFFT]\nOrder = [:type, :function]"
},

]}
