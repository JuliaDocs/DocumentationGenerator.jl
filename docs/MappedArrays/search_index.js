var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MappedArrays-1",
    "page": "Readme",
    "title": "MappedArrays",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This package implements \"lazy\" in-place elementwise transformations of arrays for the Julia programming language. Explicitly, it provides a \"view\" M of an array A so that M[i] = f(A[i]) for a specified (but arbitrary) function f, without ever having to compute M explicitly (in the sense of allocating storage for M).  The name of the package comes from the fact that M == map(f, A)."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Single-source-arrays-1",
    "page": "Readme",
    "title": "Single source arrays",
    "category": "section",
    "text": "julia> using MappedArrays\n\njulia> a = [1,4,9,16]\n4-element Array{Int64,1}:\n  1\n  4\n  9\n 16\n\njulia> b = mappedarray(sqrt, a)\n4-element mappedarray(sqrt, ::Array{Int64,1}) with eltype Float64:\n 1.0\n 2.0\n 3.0\n 4.0\n\njulia> b[3]\n3.0Note that you can\'t set values in the array:julia> b[3] = 2\nERROR: setindex! not defined for ReadonlyMappedArray{Float64,1,Array{Int64,1},typeof(sqrt)}\nStacktrace:\n [1] error(::String, ::Type) at ./error.jl:42\n [2] error_if_canonical_setindex at ./abstractarray.jl:1005 [inlined]\n [3] setindex!(::ReadonlyMappedArray{Float64,1,Array{Int64,1},typeof(sqrt)}, ::Int64, ::Int64) at ./abstractarray.jl:996\n [4] top-level scope at none:0unless you also supply the inverse function, using mappedarray(f, finv, A):julia> c = mappedarray(sqrt, x->x*x, a)\n4-element mappedarray(sqrt, x->x * x, ::Array{Int64,1}) with eltype Float64:\n 1.0\n 2.0\n 3.0\n 4.0\n\njulia> c[3]\n3.0\n\njulia> c[3] = 2\n2\n\njulia> a\n4-element Array{Int64,1}:\n  1\n  4\n  4\n 16Naturally, the \"backing\" array a has to be able to represent any value that you set:julia> c[3] = 2.2\nERROR: InexactError: Int64(Int64, 4.840000000000001)\nStacktrace:\n [1] Type at ./float.jl:692 [inlined]\n [2] convert at ./number.jl:7 [inlined]\n [3] setindex! at ./array.jl:743 [inlined]\n [4] setindex!(::MappedArray{Float64,1,Array{Int64,1},typeof(sqrt),getfield(Main, Symbol(\"##5#6\"))}, ::Float64, ::Int64) at /home/tim/.julia/dev/MappedArrays/src/MappedArrays.jl:173\n [5] top-level scope at none:0because 2.2^2 = 4.84 is not representable as an Int. In contrast,julia> a = [1.0, 4.0, 9.0, 16.0]\n4-element Array{Float64,1}:\n  1.0\n  4.0\n  9.0\n 16.0\n\njulia> c = mappedarray(sqrt, x->x*x, a)\n4-element mappedarray(sqrt, x->x * x, ::Array{Float64,1}) with eltype Float64:\n 1.0\n 2.0\n 3.0\n 4.0\n\njulia> c[3] = 2.2\n2.2\n\njulia> a\n4-element Array{Float64,1}:\n  1.0\n  4.0\n  4.840000000000001\n 16.0works without trouble.So far our examples have all been one-dimensional, but this package also supports arbitrary-dimensional arrays:julia> a = randn(3,5,2)\n3×5×2 Array{Float64,3}:\n[:, :, 1] =\n  1.47716    0.323915   0.448389  -0.56426   2.67922\n -0.255123  -0.752548  -0.41303    0.306604  1.5196\n  0.154179   0.425001  -1.95575   -0.982299  0.145111\n\n[:, :, 2] =\n -0.799232  -0.301813  -0.457817  -0.115742  -1.22948\n -0.486558  -1.27959   -1.59661    1.05867    2.06828\n -0.315976  -0.188828  -0.567672   0.405086   1.06983\n\njulia> b = mappedarray(abs, a)\n3×5×2 mappedarray(abs, ::Array{Float64,3}) with eltype Float64:\n[:, :, 1] =\n 1.47716   0.323915  0.448389  0.56426   2.67922\n 0.255123  0.752548  0.41303   0.306604  1.5196\n 0.154179  0.425001  1.95575   0.982299  0.145111\n\n[:, :, 2] =\n 0.799232  0.301813  0.457817  0.115742  1.22948\n 0.486558  1.27959   1.59661   1.05867   2.06828\n 0.315976  0.188828  0.567672  0.405086  1.06983"
},

