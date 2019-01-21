var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#KeyedFrames-1",
    "page": "Home",
    "title": "KeyedFrames",
    "category": "section",
    "text": "A KeyedFrame is a DataFrame that also stores a vector of column names that together act as a unique key.This key is used to provide default column information to join, unique, and sort when this information is not provided by the user."
},

{
    "location": "#Constructor-1",
    "page": "Home",
    "title": "Constructor",
    "category": "section",
    "text": "KeyedFrame(df::DataFrame, key::Vector)Create an KeyedFrame using the provided DataFrame; key specifies the columns to use by default when performing a join on KeyedFrames when on is not provided."
},

{
    "location": "#Example-1",
    "page": "Home",
    "title": "Example",
    "category": "section",
    "text": "julia> kf1 = KeyedFrame(DataFrame(; a=1:10, b=2:11, c=3:12), [:a, :b])\n10×3 KeyedFrames.KeyedFrame\n│ Row │ a  │ b  │ c  │\n├─────┼────┼────┼────┤\n│ 1   │ 1  │ 2  │ 3  │\n│ 2   │ 2  │ 3  │ 4  │\n│ 3   │ 3  │ 4  │ 5  │\n│ 4   │ 4  │ 5  │ 6  │\n│ 5   │ 5  │ 6  │ 7  │\n│ 6   │ 6  │ 7  │ 8  │\n│ 7   │ 7  │ 8  │ 9  │\n│ 8   │ 8  │ 9  │ 10 │\n│ 9   │ 9  │ 10 │ 11 │\n│ 10  │ 10 │ 11 │ 12 │\n\njulia> kf2 = KeyedFrame(DataFrame(; a=[4, 2, 1], d=[2, 5, 2], e=1:3), [:d, :a])\n3×3 KeyedFrames.KeyedFrame\n│ Row │ a │ d │ e │\n├─────┼───┼───┼───┤\n│ 1   │ 4 │ 2 │ 1 │\n│ 2   │ 2 │ 5 │ 2 │\n│ 3   │ 1 │ 2 │ 3 │"
},

{
    "location": "#Joining-1",
    "page": "Home",
    "title": "Joining",
    "category": "section",
    "text": "When performing a join, if only one of the arguments is an KeyedFrame and on is not specified, the frames will be joined on the key of the KeyedFrame. If both arguments are KeyedFrames, on will default to the intersection of their respective indices. In all cases, the result of the join will share a type with the first argument."
},

{
    "location": "#Example-2",
    "page": "Home",
    "title": "Example",
    "category": "section",
    "text": "julia> join(kf1, kf2)\n3×5 KeyedFrames.KeyedFrame\n│ Row │ a │ b │ c │ d │ e │\n├─────┼───┼───┼───┼───┼───┤\n│ 1   │ 1 │ 2 │ 3 │ 2 │ 3 │\n│ 2   │ 2 │ 3 │ 4 │ 5 │ 2 │\n│ 3   │ 4 │ 5 │ 6 │ 2 │ 1 │\n\njulia> keys(ans)\n3-element Array{Symbol,1}:\n :a\n :b\n :dAlthough the keys of both KeyedFrames are used in constructing the default value for on, the user may still supply the on keyword if they wish:julia> join(kf1, kf2; on=[:a => :a, :b => :d], kind=:outer)\n12×4 KeyedFrames.KeyedFrame\n│ Row │ a  │ b  │ c       │ e       │\n├─────┼────┼────┼─────────┼─────────┤\n│ 1   │ 1  │ 2  │ 3       │ 3       │\n│ 2   │ 2  │ 3  │ 4       │ missing │\n│ 3   │ 3  │ 4  │ 5       │ missing │\n│ 4   │ 4  │ 5  │ 6       │ missing │\n│ 5   │ 5  │ 6  │ 7       │ missing │\n│ 6   │ 6  │ 7  │ 8       │ missing │\n│ 7   │ 7  │ 8  │ 9       │ missing │\n│ 8   │ 8  │ 9  │ 10      │ missing │\n│ 9   │ 9  │ 10 │ 11      │ missing │\n│ 10  │ 10 │ 11 │ 12      │ missing │\n│ 11  │ 4  │ 2  │ missing │ 1       │\n│ 12  │ 2  │ 5  │ missing │ 2       │\n\njulia> keys(ans)\n2-element Array{Symbol,1}:\n :a\n :bNotice that :d is no longer a key (as it has been renamed :c). It\'s important to note that while the user may expect :c to be part of the new frame\'s key (as :d was), join does not infer this."
},

