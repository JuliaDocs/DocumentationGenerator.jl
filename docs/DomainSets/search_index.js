var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DomainSets.jl-1",
    "page": "Readme",
    "title": "DomainSets.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)DomainSets.jl is a package designed to represent simple infinite sets, that can be used to encode domains of functions. For example, the domain of the function log(x::Float64) is the infinite open interval, which is represented by the type HalfLine{Float64}()."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#Intervals-1",
    "page": "Readme",
    "title": "Intervals",
    "category": "section",
    "text": "DomainSets.jl uses IntervalSets.jl for Closed and open intervals."
},

{
    "location": "#Rectangles-1",
    "page": "Readme",
    "title": "Rectangles",
    "category": "section",
    "text": "Rectangles can be constructed as a product of intervals, where the elements of the domain are SVector{2}:julia> using DomainSets, StaticArrays; import DomainSets: ×\n\njulia> SVector(1,2) in (-1..1) × (0..3)\ntrue"
},

{
    "location": "#Circles-and-Spheres-1",
    "page": "Readme",
    "title": "Circles and Spheres",
    "category": "section",
    "text": "A UnitHyperSphere{N,T}  contains x::SVector{N,T} if norm(x) == one(T). UnitCircle and UnitSphere are two important cases:julia> SVector(1,0) in UnitCircle()\ntrue\n\njulia> SVector(1,0,0) in UnitSphere()\ntrue"
},

{
    "location": "#Disks-and-Balls-1",
    "page": "Readme",
    "title": "Disks and Balls",
    "category": "section",
    "text": "A UnitHyperBall{N,T}  contains x::SVector{N,T} if norm(x) ≤ one(T). UnitDisk and UnitHyperBall are two important cases:julia> SVector(0.1,0.2) in UnitDisk()\ntrue\n\njulia> SVector(0.1,0.2,0.3) in UnitBall()\ntrue"
},

{
    "location": "#Union,-intersection,-and-setdiff-of-domains-1",
    "page": "Readme",
    "title": "Union, intersection, and setdiff of domains",
    "category": "section",
    "text": "Domains can be unioned and intersected together:julia> d = UnitCircle() ∪ 2UnitCircle();\n\njulia> in.([SVector(1,0),SVector(0,2), SVector(1.5,1.5)], Ref(d))\n3-element BitArray{1}:\n  true\n  true\n false\n\njulia> d = UnitCircle() ∩ (2UnitCircle() + SVector(1.0,0.0))\nthe intersection of 2 domains:\n	1.	: UnitHyperSphere{2,Float64}()\n	2.	: A mapped domain based on UnitHyperSphere{2,Float64}()\n\njulia> SVector(1,0) in d\nfalse\n\njulia> SVector(-1,0) in d\ntrue"
},

{
    "location": "#The-domain-interface-1",
    "page": "Readme",
    "title": "The domain interface",
    "category": "section",
    "text": "A domain is any type that implements the functions eltype and in. If d is an instance of a type that implements the domain interface, then the domain consists of all x that is an eltype(d) such that x in d returns true.Domains often represent continuous mathematical domains, for example, a domain d  representing the interval [0,1] would have eltype(d) == Int but still have 0.2 in d return true."
},

{
    "location": "#The-Domain-type-1",
    "page": "Readme",
    "title": "The Domain type",
    "category": "section",
    "text": "DomainSets.jl contains an abstract type Domain{T}. All subtypes of Domain{T} must implement the domain interface, and in addition support convert(Domain{T}, d)."
},

