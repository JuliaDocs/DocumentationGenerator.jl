var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#FEMBase.jl-1",
    "page": "Home",
    "title": "FEMBase.jl",
    "category": "section",
    "text": "FEMBase.jl is a JuliaFEM base package. It includes all basic data structures so that one can start programming own finite element models."
},

{
    "location": "mesh/#",
    "page": "Mesh",
    "title": "Mesh",
    "category": "page",
    "text": ""
},

{
    "location": "mesh/#Mesh-1",
    "page": "Mesh",
    "title": "Mesh",
    "category": "section",
    "text": "CurrentModule = FEMBase\nDocTestSetup = quote\n    using FEMBase\nend"
},

{
    "location": "mesh/#Mesh-structure-1",
    "page": "Mesh",
    "title": "Mesh structure",
    "category": "section",
    "text": ""
},

{
    "location": "mesh/#Modifying-mesh-1",
    "page": "Mesh",
    "title": "Modifying mesh",
    "category": "section",
    "text": ""
},

{
    "location": "mesh/#Defining-new-mesh-parsers-1",
    "page": "Mesh",
    "title": "Defining new mesh parsers",
    "category": "section",
    "text": "Whould work somehow like this:mutable struct DemoReader <: AbstractMeshReader\n    handle :: String\nend\n\nfunction read_mesh!(m::Mesh, r::DemoReader)\n    # parse file and insert results to `m`.\nend\n\nmesh = Mesh()\nreader = DemoReader(\"file.inp\")\nread_mesh!(mesh, reader)"
},

{
    "location": "fields/#",
    "page": "Fields",
    "title": "Fields",
    "category": "page",
    "text": ""
},

{
    "location": "fields/#Fields-1",
    "page": "Fields",
    "title": "Fields",
    "category": "section",
    "text": "using FEMBaseFrom the beginning of a project we had a clear concept in our mind: \"everything is a field\". That is, everything can vary temporally and spatially. We think that constant is just a special case of field which does not vary in temporal nor spatial direction. Fields can vary in spatial direction, i.e. can be either constant or variable, and in temporal direction, i.e. can be time variant or time invariant. From this pondering we can think that there exists four kind of (discrete) fields:discrete, constant, time invariant (DCTI)\ndiscrete, variable, time invariant (DVTI)\ndiscrete, constant, time variant (DCTV)\ndiscrete, variable, time variant (DVTV)Discrete, in this context, means that field is defined in point-wise in 1 ldots n locations, from where it is then interpolated to whole domain using some interpolation polynomials, i.e. \\begin{equation}     u(\\xi, t) = \\sum{i} ui[t] N{i}(\\xi,t), \\end{equation} where     N{i}(\\xi, t)$ is the basis function or interpolation polymial corresponding to i^{th} discrete value and      u_i is the discrete value.Then we have continuous fields, which are defined in whole domain, or at least not point-wise. By following the already used abbreviations, we have four more fields:continuous, constant, time invariant (CCTI)\ncontinuous, variable, time invariant (CVTI)\ncontinuous, constant, time variant (DCTV)\ncontinuous, variable, time variant (CVTV)Continuous, again in this context, does not mean that field has to be defined everywhere. It\'s enough that it\'s defined in function of spatial and/or temporal coordinates, i.e. we have u equiv u(xi t), without a some spesific basis needed to interpolate from discrete values. Field itself can be in principle anything. However, usually either scalar, vector or tensor (matrix). Time does not to have be real, it can be for example angle of some rotating machine or even complex value. From these starting points, we assume that the mentioned field system can describe all imaginable situations."
},

{
    "location": "fields/#Creating-new-fields-1",
    "page": "Fields",
    "title": "Creating new fields",
    "category": "section",
    "text": "For discrete fields that are varying in spatial direction, value for each discrete point is defined using NTuple. The order of points is implicitly assumed to be same than node ordering in ABAQUS. That is, first corner nodes in anti-clockwise direction and after that middle nodes.For example, (1, 2, 3, 4) is a scalar field having length of 4 and ([1,2],[2,3],[3,4],[4,5]) is a vector field having length of 4.For fields that are varying in temporal direction, time => value syntax is used. The first item in pair is time (or similar) and second item is value  assigned to that time. For example, 0.0 => 1.0 is a time-dependent scalar field having value 1.0 at time 0.0.The most simple field is a field that is constant in both time and spatial direction. Discrete, constant, time invariant DCTI:a = DCTI(1.0)Then we have discrete, variable, time invariant fields DVTI. Notice the use of Tuple when defining field.b = DVTI( (1.0, 2.0) )Discrete, constant, time variant field DCTV is constant in spatial direction partial upartial x = 0 but can vary in temporal direction, partial upartial tneq 0. Here, => syntax is used. New values can be added to field using function update!. If there already exists a value for that particular time, it will be overridden. It is assumed that content of field in time direction is monotonically increasing, i.e. \\begin{equation}     t{i-1} < ti < t_{i+1}. \\end{equation}For the sake of clarity let\'s also mention that update! works for time invariant fields as well if content needs to be updated.c = DCTV(0.0 => 1.0, 1.0 => 2.0)\nupdate!(c, 2.0 => 3.0)Discrete, variable, time variant DVTV field is the most general one, allowing values of field to vary in both spatial and time direction.d = DVTV(0.0 => (1.0, 2.0), 1.0 => (2.0, 3.0))\nupdate!(d, 2.0 => (3.0, 4.0))In examples above, all fields defined was scalar fields. Defining vector or tensor fields goes in the same way. The only difference is that now we define vectors and tensors instead of a single scalar value. They can vary in spatial and time direction in the same way than scalar fields. Here is example of defining the abovementioned vector fields:a = DCTI([1.0, 2.0])\nb = DVTI(([1.0, 2.0], [2.0, 3.0]))\nc = DCTV(0.0 => [1.0, 2.0], 1.0 => [2.0, 3.0])\nd = DVTV(0.0 => ([1.0, 2.0], [2.0, 3.0]), 1.0 => ([2.0, 3.0], [3.0, 4.0]))"
},

{
    "location": "fields/#Accessing-fields-1",
    "page": "Fields",
    "title": "Accessing fields",
    "category": "section",
    "text": "Accessing fields in time direction is done using a function interpolate. For example, if we have (constant) 12 at time t=00 and 34 at time t=10, linear interpolation in time direction yieldsc = DCTV(0.0 => [1.0,2.0], 1.0 => [3.0,4.0])\ninterpolate(c, 0.5)If field is spatially varying, a Tuple will be returned, having one value for each \"node\". This can then be interpolated in spatial direction, typically using basis functions defined on element, i.e. u = N_i u_i:d = DVTV(0.0 => (1.0,2.0), 1.0 => (3.0,4.0))\ninterpolate(d, 0.5)Although the two fields above looks quite same, the key difference is that in DCTV field we have a constant vectorial value (defined using square brackets []) and in latter DVTV field we have a scalar value (defined using round brackets) changing in spatial direction from 1.0 to 2.0 at time t=00 and changing from 3.0 to 4.0 at time t=10.If a field is time invariant, interpolation in time direction returns a trivial solution:interpolate(DCTI(1.0), 0.5)\ninterpolate(DVTI((1.0,2.0)), 0.5)For spatially varying fields, one can access to ith element using getindex:a = DVTI((1.0,2.0))\ngetindex(a, 1)For field varying both temporally and spatially, one has first to interpolate in time direction to get iterable tuple:d = DVTV(0.0 => (1.0,2.0), 1.0 => (3.0,4.0))\nresult = interpolate(d, 0.5)\ngetindex(result, 1)Internally, each field is a subtype of AbstractField having a field data, which be accessed directly for hacking purposes.d.data"
},

{
    "location": "fields/#Continuous-fields-1",
    "page": "Fields",
    "title": "Continuous fields",
    "category": "section",
    "text": "Continuous fields may be useful when defining analytical boundary conditions. For that we have CVTV, where \"C\" stands for continuous.f(xi,t) = xi[1]*xi[2]*t\ng = CVTV(f)\ng((1.0,2.0), 3.0)"
},

