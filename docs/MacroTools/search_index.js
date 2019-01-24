var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MacroTools.jl-1",
    "page": "Readme",
    "title": "MacroTools.jl",
    "category": "section",
    "text": "This library provides helpful tools for writing macros, notably a very simple but powerful templating system and some functions that have proven useful to me (see utils.jl.)"
},

{
    "location": "#Template-Matching-1",
    "page": "Readme",
    "title": "Template Matching",
    "category": "section",
    "text": "Template matching enables macro writers to deconstruct Julia expressions in a more declarative way, and without having to know in great detail how syntax is represented internally. For example, say you have a type definition:ex = quote\n  type Foo\n    x::Int\n    y\n  end\nendIf you know what you\'re doing, you can pull out the name and fields via:julia> if isexpr(ex.args[2], :type)\n         (ex.args[2].args[2], ex.args[2].args[3].args)\n       end\n(:Foo,{:( # line 3:),:(x::Int),:( # line 4:),:y})But this is hard to write – since you have to deconstruct the type expression by hand – and hard to read, since you can\'t tell at a glance what\'s being achieved. On top of that, there\'s a bunch of messy stuff to deal with like pesky begin blocks which wrap a single expression, line numbers, etc. etc.Enter MacroTools:julia> using MacroTools\n\njulia> @capture(ex, type T_ fields__ end)\ntrue\n\njulia> T, fields\n(:Foo, [:(x::Int), :y])Symbols like T_ underscore are treated as catchalls which match any expression, and the expression they match is bound to the (underscore-less) variable, as above.Because @capture doubles as a test as well as extracting values, you can easily handle unexpected input (try writing this by hand):@capture(ex, f_{T_}(xs__) = body_) ||\n  error(\"expected a function with a single type parameter\")Symbols like f__ (double underscored) are similar, but slurp a sequence of arguments into an array. For example:julia> @capture(:[1, 2, 3, 4, 5, 6, 7], [1, a_, 3, b__, c_])\ntrue\n\njulia> a, b, c\n(2,[4,5,6],7)Slurps don\'t have to be at the end of an expression, but like the Highlander there can only be one (per expression)."
},

{
    "location": "#Matching-on-expression-type-1",
    "page": "Readme",
    "title": "Matching on expression type",
    "category": "section",
    "text": "@capture can match expressions by their type, which is either the head of Expr objects or the typeof atomic stuff like Symbols and Ints. For example:@capture(ex, foo(x_String_string))This will match a call to the foo function which has a single argument, which may either be a String object or a Expr(:string, ...) (e.g. @capture(:(foo(\"$(a)\")), foo(x_String_string))). Julia string literals may be parsed into either type of object, so this is a handy way to catch both.Another common use case is to catch symbol literals, e.g.@capture(ex,\n  type T_Symbol\n    fields__\n  end)which will match e.g. type Foo ... but not type Foo{V} ..."
},

{
    "location": "#Unions-1",
    "page": "Readme",
    "title": "Unions",
    "category": "section",
    "text": "@capture can also try to match the expression against one pattern or another, for example:@capture(ex, f_(args__) = body_ | function f_(args__) body_ end)will match both kinds of function syntax (though it\'s easier to use shortdef to normalise definitions). You can also do this within expressions, e.g.@capture(ex, (f_{T_}|f_)(args__) = body_)matches a function definition, with a single type parameter bound to T if possible. If not, T = nothing."
},

