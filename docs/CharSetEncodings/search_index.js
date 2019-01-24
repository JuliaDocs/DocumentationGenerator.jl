var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CharSetEncodings-1",
    "page": "Readme",
    "title": "CharSetEncodings",
    "category": "section",
    "text": "Info Windows Linux & MacOS Package Evaluator CodeCov Coveralls\n[![][license-img]][license-url] [![][app-s-img]][app-s-url] [![][travis-s-img]][travis-url] [![][pkg-s-img]][pkg-url] [![][codecov-img]][codecov-url] [![][coverall-s-img]][coverall-s-url]\n[![][gitter-img]][gitter-url] [![][app-m-img]][app-m-url] [![][travis-m-img]][travis-url] [![][pkg-m-img]][pkg-url] [![][codecov-img]][codecov-url] [![][coverall-m-img]][coverall-m-url][license-img]:  http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat [license-url]:  LICENSE.md[gitter-img]:   https://badges.gitter.im/Join%20Chat.svg [gitter-url]:   https://gitter.im/JuliaString/Lobby?utmsource=badge&utmmedium=badge&utm_campaign=pr-badge[travis-url]:   https://travis-ci.org/JuliaString/CharSetEncodings.jl [travis-s-img]: https://travis-ci.org/JuliaString/CharSetEncodings.jl.svg [travis-m-img]: https://travis-ci.org/JuliaString/CharSetEncodings.jl.svg?branch=master[app-s-url]:    https://ci.appveyor.com/project/ScottPJones/charsetencodings-jl [app-m-url]:    https://ci.appveyor.com/project/ScottPJones/charsetencodings-jl/branch/master [app-s-img]:    https://ci.appveyor.com/api/projects/status/08ylxl46exltiemd?svg=true [app-m-img]:    https://ci.appveyor.com/api/projects/status/08ylxl46exltiemd/branch/master?svg=true[pkg-url]:      http://pkg.julialang.org/?pkg=CharSetEncodings [pkg-s-img]:    http://pkg.julialang.org/badges/CharSetEncodings0.6.svg [pkg-m-img]:    http://pkg.julialang.org/badges/CharSetEncodings0.7.svg[codecov-url]:  https://codecov.io/gh/JuliaString/CharSetEncodings.jl [codecov-img]:  https://codecov.io/gh/JuliaString/CharSetEncodings.jl/branch/master/graph/badge.svg[coverall-s-url]: https://coveralls.io/github/JuliaString/CharSetEncodings.jl [coverall-m-url]: https://coveralls.io/github/JuliaString/CharSetEncodings.jl?branch=master [coverall-s-img]: https://coveralls.io/repos/github/JuliaString/CharSetEncodings.jl/badge.svg [coverall-m-img]: https://coveralls.io/repos/github/JuliaString/CharSetEncodings.jl/badge.svg?branch=master"
},

{
    "location": "#Architecture-1",
    "page": "Readme",
    "title": "Architecture",
    "category": "section",
    "text": "This provides the basic types and mode methods for dealing with character sets, encodings, and character set encodings."
},

{
    "location": "#Types-1",
    "page": "Readme",
    "title": "Types",
    "category": "section",
    "text": "Currently, there are the following types:CodeUnitTypes  a Union of the 3 codeunit types (UInt8, UInt16, UInt32) for convenience\nCharSet        a struct type, which is parameterized by the name of the character set and the type needed to represent a code point\nEncoding       a struct type, parameterized by the name of the encoding"
},

{
    "location": "#Built-in-Character-Sets-/-Character-Set-Encodings-1",
    "page": "Readme",
    "title": "Built-in Character Sets / Character Set Encodings",
    "category": "section",
    "text": "Binary  For storing non-textual data as a sequence of bytes, 0-0xff\nASCII   ASCII (Unicode subset, 0-0x7f)\nLatin   Latin-1 (ISO-8859-1) (Unicode subset, 0-0xff)\nUCS2    UCS-2 (Unicode subset, 0-0xd7ff, 0xe000-0xffff, BMP only, no surrogates)\nUTF32   UTF-32 (Full Unicode, 0-0xd7ff, 0xe000-0x10ffff)\nUniPlus Unvalidated Unicode (i.e. like String, can contain invalid codepoints)\nText1   Unknown 1-byte character set\nText2   Unknown 2-byte character set\nText4   Unknown 4-byte character set"
},

{
    "location": "#Built-in-Encodings-1",
    "page": "Readme",
    "title": "Built-in Encodings",
    "category": "section",
    "text": "UTF8Encoding\nNative1Byte\nNative2Byte\nNative4Byte\nNativeUTF16\nSwapped4Byte\nSwapped2Byte\nSwappedUTF16\nLE2\nBE2\nLE4\nBE4\nUTF16LE\nUTF16BE\n2Byte\n4Byte\nUTF16"
},

{
    "location": "#Built-in-CSEs-1",
    "page": "Readme",
    "title": "Built-in CSEs",
    "category": "section",
    "text": "BinaryCSE, Text1CSE, ASCIICSE, LatinCSE\nText2CSE, UCS2CSE\nText4CSE, UTF32CSE\nUTF8CSE    UTF32CharSet, all valid, using UTF8Encoding,              conforming to the Unicode Organization\'s standard,       i.e. no long encodings, surrogates, or invalid bytes.RawUTF8CSE UniPlusCharSet, not validated, using UTF8Encoding,              may have invalid sequences, long encodings, encode surrogates and characters       up to `0x7fffffff`UTF16CSE   UTF32CharSet, all valid, using UTF16 Encoding (native order),              conforming to the Unicode standard, i.e. no out of order or isolated surrogates."
},

{
    "location": "#Internal-Unicode-subset-types-1",
    "page": "Readme",
    "title": "Internal Unicode subset types",
    "category": "section",
    "text": "_LatinCSE   Indicates has at least 1 character > 0x7f, all <= 0xff\n_UCS2CSE    Indicates has at least 1 character > 0xff, all <= 0xffff\n_UTF32CSE   Indicates has at least 1 non-BMP character"
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "The cse function returns the character set encoding for a string type, string. Returns RawUTF8CSE as a fallback for AbstractString (i.e. same as String) The charset function returns the character set for a string type, string, character type, or character. The encoding function returns the encoding for a type or string. The codeunit function returns the code unit used for a character set encoding The cs\"...\" string macro creates a CharSet type with that name The enc\"...\" string macro creates an Encoding type with that name The @cse(cs, enc) macro creates a character set encoding with the given character set and encodingAlso Exports the helpful constant Bool flags BIG_ENDIAN and LITTLE_ENDIAN"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CharSetEncodings]\nOrder = [:type, :function]"
},

]}
