var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#IntervalRootFinding.jl-1",
    "page": "Home",
    "title": "IntervalRootFinding.jl",
    "category": "section",
    "text": "This Julia package implements guaranteed root-finding methods using interval arithmetic."
},

{
    "location": "#Root-finding-1",
    "page": "Home",
    "title": "Root finding",
    "category": "section",
    "text": "Interval arithmetic not only provides guaranteed numerical calculations; it also makes possible fundamentally new algorithms."
},

{
    "location": "#Interval-Newton-method-1",
    "page": "Home",
    "title": "Interval Newton method",
    "category": "section",
    "text": "One such algorithm is the interval Newton method. This is a version of the standard Newton (or Newton-Raphson) algorithm, an iterative method for finding roots (zeros) of functions. The interval version, however, is fundamentally different from its standard counterpart, in that it can (under the best circumstances) provide rigorous guarantees about the presence or absence and uniqueness of roots of a given function in a given interval, and tells us explicitly when it is unable to provide such a guarantee.The idea of the Newton method is to calculate a root x^ast of a function f [i.e., a value such that f(x^*) = 0] from an initial guess x usingx^* = x - fracf(x)f(xi)for some xi between x and x^*. Since xi is unknown, we can bound it asf(xi) in F(X)where X is a containing interval and F(X) denotes the interval extension of the function f, consisting of applying the same operations as the function f to the interval X.We define an interval Newton operator mathcalN as follows:mathcalN(X) = m(X) - fracF(m(X))F(X)where m(X)  is the midpoint of X converted into an interval.It turns out that mathcalN tells us precisely whether there is a root of f in the interval X: there is no root if mathcalN(X) cap X = emptyset, and there is a unique root if mathcalN(X) subseteq X. There is also an extension to intervals in which the derivative F(X) contains 0, in which case the Newton operator returns a union of two intervals.Iterating the Newton operator on the resulting sets gives a rigorous algorithm that is guaranteed to find all roots of a real function in a given interval (or to inform us if it is unable to do so, for example at a multiple root); see Tucker\'s book for more details."
},

{
    "location": "#Usage-of-the-interval-Newton-method-1",
    "page": "Home",
    "title": "Usage of the interval Newton method",
    "category": "section",
    "text": "Root-finding routines are in a separate RootFinding submodule of IntervalArithmetic.jl, which must be loaded withjulia> using IntervalArithmetic, IntervalRootFindingThe interval Newton method is implemented for real functions of a single variable as the function newton. For example, we can calculate rigorously the square roots of 2:julia> using ValidatedNumerics\n\njulia> f(x) = x^2 - 2\nf (generic function with 1 method)\n\njulia> newton(f, @interval(-5, 5))\n2-element Array{ValidatedNumerics.Root{Float64},1}:\n Root([-1.4142135623730951, -1.414213562373095], :unique)\n Root([1.414213562373095, 1.4142135623730951], :unique)The function newton  is passed the function and the interval in which to search for roots; it returns an array of Root objects, that contain the interval where a root is found, together with a symbol :unique if there is guaranteed to be a unique root in that interval, or :unknown if the Newton method is unable to make a guarantee, for example, when there is a double root:julia> newton(f, @interval(-5,5))\n6-element Array{ValidatedNumerics.Root{Float64},1}:\n Root([0.9999999968789343, 0.999999997726216], :unknown)\n Root([0.9999999977262161, 0.9999999985734976], :unknown)\n Root([0.9999999987089422, 0.9999999993384274], :unknown)\n Root([0.9999999993384275, 0.9999999999679127], :unknown)\n Root([0.9999999999687099, 1.0000000004524654], :unknown)\n Root([2.0, 2.0], :unique)The Newton method may be applied directly to a vector of known roots, for example to refine them with higher precision:julia> f(x) = x^2 - 2\nf (generic function with 1 method)\n\njulia> roots = newton(f, @interval(-5, 5))\n2-element Array{ValidatedNumerics.Root{Float64},1}:\n Root([-1.4142135623730951, -1.414213562373095], :unique)\n Root([1.414213562373095, 1.4142135623730951], :unique)\n\njulia> setprecision(Interval, 256)\n256\n\njulia> newton(f, roots)\n2-element Array{ValidatedNumerics.Root{Base.MPFR.BigFloat},1}:\n Root([-1.414213562373095048801688724209698078569671875376948073176679737990732478462119, -1.414213562373095048801688724209698078569671875376948073176679737990732478462102]₂₅₆, :unique)\n Root([1.414213562373095048801688724209698078569671875376948073176679737990732478462102, 1.414213562373095048801688724209698078569671875376948073176679737990732478462119]₂₅₆, :unique)\n\njulia> abs(roots2[2].interval.lo - sqrt(big(2)))\n0.000000000000000000000000000000000000000000000000000000000000000000000000000000\n"
},

