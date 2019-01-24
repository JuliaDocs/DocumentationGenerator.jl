var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FastGroupBy-1",
    "page": "Readme",
    "title": "FastGroupBy",
    "category": "section",
    "text": "Faster algorithms for doing vector group-by. You can install it using# install\nPkg.add(\"FastGroupBy\")\n# install latest version\n# `fastby` is not yet published so need to clone\nPkg.clone(\"https://github.com/xiaodaigh/FastGroupBy.jl.git\")Note: fastby is not yet published and hence need to manual install with Pkg.clone"
},

{
    "location": "#fastby-and-fastby!-1",
    "page": "Readme",
    "title": "fastby and fastby!",
    "category": "section",
    "text": "The fastby and fastby! functions allow the user to perform arbitrary computation on a vector (valvec) grouped by another vector (byvec). Their output format is a Dict whose Dict-keys are the distinct groups and the Dict-values are the results of applying the function, fn on the valvec, see below for explanation of fn, byvec, and valvec.The difference between fastby and fastby! is that fastby! may change the input vectors byvec and valvec whereas fastby won\'t.Both functions have the same three main arguments, but we shall illustrate using fastby onlyfastby(fn, byvec, valvec)fn is a function fn to be applied to each by-group of valvec\nbyvec is the vector to group by; eltype(byvec) must be one of these Bool, Int8, Int16, Int32, Int64, Int128,                                    UInt8, UInt16, UInt32, UInt64, UInt128, String\nvalvec is the vector that fn is applied toFor example fastby(sum, byvec, valvec) is equivalent to StatsBase\'s countmap(byvec, weights(valvec)). Consider the belowbyvec  = [88, 888, 8, 88, 888, 88]\nvalvec = [1 , 2  , 3, 4 , 5  , 6]to compute the sum value of valvec in each group of byvec we dogrpsum = fastby(sum, byvec, valvec)\nexpected_result = Dict(88 => 11, 8 => 3, 888 => 7)\ngrpsum == expected_result # true"
},

{
    "location": "#fastby!-with-an-arbitrary-fn-1",
    "page": "Readme",
    "title": "fastby! with an arbitrary fn",
    "category": "section",
    "text": "You can also compute arbitrary functions for each by-group e.g. mean@time a = fastby(mean, x, y)This generalizes to arbitrary user-defined functions e.g. the below computes the sizeof each element within each by groupbyvec  = [88   , 888  , 8  , 88  , 888 , 88]\nvalvec = [\"abc\", \"def\", \"g\", \"hi\", \"jk\", \"lmop\"]\n@time a = fastby(yy -> sizeof.(yy), x, y);Julia\'s do-notation can be used@time a = fastby(x, y) do grouped_y\n    # you can perform complex caculations here knowing that grouped_y is y grouped by x\n    grouped_y[end] - grouped_y[1]\nend;The fastby is fast if group by a vector of Bool\'s as wellusing Random\nRandom.seed!(1)\nx = rand(Bool, 100_000_000);\ny = rand(100_000_000);\n\n@time fastby(sum, x, y)The fastby works on String type as well but is still slower than countmap and uses MUCH more RAM and therefore is NOT recommended (at this stage).using Random\nconst M=10_000_000; const K=100;\nRandom.seed!(1)\nsvec1 = rand([string(rand(Char.(32:126), rand(1:8))...) for k in 1:M÷K], M);\ny = repeat([1], inner=length(svec1));\n@time a = fastby!(sum, svec1, y);\n\na_dict = Dict(zip(a...))\n\nusing StatsBase\n@time b = countmap(svec1, alg = :dict);\na_dict == b #true"
},

{
    "location": "#fastby-on-DataFrames-1",
    "page": "Readme",
    "title": "fastby on DataFrames",
    "category": "section",
    "text": "One can also apply fastby on DataFrame by supplying the DataFrame as the second argument and its columns using Symbol in the third and fourth argument, being bycol and valcol respectively. For exampledf1 = DataFrame(grps = rand(1:100, 1_000_000), val = rand(1_000_000))\n# compute the difference between the number rows in that group and the mean of `val` in that group\nres = fastby(val_grouped -> length(val_grouped) - mean(val_grouped), df1, :grps, :val)\n# convert to dataframe\nresdf = DataFrame(grps = keys(res) |> collect, len_minus_mean_val = values(res) |> collect)"
},

