var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Hive.jl-1",
    "page": "Readme",
    "title": "Hive.jl",
    "category": "section",
    "text": "A client for distributed SQL engines that provide a HiveServer2 interface. E.g.: Hive, Spark SQL, Impala(Image: Build Status)"
},

{
    "location": "#Connecting-1",
    "page": "Readme",
    "title": "Connecting",
    "category": "section",
    "text": "To connect to the server, create an instance of HiveSession.session = HiveSession()Without any parameters, this attempts to connect to a server running on localhost port 10000. A remote server can be connected to by specifying the hostname and port number.session = HiveSession(\"localhost\", 10000)As of now only SASL-Plain authentication is supported, without any qop. The default implementation authenticates with the same user-id as that of the login shell. That can be overridden by providing an appropriate instance of HiveAuth.session = HiveSession(\"localhost\", 10000, HiveAuthSASLPlain(\"uid\", \"pwd\", \"zid\"))The thrift TBinaryProtocol is used by default, which is also the default for most server setups. Other protocols can be used by specifying the optional named parameter tprotocol. As of now, :binary and :compact protocols are supported.session = HiveSession(\"localhost\", 10000; tprotocol=:binary)"
},

{
    "location": "#Executing-Queries-1",
    "page": "Readme",
    "title": "Executing Queries",
    "category": "section",
    "text": "Statement to be executed can be DML, DDL, SET, etc.Optional config parameter can have additional keyword parameters that will be passed as configuration  properties that are overlayed on top of the the existing session configuration before this statement is executed. They apply to this statement only and are not permanent.When async is true, execution is asynchronous and a PendingResult may be returned. If the returned value is a PendingResult:isready must be called on the PendingResult instance to check for completion.\nonce ready, calling result on it returns ResultSet\nwhen not ready, calling result returns the same PendingResult instancers = execute(session, \"select * from twitter_small where fromid < 100\";\n             async=true, config=Dict())\nwhile !isready(rs)\n    println(\"waiting...\") \n    sleep(10)\nend\nrs = result(rs)"
},

{
    "location": "#Working-with-a-Result-Set-1",
    "page": "Readme",
    "title": "Working with a Result Set",
    "category": "section",
    "text": "Result sets can be iterated upon with iterators and must be closed at the end by calling the close method, to release resources.Two kinds of iterators are available as of now:record iterator: returns a row at a time as a Tuple.\ncolumn chunk iterator: returns a list of column name and column data pairs for a block of recordsCalling records results in a record iterator:rs = execute(session, \"select * from twitter_small where fromid < 100\")\nfor rec in records(rs)\n   println(rec)\nend\nclose(rs)Calling columnchunks results in a column chunk iterator:rs = execute(session, \"select * from twitter_small where fromid < 100\")\nfor colframe in columnchunks(rs)\n    for cols in colframe\n        println(\"name  : \", cols[1])\n        println(\"values: \", cols[2])\n    end\nend\nclose(rs)\n````\n\nAll records can be read from a result set by simply calling `columnchunk`. This should only be used when the result is sure to fit in memory.\n\n````\nrs = execute(session, \"select * from twitter_small where fromid < 100\")\nprintln(columnchunk(rs))\nclose(rs)\n````\n\n## Pretty Printing Data\n\nAn exported type named `Tabular` can be used to display column chunks in a tabular format. Optional display parameters can be passed:\n- `full`: whether to display all rows (default is `false`, i.e. to skip data from the middle to fit display height)\n- `compact_if_too_wide`: whether to display only column summary if display width is not enough to fit data (default is `true`)\nrs = execute(session, \"select * from twittersmall where fromid < 100\") Tabular(columnchunk(rs); full=false, compactiftoowide=true)\nA convenience iterator that produces `Tabular` types is also provided:\nrs = execute(session, \"select * from twitter_small where fromid < 100\") for tab in tabulars(rs)     println(tab) end ```"
},

