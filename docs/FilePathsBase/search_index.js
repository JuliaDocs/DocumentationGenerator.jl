var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FilePathsBase.jl-1",
    "page": "Readme",
    "title": "FilePathsBase.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)FilePathsBase.jl provides a type based approach to working with filesystem paths in julia."
},

{
    "location": "#Intallation:-1",
    "page": "Readme",
    "title": "Intallation:",
    "category": "section",
    "text": "FilePathsBase.jl is registered, so you can to use Pkg.add to install it.julia> Pkg.add(\"FilePaths\")"
},

{
    "location": "#Usage:-1",
    "page": "Readme",
    "title": "Usage:",
    "category": "section",
    "text": "julia> using FilePathsBaseThe first important difference about working with paths in FilePathsBase.jl is that a path is an immutable list (Tuple) of strings, rather than simple a string.Path creation:julia> Path(\"~/repos/FilePathsBase.jl/\")\nPaths.PosixPath((\"~\",\"repos\",\"FilePathsBase.jl\",\"\"))orjulia> p\"~/repos/FilePathsBase.jl/\"\nPaths.PosixPath((\"~\",\"repos\",\"FilePathsBase.jl\",\"\"))Human readable file status info:julia> stat(p\"README.md\")\nStatus(\n  device = 16777220,\n  inode = 48428965,\n  mode = -rw-r--r--,\n  nlink = 1,\n  uid = 501,\n  gid = 20,\n  rdev = 0,\n  size = 1880 (1.8K),\n  blksize = 4096 (4.0K),\n  blocks = 8,\n  mtime = 2016-02-16T00:49:27,\n  ctime = 2016-02-16T00:49:27,\n)Working with permissions:julia> m = mode(p\"README.md\")\n-rw-r--r--\n\njulia> m - readable(:ALL)\n--w-------\n\njulia> m + executable(:ALL)\n-rwxr-xr-x\n\njulia> chmod(p\"README.md\", \"+x\")\n\njulia> mode(p\"README.md\")\n-rwxr-xr-x\n\njulia> chmod(p\"README.md\", m)\n\njulia> m = mode(p\"README.md\")\n-rw-r--r--\n\njulia> chmod(p\"README.md\", user=(READ+WRITE+EXEC), group=(READ+WRITE), other=READ)\n\njulia> mode(p\"README.md\")\n-rwxrw-r--\nReading and writing directly to file paths:julia> write(p\"testfile\", \"foobar\")\n6\n\njulia> read(p\"testfile\")\n\"foobar\"All the standard methods for working with paths in base julia exist in the FilePathsBase.jl. The following describes the rough mapping of method names. Use ? at the REPL to get the documentation and arguments as they may be different than the base implementations.Base FilePathsBase.jl\npwd() cwd()\nhomedir() home()\ncd() cd()\njoinpath() joinpath()\nbasename() basename()\nsplitext(basename())[1] filename\nsplitext(basename())[2] extension\nN/A extensions\nispath exists\nrealpath real\nnormpath norm\nabspath abs\nrelpath relative\nstat stat\nlstat lstat\nfilemode mode\nmtime modified\nctime created\nisdir isdir\nisfile isfile\nislink islink\nissocket issocket\nisfifo isfifo\nischardev ischardev\nisblockdev isblockdev\nisexecutable (deprecated) isexecutable\niswritable (deprecated) iswritable\nisreadable (deprecated) isreadable\nismount ismount\nisabspath isabs\nsplitdrive()[1] drive\nN/A root\nexpanduser expanduser\nmkdir mkdir\nmkpath N/A (use mkdir)\nsymlink symlink\ncp copy\nmv move\nrm remove\ntouch touch\ntempname tmpname\ntempdir tmpdir\nmktemp mktmp\nmktempdir mktmpdir\nchmod chmod (recursive unix-only)\nchown (unix only) chown (unix only)\nN/A read\nN/A write\n@DIR @PATH\n@FILE @FILEPATH"
},

{
    "location": "#TODO:-1",
    "page": "Readme",
    "title": "TODO:",
    "category": "section",
    "text": "cross platform chmod and chown"
},

