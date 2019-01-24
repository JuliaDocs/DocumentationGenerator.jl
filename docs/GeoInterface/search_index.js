var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GeoInterface.jl-1",
    "page": "Readme",
    "title": "GeoInterface.jl",
    "category": "section",
    "text": "A Julia Protocol for Geospatial Data"
},

{
    "location": "#Motivation-1",
    "page": "Readme",
    "title": "Motivation",
    "category": "section",
    "text": "To support operations or visualization of multiple (but similar) implementations of vector data (across GeoJSON.jl, LibGEOS.jl, etc). As a starting point, it will follow the GEO interface [1] in Python (which in turn borrows its design from the GeoJSON specification [2])."
},

{
    "location": "#GEO-Interface-1",
    "page": "Readme",
    "title": "GEO Interface",
    "category": "section",
    "text": ""
},

{
    "location": "#AbstractPosition-1",
    "page": "Readme",
    "title": "AbstractPosition",
    "category": "section",
    "text": "A position can be thought of as a tuple of numbers. There must be at least two elements, and may be more. The order of elements must follow x, y, z order (e.g. easting, northing, altitude for coordinates in a projected coordinate reference system, or longitude, latitude, altitude for coordinates in a geographic coordinate reference system). It requires the following methods:xcoord(::AbstractPosition)::Float64\nycoord(::AbstractPosition)::Float64\nzcoord(::AbstractPosition)::Float64\nhasz(::AbstractPosition)::Bool (false by default)Remark: Although the specification allows the representation of up to 3 dimensions, not all algorithms support require all 3 dimensions. Also, if you are working with an arbitrary obj::AbstractPosition, you should call hasz(obj) before calling zcoord(obj)."
},

{
    "location": "#AbstractGeometry-1",
    "page": "Readme",
    "title": "AbstractGeometry",
    "category": "section",
    "text": "Represents vector geometry, and encompasses the following abstract types: AbstractPoint, AbstractMultiPoint, AbstractLineString, AbstractMultiLineString, AbstractMultiPolygon, AbstractPolygon. It requires the coordinates method, wherecoordinates(::AbstractPoint) returns a single position.\ncoordinates(::AbstractMultiPoint) returns a vector of positions.\ncoordinates(::AbstractLineString) returns a vector of positions.\ncoordinates(::AbstractMultiLineString) returns a vector of linestrings.\ncoordinates(::AbstractPolygon) returns a vector of linestrings.\ncoordinates(::AbstractMultiPolygon) returns a vector of polygons."
},

{
    "location": "#AbstractGeometryCollection-1",
    "page": "Readme",
    "title": "AbstractGeometryCollection",
    "category": "section",
    "text": "Represents a collection of geometries, and requires the geometries method, which returns a vector of geometries. Is also a subtype of AbstractGeometry."
},

{
    "location": "#AbstractFeature-1",
    "page": "Readme",
    "title": "AbstractFeature",
    "category": "section",
    "text": "Represents a geometry with additional attributes, and requires the following methodsgeometry(::AbstractFeature)::AbstractGeometry returns the corresponding geometry\nproperties(::AbstractFeature)::Dict{AbstractString,Any} returns a dictionary of the propertiesOptionally, you can also provide the following methodsbbox(::AbstractFeature)::AbstractGeometry returns the bounding box for that feature\ncrs(::AbstractFeature)::Dict{AbstractString,Any} returns the coordinate reference system"
},

{
    "location": "#Geospatial-Geometries-1",
    "page": "Readme",
    "title": "Geospatial Geometries",
    "category": "section",
    "text": "If you don\'t need to provide your own user types, GeoInterface also provides a set of geometries (below), which implements the GEO Interface:CRS\nPosition\nGeometry <: AbstractGeometry\nPoint <: AbstractPoint <: AbstractGeometry\nMultiPoint <: AbstractMultiPoint <: AbstractGeometry\nLineString <: AbstractLineString <: AbstractGeometry\nMultiLineString <: AbstractMultiLineString <: AbstractGeometry\nPolygon <: AbstractPolygon <: AbstractGeometry\nMultiPolygon <: AbstractMultiPolygon <: AbstractGeometry\nGeometryCollection <: AbstractGeometryCollection <: AbstractGeometry\nFeature <: AbstractFeature\nFeatureCollection <: AbstractFeatureCollection"
},

{
    "location": "#Remarks-1",
    "page": "Readme",
    "title": "Remarks",
    "category": "section",
    "text": "Conceptually,an ::AbstractGeometryCollection maps to a DataArray{::AbstractGeometry}, and\nan ::AbstractFeatureCollection maps to a DataFrame, where each row is an AbstractFeatureThe design of the types in GeoInterface differs from the GeoJSON specification in the following ways:Julia Geometries do not provide a bbox and crs method. If you wish to provide a bbox or crs attribute, wrap the geometry into a Feature or FeatureCollection.\nFeatures do not have special fields for id, bbox, and crs. These are to be provided (or found) in the properties field, under the keys featureid, bbox, and crs respectively (if they exist)."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1]: A Python Protocol for Geospatial Data (gist)[2]: GeoJSON Specification (website)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GeoInterface]\nOrder = [:type, :function]"
},

]}
