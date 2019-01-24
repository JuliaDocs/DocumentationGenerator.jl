var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AutoGrad-1",
    "page": "Readme",
    "title": "AutoGrad",
    "category": "section",
    "text": "<!– (Image: AutoGrad) (Image: AutoGrad) (Image: AutoGrad) –>(Image: Build Status) (Image: coveralls) (Image: codecov)AutoGrad.jl is an automatic differentiation package for Julia.  It started as a port of the popular Python autograd package and forms the foundation of the Knet Julia deep learning framework. AutoGrad can differentiate regular Julia code that includes loops, conditionals, helper functions, closures etc. by keeping track of the primitive operations and using this execution trace to compute gradients.  It uses reverse mode differentiation (a.k.a. backpropagation) so it can efficiently handle functions with large array inputs and scalar outputs.  It can compute gradients of gradients to handle higher order derivatives."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You can install AutoGrad in Julia using:julia> using Pkg; Pkg.add(\"AutoGrad\")In order to use it in your code start with:using AutoGrad"
},

{
    "location": "#Interface-1",
    "page": "Readme",
    "title": "Interface",
    "category": "section",
    "text": "x = Param([1,2,3])		# user declares parameters\nx => P([1,2,3])			# they are wrapped in a struct\nvalue(x) => [1,2,3]		# we can get the original value\nsum(abs2,x) => 14		# they act like regular values outside of differentiation\ny = @diff sum(abs2,x)	        # if you want the gradients\ny => T(14)			# you get another struct\nvalue(y) => 14			# which represents the same value\ngrad(y,x) => [2,4,6]	        # but also contains gradients for all Params"
},

{
    "location": "#Old-Interface-1",
    "page": "Readme",
    "title": "Old Interface",
    "category": "section",
    "text": "Pre v1.1 AutoGrad only supported the following grad interface. This is still supported.x = [1,2,3]\nf(x) = sum(abs2,x)\ng = grad(f)\nf(x) => 14\ng(x) => [2,4,6]"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "Here is a linear regression example using callable objects:struct Linear; w; b; end		# user defines a model\n(f::Linear)(x) = (f.w * x .+ f.b)\n\n# Initialize a model as a callable object with parameters:\nf = Linear(Param(randn(10,100)), Param(randn(10)))\n\n# SGD training loop:\nfor (x,y) in data\n    loss = @diff sum(abs2,f(x)-y)\n    for w in params(f)\n        g = grad(loss,w)\n	axpy!(-0.01, g, w)\n    end\nendSee the examples directory for more examples."
},

{
    "location": "#Extending-AutoGrad-1",
    "page": "Readme",
    "title": "Extending AutoGrad",
    "category": "section",
    "text": "AutoGrad can only handle a function if the primitives it uses have known gradients.  You can add your own primitives with gradients using the @primitive and @zerograd macros in macros.jl Here is an example:@primitive log(x),dy,y  (dy .* (1 ./ x))The @primitive macro marks the log(::Any) method as a new primitive and the next expression defines a gradient function wrt the first argument.  The gradient expressions can refer to the parameter(s) x, the return variable y and its gradient dy (optionally indicated after the argument list) in the method declaration. For functions with multiple inputs multiple gradient expressions may be given. Non-existent or zero gradients can be specified by omitting a gradient expression or using nothing in place of one. By default the broadcasting version log.(x) is also defined as a primitive, use the @primitive1 macro if you don\'t want this.Note that Julia supports multiple-dispatch, i.e. a function may have multiple methods each supporting different argument types.  For example log(::Float32) and log(::BigFloat) are two different log methods.  In AutoGrad.jl each method can be defined independently as a primitive and can have its own specific gradient. Generally AutoGrad defines gradients without using argument types to keep the rules generic."
},

