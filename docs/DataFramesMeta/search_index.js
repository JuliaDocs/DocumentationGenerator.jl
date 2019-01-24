var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DataFramesMeta.jl-1",
    "page": "Readme",
    "title": "DataFramesMeta.jl",
    "category": "section",
    "text": "(Image: DataFramesMeta) (Image: Coveralls) (Image: Travis) (Image: AppVeyor)Metaprogramming tools for DataFrames.jl and AbstractDict objects. These macros improve performance and provide more convenient syntax."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": ""
},

{
    "location": "#@with-1",
    "page": "Readme",
    "title": "@with",
    "category": "section",
    "text": "@with allows DataFrame columns to be referenced as symbols like :colX in expressions. If an expression is wrapped in ^(expr), expr gets passed through untouched. If an expression is wrapped in cols(expr), the column is referenced by the variable expr rather than a symbol. Here are some examples:using DataFrames\nusing DataFramesMeta\n\ndf = DataFrame(x = 1:3, y = [2, 1, 2])\nx = [2, 1, 0]\n\n@with(df, :y .+ 1)\n@with(df, :x + x)  # the two x\'s are different\n\nx = @with df begin\n    res = 0.0\n    for i in 1:length(:x)\n        res += :x[i] * :y[i]\n    end\n    res\nend\n\n@with(df, df[:x .> 1, ^(:y)]) # The ^ means leave the :y alone\n\ncolref = :x\n@with(df, :y + cols(colref)) # Equivalent to df[:y] + df[colref]This works for AbstractDict types, too:y = 3\nd = Dict(:s => 3, :y => 44, :d => 5)\n\n@with(d, :s + :y + y)@with is the fundamental macro used by the other metaprogramming utilities.@with creates a function, so scope within @with is a local scope. Variables in the parent can be read. Writing to variables in the parent scope differs depending on the type of scope of the parent. If the parent scope is a global scope, then a variable cannot be assigned without using the global keyword. If the parent scope is a local scope (inside a function or let block for example), the global keyword is not needed to assign to that parent scope."
},

{
    "location": "#@where-1",
    "page": "Readme",
    "title": "@where",
    "category": "section",
    "text": "Select row subsets.@where(df, :x .> 1)\n@where(df, :x .> x)\n@where(df, :x .> x, :y .== 3)  # the two expressions are \"and-ed\""
},

{
    "location": "#@select-1",
    "page": "Readme",
    "title": "@select",
    "category": "section",
    "text": "Column selections and transformations. Also works with AbstractDict types.@select(df, :x, :y, :z)\n@select(df, x2 = 2 * :x, :y, :z)"
},

{
    "location": "#@transform-1",
    "page": "Readme",
    "title": "@transform",
    "category": "section",
    "text": "Add additional columns based on keyword arguments.@transform(df, newCol = cos.(:x), anotherCol = :x.^2 + 3*:x .+ 4)@transform works for AbstractDict types, too."
},

{
    "location": "#@byrow!-1",
    "page": "Readme",
    "title": "@byrow!",
    "category": "section",
    "text": "Act on a DataFrame row-by-row. Includes support for control flow and begin end blocks. Since the \"environment\" induced by @byrow! df is implicitly a single row of df, one uses regular operators and comparisons instead of their elementwise counterparts as in @with.@byrow! df if :A > :B; :A = :B * :C endlet x = 0.0\n    @byrow! df begin\n        if :A < :B\n            x += :B * :C\n        end\n    end\n    x\nendNote that the let block is required here to create a scope to allow assignment of x within @byrow!.byrow! also supports special syntax for allocating new columns to make byrow! more useful for data transformations. The syntax @newcol x::Array{Int} allocates a new column :x with an Array container with eltype Int. Note that the returned AbstractDataFrame includes these new columns, but the original df is not affected. Here is an example where two new columns are added:df = DataFrame(A = 1:3, B = [2, 1, 2])\ndf2 = @byrow! df begin\n    @newcol colX::Array{Float64}\n    @newcol colY::Array{Union{Int,Missing}}\n    :colX = :B == 2 ? pi * :A : :B\n    if :A > 1\n        :colY = :A * :B\n    else\n        :colY = Missing\n    end\nend"
},

