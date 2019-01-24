var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Missings-1",
    "page": "Readme",
    "title": "Missings",
    "category": "section",
    "text": "A missing value representation for Julia for databases and statisticsPackageEvaluator Build Status\n[![][pkg-0.6-img]][pkg-0.6-url] [![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url] [![][codecov-img]][codecov-url]"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered in METADATA.jl and so can be installed with Pkg.add.julia> Pkg.add(\"Missings\")"
},

{
    "location": "#Project-Status-1",
    "page": "Readme",
    "title": "Project Status",
    "category": "section",
    "text": "The package is tested against the current Julia 0.6 release and nightly on Linux, OS X, and Windows.Starting from Julia 0.7 the Missing type and basic functionalities related to it have been merged to core Julia. This package still provides additional features to handle missing values."
},

{
    "location": "#Contributing-and-Questions-1",
    "page": "Readme",
    "title": "Contributing and Questions",
    "category": "section",
    "text": "Contributions are very welcome, as are feature requests and suggestions. Please open an [issue][issues-url] if you encounter any problems or would just like to ask a question.[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://JuliaData.github.io/Missings.jl/latest[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://JuliaData.github.io/Missings.jl/stable[travis-img]: https://travis-ci.org/JuliaData/Missings.jl.svg?branch=master [travis-url]: https://travis-ci.org/JuliaData/Missings.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/8jvl7wf1droa9h91?svg=true [appveyor-url]: https://ci.appveyor.com/project/quinnj/missings-jl[codecov-img]: https://codecov.io/gh/JuliaData/Missings.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/JuliaData/Missings.jl[issues-url]: https://github.com/JuliaData/Missings.jl/issues[pkg-0.6-img]: http://pkg.julialang.org/badges/Missings_0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=Missings"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Missings.jl provides a single type Missing with a single instance missing which represents a missing value in data. missing values behave essentially like NULL in SQL or NA in R. missing differs from nothing (the object returned by Julia functions and blocks which do not return any value) in that it can be passed to many operators and functions, prompting them to return missing. Where appropriate, packages should provide methods propagating missing for the functions they define.The package defines standard operators and functions which propagate missing values: for example 1 + missing and cos(missing) both return missing. In particular, note that comparison operators ==, <, >, <= and => (but not isequal nor isless) also propagate missing, so that 1 == missing and missing == missing both return missing. Use ismissing to test whether a value is missing. Logical operators &, |, ⊻/xor implement three-valued logic: they return missing only when the result cannot be determined. For example, true & missing returns missing but true | missing returns true.In many cases, missing values will have to be skipped or replaced with a valid value. For example, sum([1, missing]) returns missing due to the behavior of +. Use sum(Missings.skip([1, missing]) to ignore missing values. sum(Missings.replace([1, missing], 0)) would have the same effect. Missings.fail throws an error if any value is found while iterating over the data. These three functions return an iterator and therefore do not need to allocate a copy of the data. Finally, the Missings.coalesce function is a more complex and powerful version of Missings.replace."
},

{
    "location": "autodocs/#Missings.allowmissing-Union{Tuple{AbstractArray{T,N} where N}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "Missings.allowmissing",
    "category": "method",
    "text": "allowmissing(x::AbstractArray)\n\nReturn an array equal to x allowing for missing values, i.e. with an element type equal to Union{eltype(x), Missing}.\n\nWhen possible, the result will share memory with x (as with convert).\n\nSee also: disallowmissing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Missings.disallowmissing-Union{Tuple{AbstractArray{T,N} where N}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "Missings.disallowmissing",
    "category": "method",
    "text": "disallowmissing(x::AbstractArray)\n\nReturn an array equal to x not allowing for missing values, i.e. with an element type equal to Missings.T(eltype(x)).\n\nWhen possible, the result will share memory with x (as with convert). If x contains missing values, a MethodError is thrown.\n\nSee also: allowmissing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Missings.levels-Tuple{Any}",
    "page": "Docstrings",
    "title": "Missings.levels",
    "category": "method",
    "text": "levels(x)\n\nReturn a vector of unique values which occur or could occur in collection x, omitting missing even if present. Values are returned in the preferred order for the collection, with the result of sort as a default.\n\nContrary to unique, this function may return values which do not actually occur in the data, and does not preserve their order of appearance in x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Missings.passmissing-Tuple{Union{Function, Type}}",
    "page": "Docstrings",
    "title": "Missings.passmissing",
    "category": "method",
    "text": "passmissing(f)\n\nReturn a function that returns missing if any of its positional arguments are missing (even if their number or type is not consistent with any of the methods defined for f) and otherwise applies f to these arguments.\n\npassmissing does not support passing keyword arguments to the f function.\n\nExamples\n\n```jldoctest julia> passmissing(sqrt)(4) 2.0\n\njulia> passmissing(sqrt)(missing) missing\n\njulia> passmissing(sqrt).([missing, 4]) 2-element Array{Union{Missing, Float64},1}:   missing    2.0\n\njulia> passmissing((x,y)->\"x y\")(1, 2) \"1 2\"\n\njulia> passmissing((x,y)->\"x y\")(missing) missing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Missings.fail-Tuple{Any}",
    "page": "Docstrings",
    "title": "Missings.fail",
    "category": "method",
    "text": "Missings.fail(itr)\n\nReturn an iterator wrapping iterable itr which will throw a MissingException if a missing value is found.\n\nUse collect to obtain an Array containing the resulting values. If itr is an array, the resulting array will have the same dimensions.\n\nSee also: skipmissing, Missings.replace\n\nExamples\n\njulia> collect(Missings.fail([1 2; 3 4]))\n2×2 Array{Int64,2}:\n 1  2\n 3  4\n\njulia> collect(Missings.fail([1, missing, 2]))\nERROR: MissingException: missing value encountered by Missings.fail\n[...]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Missings.replace-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Missings.replace",
    "category": "method",
    "text": "Missings.replace(itr, replacement)\n\nReturn an iterator wrapping iterable itr which replaces missing values with replacement. When applicable, the size of itr is preserved. If the type of replacement differs from the element type of itr, it will be converted.\n\nSee also: skipmissing, Missings.fail\n\nExamples\n\njulia> collect(Missings.replace([1, missing, 2], 0))\n3-element Array{Int64,1}:\n 1\n 0\n 2\n\njulia> collect(Missings.replace([1 missing; 2 missing], 0))\n2×2 Array{Int64,2}:\n 1  0\n 2  0\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Missings]\nOrder = [:type, :function]"
},

]}