{
    "location": "fields/#Dictionary-fields-1",
    "page": "Fields",
    "title": "Dictionary fields",
    "category": "section",
    "text": "Usually it is assumed that size of length of discrete field matches to the number of basis functions of a single element, typically something small like 1-10.However, there might be cases where it is more practical to define field in a sense that indexing is not continuous or starting from 1. For example, we might want to define field common for a set of elements. In that case it\'s natural to think that each index in field corresponds to the certain id-number of node. For example, if we have a triangle element connecting nodes 1, 1000 and 100000, we still want to access that field naturally using getindex, e.g. f[1], f[1000] and f[100000]. In that case, more appropriate internal structure for field is based on a dictionary, not tuple.It only makes sense to define dictionary fields for spatially varying fields. Two new fields are introduced: DVTId and DVTVd, where the last character \"d\" stands for \"dictionary\".Keep on mind, that this type of field has one restriction. If and when this field is typically defined on nodes of several elements, field must be continuous between elements. That is, if field value in node 1000 is for example 1.0, then it\'s 1.0 in all elements connecting to that node. To define jumps on field, one must define field element-wise. Define eg. \"geometry\" for nodes 1,1000,100000:X = Dict(1=>[0.0,0.0], 1000=>[1.0,0.0], 100000=>[1.0,1.0])\nG = DVTId(X)\nG[1], G[1000], G[100000]Interpolation in time directions works in a same way than with other fields depends from time.Y = Dict(1=>[1.0,1.0], 1000=>[2.0,1.0], 100000=>[2.0,2.0])\nF = DVTVd(0.0 => X, 1.0 => Y)\ninterpolate(F,0.5)[100000]"
},

{
    "location": "fields/#Using-common-constructor-field-1",
    "page": "Fields",
    "title": "Using common constructor field",
    "category": "section",
    "text": "Now we have introduced total of 7 fields: DCTI, DCTV, DVTI, DVTV, CVTV, DVTId, DVTVd. A good question arises that how to remember all this stuff and is it even necessary? Luckily not, because one can use a single constructor called field to create all kind of fields. Type of field is inspected from data type. It\'s not necessary to remember all this technical stuff, just declare new field using more of less intuitive syntax and field-function.f1 = field(1)\nf2 = field(1, 2)\nf3 = field(0.0 => 1)\nf4 = field(0.0 => (1, 2), 1.0 => (2, 3))\nf5 = field((xi,t) -> xi[1]*t)\nf6 = field(1 => 1, 2 => 2)\nf7 = field(0.0 => (1=>1, 10=>2), 1.0 => (1=>2,10=>3))"
},

{
    "location": "fields/#Developing-new-fields-1",
    "page": "Fields",
    "title": "Developing new fields",
    "category": "section",
    "text": "If the FEMBase ones are not enough, it\'s always possible to define new ones. Minimum requirements is that field is a subtype of AbstractField and interpolate, getindex, has been defined to it. Field can, for example fetch data from random.org or market stocks, read data from hard drive or add some stochastics behavior to it."
},

{
    "location": "fields/#Functions-and-types-related-to-fields-1",
    "page": "Fields",
    "title": "Functions and types related to fields",
    "category": "section",
    "text": "CurrentModule = FEMBase\nDocTestSetup = quote\n    using FEMBase\nend"
},

{
    "location": "fields/#FEMBase.AbstractField",
    "page": "Fields",
    "title": "FEMBase.AbstractField",
    "category": "type",
    "text": "AbstractField\n\nAbstract supertype for all fields in JuliaFEM.\n\n\n\n\n\n"
},

{
    "location": "fields/#FEMBase.DCTI",
    "page": "Fields",
    "title": "FEMBase.DCTI",
    "category": "type",
    "text": "DCTI{T} <: AbstractField\n\nDiscrete, constant, time-invariant field.\n\nThis field is constant in both spatial direction and time direction, i.e. df/dX = 0 and df/dt = 0.\n\nExample\n\njulia> DCTI(1)\nFEMBase.DCTI{Int64}(1)\n\n\n\n\n\n"
},

{
    "location": "fields/#FEMBase.DVTI",
    "page": "Fields",
    "title": "FEMBase.DVTI",
    "category": "type",
    "text": "DVTI{N,T} <: AbstractField\n\nDiscrete, variable, time-invariant field.\n\nThis is constant in time direction, but not in spatial direction, i.e. df/dt = 0 but df/dX != 0. The basic structure of data is Tuple, and it is implicitly assumed that length of field matches to the number of shape functions, so that interpolation in spatial direction works.\n\nExample\n\njulia> DVTI(1, 2, 3)\nFEMBase.DVTI{3,Int64}((1, 2, 3))\n\n\n\n\n\n"
},

{
    "location": "fields/#FEMBase.DCTV",
    "page": "Fields",
    "title": "FEMBase.DCTV",
    "category": "type",
    "text": "DCTV{T} <: AbstractField\n\nDiscrete, constant, time variant field. This type of field can change in time direction but not in spatial direction.\n\nExample\n\nField having value 5 at time 0.0 and value 10 at time 1.0:\n\njulia> DCTV(0.0 => 5, 1.0 => 10)\nFEMBase.DCTV{Int64}(Pair{Float64,Int64}[0.0=>5, 1.0=>10])\n\n\n\n\n\n"
},

{
    "location": "fields/#FEMBase.DVTV",
    "page": "Fields",
    "title": "FEMBase.DVTV",
    "category": "type",
    "text": "DVTV{N,T} <: AbstractField\n\nDiscrete, variable, time variant field. The most general discrete field can change in both temporal and spatial direction.\n\nExample\n\njulia> DVTV(0.0 => (1, 2), 1.0 => (2, 3))\nFEMBase.DVTV{2,Int64}(Pair{Float64,Tuple{Int64,Int64}}[0.0=>(1, 2), 1.0=>(2, 3)])\n\n\n\n\n\n"
},

{
    "location": "fields/#FEMBase.CVTV",
    "page": "Fields",
    "title": "FEMBase.CVTV",
    "category": "type",
    "text": "CVTV <: AbstractField\n\nContinuous, variable, time variant field.\n\nExample\n\njulia> f = CVTV((xi,t) -> xi*t)\nFEMBase.CVTV(#1)\n\n\n\n\n\n"
},

{
    "location": "fields/#FEMBase.DVTId",
    "page": "Fields",
    "title": "FEMBase.DVTId",
    "category": "type",
    "text": "DVTId(X::Dict)\n\nDiscrete, variable, time invariant dictionary field.\n\n\n\n\n\n"
},

{
    "location": "fields/#FEMBase.DVTVd",
    "page": "Fields",
    "title": "FEMBase.DVTVd",
    "category": "type",
    "text": "DVTVd(time => data::Dict)\n\nDiscrete, variable, time variant dictionary field.\n\n\n\n\n\n"
},

{
    "location": "fields/#Types-1",
    "page": "Fields",
    "title": "Types",
    "category": "section",
    "text": "AbstractField\nDCTI\nDVTI\nDCTV\nDVTV\nCVTV\nDVTId\nDVTVd"
},

{
    "location": "fields/#Functions-(internal)-1",
    "page": "Fields",
    "title": "Functions (internal)",
    "category": "section",
    "text": "These functions needs to be defined when developing new fields:new_field\nupdate_field!\ninterpolate_field"
},

{
    "location": "fields/#Functions-(public)-1",
    "page": "Fields",
    "title": "Functions (public)",
    "category": "section",
    "text": "field(x)\nupdate!(field::F, data) where {F<:AbstractField}\ninterpolate(field::F, time) where {F<:AbstractField}"
},

{
    "location": "basis/#",
    "page": "Basis functions",
    "title": "Basis functions",
    "category": "page",
    "text": ""
},

