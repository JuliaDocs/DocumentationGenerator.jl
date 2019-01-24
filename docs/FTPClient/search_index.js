var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FTPClient.jl-1",
    "page": "Readme",
    "title": "FTPClient.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)A Julia FTP client using LibCURL supporting FTP and FTP over SSL."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Depending on the settings of the FTP server you are connecting to you may need to deal with various security settings.FTP with no Transport Layer Security (FTP). Typically uses port 21/TCP.\n```julia   julia> ftp = FTP(hostname=\"example.com\", username=\"user\", password=\"1234\")   URL:       ftp://user:*****@example.com/   Transfer:  passive mode   Security:  none\njulia> ftp = FTP(\"ftp://user:1234@example.com\")   URL:       ftp://user:*****@example.com/   Transfer:  passive mode   Security:  none   ```\nFTP with implicit security (FTPS). Typically uses port 990/TCP.\n```julia   julia> ftp = FTP(hostname=\"example.com\", username=\"user\", password=\"1234\", ssl=true, implicit=true)   URL:       ftps://user:*****@example.com/   Transfer:  passive mode   Security:  implicit\njulia> ftp = FTP(\"ftps://user:1234@example.com\")   URL:       ftps://user:*****@example.com/   Transfer:  passive mode   Security:  implicit   ```\nFTP with explicit security (FTPES). Typically uses port 21/TCP.\n```julia   julia> ftp = FTP(hostname=\"example.com\", username=\"user\", password=\"1234\", ssl=true, implicit=false)   URL:       ftpes://user:*****@example.com/   Transfer:  passive mode   Security:  explicit\njulia> ftp = FTP(\"ftpes://user:1234@example.com\")   URL:       ftpes://user:*****@example.com/   Transfer:  passive mode   Security:  explicit   ```Once you\'ve created your FTP instance you can use many of the filesystem functions that Julia provides. A quick example showing some of the functions available:julia> cd(ftp, \"Documents/School\")\n\njulia> pwd(ftp)\n\"/Documents/School\"\n\njulia> readdir(ftp)\n1-element Array{String,1}:\n \"Assignment1.txt\"\n \"Assignment2.txt\"\n\njulia> io = download(ftp, \"Assignment1.txt\");  # Download as IO stream\n\njulia> download(ftp, \"Assignment2.txt\", \"./A2/Assignment2.txt\");  # Save file to a specified path\n\njulia> upload(ftp, \"Assignment3.txt\", \".\")  # Upload local file \"Assignment3.txt\" to FTP server home directory\n\njulia> open(\"Assignment3.txt\") do fp\n           upload(ftp, fp, \"Assignment3-copy.txt\")  # Upload IO content as file \"Assignment3-copy.txt\" on FTP server\n       end\n\njulia> mv(ftp, \"Assignment3-copy.txt\", \"Assignment3-dup.txt\")\n\njulia> rm(ftp, \"Assignment3-dup.txt\")\n\njulia> mkdir(ftp, \"tmp\")\n\njulia> rmdir(ftp, \"tmp\")\n\njulia> close(ftp)If you want to upload a file but retry on failures you can do the following:julia> ftp_retry = retry(delays=fill(5.0, 3)) do\n           upload(ftp, \"Assignment3.txt\", \".\")\n       end\n\njulia> ftp_retry()"
},

{
    "location": "#FAQ-1",
    "page": "Readme",
    "title": "FAQ",
    "category": "section",
    "text": ""
},

{
    "location": "#Downloaded-files-are-unusable-1",
    "page": "Readme",
    "title": "Downloaded files are unusable",
    "category": "section",
    "text": "Try downloading file in both binary and ASCII mode to see if one of the files is usable."
},

{
    "location": "#Linux-and-Travis-CI-1",
    "page": "Readme",
    "title": "Linux and Travis CI",
    "category": "section",
    "text": "Travis CI currently [does not reliably support FTP connections on sudo-enabled Linux]https://blog.travis-ci.com/2018-07-23-the-tale-of-ftp-at-travis-ci). This will usually manifest itself as a Connection Timeout error. Disable sudo for a workaround."
},

