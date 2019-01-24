var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ModelingToolkit.jl-1",
    "page": "Readme",
    "title": "ModelingToolkit.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)ModelingToolkit.jl is an intermediate representation (IR) of computational graphs for scientific computing problems. Its purpose is to be a common target for modeling DSLs in order to allow for a common platform for model inspection and transformation. It uses a tagged variable IR in order to allow specification of complex models and allow for transformations of models. It has ways to plug into its function registration and derivative system so that way it can interact nicely with user-defined routines. Together, this is an abstract form of a scientific model that is easy for humans to generate but also easy for programs to manipulate."
},

{
    "location": "#Warning:-This-repository-is-a-work-in-progress-1",
    "page": "Readme",
    "title": "Warning: This repository is a work-in-progress",
    "category": "section",
    "text": ""
},

{
    "location": "#Introduction-by-Examples-1",
    "page": "Readme",
    "title": "Introduction by Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#Example:-ODE-1",
    "page": "Readme",
    "title": "Example: ODE",
    "category": "section",
    "text": "Let\'s build an ODE. First we define some variables. In a differential equation system, we need to differentiate between our dependent variables, independent variables, and parameters. Therefore we label them as follows:using ModelingToolkit\n\n# Define some variables\n@IVar t\n@DVar x(t) y(t) z(t)\n@Deriv D\'~t\n@Param σ ρ βThen we build the system:eqs = [D*x ~ σ*(y-x),\n       D*y ~ x*(ρ-z)-y,\n       D*z ~ x*y - β*z]Each operation builds an Operation type, and thus eqs is an array of Operation and Variables. This holds a tree of the full system that can be analyzed by other programs. We can turn this into a DiffEqSystem via:de = DiffEqSystem(eqs,[t],[x,y,z],Variable[],[σ,ρ,β])\nde = DiffEqSystem(eqs)where we tell it the variable types and ordering in the first version, or let it automatically determine the variable types in the second version. This can then generate the function. For example, we can see the generated code via:ModelingToolkit.generate_ode_function(de)\n\n## Which returns:\n:((du, u, p, t)->begin\n                x = u[1]\n                y = u[2]\n                z = u[3]\n                σ = p[1]\n                ρ = p[2]\n                β = p[3]\n                x_t = σ * (y - x)\n                y_t = x * (ρ - z) - y\n                z_t = x * y - β * z\n                du[1] = x_t\n                du[2] = y_t\n                du[3] = z_t\n            end\n        end)and get the generated function via:f = ODEFunction(de)"
},

{
    "location": "#Example:-Nonlinear-System-1",
    "page": "Readme",
    "title": "Example: Nonlinear System",
    "category": "section",
    "text": "We can also build nonlinear systems. Let\'s say we wanted to solve for the steady state of the previous ODE. This is the nonlinear system defined by where the derivatives are zero. We could use dependent variables for our nonlinear system (for direct compatibility with the above ODE code), or we can use non-tagged variables. Here we will show the latter. We write:@Var x y z\n@Param σ ρ β\n\n# Define a nonlinear system\neqs = [0 ~ σ*(y-x),\n       0 ~ x*(ρ-z)-y,\n       0 ~ x*y - β*z]\nns = NonlinearSystem(eqs)\nnlsys_func = ModelingToolkit.generate_nlsys_function(ns)which generates:(du, u, p)->begin  # C:\\Users\\Chris\\.julia\\v0.6\\ModelingToolkit\\src\\systems.jl, line 51:\n        begin  # C:\\Users\\Chris\\.julia\\v0.6\\ModelingToolkit\\src\\utils.jl, line 2:\n            y = u[1]\n            x = u[2]\n            z = u[3]\n            σ = p[1]\n            ρ = p[2]\n            β = p[3]\n            resid[1] = σ * (y - x)\n            resid[2] = x * (ρ - z) - y\n            resid[3] = x * y - β * z\n        end\n    endWe can use this to build a nonlinear function for use with NLsolve.jl:f = @eval eval(nlsys_func)\n# Make a closure over the parameters for for NLsolve.jl\nf2 = (du,u) -> f(du,u,(10.0,26.0,2.33))"
},

