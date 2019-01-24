var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NamedTupleTools.jl-1",
    "page": "Readme",
    "title": "NamedTupleTools.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Some-NamedTuple-utilities-1",
    "page": "Readme",
    "title": "Some NamedTuple utilities",
    "category": "section",
    "text": ""
},

{
    "location": "#Copyright-2015-2018-by-Jeffrey-Sarnoff.-This-work-is-released-under-The-MIT-License.-1",
    "page": "Readme",
    "title": "Copyright © 2015-2018 by Jeffrey Sarnoff. This work is released under The MIT License.",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "NamedTuples are built from fieldnames, given as Symbols and field values, as they may be given. These utilities make some uses of NamedTuples a little more straightforward.  "
},

{
    "location": "#Use-1",
    "page": "Readme",
    "title": "Use",
    "category": "section",
    "text": "using NamedTupleTools\n\njulia> namedtuple(:a, :b, :c)(1, 2.0, \"three\")\n(a = 1, b = 2.0, c = \"three\")\n\n#=\n    namedtuple(  name1, name2, ..  )\n    namedtuple( (name1, name2, ..) )\n       where the `names` are all `Symbols` or all `Strings`\n\nGenerate a NamedTuple prototype by specifying or obtaining the fieldnames.\nThe prototype is applied to fieldvalues, giving a completed NamedTuple.\n=#\n\njulia> ntproto = namedtuple( :a, :b, :c )\nNamedTuple{(:a, :b, :c),T} where T<:Tuple\n\njulia> nt123 = ntproto(1, 2, 3)\n(a = 1, b = 2, c = 3)\n\njulia> ntAb3 = ntproto(\"A\", \"b\", 3)\n(a = \"A\", b = \"b\", c = 3)\n\njulia> isprototype(ntproto)\ntrue\n\njulia> isprototype(nt123)\nfalse\n\n\njulia> delete(nt123, :a) === (b = 2, c = 3)\ntrue\njulia> delete(nt123, :a, :c) === delete(nt123, (:a, :c)) === (b = 2,)\ntrue\njulia> delete(ntproto, :b) === namedtuple(:a, :c)\ntrue\n\njulia> ntproto1 = namedtuple(:a, :b);\njulia> ntproto2 = namedtuple(:b, :c);\n\njulia> merge(ntproto1,ntproto2)\nNamedTuple{(:a, :b, :c),T} where T<:Tuple"
},

{
    "location": "#struct-construction,-conversion-1",
    "page": "Readme",
    "title": "struct construction, conversion",
    "category": "section",
    "text": "using NamedTupleTools\n\njulia> struct MyStruct\n           tally::Int\n           team::String\n       end\n\njulia> mystruct = MyStruct(5, \"hometeam\")\nMyStruct(5, \"hometeam\")\n\njulia> mynamedtuple = ntfromstruct(mystruct)\n(tally = 5, team = \"hometeam\")\n\njulia> ntstruct = structfromnt(MyStruct, mynamedtuple)\nMyStruct(5, \"hometeam\")\n\njulia> mystruct == ntstruct\ntrue"
},

{
    "location": "#Dict-construction,-conversion-1",
    "page": "Readme",
    "title": "Dict construction, conversion",
    "category": "section",
    "text": "julia> dict = Dict(:a=>1, :b=>2//11, :c=>\"three\")\nDict{Symbol,Any} with 3 entries:\n  :a => 1\n  :b => 2//11\n  :c => \"three\"\n\njulia> nt = NamedTuple(dict)\n(a = 1, b = 2//11, c = \"three\")\n\njulia> Dict(nt) == dict\ntrue"
},

{
    "location": "autodocs/#NamedTupleTools.delete-Tuple{NamedTuple,Symbol}",
    "page": "Docstrings",
    "title": "NamedTupleTools.delete",
    "category": "method",
    "text": "delete(namedtuple, symbol(s)|Tuple)    delete(ntprototype, symbol(s)|Tuple)\n\nGenerate a namedtuple [ntprototype] from the first arg omitting fields present in the second arg.\n\nsee: merge\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedTupleTools.fieldvalues-Union{Tuple{T}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "NamedTupleTools.fieldvalues",
    "category": "method",
    "text": "fieldvalues\n\nobtain values assigned to fields of a struct type (in field order)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedTupleTools.isprototype-Union{Tuple{Type{T}}, Tuple{T}} where T<:NamedTuple",
    "page": "Docstrings",
    "title": "NamedTupleTools.isprototype",
    "category": "method",
    "text": "isprototype( ntprototype )\nisprototype( namedtuple  )\n\nPredicate that identifies NamedTuple prototypes.\n\nsee: namedtuple\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedTupleTools.namedtuple-Union{Tuple{Tuple{Vararg{Symbol,N}}}, Tuple{N}} where N",
    "page": "Docstrings",
    "title": "NamedTupleTools.namedtuple",
    "category": "method",
    "text": "namedtuple(  name1, name2, ..  )\nnamedtuple( (name1, name2, ..) )\nnamedtuple(  namedtuple )\n\nGenerate a NamedTuple prototype by specifying or obtaining the fieldnames. The prototype is applied to fieldvalues, giving a completed NamedTuple.\n\nExample\n\njulia> ntprototype = namedtuple( :a, :b, :c )\n\nNamedTuple{(:a, :b, :c),T} where T<:Tuple\n\njulia> nt123 = ntprototype(1, 2, 3)\n\n(a = 1, b = 2, c = 3)\n\njulia> ntAb3 = ntprototype(\"A\", \"b\", 3)\n\n(a = \"A\", b = \"b\", c = 3)\n\nsee: isprototype\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedTupleTools.valtypes-Union{Tuple{T}, Tuple{T}, Tuple{S}, Tuple{N}} where T<:NamedTuple{N,S} where S where N",
    "page": "Docstrings",
    "title": "NamedTupleTools.valtypes",
    "category": "method",
    "text": "valtypes( namedtuple )\nvaltypes( typeof(namedtuple) )\n\nRetrieve the values\' types as a tuple.\n\nsee: valtype\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.merge-Union{Tuple{T2}, Tuple{T1}, Tuple{N2}, Tuple{N1}, Tuple{Type{T1},Type{T2}}} where T2<:(NamedTuple{N2,T} where T<:Tuple) where T1<:(NamedTuple{N1,T} where T<:Tuple) where N2 where N1",
    "page": "Docstrings",
    "title": "Base.merge",
    "category": "method",
    "text": "merge(namedtuple1, namedtuple2)\nmerge(nt1, nt2, nt3, ..)\n\nGenerate a namedtuple with all fieldnames and values of namedtuple2     and every fieldname of namedtuple1 that does not occur in namedtuple2     along with their values.\n\nsee: delete!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.valtype-Union{Tuple{T}, Tuple{T}, Tuple{S}, Tuple{N}} where T<:NamedTuple{N,S} where S where N",
    "page": "Docstrings",
    "title": "Base.valtype",
    "category": "method",
    "text": "valtype( namedtuple )\n\nRetrieve the values\' types as a typeof(tuple).\n\nsee: valtypes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NamedTupleTools]\nOrder = [:type, :function]"
},

]}