{
    "location": "#Deduplication-1",
    "page": "Home",
    "title": "Deduplication",
    "category": "section",
    "text": "When calling unique (or unique!) on a KeyedFrame without providing a cols argument, cols will default to the key of the KeyedFrame instead of all columns. If you wish to remove only rows that are duplicates across all columns (rather than just across the key), you can call unique!(kf, names(kf))."
},

{
    "location": "#Example-3",
    "page": "Home",
    "title": "Example",
    "category": "section",
    "text": "julia> kf3 = KeyedFrame(DataFrame(; a=[1, 2, 3, 2, 1], b=[1, 2, 3, 2, 5], c=1:5), [:a, :b])\n5×3 KeyedFrames.KeyedFrame\n│ Row │ a │ b │ c │\n├─────┼───┼───┼───┤\n│ 1   │ 1 │ 1 │ 1 │\n│ 2   │ 2 │ 2 │ 2 │\n│ 3   │ 3 │ 3 │ 3 │\n│ 4   │ 2 │ 2 │ 4 │\n│ 5   │ 1 │ 5 │ 5 │\n\njulia> unique(kf3)\n4×3 KeyedFrames.KeyedFrame\n│ Row │ a │ b │ c │\n├─────┼───┼───┼───┤\n│ 1   │ 1 │ 1 │ 1 │\n│ 2   │ 2 │ 2 │ 2 │\n│ 3   │ 3 │ 3 │ 3 │\n│ 4   │ 1 │ 5 │ 5 │\n\njulia> unique(kf3, :a)\n3×3 KeyedFrames.KeyedFrame\n│ Row │ a │ b │ c │\n├─────┼───┼───┼───┤\n│ 1   │ 1 │ 1 │ 1 │\n│ 2   │ 2 │ 2 │ 2 │\n│ 3   │ 3 │ 3 │ 3 │\n\njulia> unique(kf3, names(kf2))\n5×3 KeyedFrames.KeyedFrame\n│ Row │ a │ b │ c │\n├─────┼───┼───┼───┤\n│ 1   │ 1 │ 1 │ 1 │\n│ 2   │ 2 │ 2 │ 2 │\n│ 3   │ 3 │ 3 │ 3 │\n│ 4   │ 2 │ 2 │ 4 │\n│ 5   │ 1 │ 5 │ 5 │"
},

{
    "location": "#Sorting-1",
    "page": "Home",
    "title": "Sorting",
    "category": "section",
    "text": "When sorting, if no cols keyword is supplied, the key is used to determine precedence.julia> kf2\n3×3 KeyedFrames.KeyedFrame\n│ Row │ a │ d │ e │\n├─────┼───┼───┼───┤\n│ 1   │ 4 │ 2 │ 1 │\n│ 2   │ 2 │ 5 │ 2 │\n│ 3   │ 1 │ 2 │ 3 │\n\njulia> keys(kf2)\n2-element Array{Symbol,1}:\n :d\n :a\n\njulia> sort(kf2)\n3×3 KeyedFrames.KeyedFrame\n│ Row │ a │ d │ e │\n├─────┼───┼───┼───┤\n│ 1   │ 1 │ 2 │ 3 │\n│ 2   │ 4 │ 2 │ 1 │\n│ 3   │ 2 │ 5 │ 2 │"
},

{
    "location": "#Equality-1",
    "page": "Home",
    "title": "Equality",
    "category": "section",
    "text": "Two KeyedFrames are considered equal to (==) each other if their data are equal and they have the same key. (The order in which columns appear in the key is ignored for the purposes of ==, but is relevant when calling isequal. This means that it is possible to have two KeyedFrames that are considered equal but whose default sort order will be different by virtue of having keys with different column ordering.)A KeyedFrame and a DataFrame with identical data are also considered equal (== returns true, though isequal will be false)."
},

]}
