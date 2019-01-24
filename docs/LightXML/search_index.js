var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LightXML.jl-1",
    "page": "Readme",
    "title": "LightXML.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: LightXML)This package is a light-weight Julia wrapper of libxml2, which provides a minimal interface that covers functionalities that are commonly needed:Parse a XML file or string into a tree\nAccess XML tree structure\nCreate an XML tree\nExport an XML tree to a string or an XML file"
},

{
    "location": "#Setup-1",
    "page": "Readme",
    "title": "Setup",
    "category": "section",
    "text": "Like other Julia packages, you may checkout LightXML from METADATA repo, asPkg.add(\"LightXML\")Note: This package relies on the library libxml2 to work, which is shipped with Mac OS X and many Linux systems. So this package may work out of the box. If not, you may check whether libxml2 has been in your system and whether libxml2.so (for Linux) or libxml2.dylib (for Mac) is on your library search path."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "The following examples show how you may use this package to accomplish common tasks."
},

{
    "location": "#Read-an-XML-file-1",
    "page": "Readme",
    "title": "Read an XML file",
    "category": "section",
    "text": "Suppose you have an XML file ex1xml as below<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<bookstore>\n  <book category=\"COOKING\" tag=\"first\">\n    <title lang=\"en\">Everyday Italian</title>\n    <author>Giada De Laurentiis</author>\n    <year>2005</year>\n    <price>30.00</price>\n  </book>\n  <book category=\"CHILDREN\">\n    <title lang=\"en\">Harry Potter</title>\n    <author>J K. Rowling</author>\n    <year>2005</year>\n    <price>29.99</price>\n  </book>\n</bookstore>Here is the code to parse this file:using LightXML\n\n# parse ex1.xml:\n# xdoc is an instance of XMLDocument, which maintains a tree structure\nxdoc = parse_file(\"ex1.xml\")\n\n# get the root element\nxroot = root(xdoc)  # an instance of XMLElement\n# print its name\nprintln(name(xroot))  # this should print: bookstore\n\n# traverse all its child nodes and print element names\nfor c in child_nodes(xroot)  # c is an instance of XMLNode\n    println(nodetype(c))\n    if is_elementnode(c)\n        e = XMLElement(c)  # this makes an XMLElement instance\n        println(name(e))\n    end\nend\n\n#=\nIf the remainder of the script does not use the document or any of its children,\nyou can call free here to deallocate the memory. The memory will only get\ndeallocated by calling free or by exiting julia -- i.e., the memory allocated by\nlibxml2 will not get freed when the julia variable wrapping it goes out of\nscope.\n=#\nfree(xdoc)There are actually five child nodes under bookstore: the 1st, 3rd, 5th children are text nodes (any space between node elements are captured by text nodes), while the 2nd and 4th nodes are element nodes corresponding to the book elements.One may use the function nodetype to determine the type of a node, which returns an integer following the table here. In particular, 1 indicates element node and 3 indicates text node.If you only care about child elements, you may use child_elements instead of child_nodes.ces = collect(child_elements(xroot))  # get a list of all child elements\n@assert length(ces) == 2\n\n# if you know the child element tagname, you can instead get a list as\nces = get_elements_by_tagname(xroot, \"book\")\n# or shorthand:\nces = xroot[\"book\"]\n\ne1 = ces[1]  # the first book element\n\n# print the value of an attribute\nprintln(attribute(e1, \"category\"))\n\n# find the first title element under e1\nt = find_element(e1, \"title\")\n\n# retrieve the value of lang attribute of t\na = attribute(t, \"lang\")  # a <- \"en\"\n\n# retrieve the text content of t\nr = content(t)  # r <- \"Everyday Italian\"One can also traverse all attributes of an element (e1) asfor a in attributes(e1)  # a is an instance of XMLAttr\n    n = name(a)\n    v = value(a)\n    println(\"$n = $v\")\nendAnother way to access attributes is to turn them into a dictionary using attributes_dict, asad = attributes_dict(e1)\nv = ad[\"category\"]  # v <-- \"COOKING\"Note: The functions child_nodes, child_elements, and attributes return light weight iterators – so that one can use them with for-loop. To get an array of all items, one may use the collect function provided by Julia."
},

{
    "location": "#Create-an-XML-Document-1",
    "page": "Readme",
    "title": "Create an XML Document",
    "category": "section",
    "text": "This package allows you to construct an XML document programmatically. For example, to create an XML document as<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<States>\n  <State tag=\"MA\">Massachusetts</State>\n  <State tag=\"IL\" cap=\"Springfield\">Illinois</State>\n  <State tag=\"CA\" cap=\"Sacramento\">California</State>\n</States>You may write:# create an empty XML document\nxdoc = XMLDocument()\n\n# create & attach a root node\nxroot = create_root(xdoc, \"States\")\n\n# create the first child\nxs1 = new_child(xroot, \"State\")\n\n# add the inner content\nadd_text(xs1, \"Massachusetts\")\n\n# set attribute\nset_attribute(xs1, \"tag\", \"MA\")\n\n# likewise for the second child\nxs2 = new_child(xroot, \"State\")\nadd_text(xs2, \"Illinois\")\n# set multiple attributes using a dict\nset_attributes(xs2, {\"tag\"=>\"IL\", \"cap\"=>\"Springfield\"})\n\n# now, the third child\nxs3 = new_child(xroot, \"State\")\nadd_text(xs3, \"California\")\n# set attributes using keyword arguments\nset_attributes(xs3; tag=\"CA\", cap=\"Sacramento\")Note: When you create XML documents and elements directly you need to take care not to leak memory; memory management in the underlying libxml2 library is complex and LightXML currently does not integrate well with Julia\'s garbage collection system. You can call free on an XMLDocument, XMLNode or XMLElement but you must take care not to reference any child elements after they have been manually freed."
},

