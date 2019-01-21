var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Observables-1",
    "page": "Home",
    "title": "Observables",
    "category": "section",
    "text": "Observables are like Refs but you can listen to changes.using Observables\n\nobservable = Observable(0)\n\nh = on(observable) do val\n    println(\"Got an update: \", val)\nend\n\nobservable[] = 42To get the value of an observable index it with no argumentsobservable[]To remove a handler use off with the return value of on:off(observable, h)"
},

{
    "location": "#How-is-it-different-from-Reactive.jl?-1",
    "page": "Home",
    "title": "How is it different from Reactive.jl?",
    "category": "section",
    "text": "The main difference is Signals are manipulated mostly by converting one signal to another. For example, with signals, you can construct a changing UI by creating a Signal of UI objects and rendering them as the signal changes. On the other hand, you can use an Observable both as an input and an output. You can arbitrarily attach outputs to inputs allowing structuring code in a signals-and-slots kind of pattern.Another difference is Observables are synchronous, Signals are asynchronous. Observables may be better suited for an imperative style of programming."
},

{
    "location": "#Observables.Observable",
    "page": "Home",
    "title": "Observables.Observable",
    "category": "type",
    "text": "Like a Ref but updates can be watched by adding a handler using on.\n\n\n\n\n\n"
},

{
    "location": "#Observables.on-Tuple{Any,Observable}",
    "page": "Home",
    "title": "Observables.on",
    "category": "method",
    "text": "on(f, o::AbstractObservable)\n\nAdds function f as listener to o. Whenever o\'s value is set via o[] = val f is called with val.\n\n\n\n\n\n"
},

{
    "location": "#Observables.off-Tuple{Observable,Any}",
    "page": "Home",
    "title": "Observables.off",
    "category": "method",
    "text": "off(o::AbstractObservable, f)\n\nRemoves f from listeners of o.\n\n\n\n\n\n"
},

{
    "location": "#Base.setindex!-Tuple{Observable,Any}",
    "page": "Home",
    "title": "Base.setindex!",
    "category": "method",
    "text": "o[] = val\n\nUpdates the value of an Observable to val and call its listeners.\n\n\n\n\n\n"
},

{
    "location": "#Base.getindex-Tuple{Observable}",
    "page": "Home",
    "title": "Base.getindex",
    "category": "method",
    "text": "o[]\n\nReturns the current value of o.\n\n\n\n\n\n"
},

{
    "location": "#Observables.onany-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "Observables.onany",
    "category": "method",
    "text": "onany(f, args...)\n\nCalls f on updates to any oservable refs in args. args may contain any number of Observable ojects. f will be passed the values contained in the refs as the respective argument. All other ojects in args are passed as-is.\n\n\n\n\n\n"
},

{
    "location": "#Observables.@on",
    "page": "Home",
    "title": "Observables.@on",
    "category": "macro",
    "text": "@on(expr)\n\nWrap AbstractObservables in & to execute expression expr using their value. The expression will be computed every time the AbstractObservables are updated.\n\nExamples\n\njulia> a = Observable(2);\n\njulia> b = Observable(3);\n\njulia> Observables.@on println(\"The sum of a+b is $(&a + &b)\");\n\njulia> a[] = 100;\nThe sum of a+b is 103\n\n\n\n\n\n"
},

{
    "location": "#Base.map!-Tuple{Any,Observable,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "Base.map!",
    "category": "method",
    "text": "map!(f, o::Observable, args...)\n\nUpdates o with the result of calling f with values extracted from args. args may contain any number of Observable ojects. f will be passed the values contained in the refs as the respective argument. All other ojects in args are passed as-is.\n\n\n\n\n\n"
},

{
    "location": "#Observables.@map!",
    "page": "Home",
    "title": "Observables.@map!",
    "category": "macro",
    "text": "@map!(d, expr)\n\nWrap AbstractObservables in & to compute expression expr using their value: the expression will be computed every time the AbstractObservables are updated and d will be set to match that value.\n\nExamples\n\njulia> a = Observable(2);\n\njulia> b = Observable(3);\n\njulia> c = Observable(10);\n\njulia> Observables.@map! c &a + &b;\n\njulia> c[]\n10\n\njulia> a[] = 100\n100\n\njulia> c[]\n103\n\n\n\n\n\n"
},

{
    "location": "#Observables.connect!-Tuple{Observable,Observable}",
    "page": "Home",
    "title": "Observables.connect!",
    "category": "method",
    "text": "connect!(o1::Observable, o2::Observable)\n\nForward all updates to o1 to o2\n\n\n\n\n\n"
},

{
    "location": "#Base.map-Tuple{Any,Observable,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "Base.map",
    "category": "method",
    "text": "map(f, o::Observable, args...)\n\nCreates a new oservable ref which contains the result of f applied to values extracted from args. The second argument o must be an oservable ref for dispatch reasons. args may contain any number of Observable ojects. f will be passed the values contained in the refs as the respective argument. All other ojects in args are passed as-is.\n\n\n\n\n\n"
},

{
    "location": "#Observables.@map",
    "page": "Home",
    "title": "Observables.@map",
    "category": "macro",
    "text": "@map(expr)\n\nWrap AbstractObservables in & to compute expression expr using their value. The expression will be computed when @map is called and  every time the AbstractObservables are updated.\n\nExamples\n\njulia> a = Observable(2);\n\njulia> b = Observable(3);\n\njulia> c = Observables.@map &a + &b;\n\njulia> c[]\n5\n\njulia> a[] = 100\n100\n\njulia> c[]\n103\n\n\n\n\n\n"
},

{
    "location": "#API-1",
    "page": "Home",
    "title": "API",
    "category": "section",
    "text": "Observable{T}\non(f, o::Observable)\noff(o::Observable, f)\nBase.setindex!(o::Observable, val)\nBase.getindex(o::Observable)\nonany(f, os...)\nObservables.@on\nBase.map!(f, o::Observable, os...)\nObservables.@map!\nconnect!(o1::Observable, o2::Observable)\nBase.map(f, o::Observable, os...; init)\nObservables.@map"
},

]}
