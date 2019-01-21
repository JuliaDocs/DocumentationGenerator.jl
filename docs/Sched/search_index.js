var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Sched.jl",
    "title": "Sched.jl",
    "category": "page",
    "text": ""
},

{
    "location": "#Sched.Sched",
    "page": "Sched.jl",
    "title": "Sched.Sched",
    "category": "module",
    "text": "A generally useful event scheduler class. Each instance of this class manages its own queue. No multi-threading is implied; you are supposed to hack that yourself, or use a single instance per application. Each instance is parametrized with two functions, one that is supposed to return the current time, one that is supposed to implement a delay.    You can implement real-time scheduling by substituting time and sleep from built-in module time, or you can implement simulated time by writing your own functions.    This can also be used to integrate scheduling with STDWIN events; the delay function is allowed to modify the queue.    Time can be expressed as integers or floating point numbers, as long as it is consistent. Events are specified by tuples (time, priority, action, argument, kwargs). As in UNIX, lower priority numbers mean higher priority; in this way the queue can be maintained as a priority queue.    Execution of the event means calling the action function, passing it the argument sequence in \"argument\" (remember that in Python, multiple function arguments are be packed in a sequence) and keyword parameters in \"kwargs\". The action function may be an instance method so it has another way to reference private data (besides global variables).\n\n\n\n\n\n"
},

{
    "location": "#Sched.jl-1",
    "page": "Sched.jl",
    "title": "Sched.jl",
    "category": "section",
    "text": "A Julia event scheduler inspired by Python sched.CurrentModule = SchedSched"
},

{
    "location": "#Install-1",
    "page": "Sched.jl",
    "title": "Install",
    "category": "section",
    "text": "Sched is a registered package. To add it to your Julia packages, simply do the following in REPL:Pkg.add(\"Sched\")"
},

{
    "location": "#Usage-1",
    "page": "Sched.jl",
    "title": "Usage",
    "category": "section",
    "text": "Markdown.parse(\"\"\"\n```julia\n$(readstring(\"sample/sample.jl\"))\n```\n\"\"\")Download example"
},

{
    "location": "#Contents-1",
    "page": "Sched.jl",
    "title": "Contents",
    "category": "section",
    "text": "Pages = [\n    \"index.md\",\n]"
},

{
    "location": "#Sched.Scheduler",
    "page": "Sched.jl",
    "title": "Sched.Scheduler",
    "category": "type",
    "text": "Scheduler(; timefunc=_time, delayfunc=sleep)\n\nInitialize a new Scheduler instance, passing optionaly the time and delay functions\n\nThe scheduler struct defines a generic interface to scheduling events.  It needs two functions to actually deal with the “outside world”\n\nThe timefunc should be callable without arguments, and return a number (the “time”, in any units whatsoever). timefunc default is UTCDateTimeFunc.\nThe delayfunc function should be callable with one argument, compatible  with the output of timefunc, and should delay that many time units. delayfunc  will also be called with the argument 0 after each event is run to allow other threads an opportunity to run in multi-threaded applications.\n\n\n\n\n\n"
},

{
    "location": "#Sched.enterabs",
    "page": "Sched.jl",
    "title": "Sched.enterabs",
    "category": "function",
    "text": "enterabs(sched, time_, priority, action, args...; kwargs...)\n\nEnter a new event in the queue at an absolute time. Returns an ID for the event which can be used to remove it, if necessary.\n\n\n\n\n\n"
},

{
    "location": "#Sched.enter",
    "page": "Sched.jl",
    "title": "Sched.enter",
    "category": "function",
    "text": "enter(sched, delay, priority, action, args...; kwargs...)\n\nEnter a new event in the queue at a relative time. A variant of enterabs that specifies the time as a relative time. This is actually the more commonly used interface.\n\n\n\n\n\n"
},

{
    "location": "#Sched.cancel",
    "page": "Sched.jl",
    "title": "Sched.cancel",
    "category": "function",
    "text": "cancel(sched, event)\n\nRemove an event from the queue. This must be presented the ID as returned by enter(). If the event is not in the queue, this raises ValueError.\n\n\n\n\n\n"
},

