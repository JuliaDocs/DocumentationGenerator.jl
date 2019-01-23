var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#CUDAdrv.jl-1",
    "page": "Home",
    "title": "CUDAdrv.jl",
    "category": "section",
    "text": "A Julia wrapper for the CUDA driver API.This package aims to provide high-level wrappers for the functionality exposed by the CUDA driver API, and is meant for users who need high- or low-level access to the CUDA toolkit or the underlying hardware.The package is built upon the low-level CUDA driver API, but that shouldn\'t make the Julia wrapper any harder to use. That said, it is a work-in-progress and does not offer the same functionality or convenience as the more popular CUDArt package, which is built upon the higher-level CUDA runtime API."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Requirements:Julia 0.5 or higher (use v0.1.0 of this package for compatibility with Julia 0.4)\nNVIDIA driver, providing libcuda.so (the full CUDA toolkit is not required)\nCUDA hardwareAt the Julia REPL:Pkg.add(\"CUDAdrv\")\nusing CUDAdrv\n\n# optionally\nPkg.test(\"CUDAdrv\")Building CUDAdrv might display error messages, indicating issues with your set-up. These messages can be cryptic as they happen too early for decent error handling to be loaded. However, please pay close attention to them as they might prevent CUDAdrv.jl from working properly! Some common issues:unknown error (code 999): this often indicates that your set-up is broken, eg. because you didn\'t load the correct, or any, kernel module. Please verify your set-up, on Linux by executing nvidia-smi or on other platforms by compiling and running CUDA C code using nvcc.\nno device (code 100): CUDA didn\'t detect your device, because it is not supported by CUDA or because you loaded the wrong kernel driver (eg. legacy when you need regular, or vice-versa). CUDAdrv.jl cannot work in this case, because CUDA does not allow us to query the driver version without a valid device, something we need in order to version the API calls.\nusing library stubs (code -1): if any API call returns -1, you\'re probably using the CUDA driver library stubs which return this value for every function call. This is not supported by CUDAdrv.jl, and is only intended to be used when compiling C or C++ code to be linked with libcuda.so at a time when that library isn\'t available yet. Unless you purposefully added the stub libraries to the search path, please run the build script with JULIA_DEBUG=CUDAdrv and file a bug report.Even if the build fails, CUDAdrv.jl should always be loadable. This simplifies use by downstream packages, until there is proper language support for conditional modules. You can check whether the package has been built properly by inspecting the CUDAdrv.configured global variable."
},

{
    "location": "man/usage/#",
    "page": "Usage",
    "title": "Usage",
    "category": "page",
    "text": ""
},

{
    "location": "man/usage/#Usage-1",
    "page": "Usage",
    "title": "Usage",
    "category": "section",
    "text": "Quick start:using CUDAdrv\n\ndev = CuDevice(0)\nctx = CuContext(dev)\n\n# code that does GPU computations\n\ndestroy!(ctx)\n\n# output\nTo enable debug logging, launch Julia with the JULIA_DEBUG environment variable set to CUDAdrv.DocTestSetup = quote\n    using CUDAdrv\n\n    dev = CuDevice(0)\n    ctx = CuContext(dev)\nend"
},

{
    "location": "man/usage/#Automatic-memory-management-1",
    "page": "Usage",
    "title": "Automatic memory management",
    "category": "section",
    "text": "Except for the encapsulating context, destroy or unload calls are never needed. Objects are registered with the Julia garbage collector, and are automatically finalized when they go out of scope.However, many CUDA API functions implicitly depend on global state, such as the current active context. The wrapper needs to model those dependencies in order for objects not to get destroyed before any dependent object is. If we fail to model these dependency relations, API calls might randomly fail, eg. in the case of a missing context dependency with a INVALID_CONTEXT or CONTEXT_IS_DESTROYED error message. File a bug report if that happens."
},

{
    "location": "man/usage/#Device-memory-1",
    "page": "Usage",
    "title": "Device memory",
    "category": "section",
    "text": "Device memory is represented as Buffer objects, which can be allocated or initialized from existing arrays:A   = zeros(Float32,3,4)\nd_A = Mem.upload(A);\ntypeof(d_A)\n\n# output\n\nCUDAdrv.Mem.BufferA variety of methods are defined to work with buffers, however, these are all low-level methods. Use the CuArrays.jl package for a higher-level array abstraction."
},

