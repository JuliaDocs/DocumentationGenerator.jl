var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LasIO-1",
    "page": "Readme",
    "title": "LasIO",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)Julia package for reading and writing the LAS lidar format.This is a pure Julia alternative to LibLAS.jl or Laszip.jl. Currently only LAS versions 1.1 - 1.3 and point formats 0 - 3 are supported. For LAZ support see below.If the file fits into memory, it can be loaded usingusing FileIO, LasIO\nheader, points = load(\"test.las\")where header is of type LasHeader, and, if it is point format 3, points is a Vector{LasPoint3}. LasPoint3 is an immutable that directly corresponds to the binary data in the LAS file. Use functions like xcoord(p::LasPoint, header::LasHeader) to take out the desired items in the point.If the file does not fit into memory, it can be memory mapped usingusing FileIO, LasIO\nheader, points = load(\"test.las\", mmap=true)where points is now a memory mapped PointVector{LasPoint3} which behaves in the same way as the Vector{LasPoint3}, but reads the points on the fly from disk when indexed, not allocating the complete vector beforehand.See test/runtests.jl for other usages."
},

{
    "location": "#LAZ-support-1",
    "page": "Readme",
    "title": "LAZ support",
    "category": "section",
    "text": "The compressed LAZ format is supported, but requires the user to make sure the laszip executable can be found in the PATH. LAZ files are piped through laszip to provide reading and writing capability. laszip is not distributed with this package. One way to get it is to download LAStools from https://rapidlasso.com/. The LAStools ZIP file already contains laszip.exe for Windows, for Linux or Mac it needs to be compiled first. When this is done this should work just like with LAS:using FileIO, LasIO\nheader, points = load(\"test.laz\")Besides piping through laszip, more complete LAZ support is in the works at https://github.com/evetion/LazIO.jl."
},

