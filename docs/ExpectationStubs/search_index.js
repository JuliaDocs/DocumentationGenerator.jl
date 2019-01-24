var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ExpectationStubs-1",
    "page": "Readme",
    "title": "ExpectationStubs",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)This package exists to help you make testing stubs. Its not to help you do patch mocks into code: for that see Mocking.jl.In theory the stubs created using ExpectationStubs are ideal for patching in with Mocking.jl. This is still in alpha, and that hasn\'t been tested yet. (Raise an issue and let me know if that works.)These stub are ideal for if you already have dependency injection of functions set up.For purposes of this package, a stub and a mock at the same thing.There are 5 key functions (check their docstrings on the REPL).@stub foo: declares a stub called foo\n@expect foo(::Integer, 8.5)=77: sets up an expectation that foo will be called with an Integer and the exact value 8.5. and if so it is to return 77\n@used  foo(100, ::Real) checks to see if foo was called with the the exact value 100 and something of type Real\n@usecount foo(100, ::Real) as per @used except returns the number of times called\nall_expectations_used(foo) checks that every expectation declared on foo was used (returns a Bool)."
},

{
    "location": "#Example-Usage-1",
    "page": "Readme",
    "title": "Example Usage",
    "category": "section",
    "text": "Lets say I have a function that checks on the status of say some pipe and if it has too much pressure, takes some response: normally calling a function called emailfunction check_status(pressure, its_bad_callback=email)\n    if pressure > 9000\n        its_bad_callback(\"phil@example.com\", \"Darn it Phil, the thing is gonna blow\")\n        return false\n    end\n    true\nendNow, when testing this function out, I don\'t want Phil to get 100s of emails. So I want to replace the its_bad_callback with some mock.So I could write a little closure in my testing code, and have that closure set a variable and then check that variable, to see how it was called. And that is pretty good. But it is a bit adhock.Enter ExpectationStubs.jlusing Base.Test\nusing ExpectationStubs\n\n@testset \"Check the pipe\" begin\n    @stub fakeemail\n    @expect fakeemail(\"phil@example.com\", ::AbstractString) = nothing # no return\n\n    # check what happens if everything is OK\n    @test check_status(1000, fakeemail) == true\n    @test !@used fakeemail(\"phil@example.com\", ::Any)\n    ### Better not email Phil if everything is going ok.\n    @test check_status(9007, fakeemail) == false\n    @test @used fakeemail(\"phil@example.com\", ::Any)\nend"
},

{
    "location": "autodocs/#ExpectationStubs.all_expectations_used-Tuple{Stub}",
    "page": "Docstrings",
    "title": "ExpectationStubs.all_expectations_used",
    "category": "method",
    "text": "all_expectations_used(stub::Stub)\n\nChecks that every expectation setup for the stub was actually used. It is good to have this as a sanity check at the end of your test script using the stub.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExpectationStubs.DoNotCare",
    "page": "Docstrings",
    "title": "ExpectationStubs.DoNotCare",
    "category": "type",
    "text": "DoNotCare{T}\n\nA type that is equal to all things that are of type <:T. For internal use. Will interact weirdly with hash based dicts\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExpectationStubs.ExpectationValueMismatchError",
    "page": "Docstrings",
    "title": "ExpectationStubs.ExpectationValueMismatchError",
    "category": "type",
    "text": "ExpectationValueMismatchError\n\nSimilar to a julia MethodError This is thrown if a call was made on a stub, but the values/types did not match those that were expected.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExpectationStubs.get_all_matches-Tuple{ExpectationStubs.VectorDict,Any}",
    "page": "Docstrings",
    "title": "ExpectationStubs.get_all_matches",
    "category": "method",
    "text": "get_all_matches(vd::VectorDict, key)\n\nReturns all values matching the key\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExpectationStubs.name_argvals_and_sig-Tuple{Any}",
    "page": "Docstrings",
    "title": "ExpectationStubs.name_argvals_and_sig",
    "category": "method",
    "text": "name_argvals_and_sig(defn)\n\nDoes the extraction of these as is needed for @used and @usedcounts\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExpectationStubs.onlyesc-Tuple{Any}",
    "page": "Docstrings",
    "title": "ExpectationStubs.onlyesc",
    "category": "method",
    "text": "onlyesc(v)\n\nLike esc, except it ignores things that can not be escaped. Eg literals.\n\nInternal use\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExpectationStubs.split_vals_and_sig-Tuple{Any}",
    "page": "Docstrings",
    "title": "ExpectationStubs.split_vals_and_sig",
    "category": "method",
    "text": "split_vals_and_sig(argsexpr)\n\nTakes an expression from a function definition\'s args eg :([a::Int, ::Integer]) and breaks it down into the values, and the types. When value is not given it subsitutes DoNotCare(), when type is not given it subsitutes typeof(val) Returns a tuple of each, with all things in expression/symbol form.\n\nInternal use\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ExpectationStubs.usecount-Tuple{Stub,Any}",
    "page": "Docstrings",
    "title": "ExpectationStubs.usecount",
    "category": "method",
    "text": "usecount(stub:Stub, arg)\n\nReturns how many times the stub has been called with a matching argument\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ExpectationStubs]\nOrder = [:type, :function]"
},

]}