{
    "location": "#Base.isempty",
    "page": "Sched.jl",
    "title": "Base.isempty",
    "category": "function",
    "text": "isempty(collection) -> Bool\n\nDetermine whether a collection is empty (has no elements).\n\nExamples\n\njulia> isempty([])\ntrue\n\njulia> isempty([1 2 3])\nfalse\n\n\n\n\n\nisempty(cb)\n\nTest whether the buffer is empty.\n\n\n\n\n\nisempty(hs::HalfSpace)::Bool\n\nReturn if a half-space is empty or not.\n\nInput\n\nhs – half-space\n\nOutput\n\nfalse.\n\n\n\n\n\nisempty(P::AbstractPolytope)::Bool\n\nDetermine whether a polytope is empty.\n\nInput\n\nP – abstract polytope\n\nOutput\n\ntrue if the given polytope contains no vertices, and false otherwise.\n\nAlgorithm\n\nThis algorithm checks whether the vertices_list of the given polytope is empty or not.\n\n\n\n\n\nisempty(S::AbstractCentrallySymmetric)::Bool\n\nReturn if a centrally symmetric set is empty or not.\n\nInput\n\nS – centrally symmetric set\n\nOutput\n\nfalse.\n\n\n\n\n\nisempty(P::AbstractCentrallySymmetricPolytope)::Bool\n\nReturn if a centrally symmetric, polytopic set is empty or not.\n\nInput\n\nP – centrally symmetric, polytopic set\n\nOutput\n\nfalse.\n\n\n\n\n\nisempty(∅::EmptySet)::Bool\n\nReturn if the empty set is empty or not.\n\nInput\n\n∅ – empty set\n\nOutput\n\ntrue.\n\n\n\n\n\nisempty(P::HPoly{N}; [solver]=GLPKSolverLP())::Bool where {N<:Real}\n\nDetermine whether a polyhedron is empty.\n\nInput\n\nP       – polyhedron\nbackend – (optional, default: default_polyhedra_backend(P, N))              the polyhedral computations backend\nsolver  – (optional, default: GLPKSolverLP()) LP solver backend\n\nOutput\n\ntrue if and only if the constraints are inconsistent.\n\nAlgorithm\n\nThis function uses Polyhedra.isempty which evaluates the feasibility of the LP whose feasible set is determined by the set of constraints and whose objective function is zero.\n\nNotes\n\nThis implementation uses GLPKSolverLP as linear programming backend by default.\n\n\n\n\n\nisempty(hp::Hyperplane)::Bool\n\nReturn if a hyperplane is empty or not.\n\nInput\n\nhp – hyperplane\n\nOutput\n\nfalse.\n\n\n\n\n\nisempty(L::Line)::Bool\n\nReturn if a line is empty or not.\n\nInput\n\nL – line\n\nOutput\n\nfalse.\n\n\n\n\n\nisempty(cp::CartesianProduct)::Bool\n\nReturn if a Cartesian product is empty or not.\n\nInput\n\ncp – Cartesian product\n\nOutput\n\ntrue iff any of the sub-blocks is empty.\n\n\n\n\n\nisempty(cpa::CartesianProductArray)::Bool\n\nReturn if a Cartesian product is empty or not.\n\nInput\n\ncp – Cartesian product\n\nOutput\n\ntrue iff any of the sub-blocks is empty.\n\n\n\n\n\nisempty(ch::ConvexHull)::Bool\n\nReturn if a convex hull of two convex sets is empty or not.\n\nInput\n\nch – convex hull\n\nOutput\n\ntrue iff both wrapped sets are empty.\n\n\n\n\n\nisempty(cha::ConvexHullArray)::Bool\n\nReturn if a convex hull array is empty or not.\n\nInput\n\ncha – convex hull array\n\nOutput\n\ntrue iff all wrapped sets are empty.\n\n\n\n\n\nisempty(em::ExponentialMap)::Bool\n\nReturn if an exponential map is empty or not.\n\nInput\n\nem – exponential map\n\nOutput\n\ntrue iff the wrapped set is empty.\n\n\n\n\n\nisempty(eprojmap::ExponentialProjectionMap)::Bool\n\nReturn if an exponential projection map is empty or not.\n\nInput\n\neprojmap – exponential projection map\n\nOutput\n\ntrue iff the wrapped set is empty.\n\n\n\n\n\nisempty(cap::Intersection)::Bool\n\nReturn if the intersection is empty or not.\n\nInput\n\ncap – intersection of two convex sets\n\nOutput\n\ntrue iff the intersection is empty.\n\nNotes\n\nThe result will be cached, so a second query will be fast.\n\n\n\n\n\nisempty(lm::LinearMap)::Bool\n\nReturn if a linear map is empty or not.\n\nInput\n\nlm – linear map\n\nOutput\n\ntrue iff the wrapped set is empty.\n\n\n\n\n\nisempty(ms::MinkowskiSum)::Bool\n\nReturn if a Minkowski sum is empty or not.\n\nInput\n\nms – Minkowski sum\n\nOutput\n\ntrue iff any of the wrapped sets are empty.\n\n\n\n\n\nisempty(msa::MinkowskiSumArray)::Bool\n\nReturn if a Minkowski sum array is empty or not.\n\nInput\n\nmsa – Minkowski sum array\n\nOutput\n\ntrue iff any of the wrapped sets are empty.\n\n\n\n\n\nisempty(cms::CacheMinkowskiSum)::Bool\n\nReturn if a caching Minkowski sum array is empty or not.\n\nInput\n\ncms – caching Minkowski sum\n\nOutput\n\ntrue iff any of the wrapped sets are empty.\n\nNotes\n\nForgotten sets cannot be checked anymore. Usually they have been empty because otherwise the support vector query should have crashed before. In that case, the caching Minkowski sum should not be used further.\n\n\n\n\n\nisempty(p::Rep, solver::MathProgBase.AbstractMathProgSolver=Polyhedra.solver(p))\n\nCheck whether the polyhedron p is empty by using the solver solver.\n\n\n\n\n\nisempty(sched) -> Bool\n\nCheck whether the queue is empty.\n\n\n\n\n\n"
},

