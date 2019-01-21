var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Overview",
    "title": "Overview",
    "category": "page",
    "text": ""
},

{
    "location": "#Simplices.jl-documentation-1",
    "page": "Overview",
    "title": "Simplices.jl documentation",
    "category": "section",
    "text": "Julia package for computing exact intersection volumes between n-dimensional simplices."
},

{
    "location": "#Release-info-1",
    "page": "Overview",
    "title": "Release info",
    "category": "section",
    "text": "Version 0.6.2 of the package is preliminary and only works for Julia 0.6. Volume computations have been tested for up to dimension 10, but the code is messy. A cleaned up version will be released for Julia 1.0."
},

{
    "location": "#Usage-1",
    "page": "Overview",
    "title": "Usage",
    "category": "section",
    "text": "Simplex intersections are computed by calling simplexintersection with the simplices in question. The simplices must be arrays of size (dim, dim + 1), so that each vertex of the simplex is a column vector.Simplex properties can also be computed for individual simplices. There are also some  functions that can be used to generate pairs of simplices that overlap in certain ways, or points that lie either outside or inside a simplex (Generation of (non)intersecting simplices/points)."
},

{
    "location": "#D-example-1",
    "page": "Overview",
    "title": "3D example",
    "category": "section",
    "text": "using Simplices\ns₁, s₂ = rand(3, 4), rand(3, 4)\nsimplexintersection(s₁, s₂)"
},

{
    "location": "#D-example-2",
    "page": "Overview",
    "title": "5D example",
    "category": "section",
    "text": "using Simplices\ns₃, s₄ = rand(4, 5), rand(4, 5)\nsimplexintersection(s₃, s₄)"
},

{
    "location": "simplexproperties/#",
    "page": "Properties of simplices",
    "title": "Properties of simplices",
    "category": "page",
    "text": ""
},

{
    "location": "simplexproperties/#Simplex-properties-1",
    "page": "Properties of simplices",
    "title": "Simplex properties",
    "category": "section",
    "text": "Given a simplex, the following functions calculate useful quantities.orientation(simplex::Array{T, 2}) where {T<:Number}volume(simplex::Array{T, 2}) where {T<:Number}radius(simplex::Array{T, 2}) where {T<:Number}radius(simplex::Array{T, 2}, centroid::Array{T, 2}) where {T<:Number}centroid(simplex::Array{T, 2}) where {T<:Number}"
},

{
    "location": "simplexintersection/#",
    "page": "How to calculate intersections?",
    "title": "How to calculate intersections?",
    "category": "page",
    "text": ""
},

{
    "location": "simplexintersection/#How-to-compute-intersections?-1",
    "page": "How to calculate intersections?",
    "title": "How to compute intersections?",
    "category": "section",
    "text": "The intersection between two n-dimensional simplices is calculated boundary triangulation."
},

{
    "location": "simplexintersection/#Boundary-triangulation-method-1",
    "page": "How to calculate intersections?",
    "title": "Boundary triangulation method",
    "category": "section",
    "text": "Intersections are computed as follows.Find minimal set of points generating the intersection volume. These points form a convex polytope Pᵢ.\nTriangulate the faces of Pᵢ into simplices.\nThen combine each resulting boundary simplex with an interior point in Pᵢ. The set of all such combinations now form a triangulation of Pᵢ.\nCalculate the volume of each simplex in the resulting triangulation. Summing over these volumes given the volume of the intersection."
},

{
    "location": "generatesimplices/#",
    "page": "Generate intersecting simplices",
    "title": "Generate intersecting simplices",
    "category": "page",
    "text": ""
},

{
    "location": "generatesimplices/#Generation-of-(non)intersecting-simplices/points-1",
    "page": "Generate intersecting simplices",
    "title": "Generation of (non)intersecting simplices/points",
    "category": "section",
    "text": ""
},

{
    "location": "generatesimplices/#Points-inside/outside-a-simplex-1",
    "page": "Generate intersecting simplices",
    "title": "Points inside/outside a simplex",
    "category": "section",
    "text": "Given a simplex, the following points can generate a point or simplices that lies either in the interior or outside that simplex.insidepoints(npts::Int, parentsimplex::Array{T, 2}) where {T<:Number}outsidepoint(parentsimplex::Array{T, 2}) where {T<:Number}outsidepoints(npts::Int, parentsimplex::Array{T, 2}) where {T<:Number}childsimplex(parentsimplex::Array{T, 2}) where {T<:Number}"
},

{
    "location": "generatesimplices/#Generating-simplices-that-intersect-1",
    "page": "Generate intersecting simplices",
    "title": "Generating simplices that intersect",
    "category": "section",
    "text": "There are many ways simplices possibly can intersect, but they all boil down to three cases: 1) there is no intersection, 2) they intersect along a common vertex or boundary, or 3) the intersection is more complex. The following functions generate simplices that either share at least one vertex, or simplices that intersect in nontrivial ways (i.e. intersection is not along a vertex or an edge).simplices_sharing_vertices(dim::Int)nontrivially_intersecting_simplices(dim::Int)"
},