{
    "location": "autodocs/#FastGroupBy.fastby-Tuple{Function,DataFrames.AbstractDataFrame,Symbol}",
    "page": "Docstrings",
    "title": "FastGroupBy.fastby",
    "category": "method",
    "text": "group by for DataFrame API\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FastGroupBy.sumby",
    "page": "Docstrings",
    "title": "FastGroupBy.sumby",
    "category": "function",
    "text": "Perform sum by group\n\nsumby(df::Union{AbstractDataFrame,NDSparse}, by::Symbol, val::Symbol)\nsumby(by::AbstractVector  val::AbstractVector)\n\nArguments\n\ndf : an AbstractDataFrame/NDSparse from which to extract the by and val columns\nby : data table column to group by\nval: data table column to sum\n\nReturns\n\n::Dict : A Dict that maps unqiues values of by to sum of val\n\nExamples\n\nusing FastGroupBy\nusing DataFrames, IndexedTables, Compat, BenchmarkTools\nimport DataFrames.DataFrame\n\nconst N = 10_000_000; const K = 100\n\n# sumby is faster for DataFrame without missings\nsrand(1);\n@time df = DataFrame(id = rand(1:Int(round(N/K)), N), val = rand(round.(rand(K)*100,4), N));\n@belapsed DataFrames.aggregate(df, :id, sum)\n@belapsed sumby(df, :id, :val)\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FastGroupBy.sumby_contiguous-Union{Tuple{S}, Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{S,1}}} where S<:Number where T",
    "page": "Docstrings",
    "title": "FastGroupBy.sumby_contiguous",
    "category": "method",
    "text": "sumby assuming that the elements are organised contiguously; it does not perform a check\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FastGroupBy.sumby_dict-Union{Tuple{S}, Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{S,1}}} where S<:Number where T",
    "page": "Docstrings",
    "title": "FastGroupBy.sumby_dict",
    "category": "method",
    "text": "sumby using Dict - can be quite slow due to slow hash table operations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FastGroupBy.sumby_radixgroup!-Union{Tuple{S}, Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{S,1}}} where S<:Number where T",
    "page": "Docstrings",
    "title": "FastGroupBy.sumby_radixgroup!",
    "category": "method",
    "text": "sumby by using radix and counting sort to group by; it\'s only a partial sort. It\'s faster for large by\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FastGroupBy.sumby_radixsort!-Union{Tuple{S}, Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{S,1}}} where S<:Number where T",
    "page": "Docstrings",
    "title": "FastGroupBy.sumby_radixsort!",
    "category": "method",
    "text": "sumby by sorting the by column using radixsort\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FastGroupBy.sumby_sortperm-Union{Tuple{S}, Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{S,1}}} where S<:Number where T",
    "page": "Docstrings",
    "title": "FastGroupBy.sumby_sortperm",
    "category": "method",
    "text": "This is faster for smaller by and also doesn\'t change the input\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexedTables.column-Tuple{DataFrames.AbstractDataFrame,Symbol}",
    "page": "Docstrings",
    "title": "IndexedTables.column",
    "category": "method",
    "text": "column(df, :colname)\n\nExtract a column from an AbstractDataFrame\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FastGroupBy._contiguousby-Union{Tuple{outType}, Tuple{S}, Tuple{T}, Tuple{Function,AbstractArray{T,1},AbstractArray{S,1}}, Tuple{Function,AbstractArray{T,1},AbstractArray{S,1},Type{outType}}} where outType where S where T<:Union{Bool, Float32, Float64, Int128, Int16, Int32, Int64, Int8, UInt128, UInt16, UInt32, UInt64, UInt8, String}",
    "page": "Docstrings",
    "title": "FastGroupBy._contiguousby",
    "category": "method",
    "text": "Apply by-operation assuming that the vector is grouped i.e. elements that belong to the same group by stored contiguously\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FastGroupBy._contiguousby_vec-Union{Tuple{outType}, Tuple{S}, Tuple{T}, Tuple{Function,AbstractArray{T,1},AbstractArray{S,1}}, Tuple{Function,AbstractArray{T,1},AbstractArray{S,1},Type{outType}}} where outType where S where T<:Union{Bool, Float32, Float64, Int128, Int16, Int32, Int64, Int8, UInt128, UInt16, UInt32, UInt64, UInt8, String}",
    "page": "Docstrings",
    "title": "FastGroupBy._contiguousby_vec",
    "category": "method",
    "text": "Apply by-operation assuming that the vector is grouped i.e. elements that belong to the same group by stored contiguously and return a vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FastGroupBy._fastby!-Union{Tuple{S}, Tuple{T}, Tuple{Function,AbstractArray{T,1},AbstractArray{S,1}}} where S where T<:Union{Bool, Float32, Float64, Int128, Int16, Int32, Int64, Int8, UInt128, UInt16, UInt32, UInt64, UInt8, String}",
    "page": "Docstrings",
    "title": "FastGroupBy._fastby!",
    "category": "method",
    "text": "Internal: single-function fastby, one by, one val\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FastGroupBy.genca-Union{Tuple{T}, Tuple{U}, Tuple{Array{U,1},Array{T,1}}} where T where U<:Unsigned",
    "page": "Docstrings",
    "title": "FastGroupBy.genca",
    "category": "method",
    "text": "Generate CategoricalArrays\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FastGroupBy.select-Tuple{Symbol}",
    "page": "Docstrings",
    "title": "FastGroupBy.select",
    "category": "method",
    "text": "select(:col)\n\nReturn a funciton that obtains a column with the named symbol from an AbstractDataFrame or NDSparse\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FastGroupBy]\nOrder = [:type, :function]"
},

]}
