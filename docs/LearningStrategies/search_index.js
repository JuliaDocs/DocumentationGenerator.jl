var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LearningStrategies-1",
    "page": "Readme",
    "title": "LearningStrategies",
    "category": "section",
    "text": "Master Build Test Coverage Discussion\n(Image: Build Status) (Image: Build status) (Image: codecov) (Image: Gitter chat)LearningStrategies is a modular framework for building iterative algorithms in Julia.Below, some of the key concepts are briefly explained, and a few examples are made. A more in-depth notebook can be found here"
},

{
    "location": "#Basics-1",
    "page": "Readme",
    "title": "Basics",
    "category": "section",
    "text": "Many algorithms can be generalized to the following pseudocode:setup\nwhile not finished:\n    (update model)\n    (iteration logic)\ncleanup"
},

{
    "location": "#MetaStrategy-1",
    "page": "Readme",
    "title": "MetaStrategy",
    "category": "section",
    "text": "The core function of LearningStrategies is a straightforward abstract implementation of the above loop.  A model can be learned by an LearningStrategy or a collection of strategies in a MetaStrategy.function learn!(model, strat::LearningStrategy, data)\n    setup!(strat, model[, data])\n    for (i, item) in enumerate(data)\n        update!(model, strat[, i], item)\n        hook(strat, model[, data], i)\n        finished(strat, model[, data], i) && break\n    end\n    cleanup!(strat, model)\n    model\nendFor a MetaStrategy, each function (setup!, update!, hook, finished, cleanup!) is mapped to the contained strategies.\nTo let item == data, pass the argument Iterators.repeated(data)."
},

{
    "location": "#Built-In-Strategies-1",
    "page": "Readme",
    "title": "Built In Strategies",
    "category": "section",
    "text": "See help (i.e. ?MaxIter) for more info.MetaStrategy\nMaxIter\nTimeLimit\nConverged\nConvergedTo\nIterFunction\nTracer\nBreaker\nVerbose"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#Learning-with-a-single-LearningStrategy-1",
    "page": "Readme",
    "title": "Learning with a single LearningStrategy",
    "category": "section",
    "text": "julia> using LearningStrategies\n\njulia> s = Verbose(TimeLimit(2))\nVerbose TimeLimit(2.0)\n\njulia> @elapsed learn!(nothing, s)  # data == InfiniteNothing()\nINFO: TimeLimit(2.0) finished\n2.000225545"
},

{
    "location": "#Learning-with-a-MetaLearner-1",
    "page": "Readme",
    "title": "Learning with a MetaLearner",
    "category": "section",
    "text": "julia> using LearningStrategies\n\njulia> s = strategy(Verbose(MaxIter(5)), TimeLimit(10))\nMetaStrategy\n  > Verbose MaxIter(5)\n  > TimeLimit(10.0)\n\njulia> learn!(nothing, s, 1:100)\nINFO: MaxIter: 1/5\nINFO: MaxIter: 2/5\nINFO: MaxIter: 3/5\nINFO: MaxIter: 4/5\nINFO: MaxIter: 5/5\nINFO: MaxIter(5) finished"
},

{
    "location": "#Linear-Regression-Solver-1",
    "page": "Readme",
    "title": "Linear Regression Solver",
    "category": "section",
    "text": "using LearningStrategies\nimport LearningStrategies: update!, finished\nimport Base.Iterators: repeated\n\nstruct MyLinearModel\n    coef\nend\n\nstruct MyLinearModelSolver <: LearningStrategy end\n\nupdate!(model, s::MyLinearModelSolver, xy) = (model.coef[:] = xy[1] \\ xy[2])\n\nfinished(s::MyLinearModelSolver, model) = true\n\n# generate some fake data\nx = randn(100, 5)\ny = x * range(-1, stop=1, length=5) + randn(100)\n\ndata = (x, y)\n\n# Create the model\nmodel = MyLinearModel(zeros(5))\n\n# learn! the model with data (x, y)\nlearn!(model, MyLinearModelSolver(), repeated(data))\n\n# check that it works\nmodel.coef == x \\ y"
},

{
    "location": "#More-Examples-1",
    "page": "Readme",
    "title": "More Examples",
    "category": "section",
    "text": "There are some user contributed snippets in the examples dir.dftracer.jl shows a tracer with DataFrame as underlying storage."
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "LearningStrategies is partially inspired by IterationManagers and (Tom Breloff\'s) conversations with Spencer Lyon.  This functionality was previously part of the StochasticOptimization package, but was split off as a dependency.Complex LearningStrategy examples (using previous LearningStrategies versions) can be found in StochasticOptimization and from Tom Breloff\'s blog posts.Examples using the current version can be found in SparseRegression."
},

{
    "location": "#Primary-author:-[Tom-Breloff](https://github.com/tbreloff)-1",
    "page": "Readme",
    "title": "Primary author: Tom Breloff",
    "category": "section",
    "text": ""
},