{
    "location": "man/usage/#Modules-and-custom-kernels-1",
    "page": "Usage",
    "title": "Modules and custom kernels",
    "category": "section",
    "text": "This will not teach you about CUDA programming; for that, please refer to the CUDA documentation and other online sources."
},

{
    "location": "man/usage/#Compiling-your-own-modules-1",
    "page": "Usage",
    "title": "Compiling your own modules",
    "category": "section",
    "text": "You can write and use your own custom kernels, first writing a .cu file and compiling it as a ptx module. On Linux, compilation would look something like this:nvcc -ptx mycudamodule.cuYou can specify that the code should be compiled for compute capability 2.0 devices or higher using:nvcc -ptx -gencode=arch=compute_20,code=sm_20 mycudamodule.cuIf you want to write code that will support multiple datatypes (e.g., Float32 and Float64), it\'s recommended that you use C++ and write your code using templates. Then use extern C to instantiate bindings for each datatype. For example:template <typename T>\n__device__ void kernel_function1(T *data) {\n    // Code goes here\n}\ntemplate <typename T1, typename T2>\n__device__ void kernel_function2(T1 *data1, T2 *data2) {\n    // Code goes here\n}\n\nextern \"C\"\n{\n    void __global__ kernel_function1_float(float *data) {kernel_function1(data);}\n    void __global__ kernel_function1_double(double *data) {kernel_function1(data);}\n    void __global__ kernel_function2_int_float(int *data1, float *data2) {kernel_function2(data1,data2);}\n}"
},

{
    "location": "man/usage/#Initializing-and-freeing-PTX-modules-1",
    "page": "Usage",
    "title": "Initializing and freeing PTX modules",
    "category": "section",
    "text": "To easily make your kernels available, the recommended approach is to define something analogous to the following for each ptx module (this example uses the kernels described in the previous section):module MyCudaModule\n\nimport CUDAdrv\nimport CUDAdrv: CuModule, CuModuleFile, CuFunction, cudacall\n\nexport function1\n\nconst ptxdict = Dict()\nconst mdlist = Array{CuModule}(0)\n\nfunction mdinit(devlist)\n    global ptxdict\n    global mdlist\n    isempty(mdlist) || error(\"mdlist is not empty\")\n    for dev in devlist\n        CuDevice(dev)\n        md = CuModuleFile(\"mycudamodule.ptx\")\n\n        ptxdict[(\"function1\", Float32)] = CuFunction(md, \"kernel_function1_float\")\n        ptxdict[(\"function1\", Float64)] = CuFunction(md, \"kernel_function1_double\")\n        ptxdict[(\"function2\", Int32, Float32)] = CuFunction(md, \"kernel_function2_int_float\")\n\n        push!(mdlist, md)\n    end\nend\n\nmdclose() = (empty!(mdlist); empty!(ptxdict))\n\nfunction finit()\n  mdclose()\nend\n\nfunction init(devlist)\n  mdinit(devlist)\nend\n\nfunction function1(griddim::CuDim, blockdim::CuDim, data::CuArray{T}) where T\n    cufunction1 = ptxdict[(\"function1\", T)]\n    cudacall(cufunction1, griddim, blockdim, (Ptr{T},), data)\nend\n\n...\n\nend  # MyCudaModuleUsage will look something like the following:gpuid = 0\ndev = CuDevice(gpuid) # Or the ID of the GPU you want, if you have many of them\nctx = CuContext(dev)\n\nMyCudaModule.init(gpuid)\n# Code that uses functions from your MyCudaModule\nMyCudaModule.finit()\n\ndestroy!(ctx)"
},

{
    "location": "man/usage/#Other-notes-1",
    "page": "Usage",
    "title": "Other notes",
    "category": "section",
    "text": ""
},