{
    "location": "#Krawczyk-method-1",
    "page": "Home",
    "title": "Krawczyk method",
    "category": "section",
    "text": "An alternative method is the Krawczyk method, implemented in the function krawczyk, with the same interface as the Newton method:julia> f(x) = x^2 - 2\nf (generic function with 1 method)\n\njulia> krawczyk(f, @interval(-5, 5))\n2-element Array{Root{Float64},1}:\n Root([-1.4142135623730954, -1.4142135623730947], :unique)\n Root([1.4142135623730947, 1.4142135623730954], :unique)\n\njulia> newton(f, @interval(-5, 5))\n2-element Array{Root{Float64},1}:\n Root([-1.4142135623730951, -1.414213562373095], :unique)\n Root([1.414213562373095, 1.4142135623730951], :unique)The Krawczyk method really comes into its own for higher-dimensional functions; this is planned to be implemented in the future."
},

{
    "location": "#find_roots-interface-1",
    "page": "Home",
    "title": "find_roots interface",
    "category": "section",
    "text": "Automatic differentiation is used to calculate the derivative used in the Newton method if the derivative function is not given explicitly as the second argument to newton.An interface find_roots is provided, which does not require an interval to be passed:julia> find_roots(f, -5, 5)\n6-element Array{ValidatedNumerics.Root{Float64},1}:\n Root([0.9999999968789343, 0.999999997726216], :unknown)\n Root([0.9999999977262161, 0.9999999985734976], :unknown)\n Root([0.9999999987089422, 0.9999999993384274], :unknown)\n Root([0.9999999993384275, 0.9999999999679127], :unknown)\n Root([0.9999999999687099, 1.0000000004524654], :unknown)\n Root([1.9999999999999998, 2.0000000000000004], :unique)There is also a version find_roots_midpoint that returns three vectors: the midpoint of each interval; the radius of the interval; and the symbol. This may be useful for someone who just wishes to find roots of a function, without wanting to understand how to manipulate interval objects:julia> find_roots_midpoint(f, -5, 5)\n([-1.4142135623730951,1.414213562373095],[2.220446049250313e-16,4.440892098500626e-16],[:unique,:unique])This uses the function midpoint_radius, that returns the midpoint and radius of a given interval:julia> a = @interval(0.1, 0.2)\n[0.09999999999999999, 0.2]\n\njulia> midpoint_radius(a)\n(0.15,0.05000000000000002)"
},

{
    "location": "api/#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": ""
},

