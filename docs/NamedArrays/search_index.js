var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NamedArrays-1",
    "page": "Readme",
    "title": "NamedArrays",
    "category": "section",
    "text": "Julia type that implements a drop-in wrapper for AbstractArray type, providing named indices and dimensions.(Image: Build Status) (Image: NamedArrays) (Image: NamedArrays) (Image: Coverage Status)"
},

{
    "location": "#Idea-1",
    "page": "Readme",
    "title": "Idea",
    "category": "section",
    "text": "We would want to have the possibility to give each row/column/... in an Array names, as well as the array dimensions themselves.  This could be used for pretty-printing, indexing, and perhaps even some sort of dimension-checking in certain matrix computations.In all other respects, a NamedArray should behave the same as the underlying AbstractArray.A NamedArray should adhere to the interface definition of an AbstractArray itself, if there are cases where this is not true, these should be considered bugs in the implementation of NamedArrays."
},

{
    "location": "#Synopsis-1",
    "page": "Readme",
    "title": "Synopsis",
    "category": "section",
    "text": "using NamedArrays\nn = NamedArray(rand(2,4))\n@show n;\n\nn = 2×4 Named Array{Float64,2}\nA ╲ B │         1          2          3          4\n──────┼───────────────────────────────────────────\n1     │  0.833541   0.409606   0.203789   0.724494\n2     │  0.458244   0.908721   0.808201  0.0580882\n\nsetnames!(n, [\"one\", \"two\"], 1)         # give the names \"one\" and \"two\" to the rows (dimension 1)\nn[\"one\", 2:3]\nn[\"two\", :] = 11:14\nn[Not(\"two\"), :] = 4:7                  # all rows but the one called \"two\"\n@show n;\n\nn = 2×4 Named Array{Float64,2}\nA ╲ B │    1     2     3     4\n──────┼───────────────────────\none   │  4.0   5.0   6.0   7.0\ntwo   │ 11.0  12.0  13.0  14.0\n\n@show sum(n, dims=1);\n\nsum(n, dims=1) = 1×4 Named Array{Float64,2}\n A ╲ B │    1     2     3     4\n───────┼───────────────────────\nsum(A) │ 15.0  17.0  19.0  21.0"
},

{
    "location": "#Construction-1",
    "page": "Readme",
    "title": "Construction",
    "category": "section",
    "text": ""
},

{
    "location": "#Default-names-for-indices-and-dimensions-1",
    "page": "Readme",
    "title": "Default names for indices and dimensions",
    "category": "section",
    "text": "# NamedArray(a::Array)\nn = NamedArray([1 2; 3 4])\n# NamedArray{T}(dims...)\nn = NamedArray{Int}(2, 2)These constructors add default names to the array of type String, \"1\", \"2\", ... for each dimension, and names the dimensions :A, :B, ... (which will be all right for 26 dimensions to start with; 26 dimensions should be enough for anyone:-).  The former initializes the NamedArray with the Array a, the latter makes an uninitialized NamedArray of element type T with the specified dimensions dims...."
},

{
    "location": "#Lower-level-constructors-1",
    "page": "Readme",
    "title": "Lower level constructors",
    "category": "section",
    "text": "The key-lookup for names is implemented by using DataStructures.OrderedDicts for each dimension.  At a lower level, you can construct NamedArrays this way:using DataStructures\nn = NamedArray([1 3; 2 4], ( OrderedDict(\"A\"=>1, \"B\"=>2), OrderedDict(\"C\"=>1, \"D\"=>2) ),\n               (\"Rows\", \"Cols\"))\n@show n;\n\nn = 2×2 Named Array{Int64,2}\nRows ╲ Cols │ C  D\n────────────┼─────\nA           │ 1  3\nB           │ 2  4This is the basic constructor for a namedarray.  The second argument names must be a tuple of OrderedDicts whose range (the values) are exacly covering the range 1:size(a,dim) for each dimension.   The keys in the various dictionaries may be of mixed types, but after construction, the type of the names cannot be altered.  The third argument dimnames is a tuple of the names of the dimensions themselves, and these names may be of any type."
},

{
    "location": "#Vectors-of-names-1",
    "page": "Readme",
    "title": "Vectors of names",
    "category": "section",
    "text": "# NamedArray{T,N}(a::AbstractArray{T,N}, names::NTuple{N,Vector}, dimnames::NTuple{N})\nn = NamedArray([1 3; 2 4], ( [\"a\", \"b\"], [\"c\", \"d\"] ), (\"Rows\", \"Cols\"))\n# NamedArray{T,N}(a::AbstractArray{T,N}, names::NTuple{N,Vector})\nn = NamedArray([1 3; 2 4], ( [\"a\", \"b\"], [\"c\", \"d\"] ))\nn = NamedArray([1, 2], ( [\"a\", \"b\"], ))  # note the comma after [\"a\", \"b\"] to ensure evaluation as tupleThis is a more friendly version of the basic constructor, where the range of the dictionaries is automatically assigned the values 1:size(a, dim) for the names in order. If dimnames is not specified, the default values will be used (:A, :B, etc.).In principle, there is no limit imposed to the type of the names used, but we discourage the use of Real, AbstractArray and Range, because they have a special interpretation in getindex() and setindex."
},

