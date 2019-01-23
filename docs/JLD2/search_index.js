var documenterSearchIndex = {"docs": [

{
    "location": "#JLD2.jldopen",
    "page": "Home",
    "title": "JLD2.jldopen",
    "category": "function",
    "text": "jldopen(fname::AbstractString, mode::AbstractString)\n\nOpens a JLD file at path fname.\n\n\"r\": Open for reading only, failing if no file exists \"r+\": Open for reading and writing, failing if no file exists \"w\"/\"w+\": Open for reading and writing, overwriting the file if it already exists \"a\"/\"a+\": Open for reading and writing, creating a new file if none exists, but               preserving the existing file if one is present\n\n\n\n\n\n"
},

{
    "location": "#JLD2.CustomSerialization",
    "page": "Home",
    "title": "JLD2.CustomSerialization",
    "category": "type",
    "text": "CustomSerialization{T,S}\n\nOn-disk representation for data that is written as if it were of Julia type T, but is read as type S.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.GlobalHeap",
    "page": "Home",
    "title": "JLD2.GlobalHeap",
    "category": "type",
    "text": "GlobalHeap\n\nRepresents an HDF5 global heap structure.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.Group",
    "page": "Home",
    "title": "JLD2.Group",
    "category": "type",
    "text": "Group{T}\n\nJLD group object.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.Group-Tuple{JLD2.JLDFile,AbstractString}",
    "page": "Home",
    "title": "JLD2.Group",
    "category": "method",
    "text": "Group(f::JLDFile, name::AbstractString)\n\nConstruct an empty group named name at the top level of JLDFile f.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.Group-Union{Tuple{T}, Tuple{Group{T},AbstractString}} where T",
    "page": "Home",
    "title": "JLD2.Group",
    "category": "method",
    "text": "Group(g::Group, name::AbstractString)\n\nConstruct a group named name as a child of group g.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.H5Datatype",
    "page": "Home",
    "title": "JLD2.H5Datatype",
    "category": "type",
    "text": "H5Datatype\n\nSupertype of all HDF5 datatypes.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.IndirectPointer",
    "page": "Home",
    "title": "JLD2.IndirectPointer",
    "category": "type",
    "text": "IndirectPointer\n\nWhen writing data, we may need to enlarge the memory mapping, which would invalidate any memory addresses arising from the old mmap pointer. IndirectPointer holds a pointer to the startptr field of an MmapIO, and the offset relative to that pointer. It defers computing a memory address until converted to a Ptr{T}, so the memory mapping can be enlarged and addresses will remain valid.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.JLDFile",
    "page": "Home",
    "title": "JLD2.JLDFile",
    "category": "type",
    "text": "JLDFile{T<:IO}\n\nJLD file object.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.JLDWriteSession",
    "page": "Home",
    "title": "JLD2.JLDWriteSession",
    "category": "type",
    "text": "JLDWriteSession{T}\n\nA JLDWriteSession keeps track of references to serialized objects. If T is a Dict, h5offset maps an object ID (returned by calling objectid) to th RelOffset of the written dataset. If it is Union{}, then references are not tracked, and objects referenced multiple times are written multiple times.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.ReadRepresentation",
    "page": "Home",
    "title": "JLD2.ReadRepresentation",
    "category": "type",
    "text": "ReadRepresentation{T,ODR}\n\nA type encoding both the Julia type T and the on-disk (HDF5) representation ODR.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.RelOffset",
    "page": "Home",
    "title": "JLD2.RelOffset",
    "category": "type",
    "text": "RelOffset\n\nRepresents an HDF5 relative offset. This differs from a file offset (used elsewhere) in that it is relative to the superblock base address. In practice, this means that FILE_HEADER_LENGTHhas been subtracted. fileoffset and h5offset convert between RelOffsets and file offsets.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.TypeMappingException",
    "page": "Home",
    "title": "JLD2.TypeMappingException",
    "category": "type",
    "text": "constructrr(f::JLDFile, T::DataType, dt::CompoundType, attrs::Vector{ReadAttribute},             hard_failure::Bool=false)\n\nConstructs a ReadRepresentation for a given type. This is the generic method for all types not specially handled below.\n\nIf hard_failure is true, then throw a TypeMappingException instead of attempting reconstruction. This helps in cases where we can\'t know if reconstructed parametric types will have a matching memory layout without first inspecting the memory layout.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.behead-Tuple{UnionAll}",
    "page": "Home",
    "title": "JLD2.behead",
    "category": "method",
    "text": "behead(T)\n\nGiven a UnionAll type, recursively eliminates the where clauses\n\n\n\n\n\n"
},

{
    "location": "#JLD2.construct_array-Union{Tuple{T}, Tuple{IO,Type{T},Int64}} where T",
    "page": "Home",
    "title": "JLD2.construct_array",
    "category": "method",
    "text": "construct_array{T}(io::IO, ::Type{T}, ndims::Int)\n\nConstruct array by reading ndims dimensions from io. Assumes io has already been seeked to the correct position.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.fileoffset-Tuple{JLD2.JLDFile,JLD2.RelOffset}",
    "page": "Home",
    "title": "JLD2.fileoffset",
    "category": "method",
    "text": "fileoffset(f::JLDFile, x::RelOffset)\n\nConverts an offset x relative to the superblock of file f to an absolute offset.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.group_payload_size-Tuple{Any}",
    "page": "Home",
    "title": "JLD2.group_payload_size",
    "category": "method",
    "text": "group_payload_size(pairs)\n\nReturns the size of a group payload, including link info, group info, and link messages, but not the object header. pairs is an iterator of String => RelOffset pairs. Provides space after the last object message for a continuation message.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.h5offset-Tuple{JLD2.JLDFile,Int64}",
    "page": "Home",
    "title": "JLD2.h5offset",
    "category": "method",
    "text": "h5offset(f::JLDFile, x::RelOffset)\n\nConverts an absolute file offset x to an offset relative to the superblock of file f.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.jld_finalizer-Tuple{JLD2.JLDFile{JLD2.MmapIO}}",
    "page": "Home",
    "title": "JLD2.jld_finalizer",
    "category": "method",
    "text": "jld_finalizer(f::JLDFile)\n\nWhen a JLDFile is finalized, it is possible that the MmapIO has been munmapped, since Julia does not guarantee finalizer order. This means that the underlying file may be closed before we get a chance to write to it.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.link_size-Tuple{String}",
    "page": "Home",
    "title": "JLD2.link_size",
    "category": "method",
    "text": "link_size(name::String)\n\nReturns the size of a link message, including message header.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.links_size-Tuple{Any}",
    "page": "Home",
    "title": "JLD2.links_size",
    "category": "method",
    "text": "links_size(pairs)\n\nReturns the size of several link messages. pairs is an iterator of String => RelOffset pairs.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.load_datatypes-Tuple{JLD2.JLDFile}",
    "page": "Home",
    "title": "JLD2.load_datatypes",
    "category": "method",
    "text": "load_datatypes(f::JLDFile)\n\nPopulate f.datatypes and f.jlh5types with all of the committed datatypes from a file. We need to do this before writing to make sure we reuse written datatypes.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.lookup_offset-Tuple{JLD2.Group,AbstractString}",
    "page": "Home",
    "title": "JLD2.lookup_offset",
    "category": "method",
    "text": "lookup_offset(g::Group, name::AbstractString) -> RelOffset\n\nLookup the offset of a dataset in a group. Returns UNDEFINED_ADDRESS if the dataset is not present. Does not inspect unwritten_child_groups.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.pathize-Tuple{JLD2.Group,AbstractString,Bool}",
    "page": "Home",
    "title": "JLD2.pathize",
    "category": "method",
    "text": "pathize(g::Group, name::AbstractString, create::Bool) -> Tuple{Group,String}\n\nConverts a path to a group and name object. If create is true, any intermediate groups will be created, and the dataset name will be checked for uniqueness with existing names.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.prewrite-Tuple{JLD2.JLDFile}",
    "page": "Home",
    "title": "JLD2.prewrite",
    "category": "method",
    "text": "prewrite(f::JLDFile)\n\nCheck that a JLD file is actually writable, and throw an error if not. Sets the written flag on the file.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.read_array!",
    "page": "Home",
    "title": "JLD2.read_array!",
    "category": "function",
    "text": "read_array!(v::Array, f::JLDFile, rr)\n\nFill the array v with the contents of JLDFile f at the current position, assuming a ReadRepresentation rr.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.read_attr_data-Tuple{JLD2.JLDFile,JLD2.ReadAttribute,JLD2.H5Datatype,JLD2.ReadRepresentation}",
    "page": "Home",
    "title": "JLD2.read_attr_data",
    "category": "method",
    "text": "read_attr_data(f::JLDFile, attr::ReadAttribute, expected_datatype::H5Datatype,\n               rr::ReadRepresentation)\n\nRead data from an attribute, assuming a specific HDF5 datatype and ReadRepresentation. If the HDF5 datatype does not match, throws an UnsupportedFeatureException. This allows better type stability while simultaneously validating the data.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.read_attr_data-Tuple{JLD2.JLDFile,JLD2.ReadAttribute}",
    "page": "Home",
    "title": "JLD2.read_attr_data",
    "category": "method",
    "text": "read_attr_data(f::JLDFile, attr::ReadAttribute)\n\nRead data from an attribute.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.read_compressed_array!",
    "page": "Home",
    "title": "JLD2.read_compressed_array!",
    "category": "function",
    "text": "read_compressed_array!(v::Array, f::JLDFile, rr, data_length::Int)\n\nFill the array v with the compressed contents of JLDFile f at the current position, assuming a ReadRepresentation rr and that the compressed data has length data_length.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.read_data",
    "page": "Home",
    "title": "JLD2.read_data",
    "category": "function",
    "text": "read_data(f::JLDFile, dataspace::ReadDataspace, datatype_class::UInt8,\n          datatype_offset::Int64, data_offset::Int64[, filter_id::UInt16,\n          header_offset::RelOffset, attributes::Vector{ReadAttribute}])\n\nRead data from a file. If datatype_class is typemax(UInt8), the datatype is assumed to be committed, and datatype_offset points to the offset of the committed datatype\'s header. Otherwise, datatype_offset points to the offset of the datatype attribute.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.read_scalar",
    "page": "Home",
    "title": "JLD2.read_scalar",
    "category": "function",
    "text": "read_scalar(f::JLDFile, rr, header_offset::RelOffset)\n\nRead raw data representing a scalar with read representation rr from the current position of JLDFile f. header_offset is the RelOffset of the object header, used to resolve cycles.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.read_size-Tuple{IO,UInt8}",
    "page": "Home",
    "title": "JLD2.read_size",
    "category": "method",
    "text": "read_size(io::IO, flags::UInt8)\n\nLoads a variable-length size according to flags Expects that the first two bits of flags mean: 0   The size of the Length of Link Name field is 1 byte. 1   The size of the Length of Link Name field is 2 bytes. 2   The size of the Length of Link Name field is 4 bytes. 3   The size of the Length of Link Name field is 8 bytes. Returns the size as an Int\n\n\n\n\n\n"
},

{
    "location": "#JLD2.save_group-Tuple{JLD2.Group}",
    "page": "Home",
    "title": "JLD2.save_group",
    "category": "method",
    "text": "save_group(g::Group) -> RelOffset\n\nStores a group to a file, updating it if it has already been saved. Returns UNDEFINED_ADDRESS if the group was already stored, or the offset of the new group otherwise.\n\n\n\n\n\n"
},

{
    "location": "#JLD2.symbol_length-Tuple{Symbol}",
    "page": "Home",
    "title": "JLD2.symbol_length",
    "category": "method",
    "text": "symbol_length(x::Symbol)\n\nReturns the length of the string represented by x.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [JLD2]\nOrder = [:type, :function]"
},

]}
