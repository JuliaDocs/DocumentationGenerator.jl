var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Inflate.jl-1",
    "page": "Readme",
    "title": "Inflate.jl",
    "category": "section",
    "text": "Inflate provides a pure Julia implementation of zlib decompression functionality, with both in- memory and streaming interfaces. This covers decompression of the Deflate algorithm and the Zlib and Gzip wrapper formats, as specified in RFC 1950, RFC 1951, and RFC 1952.The main reasons to choose Inflate over CodecZlib are:100% Julia code - great for Julia purists.\nNo binary dependencies.\nActually no dependencies at all.\nCan read gzip headers.You should choose CodecZlib over Inflate if the points above are not compelling or one or more of the following applies to you:Need to compress, not only decompress.\nWant higher speed.\nWant a full-featured streaming interface.\nWant a battle-proven library."
},

{
    "location": "#In-Memory-Decompression-1",
    "page": "Readme",
    "title": "In-Memory Decompression",
    "category": "section",
    "text": "In-memory decompression is done by the following functions:function decompresses\ninflate(data::Vector{UInt8}) raw Deflate data\ninflate_zlib(data::Vector{UInt8}) Zlib data\ninflate_gzip(data::Vector{UInt8}) Gzip dataThey all take a Vector{UInt8} with compressed data as input and return a Vector{UInt8} of decompressed data. Additionallygzip_headers = Dict{String, Any}()\nout = inflate_gzip(data, headers = gzip_headers)fills in gzip_headers with the Gzip headers present in data.Both inflate_zlib and inflate_gzip accept the keyword argument ignore_checksum, which if set to true skips consistency checking by means of Adler and CRC checksums respectively. This disables the computation of the checksums, saving time.Finally, there is also a convenience function to read a compressed text file in gzip formatout = inflate_gzip(filename::String)This returns the decompressed file as a string."
},

{
    "location": "#Streaming-Decompression-1",
    "page": "Readme",
    "title": "Streaming Decompression",
    "category": "section",
    "text": "Streaming decompression is done using the following types:stream decompresses\nInflateStream(stream::IO) raw Deflate stream\nInflateZlibStream(stream::IO) Zlib stream\nInflateGzipStream(stream::IO) Gzip streamThe stream types are subtypes of IO and decompression is done by reading from instances of the types.Example:f = open(\"compressed_file.gz\", \"r\")\ngz = InflateGzipStream(f)\nfor line in readlines(gz)\n    println(line)\nend\nclose(f)The streaming interface is minimalistic. If you need a full-featured interface, the CodecZlib package is likely to be a better fit.Reading of Gzip headers can be done from the streaming interface too.gzip_headers = Dict{String, Any}()\ngz = InflateGzipStream(stream, headers = gzip_headers)The retrieved headers will be available immediately upon construction of the InflateGzipStream. It is not necessary to read any data first.Likewise both InflateZlibStream and InflateGzipStream accept the keyword argument ignore_checksum in the same way as the non-streaming functions inflate_zlib and inflate_gzip."
},

{
    "location": "autodocs/#Inflate.InflateGzipStream",
    "page": "Docstrings",
    "title": "Inflate.InflateGzipStream",
    "category": "type",
    "text": "InflateGzipStream(stream::IO)\n\nStreaming decompression of Gzip compressed stream. For an in-memory counterpart, see inflate_gzip.\n\ngzip_headers = Dict{String, Any}()\nInflateGzipStream(stream::IO; headers = gzip_headers)\n\nAlso retrieve gzip headers in the provided Dict. The headers are available directly after the object is constructed.\n\nInflateGzipStream(stream::IO; ignore_checksum = true)\n\nSkip computing CRC of the content, as well as the header, for consistency checking.\n\nReference: RFC 1952\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Inflate.InflateStream",
    "page": "Docstrings",
    "title": "Inflate.InflateStream",
    "category": "type",
    "text": "InflateStream(stream::IO)\n\nStreaming decompression of unwrapped deflate compressed stream. For an in-memory counterpart, see inflate.\n\nReference: RFC 1951\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Inflate.InflateZlibStream",
    "page": "Docstrings",
    "title": "Inflate.InflateZlibStream",
    "category": "type",
    "text": "InflateZlibStream(stream::IO)\n\nStreaming decompression of Zlib compressed stream. For an in-memory counterpart, see inflate_zlib.\n\nInflateZlibStream(stream::IO; ignore_checksum = true)\n\nSkip computing Adler checksum for consistency checking.\n\nReference: RFC 1950\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Inflate.inflate-Tuple{Array{UInt8,1}}",
    "page": "Docstrings",
    "title": "Inflate.inflate",
    "category": "method",
    "text": "inflate(source::Vector{UInt8})\n\nDecompress in-memory source, in unwrapped deflate format. The output will also be a Vector{UInt8}. For a streaming counterpart, see InflateStream.\n\nReference: RFC 1951\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Inflate.inflate_gzip-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "Inflate.inflate_gzip",
    "category": "method",
    "text": "inflate_gzip(filename::AbstractString)\n\nConvenience wrapper for reading a gzip compressed text file. The result is returned as a string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Inflate.inflate_gzip-Tuple{Array{UInt8,1}}",
    "page": "Docstrings",
    "title": "Inflate.inflate_gzip",
    "category": "method",
    "text": "inflate_gzip(source::Vector{UInt8})\n\nDecompress in-memory source, in Gzip compressed format. The output will also be a Vector{UInt8}. For a streaming counterpart, see InflateGzipStream.\n\ngzip_headers = Dict{String, Any}()\ninflate_gzip(source::Vector{UInt8}; headers = gzip_headers)\n\nAlso retrieve gzip headers in the provided Dict.\n\ninflate_gzip(source::Vector{UInt8}; ignore_checksum = true)\n\nSkip computing CRC of the content, as well as the header, for consistency checking.\n\nReference: RFC 1952\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Inflate.inflate_zlib-Tuple{Array{UInt8,1}}",
    "page": "Docstrings",
    "title": "Inflate.inflate_zlib",
    "category": "method",
    "text": "inflate_zlib(source::Vector{UInt8})\n\nDecompress in-memory source, in Zlib compressed format. The output will also be a Vector{UInt8}. For a streaming counterpart, see InflateZlibStream.\n\ninflate_zlib(source::Vector{UInt8}; ignore_checksum = true)\n\nSkip computing Adler checksum for consistency checking.\n\nReference: RFC 1950\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Inflate]\nOrder = [:type, :function]"
},

]}
