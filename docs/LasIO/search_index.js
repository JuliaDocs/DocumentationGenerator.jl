var documenterSearchIndex = {"docs": [

{
    "location": "#ColorTypes.RGB-Tuple{Union{LasPoint2, LasPoint3}}",
    "page": "Home",
    "title": "ColorTypes.RGB",
    "category": "method",
    "text": "The RGB color associated with this point\n\n\n\n\n\n"
},

{
    "location": "#LasIO.LasPoint",
    "page": "Home",
    "title": "LasIO.LasPoint",
    "category": "type",
    "text": "Abstract type for ASPRS LAS point data record formats 0 - 3\n\n\n\n\n\n"
},

{
    "location": "#LasIO.LasPoint0",
    "page": "Home",
    "title": "LasIO.LasPoint0",
    "category": "type",
    "text": "ASPRS LAS point data record format 0\n\n\n\n\n\n"
},

{
    "location": "#LasIO.LasPoint1",
    "page": "Home",
    "title": "LasIO.LasPoint1",
    "category": "type",
    "text": "ASPRS LAS point data record format 1\n\n\n\n\n\n"
},

{
    "location": "#LasIO.LasPoint2",
    "page": "Home",
    "title": "LasIO.LasPoint2",
    "category": "type",
    "text": "ASPRS LAS point data record format 2\n\n\n\n\n\n"
},

{
    "location": "#LasIO.LasPoint3",
    "page": "Home",
    "title": "LasIO.LasPoint3",
    "category": "type",
    "text": "ASPRS LAS point data record format 3\n\n\n\n\n\n"
},

{
    "location": "#LasIO.LasVariableLengthRecord",
    "page": "Home",
    "title": "LasIO.LasVariableLengthRecord",
    "category": "type",
    "text": "A LAS \"variable length record\" - the generic way to store extra user or organization defined binary metadata in LAS files.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.LasVariableLengthRecord-Tuple{LasHeader,LasIO.SRID}",
    "page": "Home",
    "title": "LasIO.LasVariableLengthRecord",
    "category": "method",
    "text": "Construct a projection VLR based on an EPSG code\n\n\n\n\n\n"
},

{
    "location": "#LasIO.PointVector",
    "page": "Home",
    "title": "LasIO.PointVector",
    "category": "type",
    "text": "Custom PointVector struct for memory mapped LasPoints. Inspiration taken from UnalignedVector.jl and extended it with custom indexing and packing.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.blue-Tuple{Union{LasPoint2, LasPoint3}}",
    "page": "Home",
    "title": "ColorTypes.blue",
    "category": "method",
    "text": "The blue image channel value associated with this point\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.green-Tuple{Union{LasPoint2, LasPoint3}}",
    "page": "Home",
    "title": "ColorTypes.green",
    "category": "method",
    "text": "The green image channel value associated with this point\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.red-Tuple{Union{LasPoint2, LasPoint3}}",
    "page": "Home",
    "title": "ColorTypes.red",
    "category": "method",
    "text": "The red image channel value associated with this point\n\n\n\n\n\n"
},

{
    "location": "#LasIO.classification-Tuple{LasPoint}",
    "page": "Home",
    "title": "LasIO.classification",
    "category": "method",
    "text": "Classification value as defined in the ASPRS classification table.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.edge_of_flight_line-Tuple{LasPoint}",
    "page": "Home",
    "title": "LasIO.edge_of_flight_line",
    "category": "method",
    "text": "If true, it is the last point before the scanner changes direction.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.flag_byte-Tuple{LasPoint}",
    "page": "Home",
    "title": "LasIO.flag_byte",
    "category": "method",
    "text": "Flag byte, contains return number, number of returns, scan direction flag and edge of flight line\n\n\n\n\n\n"
},

{
    "location": "#LasIO.flag_byte-Tuple{UInt8,UInt8,Bool,Bool}",
    "page": "Home",
    "title": "LasIO.flag_byte",
    "category": "method",
    "text": "Flag byte, as represented in the point data, built up from components\n\n\n\n\n\n"
},

{
    "location": "#LasIO.gps_time-Tuple{Dates.DateTime}",
    "page": "Home",
    "title": "LasIO.gps_time",
    "category": "method",
    "text": "Convert DateTime to GPS Float64, as represented in the point data, assumes time is recorded in Adjusted Standard GPS Time; see is_standard_gps\n\n\n\n\n\n"
},

{
    "location": "#LasIO.gps_time-Tuple{Union{LasPoint1, LasPoint3}}",
    "page": "Home",
    "title": "LasIO.gps_time",
    "category": "method",
    "text": "Time tag value at which the point was aquired, a Float64; see is_standard_gps for what it represents\n\n\n\n\n\n"
},

{
    "location": "#LasIO.intensity-Tuple{LasPoint}",
    "page": "Home",
    "title": "LasIO.intensity",
    "category": "method",
    "text": "Integer representation of the pulse return magnitude.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.key_point-Tuple{LasPoint}",
    "page": "Home",
    "title": "LasIO.key_point",
    "category": "method",
    "text": "If true, this point is considered to be a model key-point.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.number_of_returns-Tuple{LasPoint}",
    "page": "Home",
    "title": "LasIO.number_of_returns",
    "category": "method",
    "text": "The total number of returns for a given pulse.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.pt_src_id-Tuple{LasPoint}",
    "page": "Home",
    "title": "LasIO.pt_src_id",
    "category": "method",
    "text": "This value indicates the file from which this point originated.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.raw_classification-Tuple{LasPoint}",
    "page": "Home",
    "title": "LasIO.raw_classification",
    "category": "method",
    "text": "Raw classification byte, contains classification, synthetic, key point and withheld\n\n\n\n\n\n"
},

{
    "location": "#LasIO.raw_classification-Tuple{UInt8,Bool,Bool,Bool}",
    "page": "Home",
    "title": "LasIO.raw_classification",
    "category": "method",
    "text": "Raw classification byte, as represented in the point data, built up from components\n\n\n\n\n\n"
},

{
    "location": "#LasIO.return_number-Tuple{LasPoint}",
    "page": "Home",
    "title": "LasIO.return_number",
    "category": "method",
    "text": "The pulse return number for a given output pulse, starting at one.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.scan_angle-Tuple{LasPoint}",
    "page": "Home",
    "title": "LasIO.scan_angle",
    "category": "method",
    "text": "Angle at which the laser point was output, including the roll of the aircraft.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.scan_direction-Tuple{LasPoint}",
    "page": "Home",
    "title": "LasIO.scan_direction",
    "category": "method",
    "text": "If true, the scanner mirror was traveling from left to right at the time of the output pulse.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.synthetic-Tuple{LasPoint}",
    "page": "Home",
    "title": "LasIO.synthetic",
    "category": "method",
    "text": "If true, the point was not created from lidar collection\n\n\n\n\n\n"
},

{
    "location": "#LasIO.update!-Union{Tuple{T}, Tuple{LasHeader,Array{T,1}}} where T<:LasPoint",
    "page": "Home",
    "title": "LasIO.update!",
    "category": "method",
    "text": "Update the header bounding box and count based on point data\n\n\n\n\n\n"
},

{
    "location": "#LasIO.user_data-Tuple{LasPoint}",
    "page": "Home",
    "title": "LasIO.user_data",
    "category": "method",
    "text": "This field may be used at the user’s discretion.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.withheld-Tuple{LasPoint}",
    "page": "Home",
    "title": "LasIO.withheld",
    "category": "method",
    "text": "If true, this point should not be included in processing\n\n\n\n\n\n"
},

{
    "location": "#LasIO.xcoord-Tuple{LasPoint,LasHeader}",
    "page": "Home",
    "title": "LasIO.xcoord",
    "category": "method",
    "text": "X coordinate (Float64), apply scale and offset according to the header\n\n\n\n\n\n"
},

{
    "location": "#LasIO.xcoord-Tuple{Real,LasHeader}",
    "page": "Home",
    "title": "LasIO.xcoord",
    "category": "method",
    "text": "X value (Int32), as represented in the point data, reversing the offset and scale from the header\n\n\n\n\n\n"
},

{
    "location": "#LasIO.ycoord-Tuple{LasPoint,LasHeader}",
    "page": "Home",
    "title": "LasIO.ycoord",
    "category": "method",
    "text": "Y coordinate (Float64), apply scale and offset according to the header\n\n\n\n\n\n"
},

{
    "location": "#LasIO.ycoord-Tuple{Real,LasHeader}",
    "page": "Home",
    "title": "LasIO.ycoord",
    "category": "method",
    "text": "Y value (Int32), as represented in the point data, reversing the offset and scale from the header\n\n\n\n\n\n"
},

{
    "location": "#LasIO.zcoord-Tuple{LasPoint,LasHeader}",
    "page": "Home",
    "title": "LasIO.zcoord",
    "category": "method",
    "text": "Z coordinate (Float64), apply scale and offset according to the header\n\n\n\n\n\n"
},

{
    "location": "#LasIO.zcoord-Tuple{Real,LasHeader}",
    "page": "Home",
    "title": "LasIO.zcoord",
    "category": "method",
    "text": "Z value (Int32), as represented in the point data, reversing the offset and scale from the header\n\n\n\n\n\n"
},

{
    "location": "#Dates.DateTime-Tuple{Union{LasPoint1, LasPoint3}}",
    "page": "Home",
    "title": "Dates.DateTime",
    "category": "method",
    "text": "Get the DateTime that the point was collected. Assumes time is recorded in Adjusted Standard GPS Time; see is_standard_gps. Note that DateTime has millisecond precision, any higher precision is lost.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.GeoKeys-Tuple{Integer}",
    "page": "Home",
    "title": "LasIO.GeoKeys",
    "category": "method",
    "text": "Create GeoKeys from EPSG code. Assumes CRS is projected and in meters.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.epsg_code!-Tuple{LasHeader,Integer}",
    "page": "Home",
    "title": "LasIO.epsg_code!",
    "category": "method",
    "text": "Set the projection in the header, without altering the points\n\n\n\n\n\n"
},

{
    "location": "#LasIO.epsg_code-Tuple{LasHeader}",
    "page": "Home",
    "title": "LasIO.epsg_code",
    "category": "method",
    "text": "Get the EPSG code of the projection in the header\n\n\n\n\n\n"
},

{
    "location": "#LasIO.generate_read-Tuple{Type}",
    "page": "Home",
    "title": "LasIO.generate_read",
    "category": "method",
    "text": "Generate read (unpack) method for structs.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.generate_write-Tuple{Type}",
    "page": "Home",
    "title": "LasIO.generate_write",
    "category": "method",
    "text": "Generate write (pack) method for structs.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.is_srs-Tuple{LasVariableLengthRecord}",
    "page": "Home",
    "title": "LasIO.is_srs",
    "category": "method",
    "text": "test whether a vlr is a GeoKeyDirectoryTag, GeoDoubleParamsTag or GeoAsciiParamsTag\n\n\n\n\n\n"
},

{
    "location": "#LasIO.is_standard_gps-Tuple{LasHeader}",
    "page": "Home",
    "title": "LasIO.is_standard_gps",
    "category": "method",
    "text": "If true, GPS Time is standard GPS Time (satellite GPS Time) minus 1e9. If false, GPS Time is GPS Week Time.\n\nNote that not all software sets this encoding correctly.\n\n\n\n\n\n"
},

{
    "location": "#LasIO.is_wkt-Tuple{LasHeader}",
    "page": "Home",
    "title": "LasIO.is_wkt",
    "category": "method",
    "text": "Check if the projection information is in WKT format (true) or GeoTIFF (false)\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LasIO]\nOrder = [:type, :function]"
},

]}
