var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Arrow-1",
    "page": "Readme",
    "title": "Arrow",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This is a pure Julia implementation of the Apache Arrow data standard.  This package provides Julia AbstractVector objects for referencing data that conforms to the Arrow standard.  This allows users to seamlessly interface Arrow formatted data with a great deal of existing Julia code.Please see this document for a description of the Arrow memory layout.***WARNING*** As of right now this package uses Julia Ptr (pointer) objects and \"unsafe\" methods.  This is for performance reasons.  It should in principle be possible to make this package completely safe with little to no loss in performance, but we are waiting on some performance improvements in Base.  While Arrow.jl has been tested and should be safe with proper usage, it is up to the user to make sure that their Arrow.jl objects reference the appropriate locations in data.  If the user, for example, uses an Arrow.jl object to reference data past the end of an array, the resulting program will segfault!"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Just doimport Pkg; Pkg.add(\"Arrow\")Arrow only has CategoricalArrays as a dependency (and Missings on 0.6)."
},

{
    "location": "#ArrowVector-Objects-1",
    "page": "Readme",
    "title": "ArrowVector Objects",
    "category": "section",
    "text": "The Arrow package exposes several ArrowVector{J} <: AbstractVector{J} objects.  These provide an interface to arrow formatted data as well as providing methods to convert Julia objects to the Arrow data format.  The simplest of these isPrimitive{J} <: ArrowVector{J}This object maintains a reference to a data buffer (a Vector{UInt8}) and describes and contiguous subset of it.  It will automatically convert the underlying data to the type J on demand.  The Primitive type can only describe bits type elements (i.e. types for which isbits is true, in particular not strings).  In the following example we create a Primitive to address a subset of a bufferdata = [0, 2, 3, 5, 7, 0] # this will be the underlying data from which we create our buffer\nbuff = reinterpret(UInt8, data) # in this simple case the Arrow format and Julia\'s in-memory format coincide\np = Primitive{Int}(buff, 9, 4) # arguments are: buffer, start location, length\n\np[1] # returns 2\np[2:3] # returns the (non-arrow) Vector [3,5]\np[:] # returns the (non-arrow) Vector [2,3,5,7]\n\np[2] = 999 # assignment is supported for AbstractPrimitive types. this change is reflected in buff and data\n\n\nq = Primitive([2,3,5,7]) # if we didn\'t already have a buffer we needed to reference, we can create one like this\nq = arrowformat([2,3,5,7]) # the arrowformat function automatically determines the appropriate ArrowVector for the provided array\nrawvalues(q) # this returns the created buffer as a Vector{UInt8}Here we see that indexing an ArrowVector returns ordinary Julia arrays containing the data stored in the Arrow buffer.  All other ArrowVector objects are built out of combinations of Primitives.Enter ?Primitive in the REPL for a full list of constructors.***Note:*** In what follows we show explicit methods for constructing each ArrowVector type from a raw data buffer.  This can become a bit confusing where there are many sub-buffer locations to keep track of, so it is strongly suggested that you make use of the Locate interface described in the next section."
},

{
    "location": "#The-NullablePrimitive-Type-1",
    "page": "Readme",
    "title": "The NullablePrimitive Type",
    "category": "section",
    "text": "The Arrow format also supports arrays with bits type elements that may be null.  For these we provide the NullablePrimitive{J} <: AbstractVector{Union{J,Missing}} type.  Under the hood the NullablePrimitive type is a pair of Primitives: one references a Primitive{UInt8} bit mask describing which elements of the NullablePrimitive are null and the other references the underlying data.  In the following example we create a NullablePrimitive from an existing bufferbuff = [[0x0d]; reinterpret(UInt8, [2.0, 3.0, 5.0, 7.0])]  # bits(0x0d) == \"00001101\"\np = NullablePrimitive{Float64}(buff, 1, 2, 4) # arguments are: buffer, bitmask location, values location, length\n\np[1] # returns 2.0\np[2] # returns missing\np[1:4] # returns [2.0, missing, 5.0, 7.0]\n\np[2] = 3.0  # assignment also supported for NullablePrimitive, the change will be reflected in buff\n\n\nq = NullablePrimitive([2.0,missing,5.0,7.0]) # if we didn\'t already have a buffer we needed to reference, we can create one\n# the above will create seperate buffers for the bit mask and values. to create a contiguous buffer containing all we can do\nq = NullablePrimitive(Array, [2.0,missing,5.0,7.0])\nq = arrowformat([2.0,missing,5.0,7.0]) # you can also use arrowformat to automatically determine the ArrowVector type\nrawvalues(bitmask(q)) # returns [0x0d]Enter ?NullablePrimitive in the REPL for a full list of constructors."
},

