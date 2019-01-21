var documenterSearchIndex = {"docs": [

{
    "location": "#StrAPI.CharSetASCIICompat",
    "page": "Home",
    "title": "StrAPI.CharSetASCIICompat",
    "category": "type",
    "text": "Characters 0-0x7f same as ASCII\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.CharSetBMP",
    "page": "Home",
    "title": "StrAPI.CharSetBMP",
    "category": "type",
    "text": "Characters 0-0xd7ff, 0xe000-0xffff follow Unicode BMP\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.CharSetBinary",
    "page": "Home",
    "title": "StrAPI.CharSetBinary",
    "category": "type",
    "text": "8-bit Binary string, not text\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.CharSetISOCompat",
    "page": "Home",
    "title": "StrAPI.CharSetISOCompat",
    "category": "type",
    "text": "Characters 0-0x9f follows ISO 8859\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.CharSetOther",
    "page": "Home",
    "title": "StrAPI.CharSetOther",
    "category": "type",
    "text": "Codepoints are not in Unicode compatible order\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.CharSetStyle",
    "page": "Home",
    "title": "StrAPI.CharSetStyle",
    "category": "type",
    "text": "CharSetStyle(A)\nCharSetStyle(typeof(A))\n\nCharSetStyle specifies the information about the character set used by the string or characters. When you define a new AbstractString or AbstractChar type, you can choose to implement it with\n\nStrAPI.CharSetStyle(::Type{<:MyString}) = StrAPI.CharSetISOCompat()\n\nThe default is CharSetUnicode()\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.CharSetUnicode",
    "page": "Home",
    "title": "StrAPI.CharSetUnicode",
    "category": "type",
    "text": "Full Unicode character set, no additions\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.CharSetUnicodePlus",
    "page": "Home",
    "title": "StrAPI.CharSetUnicodePlus",
    "category": "type",
    "text": "Unicode character set, plus encodings of invalid characters\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.CharSetUnknown",
    "page": "Home",
    "title": "StrAPI.CharSetUnknown",
    "category": "type",
    "text": "Raw bytes, words, or character string, unknown encoding/character set\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.CompareStyle",
    "page": "Home",
    "title": "StrAPI.CompareStyle",
    "category": "type",
    "text": "CompareStyle(Union{A, typeof(A)}, Union{B, typeof(B)})\n\nCompareStyle specifies how to compare two strings with character set encodings A and B\n\nStrAPI.CompareStyle(::Type{<:MyString}, ::Type{String}) = StrAPI.ByteCompare()\n\nThe default is CodePointCompare\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.EncodingStyle",
    "page": "Home",
    "title": "StrAPI.EncodingStyle",
    "category": "type",
    "text": "EncodingStyle(A)\nEncodingStyle(typeof(A))\n\nEncodingStyle specifies the whether a character set encoding uses one or multiple codeunits to encode a single codepoint. When you define a new AbstractString type, you can choose to implement it with either single or multi-codeunit indexing.\n\nStrAPI.EncodingStyle(::Type{MyCharSetEncoding}) = StrAPI.MultiCodeUnitEncoding()\n\nThe default is SingleCodeUnitEncoding()\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.ValidatedStyle",
    "page": "Home",
    "title": "StrAPI.ValidatedStyle",
    "category": "type",
    "text": "ValidatedStyle(A)\nValidatedStyle(typeof(A))\n\nValidatedStyle specifies the whether a string or character type is always valid or not When you define a new AbstractString or AbstractChar type, you can choose to implement it as always validated, or validation state unknown.\n\nStrAPI.ValidatedStyle(::Type{<:MyCharType}) = StrAPI.AlwaysValid()\n\nThe default is UnknownValidity\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.basetype",
    "page": "Home",
    "title": "StrAPI.basetype",
    "category": "function",
    "text": "Get the base type (of CodeUnitTypes) of a character or aligned/swapped type\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.charset",
    "page": "Home",
    "title": "StrAPI.charset",
    "category": "function",
    "text": "Get the character set used by a string or character type\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.codepoints-Tuple{Any}",
    "page": "Home",
    "title": "StrAPI.codepoints",
    "category": "method",
    "text": "codepoints(str)\n\nAn iterator that generates the code points of a string\n\nExamples\n\njulia> a = str(\"abc🖖\")\n\njulia> collect(a)\n\njulia> collect(codepoints(a))\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.cse",
    "page": "Home",
    "title": "StrAPI.cse",
    "category": "function",
    "text": "Get the character set / encoding used by a string type\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.encoding",
    "page": "Home",
    "title": "StrAPI.encoding",
    "category": "function",
    "text": "Get the character set used by a string type\n\n\n\n\n\n"
},

{
    "location": "#StrAPI.is_multi",
    "page": "Home",
    "title": "StrAPI.is_multi",
    "category": "function",
    "text": "Determine if a string has multiple codeunit encoding\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [StrAPI]\nOrder = [:type, :function]"
},

]}
