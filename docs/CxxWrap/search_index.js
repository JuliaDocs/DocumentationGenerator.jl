var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CxxWrap-1",
    "page": "Readme",
    "title": "CxxWrap",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: CxxWrap) (Image: CxxWrap)This package aims to provide a Boost.Python-like wrapping for C++ types and functions to Julia. The idea is to write the code for the Julia wrapper in C++, and then use a one-liner on the Julia side to make the wrapped C++ library available there.The mechanism behind this package is that functions and types are registered in C++ code that is compiled into a dynamic library. This dynamic library is then loaded into Julia, where the Julia part of this package uses the data provided through a C interface to generate functions accessible from Julia. The functions are passed to Julia either as raw function pointers (for regular C++ functions that  don\'t need argument or return type conversion) or std::functions (for lambda expressions and automatic conversion of arguments and return types). The Julia side of this package wraps all this into Julia methods automatically."
},

{
    "location": "#What\'s-the-difference-with-Cxx.jl?-1",
    "page": "Readme",
    "title": "What\'s the difference with Cxx.jl?",
    "category": "section",
    "text": "With Cxx.jl it is possible to directly access C++ using the @cxx macro from Julia. So when facing the task of wrapping a C++ library in a Julia package, authors now have two options:Use Cxx.jl to write the wrapper package in Julia code (much like one uses ccall for wrapping a C library)\nUse CxxWrap to write the wrapper completely in C++ (and one line of Julia code to load the .so)Boost.Python also uses the latter (C++-only) approach, so translating existing Python bindings based on Boost.Python may be easier using CxxWrap."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Support for C++ functions, member functions and lambdas\nClasses with single inheritance, using abstract base classes on the Julia side\nTrivial C++ classes can be converted to a Julia isbits immutable\nTemplate classes map to parametric types, for the instantiations listed in the wrapper\nAutomatic wrapping of default and copy constructor (mapped to deepcopy) if defined on the wrapped C++ class\nFacilitate calling Julia functions from C++"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Just like any registered package, in pkg mode (] at the REPL)add CxxWrapThis will also install the JlCxx library (in deps/usr relative to the package dir), which is the C++ component of this package. If you want to use existing binaries for this library, set the environment variable JLCXX_DIR to the prefix where libcxxwrap-julia is installed and then add the package or run Pkg.build(\"CxxWrap\")."
},

{
    "location": "#Boost-Python-Hello-World-example-1",
    "page": "Readme",
    "title": "Boost Python Hello World example",
    "category": "section",
    "text": "Let\'s try to reproduce the example from the Boost.Python tutorial. Suppose we want to expose the following C++ function to Julia in a module called CppHello:std::string greet()\n{\n   return \"hello, world\";\n}Using the C++ side of CxxWrap, this can be exposed as follows:#include \"jlcxx/jlcxx.hpp\"\n\nJLCXX_MODULE define_julia_module(jlcxx::Module& mod)\n{\n  mod.method(\"greet\", &greet);\n}Once this code is compiled into a shared library (say libhello.so) it can be used in Julia as follows:# Load the module and generate the functions\nmodule CppHello\n  using CxxWrap\n  @wrapmodule(joinpath(\"path/to/built/lib\",\"libhello\"))\n\n  function __init__()\n    @initcxx\n  end\nend\n\n# Call greet and show the result\n@show CppHello.greet()The code for this example can be found in [hello.cpp] in the examples directory of the libcxx-julia project and test/hello.jl. Note that the __init__ function is necessary to support precompilation, which is on by default in Julia 1.0."
},

