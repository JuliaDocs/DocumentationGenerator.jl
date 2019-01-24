var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#The-Blosc-Module-for-Julia-1",
    "page": "Readme",
    "title": "The Blosc Module for Julia",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)This module provides fast lossless compression for the Julia language by interfacing the Blosc Library.Note that Blosc is currently limited to 32-bit buffer sizes.  Blosc does run just fine on 64-bit systems; it just can\'t compress arrays bigger than 2GB.  Note also that this limitation does not affect the use of Blosc compression for HDF5, since HDF5 breaks up large arrays into small chunks before compressing them.  So, don\'t worry about this if you are just using Blosc within the HDF5 package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install, simply run Pkg.add(\"Blosc\") in Julia.  Precompiled binaries are provided for Mac and Windows systems, while on other systems the Blosc library will be downloaded and compiled."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The functions provided are:compress(src::Array{T}; level=5, shuffle=true, itemsize=sizeof(T)): returns a Vector{UInt8} consisting of src in compressed form.  level is the compression level (between 0=no compression and 9=max), shuffle indicates whether to use Blosc\'s shuffling preconditioner, which is optimized for arrays of binary items of size itemsize.\ncompress!(dest::Vector{UInt8}, src; ...): as compress, but uses a pre-allocated destination buffer dest.  Returns the size (in bytes) of the compressed data, or 0 if the buffer was too small.\ndecompress(T::Type, src::Vector{UInt8}): return the compressed buffer src as an array of element type T.\ndecompress!(dest::Vector{T}, src::Vector{UInt8}): like decompress, but uses a pre-allocated destination buffer, which is resized as needed to store the decompressed data.\nBlosc.set_num_threads(n=CPU_CORES): tells Blosc to use n threads (initially 1).\nBlosc.compressors(): returns an array of strings for the available compression algorithms.  (Currently, only the blosclz, lz4, and lz4hc algorithms are included.)\nBlosc.set_compressor(s::AbstractString): set the current compression algorithm"
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "This module was written by Steven G. Johnson and Jake Bolewski (who had independently written his own Blosc.jl package which is now merged with this one)."
},

{
    "location": "autodocs/#Blosc.compress",
    "page": "Docstrings",
    "title": "Blosc.compress",
    "category": "function",
    "text": "compress(data; level=5, shuffle=true, itemsize)\n\nReturn a Vector{UInt8} of the Blosc-compressed data, where data is an array or a string.\n\nThe level keyword indicates the compression level (between 0=no compression and 9=max), shuffle indicates whether to use Blosc\'s shuffling preconditioner, and the shuffling preconditioner is optimized for arrays of binary items of size (in bytes) itemsize (defaults to sizeof(eltype(data)) for arrays and the size of the code units for strings).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blosc.compress!",
    "page": "Docstrings",
    "title": "Blosc.compress!",
    "category": "function",
    "text": "compress!(dest::Vector{UInt8}, src; kws...)\n\nLike compress(src; kws...), but writes to a pre-allocated array dest of bytes.   The return value is the size in bytes of the data written to dest, or 0 if the buffer was too small.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blosc.decompress!-Union{Tuple{T}, Tuple{DenseArray{T,1},DenseArray{UInt8,1}}} where T",
    "page": "Docstrings",
    "title": "Blosc.decompress!",
    "category": "method",
    "text": "decompress!(dest::Vector{T}, src::Vector{UInt8})\n\nLike decompress, but uses a pre-allocated destination buffer dest, which is resized as needed to store the decompressed data from src.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blosc.decompress-Union{Tuple{T}, Tuple{Type{T},DenseArray{UInt8,1}}} where T",
    "page": "Docstrings",
    "title": "Blosc.decompress",
    "category": "method",
    "text": "decompress(T::Type, src::Vector{UInt8})\n\nReturn the compressed buffer src as an array of element type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blosc.compressor_info-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "Blosc.compressor_info",
    "category": "method",
    "text": "compressor_info(name::AbstractString)\n\nGiven the name of a compressor in the Blosc library, return a tuple (compressor name, library name, version number).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blosc.compressor_info-Tuple{DenseArray{UInt8,1}}",
    "page": "Docstrings",
    "title": "Blosc.compressor_info",
    "category": "method",
    "text": "compressor_info(src::Vector{UInt8})\n\nGiven a compressed array src, returns the information about the compression algorithm used in a CompressionInfo data structure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blosc.compressor_library-Tuple{DenseArray{UInt8,1}}",
    "page": "Docstrings",
    "title": "Blosc.compressor_library",
    "category": "method",
    "text": "compressor_name(src::Vector{UInt8})\n\nGiven a compressed array src, returns the name (string) of the compression library that was used to generate it.  (This is not the same as the name of the compression algorithm.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blosc.compressors-Tuple{}",
    "page": "Docstrings",
    "title": "Blosc.compressors",
    "category": "method",
    "text": "compressors()\n\nReturn the list of compression algorithms in the Blosc library build as an array of strings.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blosc.compressors_info-Tuple{}",
    "page": "Docstrings",
    "title": "Blosc.compressors_info",
    "category": "method",
    "text": "compressors_info()\n\nReturn an array of tuples (compressor name, library name, version number) for all of the compression libraries included in the Blosc library build.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blosc.free_resources!-Tuple{}",
    "page": "Docstrings",
    "title": "Blosc.free_resources!",
    "category": "method",
    "text": "free_resources!()\n\nFree possible memory temporaries and thread resources. Use this when you are not going to use Blosc for a long while. In case of problems releasing resources, it returns false, whereas it returns true on success.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blosc.set_blocksize",
    "page": "Docstrings",
    "title": "Blosc.set_blocksize",
    "category": "function",
    "text": "set_blocksize(blocksize=0)\n\nForce the use of a specific compression blocksize. If 0 (the default), an appropriate blocksize will be chosen automatically by blosc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blosc.set_compressor-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "Blosc.set_compressor",
    "category": "method",
    "text": "set_compressor(s::AbstractString)\n\nSet the current compression algorithm to s.  The currently supported algorithms in the default Blosc module build are \"blosclz\", \"lz4\", and \"l4hc\".   (Throws an ArgumentError if s is not the name of a supported algorithm.)  Returns a nonnegative integer code used internally by Blosc to identify the compressor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blosc.set_num_threads",
    "page": "Docstrings",
    "title": "Blosc.set_num_threads",
    "category": "function",
    "text": "set_num_threads(n=Sys.CPU_CORES)\n\nTells Blosc to use n threads for compression/decompression.   If this function is never called, the default is 1 (serial).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blosc.sizes-Tuple{DenseArray{UInt8,1}}",
    "page": "Docstrings",
    "title": "Blosc.sizes",
    "category": "method",
    "text": "sizes(buf::Vector{UInt8})\n\nGiven a compressed buffer buf, return a tuple of the (uncompressed, compressed, block) sizes in bytes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Blosc]\nOrder = [:type, :function]"
},

]}
