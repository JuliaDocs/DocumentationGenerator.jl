var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PackageCompiler-1",
    "page": "Readme",
    "title": "PackageCompiler",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)Remove just-in-time compilation overhead from your package and compile it into a system image."
},

{
    "location": "#Usage-example-1",
    "page": "Readme",
    "title": "Usage example",
    "category": "section",
    "text": "E.g. do:using PackageCompiler\n\n# This command will use the `runtest.jl` of `ArgParse` + `SnoopCompile` to find out what functions to precompile!\n# `force = false` to not force overwriting Julia\'s current system image\ncompile_package(\"ArgParse\", \"SnoopCompile\", force = false, reuse = false)\n\n# Build again, reusing the snoop file\ncompile_package(\"ArgParse\", \"SnoopCompile\", force = false, reuse = true)\n\n# You can define a file that will get run for snooping explicitly like this:\n# this makes sure, that binary gets cached for all functions called in `for_snooping.jl`\ncompile_package((\"ArgParse\", \"relative/path/for_snooping.jl\"))\n\n# If you used force and want your old system image back (force will overwrite the default system image Julia uses) you can run:\nrevert()\n\n# Or if you simply want to get a native system image e.g. when you have downloaded the generic Julia install:\nforce_native_image!()\n\n# Build an executable\nbuild_executable(\n    \"hello.jl\", # Julia script containing a `julia_main` function, e.g. like `examples/hello.jl`\n    snoopfile = \"call_functions.jl\", # Julia script which calls functions that you want to make sure to have precompiled [optional]\n    builddir = \"path/to/builddir\" # that\'s where the compiled artifacts will end up [optional]\n)\n\n# Build a shared library\nbuild_shared_lib(\"hello.jl\")"
},

{
    "location": "#Troubleshooting:-1",
    "page": "Readme",
    "title": "Troubleshooting:",
    "category": "section",
    "text": "You might need to tweak your runtest, since SnoopCompile can have problemswith some statements. Please open issues about concrete problems! This is also why there is a way to point to a file different from runtests.jl, for the case it becomes impossible to combine testing and snoop compiling, just pass (\"package\", \"snoopfile.jl\")!Non constant globals and globals defined in functions are problematic.Removing those got me to 95% of making the package safe for static compilation.Type unstable code had some inference issues (around 2 occurrence, where I’mstill not sure what was happening, and both cases happened with dictionaries). The only way to find those was investigating the segfaults with gdb, but then it was relatively easy to just juggle around the code, since the stacktraces accurately pointed to the problem. The non constant globals might be related since they introduce type instabilities.Some generated functions needed reordering of the functions they call(actually, even for normal compilation, all functions that get called in a generated function should be defined before it).I uncovered one out-of-bounds issue, that somehow was not coming up withoutstatic compilation.I used julia-debug to uncover most bugs, but actually the last errors I wastrying to uncover where due to julia-debug itself!You’re pretty much on your own and need to use gdb to find any issues and Istill don’t know what the underlying julia issues are and when they will get fixed :wink: See: https://github.com/JuliaLang/julia/issues/24533. Hopefully we\'ll look at a better story with Julia 1.0!"
},