{
    "location": "man/usage/#Memory-storage-order-1",
    "page": "Usage",
    "title": "Memory storage order",
    "category": "section",
    "text": "Julia convention is that matrices are stored in column-major order, whereas C (and CUDA) use row-major. For efficiency this wrapper avoids reordering memory, so that the linear sequence of addresses is the same between main memory and the GPU. For most usages, this is probably what you want.However, for the purposes of linear algebra, this effectively means that one is storing the transpose of matrices on the GPU. Keep this in mind when manipulating code on your GPU kernels."
},

{
    "location": "lib/api/#",
    "page": "API wrappers",
    "title": "API wrappers",
    "category": "page",
    "text": ""
},

{
    "location": "lib/api/#API-wrappers-1",
    "page": "API wrappers",
    "title": "API wrappers",
    "category": "section",
    "text": "This section lists the package\'s public functionality that directly corresponds to functionality of the CUDA driver API. In general, the abstractions stay close to those of the CUDA driver API, so for more information on certain library calls you can consult the CUDA driver API reference.The documentation is grouped according to the modules of the driver API."
},

{
    "location": "lib/api/#CUDAdrv.vendor",
    "page": "API wrappers",
    "title": "CUDAdrv.vendor",
    "category": "function",
    "text": "Returns a string identifying the vendor of your CUDA driver.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Installation-properties-1",
    "page": "API wrappers",
    "title": "Installation properties",
    "category": "section",
    "text": "CUDAdrv.vendor"
},

{
    "location": "lib/api/#CUDAdrv.init",
    "page": "API wrappers",
    "title": "CUDAdrv.init",
    "category": "function",
    "text": "Initialize the CUDA driver API.\n\nThis function is automatically called upon loading the package. You should not have to call this manually.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Initialization-1",
    "page": "API wrappers",
    "title": "Initialization",
    "category": "section",
    "text": "CUDAdrv.init"
},

{
    "location": "lib/api/#CUDAdrv.CuError",
    "page": "API wrappers",
    "title": "CUDAdrv.CuError",
    "category": "type",
    "text": "CuError(code::Integer)\nCuError(code::Integer, info::String)\n\nCreate a CUDA error object with error code code. The optional info parameter indicates whether extra information, such as error logs, is known.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.name-Tuple{CuError}",
    "page": "API wrappers",
    "title": "CUDAdrv.name",
    "category": "method",
    "text": "name(err::CuError)\n\nGets the string representation of an error code.\n\nThis name can often be used as a symbol in source code to get an instance of this error. For example:\n\njulia> using CUDAdrv\n\njulia> err = CuError(1)\nCuError(1, ERROR_INVALID_VALUE)\n\njulia> name(err)\n\"ERROR_INVALID_VALUE\"\n\njulia> CUDAdrv.ERROR_INVALID_VALUE\nCuError(1, ERROR_INVALID_VALUE)\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.description-Tuple{CuError}",
    "page": "API wrappers",
    "title": "CUDAdrv.description",
    "category": "method",
    "text": "description(err::CuError)\n\nGets the string description of an error code.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Error-Handling-1",
    "page": "API wrappers",
    "title": "Error Handling",
    "category": "section",
    "text": "CUDAdrv.CuError\nCUDAdrv.name(::CuError)\nCUDAdrv.description(::CuError)"
},

{
    "location": "lib/api/#CUDAdrv.version-Tuple{}",
    "page": "API wrappers",
    "title": "CUDAdrv.version",
    "category": "method",
    "text": "version()\n\nReturns the CUDA version as reported by the driver.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Version-Management-1",
    "page": "API wrappers",
    "title": "Version Management",
    "category": "section",
    "text": "CUDAdrv.version()"
},