{
    "location": "basis/#Basis-functions-1",
    "page": "Basis functions",
    "title": "Basis functions",
    "category": "section",
    "text": "using FEMBase\nusing FEMBase.FEMBasis: eval_dbasis!, jacobian, grad, interpolate,\n                        get_reference_element_coordinates, create_basis\nusing FEMBasisShape functions, also known as basis functions, interpolation polynomials and so on. Typically unknown field variable is interpolated from element nodal values using continuous functions. That is, \\begin{equation} u(\\xi,t) = \\sum{i} N(\\xi,t) u{i}[t] \\end{equation}Standard Lagrange shape functions are implemented.Linear shape functions:Seg2 (2-node segment)\nTri3 (3-node triangle)\nQuad4 (4-node quadrangle)\nTet4 (4-node tetrahedron)\nPyr5 (5-node pyramid)\nWedge6 (6-node wedge)\nHex8 (8-node hexahedra)Quadratic and biquadratic shape functions:Seg3\nTri6, Tri7\nQuad8, Quad9\nTet10\nWedge15\nHex20, Hex27NURBS shape functions:NSeg\nNSurf\nNSolidCreating new basis is done simply by calling that constructor, without any arguments:Seg2()\nTri3()\nQuad4()The dimensions of basis functions can be determined by size and length. In JuliaFEM, we have a convention that arrays grow on right according to number of nodes and down according to the spatial index. So if we have a column vector boldsymbol N and a row vector boldsymbol u, interpolation goes u = boldsymbol N boldsymbol u:N = [1 2 3] # evaluated basis functions\nu = [1, 2, 3] # field value at discrete points\nN*uFor example, Quad4 is defined in two dimensions and it has 4 nodes, soB = Quad4()\nsize(B)\nlength(B)Evaluating basis functions and they partial derivatives with respect to some xi is done efficiently using eval_basis! and eval_dbasis!. For these commands one needs to allocate array outside of the hot loops to get speed.N = zeros(1, length(B))\ndN = zeros(size(B)...)\nxi = (0.0, 0.0)\neval_basis!(B, N, xi)\neval_dbasis!(B, dN, xi)For Langrange interpolation polynomials, by definition, on each node shape function corresponding to that node gets value of 1 and the rest is zero. Node ordering follows the same defined in e.g. in ABAQUS and in many other FEM softwares. The actual shape of domain can be inspected using command get_reference_element_coordinates:get_reference_element_coordinates(Quad4)for xi in get_reference_element_coordinates(Quad4)\n    eval_basis!(B, N, xi)\n    println(\"$N at $xi\")\nend"
},

{
    "location": "basis/#Mathematics-1",
    "page": "Basis functions",
    "title": "Mathematics",
    "category": "section",
    "text": "Without knowing anything about the shape of the real domain (after all, basis is usually defined on dimensionless, reference domain), eval_dbasis! is calculating gradient with respect to dimensionless coordinates xi_i, i.e.\\begin{equation} \\left(\\frac{\\partial\\boldsymbol{N}}{\\partial\\boldsymbol{\\xi}}\\right){ij}=\\frac{\\partial N{j}}{\\partial\\xi_{i}} \\end{equation}Usually this is not wanted, but instead gradient of basis functions is calculated with respect to natural coordinates X_i,\\begin{equation} \\left(\\frac{\\partial\\boldsymbol{N}}{\\partial\\boldsymbol{X}}\\right){ij}=\\frac{\\partial N{j}}{\\partial X_{i}} \\end{equation}Without going into the mathematical details, to transform partial derivatives from reference element to natural coordinates, inverse of Jacobian matrix is needed.X = ([0.0, 0.0], [1.0, 0.0], [1.0, 1.0], [0.0, 1.0])\nxi = (0.0, 0.0)\nJ = jacobian(B, X, xi)\ninv(J) * dNOr directly, using grad:dNdX = grad(B, X, xi)If interpolation domain is a manifold, i.e. space having lower dimension than the actual space (read: surface in 3d), Jacobian is not square and inverse cannot be taken.X2 = ([0.0,0.0,0.0], [1.0, 0.0,1.0], [1.0,1.0,1.0], [0.0,1.0,0.0])\nxi = (0.0, 0.0)\nJ = jacobian(B, X2, xi)One can use Jacobian to calculate surface integral:\\begin{equation} \\iint{S}f\\,\\mathrm{d}\\Sigma=\\iint{T}f\\left(\\boldsymbol{x}\\left(s,t\\right)\\right)\\left\\Vert \\frac{\\partial\\boldsymbol{x}}{\\partial s}\\times\\frac{\\partial\\boldsymbol{x}}{\\partial t}\\right\\Vert \\,\\mathrm{d}s\\mathrm{d}t \\end{equation}4*norm(cross(J[1,:], J[2,:])), sqrt(2) # area of manifoldGradient of e.g. displacement field or temperature field can be also evaluated, with the same grad function, by adding field u:u = ([0.0, 0.0], [1.0, -1.0], [2.0, 3.0], [0.0, 0.0])\nT = (1.0, 2.0, 3.0, 4.0)\ngrad(B, u, X, xi)\ngrad(B, T, X, xi)One can interpolate fields using basis, i.e. calculate u = boldsymbolNboldsymbolu as described before:interpolate(B, u, xi)\ninterpolate(B, T, xi)In \"hot loops\", it\'s absolutely necessary that no unnecessary memory allcations happen as it is reducing the performance dramatically from C speed. To avoid unnecessary memory allocations, a struct BasisInfo is introduced, containing workspace for calculations.bi = BasisInfo(Quad4)\neval_basis!(bi, X, xi)\nbi.J       # Jacobian\nbi.N       # shape functions\nbi.dN      # shape function derivatives, with respect to xi\nbi.detJ    # determinant of Jacobian\nbi.grad    # shape function derivatives, with respect to X\nbi.invJ    # inverse of JacobianCalculating gradient of some field u can be done memory efficiently using this BasisInfo structure:gradu = zeros(2, 2)\ngrad!(bi, gradu, u)"
},