{
    "location": "autodocs/#ColorTypes.RGB-Tuple{Union{LasPoint2, LasPoint3}}",
    "page": "Docstrings",
    "title": "ColorTypes.RGB",
    "category": "method",
    "text": "The RGB color associated with this point\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.LasPoint",
    "page": "Docstrings",
    "title": "LasIO.LasPoint",
    "category": "type",
    "text": "Abstract type for ASPRS LAS point data record formats 0 - 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.LasPoint0",
    "page": "Docstrings",
    "title": "LasIO.LasPoint0",
    "category": "type",
    "text": "ASPRS LAS point data record format 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.LasPoint1",
    "page": "Docstrings",
    "title": "LasIO.LasPoint1",
    "category": "type",
    "text": "ASPRS LAS point data record format 1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.LasPoint2",
    "page": "Docstrings",
    "title": "LasIO.LasPoint2",
    "category": "type",
    "text": "ASPRS LAS point data record format 2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.LasPoint3",
    "page": "Docstrings",
    "title": "LasIO.LasPoint3",
    "category": "type",
    "text": "ASPRS LAS point data record format 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.LasVariableLengthRecord",
    "page": "Docstrings",
    "title": "LasIO.LasVariableLengthRecord",
    "category": "type",
    "text": "A LAS \"variable length record\" - the generic way to store extra user or organization defined binary metadata in LAS files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.LasVariableLengthRecord-Tuple{LasHeader,LasIO.SRID}",
    "page": "Docstrings",
    "title": "LasIO.LasVariableLengthRecord",
    "category": "method",
    "text": "Construct a projection VLR based on an EPSG code\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.PointVector",
    "page": "Docstrings",
    "title": "LasIO.PointVector",
    "category": "type",
    "text": "Custom PointVector struct for memory mapped LasPoints. Inspiration taken from UnalignedVector.jl and extended it with custom indexing and packing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.blue-Tuple{Union{LasPoint2, LasPoint3}}",
    "page": "Docstrings",
    "title": "ColorTypes.blue",
    "category": "method",
    "text": "The blue image channel value associated with this point\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.green-Tuple{Union{LasPoint2, LasPoint3}}",
    "page": "Docstrings",
    "title": "ColorTypes.green",
    "category": "method",
    "text": "The green image channel value associated with this point\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.red-Tuple{Union{LasPoint2, LasPoint3}}",
    "page": "Docstrings",
    "title": "ColorTypes.red",
    "category": "method",
    "text": "The red image channel value associated with this point\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.classification-Tuple{LasPoint}",
    "page": "Docstrings",
    "title": "LasIO.classification",
    "category": "method",
    "text": "Classification value as defined in the ASPRS classification table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.edge_of_flight_line-Tuple{LasPoint}",
    "page": "Docstrings",
    "title": "LasIO.edge_of_flight_line",
    "category": "method",
    "text": "If true, it is the last point before the scanner changes direction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.flag_byte-Tuple{LasPoint}",
    "page": "Docstrings",
    "title": "LasIO.flag_byte",
    "category": "method",
    "text": "Flag byte, contains return number, number of returns, scan direction flag and edge of flight line\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.flag_byte-Tuple{UInt8,UInt8,Bool,Bool}",
    "page": "Docstrings",
    "title": "LasIO.flag_byte",
    "category": "method",
    "text": "Flag byte, as represented in the point data, built up from components\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.gps_time-Tuple{Dates.DateTime}",
    "page": "Docstrings",
    "title": "LasIO.gps_time",
    "category": "method",
    "text": "Convert DateTime to GPS Float64, as represented in the point data, assumes time is recorded in Adjusted Standard GPS Time; see is_standard_gps\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.gps_time-Tuple{Union{LasPoint1, LasPoint3}}",
    "page": "Docstrings",
    "title": "LasIO.gps_time",
    "category": "method",
    "text": "Time tag value at which the point was aquired, a Float64; see is_standard_gps for what it represents\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.intensity-Tuple{LasPoint}",
    "page": "Docstrings",
    "title": "LasIO.intensity",
    "category": "method",
    "text": "Integer representation of the pulse return magnitude.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.key_point-Tuple{LasPoint}",
    "page": "Docstrings",
    "title": "LasIO.key_point",
    "category": "method",
    "text": "If true, this point is considered to be a model key-point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.number_of_returns-Tuple{LasPoint}",
    "page": "Docstrings",
    "title": "LasIO.number_of_returns",
    "category": "method",
    "text": "The total number of returns for a given pulse.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.pt_src_id-Tuple{LasPoint}",
    "page": "Docstrings",
    "title": "LasIO.pt_src_id",
    "category": "method",
    "text": "This value indicates the file from which this point originated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.raw_classification-Tuple{LasPoint}",
    "page": "Docstrings",
    "title": "LasIO.raw_classification",
    "category": "method",
    "text": "Raw classification byte, contains classification, synthetic, key point and withheld\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.raw_classification-Tuple{UInt8,Bool,Bool,Bool}",
    "page": "Docstrings",
    "title": "LasIO.raw_classification",
    "category": "method",
    "text": "Raw classification byte, as represented in the point data, built up from components\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.return_number-Tuple{LasPoint}",
    "page": "Docstrings",
    "title": "LasIO.return_number",
    "category": "method",
    "text": "The pulse return number for a given output pulse, starting at one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.scan_angle-Tuple{LasPoint}",
    "page": "Docstrings",
    "title": "LasIO.scan_angle",
    "category": "method",
    "text": "Angle at which the laser point was output, including the roll of the aircraft.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.scan_direction-Tuple{LasPoint}",
    "page": "Docstrings",
    "title": "LasIO.scan_direction",
    "category": "method",
    "text": "If true, the scanner mirror was traveling from left to right at the time of the output pulse.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.synthetic-Tuple{LasPoint}",
    "page": "Docstrings",
    "title": "LasIO.synthetic",
    "category": "method",
    "text": "If true, the point was not created from lidar collection\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.update!-Union{Tuple{T}, Tuple{LasHeader,Array{T,1}}} where T<:LasPoint",
    "page": "Docstrings",
    "title": "LasIO.update!",
    "category": "method",
    "text": "Update the header bounding box and count based on point data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.user_data-Tuple{LasPoint}",
    "page": "Docstrings",
    "title": "LasIO.user_data",
    "category": "method",
    "text": "This field may be used at the user’s discretion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.withheld-Tuple{LasPoint}",
    "page": "Docstrings",
    "title": "LasIO.withheld",
    "category": "method",
    "text": "If true, this point should not be included in processing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.xcoord-Tuple{LasPoint,LasHeader}",
    "page": "Docstrings",
    "title": "LasIO.xcoord",
    "category": "method",
    "text": "X coordinate (Float64), apply scale and offset according to the header\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.xcoord-Tuple{Real,LasHeader}",
    "page": "Docstrings",
    "title": "LasIO.xcoord",
    "category": "method",
    "text": "X value (Int32), as represented in the point data, reversing the offset and scale from the header\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.ycoord-Tuple{LasPoint,LasHeader}",
    "page": "Docstrings",
    "title": "LasIO.ycoord",
    "category": "method",
    "text": "Y coordinate (Float64), apply scale and offset according to the header\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.ycoord-Tuple{Real,LasHeader}",
    "page": "Docstrings",
    "title": "LasIO.ycoord",
    "category": "method",
    "text": "Y value (Int32), as represented in the point data, reversing the offset and scale from the header\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.zcoord-Tuple{LasPoint,LasHeader}",
    "page": "Docstrings",
    "title": "LasIO.zcoord",
    "category": "method",
    "text": "Z coordinate (Float64), apply scale and offset according to the header\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.zcoord-Tuple{Real,LasHeader}",
    "page": "Docstrings",
    "title": "LasIO.zcoord",
    "category": "method",
    "text": "Z value (Int32), as represented in the point data, reversing the offset and scale from the header\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dates.DateTime-Tuple{Union{LasPoint1, LasPoint3}}",
    "page": "Docstrings",
    "title": "Dates.DateTime",
    "category": "method",
    "text": "Get the DateTime that the point was collected. Assumes time is recorded in Adjusted Standard GPS Time; see is_standard_gps. Note that DateTime has millisecond precision, any higher precision is lost.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.GeoKeys-Tuple{Integer}",
    "page": "Docstrings",
    "title": "LasIO.GeoKeys",
    "category": "method",
    "text": "Create GeoKeys from EPSG code. Assumes CRS is projected and in meters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.epsg_code!-Tuple{LasHeader,Integer}",
    "page": "Docstrings",
    "title": "LasIO.epsg_code!",
    "category": "method",
    "text": "Set the projection in the header, without altering the points\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.epsg_code-Tuple{LasHeader}",
    "page": "Docstrings",
    "title": "LasIO.epsg_code",
    "category": "method",
    "text": "Get the EPSG code of the projection in the header\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.generate_read-Tuple{Type}",
    "page": "Docstrings",
    "title": "LasIO.generate_read",
    "category": "method",
    "text": "Generate read (unpack) method for structs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.generate_write-Tuple{Type}",
    "page": "Docstrings",
    "title": "LasIO.generate_write",
    "category": "method",
    "text": "Generate write (pack) method for structs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.is_srs-Tuple{LasVariableLengthRecord}",
    "page": "Docstrings",
    "title": "LasIO.is_srs",
    "category": "method",
    "text": "test whether a vlr is a GeoKeyDirectoryTag, GeoDoubleParamsTag or GeoAsciiParamsTag\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.is_standard_gps-Tuple{LasHeader}",
    "page": "Docstrings",
    "title": "LasIO.is_standard_gps",
    "category": "method",
    "text": "If true, GPS Time is standard GPS Time (satellite GPS Time) minus 1e9. If false, GPS Time is GPS Week Time.\n\nNote that not all software sets this encoding correctly.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LasIO.is_wkt-Tuple{LasHeader}",
    "page": "Docstrings",
    "title": "LasIO.is_wkt",
    "category": "method",
    "text": "Check if the projection information is in WKT format (true) or GeoTIFF (false)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LasIO]\nOrder = [:type, :function]"
},

]}