{
    "location": "#Core-Principles-1",
    "page": "Readme",
    "title": "Core Principles",
    "category": "section",
    "text": "The core idea behind ModelingToolkit.jl is that mathematical equations require context, and thus any symbolic manipulations and full model specifications requires the ability to handle such context. When writing DSLs, this fact comes to light very quickly. Every DSL seems to lower to some intermediate representation from which the final result is computed, but this process means there\'s a lot of repeated ideas for every DSL that creates scientific computing objects like differential equations and nonlinear systems. By having a single common contexualized IR, this gives DSLs a target to write to so that way lower-level details like computation of system Jacobians can be disconnected from the DSL and its syntax, allowing for code-reuse between modeling packages and languages.In this section we define the core pieces of the IR and what they mean."
},

{
    "location": "#Variables-1",
    "page": "Readme",
    "title": "Variables",
    "category": "section",
    "text": "The simplest piece of the IR is the Variable. The Variable is the context-aware single variable of the IR. Its fields are described as follows:name: the name of the Variable. Note that this is not necessarily the same as the name of the Julia variable. But this symbol itself is considered the core identifier of the Variable in the sense of equality.\nvalue: the value of the Variable. The meaning of the value can be interpreted differently for different systems, but in most cases it\'s tied to whatever value information would be required for the system to be well-defined such as the initial condition of a differential equation.\nvalue_type: the type that the values have to be. It\'s disconnected from the value because in many cases the value may not be able to be specified in advance even when we may already know the type. This can be used to set units or denote a variable as being of higher precision.\nsubtype: the main denotation of context. Variables within systems are grouped according to their subtype.\ndiff: the operator objects attached to the variable\ndependents: the vector of variables on which the current variable is dependent. For example, u(t,x) has dependents [t,x]. Derivatives thus require this information in order to simplify down.\nflow: a boolean that describes the connection behavior between systems, whether it should connect to have summation to zero or equality.\ndescription: a string description of the variable used for building printouts and other descriptive outputs.\ndomain: a type which describes the domain in which the values of the variable lives.\nsize: the size of the variable. By default it\'s nothing, denoting that the variable is a scalar. Otherwise it\'s a tuple of numbers which describes the size of the array for the variable.\ncontext: this is an open field for DSLs to carry along more context in the variables, but is not used in the systems themselves."
},

{
    "location": "#Operations-1",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": "Operations are the basic composition of variables and puts together the pieces with a function. The operator ~ is a special operator which denotes equality between the arguments."
},

{
    "location": "#Operators-1",
    "page": "Readme",
    "title": "Operators",
    "category": "section",
    "text": "An operator is an object which modifies variables via *. It adds the operator to the diff field of the variable and changes the interpretation of the variable. The current operators are:Differential: a differential denotes the derivative with respect to a given variable. It can be expanded via expand_derivatives which symbolically differentiates expressions recursively and cancels out appropriate constant variables."
},

{
    "location": "#Systems-1",
    "page": "Readme",
    "title": "Systems",
    "category": "section",
    "text": "A system is a collection of operations with expanded context. While different systems can have different constructors and interpretations, the general structure is as follows:eqs is the first argument which is an array of Operation which describe the system of equations.\nName to subtype mappings: these describe how variable subtypes are mapped to the contexts of the system. For example, for a differential equation, the dependent variable corresponds to given subtypes and then the eqs can be analyzed knowing what the state variables are.\nVariable names which do not fall into one of the system\'s core subtypes are treated as intermediates which can be used for holding subcalculations and other pieces like that."
},

{
    "location": "#Transformations-1",
    "page": "Readme",
    "title": "Transformations",
    "category": "section",
    "text": "Transformation functions send IR objects to like IR objects. These utilize the contextual information in a given Operation/System to build another Operation/System."
},

{
    "location": "#Details-1",
    "page": "Readme",
    "title": "Details",
    "category": "section",
    "text": ""
},