{
    "location": "basis/#Defining-custom-shape-functions-1",
    "page": "Basis functions",
    "title": "Defining custom shape functions",
    "category": "section",
    "text": "Depending from the type of shape functions, they can be created more or less automatic way. An ultimate goal is to create all kind of shape functions just by defining the general principles and let computer handle the all boring things and create shape functions automatically using metaprogramming to get efficient code.For Lagrange type interpolation, ones needs only to define polynomial and corner points for domain. For example, if domain is 01^2, one can use create_basis, and give polynomial with degree matching to the number of point to interpolate.code = create_basis(\n    :MyQuad,\n    \"My special domain\",\n    (\n        (0.0, 0.0),\n        (1.0, 0.0),\n        (1.0, 1.0),\n        (0.0, 1.0),\n    ),\n    \"1 + u + v + u*v\"\n);\n\neval(code)What we have defined is a interpolation polynomial and \"corner points\". As a result, we have a new basis MyQuad, working just like expected. All Lagrange polynomials are done like this.B = MyQuad()\nxi = (0.5, 0.5)\neval_basis!(B, N, xi)In this case, and considering domain, partial derivatives of shape functions are with respect to X, because interpolation polynomials are calculated against real domain and not \"reference domain\". That is, partial derivatives should match to what already calcualated.eval_dbasis!(B, dN, xi)Jacobian should be identity matrix:J = jacobian(B, X, xi)And taking gradient with respect to X should return also same result than before:u = ([0.0, 0.0], [1.0, -1.0], [2.0, 3.0], [0.0, 0.0])\ngrad(B, u, X, xi)Shape functions can be defined manually and calculate partial derivatives automatically. For example, for pyramid elements typical ansatz approach is not applicable. Some other degenerated elements exists in fracture mechanics.For example, C1-continuous Hermite shape functions ready to approximate Euler-Bernoulli beam equations can be defined as:code = create_basis(\n    :C1Hermite,\n    \"C1-continuous Hermite shape functions\",\n    (\n        (0.0,),\n        (0.0,),\n        (1.0,),\n        (1.0,)\n    ),\n    (\n        \"2*u^3 - 3*u^2 + 1\",\n        \"u^3 - 2*u^2 + u\",\n        \"-2*u^3 + 3*u^2\",\n        \"u^3 - u^2\"\n    )\n);\neval(code)Again, we should have 1.0 in corresponding nodal point or it\'s derivative, according to that order we have u(0) u(0) u(1) u(1), soB = C1Hermite()\nN = zeros(1, 4)\ndN = zeros(1, 4)\neval_basis!(B, N, (0.0,))\neval_dbasis!(B, dN, (0.0,))\neval_basis!(B, N, (1.0,))\neval_dbasis!(B, dN, (1.0,))The last option is to build everything from scratch. For that, one must import and define following functions:Base.size\nBase.length\nFEMBase.getreferenceelement_coordinates\nFEMBase.eval_basis!\nFEMBase.eval_dbasis!As an examples, a simple implementation of P-hierarchical 1d-basis would then be the following:import Base: size, length\nimport FEMBase: get_reference_element_coordinates,\n                eval_basis!, eval_dbasis!,\n                AbstractBasis\n\ntype PSeg <: AbstractBasis\n    order :: Int\nend\n\nfunction PSeg()\n    return PSeg(1)\nend\n\nfunction length(basis::PSeg)\n    return basis.order+1\nend\n\nfunction size(basis::PSeg)\n    return (1, basis.order+1)\nend\n\nfunction get_reference_element_coordinates(basis::PSeg)\n    return ((-1.0,), (1.0,))\nend\n\nnothing # hideNext, define Legengre polynomials:\"\"\"\n    get_legendre_polynomial(n)\n\nReturn Legendgre polynomial of order `n` to inverval ξ ∈ [1, 1].\n\nImplementation uses Bonnet\'s recursion formula. See\nhttps://en.wikipedia.org/wiki/Legendre_polynomials\n\"\"\"\nfunction get_legendre_polynomial(n)\n    n == 0 && return xi -> 1.0\n    n == 1 && return xi -> xi\n    Pm1 = get_legendre_polynomial(n-1)\n    Pm2 = get_legendre_polynomial(n-2)\n    A(xi) = (2.0*n-1.0)*xi*Pm1(xi)\n    B(xi) = (n-1.0)*Pm2(xi)\n    return xi -> (A(xi)-B(xi))/n\nend\n\n\"\"\"\n    get_legendre_polynomial_derivative(n)\n\nReturn derivative of Legendgre polynomial of order `n` to\ninverval ξ ∈  [-1, 1]\n\"\"\"\nfunction get_legendre_polynomial_derivative(n)\n    n == 0 && return xi -> 0.0\n    n == 1 && return xi -> 1.0\n    Pm1 = get_legendre_polynomial_derivative(n-1)\n    Pm2 = get_legendre_polynomial_derivative(n-2)\n    A(xi) = (2.0*(n-1.0)+1.0)*xi*Pm1(xi)\n    B(xi) = (n+1.0-1.0)*Pm2(xi)\n    return xi -> (A(xi)-B(xi))/(n-1.0)\nend\n\nnothing # hideAnd finally implement eval_basis! and eval_dbasis! functions:function eval_basis!{T}(basis::PSeg, N::Matrix{T}, xi::Tuple{T})\n    n = length(basis)\n    t = xi[1]\n    N[1] = 0.5*(1-t)\n    N[2] = 0.5*(1+t)\n    n < 3 && return N\n    for i=3:n\n        j = i-1\n        P1 = get_legendre_polynomial(j)\n        P2 = get_legendre_polynomial(j-2)\n        N[i] = 1.0/sqrt(2.0*(2.0*j-1.0))*(P1(t)-P2(t))\n    end\n    return N\nend\n\nfunction eval_dbasis!{T}(basis::PSeg, dN::Matrix{T}, xi::Tuple{T})\n    n = length(basis)\n    t = xi[1]\n    dN[1] = -0.5\n    dN[2] = 0.5\n    n < 3 && return N\n    for i=3:n\n        j = i-1\n        P1 = get_legendre_polynomial_derivative(j)\n        P2 = get_legendre_polynomial_derivative(j-2)\n        dN[i] = 1.0/sqrt(2.0*(2.0*j-1.0))*(P1(t)-P2(t))\n    end\n    return dN\nend\n\nnothing # hideLet\'s try it:B = PSeg()\nN = zeros(1, length(B))\neval_basis!(B, N, (0.0,))\nB.order = 2\nN = zeros(1, length(B))\neval_basis!(B, N, (0.0,))(Image: Hierarchical shape functions up to order 6)"
},

{
    "location": "integration/#",
    "page": "Integration",
    "title": "Integration",
    "category": "page",
    "text": ""
},

{
    "location": "integration/#Integration-1",
    "page": "Integration",
    "title": "Integration",
    "category": "section",
    "text": ""
},

{
    "location": "elements/#",
    "page": "Elements",
    "title": "Elements",
    "category": "page",
    "text": ""
},

{
    "location": "elements/#Elements-1",
    "page": "Elements",
    "title": "Elements",
    "category": "section",
    "text": "In JuliaFEM, elements can be considered as \"containers\", combining fields and basis functions described above. Among that, element has information about topology (connectivity) and numerical integration rule. These fundamentals forms a finite element, the backbone of finite element method.using FEMBaseNew elements are constructed by passing basis type (e.g. Seg2, Quad4, Tet10, ...) to Element and list of id numbers to where element is topologically connected.el = Element(Quad4, [1, 2, 3, 4])Setting fields to element is done using a command update!, which either creates a new field if field with that name does not already exist, or updates the old one. Typically, at least field called geometry needs to be defined to element as it\'s used to calculate Jacobian of element. Fields can be discrete, continuous, time invariant or variant, variable or constant, or anything else that is subclassed from AbstractField.X = Dict(1 => [0.0,0.0], 2=>[1.0,0.0], 3=>[1.0,1.0], 4=>[0.0,1.0])\nupdate!(el, \"geometry\", X)Internally, fields are stored in a Dict:el.fieldsThe command update! is automatically inspecting field type based in input. For example, to define temporal field varying spatially:u0 = ([0.0,0.0], [0.0,0.0], [0.0,0.0], [0.0,0.0])\nu1 = ([0.0,0.0], [0.0,0.0], [0.5,0.0], [0.0,0.0])\nupdate!(el, \"displacement\", 0.0 => u0)\nupdate!(el, \"displacement\", 1.0 => u1)\nel.fieldsInterpolating of fields can be done using syntax Element(field_name, xi, time). For example, position of material particle X in initial configuration and deformed configuration in the middle of the element at time t=1 can be found asxi = (0.0, 0.0)\ntime = 1.0\nX = el(\"geometry\", xi, time)\nu = el(\"displacement\", xi, time)\nx = X+uJacobian, determinant of Jacobian and gradient of field can be calculated adding extra argument Val{:Jacobian}, Val{:detJ}, Val{:Grad} to the above command and not passing field name, i.e.el(xi, time, Val{:Jacobian})\nel(xi, time, Val{:detJ})\nel(xi, time, Val{:Grad})Usually what is needed when calculating local stiffness matrices is a gradient of some field. For example, displacement gradient and temperature gradient can be obtained following way:gradu = el(\"displacement\", xi, time, Val{:Grad})\nupdate!(el, \"temperature\", (1.0, 2.0, 3.0, 4.0))\ngradT = el(\"temperature\", xi, time, Val{:Grad})Accessing integration points of element is done using function get_integration_points. Combining interpolation and integration one can already calculate local matrices of a single element or, for example area and strain energy:update!(el, \"lambda\", 96.0)\nupdate!(el, \"mu\", 48.0)\n\nA = 0.0\nW = 0.0\nfor ip in get_integration_points(el)\n    detJ = el(ip, time, Val{:detJ})\n    A += ip.weight * detJ\n    ∇u = el(\"displacement\", ip, time, Val{:Grad})\n    E = 1/2*(∇u + ∇u\')\n    λ = el(\"lambda\", ip, time)\n    μ = el(\"mu\", ip, time)\n    W += ip.weight * ( λ/2*trace(E*E\') + μ*trace(E)^2) * detJ\nend\n\nprintln(\"Area: $A\")\nprintln(\"Strain energy: $W\")To calculate local stiffness matrix for Poisson problem:K = zeros(4,4)\nupdate!(el, \"coefficient\", 36.0)\nfor ip in get_integration_points(el)\n    dN = el(ip, time, Val{:Grad})\n    detJ = el(ip, time, Val{:detJ})\n    c = el(\"coefficient\", ip, time)\n    K += ip.weight * c*dN\'*dN * detJ\nend\nKFor more memory efficient code it\'s a good idea to use BasisInfo and element_info! which allocates working memory to calculate all \"basic stuff\" for a single integration point, like Jacobian, determinant of Jacobian, basis and it\'s partial derivatives with respect to reference configuration X.bi = BasisInfo(Quad4)\nfill!(K, 0.0)\nfor ip in get_integration_points(el)\n    J, detJ, N, dN = element_info!(bi, el, ip, time)\n    c = el(\"coefficient\", ip, time)\n    K += ip.weight * c*dN\'*dN * detJ\nend\nK"
},

