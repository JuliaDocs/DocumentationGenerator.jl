var documenterSearchIndex = {"docs": [

{
    "location": "#Arrow.Datestamp",
    "page": "Home",
    "title": "Arrow.Datestamp",
    "category": "type",
    "text": "Datestamp <: ArrowTime\n\nStores a date as an Int32 for Arrow formatted data.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.DictEncoding",
    "page": "Home",
    "title": "Arrow.DictEncoding",
    "category": "type",
    "text": "DictEncoding{P<:ArrowVector,J} <: ArrowVector{J}\n\n\n\n\n\n"
},

{
    "location": "#Arrow.List",
    "page": "Home",
    "title": "Arrow.List",
    "category": "type",
    "text": "List{P<:AbstractPrimitive,J} <: AbstractList{J}\n\nAn Arrow formatted array of variable length objects such as strings. The List contains \"value\" data as well as \"offsets\" which describe from which elements of the values data an element of List should be constructed.  The offsets are necessarily a Primitive{Int32} while the values can be any ArrowVector type (but in most circumstances should be Primitive).\n\nConstructors\n\nList{J}(len::Integer, offs::Primitive{Int32}, vals::AbstractPrimitive)\nList{J}(offs::Primitive{Int32}, vals::AbstractPrimitive)\nList{J}(data::Vector{UInt8}, offset_idx::Integer, len::Integer, vals::AbstractPrimitive)\nList{J}(data::Vector{UInt8}, offset_idx::Integer, values_idx::Integer, ::Type{C}, x::AbstractVector)\nList{J}(data::Vector{UInt8}, i::Integer, ::Type{C}, x::AbstractVector)\nList(data::Vector{UInt8}, i::Integer, ::Type{C}, x::AbstractVector)\nList{J}(Array, ::Type{C}, x::AbstractVector)\nList(Array, ::Type{C}, x::AbstractVector)\nList(::Type{C}, v::AbstractVector)\nList(v::AbstractVector{<:AbstractString})\n\nNote that by default, Lists of strings will be encoded in UTF-8.\n\nArguments\n\nlen: the length of the List\noffs: a Primitive{Int32} containing the offsets data\nvals: a Primitive containing the values data\ndata: the data buffer in which the underlying data is stored\noffset_idx: location within data where the offset data is stored\nvalues_idx: location within data where the values data is stored\nC: the encoding type (type of values), e.g. for UTF-8 strings this is UInt8. defaults to UInt8   if not given explicitly\ni: the location in data where all data should be stored (offsets, then values)\nx, v: array to be stored or converted\n\n\n\n\n\n"
},

{
    "location": "#Arrow.NullableList",
    "page": "Home",
    "title": "Arrow.NullableList",
    "category": "type",
    "text": "NullableList{P<:AbstractPrimitive,J} <: AbstractList{Union{Missing,J}}\n\nAn Arrow formatted array of variable length objects such as strings which may be null. The NullableList contains a bit mask specifying which values are null and \"offsets\" which describe from which elements of the values data an element of the NullableList should be constructed.  The bitmask is contained in a Primitive{UInt8} while the offsets data in a Primitive{Int32}. The values can be contained in any ArrowVector type, but in most cases should be Primitive.\n\nConstructors\n\nNullableList{J}(len::Integer, bmask::Primitive, offs::Primitive, vals::AbstractPrimitive)\nNullableList{J}(bmask::Primitive, offs::Primitive, vals::AbstractPrimitive)\nNullableList{J}(data::Vector{UInt8}, bitmask_idx::Integer, offset_idx::Integer, len::Integer,\n                vals::AbstractPrimitive)\nNullableList{J}(data::Vector{UInt8}, bitmask_idx::Integer, offset_idx::Integer, values_idx::Integer,\n                len::Integer, ::Type{C}, values_len::Integer)\nNullableList{J}(data::Vector{UInt8}, bitmask_idx::Integer, offset_idx::Integer, values_idx::Integer,\n                ::Type{C}, x::AbstractVector)\nNullableList(data::Vector{UInt8}, i::Integer, ::Type{C}, x::AbstractVector)\nNullableList(Array, ::Type{C}, x::AbstractVector)\nNullableList(Array, x::AbstracVector)\nNullableList(::Type{C}, v::AbstractVector)\nNullableList(v::AbstractVector)\n\nIf Array is given as an argument, a contiguous array will be allocated to store the data.\n\nArguments\n\nlen: the length of the NullableList\nbmask: the Primitive providing the bit mask\noffs: the Primitive providing the offsets\nvals: the AbstractPrimitive providing the values\ndata: a buffer for storing the data\nbitmask_idx: the location in data of the bit mask\noffsets_idx: the location in data of the offsets\nvalues_idx: the location in data of the values\nvalues_len: the total length of the values data (i.e. number of elements in the values array)\nC: the data type of the values data. defaults to UInt8 when not provided\nx, v: array to be stored by the NullableList\n\n\n\n\n\n"
},

{
    "location": "#Arrow.NullablePrimitive",
    "page": "Home",
    "title": "Arrow.NullablePrimitive",
    "category": "type",
    "text": "NullablePrimitive{J} <: AbstractPrimitive{Union{J,Missing}}\n\nA set of values stored contiguously in data with a bit mask specifying which values should be considered null.  The bit mask and data needn\'t necessarily coexist within the same array.\n\nConstructors\n\nNullablePrimitive(bmask::Primitive{UInt8}, vals::Primitive{J})\nNullablePrimitive(data::Vector{UInt8}, bitmask_idx::Integer, values_idx::Integer, x::AbstractVector)\nNullablePrimitive(data::Vector{UInt8}, i::Integer, x::AbstractVector)\nNullablePrimitive(v::AbstractVector)\nNullablePrimitive(Array, x::AbstractVector)\n\nIf Array is passed to a constructor, the bit mask and values for the NullablePrimitive will be contiguously allocated within a single array (bit mask first, then values).\n\nArguments\n\nbmask: a Primitive{UInt8} containing the null bitmask for the NullablePrimitive\nvals: a Primitive containing the underlying data values for the NullablePrimitive\ndata: a buffer in which the data for the NullablePrimitive will be stored\nbitmask_idx: the location within data where the null bit mask will be stored\nvalues_idx: the location within data where the values will be stored\nx, v: values to be stored in data\n\n\n\n\n\n"
},

{
    "location": "#Arrow.Primitive",
    "page": "Home",
    "title": "Arrow.Primitive",
    "category": "type",
    "text": "Primitive{J} <: AbstractPrimitive{J}\n\nA set of values which are stored contiguously in memory.  All other ArrowVector objects are built from Primitives.\n\nConstructors\n\nPrimitive{J}(data::Vector{UInt8}, i::Integer, len::Integer)\nPrimitive(data::Vector{UInt8}, i::Integer, x::AbstractVector)\nPrimitive(v::AbstractVector)\nPrimitive(Array, x::Abstractvector)\n\nIf Array is provided as the virst argument, the data will be allocated contiguously in a new buffer.\n\nArguments\n\ndata: a data buffer which the Primitive will refer to for accessing and storing values\ni: the index of the location (1-based) in data where the beginning of the value data is stored\nx: a vector which will be written into data[i] on construction\n\nv: existing reference data. constructors with will reference the originalvasdata`\n\n\n\n\n\n"
},

{
    "location": "#Arrow.TimeOfDay",
    "page": "Home",
    "title": "Arrow.TimeOfDay",
    "category": "type",
    "text": "TimeOfDay{P<:Dates.TimePeriod,T<:Union{Int32,Int64}} <: ArrowTime\n\nAn arrow formatted object for representing the time of day. Underlying data is Int32 for seconds and milliseconds, Int64 for microsecond and nanosecond.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.Timestamp",
    "page": "Home",
    "title": "Arrow.Timestamp",
    "category": "type",
    "text": "Timestamp{P<:Dates.TimePeriod} <: ArrowTime\n\nTimestamp in which time is stored in units P as Int64 for Arrow formatted data.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.arrowformat",
    "page": "Home",
    "title": "Arrow.arrowformat",
    "category": "function",
    "text": "arrowformat(v::AbstractVector)\narrowformat(Array, v::AbstractVector)\n\nConvert a vector to the appropriate arrowformat.  If Array is passed, a contiguous array will be used for the data buffer.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.arrowview-Tuple{Primitive,UnitRange}",
    "page": "Home",
    "title": "Arrow.arrowview",
    "category": "method",
    "text": "arrowview(p::ArrowVector, idx::UnitRange)\n\nReturn another ArrowVector which is a view into p for the index range idx.\n\nThis can only be done with contiguous indices.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.bitmaskbytes-Tuple{Integer}",
    "page": "Home",
    "title": "Arrow.bitmaskbytes",
    "category": "method",
    "text": "bitmaskbytes(A::AbstractVector)\nbitmaskbytes(::Type{Union{J,Missing}}, A::AbstractVector)\n\nCompute the number of bytes needed to store a null bitmask for the data in A.  This is 0 unless J <: Union{K,Missing}. Note that this does not take into account scheme-dependent padding.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.bitpack-Tuple{AbstractArray{Bool,1}}",
    "page": "Home",
    "title": "Arrow.bitpack",
    "category": "method",
    "text": "bitpack(A::AbstractVector{Bool})\n\nReturns a Vector{UInt8} the bits of which are the values of A.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.bytesforbits-Tuple{Integer}",
    "page": "Home",
    "title": "Arrow.bytesforbits",
    "category": "method",
    "text": "bytesforbits(n::Integer)\n\nGet the number of bytes required to store n bits.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.getoffset-Tuple{AbstractList,Any}",
    "page": "Home",
    "title": "Arrow.getoffset",
    "category": "method",
    "text": "getoffset(l::AbstractList, i::Integer)\n\nRetrieve offset i for list l.  Note that this retrieves the Arrow formated 0-based indexed raw numbers!\n\n\n\n\n\n"
},

{
    "location": "#Arrow.isnull-Tuple{ArrowVector,Any}",
    "page": "Home",
    "title": "Arrow.isnull",
    "category": "method",
    "text": "isnull(A::ArrowVector, idx)\n\nCheck whether element(s) idx of A are null.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.nullcount-Tuple{ArrowVector}",
    "page": "Home",
    "title": "Arrow.nullcount",
    "category": "method",
    "text": "nullcount(A::ArrowVector)\n\nReturn the number of nulls (missings) in A.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.offsets-Union{Tuple{C}, Tuple{K}, Tuple{Type{K},Type{C},AbstractArray{T,1} where T}} where C where K<:Integer",
    "page": "Home",
    "title": "Arrow.offsets",
    "category": "method",
    "text": "offsets(v::AbstractVector)\n\nConstruct a Vector{Int32} of offsets appropriate for data appearing in v.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.padding-Tuple{Integer}",
    "page": "Home",
    "title": "Arrow.padding",
    "category": "method",
    "text": "padding(n::Integer)\n\nDetermines the total number of bytes needed to store n bytes with padding. Note that the Arrow standard requires buffers to be aligned to 8-byte boundaries.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.rawpadded-Tuple{Primitive,Union{AbstractArray{#s765,1} where #s765<:Integer, #s766} where #s766<:Integer}",
    "page": "Home",
    "title": "Arrow.rawpadded",
    "category": "method",
    "text": "rawpadded(A::Primitive)\n\nGet a Vector{UInt8} describing the data of A with Arrow padding (8 bytes).\n\n\n\n\n\n"
},

{
    "location": "#Arrow.rawvalues-Tuple{ArrowVector,Any}",
    "page": "Home",
    "title": "Arrow.rawvalues",
    "category": "method",
    "text": "rawvalues(A::ArrowVector, idx)\n\nGets a Vector{UInt8} of the raw values associated with the indices idx.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.rawvalues-Tuple{Primitive,Union{AbstractArray{#s765,1} where #s765<:Integer, #s766} where #s766<:Integer}",
    "page": "Home",
    "title": "Arrow.rawvalues",
    "category": "method",
    "text": "rawvalues(A::Primitive, i)\nrawvalues(A::Primitive)\n\nGets the raw values for elements at locations i in the form of a Vector{UInt8}.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.totalbytes-Tuple{AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "Arrow.totalbytes",
    "category": "method",
    "text": "totalbytes(A::AbstractVector)\ntotalbytes(::Type{Union{J,Missing}}, A::AbstractVector)\ntotalbytes(::Type{C}, A::AbstractVector)\ntotalbytes(::Type{Union{J,Missing}}, ::Type{C}, A::AbstractVector)\n\nComputes the minimum number of bytes needed to store A as an Arrow formatted primitive array or list.\n\nTo obtain the minimum bytes to store string data, one must input C the character encoding type the string will be converted to (e.g. UInt8).\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unbitpack-Tuple{AbstractArray{UInt8,1}}",
    "page": "Home",
    "title": "Arrow.unbitpack",
    "category": "method",
    "text": "unbitpack(A::AbstractVector{UInt8})\n\nReturns a Vector{Bool} the values of which are the bits of A.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.valuesbytes-Union{Tuple{J}, Tuple{Type{J},Integer}} where J",
    "page": "Home",
    "title": "Arrow.valuesbytes",
    "category": "method",
    "text": "valuesbytes(A::AbstractVector)\nvaluesbytes(::Type{C}, A::AbstractVector{<:AbstractString})\n\nComputes the number of bytes needed to store the values of A (without converting the underlying binary type). This does not include the number of bytes needed to store metadata such as a null bitmask or offsets.\n\nTo obtain the number of values bytes needed to string data, one must input C the character encoding type the string will be converted to (e.g. UInt8).\n\n\n\n\n\n"
},

{
    "location": "#Arrow.writepadded-Tuple{IO,Any}",
    "page": "Home",
    "title": "Arrow.writepadded",
    "category": "method",
    "text": "writepadded(io::IO, x)\nwritepadded(io::IO, A::Primitive)\nwritepadded(io::IO, A::Arrowvector, subbuffs::Function...)\n\nWrite the data x to io with 8-byte padding. This is commonly needed in Arrow implementations since Arrow requires 8-byte boundary alignment.\n\nIf a Primitive is provided, the appropriate padded values will be written.\n\nIf an ArrowVector is provided, the ordering of the sub-buffers must be specified, and they will be written in the order given.  For example writepadded(io, A, bitmask, offsets, values) will write the bit mask, offsets and then values of A.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.writepadded-Tuple{IO,Primitive,Union{AbstractArray{#s765,1} where #s765<:Integer, #s766} where #s766<:Integer}",
    "page": "Home",
    "title": "Arrow.writepadded",
    "category": "method",
    "text": "writepadded(io::IO, A::Primitive)\n\nWrite the values of A to io with Arrow padding (8 bytes).\n\n\n\n\n\n"
},

{
    "location": "#Arrow.bitmaskpointer-Union{Tuple{ArrowVector{Union{Missing, J}}}, Tuple{J}} where J",
    "page": "Home",
    "title": "Arrow.bitmaskpointer",
    "category": "method",
    "text": "bitmaskpointer(A::ArrowVector)\n\nReturns a pointer to the start of the bitmask buffer for A.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.construct-Union{Tuple{T}, Tuple{Type{T},AbstractPrimitive,Integer,Integer}} where T",
    "page": "Home",
    "title": "Arrow.construct",
    "category": "method",
    "text": "construct(::Type{T}, A::AbstractPrimitive{J}, i::Integer, len::Integer)\n\nConstruct an object of type T from len values in A starting at index i. For this to work requires the existence of a constructor of the form T(::Vector{J}).\n\n\n\n\n\n"
},

{
    "location": "#Arrow.datapointer-Tuple{Primitive}",
    "page": "Home",
    "title": "Arrow.datapointer",
    "category": "method",
    "text": "datapointer(A::Primitive)\n\nReturns a pointer to the very start of the data buffer for A (i.e. does not depend on indices).\n\n\n\n\n\n"
},

{
    "location": "#Arrow.ellength-Tuple{AbstractList,Integer}",
    "page": "Home",
    "title": "Arrow.ellength",
    "category": "method",
    "text": "ellength(l::AbstractList, i::Integer)\n\nGet the length of element i.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.encode-Union{Tuple{J}, Tuple{C}, Tuple{Type{C},AbstractArray{J,1}}} where J where C",
    "page": "Home",
    "title": "Arrow.encode",
    "category": "method",
    "text": "encode(::Type{C}, v::AbstractVector{J})\n\nAttempt to encode the data in v as a Vector{C}. This requires that if convert(Vector{C}, x) is valid where x ∈ v.  Nothing is stored for cases where x == missing.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.getbit-Union{Tuple{J}, Tuple{Primitive{J},Integer}} where J",
    "page": "Home",
    "title": "Arrow.getbit",
    "category": "method",
    "text": "getbit(A::Primitive, i)\n\nGet the ith bit of the primitive.  For example, for a Primitive{UInt8] the 10th bit is the second bit of the second value.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.getvalue-Union{Tuple{J}, Tuple{Union{NullablePrimitive{J}, Primitive{J}},Integer}} where J",
    "page": "Home",
    "title": "Arrow.getvalue",
    "category": "method",
    "text": "getvalue(A::ArrowVector, idx)\n\nGet the values for indices idx from A.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.offsetspointer-Tuple{AbstractList}",
    "page": "Home",
    "title": "Arrow.offsetspointer",
    "category": "method",
    "text": "offsetspointer(A::AbstractList)\n\nReturns a pointer to the start of the offsets buffer for A.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unsafe_construct-Tuple{Type{String},Primitive{UInt8},Integer,Integer}",
    "page": "Home",
    "title": "Arrow.unsafe_construct",
    "category": "method",
    "text": "unsafe_construct(::Type{T}, A::Primitive, i::Integer, len::Integer)\n\nConstruct an object of type T using len elements from A starting at index i (1-based indexing). This is mostly used by AbstractList objects to construct variable length objects such as strings from primitive arrays.\n\nUsers must define new methods for new types T.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unsafe_ellength-Tuple{AbstractList,Integer}",
    "page": "Home",
    "title": "Arrow.unsafe_ellength",
    "category": "method",
    "text": "unsafe_ellength(l::AbstractList, i::Integer)\n\nGet the length of element i. Involves calls to unsafe_load.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unsafe_getoffset-Tuple{AbstractList,Any}",
    "page": "Home",
    "title": "Arrow.unsafe_getoffset",
    "category": "method",
    "text": "unsafe_getoffset(l::AbstractList, i::Integer)\n\nGet the offset for element i.  Contains a call to unsafe_load.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unsafe_getvalue-Union{Tuple{J}, Tuple{Union{NullablePrimitive{J}, Primitive{J}},Integer}} where J",
    "page": "Home",
    "title": "Arrow.unsafe_getvalue",
    "category": "method",
    "text": "unsafe_getvalue(A::ArrowVector, i)\n\nRetrieve the value from memory location i using Julia 1-based indexing. i can be a single integer index, an AbstractVector of integer indices, or an AbstractVector{Bool} mask.\n\nThis typically involves a call to unsafe_load or unsafe_wrap.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unsafe_isnull-Tuple{ArrowVector,Integer}",
    "page": "Home",
    "title": "Arrow.unsafe_isnull",
    "category": "method",
    "text": "unsafe_isnull(A::ArrowVector, idx)\n\nCheck whether element(s) idx of A are null.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unsafe_rawbitmask-Union{Tuple{ArrowVector{Union{Missing, J}}}, Tuple{J}} where J",
    "page": "Home",
    "title": "Arrow.unsafe_rawbitmask",
    "category": "method",
    "text": "unsafe_rawbitmask(p::ArrowVector{Union{J,Missing}})\n\nRetrieve the raw value of the null bit mask for p.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unsafe_rawoffsets-Tuple{AbstractList}",
    "page": "Home",
    "title": "Arrow.unsafe_rawoffsets",
    "category": "method",
    "text": "unsafe_rawoffsets(p::AbstractList)\n\nRetreive the raw offstets for p as a Vector{UInt8}.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unsafe_rawpadded-Tuple{Ptr{UInt8},Integer}",
    "page": "Home",
    "title": "Arrow.unsafe_rawpadded",
    "category": "method",
    "text": "unsafe_rawpadded(ptr::Ptr, len::Integer, padding::Function=identity)\n\nReturn a Vector{UInt8} padded to appropriate size specified by padding.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unsafe_rawpaddedvalues-Tuple{AbstractPrimitive}",
    "page": "Home",
    "title": "Arrow.unsafe_rawpaddedvalues",
    "category": "method",
    "text": "unsafe_rawpaddedvalues(p::ArrowVector)\n\nRetreive raw value data for p as a Vector{UInt8}.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unsafe_setnull!-Union{Tuple{J}, Tuple{ArrowVector{Union{Missing, J}},Bool,Integer}} where J",
    "page": "Home",
    "title": "Arrow.unsafe_setnull!",
    "category": "method",
    "text": "unsafe_setnull!(A::ArrowVector{Union{J,Missing}}, x::Bool, i::Integer)\n\nSet element i of A to be null. This involves no bounds checking and a call to unsafe_store!.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unsafe_setnulls!-Union{Tuple{J}, Tuple{ArrowVector{Union{Missing, J}},Array{UInt8,1}}} where J",
    "page": "Home",
    "title": "Arrow.unsafe_setnulls!",
    "category": "method",
    "text": "unsafe_setnulls!(A::ArrowVector, nulls::AbstractVector{Bool})\n\nSet all the nulls for the ArrowVector. This does not check bounds and contains a call to unsafe_copy! (but does not copy directly from nulls).\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unsafe_setoffset!-Tuple{AbstractList,Int32,Integer}",
    "page": "Home",
    "title": "Arrow.unsafe_setoffset!",
    "category": "method",
    "text": "unsafe_setoffset!(l::AbstractList, off::Int32, i::Integer)\n\nSet offset i to off.  Contains a call to unsafe_store!.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unsafe_setoffsets!-Tuple{AbstractList,Array{Int32,1}}",
    "page": "Home",
    "title": "Arrow.unsafe_setoffsets!",
    "category": "method",
    "text": "unsafe_setoffsets!(l::AbstractList, off::Vector{Int32})\n\nSet all offsets to the Vector{Int32} off.  Contains a call to unsafe_copy! which copies the entirety of off.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.unsafe_setvalue!-Union{Tuple{J}, Tuple{Union{NullablePrimitive{J}, Primitive{J}},J,Integer}} where J",
    "page": "Home",
    "title": "Arrow.unsafe_setvalue!",
    "category": "method",
    "text": "unsafe_setvalue!(A::ArrowVector{J}, x, i)\n\nSet the value at location i to x.  If i is a single integer, x should be an element of type J.  Otherwise i can be an AbstractVector{<:Integer} or AbstractVector{Bool} in which case x should be an appropriately sized AbstractVector{J}.\n\n\n\n\n\n"
},

{
    "location": "#Arrow.valuespointer-Tuple{ArrowVector}",
    "page": "Home",
    "title": "Arrow.valuespointer",
    "category": "method",
    "text": "valuespointer(A::ArrowVector)\n\nReturns a pointer to the start of the values buffer for A.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Arrow]\nOrder = [:type, :function]"
},

]}
