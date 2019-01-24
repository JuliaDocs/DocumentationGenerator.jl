var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#OdsIO-1",
    "page": "Readme",
    "title": "OdsIO",
    "category": "section",
    "text": "Open Document Format Spreadsheet (ODS) I/O for Julia using the python ezodf module.It allows to export (import) data from (to) Julia to (from) LibreOffice, OpenOffice and any other spreadsheet software that implements the OpenDocument specifications.(Image: Build Status) (Image: codecov.io) (Image: OdsIO) (Image: OdsIO)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"OdsIO\")This package provides the following functions:"
},

{
    "location": "#ODS-reading:-1",
    "page": "Readme",
    "title": "ODS reading:",
    "category": "section",
    "text": ""
},

{
    "location": "#ods_readall()-1",
    "page": "Readme",
    "title": "ods_readall()",
    "category": "section",
    "text": "ods_readall(filename; <keyword arguments>)Return a dictionary of tables|dictionaries|dataframes indexed by position or name in the original OpenDocument Spreadsheet (.ods) file."
},

{
    "location": "#Arguments-1",
    "page": "Readme",
    "title": "Arguments",
    "category": "section",
    "text": "sheetsNames=[]: the list of sheet names from which to import data.\nsheetsPos=[]: the list of sheet positions (starting from 1) from which to import data.\nranges=[]: a list of pair of touples defining the ranges in each sheet from which to import data, in the format ((tlr,tlc),(brr,brc))\ninnerType=\"Matrix\": the type of the inner container returned. Either \"Matrix\", \"Dict\" or \"DataFrame\""
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "sheetsNames and sheetsPos can not be given together\nranges is defined using integer positions for both rows and columns\nindividual dictionaries or dataframes are keyed by the values of the cells in the first row specified in the range, or first row if range is not given\ninnerType=\"Matrix\", differently from innerType=\"Dict\", preserves original column order, it is faster and require less memory\nusing innerType=\"DataFrame\" also preserves original column order and try to auto-convert column types (working for Int64, Float64, String, in that order)"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> outDic  = ods2dics(\"spreadsheet.ods\";sheetsPos=[1,3],ranges=[((1,1),(3,3)),((2,2),(6,4))], innerType=\"Dict\")\nDict{Any,Any} with 2 entries:\n  3 => Dict{Any,Any}(Pair{Any,Any}(\"c\",Any[33.0,43.0,53.0,63.0]),Pair{Any,Any}(\"b\",Any[32.0,42.0,52.0,62.0]),Pair{Any,Any}(\"d\",Any[34.0,44.0,54.…\n  1 => Dict{Any,Any}(Pair{Any,Any}(\"c\",Any[23.0,33.0]),Pair{Any,Any}(\"b\",Any[22.0,32.0]),Pair{Any,Any}(\"a\",Any[21.0,31.0]))"
},

{
    "location": "#ods_read()-1",
    "page": "Readme",
    "title": "ods_read()",
    "category": "section",
    "text": "ods_read(filename; <keyword arguments>)Return a  table|dictionary|dataframe from a sheet (or range within a sheet) in a OpenDocument Spreadsheet (.ods) file.."
},

{
    "location": "#Arguments-2",
    "page": "Readme",
    "title": "Arguments",
    "category": "section",
    "text": "sheetName=nothing: the sheet name from which to import data.\nsheetPos=nothing: the position of the sheet (starting from 1) from which to import data.\nranges=[]: a pair of touples defining the range in the sheet from which to import data, in the format ((tlr,tlc),(brr,brc))\nretType=\"Matrix\": the type of container returned. Either \"Matrix\", \"Dict\" or \"DataFrame\""
},

{
    "location": "#Notes-2",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "sheetName and sheetPos can not be given together\nif both sheetName and sheetPos are not specified data from the first sheet is returned\nranges is defined using integer positions for both rows and columns\nthe dictionary or dataframe is keyed by the values of the cells in the first row specified in the range, or first row if range is not given\nretType=\"Matrix\", differently from innerType=\"Dict\", preserves original column order, it is faster and require less memory\nusing innerType=\"DataFrame\" also preserves original column order and try to auto-convert column types (working for Int64, Float64, String, in that order)"
},

{
    "location": "#Examples-2",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> df = ods_read(\"spreadsheet.ods\";sheetName=\"Sheet2\",retType=\"DataFrame\")\n3×3 DataFrames.DataFrame\n│ Row │ x1   │ x2   │ x3   │\n├─────┼──────┼──────┼──────┤\n│ 1   │ \"a\"  │ \"b\"  │ \"c\"  │\n│ 2   │ 21.0 │ 22.0 │ 23.0 │\n│ 3   │ 31.0 │ 32.0 │ 33.0 │"
},

{
    "location": "#ODS-writing-1",
    "page": "Readme",
    "title": "ODS writing",
    "category": "section",
    "text": ""
},

{
    "location": "#ods_write()-1",
    "page": "Readme",
    "title": "ods_write()",
    "category": "section",
    "text": "ods_write(filename,data)Write tabular data (2D Array, DataFrame or Dictionary) to OpenDocument spreadsheet format."
},

{
    "location": "#Arguments-3",
    "page": "Readme",
    "title": "Arguments",
    "category": "section",
    "text": "filename:    an existing ods file or the one to create.\ndata=Dict(): a dictionary of locations in the files where to export the data => the actual data (see notes)."
},

{
    "location": "#Notes:-1",
    "page": "Readme",
    "title": "Notes:",
    "category": "section",
    "text": "The locations where to save the data (the keys in the dictionary) are a tuple of tree elements:The first one is the sheet name or sheet position, the other two are the index of row and column of the top left corner where to export the data. If using sheet positions, these must be within current file sheets boundaries. If you want to create new sheets, use names.The actual data exported are either a Matrix (2D Array), a DataFrame or an OrderedDict. In case of DataFrame orOrderedDict the headers ARE exported, so if you don\'t want them, first convert the DataFrame (or Dictionary) to a Matrix. In case of OrderedDict, the inner data must all have the same length.Some spreadsheet software may not automatically recalculate cells that depends on exported cells (e.g. we are exportingsome data o cell A1 and cells A2 depends on A2, the content of cell A2 may not be updated after the export). In such case most spreadsheet software have a command to force recalculation of cells (e.g. in LibreOffice/OpenOffice use CTRL+Shift+F9)"
},

{
    "location": "#Examples-3",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> ods_write(\"TestSpreadsheet.ods\",Dict((\"TestSheet\",3,2)=>[[1,2,3,4,5] [6,7,8,9,10]]))"
},

{
    "location": "#Testing-1",
    "page": "Readme",
    "title": "Testing",
    "category": "section",
    "text": "Pkg.test(\"OdsIO\")Provide tests to check that both the Julia \'OdsIO\' and Python \'ezodf\' modules are correctly installed. It may return an error if the file system is not writeable."
},

{
    "location": "#Requirements-1",
    "page": "Readme",
    "title": "Requirements",
    "category": "section",
    "text": "This package requires:the PyCall package to call Python\na working local installation of Python with the python ezodf module already installed (if the ezodf module is not available and you have no access to the local python installation, you can use PyCall to try to install the ezodf using pip.. see here)\nthe DataFrames package in order to return DataFrames."
},

{
    "location": "#Known-limitations-1",
    "page": "Readme",
    "title": "Known limitations",
    "category": "section",
    "text": "In reading, as the data is saved in a dictionary, the order of the columns is not maintained.\nIt is relatively slow with very large data.\nIf the data has many columns, the conversion from Dictionary to DataFrame made in the ods2dfs and ods2df functions may not work. In that case call the ods2dics or ods2dic functions and perform the conversion manually choosing the columns you need."
},

{
    "location": "autodocs/#OdsIO.ods_read-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "OdsIO.ods_read",
    "category": "method",
    "text": "ods_read(filename; <keyword arguments>)\n\nReturn a  table|dictionary|dataframe from a sheet (or range within a sheet) in a OpenDocument Spreadsheet (.ods) file..\n\nArguments\n\nsheetName=nothing: the sheet name from which to import data.\nsheetPos=nothing: the position of the sheet (starting from 1) from which to import data.\nrange=nothing: a pair of touples defining the range in the sheet from which to import data, in the format ((tlr,tlc),(brr,brc))\nretType=\"Matrix\": the type of container returned. Either \"Matrix\", \"Dict\" or \"DataFrame\"\n\nNotes\n\nsheetName and sheetPos can not be given together\nif both sheetName and sheetPos are not specified data from the first sheet is returned\nranges is defined using integer positions for both rows and columns\nthe dictionary or dataframe is keyed by the values of the cells in the first row specified in the range, or first row if range is not given\nretType=\"Matrix\", differently from innerType=\"Dict\", preserves original column order, it is faster and require less memory\nusing innerType=\"DataFrame\" also preserves original column order and try to auto-convert column types (working for Int64, Float64, String, in that order)\n\nExamples\n\njulia> df = ods_read(\"spreadsheet.ods\";sheetName=\"Sheet2\",retType=\"DataFrame\")\n3×3 DataFrames.DataFrame\n│ Row │ x1   │ x2   │ x3   │\n├─────┼──────┼──────┼──────┤\n│ 1   │ \"a\"  │ \"b\"  │ \"c\"  │\n│ 2   │ 21.0 │ 22.0 │ 23.0 │\n│ 3   │ 31.0 │ 32.0 │ 33.0 │\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OdsIO.ods_readall-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "OdsIO.ods_readall",
    "category": "method",
    "text": "ods_readall(filename; <keyword arguments>)\n\nReturn a dictionary of tables|dictionaries|dataframes indexed by position or name in the original OpenDocument Spreadsheet (.ods) file.\n\nArguments\n\nsheetsNames=[]: the list of sheet names from which to import data.\nsheetsPos=[]: the list of sheet positions (starting from 1) from which to import data.\nranges=[]: a list of pair of touples defining the ranges in each sheet from which to import data, in the format ((tlr,tlc),(brr,brc))\ninnerType=\"Matrix\": the type of the inner container returned. Either \"Matrix\", \"Dict\" or \"DataFrame\"\n\nNotes\n\nsheetsNames and sheetsPos can not be given together\nranges is defined using integer positions for both rows and columns\nindividual dictionaries or dataframes are keyed by the values of the cells in the first row specified in the range, or first row if range is not given\ninnerType=\"Matrix\", differently from innerType=\"Dict\", preserves original column order, it is faster and require less memory\nusing innerType=\"DataFrame\" also preserves original column order and try to auto-convert column types (working for Int64, Float64, String, in that order)\n\nExamples\n\njulia> outDic  = ods_readall(\"spreadsheet.ods\";sheetsPos=[1,3],ranges=[((1,1),(3,3)),((2,2),(6,4))], innerType=\"Dict\")\nDict{Any,Any} with 2 entries:\n  3 => Dict{Any,Any}(Pair{Any,Any}(\"c\",Any[33.0,43.0,53.0,63.0]),Pair{Any,Any}(\"b\",Any[32.0,42.0,52.0,62.0]),Pair{Any,Any}(\"d\",Any[34.0,44.0,54.…\n  1 => Dict{Any,Any}(Pair{Any,Any}(\"c\",Any[23.0,33.0]),Pair{Any,Any}(\"b\",Any[22.0,32.0]),Pair{Any,Any}(\"a\",Any[21.0,31.0]))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OdsIO.ods_write-Tuple{AbstractString,Any}",
    "page": "Docstrings",
    "title": "OdsIO.ods_write",
    "category": "method",
    "text": "ods_write(filename,data)\n\nWrite tabular data (2D Array, DataFrame or Dictionary) to OpenDocument spreadsheet format.\n\nArguments\n\nfilename:    an existing ods file or the one to create.\ndata=Dict(): a dictionary of locations in the files where to export the data => the actual data (see notes).\n\nNotes:\n\nThe locations where to save the data (the keys in the dictionary) are a tuple of tree elements: The first one is the sheet name or sheet position, the other two are the index of row and column of the top left corner where to export the data. If using sheet positions, these must be within current file sheets boundaries. If you want to create new sheets, use names.\nThe actual data exported are either a Matrix (2D Array), a DataFrame or an OrderedDict. In case of DataFrame or OrderedDict the headers ARE exported, so if you don\'t want them, first convert the DataFrame (or Dictionary) to a Matrix. In case of OrderedDict, the inner data must all have the same length.\nSome spreadsheet software may not automatically recalculate cells that depends on exported cells (e.g. we are exporting some data o cell A1 and cells A2 depends on A2, the content of cell A2 may not be updated after the export). In such case most spreadsheet software have a command to force recalculation of cells (e.g. in LibreOffice/OpenOffice use CTRL+Shift+F9)\n\nExamples\n\njulia> ods_write(\"TestSpreadsheet.ods\",Dict((\"TestSheet\",3,2)=>[[1,2,3,4,5] [6,7,8,9,10]]))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OdsIO.odsio_autotest-Tuple{}",
    "page": "Docstrings",
    "title": "OdsIO.odsio_autotest",
    "category": "method",
    "text": "odsio_autotest()\n\nCheck that the module compiles and the PyCall dependency is respected (it doesn\'t however check for python ezodf presence)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OdsIO.toDf!-Tuple{Any}",
    "page": "Docstrings",
    "title": "OdsIO.toDf!",
    "category": "method",
    "text": "toDf!(m)\n\nConvert a mixed-type Matrix to DataFrame\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OdsIO.toDf-Tuple{Any}",
    "page": "Docstrings",
    "title": "OdsIO.toDf",
    "category": "method",
    "text": "toDf(m)\n\nConvert a mixed-type Matrix to DataFrame\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [OdsIO]\nOrder = [:type, :function]"
},

]}