{
    "location": "#Indexing-1",
    "page": "Readme",
    "title": "Indexing",
    "category": "section",
    "text": ""
},

{
    "location": "#Integer-indices-1",
    "page": "Readme",
    "title": "Integer indices",
    "category": "section",
    "text": "Single and multiple integer indices work as for the undelying array:n[1, 1]\nn[1]Because the constructed NamedArray itself is an AbstractArray, integer indices always have precedence:a = rand(2, 4)\ndodgy = NamedArray(a, ([2, 1], [10, 20, 30, 40]))\ndodgy[1, 1] == a[1, 1] ## true\ndodgy[1, 10] ## BoundsErrorIn some cases, e.g., with contingency tables, it would be very handy to be able to use named Integer indices.  In this case, in order to circumvent the normal AbstractArray interpretation of the index, you can wrap the indexing argument in the type Name()dodgy[Name(1), Name(30)] == a[2, 3] ## true"
},

{
    "location": "#Named-indices-1",
    "page": "Readme",
    "title": "Named indices",
    "category": "section",
    "text": "n = NamedArray([1 2 3; 4 5 6], ([\"one\", \"two\"], [:a, :b, :c]))\n@show n;\n\nn = 2×3 Named Array{Int64,2}\nA ╲ B │ :a  :b  :c\n──────┼───────────\none   │  1   2   3\ntwo   │  4   5   6\n\nn[\"one\", :a] == 1 ## true\nn[:, :b] == [2, 5] ## true\nn[\"two\", [1, 3]] == [4, 6] ## true\nn[\"one\", [:a, :b]] == [1, 2] ## trueThis is the main use of NamedArrays.  Names (keys) and arrays of names can be specified as an index, and these can be mixed with other forms of indexing."
},

{
    "location": "#Slices-1",
    "page": "Readme",
    "title": "Slices",
    "category": "section",
    "text": "The example above just shows how the indexing works for the values, but there is a slight subtlety in how the return type of slices is determinedWhen a single element is selected by an index expression, a scalar value is returned.  When an array slice is selected, an attempt is made to return a NamedArray with the correct names for the dimensions.@show n[:, :b]; ## this expression drops the singleton dimensions, and hence the names\n\nn[:, :b] = 2-element Named Array{Int64,1}\nA   │\n────┼──\none │ 2\ntwo │ 5\n\n@show n[[\"one\"], [:a]]; ## this expression keeps the names\n\nn[[\"one\"], [:a]] = 1×1 Named Array{Int64,2}\nA ╲ B │ :a\n──────┼───\none   │  1"
},

{
    "location": "#Negation-/-complement-1",
    "page": "Readme",
    "title": "Negation / complement",
    "category": "section",
    "text": "There is a special type constructor Not(), whose function is to specify which elements to exclude from the array.  This is similar to negative indices in the language R.  The elements in Not(elements...) select all but the indicated elements from the array.n[Not(1), :] == n[[2], :] ## true, note that `n` stays 2-dimensional\nn[2, Not(:a)] == n[2, [:b, :c]] ## true\ndodgy[1, Not(Name(30))] == dodgy[1, [1, 2, 4]] ## trueBoth integers and names can be negated."
},

{
    "location": "#Dictionary-style-indexing-1",
    "page": "Readme",
    "title": "Dictionary-style indexing",
    "category": "section",
    "text": "You can also use a dictionary-style indexing, if you don\'t want to bother about the order of the dimensions, or make a slice using a specific named dimension:n[:A => \"one\"] == [1, 2, 3]\nn[:B => :c, :A => \"two\"] == 6This style cannot be mixed with other indexing styles, yet."
},

{
    "location": "#Assignment-1",
    "page": "Readme",
    "title": "Assignment",
    "category": "section",
    "text": "Most index types can be used for assignment as LHSn[1, 1] = 0\nn[\"one\", :b] = 1\nn[:, :c] = 101:102\nn[:B=>:b, :A=>\"two\"] = 50\n@show(n) # ==>\n\nn = 2×3 Named Array{Int64,2}\nA ╲ B │  :a   :b   :c\n──────┼──────────────\none   │   0    1  101\ntwo   │   4   50  102General functions –"
},

