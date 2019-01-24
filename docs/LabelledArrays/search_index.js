var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LabelledArrays.jl-1",
    "page": "Readme",
    "title": "LabelledArrays.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)LabelledArrays.jl is a package which provides arrays with labels, i.e. they are arrays which map, broadcast, and all of that good stuff, but their components are labelled. Thus for instance you can set that the second component is named :second and retrieve it with A.second."
},

{
    "location": "#SLArrays-1",
    "page": "Readme",
    "title": "SLArrays",
    "category": "section",
    "text": "The SLArray and SLVector macros are for creating static LabelledArrays. First you create the type and then you can use that constructor to generate instances of the labelled array.ABC = @SLVector (:a,:b,:c)\nA = ABC(1,2,3)\nA.a == 1\n\nABCD = @SLArray (2,2) (:a,:b,:c,:d)\nB = ABCD(1,2,3,4)\nB.c == 3\nB[2,2] == B.dHere we have that A == [1,2,3] and for example A.b == 2. We can create a typed SLArray via:SVType = @SLVector Float64 (:a,:b,:c)Alternatively, you can also construct a static labelled array using the SLVector constructor by writing out the entries as keyword arguments:julia> SLVector(a=1, b=2, c=3)\n3-element SLArray{Tuple{3},1,(:a, :b, :c),Int64}:\n 1\n 2\n 3For general N-dimensional labelled arrays, you need to specify the size (Tuple{dim1,dim2,...}) as the type parameter to the SLArray constructor:julia> SLArray{Tuple{2,2}}(a=1, b=2, c=3, d=4)\n2×2 SLArray{Tuple{2,2},2,(:a, :b, :c, :d),Int64}:\n 1  3\n 2  4"
},

{
    "location": "#LArrays-1",
    "page": "Readme",
    "title": "LArrays",
    "category": "section",
    "text": "The LArrayzs are fully mutable arrays with labels. There is no performance loss by using the labelled instead of indexing. Using the macro with values and labels generates the labelled array with the given values:A = @LArray [1,2,3] (:a,:b,:c)\nA.a == 1One can generate a labelled array with undefined values by instead giving the dimensions:A = @LArray Float64 (2,2) (:a,:b,:c,:d)\nW = rand(2,2)\nA .= W\nA.d == W[2,2]or using an @LVector shorthand:A = @LVector Float64 (:a,:b,:c,:d)\nA .= rand(4)As with SLArray, alternative constructors exist that use the keyword argument form:julia> LVector(a=1, b=2, c=3)\n3-element LArray{Int64,1,(:a, :b, :c)}:\n 1\n 2\n 3\n\njulia> LArray((2,2); a=1, b=2, c=3, d=4) # need to specify size as first argument\n2×2 LArray{Int64,2,(:a, :b, :c, :d)}:\n 1  3\n 2  4"
},

{
    "location": "#Example:-Nice-DiffEq-Syntax-Without-A-DSL-1",
    "page": "Readme",
    "title": "Example: Nice DiffEq Syntax Without A DSL",
    "category": "section",
    "text": "LabelledArrays.jl are a way to get DSL-like syntax without a macro. In this case, we can solve differential equations with labelled components by making use of labelled arrays, and always refer to the components by name instead of index.Let\'s solve the Lorenz equation. Using @LVectors, we can do:using LabelledArrays, OrdinaryDiffEq\n\nfunction lorenz_f(du,u,p,t)\n  du.x = p.σ*(u.y-u.x)\n  du.y = u.x*(p.ρ-u.z) - u.y\n  du.z = u.x*u.y - p.β*u.z\nend\n\nu0 = @LArray [1.0,0.0,0.0] (:x,:y,:z)\np = @LArray [10.0, 28.0, 8/3]  (:σ,:ρ,:β)\ntspan = (0.0,10.0)\nprob = ODEProblem(lorenz_f,u0,tspan,p)\nsol = solve(prob,Tsit5())\n# Now the solution can be indexed as .x/y/z as well!\nsol[10].xWe can also make use of @SLVector:LorenzVector = @SLVector (:x,:y,:z)\nLorenzParameterVector = @SLVector (:σ,:ρ,:β)\n\nfunction f(u,p,t)\n  x = p.σ*(u.y-u.x)\n  y = u.x*(p.ρ-u.z) - u.y\n  z = u.x*u.y - p.β*u.z\n  LorenzVector(x,y,z)\nend\n\nu0 = LorenzVector(1.0,0.0,0.0)\np = LorenzParameterVector(10.0,28.0,8/3)\ntspan = (0.0,10.0)\nprob = ODEProblem(f,u0,tspan,p)\nsol = solve(prob,Tsit5())"
},

{
    "location": "#Relation-to-NamedTuples-1",
    "page": "Readme",
    "title": "Relation to NamedTuples",
    "category": "section",
    "text": "Julia\'s Base has NamedTuples in v0.7+. They are constructed as:p = (σ = 10.0,ρ = 28.0,β = 8/3)and they support p[1] and p.σ as well. The LVector, SLVector, LArray and SLArray constructors also support named tuples as their arguments:julia> LVector((a=1, b=2))\n2-element LArray{Int64,1,(:a, :b)}:\n 1\n 2\n\njulia> SLVector((a=1, b=2))\n2-element SLArray{Tuple{2},1,(:a, :b),Int64}:\n 1\n 2\n\njulia> LArray((2,2), (a=1, b=2, c=3, d=4))\n2×2 LArray{Int64,2,(:a, :b, :c, :d)}:\n 1  3\n 2  4\n\njulia> SLArray{Tuple{2,2}}((a=1, b=2, c=3, d=4))\n2×2 SLArray{Tuple{2,2},2,(:a, :b, :c, :d),Int64}:\n 1  3\n 2  4Converting to a named tuple from a labelled array x is available using convert(NamedTuple, x). Furthermore, pairs(x) creates an iterator that is functionally the same as pairs(convert(NamedTuple, x)), yielding :label => x.label for each label of the array.There are some crucial differences between a labelled array and a named tuple. Labelled arrays can have any dimensions while  named tuples are always 1D. A named tuple can have different types on each element, while an SLArray can only have one element type and furthermore it has the actions of a static vector. As a result SLArray has less element type information, which  improves compilation speed while giving more vector functionality than a NamedTuple. LArray also only has a single element type and, unlike a named tuple, is mutable."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LabelledArrays]\nOrder = [:type, :function]"
},

]}
