var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FormattedTables-1",
    "page": "Readme",
    "title": "FormattedTables",
    "category": "section",
    "text": "A Julia package for formatting tabular data.(Image: Build Status)This package contains a single function, FormattedTables.write, used to write  tabular data stored in an object supporting the Tables.jl  interface. For each column, a  FormatSpec, provided by the Format.jl  package, can be used to format the  column."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "FormattedTables.write(\n    file::Union{IO,String},\n    table;\n    delim = \' \',\n    column_names=Tables.schema(table).names,\n    formatters=Dict(name=>\"\" for name in column_names),\n    header_fmt=Dict(name=>\"\" for name in column_names),\n)Write a Tables.jl interface input to a stream or a named file using the format specifiers provided via the formatters keyword argument. The formatters argument must be a dictionary, named tuple, or similar collection that can be indexed using the column names of the table.Keyword arguments include:delim: A delimiter to print between list items.\ncolumn_names: An iterable collection containing, in order, the names (as Symbols) of the columns of the table to be written.\nformatters: A dictionary, named tuple, or similar collection that maps  the the names (Symbols) of the columns to be written to a Format.FormatSpec used to format the column.\nheader_fmt: A dictionary, named tuple, or similar collection that maps the  the names (Symbols) of the columns to be written to a Format.FormatSpec used to format the column headers. Set to nothing to skip writing column headers."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "```julia julia> using FormattedTablesjulia> using DataFramesjulia> using Formatjulia> using CSVjulia> csv = IOBuffer(\"\"\"name,height,age        Alice,1.60,21        Bob,1.83,40        Claire,1.75,31        David,1.50,25        Edith,1.68,30        \"\"\") IOBuffer(data=UInt8[...], readable=true, writable=false, seekable=true, append=false, size=85, maxsize=Inf, ptr=1, mark=-1)julia> data = CSV.read(csv) |> DataFrame 5×3 DataFrame │ Row │ name    │ height   │ age    │ │     │ String  │ Float64  │ Int64  │ ├─────┼─────────┼──────────┼────────┤ │ 1   │ Alice   │ 1.6      │ 21     │ │ 2   │ Bob     │ 1.83     │ 40     │ │ 3   │ Claire  │ 1.75     │ 31     │ │ 4   │ David   │ 1.5      │ 25     │ │ 5   │ Edith   │ 1.68     │ 30     │julia> b = PipeBuffer() IOBuffer(data=UInt8[...], readable=true, writable=true, seekable=false, append=true, size=0, maxsize=Inf, ptr=1, mark=-1)julia> FormattedTables.write(b, data)julia> result = String(take!(b)) \"name height age\\nAlice 1.6 21\\nBob 1.83 40\\nClaire 1.75 31\\nDavid 1.5 25\\nEdith 1.68 30\\n\"julia> println(result) name height age Alice 1.6 21 Bob 1.83 40 Claire 1.75 31 David 1.5 25 Edith 1.68 30julia> const fs = FormatSpec FormatSpecjulia> formatters = (        name=fs(\"10s\"),        height=fs(\"7.2f\"),        age=fs(\"3d\"),        ) (name = FormatSpec   cls   = s   typ   = s   fill  =   align = <   sign  = -   width = 10   prec  = -1   ipre  = false   zpad  = false   tsep  = false , height = FormatSpec   cls   = f   typ   = f   fill  =   align = >   sign  = -   width = 7   prec  = 2   ipre  = false   zpad  = false   tsep  = false , age = FormatSpec   cls   = i   typ   = d   fill  =   align = >   sign  = -   width = 3   prec  = -1   ipre  = false   zpad  = false   tsep  = false )julia> header_fmt = (        name=fs(\"10s\"),        height=fs(\">7s\"),        age=fs(\">3s\"),        ) (name = FormatSpec   cls   = s   typ   = s   fill  =   align = <   sign  = -   width = 10   prec  = -1   ipre  = false   zpad  = false   tsep  = false , height = FormatSpec   cls   = s   typ   = s   fill  =   align = >   sign  = -   width = 7   prec  = -1   ipre  = false   zpad  = false   tsep  = false , age = FormatSpec   cls   = s   typ   = s   fill  =   align = >   sign  = -   width = 3   prec  = -1   ipre  = false   zpad  = false   tsep  = false )julia> b = PipeBuffer() IOBuffer(data=UInt8[...], readable=true, writable=true, seekable=false, append=true, size=0, maxsize=Inf, ptr=1, mark=-1)julia> FormattedTables.write( b, data, delim = \" \", formatters = formatters, headerfmt = headerfmt)julia> result = String(take!(b)) \"name        height age\\nAlice         1.60  21\\nBob           1.83  40\\nClaire        1.75  31\\nDavid         1.50  25\\nEdith         1.68  30\\n\"julia> println(result) name        height age Alice         1.60  21 Bob           1.83  40 Claire        1.75  31 David         1.50  25 Edith         1.68  30julia> b = PipeBuffer() IOBuffer(data=UInt8[...], readable=true, writable=true, seekable=false, append=true, size=0, maxsize=Inf, ptr=1, mark=-1)julia> FormattedTables.write( b, data, delim = \" \", columnnames=(:age, :name), formatters = formatters, headerfmt = header_fmt)julia> result = String(take!(b)) \"age name      \\n 21 Alice     \\n 40 Bob       \\n 31 Claire    \\n 25 David     \\n 30 Edith     \\n\"julia> println(result) age name  21 Alice  40 Bob  31 Claire  25 David  30 Edithjulia> b = PipeBuffer() IOBuffer(data=UInt8[...], readable=true, writable=true, seekable=false, append=true, size=0, maxsize=Inf, ptr=1, mark=-1)julia> FormattedTables.write( b, data, delim = \" \", formatters = formatters, header_fmt = nothing)julia> result = String(take!(b)) \"Alice         1.60  21\\nBob           1.83  40\\nClaire        1.75  31\\nDavid         1.50  25\\nEdith         1.68  30\\n\"julia> println(result) Alice         1.60  21 Bob           1.83  40 Claire        1.75  31 David         1.50  25 Edith         1.68  30julia> FormattedTables.write(\"test-out.dat\", data, delim = \" \", formatters = formatters, headerfmt = headerfmt)julia> result = open(x->read(x,String), \"test-out.dat\",) \"name        height age\\nAlice         1.60  21\\nBob           1.83  40\\nClaire        1.75  31\\nDavid         1.50  25\\nEdith         1.68  30\\n\"julia> println(result) name        height age Alice         1.60  21 Bob           1.83  40 Claire        1.75  31 David         1.50  25 Edith         1.68  30"
},

{
    "location": "autodocs/#FormattedTables.write",
    "page": "Docstrings",
    "title": "FormattedTables.write",
    "category": "function",
    "text": "FormattedTables.write(\n    file::Union{IO,String},\n    table;\n    delim = \' \',\n    column_names=Tables.schema(table).names,\n    formatters=Dict(name=>\"\" for name in column_names),\n    header_fmt=Dict(name=>\"\" for name in column_names),\n)\n\nWrite a Tables.jl interface input to a stream or a named file using the format specifiers provided via the formatters keyword argument. The formatters argument must be a dictionary, named tuple, or similar collection that can be indexed using the column names of the table.\n\nKeyword arguments include:\n\ndelim: A delimiter to print between list items.\ncolumn_names: An iterable collection containing, in order, the names (as Symbols) of the columns of the table to be written.\nformatters: A dictionary, named tuple, or similar collection that maps  the the names (Symbols) of the columns to be written to a Format.FormatSpec used to format the column.\nheader_fmt: A dictionary, named tuple, or similar collection that maps  the the names (Symbols) of the columns to be written to a Format.FormatSpec used to format the column headers. Set to nothing to skip writing column headers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FormattedTables]\nOrder = [:type, :function]"
},

]}
