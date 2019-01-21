var documenterSearchIndex = {"docs": [

{
    "location": "#Blosc.compress",
    "page": "Home",
    "title": "Blosc.compress",
    "category": "function",
    "text": "compress(data; level=5, shuffle=true, itemsize)\n\nReturn a Vector{UInt8} of the Blosc-compressed data, where data is an array or a string.\n\nThe level keyword indicates the compression level (between 0=no compression and 9=max), shuffle indicates whether to use Blosc\'s shuffling preconditioner, and the shuffling preconditioner is optimized for arrays of binary items of size (in bytes) itemsize (defaults to sizeof(eltype(data)) for arrays and the size of the code units for strings).\n\n\n\n\n\n"
},

{
    "location": "#Blosc.compress!",
    "page": "Home",
    "title": "Blosc.compress!",
    "category": "function",
    "text": "compress!(dest::Vector{UInt8}, src; kws...)\n\nLike compress(src; kws...), but writes to a pre-allocated array dest of bytes.   The return value is the size in bytes of the data written to dest, or 0 if the buffer was too small.\n\n\n\n\n\n"
},

{
    "location": "#Blosc.decompress!-Union{Tuple{T}, Tuple{DenseArray{T,1},DenseArray{UInt8,1}}} where T",
    "page": "Home",
    "title": "Blosc.decompress!",
    "category": "method",
    "text": "decompress!(dest::Vector{T}, src::Vector{UInt8})\n\nLike decompress, but uses a pre-allocated destination buffer dest, which is resized as needed to store the decompressed data from src.\n\n\n\n\n\n"
},

{
    "location": "#Blosc.decompress-Union{Tuple{T}, Tuple{Type{T},DenseArray{UInt8,1}}} where T",
    "page": "Home",
    "title": "Blosc.decompress",
    "category": "method",
    "text": "decompress(T::Type, src::Vector{UInt8})\n\nReturn the compressed buffer src as an array of element type T.\n\n\n\n\n\n"
},

{
    "location": "#Blosc.compressor_info-Tuple{AbstractString}",
    "page": "Home",
    "title": "Blosc.compressor_info",
    "category": "method",
    "text": "compressor_info(name::AbstractString)\n\nGiven the name of a compressor in the Blosc library, return a tuple (compressor name, library name, version number).\n\n\n\n\n\n"
},

{
    "location": "#Blosc.compressor_info-Tuple{DenseArray{UInt8,1}}",
    "page": "Home",
    "title": "Blosc.compressor_info",
    "category": "method",
    "text": "compressor_info(src::Vector{UInt8})\n\nGiven a compressed array src, returns the information about the compression algorithm used in a CompressionInfo data structure.\n\n\n\n\n\n"
},

{
    "location": "#Blosc.compressor_library-Tuple{DenseArray{UInt8,1}}",
    "page": "Home",
    "title": "Blosc.compressor_library",
    "category": "method",
    "text": "compressor_name(src::Vector{UInt8})\n\nGiven a compressed array src, returns the name (string) of the compression library that was used to generate it.  (This is not the same as the name of the compression algorithm.)\n\n\n\n\n\n"
},

{
    "location": "#Blosc.compressors-Tuple{}",
    "page": "Home",
    "title": "Blosc.compressors",
    "category": "method",
    "text": "compressors()\n\nReturn the list of compression algorithms in the Blosc library build as an array of strings.\n\n\n\n\n\n"
},

{
    "location": "#Blosc.compressors_info-Tuple{}",
    "page": "Home",
    "title": "Blosc.compressors_info",
    "category": "method",
    "text": "compressors_info()\n\nReturn an array of tuples (compressor name, library name, version number) for all of the compression libraries included in the Blosc library build.\n\n\n\n\n\n"
},

{
    "location": "#Blosc.free_resources!-Tuple{}",
    "page": "Home",
    "title": "Blosc.free_resources!",
    "category": "method",
    "text": "free_resources!()\n\nFree possible memory temporaries and thread resources. Use this when you are not going to use Blosc for a long while. In case of problems releasing resources, it returns false, whereas it returns true on success.\n\n\n\n\n\n"
},

{
    "location": "#Blosc.set_blocksize",
    "page": "Home",
    "title": "Blosc.set_blocksize",
    "category": "function",
    "text": "set_blocksize(blocksize=0)\n\nForce the use of a specific compression blocksize. If 0 (the default), an appropriate blocksize will be chosen automatically by blosc.\n\n\n\n\n\n"
},

{
    "location": "#Blosc.set_compressor-Tuple{AbstractString}",
    "page": "Home",
    "title": "Blosc.set_compressor",
    "category": "method",
    "text": "set_compressor(s::AbstractString)\n\nSet the current compression algorithm to s.  The currently supported algorithms in the default Blosc module build are \"blosclz\", \"lz4\", and \"l4hc\".   (Throws an ArgumentError if s is not the name of a supported algorithm.)  Returns a nonnegative integer code used internally by Blosc to identify the compressor.\n\n\n\n\n\n"
},

{
    "location": "#Blosc.set_num_threads",
    "page": "Home",
    "title": "Blosc.set_num_threads",
    "category": "function",
    "text": "set_num_threads(n=Sys.CPU_CORES)\n\nTells Blosc to use n threads for compression/decompression.   If this function is never called, the default is 1 (serial).\n\n\n\n\n\n"
},

{
    "location": "#Blosc.sizes-Tuple{DenseArray{UInt8,1}}",
    "page": "Home",
    "title": "Blosc.sizes",
    "category": "method",
    "text": "sizes(buf::Vector{UInt8})\n\nGiven a compressed buffer buf, return a tuple of the (uncompressed, compressed, block) sizes in bytes.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Blosc]\nOrder = [:type, :function]"
},

]}