{
    "location": "#Hello-World-example-on-Windows-1",
    "page": "Readme",
    "title": "Hello World example on Windows",
    "category": "section",
    "text": "On Windows, it is not necessary to create the Visual Studio project by hand: CMake creates a .sln file in the deps/build directory of the package, and that can be opened using Visual Studio to edit the source files and so on. The drawback is that this file gets overwritten if you add a new C++ source file for example.If creating the Visual Studio project by hand is preferred, however, the following are the steps (assume Julia has been installed to C:\\JuliaPro).In Visual Studio 2015, New Project, Installed | Templates | Other Languages | Visual C++ | Win32 | Win32 Project. Type in the name \"CppHello\" and choose Location of the project.\nIn the Win32 Application Wizard, click Next, then select Application Type as DLL; in Additional options uncheck Security Development Lifecycle (SDL) checks. Then click Finish.\nChoose the active configuration as Release; choose x86 or x64 to match the CPU and the Julia version installed.\nRight click on the project name in the Solution Explorer, and choose Properties. Make the following changes (modify directory names as needed to match the actual Julia installation path):\nC/C++ | General | Additional Include Directories: insert \"C:\\JuliaPro\\Julia-0.5.1\\include\\julia;C:\\JuliaPro\\pkgs-0.5.1.1\\v0.5\\CxxWrap\\deps\\usr\\include;\"\nC/C++ | Preprocessor | Preprocessor Definitions: insert \"JULIAENABLETHREADING;\" before \"%(PreprocessorDefinitions)\"\nLinker | Input | Additional Dependencies: insert \"C:\\JuliaPro\\pkgs-0.5.1.1\\v0.5\\CxxWrap\\deps\\usr\\lib\\jlcxx.lib;C:\\JuliaPro\\Julia-0.5.1\\lib\\libjulia.dll.a;\" before \"%(AdditionalIncludeDirectories)\"\nClick OK to exit the CppHello Property Pages.\nIn Solution Explorer, under Source Files, double click \"CppHello.cpp\" to open it. Append the following code at the end and save:#include \"jlcxx/jlcxx.hpp\"\n\nstd::string greet()\n{\n  return \"hello, world\";\n}\n\nJLCXX_MODULE define_julia_module(jlcxx::Module& mod)\n{\n  mod.method(\"greet\", &greet);\n}Build the CppHello project.\nLocate the resulted CppHello.dll file under the Release folder. For a 64-bit build, the path is the project folder\\x64\\Release\\CppHello.dll."
},

{
    "location": "#Module-entry-point-1",
    "page": "Readme",
    "title": "Module entry point",
    "category": "section",
    "text": "Above, we defined the module entry point as a function JLCXX_MODULE define_julia_module(jlcxx::Module& mod). In the general case, there may be multiple modules defined in a single library, and each should have its own entry point, called within the appropriate module:JLCXX_MODULE define_module_a(jlcxx::Module& mod)\n{\n  // add stuff for A\n}\n\nJLCXX_MODULE define_module_b(jlcxx::Module& mod)\n{\n  // add stuff for B\n}In Julia, the name of the entry point must now be specified explicitly:module A\n  using CxxWrap\n  @wrapmodule(\"mylib.so\",:define_module_a)\nend\n\nmodule B\n  using CxxWrap\n  @wrapmodule(\"mylib.so\",:define_module_b)\nend"
},

{
    "location": "#More-extensive-example-and-function-call-performance-1",
    "page": "Readme",
    "title": "More extensive example and function call performance",
    "category": "section",
    "text": "A more extensive example, including wrapping a C++11 lambda and conversion for arrays can be found in deps/src/jlcxx/examples/functions.cpp and test/functions.jl. This test also includes some performance measurements, showing that the function call overhead is the same as using ccall on a C function if the C++ function is a regular function and does not require argument conversion. When std::function is used (e.g. for C++ lambdas) extra overhead appears, as expected."
},

