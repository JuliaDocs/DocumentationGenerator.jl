var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CSVFiles-1",
    "page": "Readme",
    "title": "CSVFiles",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: CSVFiles) (Image: codecov.io)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package provides load and save support for CSV Files under the FileIO.jl package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Use Pkgadd(CSVFiles) in Julia to install CSVFiles and its dependencies."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Load-a-CSV-file-1",
    "page": "Readme",
    "title": "Load a CSV file",
    "category": "section",
    "text": "To read a CSV file into a DataFrame, use the following julia code:using CSVFiles, DataFrames\n\ndf = DataFrame(load(\"data.csv\"))The call to load returns a struct that is an IterableTable.jl, so it can be passed to any function that can handle iterable tables, i.e. all the sinks in IterableTable.jl. Here are some examples of materializing a CSV file into data structures that are not a DataFrame:using CSVFiles, DataTables, IndexedTables, TimeSeries, Temporal, Gadfly\n\n# Load into a DataTable\ndt = DataTable(load(\"data.csv\"))\n\n# Load into an IndexedTable\nit = IndexedTable(load(\"data.csv\"))\n\n# Load into a TimeArray\nta = TimeArray(load(\"data.csv\"))\n\n# Load into a TS\nts = TS(load(\"data.csv\"))\n\n# Plot directly with Gadfly\nplot(load(\"data.csv\"), x=:a, y=:b, Geom.line)One can load both local files and files that can be downloaded via either http or https. To download from a remote URL, simply pass a URL to the load function instead of just a filename. In addition one can also load data from an IO object, i.e. any stream. The syntax that scenario isdf = DataFrame(load(Stream(format\"CSV\", io)))The load function also takes a number of parameters:load(f::FileIO.File{FileIO.format\"CSV\"}, delim=\',\'; <arguments>...)"
},

{
    "location": "#Arguments:-1",
    "page": "Readme",
    "title": "Arguments:",
    "category": "section",
    "text": "delim: the delimiter character\nspacedelim: a Bool indicating whether columns are space delimited. If true, the value of delim is ignored\nquotechar: character used to quote strings, defaults to \"\nescapechar: character used to escape quotechar in strings. (could be the same as quotechar)\nnrows: number of rows in the file. Defaults to 0 in which case we try to estimate this.\nskiplines_begin: number of rows to skip at the beginning of the file.\nheader_exists: boolean specifying whether CSV file contains a header\ncolnames: manually specified column names. Could be a vector or a dictionary from Int index (the column) to String column name.\ncolparsers: Parsers to use for specified columns. This can be a vector or a dictionary from column name / column index (Int) to a \"parser\". The simplest parser is a type such as Int, Float64. It can also be a dateformat\"...\", see CustomParser if you want to plug in custom parsing behavior\ntype_detect_rows: number of rows to use to infer the initial colparsers defaults to 20.These are simply the arguments from TextParse.jl, which is used under the hood to read CSV files."
},

{
    "location": "#Save-a-CSV-file-1",
    "page": "Readme",
    "title": "Save a CSV file",
    "category": "section",
    "text": "The following code saves any iterable table as a CSV file:using CSVFiles\n\nsave(\"output.csv\", it)This will work as long as it is any of the types supported as sources in IterableTables.jl.One can also save into an arbitrary stream:using CSVFiles\n\nsave(Stream(format\"CSV\", io), it)The save function takes a number of arguments:save(f::FileIO.File{FileIO.format\"CSV\"}, data; delim=\',\', quotechar=\'\"\', escapechar=\'\"\', nastring=\"NA\", header=true)"
},

{
    "location": "#Arguments-1",
    "page": "Readme",
    "title": "Arguments",
    "category": "section",
    "text": "delim: the delimiter character, defaults to .\nquotechar: character used to quote strings, defaults to .\nescapechar: character used to escape quotechar in strings, defaults to .\nnastring: string to insert in the place of missing values, defaults to NA.\nheader: whether a header should be written, defaults to ``true."
},

{
    "location": "#Using-the-pipe-syntax-1",
    "page": "Readme",
    "title": "Using the pipe syntax",
    "category": "section",
    "text": "Both load and save also support the pipe syntax. For example, to load a CSV file into a DataFrame, one can use the following code:using CSVFiles, DataFrame\n\ndf = load(\"data.csv\") |> DataFrameTo save an iterable table, one can use the following form:using CSVFiles, DataFrame\n\ndf = # Aquire a DataFrame somehow\n\ndf |> save(\"output.csv\")The pipe syntax is especially useful when combining it with Query.jl queries, for example one can easily load a CSV file, pipe it into a query, then pipe it to the save function to store the results in a new file."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CSVFiles]\nOrder = [:type, :function]"
},

]}
