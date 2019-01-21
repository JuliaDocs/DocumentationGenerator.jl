var documenterSearchIndex = {"docs": [

{
    "location": "#PyCall.PyArray",
    "page": "Home",
    "title": "PyCall.PyArray",
    "category": "type",
    "text": "PyArray(o::PyObject)\n\nThis converts an ndarray object o to a PyArray.\n\nThis implements a nocopy wrapper to a NumPy array (currently of only numeric types only).\n\nIf you are using pycall and the function returns an ndarray, you can use PyArray as the return type to directly receive a PyArray.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.PyDict",
    "page": "Home",
    "title": "PyCall.PyDict",
    "category": "type",
    "text": "PyDict(o::PyObject)\nPyDict(d::Dict{K,V})\n\nThis returns a PyDict, which is a no-copy wrapper around a Python dictionary.\n\nAlternatively, you can specify the return type of a pycall as PyDict.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.PyObject",
    "page": "Home",
    "title": "PyCall.PyObject",
    "category": "type",
    "text": "PyObject(juliavar)\n\nThis converts a julia variable to a PyObject, which is a reference to a Python object. You can convert back to native julia types using convert(T, o::PyObject), or using PyAny(o).\n\nGiven o::PyObject, o[:attribute] is equivalent to o.attribute in Python, with automatic type conversion.\n\nGiven o::PyObject, get(o, key) is equivalent to o[key] in Python, with automatic type conversion.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.PyVector",
    "page": "Home",
    "title": "PyCall.PyVector",
    "category": "type",
    "text": "PyVector(o::PyObject)\n\nThis returns a PyVector object, which is a wrapper around an arbitrary Python list or sequence object.\n\nAlternatively, PyVector can be used as the return type for a pycall that returns a sequence object (including tuples).\n\n\n\n\n\n"
},

{
    "location": "#PyCall.PyNULL-Tuple{}",
    "page": "Home",
    "title": "PyCall.PyNULL",
    "category": "method",
    "text": "PyNULL()\n\nReturn a PyObject that has a NULL underlying pointer, i.e. it doesn\'t actually refer to any Python object.\n\nThis is useful for initializing PyObject global variables and array elements before an actual Python object is available.   For example, you might do const myglobal = PyNULL() and later on (e.g. in a module __init__ function), reassign myglobal to point to an actual object with copy!(myglobal, someobject).   This procedure will properly handle Python\'s reference counting (so that the Python object will not be freed until you are done with myglobal).\n\n\n\n\n\n"
},

{
    "location": "#PyCall.PyReverseDims-Tuple{AbstractArray}",
    "page": "Home",
    "title": "PyCall.PyReverseDims",
    "category": "method",
    "text": "PyReverseDims(array)\n\nPasses a Julia array to Python as a NumPy row-major array (rather than Julia\'s native column-major order) with the dimensions reversed (e.g. a 2×3×4 Julia array is passed as a 4×3×2 NumPy row-major array).  This is useful for Python libraries that expect row-major data.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.PyTextIO-Tuple{IO}",
    "page": "Home",
    "title": "PyCall.PyTextIO",
    "category": "method",
    "text": "PyTextIO(io::IO)\nPyObject(io::IO)\n\nJulia IO streams are converted into Python objects implementing the RawIOBase interface, so they can be used for binary I/O in Python\n\n\n\n\n\n"
},

{
    "location": "#PyCall.ispynull-Tuple{PyObject}",
    "page": "Home",
    "title": "PyCall.ispynull",
    "category": "method",
    "text": "ispynull(o::PyObject)\n\nTest where o contains a NULL pointer to a Python object, i.e. whether it is equivalent to a PyNULL() object.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pybuiltin-Tuple{Any}",
    "page": "Home",
    "title": "PyCall.pybuiltin",
    "category": "method",
    "text": "pybuiltin(s::AbstractString)\n\nLook up a string or symbol s among the global Python builtins. If s is a string it returns a PyObject, while if s is a symbol it returns the builtin converted to PyAny.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pybytes-Tuple{Union{DenseArray{UInt8,1}, String}}",
    "page": "Home",
    "title": "PyCall.pybytes",
    "category": "method",
    "text": "pybytes(b::Union{String,DenseVector{UInt8}})\n\nConvert b to a Python bytes object.   This differs from the default PyObject(b) conversion of String to a Python string (which may fail if b does not contain valid Unicode), or from the default conversion of a Vector{UInt8} to a bytearray object (which is mutable, unlike bytes).\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pycall!-Tuple{PyObject,Union{Ptr{PyObject_struct}, PyObject},Union{Tuple{Vararg{Type,N}}, Type} where N,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "PyCall.pycall!",
    "category": "method",
    "text": "pycall!(ret::PyObject, o::Union{PyObject,PyPtr}, returntype::Type, args...; kwargs...)\n\nSet ret to the result of pycall(o, returntype, args...; kwargs) and return convert(returntype, ret). Avoids allocating an extra PyObject for ret. See pycall for other details.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pycall-Tuple{Union{Ptr{PyObject_struct}, PyObject},Union{Tuple{Vararg{Type,N}}, Type} where N,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "PyCall.pycall",
    "category": "method",
    "text": "pycall(o::Union{PyObject,PyPtr}, returntype::TypeTuple, args...; kwargs...)\n\nCall the given Python function (typically looked up from a module) with the given args... (of standard Julia types which are converted automatically to the corresponding Python types if possible), converting the return value to returntype (use a returntype of PyObject to return the unconverted Python object reference, or of PyAny to request an automated conversion)\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pyeval",
    "page": "Home",
    "title": "PyCall.pyeval",
    "category": "function",
    "text": "pyeval(s::AbstractString, returntype::TypeTuple=PyAny, locals=PyDict{AbstractString, PyObject}(),\n                            input_type=Py_eval_input; kwargs...)\n\nThis evaluates s as a Python string and returns the result converted to rtype (which defaults to PyAny). The remaining arguments are keywords that define local variables to be used in the expression.\n\nFor example, pyeval(\"x + y\", x=1, y=2) returns 3.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pyfunction-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "PyCall.pyfunction",
    "category": "method",
    "text": "pyfunction(f, argtypes...; kwtypes...)\n\nCreate a Python object that wraps around the Julia function (or callable object) f.   Unlike PyObject(f), this allows you to specify the argument types that the Julia function expects — giving you more control and potentially better performance.\n\nkwtypes... should be a set of somekeyword=SomeType arguments giving the desired Julia type for each keyword somekeyword.  Unspecified keywords are converted to PyAny (i.e. auto-detected) by default.\n\nThe return value ret = f(...) is still converted back to a Python object by PyObject(ret).   If you want a different return-type conversion than the default of PyObject(ret), you can instead call pyfunctionret.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pyfunctionret-Tuple{Any,Any,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "PyCall.pyfunctionret",
    "category": "method",
    "text": "pyfunctionret(f, returntype, argtypes...; kwtypes...)\n\nLike pyfunction, but also lets you specify the returntype for conversion back to Python.   In particular, if ret = f(...) is the return value of f, then it is converted to Python via PyObject(returntype(ret)).\n\nIf returntype is Any, then ret is not converted to a \"native\" Python type at all, and is instead converted to a \"wrapped\" Julia object in Python.  If returntype is nothing, then the return value is discarded and nothing is returned to Python.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pygui-Tuple{}",
    "page": "Home",
    "title": "PyCall.pygui",
    "category": "method",
    "text": "pygui()\n\nReturn the current GUI toolkit as a symbol.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pygui_start",
    "page": "Home",
    "title": "PyCall.pygui_start",
    "category": "function",
    "text": "pygui_start(gui::Symbol = pygui())\n\nStart the event loop of a certain toolkit.\n\nThe argument gui defaults to the current default GUI, but it could be :wx, :gtk, :gtk3, :tk, or :qt.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pygui_stop",
    "page": "Home",
    "title": "PyCall.pygui_stop",
    "category": "function",
    "text": "pygui_stop(gui::Symbol = pygui())\n\nStop any running event loop for gui. The gui argument defaults to current default GUI.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pyimport-Tuple{AbstractString}",
    "page": "Home",
    "title": "PyCall.pyimport",
    "category": "method",
    "text": "pyimport(s::AbstractString)\n\nImport the Python module s (a string or symbol) and return a pointer to it (a PyObject). Functions or other symbols in the module may then be looked up by s[name] where name is a string (for the raw PyObject) or symbol (for automatic type-conversion). Unlike the @pyimport macro, this does not define a Julia module and members cannot be accessed with s.name\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pyimport_conda",
    "page": "Home",
    "title": "PyCall.pyimport_conda",
    "category": "function",
    "text": "pyimport_conda(modulename, condapkg, [channel])\n\nReturns the result of pyimport(modulename) if possible.   If the module is not found, and PyCall is configured to use the Conda Python distro (via the Julia Conda package), then automatically install condapkg via Conda.add(condapkg) and then re-try the pyimport.   Other Anaconda-based Python installations are also supported as long as their conda program is functioning.\n\nIf PyCall is not using Conda and the pyimport fails, throws an exception with an error message telling the user how to configure PyCall to use Conda for automated installation of the module.\n\nThe third argument, channel is an optional Anaconda \"channel\" to use for installing the package; this is useful for packages that are not included in the default Anaconda package listing.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pyimport_e-Tuple{AbstractString}",
    "page": "Home",
    "title": "PyCall.pyimport_e",
    "category": "method",
    "text": "pyimport_e(s::AbstractString)\n\nLike pyimport(s), but returns an ispynull(o) == true object if the module cannot be imported rather than throwing an error.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pyrepr-Tuple{PyObject}",
    "page": "Home",
    "title": "PyCall.pyrepr",
    "category": "method",
    "text": "pyrepr(o::PyObject)\n\nReturn a string representation of o corresponding to repr(o) in Python.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pystr-Tuple{PyObject}",
    "page": "Home",
    "title": "PyCall.pystr",
    "category": "method",
    "text": "pystr(o::PyObject)\n\nReturn a string representation of o corresponding to str(o) in Python.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pystring-Tuple{PyObject}",
    "page": "Home",
    "title": "PyCall.pystring",
    "category": "method",
    "text": "pystring(o::PyObject)\n\nReturn a string representation of o.  Normally, this corresponds to repr(o) in Python, but unlike repr it should never fail (falling back to str or to printing the raw pointer if necessary).\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pytype_mapping-Tuple{PyObject,Type}",
    "page": "Home",
    "title": "PyCall.pytype_mapping",
    "category": "method",
    "text": "pytype_mapping(pytype, jltype)\n\nGiven a Python type object pytype, tell PyCall to convert it to jltype in PyAny(object) conversions.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pytype_query",
    "page": "Home",
    "title": "PyCall.pytype_query",
    "category": "function",
    "text": "pytype_query(o::PyObject, default=PyObject)\n\nGiven a Python object o, return the corresponding native Julia type (defaulting to default) that we convert o to in PyAny(o) conversions.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pywrap",
    "page": "Home",
    "title": "PyCall.pywrap",
    "category": "function",
    "text": "pywrap(o::PyObject)\n\nThis returns a wrapper w that is an anonymous module which provides (read) access to converted versions of o\'s members as w.member.\n\nFor example, @pyimport module as name is equivalent to const name = pywrap(pyimport(\"module\"))\n\nIf the Python module contains identifiers that are reserved words in Julia (e.g. function), they cannot be accessed as w.member; one must instead use w.pymember(:member) (for the PyAny conversion) or w.pymember(\"member\") (for the raw PyObject).\n\n\n\n\n\n"
},

{
    "location": "#PyCall.__pycall!-Tuple{PyObject,Ptr{PyCall.PyObject_struct},Union{Ptr{PyObject_struct}, PyObject},Union{Ptr{Nothing}, PyObject}}",
    "page": "Home",
    "title": "PyCall.__pycall!",
    "category": "method",
    "text": "Lowest level version of  pycall!(ret, o, ...), assumes pyargsptr and kw have all their args set to Python values, so we can just call the function o. Sets ret.o to the result of the call, and returns ret::PyObject.\n\n\n\n\n\n"
},

{
    "location": "#PyCall._pycall!",
    "page": "Home",
    "title": "PyCall._pycall!",
    "category": "function",
    "text": "Low-level version of pycall!(ret, o, ...) for when kw is already in python friendly format but you don\'t have the python tuple to hold the arguments (pyargsptr). Sets ret.o to the result of the call, and returns ret::PyObject.\n\n\n\n\n\n"
},

{
    "location": "#PyCall._pycall!-Tuple{PyObject,Union{Ptr{PyObject_struct}, PyObject},Any,Any}",
    "page": "Home",
    "title": "PyCall._pycall!",
    "category": "method",
    "text": "Low-level version of pycall!(ret, o, ...; kwargs...) Sets ret.o to the result of the call, and returns ret::PyObject\n\n\n\n\n\n"
},

{
    "location": "#PyCall.anaconda_conda-Tuple{}",
    "page": "Home",
    "title": "PyCall.anaconda_conda",
    "category": "method",
    "text": "anaconda_conda()\n\nReturn the path of the conda program if PyCall is configured to use an Anaconda install (but not the Conda.jl Python), and the empty string otherwise.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.def_py_class-Tuple{AbstractString,Array{T,1} where T}",
    "page": "Home",
    "title": "PyCall.def_py_class",
    "category": "method",
    "text": "def_py_class(type_name::AbstractString, methods::Vector;\n             base_classes=[], getsets::Vector=[])\n\ndef_py_class creates a Python class whose methods are implemented in Julia. @pydef macros expand into a call to this function.\n\nArguments\n\nmethods: a vector of tuples (py_name::String, jl_fun::Function)  py_name will be a method of the Python class, which will call jl_fun\nbase_classes: the Python base classes to inherit from.\n\nReturn value: the created class (::PyTypeObject)\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pyreturn-Tuple{Any}",
    "page": "Home",
    "title": "PyCall.pyreturn",
    "category": "method",
    "text": "pyreturn(x) :: PyPtr\n\nPrepare PyPtr from x for passing it to Python.  If x is already a PyObject, the refcount is incremented.  Otherwise a PyObject wrapping/converted from x is created.\n\n\n\n\n\n"
},

{
    "location": "#PyCall.pystealref!-Tuple{PyObject}",
    "page": "Home",
    "title": "PyCall.pystealref!",
    "category": "method",
    "text": "\"Steal\" a reference from a PyObject: return the raw PyPtr, while setting the corresponding o.o field to NULL so that no decref will be performed when o is garbage collected.  (This means that you can no longer use o.)  Used for passing objects to Python.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [PyCall]\nOrder = [:type, :function]"
},

]}
