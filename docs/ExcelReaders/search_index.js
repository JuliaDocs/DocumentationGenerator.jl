var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ExcelReaders-1",
    "page": "Readme",
    "title": "ExcelReaders",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov) (Image: ExcelReaders) (Image: ExcelReaders) (Image: ExcelReaders) (Image: ExcelReaders)ExcelReaders is a package that provides functionality to read Excel files.WARNING: Version v0.9.0 removed all support for DataFrames.jl from this package. The ExcelFiles.jl package now provides functionality to read data from an Excel file into a DataFrame (or any other table type), and users are encouraged to use that package for tabular data going forward. Version v0.9.0 also no longer uses DataArrays.jl, but instead is based on DataValues.jl."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Use Pkgadd(ExcelReaders) in Julia to install ExcelReaders and its dependencies.The package uses the Python xlrd library. If either Python or the xlrd package are not installed on your system, the package will use the conda.jl package to install all necessary dependencies automatically."
},

{
    "location": "#Alternatives-1",
    "page": "Readme",
    "title": "Alternatives",
    "category": "section",
    "text": "The Taro package also provides Excel file reading functionality. The main difference between the two packages (in terms of Excel functionality) is that ExcelReaders uses the Python package xlrd for its processing, whereas Taro uses the Java packages Apache Tika and Apache POI."
},

{
    "location": "#Basic-usage-1",
    "page": "Readme",
    "title": "Basic usage",
    "category": "section",
    "text": "The most basic usage is this:using ExcelReaders\n\ndata = readxl(\"Filename.xlsx\", \"Sheet1!A1:C4\")This will return an array with all the data in the cell range A1 to C4 on Sheet1 in the Excel file Filename.xlsx.If you expect to read multiple ranges from the same Excel file you can get much better performance by opening the Excel file only once:using ExcelReaders\n\nf = openxl(\"Filename.xlsx\")\n\ndata1 = readxl(f, \"Sheet1!A1:C4\")\ndata2 = readxl(f, \"Sheet2!B4:F10\")"
},

{
    "location": "#Reading-a-whole-sheet-1",
    "page": "Readme",
    "title": "Reading a whole sheet",
    "category": "section",
    "text": "The readxlsheet function reads complete Excel sheets, without a need to specify precise range information. The most basic usage isusing ExcelReaders\n\ndata = readxlsheet(\"Filename.xlsx\", \"Sheet1\")This will read all content on Sheet1 in the file Filename.xlsx. Eventual blank rows and columns at the top and left are skipped. readxlsheet takes a number of optional keyword arguments:skipstartrows accepts either blanks (default) or a positive integer. With blank any empty initial rows are skipped. An integer skips as many rows as specified.\nskipstartcols accepts either blanks (default) or a positive integer. With blank any empty initial columns are skipped. An integer skips as many columns as specified.\nnrows accepts either all (default) or a positive integer. With all, all rows (except skipped ones) are read. An integer specifies the exact number of rows to be read.\nncols accepts either all (default) or a postiive integer. With all, all columns (except skipped ones) are read. An integer specifies the exact number of columns to be read.readxlsheet also accepts an ExcelFile (as obtained from openxl) as its first argument."
},

{
    "location": "autodocs/#ExcelReaders.ExcelErrorCell",
    "page": "Docstrings",
    "title": "ExcelReaders.ExcelErrorCell",
    "category": "type",
    "text": "ExcelErrorCell\n\nAn Excel cell that has an Excel error.\n\nYou cannot create ExcelErrorCell objects, they are returned if a cell in an Excel file has an Excel error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExcelReaders.ExcelFile",
    "page": "Docstrings",
    "title": "ExcelReaders.ExcelFile",
    "category": "type",
    "text": "ExcelFile\n\nA handle to an open Excel file.\n\nYou can create an instance of an ExcelFile by calling openxl.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExcelReaders.openxl-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "ExcelReaders.openxl",
    "category": "method",
    "text": "openxl(filename)\n\nOpen the Excel file filename and return an ExcelFile handle.\n\nThe returned ExcelFile handle can later be passed as the first argument to readxl or readxslsheet to read from that file. If you will call either of those functions more than once, performance will be better if you open the file only once with openxl.\n\nExample\n\nf = openxl(\"filename.xlsx\")\ndata = readxl(f, \"Sheet1!A1:C4\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ExcelReaders]\nOrder = [:type, :function]"
},

]}