{
    "location": "#Multiple-source-arrays-1",
    "page": "Readme",
    "title": "Multiple source arrays",
    "category": "section",
    "text": "Just as map(f, a, b) can take multiple containers a and b, mappedarray can too:julia> a = [0.1 0.2; 0.3 0.4]\n2×2 Array{Float64,2}:\n 0.1  0.2\n 0.3  0.4\n\njulia> b = [1 2; 3 4]\n2×2 Array{Int64,2}:\n 1  2\n 3  4\n\njulia> c = mappedarray(+, a, b)\n2×2 mappedarray(+, ::Array{Float64,2}, ::Array{Int64,2}) with eltype Float64:\n 1.1  2.2\n 3.3  4.4In some cases you can also supply an inverse function, which should return a tuple (one value for each input array):julia> using ColorTypes\n\njulia> redchan = [0.1 0.2; 0.3 0.4];\n\njulia> greenchan = [0.8 0.75; 0.7 0.65];\n\njulia> bluechan = [0 1; 0 1];\n\njulia> m = mappedarray(RGB{Float64}, c->(red(c), green(c), blue(c)), redchan, greenchan, bluechan)\n2×2 mappedarray(RGB{Float64}, getfield(Main, Symbol(\"##11#12\"))(), ::Array{Float64,2}, ::Array{Float64,2}, ::Array{Int64,2}) with eltype RGB{Float64}:\n RGB{Float64}(0.1,0.8,0.0)  RGB{Float64}(0.2,0.75,1.0)\n RGB{Float64}(0.3,0.7,0.0)  RGB{Float64}(0.4,0.65,1.0)\n\n julia> m[1,2] = RGB(0,0,0)\nRGB{N0f8}(0.0,0.0,0.0)\n\njulia> redchan\n2×2 Array{Float64,2}:\n 0.1  0.0\n 0.3  0.4Note that in some cases the function or inverse-function is too complicated to print nicely in the summary line."
},

{
    "location": "#of_eltype-1",
    "page": "Readme",
    "title": "of_eltype",
    "category": "section",
    "text": "This package defines a convenience method, of_eltype, which \"lazily-converts\" arrays to a specific eltype.  (It works simply by defining convert functions for both f and finv.)Using of_eltype you can \"convert\" a series of arrays to a chosen element type:julia> arrays = (rand(2,2), rand(Int,2,2), [0x01 0x03; 0x02 0x04])\n([0.984799 0.871579; 0.106783 0.0619827], [-6481735407318330164 5092084295348224098; -6063116549749853620 -8721118838052351006], UInt8[0x01 0x03; 0x02 0x04])\n\njulia> arraysT = map(A->of_eltype(Float64, A), arrays)\n([0.984799 0.871579; 0.106783 0.0619827], [-6.48174e18 5.09208e18; -6.06312e18 -8.72112e18], [1.0 3.0; 2.0 4.0])This construct is inferrable (type-stable), so it can be a useful means to \"coerce\" arrays to a common type. This can sometimes solve type-stability problems without requiring that one copy the data."
},

{
    "location": "autodocs/#MappedArrays.mappedarray-Tuple{Any,AbstractArray}",
    "page": "Docstrings",
    "title": "MappedArrays.mappedarray",
    "category": "method",
    "text": "M = mappedarray(f, A)\nM = mappedarray(f, A, B, C...)\n\nCreate a view M of the array A that applies f to every element of A; M == map(f, A), with the difference that no storage is allocated for M. The view is read-only (you can get values but not set them).\n\nWhen multiple input arrays are supplied, M[i] = f(A[i], B[i], C[i]...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MappedArrays.mappedarray-Tuple{Any,Any,AbstractArray}",
    "page": "Docstrings",
    "title": "MappedArrays.mappedarray",
    "category": "method",
    "text": "M = mappedarray(f, finv, A)\nM = mappedarray(f, finv, A, B, C...)\n\ncreates a view of the array A that applies f to every element of A. The inverse function, finv, allows one to also set values of the view and, correspondingly, the values in A.\n\nWhen multiple input arrays are supplied, M[i] = f(A[i], B[i], C[i]...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MappedArrays.of_eltype-Union{Tuple{T}, Tuple{S}, Tuple{Type{T},AbstractArray{S,N} where N}} where T where S",
    "page": "Docstrings",
    "title": "MappedArrays.of_eltype",
    "category": "method",
    "text": "M = of_eltype(T, A)\nM = of_eltype(val::T, A)\n\ncreates a view of A that lazily-converts the element type to T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [MappedArrays]\nOrder = [:type, :function]"
},

]}
