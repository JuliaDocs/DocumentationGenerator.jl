var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BritishNationalGrid-1",
    "page": "Readme",
    "title": "BritishNationalGrid",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status)"
},

{
    "location": "#Convert-between-WGS84-coordinates-and-British-National-Grid-references-1",
    "page": "Readme",
    "title": "Convert between WGS84 coordinates and British National Grid references",
    "category": "section",
    "text": "BritishNationalGrid provides the type BNGPoint to convert between longitude-latitude and grid references in the British National Grid system. It assumes your points are geodetic longitude and latitude in decimal degrees using the WGS84 ellipsoid.This package is reliable to within a metre or so.  Advanced users needing greater accuracy will probably already know how to convert between different systems, but any additions to the package that remain easy to use will be welcome."
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "julia> Pkg.add(\"https://github.com/anowacki/BritishNationalGrid.jl\")The package only supports Julia v0.6, v0.7 and v1."
},

{
    "location": "#Use-1",
    "page": "Readme",
    "title": "Use",
    "category": "section",
    "text": "Construct points in the grid using BNGPoint.julia> using BritishNationalGrid\n\njulia> p1 = BNGPoint(42513, 100231) # Full grid reference\nBritishNationalGrid.BNGPoint{Int64}(42513, 100231)\n\njulia> lonlat(p1) # Convert to longitude-latitude (°)\n(-7.063648859478239, 50.691553069358555)\n\njulia> p2 = BNGPoint(lon=0.32, lat=51.0) # Construct point from lon-lat\nBritishNationalGrid.BNGPoint{Float64}(562885.4557430055, 124851.2191743746)\n\njulia> p3 = BNGPoint(00123, 51422, \"TA\") # Construct from 100 km square name\nBritishNationalGrid.BNGPoint{Int64}(500123, 451422)Get a formatted grid reference:julia> gridref(p1, 10) # 10-figure grid reference\n\"04251 10023\"\n\njulia> gridref(p2, 6, true) # 6-figure reference within the 100 km square TQ\n\"TQ 628 248\"Find the 100 km square in which a point lies:julia> square(p3)\n\"TA\""
},

{
    "location": "#Todo-1",
    "page": "Readme",
    "title": "Todo",
    "category": "section",
    "text": "Tie the BNGPoint type into Geodesy.jl."
},

{
    "location": "#Other-ways-to-convert-to-the-British-National-Grid-1",
    "page": "Readme",
    "title": "Other ways to convert to the British National Grid",
    "category": "section",
    "text": "Use the Ordnance Survey\'s online converter.  This also includes links to the OS\'s Pascal programs to do coordinate transforms.\nUse the British Geological Survey\'s online converter, which also assumes WGS84 longitude and latitude."
},