{
    "location": "#Debugging-and-Profiling-1",
    "page": "Readme",
    "title": "Debugging and Profiling",
    "category": "section",
    "text": "To view the contents of the computational graph after differentiating a function you can use the following:julia> AutoGrad.gcnode(::AutoGrad.Node)=nothing  # without this some values may be lost\njulia> w = Param(rand(2,3)); b = Param(rand(2,1)); x = rand(3,4); y = rand(2,4);\njulia> J = @diff sum(abs2, w*x .+ b - y)\nT(14.695603907991153)\njulia> [J]  # displaying J in an Array causes pretty printing\n1. P(Array{Float64,2}(2,3)) ∇=Array{Float64,2}(2,3)\n2. Array{Float64,2}(2,4) = *(Array{Float64,2}(2,3), Array{Float64,2}(3,4))) ∇=Array{Float64,2}(2,4)\n3. P(Array{Float64,2}(2,1)) ∇=Array{Float64,2}(2,1)\n4. Array{Float64,2}(2,4) = broadcast(+, Array{Float64,2}(2,4), Array{Float64,2}(2,1))) ∇=Array{Float64,2}(2,4)\n5. Array{Float64,2}(2,4) = -(Array{Float64,2}(2,4), Array{Float64,2}(2,4))) ∇=Array{Float64,2}(2,4)\n6. 14.695603907991153 = sum(abs2, Array{Float64,2}(2,4))) ∇=1.0\njulia> z = collect(J)  # collect creates a Node array with reverse order\njulia> dump(z[5], maxdepth=1)  # allowing you to look at individual Nodes and Values\nAutoGrad.Node\n  Value: AutoGrad.Result{Array{Float64,2}}\n  parents: Array{AutoGrad.Node}((2,))\n  children: Array{AutoGrad.Node}((1,))\n  outgrad: Array{Float64}((2, 4)) [3.82753 2.19124 3.26769 3.0075; 2.81565 2.3903 1.84373 1.60228]\n  cdr: AutoGrad.Node\njulia> dump(z[5].Value, maxdepth=2)\nAutoGrad.Result{Array{Float64,2}}\n  value: Array{Float64}((2, 4)) [1.16724 1.07224 0.935047 0.895262; 0.687182 0.589704 0.517114 0.495718]\n  func: * (function of type typeof(*))\n  args: Tuple{Param{Array{Float64,2}},Array{Float64,2}}\n    1: Param{Array{Float64,2}}\n    2: Array{Float64}((3, 4)) [0.515282 0.257471 0.140791 0.127632; 0.705288 0.783289 0.361965 0.311965; 0.780549 0.691645 0.853317 0.843374]\n  kwargs: Base.Iterators.Pairs{Union{},Union{},Tuple{},NamedTuple{(),Tuple{}}}\n    data: NamedTuple{(),Tuple{}} NamedTuple()\n    itr: Tuple{} ()To profile AutoGrad using TimerOutputs.jl, set the environment variable ENV[\"AUTOGRAD_TIMER\"]=\"true\" and rebuild AutoGrad with Pkg.build(\"AutoGrad\"), before evaluating using AutoGrad. The environment variable AUTOGRAD_TIMER is only checked at compile time, not at run time for performance reasons. This will collect detailed timing information but slows the code down, when you are done don\'t forget to delete!(ENV,\"AUTOGRAD_TIMER\") and rebuild AutoGrad. In the example below, the symbol sum indicates the time spent on the forward pass of the sum function and sum[2] indicates the time spent on the backward pass for the second argument. record and sum_outgrads are functions internal to AutoGrad.julia> ENV[\"AUTOGRAD_TIMER\"]=\"true\"\njulia> using Pkg; Pkg.build(\"AutoGrad\")\njulia> using AutoGrad, TimerOutputs\njulia> reset_timer!(AutoGrad.to)\njulia> w = Param(rand(2,3)); b = Param(rand(2,1)); x = rand(3,4); y = rand(2,4);\njulia> J = @diff sum(abs2, w*x .+ b - y)\njulia> AutoGrad.to\n───────────────────────────────────────────────────────────────────────\n                                Time                   Allocations      \n                        ──────────────────────   ───────────────────────\n    Tot / % measured:        4.62s / 30.4%            546MiB / 25.0%    \n\n Section        ncalls     time   %tot     avg     alloc   %tot      avg\n ───────────────────────────────────────────────────────────────────────\n +.[2]               1    328ms  23.3%   328ms   46.4MiB  34.1%  46.4MiB\n sum[2]              1    288ms  20.5%   288ms   40.0MiB  29.4%  40.0MiB\n   *                 1   38.8ms  2.76%  38.8ms    595KiB  0.43%   595KiB\n *                   1    269ms  19.2%   269ms    955KiB  0.68%   955KiB\n +.                  1    139ms  9.92%   139ms   20.4MiB  15.0%  20.4MiB\n *[1]                1    117ms  8.33%   117ms   9.41MiB  6.90%  9.41MiB\n record              4   88.7ms  6.31%  22.2ms   3.49MiB  2.56%   894KiB\n -[1]                1   65.9ms  4.69%  65.9ms   10.0MiB  7.32%  10.0MiB\n -                   1   55.8ms  3.97%  55.8ms    929KiB  0.67%   929KiB\n sum                 1   50.0ms  3.56%  50.0ms   4.68MiB  3.44%  4.68MiB\n +.[1]               1   1.78ms  0.13%  1.78ms   37.7KiB  0.03%  37.7KiB\n sum_outgrads        5   1.41ms  0.10%   282μs   28.2KiB  0.02%  5.64KiB\n ───────────────────────────────────────────────────────────────────────"
},