{
    "location": "elements/#Using-analytical-fields-1",
    "page": "Elements",
    "title": "Using analytical fields",
    "category": "section",
    "text": ""
},

{
    "location": "elements/#Creating-fields-depending-from-other-fields-1",
    "page": "Elements",
    "title": "Creating fields depending from other fields",
    "category": "section",
    "text": ""
},

{
    "location": "problems/#",
    "page": "Problems",
    "title": "Problems",
    "category": "page",
    "text": ""
},

{
    "location": "problems/#Problems-1",
    "page": "Problems",
    "title": "Problems",
    "category": "section",
    "text": "The role of problems in JuliaFEM is to work as a container for a set of elements. They contain elements and an information how the elements are assembled to the global assembly. The key point is that thanks to multiple dispatch, each problem defines also the physics behind discretization and all problems are assembled using a command assemble_elements!. As an example, a heat equation in two dimensions is discretized. Mathematically known also as Poisson problem. Strong form of the problem is nabla cdot (-nabla u ) = f    text in  Omega \n                         u = u_0  text on  Gamma_mathrmD \n      fracupartial n = g    text on  Gamma_mathrmNand corresponding variational problem is to find uinmathcalU such that for all vinmathcalVint_Omegaknabla ucdotnabla vmathrmdx=int_Omegafvmathrmdx+int_Gamma_mathrmNgvmathrmdsLet\'s call k thermal conductivity, f heat source and g heat flux.using FEMBase\nimport FEMBase: assemble_elements!, get_unknown_field_nameEach new problem must be a subtype of FieldProblem or BoundaryProblem. The main difference between these two are that FieldProblem is assembling local matrices for domain Omega whereas BoundaryProblem is creating (in general) constraint matrices for boundary Gamma_mathrmD. The general structure to solve in JuliaFEM is currently described by four different matrices and two vectors, i.e.beginbmatrix\nboldsymbolK  boldsymbolC_1\nboldsymbolC_2  boldsymbolD\nendbmatrix\nbeginbmatrix\nboldsymbolu\nboldsymbollambda\nendbmatrix =\nbeginbmatrix\nboldsymbolf\nboldsymbolg\nendbmatrixWe believe that this construction is general enough to describe all possible situations in future. Quite often boldsymbolC_1 = boldsymbolC_2^mathrmT and boldsymbolD = boldsymbol0 so that we have a typical saddle point problembeginbmatrixboldsymbolK  boldsymbolC^mathrmT\nboldsymbolC  boldsymbol0\nendbmatrixbeginbmatrixboldsymbolu\nboldsymbollambda\nendbmatrix=beginbmatrixboldsymbolf\nboldsymbolg\nendbmatrixwhich is equivalent to minimization problemmin_boldsymbolCboldsymbolu = boldsymbolg\nfrac12 boldsymbolu^mathrmT boldsymbolK boldsymbolu -\nboldsymbolu^mathrmT boldsymbolf"
},

{
    "location": "problems/#Discretizing-field-problem-1",
    "page": "Problems",
    "title": "Discretizing field problem",
    "category": "section",
    "text": "So, first we must define a new type, e.g. Heat, which is a subclass of FieldProblem. Problem-wide parameters can be defined into struct if needed.type Heat <: FieldProblem\nendIn principle it\'s possible to assemble one element at a time, but way more memory efficient is to assemble all elements with same kind (basis) at same time and preallocate memory only one time before looping through element list. Implementation for assembling local stiffness matrix isfunction assemble_elements!{B}(problem::Problem{Heat}, assembly::Assembly,\n                               elements::Vector{Element{B}}, time::Float64)\n\n    println(\"Assembling elements of kind $B\")\n    bi = BasisInfo(B)\n    ndofs = length(B)\n    Ke = zeros(ndofs, ndofs)\n\n    for element in elements\n        fill!(Ke, 0.0)\n        for ip in get_integration_points(element)\n            J, detJ, N, dN = element_info!(bi, element, ip, time)\n            k = element(\"thermal conductivity\", ip, time)\n            Ke += ip.weight * k*dN\'*dN * detJ\n        end\n        gdofs = get_gdofs(problem, element)\n        add!(assembly.K, gdofs, gdofs, Ke)\n    end\n\nend\n\nnothing # hideHere, first some memory is allocated to calculate Jacobian, gradients etc. to BasisInfo. Ke is used to store local stiffness matrix. Then iterate over all elements and integration points, evaluate basis and add contribution to local stiffness matrix. Finally, get global degrees of freedom for element by using command get_gdofs and finally add contribution to global stiffness matrix K.From performance point of view, it\'s important that memory allocations inside at least the innermost loop is minimized, although assembling global stiffness matrix can be parallelized (at least almost) perfectly and is not considered as a bottleneck when models get big enough. It\'s anyway a good idea to pay attention to the memory allocations."
},

