var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LorentzVectors.jl-1",
    "page": "Readme",
    "title": "LorentzVectors.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io) (Image: lifecycle)This package defines the LorentzVector{T} and SpatialVector{T} types for use in computations involving Special Relativity. These types are statically allocated and should therefore be very fast.The usual algebraic operations are implemented, as well as some domain-specific functions (such as boost) and many convenience methods.The signature of the Minkowski metric (used for the inner product) is +,-,-,-."
},

{
    "location": "#:arrow_down:-Installing-1",
    "page": "Readme",
    "title": ":arrow_down: Installing",
    "category": "section",
    "text": "From the Julia REPL:(v1.0) pkg> add https://github.com/Element-126/LorentzVectors.jl.git"
},

{
    "location": "#:information_source:-Usage-1",
    "page": "Readme",
    "title": ":information_source: Usage",
    "category": "section",
    "text": "using LorentzVectors\n\np1 = Vec4(10, 0, 0, 10)\np2 = Vec4(7, 0, 1, 5)\n\nm1 = √(p1⋅p1)\n@assert m1 == 0 # p1 is lightlike, so its mass must be zero\nm2 = √(p2⋅p2)\n@assert m2 > 0\n\nβ1 = Vec3(p1/p1.t)\n@assert norm(β1) ≈ 1 # Check that p1 travels at the speed of light\n\np2_rest = boost(p2, p2/p2.t) # Boost p2 to its rest frame\n@assert p2_rest.t ≈ m2 # Check that its energy at rest is equal to its mass\n\n@assert boost(p2, zero(Vec3)) ≈ p2 # Identity boost\n\np_tot = p1 + p2\nβ_cm = p_tot/p_tot.t # Compute the velocity of the center of mass (CM)\np1_cm = boost(p1, β_cm) # Boost p1 and p2 to the CM frame\np2_cm = boost(p2, β_cm)\n@assert norm(Vec3(p1_cm + p2_cm)) < 1e-12 # Check that the spatial parts cancel in the CM\n\nu1 = rand(Vec3{Float64}) # Generate a random 3-vector on the unit sphere\n@assert norm(u1) ≈ 1\nu2 = normalize(Vec3(p2)) # Extract the spatial direction of p2\n@assert norm(u2) ≈ 1\n\n@assert Vec4 === LorentzVector # Long forms\n@assert Vec3 === SpatialVector\n\nx = Vec3(1f0, 0, 0) # Float64 is used by default, but it can be overriden\n@assert typeof(x) == Vec3{Float32}For more examples, have a look in the test directory."
},

{
    "location": "#:heart:-Contributing-1",
    "page": "Readme",
    "title": ":heart: Contributing",
    "category": "section",
    "text": "All contributions and suggestions are welcome ! Just open an issue or directly send a PR."
},

{
    "location": "autodocs/#LorentzVectors.LorentzVector",
    "page": "Docstrings",
    "title": "LorentzVectors.LorentzVector",
    "category": "type",
    "text": "LorentzVector(t, x, y, z)\n\nLorentz 4-vector, as used in Special Relativity.\n\nThe metric convention is g = diag(+1,-1,-1,-1). No distinction is made between co- and contravariant vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LorentzVectors.LorentzVector-NTuple{4,Any}",
    "page": "Docstrings",
    "title": "LorentzVectors.LorentzVector",
    "category": "method",
    "text": "LorentzVector(t, x, y, z)\n\nPromoting constructors for LorentzVector{T}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LorentzVectors.LorentzVector-Union{Tuple{U}, Tuple{T}, Tuple{T,SpatialVector{U}}} where U where T",
    "page": "Docstrings",
    "title": "LorentzVectors.LorentzVector",
    "category": "method",
    "text": "LorentzVector(t, u)\n\nConstruct a 4-vector from a time component and a 3-vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LorentzVectors.SpatialVector",
    "page": "Docstrings",
    "title": "LorentzVectors.SpatialVector",
    "category": "type",
    "text": "SpatialVector(x, y, z)\n\nSpatial part of a Lorentz 4-vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LorentzVectors.SpatialVector-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "LorentzVectors.SpatialVector",
    "category": "method",
    "text": "SpatialVector(x, y, z)\n\nPromoting constructors for SpatialVector{T}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LorentzVectors.SpatialVector-Tuple{LorentzVector}",
    "page": "Docstrings",
    "title": "LorentzVectors.SpatialVector",
    "category": "method",
    "text": "SpatialVector(u)\n\nConstruct a 3-vector from the spatial part of a 4-vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LorentzVectors.Vec3",
    "page": "Docstrings",
    "title": "LorentzVectors.Vec3",
    "category": "type",
    "text": "Alias of SpatialVector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LorentzVectors.Vec4",
    "page": "Docstrings",
    "title": "LorentzVectors.Vec4",
    "category": "type",
    "text": "Alias of LorentzVector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.rand-Union{Tuple{V}, Tuple{U}, Tuple{MersenneTwister,Type{V}}} where V<:SpatialVector{U} where U<:Real",
    "page": "Docstrings",
    "title": "Base.rand",
    "category": "method",
    "text": "rand(rng, SpatialVector)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.zero-Union{Tuple{Type{LorentzVector{T}}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "Base.zero",
    "category": "method",
    "text": "zero(LorentzVector{T})\nzero(LorentzVector)\n\nConstructs a zero four-vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.zero-Union{Tuple{Type{SpatialVector{T}}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "Base.zero",
    "category": "method",
    "text": "zero(SpatialVector{T})\nzero(SpatialVector)\n\nConstructs a zero three-vector.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.dot-Tuple{LorentzVector,LorentzVector}",
    "page": "Docstrings",
    "title": "LinearAlgebra.dot",
    "category": "method",
    "text": "dot(u, v)\nu⋅v\n\nInner product of 4-vectors, in the Minkowsky metric (+,-,-,-).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.norm-Tuple{SpatialVector}",
    "page": "Docstrings",
    "title": "LinearAlgebra.norm",
    "category": "method",
    "text": "norm(x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.normalize-Tuple{SpatialVector}",
    "page": "Docstrings",
    "title": "LinearAlgebra.normalize",
    "category": "method",
    "text": "normalize(x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LorentzVectors]\nOrder = [:type, :function]"
},

]}
