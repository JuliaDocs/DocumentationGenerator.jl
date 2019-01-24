var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JLD2-1",
    "page": "Readme",
    "title": "JLD2",
    "category": "section",
    "text": "(Image: Travis Build Status) (Image: AppVeyor Build Status) (Image: codecov.io)JLD2 saves and loads Julia data structures in a format comprising a subset of HDF5, without any dependency on the HDF5 C library. It typically outperforms the previous JLD package (sometimes by multiple orders of magnitude) and often outperforms Julia\'s built-in serializer. While other HDF5 implementations supporting HDF5 File Format Specification Version 3.0 (i.e. libhdf5 1.10 or later) should be able to read the files that JLD2 produces, JLD2 is likely to be incapable of reading files created or modified by other HDF5 implementations. JLD2 does not aim to be backwards or forwards compatible with the previous JLD package.The code here should work on Julia 0.6. It has extensive unit tests, but it has received little testing in the wild. Please use caution. If your tolerance for data loss is low, JLD may be a better choice at this time."
},

{
    "location": "#Reading-and-writing-data-1",
    "page": "Readme",
    "title": "Reading and writing data",
    "category": "section",
    "text": ""
},

{
    "location": "#@save-and-@load-macros-1",
    "page": "Readme",
    "title": "@save and @load macros",
    "category": "section",
    "text": "The @save and @load macros are the simplest way to interact with a JLD2 file. The @save macro writes one or more variables from the current scope to the JLD file. For example:using JLD2, FileIO\nhello = \"world\"\nfoo = :bar\n@save \"example.jld2\" hello fooThis writes the variables hello and foo to datasets in a new JLD2 file named example.jld2. The @load macro loads variables out of a JLD2 file:@load \"example.jld2\" hello fooThis assigns the contents of the hello and foo datasets to variables of the same name in the current scope.It is best practice to explicitly name the variables to be loaded and saved from a file, so that it is clear from whence these variables arise. However, for convenience, JLD2 also provides variants of @load and @save that do not require variables to be named explicitly. When called with no variable arguments, @save <filename> writes all variables in the global scope of the current module to file <filename>, while @load <filename> loads all variables in file <filename>. When called with no variable arguments, @load requires that the file name is provided as a string literal, i.e., it is not possible to select the file at runtime."
},

{
    "location": "#save-and-load-functions-1",
    "page": "Readme",
    "title": "save and load functions",
    "category": "section",
    "text": "The save and load functions, provided by FileIO, provide an alternative mechanism to read and write data from a JLD2 file. To use these functions, you must say using FileIO; it is not necessary to say using JLD2 since FileIO will determine the correct package automatically.The save function accepts an Associative yielding the key/value pairs, where the key is a string representing the name of the dataset and the value represents its contents:using FileIO\nsave(\"example.jld2\", Dict(\"hello\" => \"world\", \"foo\" => :bar))The save function can also accept the dataset names and contents as arguments:save(\"example.jld2\", \"hello\", \"world\", \"foo\", :bar)When using the save function, the file extension must be .jld2, since the extension .jld currently belongs to the previous JLD package.If called with a filename argument only, the load function loads all datasets from the given file into a Dict:load(\"example.jld2\") # -> Dict{String,Any}(\"hello\" => \"world\", \"foo\" => :bar)If called with a single dataset name, load returns the contents of that dataset from the file:load(\"example.jld2\", \"hello\") # -> \"world\"If called with multiple dataset names, load returns the contents of the given datasets as a tuple:load(\"example.jld2\", \"hello\", \"foo\") # -> (\"hello\", :bar)"
},

{
    "location": "#File-interface-1",
    "page": "Readme",
    "title": "File interface",
    "category": "section",
    "text": "It is also possible to interact with JLD2 files using a file-like interface. The jldopen function accepts a file name and an argument specifying how the file should be opened:f = jldopen(\"example.jld2\", \"r\")  # open read-only (default)\nf = jldopen(\"example.jld2\", \"r+\") # open read/write, failing if no file exists\nf = jldopen(\"example.jld2\", \"w\")  # open read/write, overwriting existing file\nf = jldopen(\"example.jld2\", \"a+\") # open read/write, preserving contents of existing file or creating a new fileData can be written to the file using write(f, \"name\", data) or f[\"name\"] = data, or read from the file using read(f, \"name\") or f[\"name\"]. When you are done with the file, remember to call close(f).Like open, jldopen also accepts a function as the first argument, permitting do-block syntax:jldopen(\"example.jld2\", \"w\") do file\n    file[\"bigdata\"] = randn(5)\nend"
},

