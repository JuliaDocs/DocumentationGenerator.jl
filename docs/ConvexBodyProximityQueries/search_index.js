var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ConvexBodyProximityQueries-1",
    "page": "Readme",
    "title": "ConvexBodyProximityQueries",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov)(Image: )ConvexBodyProximityQueries.jl implements the Gilber-Johnson-Keerthi (GJK) Algorithm from their seminal paper on fast collision detection. The following query types are available for two convex objects:Closest Points\nMinimum Distance\nTolerance Verification\nCollision Detection"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The package (by default) allows you to work with polytopes defined as an array of vertices, for example:julia> using StaticArrays\njulia> polyA = @SMatrix rand(2, 8)\n2×8 SArray{Tuple{2,8},Float64,2,16}:\n 0.732619   0.327745   0.0390878  0.477455  0.627223  0.502666  0.0529193  0.0523722\n 0.0513408  0.0634308  0.892253   0.88009   0.100901  0.564782  0.789238   0.307813\n\njulia> polyB = @SMatrix(rand(2, 8)) + 1.5\n2×8 SArray{Tuple{2,8},Float64,2,16}:\n 2.18993  1.75404  1.51373  1.60674  1.67257  2.14208  1.97779  2.24657\n 2.32708  1.92212  2.32769  1.69457  1.85003  1.57441  1.93884  2.45361\n\njulia> dir = @SVector(rand(2)) - 0.5\n2-element SArray{Tuple{2},Float64,1,2}:\n-0.4673435693835293\n 0.4242237214159814All the proximity queries can be performed simply by providing the polytope information and an initial searchdirection. In addition, tolerance_verfication requires an argument specifying the minimum tolerance of speration between two objects. :julia> using BenchmarkTools\njulia> @btime closest_points($polyA, $polyB, $dir)\n  172.901 ns (0 allocations: 0 bytes)\n([0.477455, 0.88009], [1.60674, 1.69457])\n\njulia> @btime minimum_distance($polyA, $polyB, $dir)\n  165.554 ns (0 allocations: 0 bytes)\n1.3923553706117722\n\njulia> @btime tolerance_verification($polyA, $polyB, $dir, $1.0)\n  99.324 ns (0 allocations: 0 bytes)\ntrue\n\njulia> @btime collision_detection($polyA, $polyB, $dir)\n  96.386 ns (0 allocations: 0 bytes)\nfalseIf you want to use your custom convex objects, you can do so by extending the support function as:import ConvexBodyProximityQueries.support\nfunction ConvexBodyProximityQueries.support(obj::MyFancyShape, dir::SVector{N}) where {N}\n  # do something\n  return supporting_point::SVector{N}\nendNote: This is how I intended the package to be used, the vanilla support function is quite naive and only works for a StaticArray of vertices. Here are some examples for some geometries found in GeometryTypes.jl:import ConvexBodyProximityQueries.support\nusing GeometryTypes: HyperSphere, HyperRectangle, HyperCube\n\nfunction ConvexBodyProximityQueries.support(sphere::HyperSphere{N, T}, dir::AbstractVector) where {N, T}\n    SVector{N}(sphere.center + sphere.r*normalize(dir, 2))\nend\n\n@generated function ConvexBodyProximityQueries.support(rect::HyperRectangle{N, T}, dir::AbstractVector) where {N, T}\n    exprs = Array{Expr}(undef, (N,))\n    for i = 1:N\n        exprs[i] = :(rect.widths[$i]*(dir[$i] ≥ 0.0 ? 1.0 : -1.0)/2.0 + rect.origin[$i])\n    end\n\n    return quote\n        Base.@_inline_meta\n        @inbounds elements = tuple($(exprs...))\n        @inbounds return SVector{N, T}(elements)\n    end\nend\n\n@generated function ConvexBodyProximityQueries.support(cube::HyperCube{N, T}, dir::AbstractVector) where {N, T}\n    exprs = Array{Expr}(undef, (N,))\n    for i = 1:N\n        exprs[i] = :(cube.width*(dir[$i] ≥ 0.0 ? 1.0 : -1.0)/2.0 + cube.origin[$i])\n    end\n\n    return quote\n        Base.@_inline_meta\n        @inbounds elements = tuple($(exprs...))\n        @inbounds return SVector{N, T}(elements)\n    end\nend"
},

{
    "location": "#Speed-1",
    "page": "Readme",
    "title": "Speed",
    "category": "section",
    "text": "As the core routines use StaticArrays, they are very well optimized and run quickly with no memory allocations. However, it is upto to the user to provide efficient code for the support and a good init_dir vector to squeeze the best performance from the functions."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Minimum distance computation in 2D:(Image: )Minimum distance computation in 3D:(Image: )"
},

{
    "location": "#Related-Packages-1",
    "page": "Readme",
    "title": "Related Packages",
    "category": "section",
    "text": "EnhancedGJK.jl"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Gilbert, E. G., D. W. Johnson, and S. S. Keerthi. “A Fast Procedure for Computing the Distance between Complex Objects in Three-Dimensional Space.” IEEE Journal on Robotics and Automation 4, no. 2 (April 1988): 193–203. https://doi.org/10.1109/56.2083."
},

