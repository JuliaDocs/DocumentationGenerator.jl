var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CodecZlib.jl-1",
    "page": "Readme",
    "title": "CodecZlib.jl",
    "category": "section",
    "text": "[![TravisCI Status][travisci-img]][travisci-url] [![AppVeyor Status][appveyor-img]][appveyor-url] [![codecov.io][codecov-img]][codecov-url]"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"CodecZlib\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using CodecZlib\n\n# Some text.\ntext = \"\"\"\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin\nmauris non nisi consectetur, a dapibus urna pretium. Vestibulum non posuere\nerat. Donec luctus a turpis eget aliquet. Cras tristique iaculis ex, eu\nmalesuada sem interdum sed. Vestibulum ante ipsum primis in faucibus orci luctus\net ultrices posuere cubilia Curae; Etiam volutpat, risus nec gravida ultricies,\nerat ex bibendum ipsum, sed varius ipsum ipsum vitae dui.\n\"\"\"\n\n# Streaming API.\nstream = GzipCompressorStream(IOBuffer(text))\nfor line in eachline(GzipDecompressorStream(stream))\n    println(line)\nend\nclose(stream)\n\n# Array API.\ncompressed = transcode(GzipCompressor, text)\n@assert sizeof(compressed) < sizeof(text)\n@assert transcode(GzipDecompressor, compressed) == Vector{UInt8}(text)This package exports following codecs and streams:Codec Stream\nGzipCompressor GzipCompressorStream\nGzipDecompressor GzipDecompressorStream\nZlibCompressor ZlibCompressorStream\nZlibDecompressor ZlibDecompressorStream\nDeflateCompressor DeflateCompressorStream\nDeflateDecompressor DeflateDecompressorStreamSee docstrings and TranscodingStreams.jl for details.[travisci-img]: https://travis-ci.org/bicycle1885/CodecZlib.jl.svg?branch=master [travisci-url]: https://travis-ci.org/bicycle1885/CodecZlib.jl [appveyor-img]: https://ci.appveyor.com/api/projects/status/xy5bx1fdvuxgemph?svg=true [appveyor-url]: https://ci.appveyor.com/project/bicycle1885/codeczlib-jl [codecov-img]: http://codecov.io/github/bicycle1885/CodecZlib.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/bicycle1885/CodecZlib.jl?branch=master"
},

{
    "location": "autodocs/#CodecZlib.DeflateCompressor-Tuple{}",
    "page": "Docstrings",
    "title": "CodecZlib.DeflateCompressor",
    "category": "method",
    "text": "DeflateCompressor(;level=-1, windowbits=-1)\n\nCreate a deflate compression codec.\n\nArguments\n\nlevel: compression level (-1..9)\nwindowbits: size of history buffer (8..15)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecZlib.DeflateCompressorStream-Tuple{IO}",
    "page": "Docstrings",
    "title": "CodecZlib.DeflateCompressorStream",
    "category": "method",
    "text": "DeflateCompressorStream(stream::IO; kwargs...)\n\nCreate a deflate compression stream (see DeflateCompressor for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecZlib.DeflateDecompressor-Tuple{}",
    "page": "Docstrings",
    "title": "CodecZlib.DeflateDecompressor",
    "category": "method",
    "text": "DeflateDecompressor(;windowbits=15)\n\nCreate a deflate decompression codec.\n\nArguments\n\nwindowbits: size of history buffer (8..15)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecZlib.DeflateDecompressorStream-Tuple{IO}",
    "page": "Docstrings",
    "title": "CodecZlib.DeflateDecompressorStream",
    "category": "method",
    "text": "DeflateDecompressorStream(stream::IO; kwargs...)\n\nCreate a deflate decompression stream (see DeflateDecompressor for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecZlib.GzipCompressor-Tuple{}",
    "page": "Docstrings",
    "title": "CodecZlib.GzipCompressor",
    "category": "method",
    "text": "GzipCompressor(;level=-1, windowbits=15)\n\nCreate a gzip compression codec.\n\nArguments\n\nlevel: compression level (-1..9)\nwindowbits: size of history buffer (8..15)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecZlib.GzipCompressorStream-Tuple{IO}",
    "page": "Docstrings",
    "title": "CodecZlib.GzipCompressorStream",
    "category": "method",
    "text": "GzipCompressorStream(stream::IO; kwargs...)\n\nCreate a gzip compression stream (see GzipCompressor for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecZlib.GzipDecompressor-Tuple{}",
    "page": "Docstrings",
    "title": "CodecZlib.GzipDecompressor",
    "category": "method",
    "text": "GzipDecompressor(;windowbits=15, gziponly=false)\n\nCreate a gzip decompressor codec.\n\nIf gziponly is false, this codec can decompress the zlib format as well.\n\nArguments\n\nwindowbits: size of history buffer (8..15)\ngziponly: flag to inactivate data format detection\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecZlib.GzipDecompressorStream-Tuple{IO}",
    "page": "Docstrings",
    "title": "CodecZlib.GzipDecompressorStream",
    "category": "method",
    "text": "GzipDecompressorStream(stream::IO; kwargs...)\n\nCreate a gzip decompression stream (see GzipDecompressor for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecZlib.ZlibCompressor-Tuple{}",
    "page": "Docstrings",
    "title": "CodecZlib.ZlibCompressor",
    "category": "method",
    "text": "ZlibCompressor(;level=-1, windowbits=15)\n\nCreate a zlib compression codec.\n\nArguments\n\nlevel: compression level (-1..9)\nwindowbits: size of history buffer (8..15)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecZlib.ZlibCompressorStream-Tuple{IO}",
    "page": "Docstrings",
    "title": "CodecZlib.ZlibCompressorStream",
    "category": "method",
    "text": "ZlibCompressorStream(stream::IO)\n\nCreate a zlib compression stream (see ZlibCompressor for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecZlib.ZlibDecompressor-Tuple{}",
    "page": "Docstrings",
    "title": "CodecZlib.ZlibDecompressor",
    "category": "method",
    "text": "ZlibDecompressor(;windowbits=15)\n\nCreate a zlib decompression codec.\n\nArguments\n\nwindowbits: size of history buffer (8..15)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecZlib.ZlibDecompressorStream-Tuple{IO}",
    "page": "Docstrings",
    "title": "CodecZlib.ZlibDecompressorStream",
    "category": "method",
    "text": "ZlibDecompressorStream(stream::IO; kwargs...)\n\nCreate a deflate decompression stream (see ZlibDecompressor for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CodecZlib]\nOrder = [:type, :function]"
},

]}
