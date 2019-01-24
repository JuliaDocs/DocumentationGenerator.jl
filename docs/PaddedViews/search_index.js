var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PaddedViews-1",
    "page": "Readme",
    "title": "PaddedViews",
    "category": "section",
    "text": "(Image: Build Status)(Image: Build status)(Image: codecov.io)"
},

{
    "location": "#Summary-1",
    "page": "Readme",
    "title": "Summary",
    "category": "section",
    "text": "PaddedViews provides a simple wrapper type, PaddedView, to add \"virtual\" padding to any array without copying data. Edge values not specified by the array are assigned a fillvalue.  Multiple arrays may be \"promoted\" to have common indices using the paddedviews function.PaddedView arrays are read-only, meaning that you cannot assign values to them. The original array may be extracted using A = parent(P), where P is a PaddedView."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "For padding a single array:julia> a = reshape(1:9, 3, 3)\n3×3 Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}:\n 1  4  7\n 2  5  8\n 3  6  9\n\njulia> PaddedView(-1, a, (4, 5))   # -1 is the fill value, (4, 5) is the desired size\n4×5 PaddedViews.PaddedView{Int64,2,Tuple{Base.OneTo{Int64},Base.OneTo{Int64}},Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}}:\n  1   4   7  -1  -1\n  2   5   8  -1  -1\n  3   6   9  -1  -1\n -1  -1  -1  -1  -1\n\njulia> PaddedView(-1, a, (4,5), (2,2)) # (2, 2) is the location of the first element from a\n4×5 PaddedViews.PaddedView{Int64,2,Tuple{Base.OneTo{Int64},Base.OneTo{Int64}},OffsetArrays.OffsetArray{Int64,2,Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}}}:\n -1  -1  -1  -1  -1\n -1   1   4   7  -1\n -1   2   5   8  -1\n -1   3   6   9  -1For padding multiple arrays to have common indices:julia> a1 = reshape([1,2], 2, 1)\n2×1 Array{Int64,2}:\n 1\n 2\n\njulia> a2 = [1.0,2.0]\'\n1×2 Array{Float64,2}:\n 1.0  2.0\n\njulia> a1p, a2p = paddedviews(0, a1, a2);   # 0 is the fill value\n\njulia> a1p\n2×2 PaddedViews.PaddedView{Int64,2,Tuple{Base.OneTo{Int64},Base.OneTo{Int64}},Array{Int64,2}}:\n 1  0\n 2  0\n\njulia> a2p\n2×2 PaddedViews.PaddedView{Float64,2,Tuple{Base.OneTo{Int64},Base.OneTo{Int64}},Array{Float64,2}}:\n 1.0  2.0\n 0.0  0.0"
},

{
    "location": "autodocs/#PaddedViews.PaddedView",
    "page": "Docstrings",
    "title": "PaddedViews.PaddedView",
    "category": "type",
    "text": "datapadded = PaddedView(fillvalue, data, padded_indices)\ndatapadded = PaddedView(fillvalue, data, padded_indices, data_indices)\ndatapadded = PaddedView(fillvalue, data, sz)\ndatapadded = PaddedView(fillvalue, data, sz, first_datum)\n\nCreate a padded version of the array data, where any elements within the span of padded_indices not assigned in data will have value fillvalue. If a second set of indices data_indices is not supplied it is assumed the array data spans the indices from the first up until size(data), otherwise data spans the specified data_indices. Alternately, the padded array size sz can be specified along with the location of the first element of data, first_datum. If first_datum is omitted, it is assumed to be the first element of the padded array.\n\nExample\n\njulia> a = reshape(1:9, 3, 3)\n3×3 Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}:\n 1  4  7\n 2  5  8\n 3  6  9\n\njulia> PaddedView(-1, a, (4, 5))\n4×5 PaddedViews.PaddedView{Int64,2,Tuple{Base.OneTo{Int64},Base.OneTo{Int64}},Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}}:\n  1   4   7  -1  -1\n  2   5   8  -1  -1\n  3   6   9  -1  -1\n -1  -1  -1  -1  -1\n\n julia> PaddedView(-1, a, (1:5,1:5), (2:4,2:4))\n PaddedViews.PaddedView{Int64,2,Tuple{UnitRange{Int64},UnitRange{Int64}},OffsetArrays.OffsetArray{Int64,2,Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}}} with indices 1:5×1:5:\n  -1  -1  -1  -1  -1\n  -1   1   4   7  -1\n  -1   2   5   8  -1\n  -1   3   6   9  -1\n  -1  -1  -1  -1  -1\n\njulia> PaddedView(-1, a, (5,5), (2,2))\n5×5 PaddedViews.PaddedView{Int64,2,Tuple{Base.OneTo{Int64},Base.OneTo{Int64}},OffsetArrays.OffsetArray{Int64,2,Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}}}}:\n-1  -1  -1  -1  -1\n-1   1   4   7  -1\n-1   2   5   8  -1\n-1   3   6   9  -1\n-1  -1  -1  -1  -1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PaddedViews.paddedviews-Tuple{Any,Vararg{AbstractArray,N} where N}",
    "page": "Docstrings",
    "title": "PaddedViews.paddedviews",
    "category": "method",
    "text": "Aspad = paddedviews(fillvalue, A1, A2, ....)\n\nPad the arrays A1, A2, ..., to a common size or set of axes, chosen as the span of axes enclosing all of the input arrays.\n\nExample:\n\njulia> a1 = reshape([1,2], 2, 1)\n2×1 Array{Int64,2}:\n 1\n 2\n\njulia> a2 = [1.0,2.0]\'\n1×2 Array{Float64,2}:\n 1.0  2.0\n\njulia> a1p, a2p = paddedviews(0, a1, a2);\n\njulia> a1p\n2×2 PaddedViews.PaddedView{Int64,2,Tuple{Base.OneTo{Int64},Base.OneTo{Int64}},Array{Int64,2}}:\n 1  0\n 2  0\n\njulia> a2p\n2×2 PaddedViews.PaddedView{Float64,2,Tuple{Base.OneTo{Int64},Base.OneTo{Int64}},Array{Float64,2}}:\n 1.0  2.0\n 0.0  0.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [PaddedViews]\nOrder = [:type, :function]"
},

]}
