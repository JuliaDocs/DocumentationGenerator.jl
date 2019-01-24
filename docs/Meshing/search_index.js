var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Meshing-1",
    "page": "Readme",
    "title": "Meshing",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This package provides meshing algorithms for use on distance fields.Including:Marching Tetrahedra\nMarching Cubes"
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "Marching Tetrahedra was originally implemented by @twadleigh in Meshes.jl."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Available under the MIT \"Expat\" License, see LICENSE.md"
},

{
    "location": "autodocs/#Meshing.marching_cubes-Union{Tuple{SignedDistanceField{3,ST,FT}}, Tuple{M}, Tuple{FT}, Tuple{ST}, Tuple{SignedDistanceField{3,ST,FT},Any}, Tuple{SignedDistanceField{3,ST,FT},Any,Type{M}}, Tuple{SignedDistanceField{3,ST,FT},Any,Type{M},Any}} where M<:GeometryTypes.AbstractMesh where FT where ST",
    "page": "Docstrings",
    "title": "Meshing.marching_cubes",
    "category": "method",
    "text": "marching_cubes(sdf::SignedDistanceField, [iso = 0.0,] [MT = HomogenousMesh{Point{3,Float64},Face{3,Int}}])\n\nConstruct a HomogenousMesh from a SignedDistanceField using the marching cubes algorithm. This method is faster than Marching Tetrahedra and generates fewer vertices and faces (about 1/4 as many). However it may generate non-manifold meshes, while Marching Tetrahedra guarentees a manifold mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.VoxelIndices",
    "page": "Docstrings",
    "title": "Meshing.VoxelIndices",
    "category": "type",
    "text": "Voxel corner and edge indexing conventions\n\n    Z\n    |\n\n    5------5------6              Extra edges not drawn\n   /|            /|              -----------\n  8 |           6 |              - face diagonals\n /  9          /  10                - 13: 1 to 3\n8------7------7   |                 - 14: 1 to 8\n|   |         |   |                 - 15: 1 to 6\n|   1------1--|---2  -- Y           - 16: 5 to 7\n12 /          11 /                  - 17: 2 to 7\n| 4           | 2                   - 18: 4 to 7\n|/            |/                 - body diagonal\n4------3------3                     - 19: 1 to 7\n\n/  X\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing._correct_vertices!-Tuple{Any,GeometryTypes.SignedDistanceField}",
    "page": "Docstrings",
    "title": "Meshing._correct_vertices!",
    "category": "method",
    "text": "The marchingTetrahedra function returns vertices on the (1-based) indices of the SDF\'s data, ignoring its actual bounds. This function adjusts the vertices in place so that they correspond to points within the SDF bounds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.getVertId-Union{Tuple{IType}, Tuple{S}, Tuple{T}, Tuple{IType,IType,IType,IType,IType,IType,Array{T,1},Real,Dict{IType,Point{3,S}},Real,VoxelIndices{IType}}} where IType<:Integer where S<:Real where T<:Real",
    "page": "Docstrings",
    "title": "Meshing.getVertId",
    "category": "method",
    "text": "Gets the vertex ID, adding it to the vertex dictionary if not already present.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.hasFaces-Tuple{Array{#s833,1} where #s833<:Real,Real}",
    "page": "Docstrings",
    "title": "Meshing.hasFaces",
    "category": "method",
    "text": "Checks if a voxel has faces. Should be false for most voxels. This function should be made as fast as possible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.marchingTetrahedra-Union{Tuple{IT}, Tuple{T}, Tuple{AbstractArray{T,3},Real,Real,Type{IT}}} where IT<:Integer where T<:Real",
    "page": "Docstrings",
    "title": "Meshing.marchingTetrahedra",
    "category": "method",
    "text": "Given a 3D array and an isovalue, extracts a mesh represention of the an approximate isosurface by the method of marching tetrahedra.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.procVox-Union{Tuple{IType}, Tuple{S}, Tuple{T}, Tuple{Array{T,1},Real,IType,IType,IType,IType,IType,Dict{IType,Point{3,S}},Array{Face{3,IType},1},Real,VoxelIndices{IType}}} where IType<:Integer where S<:Real where T<:Real",
    "page": "Docstrings",
    "title": "Meshing.procVox",
    "category": "method",
    "text": "Processes a voxel, adding any new vertices and faces to the given containers as necessary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.tetIx-Union{Tuple{IType}, Tuple{IType,Array{#s835,1} where #s835<:Real,Real,VoxelIndices{IType}}} where IType<:Integer",
    "page": "Docstrings",
    "title": "Meshing.tetIx",
    "category": "method",
    "text": "Determines which case in the triangle table we are dealing with\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.vertId-Union{Tuple{IType}, Tuple{IType,IType,IType,IType,IType,IType,VoxelIndices{IType}}} where IType<:Integer",
    "page": "Docstrings",
    "title": "Meshing.vertId",
    "category": "method",
    "text": "Determines a unique integer ID associated with the edge. This is used as a key in the vertex dictionary. It needs to be both unambiguous (no two edges get the same index) and unique (every edge gets the same ID regardless of which of its neighboring voxels is asking for it) in order for vertex sharing to be implemented properly.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.vertPos-Union{Tuple{IType}, Tuple{T}, Tuple{IType,IType,IType,IType,Array{T,1},Real,Real,VoxelIndices{IType}}} where IType<:Integer where T<:Real",
    "page": "Docstrings",
    "title": "Meshing.vertPos",
    "category": "method",
    "text": "Assuming an edge crossing, determines the point in space at which it occurs. eps represents the \"bump\" factor to keep vertices away from voxel corners (thereby preventing degeneracies).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Meshing.voxEdgeId-Union{Tuple{IType}, Tuple{IType,IType,VoxelIndices{IType}}} where IType<:Integer",
    "page": "Docstrings",
    "title": "Meshing.voxEdgeId",
    "category": "method",
    "text": "Given a sub-tetrahedron case and a tetrahedron edge ID, determines the corresponding voxel edge ID.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Meshing]\nOrder = [:type, :function]"
},

]}