{
    "location": "lib/api/#CUDAdrv.CuDevice",
    "page": "API wrappers",
    "title": "CUDAdrv.CuDevice",
    "category": "type",
    "text": "CuDevice(i::Integer)\n\nGet a handle to a compute device.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.devices",
    "page": "API wrappers",
    "title": "CUDAdrv.devices",
    "category": "function",
    "text": "devices()\n\nGet an iterator for the compute devices.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.name-Tuple{CuDevice}",
    "page": "API wrappers",
    "title": "CUDAdrv.name",
    "category": "method",
    "text": "name(dev::CuDevice)\n\nReturns an identifier string for the device.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.totalmem-Tuple{CuDevice}",
    "page": "API wrappers",
    "title": "CUDAdrv.totalmem",
    "category": "method",
    "text": "totalmem(dev::CuDevice)\n\nReturns the total amount of memory (in bytes) on the device.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.attribute",
    "page": "API wrappers",
    "title": "CUDAdrv.attribute",
    "category": "function",
    "text": "attribute(dev::CuDevice, code)\n\nReturns information about the device.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.capability-Tuple{CuDevice}",
    "page": "API wrappers",
    "title": "CUDAdrv.capability",
    "category": "method",
    "text": "capability(dev::CuDevice)\n\nReturns the compute capability of the device.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.warpsize-Tuple{CuDevice}",
    "page": "API wrappers",
    "title": "CUDAdrv.warpsize",
    "category": "method",
    "text": "warpsize(dev::CuDevice)\n\nReturns the warp size (in threads) of the device.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Device-Management-1",
    "page": "API wrappers",
    "title": "Device Management",
    "category": "section",
    "text": "CUDAdrv.CuDevice\nCUDAdrv.devices\nCUDAdrv.name(::CuDevice)\nCUDAdrv.totalmem(::CuDevice)\nCUDAdrv.attributeCertain common attributes are exposed by additional convenience functions:CUDAdrv.capability(::CuDevice)\nCUDAdrv.warpsize(::CuDevice)"
},

{
    "location": "lib/api/#CUDAdrv.CuContext",
    "page": "API wrappers",
    "title": "CUDAdrv.CuContext",
    "category": "type",
    "text": "CuContext(dev::CuDevice, flags::CUctx_flags=SCHED_AUTO)\nCuContext(f::Function, ...)\n\nCreate a CUDA context for device. A context on the GPU is analogous to a process on the CPU, with its own distinct address space and allocated resources. When a context is destroyed, the system cleans up the resources allocated to it.\n\nContexts are unique instances which need to be destroyed after use. For automatic management, prefer the do block syntax, which implicitly calls destroy.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.destroy!-Tuple{CuContext}",
    "page": "API wrappers",
    "title": "CUDAdrv.destroy!",
    "category": "method",
    "text": "destroy!(ctx::CuContext)\n\nMark a context for destruction.\n\nThis does not immediately destroy the context, as there might still be dependent resources which have not been collected yet. The context will get freed as soon as all outstanding instances have been finalized.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.CuCurrentContext",
    "page": "API wrappers",
    "title": "CUDAdrv.CuCurrentContext",
    "category": "function",
    "text": "CuCurrentContext()\n\nReturn the current context, or nothing if there is no active context.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.activate-Tuple{CuContext}",
    "page": "API wrappers",
    "title": "CUDAdrv.activate",
    "category": "method",
    "text": "activate(ctx::CuContext)\n\nBinds the specified CUDA context to the calling CPU thread.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.synchronize-Tuple{CuContext}",
    "page": "API wrappers",
    "title": "CUDAdrv.synchronize",
    "category": "method",
    "text": "synchronize(ctx::CuContext=CuCurrentContext())\n\nBlock for a context\'s tasks to complete.\n\nThe ctx parameter defaults to the current active context.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.device-Tuple{CuContext}",
    "page": "API wrappers",
    "title": "CUDAdrv.device",
    "category": "method",
    "text": "device()\ndevice(ctx::Cucontext)\n\nReturns the device for the current context. The optional ctx parameter is to make sure that the current context is really active, and hence the returned device is valid.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Context-Management-1",
    "page": "API wrappers",
    "title": "Context Management",
    "category": "section",
    "text": "CUDAdrv.CuContext\nCUDAdrv.destroy!(::CuContext)\nCUDAdrv.CuCurrentContext\nCUDAdrv.activate(::CuContext)\nCUDAdrv.synchronize(::CuContext)\nCUDAdrv.device(::CuContext)"
},

