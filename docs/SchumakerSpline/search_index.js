var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "SchumakerSpline.jl",
    "title": "SchumakerSpline.jl",
    "category": "page",
    "text": ""
},

{
    "location": "#SchumakerSpline.jl-1",
    "page": "SchumakerSpline.jl",
    "title": "SchumakerSpline.jl",
    "category": "section",
    "text": "A simple shape preserving spline implementation in Julia.A Julia package to create a shape preserving spline. This is a shape preserving spline which is guaranteed to be monotonic and concave/convex if the data is monotonic and concave/convex. It does not use any numerical optimisation and is therefore quick and smoothly converges to a fixed point in economic dynamics problems including value function iteration. Analytical derivatives and integrals of the spline can easily be taken through the evaluate and evaluate_integral functions.This package has the same basic functionality as the R package called schumaker.If you want to do algebraic operations on splines you can also use a schumaker spline through the UnivariateFunctions package."
},

{
    "location": "#Optional-parameters-1",
    "page": "SchumakerSpline.jl",
    "title": "Optional parameters",
    "category": "section",
    "text": ""
},

{
    "location": "#Gradients.-1",
    "page": "SchumakerSpline.jl",
    "title": "Gradients.",
    "category": "section",
    "text": "The gradients at each of the (x,y) points can be input to give more accuracy. If not supplied these are estimated from the points provided. It is also possible to input on the gradients on the edges of the x domain and have all of the intermediate gradients imputed."
},

{
    "location": "#Out-of-sample-prediction.-1",
    "page": "SchumakerSpline.jl",
    "title": "Out of sample prediction.",
    "category": "section",
    "text": "There are three options for out of sample prediction.Curve - This is where the quadratic curve that is present in the first and last interval are used to predict points before the first interval and after the last interval respectively.\nLinear - This is where a line is extended out before the first interval and after the last interval. The slope of the line is given by the derivative at the start of the first interval and end of the last interval.\nConstant - This is where the first and last y values are used for prediction before the first point of the interval and after the last part of the interval respectively.pages = [\"index.md\",\n         \"examples.md\"]\nDepth = 2"
},

{
    "location": "examples/#",
    "page": "Examples",
    "title": "Examples",
    "category": "page",
    "text": ""
},

{
    "location": "examples/#Examples-1",
    "page": "Examples",
    "title": "Examples",
    "category": "section",
    "text": "Generating some example datax = [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6]\ny = log.(x) + sqrt.(x)\ngradients = missingIn this case we do not have gradients information and so gradients will be imputed from the x and y data.We can create a spline and plot it with linear extrapolation.using SchumakerSpline\nusing Plots\n########################\n# Linear Extrapolation #\nspline = Schumaker(x,y; extrapolation = Linear)\n# Now plotting the spline\nxrange =  collect(range(-5, stop=10, length=100))\nvalues  = evaluate.(spline, xrange)\nderivative_values  = evaluate.(spline, xrange, 1 )\nsecond_derivative_values  = evaluate.(spline, xrange , 2 )\nplot(xrange , values; label = \"Spline\")\nplot!(xrange, derivative_values; label = \"First Derivative\")\nplot!(xrange, second_derivative_values; label = \"Second Derivative\")We can now do the same with constant extrapolation.##########################\n# Constant Extrapolation #\nextrapolation = Constant\nspline = Schumaker(x,y; extrapolation = Constant)\n# Now plotting the spline\nxrange =  collect(range(-5, stop=10, length=100))\nvalues  = evaluate.(spline, xrange)\nderivative_values  = evaluate.(spline, xrange, 1 )\nsecond_derivative_values  = evaluate.(spline, xrange , 2 )\nplot(xrange , values; label = \"Spline\")\nplot!(xrange, derivative_values; label = \"First Derivative\")\nplot!(xrange, second_derivative_values; label = \"Second Derivative\")If we did have gradient information we could get a better approximation by using it. In this case our gradients are:analytical_first_derivative(e) = 1/e + 0.5 * e^(-0.5)\nfirst_derivs = analytical_first_derivative.(xrange)and we can generate a spline using these gradients with:spline = Schumaker(x,y; gradients = first_derivs)We could also have only specified the left or the right gradients using the leftgradient and rightgradient optional arguments."
},

]}
