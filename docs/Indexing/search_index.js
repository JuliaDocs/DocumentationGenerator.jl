var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Indexing-1",
    "page": "Readme",
    "title": "Indexing",
    "category": "section",
    "text": "Generalized indexing for Julia(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)This package defines functions for getting multiple indices out of dictionaries, tuples, etc, extending this ability beyond AbstractArray.To acheive this, we introduce new functions and methods:getindices(container, indices) - generalizes getindex(container, index) to multiple indices.\nsetindices!(container, value, indices) - generalizes setindex!(container, value, index) to multiple indices. The same value is set for each index in indices.\nview(container, indices) - lazy versions of getindices(container, indices) defined for dictionaries."
},

{
    "location": "#Quick-start-1",
    "page": "Readme",
    "title": "Quick start",
    "category": "section",
    "text": "Please note that this package is still under development. However, you can check it out with Julia v0.6 or greater, and use it like so:julia> Pkg.clone(\"https://github.com/andyferris/Indexing.jl\")\n\njulia> using Indexing\n\njulia> d = Dict(:a => \"Alice\", :b => \"Bob\", :c => \"Charlie\")\nDict{Symbol,String} with 3 entries:\n  :a => \"Alice\"\n  :b => \"Bob\"\n  :c => \"Charlie\"\n\njulia> getindices(d, [:a, :c]) # Preserves type/keys of index collection - an array of length 2\n2-element Array{String,1}:\n \"Alice\"  \n \"Charlie\"\n\njulia> getindices(d, (:a, :c)) # Preserves type/keys of index collection - a tuple of length 2\n(\"Alice\", \"Charlie\")\n\njulia> getindices(d, Dict(\"Wife\" => :a, \"Husband\" => :c)) # Preserves type/keys of index collection - a dictionary with keys \"Wife\" and \"Husband\"\nDict{String,String} with 2 entries:\n  \"Wife\"    => \"Alice\"\n  \"Husband\" => \"Charlie\"Similarly, view works as a lazy version of getindices, and setindices! works by setting the same value to each specified index."
},

{
    "location": "#TODO-1",
    "page": "Readme",
    "title": "TODO",
    "category": "section",
    "text": "This package is a work-in-progress. To complete the package, we need to:Performance improvements and propagation of @inbounds annotations."
},

{
    "location": "#Future-thoughts-1",
    "page": "Readme",
    "title": "Future thoughts",
    "category": "section",
    "text": "Perhaps these could be intergrated into future Julia syntax. One suggestion:a[i]               --> getindex(a, i)       # scalar only\na.[inds]           --> getindices(a, inds)\na[i] = v           --> setindex!(a, v, i)   # scalar only\na.[inds] = v       --> setindices!(a, v, inds)\na[i] .= v          --> broadcast!(identity, a[i], v)\na.[inds] .= values --> broadcast!(identity, view(a, inds), values)Note the lack of dotview and maybeview. The last two could support dot-fusion on the RHS. Also, the default for a.[inds] could potentially move to view."
},