{
    "location": "lib/api/#CUDAdrv.CuPrimaryContext",
    "page": "API wrappers",
    "title": "CUDAdrv.CuPrimaryContext",
    "category": "type",
    "text": "CuPrimaryContext(dev::CuDevice)\n\nCreate a primary CUDA context for a given device.\n\nEach primary context is unique per device and is shared with CUDA runtime API. It is meant for interoperability with (applications using) the runtime API.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.CuContext-Tuple{CuPrimaryContext}",
    "page": "API wrappers",
    "title": "CUDAdrv.CuContext",
    "category": "method",
    "text": "CuContext(pctx::CuPrimaryContext)\nCuContext(f::Function, pctx::CuPrimaryContext)\n\nRetain the primary context on the GPU, returning a context compatible with the driver API. The primary context will be released when the returned driver context is finalized. For that reason, it is advised to use this function with do block syntax.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.isactive-Tuple{CuPrimaryContext}",
    "page": "API wrappers",
    "title": "CUDAdrv.isactive",
    "category": "method",
    "text": "isactive(pctx::CuPrimaryContext)\n\nQuery whether a primary context is active.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.flags-Tuple{CuPrimaryContext}",
    "page": "API wrappers",
    "title": "CUDAdrv.flags",
    "category": "method",
    "text": "flags(pctx::CuPrimaryContext)\n\nQuery the flags of a primary context.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.setflags!-Tuple{CuPrimaryContext,CUDAdrv.CUctx_flags}",
    "page": "API wrappers",
    "title": "CUDAdrv.setflags!",
    "category": "method",
    "text": "setflags!(pctx::CuPrimaryContext)\n\nSet the flags of a primary context.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.unsafe_reset!-Tuple{CuPrimaryContext,Bool}",
    "page": "API wrappers",
    "title": "CUDAdrv.unsafe_reset!",
    "category": "method",
    "text": "unsafe_reset!(pctx::CuPrimaryContext, [checked::Bool=true])\n\nExplicitly destroys and cleans up all resources associated with a device\'s primary context in the current process. Note that this forcibly invalidates all contexts derived from this primary context, and as a result outstanding resources might become invalid.\n\nIt is normally unnecessary to call this function, as resource are automatically freed when contexts go out of scope. In the case of primary contexts, they are collected when all contexts derived from that primary context have gone out of scope.\n\nThe checked argument determines whether to verify that the primary context has become inactive after resetting the derived driver contexts. This may not be possible, eg. if the CUDA runtime API itself has retained an additional context instance.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Primary-Context-Management-1",
    "page": "API wrappers",
    "title": "Primary Context Management",
    "category": "section",
    "text": "CUDAdrv.CuPrimaryContext\nCUDAdrv.CuContext(::CuPrimaryContext)\nCUDAdrv.isactive(::CuPrimaryContext)\nCUDAdrv.flags(::CuPrimaryContext)\nCUDAdrv.setflags!(::CuPrimaryContext, ::CUDAdrv.CUctx_flags)\nCUDAdrv.unsafe_reset!(::CuPrimaryContext, ::Bool)"
},

{
    "location": "lib/api/#CUDAdrv.CuModule",
    "page": "API wrappers",
    "title": "CUDAdrv.CuModule",
    "category": "type",
    "text": "CuModule(data, options::Dict{CUjit_option,Any})\nCuModuleFile(path, options::Dict{CUjit_option,Any})\n\nCreate a CUDA module from a data, or a file containing data. The data may be PTX code, a CUBIN, or a FATBIN.\n\nThe options is an optional dictionary of JIT options and their respective value.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Module-Management-1",
    "page": "API wrappers",
    "title": "Module Management",
    "category": "section",
    "text": "CUDAdrv.CuModule"
},

{
    "location": "lib/api/#CUDAdrv.CuFunction",
    "page": "API wrappers",
    "title": "CUDAdrv.CuFunction",
    "category": "type",
    "text": "CuFunction(mod::CuModule, name::String)\n\nAcquires a function handle from a named function in a module.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Function-Management-1",
    "page": "API wrappers",
    "title": "Function Management",
    "category": "section",
    "text": "CUDAdrv.CuFunction"
},

