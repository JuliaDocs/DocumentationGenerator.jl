var documenterSearchIndex = {"docs": [

{
    "location": "#FilePathsBase.Mode",
    "page": "Home",
    "title": "FilePathsBase.Mode",
    "category": "type",
    "text": "The following file contains simple abstractions to make working with posix permissions easier in julia.\n\nFor now we\'re focused on user permissions.\n\nA lot of the low level permissions code below and the corresponding constants have been translated from cpython\'s Lib/stat.py file.\n\nhttps://github.com/python/cpython/blob/master/Lib/stat.py\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.chown-Tuple{AbstractPath,AbstractString,AbstractString}",
    "page": "Home",
    "title": "Base.Filesystem.chown",
    "category": "method",
    "text": "chown(path::AbstractPath, user::AbstractString, group::AbstractString; recursive=false)\n\nChange the user and group of the path.\n\n\n\n\n\n"
},

{
    "location": "#FilePathsBase.Path-Tuple{}",
    "page": "Home",
    "title": "FilePathsBase.Path",
    "category": "method",
    "text": "Path()\nPath(path::AbstractPath)\nPath(path::Tuple)\nPath(path::AbstractString)\n\nResponsible for creating the appropriate platform specific path (e.g., PosixPath and WindowsPath for Unix and Windows systems respectively)\n\n\n\n\n\n"
},

{
    "location": "#FilePathsBase.created-Tuple{AbstractPath}",
    "page": "Home",
    "title": "FilePathsBase.created",
    "category": "method",
    "text": "created(path::AbstractPath) -> DateTime\n\nReturns the creation date for the path.\n\nExample\n\njulia> created(p\"src/FilePathsBase.jl\")\n2017-06-20T04:01:09\n\n\n\n\n\n"
},

{
    "location": "#FilePathsBase.exists-Tuple{AbstractPath}",
    "page": "Home",
    "title": "FilePathsBase.exists",
    "category": "method",
    "text": "exists(path::AbstractPath) -> Bool\n\nReturns whether the path actually exists on the system.\n\n\n\n\n\n"
},

{
    "location": "#FilePathsBase.extension-Tuple{AbstractPath}",
    "page": "Home",
    "title": "FilePathsBase.extension",
    "category": "method",
    "text": "extension(path::AbstractPath) -> AbstractString\n\nExtracts the last extension from a filename if there any, otherwise it returns an empty string.\n\nExample\n\njulia> extension(p\"~/repos/FilePathsBase.jl/src/FilePathsBase.jl\")\n\"jl\"\n\n\n\n\n\n"
},

{
    "location": "#FilePathsBase.extensions-Tuple{AbstractPath}",
    "page": "Home",
    "title": "FilePathsBase.extensions",
    "category": "method",
    "text": "extensions(path::AbstractPath) -> AbstractString\n\nExtracts all extensions from a filename if there any, otherwise it returns an empty string.\n\nExample\n\njulia> extensions(p\"~/repos/FilePathsBase.jl/src/FilePathsBase.jl.bak\")\n2-element Array{SubString{String},1}:\n \"jl\"\n \"bak\"\n\n\n\n\n\n"
},

{
    "location": "#FilePathsBase.filename-Tuple{AbstractPath}",
    "page": "Home",
    "title": "FilePathsBase.filename",
    "category": "method",
    "text": "filename(path::AbstractPath) -> AbstractString\n\nExtracts the basename without any extensions.\n\nExample\n\njulia> filename(p\"~/repos/FilePathsBase.jl/src/FilePathsBase.jl\")\n\"FilePathsBase\"\n\n\n\n\n\n"
},

{
    "location": "#FilePathsBase.hasparent-Tuple{AbstractPath}",
    "page": "Home",
    "title": "FilePathsBase.hasparent",
    "category": "method",
    "text": "hasparent(path::AbstractPath) -> Bool\n\nReturns whether there is a parent directory component to the supplied path.\n\n\n\n\n\n"
},

{
    "location": "#FilePathsBase.isexecutable-Tuple{AbstractPath}",
    "page": "Home",
    "title": "FilePathsBase.isexecutable",
    "category": "method",
    "text": "isexecutable(path::AbstractPath) -> Bool\n\nReturns whether the path is executable for the current user.\n\n\n\n\n\n"
},

{
    "location": "#FilePathsBase.mode-Tuple{AbstractPath}",
    "page": "Home",
    "title": "FilePathsBase.mode",
    "category": "method",
    "text": "mode(path::AbstractPath) -> Mode\n\nReturns the Mode for the specified path.\n\nExample\n\njulia> mode(p\"src/FilePathsBase.jl\")\n-rw-r--r--\n\n\n\n\n\n"
},

{
    "location": "#FilePathsBase.modified-Tuple{AbstractPath}",
    "page": "Home",
    "title": "FilePathsBase.modified",
    "category": "method",
    "text": "modified(path::AbstractPath) -> DateTime\n\nReturns the last modified date for the path.\n\nExample\n\njulia> modified(p\"src/FilePathsBase.jl\")\n2017-06-20T04:01:09\n\n\n\n\n\n"
},

{
    "location": "#FilePathsBase.parents-Union{Tuple{T}, Tuple{T}} where T<:AbstractPath",
    "page": "Home",
    "title": "FilePathsBase.parents",
    "category": "method",
    "text": "parents{T<:AbstractPath}(path::T) -> Array{T}\n\nExample\n\njulia> parents(p\"~/.julia/v0.6/REQUIRE\") 3-element Array{FilePathsBase.PosixPath,1}:  p\"~\"  p\"~/.julia\"  p\"~/.julia/v0.6\"\n\nThrows\n\nErrorException: if path doesn\'t have a parent\n\n\n\n\n\n"
},

{
    "location": "#FilePathsBase.relative-Union{Tuple{T}, Tuple{T}, Tuple{T,T}} where T<:AbstractPath",
    "page": "Home",
    "title": "FilePathsBase.relative",
    "category": "method",
    "text": "relative{T<:AbstractPath}(path::T, start::T=T(\".\"))\n\nCreates a relative path from either the current directory or an arbitrary start directory.\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.chmod-Tuple{AbstractPath,Mode}",
    "page": "Home",
    "title": "Base.Filesystem.chmod",
    "category": "method",
    "text": "chmod(path::AbstractPath, mode::Mode; recursive=false)\nchmod(path::AbstractPath, mode::Integer; recursive=false)\nchmod(path::AbstractPath, user::UIn8=0o0, group::UInt8=0o0, other::UInt8=0o0; recursive=false)\nchmod(path::AbstractPath, symbolic_mode::AbstractString; recursive=false)\n\nProvides various methods for changing the mode of a path.\n\nExamples\n\njulia> touch(p\"newfile\")\nBase.Filesystem.File(false, RawFD(-1))\n\njulia> mode(p\"newfile\")\n-rw-r--r--\n\njulia> chmod(p\"newfile\", 0o755)\n\njulia> mode(p\"newfile\")\n-rwxr-xr-x\n\njulia> chmod(p\"newfile\", \"-x\")\n\njulia> mode(p\"newfile\")\n-rw-r--r--\n\njulia> chmod(p\"newfile\", user=(READ+WRITE+EXEC), group=(READ+EXEC), other=READ)\n\njulia> mode(p\"newfile\")\n-rwxr-xr--\n\njulia> chmod(p\"newfile\", mode(p\"src/FilePathsBase.jl\"))\n\njulia> mode(p\"newfile\")\n-rw-r--r--\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.isblockdev-Tuple{Mode}",
    "page": "Home",
    "title": "Base.Filesystem.isblockdev",
    "category": "method",
    "text": "Return True if mode is from a block special device file.\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.ischardev-Tuple{Mode}",
    "page": "Home",
    "title": "Base.Filesystem.ischardev",
    "category": "method",
    "text": "Return True if mode is from a character special device file.\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.isdir-Tuple{Mode}",
    "page": "Home",
    "title": "Base.Filesystem.isdir",
    "category": "method",
    "text": "Return True if mode is from a directory.\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.isfifo-Tuple{Mode}",
    "page": "Home",
    "title": "Base.Filesystem.isfifo",
    "category": "method",
    "text": "Return True if mode is from a FIFO (named pipe).\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.isfile-Tuple{Mode}",
    "page": "Home",
    "title": "Base.Filesystem.isfile",
    "category": "method",
    "text": "Return True if mode is from a regular file.\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.islink-Tuple{Mode}",
    "page": "Home",
    "title": "Base.Filesystem.islink",
    "category": "method",
    "text": "Return True if mode is from a symbolic link.\n\n\n\n\n\n"
},

{
    "location": "#Base.Filesystem.issocket-Tuple{Mode}",
    "page": "Home",
    "title": "Base.Filesystem.issocket",
    "category": "method",
    "text": "Return True if mode is from a socket.\n\n\n\n\n\n"
},

{
    "location": "#Base.abs-Tuple{AbstractPath}",
    "page": "Home",
    "title": "Base.abs",
    "category": "method",
    "text": "abs(path::AbstractPath) -> AbstractPath\n\nCreates an absolute path by adding the current working directory if necessary.\n\n\n\n\n\n"
},

{
    "location": "#Base.isempty-Tuple{AbstractPath}",
    "page": "Home",
    "title": "Base.isempty",
    "category": "method",
    "text": "isempty(path::AbstractPath) -> Bool\n\nReturns whether or not a path is empty.\n\nNOTE: Empty paths are usually only created by Path(), as p\"\" and Path(\"\") will default to using the current directory (or p\".\").\n\n\n\n\n\n"
},

{
    "location": "#Base.isreadable-Tuple{AbstractPath}",
    "page": "Home",
    "title": "Base.isreadable",
    "category": "method",
    "text": "isreadable(path::AbstractPath) -> Bool\n\nReturns whether the path is readable for the current user.\n\n\n\n\n\n"
},

{
    "location": "#Base.iswritable-Tuple{AbstractPath}",
    "page": "Home",
    "title": "Base.iswritable",
    "category": "method",
    "text": "iswritable(path::AbstractPath) -> Bool\n\nReturns whether the path is writable for the current user.\n\n\n\n\n\n"
},

{
    "location": "#Base.join-Tuple{AbstractPath,Vararg{AbstractString,N} where N}",
    "page": "Home",
    "title": "Base.join",
    "category": "method",
    "text": "join(root::AbstractPath, pieces::Union{AbstractPath, AbstractString}...) -> AbstractPath\n\nJoins path components into a full path.\n\nExample\n\njulia> join(p\"~/.julia/v0.6\", \"REQUIRE\")\np\"~/.julia/v0.6/REQUIRE\"\n\n\n\n\n\n"
},

{
    "location": "#Base.parent-Tuple{AbstractPath}",
    "page": "Home",
    "title": "Base.parent",
    "category": "method",
    "text": "parent{T<:AbstractPath}(path::T) -> T\n\nReturns the parent of the supplied path.\n\nExample\n\njulia> parent(p\"~/.julia/v0.6/REQUIRE\")\np\"~/.julia/v0.6\"\n\nThrows\n\nErrorException: if path doesn\'t have a parent\n\n\n\n\n\n"
},

{
    "location": "#Base.real-Tuple{AbstractPath}",
    "page": "Home",
    "title": "Base.real",
    "category": "method",
    "text": "real(path::AbstractPath) -> AbstractPath\n\nCanonicalizes a path by expanding symlinks and removing \".\" and \"..\" entries.\n\n\n\n\n\n"
},

{
    "location": "#Base.string-Tuple{Mode}",
    "page": "Home",
    "title": "Base.string",
    "category": "method",
    "text": "Convert a file\'s mode to a string of the form \'-rwxrwxrwx\'.\n\n\n\n\n\n"
},

{
    "location": "#FilePathsBase._meta-Tuple{Any}",
    "page": "Home",
    "title": "FilePathsBase._meta",
    "category": "method",
    "text": "Return the portion of the file\'s mode that describes the file type.\n\n\n\n\n\n"
},

{
    "location": "#FilePathsBase._mode-Tuple{Any}",
    "page": "Home",
    "title": "FilePathsBase._mode",
    "category": "method",
    "text": "Return the portion of the file\'s mode that can be set by os.chmod().\n\n\n\n\n\n"
},

{
    "location": "#LinearAlgebra.norm-Union{Tuple{T}, Tuple{T}} where T<:AbstractPath",
    "page": "Home",
    "title": "LinearAlgebra.norm",
    "category": "method",
    "text": "norm(path::AbstractPath) -> AbstractPath\n\nNormalizes a path by removing \".\" and \"..\" entries.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FilePathsBase]\nOrder = [:type, :function]"
},

]}