{
    "location": "api/#IntervalRootFinding.Bisection",
    "page": "API",
    "title": "IntervalRootFinding.Bisection",
    "category": "type",
    "text": "Bisection{F} <: Contractor{F}\n\nContractor type for the bisection method.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.Krawczyk",
    "page": "API",
    "title": "IntervalRootFinding.Krawczyk",
    "category": "type",
    "text": "Krawczyk{F, FP} <: Contractor{F}\n\nContractor type for the Krawczyk method.\n\n# Fields\n    - `f::F`: function whose roots are searched\n    - `f::FP`: derivative or jacobian of `f`\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.Newton",
    "page": "API",
    "title": "IntervalRootFinding.Newton",
    "category": "type",
    "text": "Newton{F, FP} <: Contractor{F}\n\nContractor type for the Newton method.\n\n# Fields\n    - `f::F`: function whose roots are searched\n    - `f::FP`: derivative or jacobian of `f`\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.Root",
    "page": "API",
    "title": "IntervalRootFinding.Root",
    "category": "type",
    "text": "Object representing a possible root inside a given interval. status is either :unknown or :unique. If status is :unique then we know that there is a unique root of the function in question inside the given interval.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.RootSearch",
    "page": "API",
    "title": "IntervalRootFinding.RootSearch",
    "category": "type",
    "text": "RootSearch{R <: Union{Interval,IntervalBox}, S <: Contractor, T <: Real}\n\nType implementing the Base.Iterator interface to the branch and prune routine. Returns the RootSearchState at each iteration. Note: Each iteration mutates the RootSearchState. Use copy(state::RootSearchState) to create an independent instance if necessary.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.branch_and_prune",
    "page": "API",
    "title": "IntervalRootFinding.branch_and_prune",
    "category": "function",
    "text": "branch_and_prune(X, contract, tol=1e-3)\n\nGeneric branch and prune routine for finding isolated roots using the contract function as the contractor.\n\nInputs:\n\nX: Interval or IntervalBox\ncontract: function that determines the status of a given box X. It   returns the new box and a symbol indicating the status. Current possible   values are of type Bisection or Newton\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.gauss_elimination_interval!-Tuple{AbstractArray,AbstractArray{T,2} where T,AbstractArray}",
    "page": "API",
    "title": "IntervalRootFinding.gauss_elimination_interval!",
    "category": "method",
    "text": "Solves the system of linear equations using Gaussian Elimination. Preconditioning is used when the precondition keyword argument is true.\n\nREF: Luc Jaulin et al., Applied Interval Analysis, pg. 72\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.gauss_seidel_interval!-Tuple{AbstractArray,AbstractArray{T,2} where T,AbstractArray}",
    "page": "API",
    "title": "IntervalRootFinding.gauss_seidel_interval!",
    "category": "method",
    "text": "Iteratively solves the system of interval linear equations and returns the solution set. Uses the Gauss-Seidel method (Hansen-Sengupta version) to solve the system. Keyword precondition to turn preconditioning off. Eldon Hansen and G. William Walster : Global Optimization Using Interval Analysis - Chapter 5 - Page 115\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.newton1d-Union{Tuple{T}, Tuple{Function,Function,Interval{T}}} where T",
    "page": "API",
    "title": "IntervalRootFinding.newton1d",
    "category": "method",
    "text": "newton1d performs the interval Newton method on the given function f with its derivative f′ and initial interval x. Optional keyword arguments give the tolerances reltol and abstol. reltol is the tolerance on the relative error whereas abstol is the tolerance on |f(X)|, and a debug boolean argument that prints out diagnostic information.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.newton1d-Union{Tuple{T}, Tuple{Function,Interval{T}}} where T",
    "page": "API",
    "title": "IntervalRootFinding.newton1d",
    "category": "method",
    "text": "newton1d performs the interval Newton method on the given function f and initial interval x. Optional keyword arguments give the tolerances reltol and abstol. reltol is the tolerance on the relative error whereas abstol is the tolerance on |f(X)|, and a debug boolean argument that prints out diagnostic information.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.quadratic_roots-Union{Tuple{T}, Tuple{Interval{T},Interval{T},Interval{T}}} where T",
    "page": "API",
    "title": "IntervalRootFinding.quadratic_roots",
    "category": "method",
    "text": "Function to solve a quadratic equation where the coefficients are intervals. Returns an array of intervals of the roots. Arguments a, b and c are interval coefficients of x², x and 1 respectively. The interval case differs from the non-interval case in that there might be three disjoint interval roots. In the third case, one interval root extends to −∞ and another extends to +∞. This algorithm finds the set of points where F.lo(x) ≥ 0 and the set of points where F.hi(x) ≤ 0 and takes the intersection of these two sets. Eldon Hansen and G. William Walster : Global Optimization Using Interval Analysis - Chapter 8\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.step!-Tuple{IntervalRootFinding.RootSearchState,Any,Any}",
    "page": "API",
    "title": "IntervalRootFinding.step!",
    "category": "method",
    "text": "step!(state::RootSearchState, contractor, tolerance)\n\nProgress state by treating one of its working regions. Note: state.working is always modified. If a root is found, it is added to state.outputs.\n\n\n\n\n\n"
},

