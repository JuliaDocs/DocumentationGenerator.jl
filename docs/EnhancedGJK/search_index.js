var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#EnhancedGJK-1",
    "page": "Readme",
    "title": "EnhancedGJK",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This package contains a pure-Julia implementation of the enhanced version of the Gilbert, Johnson, and Keerthi algorithm for computing distance between convex bodies. The algorithm is described in detail by Stephen Cameron in [1]."
},

{
    "location": "#Why-Julia?-1",
    "page": "Readme",
    "title": "Why Julia?",
    "category": "section",
    "text": "GJK implementations are numerous and well-tested, but a pure-Julia implementation may have benefits that other languages cannot offer. This implementation of GJK is entirely agnostic to the data types which describe both the geometries and their positions in space. This means that, for example, gradients of distances can easily be computed using the automatic differentiation provided by ForwardDiff.jl\'s DualNumber type. But there may be other applications as well, such as geometries or transformations with rational or variable-precision arithmetic. A pure-Julia implementation makes it easy to experiment with new data types without sacrificing performance."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The easiest way to use this package is the gjk() function. gjk() takes two geometries and, optionally, Transformation types specifying the pose of each geometry:using EnhancedGJK\nimport GeometryTypes: HyperRectangle, HyperSphere, Vec, Point\n\nc1 = HyperRectangle(Vec(0., 0, 0), Vec(1., 1, 1))\nc2 = HyperRectangle(Vec(3., 0, 0), Vec(1., 1, 1))\nresult = gjk(c1, c2)The return type of gjk() is a GJKResult, from which you can extract the signed distance between the two bodies:julia> @show result.signed_distance\nresult.signed_distance = 2.0You can also access the closest point in each body to the other:julia> result.closest_point_in_body.a\n3-element StaticArrays.SVector{3,Float64}:\n 1.0\n 0.0\n 0.0\n\njulia> result.closest_point_in_body.b\n3-element StaticArrays.SVector{3,Float64}:\n 3.0\n 0.0\n 0.0"
},

{
    "location": "#Going-Faster-1",
    "page": "Readme",
    "title": "Going Faster",
    "category": "section",
    "text": "When simulating physics, we often want to compute the distance between two bodies over and over while those bodies move slightly. In that case, we can cache some of the intermediate results to make each distance computation faster and free of memory allocations:using EnhancedGJK\nimport StaticArrays: SVector\nimport CoordinateTransformations: IdentityTransformation, Translation\n\n# Construct two geometries: a simplex and a single point:\nsimplex = SVector{3}(SVector{2, Float64}[[1., 0], [2., 0], [1., 1]])\npt = SVector(0., 0)\n\n# The CollisionCache stores both geometries and also remembers\n# information about the GJK simplex used to check for collisions\n# between them. Using the same cache later will make subsequent\n# computations faster.\ncache = CollisionCache(simplex, pt);\n\n# Run the GJK algorithm. Each geometry can also be given a\n# transformation to describe its position and orientation in the\n# world frame.\nresult = gjk!(cache, IdentityTransformation(), IdentityTransformation())\n\n# result.signed_distance will be > 0 if the objects are not in contact\n# and <= 0 if they are in collision.\n@show result.signed_distance\n\n# We can perturb one of the geometries by changing its transformation.\n# Reusing the same cache will make this computation faster, expecially\n# for complex geometries when the change in transformation is small.\nresult = gjk!(cache, Translation(SVector(0.1, 0)), IdentityTransformation())\n\n@show result.signed_distance"
},