{
    "location": "autodocs/#Indexing.ViewArray",
    "page": "Docstrings",
    "title": "Indexing.ViewArray",
    "category": "type",
    "text": "ViewArray(parent, indices)\n\nCreate an array out which is a lazy view of parent. The indices of out match the indices of indices, and the values of indices are used to index parent. Unlike SubArray, the parent type could be any indexable container (for instance, we can create an AbstractArray view of the values stored in an AbstractDict).\n\nSee also ViewDict, view.\n\nExamples\n\njulia> d = Dict(:a => 11, :b => 12, :c => 13)\nDict{Symbol,Int64} with 3 entries:\n  :a => 11\n  :b => 12\n  :c => 13\n\njulia> ViewArray(d, [:a, :c])\n2-element ViewArray{Int64,1,Dict{Symbol,Int64},Array{Symbol,1}}:\n 11\n 13\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Indexing.ViewDict",
    "page": "Docstrings",
    "title": "Indexing.ViewDict",
    "category": "type",
    "text": "ViewDict(parent, indices)\n\nCreate an array out which is a lazy view of parent. The indices of out match the indices of indices, and the values of indices are used to index parent. The parent must be an indexable type - for instance, an array or dictionary.\n\nSee also ViewArray, view.\n\nExamples\n\njulia> d = Dict(:a => \"Alice\", :b => \"Bob\", :c => \"Charlie\")\nDict{Symbol,String} with 3 entries:\n  :a => \"Alice\"\n  :b => \"Bob\"\n  :c => \"Charlie\"\n\njulia> ViewDict(d, Dict(:aa => :a, :cc => :c))\nViewDict{Symbol,String,Dict{Symbol,String},Dict{Symbol,Symbol}} with 2 entries:\n  :aa => \"Alice\"\n  :cc => \"Charlie\"\n\njulia> v = [11, 12, 13]\n3-element Array{Int64,1}:\n 11\n 12\n 13\n\njulia> ViewDict(v, Dict(:a =>1 , :c => 3))\nViewDict{Symbol,Int64,Array{Int64,1},Dict{Symbol,Int64}} with 2 entries:\n  :a => 11\n  :c => 13\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Indexing.getindices-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Indexing.getindices",
    "category": "method",
    "text": "getindices(container, indices)\n\nReturn an indexable container with indices keys(indices) and values container[i] for i ∈ values(indices). This generalizes scalar getindex(container, index) for multiple indices, for dictionaries, tuples, named tuples, etc.\n\nExamples\n\njulia> d = Dict(:a => \"Alice\", :b => \"Bob\", :c => \"Charlie\")\nDict{Symbol,String} with 3 entries:\n  :a => \"Alice\"\n  :b => \"Bob\"\n  :c => \"Charlie\"\n\njulia> getindices(d, [:a, :c])\n2-element Array{String,1}:\n \"Alice\"  \n \"Charlie\"\n\njulia> getindices(d, (:a, :c))\n(\"Alice\", \"Charlie\")\n\njulia> getindices(d, Dict(\"Wife\" => :a, \"Husband\" => :c))\nDict{String,String} with 2 entries:\n  \"Wife\"    => \"Alice\"\n  \"Husband\" => \"Charlie\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Indexing.setindices!-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "Indexing.setindices!",
    "category": "method",
    "text": "setindices!(container, value, indices)\n\nStore the given value at all the indices in values(indices) of container. This generalizes scalar setindex! for dictionaries, etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.view-Tuple{AbstractDict,AbstractArray}",
    "page": "Docstrings",
    "title": "Base.view",
    "category": "method",
    "text": "view(d::AbstractDict, inds::AbstractArray)\n\nCreate an array view over the dictionary d with the indices stored in inds.\n\nSee also ViewArray.\n\nExamples\n\njulia> d = Dict(:a => 11, :b => 12, :c => 13)\nDict{Symbol,Int64} with 3 entries:\n  :a => 11\n  :b => 12\n  :c => 13\n\njulia> view(d, [:a, :c])\n2-element ViewArray{Int64,1,Dict{Symbol,Int64},Array{Symbol,1}}:\n 11\n 13\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.view-Tuple{Any,AbstractDict}",
    "page": "Docstrings",
    "title": "Base.view",
    "category": "method",
    "text": "view(parent, inds::AbstractDict)\n\nCreate a dictionary view over the indexable container parent. The indices of the output are the indices of inds, and the values are the corresponding parent[i] for  i in values(inds).\n\nSee also ViewDict.\n\nExamples\n\njulia> d = Dict(:a => \"Alice\", :b => \"Bob\", :c => \"Charlie\")\nDict{Symbol,String} with 3 entries:\n  :a => \"Alice\"\n  :b => \"Bob\"\n  :c => \"Charlie\"\n\njulia> view(d, Dict(:aa => :a, :cc => :c))\nViewDict{Symbol,String,Dict{Symbol,String},Dict{Symbol,Symbol}} with 2 entries:\n  :aa => \"Alice\"\n  :cc => \"Charlie\"\n\njulia> v = [11, 12, 13]\n3-element Array{Int64,1}:\n 11\n 12\n 13\n\njulia> view(v, Dict(:a =>1 , :c => 3))\nViewDict{Symbol,Int64,Array{Int64,1},Dict{Symbol,Int64}} with 2 entries:\n  :a => 11\n  :c => 13\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Indexing]\nOrder = [:type, :function]"
},

]}