{
    "location": "problems/#Setting-and-getting-global-degrees-of-freedom-for-element-1",
    "page": "Problems",
    "title": "Setting and getting global degrees of freedom for element",
    "category": "section",
    "text": "get_gdofs is returning the global degrees of freedom for element. They can be set manually using set_gdofs(problem, element, dofs). Otherwise they are calculated automatically based on the problem dimension using formula g(i,j,d) = d*(i-1)+j, where i is local node number, j is the number of degree of freedom and d is the maximum number of degrees of freedom for node. With this formula dofs are ordered so that first comes all dofs for node 1, then for node 2 and so on. For 3 dofs/node we get (u_11 u_12 u_13 u_21 u_22 u_23 ldots u_N1 u_N2 u_N3), where the first index is node number and second index is dof number.Let\'s create some test problem and test our implementation:el1 = Element(Quad4, [1, 2, 3, 4])\nX = Dict(1 => [0.0,0.0], 2 => [1.0,0.0], 3 => [1.0,1.0], 4 => [0.0,1.0])\nupdate!(el1, \"geometry\", X)\nupdate!(el1, \"thermal conductivity\", 6.0)\nelements = [el1]\nassembly = Assembly()\nproblem = Problem(Heat, \"test problem\", 1)\nnothing # hideNow the struct Heat is empty. If we need to store some problem-wide settings to that struct, they can be found from problem.properties. When creating a new Problem, the syntax is Problem(type, name, field_dimension), where two first arguments are self descriptive. The third one is the information, how many degrees of freedom is in this problem. As Poisson problem is scalar equation, there is only 1 degrees of freedom per node. For example in continuum mechanics, where the unknown field is displacement, there is usually 2-6 degrees of freedom per node, depending on problem type. Next we do the actual assembling of elements into global stiffness matrix:time = 0.0\nassemble_elements!(problem, assembly, elements, time)full(assembly.K)There is actually one Assembly inside Problem and elements are defined to problem using add_elements!, so a more realistic use case to create global assembly would be to use assemble!(problem, time) as shown below:el2 = Element(Tri3, [3, 2, 5])\nX[5] = [2.0, 1.0]\nelements = [el1, el2]\nupdate!(elements, \"geometry\", X)\nupdate!(elements, \"thermal conductivity\", 6.0)\nproblem = Problem(Heat, \"test problem\", 1)\nadd_elements!(problem, elements)\nassemble!(problem, time)full(problem.assembly.K)Now, function defined above is actually executed two times, first for elements using Tri3 basis and after that for Quad4. That is, assemble!(problem, time) is grouping elements by their type and calling function for each element type separately. It also does some initializations and gives possibility to mangle matrices before and after assembly. These hacks may be useful if one needs to add some discrete values to the matrices after assembly or e.g. save matrices to disk for later diagnoses.We also need to deal with the integrals on the right hand side. The first integral is done over the domain and can be included to the same assemble_elements!-function than stiffness matrix. Boundary term can be handled in different ways. One option is to define it yet in same function and search for fields like surface traction S1, where S1 is one side of the element. This is how it is done in ABAQUS. Another way is to use lower dimensional \"boundary element\" in assembly and add surface term to that element. This is how it is done in Code Aster.assembly_elements!-function defined above can be overridden by restricting the type of elements list, elements::Vector{Element{B}} to a some spesific elements. This allows, for example, to optimize assembly for some certain element type what is commonly used. Another use case is to define different assembly function for boundary elements. In 2d setting, voluminal elements like Tet3, Tet6, Quad4, Quad8, Quad9 are integrated over volume and they one dimensional counterparts Seg2, Seg3 can be used to assign boundary fluxes.The updated assemble_elements!-function, which can also handle volume load from right hand side of the equation, i.e. int fvmathrmdxlooks like following:function assemble_elements!{B}(problem::Problem{Heat}, assembly::Assembly,\n                               elements::Vector{Element{B}}, time::Float64)\n\n    println(\"Assembling volume elements of kind $B\")\n    bi = BasisInfo(B)\n    ndofs = length(B)\n    Ke = zeros(ndofs, ndofs)\n    fe = zeros(ndofs)\n\n    for element in elements\n        fill!(Ke, 0.0)\n        fill!(fe, 0.0)\n        for ip in get_integration_points(element)\n            J, detJ, N, dN = element_info!(bi, element, ip, time)\n            k = element(\"thermal conductivity\", ip, time)\n            Ke += ip.weight * k*dN\'*dN * detJ\n            if haskey(element, \"heat source\")\n                f = element(\"heat source\", ip, time)\n                fe += ip.weight * N\'*f * detJ\n            end\n        end\n        gdofs = get_gdofs(problem, element)\n        add!(assembly.K, gdofs, gdofs, Ke)\n        add!(assembly.f, gdofs, fe)\n    end\n\nend\n\nnothing # hideAt last, implement boundary elements to handle heat flux. To choose what elements should use this assembly function, elements::Vector{Element{B}} must be restricted only to group where B<:Union{Seg2, Seg}.function assemble_elements!{B<:Union{Seg2,Seg3}}(problem::Problem{Heat},\n                                                 assembly::Assembly,\n                                                 elements::Vector{Element{B}},\n                                                 time::Float64)\n\n    println(\"Assembling boundary elements of kind $B\")\n    bi = BasisInfo(B)\n    ndofs = length(B)\n    fe = zeros(ndofs)\n\n    for element in elements\n        haskey(element, \"heat flux\") || continue\n        fill!(fe, 0.0)\n        for ip in get_integration_points(element)\n            J, detJ, N, dN = element_info!(bi, element, ip, time)\n            g = element(\"heat flux\", ip, time)\n            fe += ip.weight * N\'*g * detJ\n        end\n        gdofs = get_gdofs(problem, element)\n        add!(assembly.f, gdofs, fe)\n    end\n\nend\n\nnothing # hideTo test everything implemented, create some small test problem:el1 = Element(Quad4, [1, 2, 3, 4])\nel2 = Element(Tri3, [3, 2, 5])\nel3 = Element(Seg2, [3, 5])\nX = Dict(1 => [0.0, 0.0],\n         2 => [1.0, 0.0],\n         3 => [1.0, 1.0],\n         4 => [0.0, 1.0],\n         5 => [2.0, 1.0])\nelements = [el1, el2, el3]\nupdate!(elements, \"geometry\", X)\nupdate!(elements, \"thermal conductivity\", 6.0)\nupdate!(el3, \"heat flux\", 264.0)\nupdate!(el1, \"heat source\", 132.0)\nproblem = Problem(Heat, \"test problem\", 1)\nadd_elements!(problem, elements)\nassemble!(problem, time)Global stiffness matrix boldsymbolK and force vector boldsymbolf areK = full(problem.assembly.K)\nf = full(problem.assembly.f)To get unique solution, some essential boundary condition must be given, e.g. set dofs 1 and 4 fixed, u_1 = u_4 = 0.u = zeros(5)\nall_dofs = collect(1:5)\nfixed_dofs = [1, 4]\nfree_dofs = setdiff(all_dofs, fixed_dofs)\nu[free_dofs] = K[free_dofs,free_dofs] \\ f[free_dofs]\nu"
},

{
    "location": "problems/#Discretizing-boundary-problem-1",
    "page": "Problems",
    "title": "Discretizing boundary problem",
    "category": "section",
    "text": "Can be e.g. Dirichlet boundary, contact / mesh tie problem between two domains, BEM formulation, kinematic coupling (MPC) and so on.A good question is to determine how to map element local degrees of freedom with global ones. As the plan is to develop a multiphysical FEM platform, it\'s a hard question how to create this kind of mapping in a dynamic way. Yet another question is how to set boundary conditions for different type of physics. For now, these questions are answered by defining the name of unknown field using function get_unknown_field_name and giving the dimension of unknown field when creating a problem, so that change of information between two problem is possible. This solution has already identified shortcomings and can be expected to change in future.function get_unknown_field_name(::Problem{Heat})\n    return \"temperature\"\nend\n\nnothing # hidetype DirichletBC <: BoundaryProblem\nendOur implementation to handle boundary condition u = u_0 looks following:function assemble_elements!{E}(problem::Problem{DirichletBC},\n                               assembly::Assembly,\n                               elements::Vector{Element{E}},\n                               time::Float64)\n\n    name = get_parent_field_name(problem)\n    dim = get_unknown_field_dimension(problem)\n\n    println(\"Assembling Dirichlet boundary condition\")\n    println(\"Field name = $name, dofs/node = $dim\")\n\n    data = Dict{Int64,Float64}()\n    for element in elements\n        for i=1:dim\n            haskey(element, \"$name $dim\") || continue\n            gdofs = get_gdofs(problem, element)\n            ldofs = gdofs[i:dim:end]\n            xis = get_reference_element_coordinates(E)\n            for (ldof, xi) in zip(ldofs, xis)\n                data[ldof] = interpolate(element, \"$name $dim\", xi, time)\n            end\n        end\n    end\n\n    for (dof, val) in data\n        add!(assembly.C1, dof, dof, 1.0)\n        add!(assembly.C2, dof, dof, 1.0)\n        add!(assembly.g, dof, val)\n    end\n\nendTo fix dofs 1 and 4 like before:bel1 = Element(Seg2, [1, 4])\nupdate!(bel1, \"geometry\", X)\nupdate!(bel1, \"temperature 1\", 0.0)\nbc = Problem(DirichletBC, \"fixed\", 1, \"temperature\")\nadd_elements!(bc, [bel1])\nassemble!(bc, time)Now we have all matrices needed:C1 = full(bc.assembly.C1, 5, 5)\nC2 = full(bc.assembly.C2, 5, 5)\nD = full(bc.assembly.D, 5, 5)\ng = full(bc.assembly.g, 5, 1)Together with already calculated matrices, we can now form saddle point problem boldsymbolAboldsymbolx = boldsymbolb:A = [K C1; C2 D]\nb = [f; g]Solution:nz = [1, 2, 3, 4, 5, 6, 9]\nx = zeros(10)\nx[nz] = A[nz,nz] \\ b[nz]As a result we have found boldsymbolu and boldsymbollambda:u = x[1:5]\nla = x[6:10]\nu\' * laBoth field problem and boundary problems can of course have all four matrices and two vectors. For example, in finite sliding contact algorithms all four matrices are used as algorithms are contributing to stiffness matrix also when linearized properly."
},

{
    "location": "problems/#Assembling-mass-matrices-1",
    "page": "Problems",
    "title": "Assembling mass matrices",
    "category": "section",
    "text": ""
},

