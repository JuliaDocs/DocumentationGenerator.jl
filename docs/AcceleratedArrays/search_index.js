var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AcceleratedArrays.jl-1",
    "page": "Readme",
    "title": "AcceleratedArrays.jl",
    "category": "section",
    "text": "Arrays with acceleration indices.(Image: Build Status) (Image: Build status) (Image: codecov)AcceleratedArrays provides (seconday) acceleration indexes for Julia AbstractArrays. Such acceleration indexes can be used to speed up certain operations, particularly those involving searching through the values - for example, an AcceleratedArray may have more efficient implementations of functions such as findall, filter, and unique.As a general rule, this package has been implemented for the purposes of accelerating analytics workloads and is designed to support functional, non-mutating workflows. It is currently not supported to add an index to data you expect to mutate afterwards."
},

{
    "location": "#Getting-started-1",
    "page": "Readme",
    "title": "Getting started",
    "category": "section",
    "text": "To download this package, from Julia v1.0 press ] to enter package mode and type:pkg> dev https://github.com/andyferris/AcceleratedArrays.jlAn AcceleratedArray is generally created by using the accelerate and accelerate! functions. # Construct a hash mapping to unique names\na = accelerate([\"Alice\", \"Bob\", \"Charlie\"], UniqueHashIndex)\n\n# Rearrange an array of random numbers into ascending order\nb = accelerate!(rand(1:100, 100), SortIndex)The resulting arrays can be used just like regular Julia arrays, except some operations become faster. For example, the hash map will let us find a certain element without exhaustively searching the array, or we can easily find all the elements within a given interval with a sorted array.# Find the index of \"Bob\" in `a`\nfindall(isequal(\"Bob\"), a)\n\n# Return all the numbers in `b` between 40 and 60\nfilter(in(40..60), b)"
},

{
    "location": "#Accelerated-functions-1",
    "page": "Readme",
    "title": "Accelerated functions",
    "category": "section",
    "text": "Accelerations are fully implemented for the following functions, where a is an AcceleratedArray:x ∈ a\ncount(pred, a)\nfindall(pred, a)\nfilter(pred, a)There is some work-in-progress on a variety of other functions, including some from SplitApplyCombine:findfirst(pred, a) and findlast(pred, a)\nunique(a)\ngroup, groupinds, groupview and groupreduce\ninnerjoinAccelerations are only available for some predicates pred, which naturally depend on the acceleration index used (see below for a full set)."
},

{
    "location": "#Acceleration-Indexes-1",
    "page": "Readme",
    "title": "Acceleration Indexes",
    "category": "section",
    "text": "The package intruduces the AbstractIndex supertype and the following concrete implemetations. Generally, an index is created when the user calls accelerate or accelerate!."
},

{
    "location": "#HashIndex-1",
    "page": "Readme",
    "title": "HashIndex",
    "category": "section",
    "text": "This index constructs a hashmap between values in the array, and the corresponding array indices. For example, invoking findall to search for the locations of certain values will be reduced to a simple dictionary lookup. Primarily accelerates commands using the isequal predicate."
},

{
    "location": "#UniqueHashIndex-1",
    "page": "Readme",
    "title": "UniqueHashIndex",
    "category": "section",
    "text": "Like HashIndex, except each value in the array can only appear once. Apart from guaranteeing uniqueness, certain operations may be faster with a UniqueHashIndex than  with a HashIndex."
},

{
    "location": "#SortIndex-1",
    "page": "Readme",
    "title": "SortIndex",
    "category": "section",
    "text": "This index determines the order of the elements (with respect to isless). This index can accelerate not only the isequal predicate, but a variety of other order-based predicates as well (see below).The accelerate! function will rearrange the input array, like sort!. This can speed up operations due to simplified algorithms and cache locality."
},

{
    "location": "#UniqueSortIndex-1",
    "page": "Readme",
    "title": "UniqueSortIndex",
    "category": "section",
    "text": "Like SortIndex, except each value in the array can only appear once. Apart from guaranteeing uniqueness, certain operations may be faster with a UniqueSortIndex than  with a SortIndex."
},

{
    "location": "#Custom-acceleration-indices-1",
    "page": "Readme",
    "title": "Custom acceleration indices",
    "category": "section",
    "text": "It is simple for a user or another package to implement an AbstractIndex - for instance a third-party package may provide a spatial acceleration index, or an index for fast textual search. Simply overload accelerate (and optionally accelerate!) as well as the operations you would like to accelerate, such as filter, findall, etc. Indices for unique sets of values may inherit from AbstractUniqueIndex <: AbstractIndex."
},

{
    "location": "#Order-based-predicates-and-Intervals-1",
    "page": "Readme",
    "title": "Order-based predicates and Intervals",
    "category": "section",
    "text": "In Julia, sorting is (typically) achieved using the isless and isequal predicates, which are designed to provide a canonical total order for values. Currently, the acceleration indices rely on these rather than the comparison operators ==, <, <=, >, >= and !=.To make life easier, this package introduces a number of new convenience functions:islessequal(a, b) = isless(a, b) || isequal(a, b)\nisgreater(a, b) = isless(b, a)\nisgreaterequal(a, b) = isless(b, a) || isequal(a, b)Any of these support \"currying\", which is a simple syntax for creating a closure such as isequal(a) = (b -> isequal(a, b)). Such curried predicates are picked up by multiple dispatch to accelerate operations like findall(isequal(3.0), accelerated_array)."
},

