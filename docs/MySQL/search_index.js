var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MySQL-1",
    "page": "Readme",
    "title": "MySQL",
    "category": "section",
    "text": "Package for interfacing with MySQL databases from JuliaPackageEvaluator Build Status\n[![][pkg-0.6-img]][pkg-0.6-url] [![][travis-img]][travis-url] [![][codecov-img]][codecov-url]"
},

{
    "location": "#Table-of-Contents-1",
    "page": "Readme",
    "title": "Table of Contents",
    "category": "section",
    "text": "Installation\nProject Status\nContributing and Questions\nDocumentation\nFunctions\nTypes\nExample"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered in METADATA.jl and so can be installed with Pkg.add.julia> Pkg.add(\"MySQL\")"
},

{
    "location": "#Project-Status-1",
    "page": "Readme",
    "title": "Project Status",
    "category": "section",
    "text": "The package is tested against the current Julia 0.6 release and nightly on Linux and OS X."
},

{
    "location": "#Contributing-and-Questions-1",
    "page": "Readme",
    "title": "Contributing and Questions",
    "category": "section",
    "text": "Contributions are very welcome, as are feature requests and suggestions. Please open an [issue][issues-url] if you encounter any problems or would just like to ask a question.<!– [docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://JuliaData.github.io/MySQL.jl/latest –>[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://JuliaData.github.io/MySQL.jl/stable[travis-img]: https://travis-ci.org/JuliaDatabases/MySQL.jl.svg?branch=master [travis-url]: https://travis-ci.org/JuliaDatabases/MySQL.jl[codecov-img]: https://codecov.io/gh/JuliaDatabases/MySQL.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/JuliaDatabases/MySQL.jl[issues-url]: https://github.com/JuliaDatabases/MySQL.jl/issues[pkg-0.6-img]: http://pkg.julialang.org/badges/MySQL_0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=MySQL"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": ""
},

{
    "location": "#MySQL.connect-1",
    "page": "Readme",
    "title": "MySQL.connect",
    "category": "section",
    "text": "MySQL.connect(host::String, user::String, passwd::String; db::String = \"\", port = \"3306\", socket::String = MySQL.API.MYSQL_DEFAULT_SOCKET, opts = Dict())Connect to a mysql database. Returns a MySQL.Connection object to be passed to other API functions.Options are passed via dictionary. The available keys are below and a descrition of the options can be found in the MySQL documentation.MySQL.API.MYSQL_OPT_CONNECT_TIMEOUT\r\nMySQL.API.MYSQL_OPT_COMPRESS\r\nMySQL.API.MYSQL_OPT_NAMED_PIPE\r\nMySQL.API.MYSQL_INIT_COMMAND\r\nMySQL.API.MYSQL_READ_DEFAULT_FILE\r\nMySQL.API.MYSQL_READ_DEFAULT_GROUP\r\nMySQL.API.MYSQL_SET_CHARSET_DIR\r\nMySQL.API.MYSQL_SET_CHARSET_NAME\r\nMySQL.API.MYSQL_OPT_LOCAL_INFILE\r\nMySQL.API.MYSQL_OPT_PROTOCOL\r\nMySQL.API.MYSQL_SHARED_MEMORY_BASE_NAME\r\nMySQL.API.MYSQL_OPT_READ_TIMEOUT\r\nMySQL.API.MYSQL_OPT_WRITE_TIMEOUT\r\nMySQL.API.MYSQL_OPT_USE_RESULT\r\nMySQL.API.MYSQL_OPT_USE_REMOTE_CONNECTION\r\nMySQL.API.MYSQL_OPT_USE_EMBEDDED_CONNECTION\r\nMySQL.API.MYSQL_OPT_GUESS_CONNECTION\r\nMySQL.API.MYSQL_SET_CLIENT_IP\r\nMySQL.API.MYSQL_SECURE_AUTH\r\nMySQL.API.MYSQL_REPORT_DATA_TRUNCATION\r\nMySQL.API.MYSQL_OPT_RECONNECT\r\nMySQL.API.MYSQL_OPT_SSL_VERIFY_SERVER_CERT\r\nMySQL.API.MYSQL_PLUGIN_DIR\r\nMySQL.API.MYSQL_DEFAULT_AUTH\r\nMySQL.API.MYSQL_OPT_BIND\r\nMySQL.API.MYSQL_OPT_SSL_KEY\r\nMySQL.API.MYSQL_OPT_SSL_CERT\r\nMySQL.API.MYSQL_OPT_SSL_CA\r\nMySQL.API.MYSQL_OPT_SSL_CAPATH\r\nMySQL.API.MYSQL_OPT_SSL_CIPHER\r\nMySQL.API.MYSQL_OPT_SSL_CRL\r\nMySQL.API.MYSQL_OPT_SSL_CRLPATH\r\nMySQL.API.MYSQL_OPT_CONNECT_ATTR_RESET\r\nMySQL.API.MYSQL_OPT_CONNECT_ATTR_ADD\r\nMySQL.API.MYSQL_OPT_CONNECT_ATTR_DELETE\r\nMySQL.API.MYSQL_SERVER_PUBLIC_KEY\r\nMySQL.API.MYSQL_ENABLE_CLEARTEXT_PLUGIN\r\nMySQL.API.MYSQL_OPT_CAN_HANDLE_EXPIRED_PASSWORDS"
},

{
    "location": "#MySQL.disconnect-1",
    "page": "Readme",
    "title": "MySQL.disconnect",
    "category": "section",
    "text": "MySQL.disconnect(conn::MySQL.Connection)Disconnect a MySQL.Connection object from the remote database."
},

{
    "location": "#MySQL.escape-1",
    "page": "Readme",
    "title": "MySQL.escape",
    "category": "section",
    "text": "MySQL.escape(conn::MySQL.Connection, str::String) -> StringEscape an SQL statement"
},

{
    "location": "#MySQL.query-1",
    "page": "Readme",
    "title": "MySQL.query",
    "category": "section",
    "text": "MySQL.query(conn::MySQL.Connection, sql::String, sink=Data.Table; append::Bool=false) => sinkExecute an SQL statement and return the results in the sink, which can be any valid Data.Sink (interface from DataStreams.jl). By default, a NamedTuple of Vectors is returned.Passing append=true as a keyword argument will cause the resultset to be appended to the sink instead of replacing.To get the results as a DataFrame, you can just do MySQL.query(conn, sql, DataFrame).See list of DataStreams implementations here"
},

{
    "location": "#MySQL.execute!-1",
    "page": "Readme",
    "title": "MySQL.execute!",
    "category": "section",
    "text": "MySQL.execute!(conn::MySQL.Connection, sql::String)\r\nMySQL.execute!(stmt::MySQL.Stmt, params)Execute an SQL statement without returning results (useful for DDL statements, update, delete, etc.)The SQL can either be passed as either a string or a prepared MySQL statement (see MySQL.Stmt)."
},

{
    "location": "#MySQL.insertid-1",
    "page": "Readme",
    "title": "MySQL.insertid",
    "category": "section",
    "text": "MYSQL.insertid(conn::Connection)Get the insert id of the most recently executed SQL statement."
},

{
    "location": "#Types-1",
    "page": "Readme",
    "title": "Types",
    "category": "section",
    "text": ""
},

{
    "location": "#MySQL.Connection-1",
    "page": "Readme",
    "title": "MySQL.Connection",
    "category": "section",
    "text": "MySQL.connect(host::String, user::String, passwd::String; db::String = \"\", port = \"3306\", socket::String = MySQL.API.MYSQL_DEFAULT_SOCKET, opts = Dict())A connection to a MySQL database."
},

{
    "location": "#MySQL.Stmt-1",
    "page": "Readme",
    "title": "MySQL.Stmt",
    "category": "section",
    "text": "MySQL.Stmt(conn::MySQL.Connection, sql::String) => MySQL.StmtA prepared SQL statement that may contain ? parameter placeholders.A MySQL.Stmt may then be executed by calling MySQL.execute!(stmt, params) where params are the values to be bound to the ? placeholders in the original SQL statement. Params must be provided for every ? and will be matched in the same order they appeared in the original SQL statement.Bulk statement execution can be accomplished by \"streaming\" a param source like:Data.stream!(source::Data.Source, stmt::MySQL.Stmt)where source is any valid Data.Source (from DataStreams.jl). As with MySQL.execute!, the source must provide enough params and will be matched in the same order."
},

{
    "location": "#MySQL.Query-1",
    "page": "Readme",
    "title": "MySQL.Query",
    "category": "section",
    "text": "MySQL.Query(conn, sql, sink=Data.Table; append::Bool=false) => MySQL.QueryExecute an SQL statement and return a MySQL.Query object. Result rows can be iterated as NamedTuples via Data.rows(query) where query is the MySQL.Query object. Results can also be streamed to any valid Data.Sink via Data.stream!(query, sink)."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "Connect to a database, query a table, write to a table, then close the database connection.using MySQL\r\nusing DataFrames\r\n\r\nconn = MySQL.connect(\"localhost\", \"root\", \"password\", db = \"test_db\")\r\n\r\nfoo = MySQL.query(conn, \"\"\"SELECT COUNT(*) FROM my_first_table;\"\"\", DataFrame)\r\nnum_foo = foo[1,1]\r\n\r\nmy_stmt = MySQL.Stmt(conn, \"\"\"INSERT INTO my_second_table (\'foo_id\',\'foo_name\') VALUES (?,?);\"\"\")\r\n\r\nfor i = 1:num_foo\r\n  MySQL.execute!(my_stmt, [i, \"foo_$i\"])\r\nend\r\n\r\nMySQL.disconnect(conn)\r\n"
},

{
    "location": "autodocs/#MySQL.Query-Tuple{MySQL.Connection,String}",
    "page": "Docstrings",
    "title": "MySQL.Query",
    "category": "method",
    "text": "MySQL.Query(conn, sql, sink=Data.Table; append::Bool=false) => MySQL.Query\n\nexecute an sql statement and return a MySQL.Query object. Result rows can be iterated as NamedTuples via Data.rows(query) where query is the MySQL.Query object. Results can also be streamed to any valid Data.Sink via Data.stream!(query, sink).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MySQL.Stmt",
    "page": "Docstrings",
    "title": "MySQL.Stmt",
    "category": "type",
    "text": "MySQL.Stmt(conn, sql) => MySQL.Stmt\n\nPrepare an SQL statement that may contain ? parameter placeholders.\n\nA MySQL.Stmt may then be executed by calling MySQL.execute!(stmt, params) where params are the values to be bound to the ? placeholders in the original SQL statement. Params must be provided for every ? and will be matched in the same order they appeared in the original SQL statement.\n\nBulk statement execution can be accomplished by \"streaming\" a param source like:\n\nData.stream!(source, stmt)\n\nwhere source is any valid Data.Source (from DataStreams.jl). As with MySQL.execute!, the source must provide enough params and will be matched in the same order.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MySQL.connect-Tuple{String,String,String}",
    "page": "Docstrings",
    "title": "MySQL.connect",
    "category": "method",
    "text": "MySQL.connect(host::String, user::String, passwd::String; db::String = \"\", port = \"3306\", socket::String = MySQL.API.MYSQL_DEFAULT_SOCKET, opts = Dict())\n\nConnect to a MySQL database.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MySQL.disconnect-Tuple{MySQL.Connection}",
    "page": "Docstrings",
    "title": "MySQL.disconnect",
    "category": "method",
    "text": "MySQL.disconnect(conn::MySQL.Connection)\n\nClose a handle to a MySQL database opened by MySQL.connect.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MySQL.escape-Tuple{MySQL.Connection,String}",
    "page": "Docstrings",
    "title": "MySQL.escape",
    "category": "method",
    "text": "MySQL.escape(conn::MySQL.Connection, str::String) -> String\n\nEscapes a string using mysql_real_escape_string(), returns the escaped string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MySQL.execute!-Tuple{MySQL.Connection,String}",
    "page": "Docstrings",
    "title": "MySQL.execute!",
    "category": "method",
    "text": "MySQL.execute!(conn, sql) => Nothing\n\nexecute an sql statement without returning results (useful for DDL statements, update, delete, etc.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MySQL.query",
    "page": "Docstrings",
    "title": "MySQL.query",
    "category": "function",
    "text": "MySQL.query(conn, sql, sink=Data.Table, args...; append::Bool=false) => sink\n\nexecute an sql statement and return the results in sink, which can be any valid Data.Sink (interface from DataStreams.jl), and args... are any necessary arguments to the sink. By default, a NamedTuple of Vectors are returned.\n\nPassing append=true as a keyword argument will cause the resultset to be appended to the sink instead of replacing.\n\nTo get the results as a DataFrame, you can just do MySQL.query(conn, sql, DataFrame).\n\nSee list of DataStreams implementations here\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [MySQL]\nOrder = [:type, :function]"
},

]}