{
    "location": "problems/#Using-problem-wide-fields-1",
    "page": "Problems",
    "title": "Using problem-wide fields",
    "category": "section",
    "text": ""
},

{
    "location": "problems/#Discretizing-mixed-problems-1",
    "page": "Problems",
    "title": "Discretizing mixed problems",
    "category": "section",
    "text": ""
},

{
    "location": "problems/#Using-automatic-differentiation-to-linearize-non-linear-problem-1",
    "page": "Problems",
    "title": "Using automatic differentiation to linearize non-linear problem",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/#",
    "page": "Analyses and solvers",
    "title": "Analyses and solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/#Analyses-and-solvers-1",
    "page": "Analyses and solvers",
    "title": "Analyses and solvers",
    "category": "section",
    "text": "After a global assembly for each problem is ready, they must somehow put together, usually construct a linear system boldsymbolAboldsymbolx = boldsymbolb , solve system of equations and potentially update solution back to problems / elements.For this task we have Analysis. Just like problems are \"containers\" for a set of some elements, analyses are containers for a set of problems, performing some spesific task. This task usually (but not always) involves solving big systems of equations.For example, typical nonlinear quasistatic analysis isinitialize problems (if needed)\nassemble problems\ncombine assemblies to construct a linear system boldsymbolAboldsymbolx = boldsymbolb\nsolve linear system, as effectively as possible\nupdate solution back to problems or elements\npostprocess fields\nwrite requested results to file\ncheck convergence, if not converged, go back to 2."
},

{
    "location": "solvers/#Implementing-solver-for-LinearSystem-1",
    "page": "Analyses and solvers",
    "title": "Implementing solver for LinearSystem",
    "category": "section",
    "text": "When models gets big enough, step 4 is dominating in a solution process. For that reason we have abstract type AbstractLinearSystemSolver which can be subclassed to construct own solution strategy. This strategy can be, for example to use Julia\'s build-in solvers, MUMPS, iterative solvers and so on. And to make this as standard as possible, we have LinearSystem containing all the relevant matrices, i.e.beginbmatrix\nboldsymbolK  boldsymbolC_1\nboldsymbolC_2  boldsymbolD\nendbmatrix\nbeginbmatrix\nboldsymbolu\nboldsymbollambda\nendbmatrix =\nbeginbmatrix\nboldsymbolf\nboldsymbolg\nendbmatrixusing FEMBase\nusing FEMBase: LinearSystem, AbstractLinearSystemSolver,\n               AbstractAnalysis, Analysis, Element, Problem,\n               Quad4, get_problems\nimport FEMBase: assemble_elements!, run!, can_solve, solve!\n\ntype Heat <: FieldProblem\nend\n\nfunction get_unknown_field_name(::Problem{Heat})\n    return \"temperature\"\nend\n\nfunction assemble_elements!{B}(problem::Problem{Heat}, assembly::Assembly,\n                               elements::Vector{Element{B}}, time::Float64)\n\n    println(\"Assembling volume elements of kind $B\")\n    bi = BasisInfo(B)\n    ndofs = length(B)\n    Ke = zeros(ndofs, ndofs)\n    fe = zeros(ndofs)\n\n    for element in elements\n        fill!(Ke, 0.0)\n        fill!(fe, 0.0)\n        for ip in get_integration_points(element)\n            J, detJ, N, dN = element_info!(bi, element, ip, time)\n            k = element(\"thermal conductivity\", ip, time)\n            Ke += ip.weight * k*dN\'*dN * detJ\n            if haskey(element, \"heat source\")\n                f = element(\"heat source\", ip, time)\n                fe += ip.weight * N\'*f * detJ\n            end\n        end\n        gdofs = get_gdofs(problem, element)\n        add!(assembly.K, gdofs, gdofs, Ke)\n        add!(assembly.f, gdofs, fe)\n    end\n\nend\n\nfunction assemble_elements!{B<:Union{Seg2,Seg3}}(problem::Problem{Heat},\n                                                 assembly::Assembly,\n                                                 elements::Vector{Element{B}},\n                                                 time::Float64)\n\n    println(\"Assembling boundary elements of kind $B\")\n    bi = BasisInfo(B)\n    ndofs = length(B)\n    fe = zeros(ndofs)\n\n    for element in elements\n        haskey(element, \"heat flux\") || continue\n        fill!(fe, 0.0)\n        for ip in get_integration_points(element)\n            J, detJ, N, dN = element_info!(bi, element, ip, time)\n            g = element(\"heat flux\", ip, time)\n            fe += ip.weight * N\'*g * detJ\n        end\n        gdofs = get_gdofs(problem, element)\n        add!(assembly.f, gdofs, fe)\n    end\n\nend\n\ntype DirichletBC <: BoundaryProblem\nend\n\nfunction assemble_elements!{E}(problem::Problem{DirichletBC},\n                               assembly::Assembly,\n                               elements::Vector{Element{E}},\n                               time::Float64)\n\n    name = get_parent_field_name(problem)\n    dim = get_unknown_field_dimension(problem)\n\n    println(\"Assembling Dirichlet boundary condition\")\n    println(\"Field name = $name, dofs/node = $dim\")\n\n    data = Dict{Int64,Float64}()\n    for element in elements\n        for i=1:dim\n            haskey(element, \"$name $dim\") || continue\n            gdofs = get_gdofs(problem, element)\n            ldofs = gdofs[i:dim:end]\n            xis = get_reference_element_coordinates(E)\n            for (ldof, xi) in zip(ldofs, xis)\n                data[ldof] = interpolate(element, \"$name $dim\", xi, time)\n            end\n        end\n    end\n\n    for (dof, val) in data\n        add!(assembly.C1, dof, dof, 1.0)\n        add!(assembly.C2, dof, dof, 1.0)\n        add!(assembly.g, dof, val)\n    end\n\nend\nFirst setup linear system, we take matrices introduced in the context of [Problems]:ls = LinearSystem(5)\nls.K = sparse([  4.0  -1.0  -2.0  -1.0   0.0\n                -1.0   7.0  -4.0  -2.0   0.0\n                -2.0  -4.0  10.0  -1.0  -3.0\n                -1.0  -2.0  -1.0   4.0   0.0\n                 0.0   0.0  -3.0   0.0   3.0])\nls.C1 = sparse([ 1.0  0.0  0.0  0.0  0.0\n	         0.0  0.0  0.0  0.0  0.0\n	         0.0  0.0  0.0  0.0  0.0\n	         0.0  0.0  0.0  1.0  0.0\n	         0.0  0.0  0.0  0.0  0.0])\nls.C2 = ls.C1\nls.f = sparsevec([33.0, 33.0, 165.0, 33.0, 132.0])\nnothing # hideFor example, a simple solver for small problems would be to use lufact from UMFPACK:\ntype LUSolver <: AbstractLinearSystemSolver\n    # may contain some solver-spesific settings\nend\n\n\"\"\"\n    solve!(ls::LinearSystem, solver::LUSolver)\n\nSolve linear system using LU factorization. If final system has zero rows,\nadd 1 to diagonal to make matrix non-singular.\n\"\"\"\nfunction solve!(ls::LinearSystem, solver::LUSolver)\n\n    println(\"Solving system using LUSolver\")\n\n    A = [ls.K ls.C1; ls.C2 ls.D]\n    b = [ls.f; ls.g]\n\n    # add 1.0 to diagonal for any zero rows in system\n    p = ones(2*ls.dim)\n    p[unique(rowvals(A))] = 0.0\n    A += spdiagm(p)\n\n    # solve A*x = b using LU factorization and update solution vectors\n    x = lufact(A) \\ full(b)\n    ls.u = x[1:ls.dim]\n    ls.la = x[ls.dim+1:end]\n\n    return nothing\nend\n\nnothing # hideTo test it:solver = LUSolver()\nsolve!(ls, solver)\nfull(ls.u)\nfull(ls.la)We try to be clever with solvers, because solution of linear system is taking the most of the time in analysis for big models. It\'s possible to build a list of solvers which are then run in order, so if first one cannot solve the system, then we can try the next one and so on. For example, direct solvers are very robust but they need quite lot of memory for factorization. If computer / cluster has enough of memory, we can prefer direct solver over iterative ones. If stiffness matrix is symmetric, and problem is positive definite, Cholesky decomposition is preferred over LU decomposition and so on. Before starting the actual solution, one can study matrix structure using can_solve:type FakeSolver <: AbstractLinearSystemSolver\nend\n\nfunction can_solve(ls::LinearSystem, solver::FakeSolver)\n    if issymmetric(ls.K)\n        return (true, \"OK\")\n    else\n        return (false, \"stiffness matrix not symmetric\")\n    end\nend\n\nnothing # hidesolvers = [FakeSolver(), LUSolver()]\nls.K[1,2] += 1\nsolve!(ls, solvers)"
},

