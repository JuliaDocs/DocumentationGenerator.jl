var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Oracle.jl-1",
    "page": "Readme",
    "title": "Oracle.jl",
    "category": "section",
    "text": "This package provides a driver to access Oracle databases using the Julia language, based on ODPI-C bindings."
},

{
    "location": "#Requirements-1",
    "page": "Readme",
    "title": "Requirements",
    "category": "section",
    "text": "Julia v0.6, v0.7 or v1.0.\nOracle\'s Instant Client.\nLinux or macOS.\nC compiler."
},

{
    "location": "#Instant-Client-installation-1",
    "page": "Readme",
    "title": "Instant Client installation",
    "category": "section",
    "text": "This package requires Oracle\'s Instant Client.To install it, follow these instructions:Download instant client.\nUnzip and add instantclient folder to your LDLIBRARYPATH:export LD_LIBRARY_PATH=/path-to-folder/instantclient_XX_Y:$LD_LIBRARY_PATHCheck ODPI-C documentation, or Instant Client documentation for alternative installation methods."
},

{
    "location": "#Package-installation-1",
    "page": "Readme",
    "title": "Package installation",
    "category": "section",
    "text": "julia> Pkg.add(\"Oracle\")"
},

{
    "location": "#Tutorial-1",
    "page": "Readme",
    "title": "Tutorial",
    "category": "section",
    "text": ""
},

{
    "location": "#Getting-a-Connection-1",
    "page": "Readme",
    "title": "Getting a Connection",
    "category": "section",
    "text": "import Oracle\n\nusername = \"my_username\"\npassword = \"my_password\"\nconnect_string = \"//IP_ADDRESS/XE\" # a valid Oracle connect string\n\nconn = Oracle.Connection(username, password, connect_string)The default encoding for CHAR and NCHAR is UTF-8.To connect as SYSDBA, use the appropriate auth_mode parameter.conn = Oracle.Connection(username, password, connect_string, auth_mode=Oracle.ORA_MODE_AUTH_SYSDBA)Connections are closed automatically (by the garbage collector) when they go out of scope. But you can also close a connection using Oracle.close! method.Oracle.close!(conn)"
},

{
    "location": "#Executing-a-Statement-1",
    "page": "Readme",
    "title": "Executing a Statement",
    "category": "section",
    "text": "Oracle.execute!(conn, \"CREATE TABLE TB_TEST ( ID INT NULL )\")\nOracle.execute!(conn, \"INSERT INTO TB_TEST ( ID ) VALUES ( 1 )\")\nOracle.execute!(conn, \"INSERT INTO TB_TEST ( ID ) VALUES ( null )\")\nOracle.commit!(conn) # will commit 2 lines\n\nOracle.execute!(conn, \"INSERT INTO TB_TEST ( ID ) VALUES ( 3 )\")\nOracle.rollback!(conn) # abort insertion of the third line"
},

{
    "location": "#Binding-values-to-a-Statement-1",
    "page": "Readme",
    "title": "Binding values to a Statement",
    "category": "section",
    "text": "Oracle.execute!(conn, \"CREATE TABLE TB_BIND ( ID NUMBER(15,0) NULL, FLT NUMBER(15,4) NULL, STR VARCHAR(255) NULL, DT DATE NULL)\")\n\nstmt = Oracle.Stmt(conn, \"INSERT INTO TB_BIND ( ID, FLT, STR, DT ) VALUES ( :id, :flt, :str, :dt )\")\n\n# will add 10 lines to TB_BIND\nfor i in 1:10\n    stmt[:id] = 1 + i\n    stmt[:flt] = 10.23 + i\n    stmt[:str] = \"🍕 $i\"\n    stmt[:dt] = Date(2018,12,31) + Dates.Day(i)\n    Oracle.execute!(stmt)\nend\n\nOracle.commit!(conn)\nOracle.close!(stmt)Statements are closed automatically (by the garbage collector) when they go out of scope. But it\'s good practice to close a Statement using Oracle.close! method as soon as you have finished with it, to release database resources."
},

{
    "location": "#Executing-a-Query-1",
    "page": "Readme",
    "title": "Executing a Query",
    "category": "section",
    "text": "Use Oracle.query method with do-syntax to get a reference to a cursor.Oracle.query(conn, \"SELECT * FROM TB_BIND\") do cursor\n    for row in cursor\n        println( row[\"ID\"]  )\n        println( row[\"FLT\"] )\n        println( row[\"STR\"] )\n        println( row[\"DT\"]  )\n    end\nendYou can also use a prepared statement to execute a query.stmt = Oracle.Stmt(conn, \"SELECT FLT FROM TB_BIND WHERE ID = :id\")\nstmt[:id] = 1\n\nOracle.query(stmt) do cursor\n    for row in cursor\n      println(row[\"FLT\"])\n    end\nend\n\nOracle.close!(stmt)"
},

