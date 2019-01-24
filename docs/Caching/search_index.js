var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Caching.jl-1",
    "page": "Readme",
    "title": "Caching.jl",
    "category": "section",
    "text": "Memory and disk memoizer written in Julia.(Image: License)  (Image: Build Status)  (Image: Coverage Status)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "This package provides a simple programming interface for caching function outputs (i.e. memoization) to memory, disk or both. The API that exposes functionality for creating in-memory cache structures and accessing, writing and synchronizing these to disk. It supports maxim sizes (in number of objects of KiB of memory) and compression (through TranscodingStreams.jl codecs). Since this a work-in-progress, there are bound to be rough edges and little to no documentation. However, the interface is accessible enough to be productively employed at this stage."
},

{
    "location": "#Main-features-1",
    "page": "Readme",
    "title": "Main features",
    "category": "section",
    "text": "Non intrusive, easy to use @cache macro\nFast and type stable if type annotations are used in the function definitions\nLoading/saving from/to disk with compression (.bzip2 and .gzip)\nMaximum in-memory cache size (either number of objects or bytes)\nCan save almost anything to disk (uses Serialization so it is slow)"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "The caching object is named Cache and it can be easily constructed using the @cache macro. Most of the examples provided here employ the macros as this is the recommended usage pattern. There are several supported expressions that can be used to construct Caches:# Function definitions\njulia> using Caching\n       @cache function foo(x)  # or `@cache function foo(x)::Type` for type stability\n            # ...\n       end\n\n# 1-argument anonymous functions\njulia> @cache foo2 = x->x+1  # or `@cache foo2 = x::Int->x+1` for type-stability\n\n# Existing functions (Caching.Cache objects returned)\njulia> foo3(x) = x;\n       foo3_cache = @cache foo3 # or `@cache foo3::Int` for type-stabilityThe Cache object itself supports reading/writing cached entries from/to memory and to disk.julia> foo(x) = x+1\n       dc = @cache foo \"somefile.bin\"\n# foo (cache with 0 entries, 0 in memory 0 on disk)\n\njulia> dc(1)  # add one entry to cache\n# 2\n\njulia> dc\n# foo (cache with 1 entry, 1 in memory 0 on disk)\n\njulia> dc.cache\n# Dict{UInt64,Any} with 1 entry:\n#   0x17aa5f390831e792 => 2\n\njulia> dc.offsets  # disk cache information (hash=>(start byte, end byte))\n# Dict{UInt64,Tuple{UInt64,UInt64}} with 0 entries\n\njulia> dc.filename  # file information\n# /absolute/path/to/somefile.bin\"\n\njulia> isfile(dc.filename)  # file does not exist\n# falseThe cache can be written to disk using the persist! function or the @persist! macro:julia> @persist! dc  # writes cache to disk and updates offsets \n# foo (cache with 1 entry, 1 in memory 1 on disk)\n\njulia> isfile(dc.filename)\n# true\n\njulia> dc.offsets  # file information\n# Dict{UInt64,Tuple{UInt64,UInt64}} with 1 entry:\n#   0x17aa5f390831e792 => ...The cache can be deleted using the empty! function or the @empty! macro:julia> @empty! dc  # delete memory cache\n# foo (cache with 1 entry, 0 in memory 1 on disk)\n\njulia> @empty! dc true  # delete also the disk cache\n# foo (cache with 0 entries, 0 in memory 0 on disk)\n\njulia> isfile(\"somefile.bin\")\nfalseIf no file name is provided when creating a Cache object, a file name will be automatically generated:julia> dc = @cache foo\n# foo (cache with 0 entries, 0 in memory 0 on disk)\n\njulia> dc.filename\n# \"/absolute/path/to/current/directory/_c081687ce69ccdaf_.bin\"In case of a Cache memory miss, the cached data is retrieved from disk if available:julia> dc = @cache foo::Int \"somefile.bin\"\n       for i in 1:3 dc(i); end              # add 3 entries\n       @persist! dc\n       @assert isfile(\"somefile.bin\")\n       @empty! dc                           # empty memory cache\n       @assert isempty(dc.cache)\n       for i in 4:6 dc(i); end              # add 3 new entries\n       dc\n# foo (cache with 6 entries, 3 in memory 3 on disk)\n\njulia> dc(1)  # only on disk\n# ┌ Warning: Memory cache miss, loading hash=0x17aa5f390831e792...\n# └ @ Caching ../Caching.jl/src/cache.jl:53\n# 2\n\njulia> dc(4)  # in memory\n# 5Synchronization between the memory and disk cache contents is done with the help of the syncache! function and @syncache! macro:julia> dc = @cache foo \"somefile.bin\"       # make a Cache object\n       for i in 1:5 dc(i); end              # populate the memory cache with 5 entries\n       @persist! dc                         # write to disk the cache the 5 entries\n       @empty! dc                           # delete the memory cache\n# foo (cache with 5 entries, 0 in memory 5 on disk)\n\njulia> @syncache! dc \"disk\"                 # load cache from disk\n# foo (cache with 5 entries, 5 in memory 5 on disk)\n\njulia> @empty! dc  # empty memory cache \n       for i in 1:3  dc(-i); end            # populate the memory cache with 3 new entries\n       @syncache! dc \"memory\"               # write memory cache to disk\n# foo (cache with 8 entries, 3 in memory 8 on disk)\n\njulia> @empty! dc\n       @syncache! dc \"disk\"                 # load cache from disk\n# foo (cache with 8 entries, 8 in memory 8 on disk)\n\njulia> dc.cache  # view the cache\n# Dict{UInt64,Any} with 8 entries:\n#   0xaa9c225ce8a1bd59 => 3\n#   ...\n\njulia> dc.offsets  # view the file offsets\n# Dict{UInt64,Tuple{UInt64,UInt64}} with 8 entries:\n#   0xaa9c225ce8a1bd59 => ...\n#   ...Synchronization of disk and memory cache contents can also be performed in one go by passing \"both\" in the @syncache! macro call:julia> dc = @cache foo;\n       for i in 1:3 dc(i); end              # populate the memory cache with 3 entries\n       @syncache! dc \"memory\"               # write to disk the 3 entries\n       @empty! dc                           # delete the in-memory cache\n       for i in 1:5 dc(-i); end             # populate the in-memory cache with 5 new entries\n       @syncache! dc \"both\"                 # sync both memory and disk\n# foo (cache with 8 entries, 8 in memory 8 on disk)\n\njulia> dc.cache\n# Dict{UInt64,Any} with 8 entries:\n#   0xd27248f96ad8691b => -4\n#   ...Cache objects support also a maximum size that specifies the maximum size in either number of entries (i.e. function outputs) or the maximum memory size allowed:julia> foo(x) = x\n       dc = @cache foo \"somefile.bin\" 3     # 3 objects max; use Int for objects\n       for i in 1:3 dc(i) end               # cache is full\n       dc(4)                                # 1 is removed (FIFO rule)\n       @assert !(1 in values(dc.cache)) &&\n         all(i in values(dc.cache) for i in 2:4)\n       @persist! dc\n       @empty! dc                           # 2,3,4 on disk\n       for i in 5:6 dc(i) end               # 5 and 6 in memory\n       @syncache! dc                        # brings 4 (most recent on disk) in memory and writes 5,6 on disk\n# ┌ Warning: Memory cache full, loaded 1 out of 3 entries.\n# └ @ Caching ~/.../Caching.jl/src/utils.jl:145\n# foo (cache with 5 entries, 3 in memory 5 on disk)\n\njulia> dc = @cache foo \"somefile.bin\" 1.0   # 1.0 --> 1 KiB = 1024 bytes max; use Float64 for KiB\n       for i in 1:128 dc(i) end             # cache is full (128 x 8bytes/Int = 1024 bytes)\n       dc(129)                              # 1 is removed\n       @assert !(1 in values(dc.cache)) &&\n         all(i in values(dc.cache) for i in 2:129)\n       @persist! dc\n       @empty! dc                           # 2,...,129 on disk, nothing in memory\n       for i in 130:130+126 dc(i) end       # write 127 entries\n       #--> 130,..,256 in memory, 2,...,129 on disk\n       @syncache! dc                        # brings 129 in memory and 130,...,256 on disk\n# ┌ Warning: Memory cache full, loaded 1 out of 128 entries.\n# └ @ Caching ~/.../Caching.jl/src/utils.jl:145\n# foo (cache with 255 entries, 128 in memory 255 on disk)More usage examples can be found in the test/runtests.jl file."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The installation can be done through the usual channels (manually by cloning the repository or installing it though the julia REPL)."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This code has an MIT license and therefore it is free."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1] https://en.wikipedia.org/wiki/Memoization[2] https://en.wikipedia.org/wiki/CachereplacementpoliciesFor other caching solutions,  check out also LRUCache.jl, Memoize.jl and Anamnesis.jl"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Caching]\nOrder = [:type, :function]"
},

]}