{
    "location": "lib/api/#CUDAdrv.CuGlobal",
    "page": "API wrappers",
    "title": "CUDAdrv.CuGlobal",
    "category": "type",
    "text": "CuGlobal{T}(mod::CuModule, name::String)\n\nAcquires a typed global variable handle from a named global in a module.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Base.eltype-Tuple{CuGlobal}",
    "page": "API wrappers",
    "title": "Base.eltype",
    "category": "method",
    "text": "eltype(var::CuGlobal)\n\nReturn the element type of a global variable object.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Base.get-Tuple{CuGlobal}",
    "page": "API wrappers",
    "title": "Base.get",
    "category": "method",
    "text": "get(var::CuGlobal)\n\nReturn the current value of a global variable.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.set-Union{Tuple{T}, Tuple{CuGlobal{T},T}} where T",
    "page": "API wrappers",
    "title": "CUDAdrv.set",
    "category": "method",
    "text": "set(var::CuGlobal{T}, T)\n\nSet the value of a global variable to val\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Global-Variable-Management-1",
    "page": "API wrappers",
    "title": "Global Variable Management",
    "category": "section",
    "text": "CUDAdrv.CuGlobal\nCUDAdrv.eltype(::CuGlobal)\nCUDAdrv.get(::CuGlobal)\nCUDAdrv.set{T}(::CuGlobal{T}, ::T)"
},

{
    "location": "lib/api/#CUDAdrv.CuLink",
    "page": "API wrappers",
    "title": "CUDAdrv.CuLink",
    "category": "type",
    "text": "CuLink()\n\nCreates a pending JIT linker invocation.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.add_data!",
    "page": "API wrappers",
    "title": "CUDAdrv.add_data!",
    "category": "function",
    "text": "add_data!(link::CuLink, name::String, code::String)\n\nAdd PTX code to a pending link operation.\n\n\n\n\n\nadd_data!(link::CuLink, name::String, data::Vector{UInt8}, type::CUjit_input)\n\nAdd object code to a pending link operation.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.add_file!",
    "page": "API wrappers",
    "title": "CUDAdrv.add_file!",
    "category": "function",
    "text": "add_file!(link::CuLink, path::String, typ::CUjit_input)\n\nAdd data from a file to a link operation. The argument typ indicates the type of the contained data.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.CuLinkImage",
    "page": "API wrappers",
    "title": "CUDAdrv.CuLinkImage",
    "category": "type",
    "text": "The result of a linking operation.\n\nThis object keeps its parent linker object alive, as destroying a linker destroys linked images too.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.complete",
    "page": "API wrappers",
    "title": "CUDAdrv.complete",
    "category": "function",
    "text": "complete(link::CuLink)\n\nComplete a pending linker invocation, returning an output image.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.CuModule-Tuple{CUDAdrv.CuLinkImage,Vararg{Any,N} where N}",
    "page": "API wrappers",
    "title": "CUDAdrv.CuModule",
    "category": "method",
    "text": "CuModule(img::CuLinkImage, ...)\nCuModule(f::Function, img::CuLinkImage, ...)\n\nCreate a CUDA module from a completed linking operation. Options from CuModule apply.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Linker-1",
    "page": "API wrappers",
    "title": "Linker",
    "category": "section",
    "text": "CUDAdrv.CuLink\nCUDAdrv.add_data!\nCUDAdrv.add_file!\nCUDAdrv.CuLinkImage\nCUDAdrv.complete\nCUDAdrv.CuModule(::CUDAdrv.CuLinkImage, args...)"
},

{
    "location": "lib/api/#CUDAdrv.Mem.alloc",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.alloc",
    "category": "function",
    "text": "Allocate linear memory on the device and return a buffer to the allocated memory. The allocated memory is suitably aligned for any kind of variable. The memory will not be freed automatically, use free(::Buffer) for that.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.Mem.free",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.free",
    "category": "function",
    "text": "Free device memory.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.Mem.set!",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.set!",
    "category": "function",
    "text": "Initialize device memory with a repeating value.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.Mem.upload",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.upload",
    "category": "function",
    "text": "Upload memory from host to device. Executed asynchronously on stream if async is true.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.Mem.upload!",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.upload!",
    "category": "function",
    "text": "Upload memory from host to device. Executed asynchronously on stream if async is true.\n\n\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.Mem.download",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.download",
    "category": "function",
    "text": "Download memory from device to host. Executed asynchronously on stream if async is true.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.Mem.download!",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.download!",
    "category": "function",
    "text": "Download memory from device to host. Executed asynchronously on stream if async is true.\n\n\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.Mem.transfer",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.transfer",
    "category": "function",
    "text": "Transfer memory from device to device. Executed asynchronously on stream if async is true.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.Mem.transfer!",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.transfer!",
    "category": "function",
    "text": "Transfer memory from device to device. Executed asynchronously on stream if async is true.\n\n\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Memory-Management-1",
    "page": "API wrappers",
    "title": "Memory Management",
    "category": "section",
    "text": "CUDAdrv.Mem.alloc\nCUDAdrv.Mem.free\nCUDAdrv.Mem.set!\nCUDAdrv.Mem.upload\nCUDAdrv.Mem.upload!\nCUDAdrv.Mem.download\nCUDAdrv.Mem.download!\nCUDAdrv.Mem.transfer\nCUDAdrv.Mem.transfer!"
},