{
    "location": "autodocs/#DomainSets.AbstractMap",
    "page": "Docstrings",
    "title": "DomainSets.AbstractMap",
    "category": "type",
    "text": "A map is any transformation of the form y = f(x), where x has type S and y has type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.AffineMap",
    "page": "Docstrings",
    "title": "DomainSets.AffineMap",
    "category": "type",
    "text": "AffineMap represents y = a*x + b, i.e. it combines a LinearMap and a Translation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.CartToPolarMap",
    "page": "Docstrings",
    "title": "DomainSets.CartToPolarMap",
    "category": "type",
    "text": "A Cartesion to Polar map. First dimension is interpreted as radial distance, second as an angle. The unit circle is mapped to a square [-1,1]x[-1,1]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ChebyshevInterval",
    "page": "Docstrings",
    "title": "DomainSets.ChebyshevInterval",
    "category": "type",
    "text": "The closed interval [-1,1].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.CompositeMap",
    "page": "Docstrings",
    "title": "DomainSets.CompositeMap",
    "category": "type",
    "text": "The composition of several maps.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ConstantMap",
    "page": "Docstrings",
    "title": "DomainSets.ConstantMap",
    "category": "type",
    "text": "The constant map f(x) = c.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.DerivedDomain",
    "page": "Docstrings",
    "title": "DomainSets.DerivedDomain",
    "category": "type",
    "text": "DerivedDomain is an abstract supertype for domains that are implemented in terms of another domain using composition. DerivedDomain transfers the interface of Domain to this superdomain.\n\nA concrete subtype that inherits from DerivedDomain and stores a superdomain is functionally equivalent to that superdomain. Any properties of the superdomain can be modified by overriding a suitable function. For example, in of the concrete domain may be implemented in terms of the in of the superdomain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.EuclideanDomain",
    "page": "Docstrings",
    "title": "DomainSets.EuclideanDomain",
    "category": "type",
    "text": "A EuclideanDomain is any domain whose eltype is SVector{N,T}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.HalfLine",
    "page": "Docstrings",
    "title": "DomainSets.HalfLine",
    "category": "type",
    "text": "The half-open positive halfline [0,∞).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.IdentityMap",
    "page": "Docstrings",
    "title": "DomainSets.IdentityMap",
    "category": "type",
    "text": "The identity map.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.IntersectionDomain",
    "page": "Docstrings",
    "title": "DomainSets.IntersectionDomain",
    "category": "type",
    "text": "An IntersectionDomain represents the intersection of a set of domains.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.LinearMap",
    "page": "Docstrings",
    "title": "DomainSets.LinearMap",
    "category": "type",
    "text": "A LinearMap is an affine map that represents y = a*x, where a can have any type such that a*x maps type S to type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.NegativeHalfLine",
    "page": "Docstrings",
    "title": "DomainSets.NegativeHalfLine",
    "category": "type",
    "text": "The open negative halfline (-∞,0).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.Point",
    "page": "Docstrings",
    "title": "DomainSets.Point",
    "category": "type",
    "text": "Point(x)\n\nrepresents a single point at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.PolarToCartMap",
    "page": "Docstrings",
    "title": "DomainSets.PolarToCartMap",
    "category": "type",
    "text": "A Polar to Cartesian map. The angle is mapped to the second dimension, radius to the first. A square [-1,1]x[-1,1] is mapped to the unit circle\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ProductDomain",
    "page": "Docstrings",
    "title": "DomainSets.ProductDomain",
    "category": "type",
    "text": "A ProductDomain represents the cartesian product of other domains.\n\nA product domain has two eltypes, an internal type S and an external type T. The internal type S is a tuple containing the eltypes of the elements of the product domain. The external eltype T is a type whose associated space is isomorphic to that of S, but which has been simplified. (See also simplify_product_eltype).\n\nFor example, if S is Tuple{Float64,Float64}, then T is SVector{2,Float64}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ProductMap",
    "page": "Docstrings",
    "title": "DomainSets.ProductMap",
    "category": "type",
    "text": "A product map is diagonal and acts on each of the components of x separately: y = f(x) becomes y_i = f_i(x_i).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.Translation",
    "page": "Docstrings",
    "title": "DomainSets.Translation",
    "category": "type",
    "text": "Translation represents y = x + v, where v is a vector in the same space as x and y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.UnionDomain",
    "page": "Docstrings",
    "title": "DomainSets.UnionDomain",
    "category": "type",
    "text": "A UnionDomain represents the union of a set of domains.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.UnitHyperBall",
    "page": "Docstrings",
    "title": "DomainSets.UnitHyperBall",
    "category": "type",
    "text": "The unit ball (of radius 1) in N dimensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.UnitHyperSphere",
    "page": "Docstrings",
    "title": "DomainSets.UnitHyperSphere",
    "category": "type",
    "text": "The unit sphere (of radius 1) in N dimensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.UnitInterval",
    "page": "Docstrings",
    "title": "DomainSets.UnitInterval",
    "category": "type",
    "text": "The closed unit interval [0,1].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ℂ",
    "page": "Docstrings",
    "title": "DomainSets.ℂ",
    "category": "type",
    "text": "The complex plane with Float64 real and imaginar parts (ℂ = \\BbbC).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ℚ",
    "page": "Docstrings",
    "title": "DomainSets.ℚ",
    "category": "type",
    "text": "The set of rational numbers of type Rational{Int} (ℚ = \\BbbQ).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ℝ",
    "page": "Docstrings",
    "title": "DomainSets.ℝ",
    "category": "type",
    "text": "The set of reals of type Float64 (ℝ = \\BbbR).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ℝ1",
    "page": "Docstrings",
    "title": "DomainSets.ℝ1",
    "category": "type",
    "text": "The space ℝ^1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ℝ2",
    "page": "Docstrings",
    "title": "DomainSets.ℝ2",
    "category": "type",
    "text": "The space ℝ^2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ℝ3",
    "page": "Docstrings",
    "title": "DomainSets.ℝ3",
    "category": "type",
    "text": "The space ℝ^3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ℝ4",
    "page": "Docstrings",
    "title": "DomainSets.ℝ4",
    "category": "type",
    "text": "The space ℝ^4\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ℤ",
    "page": "Docstrings",
    "title": "DomainSets.ℤ",
    "category": "type",
    "text": "The set of integers of type Int (ℤ = \\BbbZ).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.:↪",
    "page": "Docstrings",
    "title": "DomainSets.:↪",
    "category": "function",
    "text": "The symbol ↪ (\\hookrightarrow) is a synonym for embedded.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.:≅",
    "page": "Docstrings",
    "title": "DomainSets.:≅",
    "category": "function",
    "text": "The symbol ≅ (\\cong) is a synonym for isomorphic.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.apply_inverse-Tuple{AbstractMap,Any}",
    "page": "Docstrings",
    "title": "DomainSets.apply_inverse",
    "category": "method",
    "text": "Apply the inverse of the given map. By default, this constructs the inverse of m. However, some maps know its own inverse and may provide a more efficient implementation of apply_inverse.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.cartesianproduct-Tuple{}",
    "page": "Docstrings",
    "title": "DomainSets.cartesianproduct",
    "category": "method",
    "text": "Create a cartesian product of the supplied arguments.\n\nThe function cartesianproduct applies some simplifications and does not necessarily return a Product type.\n\nA cartesianproduct(a) with just a single element returns a.\n\nFor integer n, cartesianproduct(a, n) becomes cartesianproduct(a, a, ..., a). A type-safe variant is cartesianproduct(a, Val{N}).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ellipse-Tuple{Number,Number}",
    "page": "Docstrings",
    "title": "DomainSets.ellipse",
    "category": "method",
    "text": "Create an ellipse curve with semi-axes lengths a and b respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ellipse_shape-Tuple{Number,Number}",
    "page": "Docstrings",
    "title": "DomainSets.ellipse_shape",
    "category": "method",
    "text": "Create an ellipse-shaped domain with semi-axes lengths a and b respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.embedded-Tuple{DomainSets.GeometricSpace,DomainSets.GeometricSpace}",
    "page": "Docstrings",
    "title": "DomainSets.embedded",
    "category": "method",
    "text": "Returns true if A is embedded in B.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.interval_map-NTuple{4,Any}",
    "page": "Docstrings",
    "title": "DomainSets.interval_map",
    "category": "method",
    "text": "Map the interval [a,b] to the interval [c,d].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.isomorphic-Tuple{DomainSets.GeometricSpace,DomainSets.GeometricSpace}",
    "page": "Docstrings",
    "title": "DomainSets.isomorphic",
    "category": "method",
    "text": "Returns true if A is isomorphic to B, and false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.issubspace-Union{Tuple{T}, Tuple{Type{GeometricSpace{T}},Type{GeometricSpace{T}}}} where T",
    "page": "Docstrings",
    "title": "DomainSets.issubspace",
    "category": "method",
    "text": "A space A is a subspace of space B if B is a supertype of A.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.left_inverse-Tuple{AbstractMap}",
    "page": "Docstrings",
    "title": "DomainSets.left_inverse",
    "category": "method",
    "text": "Return a left inverse of the given map. This left inverse mli is not unique, but in any case it is such that (mli ∘ m) * x = x for each x in the domain of m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.linear_map-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "DomainSets.linear_map",
    "category": "method",
    "text": "Make the linear map y = a*x + b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.origin-Tuple{DomainSets.GeometricSpace}",
    "page": "Docstrings",
    "title": "DomainSets.origin",
    "category": "method",
    "text": "The origin of a space is its zero element.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.right_inverse-Tuple{AbstractMap}",
    "page": "Docstrings",
    "title": "DomainSets.right_inverse",
    "category": "method",
    "text": "Return a right inverse of the given map. This right inverse mri is not unique, but in any case it is such that (m ∘ mri) * y = y for each y in the range of m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.scaling_map-NTuple{4,Any}",
    "page": "Docstrings",
    "title": "DomainSets.scaling_map",
    "category": "method",
    "text": "Scale the variables by a, b, c and d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.scaling_map-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "DomainSets.scaling_map",
    "category": "method",
    "text": "Scale the variables by a, b and c.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.scaling_map-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "DomainSets.scaling_map",
    "category": "method",
    "text": "Scale the variables by a and b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.scaling_map-Tuple{Any}",
    "page": "Docstrings",
    "title": "DomainSets.scaling_map",
    "category": "method",
    "text": "Scale all variables by a.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.spaceof-Union{Tuple{T}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "DomainSets.spaceof",
    "category": "method",
    "text": "Return the geometric space of all elements with the same type as x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.spacetype-Union{Tuple{Type{T}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "DomainSets.spacetype",
    "category": "method",
    "text": "Return the geometric space type with eltype T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.subeltype-Tuple{Domain}",
    "page": "Docstrings",
    "title": "DomainSets.subeltype",
    "category": "method",
    "text": "If the type T is a container type, the elements of T may have a different subeltype. If T is not a container, subeltype simply evaluates to T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.subeltype-Union{Tuple{Type{GeometricSpace{T}}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "DomainSets.subeltype",
    "category": "method",
    "text": "Some geometric spaces have an eltype that is composed in terms of an underlying eltype. For example, Complex{Float64} and SVector{2,Float64} are based on Float64, which is their subeltype.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.superspace-Union{Tuple{Type{GeometricSpace{T}}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "DomainSets.superspace",
    "category": "method",
    "text": "Return the superspace of the given geometric space A. The superspace of A should be larger than A, and A should be embedded in it.\n\nSuperspaces are used to automatically discover embeddings and promotion rules. Its role is analogous to that of supertype in the Julia type system. Indeed, AnySpace is a superspace of all spaces, much like Any is a supertype of all types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.AbstractAffineMap",
    "page": "Docstrings",
    "title": "DomainSets.AbstractAffineMap",
    "category": "type",
    "text": "An affine map has the general form y = a*x + b, with types for a, b, x and y such that the expression is valid.\n\nWe use matrix and vector to denote a and b respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.AbstractConstantMap",
    "page": "Docstrings",
    "title": "DomainSets.AbstractConstantMap",
    "category": "type",
    "text": "The supertype of several maps that map to a constant value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.AngleMap",
    "page": "Docstrings",
    "title": "DomainSets.AngleMap",
    "category": "type",
    "text": "AngleMap is a left inverse of UnitCircleMap. A 2D vector x is projected onto the intersection point with the unit circle of the line connecting x to the origin. The angle of this point, scaled to the interval [0,1), is the result.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.AnySpace",
    "page": "Docstrings",
    "title": "DomainSets.AnySpace",
    "category": "type",
    "text": "AnySpace is the superset of all possible geometric spaces.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ArraySpace",
    "page": "Docstrings",
    "title": "DomainSets.ArraySpace",
    "category": "type",
    "text": "A general Array space, with arrays of dimension N and element type T. Note that the arrays can have any size. Thus, ArraySpace{2,Float64} contains all possible matrices of size m × n for any combination of m,n ∈ ℕ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.BidirectionalMappedDomain",
    "page": "Docstrings",
    "title": "DomainSets.BidirectionalMappedDomain",
    "category": "type",
    "text": "A BidirectionalMappedDomain stores the source domain and both the map f and a left inverse.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ComplexSpace",
    "page": "Docstrings",
    "title": "DomainSets.ComplexSpace",
    "category": "type",
    "text": "A geometric space with complex type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.EmbeddingMap",
    "page": "Docstrings",
    "title": "DomainSets.EmbeddingMap",
    "category": "type",
    "text": "A map between embedded spaces.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.FixedInterval",
    "page": "Docstrings",
    "title": "DomainSets.FixedInterval",
    "category": "type",
    "text": "The abstract type FixedInterval is the supertype of intervals with endpoints determined by the type, rather than field values. Examples include UnitInterval and ChebyshevInterval.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ForwardMappedDomain",
    "page": "Docstrings",
    "title": "DomainSets.ForwardMappedDomain",
    "category": "type",
    "text": "A ForwardMappedDomain stores the source domain and the forward map f, which maps source to target.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.GeometricSpace",
    "page": "Docstrings",
    "title": "DomainSets.GeometricSpace",
    "category": "type",
    "text": "A domain is always a subset of a geometric space. A geometric space is completely characterized by the type T of its elements. There are no restrictions on concrete values: each instance of type T belongs to GeometricSpace{T}. Conversely, each numeric type T can give rise to only one geometric space.\n\nThe goal of GeometricSpace is to provide a lightweight framework for converting elements between spaces. Two features are embeddings and isomorphisms. It is lightweight because the space is characterized by the type and has no state, hence it can be inferred from any variable based only on its type. A restriction that results from this choice is that there can only be one type of embedding from one space to another. More general embeddings could be implemented using domains or specific maps.\n\nEmbeddings: A space A is embedded in a space B if each element of A corresponds to an element of B. In that case an element of A can be promoted (using promote_space) to an element of type B. This is not necessarily the same as the promotion of the type of A to the type of B. For example, a scalar can be embedded into a two-dimensional space (say with the second component equal to zero). It would be undesirable to implement that using the standard Julia promotion system, since it would apply to all Julia code used concurrently.\n\nIsomorphisms: If A is embedded in B and B is embedded in A than they A and B are isomorphic. In that case, an element of A can be converted to an element of B and vice-versa. The conversion is invertible. One example is the isomorphism between ℝ^2 and ℂ.\n\nNew spaces can be defined by defining a new numeric type. Embeddings and isomorphisms are defined by defining new embedding_reduction and isomorphism_reduction rules, along with conversiong using convert_space and restrict_space. See the documentation of these functions for information on how to use them.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.IntegerSpace",
    "page": "Docstrings",
    "title": "DomainSets.IntegerSpace",
    "category": "type",
    "text": "A geometric space with integer type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.InverseMappedDomain",
    "page": "Docstrings",
    "title": "DomainSets.InverseMappedDomain",
    "category": "type",
    "text": "An InverseMappedDomain stores the source and the inverse of the map f.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.IsomorphismMap",
    "page": "Docstrings",
    "title": "DomainSets.IsomorphismMap",
    "category": "type",
    "text": "A map between isomorphic spaces.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.MappedDomain",
    "page": "Docstrings",
    "title": "DomainSets.MappedDomain",
    "category": "type",
    "text": "There are three objects involved in the mapping of a domain:\n\nthe original domain (denoted source)\nthe map (denoted f)\nthe resulting domain (target)\n\nIf f maps a variable of type S to a variable of type T, then the source domain has eltype S and the target domain has eltype T.\n\nThe characteristic function of the resulting domain is defined in terms of the inverse of the map f, i.e.:\n\nin(x, target) = in(inv(f)*x, source)\n\nConcrete mapped domains can be implemented in various ways, e.g. by storing source and f, or by storing source and inv(f), ...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ProductSpace",
    "page": "Docstrings",
    "title": "DomainSets.ProductSpace",
    "category": "type",
    "text": "By convention a geometric space with a tuple type T represents a product space of the individual entries of T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.RationalSpace",
    "page": "Docstrings",
    "title": "DomainSets.RationalSpace",
    "category": "type",
    "text": "A geometric space with rational types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.RealSpace",
    "page": "Docstrings",
    "title": "DomainSets.RealSpace",
    "category": "type",
    "text": "A geometric space with floating point type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.RestrictionMap",
    "page": "Docstrings",
    "title": "DomainSets.RestrictionMap",
    "category": "type",
    "text": "A restriction map from a space to an embedded space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.TypeFactory",
    "page": "Docstrings",
    "title": "DomainSets.TypeFactory",
    "category": "type",
    "text": "A TypeFactory{T} is a convenience type to simplify construction of a type.\n\nHaving t = TypeFactory{T} overrides getindex such that t[a] invokes T(a).\n\nFor example:\n\nv = TypeFactory{SVector}\nv[0.1,0.2]\n\nmakes an SVector{2,Float64}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.UnitCircleMap",
    "page": "Docstrings",
    "title": "DomainSets.UnitCircleMap",
    "category": "type",
    "text": "The map [cos(2πt), sin(2πt)] from [0,1) to the unit circle in ℝ^2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.UnityMap",
    "page": "Docstrings",
    "title": "DomainSets.UnityMap",
    "category": "type",
    "text": "The unity map f(x) = 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.VectorSpace",
    "page": "Docstrings",
    "title": "DomainSets.VectorSpace",
    "category": "type",
    "text": "A Euclidean space with static vector types. It is the space of all vectors of fixed length N, with entries of type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.ZeroMap",
    "page": "Docstrings",
    "title": "DomainSets.ZeroMap",
    "category": "type",
    "text": "The zero map f(x) = 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets._product_eltype-Tuple{Any}",
    "page": "Docstrings",
    "title": "DomainSets._product_eltype",
    "category": "method",
    "text": "Create an eltype that is suitable for a product domain. The result is a tuple type, where each of the elements is the eltype of the corresponding element of the product domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.affine_composition-Tuple{DomainSets.AbstractAffineMap,DomainSets.AbstractAffineMap}",
    "page": "Docstrings",
    "title": "DomainSets.affine_composition",
    "category": "method",
    "text": "Compute the affine map that represents map2 after map1, that is: y = a2(a1x+b1)+b2 = a2a1x + a2*b1 + b2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.convert_space-Union{Tuple{T}, Tuple{Type{GeometricSpace{T}},T}} where T",
    "page": "Docstrings",
    "title": "DomainSets.convert_space",
    "category": "method",
    "text": "Convert the variable x to an element of the space B. This is possible if the space of x is embedded in B.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.default_tolerance-Tuple{Domain}",
    "page": "Docstrings",
    "title": "DomainSets.default_tolerance",
    "category": "method",
    "text": "Return a suitable tolerance to use for verifying whether a point is close to a domain. Typically, the tolerance is close to the precision limit of the numeric type associated with the domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.demote-Union{Tuple{T}, Tuple{Type{T},Any}} where T",
    "page": "Docstrings",
    "title": "DomainSets.demote",
    "category": "method",
    "text": "The function demote(S, y::T) is a left inverse of convert(T, x::S), for the case where type S promotes to type T (i.e. promote_type(S,T) == T).\n\nThis means that demote(S, convert(T, x::S)) == x, while demote(S, y) may be anything for y::T not in the range of convert(T, x::S).\n\nNote that Julia\'s convert function is its own left inverse, in the sense that convert(S, convert(T,x)) == x usually holds if x::S. However, the convert function generally throws an InexactError() for elements of type T that are not in (or close to) the range of convert(T, x::S). In those cases, demote does not throw an error, but there may be an arbitrarily large difference between convert(T, demote(S, y)) and y itself. In other words, demote may differ wildly from a right inverse of convert.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.element-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "DomainSets.element",
    "category": "method",
    "text": "Return the i-th element of a composite structure.\n\nSee also: elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.elements-Tuple{}",
    "page": "Docstrings",
    "title": "DomainSets.elements",
    "category": "method",
    "text": "Some types have composite structure, e.g. product domains, a union of domains. These types contain a list of domains.\n\nIt is often undesirable to use getindex to access the elements of the composite type. For this reason we introduce the elements functions. Composite types can implement elements and provide a generic way to access their components.\n\nelements(t): returns the elements making up the composite type t\n\nelement(t, i): return the i-th element of the composite type t\n\nnumelements(t): return the number of elements of the composite type t\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.embedding-Union{Tuple{T}, Tuple{Type{GeometricSpace{T}},Type{GeometricSpace{T}}}} where T",
    "page": "Docstrings",
    "title": "DomainSets.embedding",
    "category": "method",
    "text": "The function embedding describes in the type domain whether a space with type T is embedded into a space with type B. If so, it returns True, otherwise it returns False.\n\nEmbeddings are the result of the following rules:\n\nA{T} is embedded in A{S} if T promotes to S in the Julia type system\nIf a rule embedding_reduction(A,B) = (C,D) has been defined, then A is embedded in B if C is embedded in D.\nSay A and B are isomorphic if C and D are. This automatically results in embedding reduction rules from A to B and from B to A.\nA is embedded in B if the superspace of A is embedded in B.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.isomorphism-Union{Tuple{T}, Tuple{Type{GeometricSpace{T}},Type{GeometricSpace{T}}}} where T",
    "page": "Docstrings",
    "title": "DomainSets.isomorphism",
    "category": "method",
    "text": "Return True if A and B are isomorphic. This implies that any point in A can be converted to a point in B, and vice-versa, with an exact inverse.\n\nThe functionality is implemented recursively in terms of the isomorphism_reduction function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.isomorphism_reduction-Union{Tuple{S}, Tuple{T}, Tuple{Type{GeometricSpace{T}},Type{GeometricSpace{S}}}} where S where T",
    "page": "Docstrings",
    "title": "DomainSets.isomorphism_reduction",
    "category": "method",
    "text": "Indicate a reduction rule for isomorphism. The function either returns () or a 2-tuple. If isomorphism_reduction(A,B) returns (C,D), this means that A and B are isomorphic if C and D are. Here, C and D are the subeltypes of A and B respectively.\n\nFor example, VectorSpace{2,T} and ComplexSpace{S} are isomorphic if GeometricSpace{T} and GeometricSpace{S} are isomorphic.\n\nThe isomorphism only has to be declared in one direction, and is automatically valid in both directions. For space promotions, in case of ambiguity the first space A here is chosen as the preferred promotion space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.numelements-Tuple{Any}",
    "page": "Docstrings",
    "title": "DomainSets.numelements",
    "category": "method",
    "text": "Return the number of elements of a composite structure.\n\nSee also: elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.promote_space-Tuple{}",
    "page": "Docstrings",
    "title": "DomainSets.promote_space",
    "category": "method",
    "text": "Promote the geometric spaces of the arguments to a joined space, to which all arguments can be converted using embeddings. If no such concrete space exists, the joined space is AnySpace and the arguments remain unaltered.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.promotes_to-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "DomainSets.promotes_to",
    "category": "method",
    "text": "Return True if S promotes to T, i.e., if promote_type(S,T) == T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.restrict_space-Union{Tuple{T}, Tuple{Type{GeometricSpace{T}},T}} where T",
    "page": "Docstrings",
    "title": "DomainSets.restrict_space",
    "category": "method",
    "text": "Restrict the variable x to an element of the space B. This is possible if B is embedded in the space of x.\n\nMathematically, restrict_space(A, y) for y in space B is a left inverse of convert_space(B, x) for x in space A. This means that restrict_space(A, convert_space(B, x)) == x for any x in space A. However, restrict_space(A, y) for a y not in the range of convert_space(B, x) could take any value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.return_type-Union{Tuple{T}, Tuple{S}, Tuple{AbstractMap{S,T},Type{S}}} where T where S",
    "page": "Docstrings",
    "title": "DomainSets.return_type",
    "category": "method",
    "text": "return_type(map, U) is a generic function that computes the return type when the given map is applied to a variable of type U.\n\nFor any AbstractMap{S,T}, we have that return_type(map, S) = T. We also return T if U can be promoted to T using Julia\'s promotion system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.similar_interval-Union{Tuple{T}, Tuple{FixedInterval{:closed,:closed,T},Any,Any}} where T",
    "page": "Docstrings",
    "title": "DomainSets.similar_interval",
    "category": "method",
    "text": "Return an interval that is similar to the given interval, but with endpoints a and b instead.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.similar_space-Union{Tuple{S}, Tuple{T}, Tuple{Type{GeometricSpace{T}},Type{S}}} where S where T",
    "page": "Docstrings",
    "title": "DomainSets.similar_space",
    "category": "method",
    "text": "Create a space that is similar to the given space, but with a different subeltype.\n\nFor example, similar_space(ComplexSpace{Float64}, BigFloat) yields a ComplexSpace{BigFloat}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.simplify_product_eltype-Union{Tuple{Type{T}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "DomainSets.simplify_product_eltype",
    "category": "method",
    "text": "Try to simplify the type of a product domain to a type to which it is isomorphic. The goal is to automatically embed the product domain in ℝ^N if possible.\n\nExamples of simplifications: Tuple{Float64,Float64} -> SVector{2,Float64} Tuple{Tuple{Float64,Float64},Float64} -> SVector{3,Float64}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DomainSets.supereltype-Tuple{DerivedDomain}",
    "page": "Docstrings",
    "title": "DomainSets.supereltype",
    "category": "method",
    "text": "Return the eltype of the superdomain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DomainSets]\nOrder = [:type, :function]"
},

]}
