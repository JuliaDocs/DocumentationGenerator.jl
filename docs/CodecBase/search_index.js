var documenterSearchIndex = {"docs": [

{
    "location": "#CodecBase.Base16Decoder-Tuple{}",
    "page": "Home",
    "title": "CodecBase.Base16Decoder",
    "category": "method",
    "text": "Base16Decoder(;ignore::String=\\t\\n\\v\\f\\r )\n\nCreate a base16 decoding codec.\n\nArguments\n\nignore: ASCII characters that will be ignored while decoding\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.Base16DecoderStream-Tuple{IO}",
    "page": "Home",
    "title": "CodecBase.Base16DecoderStream",
    "category": "method",
    "text": "Base16DecoderStream(stream::IO; kwargs...)\n\nCreate a base16 decoding stream (see Base16Decoder for kwargs).\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.Base16Encoder-Tuple{}",
    "page": "Home",
    "title": "CodecBase.Base16Encoder",
    "category": "method",
    "text": "Base16Encoder(;lowercase=false)\n\nCreate a base16 encoding codec.\n\nArguments\n\nlowercase: use [0-9a-f] instead of [0-9A-F].\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.Base16EncoderStream-Tuple{IO}",
    "page": "Home",
    "title": "CodecBase.Base16EncoderStream",
    "category": "method",
    "text": "Base16EncoderStream(stream::IO; kwargs...)\n\nCreate a base16 encoding stream (see Base16Encoder for kwargs).\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.Base32Decoder-Tuple{}",
    "page": "Home",
    "title": "CodecBase.Base32Decoder",
    "category": "method",
    "text": "Base32Decoder(;hex::Bool=false, ignore::String=\\t\\n\\v\\f\\r )\n\nCreate a base32 decoding codec.\n\nArguments\n\nhex: use extended hex alphabet (Table 4 of RFC4648)\nignore: ASCII characters that will be ignored while decoding\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.Base32DecoderStream-Tuple{IO}",
    "page": "Home",
    "title": "CodecBase.Base32DecoderStream",
    "category": "method",
    "text": "Base32DecoderStream(stream::IO; kwargs...)\n\nCreate a base32 decoding stream (see Base32Decoder for kwargs).\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.Base32Encoder-Tuple{}",
    "page": "Home",
    "title": "CodecBase.Base32Encoder",
    "category": "method",
    "text": "Base32Encoder(;hex::Bool=false)\n\nCreate a base32 encoding codec.\n\nArguments\n\nhex: use extended hex alphabet (Table 4 of RFC4648)\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.Base32EncoderStream-Tuple{IO}",
    "page": "Home",
    "title": "CodecBase.Base32EncoderStream",
    "category": "method",
    "text": "Base32EncoderStream(stream::IO; kwargs...)\n\nCreate a base32 encoding stream (see Base32Encoder for kwargs).\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.Base64Decoder-Tuple{}",
    "page": "Home",
    "title": "CodecBase.Base64Decoder",
    "category": "method",
    "text": "Base64Decoder(;urlsafe::Bool=false, ignore::String=\"\\t\\n\\v\\f\\r \")\n\nCreate a base64 decoding codec.\n\nArguments\n\nurlsafe: use - and _ as the last two values\nignore: ASCII characters that will be ignored while decoding\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.Base64DecoderStream-Tuple{IO}",
    "page": "Home",
    "title": "CodecBase.Base64DecoderStream",
    "category": "method",
    "text": "Base64DecoderStream(stream::IO; kwargs...)\n\nCreate a base64 decoding stream (see Base64Decoder for kwargs).\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.Base64Encoder-Tuple{}",
    "page": "Home",
    "title": "CodecBase.Base64Encoder",
    "category": "method",
    "text": "Base64Encoder(;urlsafe::Bool=false)\n\nCreate a base64 encoding codec.\n\nArguments\n\nurlsafe: use - and _ as the last two values\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.Base64EncoderStream-Tuple{IO}",
    "page": "Home",
    "title": "CodecBase.Base64EncoderStream",
    "category": "method",
    "text": "Base64EncoderStream(stream::IO; kwargs...)\n\nCreate a base64 encoding stream (see Base64Encoder for kwargs).\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.CodeTable16-Tuple{String}",
    "page": "Home",
    "title": "CodecBase.CodeTable16",
    "category": "method",
    "text": "CodeTable16(asciicode:::String; casesensitive::Bool=false)\n\nCreate a code table for base16.\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.CodeTable32-Tuple{String,Char}",
    "page": "Home",
    "title": "CodecBase.CodeTable32",
    "category": "method",
    "text": "CodeTable32(asciicode::String, pad::Char; casesensitive::Bool=false)\n\nCreate a code table for base32.\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.CodeTable64-Tuple{String,Char}",
    "page": "Home",
    "title": "CodecBase.CodeTable64",
    "category": "method",
    "text": "CodeTable64(asciicode::String, pad::Char)\n\nCreate a code table for base64.\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.DecodeError",
    "page": "Home",
    "title": "CodecBase.DecodeError",
    "category": "type",
    "text": "Decoding exception.\n\n\n\n\n\n"
},

{
    "location": "#CodecBase.ignorechars!-Tuple{CodecBase.CodeTable,String}",
    "page": "Home",
    "title": "CodecBase.ignorechars!",
    "category": "method",
    "text": "ignorechars!(table::CodeTable, asciichars::String)\n\nAdd characters that will be ignored while decoding.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CodecBase]\nOrder = [:type, :function]"
},

]}