{
    "location": "api/#Polynomials.roots-Union{Tuple{T}, Tuple{Any,Union{Interval{T}, IntervalBox{T,T1} where T1},Type{Bisection}}, Tuple{Any,Union{Interval{T}, IntervalBox{T,T1} where T1},Type{Bisection},Float64}} where T",
    "page": "API",
    "title": "Polynomials.roots",
    "category": "method",
    "text": "roots(f, X, contractor, tol=1e-3)\nroots(f, deriv, X, contractor, tol=1e-3)\n\nUses a generic branch and prune routine to find in principle all isolated roots of a function f:R^n → R^n in a box X, or a vector of boxes.\n\nInputs:\n\nf: function whose roots will be found\nX: Interval or IntervalBox\ncontractor: function that, when applied to the function f, determines   the status of a given box X. It returns the new box and a symbol indicating   the status. Current possible values are Bisection, Newton and Krawczyk\nderiv ; explicit derivative of f for Newton and Krawczyk\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.Compl",
    "page": "API",
    "title": "IntervalRootFinding.Compl",
    "category": "type",
    "text": "Complex numbers as 2-vectors, enough for polynomials.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.Contractor",
    "page": "API",
    "title": "IntervalRootFinding.Contractor",
    "category": "type",
    "text": "Contractor{F}\n\nAbstract type for contractors.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.gauss_elimination_interval1!-Tuple{AbstractArray,AbstractArray{T,2} where T,AbstractArray}",
    "page": "API",
    "title": "IntervalRootFinding.gauss_elimination_interval1!",
    "category": "method",
    "text": "Using Base.`\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.guarded_derivative_midpoint-Union{Tuple{T}, Tuple{Function,Function,Interval{T}}} where T",
    "page": "API",
    "title": "IntervalRootFinding.guarded_derivative_midpoint",
    "category": "method",
    "text": "Returns two intervals, the first being a point within the interval x such that the interval corresponding to the derivative of f there does not contain zero, and the second is the inverse of its derivative\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.newton-Union{Tuple{T}, Tuple{Function,Function,Interval{T}}, Tuple{Function,Function,Interval{T},Int64}} where T",
    "page": "API",
    "title": "IntervalRootFinding.newton",
    "category": "method",
    "text": "newton performs the interval Newton method on the given function f with its optional derivative f_prime and initial interval x. Optional keyword arguments give the tolerance, maxlevel at which to stop subdividing, and a debug boolean argument that prints out diagnostic information.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.newton_refine-Union{Tuple{T}, Tuple{Function,Function,Interval{T}}} where T",
    "page": "API",
    "title": "IntervalRootFinding.newton_refine",
    "category": "method",
    "text": "If a root is known to be inside an interval, newton_refine iterates the interval Newton method until that root is found.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.newton_refine-Union{Tuple{T}, Tuple{N}, Tuple{Function,Function,Union{Interval{T}, IntervalBox{N,T}}}} where T where N",
    "page": "API",
    "title": "IntervalRootFinding.newton_refine",
    "category": "method",
    "text": "If a root is known to be inside an interval, newton_refine iterates the interval Newton method until that root is found.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.newtonlike_contract-NTuple{4,Any}",
    "page": "API",
    "title": "IntervalRootFinding.newtonlike_contract",
    "category": "method",
    "text": "newtonlike_contract(op, X, tol)\n\nContraction operation for contractors using the first derivative of the\nfunction. This contraction use a bisection scheme to refine the intervals\nwith `:unkown` status.\n\nCurrently `Newton` and `Krawczyk` contractors uses this.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.preconditioner-Tuple{AbstractArray{T,2} where T,AbstractArray}",
    "page": "API",
    "title": "IntervalRootFinding.preconditioner",
    "category": "method",
    "text": "Preconditions the matrix A and b with the inverse of mid(A)\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.quadratic_helper!-Union{Tuple{T}, Tuple{Interval{T},Interval{T},Interval{T},Array{Interval{T},N} where N}} where T",
    "page": "API",
    "title": "IntervalRootFinding.quadratic_helper!",
    "category": "method",
    "text": "Helper function for quadratic_interval that computes roots of a real quadratic using interval arithmetic to bound rounding errors.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.realify-Tuple{Any}",
    "page": "API",
    "title": "IntervalRootFinding.realify",
    "category": "method",
    "text": "Takes a complex (polynomial) function f and returns a function g:R^2 -> R^2 that implements it.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.realify_derivative-Tuple{Any}",
    "page": "API",
    "title": "IntervalRootFinding.realify_derivative",
    "category": "method",
    "text": "Takes the derivative of a complex function and returns the real jacobian that implements it.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.refine",
    "page": "API",
    "title": "IntervalRootFinding.refine",
    "category": "function",
    "text": "Generic refine operation for Krawczyk and Newton. This function assumes that it is already known that X contains a unique root. Call using e.g. op = X -> N(f, f′, X)\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.𝒦-Union{Tuple{T}, Tuple{Any,Any,IntervalBox{T,T1} where T1}} where T",
    "page": "API",
    "title": "IntervalRootFinding.𝒦",
    "category": "method",
    "text": "Multi-variable Krawczyk operator\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.𝒦-Union{Tuple{T}, Tuple{Any,Any,Interval{T}}} where T",
    "page": "API",
    "title": "IntervalRootFinding.𝒦",
    "category": "method",
    "text": "Single-variable Krawczyk operator\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.𝒩-Tuple{Function,Function,IntervalBox}",
    "page": "API",
    "title": "IntervalRootFinding.𝒩",
    "category": "method",
    "text": "Multi-variable Newton operator.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalRootFinding.𝒩-Union{Tuple{T}, Tuple{Any,Interval{T}}} where T",
    "page": "API",
    "title": "IntervalRootFinding.𝒩",
    "category": "method",
    "text": "Single-variable Newton operator\n\n\n\n\n\n"
},

{
    "location": "api/#API-1",
    "page": "API",
    "title": "API",
    "category": "section",
    "text": "Modules = [IntervalRootFinding]\nOrder   = [:type, :function]"
},

]}