{
    "location": "#Code-structure-1",
    "page": "Readme",
    "title": "Code structure",
    "category": "section",
    "text": "core.jl implements the main functionality and acts as the main documentation source. macros.jl has some support functions to define and test new primitives. getindex.jl, iterate.jl and cat.jl set up support for common data structures including Arrays, Tuples, and Dictionaries.  The numerical gradients are defined in files such as base.jl and math.jl."
},

{
    "location": "#Current-status-and-future-work-1",
    "page": "Readme",
    "title": "Current status and future work",
    "category": "section",
    "text": "The gradient coverage and unit testing are spotty, I am still adding more gradients and tests to cover the Julia base. Documentation needs to be improved. Overwriting functions (e.g. setindex!) are not supported. Efficiency could be improved by reducing runtime compilation, memoization, and support for static computation."
},

{
    "location": "#Acknowledgments-and-references-1",
    "page": "Readme",
    "title": "Acknowledgments and references",
    "category": "section",
    "text": "AutoGrad.jl was written by Deniz Yuret. Parts of the code were initially ported from the Python autograd package.  I\'d like to thank autograd author Dougal Maclaurin for his support.  See (Baydin et al. 2015) for a general review of automatic differentiation, autograd tutorial for some Python examples, and Dougal\'s PhD thesis for design principles. JuliaDiff and FluxML have alternative differentiation tools for Julia.  I would like to thank the current contributors:Carlo Lucibello\nEkin Akyürek\nEmre Yolcu\nJarrett Revels\nMike Innes\nOzan Arkan Can\nRene DonnerThe suggested citation for AutoGrad is:@inproceedings{knet2016mlsys,\n  author={Yuret, Deniz},\n  title={Knet: beginning deep learning with 100 lines of Julia},\n  year={2016},\n  booktitle={Machine Learning Systems Workshop at NIPS 2016}\n}"
},

