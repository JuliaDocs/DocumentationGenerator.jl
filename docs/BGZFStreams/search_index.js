var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BGZFStreams-1",
    "page": "Readme",
    "title": "BGZFStreams",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)BGZF is a compression format that supports random access using virtual file offsets.See the SAM/BAM file format specs for the details of BGZF: https://samtools.github.io/hts-specs/SAMv1.pdf."
},

{
    "location": "#Synopsis-1",
    "page": "Readme",
    "title": "Synopsis",
    "category": "section",
    "text": "using BGZFStreams\n\n# The first argument is a filename or an IO object (e.g. IOStream).\nstream = BGZFStream(\"data.bgz\")\n\n# BGZFStream is a subtype of IO and works like a usual IO object.\nwhile !eof(stream)\n    byte = read(stream, UInt8)\n    # do something...\nend\n\n# BGZFStream is also seekable with a VirtualOffset.\nseek(stream, VirtualOffset(0, 2))\n\n# The current virtual file offset is available.\nvirtualoffset(stream)\n\nclose(stream)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The BGZFStreams.jl package exports three types and a function to the package user:Types:\nBGZFStream: an IO stream of the BGZF file format\nVirtualOffset: data offset in a BGZF file\nBGZFDataError: an error type thrown when reading a malformed byte stream\nFunction:\nvirtualoffset(stream): returns the current virtual file offset of streamThe BGZFStream type wraps an underlying IO object and transparently inflate (for reading) or deflate (for writing) data. Since it is a subtype of IO, an instance of it behaves like other IO objects, but the seek method takes a virtual offset instead of a normal file offset as its second argument.The VirtualOffset type represents a 64-bit virtual file offset as described in the specification of the SAM file format. That is, the most significant 48-bit integer of a virtual offset is a byte offset to the BGZF file to the beginning position of a BGZF block and the least significant 16-bit integer is a byte offset to the uncompressed byte(s).The BGZFDataError type is a subtype of Exception and used to throw an exception when invalid data are read.The virtualoffset(stream::BGZFStream) returns the current virtual file offset. More specifically, it returns the virtual offset of the next reading byte while reading and the next writing byte while writing."
},

{
    "location": "#Parallel-Processing-1",
    "page": "Readme",
    "title": "Parallel Processing",
    "category": "section",
    "text": "A major bottleneck of processing a BGZF file is the inflation and deflation process. The throughput of reading data is ~100 MiB/s, which is quite slower than that of raw reading from a file. In order to alleviate this problem, this package supports parallelized inflation when reading compressed data. This requires the support of multi-threading introduced in Julia 0.5. The JULIA_NUM_THREADS environmental variable sets the number of threads used for processing.bash-3.2$ JULIA_NUM_THREADS=2 julia -q\njulia> using Base.Threads\n\njulia> nthreads()\n2"
},

{
    "location": "autodocs/#BGZFStreams.BGZFStream",
    "page": "Docstrings",
    "title": "BGZFStreams.BGZFStream",
    "category": "type",
    "text": "BGZFStream(io::IO[, mode::AbstractString=\"r\"])\nBGZFStream(filename::AbstractString[, mode::AbstractString=\"r\"])\n\nCreate an I/O stream for the BGZF compression format.\n\nThe first argument is either an IO object or a filename. If mode is \"r\" (read) the BGZF stream will be in read mode and decompress the underlying BGZF blocks while reading. In read mode, BGZFStream supports the seek operation using a virtual file offset (see VirtualOffset). If mode is \"w\" (write) or \"a\" (append) the BGZF stream will be in write mode and compress written data to BGZF blocks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BGZFStreams.VirtualOffset-Tuple{Integer,Integer}",
    "page": "Docstrings",
    "title": "BGZFStreams.VirtualOffset",
    "category": "method",
    "text": "VirtualOffset(block_offset::Integer, inblock_offset::Integer)\n\nCreate a virtual file offset from block_offset and inblock_offset.\n\nblock_offset is an offset pointing to the beggining position of a BGZF block in a BGZF file and inblock_offset is an offset pointing to the begining position of a binary data within a uncompressed BGZF block. These values are zero-based and their valid ranges are [0, 1 << 48) and [0, 1 << 16), respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BGZFStreams.virtualoffset-Tuple{BGZFStream}",
    "page": "Docstrings",
    "title": "BGZFStreams.virtualoffset",
    "category": "method",
    "text": "virtualoffset(stream::BGZFStream)\n\nReturn the current virtual file offset of stream.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BGZFStreams]\nOrder = [:type, :function]"
},

]}