{
    "location": "#Exposing-classes-1",
    "page": "Readme",
    "title": "Exposing classes",
    "category": "section",
    "text": "Consider the following C++ class to be wrapped:struct World\n{\n  World(const std::string& message = \"default hello\") : msg(message){}\n  void set(const std::string& msg) { this->msg = msg; }\n  std::string greet() { return msg; }\n  std::string msg;\n  ~World() { std::cout << \"Destroying World with message \" << msg << std::endl; }\n};Wrapped in the an entry point function as before and defining a module CppTypes, the code for exposing the type and some methods to Julia is:types.add_type<World>(\"World\")\n  .constructor<const std::string&>()\n  .method(\"set\", &World::set)\n  .method(\"greet\", &World::greet);Here, the first line just adds the type. The second line adds the non-default constructor taking a string. Finally, the two method calls add member functions, using a pointer-to-member. The member functions become free functions in Julia, taking their object as the first argument. This can now be used in Julia asw = CppTypes.World()\n@test CppTypes.greet(w) == \"default hello\"\nCppTypes.set(w, \"hello\")\n@test CppTypes.greet(w) == \"hello\"The manually added constructor using the constructor function also creates a finalizer. This can be disabled by adding the argument false:types.add_type<World>(\"World\")\n  .constructor<const std::string&>(false);The add_type function actually builds 3 Julia types related to World. The first is an abstract type:abstract type World endThe second is an immutable type (the \"reference type\") with the following structure:struct WorldRef <: World\n  cpp_object::Ptr{Cvoid}\nendIt is an immutable type to be able to refer to C++ values without needing to allocate. This also means there are no finalizers for this kind of type, which is why there is also an equivalent mutable type that is returned by constructors and has a finalize attached that calls delete in C++:mutable struct WorldAllocated <: World\n  cpp_object::Ptr{Cvoid}\nendThis means that the variable w in the above example is of concrete type WorldAllocated and letting it go out of scope may trigger the finalizer and delete the object. When calling a C++ constructor, it is the responsibility of the caller to manage the lifetime of the resulting variable.The above types are used in method generation as follows, considering for example the greet method taking a World argument:greet(w::World) = ccall($fpointer, Any, (Ptr{Cvoid}, WorldRef), $thunk, cconvert(WorldRef, w))Here, the cconvert from WorldAllocated to WorldRef is defined automatically when creating the type.Warning: The ordering of the C++ code matters: types used as function arguments or return types must be added before they are used in a function.The full code for this example and more info on immutables and bits types can be found in deps/src/jlcxx/examples/types.cpp and test/types.jl."
},

{
    "location": "#Checking-for-null-1",
    "page": "Readme",
    "title": "Checking for null",
    "category": "section",
    "text": "Values returned from C++ can be checked for being null using the isnull function."
},

{
    "location": "#Inheritance-1",
    "page": "Readme",
    "title": "Inheritance",
    "category": "section",
    "text": "To encapsulate inheritance, types must first inherit from each other in C++, so a static_cast to the base type can work:struct A\n{\n  virtual std::string message() const = 0;\n  std::string data = \"mydata\";\n};\n\nstruct B : A\n{\n  virtual std::string message() const\n  {\n    return \"B\";\n  }\n};When adding the type, add the supertype as a second argument:types.add_type<A>(\"A\").method(\"message\", &A::message);\ntypes.add_type<B>(\"B\", jlcxx::julia_type<A>());The supertype is of type jl_datatype_t* and using the template variant of jlcxx::julia_type looks up the corresponding type here. There is also a variant taking a string for the type name and an optional Julia module name as second argument, which is useful for inheriting from a type defined in Julia, e.g:mod.add_type<Teuchos::ParameterList>(\"ParameterList\", jlcxx::julia_type(\"AbstractDict\", \"Base\"))The value returned by add_type also had a dt() method, useful in the case of template types:auto multi_vector_base = mod.add_type<Parametric<TypeVar<1>>>(\"MultiVectorBase\");\nauto vector_base = mod.add_type<Parametric<TypeVar<1>>>(\"VectorBase\", multi_vector_base.dt());Since the concrete arguments given to ccall are the reference types, we need a way to convert BRef into ARef. To allow CxxWrap to figure out the correct static_cast to use, the hierarchy must be defined at compile time as follows:namespace jlcxx\n{\n  template<> struct SuperType<B> { typedef A type; };\n}See the test at deps/src/jlcxx/examples/inheritance.cpp and test/inheritance.jl."
},

