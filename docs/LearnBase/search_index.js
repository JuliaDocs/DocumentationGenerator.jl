var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LearnBase-1",
    "page": "Readme",
    "title": "LearnBase",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: License) (Image: Build Status) (Image: Build status) (Image: Coverage Status)This package is embodies a community effort to provide common types and function-definitions for Machine Learning packages in Julia.See src/LearnBase.jl for more information"
},

{
    "location": "autodocs/#LearnBase.AbstractBatchView",
    "page": "Docstrings",
    "title": "LearnBase.AbstractBatchView",
    "category": "type",
    "text": "abstract AbstractBatchView{TElem, TData} <: DataView{TElem, TData}\n\nBaseclass for all vector-like views of some data structure, that views it as some form or vector of equally sized batches.\n\nsee MLDataPattern.BatchView for a concrete example.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.AbstractObsView",
    "page": "Docstrings",
    "title": "LearnBase.AbstractObsView",
    "category": "type",
    "text": "abstract AbstractObsView{TElem, TData} <: DataView{TElem, TData}\n\nBaseclass for all vector-like views of some data structure, that views it as some form or vector of observations.\n\nsee MLDataPattern.ObsView for a concrete example.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.BatchIterator",
    "page": "Docstrings",
    "title": "LearnBase.BatchIterator",
    "category": "type",
    "text": "abstract BatchIterator{TElem,TData} <: DataIterator{TElem,TData}\n\nBaseclass for all types that iterate over of some data source one batch at a time.\n\n@assert typeof(RandomBatches(X, size=10)) <: BatchIterator\n\nfor x in RandomBatches(X, size=10)\n    @assert nobs(x) == 10\n    # ...\nend\n\nsee MLDataPattern.RandomBatches\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.Cost",
    "page": "Docstrings",
    "title": "LearnBase.Cost",
    "category": "type",
    "text": "Baseclass for any kind of cost. Notable examples for costs are Loss and Penalty.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.DataIterator",
    "page": "Docstrings",
    "title": "LearnBase.DataIterator",
    "category": "type",
    "text": "abstract DataIterator{TElem,TData}\n\nBaseclass for all types that iterate over a data source in some manner. The total number of observations may or may not be known or defined and in general there is no contract that getobs or nobs has to be supported by the type of data. Furthermore, length should be used to query how many elements the iterator can provide, while nobs may return the underlying true amount of observations available (if known).\n\nsee MLDataPattern.RandomObs, MLDataPattern.RandomBatches\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.DataView",
    "page": "Docstrings",
    "title": "LearnBase.DataView",
    "category": "type",
    "text": "abstract DataView{TElem, TData} <: AbstractVector{TElem}\n\nBaseclass for all vector-like views of some data structure. This allow for example to see some design matrix as a vector of individual observation-vectors instead of one matrix.\n\nsee MLDataPattern.ObsView and MLDataPattern.BatchView for examples.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.DiscreteSet",
    "page": "Docstrings",
    "title": "LearnBase.DiscreteSet",
    "category": "type",
    "text": "Set of discrete items\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.DistanceLoss",
    "page": "Docstrings",
    "title": "LearnBase.DistanceLoss",
    "category": "type",
    "text": "A supervised loss that can be simplified to L(targets, outputs) = L(targets - outputs) is considered distance-based.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.IntervalSet",
    "page": "Docstrings",
    "title": "LearnBase.IntervalSet",
    "category": "type",
    "text": "A continuous range (inclusive) between a lo and a hi\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.Loss",
    "page": "Docstrings",
    "title": "LearnBase.Loss",
    "category": "type",
    "text": "Baseclass for all losses. A loss is some (possibly simplified) function L(features, targets, outputs), where outputs are the result of some function f(features).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.MarginLoss",
    "page": "Docstrings",
    "title": "LearnBase.MarginLoss",
    "category": "type",
    "text": "A supervised loss, where the targets are in {-1, 1}, and which can be simplified to L(targets, outputs) = L(targets * outputs) is considered margin-based.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.Minimizable",
    "page": "Docstrings",
    "title": "LearnBase.Minimizable",
    "category": "type",
    "text": "Baseclass for any prediction model that can be minimized. This means that an object of a subclass contains all the information needed to compute its own current loss.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.ObsIterator",
    "page": "Docstrings",
    "title": "LearnBase.ObsIterator",
    "category": "type",
    "text": "abstract ObsIterator{TElem,TData} <: DataIterator{TElem,TData}\n\nBaseclass for all types that iterate over some data source one observation at a time.\n\nusing MLDataPattern\n@assert typeof(RandomObs(X)) <: ObsIterator\n\nfor x in RandomObs(X)\n    # ...\nend\n\nsee MLDataPattern.RandomObs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.SupervisedLoss",
    "page": "Docstrings",
    "title": "LearnBase.SupervisedLoss",
    "category": "type",
    "text": "A loss is considered supervised, if all the information needed to compute L(features, targets, outputs) are contained in targets and outputs, and thus allows for the simplification L(targets, outputs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.Transformation",
    "page": "Docstrings",
    "title": "LearnBase.Transformation",
    "category": "type",
    "text": "Anything that takes an input and performs some kind of function to produce an output. For example a linear prediction function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.TupleSet",
    "page": "Docstrings",
    "title": "LearnBase.TupleSet",
    "category": "type",
    "text": "Groups several heterogenous sets. Used mainly for proper dispatch.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.UnsupervisedLoss",
    "page": "Docstrings",
    "title": "LearnBase.UnsupervisedLoss",
    "category": "type",
    "text": "A loss is considered unsupervised, if all the information needed to compute L(features, targets, outputs) are contained in features and outputs, and thus allows for the simplification L(features, outputs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.grad",
    "page": "Docstrings",
    "title": "LearnBase.grad",
    "category": "function",
    "text": "Return the gradient of the learnable parameters w.r.t. some objective\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.grad!",
    "page": "Docstrings",
    "title": "LearnBase.grad!",
    "category": "function",
    "text": "Do a backward pass, updating the gradients of learnable parameters and/or inputs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.inputdomain",
    "page": "Docstrings",
    "title": "LearnBase.inputdomain",
    "category": "function",
    "text": "Returns an AbstractSet representing valid input values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.targetdomain",
    "page": "Docstrings",
    "title": "LearnBase.targetdomain",
    "category": "function",
    "text": "Returns an AbstractSet representing valid output/target values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.transform!",
    "page": "Docstrings",
    "title": "LearnBase.transform!",
    "category": "function",
    "text": "Do a forward pass, and return the output\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.ObsDimension",
    "page": "Docstrings",
    "title": "LearnBase.ObsDimension",
    "category": "type",
    "text": "see ?ObsDim\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.default_obsdim",
    "page": "Docstrings",
    "title": "LearnBase.default_obsdim",
    "category": "function",
    "text": "default_obsdim(data)\n\nThe specify the default obsdim for a specific type of data. Defaults to ObsDim.Undefined()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LearnBase]\nOrder = [:type, :function]"
},

]}
