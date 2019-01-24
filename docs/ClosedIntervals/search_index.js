var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "Note: This type does not define interval arithmetic."
},

{
    "location": "#ClosedIntervals-1",
    "page": "Readme",
    "title": "ClosedIntervals",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)The ClosedIntervals module defines a data type ClosedInterval that represents a set of the form [a,b] = {x: a <= x <= b}. Typically, a ClosedInterval is created by specifying its end points:julia> using ClosedIntervals\n\njulia> ClosedInterval(3,7)\n[3,7]\n\njulia> ClosedInterval(8,2)\n[2,8]\n\njulia> a = (6,0)\n(6,0)\n\njulia> 5 .. 2  # dot-dot notation works to create a ClosedInterval\n[2,5]\n\njulia> 5 ± 2   # a ± b creates the interval from a-b to a+b\n[3,7]\n\njulia> ClosedInterval(a)\n[0,6]\n\njulia> ClosedInterval(1, 2.3)  # type promotion of end point\n[1.0,2.3]This example illustrates a few points.First, interval is printed in standard mathematical notation usingsquare brackets.Second, the end points can be specified in either order.\nThird, the interval can be constructed from a tuple.\nFinally, the type of the two end points need not be the same.Julia\'s promotion mechanism selects an appropriate common type for the two end points.The two end points of the interval may be the same, in which case it is enough to name only one of the end points:julia> ClosedInterval(5)\n[5,5]If no arguments are provided to ClosedInterval the result is the unit interval [0,1] with Float64 end points. Or, if we supply a type T, then the result is again [0,1], but with type T end points.julia> ClosedInterval()\n[0.0,1.0]\n\njulia> ClosedInterval(Int)\n[0,1]\n\njulia> typeof(ans)\nClosedInterval{Int64} (constructor with 1 method)We also provide an empty interval constructed with EmptyInterval, like this:julia> X = EmptyInterval()\n[]\n\njulia> typeof(X)\nClosedInterval{Float64} (constructor with 1 method)\n\njulia> Y = EmptyInterval(Int)\n[]\n\njulia> typeof(Y)\nClosedInterval{Int64} (constructor with 1 method)Notice that empty intervals are printed as a pair of square brackets with nothing between."
},

{
    "location": "#Properties-1",
    "page": "Readme",
    "title": "Properties",
    "category": "section",
    "text": "The functions left and right are used to retrieve the left and right end points of an interval. Use length to get the length of the interval (difference of the end points).julia> A = ClosedInterval(6,2)\n[2,6]\n\njulia> left(A)\n2\n\njulia> right(A)\n6\n\njulia> length(A)\n4Empty intervals have length equal to zero. The left and right functions applied to empty intervals throw an error. Use isempty to test if an interval is empty.julia> isempty(A)\nfalse\n\njulia> isempty(X)\ntrueTo test if a given value lies inside an interval, use in:julia> A = ClosedInterval(3,10)\n[3,10]\n\njulia> in(5,A)\ntrue\n\njulia> in(1,A)\nfalse\n\njulia> X = EmptyInterval(Int)\n[]\n\njulia> in(0,A)\nfalseNotice that testing for membership in an empty interval always return false."
},

{
    "location": "#Operations-1",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": "Two operations are defined for intervals.The intersection * is the largest interval containedin both. If the intervals are disjoint, this returns an empty interval. Also available as ∧.The sum + is the smallest interval containing both(i.e., the join of the intervals). If the  intervals overlap, then this is the same as their union. Note that the empty interval serves as an identity element for this operation. Also available as ∨.julia> A = ClosedInterval(1,5)\n[1,5]\n\njulia> B = ClosedInterval(3,7)\n[3,7]\n\njulia> A*B\n[3,5]\n\njulia> A+B\n[1,7]\n\njulia> C = ClosedInterval(1,3)\n[1,3]\n\njulia> D = ClosedInterval(5,6)\n[5,6]\n\njulia> C*D\n[]\n\njulia> C+D\n[1,6]"
},

{
    "location": "#Infinite-Intervals-1",
    "page": "Readme",
    "title": "Infinite Intervals",
    "category": "section",
    "text": "When intervals have end points that are floating points numbers, it is possible to work with infinite intervals. Everything works as one might expect.julia> A = ClosedInterval(0., Inf)\n[0.0,Inf]\n\njulia> B = ClosedInterval(1., -Inf)\n[-Inf,1.0]\n\njulia> A*B\n[0.0,1.0]\n\njulia> A+B\n[-Inf,Inf]\n\njulia> length(A)\nInf\n\njulia> in(2.,A)\ntrue\n\njulia> in(2.,B)\nfalse"
},

