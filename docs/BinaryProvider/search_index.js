var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BinaryProvider-1",
    "page": "Readme",
    "title": "BinaryProvider",
    "category": "section",
    "text": "(Image: Travis Status)(Image: Appveyor Status)(Image: codecov.io)"
},

{
    "location": "#Basic-concepts-1",
    "page": "Readme",
    "title": "Basic concepts",
    "category": "section",
    "text": "Packages are installed to a Prefix; a folder that acts similar to the /usr/local directory on Unix-like systems, containing a bin folder for binaries, a lib folder for libraries, etc...  Prefix objects can have tarballs install()\'ed within them, uninstall()\'ed from them, etc...BinaryProvider has the concept of a Product, the result of a package installation.  LibraryProduct and ExecutableProduct are two example Product object types that can be used to keep track of the binary objects installed by an install() invocation.  Products can check to see if they are already satisfied (e.g. whether a file exists, or is executable, or is dlopen()\'able), allowing for very quick and easy build.jl construction.BinaryProvider also contains a platform abstraction layer for common operations like downloading and unpacking tarballs.  The primary method you should be using to interact with these operations is through the install() method, however if you need more control, there are more fundamental methods such as download_verify(), or unpack(), or even the wittingly-named download_verify_unpack().The method documentation within the BinaryProvider module should be considered the primary source of documentation for this package, usage examples are provided in the form of the LibFoo.jl mock package within this repository, as well as other packages that use this package for binary installation such as "
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To download and install a package into a Prefix, the basic syntax is:prefix = Prefix(\"./deps\")\ninstall(url, tarball_hash; prefix=prefix)It is recommended to inspect examples for a fuller treatment of installation, the LibFoo.jl package within this repository contains a deps/build.jl file that may be instructive.To actually generate the tarballs that are installed by this package, check out the BinaryBuilder.jl package."
},

{
    "location": "#Miscellanea-1",
    "page": "Readme",
    "title": "Miscellanea",
    "category": "section",
    "text": "This package contains a run(::Cmd) wrapper class named OutputCollector that captures the output of shell commands, and in particular, captures the stdout and stderr streams separately, colorizing, buffering and timestamping appropriately to provide seamless printing of shell output in a consistent and intuitive way.  Critically, it also allows for saving of the captured streams to log files, a very useful feature for BinaryBuilder.jl, which makes extensive use of this class, however all commands run by BinaryProvider.jl also use this same mechanism to provide coloring of stderr.\nWhen providing ExecutableProducts to a client package, BinaryProvider will automatically append Julia\'s private library directory to LD_LIBRARY_PATH on Linux, and DYLD_LIBRARY_PATH on macOS.  This is due to the fact that the compiled binaries may be dependent on libraries such as libgfortran, which ship with Julia and must be found by the system linker or else the binaries will not function.  If you wish to use the binaries outside of Julia, you may need to override those environment variables in a similar fashion; see the generated deps.jl file for the check_deps() function where the precise overriding values can be found."
},

{
    "location": "autodocs/#BinaryProvider.ExecutableProduct",
    "page": "Docstrings",
    "title": "BinaryProvider.ExecutableProduct",
    "category": "type",
    "text": "An ExecutableProduct is a Product that represents an executable file.\n\nOn all platforms, an ExecutableProduct checks for existence of the file.  On non-Windows platforms, it will check for the executable bit being set.  On Windows platforms, it will check that the file ends with \".exe\", (adding it on automatically, if it is not already present).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.FileProduct",
    "page": "Docstrings",
    "title": "BinaryProvider.FileProduct",
    "category": "type",
    "text": "A FileProduct represents a file that simply must exist to be satisfied.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.LibraryProduct",
    "page": "Docstrings",
    "title": "BinaryProvider.LibraryProduct",
    "category": "type",
    "text": "A LibraryProduct is a special kind of Product that not only needs to exist, but needs to be dlopen()\'able.  You must know which directory the library will be installed to, and its name, e.g. to build a LibraryProduct that refers to \"/lib/libnettle.so\", the \"directory\" would be \"/lib\", and the \"libname\" would be \"libnettle\".  Note that a LibraryProduct can support multiple libnames, as some software projects change the libname based on the build configuration.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.OutputCollector",
    "page": "Docstrings",
    "title": "BinaryProvider.OutputCollector",
    "category": "type",
    "text": "OutputCollector\n\nA run() wrapper class that captures subprocess stdout and stderr streams independently, resynthesizing and colorizing the streams appropriately.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.OutputCollector-Tuple{Base.AbstractCmd}",
    "page": "Docstrings",
    "title": "BinaryProvider.OutputCollector",
    "category": "method",
    "text": "OutputCollector(cmd::AbstractCmd; verbose::Bool = false)\n\nRun cmd, and collect the output such that stdout and stderr are captured independently, but with the time of each line recorded such that they can be stored/analyzed independently, but replayed synchronously.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.Product",
    "page": "Docstrings",
    "title": "BinaryProvider.Product",
    "category": "type",
    "text": "A Product is an expected result after building or installation of a package.\n\nExamples of Products include LibraryProduct, ExecutableProduct and FileProduct.  All Product types must define the following minimum set of functionality:\n\nlocate(::Product): given a Product, locate it within the wrapped Prefix returning its location as a string\nsatisfied(::Product): given a Product, determine whether it has been successfully satisfied (e.g. it is locateable and it passes all callbacks)\nvariable_name(::Product): return the variable name assigned to a Product\nrepr(::Product): Return a representation of this Product, useful for auto-generating source code that constructs Products, if that\'s your thing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.merge-Tuple{OutputCollector}",
    "page": "Docstrings",
    "title": "Base.merge",
    "category": "method",
    "text": "merge(collector::OutputCollector; colored::Bool = false)\n\nMerge the stdout and stderr streams of the OutputCollector on a per-line basis, returning a single string containing all collected lines, interleaved by capture time.  If colored is set to true, embeds terminal color codes to print stderr in red.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.arch-Tuple{Platform}",
    "page": "Docstrings",
    "title": "BinaryProvider.arch",
    "category": "method",
    "text": "arch(p::Platform)\n\nGet the architecture for the given Platform object as a Symbol.\n\nExamples\n\njulia> arch(Linux(:aarch64))\n:aarch64\n\njulia> arch(MacOS())\n:x86_64\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.bindir-Tuple{Prefix}",
    "page": "Docstrings",
    "title": "BinaryProvider.bindir",
    "category": "method",
    "text": "bindir(prefix::Prefix)\n\nReturns the binary directory for the given prefix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.call_abi-Tuple{Platform}",
    "page": "Docstrings",
    "title": "BinaryProvider.call_abi",
    "category": "method",
    "text": "call_abi(p::Platform)\n\nGet the calling ABI for the given Platform object as a Symbol.\n\nExamples\n\njulia> call_abi(Linux(:x86_64))\n:blank_abi\n\njulia> call_abi(FreeBSD(:armv7l))\n:eabihf\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.choose_download",
    "page": "Docstrings",
    "title": "BinaryProvider.choose_download",
    "category": "function",
    "text": "choose_download(download_info::Dict, platform::Platform = platform_key_abi())\n\nGiven a download_info dictionary mapping platforms to some value, choose the value whose key best matches platform, returning nothing if no matches can be found.\n\nPlatform attributes such as architecture, libc, calling ABI, etc... must all match exactly, however attributes such as compiler ABI can have wildcards within them such as :gcc_any which matches any version of GCC.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.collect_stderr-Tuple{OutputCollector}",
    "page": "Docstrings",
    "title": "BinaryProvider.collect_stderr",
    "category": "method",
    "text": "collect_stderr(collector::OutputCollector)\n\nReturns all stderr lines collected by this collector so far.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.collect_stdout-Tuple{OutputCollector}",
    "page": "Docstrings",
    "title": "BinaryProvider.collect_stdout",
    "category": "method",
    "text": "collect_stdout(collector::OutputCollector)\n\nReturns all stdout lines collected by this collector so far.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.download_verify-Tuple{AbstractString,AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.download_verify",
    "category": "method",
    "text": "download_verify(url::AbstractString, hash::AbstractString,\n                dest::AbstractString; verbose::Bool = false,\n                force::Bool = false, quiet_download::Bool = false)\n\nDownload file located at url, verify it matches the given hash, and throw an error if anything goes wrong.  If dest already exists, just verify it. If force is set to true, overwrite the given file if it exists but does not match the given hash.\n\nThis method returns true if the file was downloaded successfully, false if an existing file was removed due to the use of force, and throws an error if force is not set and the already-existent file fails verification, or if force is set, verification fails, and then verification fails again after redownloading the file.\n\nIf quiet_download is set to false (the default), this method will print to stdout when downloading a new file.  If it is set to true (and verbose is set to false) the downloading process will be completely silent.  If verbose is set to true, messages about integrity verification will be printed in addition to messages regarding downloading.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.download_verify_unpack-Tuple{AbstractString,AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.download_verify_unpack",
    "category": "method",
    "text": "download_verify_unpack(url::AbstractString, hash::AbstractString,\n                       dest::AbstractString; tarball_path = nothing,\n                       verbose::Bool = false, ignore_existence::Bool = false,\n                       force::Bool = false)\n\nHelper method to download tarball located at url, verify it matches the given hash, then unpack it into folder dest.  In general, the method install() should be used to download and install tarballs into a Prefix; this method should only be used if the extra functionality of install() is undesired.\n\nIf tarball_path is specified, the given url will be downloaded to tarball_path, and it will not be removed after downloading and verification is complete.  If it is not specified, the tarball will be downloaded to a temporary location, and removed after verification is complete.\n\nIf force is specified, a verification failure will cause tarball_path to be deleted (if it exists), the dest folder to be removed (if it exists) and the tarball to be redownloaded and reverified.  If the verification check is failed a second time, an exception is raised.  If force is not specified, a verification failure will result in an immediate raised exception.\n\nIf ignore_existence is set, the tarball is unpacked even if the destination directory already exists.\n\nReturns true if a tarball was actually unpacked, false if nothing was changed in the destination prefix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.extract_name_version_platform_key-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.extract_name_version_platform_key",
    "category": "method",
    "text": "extract_name_version_platform_key(path::AbstractString)\n\nGiven the path to a tarball, return the name, platform key and version of that tarball. If any of those things cannot be found, throw an error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.extract_platform_key-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.extract_platform_key",
    "category": "method",
    "text": "extract_platform_key(path::AbstractString)\n\nGiven the path to a tarball, return the platform key of that tarball. If none can be found, prints a warning and return the current platform suffix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.gen_download_cmd",
    "page": "Docstrings",
    "title": "BinaryProvider.gen_download_cmd",
    "category": "function",
    "text": "gen_download_cmd(url::AbstractString, out_path::AbstractString)\n\nReturn a Cmd that will download resource located at url and store it at the location given by out_path.\n\nThis method is initialized by probe_platform_engines(), which should be automatically called upon first import of BinaryProvider.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.gen_list_tarball_cmd",
    "page": "Docstrings",
    "title": "BinaryProvider.gen_list_tarball_cmd",
    "category": "function",
    "text": "gen_list_tarball_cmd(tarball_path::AbstractString)\n\nReturn a Cmd that will list the files contained within the tarball located at tarball_path.  The list will not include directories contained within the tarball.\n\nThis method is initialized by probe_platform_engines(), which should be automatically called upon first import of BinaryProvider.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.gen_package_cmd",
    "page": "Docstrings",
    "title": "BinaryProvider.gen_package_cmd",
    "category": "function",
    "text": "gen_package_cmd(in_path::AbstractString, tarball_path::AbstractString)\n\nReturn a Cmd that will package up the given in_path directory into a tarball located at tarball_path.\n\nThis method is initialized by probe_platform_engines(), which should be automatically called upon first import of BinaryProvider.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.gen_sh_cmd",
    "page": "Docstrings",
    "title": "BinaryProvider.gen_sh_cmd",
    "category": "function",
    "text": "gen_sh_cmd(cmd::Cmd)\n\nRuns a command using sh.  On Unices, this will default to the first sh found on the PATH, however on Windows if that is not found it will fall back to the sh provided by the busybox.exe shipped with Julia.\n\nThis method is initialized by probe_platform_engines(), which should be automatically called upon first import of BinaryProvider.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.gen_unpack_cmd",
    "page": "Docstrings",
    "title": "BinaryProvider.gen_unpack_cmd",
    "category": "function",
    "text": "gen_unpack_cmd(tarball_path::AbstractString, out_path::AbstractString)\n\nReturn a Cmd that will unpack the given tarball_path into the given out_path.  If out_path is not already a directory, it will be created.\n\nThis method is initialized by probe_platform_engines(), which should be automatically called upon first import of BinaryProvider.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.includedir-Tuple{Prefix}",
    "page": "Docstrings",
    "title": "BinaryProvider.includedir",
    "category": "method",
    "text": "includedir(prefix::Prefix)\n\nReturns the include directory for the given prefix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.install-Tuple{AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.install",
    "category": "method",
    "text": "install(tarball_url::AbstractString,\n        hash::AbstractString;\n        prefix::Prefix = global_prefix,\n        force::Bool = false,\n        ignore_platform::Bool = false,\n        verbose::Bool = false)\n\nGiven a prefix, a tarball_url and a hash, download that tarball into the prefix, verify its integrity with the hash, and install it into the prefix. Also save a manifest of the files into the prefix for uninstallation later.\n\nThis will not overwrite any files within prefix unless force=true is set. If force=true is set, installation will overwrite files as needed, and it will also delete any files previously installed for tarball_url as listed in a pre-existing manifest (if any).\n\nBy default, this will not install a tarball that does not match the platform of the current host system, this can be overridden by setting ignore_platform.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.isinstalled-Tuple{AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.isinstalled",
    "category": "method",
    "text": "isinstalled(tarball_url::AbstractString,\n            hash::AbstractString;\n            prefix::Prefix = global_prefix)\n\nGiven a prefix, a tarball_url and a hash, check whether the tarball with that hash has been installed into prefix.\n\nIn particular, it checks for the tarball, matching hash file, and manifest installed by install, and checks that the files listed in the manifest are installed and are not older than the tarball.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.libc-Tuple{Platform}",
    "page": "Docstrings",
    "title": "BinaryProvider.libc",
    "category": "method",
    "text": "libc(p::Platform)\n\nGet the libc for the given Platform object as a Symbol.\n\nExamples\n\njulia> libc(Linux(:aarch64))\n:glibc\n\njulia> libc(FreeBSD(:x86_64))\n:default_libc\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.libdir",
    "page": "Docstrings",
    "title": "BinaryProvider.libdir",
    "category": "function",
    "text": "libdir(prefix::Prefix, platform = platform_key_abi())\n\nReturns the library directory for the given prefix (note that this differs between unix systems and windows systems).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.list_tarball_files-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.list_tarball_files",
    "category": "method",
    "text": "list_tarball_files(path::AbstractString; verbose::Bool = false)\n\nGiven a .tar.gz filepath, list the compressed contents.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.locate-Tuple{ExecutableProduct}",
    "page": "Docstrings",
    "title": "BinaryProvider.locate",
    "category": "method",
    "text": "locate(fp::ExecutableProduct; platform::Platform = platform_key_abi(),                                verbose::Bool = false, isolate::Bool = false)\n\nIf the given executable file exists and is executable, return its path.\n\nOn all platforms, an ExecutableProduct checks for existence of the file.  On non-Windows platforms, it will check for the executable bit being set.  On Windows platforms, it will check that the file ends with \".exe\", (adding it on automatically, if it is not already present).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.locate-Tuple{FileProduct}",
    "page": "Docstrings",
    "title": "BinaryProvider.locate",
    "category": "method",
    "text": "locate(fp::FileProduct; platform::Platform = platformkeyabi(),                         verbose::Bool = false, isolate::Bool = false)\n\nIf the given file exists, return its path.  The platform argument is ignored here, but included for uniformity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.locate-Tuple{LibraryProduct}",
    "page": "Docstrings",
    "title": "BinaryProvider.locate",
    "category": "method",
    "text": "locate(lp::LibraryProduct; verbose::Bool = false,         platform::Platform = platformkeyabi())\n\nIf the given library exists (under any reasonable name) and is dlopen()able, (assuming it was built for the current platform) return its location.  Note that the dlopen() test is only run if the current platform matches the given platform keyword argument, as cross-compiled libraries cannot be dlopen()ed on foreign platforms.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.logdir-Tuple{Prefix}",
    "page": "Docstrings",
    "title": "BinaryProvider.logdir",
    "category": "method",
    "text": "logdir(prefix::Prefix)\n\nReturns the logs directory for the given prefix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.manifest_for_file-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.manifest_for_file",
    "category": "method",
    "text": "manifest_for_file(path::AbstractString; prefix::Prefix = global_prefix)\n\nReturns the manifest file containing the installation receipt for the given path, throws an error if it cannot find a matching manifest.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.manifest_from_url-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.manifest_from_url",
    "category": "method",
    "text": "manifest_from_url(url::AbstractString; prefix::Prefix = global_prefix())\n\nReturns the file path of the manifest file for the tarball located at url.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.package-Tuple{AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.package",
    "category": "method",
    "text": "package(src_dir::AbstractString, tarball_path::AbstractString;\n        verbose::Bool = false)\n\nCompress src_dir into a tarball located at tarball_path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.package-Tuple{Prefix,AbstractString,VersionNumber}",
    "page": "Docstrings",
    "title": "BinaryProvider.package",
    "category": "method",
    "text": "package(prefix::Prefix, output_base::AbstractString,\n        version::VersionNumber;\n        platform::Platform = platform_key_abi(),\n        verbose::Bool = false, force::Bool = false)\n\nBuild a tarball of the prefix, storing the tarball at output_base, appending a version number, a platform-dependent suffix and a file extension. If no platform is given, defaults to current platform. Runs an audit() on the prefix, to ensure that libraries can be dlopen()\'ed, that all dependencies are located within the prefix, etc... See the audit() documentation for a full list of the audit steps.  Returns the full path to and hash of the generated tarball.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.parse_7z_list-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.parse_7z_list",
    "category": "method",
    "text": "parse_7z_list(output::AbstractString)\n\nGiven the output of 7z l, parse out the listed filenames.  This funciton used by  list_tarball_files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.parse_tar_list-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.parse_tar_list",
    "category": "method",
    "text": "parse_tar_list(output::AbstractString)\n\nGiven the output of tar -t, parse out the listed filenames.  This funciton used by list_tarball_files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.parse_tarball_listing",
    "page": "Docstrings",
    "title": "BinaryProvider.parse_tarball_listing",
    "category": "function",
    "text": "parse_tarball_listing(output::AbstractString)\n\nParses the result of gen_list_tarball_cmd() into something useful.\n\nThis method is initialized by probe_platform_engines(), which should be automatically called upon first import of BinaryProvider.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.platform_dlext-Tuple{Linux}",
    "page": "Docstrings",
    "title": "BinaryProvider.platform_dlext",
    "category": "method",
    "text": "platform_dlext(platform::Platform = platform_key_abi())\n\nReturn the dynamic library extension for the given platform, defaulting to the currently running platform.  E.g. returns \"so\" for a Linux-based platform, \"dll\" for a Windows-based platform, etc...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.platform_key_abi-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.platform_key_abi",
    "category": "method",
    "text": "platform_key_abi(machine::AbstractString)\n\nReturns the platform key for the current platform, or any other though the the use of the machine parameter.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.satisfied-Tuple{Product}",
    "page": "Docstrings",
    "title": "BinaryProvider.satisfied",
    "category": "method",
    "text": "satisfied(p::Product; platform::Platform = platform_key_abi(),\n          verbose::Bool = false, isolate::Bool = false)\n\nGiven a Product, return true if that Product is satisfied, e.g. whether a file exists that matches all criteria setup for that Product.  If isolate is set to true, will isolate all checks from the main Julia process in the event that dlopen()\'ing a library might cause issues.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.tail-Tuple{OutputCollector}",
    "page": "Docstrings",
    "title": "BinaryProvider.tail",
    "category": "method",
    "text": "tail(collector::OutputCollector; len::Int = 100, colored::Bool = false)\n\nWrite out the last len lines, optionally writing colored lines.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.tee-Tuple{OutputCollector}",
    "page": "Docstrings",
    "title": "BinaryProvider.tee",
    "category": "method",
    "text": "tee(c::OutputCollector; colored::Bool = false, stream::IO = stdout)\n\nSpawn a background task to incrementally output lines from collector to the standard output, optionally colored.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.temp_prefix-Tuple{Function}",
    "page": "Docstrings",
    "title": "BinaryProvider.temp_prefix",
    "category": "method",
    "text": "temp_prefix(func::Function)\n\nCreate a temporary prefix, passing the prefix into the user-defined function so that build/packaging operations can occur within the temporary prefix, which is then cleaned up after all operations are finished.  If the path provided exists already, it will be deleted.\n\nUsage example:\n\nout_path = abspath(\"./libfoo\")\ntemp_prefix() do p\n    # <insert build steps here>\n\n    # tarball up the built package\n    tarball_path, tarball_hash = package(p, out_path)\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.triplet-Tuple{Platform}",
    "page": "Docstrings",
    "title": "BinaryProvider.triplet",
    "category": "method",
    "text": "triplet(platform)\n\nGet the target triplet for the given Platform object as a String.\n\nExamples\n\njulia> triplet(MacOS())\n\"x86_64-apple-darwin14\"\n\njulia> triplet(Windows(:i686))\n\"i686-w64-mingw32\"\n\njulia> triplet(Linux(:armv7l, :default_libc, :default_abi, CompilerABI(:gcc4))\n\"arm-linux-gnueabihf-gcc4\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.uninstall-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.uninstall",
    "category": "method",
    "text": "uninstall(manifest::AbstractString; verbose::Bool = false)\n\nUninstall a package from a prefix by providing the manifest_path that was generated during install().  To find the manifest_file for a particular installed file, use manifest_for_file(file_path; prefix=prefix).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.unpack-Tuple{AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.unpack",
    "category": "method",
    "text": "unpack(tarball_path::AbstractString, dest::AbstractString;\n       verbose::Bool = false)\n\nUnpack tarball located at file tarball_path into directory dest.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.valid_dl_path-Tuple{AbstractString,Platform}",
    "page": "Docstrings",
    "title": "BinaryProvider.valid_dl_path",
    "category": "method",
    "text": "valid_dl_path(path::AbstractString, platform::Platform)\n\nReturn true if the given path ends in a valid dynamic library filename. E.g. returns true for a path like \"usr/lib/libfoo.so.3.5\", but returns false for a path like \"libbar.so.f.a\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.variable_name-Tuple{Product}",
    "page": "Docstrings",
    "title": "BinaryProvider.variable_name",
    "category": "method",
    "text": "variable_name(p::Product)\n\nReturn the variable name associated with this Product as a string\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.verify-Tuple{AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.verify",
    "category": "method",
    "text": "verify(path::AbstractString, hash::AbstractString;\n       verbose::Bool = false, report_cache_status::Bool = false)\n\nGiven a file path and a hash, calculate the SHA256 of the file and compare it to hash.  If an error occurs, verify() will throw an error.  This method caches verification results in a \"$(path).sha256\" file to accelerate re- verification of files that have been previously verified.  If no \".sha256\" file exists, a full verification will be done and the file will be created, with the calculated hash being stored within the \".sha256\" file..  If a \".sha256\" file does exist, its contents are checked to ensure that the hash contained within matches the given hash parameter, and its modification time shows that the file located at path has not been modified since the last verification.\n\nIf report_cache_status is set to true, then the return value will be a Symbol giving a granular status report on the state of the hash cache, in addition to the true/false signifying whether verification completed successfully.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.wordsize-Tuple{Platform}",
    "page": "Docstrings",
    "title": "BinaryProvider.wordsize",
    "category": "method",
    "text": "wordsize(platform)\n\nGet the word size for the given Platform object.\n\nExamples\n\njulia> wordsize(Linux(:arm7vl))\n32\n\njulia> wordsize(MacOS())\n64\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.write_deps_file-Union{Tuple{P}, Tuple{AbstractString,Array{P,1}}} where P<:Product",
    "page": "Docstrings",
    "title": "BinaryProvider.write_deps_file",
    "category": "method",
    "text": "write_deps_file(depsjl_path::AbstractString, products::Vector{Product};\n                verbose::Bool = false)\n\nGenerate a deps.jl file that contains the variables referred to by the products within products.  As an example, running the following code:\n\nfooifier = ExecutableProduct(..., :foo_exe)\nlibbar = LibraryProduct(..., :libbar)\nwrite_deps_file(joinpath(@__DIR__, \"deps.jl\"), [fooifier, libbar])\n\nWill generate a deps.jl file that contains definitions for the two variables foo_exe and libbar.  If any Product object cannot be satisfied (e.g. LibraryProduct objects must be dlopen()-able, FileProduct objects must exist on the filesystem, etc...) this method will error out.  Ensure that you have used install() to install the binaries you wish to write a deps.jl file for.\n\nThe result of this method is a deps.jl file containing variables named as defined within the Product objects passed in to it, holding the full path to the installed binaries.  Given the example above, it would contain code similar to:\n\nglobal const foo_exe = \"<pkg path>/deps/usr/bin/fooifier\"\nglobal const libbar = \"<pkg path>/deps/usr/lib/libbar.so\"\n\nThis deps.jl file is intended to be include()\'ed from within the top-level source of your package.  Note that all files are checked for consistency on package load time, and if an error is discovered, package loading will fail, asking the user to re-run Pkg.build(\"package_name\").\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.LineStream-Tuple{Pipe,Condition}",
    "page": "Docstrings",
    "title": "BinaryProvider.LineStream",
    "category": "method",
    "text": "LineStream(pipe::Pipe)\n\nGiven a Pipe that has been initialized by spawn(), create an async Task to read in lines as they come in and annotate the time the line was captured for later replay/merging with other simultaneously captured streams.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.wait-Tuple{OutputCollector}",
    "page": "Docstrings",
    "title": "Base.wait",
    "category": "method",
    "text": "wait(collector::OutputCollector)\n\nWait for the command and all line streams within an OutputCollector to finish their respective tasks and be ready for full merging.  Return the success of the underlying process.  Prints out the last 10 lines of the process if it does not complete successfully unless the OutputCollector was created as verbose.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.withenv-Tuple{Function,Array{Prefix,1}}",
    "page": "Docstrings",
    "title": "Base.withenv",
    "category": "method",
    "text": "withenv(f::Function, prefixes::Vector{Prefix}; julia_libdir::Bool = true)\n\nWrapper function designed to help executables find dynamic libraries and child binaries by wrapping PATH and (DY)LD_(FALLBACK_)LIBRARY_PATH.  If julia_libdir is true, then the private library directory of this Julia distribution will be added on to the end of the LDLIBRARYPATH settings.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.alive-Tuple{BinaryProvider.LineStream}",
    "page": "Docstrings",
    "title": "BinaryProvider.alive",
    "category": "method",
    "text": "alive(s::LineStream)\n\nReturns trueif the task owned by thisLineStreamis still processing output from an underlyingPipe`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.compiler_abi-Tuple{Platform}",
    "page": "Docstrings",
    "title": "BinaryProvider.compiler_abi",
    "category": "method",
    "text": "compiler_abi(p::Platform)\n\nGet the compiler ABI object for the given Platform\n\nExamples\n\njulia> compiler_abi(Linux(:x86_64))\nCompilerABI(:gcc_any, :cxx_any)\n\njulia> compiler_abi(Linux(:x86_64; compiler_abi=CompilerABI(:gcc7)))\nCompilerABI(:gcc7, :cxx_any)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.detect_cxx11_string_abi-Tuple{}",
    "page": "Docstrings",
    "title": "BinaryProvider.detect_cxx11_string_abi",
    "category": "method",
    "text": "detect_cxx11_string_abi()\n\nIntrospects the currently running Julia process to see what version of the C++11 string ABI it was compiled with.  (In reality, it checks for symbols within LLVM, but that is close enough for our purposes, as you can\'t mix linkages between Julia and LLVM if they are not compiled in the same way).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.detect_libgfortran_abi",
    "page": "Docstrings",
    "title": "BinaryProvider.detect_libgfortran_abi",
    "category": "function",
    "text": "detect_libgfortran_abi(libgfortran_name::AbstractString)\n\nExamines the given libgfortran SONAME to see what version of GCC corresponds to the given libgfortran version.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.detect_libgfortran_abi-Tuple{}",
    "page": "Docstrings",
    "title": "BinaryProvider.detect_libgfortran_abi",
    "category": "method",
    "text": "detect_libgfortran_abi()\n\nIf no parameter is given, introspects the current Julia process to determine the version of GCC this Julia was built with.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.detect_libstdcxx_abi-Tuple{}",
    "page": "Docstrings",
    "title": "BinaryProvider.detect_libstdcxx_abi",
    "category": "method",
    "text": "detect_libstdcxx_abi()\n\nIntrospects the currently running Julia process to find out what version of libstdc++ it is linked to (if any), as a proxy for GCC version compatibility.  E.g. if we are linked against libstdc++.so.19, binary dependencies built by GCC 8.1.0 will have linker errors.  This method returns the maximum GCC abi that we can support.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.download-Tuple{AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.download",
    "category": "method",
    "text": "download(url::AbstractString, dest::AbstractString;\n         verbose::Bool = false)\n\nDownload file located at url, store it at dest, continuing if dest already exists and the server and download engine support it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.info_onchange-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "BinaryProvider.info_onchange",
    "category": "method",
    "text": "info_onchange(msg, key, location)\n\nThis macro is used to gate verbose messages within a function; within functions such as verify(), we want to print out that we successfully verified a file only once per session, so we keep track of which log message we printed within a particular method.  This is done by passing a key to @info_onchange as the second parameter, e.g. in the above scenario we might pass the string \"verify_$(filepath)\".  Combined with this key is the file and line the message originates from, which is used to suppress duplicate messages; e.g. if a method with two branches that both log with the same key is called, if the execution path is branch A, A, B, A, B, B, B, A then what will be printed is message A, B, A, B, A.  In essence, this method calls info() only when the message generated by this particular method changes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.parse_dl_name_version-Tuple{AbstractString,Platform}",
    "page": "Docstrings",
    "title": "BinaryProvider.parse_dl_name_version",
    "category": "method",
    "text": "parse_dl_name_version(path::AbstractString, platform::Platform)\n\nGiven a path to a dynamic library, parse out what information we can from the filename.  E.g. given something like \"lib/libfoo.so.3.2\", this function returns \"libfoo\", v\"3.2\".  If the path name is not a valid dynamic library, this method throws an error.  If no soversion can be extracted from the filename, as in \"libbar.so\" this method returns \"libbar\", nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.platform_name-Tuple{Linux}",
    "page": "Docstrings",
    "title": "BinaryProvider.platform_name",
    "category": "method",
    "text": "platform_name(p::Platform)\n\nGet the \"platform name\" of the given platform.  E.g. returns \"Linux\" for a Linux object, or \"Windows\" for a Windows object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.probe_cmd-Tuple{Cmd}",
    "page": "Docstrings",
    "title": "BinaryProvider.probe_cmd",
    "category": "method",
    "text": "probe_cmd(cmd::Cmd; verbose::Bool = false)\n\nReturns true if the given command executes successfully, false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.probe_platform_engines!-Tuple{}",
    "page": "Docstrings",
    "title": "BinaryProvider.probe_platform_engines!",
    "category": "method",
    "text": "probe_platform_engines!(;verbose::Bool = false)\n\nSearches the environment for various tools needed to download, unpack, and package up binaries.  Searches for a download engine to be used by gen_download_cmd() and a compression engine to be used by gen_unpack_cmd(), gen_package_cmd(), gen_list_tarball_cmd() and parse_tarball_listing(), as well as a sh execution engine for gen_sh_cmd().  Running this function will set the global functions to their appropriate implementations given the environment this package is running on.\n\nThis probing function will automatically search for download engines using a particular ordering; if you wish to override this ordering and use one over all others, set the BINARYPROVIDER_DOWNLOAD_ENGINE environment variable to its name, and it will be the only engine searched for. For example, put:\n\nENV[\"BINARYPROVIDER_DOWNLOAD_ENGINE\"] = \"fetch\"\n\nwithin your ~/.juliarc.jl file to force fetch to be used over curl.  If the given override does not match any of the download engines known to this function, a warning will be printed and the typical ordering will be performed.\n\nSimilarly, if you wish to override the compression engine used, set the BINARYPROVIDER_COMPRESSION_ENGINE environment variable to its name (e.g. 7z or tar) and it will be the only engine searched for.  If the given override does not match any of the compression engines known to this function, a warning will be printed and the typical searching will be performed.\n\nIf verbose is true, print out the various engines as they are searched.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.probe_symlink_creation-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "BinaryProvider.probe_symlink_creation",
    "category": "method",
    "text": "probe_symlink_creation(dest::AbstractString)\n\nProbes whether we can create a symlink within the given destination directory, to determine whether a particular filesystem is \"symlink-unfriendly\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BinaryProvider.readuntil_many-Tuple{IO,Any}",
    "page": "Docstrings",
    "title": "BinaryProvider.readuntil_many",
    "category": "method",
    "text": "readuntil_many(s::IO, delims)\n\nGiven a collection of delimiter characters, read from s until one of those delimiters is reached, or we reach the end of s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BinaryProvider]\nOrder = [:type, :function]"
},

]}