{
    "location": "#Groups-1",
    "page": "Readme",
    "title": "Groups",
    "category": "section",
    "text": "It is possible to construct groups within a JLD2 file, which may or may not be useful for organizing your data. You can create groups explicitly:jldopen(\"example.jld2\", \"w\") do file\n    mygroup = JLD2.Group(file, \"mygroup\")\n    mygroup[\"mystuff\"] = 42\nendor implicitly, by saving a variable with a name containing slashes as path delimiters:jldopen(\"example.jld2\", \"w\") do file\n    file[\"mygroup/mystuff\"] = 42\nend\n# or save(\"example.jld2\", \"mygroup/mystuff\", 42)Both of these examples yield the same group structure, which you can see at the REPL:julia> file = jldopen(\"example.jld2\", \"r\")\nJLDFile /Users/simon/example.jld2 (read-only)\n └─📂 mygroup\n    └─🔢 mystuffSimilarly, you can access groups directly:jldopen(\"example.jld2\", \"r\") do file\n    @assert file[\"mygroup\"][\"mystuff\"] == 42\nendor using slashes as path delimiters:@assert load(\"example.jld2\", \"mygroup/mystuff\") == 42"
},

{
    "location": "autodocs/#JLD2.jldopen",
    "page": "Docstrings",
    "title": "JLD2.jldopen",
    "category": "function",
    "text": "jldopen(fname::AbstractString, mode::AbstractString)\n\nOpens a JLD file at path fname.\n\n\"r\": Open for reading only, failing if no file exists \"r+\": Open for reading and writing, failing if no file exists \"w\"/\"w+\": Open for reading and writing, overwriting the file if it already exists \"a\"/\"a+\": Open for reading and writing, creating a new file if none exists, but               preserving the existing file if one is present\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.CustomSerialization",
    "page": "Docstrings",
    "title": "JLD2.CustomSerialization",
    "category": "type",
    "text": "CustomSerialization{T,S}\n\nOn-disk representation for data that is written as if it were of Julia type T, but is read as type S.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.GlobalHeap",
    "page": "Docstrings",
    "title": "JLD2.GlobalHeap",
    "category": "type",
    "text": "GlobalHeap\n\nRepresents an HDF5 global heap structure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.Group",
    "page": "Docstrings",
    "title": "JLD2.Group",
    "category": "type",
    "text": "Group{T}\n\nJLD group object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.Group-Tuple{JLD2.JLDFile,AbstractString}",
    "page": "Docstrings",
    "title": "JLD2.Group",
    "category": "method",
    "text": "Group(f::JLDFile, name::AbstractString)\n\nConstruct an empty group named name at the top level of JLDFile f.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.Group-Union{Tuple{T}, Tuple{Group{T},AbstractString}} where T",
    "page": "Docstrings",
    "title": "JLD2.Group",
    "category": "method",
    "text": "Group(g::Group, name::AbstractString)\n\nConstruct a group named name as a child of group g.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.H5Datatype",
    "page": "Docstrings",
    "title": "JLD2.H5Datatype",
    "category": "type",
    "text": "H5Datatype\n\nSupertype of all HDF5 datatypes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.IndirectPointer",
    "page": "Docstrings",
    "title": "JLD2.IndirectPointer",
    "category": "type",
    "text": "IndirectPointer\n\nWhen writing data, we may need to enlarge the memory mapping, which would invalidate any memory addresses arising from the old mmap pointer. IndirectPointer holds a pointer to the startptr field of an MmapIO, and the offset relative to that pointer. It defers computing a memory address until converted to a Ptr{T}, so the memory mapping can be enlarged and addresses will remain valid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.JLDFile",
    "page": "Docstrings",
    "title": "JLD2.JLDFile",
    "category": "type",
    "text": "JLDFile{T<:IO}\n\nJLD file object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.JLDWriteSession",
    "page": "Docstrings",
    "title": "JLD2.JLDWriteSession",
    "category": "type",
    "text": "JLDWriteSession{T}\n\nA JLDWriteSession keeps track of references to serialized objects. If T is a Dict, h5offset maps an object ID (returned by calling objectid) to th RelOffset of the written dataset. If it is Union{}, then references are not tracked, and objects referenced multiple times are written multiple times.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.ReadRepresentation",
    "page": "Docstrings",
    "title": "JLD2.ReadRepresentation",
    "category": "type",
    "text": "ReadRepresentation{T,ODR}\n\nA type encoding both the Julia type T and the on-disk (HDF5) representation ODR.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.RelOffset",
    "page": "Docstrings",
    "title": "JLD2.RelOffset",
    "category": "type",
    "text": "RelOffset\n\nRepresents an HDF5 relative offset. This differs from a file offset (used elsewhere) in that it is relative to the superblock base address. In practice, this means that FILE_HEADER_LENGTHhas been subtracted. fileoffset and h5offset convert between RelOffsets and file offsets.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.TypeMappingException",
    "page": "Docstrings",
    "title": "JLD2.TypeMappingException",
    "category": "type",
    "text": "constructrr(f::JLDFile, T::DataType, dt::CompoundType, attrs::Vector{ReadAttribute},             hard_failure::Bool=false)\n\nConstructs a ReadRepresentation for a given type. This is the generic method for all types not specially handled below.\n\nIf hard_failure is true, then throw a TypeMappingException instead of attempting reconstruction. This helps in cases where we can\'t know if reconstructed parametric types will have a matching memory layout without first inspecting the memory layout.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.behead-Tuple{UnionAll}",
    "page": "Docstrings",
    "title": "JLD2.behead",
    "category": "method",
    "text": "behead(T)\n\nGiven a UnionAll type, recursively eliminates the where clauses\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.construct_array-Union{Tuple{T}, Tuple{IO,Type{T},Int64}} where T",
    "page": "Docstrings",
    "title": "JLD2.construct_array",
    "category": "method",
    "text": "construct_array{T}(io::IO, ::Type{T}, ndims::Int)\n\nConstruct array by reading ndims dimensions from io. Assumes io has already been seeked to the correct position.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.fileoffset-Tuple{JLD2.JLDFile,JLD2.RelOffset}",
    "page": "Docstrings",
    "title": "JLD2.fileoffset",
    "category": "method",
    "text": "fileoffset(f::JLDFile, x::RelOffset)\n\nConverts an offset x relative to the superblock of file f to an absolute offset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.group_payload_size-Tuple{Any}",
    "page": "Docstrings",
    "title": "JLD2.group_payload_size",
    "category": "method",
    "text": "group_payload_size(pairs)\n\nReturns the size of a group payload, including link info, group info, and link messages, but not the object header. pairs is an iterator of String => RelOffset pairs. Provides space after the last object message for a continuation message.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.h5offset-Tuple{JLD2.JLDFile,Int64}",
    "page": "Docstrings",
    "title": "JLD2.h5offset",
    "category": "method",
    "text": "h5offset(f::JLDFile, x::RelOffset)\n\nConverts an absolute file offset x to an offset relative to the superblock of file f.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.jld_finalizer-Tuple{JLD2.JLDFile{JLD2.MmapIO}}",
    "page": "Docstrings",
    "title": "JLD2.jld_finalizer",
    "category": "method",
    "text": "jld_finalizer(f::JLDFile)\n\nWhen a JLDFile is finalized, it is possible that the MmapIO has been munmapped, since Julia does not guarantee finalizer order. This means that the underlying file may be closed before we get a chance to write to it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.link_size-Tuple{String}",
    "page": "Docstrings",
    "title": "JLD2.link_size",
    "category": "method",
    "text": "link_size(name::String)\n\nReturns the size of a link message, including message header.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.links_size-Tuple{Any}",
    "page": "Docstrings",
    "title": "JLD2.links_size",
    "category": "method",
    "text": "links_size(pairs)\n\nReturns the size of several link messages. pairs is an iterator of String => RelOffset pairs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.load_datatypes-Tuple{JLD2.JLDFile}",
    "page": "Docstrings",
    "title": "JLD2.load_datatypes",
    "category": "method",
    "text": "load_datatypes(f::JLDFile)\n\nPopulate f.datatypes and f.jlh5types with all of the committed datatypes from a file. We need to do this before writing to make sure we reuse written datatypes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.lookup_offset-Tuple{JLD2.Group,AbstractString}",
    "page": "Docstrings",
    "title": "JLD2.lookup_offset",
    "category": "method",
    "text": "lookup_offset(g::Group, name::AbstractString) -> RelOffset\n\nLookup the offset of a dataset in a group. Returns UNDEFINED_ADDRESS if the dataset is not present. Does not inspect unwritten_child_groups.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.pathize-Tuple{JLD2.Group,AbstractString,Bool}",
    "page": "Docstrings",
    "title": "JLD2.pathize",
    "category": "method",
    "text": "pathize(g::Group, name::AbstractString, create::Bool) -> Tuple{Group,String}\n\nConverts a path to a group and name object. If create is true, any intermediate groups will be created, and the dataset name will be checked for uniqueness with existing names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.prewrite-Tuple{JLD2.JLDFile}",
    "page": "Docstrings",
    "title": "JLD2.prewrite",
    "category": "method",
    "text": "prewrite(f::JLDFile)\n\nCheck that a JLD file is actually writable, and throw an error if not. Sets the written flag on the file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.read_array!",
    "page": "Docstrings",
    "title": "JLD2.read_array!",
    "category": "function",
    "text": "read_array!(v::Array, f::JLDFile, rr)\n\nFill the array v with the contents of JLDFile f at the current position, assuming a ReadRepresentation rr.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.read_attr_data-Tuple{JLD2.JLDFile,JLD2.ReadAttribute,JLD2.H5Datatype,JLD2.ReadRepresentation}",
    "page": "Docstrings",
    "title": "JLD2.read_attr_data",
    "category": "method",
    "text": "read_attr_data(f::JLDFile, attr::ReadAttribute, expected_datatype::H5Datatype,\n               rr::ReadRepresentation)\n\nRead data from an attribute, assuming a specific HDF5 datatype and ReadRepresentation. If the HDF5 datatype does not match, throws an UnsupportedFeatureException. This allows better type stability while simultaneously validating the data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.read_attr_data-Tuple{JLD2.JLDFile,JLD2.ReadAttribute}",
    "page": "Docstrings",
    "title": "JLD2.read_attr_data",
    "category": "method",
    "text": "read_attr_data(f::JLDFile, attr::ReadAttribute)\n\nRead data from an attribute.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.read_compressed_array!",
    "page": "Docstrings",
    "title": "JLD2.read_compressed_array!",
    "category": "function",
    "text": "read_compressed_array!(v::Array, f::JLDFile, rr, data_length::Int)\n\nFill the array v with the compressed contents of JLDFile f at the current position, assuming a ReadRepresentation rr and that the compressed data has length data_length.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.read_data",
    "page": "Docstrings",
    "title": "JLD2.read_data",
    "category": "function",
    "text": "read_data(f::JLDFile, dataspace::ReadDataspace, datatype_class::UInt8,\n          datatype_offset::Int64, data_offset::Int64[, filter_id::UInt16,\n          header_offset::RelOffset, attributes::Vector{ReadAttribute}])\n\nRead data from a file. If datatype_class is typemax(UInt8), the datatype is assumed to be committed, and datatype_offset points to the offset of the committed datatype\'s header. Otherwise, datatype_offset points to the offset of the datatype attribute.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.read_scalar",
    "page": "Docstrings",
    "title": "JLD2.read_scalar",
    "category": "function",
    "text": "read_scalar(f::JLDFile, rr, header_offset::RelOffset)\n\nRead raw data representing a scalar with read representation rr from the current position of JLDFile f. header_offset is the RelOffset of the object header, used to resolve cycles.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.read_size-Tuple{IO,UInt8}",
    "page": "Docstrings",
    "title": "JLD2.read_size",
    "category": "method",
    "text": "read_size(io::IO, flags::UInt8)\n\nLoads a variable-length size according to flags Expects that the first two bits of flags mean: 0   The size of the Length of Link Name field is 1 byte. 1   The size of the Length of Link Name field is 2 bytes. 2   The size of the Length of Link Name field is 4 bytes. 3   The size of the Length of Link Name field is 8 bytes. Returns the size as an Int\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.save_group-Tuple{JLD2.Group}",
    "page": "Docstrings",
    "title": "JLD2.save_group",
    "category": "method",
    "text": "save_group(g::Group) -> RelOffset\n\nStores a group to a file, updating it if it has already been saved. Returns UNDEFINED_ADDRESS if the group was already stored, or the offset of the new group otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JLD2.symbol_length-Tuple{Symbol}",
    "page": "Docstrings",
    "title": "JLD2.symbol_length",
    "category": "method",
    "text": "symbol_length(x::Symbol)\n\nReturns the length of the string represented by x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [JLD2]\nOrder = [:type, :function]"
},

]}