{
    "location": "#LINQ-Style-Queries-and-Transforms-1",
    "page": "Readme",
    "title": "LINQ-Style Queries and Transforms",
    "category": "section",
    "text": "A number of functions for operations on DataFrames have been defined. Here is a table of equivalents for Hadley\'s dplyr and common LINQ functions.Julia             dplyr            LINQ\n---------------------------------------------\n@where            filter           Where\n@transform        mutate           Select (?)\n@by                                GroupBy\ngroupby           group_by\n@based_on         summarise/do\n@orderby          arrange          OrderBy\n@select           select           Select"
},

{
    "location": "#LINQ-macro-1",
    "page": "Readme",
    "title": "LINQ macro",
    "category": "section",
    "text": "There is also a @linq macro that supports chaining and all of the functionality defined in other macros. Here is an example of @linq:x_thread = @linq df |>\n    transform(y = 10 * :x) |>\n    where(:a .> 2) |>\n    by(:b, meanX = mean(:x), meanY = mean(:y)) |>\n    orderby(:meanX) |>\n    select(:meanX, :meanY, var = :b)Relative to the use of individual macros, chaining looks cleaner and more obvious with less noise from @ symbols. This approach also avoids filling up the limited macro name space. The main downside is that more magic happens under the hood.This method is extensible. Here is a comparison of the macro and @linq versions of with.macro with(d, body)\n    esc(with_helper(d, body))\nend\n\nfunction linq(::SymbolParameter{:with}, d, body)\n    with_helper(d, body)\nendThe linq method above registers the expression-replacement method defined for all with() calls. It should return an expression like a macro.Again, this is experimental. Based on feedback, we may decide to only use @linq or only support the set of linq-like macros."
},

{
    "location": "#Operations-on-GroupedDataFrames-1",
    "page": "Readme",
    "title": "Operations on GroupedDataFrames",
    "category": "section",
    "text": "The following operations are now included:where(g, d -> mean(d[:a]) > 0) and @where(g, mean(:a) > 0) – Filter groups based on the given criteria. Returns a GroupedDataFrame.\norderby(g, d -> mean(d[:a])) and @orderby(g, mean(:a)) – Sort groups based on the given criteria. Returns a GroupedDataFrame.\nDataFrame(g) – Convert groups back to a DataFrame with the same group orderings.\n@based_on(g, z = mean(:a)) – Summarize results within groups. Returns a DataFrame.\ntransform(g, d -> y = d[:a] - mean(d[:a])) and @transform(g, y = :a - mean(:a)) – Transform a DataFrame based on operations within a group. Returns a DataFrame.You can also index on GroupedDataFrames. g[1] is the first group, returned as a SubDataFrame. g[[1,4,5]] or g[[true, false, true, false, false]] return subsets of groups as a GroupedDataFrame. You can also iterate over GroupedDataFrames.The most general split-apply-combine approach is based on map. map(fun, g) returns a GroupApplied object with keys and vals. This can be used with combine."
},

{
    "location": "#Performance-1",
    "page": "Readme",
    "title": "Performance",
    "category": "section",
    "text": "@with works by parsing the expression body for all columns indicated by symbols (e.g. :colA). Then, a function is created that wraps the body and passes the columns as function arguments. This function is then called. Operations are efficient because:A pseudo-anonymous function is defined, so types are stable.\nColumns are passed as references, eliminating DataFrame indexing.All of the other macros are based on @with."
},

{
    "location": "#Package-Maintenance-1",
    "page": "Readme",
    "title": "Package Maintenance",
    "category": "section",
    "text": "Any of the JuliaStats collaborators have write access and can accept pull requests.Pull requests are welcome. Pull requests should include updated tests. If functionality is changed, docstrings should be added or updated. Generally, follow the guidelines in DataFrames."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DataFramesMeta]\nOrder = [:type, :function]"
},

]}
