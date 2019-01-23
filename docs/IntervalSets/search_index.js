var documenterSearchIndex = {"docs": [

{
    "location": "#IntervalSets.AbstractInterval",
    "page": "Home",
    "title": "IntervalSets.AbstractInterval",
    "category": "type",
    "text": "A subtype of AbstractInterval{T} represents an interval subset of type T, that provides endpoints, closedendpoints.\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.ClosedInterval",
    "page": "Home",
    "title": "IntervalSets.ClosedInterval",
    "category": "type",
    "text": "A ClosedInterval(left, right) is an interval set that includes both its upper and lower bounds. In mathematical notation, the constructed range is [left, right].\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.Interval",
    "page": "Home",
    "title": "IntervalSets.Interval",
    "category": "type",
    "text": "An Interval{L,R}(left, right) where L,R are :open or :closed is an interval set containg x such that\n\nleft ≤ x ≤ right if L == R == :closed\nleft < x ≤ right if L == :open and R == :closed\nleft ≤ x < right if L == :closed and R == :open, or\nleft < x < right if L == R == :open\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.OpenInterval",
    "page": "Home",
    "title": "IntervalSets.OpenInterval",
    "category": "type",
    "text": "An TypedEndpointsInterval{:open,:open}(left, right) is an interval set that includes both its upper and lower bounds. In mathematical notation, the constructed range is (left, right).\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.:..-Tuple{Any,Any}",
    "page": "Home",
    "title": "IntervalSets.:..",
    "category": "method",
    "text": "iv = l..r\n\nConstruct a ClosedInterval iv spanning the region from l to r.\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.:±-Tuple{Any,Any}",
    "page": "Home",
    "title": "IntervalSets.:±",
    "category": "method",
    "text": "iv = center±halfwidth\n\nConstruct a ClosedInterval iv spanning the region from center - halfwidth to center + halfwidth.\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.closedendpoints-Union{Tuple{AI}, Tuple{AI}} where AI<:AbstractInterval",
    "page": "Home",
    "title": "IntervalSets.closedendpoints",
    "category": "method",
    "text": "A tuple of Bool\'s encoding whether the left/right endpoints are closed.\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.duration-Union{Tuple{TypedEndpointsInterval{:closed,:closed,T}}, Tuple{T}} where T<:Integer",
    "page": "Home",
    "title": "IntervalSets.duration",
    "category": "method",
    "text": "duration(iv)\n\ncalculates the the total number of integers or dates of an integer or date valued interval. For example, duration(0..1) is 2, while width(0..1) is 1.\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.endpoints-Union{Tuple{AI}, Tuple{AI}} where AI<:AbstractInterval",
    "page": "Home",
    "title": "IntervalSets.endpoints",
    "category": "method",
    "text": "A tuple containing the left and right endpoints of the interval.\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.isleftclosed-Tuple{AbstractInterval}",
    "page": "Home",
    "title": "IntervalSets.isleftclosed",
    "category": "method",
    "text": "Is the interval closed at the left endpoint?\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.isleftopen-Tuple{AbstractInterval}",
    "page": "Home",
    "title": "IntervalSets.isleftopen",
    "category": "method",
    "text": "Is the interval open at the left endpoint?\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.isrightclosed-Tuple{AbstractInterval}",
    "page": "Home",
    "title": "IntervalSets.isrightclosed",
    "category": "method",
    "text": "Is the interval closed at the right endpoint?\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.isrightopen-Tuple{AbstractInterval}",
    "page": "Home",
    "title": "IntervalSets.isrightopen",
    "category": "method",
    "text": "Is the interval open at the right endpoint?\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.leftendpoint-Tuple{AbstractInterval}",
    "page": "Home",
    "title": "IntervalSets.leftendpoint",
    "category": "method",
    "text": "The left endpoint of the interval.\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.rightendpoint-Tuple{AbstractInterval}",
    "page": "Home",
    "title": "IntervalSets.rightendpoint",
    "category": "method",
    "text": "The right endpoint of the interval.\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.width-Tuple{AbstractInterval}",
    "page": "Home",
    "title": "IntervalSets.width",
    "category": "method",
    "text": "w = width(iv)\n\nCalculate the width (max-min) of interval iv. Note that for integers l and r, width(l..r) = length(l:r) - 1.\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.Domain",
    "page": "Home",
    "title": "IntervalSets.Domain",
    "category": "type",
    "text": "A subtype of Domain{T} represents a subset of type T, that provides in.\n\n\n\n\n\n"
},

{
    "location": "#IntervalSets.TypedEndpointsInterval",
    "page": "Home",
    "title": "IntervalSets.TypedEndpointsInterval",
    "category": "type",
    "text": "A subtype of TypedEndpointsInterval{L,R,T} where L and R are :open or :closed, that represents an interval subset of type T, and provides endpoints.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [IntervalSets]\nOrder = [:type, :function]"
},

]}
