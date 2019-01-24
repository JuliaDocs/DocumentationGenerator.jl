var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DifferentialEquations.jl-1",
    "page": "Readme",
    "title": "DifferentialEquations.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Travis) (Image: AppVoyer) (Image: Stable) (Image: Latest) (Image: DOI)This is a suite for numerically solving differential equations in Julia. The purpose of this package is to supply efficient Julia implementations of solvers for various differential equations. Equations within the realm of this package include:Discrete equations (function maps, discrete stochastic (Gillespie/Markov) simulations)\nOrdinary differential equations (ODEs)\nSplit and Partitioned ODEs (Symplectic integrators, IMEX Methods)\nStochastic ordinary differential equations (SODEs or SDEs)\nRandom differential equations (RODEs or RDEs)\nDifferential algebraic equations (DAEs)\nDelay differential equations (DDEs)\nMixed discrete and continuous equations (Hybrid Equations, Jump Diffusions)\n(Stochastic) partial differential equations ((S)PDEs) (with both finite difference and finite element methods)The well-optimized DifferentialEquations solvers benchmark as the some of the fastest   implementations, using classic algorithms and ones from recent research which routinely outperform the \"standard\" C/Fortran methods, and include algorithms optimized for high-precision and HPC applications. At the same time, it wraps the classic C/Fortran methods, making it easy to switch over to them whenever necessary. It integrates with the Julia package sphere, for example using Juno\'s progress meter, automatic plotting, built-in interpolations, and wraps other differential equation solvers so that many different methods for solving the equations can be accessed by simply switching a keyword argument. It utilizes Julia\'s generality to be able to solve problems specified with arbitrary number types (types with units like Unitful, and arbitrary precision numbers like BigFloats and ArbFloats), arbitrary sized arrays (ODEs on matrices), and more. This gives a powerful mixture of speed and productivity features to help you solve and analyze your differential equations faster.For information on using the package, see the stable documentation. Use the latest documentation for the version of the documentation which contains the un-released features.All of the algorithms are thoroughly tested to ensure accuracy via convergence tests. The algorithms are continuously tested to show correctness. IJulia tutorial notebooks can be found at DiffEqTutorials.jl. Benchmarks can be found at DiffEqBenchmarks.jl. If you find any equation where there seems to be an error, please open an issue.If you have any questions, or just want to chat about solvers/using the package, please feel free to chat in the Gitter channel. For bug reports, feature requests, etc., please submit an issue. If you\'re interested in contributing, please see the Developer Documentation."
},

{
    "location": "#Supporting-and-Citing-1",
    "page": "Readme",
    "title": "Supporting and Citing",
    "category": "section",
    "text": "The software in this ecosystem was developed as part of academic research. If you would like to help support it, please star the repository as such metrics may help us secure funding in the future. If you use JuliaDiffEq software as part of your research, teaching, or other activities, we would be grateful if you could cite our work. Please see our citation page for guidelines."
},

{
    "location": "#Video-Tutorial-1",
    "page": "Readme",
    "title": "Video Tutorial",
    "category": "section",
    "text": "(Image: Video Tutorial)"
},

{
    "location": "#Video-Introduction-1",
    "page": "Readme",
    "title": "Video Introduction",
    "category": "section",
    "text": "(Image: Video Introduction to DifferentialEquations.jl)"
},

{
    "location": "#Comparison-to-MATLAB,-R,-Julia,-Python,-C,-Mathematica,-Maple,-and-Fortran-1",
    "page": "Readme",
    "title": "Comparison to MATLAB, R, Julia, Python, C, Mathematica, Maple, and Fortran",
    "category": "section",
    "text": "<a href=\"http://www.stochasticlifestyle.com/wp-content/uploads/2017/10/desolversoftwarecomparsion-3.pdf\"><img src=\"http://www.stochasticlifestyle.com/wp-content/uploads/2017/10/desolversoftwarecomparsion-1-3.png\" alt=\"Comparison Of Differential Equation Solver Software\" align=\"middle\"/></a>See the corresponding blog post"
},

{
    "location": "#Example-Images-1",
    "page": "Readme",
    "title": "Example Images",
    "category": "section",
    "text": "<img src=\"https://raw.githubusercontent.com/JuliaDiffEq/DifferentialEquations.jl/master/assets/DifferentialEquations_Example.png\" align=\"middle\"  />"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DifferentialEquations]\nOrder = [:type, :function]"
},

]}
