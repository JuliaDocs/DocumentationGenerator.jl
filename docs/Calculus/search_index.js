var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Calculus.jl-1",
    "page": "Readme",
    "title": "Calculus.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: Calculus) (Image: Calculus)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "The Calculus package provides tools for working with the basic calculus operations of differentiation and integration. You can use the Calculus package to produce approximate derivatives by several forms of finite differencing or to produce exact derivative using symbolic differentiation. You can also compute definite integrals by different numerical methods."
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "Most users will want to work with a limited set of basic functions:derivative(): Use this for functions from R to R\nsecond_derivative(): Use this for functions from R to R\nCalculus.gradient(): Use this for functions from R^n to R\nhessian(): Use this for functions from R^n to R\ndifferentiate(): Use this to perform symbolic differentiation\nsimplify(): Use this to perform symbolic simplification\ndeparse(): Use this to get usual infix representation of expressions"
},

{
    "location": "#Usage-Examples-1",
    "page": "Readme",
    "title": "Usage Examples",
    "category": "section",
    "text": "There are a few basic approaches to using the Calculus package:Use finite-differencing to evaluate the derivative at a specific point\nUse higher-order functions to create new functions that evaluate derivatives\nUse symbolic differentiation to produce exact derivatives for simple functions"
},

{
    "location": "#Direct-Finite-Differencing-1",
    "page": "Readme",
    "title": "Direct Finite Differencing",
    "category": "section",
    "text": "using Calculus\n\n# Compare with cos(0.0)\nderivative(sin, 0.0)\n# Compare with cos(1.0)\nderivative(sin, 1.0)\n# Compare with cos(pi)\nderivative(sin, float(pi))\n\n# Compare with [cos(0.0), -sin(0.0)]\nCalculus.gradient(x -> sin(x[1]) + cos(x[2]), [0.0, 0.0])\n# Compare with [cos(1.0), -sin(1.0)]\nCalculus.gradient(x -> sin(x[1]) + cos(x[2]), [1.0, 1.0])\n# Compare with [cos(pi), -sin(pi)]\nCalculus.gradient(x -> sin(x[1]) + cos(x[2]), [float64(pi), float64(pi)])\n\n# Compare with -sin(0.0)\nsecond_derivative(sin, 0.0)\n# Compare with -sin(1.0)\nsecond_derivative(sin, 1.0)\n# Compare with -sin(pi)\nsecond_derivative(sin, float64(pi))\n\n# Compare with [-sin(0.0) 0.0; 0.0 -cos(0.0)]\nhessian(x -> sin(x[1]) + cos(x[2]), [0.0, 0.0])\n# Compare with [-sin(1.0) 0.0; 0.0 -cos(1.0)]\nhessian(x -> sin(x[1]) + cos(x[2]), [1.0, 1.0])\n# Compare with [-sin(pi) 0.0; 0.0 -cos(pi)]\nhessian(x -> sin(x[1]) + cos(x[2]), [float64(pi), float64(pi)])"
},

{
    "location": "#Higher-Order-Functions-1",
    "page": "Readme",
    "title": "Higher-Order Functions",
    "category": "section",
    "text": "using Calculus\n\ng1 = derivative(sin)\ng1(0.0)\ng1(1.0)\ng1(pi)\n\ng2 = Calculus.gradient(x -> sin(x[1]) + cos(x[2]))\ng2([0.0, 0.0])\ng2([1.0, 1.0])\ng2([pi, pi])\n\nh1 = second_derivative(sin)\nh1(0.0)\nh1(1.0)\nh1(pi)\n\nh2 = hessian(x -> sin(x[1]) + cos(x[2]))\nh2([0.0, 0.0])\nh2([1.0, 1.0])\nh2([pi, pi])"
},

{
    "location": "#Prime-Notation-1",
    "page": "Readme",
    "title": "Prime Notation",
    "category": "section",
    "text": "For scalar functions that map R to R, you can use the \' operator to calculate derivatives as well. This operator can be used abritratily many times, but you should keep in mind that the approximation degrades with each approximate derivative you calculate:using Calculus\n\nf(x) = sin(x)\nf\'(1.0) - cos(1.0)\nf\'\'(1.0) - (-sin(1.0))\nf\'\'\'(1.0) - (-cos(1.0))"
},

{
    "location": "#Symbolic-Differentiation-1",
    "page": "Readme",
    "title": "Symbolic Differentiation",
    "category": "section",
    "text": "using Calculus\n\ndifferentiate(\"cos(x) + sin(x) + exp(-x) * cos(x)\", :x)\ndifferentiate(\"cos(x) + sin(y) + exp(-x) * cos(y)\", [:x, :y])"
},

{
    "location": "#Numerical-Integration-1",
    "page": "Readme",
    "title": "Numerical Integration",
    "category": "section",
    "text": "The Calculus package no longer provides routines for univariate numerical integration. Use QuadGK.jl instead."
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "Calculus.jl is built on contributions from:John Myles White\nTim Holy\nAndreas Noack Jensen\nNathaniel Daw\nBlake Johnson\nAvik Sengupta\nMiles LubinAnd draws inspiration and ideas from:Mark Schmidt\nJonas Rauch"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Calculus]\nOrder = [:type, :function]"
},

]}
