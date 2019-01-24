var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Hyperspecialize-1",
    "page": "Readme",
    "title": "Hyperspecialize",
    "category": "section",
    "text": "(Image: Travis) (Image: AppVeyor) (Image: Coveralls) (Image: Codecov)Hyperspecialize is a proud hack of a Julia package designed to resolve method ambiguity errors by automating the task of redefining functions on more specific types!"
},

{
    "location": "#Problem-1",
    "page": "Readme",
    "title": "Problem",
    "category": "section",
    "text": "It is best to explain the problem (and solution) by example <sup>1</sup>. Suppose Peter and his friend Jarrett have both developed eponymous modules Peter and Jarrett as follows:module Peter\n  import Base.+\n\n  struct PeterNumber <: Number\n    x::Number\n  end\n\n  Base.:+(p::PeterNumber, y::Number) = PeterNumber(p.x + y)\n\n  export PeterNumber\nend\n\nmodule Jarrett\n  import Base.+\n\n  struct JarrettNumber <: Number\n    y::Number\n  end\n\n  Base.:+(x::Number, j::JarrettNumber) = JarrettNumber(x + j.y)\n\n  export JarrettNumber\nendPeter and Jarrett have both defined fun numeric types! However, look what happens when the user tries to use Peter\'s and Jarrett\'s numbers together...julia> using .Peter\n\njulia> using .Jarrett\n\njulia> p = PeterNumber(1.0) + 3\nPeterNumber(4.0)\n\njulia> j = 2.0 + JarrettNumber(2.0)\nJarrettNumber(4.0)\n\njulia> friends = p + j\nERROR: MethodError: +(::PeterNumber, ::JarrettNumber) is ambiguous. Candidates:\n  +(x::Number, j::JarrettNumber) in Main.Jarrett at REPL[2]:8\n  +(p::PeterNumber, y::Number) in Main.Peter at REPL[1]:8\nPossible fix, define\n  +(::PeterNumber, ::JarrettNumber)Oh no! Since a PeterNumber is a Number and a JarrettNumber is a Number, both + methods are applicable, and neither method is more specific. Julia has no way to decide which method to use, and asks the user to decide by defining a more specific method.There is a question of what role developers should play in the resolution of this ambiguity.All developers can coordinate their efforts to agree on how their typesshould interact, and then define methods for each interaction. This solution is unrealistic since it poses an undue burden of communication on the developers and since multiple behaviors may be desired for an interaction between types. In the above example, the two definitions of + have different behavior and either may be desired by the user.The developer can write their library to run in a modifed executionenvironment like Cassette. This solution creates different contexts for multiple dispatch.A single developer can define their ambiguous methods only on concretesubtypes in Base, and provide utilities to extend these definitions. For example, Peter could define + on all concrete subtypes of Number in Base. In cases of ambiguity, + would then default to Jarrett\'s definition unless the user asks for Peter\'s definition.Hyperspecialize is designed to standardize and provide utilities for the latter approach."
},

{
    "location": "#Load-Order-Dependent-Solution-1",
    "page": "Readme",
    "title": "Load-Order Dependent Solution",
    "category": "section",
    "text": "Peter decided to use Hyperspecialize, and now his definition looks like this:  @replicable Base.:+(p::PeterNumber, y::@hyperspecialize(Number)) = PeterNumber(p.x + y)This solution will replicate this definition once for all concrete subtypes of Number. This list of subtypes depends on the module load order. If Peter\'s module is loaded first, we get the following behavior:julia> friends = p + j\nJarrettNumber(PeterNumber(8.0))If Jarrett\'s module is loaded first, we get the following behavior:julia> friends = p + j\nPeterNumber(JarrettNumber(8.0))"
},

{
    "location": "#Explicit-Solution-1",
    "page": "Readme",
    "title": "Explicit Solution",
    "category": "section",
    "text": "Peter doesn\'t like this unpredictable behavior, so he decides to explicitly define the load order for his types. He asks for his code to only be defined on the concrete subtypes of Number in Base. He uses the @concretize macro to define which subtypes of Number to use.  Now his definition looks like this:  @concretize myNumber [BigFloat, Float16, Float32, Float64, Bool, BigInt, Int128, Int16, Int32, Int64, Int8, UInt128, UInt16, UInt32, UInt64, UInt8]\n\n  @replicable Base.:+(p::PeterNumber, y::@hyperspecialize(myNumber)) = PeterNumber(p.x + y)Since Peter has only defined + for the concrete subtypes of Number, the user will need to ask for a specific definition of + for a type they would like to use. Consider what happens when Peter\'s package and Jarrett\'s package are loaded together.julia> friends = p + j\nJarrettNumber(PeterNumber(8.0))\n\njulia> using Hyperspecialize\n\njulia> @widen Peter.myNumber JarrettNumber\nSet(Type[BigInt, Bool, UInt32, Float64, Float32, Int64, Int128, Float16, JarrettNumber, UInt128, UInt8, UInt16, BigFloat, Int8, UInt64, Int16, Int32])\n\njulia> friends = p + j\nPeterNumber(JarrettNumber(8.0))Before the myNumber type tag in the Peter module is widened, there is no definition of + for PeterNumber and JarrettNumber in the Peter package, but since the Jarrett module defines a more generic method, that one is chosen. After the user widens Peter\'s definition to include a JarrettNumber (triggering a specific definition of + to be evaluated in Peter\'s module), the more specific method in Peter\'s package is chosen."
},

