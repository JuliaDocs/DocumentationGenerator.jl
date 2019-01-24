var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ObjectFile-1",
    "page": "Readme",
    "title": "ObjectFile",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage)This package provides basic functionality to read and analyze binary object files. It was written with ELF/MachO/COFF in mind, but should be easily adaptable to other object files as well.  While not originally intended as a package to enable the construction of a compiler/linker, the package authors welcome any and all efforts to extend the capabilities of this package toward synthesis of object files as well as the analysis of them."
},

{
    "location": "autodocs/#ObjectFile.DynamicLink",
    "page": "Docstrings",
    "title": "ObjectFile.DynamicLink",
    "category": "type",
    "text": "DynamicLink\n\nThis type encapsulates the linkage of one object file to another.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation:\n\nDynamicLink()\n\nAccessors:\n\nDynamicLinks()\nhandle()\npath()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.DynamicLinks",
    "page": "Docstrings",
    "title": "ObjectFile.DynamicLinks",
    "category": "type",
    "text": "DynamicLinks\n\nThis type encapsulates the list of dynamic links within an object, holding a collection of DynamicLink objects.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation\n\nDynamicLinks()\n\nIteration\n\ngetindex()\nlastindex()\niterate()\neltype()\n\nMisc.\n\nhandle()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.MagicMismatch",
    "page": "Docstrings",
    "title": "ObjectFile.MagicMismatch",
    "category": "type",
    "text": "MagicMismatch\n\nThis is an error type used to denote that readmeta() was called on a file that does not contain the proper magic at the beginning for the type of object file that was attempting to be loaded.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.ObjectHandle",
    "page": "Docstrings",
    "title": "ObjectFile.ObjectHandle",
    "category": "type",
    "text": "ObjectHandle\n\nThe basic type that provides access to object files.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis.  Note tha \"must implement\" is a bit of a misnomer, if an Object file does not have need of a certain piece of this API (e.g. COFF files have no concept of Segments), leaving that chunk of the API undefined will simply cause errors if a user attempts to use methods that use that part of the API (in the example above, an error will be thrown if the user calls Segments(oh) where oh <: COFFHandle).\n\nCreation\n\nreadmeta()\n\nIOStream-like operations:\n\nseek()\nseekstart()\nskip()\nstartaddr()\niostream()\nposition()\nread()\nreaduntil()\neof()\nunpack()\n\nFormat-specific properties\n\nendianness()\nis64bit()\nisrelocatable()\nisexecutable()\nislibrary()\nisdynamic()\nmanglesectionname()\nmanglesymbolname()\nhandle()\nheader()\nformat_string()\n\nSection properties\n\nsectionheaderoffset()\nsectionheadersize()\nsectionheadertype()\n\nSegment properties\n\nsegmentheaderoffset()\nsegmentheadersize()\nsegmentheadertype()\n\nSymbol properties\n\nsymtabentryoffset()\nsymtabentrysize()\nsymtabentrytype()\n\nMisc\n\npath()\nshow()\nfind_library()\nfind_libraries()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.RPath",
    "page": "Docstrings",
    "title": "ObjectFile.RPath",
    "category": "type",
    "text": "RPath\n\nThis type encapsulates the search path used by an object file when looking for a shared library.  This class enables not only looking at the path, but querying the path for matches for given library names.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation:\n\nRPath()\n\nUtility\n\nhandle()\n\nRPath operations\n\nrpaths()\ncanonical_rpaths()\nfind_library()\nlastindex()\niterate()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.RPath-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.RPath",
    "category": "method",
    "text": "RPath(oh::ObjectHandle)\n\nConstruct an RPath object from the given ObjectHandle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.Section",
    "page": "Docstrings",
    "title": "ObjectFile.Section",
    "category": "type",
    "text": "Section\n\nAn abstraction over the concept of a Section within an object file.  Because many operations upon sections require global operations (access to the string table, knowledge of position within the file, etc...) some operations are defined only upon the SectionRef datatype.  As a user, the SectionRef type should be the primary method of interacting with sections, as a developer adding new object file formats, some methods must support Sections, others must support only SectionRefs.  Note that any method that works on a Section must also work with a SectionRef, see the @derefmethod macro for a convenient helper macro to generate SectionRef -> Section wrapper methods. The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation:\n\nread()\n\nUtility:\n\nderef()\n\nIO-like operations:\n\ncontents()\n\nFormat-specific properties:\n\nsection_name()\nsection_size()\nsection_offset()\nsection_address()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.SectionRef",
    "page": "Docstrings",
    "title": "ObjectFile.SectionRef",
    "category": "type",
    "text": "SectionRef\n\nProvides a reference to a Section, along with a reference to the ObjectHandle this Section comes from.  This should be the primary method by which users interact with sections inside object files.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis.  Note that this overlaps heavily with the Section object API, this is by design as many of the methods are simply passthroughs to the underlying Section API calls for ease of use.\n\nCreation:\n\nSectionRef()\n\nUtility\n\nderef()\nhandle()\nSections()\n\nIO-like operations:\n\nread()\nseekstart()\nseek()\neof()\n\nFormat-specific properties:\n\nsection_name()\nsection_number()\nsection_type()\nsection_size()\nsection_offset()\nsection_address()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.SectionRef-Tuple{Sections,Section,Any}",
    "page": "Docstrings",
    "title": "ObjectFile.SectionRef",
    "category": "method",
    "text": "SectionRef(sections::Sections, section::Section, idx)\n\nConstruct a SectionRef object pointing to the given Section, which itself represents the idx\'th section within the given Sections.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.Sections",
    "page": "Docstrings",
    "title": "ObjectFile.Sections",
    "category": "type",
    "text": "Sections\n\nAn abstraction over the concept of a collection of Section types within an object file.  One can think of the Sections object containing the table of section headers within the object file, whereas the Section/SectionRef objects contain the actual section data itself.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation\n\nSections()\n\nIteration\n\ngetindex()\nlastindex()\nlength()\niterate()\neltype()\n\nSearch\n\nfindall()\nfindfirst()\n\nMisc.\n\nhandle()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.Sections-Tuple{SectionRef}",
    "page": "Docstrings",
    "title": "ObjectFile.Sections",
    "category": "method",
    "text": "Sections(section::SectionRef)\n\nReturn the Sections collection this section belongs to.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.Segment",
    "page": "Docstrings",
    "title": "ObjectFile.Segment",
    "category": "type",
    "text": "Segment\n\nAn abstraction over the concept of a Segment within an object file.  A Segment is a portion of an object file that is given instruction on its layout in virtual memory; this is in contrast to a Section, which delineates different portions of an object file on disk.  ELF files have the strictest separation here, with a single executable file containing multiple Segment and Section objects, with Sections being assigned to one or more Segments for virtual memory placement.  Mach-O files typically have two Segments, one called __TEXT, one called __DATA.  COFF files do not have Segment.\n\nJust like with Section objects, many operations upon segments require global operations (access to the string table, knowledge of position within the file, etc...) which causes some operations to be defined only upon the SegmentRef datatype.  As a user, the SegmentRef type should be the primary method of interacting with segments, as a developer adding new object file formats, some methods must support Segments, others must support only SegmentRefs. Note that any method that works on a Segment must also work with a SegmentRef, see the @derefmethod macro for a convenient helper macro to generate SegmentRef -> Section wrapper methods. The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation:\n\nread()\n\nUtility:\n\nderef()\n\nFormat-specific properties:\n\nsegment_name()\nsegment_offset()\nsegmentfilesize()\nsegmentmemorysize()\nsegment_address()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.SegmentRef",
    "page": "Docstrings",
    "title": "ObjectFile.SegmentRef",
    "category": "type",
    "text": "SegmentRef\n\nProvides a reference to a Segment, along with a reference to the ObjectHandle this Segment comes from.  This should be the primary method by which users interact with segments inside object files.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis.  Note that this overlaps heavily with the Segment object API, this is by design as many of the methods are simply passthroughs to the underlying Segment API calls for ease of use.\n\nCreation:\n\nSegmentRef()\n\nUtility\n\nderef()\nSegments()\nhandle()\n\nFormat-specific properties:\n\nsegment_name()\nsegment_number()\nsegment_offset()\nsegmentfilesize()\nsegmentmemorysize()\nsegment_address()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.Segments",
    "page": "Docstrings",
    "title": "ObjectFile.Segments",
    "category": "type",
    "text": "Segments\n\nAn abstraction over the concept of a collection of Segment types within an object file.  One can think of the Segments object containing the table of segment headers within the object file, whereas the Segment/SegmentRef objects contain the actual segment data itself.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation\n\nSegments()\n\nIteration\n\ngetindex()\nlastindex()\nlength()\niterate()\neltype()\n\nSearch\n\nfindall()\nfindfirst()\n\nMisc.\n\nhandle()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.Segments-Tuple{SegmentRef}",
    "page": "Docstrings",
    "title": "ObjectFile.Segments",
    "category": "method",
    "text": "Segments(seg::SegmentRef)\n\nReturn the Segments collection this Segment belongs to.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.StrTab",
    "page": "Docstrings",
    "title": "ObjectFile.StrTab",
    "category": "type",
    "text": "StrTab\n\nThis type encapsulates a string table within an object file, enabling queries against the string table for symbol names, section names, etc... The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation\n\nStrTab()\n\nAccessors\n\nhandle()\nstrtab_lookup()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.SymbolRef",
    "page": "Docstrings",
    "title": "ObjectFile.SymbolRef",
    "category": "type",
    "text": "SymbolRef\n\nProvides a reference to a SymtabEntry, along with a reference to the ObjectHandle this SymtabEntry comes from.  This should be the primary method by which users interact with symbols inside object files.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis.  Note that this overlaps heavily with the SymtabEntry object API, this is by design as many of the methods are simply passthroughs to the underlying SymtabEntry API calls for ease of use.\n\nCreation:\n\nSymbolRef()\n\nUtil:\n\nderef()\nSymbols()\nhandle()\n\nProperties:\n\nsymbol_number()\nsymbol_name()\nsymbol_value()\nisundef()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.SymbolRef-Tuple{Symbols,SymtabEntry,UInt32}",
    "page": "Docstrings",
    "title": "ObjectFile.SymbolRef",
    "category": "method",
    "text": "SymbolRef(symbols::Symbols, sym::SymtabEntry, idx::UInt32)\n\nConstruct a SymbolRef object pointing to the given SymtabEntry, which itself represents the idx\'th symbol within the given Symbols collection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.Symbols",
    "page": "Docstrings",
    "title": "ObjectFile.Symbols",
    "category": "type",
    "text": "Symbols\n\nAn abstraction over the concept of a collection of symbol (SymtabEntry) types within an object file.  One can think of the Symbols object containing the table of symbols within the object file, whereas the SymtabEntry/SymbolRef objects contain the actual symbol data itself.  The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation\n\nSymbols()\n\nIteration\n\ngetindex()\nlastindex()\nlength()\niterate()\neltype()\n\nMisc.\n\nhandle()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.Symbols-Tuple{SymbolRef}",
    "page": "Docstrings",
    "title": "ObjectFile.Symbols",
    "category": "method",
    "text": "Symbols(sym::SymbolRef)\n\nReturn the Symbols object that this SymbolRef belongs to.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.SymtabEntry",
    "page": "Docstrings",
    "title": "ObjectFile.SymtabEntry",
    "category": "type",
    "text": "SymtabEntry\n\nAn abstraction over the concept of a symbol within an object file.  This type does not use the Symbol name as this would conflict with the builtin Julia Symbol type, so the name SymtabEntry is used instead.  As a user, the SymbolRef type should be the primary method of interacting with symbols, as a developer adding new object file formats, some methods must support SymtabEntrys, others must support only SymbolRefs.  Note that any method that works on a SymtabEntry must also work with a SymbolRef, see the @derefmethod macro for a convenient helper macro to generate SymbolRef -> SymtabEntry wrapper methods. The list of available API operations is given below, with methods that subclasses must implement marked in emphasis:\n\nCreation:\n\nSymtabEntry()\n\nUtil:\n\nderef()\n\nProperties:\n\nsymbol_name()\nsymbol_value()\nisundef()\nisglobal()\nislocal()\nisweak()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.fixed_string",
    "page": "Docstrings",
    "title": "ObjectFile.fixed_string",
    "category": "type",
    "text": "fixed_string{T}\n\nA fixed-byte string, stored as an integer type (e.g. T = UInt128, or T = UInt64) but displayed and treated as a string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.eof-Tuple{SectionRef}",
    "page": "Docstrings",
    "title": "Base.eof",
    "category": "method",
    "text": "eof(section::SectionRef)\n\nReturns true if the ObjectHandle that this SectionRef refers to has read beyond the current section\'s extent\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.findall-Tuple{Sections,AbstractString}",
    "page": "Docstrings",
    "title": "Base.findall",
    "category": "method",
    "text": "findall(sections::Sections, name::String)\n\nReturn a list of sections that match the given name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.findall-Union{Tuple{S}, Tuple{Sections,Array{S,1}}} where S<:AbstractString",
    "page": "Docstrings",
    "title": "Base.findall",
    "category": "method",
    "text": "findall(sections::Sections, name::String)\n\nReturn a list of sections that match one of the given names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.findfirst-Tuple{Sections,AbstractString}",
    "page": "Docstrings",
    "title": "Base.findfirst",
    "category": "method",
    "text": "findfirst(sections::Sections, name::String)\n\nReturn the first section that matches the given name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.findfirst-Tuple{Sections,Array{String,1}}",
    "page": "Docstrings",
    "title": "Base.findfirst",
    "category": "method",
    "text": "findfirst(sections::Sections, names::Vector{String})\n\nReturn the first section that matches on of the given names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.read-Tuple{SectionRef}",
    "page": "Docstrings",
    "title": "Base.read",
    "category": "method",
    "text": "read(section::SectionRef)\n\nRead the contents of the section referred to by section, returning a Vector{UInt8}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.seek-Tuple{SectionRef,Any}",
    "page": "Docstrings",
    "title": "Base.seek",
    "category": "method",
    "text": "seek(section::SectionRef, offset)\n\nSeek to offset relative to section in the ObjectHandle that this SectionRef refers to\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.seekstart-Tuple{SectionRef}",
    "page": "Docstrings",
    "title": "Base.seekstart",
    "category": "method",
    "text": "seekstart(section::SectionRef)\n\nSeek to the beginning of section in the ObjectHandle it was loaded from.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.canonical_rpaths-Tuple{RPath}",
    "page": "Docstrings",
    "title": "ObjectFile.canonical_rpaths",
    "category": "method",
    "text": "canonical_rpaths(rpath::RPath)\n\nReturn a canonicalized list of paths that will be searched.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.contents-Union{Tuple{H}, Tuple{H,Section{H}}} where H<:ObjectHandle",
    "page": "Docstrings",
    "title": "ObjectFile.contents",
    "category": "method",
    "text": "contents(oh::ObjectHandle, section::Section)\n\nRead the contents of the section referred to by section from the given ObjectHandle, returning a Vector{UInt8}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.deref-Tuple{SectionRef}",
    "page": "Docstrings",
    "title": "ObjectFile.deref",
    "category": "method",
    "text": "deref(section::SectionRef)\n\nDereference the given SectionRef object to a Section.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.deref-Tuple{SegmentRef}",
    "page": "Docstrings",
    "title": "ObjectFile.deref",
    "category": "method",
    "text": "deref(seg::SegmentRef)\n\nDereference the given SegmentRef object to a Segment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.endianness-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.endianness",
    "category": "method",
    "text": "endianness(oh::ObjectHandle)\n\nReturns the endianness of the given ObjectHandle (e.g. :LittleEndian)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.find_libraries-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.find_libraries",
    "category": "method",
    "text": "find_libraries(oh::ObjectHandle)\n\nReturn a mapping from sonames to absolute paths, containing all the sonames declared as beeing needed by the given ObjectHandle.  See the documentation for find_library(::RPath, ::String) and RPath for more details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.find_library-Tuple{ObjectHandle,AbstractString}",
    "page": "Docstrings",
    "title": "ObjectFile.find_library",
    "category": "method",
    "text": "find_library(oh::ObjectHandle, soname::String)\n\nReturn the absolute path to the given soname, using the linker search path that the given ObjectHandle would use at runtime.  See the documentation for find_library(::RPath, ::String) for more details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.find_library-Tuple{RPath,AbstractString}",
    "page": "Docstrings",
    "title": "ObjectFile.find_library",
    "category": "method",
    "text": "find_library(rpath::RPath, soname::String)\n\nReturn the full path to a library, searching the given RPath, and then the default library search paths.  This method takes the given soname and joins it to the end of every path within the given RPath, returning the resultant path if it exists, returning back the original soname if it doesn\'t.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.format_string-Tuple{Type}",
    "page": "Docstrings",
    "title": "ObjectFile.format_string",
    "category": "method",
    "text": "format_string(::Type{H}) where {H <: ObjectHandle}\n\nReturn the string name of the given ObjectHandle, examples are \"ELF\", \"MachO\", \"COFF\", etc...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.getindex_ref-NTuple{6,Any}",
    "page": "Docstrings",
    "title": "ObjectFile.getindex_ref",
    "category": "method",
    "text": "getindex_ref(collection, offset, stride, T, ref_type, idx)\n\nGiven a collection, such as Sections, DynamicLinks, etc... use the given offset, stride, and T parameters to read in and construct a ref_type object located at index idx.  Example invocation:\n\ngetindex_ref(\n    sections,\n    section_header_offset(oh),\n    section_header_size(oh),\n    section_header_type(oh),\n    SectionRef,\n    idx\n)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.handle-Tuple{RPath}",
    "page": "Docstrings",
    "title": "ObjectFile.handle",
    "category": "method",
    "text": "handle(rpath::RPath)\n\nReturn the handle that this RPath object refers to.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.handle-Tuple{SectionRef}",
    "page": "Docstrings",
    "title": "ObjectFile.handle",
    "category": "method",
    "text": "handle(section::SectionRef)\n\nReturn the ObjectHandle this SectionRef belongs to.  This method is SectionRef-only.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.handle-Tuple{Sections}",
    "page": "Docstrings",
    "title": "ObjectFile.handle",
    "category": "method",
    "text": "handle(sections::Sections)\n\nReturn the ObjectHandle that this Sections object belongs to\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.handle-Tuple{SegmentRef}",
    "page": "Docstrings",
    "title": "ObjectFile.handle",
    "category": "method",
    "text": "handle(seg::SegmentRef)\n\nReturn the ObjectHandle this SegmentRef belongs to.  This method is SegmentRef-only.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.handle-Tuple{StrTab}",
    "page": "Docstrings",
    "title": "ObjectFile.handle",
    "category": "method",
    "text": "handle(s::StrTab)\n\nReturn the ObjectHandle this StrTab belongs to.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.handle-Tuple{SymbolRef}",
    "page": "Docstrings",
    "title": "ObjectFile.handle",
    "category": "method",
    "text": "handle(sym::SymbolRef)\n\nReturn the ObjectHandle that this SymbolRef belongs to.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.header-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.header",
    "category": "method",
    "text": "header(oh::ObjectHandle)\n\nReturn the ObjectHandle\'s header object, whatever that may be for this particular object file format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.iostream-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.iostream",
    "category": "method",
    "text": "iostream(oh::ObjectHandle)\n\nReturns the IOStream backing the ObjectHandle\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.is64bit-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.is64bit",
    "category": "method",
    "text": "is64bit(oh::ObjectHandle)\n\nReturns true if the given ObjectHandle represents a 64-bit object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.isdynamic-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.isdynamic",
    "category": "method",
    "text": "isdynamic(oh::ObjectHandle)\n\nReturns true if the given ObjectHandle makes use of dynamic linking.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.isexecutable-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.isexecutable",
    "category": "method",
    "text": "isexecutable(oh::ObjectHandle)\n\nReturns true if the given ObjectHandle represents an executable object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.isglobal-Tuple{SymtabEntry}",
    "page": "Docstrings",
    "title": "ObjectFile.isglobal",
    "category": "method",
    "text": "isglobal(sym::SymtabEntry)\n\nReturn true if the given symbol is global\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.islibrary-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.islibrary",
    "category": "method",
    "text": "islibrary(oh::ObjectHandle)\n\nReturns true if the given ObjectHandle represents a shared library\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.islocal-Tuple{SymtabEntry}",
    "page": "Docstrings",
    "title": "ObjectFile.islocal",
    "category": "method",
    "text": "islocal(sym::SymtabEntry)\n\nReturn true if the given symbol is local\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.isrelocatable-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.isrelocatable",
    "category": "method",
    "text": "isrelocatable(oh::ObjectHandle)\n\nReturns true if the given ObjectHandle represents a relocatable object file, e.g. an .o file as generated by gcc -c\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.isundef-Tuple{SymtabEntry}",
    "page": "Docstrings",
    "title": "ObjectFile.isundef",
    "category": "method",
    "text": "isundef(sym::SymtabEntry)\n\nReturn true if the given symbol is undefined\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.isweak-Tuple{SymtabEntry}",
    "page": "Docstrings",
    "title": "ObjectFile.isweak",
    "category": "method",
    "text": "isweak(sym::SymtabEntry)\n\nReturn true if the given symbol is weak\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.mangle_section_name-Tuple{ObjectHandle,AbstractString}",
    "page": "Docstrings",
    "title": "ObjectFile.mangle_section_name",
    "category": "method",
    "text": "mangle_section_name(oh::ObjectHandle, name::AbstractString)\n\nTurn a section name into the object-format specific naming convention, e.g. returning \".bss\" for ELF/COFF files, and \"__bss\" for MachO files\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.mangle_symbol_name-Tuple{ObjectHandle,AbstractString}",
    "page": "Docstrings",
    "title": "ObjectFile.mangle_symbol_name",
    "category": "method",
    "text": "mangle_symbol_name(oh::ObjectHandle, name::AbstractString)\n\nMangle a symbol name using the object-format specific naming convention, e.g. prefixing \"_\" for MachO files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.path-Tuple{IO}",
    "page": "Docstrings",
    "title": "ObjectFile.path",
    "category": "method",
    "text": "path(io::IO)\n\nTry to guess the path of an IO object.  If it cannot be guessed, returns the empty string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.path-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.path",
    "category": "method",
    "text": "path(oh::ObjectHandle)\n\nReturn the absolute path to the given ObjectHandle, if it was a file loaded from the local disk.  If it was loaded from a general IOStream or in some other way such that the path is unknown or unknowable, return the empty string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.read_struct-NTuple{4,Any}",
    "page": "Docstrings",
    "title": "ObjectFile.read_struct",
    "category": "method",
    "text": "read_struct(oh, type_func, size_func, name)\n\nGiven a Type, (such as ELFSection64), unpack() it from the given object and return it, throwing errors as appropriate, and skipping over any excess padding bytes as determined by type_func and size_func. Example invocation:\n\nreadstruct(oh, symtabentrytype, symtabentry_size, \"Symbol Entry\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.readmeta-Tuple{Function,AbstractString}",
    "page": "Docstrings",
    "title": "ObjectFile.readmeta",
    "category": "method",
    "text": "readmeta(f::Function, file::AbstractString)\n\nDo-block variant of readmeta().  Use via something like:\n\nreadmeta(\"libfoo.so\") do f\n    ...\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.readmeta-Tuple{IO}",
    "page": "Docstrings",
    "title": "ObjectFile.readmeta",
    "category": "method",
    "text": "readmeta(io::IO)\n\nRead an Object File out from an IOStream, guessing at the type of object within the stream by calling readmeta(io, T) for each T within ObjTypes, and returning the first that does not throw a MagicMismatch.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.readmeta-Union{Tuple{T}, Tuple{IO,Type{T}}} where T<:ObjectHandle",
    "page": "Docstrings",
    "title": "ObjectFile.readmeta",
    "category": "method",
    "text": "readmeta(io::IO, ::ObjectHandle)\n\nRead an Object File out from an IOStream.  This is the first method you should call in order to manipulate object files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.rpaths-Tuple{RPath}",
    "page": "Docstrings",
    "title": "ObjectFile.rpaths",
    "category": "method",
    "text": "rpaths(rpath::RPath)\n\nReturn the list of paths that will be searched for shared libraries.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_address-Tuple{Section}",
    "page": "Docstrings",
    "title": "ObjectFile.section_address",
    "category": "method",
    "text": "section_address(section::Section)\n\nThe address of the section in virtual memory.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_header_offset-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.section_header_offset",
    "category": "method",
    "text": "section_header_offset(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the offset (in bytes) at which the sections start within the containing object file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_header_size-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.section_header_size",
    "category": "method",
    "text": "section_header_size(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the size of a section header (used for reading in the sections header when trying to load a Section object or iterating over a Sections object)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_header_type-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.section_header_type",
    "category": "method",
    "text": "section_header_type(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the type of a section header (used for reading in the sections header when trying to load a Section object or iterating over a Sections object).  For instance, for a 64-bit ELF file, this would return the type ELFSection64\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_name-Tuple{Section}",
    "page": "Docstrings",
    "title": "ObjectFile.section_name",
    "category": "method",
    "text": "section_name(section::Section)\n\nReturn the name of the given section as a string.  In order to return a true name, it is necessary to perform a lookup within the object\'s string table, which cannot be done using just a Section object; use a SectionRef object instead if you need that.  For sanity sake, this method will return a string, but the contents of the string may be something like the offset within the string table pointing to this Section\'s name, e.g. \"@strtab.123\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_number-Tuple{SectionRef}",
    "page": "Docstrings",
    "title": "ObjectFile.section_number",
    "category": "method",
    "text": "section_number(section::SectionRef)\n\nThe index of the given section within the section header table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_offset-Tuple{Section}",
    "page": "Docstrings",
    "title": "ObjectFile.section_offset",
    "category": "method",
    "text": "section_offset(section::Section)\n\nThe offset of the section in the file, in bytes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.section_size-Tuple{Section}",
    "page": "Docstrings",
    "title": "ObjectFile.section_size",
    "category": "method",
    "text": "section_size(section::Section)\n\nThe size of the actual data contained in the section. This should exclude any padding mandated by the file format e.g. due to alignment rules\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.segment_header_offset-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.segment_header_offset",
    "category": "method",
    "text": "segment_header_offset(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the offset (in bytes) at which the segments start within the containing object file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.segment_header_size-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.segment_header_size",
    "category": "method",
    "text": "segment_header_size(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the size of a segment header (used for reading in the segments header when trying to load a Segment object or iterating over a Segments object)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.segment_header_type-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.segment_header_type",
    "category": "method",
    "text": "segment_header_type(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the type of a segment header (used for reading in the segments header when trying to load a Segment object or iterating over a Segments object).  For instance, for a 64-bit ELF file, this would return the type ELFSegment64\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.segment_name-Tuple{SegmentRef}",
    "page": "Docstrings",
    "title": "ObjectFile.segment_name",
    "category": "method",
    "text": "segment_name(seg::SegmentRef)\n\nThe name of the given Segment, returned as a string.  This method often performs some kind of lookup within the string table of the object to get the full name of the segment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.segment_number-Tuple{SegmentRef}",
    "page": "Docstrings",
    "title": "ObjectFile.segment_number",
    "category": "method",
    "text": "segment_number(seg::SegmentRef)\n\nReturn the index of the referred segment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.strtab_lookup-Tuple{StrTab,Any}",
    "page": "Docstrings",
    "title": "ObjectFile.strtab_lookup",
    "category": "method",
    "text": "strtab_lookup(s::StrTab, index)\n\nReads a string from the given StrTab at index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.symbol_name-Tuple{SymbolRef}",
    "page": "Docstrings",
    "title": "ObjectFile.symbol_name",
    "category": "method",
    "text": "symbol_name(sym::SymbolRef)\n\nReturn the name of the given symbol as a string.  This method often performs some kind of lookup within the string table of the object to get the full name of the symbol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.symbol_name-Tuple{SymtabEntry}",
    "page": "Docstrings",
    "title": "ObjectFile.symbol_name",
    "category": "method",
    "text": "symbol_name(sym::SymtabEntry)\n\nReturn the name of the given section as a string.  In order to return a true name, it is necessary to perform a lookup within the object\'s string table, which cannot be done using just a SymtabEntry object; use a SymbolRef object instead if you need that.  For sanity sake, this method will return a string, but the contents of the string may be something like the offset within the string table pointing to this SymtabEntry\'s name, e.g. \"@strtab.123\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.symbol_number-Tuple{SymbolRef}",
    "page": "Docstrings",
    "title": "ObjectFile.symbol_number",
    "category": "method",
    "text": "symbol_number(sym::SymbolRef)\n\nReturn the number (index) of the given symbol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.symbol_value-Tuple{SymtabEntry}",
    "page": "Docstrings",
    "title": "ObjectFile.symbol_value",
    "category": "method",
    "text": "symbol_value(sym::SymtabEntry)\n\nReturn the value of the given symbol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.symtab_entry_offset-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.symtab_entry_offset",
    "category": "method",
    "text": "symtab_entry_offset(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the offset (in bytes) at which the symbol table starts within the containing object file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.symtab_entry_size-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.symtab_entry_size",
    "category": "method",
    "text": "symtab_entry_size(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the size of a symbol table entry (used for reading in the symbol table when trying to load a SymtabEntry object or iterating over a Symbols object).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.symtab_entry_type-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.symtab_entry_type",
    "category": "method",
    "text": "symtab_entry_type(oh::ObjectHandle)\n\nGiven an ObjectHandle, return the type of a symbol table entry (used for reading in the symbol table when trying to load a SymtabEntry object or iterating over a Symbols object).  For instance, for a 64-bit ELF file, this would return the type ELFSymtabEntry64\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.unsafe_string-Union{Tuple{T}, Tuple{Any,T}} where T<:Integer",
    "page": "Docstrings",
    "title": "Base.unsafe_string",
    "category": "method",
    "text": "unsafe_string(io, max_len::Integer)\n\nRead in a null-terminated string, stopping with a maximum length of max_len.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.unsafe_string-Union{Tuple{fixed_string{T}}, Tuple{T}} where T<:Integer",
    "page": "Docstrings",
    "title": "Base.unsafe_string",
    "category": "method",
    "text": "unsafe_string(x::fixed_string)\n\nConvert a fixed_string object to a native-Julia String\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.show_collection-Union{Tuple{ST}, Tuple{H}, Tuple{IO,ST,Type{H}}} where ST where H<:ObjectHandle",
    "page": "Docstrings",
    "title": "ObjectFile.show_collection",
    "category": "method",
    "text": "show_collection(io, collection, ::Type{H<:ObjectHandle})\n\nGiven a collection-like object, (Symbols, DynamicLinks, ``)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectFile.startaddr-Tuple{ObjectHandle}",
    "page": "Docstrings",
    "title": "ObjectFile.startaddr",
    "category": "method",
    "text": "startaddr(oh::ObjectHandle)\n\nReturns the offset within the underlying IOStream at which this ObjectHandle is located.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ObjectFile]\nOrder = [:type, :function]"
},

]}
