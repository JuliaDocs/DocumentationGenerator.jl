var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ComputationalResources-1",
    "page": "Readme",
    "title": "ComputationalResources",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)A Julia package for choosing resources (hardware, libraries, algorithms) for performing computations. It exports a set of types that allow you to dispatch to different methods depending on the selected resources. It also includes simple facilities that help package authors manage the loading of code in a way that depends on resource availability and user choice."
},

{
    "location": "#Resources-1",
    "page": "Readme",
    "title": "Resources",
    "category": "section",
    "text": "This package exports the following types of resources:CPU1 (single-threaded computation)\nCPUThreads (multi-threaded computation)\nArrayFireLibs (using the ArrayFire package)\nCUDALibs (GPU computation using NVIDIA\'s CUDA libraries)\nOpenCLLibs (GPU computation using the OpenCL libraries)Algorithm selection is performed by passing a resource instance as an argument (conventionally, the first argument) to a function, where CPU1() is the typical default. Instances of these types may optionally store additional settings that you can customize; for example you could define a TimeOut type:struct TimeOut\n    seconds::Float64\nendand then call some algorithm asoptimize(CPU1(TimeOut(3)), f, x)As a package author, you could write optimize to check for the timeout value and terminate early once this time has been exceeded."
},

{
    "location": "#Usage-as-a-user-1",
    "page": "Readme",
    "title": "Usage as a user",
    "category": "section",
    "text": "Begin your session withusing ComputationalResourcesThen choose any resources you have available, for example:addresource(ArrayFireLibs)It\'s important to do this before you load any packages supporting ArrayFire-specific implementations; otherwise, calls such asfilter(ArrayFireLibs(), b, a, data)are likely to throw a MethodError because the relevant specializations will not have been loaded.If you\'d like to make your selection of available resources automatic, you can add such lines to your .juliarc.jl file."
},

{
    "location": "#Usage-as-a-package-author-1",
    "page": "Readme",
    "title": "Usage as a package author",
    "category": "section",
    "text": "You can make the loading of code dependent upon the resources selected by the user. We\'ll use the \"Dummy\" package as an example (see also the test/packages folder for additional examples). This package could have the following file structure:src/\n  Dummy.jl\n  DummyAF.jl\n  ...\ntest/\n  ...where ... means additional files. Dummy.jl might start like this:module Dummy\n\nusing ComputationalResources\n\n# You need an __init__ function that will manage the loading of\n# sub-modules that implement specializations for different\n# computational resources\nfunction __init__()\n    # Enable `using` to load additional modules in this folder\n    push!(LOAD_PATH, dirname(@__FILE__))\n    # Now check for any resources that your package supports\n    if haveresource(ArrayFireLibs)\n        # User has indicated support for the ArrayFire libraries, so load your relevant code\n        @eval using DummyAF\n    end\n    # Put additional resource checks here\n    # Don\'t forget to clean up!\n    pop!(LOAD_PATH)\nend\n\n# Now define the methods you\'ll export, using single-threaded CPU\n# computations as the \"foundation\"\nfunction foo(resource::CPU1, args...)\n    # awesome algorithm goes here\nend\n\n# Typically you should select a default resource\nfoo(args...) = foo(CPU1(), args...)\n\nendYour DummyAF module is implemented in DummyAF.jl, which might look like this:module DummyAF\n\nusing ComputationalResources, Dummy, ArrayFire\n\nfunction Dummy.foo(resource::ArrayFireLibs, args...)\n    # specialization for the same computation, but using the ArrayFire libraries instead\nend\n\nendNote that the ArrayFire package was loaded by DummyAF but not by Dummy; as a consequence, users who do not have this package installed will not experience any errors. Assuming it\'s optional, you should not add ArrayFire to your package\'s REQUIRE file."
},