{
    "location": "#Access-to-the-names-of-the-indices-and-dimensions-1",
    "page": "Readme",
    "title": "Access to the names of the indices and dimensions",
    "category": "section",
    "text": "names(n::NamedArray) ## get all index names for all dimensions\nnames(n::NamedArray, dim::Integer) ## just for dimension `dim`\ndimnames(n::NamedArray) ## the names of the dimensions\n\n@show names(n);\nnames(n) = Array{T,1} where T[[\"one\", \"two\"], Symbol[:a, :b, :c]]\n\n@show names(n, 1)\nnames(n, 1) = [\"one\", \"two\"]\n2-element Array{String,1}:\n \"one\"\n \"two\"\n\n@show dimnames(n);\ndimnames(n) = Symbol[:A, :B]"
},

{
    "location": "#Setting-the-names-after-construction-1",
    "page": "Readme",
    "title": "Setting the names after construction",
    "category": "section",
    "text": "Because the type of the keys are encoded in the type of the NamedArray, you can only change the names of indices if they have the same type as before. setnames!(n::NamedArray, names::Vector, dim::Integer)\n setnames!(n::NamedArray, name, dim::Int, index:Integer)\n setdimnames!(n::NamedArray, name, dim:Integer)sets all the names of dimension dim, or only the name at index index, or the name of the dimension dim."
},

{
    "location": "#Copy-1",
    "page": "Readme",
    "title": "Copy",
    "category": "section",
    "text": "copy(a::NamedArray)returns a copy of all the elements in a, and copies of the names, and returns a NamedArray"
},

{
    "location": "#Convert-1",
    "page": "Readme",
    "title": "Convert",
    "category": "section",
    "text": "convert(::Type{Array}, a::NamedArray)converts a NamedArray to an Array by dropping all name information.  You can also directly access the underlying array using n.array, or use the accessor function array(n)."
},

{
    "location": "#Methods-with-special-treatment-of-names-/-dimnames-1",
    "page": "Readme",
    "title": "Methods with special treatment of names / dimnames",
    "category": "section",
    "text": ""
},

{
    "location": "#Concatenation-1",
    "page": "Readme",
    "title": "Concatenation",
    "category": "section",
    "text": "hcat(V::NamedVector...)concatenates (column) vectors to an array.  If the names are identical for all vectors, these are retained in the results.  Otherwise the names are reinitialized to the default \"1\", \"2\", ..."
},

{
    "location": "#Transposition-1",
    "page": "Readme",
    "title": "Transposition",
    "category": "section",
    "text": "\' ## transpose post-fix operator \'\nadjoint\ntranspose\npermutedims\ncircshiftoperate on the dimnames as well"
},

{
    "location": "#Reordering-of-dimensions-in-NamedVectors-1",
    "page": "Readme",
    "title": "Reordering of dimensions in NamedVectors",
    "category": "section",
    "text": "nthperm\nnthperm!\npermute!\nshuffle\nshuffle!\nreverse\nreverse!\nsort\nsort!operate on the names of the rows as well"
},

{
    "location": "#Broadcasts-1",
    "page": "Readme",
    "title": "Broadcasts",
    "category": "section",
    "text": "broadcast\nbroadcast!These functions keep the names of the first argument"
},

{
    "location": "#Aggregates-1",
    "page": "Readme",
    "title": "Aggregates",
    "category": "section",
    "text": "sum\nprod\nmaximum\nminimum\nmean\nstdThese functions, when operating along one dimension, keep the names in the other dimensions, and name the left over singleton dimension as $function($dimname)."
},

{
    "location": "#Further-Development-1",
    "page": "Readme",
    "title": "Further Development",
    "category": "section",
    "text": "The current goal is to reduce complexity of the implementation.  Where possible, we want to use more of the Base.AbstractArray implementation.A longer term goal is to improve type stability, this might have a repercussion to the semantics of some operations."
},

{
    "location": "autodocs/#NamedArrays.NamedArray-Tuple{DataType,Vararg{Int64,N} where N}",
    "page": "Docstrings",
    "title": "NamedArrays.NamedArray",
    "category": "method",
    "text": "NamedArray(T::Type, dims::Int...) creates an uninitialized array with default names for the dimensions (:A, :B, ...) and indices (\"1\", \"2\", ...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NamedArrays.find_namedarray-Tuple{Base.Broadcast.Broadcasted}",
    "page": "Docstrings",
    "title": "NamedArrays.find_namedarray",
    "category": "method",
    "text": "find_namedarray(As) returns the first NamedArray among the arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NamedArrays]\nOrder = [:type, :function]"
},

]}
