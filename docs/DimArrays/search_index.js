var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DimArrays.jl-1",
    "page": "Readme",
    "title": "DimArrays.jl",
    "category": "section",
    "text": "This packages provides Julia arrays with named dimensions.  Like the built-in Array type these are mutable objects,  unlike NamedArrays and AxisArrays which are immutable. The idea was to have a convenient way to gather results of calculations in a script or notebook, rather than for anything high-performance.  For example, here I have a matrix of results at each iteration, and nest these into a 3-tensor, whose axis order I need not remember:using DimArrays\n\nlist = [];\nfor i=1:33\n    slowcalc = sqrt(i) .* randn(3,13) .+ i\n    push!(list, DimArray(slowcalc, :a, :b, :c ))  # add labels for 1st and 2nd dimensions  \nend\n\nlist3 = nest(list, :iter)   # now i is the 3rd index, and named \"iter\"\n\nusing Statistics\n\nmean(list3, dims=:iter)     # equivalent to dropdims(mean(list3, dims=3), dims=3)For quick plots, dimension names are used for axes and series: using Plots\n\nplot(selectdim(list3, :b, 1)\' , legend=:bottomright)Here selectdim(list3, :b, 1) == list3[:,1,:] in contents, but retains the labels.Besides each dimension\'s name (which is a Symbol, strings will be converted) it can also store a function, which is used in plotting to scale the axes etc.  (But only the output, getindex uses original integer indices). You can pass a number by which to scale the index, or a dictionary, instead of a function.For example, this plots data saved every 4 iterations correctly over the above example:saveevery = 4\nlist4 = DimArray([], :iter, saveevery);     # equivalent to function  i->4i\nfor i=1:33\n    slowcalc = sqrt(i) .* randn(3,23) .+ i\n    slownice = DimArray(slowcalc, [:a, :b], [Dict(1=>\"one\", 2=>\"two\", 3=>\"three\")], :stuff )\n                                            # equivalent to  i->Dict(...)[i]\n    rem(i,saveevery)==0 && push!(list4, slownice)\nend\nnest(list4)\n\nplot!(mean(nest(list4), dims=:b)\', s=:dash)If you do not provide a name for a dimension (or give an empty string \"\")  then you can still refer to it by default names like size(x, :row) == size(x,1) or maximum(y, :col) etc.  However these defaults are not stored, and not manipulated by transpose(x) or kron(x,y).For now, the list of functions supported is:DimArray, DimVector, DimMatrix create one, taking names and functions for dimensions in the order given.\ndictvector defines a DimVector whose function is a Dict. \nnest converts arrays of arrays, and squeeze drops dimensions of size 1. and these built-in functions:selectdim, size understand a dimension\'s name.\nsum, maximum, minimum, dropdims and Statistics.mean, std: all can be called with a dimension\'s name, in which case by default squeeze=true on that dimension, like mean(..., dims=:b) above.   They can also be called with a list of dimensions: sum(x, dims=[1,:c]) etc.\npush!, append!, hcat, vcat, transpose, ctranspose, permutedims.\nMatrix multiplication * will warn (once) if you multiply along directions with mismatched names... which may be a terrible idea.   And kronecker products produce new names like :a_b.  \ncollect, implicitly used by comprehensions like [ sqrt(n) for n in DimVector(1:10, \"int\")\' ] which thus inherit the names of the array being iterated over.Since DimArray <: AbstractArray anything else will fall back on their methods, and forget the dimension labels. See also:NamedArrays\nAxisArrays\nRecursiveArrayTools\nJuliennedArraysToDo:Make things like x[:, 1:10:end] and hcat(a,b) update the functions correctly.\nFigure out Julia 0.7\'s new broadcasting machinery.Michael Abbott, January 2018, mostly (as I had a grant to write).(Image: Build Status)<!– (Image: Coverage Status) (Image: codecov.io) –> <!– Note to self: pandoc -o README.html README.md –>"
},