{
    "location": "#Function-Registration-1",
    "page": "Readme",
    "title": "Function Registration",
    "category": "section",
    "text": "A function is registered into the operation system via:@register f(x)\n@register g(x,y)etc. where each macro call registers the function with the given signature. This will cause operations to stop recursing at this function, building Operation(g,args) nodes into the graph instead of tracing calls of g itself into Operations."
},

{
    "location": "#Adding-Derivatives-1",
    "page": "Readme",
    "title": "Adding Derivatives",
    "category": "section",
    "text": "There is a large amount of derivatives pre-defined by DiffRules.jl. Note that Expression types are defined as <:Real, and thus any functions which allow the use of real numbers can automatically be traced by the derivative mechanism. Thus for example:f(x,y,z) = x^2 + sin(x+y) - zautomatically has the derivatives defined via the tracing mechanism. It will do this by directly building the operation the internals of your function and differentiating that.However, in many cases you may want to define your own derivatives so that way automatic Jacobian etc. calculations can utilize this information. This can allow for more succinct versions of the derivatives to be calculated in order to better scale to larger systems. You can define derivatives for your own function via the dispatch:ModelingToolkit.Derivative(::typeof(my_function),args,::Type{Val{i}})where i means that it\'s the derivative of the ith argument. args is the array of arguments, so for example if your function is f(x,t) then args = [x,t]. You should return an Operation for the derivative of your function.For example, sin(t)\'s derivative (by t) is given by the following:ModelingToolkit.Derivative(::typeof(sin),args,::Type{Val{1}}) = cos(args[1])"
},

{
    "location": "#Macro-free-Usage-1",
    "page": "Readme",
    "title": "Macro-free Usage",
    "category": "section",
    "text": "Given the insistence on being programming friendly, all of the functionality is accessible via a function-based interface. This means that all macros are syntactic sugar in some form. For example, the variable construction:@IVar t\n@DVar x(t) y(t) z(t)\n@Deriv D\'~t\n@Param σ ρ βis syntactic sugar for:t = IndependentVariable(:t)\nx = DependentVariable(:x,dependents = [t])\ny = DependentVariable(:y,dependents = [t])\nz = DependentVariable(:z,dependents = [t])\nD = Differential(t) # Default of first derivative, Derivative(t,1)\nσ = Parameter(:σ)\nρ = Parameter(:ρ)\nβ = Parameter(:β)"
},

{
    "location": "#Intermediate-Calculations-1",
    "page": "Readme",
    "title": "Intermediate Calculations",
    "category": "section",
    "text": "The system building functions can handle intermediate calculations. For example,@Var a x y z\n@Param σ ρ β\neqs = [a ~ y-x,\n       0 ~ σ*a,\n       0 ~ x*(ρ-z)-y,\n       0 ~ x*y - β*z]\nns = NonlinearSystem(eqs,[x,y,z],[σ,ρ,β])\nnlsys_func = ModelingToolkit.generate_nlsys_function(ns)expands to::((du, u, p)->begin  # C:\\Users\\Chris\\.julia\\v0.6\\ModelingToolkit\\src\\systems.jl, line 85:\n            begin  # C:\\Users\\Chris\\.julia\\v0.6\\ModelingToolkit\\src\\utils.jl, line 2:\n                x = u[1]\n                y = u[2]\n                z = u[3]\n                σ = p[1]\n                ρ = p[2]\n                β = p[3]\n                a = y - x\n                resid[1] = σ * a\n                resid[2] = x * (ρ - z) - y\n                resid[3] = x * y - β * z\n            end\n        end)In addition, the Jacobian calculations take into account intermediate variables to appropriately handle them."
},

{
    "location": "autodocs/#ModelingToolkit.find_replace!-Tuple{Operation,Variable,Expression}",
    "page": "Docstrings",
    "title": "ModelingToolkit.find_replace!",
    "category": "method",
    "text": "find_replace(O::Operation,x::Variable,y::Expression)\n\nFinds the variable x in Operation O and replaces it with the Expression y\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ModelingToolkit]\nOrder = [:type, :function]"
},

]}
