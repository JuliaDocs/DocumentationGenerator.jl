var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Markable-and-thinsp;Integers-1",
    "page": "Readme",
    "title": "Markable&thinsp;Integers",
    "category": "section",
    "text": ""
},

{
    "location": "#Signed-and-Unsigned-Integers,-individually-[un]markable.-1",
    "page": "Readme",
    "title": "Signed and Unsigned Integers, individually [un]markable.",
    "category": "section",
    "text": ""
},

{
    "location": "#all-are-introduced-in-the-*unmarked*-state-1",
    "page": "Readme",
    "title": "- all are introduced in the unmarked state",
    "category": "section",
    "text": "– elements are marked by attaching a note – elements are unmarked by removing that note"
},

{
    "location": "#Two-state-Integers-(unmarked-state,-marked-state)-1",
    "page": "Readme",
    "title": "Two-state Integers (unmarked state, marked state)",
    "category": "section",
    "text": ""
},

{
    "location": "#Released-under-the-MIT-License.-and-nbsp;-and-nbsp;-and-nbsp;-and-nbsp;Copyright-and-copy;-2018-by-Jeffrey-Sarnoff.-1",
    "page": "Readme",
    "title": "Released under the MIT License. &nbsp; &nbsp; &nbsp; &nbsp;Copyright &copy; 2018 by Jeffrey Sarnoff.",
    "category": "section",
    "text": "this package requires Julia v0.7-"
},

{
    "location": "#Purpose-1",
    "page": "Readme",
    "title": "Purpose",
    "category": "section",
    "text": "MarkableIntegers allow elements (integer values) of a sequence, mesh, voxel image, or time series to be distinguished. Any one or more of the constituent numbers may be noted with a mark (a re-find-able tag).  Marking one value does not mean that all other occurances of that value become marked.  You may choose to mark some, all or none of the other occurances of that value.You may be seeking to identify regions within the dataform or datastream that are of some greater interest.  Often this requires preliminary identification, contextual refinement, and revisiting.  There are well-know methods to manage this sort of incremental refinement.  All lean on ancillary data structures and dynamic update.MarkableIntegers bring the ability to provide and refine algorithmic focus into the data per se.  For some applications, this suffices.  For others, intelligent use of ancillary data structures and dynamic update therewith in concert with markable integers is the right complement."
},

{
    "location": "#Techniques-(please-add-yours)-1",
    "page": "Readme",
    "title": "Techniques (please add yours)",
    "category": "section",
    "text": "An easy way to find more lengthy runs of marked values is to run length encode the Bool sequence obtained with map(ismarked, seq).  A way to find more highly valued regions of marked values is to sum over each run.One may mark values which are inconsistent with an underlying model or are otherwise suspect (e.g. values that appear to be \"drop outs\").  The unmarked values could then provide a neater view with which to begin exploration. Or, the marked values may be used as targets for simple fitting to provide a more digestable version of the info.With evolutionary or swarm intellegence approaches (simulated annealing, ant colony, tabu search, ...) better solution spaces develop through process.  There may be an opportunity for speedup by using local markers to influence aspects of the process."
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "There are Markable versions of each Signed (Int8, Int16, Int32, Int64, Int128) and each Unsigned (UInt8, UInt16, UInt32 ,UInt64, UInt128) type.  The Markable types are prefixed with Mark (MarkInt32, MarkUInt64).For most uses, you do not need to be that specific.  Variables that hold markable integers are initialized with (constructed from) some Signed or Unsigned value (or with e.g. zero(MarkInt), one(MarkInt16)).You can use Unmarked or Marked with any legitimate initializer and forget about the specific type names. ismarked and isunmarked are provided to ascertain markedness during computation.  allmarked and allunmarked let you collect over markedness.julia> an_unmarked_value = Unmarked(10)\n10\njulia> a_marked_value = Marked(16)\n16\n\njulia> isunmarked(an_unmarked_value), ismarked(an_unmarked_value)\ntrue, false\n\njulia> isunmarked(a_marked_value), ismarked(a_marked_value)\nfalse, trueThere are two ways of marking an unmarked value or unmarking a marked value. The first way uses the same form as is used with initialization. The result must be assigned to some value to be of use. The second uses macros to change values in place.  The macros reassign the variable given.julia> ten = Unmarked(10)\n10\njulia> sixteen = Marked(16)\n16\n\njulia> isunmarked(ten)\ntrue\njulia> ten = Marked(ten)\n10\njulia> isunmarked(ten)\nfalse\n\njulia> ismarked(sixteen)\ntrue\njulia> sixteen = Unmarked(sixteen)\n16\njulia> ismarked(sixteen)\nfalsejulia> ten = Unmarked(10);\njulia> sixteen = Marked(16);\njulia> @mark!(ten)\n10\njulia> @unmark!(sixteen)\n16\njulia> ismarked(ten), isunmarked(sixteen)\ntrue, true\n\njulia> @unmark!(ten);\njulia> @mark!(sixteen);\njulia> isunmarked(ten), ismarked(sixteen)\ntrue, trueMarkableSigned integers readily convert to Signed and MarkableUnsigned integers readily convert to Unsigned.  Signed and Unsigned provide these conversions.\njulia> markable_two = Unmarked(Int64(2));\njulia> markable_three = Marked(UInt16(3));\n\njulia> typeof(markable_two), typeof(markable_three)\n(MarkInt64, MarkUInt16)\n\njulia> two = Signed(markable_two);\njulia> three = Unsigned(markable_three);\n\njulia> typeof(two), typeof(three)\n(Int64, UInt16)You can gather the marked values and the unmarked values.julia> seq = [Marked(1), Unmarked(2), Unmarked(3), Marked(4), Unmarked(1)]\njulia> allmarked(seq)\njulia> allunmarked(seq)\n"
},

