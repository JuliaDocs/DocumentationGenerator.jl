var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Blobs-1",
    "page": "Readme",
    "title": "Blobs",
    "category": "section",
    "text": "Blobs makes it easy to lay out complex data-structures within a single memory region. Data-structures built using this library:are relocatable - internal pointers are converted to offsets, so the entire memory region can be written to / read from disk or sent over the network without pointer patching\nrequire no deserialization - they can be directly read/written without first copying the data into a Julia-native data-structure\nrequire no additional heap allocation - field access is just pointer arithmetic and every field read/write returns an isbitstype type which can stored on the stackThis makes them ideal for implementing out-of-core data-structures or for DMA to co-processors."
},

{
    "location": "#Safety-1",
    "page": "Readme",
    "title": "Safety",
    "category": "section",
    "text": "This library does not protect against:giving an incorrect length when creating a Blob\nusing a Blob after freeing the underlying allocationApart from that, all other operations are safe. User error or invalid data can cause AssertionError or BoundsError but cannot segfault the program or modify memory outside the blob."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Acquire a Ptr{Nothing} from somewhere:julia> struct Foo\n       x::Int64\n       y::Bool\n       end\n\njulia> p = Libc.malloc(sizeof(Foo))\nPtr{Nothing} @0x0000000006416020We can interpret this pointer as any isbitstype Julia struct:julia> foo = Blob{Foo}(p, 0, sizeof(Foo))\nBlobs.Blob{Foo}(Ptr{Nothing} @0x0000000004de87c0, 0, 16)(See Blobs.malloc_and_init for a safer way to create a fresh blob).We can access references to fields of Foo using the fieldnames directly:julia> foo.x\nBlobs.Blob{Int64}(Ptr{Nothing} @0x0000000004de87c0, 0, 16)\n\njulia> foo.y\nBlobs.Blob{Bool}(Ptr{Nothing} @0x0000000004de87c0, 8, 16)And use [] to derefence Blobs:julia> foo[]\nFoo(114974496, true)\n\njulia> foo.x[]\n114974496\n\njulia> foo.y[]\ntrue\n\njulia> y = foo.y\nBlobs.Blob{Bool}(Ptr{Nothing} @0x0000000004de87c0, 8, 16)\n\njulia> y[]\ntrueSimilarly for setting values:julia> foo[] = Foo(12, true)\nFoo(12, true)\n\njulia> foo[]\nFoo(12, true)\n\njulia> foo.y[] = false\nfalse\n\njulia> foo.y[]\nfalse\n\njulia> x = foo.x\nBlobs.Blob{Int64}(Ptr{Nothing} @0x0000000004de87c0, 0, 16)\n\njulia> x[] = 42\n42\n\njulia> x[]\n42\n\njulia> foo.x[]\n42The various data-structures provided can be nested arbitrarily. See the tests for examples."
},

{
    "location": "autodocs/#Blobs.Blob",
    "page": "Docstrings",
    "title": "Blobs.Blob",
    "category": "type",
    "text": "A pointer to a T stored inside a Blob.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blobs.BlobBitVector",
    "page": "Docstrings",
    "title": "Blobs.BlobBitVector",
    "category": "type",
    "text": "A fixed-length bit vector whose data is stored in a Blob.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blobs.BlobString",
    "page": "Docstrings",
    "title": "Blobs.BlobString",
    "category": "type",
    "text": "A string whose data is stored in a Blob.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blobs.BlobVector",
    "page": "Docstrings",
    "title": "Blobs.BlobVector",
    "category": "type",
    "text": "A fixed-length vector whose data is stored in a Blob.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blobs.child_size-Union{Tuple{Type{T}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "Blobs.child_size",
    "category": "method",
    "text": "child_size(::Type{T}, args...) where {T}\n\nThe number of bytes needed to allocate children of T, not including self_size(T).\n\nDefaults to 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blobs.free-Tuple{Blobs.Blob}",
    "page": "Docstrings",
    "title": "Blobs.free",
    "category": "method",
    "text": "free(blob::Blob)\n\nFree the underlying allocation for blob.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blobs.init-Union{Tuple{T}, Tuple{Blob{T},Blob{Nothing}}} where T",
    "page": "Docstrings",
    "title": "Blobs.init",
    "category": "method",
    "text": "init(blob::Blob{T}, free::Blob{Nothing}, args...)::Blob{Nothing} where T\n\nInitialize blob, where free is the beginning of the remaining free space. Must return free + child_size(T, args...).\n\nThe default implementation where child_size(T) == 0 does nothing. Override this method to add custom initializers for your types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blobs.init-Union{Tuple{T}, Tuple{Blob{T},Vararg{Any,N} where N}} where T",
    "page": "Docstrings",
    "title": "Blobs.init",
    "category": "method",
    "text": "init(blob::Blob{T}, args...) where T\n\nInitialize blob.\n\nAssumes that blob it at least self_size(T) + child_size(T, args...) bytes long.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blobs.malloc-Union{Tuple{T}, Tuple{Type{T},Vararg{Any,N} where N}} where T",
    "page": "Docstrings",
    "title": "Blobs.malloc",
    "category": "method",
    "text": "malloc(::Type{T}, args...)::Blob{T} where T\n\nAllocate an uninitialized Blob{T}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blobs.malloc_and_init-Union{Tuple{T}, Tuple{Type{T},Vararg{Any,N} where N}} where T",
    "page": "Docstrings",
    "title": "Blobs.malloc_and_init",
    "category": "method",
    "text": "malloc_and_init(::Type{T}, args...)::Blob{T} where T\n\nAllocate and initialize a new Blob{T}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Blobs.self_size-Union{Tuple{Type{T}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "Blobs.self_size",
    "category": "method",
    "text": "self_size(::Type{T}, args...) where {T}\n\nThe number of bytes needed to allocate T itself.\n\nDefaults to sizeof(T).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Blobs]\nOrder = [:type, :function]"
},

]}
