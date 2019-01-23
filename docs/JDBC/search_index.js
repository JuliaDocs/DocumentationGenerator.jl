var documenterSearchIndex = {"docs": [

{
    "location": "#JDBC.JDBCRowIterator",
    "page": "Home",
    "title": "JDBC.JDBCRowIterator",
    "category": "type",
    "text": "Iterator to get rows of tables as array of tuples.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.commit-Tuple{JDBC.Connection}",
    "page": "Home",
    "title": "JDBC.commit",
    "category": "method",
    "text": "Commit any pending transaction to the database.  Throws a JDBCError if connection is null.\n\nReturns nothing.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.commit-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.Connection\")}}",
    "page": "Home",
    "title": "JDBC.commit",
    "category": "method",
    "text": "commit(connection::JConnection)\n\nCommits the transaction\n\nArgs\n\nconnection: The connection object\n\nReturns\n\nNone\n\n\n\n\n\n"
},

{
    "location": "#JDBC.connection-Tuple{JDBC.Cursor}",
    "page": "Home",
    "title": "JDBC.connection",
    "category": "method",
    "text": "Return the corresponding connection for a given cursor.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.createStatement-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.Connection\")}}",
    "page": "Home",
    "title": "JDBC.createStatement",
    "category": "method",
    "text": "createStatement(connection::JConnection)\n\nInitializes a Statement\n\nArgs\n\nconnection: The connection object\n\nReturns\n\nThe JStatement object\n\n\n\n\n\n"
},

{
    "location": "#JDBC.cursor-Tuple{JDBC.Connection}",
    "page": "Home",
    "title": "JDBC.cursor",
    "category": "method",
    "text": "Create a new database cursor.\n\nReturns a JDBCCursor instance.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.execute!-Tuple{JDBC.Cursor,AbstractString}",
    "page": "Home",
    "title": "JDBC.execute!",
    "category": "method",
    "text": "Run a query on a database.\n\nThe results of the query are not returned by this function but are accessible through the cursor.\n\nparameters can be any iterable of positional parameters, or of some T<:Associative for keyword/named parameters.\n\nThrows a JDBCError if query caused an error, cursor is not initialized or  connection is null.\n\nReturns nothing.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.execute-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.Statement\")},AbstractString}",
    "page": "Home",
    "title": "JDBC.execute",
    "category": "method",
    "text": "execute(stmt::JStatement, query::AbstractString)\n\nExecutes the auery based on JStatement or any of its sub-types\n\nArgs\n\nstmt: The JStatement object or any of its sub-types\nquery: The query to be executed\n\nReturns\n\nA boolean indicating whether the execution was successful or not\n\n\n\n\n\n"
},

{
    "location": "#JDBC.execute-Tuple{Union{JavaObject{Symbol(\"java.sql.PreparedStatement\")}, JavaObject{Symbol(\"java.sql.CallableStatement\")}}}",
    "page": "Home",
    "title": "JDBC.execute",
    "category": "method",
    "text": "execute(stmt::(Union{JPreparedStatement, JCallableStatement}))\n\nExecutes the auery based on the Prepared Statement or Callable Statement\n\nArgs\n\nstmt: The Prepared Statement or the Callable Statement object\n\nReturns\n\nA boolean indicating whether the execution was successful or not\n\n\n\n\n\n"
},

{
    "location": "#JDBC.executeQuery-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.Statement\")},AbstractString}",
    "page": "Home",
    "title": "JDBC.executeQuery",
    "category": "method",
    "text": "executeQuery(stmt::JStatement, query::AbstractString)\n\nExecutes the auery and returns the results as a JResultSet object.\n\nArgs\n\nstmt: The Statement object\nquery: The query to be executed\n\nReturns\n\nThe result set as a JResultSet object\n\n\n\n\n\n"
},

{
    "location": "#JDBC.executeQuery-Tuple{Union{JavaObject{Symbol(\"java.sql.PreparedStatement\")}, JavaObject{Symbol(\"java.sql.CallableStatement\")}}}",
    "page": "Home",
    "title": "JDBC.executeQuery",
    "category": "method",
    "text": "executeQuery(stmt::Union{JPreparedStatement, JCallableStatement})\n\nExecutes the auery based on a JPreparedStatement object or a JCallableStatement object\n\nArgs\n\nstmt: The JPreparedStatement object or JCallableStatement object\n\nReturns\n\nThe result set as a JResultSet object\n\n\n\n\n\n"
},

{
    "location": "#JDBC.executeUpdate-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.Statement\")},AbstractString}",
    "page": "Home",
    "title": "JDBC.executeUpdate",
    "category": "method",
    "text": "executeUpdate(stmt::JStatement, query::AbstractString)\n\nExecutes the update auery and returns the status of the execution of the query\n\nArgs\n\nstmt: The Statement object\nquery: The query to be executed\n\nReturns\n\nAn integer representing the status of the execution\n\n\n\n\n\n"
},

{
    "location": "#JDBC.executeUpdate-Tuple{Union{JavaObject{Symbol(\"java.sql.PreparedStatement\")}, JavaObject{Symbol(\"java.sql.CallableStatement\")}}}",
    "page": "Home",
    "title": "JDBC.executeUpdate",
    "category": "method",
    "text": "executeUpdate(stmt::Union{JPreparedStatement, JCallableStatement})\n\nExecutes the update auery based on a JPreparedStatement object or a JCallableStatement object\n\nArgs\n\nstmt: The JPreparedStatement object or JCallableStatement object\n\nReturns\n\nAn integer indicating the status of the execution of the query\n\n\n\n\n\n"
},

{
    "location": "#JDBC.getColumnCount-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.ResultSetMetaData\")}}",
    "page": "Home",
    "title": "JDBC.getColumnCount",
    "category": "method",
    "text": "getColumnCount(rsmd::JResultSetMetaData)\n\nReturns the number of columns based on the JResultSetMetaData object\n\nArgs\n\nrsmd: The JResultSetMetaData object\n\nReturns\n\nThe number of columns.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.getColumnName-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.ResultSetMetaData\")},Integer}",
    "page": "Home",
    "title": "JDBC.getColumnName",
    "category": "method",
    "text": "getColumnName(rsmd::JResultSetMetaData, col::Integer)\n\nReturns the column\'s name based on the JResultSetMetaData object and the column number\n\nArgs\n\nrsmd: The JResultSetMetaData object\ncol: The column number\n\nReturns\n\nThe column name\n\n\n\n\n\n"
},

{
    "location": "#JDBC.getColumnType-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.ResultSetMetaData\")},Integer}",
    "page": "Home",
    "title": "JDBC.getColumnType",
    "category": "method",
    "text": "getColumnType(rsmd::JResultSetMetaData, col::Integer)\n\nReturns the column\'s data type based on the JResultSetMetaData object and the column number\n\nArgs\n\nrsmd: The JResultSetMetaData object\ncol: The column number\n\nReturns\n\nThe column type as an integer\n\n\n\n\n\n"
},

{
    "location": "#JDBC.getDate-Tuple{Union{JavaObject{Symbol(\"java.sql.ResultSet\")}, JavaObject{Symbol(\"java.sql.CallableStatement\")}},AbstractString}",
    "page": "Home",
    "title": "JDBC.getDate",
    "category": "method",
    "text": "getDate(rs::Union{JResultSet, JCallableStatement}, fld::AbstractString)\n\nReturns the Date object based on the result set or a callable statement. The value is extracted based on the column name.\n\nArgs\n\nstmt: The JResultSet or JCallableStatement object\nfld: The column name\n\nReturns\n\nThe Date object.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.getDate-Tuple{Union{JavaObject{Symbol(\"java.sql.ResultSet\")}, JavaObject{Symbol(\"java.sql.CallableStatement\")}},Integer}",
    "page": "Home",
    "title": "JDBC.getDate",
    "category": "method",
    "text": "getDate(rs::Union{JResultSet, JCallableStatement}, fld::Integer)\n\nReturns the Date object based on the result set or a callable statement. The value is extracted based on the column number.\n\nArgs\n\nstmt: The JResultSet or JCallableStatement object\nfld: The column number\n\nReturns\n\nThe Date object.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.getMetaData-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.ResultSet\")}}",
    "page": "Home",
    "title": "JDBC.getMetaData",
    "category": "method",
    "text": "getMetaData(rs::JResultSet)\n\nReturns information about the types and properties of the columns in the ResultSet object\n\nArgs\n\nstmt: The JResultSet object\n\nReturns\n\nThe JResultSetMetaData object.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.getResultSet-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.Statement\")}}",
    "page": "Home",
    "title": "JDBC.getResultSet",
    "category": "method",
    "text": "getResultSet(stmt::JStatement)\n\nReturns the result set based on the previous execution of the query based on a JStatement\n\nArgs\n\nstmt: The JStatement object\n\nReturns\n\nThe JResultSet object.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.getTableMetaData-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.ResultSet\")}}",
    "page": "Home",
    "title": "JDBC.getTableMetaData",
    "category": "method",
    "text": "Get the metadata (column name and type) for each column of the table in the  result set rs.\n\nReturns an array of (column name, column type) tuples.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.getTime-Tuple{Union{JavaObject{Symbol(\"java.sql.ResultSet\")}, JavaObject{Symbol(\"java.sql.CallableStatement\")}},AbstractString}",
    "page": "Home",
    "title": "JDBC.getTime",
    "category": "method",
    "text": "getTime(rs::Union{JResultSet, JCallableStatement}, fld::AbstractString)\n\nReturns the Time object based on the result set or a callable statement. The value is extracted based on the column name.\n\nArgs\n\nstmt: The JResultSet or JCallableStatement object\nfld: The column name\n\nReturns\n\nThe Time object.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.getTime-Tuple{Union{JavaObject{Symbol(\"java.sql.ResultSet\")}, JavaObject{Symbol(\"java.sql.CallableStatement\")}},Integer}",
    "page": "Home",
    "title": "JDBC.getTime",
    "category": "method",
    "text": "getTime(rs::Union{JResultSet, JCallableStatement}, fld::Integer)\n\nReturns the Time object based on the result set or a callable statement. The value is extracted based on the column number.\n\nArgs\n\nstmt: The JResultSet or JCallableStatement object\nfld: The column number\n\nReturns\n\nThe Time object.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.getTimestamp-Tuple{Union{JavaObject{Symbol(\"java.sql.ResultSet\")}, JavaObject{Symbol(\"java.sql.CallableStatement\")}},AbstractString}",
    "page": "Home",
    "title": "JDBC.getTimestamp",
    "category": "method",
    "text": "getTimestamp(rs::Union{JResultSet, JCallableStatement}, fld::AbstractString)\n\nReturns the Timestamp object based on the result set or a callable statement. The value is extracted based on the column name.\n\nArgs\n\nstmt: The JResultSet or JCallableStatement object\nfld: The column name\n\nReturns\n\nThe Timestamp object.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.getTimestamp-Tuple{Union{JavaObject{Symbol(\"java.sql.ResultSet\")}, JavaObject{Symbol(\"java.sql.CallableStatement\")}},Integer}",
    "page": "Home",
    "title": "JDBC.getTimestamp",
    "category": "method",
    "text": "getTimestamp(rs::@Union{JResultSet, JCallableStatement}, fld::Integer)\n\nReturns the Timestamp object based on the result set or a callable statement. The value is extracted based on the column number.\n\nArgs\n\nstmt: The JResultSet or JCallableStatement object\nfld: The column number\n\nReturns\n\nThe Timestamp object.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.isopen-Tuple{JDBC.Connection}",
    "page": "Home",
    "title": "JDBC.isopen",
    "category": "method",
    "text": "Returns a boolean indicating whether connection conn is open.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.prepareCall-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.Connection\")},AbstractString}",
    "page": "Home",
    "title": "JDBC.prepareCall",
    "category": "method",
    "text": "prepareCall(connection::JConnection, query::AbstractString)\n\nPrepares the Callable Statement for the given query\n\nArgs\n\nconnection: The connection object\nquery: The query string\n\nReturns\n\nThe JCallableStatement object\n\n\n\n\n\n"
},

{
    "location": "#JDBC.prepareStatement-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.Connection\")},AbstractString}",
    "page": "Home",
    "title": "JDBC.prepareStatement",
    "category": "method",
    "text": "prepareStatement(connection::JConnection, query::AbstractString)\n\nPrepares the Statement for the given query\n\nArgs\n\nconnection: The connection object\nquery: The query string\n\nReturns\n\nThe JPreparedStatement object\n\n\n\n\n\n"
},

{
    "location": "#JDBC.rollback-Tuple{JDBC.Connection}",
    "page": "Home",
    "title": "JDBC.rollback",
    "category": "method",
    "text": "Roll back to the start of any pending transaction.  Throws a JDBCError if connection is null.\n\nReturns nothing.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.rollback-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.Connection\")}}",
    "page": "Home",
    "title": "JDBC.rollback",
    "category": "method",
    "text": "rollback(connection::JConnection)\n\nRolls back the transactions.\n\nArgs\n\nconnection: The connection object\n\nReturns\n\nNone\n\n\n\n\n\n"
},

{
    "location": "#JDBC.rows-Tuple{JDBC.Cursor}",
    "page": "Home",
    "title": "JDBC.rows",
    "category": "method",
    "text": "Create a row iterator.\n\nThis method returns an instance of an iterator type which returns one row on each iteration. Each row returnes a Tuple{...}.\n\nThrows a JDBCError if execute! was not called on the cursor or connection is null.\n\nReturns a JDBCRowIterator instance.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.setAutoCommit-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.Connection\")},Bool}",
    "page": "Home",
    "title": "JDBC.setAutoCommit",
    "category": "method",
    "text": "setAutoCommit(connection::JConnection, x::Bool)\n\nSet the Auto Commit flag to either true or false. If set to false, commit has to be called explicitly\n\nArgs\n\nconnection: The connection object\n\nReturns\n\nNone\n\n\n\n\n\n"
},

{
    "location": "#JDBC.setFetchSize-Tuple{Union{JavaObject{Symbol(\"java.sql.Statement\")}, JavaObject{Symbol(\"java.sql.PreparedStatement\")}, JavaObject{Symbol(\"java.sql.CallableStatement\")}},Integer}",
    "page": "Home",
    "title": "JDBC.setFetchSize",
    "category": "method",
    "text": "setFetchSize(stmt::Union{JStatement, JPreparedStatement, JCallableStatement }, x::Integer)\n\nSets the fetch size in a JStatement or a JPreparedStatement object or a JCallableStatement object. The number of records that are returned in subsequent query executions are determined by what is set here.\n\nArgs\n\nstmt: The JPreparedStatement object or JCallableStatement object\nx: The number of records to be returned\n\nReturns\n\nNone\n\n\n\n\n\n"
},

{
    "location": "#JDBC.Connection-Tuple{AbstractString}",
    "page": "Home",
    "title": "JDBC.Connection",
    "category": "method",
    "text": "Open a JDBC Connection to the specified host.  The username and password can be optionally passed  as a Dictionary props of the form Dict(\"user\" => \"username\", \"passwd\" => \"password\").   The JDBC connector location can be optionally passed as connectorpath, if it is not  added to the java class path.\n\nReturns a JDBCConnection instance.\n\n\n\n\n\n"
},

{
    "location": "#Base.close-Tuple{JDBC.Connection}",
    "page": "Home",
    "title": "Base.close",
    "category": "method",
    "text": "Closes the JDBCConnection conn.  Throws a JDBCError if connection is null.\n\nReturns nothing.\n\n\n\n\n\n"
},

{
    "location": "#Base.close-Tuple{JDBC.Cursor}",
    "page": "Home",
    "title": "Base.close",
    "category": "method",
    "text": "Close the JDBCCursor csr.  Throws a JDBCError if cursor is not initialized.\n\nReturns nothing.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.absolute!-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.ResultSet\")},Int64}",
    "page": "Home",
    "title": "JDBC.absolute!",
    "category": "method",
    "text": "absolute!(rs::JResultSet, row::Int)\n\nMove the cursor to the specified row.\n\nArgs\n\nrs: The JResultSet object.\nrow: The row to move to.\n\nReturns\n\nA boolean indicating success.\n\n\n\n\n\n"
},

{
    "location": "#JDBC.beforeFirst!-Tuple{JavaCall.JavaObject{Symbol(\"java.sql.ResultSet\")}}",
    "page": "Home",
    "title": "JDBC.beforeFirst!",
    "category": "method",
    "text": "beforeFirst!(rs::JResultSet)\n\nMove the cursor to the front of the JResultSet, before the first row.\n\nArgs\n\nrs: The JResultSet object.\n\nReturns\n\nnothing\n\n\n\n\n\n"
},

{
    "location": "#JDBC.clearParameters-Tuple{Union{JavaObject{Symbol(\"java.sql.PreparedStatement\")}, JavaObject{Symbol(\"java.sql.CallableStatement\")}}}",
    "page": "Home",
    "title": "JDBC.clearParameters",
    "category": "method",
    "text": "clearParameters(stmt::Union{JPreparedStatement, JCallableStatement})\n\nClears the currently held parameters in a JPreparedStatement object or a JCallableStatement object\n\nArgs\n\nstmt: The JPreparedStatement object or JCallableStatement object\n\nReturns\n\nNone\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [JDBC]\nOrder = [:type, :function]"
},

]}
