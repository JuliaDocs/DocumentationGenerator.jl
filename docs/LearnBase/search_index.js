var documenterSearchIndex = {"docs": [

{
    "location": "#LearnBase.AbstractBatchView",
    "page": "Home",
    "title": "LearnBase.AbstractBatchView",
    "category": "type",
    "text": "abstract AbstractBatchView{TElem, TData} <: DataView{TElem, TData}\n\nBaseclass for all vector-like views of some data structure, that views it as some form or vector of equally sized batches.\n\nsee MLDataPattern.BatchView for a concrete example.\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.AbstractObsView",
    "page": "Home",
    "title": "LearnBase.AbstractObsView",
    "category": "type",
    "text": "abstract AbstractObsView{TElem, TData} <: DataView{TElem, TData}\n\nBaseclass for all vector-like views of some data structure, that views it as some form or vector of observations.\n\nsee MLDataPattern.ObsView for a concrete example.\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.BatchIterator",
    "page": "Home",
    "title": "LearnBase.BatchIterator",
    "category": "type",
    "text": "abstract BatchIterator{TElem,TData} <: DataIterator{TElem,TData}\n\nBaseclass for all types that iterate over of some data source one batch at a time.\n\n@assert typeof(RandomBatches(X, size=10)) <: BatchIterator\n\nfor x in RandomBatches(X, size=10)\n    @assert nobs(x) == 10\n    # ...\nend\n\nsee MLDataPattern.RandomBatches\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.Cost",
    "page": "Home",
    "title": "LearnBase.Cost",
    "category": "type",
    "text": "Baseclass for any kind of cost. Notable examples for costs are Loss and Penalty.\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.DataIterator",
    "page": "Home",
    "title": "LearnBase.DataIterator",
    "category": "type",
    "text": "abstract DataIterator{TElem,TData}\n\nBaseclass for all types that iterate over a data source in some manner. The total number of observations may or may not be known or defined and in general there is no contract that getobs or nobs has to be supported by the type of data. Furthermore, length should be used to query how many elements the iterator can provide, while nobs may return the underlying true amount of observations available (if known).\n\nsee MLDataPattern.RandomObs, MLDataPattern.RandomBatches\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.DataView",
    "page": "Home",
    "title": "LearnBase.DataView",
    "category": "type",
    "text": "abstract DataView{TElem, TData} <: AbstractVector{TElem}\n\nBaseclass for all vector-like views of some data structure. This allow for example to see some design matrix as a vector of individual observation-vectors instead of one matrix.\n\nsee MLDataPattern.ObsView and MLDataPattern.BatchView for examples.\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.DiscreteSet",
    "page": "Home",
    "title": "LearnBase.DiscreteSet",
    "category": "type",
    "text": "Set of discrete items\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.DistanceLoss",
    "page": "Home",
    "title": "LearnBase.DistanceLoss",
    "category": "type",
    "text": "A supervised loss that can be simplified to L(targets, outputs) = L(targets - outputs) is considered distance-based.\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.IntervalSet",
    "page": "Home",
    "title": "LearnBase.IntervalSet",
    "category": "type",
    "text": "A continuous range (inclusive) between a lo and a hi\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.Loss",
    "page": "Home",
    "title": "LearnBase.Loss",
    "category": "type",
    "text": "Baseclass for all losses. A loss is some (possibly simplified) function L(features, targets, outputs), where outputs are the result of some function f(features).\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.MarginLoss",
    "page": "Home",
    "title": "LearnBase.MarginLoss",
    "category": "type",
    "text": "A supervised loss, where the targets are in {-1, 1}, and which can be simplified to L(targets, outputs) = L(targets * outputs) is considered margin-based.\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.Minimizable",
    "page": "Home",
    "title": "LearnBase.Minimizable",
    "category": "type",
    "text": "Baseclass for any prediction model that can be minimized. This means that an object of a subclass contains all the information needed to compute its own current loss.\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.ObsIterator",
    "page": "Home",
    "title": "LearnBase.ObsIterator",
    "category": "type",
    "text": "abstract ObsIterator{TElem,TData} <: DataIterator{TElem,TData}\n\nBaseclass for all types that iterate over some data source one observation at a time.\n\nusing MLDataPattern\n@assert typeof(RandomObs(X)) <: ObsIterator\n\nfor x in RandomObs(X)\n    # ...\nend\n\nsee MLDataPattern.RandomObs\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.SupervisedLoss",
    "page": "Home",
    "title": "LearnBase.SupervisedLoss",
    "category": "type",
    "text": "A loss is considered supervised, if all the information needed to compute L(features, targets, outputs) are contained in targets and outputs, and thus allows for the simplification L(targets, outputs).\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.Transformation",
    "page": "Home",
    "title": "LearnBase.Transformation",
    "category": "type",
    "text": "Anything that takes an input and performs some kind of function to produce an output. For example a linear prediction function.\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.TupleSet",
    "page": "Home",
    "title": "LearnBase.TupleSet",
    "category": "type",
    "text": "Groups several heterogenous sets. Used mainly for proper dispatch.\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.UnsupervisedLoss",
    "page": "Home",
    "title": "LearnBase.UnsupervisedLoss",
    "category": "type",
    "text": "A loss is considered unsupervised, if all the information needed to compute L(features, targets, outputs) are contained in features and outputs, and thus allows for the simplification L(features, outputs).\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.grad",
    "page": "Home",
    "title": "LearnBase.grad",
    "category": "function",
    "text": "Return the gradient of the learnable parameters w.r.t. some objective\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.grad!",
    "page": "Home",
    "title": "LearnBase.grad!",
    "category": "function",
    "text": "Do a backward pass, updating the gradients of learnable parameters and/or inputs\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.inputdomain",
    "page": "Home",
    "title": "LearnBase.inputdomain",
    "category": "function",
    "text": "Returns an AbstractSet representing valid input values\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.targetdomain",
    "page": "Home",
    "title": "LearnBase.targetdomain",
    "category": "function",
    "text": "Returns an AbstractSet representing valid output/target values\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.transform!",
    "page": "Home",
    "title": "LearnBase.transform!",
    "category": "function",
    "text": "Do a forward pass, and return the output\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.ObsDimension",
    "page": "Home",
    "title": "LearnBase.ObsDimension",
    "category": "type",
    "text": "see ?ObsDim\n\n\n\n\n\n"
},

{
    "location": "#LearnBase.default_obsdim",
    "page": "Home",
    "title": "LearnBase.default_obsdim",
    "category": "function",
    "text": "default_obsdim(data)\n\nThe specify the default obsdim for a specific type of data. Defaults to ObsDim.Undefined()\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LearnBase]\nOrder = [:type, :function]"
},

]}
