var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Dierckx.jl-1",
    "page": "Readme",
    "title": "Dierckx.jl",
    "category": "section",
    "text": "Julia library for 1-d and 2-d splines(Image: Build Status) (Image: Build status) (Image: Coverage Status)This is a Julia wrapper for the dierckx Fortran library, the same library underlying the spline classes in scipy.interpolate. Some of the functionality here overlaps with Interpolations.jl, a pure-Julia interpolation package.  Take a look at it if you have a use case not covered here.All new development on Dierckx.jl will be for Julia v0.7 and above. The master branch is therefore incompatible with earlier versions of Julia. "
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Implements B-splines (basis splines).\nSplines from first order to fifth order; default is third order (cubic).\nFit and evaluate 1-d and 2-d splines on irregular grids.\nFit and evaluate 2-d splines at unstructured points.\nFit \"smooth\" (non-interpolating) splines with adjustable smoothing factor s.\nDerivatives, integrals and roots of 1-d splines.\nParametric B-splines."
},

{
    "location": "#Install-(Julia-0.7-and-later)-1",
    "page": "Readme",
    "title": "Install (Julia 0.7 and later)",
    "category": "section",
    "text": "(v1.0) pkg> add Dierckx(Type ] to enter package mode.) No Fortran compiler is requred on any platform."
},

{
    "location": "#Install-(Julia-0.6-and-earlier)-1",
    "page": "Readme",
    "title": "Install (Julia 0.6 and earlier)",
    "category": "section",
    "text": "julia> Pkg.add(\"Dierckx\")The Fortran library source code is distributed with the package, so you need a Fortran compiler on OSX or Linux. On Ubuntu, sudo apt-get install gfortran will do it.On Darwin, gfortran comes bundled with gcc, so after instslling Homebrew, brew install gcc should install gfortran.On Windows, a compiled dll will be downloaded."
},

{
    "location": "#Example-Usage-1",
    "page": "Readme",
    "title": "Example Usage",
    "category": "section",
    "text": "using DierckxFit a 1-d spline to some input data (points can be unevenly spaced):x = [0., 1., 2., 3., 4.]\ny = [-1., 0., 7., 26., 63.]  # x.^3 - 1.\nspl = Spline1D(x, y)Evaluate the spline at some new points:spl([1.5, 2.5])  # result = [2.375, 14.625]\nspl(1.5)  # result = 2.375Equivalent to the above:evaluate(spl, [1.5, 2.5])\nevaluate(spl, 1.5)Evaluate derivative, integral, or roots:derivative(spl, 1.5)  # derivate at x=1.5; result is 5.75\nintegrate(spl, 0., 4.)  # integrate from x=0 to x=4; result is 60.0\nroots(spl)  # result is [1.0]Note that roots() only works for cubic splines (k=3).Fit a 2-d spline to data on a (possibly irregular) grid:x = [0.5, 2., 3., 4., 5.5, 8.]\ny = [0.5, 2., 3., 4.]\nz = [1. 2. 1. 2.;  # size is (length(x), length(y))\n     1. 2. 1. 2.;\n     1. 2. 3. 2.;\n     1. 2. 2. 2.;\n     1. 2. 1. 2.;\n     1. 2. 3. 1.]\n\nspline = Spline2D(x, y, z)Note that if you consider z as a matrix, x refers to row  coordinates and y refers to column coordinates.Evaluate at element-wise points:xi = [1., 1.5, 2.3, 4.5, 3.3, 3.2, 3.]\nyi = [1., 2.3, 5.3, 0.5, 3.3, 1.2, 3.]\nzi = spline(xi, yi)  # 1-d array of length 7\nzi = evaluate(spline, xi, yi)  # equivalent to previous lineEvaluate at grid spanned by input arrays:xi = [1., 1.5, 2.3, 4.5]\nyi = [1., 2.3, 5.3]\nzi = evalgrid(spline, xi, yi)  # 2-d array of size (4, 3)"
},

{
    "location": "#Reference-1",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": ""
},

{
    "location": "#d-Splines-1",
    "page": "Readme",
    "title": "1-d Splines",
    "category": "section",
    "text": "Spline1D(x, y; w=ones(length(x)), k=3, bc=\"nearest\", s=0.0)\nSpline1D(x, y, xknots; w=ones(length(x)), k=3, bc=\"nearest\")Create a spline of degree k (1 = linear, 2 = quadratic, 3 = cubic, up to 5) from 1-d arrays x and y. The parameter bc specifies the behavior when evaluating the spline outside the support domain, which is (minimum(x), maximum(x)). The allowed values are \"nearest\", \"zero\", \"extrapolate\", \"error\".\nIn the first form, the number and positions of knots are chosen automatically. The smoothness of the spline is then achieved by minimalizing the discontinuity jumps of the kth derivative of the spline at the knots. The amount of smoothness is determined by the condition that sum((w[i]*(y[i]-spline(x[i])))**2) <= s, with s a given non-negative constant, called the smoothing factor. The number of knots is increased until the condition is satisfied. By means of this parameter, the user can control the tradeoff between closeness of fit and smoothness of fit of the approximation.  if s is too large, the spline will be too smooth and signal will be lost ; if s is too small the spline will pick up too much noise. in the extreme cases the program will return an interpolating spline if s=0.0 and the weighted least-squares polynomial of degree k if s is very large.\nIn the second form, the knots are supplied by the user. There is no smoothing parameter in this form. The program simply minimizes the discontinuity jumps of the kth derivative of the spline at the given knots.evaluate(spl, x)Evalute the 1-d spline spl at points given in x, which can be a 1-d array or scalar. If a 1-d array, the values must be monotonically increasing.derivative(spl, x; nu=1)Evaluate the nu-th derivative of the spline at points in x.integrate(spl, a, b)Definite integral of spline between x=a and x=b.roots(spl; maxn=8)For cubic splines (k=3) only, find roots. Only up to maxn roots are returned. A warning is issued if the spline has more roots than the number returned."
},

