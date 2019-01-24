var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Mocking-1",
    "page": "Readme",
    "title": "Mocking",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build Status) (Image: codecov.io)Allows Julia function calls to be temporarily overloaded for purpose of testing."
},

{
    "location": "#Contents-1",
    "page": "Readme",
    "title": "Contents",
    "category": "section",
    "text": "Usage\nGotchas\nNotes"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Suppose you wrote the function randdev (UNIX only). How would you go about writing tests for it?function randdev(n::Integer)\n    open(\"/dev/urandom\") do fp\n        reverse(read(fp, n))\n    end\nendThe non-deterministic behaviour of this function makes it hard to test but we can write some tests dealing with the deterministic properties of the function:using Base.Test\nimport ...: randdev\n\nn = 10\nresult = randdev(n)\n@test eltype(result) == UInt8\n@test length(result) == nHow could we create a test that shows the output of the function is reversed? Mocking.jl provides the @mock macro which allows package developers to temporarily overload a specific calls in their package. In this example we will apply @mock to the open call in randdev:using Mocking\n\nfunction randdev(n::Integer)\n    @mock open(\"/dev/urandom\") do fp\n        reverse(read(fp, n))\n    end\nendWith the call site being marked as \"mockable\" we can now write a testcase which allows us to demonstrate the reversing behaviour within the randdev function:using Mocking\nMocking.enable()  # Need to enable before we import any code using the `@mock` macro\n\nusing Base.Test\nimport ...: randdev\n\n...\n\n# Produces a string with sequential UInt8 values from 1:n\ndata = unsafe_string(pointer(convert(Array{UInt8}, 1:n)))\n\n# Generate a alternative method of `open` which call we wish to mock\npatch = @patch open(fn::Function, f::AbstractString) = fn(IOBuffer(data))\n\n# Apply the patch which will modify the behaviour for our test\napply(patch) do\n    @test randdev(n) == convert(Array{UInt8}, n:-1:1)\nend\n\n# Outside of the scope of the patched environment `@mock` is essentially a no-op\n@test randdev(n) != convert(Array{UInt8}, n:-1:1)"
},

{
    "location": "#Gotchas-1",
    "page": "Readme",
    "title": "Gotchas",
    "category": "section",
    "text": "Remember to:use @mock at desired call sites\nstart julia with --compiled-modules=no (--compilecache=no for ≤0.6) or pass force=true to Mocking.enable\nrun Mocking.enable before importing the module(s) being tested"
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "Mocking.jl is intended to be used for testing only and will not affect the performance of your code when using @mock. In fact the @mock is actually a no-op when Mocking.enable is not called. One side effect of this behaviour is that pre-compiled packages won\'t test correctly with Mocking unless you start Julia with --compiled-modules=no (≥0.7) or --compilecache=no (≤0.6).$ julia --compilecache=no -e Pkg.test(\"...\")Alternatively you can use Mocking.enable(force=true) to automatically disable using package precompilation for you (experimental). Make sure to call enable before the you importing the module you are testing."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Mocking.jl is provided under the MIT \"Expat\" License."
},

{
    "location": "autodocs/#Mocking.Bindings-Tuple{Expr}",
    "page": "Docstrings",
    "title": "Mocking.Bindings",
    "category": "method",
    "text": "Bindings(expr)\n\nTakes a function signature expression and extracts all of the bindings into either internal (defined by the signature) or external (defined outside of the signature).\n\njulia> Bindings(:(f{T<:Integer}(a::T, b::Base.Real=a, c=z)))\nMocking.Bindings(Set(Any[:c,:T,:a,:b,:f]),Set(Any[:z,:(Base.Real),:Integer]))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mocking.binding_expr",
    "page": "Docstrings",
    "title": "Mocking.binding_expr",
    "category": "function",
    "text": "binding_expr(x) -> Expr\n\nConverts a Module, Type, or Function into an expression which includes the entire module hierarchy.\n\njulia> binding_expr(Int8)\n:(Core.Int8)\n\njulia> binding_expr(Dates.Hour)\n:(Base.Dates.Hour)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mocking.compiled_modules_enabled-Tuple{}",
    "page": "Docstrings",
    "title": "Mocking.compiled_modules_enabled",
    "category": "method",
    "text": "compiled_modules_enabled() -> Bool\n\nDetermine if the julia command line flag --compiled-modules has been set to \"yes\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mocking.extract_kwargs-Tuple{Expr}",
    "page": "Docstrings",
    "title": "Mocking.extract_kwargs",
    "category": "method",
    "text": "extract_kwargs(expr::Expr) -> Vector{Expr}\n\nExtract the :parameters and :kw value into an array of :kw expressions we don\'t evaluate any expressions for values yet though.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mocking.set_compiled_modules-Tuple{Bool}",
    "page": "Docstrings",
    "title": "Mocking.set_compiled_modules",
    "category": "method",
    "text": "set_compiled_modules(state::Bool) -> Void\n\nOverride the julia command line flag --compiled-modules with a runtime setting. Code run before this the value is modified will use the original setting. Not meant for general purpose usage.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Mocking]\nOrder = [:type, :function]"
},

]}