{
    "location": "#Enum-types-1",
    "page": "Readme",
    "title": "Enum types",
    "category": "section",
    "text": "Enum types are converted to strongly-typed bits types on the Julia side. Consider the C++ enum:enum CppEnum\n{\n  EnumValA,\n  EnumValB\n};This is registered as follows:namespace jlcxx\n{\n  template<> struct IsBits<CppEnum> : std::true_type {};\n}\n\nJLCXX_MODULE define_types_module(jlcxx::Module& types)\n{\n  types.add_bits<CppEnum>(\"CppEnum\");\n  types.set_const(\"EnumValA\", EnumValA);\n  types.set_const(\"EnumValB\", EnumValB);\n}The enum constants will be available on the Julia side as CppTypes.EnumValA and CppTypes.EnumValB, both of type CppTypes.CppEnum. Wrapped C++ functions taking a CppEnum will only accept a value of type CppTypes.CppEnum in Julia."
},

{
    "location": "#Template-(parametric)-types-1",
    "page": "Readme",
    "title": "Template (parametric) types",
    "category": "section",
    "text": "The natural Julia equivalent of a C++ template class is the parametric type. The mapping is complicated by the fact that all possible parameter values must be compiled in advance, requiring a deviation from the syntax for adding a regular class. Consider the following template class:template<typename A, typename B>\nstruct TemplateType\n{\n  typedef typename A::val_type first_val_type;\n  typedef typename B::val_type second_val_type;\n\n  first_val_type get_first()\n  {\n    return A::value();\n  }\n\n  second_val_type get_second()\n  {\n    return B::value();\n  }\n};The code for wrapping this is:types.add_type<Parametric<TypeVar<1>, TypeVar<2>>>(\"TemplateType\")\n  .apply<TemplateType<P1,P2>, TemplateType<P2,P1>>([](auto wrapped)\n{\n  typedef typename decltype(wrapped)::type WrappedT;\n  wrapped.method(\"get_first\", &WrappedT::get_first);\n  wrapped.method(\"get_second\", &WrappedT::get_second);\n});The first line adds the parametric type, using the generic placeholder Parametric and a TypeVar for each parameter. On the second line, the possible instantiations are created by calling apply on the result of add_type. Here, we allow for TemplateType<P1,P2> and TemplateType<P2,P1> to exist, where P1 and P2 are C++ classes that also must be wrapped and that fulfill the requirements for being a parameter to TemplateType. The argument to apply is a functor (generic C++14 lambda here) that takes the wrapped instantiated type (called wrapped here) as argument. This object can then be used as before to define methods. In the case of a generic lambda, the actual type being wrapped can be obtained using decltype as shown on the 4th line.Use on the Julia side:import ParametricTypes.TemplateType, ParametricTypes.P1, ParametricTypes.P2\n\np1 = TemplateType{P1, P2}()\np2 = TemplateType{P2, P1}()\n\n@test ParametricTypes.get_first(p1) == 1\n@test ParametricTypes.get_second(p2) == 1There is also an apply_combination method to make applying all combinations of parameters shorter to write.Full example and test including non-type parameters at: deps/src/jlcxx/examples/parametric.cpp and test/parametric.jl."
},

{
    "location": "#Constructors-and-destructors-1",
    "page": "Readme",
    "title": "Constructors and destructors",
    "category": "section",
    "text": "The default constructor and any manually added constructor using the constructor function will automatically create a Julia object that has a finalizer attached that calls delete to free the memory. To write a C++ function that returns a new object that can be garbage-collected in Julia, use the jlcxx::create function:jlcxx::create<Class>(constructor_arg1, ...);This will return the new C++ object wrapped in a jl_value_t* that has a finalizer."
},

{
    "location": "#Call-operator-overload-1",
    "page": "Readme",
    "title": "Call operator overload",
    "category": "section",
    "text": "Since Julia supports overloading the function call operator (), this can be used to wrap operator() by just omitting the method name:struct CallOperator\n{\n  int operator()() const\n  {\n    return 43;\n  }\n};\n\n// ...\n\ntypes.add_type<CallOperator>(\"CallOperator\").method(&CallOperator::operator());Use in Julia:call_op = CallOperator()\n@test call_op() == 43The C++ function does not even have to be operator(), but of course it is most logical use case."
},

