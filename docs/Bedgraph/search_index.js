var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Bedgraph.jl-1",
    "page": "Readme",
    "title": "Bedgraph.jl",
    "category": "section",
    "text": "(Image: Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.) (Image: Build Status) (Image: Build status) (Image: Bedgraph) (Image: codecov.io) (Image: Coverage Status)This project will try to follow the semver pro forma."
},

{
    "location": "#Description-1",
    "page": "Readme",
    "title": "Description",
    "category": "section",
    "text": "This package provides read and write support for Bedgraph files, as well as other useful utilities.Note:  this package does not currently handle bedGraph meta data such as the track definition or browser lines."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install Bedgraph from the Julia REPL:using Pkg\nadd(\"Bedgraph\")\n#Pkg.add(\"Bedgraph\") for julia prior to v 0.7"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Reading-and-writing-bedGraph-files-1",
    "page": "Readme",
    "title": "Reading and writing bedGraph files",
    "category": "section",
    "text": "See source for optional bump_back, bump_forward, and right_open key values. These options are included in the pertinent read/write functions to handle quirks of the zero-based and half-open nature of the bedGraph format."
},

{
    "location": "#Read-header/meta-1",
    "page": "Readme",
    "title": "Read header/meta",
    "category": "section",
    "text": "using Bedgraph\n\nheader = read(file, BedgraphHeader{Vector{String}})"
},

{
    "location": "#Read-records-1",
    "page": "Readme",
    "title": "Read records",
    "category": "section",
    "text": "Read all records at once.using Bedgraph\n\nrecords = read(file, Vector{Bedgraph.Record})using Bedgraph\n\nrecords = Vector{Record}()\nopen(file, \"r\") do io\n    records = Bedgraph.readRecords(io)\nendAlternatively you may want to read and process records individually.open(file, \"r\") do io\n    while !eof(io)\n        record = readRecord(io)\n        if record != nothing\n            # Process record.\n        end\n    end\nend"
},

{
    "location": "#Write-a-bedGraph-file-1",
    "page": "Readme",
    "title": "Write a bedGraph file",
    "category": "section",
    "text": "Bedgraph.jl currently provides two write functions: one for Bedgraph.BedgraphHeader, and one for Bedgraph.Record, which also accepts Vector{Bedgraph.Record}.using Bedgraph\n\nconst chroms = [\"chr19\", \"chr19\", \"chr19\", \"chr19\", \"chr19\", \"chr19\", \"chr19\", \"chr19\", \"chr19\"]\nconst firsts = [49302000, 49302300, 49302600, 49302900, 49303200, 49303500, 49303800, 49304100, 49304400]\nconst lasts = [49302300, 49302600, 49302900, 49303200, 49303500, 49303800, 49304100, 49304400, 49304700]\nconst values = [-1.0, -0.75, -0.50, -0.25, 0.0, 0.25, 0.50, 0.75, 1.00]\n\nrecords = convert(Vector{Bedgraph.Record}, chroms, firsts, lasts, values)\nheader = Bedgraph.generateBasicHeader(records)\n\nwrite(\"data.bedgraph\", header, records)using Bedgraph\n\nrecords = [Record(\"chr19\", 49302000, 49302300, -1.0), Record(\"chr19\", 49302300, 49302600, -1.75)]\nheader = Bedgraph.generateBasicHeader(\"chr19\", records[1].first, records[end].last, bump_forward=false)\n\nopen(output_file, \"w\") do io\n    write(io, header, records))\nend\n"
},

{
    "location": "#Expansion-and-compression-of-data-1",
    "page": "Readme",
    "title": "Expansion and compression of data",
    "category": "section",
    "text": ""
},

{
    "location": "#Compress-data-values-1",
    "page": "Readme",
    "title": "Compress data values",
    "category": "section",
    "text": "Compress data to chromosome coordinates of the zero-based, half-open format.using Bedgraph\n\nchrom \"chr1\"\nn = 49302000:49304700\nexpanded_values = [-1.0, -1.0, -1.0, ..., 1.00, 1.00, 1.00]\n\ncompressed_records = Bedgraph.compress(chrom, n, expanded_values)using Bedgraph\n\nconst records = [Record(\"chr19\", 49302000, 49302300, -1.0), Record(\"chr19\", 49302300, 49302600, -1.75)]\n\ncompressed_records = Bedgraph.compress(\"chr19\", n, expanded_value)"
},

{
    "location": "#Expand-record-data-1",
    "page": "Readme",
    "title": "Expand record data",
    "category": "section",
    "text": "Expand chromosome coordinates from the zero-based, half-open format.Note:  please be aware of the order of returned items.using Bedgraph\n\nconst firsts = [49302000, 49302300, 49302600, 49302900, 49303200, 49303500, 49303800, 49304100, 49304400]\nconst lasts = [49302300, 49302600, 49302900, 49303200, 49303500, 49303800, 49304100, 49304400, 49304700]\nconst values = [-1.0, -0.75, -0.50, -0.25, 0.0, 0.25, 0.50, 0.75, 1.00]\n\n(n, expanded_values, expanded_chroms) = Bedgraph.expand(chroms, firsts, lasts, values)\nusing Bedgraph\n\nconst records = [Record(\"chr19\", 49302000, 49302300, -1.0), Record(\"chr19\", 49302300, 49302600, -1.75)]\n\nn, expanded_values, expanded_chroms = Bedgraph.expand(records)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Bedgraph]\nOrder = [:type, :function]"
},

]}