{
    "location": "examples/#",
    "page": "Examples",
    "title": "Examples",
    "category": "page",
    "text": ""
},

{
    "location": "examples/#Examples-1",
    "page": "Examples",
    "title": "Examples",
    "category": "section",
    "text": "We\'ll use a few of the functions used for testing the package to demonstrate its usage. These aresimplices_sharing_vertices. Generate a set of simplices which intersect in some arbitrary way, but sharing at least one vertex.\nnontrivially_intersecting_simplices. Generate a set of non-trivially intersecting simplices (i.e. intersections are not only along boundaries or vertices).\nchildsimplex(parentsimplex). Generate a simplex completely contained within parentsimplex.Note that these functions take as inputs simplices of shape (dim + 1, dim). This will be fixed in a future release.In the examples, some of the functions used to generate simplices return the simplex arrays with rows as columns. Therefore, we transpose the simplices before calling simplexintersection."
},

{
    "location": "examples/#Simplices-sharing-vertices-1",
    "page": "Examples",
    "title": "Simplices sharing vertices",
    "category": "section",
    "text": "Let\'s compute the intersection between a set of simplices that share at least one vertex.using Simplices\ns₁, s₂ = transpose.(simplices_sharing_vertices(3))\n\nsimplexintersection(s₁, s₂)"
},

{
    "location": "examples/#Nontrivially-intersecting-simplices-1",
    "page": "Examples",
    "title": "Nontrivially intersecting simplices",
    "category": "section",
    "text": "Simplices can also intersect in nontrivial ways, meaning that they have an  intersection beyond a common boundary or vertex.using Simplices\ns₁, s₂ = transpose.(nontrivially_intersecting_simplices(3))\nsimplexintersection(s₁, s₂)"
},

{
    "location": "examples/#One-simplex-fully-contained-within-the-other-1",
    "page": "Examples",
    "title": "One simplex fully contained within the other",
    "category": "section",
    "text": "We\'ll generate a random simplex s₁, then generate a simplex s₂ fully contained within that simplex. If s₂ is fully contained, the intersection volume should be the volume of s₂.using Simplices\n\nDs =  2:10;\nintersection_vols = zeros(Float64, length(Ds));\nanalytical_vols   = zeros(Float64, length(Ds));\nfor i = 1:length(Ds)\n    s₁ = rand(Ds[i] + 1, Ds[i])\n    s₂ = childsimplex(s₁)\n    intersection_vols[i] = simplexintersection(s₁.\', s₂.\')\n    analytical_vols[i] = volume(s₂)\nend\nhcat(intersection_vols, analytical_vols)\n\n\n# Within numerical error, the results should be the same.\n\nall([isapprox(intersection_vols[i], analytical_vols[i];\n    atol = 1e-9) for i = 1:length(Ds)])"
},

{
    "location": "examples/#Simplices-are-identical-1",
    "page": "Examples",
    "title": "Simplices are identical",
    "category": "section",
    "text": "If simplices are identical, the intersection volume should equal the volume of either simplex:using Simplices\n\ns₁ = rand(4, 3); s₂ = s₁;\n\nsimplexintersection(s₁.\', s₂.\') .≈ volume(s₁) .≈ volume(s₂)"
},

{
    "location": "funcs/#",
    "page": "Function reference",
    "title": "Function reference",
    "category": "page",
    "text": ""
},

{
    "location": "funcs/#Function-reference-1",
    "page": "Function reference",
    "title": "Function reference",
    "category": "section",
    "text": ""
},

{
    "location": "funcs/#Simplices.simplexintersection-Tuple{Array{Float64,2},Array{Float64,2}}",
    "page": "Function reference",
    "title": "Simplices.simplexintersection",
    "category": "method",
    "text": "  simplexintersection(S1::Array{Float64, 2}, S2::Array{Float64, 2};\n    tolerance::Float64 = 1/10^10) -> Float64\n\nComputes the volume of intersection between two n-dimensional simplices by boundary triangulation. The simplices S1 and S2 are arrays of (n, n+1), where each column is a vertex.\n\nHow are intersections computed?\n\nIntersections are computed as follows:\n\nFind minimal set of points generating the intersection volume. These points form\n\na convex polytope Pᵢ.\n\nTriangulate the faces of Pᵢ into simplices.\nCombine each boundary simplex with an interior point in Pᵢ. The set of\n\nall such combinations form a triangulation of Pᵢ.\n\nCalculate the volume of each simplex in the resulting triangulation. The\n\nsum of these volumes is the volume of the intersection.\n\n\n\n\n\n"
},

{
    "location": "funcs/#Intersection-1",
    "page": "Function reference",
    "title": "Intersection",
    "category": "section",
    "text": "simplexintersection(S1::Array{Float64, 2}, S2::Array{Float64, 2};\n		tolerance::Float64 = 1/10^10)"
},

