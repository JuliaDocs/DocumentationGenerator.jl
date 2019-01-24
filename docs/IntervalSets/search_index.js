var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IntervalSets.jl-1",
    "page": "Readme",
    "title": "IntervalSets.jl",
    "category": "section",
    "text": "Interval Sets for Julia(Image: Build Status)(Image: Coverage Status)This package represents intervals of an ordered set. For an interval spanning from a to b, all values x that lie between a and b are defined as being members of the interval.This package is intended to implement a \"minimal\" foundation for intervals upon which other packages might build. In particular, we encourage type-piracy for the reason that only one interval package can unambiguously define the .. and ± operators (see below).Currently this package defines one concrete type, ClosedInterval. These define the closed set spanning from a to b, meaning the interval is defined as the set {x} satisfying a ≤ x ≤ b. This is sometimes written [a,b] (mathematics syntax, not Julia syntax) or a..b."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "You can construct ClosedIntervals in a variety of ways:julia> using IntervalSets\n\njulia> ClosedInterval{Float64}(1,3)\n1.0..3.0\n\njulia> 0.5..2.5\n0.5..2.5\n\njulia> 1.5±1\n0.5..2.5Similarly, you can construct OpenIntervals and Interval{:open,:closed}s, and Interval{:closed,:open}:julia> OpenInterval{Float64}(1,3)\n1.0..3.0 (open)\n\njulia> OpenInterval(0.5..2.5)\n0.5..2.5 (open)\n\njulia> Interval{:open,:closed}(1,3)\n1..3 (open–closed)The ± operator may be typed as \\pm<TAB> (using Julia\'s LaTeX syntax tab-completion).Intervals also support the expected set operations:julia> 1.75 ∈ 1.5±1  # \\in<TAB>; can also use `in`\ntrue\n\njulia> 0 ∈ 1.5±1\nfalse\n\njulia> 1 ∈ OpenInterval(0..1)\nfalse\n\njulia> intersect(1..5, 3..7)   # can also use `a ∩ b`, where the symbol is \\cap<TAB>\n3..5\n\njulia> isempty(intersect(1..5, 10..11))\ntrue\n\njulia> (0.25..5) ∪ (3..7.4)    # \\cup<TAB>; can also use union()\n0.25..7.4When computing the union, the result must also be an interval:julia> (0.25..5) ∪ (6..7.4)\n------ ArgumentError ------------------- Stacktrace (most recent call last)\n\n [1] — union(::IntervalSets.ClosedInterval{Float64}, ::IntervalSets.ClosedInterval{Float64}) at closed.jl:34\n\nArgumentError: Cannot construct union of disjoint sets."
},

{
    "location": "autodocs/#IntervalSets.AbstractInterval",
    "page": "Docstrings",
    "title": "IntervalSets.AbstractInterval",
    "category": "type",
    "text": "A subtype of AbstractInterval{T} represents an interval subset of type T, that provides endpoints, closedendpoints.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.ClosedInterval",
    "page": "Docstrings",
    "title": "IntervalSets.ClosedInterval",
    "category": "type",
    "text": "A ClosedInterval(left, right) is an interval set that includes both its upper and lower bounds. In mathematical notation, the constructed range is [left, right].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.Interval",
    "page": "Docstrings",
    "title": "IntervalSets.Interval",
    "category": "type",
    "text": "An Interval{L,R}(left, right) where L,R are :open or :closed is an interval set containg x such that\n\nleft ≤ x ≤ right if L == R == :closed\nleft < x ≤ right if L == :open and R == :closed\nleft ≤ x < right if L == :closed and R == :open, or\nleft < x < right if L == R == :open\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.OpenInterval",
    "page": "Docstrings",
    "title": "IntervalSets.OpenInterval",
    "category": "type",
    "text": "An TypedEndpointsInterval{:open,:open}(left, right) is an interval set that includes both its upper and lower bounds. In mathematical notation, the constructed range is (left, right).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.:..-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "IntervalSets.:..",
    "category": "method",
    "text": "iv = l..r\n\nConstruct a ClosedInterval iv spanning the region from l to r.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.:±-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "IntervalSets.:±",
    "category": "method",
    "text": "iv = center±halfwidth\n\nConstruct a ClosedInterval iv spanning the region from center - halfwidth to center + halfwidth.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.closedendpoints-Union{Tuple{AI}, Tuple{AI}} where AI<:AbstractInterval",
    "page": "Docstrings",
    "title": "IntervalSets.closedendpoints",
    "category": "method",
    "text": "A tuple of Bool\'s encoding whether the left/right endpoints are closed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.duration-Union{Tuple{TypedEndpointsInterval{:closed,:closed,T}}, Tuple{T}} where T<:Integer",
    "page": "Docstrings",
    "title": "IntervalSets.duration",
    "category": "method",
    "text": "duration(iv)\n\ncalculates the the total number of integers or dates of an integer or date valued interval. For example, duration(0..1) is 2, while width(0..1) is 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.endpoints-Union{Tuple{AI}, Tuple{AI}} where AI<:AbstractInterval",
    "page": "Docstrings",
    "title": "IntervalSets.endpoints",
    "category": "method",
    "text": "A tuple containing the left and right endpoints of the interval.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.isleftclosed-Tuple{AbstractInterval}",
    "page": "Docstrings",
    "title": "IntervalSets.isleftclosed",
    "category": "method",
    "text": "Is the interval closed at the left endpoint?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.isleftopen-Tuple{AbstractInterval}",
    "page": "Docstrings",
    "title": "IntervalSets.isleftopen",
    "category": "method",
    "text": "Is the interval open at the left endpoint?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.isrightclosed-Tuple{AbstractInterval}",
    "page": "Docstrings",
    "title": "IntervalSets.isrightclosed",
    "category": "method",
    "text": "Is the interval closed at the right endpoint?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.isrightopen-Tuple{AbstractInterval}",
    "page": "Docstrings",
    "title": "IntervalSets.isrightopen",
    "category": "method",
    "text": "Is the interval open at the right endpoint?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.leftendpoint-Tuple{AbstractInterval}",
    "page": "Docstrings",
    "title": "IntervalSets.leftendpoint",
    "category": "method",
    "text": "The left endpoint of the interval.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.rightendpoint-Tuple{AbstractInterval}",
    "page": "Docstrings",
    "title": "IntervalSets.rightendpoint",
    "category": "method",
    "text": "The right endpoint of the interval.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.width-Tuple{AbstractInterval}",
    "page": "Docstrings",
    "title": "IntervalSets.width",
    "category": "method",
    "text": "w = width(iv)\n\nCalculate the width (max-min) of interval iv. Note that for integers l and r, width(l..r) = length(l:r) - 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.Domain",
    "page": "Docstrings",
    "title": "IntervalSets.Domain",
    "category": "type",
    "text": "A subtype of Domain{T} represents a subset of type T, that provides in.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IntervalSets.TypedEndpointsInterval",
    "page": "Docstrings",
    "title": "IntervalSets.TypedEndpointsInterval",
    "category": "type",
    "text": "A subtype of TypedEndpointsInterval{L,R,T} where L and R are :open or :closed, that represents an interval subset of type T, and provides endpoints.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [IntervalSets]\nOrder = [:type, :function]"
},

]}