{
    "location": "solvers/#Implementing-new-analyses-1",
    "page": "Analyses and solvers",
    "title": "Implementing new analyses",
    "category": "section",
    "text": "Like said, Analysis is a type containing all problems and is performing some sort of operation with them. Typically this can be a solution of static or dynamic equilibrium, eigenvalue analysis, linear perturbation analysis or doing some postprocessing for already done analysis, like fatigue analysis, calculating critical stresses and so on.In industrial computing, a bigger workflow typically contains several different analyses. Compared to some commerfial FEM softwares, e.g. ABAQUS, Analysis can be consided as STEP, but in a more general sense. Because Julia is a real programming language, one can then create, for example, an optimization loop, combining several different analyses to optimize model against some design goal.There\'s not so much rules about how to define new analysis. It must be a subtype of AbstractAnalysis and implement run!-function. As a minimal working example, implementation for static analysis would then be:type Static <: AbstractAnalysis\n    time :: Float64\nend\n\nfunction Static()\n    return Static(0.0)\nend\n\nfunction run!(analysis::Analysis{Static})\n\n    time = analysis.properties.time\n    problems = get_problems(analysis)\n\n    # assemble matrices for all problems\n    N = 0 # size of resulting matrix\n    for problem in problems\n        assemble!(problem, time)\n        N = max(N, size(problem.assembly.K, 2))\n    end\n\n    # create new LinearSystem and add assemblies to that\n    ls = LinearSystem(N)\n\n    for problem in problems\n        ls.K += sparse(problem.assembly.K, N, N)\n        ls.f += sparse(problem.assembly.f, N, 1)\n        ls.C1 += sparse(problem.assembly.C1, N, N)\n        ls.C2 += sparse(problem.assembly.C2, N, N)\n        ls.D += sparse(problem.assembly.D, N, N)\n        ls.g += sparse(problem.assembly.g, N, 1)\n    end\n\n    # solve linear system using e.g. LUSolver\n    solve!(ls, LUSolver())\n\n    # update solution back to problems\n    u = Dict(i=>j for (i,j) in enumerate(ls.u))\n    for problem in problems\n        is_field_problem(problem) || continue\n        field_name = get_unknown_field_name(problem)\n        elements = get_elements(problem)\n        update!(elements, field_name, time => u)\n    end\nend\n\nnothing # hideTo put everything together, typical solution process of time-intependent variational problem looks the following:X = Dict(1 => [0.0, 0.0],\n         2 => [1.0, 0.0],\n         3 => [1.0, 1.0],\n         4 => [0.0, 1.0],\n         5 => [2.0, 1.0])\n\nel1 = Element(Quad4, [1, 2, 3, 4])\nel2 = Element(Tri3, [3, 2, 5])\nel3 = Element(Seg2, [3, 5])\nelements = [el1, el2, el3]\nupdate!(elements, \"geometry\", X)\nupdate!(elements, \"thermal conductivity\", 6.0)\nupdate!(el3, \"heat flux\", 264.0)\nupdate!(el1, \"heat source\", 132.0)\nproblem = Problem(Heat, \"test problem\", 1)\nadd_elements!(problem, elements)\n\nbel1 = Element(Seg2, [1, 4])\nupdate!(bel1, \"geometry\", X)\nupdate!(bel1, \"temperature 1\", 0.0)\nbc = Problem(DirichletBC, \"fixed\", 1, \"temperature\")\nadd_elements!(bc, [bel1])\n\nanalysis = Analysis(Static, \"static analysis of test problem\")\nadd_problems!(analysis, [problem, bc])\nrun!(analysis)After analysis is ready, temperature is updated to elements:el1(\"temperature\", 0.0)\nel2(\"temperature\", 0.0)\nel3(\"temperature\", 0.0)"
},

{
    "location": "postprocessing/#",
    "page": "Postprocessing",
    "title": "Postprocessing",
    "category": "page",
    "text": ""
},

{
    "location": "postprocessing/#Postprocessing-1",
    "page": "Postprocessing",
    "title": "Postprocessing",
    "category": "section",
    "text": ""
},

{
    "location": "results/#",
    "page": "Results",
    "title": "Results",
    "category": "page",
    "text": ""
},

{
    "location": "results/#Results-1",
    "page": "Results",
    "title": "Results",
    "category": "section",
    "text": ""
},

{
    "location": "materials/#",
    "page": "Materials",
    "title": "Materials",
    "category": "page",
    "text": ""
},

{
    "location": "materials/#Materials-1",
    "page": "Materials",
    "title": "Materials",
    "category": "section",
    "text": ""
},

{
    "location": "testing/#",
    "page": "Testing extensions",
    "title": "Testing extensions",
    "category": "page",
    "text": ""
},

{
    "location": "testing/#Testing-extensions-1",
    "page": "Testing extensions",
    "title": "Testing extensions",
    "category": "section",
    "text": "Own extensions to JuliaFEM can be done to own separate packages which are then used in JuliaFEM. The main idea is that FEMBase.jl is giving all supporting functions and types for all kind of extensions. Extensions lives in their own modules. Extensions can be tested using FEMBase.Test, which itself is a extension to FEMBase, containing types introduced in this manual.Some guidelines:use Coverage.jl to check coverage, should be 100 %\nuse Lint.jl to check syntax\nno use of tabulators in files allowed\nno use of fancy utf-8 in code\nlicence header should match in every source file to one defined in main file\nkeep version history clean and understandable\nunit tests should test only implemented functions, nothing else"
},

{
    "location": "api/#",
    "page": "API Documentation",
    "title": "API Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "api/#API-Documentation-1",
    "page": "API Documentation",
    "title": "API Documentation",
    "category": "section",
    "text": "CurrentModule = FEMBase\nDocTestSetup = quote\n    using FEMBase\nend"
},

{
    "location": "api/#Fields-1",
    "page": "API Documentation",
    "title": "Fields",
    "category": "section",
    "text": ""
},

{
    "location": "api/#FEMBasis.interpolate-Tuple{Element,String,Float64}",
    "page": "API Documentation",
    "title": "FEMBasis.interpolate",
    "category": "method",
    "text": "interpolate(element, field_name, time)\n\nInterpolate field field_name from element at given time.\n\nExample\n\nelement = Element(Seg2, [1, 2])\ndata1 = Dict(1 => 1.0, 2 => 2.0)\ndata2 = Dict(1 => 2.0, 2 => 3.0)\nupdate!(element, \"my field\", 0.0 => data1)\nupdate!(element, \"my field\", 1.0 => data2)\ninterpolate(element, \"my field\", 0.5)\n\n# output\n\n(1.5, 2.5)\n\n\n\n\n\n\n"
},

{
    "location": "api/#Elements-1",
    "page": "API Documentation",
    "title": "Elements",
    "category": "section",
    "text": "interpolate(element::Element, field_name::String, time::Float64)"
},

{
    "location": "api/#FEMBase.assemble_elements!",
    "page": "API Documentation",
    "title": "FEMBase.assemble_elements!",
    "category": "function",
    "text": "assemble_elements!(problem, assembly, elements, time)\n\nAssemble elements for problem.\n\nThis should be overridden with own assemble_elements!-implementation.\n\n\n\n\n\n"
},

{
    "location": "api/#Problems-1",
    "page": "API Documentation",
    "title": "Problems",
    "category": "section",
    "text": "assemble_elements!"
},

]}
