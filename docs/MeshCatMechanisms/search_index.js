var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MeshCatMechanisms-1",
    "page": "Readme",
    "title": "MeshCatMechanisms",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)MeshCatMechanisms.jl adds support for visualizing mechanisms and robots from RigidBodyDynamics.jl with MeshCat.jl. All geometries are constructed using MechanismGeometries.jl.Features:Parsing geometry directly from URDF files\nAnimation of robot trajectories from RigidBodyDynamics.jl simulations\nLive rendering of simulation progress using the OdeIntegrators.OdeResultsSink interface\nInteractive manipulation of the mechanism configuration using InteractBase.jl"
},

{
    "location": "#Related-Projects-1",
    "page": "Readme",
    "title": "Related Projects",
    "category": "section",
    "text": "MeshCatMechanisms.jl provides similar functionality to RigidBodyTreeInspector.jl, but is built on top of the lighter-weight MeshCat viewer instead of DrakeVisualizer.jl."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Stable release:Pkg.add(\"MeshCatMechanisms\")Latest and greatest:Pkg.add(\"MeshCatMechanisms\")\nPkg.clone(\"https://github.com/rdeits/MechanismGeometries.jl\")\nPkg.checkout(\"MeshCatMechanisms\")\nPkg.checkout(\"MeshCat\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "See examples/demo.ipynb"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "(Image: )"
},

{
    "location": "autodocs/#MeshCatMechanisms.animate-Tuple{MechanismVisualizer,Array{Float64,1},AbstractArray{#s1289,1} where #s1289<:AbstractArray{Float64,1}}",
    "page": "Docstrings",
    "title": "MeshCatMechanisms.animate",
    "category": "method",
    "text": "animate(vis::MechanismVisualizer,\n        times::Vector{Float64},\n        configurations::Vector{Vector{Float64}};\n        fps::Float64=60, realtimerate::Float64=1.)\n\nAnimate the given mechanism passing through a time-coded series of configurations by linearly interpolating the configuration vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MeshCatMechanisms.setelement!",
    "page": "Docstrings",
    "title": "MeshCatMechanisms.setelement!",
    "category": "function",
    "text": "setelement!(mvis::MechanismVisualizer, point::Point3D, radius::Real=0.05, name::AbstractString=\"<element>\")\n\nAdd a HyperSphere geometry with the given radius to the visualizer at the given point\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MeshCatMechanisms.setelement!",
    "page": "Docstrings",
    "title": "MeshCatMechanisms.setelement!",
    "category": "function",
    "text": "setelement!(mvis::MechanismVisualizer, element::VisualElement, name::AbstractString=\"<element>\")\n\nAttach the given visual element to the visualizer. The element\'s frame will determine how its geometry is attached to the scene tree, so that any other geometries attached to the same body will all move together.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MeshCatMechanisms.setelement!",
    "page": "Docstrings",
    "title": "MeshCatMechanisms.setelement!",
    "category": "function",
    "text": "setelement!(mvis::MechanismVisualizer, frame::CartesianFrame3D, object::AbstractObject, name::AbstractString=\"<element>\")\n\nAttach the given geometric object (geometry + material) to the visualizer at the given frame\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MeshCatMechanisms.setelement!",
    "page": "Docstrings",
    "title": "MeshCatMechanisms.setelement!",
    "category": "function",
    "text": "setelement!(mvis::MechanismVisualizer, frame::CartesianFrame3D, geometry::GeometryLike, name::AbstractString=\"<element>\")\n\nAttach the given geometry to the visualizer at the given frame, using its default material.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MeshCatMechanisms.setelement!",
    "page": "Docstrings",
    "title": "MeshCatMechanisms.setelement!",
    "category": "function",
    "text": "setelement!(mvis::MechanismVisualizer, frame::CartesianFrame3D, geometry::GeometryLike, material::AbstractMaterial, name::AbstractString=\"<element>\")\n\nConstruct an object with the given geometry and material and attach it to the visualizer\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MeshCatMechanisms.setelement!",
    "page": "Docstrings",
    "title": "MeshCatMechanisms.setelement!",
    "category": "function",
    "text": "setelement!(mvis::MechanismVisualizer, frame::CartesianFrame3D, scale::Real=0.5, name::AbstractString=\"<element>\")\n\nAdd a Triad geometry with the given scale to the visualizer at the specified frame\n\n\n\n\n\n"
},

{
    "location": "autodocs/#RigidBodyDynamics.set_configuration!-Tuple{MechanismVisualizer,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "RigidBodyDynamics.set_configuration!",
    "category": "method",
    "text": "set_configuration!(mvis::MechanismVisualizer, args...)\n\nSet the configuration of the mechanism visualizer and re-render it.\n\nExamples\n\njulia> set_configuration!(vis, [1., 2., 3.])\n\njulia> set_configuration!(vis, findjoint(robot, \"shoulder\"), 1.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [MeshCatMechanisms]\nOrder = [:type, :function]"
},

]}
