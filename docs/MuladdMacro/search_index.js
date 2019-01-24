var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MuladdMacro.jl-1",
    "page": "Readme",
    "title": "MuladdMacro.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)This package provides the @muladd macro. It automatically converts expressions with multiplications and additions or subtractions to calls with muladd which then fuse via FMA when it would increase the performance of the code. The @muladd macro can be placed on code blocks and it will automatically find the appropriate expressions and nest muladd expressions when necessary. In mixed expressions summands without multiplication will be grouped together and evaluated first but otherwise the order of evaluation of multiplications and additions is not changed."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> @macroexpand(@muladd k3 = f(t + c3*dt, @. uprev+dt*(a031*k1+a032*k2)))\n:(k3 = f((muladd)(c3, dt, t), (muladd).(dt, (muladd).(a032, k2, (*).(a031, k1)), uprev)))\n\njulia> @macroexpand(@muladd integrator.EEst = integrator.opts.internalnorm((update - dt*(bhat1*k1 + bhat4*k4 + bhat5*k5 + bhat6*k6 + bhat7*k7 + bhat10*k10))./ @. (integrator.opts.abstol+max(abs(uprev),abs(u))*integrator.opts.reltol)))\n:(integrator.EEst = (integrator.opts).internalnorm((muladd)(-dt, (muladd)(bhat10, k10, (muladd)(bhat7, k7, (muladd)(bhat6, k6, (muladd)(bhat5, k5, (muladd)(bhat4, k4, bhat1 * k1))))), update) ./ (muladd).(max.(abs.(uprev), abs.(u)), (integrator.opts).reltol, (integrator.opts).abstol)))"
},

{
    "location": "#Broadcasting-1",
    "page": "Readme",
    "title": "Broadcasting",
    "category": "section",
    "text": "A muladd call will be broadcasted if both the * and the + or - are broadcasted. If either one is not broadcasted, then the expression will be converted to a non-dotted muladd."
},

{
    "location": "#Credit-1",
    "page": "Readme",
    "title": "Credit",
    "category": "section",
    "text": "Most of the credit goes to @fcard and @devmotion for building the first version and greatly refining the macro. These contributions are not directly shown as this was developed in Gitter chats and in the DiffEqBase.jl repository, but these two individuals did almost all of the work."
},

{
    "location": "autodocs/#MuladdMacro.args-Tuple{Expr}",
    "page": "Docstrings",
    "title": "MuladdMacro.args",
    "category": "method",
    "text": "args(ex)\n\nReturn arguments of function call in ex.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MuladdMacro.iscall-Tuple{Expr,Any}",
    "page": "Docstrings",
    "title": "MuladdMacro.iscall",
    "category": "method",
    "text": "iscall(ex, op)\n\nDetermine whether ex is a call of operation op with at least two arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MuladdMacro.isdotcall-Tuple{Expr,Any}",
    "page": "Docstrings",
    "title": "MuladdMacro.isdotcall",
    "category": "method",
    "text": "isdotcall(ex, op)\n\nDetermine whether ex is a dot call of operation op with at least two arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MuladdMacro.isdotcall-Tuple{Expr}",
    "page": "Docstrings",
    "title": "MuladdMacro.isdotcall",
    "category": "method",
    "text": "isdotcall(ex)\n\nDetermine whether ex is a dot call.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MuladdMacro.ismul-Tuple{Any,Bool}",
    "page": "Docstrings",
    "title": "MuladdMacro.ismul",
    "category": "method",
    "text": "ismul(ex, dot::Bool)\n\nDetermine whether expression ex is a multiplication that is dotted if dot is true and not dotted otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MuladdMacro.issub-Tuple{Any}",
    "page": "Docstrings",
    "title": "MuladdMacro.issub",
    "category": "method",
    "text": "issub(ex)\n\nDetermine whether ex is a subtraction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MuladdMacro.issum-Tuple{Any}",
    "page": "Docstrings",
    "title": "MuladdMacro.issum",
    "category": "method",
    "text": "issum(ex)\n\nDetermine whether ex is a sum.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MuladdMacro.newargs-Tuple{Expr,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "MuladdMacro.newargs",
    "category": "method",
    "text": "newargs(ex, args)\n\nCreate new expression of function call ex with arguments args.\n\nUnary function calls are not considered, i.e. if only one function argument is provided it is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MuladdMacro.newmuladd-Tuple{Any,Any,Any,Bool}",
    "page": "Docstrings",
    "title": "MuladdMacro.newmuladd",
    "category": "method",
    "text": "newmuladd(x, y, z, dot::Bool)\n\nReturn expression (muladd).(x, y, z) if dot is true and muladd(x, y, z) otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MuladdMacro.splitargs-Tuple{Any}",
    "page": "Docstrings",
    "title": "MuladdMacro.splitargs",
    "category": "method",
    "text": "splitargs(ex)\n\nSplit arguments of function call ex before last argument and combine first arguments to one expression if possible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MuladdMacro.sub_to_muladd-Tuple{Any}",
    "page": "Docstrings",
    "title": "MuladdMacro.sub_to_muladd",
    "category": "method",
    "text": "sub_to_muladd(ex)\n\nReplace subtraction ex by muladd if possible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MuladdMacro.sum_to_muladd-Tuple{Any}",
    "page": "Docstrings",
    "title": "MuladdMacro.sum_to_muladd",
    "category": "method",
    "text": "sum_to_muladd(ex)\n\nReplace sum ex by sequence of muladd if possible. Hereby the order of summation might be changed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MuladdMacro.to_muladd-Tuple{Any}",
    "page": "Docstrings",
    "title": "MuladdMacro.to_muladd",
    "category": "method",
    "text": "to_muladd(ex)\n\nConvert every combination of addition/subtraction and multiplication in expression ex to a call of muladd.\n\nIf both of the involved operators are dotted, muladd is applied as a dot call The order of summation might be changed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [MuladdMacro]\nOrder = [:type, :function]"
},

]}