{
    "location": "#Expression-Walking-1",
    "page": "Readme",
    "title": "Expression Walking",
    "category": "section",
    "text": "If you\'ve ever written any more interesting macros, you\'ve probably found yourself writing recursive functions to work with nested Expr trees. MacroTools\' prewalk and postwalk functions factor out the recursion, making macro code much more concise and robust.These expression-walking functions essentially provide a kind of find-and-replace for expression trees. For example:julia> using MacroTools: prewalk, postwalk\n\njulia> postwalk(x -> x isa Integer ? x + 1 : x, :(2+3))\n:(3 + 4)In other words, look at each item in the tree; if it\'s an integer, add one, if not, leave it alone.We can do more complex things if we combine this with @capture. For example, say we want to insert an extra argument into all function calls:julia> ex = quote\n         x = f(y, g(z))\n         return h(x)\n       end\n\njulia> postwalk(x -> @capture(x, f_(xs__)) ? :($f(5, $(xs...))) : x, ex)\nquote  # REPL[20], line 2:\n    x = f(5, y, g(5, z)) # REPL[20], line 3:\n    return h(5, x)\nendMost of the time, you can use postwalk without worrying about it, but we also provide prewalk. The difference is the order in which you see sub-expressions; postwalk sees the leaves of the Expr tree first and the whole expression last, while prewalk is the opposite.julia> postwalk(x -> @show(x) isa Integer ? x + 1 : x, :(2+3*4));\nx = :+\nx = 2\nx = :*\nx = 3\nx = 4\nx = :(4 * 5)\nx = :(3 + 4 * 5)\n\njulia> prewalk(x -> @show(x) isa Integer ? x + 1 : x, :(2+3*4));\nx = :(2 + 3 * 4)\nx = :+\nx = 2\nx = :(3 * 4)\nx = :*\nx = 3\nx = 4A significant difference is that prewalk will walk into whatever expression you return.julia> postwalk(x -> @show(x) isa Integer ? :(a+b) : x, 2)\nx = 2\n:(a + b)\n\njulia> prewalk(x -> @show(x) isa Integer ? :(a+b) : x, 2)\nx = 2\nx = :+\nx = :a\nx = :b\n:(a + b)This makes it somewhat more prone to infinite loops; for example, if we returned :(1+b) instead of :(a+b), prewalk would hang trying to expand all of the 1s in the expression.With these tools in hand, a useful general pattern for macros is:macro foo(ex)\n  postwalk(ex) do x\n    @capture(x, some_pattern) || return x\n    return new_x\n  end\nend"
},

{
    "location": "#Function-definitions-1",
    "page": "Readme",
    "title": "Function definitions",
    "category": "section",
    "text": "splitdef(def) matches a function definition of the formfunction name{params}(args; kwargs)::rtype where {whereparams}\n   body\nendand returns Dict(:name=>..., :args=>..., etc.). The definition can be rebuilt by calling MacroTools.combinedef(dict), or explicitly withrtype = get(dict, :rtype, :Any)\nall_params = [get(dict, :params, [])..., get(dict, :whereparams, [])...]\n:(function $(dict[:name]){$(all_params...)}($(dict[:args]...);\n                                            $(dict[:kwargs]...))::$rtype\n      $(dict[:body])\n  end)splitarg(arg) matches function arguments (whether from a definition or a function call) such as x::Int=2 and returns (arg_name, arg_type, slurp, default). default is nothing when there is none. For example:> map(splitarg, (:(f(y, a=2, x::Int=nothing, args...))).args[2:end])\n4-element Array{Tuple{Symbol,Symbol,Bool,Any},1}:\n (:y, :Any, false, nothing)  \n (:a, :Any, false, 2)        \n (:x, :Int, false, :nothing) \n (:args, :Any, true, nothing)"
},

