var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "DependenciesParser.jl",
    "title": "DependenciesParser.jl",
    "category": "page",
    "text": ""
},

{
    "location": "#DependenciesParser.alldeps",
    "page": "DependenciesParser.jl",
    "title": "DependenciesParser.alldeps",
    "category": "function",
    "text": "alldeps(julia::VersionNumber = VersionNumber(1))::Vector{NameRepoVerDeps}\n\nReturns information for all installable packages for the selected julia version\n\n\n\n\n\n"
},

{
    "location": "#DependenciesParser.dependencies",
    "page": "DependenciesParser.jl",
    "title": "DependenciesParser.dependencies",
    "category": "function",
    "text": "dependencies(name::AbstractString,\n             direct::Bool = false,\n             data::VersionNumber = DependenciesParser.data)::Vector{String}\n\nReturns all dependencies for the package (excludes stdlib)\nWhen direct is true, only direct dependencies are returned\nDependencies.data = alldeps()\n\n\n\n\n\n"
},

{
    "location": "#DependenciesParser.NameRepoVerDeps",
    "page": "DependenciesParser.jl",
    "title": "DependenciesParser.NameRepoVerDeps",
    "category": "type",
    "text": "NameRepoVerDeps\n\nAlias for NamedTuple struct used for name, repository, version, and dependencies.\n\n\n\n\n\n"
},

{
    "location": "#DependenciesParser.jl-1",
    "page": "DependenciesParser.jl",
    "title": "DependenciesParser.jl",
    "category": "section",
    "text": "DependenciesParser.jl is a package for quickly obtaining the list of dependencies for packages.alldeps\ndependencies\nNameRepoVerDeps"
},

]}