{
    "location": "#The-List-Type-1",
    "page": "Readme",
    "title": "The List Type",
    "category": "section",
    "text": "The underlying dataformat for arbitrary length objects such as strings is more complicated, so these objects require a dedicated type.  For these we provide List{J} <: AbstractVector{J}.  As well as containing the values contained by strings, these objects contain \"offsets\" for describing how long each string should be.  The arrow format suggests that these offsets are Int32s and that there are length(l)+1 of them.  For exampleoffs = reinterpret(UInt8, Int32[0,3,5,7])\nvals = convert(Vector{UInt8}, \"abcdefg\")\nbuff = [offs; vals]\n# type parameters: List return type, offsets type (must be <:Integer)\nl = List{String,Int32}(buff, 1, length(offs)+1, 3, UInt8, length(vals)) # arguments are: buffer, offsets location, values location, length of List, value type, values length\n\n# alternatively we can construct the values separately\nv = Primitive{UInt8}(buff, length(offs)+1, length(vals))\nl = List{String,Int32}(buff, 1, 3, v) # arguments are: buffer, offset location, length, values primitive\n\n# or you can create each piece individually\no = Primitive{Int32}(buff, 1, 4)  # note that the Int32 type is required for offsets by the arrow format\nv = Primitive{UInt8}(buff, length(offs)+1, length(vals))\nl = List{String}(o, v)\n\nl[1] # returns \"abc\"\nl[2] # returns \"de\"\nl[3] # returns \"fg\"\nl[1:3] # returns a normal Vector{String} (copies data!)\n\nl[1] = \"a\"  # ERROR: assignments are not currently supported for list types\n\n\nm = List([\"abc\", \"de\", \"fg\"]) # just as in the other cases, you can create your own data\nm = List(Array, [\"abc\", \"de\", \"fg\"]) # you can also require it all to be in a contiguous buffer\nm = arrowformat([\"abc\", \"de\", \"fg\"]) # as always arrowformat automatically determines the ArrowVector type\nrawvalues(offsets(m)) # returns reinterpret(UInt8, [0,3,5,7])\nrawvalues(values(m)) # returns convert(Vector{UInt8}, \"abcdefg\")Note that List{J} and NullableList{J} use the constructor J(::AbstractVector{C}) where C is the values type (in the above example UInt8)***WARNING:*** Currently the values of the offsets themselves are not bounds-checked for performance reasons.  This means you have to be extra sure that your offsets are properly constructed.  It is recommended that you always use arrowformat, List, or offsets to construct offsets, this should not be done manually.Enter ?List in the REPL for a full list of constructors."
},

{
    "location": "#The-NullableList-Type-1",
    "page": "Readme",
    "title": "The NullableList Type",
    "category": "section",
    "text": "Next we have the NullableList{J} <: AbstractVector{Union{J,Missing}} type.  NullableList is to List as NullablePrimitive is to Primitive.  In addition to offsets and values, it also contains a bit mask describing which elements are null.  By now you can probably predict what the example will look likebmask = [0x05] # bits(0x05) == \"00000101\"\noffs = reinterpret(UInt8, Int32[0,3,5,7])\nvals = convert(Vector{UInt8}, \"abcdefg\")\nbuff = [bmask; offs; vals]\nl = NullableList{String,Int32}(buff, 1, 2, length(offs)+2, 3, UInt8, length(vals))\n# arguments above are: buffer, bit mask location, offsets location, values location, list length, values type, values length\n\n# again you can also provide each piece separately\nb = Primitive{UInt8}(buff, 1, 1)  # required to have eltype UInt8\no = Primitive{Int32}(buff, 2, 4)  # required to have eltype Int32\nv = Primitive{UInt8}(buff, length(offs)+2, length(vals))\nl = NullableList{String,Int32}(b, o, v)\n\nl[1] # returns \"abc\"\nl[2] # returns missing\nl[3] # returns \"fg\"\n\nl[2] = \"de\"  # ERROR assignments not currently supported for list types\n\n\n# you can also create lists of Primitives, though this may involve copying\nl = NullableList{Primitive{UInt8},Int32}(b, o, v)\n\n\n# by now all the ways of creating this from our own data should be familiar\nm = NullableList([\"abc\", missing, \"fg\"])\nm = NullableList(Array, [\"abc\", missing, \"fg\"])\nm = arrowformat([\"abc\", missing, \"fg\"])Enter ?NullableList in the REPL for a full list of constructors."
},

{
    "location": "#The-DictEncoding-Type-1",
    "page": "Readme",
    "title": "The DictEncoding Type",
    "category": "section",
    "text": "The arrow format also supports dictionary encoding of arrays.  What this means is simply that instead of one array, there are two, a \"short\" array containing a view values, and a \"long\" array which contains pointers to those values (required by the Arrow standard to be Int32).  This provides a way of compressing arrays in which a relatively small number of values are repeated in large numbers.  Arrow.jl uses the Julia package CategoricalArrays.jl to support this functionality.  CategoricalArrays will be dictionary encoded by default when converted to Arrow array objects.  One aspect of this that may seem confusing is that references are required to be 0-based indices, which is contrary to the Julia 1-based approach we\'ve used for everything else.  In practice this shouldn\'t matter much: references do not need to be constructed manually.  See the following# in most real cases these would be constructed from data in one of the ways described above\nrefs = Primitive{Int32}([0, 1, 2, 0, 1, 3])\nvals = List([\"fire\", \"walk\", \"with\", \"me\"])\nA = DictEncoding(refs, vals)\n\nA[1] # returns \"fire\"\nA[5] # return \"walk\"\nA[[1,2,3,6]] # returns [\"fire\", \"walk\", \"with\", \"me\"]\n\n\n# you can also create your own from Julia data\nB = DictEncoding([\"fire\", \"walk\", \"with\", \"me\"])  # in this case there is no benefit to DictEncoding over List\n# arrowformat will automatically convert any CategoricalArray object to an Arrow formatted DictEncoding\nB = arrowformat(categorical([\"fire\", \"walk\", \"with\", \"me\"]))Note that indexing a DictEncoding{T} object will return objects of type T or Vector{T}.  The only exception is when indexing with a :, A[:], in which case a CategoricalArray will be returned (equivalently, this can be done with categorical(A).  In order to retrieve slices as CategoricalArray, one should use the categorical function, e.g. categorical(A, slice)."
},

