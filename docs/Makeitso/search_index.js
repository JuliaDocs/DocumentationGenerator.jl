var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Makeitso.jl-1",
    "page": "Readme",
    "title": "Makeitso.jl",
    "category": "section",
    "text": "Make-like behavior to facilitate writing long-running scripts. The idea is that the user supplies the dependencies between targets and recipes for how to make a target from those dependencies. If changes happen to one recipe (cf. if one edits one source file in a make project), only affected variables will be recomputed.Upon computation, a backup is written to disk. This means that even when the work on the script is resumed in a different session (because you went home, julia crashed, you ran out of memory, you share the data with coworkers over e.g. Dropbox), only missing and out-of-date targets will be recomputed.This saves a lot of time and unnecessary reruns of computations. It also relieves the programmer of having to track all dependencies and keep a clear picture of the workspace in their head."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "using Makeitso\n\n@target A ()->1:10\n@target B ()->[-4,-3,-2,-1,0,1,2,3,4,5]\n@target C (A,B)->A.+B\n@target D (A,B,C)->A.+B.+C\n\nx = (@make D)[end]\n@assert x == 30\n\n@target B ()->pi\nprintln(\"--- Recipe for B modified! ---\")\n\nx = (@make D)[end]\n@assert x ≈ (20+2pi)\nThis script describes the dependencies between targets A,B,C,D. Upon calling @make D all targets D depends on are built. Copies are written to disk in case we want to continue work in a future julia session. Assuming this is the first run ever (i.e. no copies on disk exist), the script results in the following output:[ Info: level 1 dep A: computed from dependencies [initial computation].\n[ Info: level 1 dep B: computed from dependencies [initial computation].\n[ Info: level 2 dep A: retrieved from memory cache.\n[ Info: level 2 dep B: retrieved from memory cache.\n[ Info: level 1 dep C: computed from dependencies [initial computation].\n[ Info: level 0 dep D: computed from dependencies [initial computation].\n--- Recipe for B modified! ---\n[ Info: level 1 dep A: retrieved from memory cache.\n[ Info: level 1 dep B: computed from dependencies [initial computation].\n[ Info: level 2 dep A: retrieved from memory cache.\n[ Info: level 2 dep B: retrieved from memory cache.\n[ Info: level 1 dep C: computed from dependencies [memory cache out-of-date].\n[ Info: level 0 dep D: computed from dependencies [memory cache out-of-date]Note in particular that modifiying target B has the desired effect of recomputing B,C,D. An immediate second run will not require A to be recomputed, but B,C,D will, because we reverted to the original recipe for B:[ Info: level 1 dep A: retrieved from memory cache.\n[ Info: level 1 dep B: computed from dependencies [initial computation].\n[ Info: level 2 dep A: retrieved from memory cache.\n[ Info: level 2 dep B: retrieved from memory cache.\n[ Info: level 1 dep C: computed from dependencies [memory cache out-of-date].\n[ Info: level 0 dep D: computed from dependencies [memory cache out-of-date].\n--- Recipe for B modified! ---\n[ Info: level 1 dep A: retrieved from memory cache.\n[ Info: level 1 dep B: computed from dependencies [initial computation].\n[ Info: level 2 dep A: retrieved from memory cache.\n[ Info: level 2 dep B: retrieved from memory cache.\n[ Info: level 1 dep C: computed from dependencies [memory cache out-of-date].\n[ Info: level 0 dep D: computed from dependencies [memory cache out-of-date].Likewise, killing the session and running the script again will see A restored from disk, but the other targets are recomputed twice (one for each version of the recipe for B):Julia has exited. Press Enter to start a new session.\nStarting Julia...\njulia> include(\"examples/hello.jl\")\n[ Info: level 1 dep A: restored from disk.\n[ Info: level 1 dep B: computed from dependencies [recipe modified].\n[ Info: level 2 dep A: retrieved from memory cache.\n[ Info: level 2 dep B: retrieved from memory cache.\n[ Info: level 1 dep C: computed from dependencies [store out-of-date].\n[ Info: level 0 dep D: computed from dependencies [store out-of-date].\n--- Recipe for B modified! ---\n[ Info: level 1 dep A: retrieved from memory cache.\n[ Info: level 1 dep B: computed from dependencies [initial computation].\n[ Info: level 2 dep A: retrieved from memory cache.\n[ Info: level 2 dep B: retrieved from memory cache.\n[ Info: level 1 dep C: computed from dependencies [memory cache out-of-date].\n[ Info: level 0 dep D: computed from dependencies [memory cache out-of-date]."
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "Recipe validity is tracked by storing the hash of the corresponding julia Expr\nThe @target macro creates a variable target_A etc. in the module namespace, excluding these names as valid variable names in your script.\nRecipes resulting in nothing are not valid as nothing indicates absence of an in-memory cached value.\nUp-dates to normal non-target variables are not tracked and changes to them will not trigger recomputation of dependents. Functions taking zero arguments and returning a constant value are the appropriate way to allow for changeable parameters."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Makeitso]\nOrder = [:type, :function]"
},

]}