{
    "location": "#Comparison-1",
    "page": "Readme",
    "title": "Comparison",
    "category": "section",
    "text": ""
},

{
    "location": "#Equality-1",
    "page": "Readme",
    "title": "Equality",
    "category": "section",
    "text": "The usual comparison operators may be applied to pairs of intervals. As usual, equality may be checked with == (or isequal)."
},

{
    "location": "#Subset-1",
    "page": "Readme",
    "title": "Subset",
    "category": "section",
    "text": "Use issubset(J,K) to  test if J is contained in K. The following comparison operations work as expected:J ⊆ K – subset, same as issubset(J,K)\nJ ⊊ K – proper subset\nJ ⊇ K – superset\nJ ⊋ K – proper superset"
},

{
    "location": "#Lexicographic-total-order-1",
    "page": "Readme",
    "title": "Lexicographic total order",
    "category": "section",
    "text": "We also define isless for intervals as follows. An empty interval is defined to be less than all nonempty intervals. Otherwise, we sort intervals lexicographically. That is, interval [a,b] is less than [c,d] provided either (a) a<c or (b) (a==c) && (b<d).Intervals of mixed type may be compared. For example:julia> A = ClosedInterval(1,2)\n[1,2]\n\njulia> B = ClosedInterval(1.,2.)\n[1.0,2.0]\n\njulia> A==B\ntrue\n\njulia> A = ClosedInterval(-Inf,3.)\n[-Inf,3.0]\n\njulia> B = ClosedInterval(3,5)\n[3,5]\n\njulia> A < B\ntrue"
},

{
    "location": "#Completely-to-the-left-of-partial-order-1",
    "page": "Readme",
    "title": "Completely-to-the-left-of partial order",
    "category": "section",
    "text": "We use << to test if one interval is completely to the left of another. That is [a,b]<<[c,d] exactly when b<c. In this case, comparing an empty interval to any other yields false. Likewise, we use >> to test if one interval is to the right of another.julia> A = ClosedInterval(1,5);\n\njulia> B = ClosedInterval(3,8);\n\njulia> C = ClosedInterval(7,9);\n\njulia> A<<B\nfalse\n\njulia> A<<C\ntrue\n\njulia> B<<C\nfalse\n\njulia> C>>A\ntrue\n"
},

{
    "location": "#Non-numeric-end-points-1",
    "page": "Readme",
    "title": "Non-numeric end points",
    "category": "section",
    "text": "Normally, the end points of a ClosedInterval are real numbers (subtypes of Real). However, we do permit the end point types to be any Julia objects that can be compared with <. For example:julia> J = ClosedInterval(\"charlie\", \"bravo\")\n[bravo,charlie]\n\njulia> K = ClosedInterval(\"oscar\", \"yankee\")\n[oscar,yankee]\n\njulia> J+K\n[bravo,yankee]\n\njulia> in(\"romeo\", K)\ntrueHowever, some operations will fail if they rely on numeric operations. For example:julia> length(J)\nERROR: MethodError: `-` has no method matching -(::String, ::String)\n\njulia> J*K\nERROR: MethodError: no method matching zero(::Type{String})<hr>"
},

{
    "location": "#ClosedIntervals-vs-IntervalSets-1",
    "page": "Readme",
    "title": "ClosedIntervals vs IntervalSets",
    "category": "section",
    "text": "The IntervalSets module also defines a ClosedInterval type that has some notable differences in how intervals are handled."
},

{
    "location": "#Construction-1",
    "page": "Readme",
    "title": "Construction",
    "category": "section",
    "text": "In ClosedIntervals, the end points may be specified in either order, while in IntervalSets if the left end point is greater than the right, an empty interval results.julia> using ClosedIntervals\n\njulia> ClosedInterval(1,2) == ClosedInterval(2,1)\ntruejulia> using IntervalSets\n\njulia> ClosedInterval(1,2) == ClosedInterval(2,1)\nfalse"
},