{
    "location": "lib/api/#CUDAdrv.Mem.info",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.info",
    "category": "function",
    "text": "info()\n\nReturns a tuple of two integers, indicating respectively the free and total amount of memory (in bytes) available for allocation by the CUDA context.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.Mem.total",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.total",
    "category": "function",
    "text": "total()\n\nReturns the total amount of memory (in bytes), available for allocation by the CUDA context.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.Mem.used",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.used",
    "category": "function",
    "text": "used()\n\nReturns the used amount of memory (in bytes), allocated by the CUDA context.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.Mem.free-Tuple{}",
    "page": "API wrappers",
    "title": "CUDAdrv.Mem.free",
    "category": "method",
    "text": "free()\n\nReturns the free amount of memory (in bytes), available for allocation by the CUDA context.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Memory-info-1",
    "page": "API wrappers",
    "title": "Memory info",
    "category": "section",
    "text": "CUDAdrv.Mem.info\nCUDAdrv.Mem.total\nCUDAdrv.Mem.used\nCUDAdrv.Mem.free()"
},

{
    "location": "lib/api/#CUDAdrv.CuStream",
    "page": "API wrappers",
    "title": "CUDAdrv.CuStream",
    "category": "type",
    "text": "CuStream(flags=0)\n\nCreate a CUDA stream.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.CuDefaultStream",
    "page": "API wrappers",
    "title": "CUDAdrv.CuDefaultStream",
    "category": "function",
    "text": "CuDefaultStream()\n\nReturn the default stream.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.synchronize-Tuple{CuStream}",
    "page": "API wrappers",
    "title": "CUDAdrv.synchronize",
    "category": "method",
    "text": "synchronize(s::CuStream)\n\nWait until a stream\'s tasks are completed.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Stream-Management-1",
    "page": "API wrappers",
    "title": "Stream Management",
    "category": "section",
    "text": "CUDAdrv.CuStream\nCUDAdrv.CuDefaultStream\nCUDAdrv.synchronize(::CuStream)"
},

{
    "location": "lib/api/#CUDAdrv.CuEvent",
    "page": "API wrappers",
    "title": "CUDAdrv.CuEvent",
    "category": "type",
    "text": "CuEvent()\n\nCreate a new CUDA event.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.record",
    "page": "API wrappers",
    "title": "CUDAdrv.record",
    "category": "function",
    "text": "record(e::CuEvent, stream=CuDefaultStream())\n\nRecord an event on a stream.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.synchronize-Tuple{CuEvent}",
    "page": "API wrappers",
    "title": "CUDAdrv.synchronize",
    "category": "method",
    "text": "synchronize(e::CuEvent)\n\nWaits for an event to complete.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.elapsed",
    "page": "API wrappers",
    "title": "CUDAdrv.elapsed",
    "category": "function",
    "text": "elapsed(start::CuEvent, stop::CuEvent)\n\nComputes the elapsed time between two events (in seconds).\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.@elapsed",
    "page": "API wrappers",
    "title": "CUDAdrv.@elapsed",
    "category": "macro",
    "text": "@elapsed stream ex\n@elapsed ex\n\nA macro to evaluate an expression, discarding the resulting value, instead returning the number of seconds it took to execute on the GPU, as a floating-point number.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Event-Management-1",
    "page": "API wrappers",
    "title": "Event Management",
    "category": "section",
    "text": "CUDAdrv.CuEvent\nCUDAdrv.record\nCUDAdrv.synchronize(::CuEvent)\nCUDAdrv.elapsed\nCUDAdrv.@elapsed"
},