{
    "location": "#Base.run",
    "page": "Sched.jl",
    "title": "Base.run",
    "category": "function",
    "text": "run(command, args...; wait::Bool = true)\n\nRun a command object, constructed with backticks. Throws an error if anything goes wrong, including the process exiting with a non-zero status (when wait is true).\n\nIf wait is false, the process runs asynchronously. You can later wait for it and check its exit status by calling success on the returned process object.\n\nWhen wait is false, the process\' I/O streams are directed to devnull. When wait is true, I/O streams are shared with the parent process. Use pipeline to control I/O redirection.\n\n\n\n\n\nrun(sched; blocking=true)\n\nExecute events until the queue is empty. If blocking is False executes the scheduled events due to expire soonest (if any) and then return the deadline of the next scheduled call in the scheduler. When there is a positive delay until the first event, the delay function is called and the event is left in the queue; otherwise, the event is removed from the queue and executed (its action function is called, passing it the argument).  If the delay function returns prematurely, it is simply restarted. It is legal for both the delay function and the action function to modify the queue or to raise an exception; exceptions are not caught but the scheduler\'s state remains well-defined so run() may be called again. A questionable hack is added to allow other threads to run: just after an event is executed, a delay of 0 is executed, to avoid monopolizing the CPU when other threads are also runnable.\n\n\n\n\n\n"
},

{
    "location": "#Sched.queue",
    "page": "Sched.jl",
    "title": "Sched.queue",
    "category": "function",
    "text": "queue(sched)\n\nReturn an ordered list of upcoming events.\n\n\n\n\n\n"
},

{
    "location": "#Syntax-1",
    "page": "Sched.jl",
    "title": "Syntax",
    "category": "section",
    "text": "SchedulerenterabsentercancelisemptySched.runqueue"
},

{
    "location": "#Sched.Event",
    "page": "Sched.jl",
    "title": "Sched.Event",
    "category": "type",
    "text": "Event(time_, priority, action, args...; kwargs...)\n\nEvent structure\n\ntime_: Numeric type compatible with the return value of the timefunc function passed to the constructor.\'\npriority: Events scheduled for the same time will be executed in the order of their priority.\naction: Executing the event means executing action(args...; kwargs...)\nargs: args is a sequence holding the positional arguments for the action.\nkwargs: kwargs is a dictionary holding the keyword arguments for the action.\n\n\n\n\n\n"
},

{
    "location": "#Sched.Priority",
    "page": "Sched.jl",
    "title": "Sched.Priority",
    "category": "type",
    "text": "Priority(time_, priority)\n\nPriority of events\n\n\n\n\n\n"
},

{
    "location": "#Sched.TimeFunc",
    "page": "Sched.jl",
    "title": "Sched.TimeFunc",
    "category": "type",
    "text": "Abstract type for struct that returns real-time or simulated time when called (functor)\n\n\n\n\n\n"
},

{
    "location": "#Sched.UTCDateTimeFuncStruct",
    "page": "Sched.jl",
    "title": "Sched.UTCDateTimeFuncStruct",
    "category": "type",
    "text": "UTCDateTimeFuncStruct()\n\nFunctor that return real-time as DateTime (UTC) when called\n\n\n\n\n\n"
},

{
    "location": "#Sched.FloatTimeFuncStruct",
    "page": "Sched.jl",
    "title": "Sched.FloatTimeFuncStruct",
    "category": "type",
    "text": "FloatTimeFuncStruct()\n\nFunctor that return real-time as Float when called\n\n\n\n\n\n"
},

{
    "location": "#Package-Internals-1",
    "page": "Sched.jl",
    "title": "Package Internals",
    "category": "section",
    "text": "EventPriorityTimeFuncUTCDateTimeFuncStructFloatTimeFuncStruct"
},

{
    "location": "#See-also-1",
    "page": "Sched.jl",
    "title": "See also",
    "category": "section",
    "text": "ExtensibleScheduler.jl a more advanced and extensible Julia events scheduler\nhttps://discourse.julialang.org/t/julia-cron-like-event-scheduler/6899"
},

]}
