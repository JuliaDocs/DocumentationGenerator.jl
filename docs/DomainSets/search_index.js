var documenterSearchIndex = {"docs": [

{
    "location": "#DomainSets.AbstractMap",
    "page": "Home",
    "title": "DomainSets.AbstractMap",
    "category": "type",
    "text": "A map is any transformation of the form y = f(x), where x has type S and y has type T.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.AffineMap",
    "page": "Home",
    "title": "DomainSets.AffineMap",
    "category": "type",
    "text": "AffineMap represents y = a*x + b, i.e. it combines a LinearMap and a Translation.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.CartToPolarMap",
    "page": "Home",
    "title": "DomainSets.CartToPolarMap",
    "category": "type",
    "text": "A Cartesion to Polar map. First dimension is interpreted as radial distance, second as an angle. The unit circle is mapped to a square [-1,1]x[-1,1]\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ChebyshevInterval",
    "page": "Home",
    "title": "DomainSets.ChebyshevInterval",
    "category": "type",
    "text": "The closed interval [-1,1].\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.CompositeMap",
    "page": "Home",
    "title": "DomainSets.CompositeMap",
    "category": "type",
    "text": "The composition of several maps.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ConstantMap",
    "page": "Home",
    "title": "DomainSets.ConstantMap",
    "category": "type",
    "text": "The constant map f(x) = c.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.DerivedDomain",
    "page": "Home",
    "title": "DomainSets.DerivedDomain",
    "category": "type",
    "text": "DerivedDomain is an abstract supertype for domains that are implemented in terms of another domain using composition. DerivedDomain transfers the interface of Domain to this superdomain.\n\nA concrete subtype that inherits from DerivedDomain and stores a superdomain is functionally equivalent to that superdomain. Any properties of the superdomain can be modified by overriding a suitable function. For example, in of the concrete domain may be implemented in terms of the in of the superdomain.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.EuclideanDomain",
    "page": "Home",
    "title": "DomainSets.EuclideanDomain",
    "category": "type",
    "text": "A EuclideanDomain is any domain whose eltype is SVector{N,T}.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.HalfLine",
    "page": "Home",
    "title": "DomainSets.HalfLine",
    "category": "type",
    "text": "The half-open positive halfline [0,∞).\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.IdentityMap",
    "page": "Home",
    "title": "DomainSets.IdentityMap",
    "category": "type",
    "text": "The identity map.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.IntersectionDomain",
    "page": "Home",
    "title": "DomainSets.IntersectionDomain",
    "category": "type",
    "text": "An IntersectionDomain represents the intersection of a set of domains.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.LinearMap",
    "page": "Home",
    "title": "DomainSets.LinearMap",
    "category": "type",
    "text": "A LinearMap is an affine map that represents y = a*x, where a can have any type such that a*x maps type S to type T.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.NegativeHalfLine",
    "page": "Home",
    "title": "DomainSets.NegativeHalfLine",
    "category": "type",
    "text": "The open negative halfline (-∞,0).\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.Point",
    "page": "Home",
    "title": "DomainSets.Point",
    "category": "type",
    "text": "Point(x)\n\nrepresents a single point at x.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.PolarToCartMap",
    "page": "Home",
    "title": "DomainSets.PolarToCartMap",
    "category": "type",
    "text": "A Polar to Cartesian map. The angle is mapped to the second dimension, radius to the first. A square [-1,1]x[-1,1] is mapped to the unit circle\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ProductDomain",
    "page": "Home",
    "title": "DomainSets.ProductDomain",
    "category": "type",
    "text": "A ProductDomain represents the cartesian product of other domains.\n\nA product domain has two eltypes, an internal type S and an external type T. The internal type S is a tuple containing the eltypes of the elements of the product domain. The external eltype T is a type whose associated space is isomorphic to that of S, but which has been simplified. (See also simplify_product_eltype).\n\nFor example, if S is Tuple{Float64,Float64}, then T is SVector{2,Float64}.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ProductMap",
    "page": "Home",
    "title": "DomainSets.ProductMap",
    "category": "type",
    "text": "A product map is diagonal and acts on each of the components of x separately: y = f(x) becomes y_i = f_i(x_i).\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.Translation",
    "page": "Home",
    "title": "DomainSets.Translation",
    "category": "type",
    "text": "Translation represents y = x + v, where v is a vector in the same space as x and y.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.UnionDomain",
    "page": "Home",
    "title": "DomainSets.UnionDomain",
    "category": "type",
    "text": "A UnionDomain represents the union of a set of domains.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.UnitHyperBall",
    "page": "Home",
    "title": "DomainSets.UnitHyperBall",
    "category": "type",
    "text": "The unit ball (of radius 1) in N dimensions.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.UnitHyperSphere",
    "page": "Home",
    "title": "DomainSets.UnitHyperSphere",
    "category": "type",
    "text": "The unit sphere (of radius 1) in N dimensions.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.UnitInterval",
    "page": "Home",
    "title": "DomainSets.UnitInterval",
    "category": "type",
    "text": "The closed unit interval [0,1].\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ℂ",
    "page": "Home",
    "title": "DomainSets.ℂ",
    "category": "type",
    "text": "The complex plane with Float64 real and imaginar parts (ℂ = \\BbbC).\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ℚ",
    "page": "Home",
    "title": "DomainSets.ℚ",
    "category": "type",
    "text": "The set of rational numbers of type Rational{Int} (ℚ = \\BbbQ).\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ℝ",
    "page": "Home",
    "title": "DomainSets.ℝ",
    "category": "type",
    "text": "The set of reals of type Float64 (ℝ = \\BbbR).\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ℝ1",
    "page": "Home",
    "title": "DomainSets.ℝ1",
    "category": "type",
    "text": "The space ℝ^1\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ℝ2",
    "page": "Home",
    "title": "DomainSets.ℝ2",
    "category": "type",
    "text": "The space ℝ^2\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ℝ3",
    "page": "Home",
    "title": "DomainSets.ℝ3",
    "category": "type",
    "text": "The space ℝ^3\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ℝ4",
    "page": "Home",
    "title": "DomainSets.ℝ4",
    "category": "type",
    "text": "The space ℝ^4\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ℤ",
    "page": "Home",
    "title": "DomainSets.ℤ",
    "category": "type",
    "text": "The set of integers of type Int (ℤ = \\BbbZ).\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.:↪",
    "page": "Home",
    "title": "DomainSets.:↪",
    "category": "function",
    "text": "The symbol ↪ (\\hookrightarrow) is a synonym for embedded.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.:≅",
    "page": "Home",
    "title": "DomainSets.:≅",
    "category": "function",
    "text": "The symbol ≅ (\\cong) is a synonym for isomorphic.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.apply_inverse-Tuple{AbstractMap,Any}",
    "page": "Home",
    "title": "DomainSets.apply_inverse",
    "category": "method",
    "text": "Apply the inverse of the given map. By default, this constructs the inverse of m. However, some maps know its own inverse and may provide a more efficient implementation of apply_inverse.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.cartesianproduct-Tuple{}",
    "page": "Home",
    "title": "DomainSets.cartesianproduct",
    "category": "method",
    "text": "Create a cartesian product of the supplied arguments.\n\nThe function cartesianproduct applies some simplifications and does not necessarily return a Product type.\n\nA cartesianproduct(a) with just a single element returns a.\n\nFor integer n, cartesianproduct(a, n) becomes cartesianproduct(a, a, ..., a). A type-safe variant is cartesianproduct(a, Val{N}).\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ellipse-Tuple{Number,Number}",
    "page": "Home",
    "title": "DomainSets.ellipse",
    "category": "method",
    "text": "Create an ellipse curve with semi-axes lengths a and b respectively.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ellipse_shape-Tuple{Number,Number}",
    "page": "Home",
    "title": "DomainSets.ellipse_shape",
    "category": "method",
    "text": "Create an ellipse-shaped domain with semi-axes lengths a and b respectively.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.embedded-Tuple{DomainSets.GeometricSpace,DomainSets.GeometricSpace}",
    "page": "Home",
    "title": "DomainSets.embedded",
    "category": "method",
    "text": "Returns true if A is embedded in B.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.interval_map-NTuple{4,Any}",
    "page": "Home",
    "title": "DomainSets.interval_map",
    "category": "method",
    "text": "Map the interval [a,b] to the interval [c,d].\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.isomorphic-Tuple{DomainSets.GeometricSpace,DomainSets.GeometricSpace}",
    "page": "Home",
    "title": "DomainSets.isomorphic",
    "category": "method",
    "text": "Returns true if A is isomorphic to B, and false otherwise.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.issubspace-Union{Tuple{T}, Tuple{Type{GeometricSpace{T}},Type{GeometricSpace{T}}}} where T",
    "page": "Home",
    "title": "DomainSets.issubspace",
    "category": "method",
    "text": "A space A is a subspace of space B if B is a supertype of A.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.left_inverse-Tuple{AbstractMap}",
    "page": "Home",
    "title": "DomainSets.left_inverse",
    "category": "method",
    "text": "Return a left inverse of the given map. This left inverse mli is not unique, but in any case it is such that (mli ∘ m) * x = x for each x in the domain of m.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.linear_map-Tuple{Any,Any}",
    "page": "Home",
    "title": "DomainSets.linear_map",
    "category": "method",
    "text": "Make the linear map y = a*x + b.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.origin-Tuple{DomainSets.GeometricSpace}",
    "page": "Home",
    "title": "DomainSets.origin",
    "category": "method",
    "text": "The origin of a space is its zero element.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.right_inverse-Tuple{AbstractMap}",
    "page": "Home",
    "title": "DomainSets.right_inverse",
    "category": "method",
    "text": "Return a right inverse of the given map. This right inverse mri is not unique, but in any case it is such that (m ∘ mri) * y = y for each y in the range of m.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.scaling_map-NTuple{4,Any}",
    "page": "Home",
    "title": "DomainSets.scaling_map",
    "category": "method",
    "text": "Scale the variables by a, b, c and d.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.scaling_map-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "DomainSets.scaling_map",
    "category": "method",
    "text": "Scale the variables by a, b and c.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.scaling_map-Tuple{Any,Any}",
    "page": "Home",
    "title": "DomainSets.scaling_map",
    "category": "method",
    "text": "Scale the variables by a and b.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.scaling_map-Tuple{Any}",
    "page": "Home",
    "title": "DomainSets.scaling_map",
    "category": "method",
    "text": "Scale all variables by a.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.spaceof-Union{Tuple{T}, Tuple{T}} where T",
    "page": "Home",
    "title": "DomainSets.spaceof",
    "category": "method",
    "text": "Return the geometric space of all elements with the same type as x.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.spacetype-Union{Tuple{Type{T}}, Tuple{T}} where T",
    "page": "Home",
    "title": "DomainSets.spacetype",
    "category": "method",
    "text": "Return the geometric space type with eltype T.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.subeltype-Tuple{Domain}",
    "page": "Home",
    "title": "DomainSets.subeltype",
    "category": "method",
    "text": "If the type T is a container type, the elements of T may have a different subeltype. If T is not a container, subeltype simply evaluates to T.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.subeltype-Union{Tuple{Type{GeometricSpace{T}}}, Tuple{T}} where T",
    "page": "Home",
    "title": "DomainSets.subeltype",
    "category": "method",
    "text": "Some geometric spaces have an eltype that is composed in terms of an underlying eltype. For example, Complex{Float64} and SVector{2,Float64} are based on Float64, which is their subeltype.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.superspace-Union{Tuple{Type{GeometricSpace{T}}}, Tuple{T}} where T",
    "page": "Home",
    "title": "DomainSets.superspace",
    "category": "method",
    "text": "Return the superspace of the given geometric space A. The superspace of A should be larger than A, and A should be embedded in it.\n\nSuperspaces are used to automatically discover embeddings and promotion rules. Its role is analogous to that of supertype in the Julia type system. Indeed, AnySpace is a superspace of all spaces, much like Any is a supertype of all types.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.AbstractAffineMap",
    "page": "Home",
    "title": "DomainSets.AbstractAffineMap",
    "category": "type",
    "text": "An affine map has the general form y = a*x + b, with types for a, b, x and y such that the expression is valid.\n\nWe use matrix and vector to denote a and b respectively.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.AbstractConstantMap",
    "page": "Home",
    "title": "DomainSets.AbstractConstantMap",
    "category": "type",
    "text": "The supertype of several maps that map to a constant value.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.AngleMap",
    "page": "Home",
    "title": "DomainSets.AngleMap",
    "category": "type",
    "text": "AngleMap is a left inverse of UnitCircleMap. A 2D vector x is projected onto the intersection point with the unit circle of the line connecting x to the origin. The angle of this point, scaled to the interval [0,1), is the result.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.AnySpace",
    "page": "Home",
    "title": "DomainSets.AnySpace",
    "category": "type",
    "text": "AnySpace is the superset of all possible geometric spaces.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ArraySpace",
    "page": "Home",
    "title": "DomainSets.ArraySpace",
    "category": "type",
    "text": "A general Array space, with arrays of dimension N and element type T. Note that the arrays can have any size. Thus, ArraySpace{2,Float64} contains all possible matrices of size m × n for any combination of m,n ∈ ℕ.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.BidirectionalMappedDomain",
    "page": "Home",
    "title": "DomainSets.BidirectionalMappedDomain",
    "category": "type",
    "text": "A BidirectionalMappedDomain stores the source domain and both the map f and a left inverse.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ComplexSpace",
    "page": "Home",
    "title": "DomainSets.ComplexSpace",
    "category": "type",
    "text": "A geometric space with complex type.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.EmbeddingMap",
    "page": "Home",
    "title": "DomainSets.EmbeddingMap",
    "category": "type",
    "text": "A map between embedded spaces.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.FixedInterval",
    "page": "Home",
    "title": "DomainSets.FixedInterval",
    "category": "type",
    "text": "The abstract type FixedInterval is the supertype of intervals with endpoints determined by the type, rather than field values. Examples include UnitInterval and ChebyshevInterval.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ForwardMappedDomain",
    "page": "Home",
    "title": "DomainSets.ForwardMappedDomain",
    "category": "type",
    "text": "A ForwardMappedDomain stores the source domain and the forward map f, which maps source to target.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.GeometricSpace",
    "page": "Home",
    "title": "DomainSets.GeometricSpace",
    "category": "type",
    "text": "A domain is always a subset of a geometric space. A geometric space is completely characterized by the type T of its elements. There are no restrictions on concrete values: each instance of type T belongs to GeometricSpace{T}. Conversely, each numeric type T can give rise to only one geometric space.\n\nThe goal of GeometricSpace is to provide a lightweight framework for converting elements between spaces. Two features are embeddings and isomorphisms. It is lightweight because the space is characterized by the type and has no state, hence it can be inferred from any variable based only on its type. A restriction that results from this choice is that there can only be one type of embedding from one space to another. More general embeddings could be implemented using domains or specific maps.\n\nEmbeddings: A space A is embedded in a space B if each element of A corresponds to an element of B. In that case an element of A can be promoted (using promote_space) to an element of type B. This is not necessarily the same as the promotion of the type of A to the type of B. For example, a scalar can be embedded into a two-dimensional space (say with the second component equal to zero). It would be undesirable to implement that using the standard Julia promotion system, since it would apply to all Julia code used concurrently.\n\nIsomorphisms: If A is embedded in B and B is embedded in A than they A and B are isomorphic. In that case, an element of A can be converted to an element of B and vice-versa. The conversion is invertible. One example is the isomorphism between ℝ^2 and ℂ.\n\nNew spaces can be defined by defining a new numeric type. Embeddings and isomorphisms are defined by defining new embedding_reduction and isomorphism_reduction rules, along with conversiong using convert_space and restrict_space. See the documentation of these functions for information on how to use them.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.IntegerSpace",
    "page": "Home",
    "title": "DomainSets.IntegerSpace",
    "category": "type",
    "text": "A geometric space with integer type.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.InverseMappedDomain",
    "page": "Home",
    "title": "DomainSets.InverseMappedDomain",
    "category": "type",
    "text": "An InverseMappedDomain stores the source and the inverse of the map f.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.IsomorphismMap",
    "page": "Home",
    "title": "DomainSets.IsomorphismMap",
    "category": "type",
    "text": "A map between isomorphic spaces.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.MappedDomain",
    "page": "Home",
    "title": "DomainSets.MappedDomain",
    "category": "type",
    "text": "There are three objects involved in the mapping of a domain:\n\nthe original domain (denoted source)\nthe map (denoted f)\nthe resulting domain (target)\n\nIf f maps a variable of type S to a variable of type T, then the source domain has eltype S and the target domain has eltype T.\n\nThe characteristic function of the resulting domain is defined in terms of the inverse of the map f, i.e.:\n\nin(x, target) = in(inv(f)*x, source)\n\nConcrete mapped domains can be implemented in various ways, e.g. by storing source and f, or by storing source and inv(f), ...\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ProductSpace",
    "page": "Home",
    "title": "DomainSets.ProductSpace",
    "category": "type",
    "text": "By convention a geometric space with a tuple type T represents a product space of the individual entries of T.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.RationalSpace",
    "page": "Home",
    "title": "DomainSets.RationalSpace",
    "category": "type",
    "text": "A geometric space with rational types.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.RealSpace",
    "page": "Home",
    "title": "DomainSets.RealSpace",
    "category": "type",
    "text": "A geometric space with floating point type.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.RestrictionMap",
    "page": "Home",
    "title": "DomainSets.RestrictionMap",
    "category": "type",
    "text": "A restriction map from a space to an embedded space.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.TypeFactory",
    "page": "Home",
    "title": "DomainSets.TypeFactory",
    "category": "type",
    "text": "A TypeFactory{T} is a convenience type to simplify construction of a type.\n\nHaving t = TypeFactory{T} overrides getindex such that t[a] invokes T(a).\n\nFor example:\n\nv = TypeFactory{SVector}\nv[0.1,0.2]\n\nmakes an SVector{2,Float64}.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.UnitCircleMap",
    "page": "Home",
    "title": "DomainSets.UnitCircleMap",
    "category": "type",
    "text": "The map [cos(2πt), sin(2πt)] from [0,1) to the unit circle in ℝ^2.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.UnityMap",
    "page": "Home",
    "title": "DomainSets.UnityMap",
    "category": "type",
    "text": "The unity map f(x) = 1.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.VectorSpace",
    "page": "Home",
    "title": "DomainSets.VectorSpace",
    "category": "type",
    "text": "A Euclidean space with static vector types. It is the space of all vectors of fixed length N, with entries of type T.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.ZeroMap",
    "page": "Home",
    "title": "DomainSets.ZeroMap",
    "category": "type",
    "text": "The zero map f(x) = 0.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets._product_eltype-Tuple{Any}",
    "page": "Home",
    "title": "DomainSets._product_eltype",
    "category": "method",
    "text": "Create an eltype that is suitable for a product domain. The result is a tuple type, where each of the elements is the eltype of the corresponding element of the product domain.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.affine_composition-Tuple{DomainSets.AbstractAffineMap,DomainSets.AbstractAffineMap}",
    "page": "Home",
    "title": "DomainSets.affine_composition",
    "category": "method",
    "text": "Compute the affine map that represents map2 after map1, that is: y = a2(a1x+b1)+b2 = a2a1x + a2*b1 + b2.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.convert_space-Union{Tuple{T}, Tuple{Type{GeometricSpace{T}},T}} where T",
    "page": "Home",
    "title": "DomainSets.convert_space",
    "category": "method",
    "text": "Convert the variable x to an element of the space B. This is possible if the space of x is embedded in B.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.default_tolerance-Tuple{Domain}",
    "page": "Home",
    "title": "DomainSets.default_tolerance",
    "category": "method",
    "text": "Return a suitable tolerance to use for verifying whether a point is close to a domain. Typically, the tolerance is close to the precision limit of the numeric type associated with the domain.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.demote-Union{Tuple{T}, Tuple{Type{T},Any}} where T",
    "page": "Home",
    "title": "DomainSets.demote",
    "category": "method",
    "text": "The function demote(S, y::T) is a left inverse of convert(T, x::S), for the case where type S promotes to type T (i.e. promote_type(S,T) == T).\n\nThis means that demote(S, convert(T, x::S)) == x, while demote(S, y) may be anything for y::T not in the range of convert(T, x::S).\n\nNote that Julia\'s convert function is its own left inverse, in the sense that convert(S, convert(T,x)) == x usually holds if x::S. However, the convert function generally throws an InexactError() for elements of type T that are not in (or close to) the range of convert(T, x::S). In those cases, demote does not throw an error, but there may be an arbitrarily large difference between convert(T, demote(S, y)) and y itself. In other words, demote may differ wildly from a right inverse of convert.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.element-Tuple{Any,Any}",
    "page": "Home",
    "title": "DomainSets.element",
    "category": "method",
    "text": "Return the i-th element of a composite structure.\n\nSee also: elements.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.elements-Tuple{}",
    "page": "Home",
    "title": "DomainSets.elements",
    "category": "method",
    "text": "Some types have composite structure, e.g. product domains, a union of domains. These types contain a list of domains.\n\nIt is often undesirable to use getindex to access the elements of the composite type. For this reason we introduce the elements functions. Composite types can implement elements and provide a generic way to access their components.\n\nelements(t): returns the elements making up the composite type t\n\nelement(t, i): return the i-th element of the composite type t\n\nnumelements(t): return the number of elements of the composite type t\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.embedding-Union{Tuple{T}, Tuple{Type{GeometricSpace{T}},Type{GeometricSpace{T}}}} where T",
    "page": "Home",
    "title": "DomainSets.embedding",
    "category": "method",
    "text": "The function embedding describes in the type domain whether a space with type T is embedded into a space with type B. If so, it returns True, otherwise it returns False.\n\nEmbeddings are the result of the following rules:\n\nA{T} is embedded in A{S} if T promotes to S in the Julia type system\nIf a rule embedding_reduction(A,B) = (C,D) has been defined, then A is embedded in B if C is embedded in D.\nSay A and B are isomorphic if C and D are. This automatically results in embedding reduction rules from A to B and from B to A.\nA is embedded in B if the superspace of A is embedded in B.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.isomorphism-Union{Tuple{T}, Tuple{Type{GeometricSpace{T}},Type{GeometricSpace{T}}}} where T",
    "page": "Home",
    "title": "DomainSets.isomorphism",
    "category": "method",
    "text": "Return True if A and B are isomorphic. This implies that any point in A can be converted to a point in B, and vice-versa, with an exact inverse.\n\nThe functionality is implemented recursively in terms of the isomorphism_reduction function.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.isomorphism_reduction-Union{Tuple{S}, Tuple{T}, Tuple{Type{GeometricSpace{T}},Type{GeometricSpace{S}}}} where S where T",
    "page": "Home",
    "title": "DomainSets.isomorphism_reduction",
    "category": "method",
    "text": "Indicate a reduction rule for isomorphism. The function either returns () or a 2-tuple. If isomorphism_reduction(A,B) returns (C,D), this means that A and B are isomorphic if C and D are. Here, C and D are the subeltypes of A and B respectively.\n\nFor example, VectorSpace{2,T} and ComplexSpace{S} are isomorphic if GeometricSpace{T} and GeometricSpace{S} are isomorphic.\n\nThe isomorphism only has to be declared in one direction, and is automatically valid in both directions. For space promotions, in case of ambiguity the first space A here is chosen as the preferred promotion space.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.numelements-Tuple{Any}",
    "page": "Home",
    "title": "DomainSets.numelements",
    "category": "method",
    "text": "Return the number of elements of a composite structure.\n\nSee also: elements.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.promote_space-Tuple{}",
    "page": "Home",
    "title": "DomainSets.promote_space",
    "category": "method",
    "text": "Promote the geometric spaces of the arguments to a joined space, to which all arguments can be converted using embeddings. If no such concrete space exists, the joined space is AnySpace and the arguments remain unaltered.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.promotes_to-Tuple{Any,Any}",
    "page": "Home",
    "title": "DomainSets.promotes_to",
    "category": "method",
    "text": "Return True if S promotes to T, i.e., if promote_type(S,T) == T.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.restrict_space-Union{Tuple{T}, Tuple{Type{GeometricSpace{T}},T}} where T",
    "page": "Home",
    "title": "DomainSets.restrict_space",
    "category": "method",
    "text": "Restrict the variable x to an element of the space B. This is possible if B is embedded in the space of x.\n\nMathematically, restrict_space(A, y) for y in space B is a left inverse of convert_space(B, x) for x in space A. This means that restrict_space(A, convert_space(B, x)) == x for any x in space A. However, restrict_space(A, y) for a y not in the range of convert_space(B, x) could take any value.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.return_type-Union{Tuple{T}, Tuple{S}, Tuple{AbstractMap{S,T},Type{S}}} where T where S",
    "page": "Home",
    "title": "DomainSets.return_type",
    "category": "method",
    "text": "return_type(map, U) is a generic function that computes the return type when the given map is applied to a variable of type U.\n\nFor any AbstractMap{S,T}, we have that return_type(map, S) = T. We also return T if U can be promoted to T using Julia\'s promotion system.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.similar_interval-Union{Tuple{T}, Tuple{FixedInterval{:closed,:closed,T},Any,Any}} where T",
    "page": "Home",
    "title": "DomainSets.similar_interval",
    "category": "method",
    "text": "Return an interval that is similar to the given interval, but with endpoints a and b instead.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.similar_space-Union{Tuple{S}, Tuple{T}, Tuple{Type{GeometricSpace{T}},Type{S}}} where S where T",
    "page": "Home",
    "title": "DomainSets.similar_space",
    "category": "method",
    "text": "Create a space that is similar to the given space, but with a different subeltype.\n\nFor example, similar_space(ComplexSpace{Float64}, BigFloat) yields a ComplexSpace{BigFloat}.\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.simplify_product_eltype-Union{Tuple{Type{T}}, Tuple{T}} where T",
    "page": "Home",
    "title": "DomainSets.simplify_product_eltype",
    "category": "method",
    "text": "Try to simplify the type of a product domain to a type to which it is isomorphic. The goal is to automatically embed the product domain in ℝ^N if possible.\n\nExamples of simplifications: Tuple{Float64,Float64} -> SVector{2,Float64} Tuple{Tuple{Float64,Float64},Float64} -> SVector{3,Float64}\n\n\n\n\n\n"
},

{
    "location": "#DomainSets.supereltype-Tuple{DerivedDomain}",
    "page": "Home",
    "title": "DomainSets.supereltype",
    "category": "method",
    "text": "Return the eltype of the superdomain.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DomainSets]\nOrder = [:type, :function]"
},

]}