{
    "location": "lib/api/#CUDAdrv.CuDim3",
    "page": "API wrappers",
    "title": "CUDAdrv.CuDim3",
    "category": "type",
    "text": "CuDim3(x)\n\nCuDim3((x,))\nCuDim3((x, y))\nCuDim3((x, y, x))\n\nA type used to specify dimensions, consisting of 3 integers for respectively the x, y and z dimension. Unspecified dimensions default to 1.\n\nOften accepted as argument through the CuDim type alias, eg. in the case of cudacall or launch, allowing to pass dimensions as a plain integer or a tuple without having to construct an explicit CuDim3 object.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.cudacall",
    "page": "API wrappers",
    "title": "CUDAdrv.cudacall",
    "category": "function",
    "text": "cudacall(f::CuFunction, types, values...;\n         blocks::CuDim, threads::CuDim, shmem=0, stream=CuDefaultStream())\n\nccall-like interface for launching a CUDA function f on a GPU.\n\nFor example:\n\nvadd = CuFunction(md, \"vadd\")\na = rand(Float32, 10)\nb = rand(Float32, 10)\nad = Mem.upload(a)\nbd = Mem.upload(b)\nc = zeros(Float32, 10)\ncd = Mem.alloc(c)\n\ncudacall(vadd, (Ptr{Cfloat},Ptr{Cfloat},Ptr{Cfloat}), ad, bd, cd;\n         threads=10)\nMem.download!(c, cd)\n\nThe blocks and threads arguments control the launch configuration, and should both consist of either an integer, or a tuple of 1 to 3 integers (omitted dimensions default to 1). The types argument can contain both a tuple of types, and a tuple type, the latter being slightly faster.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.launch",
    "page": "API wrappers",
    "title": "CUDAdrv.launch",
    "category": "function",
    "text": "launch(f::CuFunction, blocks::CuDim, threads::CuDim, args...;\n       shmem=0, stream=CuDefaultStream())\nlaunch(f::CuFunction, blocks::CuDim, threads::CuDim, shmem::Int, stream::CuStream, args...)\n\nLow-level call to launch a CUDA function f on the GPU, using blocks and threads as respectively the grid and block configuration. Dynamic shared memory is allocated according to shmem, and the kernel is launched on stream stream.\n\nArguments to a kernel should either be bitstype, in which case they will be copied to the internal kernel parameter buffer, or a pointer to device memory.\n\nThis is a low-level call, prefer to use cudacall instead.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Execution-Control-1",
    "page": "API wrappers",
    "title": "Execution Control",
    "category": "section",
    "text": "CUDAdrv.CuDim3\nCUDAdrv.cudacall\nCUDAdrv.launch"
},

{
    "location": "lib/api/#CUDAdrv.@profile",
    "page": "API wrappers",
    "title": "CUDAdrv.@profile",
    "category": "macro",
    "text": "@profile ex\n\nRun expressions while activating the CUDA profiler.\n\nNote that this API is used to programmatically control the profiling granularity by allowing profiling to be done only on selective pieces of code. It does not perform any profiling on itself, you need external tools for that.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.Profile.start",
    "page": "API wrappers",
    "title": "CUDAdrv.Profile.start",
    "category": "function",
    "text": "start()\n\nEnables profile collection by the active profiling tool for the current context. If profiling is already enabled, then this call has no effect.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#CUDAdrv.Profile.stop",
    "page": "API wrappers",
    "title": "CUDAdrv.Profile.stop",
    "category": "function",
    "text": "stop()\n\nDisables profile collection by the active profiling tool for the current context. If profiling is already disabled, then this call has no effect.\n\n\n\n\n\n"
},

{
    "location": "lib/api/#Profiler-Control-1",
    "page": "API wrappers",
    "title": "Profiler Control",
    "category": "section",
    "text": "CUDAdrv.@profile\nCUDAdrv.Profile.start\nCUDAdrv.Profile.stop"
},

]}