{
    "location": "#The-BitPrimitive-and-NullableBitPrimitive-Types-1",
    "page": "Readme",
    "title": "The BitPrimitive and NullableBitPrimitive Types",
    "category": "section",
    "text": "Because the Arrow format specifies that Bools should be stored as single bits, a special type is required to store Arrow formatted Bool data.  These are analogous to the Julia BitVector object.  Note that there is nothing stopping you from serializing Julia Bool (which are 8-bit), but these will not in general be readable outside of Julia.  arrowformat will automatically convert AbstractVector{Bool} and AbstractVector{Union{Bool,Missing}} to BitPrimitive and NullableBitPrimitive respectively.  These types also provide the usual constructors as seen for the other types above."
},

{
    "location": "#Serializing-Julia-Data-1",
    "page": "Readme",
    "title": "Serializing Julia Data",
    "category": "section",
    "text": "Nothing is stopping you from storing Julia bits-type data that is not necessarily specified by the Arrow format.  For example, a Primitive{Complex128} will work just as expected.  ArrowVector objects were deliberately designed so that the way they construct their output depends only on their type parameter. While arrowformat will pick the appropriate ArrowVector for Arrow formatting data, there are no \"hidden conversions\" happening under the hood: the type parameter of your ArrowVector object is what you get.  You can therefore serialize any type for which isbits is true.  In principle you can also serialize more complicated types using Lists.  The only caveat is that any type not explicitly described in the Arrow standard will not in general be readable outside of Julia."
},

{
    "location": "#The-Locate-Interface-1",
    "page": "Readme",
    "title": "The Locate Interface",
    "category": "section",
    "text": "Given a Vector{UInt8} locating your data objects can be rather pedantic, and the last thing you want to do is point your ArrowVector objects to the wrong memory locations, as this will lead to scary undefined behavior.  Arrow provides an interface that will make this significantly easier provided your metadata is sufficiently well organized (which it always should be).  This interface will also check to make sure the locations you specify have proper alignment (still does not guarantee correctness!!).  The idea here is to create Julia structs which somehow represent the metadata of the various objects you want to access. In the following, assume you have definedstruct ObjMetadata\n    # whatever is needed to locate objects and determine their types goes here. You can also use type parameters if you want\nendYou are not limited to only having one such object, you can have arbitrarily many.  Once you define the appropriate methods (described below), all you need to do is calllocate(data, T, obj)\n# data is the data buffer; T is the return type of the container being constructed; obj is the ObjMetadataThis will automatically create the ArrowVector object that represents your data. The type parameter you provide specifies the return type, for example you might construct a List with locate(data, String, obj) or a NullableBitPrimitive with locate(data, Union{Bool,Missing}, obj)."
},

{
    "location": "#Minimal-Interface-1",
    "page": "Readme",
    "title": "Minimal Interface",
    "category": "section",
    "text": "The minimal way of implementing the locate interface requires defining some of the following methodsLocate.length(obj::ObjMetadata) = # the length (in number of elements) of the ArrowVector\nLocate.values(obj::ObjMetadata) = # location of values (i.e. return value data; char data for Lists)\nLocate.valueslength(obj::ObjMetadata) = # the length of the values sub-buffer (in number of elements); not needed for Primitives, only Lists\nLocate.bitmask(obj::ObjMetadata) = # location of null bitmask\nLocate.offsets(obj::ObjMetadata) = # location of offsets bufferOf course, you may only need to define a subset of these.  For example, if all you want are Primitives, you need only define Locate.length and Locate.values.  If you never need lists, you needn\'t define Locate.valueslength or Locate.offsets."
},

{
    "location": "#Overriding-Defaults-1",
    "page": "Readme",
    "title": "Overriding Defaults",
    "category": "section",
    "text": "The above interface may not be adequate for all purposes.  For example, if you only define the methods listed above, the offsets type will always default to Int32 (the Arrow format standard).  Furthermore, the type of ArrowVector will be determined by the desired return value (i.e. Primitive for bits-types, List for strings, NullablePrimitive for Union{T,Missing} where T is a bits-type, etc.)  To override these defaults you can use more detailed methods:# value data can be specified by defining the Locate.Values methods\n# T is the value data type, but you may not need it because the overall container return type will override it\nLocate.Values{T}(obj::ObjMetadata) = Locate.Values{T}(Locate.values(obj), Locate.valueslength(obj))\n\n# you need a slightly different Values constructor for List values\n# here T is the List return type so you can use it if you need to, but you may not\nLocate.Values(::Type{T}, obj::ObjMetadata) where T = Locate.Values{UInt8}(Locate.values(obj), Locate.valueslength(obj))\n\n# there\'s not really a reason to define Locate.Bitmask if you defined Locate.bitmask, but it\'s there\nLocate.Bitmask(obj::ObjMetadata) = Locate.Bitmask(Locate.bitmask(obj))\n\n# you can use Locate.Offsets to override the default offset type of Int32\nLocate.Offsets(obj::ObjMetadata) = Locate.Offsets{Int64}(Locate.offsets(obj))\n\n# as we described, you can also override the default container types, but this is not recommended\n# it may be useful for custom types, but remember these won\'t in general be usable outside of Julia\nLocate.containertype(::Type{CustomType}, obj::ObjMetadata) = NullablePrimitive # returned value should have no type paramtersIn the above we showed constructors receiving the arguments they would receive if you only defined the Locate methods listed in the previous section, but of course you can make these constructors do anything you want, as long as return the proper type as an output."
},

