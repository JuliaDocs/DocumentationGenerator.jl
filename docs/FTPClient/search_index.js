var documenterSearchIndex = {"docs": [

{
    "location": "#FTPClient.ConnContext",
    "page": "Home",
    "title": "FTPClient.ConnContext",
    "category": "type",
    "text": "ConnContext\n\nKeeps track of a persistent FTP connection.\n\nArguments\n\nurl::AbstractString: url of the FTP server.\noptions::RequestOptions: the options used for the connection.\n\nKeywords\n\nverbose::Union{IOStream,Bool}=false: an IOStream to capture LibCURL\'s output or a Bool, if true output is written to STDERR.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.FTP-Tuple{AbstractString}",
    "page": "Home",
    "title": "FTPClient.FTP",
    "category": "method",
    "text": "FTP(url; kwargs...)\n\nConnect to an FTP server using the information specified in the URI.\n\nKeywords\n\nverify_peer::Bool=true: verify the authenticity of the peer\'s certificate.\nactive_mode::Bool=false: use active mode to establish data connection.\n\nExample\n\njulia> FTP(\"ftp://user:password@ftp.example.com\");  # FTP connection with no security\n\njulia> FTP(\"ftpes://user:password@ftp.example.com\");  # Explicit security (FTPES)\n\njulia> FTP(\"ftps://user:password@ftp.example.com\");  # Implicit security (FTPS)\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.FTP-Tuple{}",
    "page": "Home",
    "title": "FTPClient.FTP",
    "category": "method",
    "text": "FTP(; kwargs...) -> FTP\n\nCreate an FTP object.\n\nKeywords\n\nhostname::AbstractString=\"\": the hostname or address of the FTP server.\nusername::AbstractString=\"\": the username used to access the FTP server.\npassword::AbstractString=\"\": the password used to access the FTP server.\nssl::Bool=false: use a secure FTP connection.\nimplicit::Bool=false: use implicit security (FTPS).\nverify_peer::Bool=true: verify authenticity of peer\'s certificate.\nactive_mode::Bool=false: use active mode to establish data connection.\nverbose::Union{Bool,IOStream}=false: an IOStream to capture LibCurl\'s output or a   Bool, if true output is written to STDERR.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.RequestOptions-Tuple{}",
    "page": "Home",
    "title": "FTPClient.RequestOptions",
    "category": "method",
    "text": "RequestOptions(; kwargs...)\n\nThe options used to connect to an FTP server.\n\nKeywords\n\nhostname::AbstractString=\"localhost\": the hostname or address of the FTP server.\nusername::AbstractString=\"\": the username used to access the FTP server.\npassword::AbstractString=\"\": the password used to access the FTP server.\nimplicit::Bool=false: use an implicit FTPS configuration.\nssl::Bool=false: use a secure connection. Typically specified for explicit FTPS.\nverify_peer::Bool=true: verify authenticity of peer\'s certificate.\nactive_mode::Bool=false: use active mode to establish data connection.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.Response",
    "page": "Home",
    "title": "FTPClient.Response",
    "category": "type",
    "text": "Response\n\nThe response returned from a connection to an FTP server.\n\nParameters\n\nbody::IO: contains the result of a command from ftpcommand.   or the content of a downloaded file from ftpget (if no destination file was defined).\nheaders::Array{AbstractString}: the header responses from the server.\ncode::UInt: the last header response code from the server.\ntotal_time::Float64: the time the connection took.\nbytes_recd::Int: the amount of bytes transmitted from the server (the file size in the   case of ftp_get).\n\n\n\n\n\n"
},

{
    "location": "#Base.close-Tuple{FTP}",
    "page": "Home",
    "title": "Base.close",
    "category": "method",
    "text": "close(ftp::FTP)\n\nClose FTP connection.\n\n\n\n\n\n"
},

{
    "location": "#Base.download",
    "page": "Home",
    "title": "Base.download",
    "category": "function",
    "text": "download(\n    ftp::FTP,\n    file_name::AbstractString,\n    save_path::AbstractString=\"\";\n    mode::FTP_MODE=binary_mode,\n)\n\nDownload the file \"filename\" from FTP server and return IOStream. If \"savepath\" is not specified, contents are written to and returned as an IOBuffer.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.ftp-Tuple{Function}",
    "page": "Home",
    "title": "FTPClient.ftp",
    "category": "method",
    "text": "ftp(\n    code::Function;\n    hostname::AbstractString=\"\", implicit::Bool=false, ssl::Bool=false,\n    verify_peer::Bool=true, active_mode::Bool=false, username::AbstractString=\"\",\n    password::AbstractString=\"\", verbose::Union{Bool,IOStream}=false,\n)\n\nExecute Function \"code\" on FTP server.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.ftp_cleanup-Tuple{}",
    "page": "Home",
    "title": "FTPClient.ftp_cleanup",
    "category": "method",
    "text": "ftp_cleanup()\n\nCleanup global libcurl.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.ftp_close_connection-Tuple{ConnContext}",
    "page": "Home",
    "title": "FTPClient.ftp_close_connection",
    "category": "method",
    "text": "ftp_close_connection(ctxt::ConnContext)\n\nClose the connection to the FTP server.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.ftp_command-Tuple{ConnContext,AbstractString}",
    "page": "Home",
    "title": "FTPClient.ftp_command",
    "category": "method",
    "text": "ftp_command(\n    ctxt::ConnContext,\n    cmd::AbstractString\n)\n\nPass FTP command with persistent connection. Returns a Response.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.ftp_command-Tuple{RequestOptions,AbstractString}",
    "page": "Home",
    "title": "FTPClient.ftp_command",
    "category": "method",
    "text": "ftp_command(\n    options::RequestOptions,\n    cmd::AbstractString;\n    verbose::Union{Bool,IOStream}=false,\n)\n\nPass FTP command with non-persistent connection. Returns a Response.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.ftp_connect-Tuple{RequestOptions}",
    "page": "Home",
    "title": "FTPClient.ftp_connect",
    "category": "method",
    "text": "ftp_connect(options::RequestOptions; verbose::Union{Bool,IOStream}=false)\n\nEstablish connection to FTP server. Returns a ConnContext and a Response.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.ftp_get",
    "page": "Home",
    "title": "FTPClient.ftp_get",
    "category": "function",
    "text": "ftp_get(\n    ctxt::ConnContext,\n    file_name::AbstractString,\n    save_path::AbstractString=\"\";\n    mode::FTP_MODE=binary_mode,\n)\n\nDownload a file with a persistent connection. Returns a Response.\n\nArguments\n\nctxt::ConnContext: encompases the connection options defined via ftp_connect. See   RequestOptions for details.\nfile_name::AbstractString: the path to the file on the server.\nsave_path::AbstractString=\"\": if not specified the file is written to the Response   body.\nmode::FTP_MODE=binary_mode: defines whether the file is transferred in binary or   ASCII format.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.ftp_get",
    "page": "Home",
    "title": "FTPClient.ftp_get",
    "category": "function",
    "text": "ftp_get(\n    options::RequestOptions,\n    file_name::AbstractString,\n    save_path::AbstractString=\"\";\n    mode::FTP_MODE=binary_mode,\n    verbose::Union{Bool,IOStream}=false,\n)\n\nDownload a file with a non-persistent connection. Returns a Response.\n\nArguments\n\noptions::RequestOptions: the connection options. See RequestOptions for details.\nfile_name::AbstractString: the path to the file on the server.\nsave_path::AbstractString=\"\": if not specified the file is written to the Response   body.\nmode::FTP_MODE=binary_mode: defines whether the file is transferred in binary or ASCII   format.\nverbose::Union{Bool,IOStream}=false: an IOStream to capture LibCurl\'s output or a   Bool, if true output is written to STDERR.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.ftp_init-Tuple{}",
    "page": "Home",
    "title": "FTPClient.ftp_init",
    "category": "method",
    "text": "ftp_init()\n\nInitialise global libcurl\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.ftp_put-Tuple{ConnContext,AbstractString,IO}",
    "page": "Home",
    "title": "FTPClient.ftp_put",
    "category": "method",
    "text": "ftp_put(\n    ctxt::ConnContext,\n    file_name::AbstractString,\n    file::IO;\n    mode::FTP_MODE=binary_mode,\n)\n\nUpload file with persistent connection. Returns a Response.\n\nArguments\n\nctxt::ConnContext: encompases the connection options defined via ftp_connect. See   RequestOptions for details.\nfile_name::AbstractString: the path to the file on the server.\nfile::IO: what is being written to the server.\nmode::FTP_MODE=binary_mode: defines whether the file is transferred in binary or   ASCII format.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.ftp_put-Tuple{RequestOptions,AbstractString,IO}",
    "page": "Home",
    "title": "FTPClient.ftp_put",
    "category": "method",
    "text": "ftp_put(\n    options::RequestOptions,\n    file_name::AbstractString,\n    file::IO;\n    mode::FTP_MODE=binary_mode,\n    verbose::Union{Bool,IOStream}=false,\n)\n\nUpload file with non-persistent connection. Returns a Response.\n\nArguments\n\noptions::RequestOptions: the connection options. See RequestOptions for details.\nfile_name::AbstractString: the path to the file on the server.\nfile::IO: what is being written to the server.\nmode::FTP_MODE=binary_mode: defines whether the file is transferred in binary or   ASCII format.\nverbose::Union{Bool,IOStream}=false: an IOStream to capture LibCurl\'s output or a   Bool, if true output is written to STDERR.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.rmdir-Tuple{FTP,AbstractString}",
    "page": "Home",
    "title": "FTPClient.rmdir",
    "category": "method",
    "text": "rmdir(ftp::FTP, dir_name::AbstractString)\n\nDelete directory \"dir_name\" from FTP server.\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.upload-Tuple{FTP,AbstractString,AbstractString}",
    "page": "Home",
    "title": "FTPClient.upload",
    "category": "method",
    "text": "upload(\n    ftp::FTP,\n    local_path::AbstractString,\n    remote_path::AbstractString;\n    ftp_options=ftp.ctxt,\n    mode::FTP_MODE=binary_mode,\n    verbose=nothing,\n) -> Response\n\nUploads the file specified in \"localpath\" to the file or directory specifies in \"remotepath\".\n\nIf \"remotepath\" is a path to a file, then the file will be uploaded to the FTP using the provided path. If \"remotepath\" is a path to a directory (which means it ends in \"/\", \".\", or \"..\"), then the file will be uploaded to the specified directory but with the \"local_path\" basename as the file name.\n\nArguments\n\nftp::FTP: The FTP to deliver to. See FTPClient.FTP for details.\nlocal_path::AbstractString: The file path to the file we want to deliver.\nremote_path::AbstractString: The file/dir path that we want to deliver to.\n\nKeywords\n\nftp_options=ftp.ctxt: FTP Options\nmode::FTP_MODE=binary_mode: Set the ftp mode.\nverbose=nothing: Set the verbosity\n\nReturns\n\nFTPResponse: Returns the ftp response object\n\n\n\n\n\n"
},

{
    "location": "#FTPClient.upload-Tuple{FTP,IO,AbstractString}",
    "page": "Home",
    "title": "FTPClient.upload",
    "category": "method",
    "text": "upload(\n    ftp::FTP,\n    local_path_io::IO,\n    remote_path::AbstractString;\n    ftp_options=ftp.ctxt,\n    mode::FTP_MODE=binary_mode,\n    verbose=nothing\n\n) -> Response\n\nUpload IO object \"localpathio\" to the FTP server and save as \"remote_path\".\n\nArguments\n\nftp::FTP: The FTP to deliver to. See FTPClient.FTP for details.\nlocal_path_io::IO: The IO object that we want to deliver.\nremote_path::AbstractString: The path that we want to deliver to.\n\nKeywords\n\nftp_options=ftp.ctxt: FTP Options\nmode::FTP_MODE=binary_mode: Set the ftp mode.\nverbose=nothing: Set the verbosity\n\nReturns\n\nFTPResponse: Returns the ftp response object\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.cd-Tuple{FTP,AbstractString}",
    "page": "Home",
    "title": "Base.Filesystem.cd",
    "category": "method",
    "text": "cd(ftp::FTP, dir::AbstractString)\n\nSet the current working directory of the FTP server to \"dir\".\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.mkdir-Tuple{FTP,AbstractString}",
    "page": "Home",
    "title": "Base.Filesystem.mkdir",
    "category": "method",
    "text": "mkdir(ftp::FTP, dir::AbstractString)\n\nMake directory \"dir\" on FTP server.\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.mv-Tuple{FTP,AbstractString,AbstractString}",
    "page": "Home",
    "title": "Base.Filesystem.mv",
    "category": "method",
    "text": "mv(\n    ftp::FTP,\n    file_name::AbstractString,\n    new_name::AbstractString;\n)\n\nMove (rename) file \"filename\" to \"newname\" on FTP server.\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.pwd-Tuple{FTP}",
    "page": "Home",
    "title": "Base.Filesystem.pwd",
    "category": "method",
    "text": "pwd(ftp::FTP)\n\nGet the current working directory of the FTP server\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.readdir-Tuple{FTP}",
    "page": "Home",
    "title": "Base.Filesystem.readdir",
    "category": "method",
    "text": "readdir(ftp::FTP)\n\nReturn the contents of the current working directory of the FTP server.\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.rm-Tuple{FTP,AbstractString}",
    "page": "Home",
    "title": "Base.Filesystem.rm",
    "category": "method",
    "text": "rm(ftp::FTP, file_name::AbstractString)\n\nDelete file \"file_name\" from FTP server.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FTPClient]\nOrder = [:type, :function]"
},

]}