{
    "location": "#Exports-1",
    "page": "Readme",
    "title": "Exports",
    "category": "section",
    "text": ""
},

{
    "location": "#Constructors-1",
    "page": "Readme",
    "title": "Constructors",
    "category": "section",
    "text": "Unmarked, Marked\nSigned, Unsigned"
},

{
    "location": "#Abstract-and-Collective-Types-1",
    "page": "Readme",
    "title": "Abstract and Collective Types",
    "category": "section",
    "text": "MarkableInteger, MarkableSigned, MarkableUnsigned"
},

{
    "location": "#Concrete-Types-1",
    "page": "Readme",
    "title": "Concrete Types",
    "category": "section",
    "text": "MarkInt, MarkInt8, MarkInt16, MarkInt32, MarkInt64, MarkInt128\nMarkUInt, MarkUInt8, MarkUInt16, MarkUInt32, MarkUInt64, MarkUInt128"
},

{
    "location": "#Predicates-1",
    "page": "Readme",
    "title": "Predicates",
    "category": "section",
    "text": "ismarked, isunmarked\nallmarked, allunmarked"
},

{
    "location": "#Comparatives-1",
    "page": "Readme",
    "title": "Comparatives",
    "category": "section",
    "text": "==, !=, <=, <, >=, >\nisless, isequal"
},

{
    "location": "#Bitwise-Primitives-(wip)-1",
    "page": "Readme",
    "title": "Bitwise Primitives (wip)",
    "category": "section",
    "text": "leading_zeros, trailing_zeros, leading_ones, trailing_ones\ncount_zeros, count_ones"
},

{
    "location": "#Bitwise-Logic-1",
    "page": "Readme",
    "title": "Bitwise Logic",
    "category": "section",
    "text": "~, &, |, ⊻"
},

{
    "location": "#Math-1",
    "page": "Readme",
    "title": "Math",
    "category": "section",
    "text": "abs, signbit, sign\n+, -, *, div, fld, cld, rem, mod\n/"
},

{
    "location": "autodocs/#MarkableIntegers.Marked",
    "page": "Docstrings",
    "title": "MarkableIntegers.Marked",
    "category": "function",
    "text": "Marked(x<:Signed)   ⇢ x<:MarkableSigned    && ismarked(x)    Marked(x<:Unsigned) ⇢ x<:MarkableUnsigned  && ismarked(x)\n\nthree = 3\n3\nmarked_three = Marked(three)\n3\nismarked(marked_three)\ntrue\n!isunmarked(marked_three)\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarkableIntegers.Unmarked",
    "page": "Docstrings",
    "title": "MarkableIntegers.Unmarked",
    "category": "function",
    "text": "Unmarked(x<:Signed)   ⇢ x<:MarkableSigned    && isunmarked(x)    Unmarked(x<:Unsigned) ⇢ x<:MarkableUnsigned  && isunmarked(x)\n\nthree = 3\n3\nunmarked_three = Unmarked(three)\n3\nisunmarked(unmarked_three)\ntrue\n!ismarked(unmarked_three)\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [MarkableIntegers]\nOrder = [:type, :function]"
},

]}