{
    "location": "#Writing-Data-1",
    "page": "Readme",
    "title": "Writing Data",
    "category": "section",
    "text": "Writing is somewhat simpler than reading as Arrow will figure out how to convert ordinary Julia data to Arrow formatted data for you.  In addition to arrowformat the other two most important functions for writing data will be rawpadded and writepadded.  rawpadded takes a Primitive as argument and returns a properly Arrow padded Vector{UInt8} appropriate for writing the data directly to an Arrow formatted buffer.  writepadded will write the properly padded array to an IO object.A = NullableList(data)\nwritepadded(io, A, bitmask, offsets, values)  # write bitmask, offsets then values of A, all contiguously, all properly padded\n\nB = DictEncoding(data)\nwritepadded(io, B, references)  # writes references\nwritepadded(io, levels(B), offsets, bitmask, values)  # writes the NullableList in a different order than aboveThe following table show which sub-buffers are relevant for which ArrowVectors.  All sub-buffers can be accessed as Primitives simply by doing, for example bitmask(l) where l isa ArrowVector{Union{T,Missing}} where T returns the primitive representing the null bit mask.|        | values | bitmask | offsets | | –- | –- | –- | –- | | Primitive | 1 | 0 | 0 | | NullablePrimitive | 1 | 1 | 0 | | List | 1 | 0 | 1 | | NullableList | 1 | 1 | 1 | | BitPrimitive | 1 | 0 | 0 | | NullableBitPrimitive | 1 | 1 | 0 |DictEncoding is a bit more complicated as it can contain any of the other types, but its references and data pool can be accessed with references and pool respectively."
},

{
    "location": "#DateTime-1",
    "page": "Readme",
    "title": "DateTime",
    "category": "section",
    "text": "Arrow.jl provides Arrow formatted date-time objects that have Julia equivalents.  These are Arrow.Datestamp=>Dates.Date, Arrow.Timestamp=>Dates.DateTime and Arrow.TimeOfDay=>Dates.Time.  The arrowformat function will automatically convert objects of the Julia Dates types to the appropriate Arrow format.  When constructing the various ArrowVector objects, this conversion must be specified explicitly, e.g. with Primitive{TimeOfDay}(v) where v::Vector{Dates.Time}. There is nothing stopping you from serializing the Julia Dates objects, but they are not in general readable outside of Julia.  The units in which DateTime and TimeOfDay are stored can be specified with Dates.TimePeriods.  For example, to store a DateTime with resolution of seconds, one should do convert(Timestamp{Dates.Second}, t) where t::DateTime."
},

{
    "location": "#Working-Example-1",
    "page": "Readme",
    "title": "Working Example",
    "category": "section",
    "text": "For a working (but as of this writing still in-development) example of a package built with Arrow.jl see this fork of Feather.jl."
},

{
    "location": "#TODO-1",
    "page": "Readme",
    "title": "TODO",
    "category": "section",
    "text": "A lot of work still to be done:Performance pass: performance seems ok according to basic sanity checks but it that code has neither been optimized nor thoroughly benchmarked.\nExtensive unit tests needed: hopefully I\'ll get to more of this soon.\nSupport Arrow Structs."
},