{
    "location": "autodocs/#BritishNationalGrid.BNGPoint",
    "page": "Docstrings",
    "title": "BritishNationalGrid.BNGPoint",
    "category": "type",
    "text": "Type\n\nBNGPoint{T<:Real}\n\nA struct holding the easting, northing and square of a point within the British National Grid.\n\nConstructors\n\nBNGPoint(e, n)\n\nProvide eastings e and northings n in m from the grid origin.\n\nBNGPoint(e, n, square)\n\nProvide a point within a 100 km square and its name as a two-character string, creating a point with a full reference\n\njulia> BNGPoint(101, 12345, \"OV\")\nBritishNationalGrid.BNGPoint{Int64}(500101, 512345)\n\n\nBNGPoint(; lon=0, lat=0)\n\nConvert a WGS84 longitude lon and latitude lat in degrees, into a grid point.\n\njulia> BNGPoint(lon=-1.54, lat=55.5)\nBritishNationalGrid.BNGPoint{Float64}(429157.5035843846, 623009.046274823)\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BritishNationalGrid.gridref",
    "page": "Docstrings",
    "title": "BritishNationalGrid.gridref",
    "category": "function",
    "text": "gridref(p::BNGPoint, n, square:false, separator=\" \")\n\nReturn a string giving an n-figure grid reference.  By default, a full reference is given.  If square is true, then supply the 100 km square name first, then the reference within that square.  The square, eastings and northings are separated by separator.\n\njulia> gridref(BNGPoint(429157, 623009), 8, true, separator=\"_\")\n\"NU_2915_2300\"\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BritishNationalGrid.lonlat-Tuple{BNGPoint}",
    "page": "Docstrings",
    "title": "BritishNationalGrid.lonlat",
    "category": "method",
    "text": "lonlat(p::BNGPoint) -> lon, lat\n\nReturn the WGS84 longitude lon and latitude lat in decimal degrees for the point p.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BritishNationalGrid.square-Tuple{BNGPoint}",
    "page": "Docstrings",
    "title": "BritishNationalGrid.square",
    "category": "method",
    "text": "square(p::BNGPoint) -> XX::String\n\nReturn a two-character string XX containing the name of the 100 km-by 100 km square in which is located the point p.\n\njulia> using BritishNationalGrid\n\njulia> BritishNationalGrid.square(BNGPoint(200_000, 1_000_000))\n\"HX\"\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BritishNationalGrid.in_grid-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "BritishNationalGrid.in_grid",
    "category": "method",
    "text": "in_grid(e, n) -> ::Bool\n\nReturn true if the easting e and northing n (in m) are within the British National Grid, and false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BritishNationalGrid.lonlat2bng-Union{Tuple{T2}, Tuple{T1}, Tuple{T1,T2}} where T2<:Real where T1<:Real",
    "page": "Docstrings",
    "title": "BritishNationalGrid.lonlat2bng",
    "category": "method",
    "text": "lonlat2bng(lon, lat) -> easting, northing\nlonlat2bng(lon::AbstractArray, lat::AbstractArray) -> A::Array\n\nTransform from longitude and latitude in WGS84 into BNG easting and northing (m). The first form does so for scalars and returns a tuple; the second form does so for length-n arrays and returns a n-by-2 array where the first column is the easting, and the second is the northing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BritishNationalGrid.square_names-Tuple{}",
    "page": "Docstrings",
    "title": "BritishNationalGrid.square_names",
    "category": "method",
    "text": "square_names() -> names::Array{String,2}\n\nBuild the two-letter codes of each 100 km-b-100 km square of the grid. Access the names by:\n\njulia> using BritishNationalGrid\n\njulia> easting, northing = 200_000, 1_000_000\n(200000, 1000000)\n\njulia> squares = BritishNationalGrid.square_names()\n13×7 Array{String,2}:\n \"SV\"  \"SW\"  \"SX\"  \"SY\"  \"SZ\"  \"TV\"  \"TW\"\n \"SQ\"  \"SR\"  \"SS\"  \"ST\"  \"SU\"  \"TQ\"  \"TR\"\n \"SL\"  \"SM\"  \"SN\"  \"SO\"  \"SP\"  \"TL\"  \"TM\"\n \"SF\"  \"SG\"  \"SH\"  \"SJ\"  \"SK\"  \"TF\"  \"TG\"\n \"SA\"  \"SB\"  \"SC\"  \"SD\"  \"SE\"  \"TA\"  \"TB\"\n \"NV\"  \"NW\"  \"NX\"  \"NY\"  \"NZ\"  \"OV\"  \"OW\"\n \"NQ\"  \"NR\"  \"NS\"  \"NT\"  \"NU\"  \"OQ\"  \"OR\"\n \"NL\"  \"NM\"  \"NN\"  \"NO\"  \"NP\"  \"OL\"  \"OM\"\n \"NF\"  \"NG\"  \"NH\"  \"NJ\"  \"NK\"  \"OF\"  \"OG\"\n \"NA\"  \"NB\"  \"NC\"  \"ND\"  \"NE\"  \"OA\"  \"OB\"\n \"HV\"  \"HW\"  \"HX\"  \"HY\"  \"HZ\"  \"JV\"  \"JW\"\n \"HQ\"  \"HR\"  \"HS\"  \"HT\"  \"HU\"  \"JQ\"  \"JR\"\n \"HL\"  \"HM\"  \"HN\"  \"HO\"  \"HP\"  \"JL\"  \"JM\"\n\njulia> squares[floor(Int, northing/100_000)+1, floor(Int, easting/100_000)+1]\n\"HX\"\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BritishNationalGrid]\nOrder = [:type, :function]"
},

]}
