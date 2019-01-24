var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NumberUnions.jl-1",
    "page": "Readme",
    "title": "NumberUnions.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Copyright-2016-2018-by-Jeffrey-Sarnoff.-This-software-is-released-under-The-MIT-License.-1",
    "page": "Readme",
    "title": "Copyright © 2016-2018 by Jeffrey Sarnoff. This software is released under The MIT License.",
    "category": "section",
    "text": "[![][pkg-0.7-img]][pkg-0.7-url]  [![][travis-img]][travis-url]"
},

{
    "location": "#Type-Unions-1",
    "page": "Readme",
    "title": "Type Unions",
    "category": "section",
    "text": ""
},

{
    "location": "#Local-Unions-1",
    "page": "Readme",
    "title": "Local Unions",
    "category": "section",
    "text": "Union Types gathered\nSysInt, SysUInt, SysFloat {Int128 .. Int8}, {UInt128 .. UInt8}, ..\nMachInt, MachUInt, MachFloat {Int64, Int32}, ..,  {Float64, Float32}\nIntFloat64, IntFloat32, IntFloat16 {Int64, Float64}, {Int32, Float32}, ..\nInteger128, Integer64, Integer32, Integer8 .., {Int64, UInt64},  {Int32, UInt32}, .."
},

{
    "location": "#Imported-Unions-1",
    "page": "Readme",
    "title": "Imported Unions",
    "category": "section",
    "text": "Base.IEEEFloat (Union{Float64, Float32, Float16}) is reexported as IEEEFloat"
},

{
    "location": "#Type-Functions-1",
    "page": "Readme",
    "title": "Type Functions",
    "category": "section",
    "text": ""
},

{
    "location": "#Type-from-sizeof(type)-1",
    "page": "Readme",
    "title": "Type from sizeof(type)",
    "category": "section",
    "text": "bytes2Int, bytes2UInt, bytes2Floatusing NumberTypeUnions\n\nbytes2Int( sizeof(Int16) )\nInt16\n\nbytes2Float( sizeof(Float32) )\nFloat32[travis-img]: https://travis-ci.org/JeffreySarnoff/NumberUnions.jl.svg?branch=master [travis-url]: https://travis-ci.org/JeffreySarnoff/NumberUnions.jl[pkg-0.6-img]: http://pkg.julialang.org/badges/NumberUnions0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=NumberUnions&ver=0.6 [pkg-0.7-img]: http://pkg.julialang.org/badges/NumberUnions0.7.svg [pkg-0.7-url]: http://pkg.julialang.org/?pkg=NumberUnions&ver=0.7"
},

{
    "location": "autodocs/#NumberUnions.bytes2Float",
    "page": "Docstrings",
    "title": "NumberUnions.bytes2Float",
    "category": "function",
    "text": "lookup primitive numeric {Int, UInt, Float} type using sizeof(type)\n\n\nindexbysize(nbytes) = 1 + (nbytes >> 1) - (nbytes >> 3) - ((nbytes >> 4) << 1);\n\nfloatsizes = (sizeof(Float16), sizeof(Float32), sizeof(Float64))\n(2, 4, 8)\n\nindices_for_float_types =  [indexbysize(nbytes) for nbytes in floatsizes];\n\nSysFloatsBySize[ indices_for_float_types ] == [Float16, Float32, Float64]\ntrue\n\nintsizes = (sizeof(Int8), sizeof(Int16), sizeof(Int32), sizeof(Int64), sizeof(Int128))\n(1, 2, 4, 8, 16)\n\nindices_for_int_types =  [indexbysize(nbytes) for nbytes in intsizes];\n\nSysIntsBySize[ indicies_for_int_types ] == [Int8,    Int16,   Int32,   Int64,   Int128]\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumberUnions.bytes2Int",
    "page": "Docstrings",
    "title": "NumberUnions.bytes2Int",
    "category": "function",
    "text": "lookup primitive numeric {Int, UInt, Float} type using sizeof(type)\n\n\nindexbysize(nbytes) = 1 + (nbytes >> 1) - (nbytes >> 3) - ((nbytes >> 4) << 1);\n\nfloatsizes = (sizeof(Float16), sizeof(Float32), sizeof(Float64))\n(2, 4, 8)\n\nindices_for_float_types =  [indexbysize(nbytes) for nbytes in floatsizes];\n\nSysFloatsBySize[ indices_for_float_types ] == [Float16, Float32, Float64]\ntrue\n\nintsizes = (sizeof(Int8), sizeof(Int16), sizeof(Int32), sizeof(Int64), sizeof(Int128))\n(1, 2, 4, 8, 16)\n\nindices_for_int_types =  [indexbysize(nbytes) for nbytes in intsizes];\n\nSysIntsBySize[ indicies_for_int_types ] == [Int8,    Int16,   Int32,   Int64,   Int128]\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumberUnions.bytes2UInt",
    "page": "Docstrings",
    "title": "NumberUnions.bytes2UInt",
    "category": "function",
    "text": "lookup primitive numeric {Int, UInt, Float} type using sizeof(type)\n\n\nindexbysize(nbytes) = 1 + (nbytes >> 1) - (nbytes >> 3) - ((nbytes >> 4) << 1);\n\nfloatsizes = (sizeof(Float16), sizeof(Float32), sizeof(Float64))\n(2, 4, 8)\n\nindices_for_float_types =  [indexbysize(nbytes) for nbytes in floatsizes];\n\nSysFloatsBySize[ indices_for_float_types ] == [Float16, Float32, Float64]\ntrue\n\nintsizes = (sizeof(Int8), sizeof(Int16), sizeof(Int32), sizeof(Int64), sizeof(Int128))\n(1, 2, 4, 8, 16)\n\nindices_for_int_types =  [indexbysize(nbytes) for nbytes in intsizes];\n\nSysIntsBySize[ indicies_for_int_types ] == [Int8,    Int16,   Int32,   Int64,   Int128]\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NumberUnions]\nOrder = [:type, :function]"
},

]}