{
    "location": "autodocs/#AutoGrad.Param",
    "page": "Docstrings",
    "title": "AutoGrad.Param",
    "category": "type",
    "text": "Usage:\n\nx = Param([1,2,3])          # user declares parameters with `Param`\nx => P([1,2,3])             # `Param` is just a struct wrapping a value\nvalue(x) => [1,2,3]         # `value` returns the thing wrapped\nsum(x .* x) => 14           # Params act like regular values\ny = @diff sum(x .* x)       # Except when we differentiate using `@diff`\ny => T(14)                  # you get another struct\nvalue(y) => 14              # which carries the same result\nparams(y) => [x]            # and the Params that it depends on \ngrad(y,x) => [2,4,6]        # and the gradients for all Params\n\nParam(x) returns a struct that acts like x but marks it as a parameter you want to compute gradients with respect to.\n\n@diff expr evaluates an expression and returns a struct that contains the result (which should be a scalar) and gradient information.\n\ngrad(y, x) returns the gradient of y (output by @diff) with respect to any parameter x::Param, or  nothing if the gradient is 0.\n\nvalue(x) returns the value associated with x if x is a Param or the output of @diff, otherwise returns x.\n\nparams(x) returns an iterator of Params found by a recursive search of object x.\n\nAlternative usage:\n\nx = [1 2 3]\nf(x) = sum(x .* x)\nf(x) => 14\ngrad(f)(x) => [2 4 6]\ngradloss(f)(x) => ([2 4 6], 14)\n\nGiven a scalar valued function f, grad(f,argnum=1) returns another function g which takes the same inputs as f and returns the gradient of the output with respect to the argnum\'th argument. gradloss is similar except the resulting function also returns f\'s output.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AutoGrad.cat1d-Tuple",
    "page": "Docstrings",
    "title": "AutoGrad.cat1d",
    "category": "method",
    "text": "cat1d(args...)\n\nReturn vcat(vec.(args)...) but possibly more efficiently. Can be used to concatenate the contents of arrays with different shapes and sizes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AutoGrad.grad",
    "page": "Docstrings",
    "title": "AutoGrad.grad",
    "category": "function",
    "text": "Usage:\n\nx = Param([1,2,3])          # user declares parameters with `Param`\nx => P([1,2,3])             # `Param` is just a struct wrapping a value\nvalue(x) => [1,2,3]         # `value` returns the thing wrapped\nsum(x .* x) => 14           # Params act like regular values\ny = @diff sum(x .* x)       # Except when we differentiate using `@diff`\ny => T(14)                  # you get another struct\nvalue(y) => 14              # which carries the same result\nparams(y) => [x]            # and the Params that it depends on \ngrad(y,x) => [2,4,6]        # and the gradients for all Params\n\nParam(x) returns a struct that acts like x but marks it as a parameter you want to compute gradients with respect to.\n\n@diff expr evaluates an expression and returns a struct that contains the result (which should be a scalar) and gradient information.\n\ngrad(y, x) returns the gradient of y (output by @diff) with respect to any parameter x::Param, or  nothing if the gradient is 0.\n\nvalue(x) returns the value associated with x if x is a Param or the output of @diff, otherwise returns x.\n\nparams(x) returns an iterator of Params found by a recursive search of object x.\n\nAlternative usage:\n\nx = [1 2 3]\nf(x) = sum(x .* x)\nf(x) => 14\ngrad(f)(x) => [2 4 6]\ngradloss(f)(x) => ([2 4 6], 14)\n\nGiven a scalar valued function f, grad(f,argnum=1) returns another function g which takes the same inputs as f and returns the gradient of the output with respect to the argnum\'th argument. gradloss is similar except the resulting function also returns f\'s output.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AutoGrad.gradloss",
    "page": "Docstrings",
    "title": "AutoGrad.gradloss",
    "category": "function",
    "text": "Usage:\n\nx = Param([1,2,3])          # user declares parameters with `Param`\nx => P([1,2,3])             # `Param` is just a struct wrapping a value\nvalue(x) => [1,2,3]         # `value` returns the thing wrapped\nsum(x .* x) => 14           # Params act like regular values\ny = @diff sum(x .* x)       # Except when we differentiate using `@diff`\ny => T(14)                  # you get another struct\nvalue(y) => 14              # which carries the same result\nparams(y) => [x]            # and the Params that it depends on \ngrad(y,x) => [2,4,6]        # and the gradients for all Params\n\nParam(x) returns a struct that acts like x but marks it as a parameter you want to compute gradients with respect to.\n\n@diff expr evaluates an expression and returns a struct that contains the result (which should be a scalar) and gradient information.\n\ngrad(y, x) returns the gradient of y (output by @diff) with respect to any parameter x::Param, or  nothing if the gradient is 0.\n\nvalue(x) returns the value associated with x if x is a Param or the output of @diff, otherwise returns x.\n\nparams(x) returns an iterator of Params found by a recursive search of object x.\n\nAlternative usage:\n\nx = [1 2 3]\nf(x) = sum(x .* x)\nf(x) => 14\ngrad(f)(x) => [2 4 6]\ngradloss(f)(x) => ([2 4 6], 14)\n\nGiven a scalar valued function f, grad(f,argnum=1) returns another function g which takes the same inputs as f and returns the gradient of the output with respect to the argnum\'th argument. gradloss is similar except the resulting function also returns f\'s output.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AutoGrad.params",
    "page": "Docstrings",
    "title": "AutoGrad.params",
    "category": "function",
    "text": "Usage:\n\nx = Param([1,2,3])          # user declares parameters with `Param`\nx => P([1,2,3])             # `Param` is just a struct wrapping a value\nvalue(x) => [1,2,3]         # `value` returns the thing wrapped\nsum(x .* x) => 14           # Params act like regular values\ny = @diff sum(x .* x)       # Except when we differentiate using `@diff`\ny => T(14)                  # you get another struct\nvalue(y) => 14              # which carries the same result\nparams(y) => [x]            # and the Params that it depends on \ngrad(y,x) => [2,4,6]        # and the gradients for all Params\n\nParam(x) returns a struct that acts like x but marks it as a parameter you want to compute gradients with respect to.\n\n@diff expr evaluates an expression and returns a struct that contains the result (which should be a scalar) and gradient information.\n\ngrad(y, x) returns the gradient of y (output by @diff) with respect to any parameter x::Param, or  nothing if the gradient is 0.\n\nvalue(x) returns the value associated with x if x is a Param or the output of @diff, otherwise returns x.\n\nparams(x) returns an iterator of Params found by a recursive search of object x.\n\nAlternative usage:\n\nx = [1 2 3]\nf(x) = sum(x .* x)\nf(x) => 14\ngrad(f)(x) => [2 4 6]\ngradloss(f)(x) => ([2 4 6], 14)\n\nGiven a scalar valued function f, grad(f,argnum=1) returns another function g which takes the same inputs as f and returns the gradient of the output with respect to the argnum\'th argument. gradloss is similar except the resulting function also returns f\'s output.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AutoGrad.value",
    "page": "Docstrings",
    "title": "AutoGrad.value",
    "category": "function",
    "text": "Usage:\n\nx = Param([1,2,3])          # user declares parameters with `Param`\nx => P([1,2,3])             # `Param` is just a struct wrapping a value\nvalue(x) => [1,2,3]         # `value` returns the thing wrapped\nsum(x .* x) => 14           # Params act like regular values\ny = @diff sum(x .* x)       # Except when we differentiate using `@diff`\ny => T(14)                  # you get another struct\nvalue(y) => 14              # which carries the same result\nparams(y) => [x]            # and the Params that it depends on \ngrad(y,x) => [2,4,6]        # and the gradients for all Params\n\nParam(x) returns a struct that acts like x but marks it as a parameter you want to compute gradients with respect to.\n\n@diff expr evaluates an expression and returns a struct that contains the result (which should be a scalar) and gradient information.\n\ngrad(y, x) returns the gradient of y (output by @diff) with respect to any parameter x::Param, or  nothing if the gradient is 0.\n\nvalue(x) returns the value associated with x if x is a Param or the output of @diff, otherwise returns x.\n\nparams(x) returns an iterator of Params found by a recursive search of object x.\n\nAlternative usage:\n\nx = [1 2 3]\nf(x) = sum(x .* x)\nf(x) => 14\ngrad(f)(x) => [2 4 6]\ngradloss(f)(x) => ([2 4 6], 14)\n\nGiven a scalar valued function f, grad(f,argnum=1) returns another function g which takes the same inputs as f and returns the gradient of the output with respect to the argnum\'th argument. gradloss is similar except the resulting function also returns f\'s output.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AutoGrad.dir-Tuple",
    "page": "Docstrings",
    "title": "AutoGrad.dir",
    "category": "method",
    "text": "Use AutoGrad.dir(path...) to construct paths relative to AutoGrad root.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AutoGrad.gcheck",
    "page": "Docstrings",
    "title": "AutoGrad.gcheck",
    "category": "function",
    "text": "gcheck(f, x...; kw, o...)\n@gcheck f(x...; kw...) (opt1=val1,opt2=val2,...)\n\nNumerically check the gradient of f(x...; kw...) and return a boolean result.\n\nExample call: gcheck(nll,model,x,y) or @gcheck nll(model,x,y). The parameters should be marked as Param arrays in f, x, and/or kw.  Only 10 random entries in each large numeric array are checked by default.  If the output of f is not a number, we check the gradient of sum(f(x...; kw...)). Keyword arguments:\n\nkw=(): keyword arguments to be passed to f, i.e. f(x...; kw...)\nnsample=10: number of random entries from each param to check\natol=0.01,rtol=0.05: tolerance parameters.  See isapprox for their meaning.\ndelta=0.0001: step size for numerical gradient calculation.\nverbose=1: 0 prints nothing, 1 shows failing tests, 2 shows all tests.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AutoGrad.gradcheck-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AutoGrad.gradcheck",
    "category": "method",
    "text": "gradcheck(f, x...; kwargs...)\n\nNumerically check the gradient of f(x...) and return a boolean result.\n\nEach argument can be a Number, Array, Tuple or Dict which in turn can contain other Arrays etc.  Only 10 random entries in each large numeric array are checked by default.  If the output of f is not a number, we check the gradient of sum(f(x...)). See also gcheck for a different take on marking parameters.\n\nKeywords\n\nargs=:: the argument indices to check gradients with respect to. Could be an array or range of indices or a single index. By default all arguments that have a length method are checked.\nkw=(): keyword arguments to be passed to f.\nnsample=10: number of random entries from each numeric array in gradient dw=(grad(f))(w,x...;o...) compared to their numerical estimates.\natol=rtol=0.01: tolerance parameters.  See isapprox for their meaning.\ndelta=0.0001: step size for numerical gradient calculation.\nverbose=1: 0 prints nothing, 1 shows failing tests, 2 shows all tests.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AutoGrad.randcheck",
    "page": "Docstrings",
    "title": "AutoGrad.randcheck",
    "category": "function",
    "text": "Test a numeric function with Float32/64 randn scalars and randn arrays, possibly transforming the input to match the domain\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AutoGrad.unbroadcast-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "AutoGrad.unbroadcast",
    "category": "method",
    "text": "unbroadcast(x,dx)\n\nBring dx to x\'s size via unbroadcasting (reduction). This is needed when defining gradients of multi-argument broadcasting functions where the arguments and the result may be of different sizes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AutoGrad]\nOrder = [:type, :function]"
},

]}