{
    "location": "#Automatic-argument-conversion-1",
    "page": "Readme",
    "title": "Automatic argument conversion",
    "category": "section",
    "text": "By default, overloaded signatures for wrapper methods are generated, so a method taking a double in C++ can be called with e.g. an Int in Julia. Wrapping a function like this:mod.method(\"half_lambda\", [](const double a) {return a*0.5;});then yields the methods:half_lambda(arg1::Int64)\nhalf_lambda(arg1::Float64)In some cases (e.g. when a template parameter depends on the number type) this is not desired, so the behavior can be disabled on a per-argument basis using the StrictlyTypedNumber type. Wrapping a function like this:mod.method(\"strict_half\", [](const jlcxx::StrictlyTypedNumber<double> a) {return a.value*0.5;});will only yield the Julia method:strict_half(arg1::Float64)Note that in C++ the number value is accessed using the value member of StrictlyTypedNumber."
},

{
    "location": "#Customization-1",
    "page": "Readme",
    "title": "Customization",
    "category": "section",
    "text": "The automatic overloading can be customized. For example, to allow passing an Int64 where a UInt64 is normally expected, the following method can be added:CxxWrap.argument_overloads(t::Type{UInt64}) = [Int64]"
},

{
    "location": "#Smart-pointers-1",
    "page": "Readme",
    "title": "Smart pointers",
    "category": "section",
    "text": "Currently, std::shared_ptr, std::unique_ptr and std::weak_ptr are supported transparently. Returning one of these pointer types will return an object inheriting from SmartPointer{T}:types.method(\"shared_world_factory\", []()\n{\n  return std::shared_ptr<World>(new World(\"shared factory hello\"));\n});The shared pointer can then be used in a function taking an object of type World like this (the module is named CppTypes here):swf = CppTypes.shared_world_factory()\nCppTypes.greet(swf)Explicit dereferencing is also supported, using the [] operator:CppTypes.greet(swf[])"
},

{
    "location": "#Adding-a-custom-smart-pointer-1",
    "page": "Readme",
    "title": "Adding a custom smart pointer",
    "category": "section",
    "text": "Suppose we have a \"smart\" pointer type defined as follows:template<typename T>\nstruct MySmartPointer\n{\n  MySmartPointer(T* ptr) : m_ptr(ptr)\n  {\n  }\n\n  MySmartPointer(std::shared_ptr<T> ptr) : m_ptr(ptr.get())\n  {\n  }\n\n  T& operator*() const\n  {\n    return *m_ptr;\n  }\n\n  T* m_ptr;\n};Specializing in the jlcxx namespace:namespace jlcxx\n{\n  template<typename T> struct IsSmartPointerType<cpp_types::MySmartPointer<T>> : std::true_type { };\n  template<typename T> struct ConstructorPointerType<cpp_types::MySmartPointer<T>> { typedef std::shared_ptr<T> type; };\n}Here, the first line marks our type as a smart pointer, enabling automatic conversion from the pointer to its referenced type and adding the dereferencing pointer. If the type uses inheritance and the hierarchy is defined using SuperType, automatic conversion to the pointer or reference of the base type is also supported. The second line indicates that our smart pointer can be constructed from a std::shared_ptr, also adding auto-conversion for that case. This is useful for a relation as in std::weak_ptr and std::shared_ptr, for example."
},

{
    "location": "#Exceptions-1",
    "page": "Readme",
    "title": "Exceptions",
    "category": "section",
    "text": "When directly adding a regular free C++ function as a method, it will be called directly using ccall and any exception will abort the Julia program. To avoid this, you can force wrapping it in an std::functor to intercept the exception automatically by setting the force_convert argument to method to true:mod.method(\"test_exception\", test_exception, true);Member functions and lambdas are automatically wrapped in an std::functor and so any exceptions thrown there are always intercepted and converted to a Julia exception."
},

{
    "location": "#Tuples-1",
    "page": "Readme",
    "title": "Tuples",
    "category": "section",
    "text": "C++11 tuples can be converted to Julia tuples by including the containers/tuple.hpp header:#include \"jlcxx/jlcxx.hpp\"\n#include \"jlcxx/tuple.hpp\"\n\nJLCXX_MODULE define_types_module(jlcxx::Module& containers)\n{\n  containers.method(\"test_tuple\", []() { return std::make_tuple(1, 2., 3.f); });\n}Use in Julia:using CxxWrap\nusing Base.Test\n\nmodule Containers\n  @wrapmodule(libcontainers)\n  export test_tuple\nend\nusing Containers\n\n@test test_tuple() == (1,2.0,3.0f0)"
},