{
    "location": "#Opt-In,-But-Everyone-Can-Join-1",
    "page": "Readme",
    "title": "Opt-In, But Everyone Can Join",
    "category": "section",
    "text": "Suppose Jarrett has also been thinking about method ambiguities with Peter\'s package and decides he will also use Hyperspecialize.Now Jarret has added  @concretize myNumber [BigFloat, Float16, Float32, Float64, Bool, BigInt, Int128, Int16, Int32, Int64, Int8, UInt128, UInt16, UInt32, UInt64, UInt8]\n\n  @replicable Base.:+(x::@hyperspecialize(myNumber), j::JarrettNumber) = JarrettNumber(x + j.y)to his module, and the behavior is as follows:julia> p + j\nERROR: no promotion exists for PeterNumber and JarrettNumber\nStacktrace:\n [1] error(::String, ::Type, ::String, ::Type) at ./error.jl:42\n [2] promote_to_supertype at ./promotion.jl:284 [inlined]\n [3] promote_result at ./promotion.jl:275 [inlined]\n [4] promote_type at ./promotion.jl:210 [inlined]\n [5] _promote at ./promotion.jl:249 [inlined]\n [6] promote at ./promotion.jl:292 [inlined]\n [7] +(::PeterNumber, ::JarrettNumber) at ./promotion.jl:321\n [8] top-level scopeThere is now no method for adding a PeterNumber and a JarrettNumber! The user must ask for one explicitly using @widen on either Peter or Jarrett\'s myNumber type tag. If the user chooses to widen Jarrett\'s definitions, we getjulia> @widen Jarrett.myNumber PeterNumber\nSet(Type[BigInt, Bool, UInt32, Float64, Float32, Int64, Int128, Float16, PeterNumber, UInt128, UInt8, UInt16, BigFloat, Int8, UInt64, Int16, Int32])\n\njulia> p + j\nJarrettNumber(PeterNumber(8.0))If the user instead chooses to widen Peter\'s definitions, we getjulia> @widen Peter.myNumber JarrettNumber\nSet(Type[BigInt, Bool, UInt32, Float64, Float32, Int64, Int128, Float16, UInt128, UInt8, UInt16, BigFloat, Int8, UInt64, JarrettNumber, Int16, Int32])\n\njulia> p + j\nPeterNumber(JarrettNumber(8.0))"
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "This library provides several functions for managing the defintions to replicate and the types they are replicated over."
},

{
    "location": "#Concretization-1",
    "page": "Readme",
    "title": "Concretization",
    "category": "section",
    "text": "The user must enumerate the types that a definition is to replicated over. We use type tags to describe a particular set of types. The type tag arguments to macros are interpreted literally as symbols. The set of types is referred to as the concretization.You may specify the concretization of a type tag using the @concretize macro like this:@concretize Key IntYou may specify more than one type:@concretize Key (Int, Float64, Float32)If you would like to expand the concretization of a type tag, use the @widen macro.@widen Key (BigFloat, Bool)You may query the concretization of a type tag with the @concretization macro.@concretization KeyType tags always have module-local scope and if no module is specified, they are interpreted as belonging to the module in which they are expanded. You may use the type tag form mod.Key to specify a module anywhere a type tag is an argument to a macro.@concretization(mod.Key)If no concretization is given for a type tag Key in module mod, the tag is given the default concretization corresponding to all the concrete subtypes of whatever the symbol Key means when evaluated in mod (so if you are making up a tag name, please define a concretization for it)."
},

