var documenterSearchIndex = {"docs": [

{
    "location": "#Poltergeist.MarkovMap",
    "page": "Home",
    "title": "Poltergeist.MarkovMap",
    "category": "type",
    "text": "MarkovMap(fs::Vector, ds::Vector, ran = coveringinterval(ds); dir=Forward, diff=autodiff(...)))\n\nGenerate a MarkovMap with branches given by elements of fsdefined on subdomains given byds, onto a vectorran`.\n\nThe keyword argument dir stipulates whether the elements of fs are the branches (Forward) or the branches\' inverses (Reverse).\n\nThe keyword argument diff provides the derivatives of the fs. By default it is the automatic derivatives of fs.\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.MarkovMap",
    "page": "Home",
    "title": "Poltergeist.MarkovMap",
    "category": "type",
    "text": "MarkovMap(branches::Vector, domain, rangedomain)\n\nGenerate a computer representation of a full-branch uniformly-expanding interval map domain → rangedomain using a vector describing the branches of the map.\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.AR_process-Tuple{Any,Fun}",
    "page": "Home",
    "title": "Poltergeist.AR_process",
    "category": "method",
    "text": "AR_process(f,A::Fun)\n\nCalculate coefficients of Gaussian AR process with the same autocorrelation function as A under the map f.\n\nSee Appendix A.2 of Wormell, C.L. & Gottwald, G.A. \'On the Validity of Linear Response Theory in High-Dimensional Deterministic Dynamical Systems\' (2018).\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.MA_process-Tuple{Any,Fun}",
    "page": "Home",
    "title": "Poltergeist.MA_process",
    "category": "method",
    "text": "MA_process(f,A::Fun)\n\nCalculate coefficients of Gaussian MA process with the same autocorrelation function as A under the map f.\n\nSee Appendix A.2 of Wormell, C.L. & Gottwald, G.A. \'On the Validity of Linear Response Theory in High-Dimensional Deterministic Dynamical Systems\' (2018).\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.Transfer-Tuple",
    "page": "Home",
    "title": "Poltergeist.Transfer",
    "category": "method",
    "text": "Transfer(m::AbstractMarkovMap)\n\nCreate a CachedOperator of a ConcreteTransfer operator encoding the transfer operator of m.\n\nCaching is used for speed, as entries of the transfer operator are most efficiently calculated whole columns at a time.\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.acim-Tuple{Poltergeist.SolutionInvWrapper}",
    "page": "Home",
    "title": "Poltergeist.acim",
    "category": "method",
    "text": "acim(L)\n\nOutput a Fun object giving the acim of the associated map\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.birkhoffcov-Tuple{Poltergeist.SolutionInvWrapper,Fun,Fun}",
    "page": "Home",
    "title": "Poltergeist.birkhoffcov",
    "category": "method",
    "text": "birkhoffcov(L, A::Fun, B::Fun)\n\nOutput covariance of CLT-normalised Birkhoff sums of A and B under the map\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.birkhoffvar-Tuple{Poltergeist.SolutionInvWrapper,Fun}",
    "page": "Home",
    "title": "Poltergeist.birkhoffvar",
    "category": "method",
    "text": "birkhoffvar(L, A::Fun)\n\nOutput diffusion coefficient of A under the map using Green-Kubo formula\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.correlationsum",
    "page": "Home",
    "title": "Poltergeist.correlationsum",
    "category": "function",
    "text": "correlationsum(L, A::Fun, ρ=acim(L))\n\nOutput resolvent of transfer operator applied to ρ*(A - ∫A dρ)\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.covariancefunction-Tuple{ApproxFun.Operator,Fun,Fun,Int64}",
    "page": "Home",
    "title": "Poltergeist.covariancefunction",
    "category": "method",
    "text": "cfA, cfB = covariancefunction(L, A, B, n)\n\nCompute the lag-covariance function against transfer operator L between observables A and B for n time steps in each direction. Specifically, the (k+1)th entry of cfA is the expectation of B A∘f^(k) and vice versa for cfB.\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.covariancefunction-Tuple{ApproxFun.Operator,Fun,Fun}",
    "page": "Home",
    "title": "Poltergeist.covariancefunction",
    "category": "method",
    "text": "cfA, cfB = covariancefunction(L, A, B; tol=eps(A*B))\n\nChooses n so that the covariance declines to a given tolerance.\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.covariancefunction-Tuple{ApproxFun.Operator,Fun,Int64}",
    "page": "Home",
    "title": "Poltergeist.covariancefunction",
    "category": "method",
    "text": "cfA = covariancefunction(L, A, n)\n\nCompute the lag-covariance function against transfer operator L for observable A for n time steps in each direction. Specifically, the (k+1)th entry is the expectation of A A∘f^(k).\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.covariancefunction-Tuple{ApproxFun.Operator,Fun}",
    "page": "Home",
    "title": "Poltergeist.covariancefunction",
    "category": "method",
    "text": "cf = covariancefunction(L, A; tol = eps(A))\n\nChoose n so that the covariance declines to a given tolerance\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.doubling",
    "page": "Home",
    "title": "Poltergeist.doubling",
    "category": "function",
    "text": "doubling(d = Interval(0,1.))\n\nReturns the full-branch interval map on domain d with 2 equally-sized branches.\n\nSee also: tupling, lanford\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.hofbauerextension",
    "page": "Home",
    "title": "Poltergeist.hofbauerextension",
    "category": "function",
    "text": "hofbauerextension(m,basedomains;maxdepth=100,forcereturn=trues(length(basedomains)))\n\nGenerates a Hofbauer extension of m starting from basedomains, which may be a single domain.\n\nThe keyword maxdepth says how deep the Hofbauer extension should go, and forcereturn sets whether a return to given members of basedomains should  forced if possible.\n\nFor example, in the case of f(x) = mod(2x,1), if basedomains is set to Interval(0.,0.3) then Interval(0.,0.5) might map to Interval(0.,1.)for a given map ifforcereturn=falsebut would map to Interval(0,0.3) and Interval(0.3,1) if forcereturn=true.\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.lanford",
    "page": "Home",
    "title": "Poltergeist.lanford",
    "category": "function",
    "text": "lanford(T=Float64)\n\nReturn the Lanford map, with type encoding T.\n\nSee also: tupling, doubling\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.linearresponse-Tuple{Poltergeist.SolutionInvWrapper,Fun}",
    "page": "Home",
    "title": "Poltergeist.linearresponse",
    "category": "method",
    "text": "linearresponse(L, X::Fun)\n\nOutput a Fun object giving the first-order change in the acim of the map under perturbation X\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.lyapunov",
    "page": "Home",
    "title": "Poltergeist.lyapunov",
    "category": "function",
    "text": "lyapunov(f, r=acim(f), sp=Space(rangedomain(f)))\n\nCalculate Lyapunov exponent associated with f\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.modulomap",
    "page": "Home",
    "title": "Poltergeist.modulomap",
    "category": "function",
    "text": "modulomap(f, D, R=dom; diff= autodiff(f,dom))\n\nOutput MarkovMap or CircleMap m: D → R such that m(x) = f(x) mod R.\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.nbranches-Tuple{Union{IntervalMap{D,R,B}, MarkovMap{D,R,B}} where B<:Poltergeist.AbstractBranch where R<:Domain where D<:Domain}",
    "page": "Home",
    "title": "Poltergeist.nbranches",
    "category": "method",
    "text": "nbranches(m)\n\nReturn the number of branches of m.\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.perturb-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "Poltergeist.perturb",
    "category": "method",
    "text": "perturb(d, X, ϵ)\n\nConstruct a self-map on domain d: x ↦ x + ϵ X(x)\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.perturb-Tuple{Poltergeist.AbstractMarkovMap,Any,Any}",
    "page": "Home",
    "title": "Poltergeist.perturb",
    "category": "method",
    "text": "perturb(m::AbstractMarkovMap, X, ϵ)\n\nOutput perturbation of m: x ↦ m(x) + ϵ X(m(x))\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.tupling",
    "page": "Home",
    "title": "Poltergeist.tupling",
    "category": "function",
    "text": "tupling(k::Int, d = Interval(0,1.))\n\nReturns the full-branch interval map on domain d with k equally-sized branches.\n\nSee also: doubling, lanford\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.HofbauerDomain",
    "page": "Home",
    "title": "Poltergeist.HofbauerDomain",
    "category": "type",
    "text": "HofbauerDomain\n\nA Domain object annotated with a depth index for HofbauerExtensions. It is not a Domain subtype itself as it should only be used in the context of Hofbauer extensions.\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.HofbauerPoint",
    "page": "Home",
    "title": "Poltergeist.HofbauerPoint",
    "category": "type",
    "text": "HofbauerPoint(x, graphind)\n\nConstructs a HofbauerPoint, representing point x on the graphindth domain of a Hofbauer extension.\n\n\n\n\n\n"
},

{
    "location": "#LinearAlgebra.eigvals-Tuple{Poltergeist.AbstractMarkovMap,Int64}",
    "page": "Home",
    "title": "LinearAlgebra.eigvals",
    "category": "method",
    "text": "eigvals(m::AbstractMarkovMap, n)\n\nOutput eigenvalues of Transfer(m) using n×n Galerkin discretisation.\n\nCalls directly to ApproxFun: you can also call eigvals(Transfer(m), n)\n\n\n\n\n\n"
},

{
    "location": "#LinearAlgebra.eigvecs-Tuple{Poltergeist.AbstractMarkovMap,Int64}",
    "page": "Home",
    "title": "LinearAlgebra.eigvecs",
    "category": "method",
    "text": "eigvecs(m::AbstractMarkovMap, n)\n\nOutput eigenfunctions of Transfer(m) using n×n Galerkin discretisation.\n\nCalls directly to ApproxFun: you can also call eigvecs(Transfer(m), n)\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.branches-Tuple{Union{IntervalMap{D,R,B}, MarkovMap{D,R,B}} where B<:Poltergeist.AbstractBranch where R<:Domain where D<:Domain}",
    "page": "Home",
    "title": "Poltergeist.branches",
    "category": "method",
    "text": "branches(m)\n\nReturn the branches of the map m.\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.eachbranchindex-Tuple{Union{IntervalMap{D,R,B}, MarkovMap{D,R,B}} where B<:Poltergeist.AbstractBranch where R<:Domain where D<:Domain}",
    "page": "Home",
    "title": "Poltergeist.eachbranchindex",
    "category": "method",
    "text": "eachbranchindex(m)\n\nReturn an iterator giving the indices of the branches of m\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.maphb-Tuple{Poltergeist.AbstractBranch,Any}",
    "page": "Home",
    "title": "Poltergeist.maphb",
    "category": "method",
    "text": "maphb(b::AbstractBranch, x)\n\nMaps point x according to b. For NeutralBranches calculates the return map out of domain(b).\n\n\n\n\n\n"
},

{
    "location": "#Poltergeist.zero_to",
    "page": "Home",
    "title": "Poltergeist.zero_to",
    "category": "function",
    "text": "zero_to(A::Fun, ρ::Fun=uniform(space(A)))\n\nOutput ρ*(A - ∫A dρ)\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Poltergeist]\nOrder = [:type, :function]"
},

]}