{
    "location": "#Working-with-arrays-1",
    "page": "Readme",
    "title": "Working with arrays",
    "category": "section",
    "text": ""
},

{
    "location": "#Reference-native-Julia-arrays-1",
    "page": "Readme",
    "title": "Reference native Julia arrays",
    "category": "section",
    "text": "The ArrayRef type is provided to work conveniently with array data from Julia. Defining a function like this in C++:void test_array_set(jlcxx::ArrayRef<double> a, const int64_t i, const double v)\n{\n  a[i] = v;\n}This can be called from Julia as:ta = [1.,2.]\ntest_array_set(ta, 0, 3.)The ArrayRef type provides basic functionality:iterators\nsize\n[] read-write accessor\npush_back for appending elements"
},

{
    "location": "#Const-arrays-1",
    "page": "Readme",
    "title": "Const arrays",
    "category": "section",
    "text": "Sometimes, a function returns a const pointer that is an array, either of fixed size or with a size that can be determined from elsewhere in the API. Example:const double* const_vector()\n{\n  static double d[] = {1., 2., 3};\n  return d;\n}In this simple case, the most logical way to translate this would be as a tuple:mymodule.method(\"const_ptr_arg\", []() { return std::make_tuple(const_vector().ptr[0], const_vector().ptr[1], const_vector().ptr[2]); });In the case of a larger blob of heap-allocated data it makes more sense to convert this to a ConstArray, which implements the read-only part of the Julia array interface, so it exposes the data safely to Julia in a way that can be used natively:mymodule.method(\"const_vector\", []() { return jlcxx::make_const_array(const_vector(), 3); });For multi-dimensional arrays, the make_const_array function takes multiple sizes, e.g.:const double* const_matrix()\n{\n  static double d[2][3] = {{1., 2., 3}, {4., 5., 6.}};\n  return &d[0][0];\n}\n\n// ...module definition skipped...\n\nmymodule.method(\"const_matrix\", []() { return jlcxx::make_const_array(const_matrix(), 3, 2); });Note that because of the column-major convention in Julia, the sizes are in reversed order from C++, so the Julia code:display(const_matrix())shows:3x2 ConstArray{Float64,2}:\n 1.0  4.0\n 2.0  5.0\n 3.0  6.0"
},

{
    "location": "#Mutable-arrays-1",
    "page": "Readme",
    "title": "Mutable arrays",
    "category": "section",
    "text": "Replacing make_const_array in the examples above by make_julia_array creates a mutable, regular Julia array with memory owned by Julia."
},

{
    "location": "#Calling-Julia-functions-from-C-1",
    "page": "Readme",
    "title": "Calling Julia functions from C++",
    "category": "section",
    "text": ""
},

{
    "location": "#Direct-call-to-Julia-1",
    "page": "Readme",
    "title": "Direct call to Julia",
    "category": "section",
    "text": "Directly calling Julia functions uses jl_call from julia.h but with a more convenient syntax and automatic argument conversion and boxing. Use a JuliaFunction to get a functor that can be invoked directly. Example for calling the max function from Base:mymodule.method(\"julia_max\", [](double a, double b)\n{\n  jlcxx::JuliaFunction max(\"max\");\n  return max(a, b);\n});Internally, the arguments and return value are boxed, making this method convenient but slower than calling a regular C function."
},

