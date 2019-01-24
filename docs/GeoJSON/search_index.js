var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GeoJSON.jl-1",
    "page": "Readme",
    "title": "GeoJSON.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build Status) (Image: Coverage Status)This library is developed independently of, but is heavily influenced in design by the python-geojson package. It contains:Functions for encoding and decoding GeoJSON formatted data\na type hierarchy (according to the GeoJSON specification)\nAn implementation of the __geo_interface__, a GeoJSON-like protocol for geo-spatial (GIS) vector data."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"GeoJSON\")\n# Running Pkg.update() will always give you the freshest version of GeoJSON\n# Double-check that it works:\nPkg.test(\"GeoJSON\")"
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": "Although we use GeoInterface types for representing GeoJSON objects, it works in tandem with the JSON.jl package, for parsing ~~and printing~~ objects. Here are some examples of its functionality:Parses a GeoJSON String or IO stream into a GeoInterface objectjulia> using GeoJSON\njulia> osm_buildings = \"\"\"{\n                \"type\": \"FeatureCollection\",\n                \"features\": [{\n                  \"type\": \"Feature\",\n                  \"geometry\": {\n                    \"type\": \"Polygon\",\n                    \"coordinates\": [\n                      [\n                        [13.42634, 52.49533],\n                        [13.42660, 52.49524],\n                        [13.42619, 52.49483],\n                        [13.42583, 52.49495],\n                        [13.42590, 52.49501],\n                        [13.42611, 52.49494],\n                        [13.42640, 52.49525],\n                        [13.42630, 52.49529],\n                        [13.42634, 52.49533]\n                      ]\n                    ]\n                  },\n                  \"properties\": {\n                    \"color\": \"rgb(255,200,150)\",\n                    \"height\": 150\n                  }\n                }]\n              }\"\"\"\njulia> buildings = GeoJSON.parse(osm_buildings) # GeoJSON.parse -- parse a GeoJSON string or stream\nGeoInterface.FeatureCollection{GeoInterface.Feature}(GeoInterface.Feature[GeoInterface.Feature(GeoInterface.Polygon(Array{Array{Float64,1},1}[Array{Float64,1}[[13.4263,52.4953],[13.4266,52.4952],[13.4262,52.4948],[13.4258,52.495],[13.4259,52.495],[13.4261,52.4949],[13.4264,52.4952],[13.4263,52.4953],[13.4263,52.4953]]]),Dict{String,Any}(Pair{String,Any}(\"height\",150),Pair{String,Any}(\"color\",\"rgb(255,200,150)\")))],nothing,nothing)Use GeoJSON.parsefile(\"tech_square.geojson\") to read GeoJSON files from disk.Transforms a GeoInterface object into a nested Array or Dictjulia> dict = geo2dict(buildings) # geo2dict -- GeoInterface object to Dict/Array-representation\nDict{String,Any} with 2 entries:\n  \"features\" => Dict{String,Any}[Dict{String,Any}(Pair{String,Any}(\"geometry\",Dict{String,Any}(Pair{String,Any}(\"coordi…\n  \"type\"     => \"FeatureCollection\"\n\njulia> JSON.parse(osm_buildings) # should be comparable (if not the same)\nDict{String,Any} with 2 entries:\n  \"features\" => Any[Dict{String,Any}(Pair{String,Any}(\"geometry\",Dict{String,Any}(Pair{String,Any}(\"coordinates\",Any[An…\n  \"type\"     => \"FeatureCollection\"Transforms from a nested Array/Dict to a GeoInterface objectjulia> dict2geo(dict)\nGeoInterface.FeatureCollection{GeoInterface.Feature}(GeoInterface.Feature[GeoInterface.Feature(GeoInterface.Polygon(Array{Array{Float64,1},1}[Array{Float64,1}[[13.4263,52.4953],[13.4266,52.4952],[13.4262,52.4948],[13.4258,52.495],[13.4259,52.495],[13.4261,52.4949],[13.4264,52.4952],[13.4263,52.4953],[13.4263,52.4953]]]),Dict{String,Any}(Pair{String,Any}(\"height\",150),Pair{String,Any}(\"color\",\"rgb(255,200,150)\")))],nothing,nothing)\n\njulia> GeoJSON.parse(osm_buildings) # the original object (for comparison)\nGeoInterface.FeatureCollection{GeoInterface.Feature}(GeoInterface.Feature[GeoInterface.Feature(GeoInterface.Polygon(Array{Array{Float64,1},1}[Array{Float64,1}[[13.4263,52.4953],[13.4266,52.4952],[13.4262,52.4948],[13.4258,52.495],[13.4259,52.495],[13.4261,52.4949],[13.4264,52.4952],[13.4263,52.4953],[13.4263,52.4953]]]),Dict{String,Any}(Pair{String,Any}(\"height\",150),Pair{String,Any}(\"color\",\"rgb(255,200,150)\")))],nothing,nothing)Writing back GeoJSON strings is not yet implemented"
},

{
    "location": "#GeoInterface-1",
    "page": "Readme",
    "title": "GeoInterface",
    "category": "section",
    "text": "This library implements the GeoInterface. For more information on the types that are returned by this package, and the methods that can be used on them, refer to the documentation of the GeoInterface package."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GeoJSON]\nOrder = [:type, :function]"
},

]}
