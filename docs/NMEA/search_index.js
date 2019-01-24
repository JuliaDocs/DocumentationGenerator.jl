var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NMEA-1",
    "page": "Readme",
    "title": "NMEA",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "NMEA.jl is a package for parsing NMEA GPS protocol sentencesN.B. I\'ve just \"adopted\" this package from the original author. If you have any thoughts about improving the design, or if you\'d like to contribute, please let me know."
},

{
    "location": "#Simple-Example-1",
    "page": "Readme",
    "title": "Simple Example",
    "category": "section",
    "text": "example = NMEA.parse(raw\"$GPGGA,134740.000,5540.3248,N,01231.2992,E,1,09,0.9,20.2,M,41.5,M,,0000*61\")\nprintln(example.latitude.value)"
},

{
    "location": "#Old-Synopsis-1",
    "page": "Readme",
    "title": "Old Synopsis",
    "category": "section",
    "text": ""
},

{
    "location": "#Types-1",
    "page": "Readme",
    "title": "Types",
    "category": "section",
    "text": ""
},

{
    "location": "#NMEAData-1",
    "page": "Readme",
    "title": "NMEAData",
    "category": "section",
    "text": "stores data for last parsed sentence of all NMEA message types"
},

{
    "location": "#GGA-1",
    "page": "Readme",
    "title": "GGA",
    "category": "section",
    "text": "Global Positioning System Fix Data"
},

{
    "location": "#GSA-1",
    "page": "Readme",
    "title": "GSA",
    "category": "section",
    "text": "GNSS DOP and Active Satellites"
},

{
    "location": "#ZDA-1",
    "page": "Readme",
    "title": "ZDA",
    "category": "section",
    "text": "Time and Date"
},

{
    "location": "#GBS-1",
    "page": "Readme",
    "title": "GBS",
    "category": "section",
    "text": "RAIM GNSS Satellite Fault Detection"
},

{
    "location": "#GLL-1",
    "page": "Readme",
    "title": "GLL",
    "category": "section",
    "text": "Geographic Position - Latitude/Longitude"
},

{
    "location": "#GSV-1",
    "page": "Readme",
    "title": "GSV",
    "category": "section",
    "text": "GNSS Satellites in View"
},

{
    "location": "#RMC-1",
    "page": "Readme",
    "title": "RMC",
    "category": "section",
    "text": "Recommended Minimum Specific GNSS Data"
},

{
    "location": "#VTG-1",
    "page": "Readme",
    "title": "VTG",
    "category": "section",
    "text": "Course over Ground and Ground Speed"
},

{
    "location": "#DTM-1",
    "page": "Readme",
    "title": "DTM",
    "category": "section",
    "text": "Datum"
},

{
    "location": "#Methods-1",
    "page": "Readme",
    "title": "Methods",
    "category": "section",
    "text": ""
},

{
    "location": "#parse_msg!-1",
    "page": "Readme",
    "title": "parse_msg!",
    "category": "section",
    "text": "parses NMEA line/sentence and stores data in NMEAData; returns message type"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "The following example reads and parses a file of NMEA data line by line and displays GGA and GSV dataNMEA\n\nfunction display_GGA(m::GGA)\n    println(\"==================================================\")\n    println(\"=============== ESSENTIAL FIX DATA ===============\")\n    println(\"System: $(get(m.system))\")\n    println(\"Time Of Day (UTC): $(get(m.time)) secs\")\n    println(\"Latitude: $(get(m.latitude))\")\n    println(\"Longitude: $(get(m.longitude))\")\n    println(\"Fix Quality: $(get(m.fix_quality))\")\n    println(\"Tracked Satellites: $(get(m.num_sats))\")\n    println(\"HDOP: $(get(m.HDOP))\")\n    println(\"Altitude (MSL): $(get(m.altitude)) m\")\n    println(\"Geoidal Seperation: $(get(m.geoidal_seperation)) m\")\n    println(\"==================================================\\n\")\nend # function display_GGA\n\n# initialize/construct\nnmea = NMEAData()\n\n# read file line by line\nfh = open(\"testdata.txt\", \"r\")\nfor line = readlines(fh)\n    # parse each line (sentence) in NMEA file and return message type\n    mtype = parse_msg!(nmea, line)\n\n    # display GGA and GSV data\n    if (mtype == \"GGA\")\n        display_GGA(nmea.last_GGA)\n    else\n        continue\n    end\nendOutput==================================================\n=============== ESSENTIAL FIX DATA ===============\nSystem: GPS\nTime Of Day (UTC): 50632.0 secs\nLatitude: 55.675155555555556\nLongitude: 12.519430555555557\nFix Quality: GPS (SPS)\nTracked Satellites: 9\nHDOP: 0.9\nAltitude (MSL): 5.6 m\nGeoidal Seperation: 41.5 m\n==================================================\n..."
},

{
    "location": "autodocs/#NMEA.parse-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "NMEA.parse",
    "category": "method",
    "text": "parse(line::AbstractString)\n\nParses an NMEA sentence, returning a corresponding type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NMEA]\nOrder = [:type, :function]"
},

]}