{
    "location": "autodocs/#Arrow.Datestamp",
    "page": "Docstrings",
    "title": "Arrow.Datestamp",
    "category": "type",
    "text": "Datestamp <: ArrowTime\n\nStores a date as an Int32 for Arrow formatted data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.DictEncoding",
    "page": "Docstrings",
    "title": "Arrow.DictEncoding",
    "category": "type",
    "text": "DictEncoding{P<:ArrowVector,J} <: ArrowVector{J}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.List",
    "page": "Docstrings",
    "title": "Arrow.List",
    "category": "type",
    "text": "List{P<:AbstractPrimitive,J} <: AbstractList{J}\n\nAn Arrow formatted array of variable length objects such as strings. The List contains \"value\" data as well as \"offsets\" which describe from which elements of the values data an element of List should be constructed.  The offsets are necessarily a Primitive{Int32} while the values can be any ArrowVector type (but in most circumstances should be Primitive).\n\nConstructors\n\nList{J}(len::Integer, offs::Primitive{Int32}, vals::AbstractPrimitive)\nList{J}(offs::Primitive{Int32}, vals::AbstractPrimitive)\nList{J}(data::Vector{UInt8}, offset_idx::Integer, len::Integer, vals::AbstractPrimitive)\nList{J}(data::Vector{UInt8}, offset_idx::Integer, values_idx::Integer, ::Type{C}, x::AbstractVector)\nList{J}(data::Vector{UInt8}, i::Integer, ::Type{C}, x::AbstractVector)\nList(data::Vector{UInt8}, i::Integer, ::Type{C}, x::AbstractVector)\nList{J}(Array, ::Type{C}, x::AbstractVector)\nList(Array, ::Type{C}, x::AbstractVector)\nList(::Type{C}, v::AbstractVector)\nList(v::AbstractVector{<:AbstractString})\n\nNote that by default, Lists of strings will be encoded in UTF-8.\n\nArguments\n\nlen: the length of the List\noffs: a Primitive{Int32} containing the offsets data\nvals: a Primitive containing the values data\ndata: the data buffer in which the underlying data is stored\noffset_idx: location within data where the offset data is stored\nvalues_idx: location within data where the values data is stored\nC: the encoding type (type of values), e.g. for UTF-8 strings this is UInt8. defaults to UInt8   if not given explicitly\ni: the location in data where all data should be stored (offsets, then values)\nx, v: array to be stored or converted\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.NullableList",
    "page": "Docstrings",
    "title": "Arrow.NullableList",
    "category": "type",
    "text": "NullableList{P<:AbstractPrimitive,J} <: AbstractList{Union{Missing,J}}\n\nAn Arrow formatted array of variable length objects such as strings which may be null. The NullableList contains a bit mask specifying which values are null and \"offsets\" which describe from which elements of the values data an element of the NullableList should be constructed.  The bitmask is contained in a Primitive{UInt8} while the offsets data in a Primitive{Int32}. The values can be contained in any ArrowVector type, but in most cases should be Primitive.\n\nConstructors\n\nNullableList{J}(len::Integer, bmask::Primitive, offs::Primitive, vals::AbstractPrimitive)\nNullableList{J}(bmask::Primitive, offs::Primitive, vals::AbstractPrimitive)\nNullableList{J}(data::Vector{UInt8}, bitmask_idx::Integer, offset_idx::Integer, len::Integer,\n                vals::AbstractPrimitive)\nNullableList{J}(data::Vector{UInt8}, bitmask_idx::Integer, offset_idx::Integer, values_idx::Integer,\n                len::Integer, ::Type{C}, values_len::Integer)\nNullableList{J}(data::Vector{UInt8}, bitmask_idx::Integer, offset_idx::Integer, values_idx::Integer,\n                ::Type{C}, x::AbstractVector)\nNullableList(data::Vector{UInt8}, i::Integer, ::Type{C}, x::AbstractVector)\nNullableList(Array, ::Type{C}, x::AbstractVector)\nNullableList(Array, x::AbstracVector)\nNullableList(::Type{C}, v::AbstractVector)\nNullableList(v::AbstractVector)\n\nIf Array is given as an argument, a contiguous array will be allocated to store the data.\n\nArguments\n\nlen: the length of the NullableList\nbmask: the Primitive providing the bit mask\noffs: the Primitive providing the offsets\nvals: the AbstractPrimitive providing the values\ndata: a buffer for storing the data\nbitmask_idx: the location in data of the bit mask\noffsets_idx: the location in data of the offsets\nvalues_idx: the location in data of the values\nvalues_len: the total length of the values data (i.e. number of elements in the values array)\nC: the data type of the values data. defaults to UInt8 when not provided\nx, v: array to be stored by the NullableList\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.NullablePrimitive",
    "page": "Docstrings",
    "title": "Arrow.NullablePrimitive",
    "category": "type",
    "text": "NullablePrimitive{J} <: AbstractPrimitive{Union{J,Missing}}\n\nA set of values stored contiguously in data with a bit mask specifying which values should be considered null.  The bit mask and data needn\'t necessarily coexist within the same array.\n\nConstructors\n\nNullablePrimitive(bmask::Primitive{UInt8}, vals::Primitive{J})\nNullablePrimitive(data::Vector{UInt8}, bitmask_idx::Integer, values_idx::Integer, x::AbstractVector)\nNullablePrimitive(data::Vector{UInt8}, i::Integer, x::AbstractVector)\nNullablePrimitive(v::AbstractVector)\nNullablePrimitive(Array, x::AbstractVector)\n\nIf Array is passed to a constructor, the bit mask and values for the NullablePrimitive will be contiguously allocated within a single array (bit mask first, then values).\n\nArguments\n\nbmask: a Primitive{UInt8} containing the null bitmask for the NullablePrimitive\nvals: a Primitive containing the underlying data values for the NullablePrimitive\ndata: a buffer in which the data for the NullablePrimitive will be stored\nbitmask_idx: the location within data where the null bit mask will be stored\nvalues_idx: the location within data where the values will be stored\nx, v: values to be stored in data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.Primitive",
    "page": "Docstrings",
    "title": "Arrow.Primitive",
    "category": "type",
    "text": "Primitive{J} <: AbstractPrimitive{J}\n\nA set of values which are stored contiguously in memory.  All other ArrowVector objects are built from Primitives.\n\nConstructors\n\nPrimitive{J}(data::Vector{UInt8}, i::Integer, len::Integer)\nPrimitive(data::Vector{UInt8}, i::Integer, x::AbstractVector)\nPrimitive(v::AbstractVector)\nPrimitive(Array, x::Abstractvector)\n\nIf Array is provided as the virst argument, the data will be allocated contiguously in a new buffer.\n\nArguments\n\ndata: a data buffer which the Primitive will refer to for accessing and storing values\ni: the index of the location (1-based) in data where the beginning of the value data is stored\nx: a vector which will be written into data[i] on construction\n\nv: existing reference data. constructors with will reference the originalvasdata`\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.TimeOfDay",
    "page": "Docstrings",
    "title": "Arrow.TimeOfDay",
    "category": "type",
    "text": "TimeOfDay{P<:Dates.TimePeriod,T<:Union{Int32,Int64}} <: ArrowTime\n\nAn arrow formatted object for representing the time of day. Underlying data is Int32 for seconds and milliseconds, Int64 for microsecond and nanosecond.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.Timestamp",
    "page": "Docstrings",
    "title": "Arrow.Timestamp",
    "category": "type",
    "text": "Timestamp{P<:Dates.TimePeriod} <: ArrowTime\n\nTimestamp in which time is stored in units P as Int64 for Arrow formatted data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.arrowformat",
    "page": "Docstrings",
    "title": "Arrow.arrowformat",
    "category": "function",
    "text": "arrowformat(v::AbstractVector)\narrowformat(Array, v::AbstractVector)\n\nConvert a vector to the appropriate arrowformat.  If Array is passed, a contiguous array will be used for the data buffer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.arrowview-Tuple{Primitive,UnitRange}",
    "page": "Docstrings",
    "title": "Arrow.arrowview",
    "category": "method",
    "text": "arrowview(p::ArrowVector, idx::UnitRange)\n\nReturn another ArrowVector which is a view into p for the index range idx.\n\nThis can only be done with contiguous indices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.bitmaskbytes-Tuple{Integer}",
    "page": "Docstrings",
    "title": "Arrow.bitmaskbytes",
    "category": "method",
    "text": "bitmaskbytes(A::AbstractVector)\nbitmaskbytes(::Type{Union{J,Missing}}, A::AbstractVector)\n\nCompute the number of bytes needed to store a null bitmask for the data in A.  This is 0 unless J <: Union{K,Missing}. Note that this does not take into account scheme-dependent padding.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.bitpack-Tuple{AbstractArray{Bool,1}}",
    "page": "Docstrings",
    "title": "Arrow.bitpack",
    "category": "method",
    "text": "bitpack(A::AbstractVector{Bool})\n\nReturns a Vector{UInt8} the bits of which are the values of A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.bytesforbits-Tuple{Integer}",
    "page": "Docstrings",
    "title": "Arrow.bytesforbits",
    "category": "method",
    "text": "bytesforbits(n::Integer)\n\nGet the number of bytes required to store n bits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.getoffset-Tuple{AbstractList,Any}",
    "page": "Docstrings",
    "title": "Arrow.getoffset",
    "category": "method",
    "text": "getoffset(l::AbstractList, i::Integer)\n\nRetrieve offset i for list l.  Note that this retrieves the Arrow formated 0-based indexed raw numbers!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.isnull-Tuple{ArrowVector,Any}",
    "page": "Docstrings",
    "title": "Arrow.isnull",
    "category": "method",
    "text": "isnull(A::ArrowVector, idx)\n\nCheck whether element(s) idx of A are null.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.nullcount-Tuple{ArrowVector}",
    "page": "Docstrings",
    "title": "Arrow.nullcount",
    "category": "method",
    "text": "nullcount(A::ArrowVector)\n\nReturn the number of nulls (missings) in A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.offsets-Union{Tuple{C}, Tuple{K}, Tuple{Type{K},Type{C},AbstractArray{T,1} where T}} where C where K<:Integer",
    "page": "Docstrings",
    "title": "Arrow.offsets",
    "category": "method",
    "text": "offsets(v::AbstractVector)\n\nConstruct a Vector{Int32} of offsets appropriate for data appearing in v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.padding-Tuple{Integer}",
    "page": "Docstrings",
    "title": "Arrow.padding",
    "category": "method",
    "text": "padding(n::Integer)\n\nDetermines the total number of bytes needed to store n bytes with padding. Note that the Arrow standard requires buffers to be aligned to 8-byte boundaries.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.rawpadded-Tuple{Primitive,Union{AbstractArray{#s832,1} where #s832<:Integer, #s833} where #s833<:Integer}",
    "page": "Docstrings",
    "title": "Arrow.rawpadded",
    "category": "method",
    "text": "rawpadded(A::Primitive)\n\nGet a Vector{UInt8} describing the data of A with Arrow padding (8 bytes).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.rawvalues-Tuple{ArrowVector,Any}",
    "page": "Docstrings",
    "title": "Arrow.rawvalues",
    "category": "method",
    "text": "rawvalues(A::ArrowVector, idx)\n\nGets a Vector{UInt8} of the raw values associated with the indices idx.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.rawvalues-Tuple{Primitive,Union{AbstractArray{#s832,1} where #s832<:Integer, #s833} where #s833<:Integer}",
    "page": "Docstrings",
    "title": "Arrow.rawvalues",
    "category": "method",
    "text": "rawvalues(A::Primitive, i)\nrawvalues(A::Primitive)\n\nGets the raw values for elements at locations i in the form of a Vector{UInt8}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.totalbytes-Tuple{AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "Arrow.totalbytes",
    "category": "method",
    "text": "totalbytes(A::AbstractVector)\ntotalbytes(::Type{Union{J,Missing}}, A::AbstractVector)\ntotalbytes(::Type{C}, A::AbstractVector)\ntotalbytes(::Type{Union{J,Missing}}, ::Type{C}, A::AbstractVector)\n\nComputes the minimum number of bytes needed to store A as an Arrow formatted primitive array or list.\n\nTo obtain the minimum bytes to store string data, one must input C the character encoding type the string will be converted to (e.g. UInt8).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unbitpack-Tuple{AbstractArray{UInt8,1}}",
    "page": "Docstrings",
    "title": "Arrow.unbitpack",
    "category": "method",
    "text": "unbitpack(A::AbstractVector{UInt8})\n\nReturns a Vector{Bool} the values of which are the bits of A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.valuesbytes-Union{Tuple{J}, Tuple{Type{J},Integer}} where J",
    "page": "Docstrings",
    "title": "Arrow.valuesbytes",
    "category": "method",
    "text": "valuesbytes(A::AbstractVector)\nvaluesbytes(::Type{C}, A::AbstractVector{<:AbstractString})\n\nComputes the number of bytes needed to store the values of A (without converting the underlying binary type). This does not include the number of bytes needed to store metadata such as a null bitmask or offsets.\n\nTo obtain the number of values bytes needed to string data, one must input C the character encoding type the string will be converted to (e.g. UInt8).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.writepadded-Tuple{IO,Any}",
    "page": "Docstrings",
    "title": "Arrow.writepadded",
    "category": "method",
    "text": "writepadded(io::IO, x)\nwritepadded(io::IO, A::Primitive)\nwritepadded(io::IO, A::Arrowvector, subbuffs::Function...)\n\nWrite the data x to io with 8-byte padding. This is commonly needed in Arrow implementations since Arrow requires 8-byte boundary alignment.\n\nIf a Primitive is provided, the appropriate padded values will be written.\n\nIf an ArrowVector is provided, the ordering of the sub-buffers must be specified, and they will be written in the order given.  For example writepadded(io, A, bitmask, offsets, values) will write the bit mask, offsets and then values of A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.writepadded-Tuple{IO,Primitive,Union{AbstractArray{#s832,1} where #s832<:Integer, #s833} where #s833<:Integer}",
    "page": "Docstrings",
    "title": "Arrow.writepadded",
    "category": "method",
    "text": "writepadded(io::IO, A::Primitive)\n\nWrite the values of A to io with Arrow padding (8 bytes).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.bitmaskpointer-Union{Tuple{ArrowVector{Union{Missing, J}}}, Tuple{J}} where J",
    "page": "Docstrings",
    "title": "Arrow.bitmaskpointer",
    "category": "method",
    "text": "bitmaskpointer(A::ArrowVector)\n\nReturns a pointer to the start of the bitmask buffer for A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.construct-Union{Tuple{T}, Tuple{Type{T},AbstractPrimitive,Integer,Integer}} where T",
    "page": "Docstrings",
    "title": "Arrow.construct",
    "category": "method",
    "text": "construct(::Type{T}, A::AbstractPrimitive{J}, i::Integer, len::Integer)\n\nConstruct an object of type T from len values in A starting at index i. For this to work requires the existence of a constructor of the form T(::Vector{J}).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.datapointer-Tuple{Primitive}",
    "page": "Docstrings",
    "title": "Arrow.datapointer",
    "category": "method",
    "text": "datapointer(A::Primitive)\n\nReturns a pointer to the very start of the data buffer for A (i.e. does not depend on indices).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.ellength-Tuple{AbstractList,Integer}",
    "page": "Docstrings",
    "title": "Arrow.ellength",
    "category": "method",
    "text": "ellength(l::AbstractList, i::Integer)\n\nGet the length of element i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.encode-Union{Tuple{J}, Tuple{C}, Tuple{Type{C},AbstractArray{J,1}}} where J where C",
    "page": "Docstrings",
    "title": "Arrow.encode",
    "category": "method",
    "text": "encode(::Type{C}, v::AbstractVector{J})\n\nAttempt to encode the data in v as a Vector{C}. This requires that if convert(Vector{C}, x) is valid where x ∈ v.  Nothing is stored for cases where x == missing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.getbit-Union{Tuple{J}, Tuple{Primitive{J},Integer}} where J",
    "page": "Docstrings",
    "title": "Arrow.getbit",
    "category": "method",
    "text": "getbit(A::Primitive, i)\n\nGet the ith bit of the primitive.  For example, for a Primitive{UInt8] the 10th bit is the second bit of the second value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.getvalue-Union{Tuple{J}, Tuple{Union{NullablePrimitive{J}, Primitive{J}},Integer}} where J",
    "page": "Docstrings",
    "title": "Arrow.getvalue",
    "category": "method",
    "text": "getvalue(A::ArrowVector, idx)\n\nGet the values for indices idx from A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.offsetspointer-Tuple{AbstractList}",
    "page": "Docstrings",
    "title": "Arrow.offsetspointer",
    "category": "method",
    "text": "offsetspointer(A::AbstractList)\n\nReturns a pointer to the start of the offsets buffer for A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unsafe_construct-Tuple{Type{String},Primitive{UInt8},Integer,Integer}",
    "page": "Docstrings",
    "title": "Arrow.unsafe_construct",
    "category": "method",
    "text": "unsafe_construct(::Type{T}, A::Primitive, i::Integer, len::Integer)\n\nConstruct an object of type T using len elements from A starting at index i (1-based indexing). This is mostly used by AbstractList objects to construct variable length objects such as strings from primitive arrays.\n\nUsers must define new methods for new types T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unsafe_ellength-Tuple{AbstractList,Integer}",
    "page": "Docstrings",
    "title": "Arrow.unsafe_ellength",
    "category": "method",
    "text": "unsafe_ellength(l::AbstractList, i::Integer)\n\nGet the length of element i. Involves calls to unsafe_load.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unsafe_getoffset-Tuple{AbstractList,Any}",
    "page": "Docstrings",
    "title": "Arrow.unsafe_getoffset",
    "category": "method",
    "text": "unsafe_getoffset(l::AbstractList, i::Integer)\n\nGet the offset for element i.  Contains a call to unsafe_load.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unsafe_getvalue-Union{Tuple{J}, Tuple{Union{NullablePrimitive{J}, Primitive{J}},Integer}} where J",
    "page": "Docstrings",
    "title": "Arrow.unsafe_getvalue",
    "category": "method",
    "text": "unsafe_getvalue(A::ArrowVector, i)\n\nRetrieve the value from memory location i using Julia 1-based indexing. i can be a single integer index, an AbstractVector of integer indices, or an AbstractVector{Bool} mask.\n\nThis typically involves a call to unsafe_load or unsafe_wrap.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unsafe_isnull-Tuple{ArrowVector,Integer}",
    "page": "Docstrings",
    "title": "Arrow.unsafe_isnull",
    "category": "method",
    "text": "unsafe_isnull(A::ArrowVector, idx)\n\nCheck whether element(s) idx of A are null.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unsafe_rawbitmask-Union{Tuple{ArrowVector{Union{Missing, J}}}, Tuple{J}} where J",
    "page": "Docstrings",
    "title": "Arrow.unsafe_rawbitmask",
    "category": "method",
    "text": "unsafe_rawbitmask(p::ArrowVector{Union{J,Missing}})\n\nRetrieve the raw value of the null bit mask for p.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unsafe_rawoffsets-Tuple{AbstractList}",
    "page": "Docstrings",
    "title": "Arrow.unsafe_rawoffsets",
    "category": "method",
    "text": "unsafe_rawoffsets(p::AbstractList)\n\nRetreive the raw offstets for p as a Vector{UInt8}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unsafe_rawpadded-Tuple{Ptr{UInt8},Integer}",
    "page": "Docstrings",
    "title": "Arrow.unsafe_rawpadded",
    "category": "method",
    "text": "unsafe_rawpadded(ptr::Ptr, len::Integer, padding::Function=identity)\n\nReturn a Vector{UInt8} padded to appropriate size specified by padding.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unsafe_rawpaddedvalues-Tuple{AbstractPrimitive}",
    "page": "Docstrings",
    "title": "Arrow.unsafe_rawpaddedvalues",
    "category": "method",
    "text": "unsafe_rawpaddedvalues(p::ArrowVector)\n\nRetreive raw value data for p as a Vector{UInt8}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unsafe_setnull!-Union{Tuple{J}, Tuple{ArrowVector{Union{Missing, J}},Bool,Integer}} where J",
    "page": "Docstrings",
    "title": "Arrow.unsafe_setnull!",
    "category": "method",
    "text": "unsafe_setnull!(A::ArrowVector{Union{J,Missing}}, x::Bool, i::Integer)\n\nSet element i of A to be null. This involves no bounds checking and a call to unsafe_store!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unsafe_setnulls!-Union{Tuple{J}, Tuple{ArrowVector{Union{Missing, J}},Array{UInt8,1}}} where J",
    "page": "Docstrings",
    "title": "Arrow.unsafe_setnulls!",
    "category": "method",
    "text": "unsafe_setnulls!(A::ArrowVector, nulls::AbstractVector{Bool})\n\nSet all the nulls for the ArrowVector. This does not check bounds and contains a call to unsafe_copy! (but does not copy directly from nulls).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unsafe_setoffset!-Tuple{AbstractList,Int32,Integer}",
    "page": "Docstrings",
    "title": "Arrow.unsafe_setoffset!",
    "category": "method",
    "text": "unsafe_setoffset!(l::AbstractList, off::Int32, i::Integer)\n\nSet offset i to off.  Contains a call to unsafe_store!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unsafe_setoffsets!-Tuple{AbstractList,Array{Int32,1}}",
    "page": "Docstrings",
    "title": "Arrow.unsafe_setoffsets!",
    "category": "method",
    "text": "unsafe_setoffsets!(l::AbstractList, off::Vector{Int32})\n\nSet all offsets to the Vector{Int32} off.  Contains a call to unsafe_copy! which copies the entirety of off.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.unsafe_setvalue!-Union{Tuple{J}, Tuple{Union{NullablePrimitive{J}, Primitive{J}},J,Integer}} where J",
    "page": "Docstrings",
    "title": "Arrow.unsafe_setvalue!",
    "category": "method",
    "text": "unsafe_setvalue!(A::ArrowVector{J}, x, i)\n\nSet the value at location i to x.  If i is a single integer, x should be an element of type J.  Otherwise i can be an AbstractVector{<:Integer} or AbstractVector{Bool} in which case x should be an appropriately sized AbstractVector{J}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Arrow.valuespointer-Tuple{ArrowVector}",
    "page": "Docstrings",
    "title": "Arrow.valuespointer",
    "category": "method",
    "text": "valuespointer(A::ArrowVector)\n\nReturns a pointer to the start of the values buffer for A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Arrow]\nOrder = [:type, :function]"
},

]}