{
    "location": "autodocs/#MacroTools.inexpr-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "MacroTools.inexpr",
    "category": "method",
    "text": "inexpr(expr, x)\n\nSimple expression match; will return true if the expression x can be found inside expr.\n\ninexpr(:(2+2), 2) == true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.isdef-Tuple{Any}",
    "page": "Docstrings",
    "title": "MacroTools.isdef",
    "category": "method",
    "text": "Test for function definition expressions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.isexpr-Tuple{Expr}",
    "page": "Docstrings",
    "title": "MacroTools.isexpr",
    "category": "method",
    "text": "isexpr(x, ts...)\n\nConvenient way to test the type of a Julia expression. Expression heads and types are supported, so for example you can call\n\nisexpr(expr, String, :string)\n\nto pick up on all string-like expressions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.namify-Tuple{Symbol}",
    "page": "Docstrings",
    "title": "MacroTools.namify",
    "category": "method",
    "text": "An easy way to get pull the (function/type) name out of expressions like foo{T} or Bar{T} <: Vector{T}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.prettify-Tuple{Any}",
    "page": "Docstrings",
    "title": "MacroTools.prettify",
    "category": "method",
    "text": "prettify(ex)\n\nMakes generated code generaly nicer to look at.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.rmlines-Tuple{Any}",
    "page": "Docstrings",
    "title": "MacroTools.rmlines",
    "category": "method",
    "text": "rmlines(x)\n\nRemove the line nodes from a block or array of expressions.\n\nCompare quote end vs rmlines(quote end)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.splitarg-Tuple{Any}",
    "page": "Docstrings",
    "title": "MacroTools.splitarg",
    "category": "method",
    "text": "splitarg(arg)\n\nMatch function arguments (whether from a definition or a function call) such as x::Int=2 and return (arg_name, arg_type, is_splat, default). arg_name and default are nothing when they are absent. For example:\n\n> map(splitarg, (:(f(a=2, x::Int=nothing, y, args...))).args[2:end])\n4-element Array{Tuple{Symbol,Symbol,Bool,Any},1}:\n (:a, :Any, false, 2)\n (:x, :Int, false, :nothing)\n (:y, :Any, false, nothing)\n (:args, :Any, true, nothing)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.splitdef-Tuple{Any}",
    "page": "Docstrings",
    "title": "MacroTools.splitdef",
    "category": "method",
    "text": "splitdef(fdef)\n\nMatch any function definition\n\nfunction name{params}(args; kwargs)::rtype where {whereparams}\n   body\nend\n\nand return Dict(:name=>..., :args=>..., etc.). The definition can be rebuilt by calling MacroTools.combinedef(dict), or explicitly with\n\nrtype = get(dict, :rtype, :Any)\nall_params = [get(dict, :params, [])..., get(dict, :whereparams, [])...]\n:(function $(dict[:name]){$(all_params...)}($(dict[:args]...);\n                                            $(dict[:kwargs]...))::$rtype\n      $(dict[:body])\n  end)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.unblock-Tuple{Any}",
    "page": "Docstrings",
    "title": "MacroTools.unblock",
    "category": "method",
    "text": "unblock(expr)\n\nRemove outer begin blocks from an expression, if the block is redundant (i.e. contains only a single expression).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.alias_gensyms-Tuple{Any}",
    "page": "Docstrings",
    "title": "MacroTools.alias_gensyms",
    "category": "method",
    "text": "alias_gensyms(expr)\n\nReplaces gensyms with animal names This makes gensym\'d code far easier to follow.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.assoc!-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "MacroTools.assoc!",
    "category": "method",
    "text": "assoc!(d, k, v)\n\nis the same as d[k] = v but returns d rather than v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.combinearg-NTuple{4,Any}",
    "page": "Docstrings",
    "title": "MacroTools.combinearg",
    "category": "method",
    "text": "combinearg(arg_name, arg_type, is_splat, default)\n\ncombinearg is the inverse of splitarg. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.combinedef-Tuple{Dict}",
    "page": "Docstrings",
    "title": "MacroTools.combinedef",
    "category": "method",
    "text": "combinedef(dict::Dict)\n\ncombinedef is the inverse of splitdef. It takes a splitdef-like Dict and returns a function definition. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.gatherwheres-Tuple{Any}",
    "page": "Docstrings",
    "title": "MacroTools.gatherwheres",
    "category": "method",
    "text": "gatherwheres(:(f(x::T, y::U) where T where U)) => (:(f(x::T, y::U)), (:U, :T))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.gensym_ids-Tuple{Any}",
    "page": "Docstrings",
    "title": "MacroTools.gensym_ids",
    "category": "method",
    "text": "gensym_ids(expr)\n\nReplaces gensyms with unique ids (deterministically)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.postwalk-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "MacroTools.postwalk",
    "category": "method",
    "text": "postwalk(f, expr)\n\nApplies f to each node in the given expression tree, returning the result. f sees expressions after they have been transformed by the walk. See also prewalk.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MacroTools.prewalk-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "MacroTools.prewalk",
    "category": "method",
    "text": "prewalk(f, expr)\n\nApplies f to each node in the given expression tree, returning the result. f sees expressions before they have been transformed by the walk, and the walk will be applied to whatever f returns.\n\nThis makes prewalk somewhat prone to infinite loops; you probably want to try postwalk first.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [MacroTools]\nOrder = [:type, :function]"
},

]}