{
    "location": "autodocs/#DimArrays.DimArray",
    "page": "Docstrings",
    "title": "DimArrays.DimArray",
    "category": "type",
    "text": "DimArray(T) = DimVector(T[])\nDimArray(sym) = DimVector(Any[], sym)\n\nEmpty DimVector into to which you can later push! things, optionally with a dimension name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DimArrays.DimArray-Tuple{AbstractArray,Array{T,1} where T}",
    "page": "Docstrings",
    "title": "DimArrays.DimArray",
    "category": "method",
    "text": "DimArray(x, [n1, n2, ...], [f1, f2, ...], n9)\nDimArray(x, [n1, n2, ...], [f1]; label=:n9)\n\nVectors of names/maps are simply splatted, then digested as above. Content label n9 here is kept separate, equivalent to keyword label=:n9.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DimArrays.DimArray-Union{Tuple{TT}, Tuple{N}, Tuple{T}, Tuple{TT,Vararg{Any,N} where N}} where TT<:AbstractArray{T,N} where N where T",
    "page": "Docstrings",
    "title": "DimArrays.DimArray",
    "category": "method",
    "text": "DimArray(x, names...)\nDimArray(x, names..., maps...)\n\nInterprets symbols & strings as dimension names (in order), and numbers, functions & dictionaries as index maps (for each dimension). Numbers are converted to functions i -> i*n to indicate e.g. that we have every n-th data point. The ndims(x)+1-th name (if given) is equivalent to keyword label=name, labelling what the elements of x mean. Giving too few names/maps is no problem, too many will give a warning.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DimArrays.DimMatrix-Tuple{AbstractArray{T,2} where T,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "DimArrays.DimMatrix",
    "category": "method",
    "text": "DimArray(x, names...)\nDimArray(x, names..., maps...)\n\nInterprets symbols & strings as dimension names (in order), and numbers, functions & dictionaries as index maps (for each dimension). Numbers are converted to functions i -> i*n to indicate e.g. that we have every n-th data point. The ndims(x)+1-th name (if given) is equivalent to keyword label=name, labelling what the elements of x mean. Giving too few names/maps is no problem, too many will give a warning.\n\n\n\n\n\nDimArray(x, [n1, n2, ...], [f1, f2, ...], n9)\nDimArray(x, [n1, n2, ...], [f1]; label=:n9)\n\nVectors of names/maps are simply splatted, then digested as above. Content label n9 here is kept separate, equivalent to keyword label=:n9.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DimArrays.DimVector",
    "page": "Docstrings",
    "title": "DimArrays.DimVector",
    "category": "type",
    "text": "DimArray(x, names...)\nDimArray(x, names..., maps...)\n\nInterprets symbols & strings as dimension names (in order), and numbers, functions & dictionaries as index maps (for each dimension). Numbers are converted to functions i -> i*n to indicate e.g. that we have every n-th data point. The ndims(x)+1-th name (if given) is equivalent to keyword label=name, labelling what the elements of x mean. Giving too few names/maps is no problem, too many will give a warning.\n\n\n\n\n\nDimArray(x, [n1, n2, ...], [f1, f2, ...], n9)\nDimArray(x, [n1, n2, ...], [f1]; label=:n9)\n\nVectors of names/maps are simply splatted, then digested as above. Content label n9 here is kept separate, equivalent to keyword label=:n9.\n\n\n\n\n\nDimArray(T) = DimVector(T[])\nDimArray(sym) = DimVector(Any[], sym)\n\nEmpty DimVector into to which you can later push! things, optionally with a dimension name.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DimArrays.dictvector-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "DimArrays.dictvector",
    "category": "method",
    "text": "dictvector(vec, [:first, \"second\", ...]) = DimVector(vec, Dict(1 => :first, 2 => \"second\", ...))\ndictvector(vec, [:first, ...], :axis, :content)\n\nConvenient way to define a (short) DimVector whose index function is a dictionary labelling the entries. A name for the dimension / axis, and a label for its content, can be supplied too.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DimArrays.name!-Tuple{DimArray,Vararg{Union{String, Symbol},N} where N}",
    "page": "Docstrings",
    "title": "DimArrays.name!",
    "category": "method",
    "text": "name!(x, sym1, sym2)\n\nName the dimensions of x::DimArray to be sym1, sym2, ..., with the ndims(x)+1-th one interpreted as content label.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DimArrays.nest-Tuple{Symbol}",
    "page": "Docstrings",
    "title": "DimArrays.nest",
    "category": "method",
    "text": "nest([A1, A2, ...])\nnest([A1, A2, ...], sym)\n\nCreates an array with ndims(A1)+1 dimensions. All the constituent arrays should be similar! Optional 2nd argument names the new dimension, giving DimArray(nest(...),sym); this also happens if A1 isa DimArray.\n\n[A1, A2, ...] |> nest(s)\n\nGives a function which acts on vectors as above.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.push!-Tuple{DimArray{T,1,TT} where TT where T,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "Base.push!",
    "category": "method",
    "text": "push!(x, val, sym)\n\nFor x::DimVector of length(x)==n, the result has x[n+1]=val with index label n+1 => sym added to the dictionary. Only works if x\'s index function is nothing or a Dict. See also dictvector([val, val2, val3, ...], [sym, sym2, ...]) for directly creating such things.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DimArrays]\nOrder = [:type, :function]"
},

]}