{
    "location": "#Safe-cfunction-1",
    "page": "Readme",
    "title": "Safe cfunction",
    "category": "section",
    "text": "The function CxxWrap.safe_cfunction provides a wrapper around Base.cfunction that checks the type of the function pointer. Example C++ function:mymodule.method(\"call_safe_function\", [](double(*f)(double,double))\n{\n  if(f(1.,2.) != 3.)\n  {\n    throw std::runtime_error(\"Incorrect callback result, expected 3\");\n  }\n});Use from Julia:testf(x,y) = x+y\nc_func = safe_cfunction(testf, Float64, (Float64,Float64))\nMyModule.call_safe_function(c_func)Using types different from the expected function pointer call will result in an error. This check incurs a runtime overhead, so the idea here is that the function is converted only once and then applied many times on the C++ side.If the result of safe_cfunction needs to be stored before the calling signature is known, direct conversion of the created structure (type SafeCFunction) is also possible. It can then be converted later using jlcxx::make_function_pointer:mymodule.method(\"call_safe_function\", [](jlcxx::SafeCFunction f_data)\n{\n  auto f = jlcxx::make_function_pointer<double(double,double)>(f_data);\n  if(f(1.,2.) != 3.)\n  {\n    throw std::runtime_error(\"Incorrect callback result, expected 3\");\n  }\n});This method of calling a Julia function is less convenient, but the call overhead should be no larger than calling a regular C function through its pointer."
},

{
    "location": "#Adding-Julia-code-to-the-module-1",
    "page": "Readme",
    "title": "Adding Julia code to the module",
    "category": "section",
    "text": "Sometimes, you may want to write additional Julia code in the module that is built from C++. To do this, call the wrapmodule method inside an appropriately named Julia module:module ExtendedTypes\n\nusing CxxWrap\n@wrapmodule(\"libextended\")\nexport ExtendedWorld, greet\n\nendHere, ExtendedTypes is a name that matches the module name passed to create_module on the C++ side. The @wrapmodule call works as before, but now the functions and types are defined in the existing ExtendedTypes module, and additional Julia code such as exports and macros can be defined.It is also possible to replace the @wrapmodule call with a call to @readmodule and then separately call @wraptypes and @wrapfunctions. This allows using the types before the functions get called, which is useful for overloading the argument_overloads with types defined on the C++ side."
},

{
    "location": "#Breaking-changes-for-0.7-1",
    "page": "Readme",
    "title": "Breaking changes for 0.7",
    "category": "section",
    "text": "JULIA_CPP_MODULE_BEGIN and JULIA_CPP_MODULE_END no longer exists, define a function with return type JLCXX_MODULE in the global namespace instead. By default, the Julia side expects this function to be named define_julia_module, but another name can be chosen and passed as a second argument to @wrapmodule.\nwrap_modules is removed, replace wrap_modules(lib_file_path) with\nmodule Foo\n  using CxxWrap\n  @wrapmodule(lib_file_path)\nend\nexport_symbols is removed, since all C++ modules are now wrapped in a corresponding module declared on the Julia side, so the regular Julia exportstatement can be used.safe_cfunction is now a macro, just like cfunction became a macro in Julia\nPrecompilation: add this function after the @wrapmodule macro:\nfunction __init__()\n  @initcxx\nend"
},

{
    "location": "autodocs/#CxxWrap.gcprotect-Tuple{Any}",
    "page": "Docstrings",
    "title": "CxxWrap.gcprotect",
    "category": "method",
    "text": "Protect a variable from garbage collection by adding it to the global array kept by CxxWrap\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CxxWrap.gcunprotect-Tuple{Any}",
    "page": "Docstrings",
    "title": "CxxWrap.gcunprotect",
    "category": "method",
    "text": "Unprotect a variable from garbage collection by removing it from the global array kept by CxxWrap\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CxxWrap.ptrunion-Union{Tuple{Type{T}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "CxxWrap.ptrunion",
    "category": "method",
    "text": "Create a Union containing the type and a smart pointer to any type derived from it\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CxxWrap.SmartPointer",
    "page": "Docstrings",
    "title": "CxxWrap.SmartPointer",
    "category": "type",
    "text": "Base class for smart pointers\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CxxWrap.SmartPointerWithDeref",
    "page": "Docstrings",
    "title": "CxxWrap.SmartPointerWithDeref",
    "category": "type",
    "text": "Concrete smart pointer implementation. PT is a hash for the pointer type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CxxWrap]\nOrder = [:type, :function]"
},

]}