{
    "location": "#Export-an-XML-file-1",
    "page": "Readme",
    "title": "Export an XML file",
    "category": "section",
    "text": "With this package, you can easily export an XML file to a string or a file, or show it on the console, as# save to an XML file\nsave_file(xdoc, \"f1.xml\")\n\n# output to a string\ns = string(xdoc)\n\n# print to the console (in a pretty format as in an XML file)\nprint(xdoc)Note: the string and show functions are specialized for both XMLDocument and XMLElement."
},

{
    "location": "#Types-1",
    "page": "Readme",
    "title": "Types",
    "category": "section",
    "text": "Main types of this packageXMLDocument: represent an XML document (in a tree)\nXMLElement: represent an XML element (child_elements give you this)\nXMLNode: represent a generic XML node (child_nodes give you this)\nXMLAttr: represent an XML attributeNote: If an XMLNode instance x is actually an element node, one may construct an XMLElement instance by XMLElement(x)."
},

{
    "location": "#API-Functions-1",
    "page": "Readme",
    "title": "API Functions",
    "category": "section",
    "text": "A list of API functions:"
},

{
    "location": "#Functions-to-access-an-XML-tree-1",
    "page": "Readme",
    "title": "Functions to access an XML tree",
    "category": "section",
    "text": "# Let xdoc be a document, x be a node/element, e be an element\n\nroot(xdoc)   # get the root element of a document\n\nnodetype(x)  # get an integer indicating the node type\nname(x)      # get the name of a node/element\ncontent(x)   # get text content of a node/element\n             # if x is an element, this returns all text (concatenated) within x\n\nis_elementnode(x)       # whether x is an element node\nis_textnode(x)          # whether x is a text node\nis_cdatanode(x)         # whether x is a CDATA node\nis_commentnode(x)       # whether x is a comment node\n\nhas_children(e)         # whether e has child nodes\nhas_attributes(e)       # whether e has attributes\n\nchild_nodes(x)          # iterator of all child nodes of a node/element x\nchild_elements(e)       # iterator of all child elements of e\nattributes(e)           # iterator of all attributes of e\n\nattributes_dict(e)      # a dictionary of all attributes of e,\n                        # which maps names to corresponding values\n\nhas_attribute(e, name)  # whether a named attribute exists for e\n\n# get the value of a named attribute\n# when the attribute does not exist, it either\n# throws an exception (when required is true)\n# or returns nothing (when required is false)\nattribute(e, name; required=false)\n\nfind_element(e, name)   # the first element of specified name under e\n                        # return nothing is no such an element is found\n\nget_elements_by_tagname(e, name)  # a list of all child elements of e with\n                                  # the specified name. Equivalent to e[name]\n\nstring(e)               # format an XML element into a string\nshow(io, e)             # output formatted XML element\n\nunlink(x)               # remove a node or element from its current context\n                        # (unlink does not free the memory for the node/element)\nfree(xdoc)              # release memory for a document and all its children\nfree(x)                 # release memory for a node/element and all its children"
},

{
    "location": "#Functions-to-create-an-XML-document-1",
    "page": "Readme",
    "title": "Functions to create an XML document",
    "category": "section",
    "text": "xdoc = XMLDocument()           # create an empty XML document\n\ne = new_element(name)          # create a new XML element\n                               # this does not attach e to a tree\n\nt = new_textnode(content)      # create a new text node\n                               # this does not attach t to a tree\n\nset_root(xdoc, e)              # set element e as the root of xdoc\nadd_child(parent, x)           # add x as a child of a parent element\n\ne = create_root(xdoc, name)    # create a root element and set it as root\n                               # equiv. to new_element + set_root\n\ne = new_child(parent, name)    # create a new element and add it as a child\n                               # equiv. to new_element + add_child\n\nadd_text(e, text)              # add text content to an element\n                               # equiv. to new_textnode + add_child\n\nset_content(e, text)           # replace text content of an element\n\nadd_cdata(xdoc, e, text)       # add cdata content to an element\n                               # equiv. to new_cdatanode + add_child\n\nset_attribute(e, name, value)  # set an attribute of an element\n                               # this returns the added attribute\n                               # as an instance of XMLAttr\n\nset_attributes(e, attrs)       # set multiple attributes in one call\n                               # attrs can be a dictionary or\n                               # a list of pairs as (name, value)\n\n# one can also use keyword arguments to set attributes to an element\nset_attributes(e, key1=\"val1\", key2=\"val2\", ...)"
},

{
    "location": "#Functions-to-work-with-a-document-1",
    "page": "Readme",
    "title": "Functions to work with a document",
    "category": "section",
    "text": "xdoc = parse_file(filename)  # parse an XML file\nxdoc = parse_file(filename,  # parse an XML file with a specified encoding and parser options,\n         encoding, options)  # see http://xmlsoft.org/html/libxml-parser.html#xmlReadFile\n                             # and http://xmlsoft.org/html/libxml-parser.html#xmlParserOption\nxdoc = parse_string(str)     # parse an XML doc from a string\nsave_file(xdoc, filename)    # save xdoc to an XML file\n\nstring(xdoc)                 # formatted XML doc to a string\nshow(io, xdoc)               # output formatted XML document"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LightXML]\nOrder = [:type, :function]"
},

]}