{
    "location": "funcs/#Simplices.insidepoints-Union{Tuple{T}, Tuple{Int64,Array{T,2}}} where T<:Number",
    "page": "Function reference",
    "title": "Simplices.insidepoints",
    "category": "method",
    "text": "insidepoints(npts::Int, parentsimplex::AbstractArray{T, 2}) where {T<:Number}\n\nGenerates npts points that located inside parentsimplex.\n\n\n\n\n\n"
},

{
    "location": "funcs/#Simplices.outsidepoint-Union{Tuple{Array{T,2}}, Tuple{T}} where T<:Number",
    "page": "Function reference",
    "title": "Simplices.outsidepoint",
    "category": "method",
    "text": "outsidepoint(parentsimplex::AbstractArray{T, 2}) where {T<:Number}\n\nGenerate a single point that is guaranteed to lie outside parentsimplex.\n\n\n\n\n\n"
},

{
    "location": "funcs/#Simplices.outsidepoints-Union{Tuple{T}, Tuple{Int64,Array{T,2}}} where T<:Number",
    "page": "Function reference",
    "title": "Simplices.outsidepoints",
    "category": "method",
    "text": "outsidepoints(npts::Int, parentsimplex::AbstractArray{T, 2}) where T <: Number\n\nGenerates npts points that located outside parentsimplex.\n\n\n\n\n\n"
},

{
    "location": "funcs/#Simplices.childsimplex-Union{Tuple{Array{T,2}}, Tuple{T}} where T<:Number",
    "page": "Function reference",
    "title": "Simplices.childsimplex",
    "category": "method",
    "text": "childsimplex(parentsimplex::AbstractArray{T, 2}) where {T<:Number} -> Array{Float64, 2}\n\nGenerates a random simplex which is entirely contained within parentsimplex, which is a (dim+1)-by-dim array.\n\n\n\n\n\n"
},

{
    "location": "funcs/#Simplices.simplices_sharing_vertices-Tuple{Int64}",
    "page": "Function reference",
    "title": "Simplices.simplices_sharing_vertices",
    "category": "method",
    "text": "simplices_sharing_vertices(dim::Int) -> Array{Float64, 2}\n\nGenereate a set of non-trivially intersecting dim-dimensional simplices (i.e. they don\'t intersect along boundaries or vertices only).\n\n\n\n\n\n"
},

{
    "location": "funcs/#Simplices.nontrivially_intersecting_simplices-Tuple{Int64}",
    "page": "Function reference",
    "title": "Simplices.nontrivially_intersecting_simplices",
    "category": "method",
    "text": "nontrivially_intersecting_simplices(dim::Int) -> Array{Float64, 2}\n\nGenereate a set of non-trivially intersecting dim-dimensional simplices (i.e. they don\'t intersect along boundaries or vertices only).\n\n\n\n\n\n"
},

{
    "location": "funcs/#Generate-(non)intersecting-simplices/points-1",
    "page": "Function reference",
    "title": "Generate (non)intersecting simplices/points",
    "category": "section",
    "text": "insidepoints(npts::Int, parentsimplex::Array{T, 2}) where {T<:Number}outsidepoint(parentsimplex::Array{T, 2}) where {T<:Number}outsidepoints(npts::Int, parentsimplex::Array{T, 2}) where {T<:Number}childsimplex(parentsimplex::Array{T, 2}) where {T<:Number}simplices_sharing_vertices(dim::Int)nontrivially_intersecting_simplices(dim::Int)"
},

{
    "location": "funcs/#Simplices.volume-Union{Tuple{Array{T,2}}, Tuple{T}} where T<:Number",
    "page": "Function reference",
    "title": "Simplices.volume",
    "category": "method",
    "text": "volume(simplex::AbstractArray{T, 2}) where {T<:Number} -> Float64\n\nCompute the volume of a simplex, represented by a Array{Float64, 2} of size (dim+1)-by-dim.\n\n\n\n\n\n"
},

{
    "location": "funcs/#Simplices.centroid-Union{Tuple{Array{T,2}}, Tuple{T}} where T<:Number",
    "page": "Function reference",
    "title": "Simplices.centroid",
    "category": "method",
    "text": "centroid(simplex::AbstractArray{Float64, 2}) where {T<:Number} -> Array{Float64, 2}\n\nComputes the centroid of a simplex given by (dim+1)-by-dim array, where each row is a vertex. Returns the centroid as a vertex (a 1-by-dim two-dimensional array).\n\n\n\n\n\n"
},

{
    "location": "funcs/#Properties-of-simplices-1",
    "page": "Function reference",
    "title": "Properties of simplices",
    "category": "section",
    "text": "orientation(simplex::Array{T, 2}) where {T<:Number}volume(simplex::Array{T, 2}) where {T<:Number}radius(simplex::Array{T, 2}) where {T<:Number}radius(simplex::Array{T, 2}, centroid::Array{T, 2}) where {T<:Number}centroid(simplex::Array{T, 2}) where {T<:Number}"
},

]}