{
    "location": "#ODPI-C-Naming-Conventions-1",
    "page": "Readme",
    "title": "ODPI-C Naming Conventions",
    "category": "section",
    "text": "All enums, constants and structs in ODPI-C library use the prefix DPI or dpi.In Oracle.jl, the Julia implementation of these elements use the prefix ORA or Ora.Examples:The ODPI-C constant DPI_MODE_AUTH_SYSDBA becomes ORA_MODE_AUTH_SYSDBA in Julia.\nThe ODPI-C enum dpiAuthMode becomes OraAuthMode in Julia.\nThe ODPI-C struct dpiTimestamp becomes OraTimestamp in Julia.All julia structs with prefix Ora are raw wrappers around ODPC-C structs and may contain unsafe attributes.Safe equivalent Julia structs drop the Ora prefix.ODPI-C function wrappers have their name preserved, as in dpiContext_create."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "The source code for the package Oracle.jl is licensed under the MIT License.During installation, Oracle.jl downloads the source code and compile the library ODPI-C which is licensed under The Universal Permissive License (UPL), Version 1.0 and/or the Apache License."
},

{
    "location": "autodocs/#Oracle.CommonCreateParams",
    "page": "Docstrings",
    "title": "Oracle.CommonCreateParams",
    "category": "type",
    "text": "Safe version of OraCommonCreateParams\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Oracle.ConnCreateParams",
    "page": "Docstrings",
    "title": "Oracle.ConnCreateParams",
    "category": "type",
    "text": "Safe version of OraConnCreateParams\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Oracle.Connection",
    "page": "Docstrings",
    "title": "Oracle.Connection",
    "category": "type",
    "text": "Connection handles are used to represent connections to the database. These can be standalone connections created by calling the function dpiConncreate() or acquired from a session pool by calling the function dpiPoolacquireConnection(). They can be closed by calling the function dpiConnclose() or releasing the last reference to the connection by calling the function dpiConnrelease(). Connection handles are used to create all handles other than session pools and context handles.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Oracle.EncodingInfo",
    "page": "Docstrings",
    "title": "Oracle.EncodingInfo",
    "category": "type",
    "text": "Mirrors ODPI-C\'s OraEncodingInfo struct, but using Julia types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Oracle.NativeValue",
    "page": "Docstrings",
    "title": "Oracle.NativeValue",
    "category": "type",
    "text": "High-level type as an aggregation of dpiNativeTypeNum and dpiData.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Oracle.OraCommonCreateParams-Tuple{Oracle.Context,Oracle.CommonCreateParams}",
    "page": "Docstrings",
    "title": "Oracle.OraCommonCreateParams",
    "category": "method",
    "text": "This function may be unsafe: safe_params must outlive the OraCommonCreateParams generated by this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Oracle.OraConnCreateParams",
    "page": "Docstrings",
    "title": "Oracle.OraConnCreateParams",
    "category": "type",
    "text": "This structure is used for creating connections to the database, whether standalone or acquired from a session pool. All members are initialized to default values using the dpiContext_initConnCreateParams() function. Care should be taken to ensure a copy of this structure exists only as long as needed to create the connection since it can contain a clear text copy of credentials used for connecting to the database.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Oracle.OraConnCreateParams-Tuple{Oracle.Context,Oracle.ConnCreateParams}",
    "page": "Docstrings",
    "title": "Oracle.OraConnCreateParams",
    "category": "method",
    "text": "This function may be unsafe: safe_params must outlive the ConnCreateParams generated by this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Oracle.OraData",
    "page": "Docstrings",
    "title": "Oracle.OraData",
    "category": "type",
    "text": "This structure is used for passing data to and from the database for variables and for manipulating object attributes and collection values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Oracle.OraPoolCreateParams",
    "page": "Docstrings",
    "title": "Oracle.OraPoolCreateParams",
    "category": "type",
    "text": "This structure is used for creating session pools, which can in turn be used to create connections that are acquired from that session pool.\n\nAll members are initialized to default values using the dpiContext_initPoolCreateParams() function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Oracle.StmtInfo",
    "page": "Docstrings",
    "title": "Oracle.StmtInfo",
    "category": "type",
    "text": "High-level version for OraStmtInfo using Bool Julia type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Oracle.execute!-Tuple{Oracle.Stmt}",
    "page": "Docstrings",
    "title": "Oracle.execute!",
    "category": "method",
    "text": "execute!(stmt::Stmt; exec_mode::dpiExecMode=ORA_MODE_EXEC_DEFAULT) :: UInt32\n\nReturns the number of columns which are being queried. If the statement does not refer to a query, the value is set to 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Oracle.fetch!-Tuple{Oracle.Stmt}",
    "page": "Docstrings",
    "title": "Oracle.fetch!",
    "category": "method",
    "text": "fetch!(stmt::Stmt)\n\nFetches a single row from the statement.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Oracle.row_count-Tuple{Oracle.Stmt}",
    "page": "Docstrings",
    "title": "Oracle.row_count",
    "category": "method",
    "text": "Number of affected rows in a DML statement.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Oracle]\nOrder = [:type, :function]"
},

]}