{
    "location": "#Parametric-Splines-1",
    "page": "Readme",
    "title": "Parametric Splines",
    "category": "section",
    "text": "These are the B-spline representation of a curve through N-dimensional space.ParametricSpline(X; s=0.0, ...)\nParametricSpline(u, X; s=0.0, ...)\nParametricSpline(X, knots, ...)\nParametricSpline(u, X, knots, ...)X is a 2-d array with size (N, m): N is the number of dimensions of the space (must be between 1 and 10) and m is the number of points. X[:, i] gives the coordinates of the ith point.\nu is a 1-d array giving parameter values at each of the m points. If not given, values are calculated automatically.\nknots is a 1-d array giving user-specified knots, if desired.Keyword arguemnts common to all constructor methods:w: weight applied to each point (length m 1-d array).\nk: Spline order (between 1 and 5; default 3).\nbc: Boundary condition (default \'nearest\').\nperiodic: Treat curve as periodic? (Default is false)."
},

{
    "location": "#d-Splines-2",
    "page": "Readme",
    "title": "2-d Splines",
    "category": "section",
    "text": "Spline2D(x, y, z; w=ones(length(x)), kx=3, ky=3, s=0.0)\nSpline2D(x, y, z; kx=3, ky=3, s=0.0)Fit a 2-d spline to the input data. x and y must be 1-d arrays.\nIf z is also a 1-d array, the inputs are assumed to represent unstructured data, with z[i] being the function value at point (x[i], y[i]). In this case, the lengths of all inputs must match.\nIf z is a 2-d array, the data are assumed to be gridded: z[i, j] is the function value at (x[i], y[j]). In this case, it is required that size(z) == (length(x), length(y)). (Note that when interpreting z as a matrix, x gives the row coordinates and y gives the column coordinates.)evaluate(spl, x, y)Evalute the 2-d spline spl at points (x[i], y[i]). Inputs can be Vectors or scalars. Points outside the domain of the spline are set to the values at the boundary.evalgrid(spl, x, y)Evaluate the 2-d spline spl at the grid points spanned by the coordinate arrays x and y. The input arrays must be monotonically increasing. The output is a 2-d array with size (length(x), length(y)): output[i, j] is the function value at (x[i], y[j]). In other words, when interpreting the result as a matrix, x gives the row coordinates and y gives the column coordinates.\nintegral of a 2-d spline over the domain [x0, x1]*[y0, y1]integrate(spl, x0, x1, y0, y1)"
},

{
    "location": "#Translation-from-scipy.interpolate-1",
    "page": "Readme",
    "title": "Translation from scipy.interpolate",
    "category": "section",
    "text": "The Spline classes in scipy.interpolate are also thin wrappers for the Dierckx Fortran library. The performance of Dierckx.jl should be similar or better than the scipy.interpolate classes. (Better for small arrays where Python overhead is more significant.) The equivalent of a specific classes in scipy.interpolate:scipy.interpolate class Dierckx.jl constructor method\nUnivariateSpline Spline1D(x, y; s=length(x))\nInterpolatedUnivariateSpline Spline1D(x, y; s=0.0)\nLSQUnivariateSpline Spline1D(x, y, xknots)\nSmoothBivariateSpline Spline2D(x, y, z; s=length(x))\nLSQBivariateSpline \nRectBivariateSpline Spline2D(x, y, z; s=0.0) (z = 2-d array)\nSmoothSphereBivariateSpline \nLSQSphereBivariateSpline \nRectSphereBivariateSpline Parametric splines:scipy.interpolate function Dierckx.jl constructor method\nsplprep(X) ParametricSpline(X)\nsplprep(X, u=...) ParametricSpline(u, X)\nsplprep(X, t=...) ParametricSpline(X, t)  (t = knots)\nsplprep(X, u=..., t=...) ParametricSpline(u, X, t)"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Dierckx.jl is distributed under a 3-clause BSD license. See LICENSE.md for details. The real*8 version of the Dierckx Fortran library as well as some test cases and error messages are copied from the scipy package, which is distributed under this license."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Dierckx]\nOrder = [:type, :function]"
},

]}