{
    "location": "#Static-Julia-Compiler-1",
    "page": "Readme",
    "title": "Static Julia Compiler",
    "category": "section",
    "text": "Build shared libraries and executables from Julia code.Run juliac.jl -h for help:usage: juliac.jl [-v] [-q] [-d <dir>] [-n <name>] [-p <file>] [-c]\n                 [-a] [-o] [-s] [-i] [-e] [-t] [-j] [-f <file>] [-r]\n                 [-R] [-J <file>] [-H <dir>] [--startup-file {yes|no}]\n                 [--handle-signals {yes|no}]\n                 [--sysimage-native-code {yes|no}]\n                 [--compiled-modules {yes|no}]\n                 [--depwarn {yes|no|error}]\n                 [--warn-overwrite {yes|no}]\n                 [--compile {yes|no|all|min}] [-C <target>]\n                 [-O {0,1,2,3}] [-g <level>] [--inline {yes|no}]\n                 [--check-bounds {yes|no}] [--math-mode {ieee,fast}]\n                 [--cc <cc>] [--cc-flag <flag>] [--version] [-h]\n                 juliaprog [cprog]\n\nStatic Julia Compiler\n\npositional arguments:\n  juliaprog             Julia program to compile\n  cprog                 C program to compile (required only when\n                        building an executable, if not provided a\n                        minimal driver program is used)\n\noptional arguments:\n  -v, --verbose         increase verbosity\n  -q, --quiet           suppress non-error messages\n  -d, --builddir <dir>  build directory\n  -n, --outname <name>  output files basename\n  -p, --snoopfile <file>\n                        specify script calling functions to precompile\n  -c, --clean           remove build directory\n  -a, --autodeps        automatically build required dependencies\n  -o, --object          build object file\n  -s, --shared          build shared library\n  -i, --init-shared     add `init_jl_runtime` and `exit_jl_runtime` to\n                        shared library for runtime initialization\n  -e, --executable      build executable file\n  -t, --rmtemp          remove temporary build files\n  -j, --copy-julialibs  copy Julia libraries to build directory\n  -f, --copy-file <file>\n                        copy file to build directory, can be repeated\n                        for multiple files\n  -r, --release         build in release mode, implies `-O3 -g0`\n                        unless otherwise specified\n  -R, --Release         perform a fully automated release build,\n                        equivalent to `-atjr`\n  -J, --sysimage <file>\n                        start up with the given system image file\n  -H, --home <dir>      set location of `julia` executable\n  --startup-file {yes|no}\n                        load `~/.julia/config/startup.jl`\n  --handle-signals {yes|no}\n                        enable or disable Julia\'s default signal\n                        handlers\n  --sysimage-native-code {yes|no}\n                        use native code from system image if available\n  --compiled-modules {yes|no}\n                        enable or disable incremental precompilation\n                        of modules\n  --depwarn {yes|no|error}\n                        enable or disable syntax and method\n                        deprecation warnings\n  --warn-overwrite {yes|no}\n                        enable or disable method overwrite warnings\n  --compile {yes|no|all|min}\n                        enable or disable JIT compiler, or request\n                        exhaustive compilation\n  -C, --cpu-target <target>\n                        limit usage of CPU features up to <target>\n                        (implies default `--sysimage-native-code=no`)\n  -O, --optimize {0,1,2,3}\n                        set the optimization level (type: Int64)\n  -g, --debug <level>   enable / set the level of debug info\n                        generation (type: Int64)\n  --inline {yes|no}     control whether inlining is permitted\n  --check-bounds {yes|no}\n                        emit bounds checks always or never\n  --math-mode {ieee,fast}\n                        disallow or enable unsafe floating point\n                        optimizations\n  --cc <cc>             system C compiler\n  --cc-flag <flag>      pass custom flag to the system C compiler when\n                        building a shared library or executable, can\n                        be repeated for multiple flags\n  --version             show version information and exit\n  -h, --help            show this help message and exit\n\nexamples:\n  juliac.jl -vae hello.jl        # verbose, build executable and deps\n  juliac.jl -vae hello.jl prog.c # embed into user defined C program\n  juliac.jl -qo hello.jl         # quiet, build object file only\n  juliac.jl -vosej hello.jl      # build all and copy Julia libs\n  juliac.jl -vRe hello.jl        # fully automated release build"
},

{
    "location": "#Building-a-shared-library-1",
    "page": "Readme",
    "title": "Building a shared library",
    "category": "section",
    "text": "PackageCompiler can compile a julia library into a linkable shared library, built for a specific architecture, with a C-compatible ABI which can be linked against from another program. This can be done either from the julia api, build_shared_lib(\"src/HelloLib.jl\", \"hello\"), or on the command line, $ juliac.jl -vas src/HelloLib.jl. This will generate a shared library called builddir/libhello.{so,dylib,dll} depending on your system.The provided julia file, src/HelloLib.jl, is PackageCompiler\'s entry point into the library, so it should be the \"top level\" library file. Any julia code that it includes or imports will be compiled into the shared library.Note that for a julia function to be callable from C, it must be defined with Base.@ccallable, e.g. Base.@ccallable foo()::Cint = 3."
},

{
    "location": "#Building-an-executable-1",
    "page": "Readme",
    "title": "Building an executable",
    "category": "section",
    "text": "To compile a Julia program into an executable, you can use either the julia api, build_executable(\"hello.jl\", \"hello\"), or the command line, $ juliac.jl -vae hello.jl.The provided julia file, hello.jl, is PackageCompiler\'s entry point into the program, and should be the program\'s \"main\" file. Any julia code that it includes or imports will be compiled into the shared library, which will be linked against the provided C program to create an executable at builddir/hello.If you choose to use the default C program, your julia code must define julia_main as its entry point. The resultant executable will start by calling that function, so all of your program\'s logic should proceed from that function. For example:Base.@ccallable function julia_main(ARGS::Vector{String})::Cint\n    hello_main(ARGS)  # call your program\'s logic.\n    return 0\nendPlease see examples/hello.jl for an example Julia program."
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "The juliac.jl script is located in the PackageCompiler root folder (normpath(Base.find_package(\"PackageCompiler\"), \"..\", \"..\")).\nA shared library containing the system image hello.so, and a driver binary hello are created in the builddir directory. Running hello produces the following output:   hello, world\n   sin(0.0) = 0.0\n      ┌─────────────────────────────────────────────────┐\n    1 │⠀⠀⠀⠀⠀⠀⠀⡠⠊⠉⠉⠉⠢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n      │⠀⠀⠀⠀⠀⢠⠎⠀⠀⠀⠀⠀⠀⠘⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n      │⠀⠀⠀⠀⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n      │⠀⠀⠀⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n      │⠀⠀⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n      │⠀⢀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n      │⠀⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀│\n      │⠼⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠬⢦⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⢤│\n      │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠇│\n      │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⠀│\n      │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀│\n      │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀│\n      │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀│\n      │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢆⠀⠀⠀⠀⠀⠀⢠⠎⠀⠀⠀⠀⠀│\n   -1 │⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢄⣀⣀⣀⠔⠁⠀⠀⠀⠀⠀⠀│\n      └─────────────────────────────────────────────────┘\n      0                                               100Currently, before another program can call any of the functions defined in the created shared library, that program must first initialize the julia runtime. (See #53 for details.)"
},