{
    "location": "autodocs/#FTPClient.ConnContext",
    "page": "Docstrings",
    "title": "FTPClient.ConnContext",
    "category": "type",
    "text": "ConnContext\n\nKeeps track of a persistent FTP connection.\n\nArguments\n\nurl::AbstractString: url of the FTP server.\noptions::RequestOptions: the options used for the connection.\n\nKeywords\n\nverbose::Union{IOStream,Bool}=false: an IOStream to capture LibCURL\'s output or a Bool, if true output is written to STDERR.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.FTP-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "FTPClient.FTP",
    "category": "method",
    "text": "FTP(url; kwargs...)\n\nConnect to an FTP server using the information specified in the URI.\n\nKeywords\n\nverify_peer::Bool=true: verify the authenticity of the peer\'s certificate.\nactive_mode::Bool=false: use active mode to establish data connection.\n\nExample\n\njulia> FTP(\"ftp://user:password@ftp.example.com\");  # FTP connection with no security\n\njulia> FTP(\"ftpes://user:password@ftp.example.com\");  # Explicit security (FTPES)\n\njulia> FTP(\"ftps://user:password@ftp.example.com\");  # Implicit security (FTPS)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.FTP-Tuple{}",
    "page": "Docstrings",
    "title": "FTPClient.FTP",
    "category": "method",
    "text": "FTP(; kwargs...) -> FTP\n\nCreate an FTP object.\n\nKeywords\n\nhostname::AbstractString=\"\": the hostname or address of the FTP server.\nusername::AbstractString=\"\": the username used to access the FTP server.\npassword::AbstractString=\"\": the password used to access the FTP server.\nssl::Bool=false: use a secure FTP connection.\nimplicit::Bool=false: use implicit security (FTPS).\nverify_peer::Bool=true: verify authenticity of peer\'s certificate.\nactive_mode::Bool=false: use active mode to establish data connection.\nverbose::Union{Bool,IOStream}=false: an IOStream to capture LibCurl\'s output or a   Bool, if true output is written to STDERR.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.RequestOptions-Tuple{}",
    "page": "Docstrings",
    "title": "FTPClient.RequestOptions",
    "category": "method",
    "text": "RequestOptions(; kwargs...)\n\nThe options used to connect to an FTP server.\n\nKeywords\n\nhostname::AbstractString=\"localhost\": the hostname or address of the FTP server.\nusername::AbstractString=\"\": the username used to access the FTP server.\npassword::AbstractString=\"\": the password used to access the FTP server.\nimplicit::Bool=false: use an implicit FTPS configuration.\nssl::Bool=false: use a secure connection. Typically specified for explicit FTPS.\nverify_peer::Bool=true: verify authenticity of peer\'s certificate.\nactive_mode::Bool=false: use active mode to establish data connection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.Response",
    "page": "Docstrings",
    "title": "FTPClient.Response",
    "category": "type",
    "text": "Response\n\nThe response returned from a connection to an FTP server.\n\nParameters\n\nbody::IO: contains the result of a command from ftpcommand.   or the content of a downloaded file from ftpget (if no destination file was defined).\nheaders::Array{AbstractString}: the header responses from the server.\ncode::UInt: the last header response code from the server.\ntotal_time::Float64: the time the connection took.\nbytes_recd::Int: the amount of bytes transmitted from the server (the file size in the   case of ftp_get).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.close-Tuple{FTP}",
    "page": "Docstrings",
    "title": "Base.close",
    "category": "method",
    "text": "close(ftp::FTP)\n\nClose FTP connection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.download",
    "page": "Docstrings",
    "title": "Base.download",
    "category": "function",
    "text": "download(\n    ftp::FTP,\n    file_name::AbstractString,\n    save_path::AbstractString=\"\";\n    mode::FTP_MODE=binary_mode,\n)\n\nDownload the file \"filename\" from FTP server and return IOStream. If \"savepath\" is not specified, contents are written to and returned as an IOBuffer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.ftp-Tuple{Function}",
    "page": "Docstrings",
    "title": "FTPClient.ftp",
    "category": "method",
    "text": "ftp(\n    code::Function;\n    hostname::AbstractString=\"\", implicit::Bool=false, ssl::Bool=false,\n    verify_peer::Bool=true, active_mode::Bool=false, username::AbstractString=\"\",\n    password::AbstractString=\"\", verbose::Union{Bool,IOStream}=false,\n)\n\nExecute Function \"code\" on FTP server.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.ftp_cleanup-Tuple{}",
    "page": "Docstrings",
    "title": "FTPClient.ftp_cleanup",
    "category": "method",
    "text": "ftp_cleanup()\n\nCleanup global libcurl.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.ftp_close_connection-Tuple{ConnContext}",
    "page": "Docstrings",
    "title": "FTPClient.ftp_close_connection",
    "category": "method",
    "text": "ftp_close_connection(ctxt::ConnContext)\n\nClose the connection to the FTP server.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.ftp_command-Tuple{ConnContext,AbstractString}",
    "page": "Docstrings",
    "title": "FTPClient.ftp_command",
    "category": "method",
    "text": "ftp_command(\n    ctxt::ConnContext,\n    cmd::AbstractString\n)\n\nPass FTP command with persistent connection. Returns a Response.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.ftp_command-Tuple{RequestOptions,AbstractString}",
    "page": "Docstrings",
    "title": "FTPClient.ftp_command",
    "category": "method",
    "text": "ftp_command(\n    options::RequestOptions,\n    cmd::AbstractString;\n    verbose::Union{Bool,IOStream}=false,\n)\n\nPass FTP command with non-persistent connection. Returns a Response.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.ftp_connect-Tuple{RequestOptions}",
    "page": "Docstrings",
    "title": "FTPClient.ftp_connect",
    "category": "method",
    "text": "ftp_connect(options::RequestOptions; verbose::Union{Bool,IOStream}=false)\n\nEstablish connection to FTP server. Returns a ConnContext and a Response.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.ftp_get",
    "page": "Docstrings",
    "title": "FTPClient.ftp_get",
    "category": "function",
    "text": "ftp_get(\n    ctxt::ConnContext,\n    file_name::AbstractString,\n    save_path::AbstractString=\"\";\n    mode::FTP_MODE=binary_mode,\n)\n\nDownload a file with a persistent connection. Returns a Response.\n\nArguments\n\nctxt::ConnContext: encompases the connection options defined via ftp_connect. See   RequestOptions for details.\nfile_name::AbstractString: the path to the file on the server.\nsave_path::AbstractString=\"\": if not specified the file is written to the Response   body.\nmode::FTP_MODE=binary_mode: defines whether the file is transferred in binary or   ASCII format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.ftp_get",
    "page": "Docstrings",
    "title": "FTPClient.ftp_get",
    "category": "function",
    "text": "ftp_get(\n    options::RequestOptions,\n    file_name::AbstractString,\n    save_path::AbstractString=\"\";\n    mode::FTP_MODE=binary_mode,\n    verbose::Union{Bool,IOStream}=false,\n)\n\nDownload a file with a non-persistent connection. Returns a Response.\n\nArguments\n\noptions::RequestOptions: the connection options. See RequestOptions for details.\nfile_name::AbstractString: the path to the file on the server.\nsave_path::AbstractString=\"\": if not specified the file is written to the Response   body.\nmode::FTP_MODE=binary_mode: defines whether the file is transferred in binary or ASCII   format.\nverbose::Union{Bool,IOStream}=false: an IOStream to capture LibCurl\'s output or a   Bool, if true output is written to STDERR.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.ftp_init-Tuple{}",
    "page": "Docstrings",
    "title": "FTPClient.ftp_init",
    "category": "method",
    "text": "ftp_init()\n\nInitialise global libcurl\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.ftp_put-Tuple{ConnContext,AbstractString,IO}",
    "page": "Docstrings",
    "title": "FTPClient.ftp_put",
    "category": "method",
    "text": "ftp_put(\n    ctxt::ConnContext,\n    file_name::AbstractString,\n    file::IO;\n    mode::FTP_MODE=binary_mode,\n)\n\nUpload file with persistent connection. Returns a Response.\n\nArguments\n\nctxt::ConnContext: encompases the connection options defined via ftp_connect. See   RequestOptions for details.\nfile_name::AbstractString: the path to the file on the server.\nfile::IO: what is being written to the server.\nmode::FTP_MODE=binary_mode: defines whether the file is transferred in binary or   ASCII format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.ftp_put-Tuple{RequestOptions,AbstractString,IO}",
    "page": "Docstrings",
    "title": "FTPClient.ftp_put",
    "category": "method",
    "text": "ftp_put(\n    options::RequestOptions,\n    file_name::AbstractString,\n    file::IO;\n    mode::FTP_MODE=binary_mode,\n    verbose::Union{Bool,IOStream}=false,\n)\n\nUpload file with non-persistent connection. Returns a Response.\n\nArguments\n\noptions::RequestOptions: the connection options. See RequestOptions for details.\nfile_name::AbstractString: the path to the file on the server.\nfile::IO: what is being written to the server.\nmode::FTP_MODE=binary_mode: defines whether the file is transferred in binary or   ASCII format.\nverbose::Union{Bool,IOStream}=false: an IOStream to capture LibCurl\'s output or a   Bool, if true output is written to STDERR.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.rmdir-Tuple{FTP,AbstractString}",
    "page": "Docstrings",
    "title": "FTPClient.rmdir",
    "category": "method",
    "text": "rmdir(ftp::FTP, dir_name::AbstractString)\n\nDelete directory \"dir_name\" from FTP server.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.upload-Tuple{FTP,AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "FTPClient.upload",
    "category": "method",
    "text": "upload(\n    ftp::FTP,\n    local_path::AbstractString,\n    remote_path::AbstractString;\n    ftp_options=ftp.ctxt,\n    mode::FTP_MODE=binary_mode,\n    verbose=nothing,\n) -> Response\n\nUploads the file specified in \"localpath\" to the file or directory specifies in \"remotepath\".\n\nIf \"remotepath\" is a path to a file, then the file will be uploaded to the FTP using the provided path. If \"remotepath\" is a path to a directory (which means it ends in \"/\", \".\", or \"..\"), then the file will be uploaded to the specified directory but with the \"local_path\" basename as the file name.\n\nArguments\n\nftp::FTP: The FTP to deliver to. See FTPClient.FTP for details.\nlocal_path::AbstractString: The file path to the file we want to deliver.\nremote_path::AbstractString: The file/dir path that we want to deliver to.\n\nKeywords\n\nftp_options=ftp.ctxt: FTP Options\nmode::FTP_MODE=binary_mode: Set the ftp mode.\nverbose=nothing: Set the verbosity\n\nReturns\n\nFTPResponse: Returns the ftp response object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FTPClient.upload-Tuple{FTP,IO,AbstractString}",
    "page": "Docstrings",
    "title": "FTPClient.upload",
    "category": "method",
    "text": "upload(\n    ftp::FTP,\n    local_path_io::IO,\n    remote_path::AbstractString;\n    ftp_options=ftp.ctxt,\n    mode::FTP_MODE=binary_mode,\n    verbose=nothing\n\n) -> Response\n\nUpload IO object \"localpathio\" to the FTP server and save as \"remote_path\".\n\nArguments\n\nftp::FTP: The FTP to deliver to. See FTPClient.FTP for details.\nlocal_path_io::IO: The IO object that we want to deliver.\nremote_path::AbstractString: The path that we want to deliver to.\n\nKeywords\n\nftp_options=ftp.ctxt: FTP Options\nmode::FTP_MODE=binary_mode: Set the ftp mode.\nverbose=nothing: Set the verbosity\n\nReturns\n\nFTPResponse: Returns the ftp response object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.cd-Tuple{FTP,AbstractString}",
    "page": "Docstrings",
    "title": "Base.Filesystem.cd",
    "category": "method",
    "text": "cd(ftp::FTP, dir::AbstractString)\n\nSet the current working directory of the FTP server to \"dir\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.mkdir-Tuple{FTP,AbstractString}",
    "page": "Docstrings",
    "title": "Base.Filesystem.mkdir",
    "category": "method",
    "text": "mkdir(ftp::FTP, dir::AbstractString)\n\nMake directory \"dir\" on FTP server.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.mv-Tuple{FTP,AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "Base.Filesystem.mv",
    "category": "method",
    "text": "mv(\n    ftp::FTP,\n    file_name::AbstractString,\n    new_name::AbstractString;\n)\n\nMove (rename) file \"filename\" to \"newname\" on FTP server.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.pwd-Tuple{FTP}",
    "page": "Docstrings",
    "title": "Base.Filesystem.pwd",
    "category": "method",
    "text": "pwd(ftp::FTP)\n\nGet the current working directory of the FTP server\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.readdir-Tuple{FTP}",
    "page": "Docstrings",
    "title": "Base.Filesystem.readdir",
    "category": "method",
    "text": "readdir(ftp::FTP)\n\nReturn the contents of the current working directory of the FTP server.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.rm-Tuple{FTP,AbstractString}",
    "page": "Docstrings",
    "title": "Base.Filesystem.rm",
    "category": "method",
    "text": "rm(ftp::FTP, file_name::AbstractString)\n\nDelete file \"file_name\" from FTP server.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FTPClient]\nOrder = [:type, :function]"
},

]}
