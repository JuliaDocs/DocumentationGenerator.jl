var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Bits-1",
    "page": "Readme",
    "title": "Bits",
    "category": "section",
    "text": "(Image: Build Status)This package implements functions to play with bits, of integers, and of floats to a certain extent. For example:julia> bits(0b110101011)\n|00000001 10101011|\n\njulia> ans[1:4]\n|1011|Currently, the following functions are exported: bit, bits, bitsize, mask, masked, tstbit. They have a docstring, but no HTML documentation is available yet.In these functions, the right-most bit of a value has index 1, but in some applications it\'s more natural for it to have index 0. So the functions will likely be also implemented with indexes starting at 0, and both alternatives will be available. It\'s possible that the default will be changed."
},

{
    "location": "autodocs/#Bits.bit-Tuple{Integer,Integer}",
    "page": "Docstrings",
    "title": "Bits.bit",
    "category": "method",
    "text": "bit(x::Integer, i::Integer)       -> typeof(x)\nbit(x::AbstractFloat, i::Integer) -> Integer\n\nReturn the bit of x at position i, with value 0 or 1. If x::Integer, the returned bit is of the same type. If x::AbstractFloat is a bits type, the returned bit is a signed integer with the same bitsize as x. See also tstbit.\n\nExamples\n\njulia> bit(0b101, 1)\n0x01\n\njulia> bit(0b101, 2)\n0x00\n\njulia> bit(-1.0, 64)\n1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Bits.bits-Tuple{Real}",
    "page": "Docstrings",
    "title": "Bits.bits",
    "category": "method",
    "text": "bits(x::Real)\n\nCreate an immutable view on the bits of x as a vector of Bool, similar to a BitVector. If x is a BigInt, the vector has length Bits.INF. Currently, no bounds check is performed when indexing into the vector.\n\nExamples\n\njulia> v = bits(Int16(2^8+2^4+2+1))\n|00000001 00010011|\n\njulia> permutedims([v[i] for i in 8:-1:1])\n1×8 Array{Bool,2}:\n false  false  false  true  false  false  true  true\n\njulia> bits(true)\n|1|\n\njulia> bits(big(2)^63)\n|...0 10000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000|\n\njulia> bits(Float32(-7))\n|1 10000001 11000000000000000000000|\n\njulia> ans[1:23] # creates a vector of bits with a specific length\n|1100000 00000000 00000000|\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Bits.bitsize-Tuple{Union{Type{Int128}, Type{Int16}, Type{Int32}, Type{Int64}, Type{Int8}, Type{UInt128}, Type{UInt16}, Type{UInt32}, Type{UInt64}, Type{UInt8}}}",
    "page": "Docstrings",
    "title": "Bits.bitsize",
    "category": "method",
    "text": "bitsize(T::Type) -> Int\nbitsize(::T)     -> Int\n\nReturn the number of bits that can be held by type T.\n\nExamples\n\njulia> bitsize(Int32)  == 32           &&\n       bitsize(true)   == 1            &&\n       bitsize(big(0)) == Bits.INF     &&\n       bitsize(1.2)    == 64\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Bits.mask-Union{Tuple{T}, Tuple{Type{T},Integer,Integer}} where T",
    "page": "Docstrings",
    "title": "Bits.mask",
    "category": "method",
    "text": "mask(T::Type{<:Integer} := UInt, j::Integer, i::Integer) -> T\n\nReturn an integer of type T whose j right-most bits are 0, the following i-j bits are 1, and the remaining bits are 0 (i.e. of the form 0b0...01...10...0 with exactly i-j 1s preceded by j 0s). When j < 0, the result is not specified. When i < 0, the result is equal to ~mask(T, j), i.e. of the form 1...10...0 with exactly j zeros. NOTE: unstable API, could be changed to mask(j, i-j) instead.\n\nExamples\n\njulia> bits(mask(UInt8, 2, 5))\n|00011100|\n\njulia> bits(mask(BigInt, 3, -1))\n|...1 11111111 11111111 11111111 11111111 11111111 11111111 11111111 11111000|\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Bits.mask-Union{Tuple{T}, Tuple{Type{T},Integer}} where T",
    "page": "Docstrings",
    "title": "Bits.mask",
    "category": "method",
    "text": "mask(T::Type{<:Integer}:=UInt, i::Integer=bitsize(T)) -> T\n\nReturn an integer of type T whose i right-most bits are 1, and the others are 0 (i.e. of the form 0b0...01...1 with exactly i 1s. When i is not specified, all possible bits are set to 1. When i < 0, the result is not specified. T defaults to UInt.\n\nExamples\n\njulia> mask(3)\n0x0000000000000007\n\njulia> mask(UInt8)\n0xff\n\njulia> bits(mask(Int32, 24))\n|00000000 11111111 11111111 11111111|\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Bits.masked-Tuple{Any,Integer}",
    "page": "Docstrings",
    "title": "Bits.masked",
    "category": "method",
    "text": "masked(x, [j::Integer], i::Integer) -> typeof(x)\n\nReturn the result of applying the mask mask(x, [j], i) to x, i.e. x & mask(x, [j], i). If x is a float, apply the mask to the underlying bits.\n\nExamples\n\njulia> masked(0b11110011, 1, 5) === 0b00010010\ntrue\n\njulia> x = rand(); masked(-x, 0, 63) === x\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Bits.tstbit-Tuple{Any,Integer}",
    "page": "Docstrings",
    "title": "Bits.tstbit",
    "category": "method",
    "text": "tstbit(x::Real, i::Integer) -> Bool\n\nSimilar to bit but returns the bit at position i as a Bool.\n\nExamples\n\njulia> tstbit(0b101, 3)\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Bits]\nOrder = [:type, :function]"
},

]}
