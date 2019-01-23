var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#BeaData.jl-1",
    "page": "Home",
    "title": "BeaData.jl",
    "category": "section",
    "text": "A Julia interface for retrieving data from the U.S. Bureau of Economic Analysis (BEA) Data API."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "At the Julia REPL:    Pkg.add(\"BeaData\")For now, the package only retrieves full tables from the standard National Income and Product Accounts (NIPA) (i.e., no downloads of single data series or     from other datasets such as the International Transactions Accounts)."
},

{
    "location": "#Initialize-a-connection-1",
    "page": "Home",
    "title": "Initialize a connection",
    "category": "section",
    "text": "Initialize a connection to the BEA API:   b = Bea(\"your-36-character-registration-key\")Alternatively, you can save your key in the file ~/.beadatarc and call the constructor with no argument:    b = Bea()"
},

{
    "location": "#Retrieve-a-table-1",
    "page": "Home",
    "title": "Retrieve a table",
    "category": "section",
    "text": "Download a NIPA table using the get_nipa_table method:   mytable = get_nipa_table(b::Bea, TableName::AbstractString, frequency::AbstractString,\n        startyear::Int, endyear::Int)Arguments:b: a Bea connection\nTableName: the string TableName for the desired NIPA table (see \"NIPA Table Names\" below)\nfrequency: \"A\" for annual, \"Q\" for quarerly\nstartyear: first year of data requested, in YYYY format\nendyear: last year of data requested, in YYYY formatThe method returns an object of type BeaTable, with the following fields:tablenum: Table number\ntablename: TableName\ntabledesc: Table description\nlinedesc: an OrderedDict with table line numbers and the corresponding variable descriptions\ntablenotes: an OrderedDict with any notes to the table\nfrequency\nstartyear\nendyear\ndf: a DataFrame containing the data values; column names are the line numbers from the table (see \"NIPA Table line numbers\" below)"
},

{
    "location": "#NIPA-Table-Names-1",
    "page": "Home",
    "title": "NIPA Table Names",
    "category": "section",
    "text": "The TableNames necessary to retrieve data from the API are not exactly the same as the NIPA table numbers.  The general pattern for many tables is to replace the periods in the table number with zeros and add \"T\" to the beginning. For example, the TableName for Table 1.1.5 is \"T10105\". This pattern does not hold for all tables, however, so use the get_bea_parameterlist function to retreive a Dict of TableNames and descriptions."
},

{
    "location": "#NIPA-Table-line-numbers-1",
    "page": "Home",
    "title": "NIPA Table line numbers",
    "category": "section",
    "text": "The DataFrame returned by a call to the API has dates in the first column and the table data in the remaining columns.  Data columns are named for the corresponding line numbers of the NIPA table (e.g., :line1, :line2, etc.)."
},

{
    "location": "#Index-1",
    "page": "Home",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"lib/public.md\"]"
},

{
    "location": "lib/public/#",
    "page": "Index",
    "title": "Index",
    "category": "page",
    "text": ""
},

{
    "location": "lib/public/#Command-Documentation-1",
    "page": "Index",
    "title": "Command Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "lib/public/#BeaData.Bea",
    "page": "Index",
    "title": "BeaData.Bea",
    "category": "type",
    "text": "A connection to the U.S. Bureau of Economic Analysis (BEA) Data API.\n\nConstructors\n\nBea()\nBea(key::AbstractString)\n\nArguments\n\nkey: Registration key provided by the BEA.\n\nA valid registration key is required to retrieve data from the BEA\'s API.  A key can be obtained by registering at the BEA website.\n\nA default API key can be specified in a ~/.beadatarc file.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#BeaData.BeaTable",
    "page": "Index",
    "title": "BeaData.BeaTable",
    "category": "type",
    "text": "A NIPA table with data and metadata returned from a get_nipa_table call.\n\nFields\n\ntablenum - NIPA table number\ntablename - API TableName\ntabledesc - The table title (e.g., \'Real Gross Domestic Product, Chained Dollars\' for Table 1.1.6)\nlinedesc - OrderedDict of descriptions for each line of the table\ntablenotes - Table notes, if any\nfrequency\nstartyear\nendyear\ndf - DataFrame containing the data values from the table; column names are the line numbers from the table, the first column contains the date for each observation in Julia Date format\n\n\n\n\n\n"
},

{
    "location": "lib/public/#BeaData.get_bea_datasets-Tuple{Bea}",
    "page": "Index",
    "title": "BeaData.get_bea_datasets",
    "category": "method",
    "text": "get_bea_datasets(b::Bea)\n\nReturn a Dict of dataset names and descriptions.\n\nArguments\n\nb – a Bea connection\n\n\n\n\n\n"
},

{
    "location": "lib/public/#BeaData.get_bea_parameterlist-Tuple{Bea,String}",
    "page": "Index",
    "title": "BeaData.get_bea_parameterlist",
    "category": "method",
    "text": "get_bea_parameterlist(b::BeaData.Bea, dataset::String)\n\nReturn a Dict of parameters for dataset.\n\nArguments\n\nb – a Bea connection\ndataset – String indicating the dataset ID.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#BeaData.get_nipa_table-Tuple{Bea,AbstractString,AbstractString,Int64,Int64}",
    "page": "Index",
    "title": "BeaData.get_nipa_table",
    "category": "method",
    "text": "get_nipa_table(b::Bea, TableName::AbstractString, frequency::AbstractString, startyear::Int, endyear::Int)\n\nRequest a NIPA table from the BEA data API and return an object of type BeaTable.\n\nArguments\n\nb – a Bea connection\nTableName – the Table Name (string) for the desired NIPA table\nfrequency – \"A\" for annual, \"Q\" for quarerly\nstartyear – first year of data requested, in YYYY format\nendyear – last year of data requested, in YYYY format\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Index-1",
    "page": "Index",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"public.md\"]Modules = [BeaData]\nPrivate = false"
},

]}