{
    "location": "autodocs/#FilePathsBase.Mode",
    "page": "Docstrings",
    "title": "FilePathsBase.Mode",
    "category": "type",
    "text": "The following file contains simple abstractions to make working with posix permissions easier in julia.\n\nFor now we\'re focused on user permissions.\n\nA lot of the low level permissions code below and the corresponding constants have been translated from cpython\'s Lib/stat.py file.\n\nhttps://github.com/python/cpython/blob/master/Lib/stat.py\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.chown-Tuple{AbstractPath,AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "Base.Filesystem.chown",
    "category": "method",
    "text": "chown(path::AbstractPath, user::AbstractString, group::AbstractString; recursive=false)\n\nChange the user and group of the path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.Path-Tuple{}",
    "page": "Docstrings",
    "title": "FilePathsBase.Path",
    "category": "method",
    "text": "Path()\nPath(path::AbstractPath)\nPath(path::Tuple)\nPath(path::AbstractString)\n\nResponsible for creating the appropriate platform specific path (e.g., PosixPath and WindowsPath for Unix and Windows systems respectively)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.created-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "FilePathsBase.created",
    "category": "method",
    "text": "created(path::AbstractPath) -> DateTime\n\nReturns the creation date for the path.\n\nExample\n\njulia> created(p\"src/FilePathsBase.jl\")\n2017-06-20T04:01:09\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.exists-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "FilePathsBase.exists",
    "category": "method",
    "text": "exists(path::AbstractPath) -> Bool\n\nReturns whether the path actually exists on the system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.extension-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "FilePathsBase.extension",
    "category": "method",
    "text": "extension(path::AbstractPath) -> AbstractString\n\nExtracts the last extension from a filename if there any, otherwise it returns an empty string.\n\nExample\n\njulia> extension(p\"~/repos/FilePathsBase.jl/src/FilePathsBase.jl\")\n\"jl\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.extensions-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "FilePathsBase.extensions",
    "category": "method",
    "text": "extensions(path::AbstractPath) -> AbstractString\n\nExtracts all extensions from a filename if there any, otherwise it returns an empty string.\n\nExample\n\njulia> extensions(p\"~/repos/FilePathsBase.jl/src/FilePathsBase.jl.bak\")\n2-element Array{SubString{String},1}:\n \"jl\"\n \"bak\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.filename-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "FilePathsBase.filename",
    "category": "method",
    "text": "filename(path::AbstractPath) -> AbstractString\n\nExtracts the basename without any extensions.\n\nExample\n\njulia> filename(p\"~/repos/FilePathsBase.jl/src/FilePathsBase.jl\")\n\"FilePathsBase\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.hasparent-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "FilePathsBase.hasparent",
    "category": "method",
    "text": "hasparent(path::AbstractPath) -> Bool\n\nReturns whether there is a parent directory component to the supplied path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.isexecutable-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "FilePathsBase.isexecutable",
    "category": "method",
    "text": "isexecutable(path::AbstractPath) -> Bool\n\nReturns whether the path is executable for the current user.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.mode-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "FilePathsBase.mode",
    "category": "method",
    "text": "mode(path::AbstractPath) -> Mode\n\nReturns the Mode for the specified path.\n\nExample\n\njulia> mode(p\"src/FilePathsBase.jl\")\n-rw-r--r--\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.modified-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "FilePathsBase.modified",
    "category": "method",
    "text": "modified(path::AbstractPath) -> DateTime\n\nReturns the last modified date for the path.\n\nExample\n\njulia> modified(p\"src/FilePathsBase.jl\")\n2017-06-20T04:01:09\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.parents-Union{Tuple{T}, Tuple{T}} where T<:AbstractPath",
    "page": "Docstrings",
    "title": "FilePathsBase.parents",
    "category": "method",
    "text": "parents{T<:AbstractPath}(path::T) -> Array{T}\n\nExample\n\njulia> parents(p\"~/.julia/v0.6/REQUIRE\") 3-element Array{FilePathsBase.PosixPath,1}:  p\"~\"  p\"~/.julia\"  p\"~/.julia/v0.6\"\n\nThrows\n\nErrorException: if path doesn\'t have a parent\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase.relative-Union{Tuple{T}, Tuple{T}, Tuple{T,T}} where T<:AbstractPath",
    "page": "Docstrings",
    "title": "FilePathsBase.relative",
    "category": "method",
    "text": "relative{T<:AbstractPath}(path::T, start::T=T(\".\"))\n\nCreates a relative path from either the current directory or an arbitrary start directory.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.chmod-Tuple{AbstractPath,Mode}",
    "page": "Docstrings",
    "title": "Base.Filesystem.chmod",
    "category": "method",
    "text": "chmod(path::AbstractPath, mode::Mode; recursive=false)\nchmod(path::AbstractPath, mode::Integer; recursive=false)\nchmod(path::AbstractPath, user::UIn8=0o0, group::UInt8=0o0, other::UInt8=0o0; recursive=false)\nchmod(path::AbstractPath, symbolic_mode::AbstractString; recursive=false)\n\nProvides various methods for changing the mode of a path.\n\nExamples\n\njulia> touch(p\"newfile\")\nBase.Filesystem.File(false, RawFD(-1))\n\njulia> mode(p\"newfile\")\n-rw-r--r--\n\njulia> chmod(p\"newfile\", 0o755)\n\njulia> mode(p\"newfile\")\n-rwxr-xr-x\n\njulia> chmod(p\"newfile\", \"-x\")\n\njulia> mode(p\"newfile\")\n-rw-r--r--\n\njulia> chmod(p\"newfile\", user=(READ+WRITE+EXEC), group=(READ+EXEC), other=READ)\n\njulia> mode(p\"newfile\")\n-rwxr-xr--\n\njulia> chmod(p\"newfile\", mode(p\"src/FilePathsBase.jl\"))\n\njulia> mode(p\"newfile\")\n-rw-r--r--\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.isblockdev-Tuple{Mode}",
    "page": "Docstrings",
    "title": "Base.Filesystem.isblockdev",
    "category": "method",
    "text": "Return True if mode is from a block special device file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.ischardev-Tuple{Mode}",
    "page": "Docstrings",
    "title": "Base.Filesystem.ischardev",
    "category": "method",
    "text": "Return True if mode is from a character special device file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.isdir-Tuple{Mode}",
    "page": "Docstrings",
    "title": "Base.Filesystem.isdir",
    "category": "method",
    "text": "Return True if mode is from a directory.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.isfifo-Tuple{Mode}",
    "page": "Docstrings",
    "title": "Base.Filesystem.isfifo",
    "category": "method",
    "text": "Return True if mode is from a FIFO (named pipe).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.isfile-Tuple{Mode}",
    "page": "Docstrings",
    "title": "Base.Filesystem.isfile",
    "category": "method",
    "text": "Return True if mode is from a regular file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.islink-Tuple{Mode}",
    "page": "Docstrings",
    "title": "Base.Filesystem.islink",
    "category": "method",
    "text": "Return True if mode is from a symbolic link.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.issocket-Tuple{Mode}",
    "page": "Docstrings",
    "title": "Base.Filesystem.issocket",
    "category": "method",
    "text": "Return True if mode is from a socket.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.abs-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "Base.abs",
    "category": "method",
    "text": "abs(path::AbstractPath) -> AbstractPath\n\nCreates an absolute path by adding the current working directory if necessary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.isempty-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "Base.isempty",
    "category": "method",
    "text": "isempty(path::AbstractPath) -> Bool\n\nReturns whether or not a path is empty.\n\nNOTE: Empty paths are usually only created by Path(), as p\"\" and Path(\"\") will default to using the current directory (or p\".\").\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.isreadable-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "Base.isreadable",
    "category": "method",
    "text": "isreadable(path::AbstractPath) -> Bool\n\nReturns whether the path is readable for the current user.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.iswritable-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "Base.iswritable",
    "category": "method",
    "text": "iswritable(path::AbstractPath) -> Bool\n\nReturns whether the path is writable for the current user.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.join-Tuple{AbstractPath,Vararg{AbstractString,N} where N}",
    "page": "Docstrings",
    "title": "Base.join",
    "category": "method",
    "text": "join(root::AbstractPath, pieces::Union{AbstractPath, AbstractString}...) -> AbstractPath\n\nJoins path components into a full path.\n\nExample\n\njulia> join(p\"~/.julia/v0.6\", \"REQUIRE\")\np\"~/.julia/v0.6/REQUIRE\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.parent-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "Base.parent",
    "category": "method",
    "text": "parent{T<:AbstractPath}(path::T) -> T\n\nReturns the parent of the supplied path.\n\nExample\n\njulia> parent(p\"~/.julia/v0.6/REQUIRE\")\np\"~/.julia/v0.6\"\n\nThrows\n\nErrorException: if path doesn\'t have a parent\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.real-Tuple{AbstractPath}",
    "page": "Docstrings",
    "title": "Base.real",
    "category": "method",
    "text": "real(path::AbstractPath) -> AbstractPath\n\nCanonicalizes a path by expanding symlinks and removing \".\" and \"..\" entries.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.string-Tuple{Mode}",
    "page": "Docstrings",
    "title": "Base.string",
    "category": "method",
    "text": "Convert a file\'s mode to a string of the form \'-rwxrwxrwx\'.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase._meta-Tuple{Any}",
    "page": "Docstrings",
    "title": "FilePathsBase._meta",
    "category": "method",
    "text": "Return the portion of the file\'s mode that describes the file type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FilePathsBase._mode-Tuple{Any}",
    "page": "Docstrings",
    "title": "FilePathsBase._mode",
    "category": "method",
    "text": "Return the portion of the file\'s mode that can be set by os.chmod().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.norm-Union{Tuple{T}, Tuple{T}} where T<:AbstractPath",
    "page": "Docstrings",
    "title": "LinearAlgebra.norm",
    "category": "method",
    "text": "norm(path::AbstractPath) -> AbstractPath\n\nNormalizes a path by removing \".\" and \"..\" entries.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FilePathsBase]\nOrder = [:type, :function]"
},

]}
