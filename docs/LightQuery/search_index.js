var documenterSearchIndex = {"docs": [

{
    "location": "#LightQuery.By",
    "page": "Home",
    "title": "LightQuery.By",
    "category": "type",
    "text": "By(it, f)\n\nMarks that it has been pre-sorted by the key f.\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.LeftJoin",
    "page": "Home",
    "title": "LightQuery.LeftJoin",
    "category": "type",
    "text": "LeftJoin(left::By, right::By)\n\nFor each value in left, look for a value with the same key in right.\n\njulia> using LightQuery\n\njulia> LeftJoin(\n            By([1, 2, 5, 6], identity),\n            By([1, 3, 4, 6], identity)\n       ) |> collect\n4-element Array{Pair{Int64,Union{Missing, Int64}},1}:\n 1 => 1\n 2 => missing\n 5 => missing\n 6 => 6\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.Name",
    "page": "Home",
    "title": "LightQuery.Name",
    "category": "type",
    "text": "Name(name)\n\njulia> using LightQuery\n\njulia> Name(:a)((a = 1, b = 2.0,))\n1\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.Nameless",
    "page": "Home",
    "title": "LightQuery.Nameless",
    "category": "type",
    "text": "A container for a function and the expression that generated it\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.Names",
    "page": "Home",
    "title": "LightQuery.Names",
    "category": "type",
    "text": "struct Names{T} end\n\njulia> using LightQuery\n\njulia> Names(:a, :b)((a = 1, b = 2.0, c = 3//1))\n(a = 1, b = 2.0)\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.based_on-Tuple{Any}",
    "page": "Home",
    "title": "LightQuery.based_on",
    "category": "method",
    "text": "based_on(data; assignments...)\n\nApply the functions in assignments to data, and assign to the corresponding keys.\n\njulia> using LightQuery\n\njulia> based_on((a = 1, b = 2.0), c = @_ _.a + _.b)\n(c = 3.0,)\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.column-Tuple{Any,Name}",
    "page": "Home",
    "title": "LightQuery.column",
    "category": "method",
    "text": "column(it, names::Names)\n\nLazy find name for each item in it.\n\njulia> using LightQuery\n\njulia> it = [(a = 1, b = 1.0), (a = 2, b = 2.0)];\n\njulia> collect(column(it, :a))\n2-element Array{Int64,1}:\n 1\n 2\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.gather-Tuple{Any,Name,Names}",
    "page": "Home",
    "title": "LightQuery.gather",
    "category": "method",
    "text": "gather(data, new_column, columns...)\n\nGather all the data in columns into a single new_column.\n\njulia> using LightQuery\n\njulia> gather((a = 1, b = 2.0, c = \"c\"), :d, :a, :c)\n(b = 2.0, d = (a = 1, c = \"c\"))\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.group-Tuple{By}",
    "page": "Home",
    "title": "LightQuery.group",
    "category": "method",
    "text": "group(b::By)\n\nGroup consecutive keys in b.\n\njulia> using LightQuery\n\njulia> group(By([1, 3, 2, 4], iseven)) |> collect\n2-element Array{Pair{Bool,SubArray{Int64,1,Array{Int64,1},Tuple{UnitRange{Int64}},true}},1}:\n false => [1, 3]\n  true => [2, 4]\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.in_common-Tuple{Any,Any}",
    "page": "Home",
    "title": "LightQuery.in_common",
    "category": "method",
    "text": "in_common(data1, data2)\n\nFind Names in common.\n\njulia> using LightQuery\n\njulia> in_common((a = 1, b = 2.0), (a = 1, c = \"3\"))\nNames{(:a,)}()\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.key-Tuple{Pair}",
    "page": "Home",
    "title": "LightQuery.key",
    "category": "method",
    "text": "key(pair)\n\nThe first item\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.name-Union{Tuple{T}, Tuple{Any,Names{T}}} where T",
    "page": "Home",
    "title": "LightQuery.name",
    "category": "method",
    "text": "name(data, names...)\n\nRename data\n\njulia> using LightQuery\n\njulia> name((a = 1, b = 2.0), :c, :d)\n(c = 1, d = 2.0)\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.named-Tuple{Any}",
    "page": "Home",
    "title": "LightQuery.named",
    "category": "method",
    "text": "named(data)\n\nConvert to a named tuple\n\njulia> using LightQuery\n\njulia> named((a = 1, b = 2.0))\n(a = 1, b = 2.0)\n\njulia> struct Triple{T1, T2, T3}\n            first::T1\n            second::T2\n            third::T3\n        end;\n\njulia> Base.propertynames(t::Triple) = (:first, :second, :third);\n\njulia> named(Triple(1, 1.0, \"a\"))\n(first = 1, second = 1.0, third = \"a\")\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.remove-Union{Tuple{T}, Tuple{Any,Names{T}}} where T",
    "page": "Home",
    "title": "LightQuery.remove",
    "category": "method",
    "text": "remove(data, columns...)\n\nRemove columns.\n\njulia> using LightQuery\n\njulia> remove((a = 1, b = 2.0), :b)\n(a = 1,)\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.rename-Tuple{Any}",
    "page": "Home",
    "title": "LightQuery.rename",
    "category": "method",
    "text": "rename(data; renames...)\n\nFor type stability, use Name.\n\njulia> using LightQuery\n\njulia> rename((a = 1, b = 2.0), c = Name(:a))\n(b = 2.0, c = 1)\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.rows-Tuple{NamedTuple}",
    "page": "Home",
    "title": "LightQuery.rows",
    "category": "method",
    "text": "rows(n::NamedTuple)\n\nIterator over rows of a NamedTuple of columns.\n\njulia> using LightQuery\n\njulia> rows((a = [1, 2], b = [2, 1])) |> first\n(a = 1, b = 2)\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.select-Union{Tuple{T}, Tuple{Any,Names{T}}} where T",
    "page": "Home",
    "title": "LightQuery.select",
    "category": "method",
    "text": "select(data, columns...)\n\nSelect columns\n\njulia> using LightQuery\n\njulia> select((a = 1, b = 2.0), :a)\n(a = 1,)\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.separate-Union{Tuple{T}, Tuple{Any,Names{T}}} where T",
    "page": "Home",
    "title": "LightQuery.separate",
    "category": "method",
    "text": "separate(it, into_names...)\n\nColumn-wise storage.\n\njulia> using LightQuery\n\njulia> it = [(a = 1, b = 1.0), (a = 2, b = 2.0)];\n\njulia> result = separate(it, :a, :b);\n\njulia> first(result)\n(a = 1, b = 1.0)\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.spread-Tuple{Any,Name}",
    "page": "Home",
    "title": "LightQuery.spread",
    "category": "method",
    "text": "spread(data, column::Name)\n\nUnnest nested data in column\n\njulia> using LightQuery\n\njulia> spread((b = 2.0, d = (a = 1, c = \"c\")), :d)\n(b = 2.0, a = 1, c = \"c\")\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.transform-Tuple{Any}",
    "page": "Home",
    "title": "LightQuery.transform",
    "category": "method",
    "text": "transform(data; assignments...)\n\nSame as based_on, but merge back in the original.\n\njulia> using LightQuery\n\njulia> transform((a = 1, b = 2.0), c = @_ _.a + _.b)\n(a = 1, b = 2.0, c = 3.0)\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.unname-Tuple{Any}",
    "page": "Home",
    "title": "LightQuery.unname",
    "category": "method",
    "text": "unname\n\nRemove names. Explicitly define public propertynames for arbitrary structs.\n\njulia> using LightQuery\n\njulia> unname((a = 1, b = 2.0))\n(1, 2.0)\n\njulia> unname((1, 2.0))\n(1, 2.0)\n\njulia> struct Triple{T1, T2, T3}\n            first::T1\n            second::T2\n            third::T3\n        end;\n\njulia> Base.propertynames(t::Triple) = (:first, :second, :third);\n\njulia> unname(Triple(1, 1.0, \"a\"))\n(1, 1.0, \"a\")\n\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.unzip-Tuple{Any,Any}",
    "page": "Home",
    "title": "LightQuery.unzip",
    "category": "method",
    "text": "unzip(it, n)\n\nUnzip an iterator it which returns tuples of length n.\n\njulia> using LightQuery\n\njulia> f(x) = (x, x + 1.0);\n\njulia> unzip(over([1], f), 2)\n([1], [2.0])\n\njulia> unzip(over([1, missing], f), 2);\n\njulia> unzip(zip([1], [1.0]), 2)\n([1], [1.0])\n\njulia> unzip([(1, 1.0)], 2)\n([1], [1.0])\n\n\n\n\n\n"
},

{
    "location": "#LightQuery.value-Tuple{Pair}",
    "page": "Home",
    "title": "LightQuery.value",
    "category": "method",
    "text": "value(pair)\n\nThe second item\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LightQuery]\nOrder = [:type, :function]"
},

]}