{
    "location": "autodocs/#ComputationalResources.AbstractCPU",
    "page": "Docstrings",
    "title": "ComputationalResources.AbstractCPU",
    "category": "type",
    "text": "AbstractCPU\n\nAn abstract type indicating that computation should be performed using the CPU.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputationalResources.AbstractResource",
    "page": "Docstrings",
    "title": "ComputationalResources.AbstractResource",
    "category": "type",
    "text": "AbstractResource\n\nThe abstract supertype of all computational resources.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputationalResources.ArrayFireLibs",
    "page": "Docstrings",
    "title": "ComputationalResources.ArrayFireLibs",
    "category": "type",
    "text": "ArrayFireLibs()\nArrayFireLibs(settings)\n\nIndicate that computation should be performing using the ArrayFire libraries. Optionally pass in an object specifying algorithmic settings.\n\nExamples:\n\nfilter(ArrayFireLibs(), image, kernel)\nfilter(ArrayFireLibs(backend), image, kernel)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputationalResources.CPU1",
    "page": "Docstrings",
    "title": "ComputationalResources.CPU1",
    "category": "type",
    "text": "CPU1()\nCPU1(settings)\n\nIndicate that a computation should be performed using the CPU in single-threaded mode. Optionally pass in an object specifying algorithmic settings.\n\nExamples:\n\nfilter(CPU1(), image, kernel)\nfilter(CPU1(TileSize(64,8)), image, kernel)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputationalResources.CPUThreads",
    "page": "Docstrings",
    "title": "ComputationalResources.CPUThreads",
    "category": "type",
    "text": "CPUThreads()\nCPUThreads(settings)\n\nIndicate that a computation should be performed using the CPU in multi-threaded mode. Optionally pass in an object specifying algorithmic settings.\n\nExamples:\n\nfilter(CPUThreads(), image, kernel)\nfilter(CPUThreads(TileSize(64,8)), image, kernel)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputationalResources.CUDALibs",
    "page": "Docstrings",
    "title": "ComputationalResources.CUDALibs",
    "category": "type",
    "text": "CUDALibs()\nCUDALibs(settings)\n\nIndicate that computation should be performing using the CUDA libraries. Optionally pass in an object specifying algorithmic settings.\n\nExamples:\n\nfilter(CUDALibs(), image, kernel)\nfilter(CUDALibs(backend), image, kernel)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputationalResources.OpenCLLibs",
    "page": "Docstrings",
    "title": "ComputationalResources.OpenCLLibs",
    "category": "type",
    "text": "OpenCLLibs()\nOpenCLLibs(settings)\n\nIndicate that computation should be performing using the OpenCL libraries. Optionally pass in an object specifying algorithmic settings.\n\nExamples:\n\nfilter(OpenCLLibs(), image, kernel)\nfilter(OpenCLLibs(backend), image, kernel)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputationalResources.TileSize",
    "page": "Docstrings",
    "title": "ComputationalResources.TileSize",
    "category": "type",
    "text": "TileSize(dims)\n\nRequest that an array computation be performed using tiles (blocks) of size dims.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputationalResources.addresource-Union{Tuple{Type{T}}, Tuple{T}} where T<:AbstractResource",
    "page": "Docstrings",
    "title": "ComputationalResources.addresource",
    "category": "method",
    "text": "addresource(T)\n\nAdd T to the list of available resources. For example, addresource(OpenCLLibs) would indicate that you have a GPU and the OpenCL libraries installed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputationalResources.haveresource-Union{Tuple{Type{T}}, Tuple{T}} where T<:AbstractResource",
    "page": "Docstrings",
    "title": "ComputationalResources.haveresource",
    "category": "method",
    "text": "haveresource(T)\n\nReturns true if T is an available resource. For example, haveresource(OpenCLLibs) tests whether the OpenCLLibs have been added as an available resource. This function is typically used inside a module\'s __init__ function.\n\nExample:\n\n# The __init__ function for MyPackage:\nfunction __init__()\n    ...  # other initialization code, possibly setting the LOAD_PATH\n    if haveresource(OpenCLLibs)\n        @eval using MyPackageCL  # a separate module containing OpenCL implementations\n    end\n    # Put additional resource checks here\n    ...  # other initialization code, possibly cleaning up the LOAD_PATH\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputationalResources.rmresource-Union{Tuple{Type{T}}, Tuple{T}} where T<:AbstractResource",
    "page": "Docstrings",
    "title": "ComputationalResources.rmresource",
    "category": "method",
    "text": "rmresource(T)\n\nRemove T from the list of available resources. For example, rmresource(OpenCLLibs) would indicate that any future package loads should avoid loading their specializations for OpenCL.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ComputationalResources.CPUProcesses",
    "page": "Docstrings",
    "title": "ComputationalResources.CPUProcesses",
    "category": "type",
    "text": "CPUProcesses()\nCPUProcesses(settings)\n\nIndicate that a computation should be performed using the CPU in multi-process mode. Processes should be added with addprocs() or julia started with julia -p N. Processes must communicate using distributed memory operations such as remote refrences. Optionally pass in an object specifying algorithmic settings.\n\nExamples:\n\nfilter(CPUProcesses(), image, kernel)\nfilter(CPUProcesses(TileSize(64,8)), image, kernel)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ComputationalResources]\nOrder = [:type, :function]"
},

]}
