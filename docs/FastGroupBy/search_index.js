var documenterSearchIndex = {"docs": [

{
    "location": "#FastGroupBy.fastby-Tuple{Function,DataFrames.AbstractDataFrame,Symbol}",
    "page": "Home",
    "title": "FastGroupBy.fastby",
    "category": "method",
    "text": "group by for DataFrame API\n\n\n\n\n\n"
},

{
    "location": "#FastGroupBy.sumby",
    "page": "Home",
    "title": "FastGroupBy.sumby",
    "category": "function",
    "text": "Perform sum by group\n\nsumby(df::Union{AbstractDataFrame,NDSparse}, by::Symbol, val::Symbol)\nsumby(by::AbstractVector  val::AbstractVector)\n\nArguments\n\ndf : an AbstractDataFrame/NDSparse from which to extract the by and val columns\nby : data table column to group by\nval: data table column to sum\n\nReturns\n\n::Dict : A Dict that maps unqiues values of by to sum of val\n\nExamples\n\nusing FastGroupBy\nusing DataFrames, IndexedTables, Compat, BenchmarkTools\nimport DataFrames.DataFrame\n\nconst N = 10_000_000; const K = 100\n\n# sumby is faster for DataFrame without missings\nsrand(1);\n@time df = DataFrame(id = rand(1:Int(round(N/K)), N), val = rand(round.(rand(K)*100,4), N));\n@belapsed DataFrames.aggregate(df, :id, sum)\n@belapsed sumby(df, :id, :val)\n\n\n\n\n\n\n"
},

{
    "location": "#FastGroupBy.sumby_contiguous-Union{Tuple{S}, Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{S,1}}} where S<:Number where T",
    "page": "Home",
    "title": "FastGroupBy.sumby_contiguous",
    "category": "method",
    "text": "sumby assuming that the elements are organised contiguously; it does not perform a check\n\n\n\n\n\n"
},

{
    "location": "#FastGroupBy.sumby_dict-Union{Tuple{S}, Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{S,1}}} where S<:Number where T",
    "page": "Home",
    "title": "FastGroupBy.sumby_dict",
    "category": "method",
    "text": "sumby using Dict - can be quite slow due to slow hash table operations\n\n\n\n\n\n"
},

{
    "location": "#FastGroupBy.sumby_radixgroup!-Union{Tuple{S}, Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{S,1}}} where S<:Number where T",
    "page": "Home",
    "title": "FastGroupBy.sumby_radixgroup!",
    "category": "method",
    "text": "sumby by using radix and counting sort to group by; it\'s only a partial sort. It\'s faster for large by\n\n\n\n\n\n"
},

{
    "location": "#FastGroupBy.sumby_radixsort!-Union{Tuple{S}, Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{S,1}}} where S<:Number where T",
    "page": "Home",
    "title": "FastGroupBy.sumby_radixsort!",
    "category": "method",
    "text": "sumby by sorting the by column using radixsort\n\n\n\n\n\n"
},

{
    "location": "#FastGroupBy.sumby_sortperm-Union{Tuple{S}, Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{S,1}}} where S<:Number where T",
    "page": "Home",
    "title": "FastGroupBy.sumby_sortperm",
    "category": "method",
    "text": "This is faster for smaller by and also doesn\'t change the input\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.column-Tuple{DataFrames.AbstractDataFrame,Symbol}",
    "page": "Home",
    "title": "IndexedTables.column",
    "category": "method",
    "text": "column(df, :colname)\n\nExtract a column from an AbstractDataFrame\n\n\n\n\n\n"
},

{
    "location": "#FastGroupBy._contiguousby-Union{Tuple{outType}, Tuple{S}, Tuple{T}, Tuple{Function,AbstractArray{T,1},AbstractArray{S,1}}, Tuple{Function,AbstractArray{T,1},AbstractArray{S,1},Type{outType}}} where outType where S where T<:Union{Bool, Float32, Float64, Int128, Int16, Int32, Int64, Int8, UInt128, UInt16, UInt32, UInt64, UInt8, String}",
    "page": "Home",
    "title": "FastGroupBy._contiguousby",
    "category": "method",
    "text": "Apply by-operation assuming that the vector is grouped i.e. elements that belong to the same group by stored contiguously\n\n\n\n\n\n"
},

{
    "location": "#FastGroupBy._contiguousby_vec-Union{Tuple{outType}, Tuple{S}, Tuple{T}, Tuple{Function,AbstractArray{T,1},AbstractArray{S,1}}, Tuple{Function,AbstractArray{T,1},AbstractArray{S,1},Type{outType}}} where outType where S where T<:Union{Bool, Float32, Float64, Int128, Int16, Int32, Int64, Int8, UInt128, UInt16, UInt32, UInt64, UInt8, String}",
    "page": "Home",
    "title": "FastGroupBy._contiguousby_vec",
    "category": "method",
    "text": "Apply by-operation assuming that the vector is grouped i.e. elements that belong to the same group by stored contiguously and return a vector\n\n\n\n\n\n"
},

{
    "location": "#FastGroupBy._fastby!-Union{Tuple{S}, Tuple{T}, Tuple{Function,AbstractArray{T,1},AbstractArray{S,1}}} where S where T<:Union{Bool, Float32, Float64, Int128, Int16, Int32, Int64, Int8, UInt128, UInt16, UInt32, UInt64, UInt8, String}",
    "page": "Home",
    "title": "FastGroupBy._fastby!",
    "category": "method",
    "text": "Internal: single-function fastby, one by, one val\n\n\n\n\n\n"
},

{
    "location": "#FastGroupBy.genca-Union{Tuple{T}, Tuple{U}, Tuple{Array{U,1},Array{T,1}}} where T where U<:Unsigned",
    "page": "Home",
    "title": "FastGroupBy.genca",
    "category": "method",
    "text": "Generate CategoricalArrays\n\n\n\n\n\n"
},

{
    "location": "#FastGroupBy.select-Tuple{Symbol}",
    "page": "Home",
    "title": "FastGroupBy.select",
    "category": "method",
    "text": "select(:col)\n\nReturn a funciton that obtains a column with the named symbol from an AbstractDataFrame or NDSparse\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FastGroupBy]\nOrder = [:type, :function]"
},

]}
