var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Gumbo.jl-1",
    "page": "Readme",
    "title": "Gumbo.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)(Image: Gumbo) (Image: Gumbo) (Image: Gumbo) (Image: Gumbo) (Image: Gumbo)(Image: codecov.io)Gumbo.jl is a Julia wrapper around Google\'s gumbo library for parsing HTML.Getting started is very easy:julia> using Gumbo\n\njulia> parsehtml(\"<h1> Hello, world! </h1>\")\nHTML Document:\n<!DOCTYPE >\nHTMLElement{:HTML}:\n<HTML>\n  <head></head>\n  <body>\n    <h1>\n       Hello, world!\n    </h1>\n  </body>\n</HTML>Read on for further documentation."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "using Pkg\nPkg.add(\"Gumbo\")or activate Pkg mode in the REPL by typing ], and then:add Gumbo"
},

{
    "location": "#Basic-usage-1",
    "page": "Readme",
    "title": "Basic usage",
    "category": "section",
    "text": "The workhorse is the parsehtml function, which takes a single argument, a valid UTF8 string, which is interpreted as HTML data to be parsed, e.g.:parsehtml(\"<h1> Hello, world! </h1>\")The result of a call to parsehtml is an HTMLDocument, a type which has two fields: doctype, which is the doctype of the parsed document (this will be the empty string if no doctype is provided), and root, which is a reference to the HTMLElement that is the root of the document.Note that gumbo is a very permissive HTML parser, designed to gracefully handle the insanity that passes for HTML out on the wild, wild web. It will return a valid HTML document for any input, doing all sorts of algorithmic gymnastics to twist what you give it into valid HTML.If you want an HTML validator, this is probably not your library. That said, parsehtml does take an optional Bool keyword argument, strict which, if true, causes an InvalidHTMLError to be thrown if the call to the gumbo C library produces any errors."
},

{
    "location": "#HTML-types-1",
    "page": "Readme",
    "title": "HTML types",
    "category": "section",
    "text": "This library defines a number of types for representing HTML."
},

{
    "location": "#HTMLDocument-1",
    "page": "Readme",
    "title": "HTMLDocument",
    "category": "section",
    "text": "HTMlDocument is what is returned from a call to parsehtml it has a doctype field, which contains the doctype of the parsed document, and a root field, which is a reference to the root of the document."
},

{
    "location": "#HTMLNodes-1",
    "page": "Readme",
    "title": "HTMLNodes",
    "category": "section",
    "text": "A document contains a tree of HTML Nodes, which are represented as children of the HTMLNode abstract type. The first of these is HTMLElement."
},

{
    "location": "#HTMLElement-1",
    "page": "Readme",
    "title": "HTMLElement",
    "category": "section",
    "text": "mutable struct HTMLElement{T} <: HTMLNode\n    children::Vector{HTMLNode}\n    parent::HTMLNode\n    attributes::Dict{String, String}\nendHTMLElement is probably the most interesting and frequently used type. An HTMLElement is parameterized by a symbol representing its tag. So an HTMLElement{:a} is a different type from an HTMLElement{:body}, etc. An empty HTMLElement of a given tag can be constructed as follows:julia> HTMLElement(:div)\nHTMLElement{:div}:\n<div></div>HTMLElements have a parent field, which refers to another HTMLNode. parent will always be an HTMLElement, unless the element has no parent (as is the case with the root of a document), in which case it will be a NullNode, a special type of HTMLNode which exists for just this purpose. Empty HTMLElements constructed as in the example above will also have a NullNode for a parent.HTMLElements also have children, which is a vector of HTMLElement containing the children of this element, and attributes, which is a Dict mapping attribute names to values.HTMLElements implement getindex, setindex!, and push!; indexing into or pushing onto an HTMLElement operates on its children array.There are a number of convenience methods for working with HTMLElements:tag(elem) get the tag of this element as a symbol\nattrs(elem) return the attributes dict of this element\nchildren(elem)  return the children array of this element\ngetattr(elem, name) get the value of attribute name or raise a KeyError\nsetattr!(elem, name, value) set the value of attribute name to value"
},

{
    "location": "#HTMLText-1",
    "page": "Readme",
    "title": "HTMLText",
    "category": "section",
    "text": "type HTMLText <: HTMLNode\n    parent::HTMLNode\n    text::String\nendRepresents text appearing in an HTML document. For example:julia> doc = parsehtml(\"<h1> Hello, world! </h1>\")\nHTML Document:\n<!DOCTYPE >\nHTMLElement{:HTML}:\n<HTML>\n  <head></head>\n  <body>\n    <h1>\n       Hello, world!\n    </h1>\n  </body>\n</HTML>\n\njulia> doc.root[2][1][1]\nHTML Text:  Hello, world!This type is quite simple, just a reference to its parent and the actual text it represents (this is also accessible by a text function). You can construct HTMLText instances as follows:julia> HTMLText(\"Example text\")\nHTML Text: Example textJust as with HTMLElements, the parent of an instance so constructed will be a NullNode."
},

{
    "location": "#Tree-traversal-1",
    "page": "Readme",
    "title": "Tree traversal",
    "category": "section",
    "text": "Use the iterators defined in AbstractTrees.jl, e.g.:julia> using AbstractTrees\n\njulia> using Gumbo\n\njulia> doc = parsehtml(\"\"\"\n                     <html>\n                       <body>\n                         <div>\n                           <p></p> <a></a> <p></p>\n                         </div>\n                         <div>\n                            <span></span>\n                         </div>\n                        </body>\n                     </html>\n                     \"\"\");\n\njulia> for elem in PreOrderDFS(doc.root) println(tag(elem)) end\nHTML\nhead\nbody\ndiv\np\na\np\ndiv\nspan\n\njulia> for elem in PostOrderDFS(doc.root) println(tag(elem)) end\nhead\np\na\np\ndiv\nspan\ndiv\nbody\nHTML\n\njulia> for elem in StatelessBFS(doc.root) println(tag(elem)) end\nHTML\nhead\nbody\ndiv\ndiv\np\na\np\nspan\n\njulia>"
},

{
    "location": "#TODOS-1",
    "page": "Readme",
    "title": "TODOS",
    "category": "section",
    "text": "support CDATA\nsupport comments"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Gumbo]\nOrder = [:type, :function]"
},

]}