{
    "location": "#Union/Join-1",
    "page": "Readme",
    "title": "Union/Join",
    "category": "section",
    "text": "In the ClosedIntervals module, the join J ∨ K or J + K of two intervals is the smallest interval containing both. In particular, we permit the join of disjoint intervals. The intervals may be disjoint.julia> ClosedInterval(1,2) ∨ ClosedInterval(3,4)\n[1,4]The IntervalSets module provides for the union of intervals. If the two intervals are disjoint, their set-theoretic union is not an interval and results in an error.julia> ClosedInterval(1,2) ∪ ClosedInterval(3,4)\nERROR: ArgumentError: Cannot construct union of disjoint sets.Note that the intersection (IntervalSets) and meet (ClosedIntervals) of two intervals are the same."
},

{
    "location": "#Length/Width-1",
    "page": "Readme",
    "title": "Length/Width",
    "category": "section",
    "text": "The two modules have different implementations of the length function.In the ClosedIntervals module, length is simply the difference betweenthe right and left end point values.In IntervalSets, one can only apply length to intervals with integerend points, in which case the length is the number of integers in the set. Instead, use width to determine the distance between the end points.julia> using ClosedIntervals\n\njulia> length(ClosedInterval(1,4))\n3\n\njulia> length(ClosedInterval(1.0,4.0))\n3.0julia> using IntervalSets\n\njulia> length(ClosedInterval(1,4))\n4\n\njulia> length(ClosedInterval(1.0,4.0))\nERROR: MethodError: no method matching length(::ClosedInterval{Float64})\n\njulia> width(ClosedInterval(1.0,4.0))\n3.0"
},

{
    "location": "autodocs/#AbstractLattices.:∧-Tuple{ClosedInterval,ClosedInterval}",
    "page": "Docstrings",
    "title": "AbstractLattices.:∧",
    "category": "method",
    "text": "J ∧ K is the largest ClosedInterval contained in both. See also *.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractLattices.:∨-Tuple{ClosedInterval,ClosedInterval}",
    "page": "Docstrings",
    "title": "AbstractLattices.:∨",
    "category": "method",
    "text": "J ∨ K is the smalles ClosedInterval containing both. See also +.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ClosedIntervals.EmptyInterval",
    "page": "Docstrings",
    "title": "ClosedIntervals.EmptyInterval",
    "category": "function",
    "text": "EmptyInterval(T::DataType = Float64) creates an empty ClosedInterval of a given type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ClosedIntervals.left-Tuple{ClosedInterval}",
    "page": "Docstrings",
    "title": "ClosedIntervals.left",
    "category": "method",
    "text": "For a ClosedInterval I, left(I) returns its left end point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ClosedIntervals.right-Tuple{ClosedInterval}",
    "page": "Docstrings",
    "title": "ClosedIntervals.right",
    "category": "method",
    "text": "For a ClosedInterval I, right(I) returns its right end point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.:*-Tuple{ClosedInterval,ClosedInterval}",
    "page": "Docstrings",
    "title": "Base.:*",
    "category": "method",
    "text": "For ClosedIntervals J and K, J*K is their intersection. Also available as J ∧ K.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.:+-Tuple{ClosedInterval,ClosedInterval}",
    "page": "Docstrings",
    "title": "Base.:+",
    "category": "method",
    "text": "For ClosedIntervals J and K, J+K is the smallest ClosedInterval containing them both. This is also available as J ∨ K.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.:<<-Tuple{ClosedInterval,ClosedInterval}",
    "page": "Docstrings",
    "title": "Base.:<<",
    "category": "method",
    "text": "For ClosedIntervals I and J, I<<J tests if I is completely to the left of J.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.:>>-Tuple{ClosedInterval,ClosedInterval}",
    "page": "Docstrings",
    "title": "Base.:>>",
    "category": "method",
    "text": "For ClosedIntervals I and J, I>>J tests if I is completely to the right of J.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.in-Tuple{Any,ClosedInterval}",
    "page": "Docstrings",
    "title": "Base.in",
    "category": "method",
    "text": "For a number x and a ClosedInterval I (of the same type) in(x,I) tests if x is contained in the interval I.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.isempty-Tuple{ClosedInterval}",
    "page": "Docstrings",
    "title": "Base.isempty",
    "category": "method",
    "text": "For a ClosedInterval I, isempty(I) tests if I is an empty interval.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.isless-Tuple{ClosedInterval,ClosedInterval}",
    "page": "Docstrings",
    "title": "Base.isless",
    "category": "method",
    "text": "Lexicographic ordering of ClosedIntervals.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.length-Union{Tuple{ClosedInterval{T}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "Base.length",
    "category": "method",
    "text": "length(I) is the length of the ClosedInterval I.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ClosedIntervals]\nOrder = [:type, :function]"
},

]}