{
    "location": "autodocs/#LearningStrategies.Breaker",
    "page": "Docstrings",
    "title": "LearningStrategies.Breaker",
    "category": "type",
    "text": "Breaker(f)\n\nStop learning when f(model, i) returns true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearningStrategies.Converged",
    "page": "Docstrings",
    "title": "LearningStrategies.Converged",
    "category": "type",
    "text": "Converged(f; tol = 1e-6, every = 1)\n\nStop learning when norm(f(model) - lastf) ≦ tol.  f must return a Vector{Float64}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearningStrategies.ConvergedTo",
    "page": "Docstrings",
    "title": "LearningStrategies.ConvergedTo",
    "category": "type",
    "text": "ConvergedTo(f, goal; tol=1e-6, every=1)\n\nStop learning when ‖f(model) - goal‖ ≦ tol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearningStrategies.IterFunction",
    "page": "Docstrings",
    "title": "LearningStrategies.IterFunction",
    "category": "type",
    "text": "IterFunction(f)\nIterFunction(f, b)\nIterFunction(b, f)\n\nCall f(model, i) every b iterations at hook call. Default value of b is 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearningStrategies.LearningStrategy",
    "page": "Docstrings",
    "title": "LearningStrategies.LearningStrategy",
    "category": "type",
    "text": "A LearningStrategy should implement at least one of the following methods:\n\nsetup!(strat, model, data)\ncleanup!(strat, model)\nhook(strat, model, i)\nfinished(strat, model, data, i)\nupdate!(model, strat, item)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearningStrategies.MaxIter",
    "page": "Docstrings",
    "title": "LearningStrategies.MaxIter",
    "category": "type",
    "text": "MaxIter(n)\n\nStop learning after n iterations.\n\nWrapping MaxIter with Verbose:\n\njulia> learn!(nothing, Verbose(MaxIter(5)), 1:100)\nINFO: MaxIter: 1/5\nINFO: MaxIter: 2/5\nINFO: MaxIter: 3/5\nINFO: MaxIter: 4/5\nINFO: MaxIter: 5/5\nINFO: MaxIter(5) finished\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearningStrategies.MetaStrategy",
    "page": "Docstrings",
    "title": "LearningStrategies.MetaStrategy",
    "category": "type",
    "text": "MetaStrategy(strats::LearningStrategy...)\n\nA collection of learning strategies in a type-stable way.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearningStrategies.TimeLimit",
    "page": "Docstrings",
    "title": "LearningStrategies.TimeLimit",
    "category": "type",
    "text": "TimeLimit(s)\n\nStop learning after s seconds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearningStrategies.Tracer",
    "page": "Docstrings",
    "title": "LearningStrategies.Tracer",
    "category": "type",
    "text": "Tracer{T}(::Type{T}, f, b=1)\n\nStore f(model, i) every b iterations.\n\nTo extract the data Tracer collected, collect(tracer). Note that this operation will copy.\n\njulia> t = Tracer(Int, (model, i) -> @show(i))\nTracer(1, #5, 0-element Array{Int64,1})\n\njulia> learn!(nothing, strategy(MaxIter(3), t))\ni = 1\ni = 2\ni = 3\n\njulia> collect(t)\n3-element Array{Int64,1}:\n 1\n 2\n 3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearningStrategies.Verbose",
    "page": "Docstrings",
    "title": "LearningStrategies.Verbose",
    "category": "type",
    "text": "Verbose(s::LearningStrategy)\nVerbose(s::LearningStrategy, io::IO)\n\nAllow the LearningStrategy s to print output.\n\nWill automatically print when finished(s, args...) == true.\nOther methods should be overloaded to add printout.\nFor example: update!(model, v::Verbose{MyStrategy}, item) = ...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.learn!-Tuple{Any,LearningStrategy,Any}",
    "page": "Docstrings",
    "title": "LearnBase.learn!",
    "category": "method",
    "text": "learn!(model, strategy, data) -> model\n\nLearn a model from data using strategy. New models/strategies/data types should overload at least one of the following:\n\nsetup!\nupdate!\nhook\nfinished\ncleanup!\n\nlearn! Implementation:\n\nfunction learn!(model, s::LearningStrategy, data)\n    setup!(s, model[, data])\n    for (i, item) in enumerate(data)\n        update!(model, s[, i], item)\n        hook(s, model[, data], i)\n        finished(s, model[, data], i) && break\n    end\n    cleanup!(s, model)\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearningStrategies.strategy-Tuple{Vararg{LearningStrategy,N} where N}",
    "page": "Docstrings",
    "title": "LearningStrategies.strategy",
    "category": "method",
    "text": "strategy(s::LearningStrategy...)\nstrategy(ms::MetaStrategy, s::LearningStrategy...)\n\nCreate a MetaStrategy from LearningStrategies or add a LearningStrategy to an existing MetaStrategy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LearningStrategies]\nOrder = [:type, :function]"
},

]}
