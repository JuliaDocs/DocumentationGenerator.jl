var documenterSearchIndex = {"docs": [

{
    "location": "#DimArrays.DimArray",
    "page": "Home",
    "title": "DimArrays.DimArray",
    "category": "type",
    "text": "DimArray(T) = DimVector(T[])\nDimArray(sym) = DimVector(Any[], sym)\n\nEmpty DimVector into to which you can later push! things, optionally with a dimension name.\n\n\n\n\n\n"
},

{
    "location": "#DimArrays.DimArray-Tuple{AbstractArray,Array{T,1} where T}",
    "page": "Home",
    "title": "DimArrays.DimArray",
    "category": "method",
    "text": "DimArray(x, [n1, n2, ...], [f1, f2, ...], n9)\nDimArray(x, [n1, n2, ...], [f1]; label=:n9)\n\nVectors of names/maps are simply splatted, then digested as above. Content label n9 here is kept separate, equivalent to keyword label=:n9.\n\n\n\n\n\n"
},

{
    "location": "#DimArrays.DimArray-Union{Tuple{TT}, Tuple{N}, Tuple{T}, Tuple{TT,Vararg{Any,N} where N}} where TT<:AbstractArray{T,N} where N where T",
    "page": "Home",
    "title": "DimArrays.DimArray",
    "category": "method",
    "text": "DimArray(x, names...)\nDimArray(x, names..., maps...)\n\nInterprets symbols & strings as dimension names (in order), and numbers, functions & dictionaries as index maps (for each dimension). Numbers are converted to functions i -> i*n to indicate e.g. that we have every n-th data point. The ndims(x)+1-th name (if given) is equivalent to keyword label=name, labelling what the elements of x mean. Giving too few names/maps is no problem, too many will give a warning.\n\n\n\n\n\n"
},

{
    "location": "#DimArrays.DimMatrix-Tuple{AbstractArray{T,2} where T,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "DimArrays.DimMatrix",
    "category": "method",
    "text": "DimArray(x, names...)\nDimArray(x, names..., maps...)\n\nInterprets symbols & strings as dimension names (in order), and numbers, functions & dictionaries as index maps (for each dimension). Numbers are converted to functions i -> i*n to indicate e.g. that we have every n-th data point. The ndims(x)+1-th name (if given) is equivalent to keyword label=name, labelling what the elements of x mean. Giving too few names/maps is no problem, too many will give a warning.\n\n\n\n\n\nDimArray(x, [n1, n2, ...], [f1, f2, ...], n9)\nDimArray(x, [n1, n2, ...], [f1]; label=:n9)\n\nVectors of names/maps are simply splatted, then digested as above. Content label n9 here is kept separate, equivalent to keyword label=:n9.\n\n\n\n\n\n\n\n"
},

{
    "location": "#DimArrays.DimVector",
    "page": "Home",
    "title": "DimArrays.DimVector",
    "category": "type",
    "text": "DimArray(x, names...)\nDimArray(x, names..., maps...)\n\nInterprets symbols & strings as dimension names (in order), and numbers, functions & dictionaries as index maps (for each dimension). Numbers are converted to functions i -> i*n to indicate e.g. that we have every n-th data point. The ndims(x)+1-th name (if given) is equivalent to keyword label=name, labelling what the elements of x mean. Giving too few names/maps is no problem, too many will give a warning.\n\n\n\n\n\nDimArray(x, [n1, n2, ...], [f1, f2, ...], n9)\nDimArray(x, [n1, n2, ...], [f1]; label=:n9)\n\nVectors of names/maps are simply splatted, then digested as above. Content label n9 here is kept separate, equivalent to keyword label=:n9.\n\n\n\n\n\nDimArray(T) = DimVector(T[])\nDimArray(sym) = DimVector(Any[], sym)\n\nEmpty DimVector into to which you can later push! things, optionally with a dimension name.\n\n\n\n\n\n\n\n"
},

{
    "location": "#DimArrays.dictvector-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "DimArrays.dictvector",
    "category": "method",
    "text": "dictvector(vec, [:first, \"second\", ...]) = DimVector(vec, Dict(1 => :first, 2 => \"second\", ...))\ndictvector(vec, [:first, ...], :axis, :content)\n\nConvenient way to define a (short) DimVector whose index function is a dictionary labelling the entries. A name for the dimension / axis, and a label for its content, can be supplied too.\n\n\n\n\n\n"
},

{
    "location": "#DimArrays.name!-Tuple{DimArray,Vararg{Union{String, Symbol},N} where N}",
    "page": "Home",
    "title": "DimArrays.name!",
    "category": "method",
    "text": "name!(x, sym1, sym2)\n\nName the dimensions of x::DimArray to be sym1, sym2, ..., with the ndims(x)+1-th one interpreted as content label.\n\n\n\n\n\n"
},

{
    "location": "#DimArrays.nest-Tuple{Symbol}",
    "page": "Home",
    "title": "DimArrays.nest",
    "category": "method",
    "text": "nest([A1, A2, ...])\nnest([A1, A2, ...], sym)\n\nCreates an array with ndims(A1)+1 dimensions. All the constituent arrays should be similar! Optional 2nd argument names the new dimension, giving DimArray(nest(...),sym); this also happens if A1 isa DimArray.\n\n[A1, A2, ...] |> nest(s)\n\nGives a function which acts on vectors as above.\n\n\n\n\n\n"
},

{
    "location": "#Base.push!-Tuple{DimArray{T,1,TT} where TT where T,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "Base.push!",
    "category": "method",
    "text": "push!(x, val, sym)\n\nFor x::DimVector of length(x)==n, the result has x[n+1]=val with index label n+1 => sym added to the dictionary. Only works if x\'s index function is nothing or a Dict. See also dictvector([val, val2, val3, ...], [sym, sym2, ...]) for directly creating such things.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DimArrays]\nOrder = [:type, :function]"
},

]}