{
    "location": "autodocs/#ConvexBodyProximityQueries.closest_points-Tuple{Any,Any,StaticArrays.SArray{Tuple{S},T,1,S} where T where S}",
    "page": "Docstrings",
    "title": "ConvexBodyProximityQueries.closest_points",
    "category": "method",
    "text": "closest_points(p, q, dir; max_iter=100)\n\nCompute the closest points between convex objects p and q if they are not colliding. Provide an initial search direction dir in the space of the problem.\n\nReturn result of type Tuple with StaticArrays of the two closest points on each object.\n\nExamples\n\njulia> using StaticArrays\njulia> p = SMatrix{2,3}([0.0 0.0 1.0; 0.0 2.0 1.0])\njulia> q = SMatrix{2,3}([2.0 2.0 3.0; 0.0 2.0 1.0])\njulia> dir = SVector{2}(1.0, 0.0)\njulia> closest_points(p, q, dir)\n([1.0, 1.0], [2.0, 1.0])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConvexBodyProximityQueries.collision_detection-Union{Tuple{T}, Tuple{N}, Tuple{Any,Any,SArray{Tuple{N},T,1,N}}} where T where N",
    "page": "Docstrings",
    "title": "ConvexBodyProximityQueries.collision_detection",
    "category": "method",
    "text": "collision_detection(p, q, dir; max_iter=100)\n\nCompute if the convex objects p and q are colliding. Provide an initial search direction dir in the space of the problem.\n\nExamples\n\njulia> using StaticArrays\njulia> p = SMatrix{2,3}([0.0 0.0 1.0; 0.0 2.0 1.0])\njulia> q = SMatrix{2,3}([2.0 2.0 3.0; 0.0 2.0 1.0])\njulia> dir = SVector{2}(1.0, 0.0)\njulia> collision_detection(p, q, dir)\nfalse\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConvexBodyProximityQueries.minimum_distance-Tuple{Any,Any,StaticArrays.SArray{Tuple{S},T,1,S} where T where S}",
    "page": "Docstrings",
    "title": "ConvexBodyProximityQueries.minimum_distance",
    "category": "method",
    "text": "minimum_distance(p, q, dir; max_iter=100)\n\nCompute the minimum seperating distance between convex objects p and q. Provide an initial search direction dir in the space of the problem.\n\nExamples\n\njulia> using StaticArrays\njulia> p = SMatrix{2,3}([0.0 0.0 1.0; 0.0 2.0 1.0])\njulia> q = SMatrix{2,3}([2.0 2.0 3.0; 0.0 2.0 1.0])\njulia> dir = SVector{2}(1.0, 0.0)\njulia> minimum_distance(p, q, dir)\n1.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConvexBodyProximityQueries.tolerance_verification-Tuple{Any,Any,StaticArrays.SArray{Tuple{S},T,1,S} where T where S,Real}",
    "page": "Docstrings",
    "title": "ConvexBodyProximityQueries.tolerance_verification",
    "category": "method",
    "text": "tolerance_verifcation(p, q, dir, τ; max_iter=100)\n\nCompute if the convex objects p and q are at least τ tolerance apart. Provide an initial search direction dir in the space of the problem.\n\nExamples\n\njulia> using StaticArrays\njulia> p = SMatrix{2,3}([0.0 0.0 1.0; 0.0 2.0 1.0])\njulia> q = SMatrix{2,3}([2.0 2.0 3.0; 0.0 2.0 1.0])\njulia> dir = SVector{2}(1.0, 0.0)\njulia> tolerance_verification(p, q, dir, 0.25)\ntrue\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConvexBodyProximityQueries.findsimplex-Tuple{StaticArrays.SArray{Tuple{S1,S2},T,2,L} where L where T where S2 where S1,StaticArrays.SArray{Tuple{S1,S2},T,2,L} where L where T where S2 where S1,Int64}",
    "page": "Docstrings",
    "title": "ConvexBodyProximityQueries.findsimplex",
    "category": "method",
    "text": "findsimplex(simplex)\n\nCompute the new simplices from a pair of given simplices. Return the new search direction. Return a collision flag if the origin was enclosed by the Minkowski simplex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConvexBodyProximityQueries.nearestfromsimplex-Union{Tuple{M}, Tuple{N}, Tuple{SArray{Tuple{N,M},T,2,L} where L where T,SArray{Tuple{N,M},T,2,L} where L where T,SArray{Tuple{N},T,1,N} where T,Int64}} where M where N",
    "page": "Docstrings",
    "title": "ConvexBodyProximityQueries.nearestfromsimplex",
    "category": "method",
    "text": "nearestfromsimplex(psimplex, qsimplex, dir2origin)\n\nCompute the nearest points between two simplexes given the direction to in origin in the Minkowski difference space\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConvexBodyProximityQueries.proj-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "ConvexBodyProximityQueries.proj",
    "category": "method",
    "text": "proj(u, v)\n\nCompute the vector projection of vector v onto vector u.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConvexBodyProximityQueries.support-Tuple{StaticArrays.SArray{Tuple{S1,S2},T,2,L} where L where T where S2 where S1,StaticArrays.SArray{Tuple{S},T,1,S} where T where S}",
    "page": "Docstrings",
    "title": "ConvexBodyProximityQueries.support",
    "category": "method",
    "text": "support(cvxpoly, dir)\n\nCompute the point of contact between a convex object and its supporting hyperplane defined by the given normal direction as a StaticArray.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ConvexBodyProximityQueries]\nOrder = [:type, :function]"
},

]}