{
    "location": "#Fetching-Server/Table-Metadata-1",
    "page": "Readme",
    "title": "Fetching Server/Table Metadata",
    "category": "section",
    "text": "Server configuration can be fetched by calling get_info. Here, info_type is one of the values from the enumeration InfoType, e.g. InfoType.CLI_SERVER_NAME.info_type = InfoType.CLI_SERVER_NAME\ninfo = get_info(session, info_type)Catalogs, Schemas, TableTypes, Functions, Tables, Columns defined on the server can be listed by calling the appropriate API listed below. The results are returned as a DataFrame.# list all catalogs\ncatalogs(session)\n\n# list all table types configured\ntabletypes(session)\n\n# list all schemas\nschemas(session)\n\n# schema list can be optionally filtered with catalog and schema name\nschemas(session; catalog_pattern=\"%\", schema_pattern=\"%\")\n\n# list all tables\ntables(session)\n\n# table list can be optionally filtered\ntables(session; catalog_pattern=\"%\", schema_pattern=\"%\",\n       table_pattern=\"%\", table_types=[])\n\n# list columns\ncolumns(session)\n\n# columns list can be optionally filtered\ncolumns(session; catalog=\"\", schema_pattern=\"%\",\n        table_pattern=\"%\", column_pattern=\"%\")\n\n# list functions matching given function name pattern\nfunctions(session, \"%\")\n\n# functions list can be optionally filtered\nfunctions(session, \"%\"; catalog=\"\", schema_pattern=\"%\")"
},

{
    "location": "autodocs/#Hive.HiveAuth",
    "page": "Docstrings",
    "title": "Hive.HiveAuth",
    "category": "type",
    "text": "Authentication mechanisms Only SASL-Plain supported for now\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hive.HiveSession",
    "page": "Docstrings",
    "title": "Hive.HiveSession",
    "category": "type",
    "text": "HiveSession holds a connection and session status\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hive.catalogs-Tuple{HiveSession}",
    "page": "Docstrings",
    "title": "Hive.catalogs",
    "category": "method",
    "text": "Returns the list of catalogs (databases). Results are ordered by TABLE_CATALOG.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hive.columns-Tuple{HiveSession}",
    "page": "Docstrings",
    "title": "Hive.columns",
    "category": "method",
    "text": "Returns a list of columns in the specified tables. Optional parameter catalog must contain a full catalog name. Optional parameters schema_pattern, table_pattern and column_pattern can contain a search pattern. Result Set Columns are the same as those for the ODBC CLIColumns function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hive.execute-Tuple{HiveSession,AbstractString}",
    "page": "Docstrings",
    "title": "Hive.execute",
    "category": "method",
    "text": "Execute a statement. Statement to be executed can be DML, DDL, SET, etc. Optional config parameter can have additional keyword parameters that will be passed as configuration      properties that are overlayed on top of the the existing session configuration before this statement     is executed. They apply to this statement only and are not permanent. When async is true, execution is asynchronous and a PendingResult may be returned. If the returned value is a PendingResult:     - Caller must call isready on a PendingResult instance to check for completion.     - Once ready, calling result on it returns ResultSet (the same PendingResult instance is returned if it is still not ready)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hive.functions-Tuple{HiveSession,AbstractString}",
    "page": "Docstrings",
    "title": "Hive.functions",
    "category": "method",
    "text": "Returns a list of functions supported by the data source. Catalog name must match the catalog name as it is stored in the database; \"\" retrieves those without a catalog; null means that the catalog name should not be used to narrow the search. Schema name pattern must match the schema name as it is stored in the database; \"\" retrieves those without a schema; null means that the schema name should not be used to narrow the search. Function name pattern must match the function name as it is stored in the database. The behavior of this function matches java.sql.DatabaseMetaData.getFunctions().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hive.schemas-Tuple{HiveSession}",
    "page": "Docstrings",
    "title": "Hive.schemas",
    "category": "method",
    "text": "Retrieves the schema names available in this database. The results are ordered by TABLECATALOG and TABLESCHEM.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hive.tables-Tuple{HiveSession}",
    "page": "Docstrings",
    "title": "Hive.tables",
    "category": "method",
    "text": "Returns a list of tables with catalog, schema, and table type information. Results are ordered by TABLETYPE, TABLECAT, TABLESCHEM, and TABLENAME\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hive.tabletypes-Tuple{HiveSession}",
    "page": "Docstrings",
    "title": "Hive.tabletypes",
    "category": "method",
    "text": "Returns the table types available in this database. The results are ordered by table type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hive.HiveConn",
    "page": "Docstrings",
    "title": "Hive.HiveConn",
    "category": "type",
    "text": "HiveConn holds the thrift connection and protocol objects. It also holds the hive session handle for this connection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hive.Pattern",
    "page": "Docstrings",
    "title": "Hive.Pattern",
    "category": "type",
    "text": "A search pattern used in the below methods can have:\n\n\'_\': Any single character.\n\'%\': Any sequence of zero or more characters.\n\'\': Escape character used to include special characters,\n\ne.g. \'_\', \'%\', \'\'. If a \'\' precedes a non-special character it has no special meaning and is interpreted literally.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Hive]\nOrder = [:type, :function]"
},

]}