{
    "location": "#Replicable-1",
    "page": "Readme",
    "title": "Replicable",
    "category": "section",
    "text": "The heart of the Hyperspecialize package is the @replicable macro, which promises to replicate a definition for all combinations of types in the concretization of type tags that appear in the definition. @replicable takes only one argument, the code to be replicated at global scope in the current module. To specify type tags, use the @hyperspecialize macro where the types in the concretization of a tag should be substituted.Thus, the following examplemodule Foo\n  @concretize MyKey (Int, Float32)\n  @replicable bar(x::@hyperspecialize(MyKey), y::(@hyperspecialize MyKey)) = x + y\nendwill execute the following code at global scope in Foo.bar(x::Int, y::Int) = x + y\nbar(x::Float32, y::Int) = x + y\nbar(x::Int, y::Float32) = x + y\nbar(x::Float32, y::Float32) = x + yIf someone has loaded the Foo module and calls  @widen Foo.MyKey Float64then the following code will execute at global scope in Foo.bar(x::Float64, y::Float64) = x + y\nbar(x::Int, y::Float64) = x + y\nbar(x::Float32, y::Float64) = x + y\nbar(x::Float64, y::Int) = x + y\nbar(x::Float64, y::Float32) = x + yNotice that the earlier definitions are not repeated."
},

{
    "location": "#The-Fine-Print-1",
    "page": "Readme",
    "title": "The Fine Print",
    "category": "section",
    "text": "This is an example of a module where the idea is simple and the details are not."
},

{
    "location": "#Data-And-Precompilation-1",
    "page": "Readme",
    "title": "Data And Precompilation",
    "category": "section",
    "text": "Data is stored in const global dictionaries named __hyperspecialize__ in every module that calls @concretize (Note that this can happen implicitly if other methods are called that expect a concretization to exist already).For this reason (and to keep things simple), you cannot concretize a type tag in a module that is not your own.Since this package works by calling \"eval\" on different modules to widen types, if you want to call @widen on a type key in another module, you must do so from the __init__() function in your module. See the documentation on __init__()."
},

{
    "location": "#When-Is-Hyperspecialize-Right-For-Me?-1",
    "page": "Readme",
    "title": "When Is Hyperspecialize Right For Me?",
    "category": "section",
    "text": "There are three main drawbacks to the Hyperspecialize package.These macros may generate a very large number of definitions if thefunction definition includes many hyperspecialized type tags. For mathematical operators this can be alleviated using Julia\'s promotion rules, but the problem of how to define an unambiguous promote_type still stands. To further reduce the number of methods that are defined, in some situations it may be sufficient to only concretize the type tag to be a union of concrete types in Base. This strategy works best if it is unlikely that the method will be redefined using those types.The second drawback is that the user must manually choose desired behavior,so if the ambiguity is related to an internal type, the user may not know how to resolve it.The third drawback is that both methods that create an ambiguity may bedesired by a user, and they are forced to choose one global behavior. This can be problematic if a different library has widened the same type tag and made that choice for them already.In short, Hyperspecialize works best when the user knows which types are being concretized, and when the resolution to method ambiguities is clear. A major benefit to using Hyperspecialize is that you may keep your type-based API, you are not forced to adopt a function-based API. If this is not something that is important to you and you cannot work around difficulties involved in using Hyperspecialize, you will likely be better off using a contextual dispatch solution such as Cassette.<a name=\"promotetype\">1</a>: I have chosen + as an example function, but it would be possible to define promotion rules to avoid some ambiguities. However, it is possible that type ambiguities may occur in the definition of the `promotetype` function."
},

{
    "location": "autodocs/#Hyperspecialize.allsubtypes-Tuple{Any}",
    "page": "Docstrings",
    "title": "Hyperspecialize.allsubtypes",
    "category": "method",
    "text": "allsubtypes(t)\n\nReturn an Array containing all subtypes of t at load time.\n\nExamples\n\njulia> Hyperspecialize.allsubtypes(Real)\n24-element Array{Type,1}:\n Real\n AbstractFloat\n BigFloat\n Float16\n Float32\n Float64\n AbstractIrrational\n Irrational\n Integer\n Bool\n Signed\n BigInt\n Int128\n Int16\n Int32\n Int64\n Int8\n Unsigned\n UInt128\n UInt16\n UInt32\n UInt64\n UInt8\n Rational\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hyperspecialize.concretesubtypes-Tuple{Any}",
    "page": "Docstrings",
    "title": "Hyperspecialize.concretesubtypes",
    "category": "method",
    "text": "concretesubtypes(t)\n\nReturn an Array containing all concrete subtypes of t at load time.\n\nExamples\n\njulia> Hyperspecialize.concretesubtypes(Real)\n16-element Array{Any,1}:\n BigFloat\n Float16\n Float32\n Float64\n Bool\n BigInt\n Int128\n Int16\n Int32\n Int64\n Int8\n UInt128\n UInt16\n UInt32\n UInt64\n UInt8\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Hyperspecialize]\nOrder = [:type, :function]"
},

]}