{
    "location": "#Intervals-1",
    "page": "Readme",
    "title": "Intervals",
    "category": "section",
    "text": "It is common to want to search for all values in a range. This package introduces an Interval type to represent the set of of values between two endpoints (with respect to isless and isequal).An interval is easily created with the .. operator via the syntax a .. b. To find if a value is in this range, use the in function/operator (alternatively spelled ∈, which can be inserted at the REPL via \\in <TAB>). For example, 3 ∈ 0 .. 10 is true but 13 ∈ 0 .. 10 is false.By default, an interval is inclusive of its endpoints, such that 10 ∈ 0 .. 10. An endpoint can be excluded via the lessthan or greaterthan function, which returns a value almost equal to but slightly less/greater than its input. An interval exclusive of both its endpoints can be expressed as greaterthan(a) .. lessthan(b). For example 10 ∉ 0 .. lessthan(10)."
},

{
    "location": "#Work-remaining-1",
    "page": "Readme",
    "title": "Work remaining",
    "category": "section",
    "text": "This package is still young, and could support some more features, such as:Accelerate more functions, including those in SplitApplyCombine.\nFigure out how to support missing, ==, < with either a hash- or sort-based index.\nMove Intervals into their own package, potentially reconcile with IntervalSets.jl (which currently uses <= and >= for comparisons)."
},

{
    "location": "autodocs/#AcceleratedArrays.Interval",
    "page": "Docstrings",
    "title": "AcceleratedArrays.Interval",
    "category": "type",
    "text": "Interval(start, stop)\n\nConstruct a closed interval, which is a collection which contains (via in) elements between start and stop (inclusive) according to isless. The collection is abstract in nature and doesn\'t support iteration, indexing, etc.\n\nCan be constructed via the .. function, e.g. 1..3 === Interval(1, 3).\n\nExamples\n\n```julia julia> 2 in Interval(1, 3) true\n\njulia> 3 in Interval(1, 3) true\n\njulia> 4 in Interval(1, 3) false\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AcceleratedArrays.:..-Union{Tuple{T2}, Tuple{T1}, Tuple{T1,T2}} where T2 where T1",
    "page": "Docstrings",
    "title": "AcceleratedArrays.:..",
    "category": "method",
    "text": "..(start, stop)\nstart..stop\n\nConstructs an Interval(start, stop), which represents the closed interval between start and stop. Intervals are abstract collections which support in but not iteration, indexing, etc.\n\nThe interval includes both the start and stop poitns. To exclude the start or stop from the Interval, use the greaterthan or lessthan function.\n\nExamples\n\n```julia julia> 2 in 1..3 true\n\njulia> 3 in 1..3 true\n\njulia> 4 in 1..3 false\n\njulia> 1 in greaterthan(1)..3 false\n\njulia> 3 in 1..lessthan(3) false\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AcceleratedArrays.accelerate!-Union{Tuple{T}, Tuple{AbstractArray,Type{T}}} where T<:AbstractIndex",
    "page": "Docstrings",
    "title": "AcceleratedArrays.accelerate!",
    "category": "method",
    "text": "accelerate!(a, IndexType)\n\nReturn an AcceleratedArray wrapping a using the acceleration index of type T.\n\nDepending on the index type, this operation may also modify a. For example a SortIndex will sort! the array a to maximize cache efficiency. The acceleration index will be invalidated (and become unsafe to use) if a is modified directly after the index is constructed. (See also accelerate).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AcceleratedArrays.accelerate-Union{Tuple{T}, Tuple{AbstractArray,Type{T}}} where T<:AbstractIndex",
    "page": "Docstrings",
    "title": "AcceleratedArrays.accelerate",
    "category": "method",
    "text": "accelerate(a, IndexType)\n\nReturn an AcceleratedArray wrapping a using the acceleration index of type T.\n\nThis operation will not modify a but the acceleration index will be invalidated (and become unsafe to use) if a is modified directly after the index is constructed. (See also accelerate!).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AcceleratedArrays.greaterthan-Tuple{Any}",
    "page": "Docstrings",
    "title": "AcceleratedArrays.greaterthan",
    "category": "method",
    "text": "greaterthan(x)\n\nReturn a value which is immediately larger than x. Than value is almost, but not quite, equal to x - there should be no other values (of any type) in between x and greaterthan(x) according to Julia\'s isless and isequal canonical total ordering.\n\nAmongst other uses, this may be used to create Intervals that exclude the starting point.\n\nSee also lessthan.\n\nExamples\n\njulia> isequal(10, greaterthan(10))\nfalse\n\njulia> isless(10, greaterthan(10))\ntrue\n\njulia> 0 ∈ 0..10\ntrue\n\njulia> 0 ∈ greaterthan(0)..10\nfalse\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AcceleratedArrays.lessthan-Tuple{Any}",
    "page": "Docstrings",
    "title": "AcceleratedArrays.lessthan",
    "category": "method",
    "text": "lessthan(x)\n\nReturn a value which is immediately smaller than x. Than value is almost, but not quite, equal to x - there should be no other values (of any type) in between x and lessthan(x) according to Julia\'s isless and isequal canonical total ordering.\n\nAmongst other uses, this may be used to create Intervals that exclude the end point.\n\nSee also greaterthan.\n\nExamples\n\njulia> isequal(lessthan(10), 10)\nfalse\n\njulia> isless(lessthan(10), 10)\ntrue\n\njulia> 10 ∈ 0..10\ntrue\n\njulia> 10 ∈ 0..lessthan(10)\nfalse\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AcceleratedArrays]\nOrder = [:type, :function]"
},

]}