{
    "location": "#Meshes-1",
    "page": "Readme",
    "title": "Meshes",
    "category": "section",
    "text": "gjk() and gjk!() support meshes, represented as GeometryTypes.jl HomogenousMesh objects:using MeshIO\nusing FileIO\nmesh = load(\"test/meshes/r_foot_chull.obj\")\nresult = gjk(mesh, mesh, IdentityTransformation(), Translation(SVector(5., 0, 0)))\n@show result.signed_distanceNote that this package does not check if the mesh is convex. Non-convex meshes may produce incorrect distance measurements.GJK can be run even faster on complex meshes by pre-computing the neighbors of each vertex in the mesh. The NeighborMesh type handles this for you:neighbormesh = NeighborMesh(mesh)\nresult = gjk(neighbormesh, neighbormesh, IdentityTransformation(), Translation(SVector(5., 0, 0)))This pre-computation of mesh vertex neighbors is the \"enhanced\" part of Enhanced GJK."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1] S. Cameron, “Enhancing GJK: computing minimum and penetration distances between convex polyhedra,” in , 1997 IEEE International Conference on Robotics and Automation, 1997. Proceedings, 1997, vol. 4, pp. 3112–3117 vol.4."
},

{
    "location": "autodocs/#EnhancedGJK.NeighborMesh",
    "page": "Docstrings",
    "title": "EnhancedGJK.NeighborMesh",
    "category": "type",
    "text": "The NeighborMesh is what actually makes EnhancedGJK \"enhanced\". It consists of a mesh and a pre-computed set of neighbors for each vertex. These neighbors will be searched when the GJK simplex is refined. Searching over just the neighbors of a particular vertex allows us to avoid repeatedly searching over every vertex in the mesh.\n\nNote that constructing a new NeighborMesh is expensive (and unoptimized). We recommend constructing the NeighborMesh for each of your meshes ahead of time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EnhancedGJK.Tagged",
    "page": "Docstrings",
    "title": "EnhancedGJK.Tagged",
    "category": "type",
    "text": "The enhanced GJK algorithm relies on a pre-computed set of neighbors for each vertex in the mesh. In order to use those neighbors, we have to know from which vertex to start. Specifically, we need to know the index of the vertex corresponding to the point in the GJK simplex which we are trying to improve. To do that, we introduce the notion of a Tagged point. A tagged point is just a point and some arbitrary additional data field. All of the any_inside and support_vector_max functions in this package return tagged points. For most geometries, that tag is empty (nothing). But for our NeighborMesh type, the tag is the linear index into the vertices of the mesh, which lets us look up that mesh\'s neighbors faster later on.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EnhancedGJK.johnson_subsets-Tuple{Integer}",
    "page": "Docstrings",
    "title": "EnhancedGJK.johnson_subsets",
    "category": "method",
    "text": "Compute all subsets of the points in the simplex in a reliable order. The order is arbitrary, but was chosen to match the implemenation in S. Cameron, “Enhancing GJK: computing minimum and penetration distances between convex polyhedra,”. Specifically, subset i contains point j iff the binary representation of i has a one at the jth bit.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EnhancedGJK.projection_weights-Union{Tuple{SArray{Tuple{M},SArray{Tuple{N},T,1,N},1,M}}, Tuple{T}, Tuple{N}, Tuple{M}} where T where N where M",
    "page": "Docstrings",
    "title": "EnhancedGJK.projection_weights",
    "category": "method",
    "text": "weights = projection_weights(simplex)\n\nThis function implements Johnson\'s distance subalgorithm, as described in E. G. Gilbert, D. W. Johnson, and S. S. Keerthi, “A fast procedure for computing the distance between complex objects in three-dimensional space,”\n\nGiven a simplex (a length N+1 vector of points of dimension N), it\n\nreturns weights such that dot(weights, simplex) yields the point in the convex hull of the simplex which is closest to the origin.\n\nThis is the critical loop of the GJK algorithm, so it has been heavily optimized to precompute, inline, and unroll as much of the algorithm as possible. For a more readable (and much slower) implementation, see projectionweightsreference()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EnhancedGJK.projection_weights_impl-Union{Tuple{Type{SArray{Tuple{M},SArray{Tuple{N},T,1,N},1,M}}}, Tuple{T}, Tuple{N}, Tuple{M}} where T where N where M",
    "page": "Docstrings",
    "title": "EnhancedGJK.projection_weights_impl",
    "category": "method",
    "text": "This is the function which actually computes the weight values. It returns an expression to compute that result, with all loops unrolled and all indices pre-computed based on the size and dimension of the simplex. For a more readable version of the same function, check out projectionweightsreference().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [EnhancedGJK]\nOrder = [:type, :function]"
},

]}
