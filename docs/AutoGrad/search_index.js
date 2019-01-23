var documenterSearchIndex = {"docs": [

{
    "location": "#AutoGrad.Param",
    "page": "Home",
    "title": "AutoGrad.Param",
    "category": "type",
    "text": "Usage:\n\nx = Param([1,2,3])          # user declares parameters with `Param`\nx => P([1,2,3])             # `Param` is just a struct wrapping a value\nvalue(x) => [1,2,3]         # `value` returns the thing wrapped\nsum(x .* x) => 14           # Params act like regular values\ny = @diff sum(x .* x)       # Except when we differentiate using `@diff`\ny => T(14)                  # you get another struct\nvalue(y) => 14              # which carries the same result\nparams(y) => [x]            # and the Params that it depends on \ngrad(y,x) => [2,4,6]        # and the gradients for all Params\n\nParam(x) returns a struct that acts like x but marks it as a parameter you want to compute gradients with respect to.\n\n@diff expr evaluates an expression and returns a struct that contains the result (which should be a scalar) and gradient information.\n\ngrad(y, x) returns the gradient of y (output by @diff) with respect to any parameter x::Param, or  nothing if the gradient is 0.\n\nvalue(x) returns the value associated with x if x is a Param or the output of @diff, otherwise returns x.\n\nparams(x) returns an iterator of Params found by a recursive search of object x.\n\nAlternative usage:\n\nx = [1 2 3]\nf(x) = sum(x .* x)\nf(x) => 14\ngrad(f)(x) => [2 4 6]\ngradloss(f)(x) => ([2 4 6], 14)\n\nGiven a scalar valued function f, grad(f,argnum=1) returns another function g which takes the same inputs as f and returns the gradient of the output with respect to the argnum\'th argument. gradloss is similar except the resulting function also returns f\'s output.\n\n\n\n\n\n"
},

{
    "location": "#AutoGrad.cat1d-Tuple",
    "page": "Home",
    "title": "AutoGrad.cat1d",
    "category": "method",
    "text": "cat1d(args...)\n\nReturn vcat(vec.(args)...) but possibly more efficiently. Can be used to concatenate the contents of arrays with different shapes and sizes.\n\n\n\n\n\n"
},

{
    "location": "#AutoGrad.grad",
    "page": "Home",
    "title": "AutoGrad.grad",
    "category": "function",
    "text": "Usage:\n\nx = Param([1,2,3])          # user declares parameters with `Param`\nx => P([1,2,3])             # `Param` is just a struct wrapping a value\nvalue(x) => [1,2,3]         # `value` returns the thing wrapped\nsum(x .* x) => 14           # Params act like regular values\ny = @diff sum(x .* x)       # Except when we differentiate using `@diff`\ny => T(14)                  # you get another struct\nvalue(y) => 14              # which carries the same result\nparams(y) => [x]            # and the Params that it depends on \ngrad(y,x) => [2,4,6]        # and the gradients for all Params\n\nParam(x) returns a struct that acts like x but marks it as a parameter you want to compute gradients with respect to.\n\n@diff expr evaluates an expression and returns a struct that contains the result (which should be a scalar) and gradient information.\n\ngrad(y, x) returns the gradient of y (output by @diff) with respect to any parameter x::Param, or  nothing if the gradient is 0.\n\nvalue(x) returns the value associated with x if x is a Param or the output of @diff, otherwise returns x.\n\nparams(x) returns an iterator of Params found by a recursive search of object x.\n\nAlternative usage:\n\nx = [1 2 3]\nf(x) = sum(x .* x)\nf(x) => 14\ngrad(f)(x) => [2 4 6]\ngradloss(f)(x) => ([2 4 6], 14)\n\nGiven a scalar valued function f, grad(f,argnum=1) returns another function g which takes the same inputs as f and returns the gradient of the output with respect to the argnum\'th argument. gradloss is similar except the resulting function also returns f\'s output.\n\n\n\n\n\n"
},

{
    "location": "#AutoGrad.gradloss",
    "page": "Home",
    "title": "AutoGrad.gradloss",
    "category": "function",
    "text": "Usage:\n\nx = Param([1,2,3])          # user declares parameters with `Param`\nx => P([1,2,3])             # `Param` is just a struct wrapping a value\nvalue(x) => [1,2,3]         # `value` returns the thing wrapped\nsum(x .* x) => 14           # Params act like regular values\ny = @diff sum(x .* x)       # Except when we differentiate using `@diff`\ny => T(14)                  # you get another struct\nvalue(y) => 14              # which carries the same result\nparams(y) => [x]            # and the Params that it depends on \ngrad(y,x) => [2,4,6]        # and the gradients for all Params\n\nParam(x) returns a struct that acts like x but marks it as a parameter you want to compute gradients with respect to.\n\n@diff expr evaluates an expression and returns a struct that contains the result (which should be a scalar) and gradient information.\n\ngrad(y, x) returns the gradient of y (output by @diff) with respect to any parameter x::Param, or  nothing if the gradient is 0.\n\nvalue(x) returns the value associated with x if x is a Param or the output of @diff, otherwise returns x.\n\nparams(x) returns an iterator of Params found by a recursive search of object x.\n\nAlternative usage:\n\nx = [1 2 3]\nf(x) = sum(x .* x)\nf(x) => 14\ngrad(f)(x) => [2 4 6]\ngradloss(f)(x) => ([2 4 6], 14)\n\nGiven a scalar valued function f, grad(f,argnum=1) returns another function g which takes the same inputs as f and returns the gradient of the output with respect to the argnum\'th argument. gradloss is similar except the resulting function also returns f\'s output.\n\n\n\n\n\n"
},

{
    "location": "#AutoGrad.params",
    "page": "Home",
    "title": "AutoGrad.params",
    "category": "function",
    "text": "Usage:\n\nx = Param([1,2,3])          # user declares parameters with `Param`\nx => P([1,2,3])             # `Param` is just a struct wrapping a value\nvalue(x) => [1,2,3]         # `value` returns the thing wrapped\nsum(x .* x) => 14           # Params act like regular values\ny = @diff sum(x .* x)       # Except when we differentiate using `@diff`\ny => T(14)                  # you get another struct\nvalue(y) => 14              # which carries the same result\nparams(y) => [x]            # and the Params that it depends on \ngrad(y,x) => [2,4,6]        # and the gradients for all Params\n\nParam(x) returns a struct that acts like x but marks it as a parameter you want to compute gradients with respect to.\n\n@diff expr evaluates an expression and returns a struct that contains the result (which should be a scalar) and gradient information.\n\ngrad(y, x) returns the gradient of y (output by @diff) with respect to any parameter x::Param, or  nothing if the gradient is 0.\n\nvalue(x) returns the value associated with x if x is a Param or the output of @diff, otherwise returns x.\n\nparams(x) returns an iterator of Params found by a recursive search of object x.\n\nAlternative usage:\n\nx = [1 2 3]\nf(x) = sum(x .* x)\nf(x) => 14\ngrad(f)(x) => [2 4 6]\ngradloss(f)(x) => ([2 4 6], 14)\n\nGiven a scalar valued function f, grad(f,argnum=1) returns another function g which takes the same inputs as f and returns the gradient of the output with respect to the argnum\'th argument. gradloss is similar except the resulting function also returns f\'s output.\n\n\n\n\n\n"
},

{
    "location": "#AutoGrad.value",
    "page": "Home",
    "title": "AutoGrad.value",
    "category": "function",
    "text": "Usage:\n\nx = Param([1,2,3])          # user declares parameters with `Param`\nx => P([1,2,3])             # `Param` is just a struct wrapping a value\nvalue(x) => [1,2,3]         # `value` returns the thing wrapped\nsum(x .* x) => 14           # Params act like regular values\ny = @diff sum(x .* x)       # Except when we differentiate using `@diff`\ny => T(14)                  # you get another struct\nvalue(y) => 14              # which carries the same result\nparams(y) => [x]            # and the Params that it depends on \ngrad(y,x) => [2,4,6]        # and the gradients for all Params\n\nParam(x) returns a struct that acts like x but marks it as a parameter you want to compute gradients with respect to.\n\n@diff expr evaluates an expression and returns a struct that contains the result (which should be a scalar) and gradient information.\n\ngrad(y, x) returns the gradient of y (output by @diff) with respect to any parameter x::Param, or  nothing if the gradient is 0.\n\nvalue(x) returns the value associated with x if x is a Param or the output of @diff, otherwise returns x.\n\nparams(x) returns an iterator of Params found by a recursive search of object x.\n\nAlternative usage:\n\nx = [1 2 3]\nf(x) = sum(x .* x)\nf(x) => 14\ngrad(f)(x) => [2 4 6]\ngradloss(f)(x) => ([2 4 6], 14)\n\nGiven a scalar valued function f, grad(f,argnum=1) returns another function g which takes the same inputs as f and returns the gradient of the output with respect to the argnum\'th argument. gradloss is similar except the resulting function also returns f\'s output.\n\n\n\n\n\n"
},

{
    "location": "#AutoGrad.dir-Tuple",
    "page": "Home",
    "title": "AutoGrad.dir",
    "category": "method",
    "text": "Use AutoGrad.dir(path...) to construct paths relative to AutoGrad root.\n\n\n\n\n\n"
},

{
    "location": "#AutoGrad.gcheck",
    "page": "Home",
    "title": "AutoGrad.gcheck",
    "category": "function",
    "text": "gcheck(f, x...; kw, o...)\n@gcheck f(x...; kw...) (opt1=val1,opt2=val2,...)\n\nNumerically check the gradient of f(x...; kw...) and return a boolean result.\n\nExample call: gcheck(nll,model,x,y) or @gcheck nll(model,x,y). The parameters should be marked as Param arrays in f, x, and/or kw.  Only 10 random entries in each large numeric array are checked by default.  If the output of f is not a number, we check the gradient of sum(f(x...; kw...)). Keyword arguments:\n\nkw=(): keyword arguments to be passed to f, i.e. f(x...; kw...)\nnsample=10: number of random entries from each param to check\natol=0.01,rtol=0.05: tolerance parameters.  See isapprox for their meaning.\ndelta=0.0001: step size for numerical gradient calculation.\nverbose=1: 0 prints nothing, 1 shows failing tests, 2 shows all tests.\n\n\n\n\n\n"
},

{
    "location": "#AutoGrad.gradcheck-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "AutoGrad.gradcheck",
    "category": "method",
    "text": "gradcheck(f, x...; kwargs...)\n\nNumerically check the gradient of f(x...) and return a boolean result.\n\nEach argument can be a Number, Array, Tuple or Dict which in turn can contain other Arrays etc.  Only 10 random entries in each large numeric array are checked by default.  If the output of f is not a number, we check the gradient of sum(f(x...)). See also gcheck for a different take on marking parameters.\n\nKeywords\n\nargs=:: the argument indices to check gradients with respect to. Could be an array or range of indices or a single index. By default all arguments that have a length method are checked.\nkw=(): keyword arguments to be passed to f.\nnsample=10: number of random entries from each numeric array in gradient dw=(grad(f))(w,x...;o...) compared to their numerical estimates.\natol=rtol=0.01: tolerance parameters.  See isapprox for their meaning.\ndelta=0.0001: step size for numerical gradient calculation.\nverbose=1: 0 prints nothing, 1 shows failing tests, 2 shows all tests.\n\n\n\n\n\n"
},

{
    "location": "#AutoGrad.randcheck",
    "page": "Home",
    "title": "AutoGrad.randcheck",
    "category": "function",
    "text": "Test a numeric function with Float32/64 randn scalars and randn arrays, possibly transforming the input to match the domain\n\n\n\n\n\n"
},

{
    "location": "#AutoGrad.unbroadcast-Tuple{Any,Any}",
    "page": "Home",
    "title": "AutoGrad.unbroadcast",
    "category": "method",
    "text": "unbroadcast(x,dx)\n\nBring dx to x\'s size via unbroadcasting (reduction). This is needed when defining gradients of multi-argument broadcasting functions where the arguments and the result may be of different sizes.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AutoGrad]\nOrder = [:type, :function]"
},

]}
