var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DynamicIterators.jl-1",
    "page": "Readme",
    "title": "DynamicIterators.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#DynamicIterator-1",
    "page": "Readme",
    "title": "DynamicIterator",
    "category": "section",
    "text": "Iterators combine to a tree of iterators, but dynamic iterators combine to a network of interacting entities.Dynamic iterators subtype <:DynamicIterator. They extend the iteration protocol and define    dyniterate(iter, somemessage(state))or    dyniterate(iter, othermessage(state), arg)where message wraps a state or other relevant information. For example the definitionstruct Start{T} <: Message\n    value::T\nend\ndyniterate(iter, Start(value))communicates that iter should start at value (if this is implemented). This is similar to iterate(iter) communicating that iter should start at a predefined value. In fact a fallbackdyniterate(iter, ::Nothing) = iterate(iter)is in place.Some messages make the iterator accept a third argument. A simple example using bind to bind an iterator to an iterator using the three-argument form of dyniterate:using DynamicIterators\nimport DynamicIterators: dyniterate\n\nstruct Summed <: DynamicIterator\nend\n\nfunction dyniterate(::Summed, ::Nothing, y)\n    y, y\nend\n\nfunction dyniterate(::Summed, i, y)\n    i + y, i + y\nend\n\n@show collect(bind(1:5, Summed()))A more in-depth example showing the power of the approach is https://github.com/mschauer/DynamicIterators.jl/blob/master/example/ressourcemanagement.jl, showing how to extend the iterator protocol to allow resource management (e.g. closing of files of child iterators) at the end of iteration of the parent.A preliminary list of supported messages:Message (and third argument) Meaning\nstate or State(state) ordinary iteration\nStart(noting) start the iterator at its default\nStart(x) start the iterate from the state corresponding to value x\nValue(x, state) continue to iterate from the state corresponding to iterate x\nNextKey(state, nextkey) advance an iterator over pairs of key=>values to nextkey\nSteps(state, n) advance the iterator n steps or possibly rewind if n negative\nControl(state), control control term as in the Kalman filter provided as third argument to dyniterate⋆\nSample(state[,rng]) sample from iterates⋆\nNextKeys(state), key advance iterator to the keys provided as third argument to dyniterate⋆⋆persistent messages: dyniterate returns a state again wrapped by the message"
},

{
    "location": "#Evolution:-Evolution-type-dynamic-iterators-1",
    "page": "Readme",
    "title": "Evolution: Evolution-type dynamic iterators",
    "category": "section",
    "text": "Typically, the state of an iterator is opaque. But for some iterators the iterates are the states:julia> value, state = iterate(\'A\':\'Z\')\n(\'A\', \'A\')\n\njulia> value, state = iterate(\'A\':\'Z\', \'X\')\n(\'Y\', \'Y\')This means that the states/iterates of an iterator can be modified in a transparent way. This allows iterators not only to depend on each other, but to interact.DynamicIterators.jl embeds a constrained iterator protocol for iterators subtyping <:Evolution, which defineevolve(iterator, x) -> y\ndub(x) = x === nothing ? nothing : (x,x)\niterate(iterator::Evolution, x) = dub(evolve(iterator, x))which guarantees value == state and introduces a powerful set of combinators for such iterators."
},

{
    "location": "#Combinators-1",
    "page": "Readme",
    "title": "Combinators",
    "category": "section",
    "text": "As a simple example take a Metropolis-Hastings chainIt can be described as a simple Evolution.function evolve(MH::MetropolisHastings, (t,x)::Pair)\n    P = MH.P\n    Q = MH.proposal(x)\n    xᵒ = rand(Q)\n    Qᵒ = MH.proposal(xᵒ)\n    if log(rand(MH.rng)) < MH.logpdf(P, xᵒ) - MH.logpdf(P, x) + MH.logpdf(Qᵒ, x) - MH.logpdf(Q, xᵒ)\n        x = xᵒ\n    end\n    (t+1 => x)\nendThe following example shows that the Mixture iterator combinator can be used to combine two Metropolis-Hastings chains into a component wise MetropolisHastings sampler:using DynamicIterators\nusing Distributions\n\nD = MvNormal([1.0, 0.5], [1.0 0.5; 0.5 1.5] )\nstruct Move{T}\n    x::T\n    σ::Float64\n    i::Int\nend\nm1(x) = Move(x, 0.1, 1)\nm2(x) = Move(x, 0.1, 2)\nBase.rand(M::Move) = M.x + M.σ*randn()*[M.i-1, 2-M.i]\nDistributions.logpdf(M::Move, x) = logpdf(Normal(M.x[M.i], M.σ), x[M.i])\nMH1 = MetropolisHastings(D, m1, logpdf)\nMH2 = MetropolisHastings(D, m2, logpdf)\n\nI = Evolve(i->rand(1:2))\n\nMH = mixture(I, (MH1, MH2))\n\nX = values(trace(MH, 1=>(1, [0.0, 0.0]), endtime(2000)))(Image: img)"
},