{
    "location": "#Under-the-hood-1",
    "page": "Readme",
    "title": "Under the hood",
    "category": "section",
    "text": "The juliac.jl script uses the --output-o switch to compile the user script into object code, and then builds it into the system image specified by the -J switch. This prepares an object file, which is then linked into a shared library containing the system image and user code. A driver script such as the one in program.c can then be used to build a binary that runs the Julia code.Instead of a driver script, the generated system image can be embedded into a larger program, see the Embedding Julia section of the Julia manual. Note that the name of the generated system image (\"libhello\" for hello.jl) is accessible from C in the preprocessor macro JULIAC_PROGRAM_LIBNAME.For more information on static Julia compilation see:\nhttps://juliacomputing.com/blog/2016/02/09/static-julia.html"
},

{
    "location": "autodocs/#PackageCompiler.build_executable",
    "page": "Docstrings",
    "title": "PackageCompiler.build_executable",
    "category": "function",
    "text": "build_executable(\n    julia_program, output_name = nothing, c_program = nothing;\n    snoopfile = nothing, builddir = nothing, verbose = false, quiet = false,\n    copy_julialibs = true, copy_files = nothing, release = false, Release = false,\n    sysimage = nothing, home = nothing, startup_file = nothing, handle_signals = nothing,\n    sysimage_native_code = nothing, compiled_modules = nothing,\n    depwarn = nothing, warn_overwrite = nothing,\n    compile = nothing, cpu_target = nothing, optimize = nothing, debug = nothing,\n    inline = nothing, check_bounds = nothing, math_mode = nothing,\n    cc = nothing, cc_flags = nothing\n)\n`julia_program` needs to be a Julia script containing a `julia_main` function, e.g. like `examples/hello.jl`\n`snoopfile` is optional and can be a Julia script which calls functions that you want to make sure to have precompiled\n`builddir` is where the compiled artifacts will end up\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PackageCompiler.build_shared_lib",
    "page": "Docstrings",
    "title": "PackageCompiler.build_shared_lib",
    "category": "function",
    "text": "build_shared_lib(\n    julia_program, output_name = nothing;\n    snoopfile = nothing, builddir = nothing, verbose = false, quiet = false,\n    init_shared = false, copy_julialibs = true, copy_files = nothing, release = false, Release = false,\n    sysimage = nothing, home = nothing, startup_file = nothing, handle_signals = nothing,\n    sysimage_native_code = nothing, compiled_modules = nothing,\n    depwarn = nothing, warn_overwrite = nothing,\n    compile = nothing, cpu_target = nothing, optimize = nothing, debug = nothing,\n    inline = nothing, check_bounds = nothing, math_mode = nothing,\n    cc = nothing, cc_flags = nothing\n)\n`julia_program` needs to be a Julia script containing a `julia_main` function, e.g. like `examples/hello.jl`\n`snoopfile` is optional and can be a Julia script which calls functions that you want to make sure to have precompiled\n`builddir` is where the compiled artifacts will end up\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PackageCompiler.compile_package-Tuple",
    "page": "Docstrings",
    "title": "PackageCompiler.compile_package",
    "category": "method",
    "text": "compile_package(packages...; kw_args...)\n\nwith packages being either a string naming a package, or a tuple (package_name, precompile_file). If no precompile file is given, it will use the packages runtests.jl, which is a good canditate for figuring out what functions to compile!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PackageCompiler.compile_package-Tuple{Vararg{Tuple{String,String},N} where N}",
    "page": "Docstrings",
    "title": "PackageCompiler.compile_package",
    "category": "method",
    "text": "compile_package(packages::Tuple{String, String}...; force = false, reuse = false, debug = false, cpu_target = nothing)\n\nCompile a list of packages. Each package comes as a tuple of (package_name, precompile_file) where the precompile file should contain all function calls, that should get compiled into the system image. Usually the runtests.jl file is a good candidate, since it should run all important functions of a package.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PackageCompiler.force_native_image!",
    "page": "Docstrings",
    "title": "PackageCompiler.force_native_image!",
    "category": "function",
    "text": "force_native_image!()\n\nBuilds a clean system image, similar to a fresh Julia install. Can also be used to build a native system image for a downloaded cross compiled julia binary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PackageCompiler.revert",
    "page": "Docstrings",
    "title": "PackageCompiler.revert",
    "category": "function",
    "text": "Reverts a forced compilation of the system image. This will restore any previously backed up system image files, or build a new, clean system image.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PackageCompiler.static_julia-Tuple{Any}",
    "page": "Docstrings",
    "title": "PackageCompiler.static_julia",
    "category": "method",
    "text": "static_julia(juliaprog::String; kw_args...)\n\ncompiles the Julia file at path juliaprog with keyword arguments:\n\ncprog                            C program to compile (required only when building an executable, if not provided a minimal driver program is used)\nverbose                          increase verbosity\nquiet                            suppress non-error messages\nbuilddir                         build directory\noutname                          output files basename\nsnoopfile                        specify script calling functions to precompile\nclean                            remove build directory\nautodeps                         automatically build required dependencies\nobject                           build object file\nshared                           build shared library\ninit_shared                      add `init_jl_runtime` and `exit_jl_runtime` to shared library for runtime initialization\nexecutable                       build executable file\nrmtemp                           remove temporary build files\ncopy_julialibs                   copy Julia libraries to build directory\ncopy_files                       copy user-specified files to build directory (either `nothing` or a string array)\nrelease                          build in release mode, implies `-O3 -g0` unless otherwise specified\nRelease                          perform a fully automated release build, equivalent to `-atjr`\nsysimage <file>                  start up with the given system image file\nhome <dir>                       set location of `julia` executable\nstartup_file {yes|no}            load `~/.julia/config/startup.jl`\nhandle_signals {yes|no}          enable or disable Julia\'s default signal handlers\nsysimage_native_code {yes|no}    use native code from system image if available\ncompiled_modules {yes|no}        enable or disable incremental precompilation of modules\ndepwarn {yes|no|error}           enable or disable syntax and method deprecation warnings\nwarn_overwrite {yes|no}          enable or disable method overwrite warnings\ncompile {yes|no|all|min}         enable or disable JIT compiler, or request exhaustive compilation\ncpu_target <target>              limit usage of CPU features up to <target> (implies default `--sysimage_native_code=no`)\noptimize {0,1,2,3}               set the optimization level\ndebug <level>                    enable / set the level of debug info generation\ninline {yes|no}                  control whether inlining is permitted\ncheck_bounds {yes|no}            emit bounds checks always or never\nmath_mode {ieee,fast}            disallow or enable unsafe floating point optimizations\ncc                               system C compiler\ncc_flags <flags>                 pass custom flags to the system C compiler when building a shared library or executable (either `nothing` or a string array)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PackageCompiler.build_sysimg",
    "page": "Docstrings",
    "title": "PackageCompiler.build_sysimg",
    "category": "function",
    "text": "build_sysimg(sysimg_path=default_sysimg_path(), cpu_target=\"native\", userimg_path=nothing; force=false)\n\nRebuild the system image. Store it in sysimg_path, which defaults to a file named sys.ji that sits in the same folder as libjulia.{so,dylib}, except on Windows where it defaults to Sys.BINDIR/../lib/julia/sys.ji. Use the cpu instruction set given by cpu_target. Valid CPU targets are the same as for the -C option to julia, or the -march option to gcc. Defaults to native, which means to use all CPU instructions available on the current processor. Include the user image file given by userimg_path, which should contain directives such as using MyPackage to include that package in the new system image. New system image will not replace an older image unless force is set to true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PackageCompiler.get_backup!",
    "page": "Docstrings",
    "title": "PackageCompiler.get_backup!",
    "category": "function",
    "text": "Returns the system image file stored in the backup folder. If there is no backup, this function will automatically generate a system image in the backup folder.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PackageCompiler.snoop_userimg-Tuple{Any,Vararg{Tuple{String,String},N} where N}",
    "page": "Docstrings",
    "title": "PackageCompiler.snoop_userimg",
    "category": "method",
    "text": "snoop_userimg(userimg, packages::Tuple{String, String}...)\n\nTraces all function calls in packages and writes out `precompile` statements into the file `userimg`\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [PackageCompiler]\nOrder = [:type, :function]"
},

]}
