var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LibExpat-Julia-wrapper-for-libexpat-1",
    "page": "Readme",
    "title": "LibExpat - Julia wrapper for libexpat",
    "category": "section",
    "text": "(Image: LibExpat) (Image: LibExpat) (Image: LibExpat) (Image: Build Status) (Image: Build status) (Image: Coverage Status)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#XPath-queries-on-fully-parsed-tree-1",
    "page": "Readme",
    "title": "XPath queries on fully parsed tree",
    "category": "section",
    "text": "Has only three relevant APIsxp_parse(s::String) returns a parsed object of type ETree (used to be called ParsedData).\nLibExpat.find(pd::ETree, element_path::String) is used to search for elements within the parsed data object as returned by xp_parse\n(pd::ETree)[xpath::String] or xpath(pd::ETree, xpath::String) is also used to search for elements within the parseddata object as returned by xp_parse, but using a subset of the xpath specificationExamples for element_path are:\"foo/bar/baz\" returns an array of elements, i.e. ETree objects with tag \"baz\" under foo/bar\n\"foo//baz\" returns an array of elements, i.e. ETree objects with tag \"baz\" anywhere under foo\n\"foo/bar/baz[1]\" returns a ETree object representing the first element of type \"baz\"\n\"foo/bar/baz[1]{qux}\" returns a String representing the attribute \"qux\" of the first element of type \"baz\" whichhas the \"qux\" attribute\"foo/bar[2]/baz[1]{qux}\" in the case there is more than one \"bar\" element, this picks up \"baz\" from the 2nd \"bar\"\n\"foo/bar{qux}\" returns a String representing the attribute \"qux\" of foo/bar\n\"foo/bar/baz[1]#string\" returns a String representing the \"string-value\" for the given element path. The string-value is theconcatenation of all text nodes that are descendants of the given node. NOTE: All whitespace is preserved in the concatenated string.If only one sub-element exists, the index is assumed to be 1 and may be omitted.\"foo/bar/baz[2]{qux}\" is the same as \"foo[1]/bar[1]/baz[2]{qux}\"\nreturns an empty list or nothing if an element in the path is not found\nNOTE: If the element_path starts with a / then the search starts from pd as the root pd (the first argument)\nIf element_path does NOT start with a / then the search starts with the children of the root pd (the first argument)You can also navigate the returned ETree object directly, i.e., without using LibExpat.find. The relevant members of ETree are:type ETree\n    name        # XML Tag\n    attr        # Dict of tag attributes as name-value pairs\n    elements    # Vector of child nodes (ETree or String)\nendThe xpath search consists of two parts: the parser and the search. Calling xpath\"some/xpath[expression]\" xpath(xp::String) will construct an XPath object that can be passed as the second argument to the xpath search. The search can be used via parseddata[xpath\"string\"] or xpath(parseddata, xpath\"string\"). The use of the xpath string macro is not required, but is recommended for performance, and the ability to use variable interpolation. When xpath is called as a macro, it will parse path elements starting with $ as julia variables and perform limited string interpolation:xpath\"/a/$b/c[contains(.,\'\\$x$y$(z)!\\\'\')]\"The parser handles most of the XPath 1.0 specification. The following features are currently missing:accessing parents of attributes\nseveral xpath functions (namespace-uri, lang, processing-instructions, and comment). name and local-name do not account for xmlns namespaces correctly.\nparenthesized expressions\nxmlns namespace parsing\ncorrect ordering of output\nseveral xpath axes (namespace, following, following-sibling, preceding, preceding-sibling)\n&quot; and &apos; (although you can use \\\' or \\\" as escape sequences when using the xpath\"\" string macro)"
},

{
    "location": "#Streaming-XML-parsing-1",
    "page": "Readme",
    "title": "Streaming XML parsing",
    "category": "section",
    "text": "If you do not want to store the whole tree in memory, LibExpat offers the abbility to define callbacks for streaming parsing too. To parse a document, you creata a new XPCallbacks instance and define all callbacks you want to receive.type XPCallbacks\n    # These are all (yet) available callbacks, by default initialised with a dummy function.\n    # Each callback will be handed as first argument a XPStreamHandler and the following other parameters:\n    start_cdata     # (..) -- Start of a CDATA section\n    end_cdata       # (..) -- End of a CDATA sections\n    comment         # (.., comment::String) -- A comment\n    character_data  # (.., txt::String) -- A character data section\n    default         # (.., txt::String) -- Handler for any characters in the document which wouldn\'t otherwise be handled.\n    default_expand  # (.., txt::String) -- Default handler that doesn\'t inhibit the expansion of internal entity reference.\n    start_element   # (.., name::String, attrs::Dict{String,String}) -- Start of a tag/element\n    end_element     # (.., name::String) -- End of a tag/element\n    start_namespace # (.., prefix::String, uri::String) -- Start of a namespace declaration\n    end_namespace   # (.., prefix::String) -- End of the scope of a namespace\nendUsing an initialized XPCallbacks object, one can start parsing using xp_streaming_parse which takes the XML document as a string, the XPCallbacks object and an arbitrary data object which can be used to reference some context during parsing. This data object is accessible through the data attribute of the XPStreamHandler instance passed to each callback.If your data is too large to fit into memory, as an alternative you can use xp_streaming_parsefile to parse the XML document line-by-line (the number of lines read and passed to expat is controlled by the keyword argument bufferlines)."
},

{
    "location": "#IJulia-Demonstration-Notebook-1",
    "page": "Readme",
    "title": "IJulia Demonstration Notebook",
    "category": "section",
    "text": "LibExpat IJulia Demo "
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LibExpat]\nOrder = [:type, :function]"
},

]}