{
    "location": "#Lifting-time-1",
    "page": "Readme",
    "title": "Lifting time",
    "category": "section",
    "text": "Lettingevolve(E, (i, x)::Pair) = i + 1 => evolve(E, x)constitutes a \"lifting\" of discrete time. This corresponds to enumerating the iterates of an evolution x = f(x) as (1 => x1, 2 => x2, ...).DynamicIterators control keywords treat Pairs as pair of key and value in concordance with the package Trajectories and somewhat in line with Julia\'s general convention."
},

{
    "location": "#Traces-1",
    "page": "Readme",
    "title": "Traces",
    "category": "section",
    "text": ""
},

{
    "location": "#Controlled-Dynamic-Iterators-1",
    "page": "Readme",
    "title": "Controlled Dynamic Iterators",
    "category": "section",
    "text": ""
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "To illustrates the range of this I have picked some examples of very diverse nature."
},

{
    "location": "autodocs/#DynamicIterators.BindOnce",
    "page": "Docstrings",
    "title": "DynamicIterators.BindOnce",
    "category": "type",
    "text": "BindOnce(state, control)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicIterators.DynamicIterator",
    "page": "Docstrings",
    "title": "DynamicIterators.DynamicIterator",
    "category": "type",
    "text": "DynamicIterator\n\nDynamicIterators which extend the iterator protocol by keywords for the iterate function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicIterators.Evolution",
    "page": "Docstrings",
    "title": "DynamicIterators.Evolution",
    "category": "type",
    "text": "Evolution\n\nEvolutions define\n\n    evolve(iter, value::T)::T\n\nand possibly\n\n    evolve(iter, key=>value)\n\nThey guarantee HasEltype() and eltype(iter) == T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicIterators.Evolve",
    "page": "Docstrings",
    "title": "DynamicIterators.Evolve",
    "category": "type",
    "text": "evolve(f)\n\nCreate the DynamicIterator corresponding to the evolution\n\n    x = f(x)\n\nInteger keys default to increments. Integer control default to keys (and repetitions).\n\njulia> collect(take(from(Evolve(x->x + 1), 10), 5))\n5-element Array{Any,1}:\n 10\n 11\n 12\n 13\n 14\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicIterators.Start",
    "page": "Docstrings",
    "title": "DynamicIterators.Start",
    "category": "type",
    "text": "Start(value) <: Message\n\nTransient message to start to iterate from the state corresponding to value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicIterators.Value",
    "page": "Docstrings",
    "title": "DynamicIterators.Value",
    "category": "type",
    "text": "Value(value, state) <: Message\n\nTransient message to continue to iterate from state reacting to a forced change in the iterate value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicIterators.dyniterate-Tuple{Any,Steps}",
    "page": "Docstrings",
    "title": "DynamicIterators.dyniterate",
    "category": "method",
    "text": "dyniterate(iter, state, (steps,)::Steps)\n\nAdvance the iterator steps times, and for negative numbers, if implemented, rewind the iterator -steps times.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicIterators.synchronize-Tuple",
    "page": "Docstrings",
    "title": "DynamicIterators.synchronize",
    "category": "method",
    "text": "synchronize\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicIterators.trace",
    "page": "Docstrings",
    "title": "DynamicIterators.trace",
    "category": "function",
    "text": "trace(P, u::Pair, stop; register = x->true)\n\nTrace the trajectoy of a keyed Dynamic iterator as Trajectory.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicIterators.Controlled",
    "page": "Docstrings",
    "title": "DynamicIterators.Controlled",
    "category": "type",
    "text": "Controlled(C, P)\n\n\"Controlled\" iterator P with the state t of C calling\n\n(t => x) = evolve(P, t=>x, tᵒ)\n\nExample\n\n# Apply collatz twice each step using the default for Evolve\n\ncollatz(n) = n % 2 == 0 ? n÷2 : 3n + 1\ncollectfrom(Controlled(1:2:20, Evolve(collatz)), (1,14))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicIterators.From",
    "page": "Docstrings",
    "title": "DynamicIterators.From",
    "category": "type",
    "text": "from(P, x)\n\nAttach a starting value to a DynamicIterator.\n\nExample\n\ncollect(from(1:14, 10)) == [11, 12, 13, 14]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicIterators.Mix",
    "page": "Docstrings",
    "title": "DynamicIterators.Mix",
    "category": "type",
    "text": "mix(f, P, Q)\n\nMix two dynamic iterators by applying the mixing function f to their states:\n\nx, y = f(x, y)\n\nExample\n\ncollectfrom(Mix((x,y) -> (x+y, y), 1:0, 1:100), (1,1)))\n# last value 100*101/2 + 100\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicIterators.Mixture",
    "page": "Docstrings",
    "title": "DynamicIterators.Mixture",
    "category": "type",
    "text": "mixture(I, Ps)\n\nevolve(M::Mixture, (i, x))\n\nChoose evolution in Ps[i] for x using iterate i of I.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DynamicIterators.State",
    "page": "Docstrings",
    "title": "DynamicIterators.State",
    "category": "type",
    "text": "State(state) <: Message\n\nPersistent message to iterate from the state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DynamicIterators]\nOrder = [:type, :function]"
},

]}
