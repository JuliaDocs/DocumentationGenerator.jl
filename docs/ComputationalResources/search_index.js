var documenterSearchIndex = {"docs": [

{
    "location": "#ComputationalResources.AbstractCPU",
    "page": "Home",
    "title": "ComputationalResources.AbstractCPU",
    "category": "type",
    "text": "AbstractCPU\n\nAn abstract type indicating that computation should be performed using the CPU.\n\n\n\n\n\n"
},

{
    "location": "#ComputationalResources.AbstractResource",
    "page": "Home",
    "title": "ComputationalResources.AbstractResource",
    "category": "type",
    "text": "AbstractResource\n\nThe abstract supertype of all computational resources.\n\n\n\n\n\n"
},

{
    "location": "#ComputationalResources.ArrayFireLibs",
    "page": "Home",
    "title": "ComputationalResources.ArrayFireLibs",
    "category": "type",
    "text": "ArrayFireLibs()\nArrayFireLibs(settings)\n\nIndicate that computation should be performing using the ArrayFire libraries. Optionally pass in an object specifying algorithmic settings.\n\nExamples:\n\nfilter(ArrayFireLibs(), image, kernel)\nfilter(ArrayFireLibs(backend), image, kernel)\n\n\n\n\n\n"
},

{
    "location": "#ComputationalResources.CPU1",
    "page": "Home",
    "title": "ComputationalResources.CPU1",
    "category": "type",
    "text": "CPU1()\nCPU1(settings)\n\nIndicate that a computation should be performed using the CPU in single-threaded mode. Optionally pass in an object specifying algorithmic settings.\n\nExamples:\n\nfilter(CPU1(), image, kernel)\nfilter(CPU1(TileSize(64,8)), image, kernel)\n\n\n\n\n\n"
},

{
    "location": "#ComputationalResources.CPUThreads",
    "page": "Home",
    "title": "ComputationalResources.CPUThreads",
    "category": "type",
    "text": "CPUThreads()\nCPUThreads(settings)\n\nIndicate that a computation should be performed using the CPU in multi-threaded mode. Optionally pass in an object specifying algorithmic settings.\n\nExamples:\n\nfilter(CPUThreads(), image, kernel)\nfilter(CPUThreads(TileSize(64,8)), image, kernel)\n\n\n\n\n\n"
},

{
    "location": "#ComputationalResources.CUDALibs",
    "page": "Home",
    "title": "ComputationalResources.CUDALibs",
    "category": "type",
    "text": "CUDALibs()\nCUDALibs(settings)\n\nIndicate that computation should be performing using the CUDA libraries. Optionally pass in an object specifying algorithmic settings.\n\nExamples:\n\nfilter(CUDALibs(), image, kernel)\nfilter(CUDALibs(backend), image, kernel)\n\n\n\n\n\n"
},

{
    "location": "#ComputationalResources.OpenCLLibs",
    "page": "Home",
    "title": "ComputationalResources.OpenCLLibs",
    "category": "type",
    "text": "OpenCLLibs()\nOpenCLLibs(settings)\n\nIndicate that computation should be performing using the OpenCL libraries. Optionally pass in an object specifying algorithmic settings.\n\nExamples:\n\nfilter(OpenCLLibs(), image, kernel)\nfilter(OpenCLLibs(backend), image, kernel)\n\n\n\n\n\n"
},

{
    "location": "#ComputationalResources.TileSize",
    "page": "Home",
    "title": "ComputationalResources.TileSize",
    "category": "type",
    "text": "TileSize(dims)\n\nRequest that an array computation be performed using tiles (blocks) of size dims.\n\n\n\n\n\n"
},

{
    "location": "#ComputationalResources.addresource-Union{Tuple{Type{T}}, Tuple{T}} where T<:AbstractResource",
    "page": "Home",
    "title": "ComputationalResources.addresource",
    "category": "method",
    "text": "addresource(T)\n\nAdd T to the list of available resources. For example, addresource(OpenCLLibs) would indicate that you have a GPU and the OpenCL libraries installed.\n\n\n\n\n\n"
},

{
    "location": "#ComputationalResources.haveresource-Union{Tuple{Type{T}}, Tuple{T}} where T<:AbstractResource",
    "page": "Home",
    "title": "ComputationalResources.haveresource",
    "category": "method",
    "text": "haveresource(T)\n\nReturns true if T is an available resource. For example, haveresource(OpenCLLibs) tests whether the OpenCLLibs have been added as an available resource. This function is typically used inside a module\'s __init__ function.\n\nExample:\n\n# The __init__ function for MyPackage:\nfunction __init__()\n    ...  # other initialization code, possibly setting the LOAD_PATH\n    if haveresource(OpenCLLibs)\n        @eval using MyPackageCL  # a separate module containing OpenCL implementations\n    end\n    # Put additional resource checks here\n    ...  # other initialization code, possibly cleaning up the LOAD_PATH\nend\n\n\n\n\n\n"
},

{
    "location": "#ComputationalResources.rmresource-Union{Tuple{Type{T}}, Tuple{T}} where T<:AbstractResource",
    "page": "Home",
    "title": "ComputationalResources.rmresource",
    "category": "method",
    "text": "rmresource(T)\n\nRemove T from the list of available resources. For example, rmresource(OpenCLLibs) would indicate that any future package loads should avoid loading their specializations for OpenCL.\n\n\n\n\n\n"
},

{
    "location": "#ComputationalResources.CPUProcesses",
    "page": "Home",
    "title": "ComputationalResources.CPUProcesses",
    "category": "type",
    "text": "CPUProcesses()\nCPUProcesses(settings)\n\nIndicate that a computation should be performed using the CPU in multi-process mode. Processes should be added with addprocs() or julia started with julia -p N. Processes must communicate using distributed memory operations such as remote refrences. Optionally pass in an object specifying algorithmic settings.\n\nExamples:\n\nfilter(CPUProcesses(), image, kernel)\nfilter(CPUProcesses(TileSize(64,8)), image, kernel)\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ComputationalResources]\nOrder = [:type, :function]"
},

]}
