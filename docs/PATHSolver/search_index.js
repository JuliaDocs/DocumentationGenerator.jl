var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PATHSolver.jl-1",
    "page": "Readme",
    "title": "PATHSolver.jl",
    "category": "section",
    "text": "(Image: PATHSolver) (Image: PATHSolver)(Image: Build Status) (Image: Build status) (Image: Coverage Status)This package provides a Julia wrapper of the PATH Solver for solving Mixed Complementarity Problems (MCP). This package requires compiled libraries available in ampl/pathlib and PathJulia.This package (well the PATH Solver) solves the MCP of the following form:lb ≤ x ≤ ub ⟂ F(x)which meansx = lb, then F(x) ≥ 0\nlb < x < ub, then F(x) = 0\nx = ub, then F(x) ≤ 0"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Without a license, the PATH Solver can solve problem instances up to with up to 300 variables and 2000 non-zeros. For larger problems, the web page of the PATH Solver provides a temporary license that is valid for a year. A new license is provided each year in the web page. Visit the license page of the PATH Solver.For example, in Mac OS X: Edit your .bash_profile file. For example, if you have Atom editor:atom ~/.bash_profileand add the following two lines:export PATH_LICENSE_STRING=\"---------------------------------------------------------------\"You can obtain the most recent PATH_LICENSE_STRING from the website of the PATH Solver. To reflect the change:source ~/.bash_profile"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install,Pkg.add(\"PATHSolver\")and to test if it works,Pkg.test(\"PATHSolver\")To use algebraic modeling language for MCP, install and use the Complementarity.jl package."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "This example solves a Linear Complementarity Problem (LCP) in the form of:0 ≤ x ⟂ F(x) ≥ 0orF(x)\' x = 0\nF(x) ≥ 0\nx ≥ 0when F(x) = Mx + q.using PATHSolver\n\nM = [0  0 -1 -1 ;\n     0  0  1 -2 ;\n     1 -1  2 -2 ;\n     1  2 -2  4 ]\n\nq = [2; 2; -2; -6]\n\nmyfunc(x) = M*x + q\n\nn = 4\nlb = zeros(n)\nub = 100*ones(n)\n\noptions(convergence_tolerance=1e-2, output=:yes, time_limit=3600)\n\n\nz, f = solveMCP(myfunc, lb, ub)You can also supply a function for Jacobian:myjac(x) = M\nz, f = solveMCP(myfunc, myjac, lb, ub)When the Jacobian function is not supplied, it uses the automatic differentiation functionality of ForwardDiff.jl.When the problem is a linear complementarity problem (LCP), one can use solveLCP:z, f = solveLCP(myfunc, lb, ub)To supply the Jacobian matrix:z, f = solveLCP(myfunc, M, lb, ub)These solveLCP functions do not evaluate the derivatives during iterations.The result is:Path 4.7.03: Standalone-C Link\n4 row/cols, 12 non-zeros, 75.00% dense.\nReading options file path.opt\n > convergence_tolerance 1e-2\n > output yes\n > time_limit 3600\nRead of options file complete.\nPath 4.7.03 (Thu Jan 24 15:44:03 2013)\nWritten by Todd Munson, Steven Dirkse, and Michael Ferris\nINITIAL POINT STATISTICS\nMaximum of X. . . . . . . . . .  0.0000e+00 var: (x[    1])\nMaximum of F. . . . . . . . . .  6.0000e+00 eqn: (f[    4])\nMaximum of Grad F . . . . . . .  4.0000e+00 eqn: (f[    4])\n                                            var: (x[    4])\nINITIAL JACOBIAN NORM STATISTICS\nMaximum Row Norm. . . . . . . .  9.0000e+00 eqn: (f[    4])\nMinimum Row Norm. . . . . . . .  2.0000e+00 eqn: (f[    1])\nMaximum Column Norm . . . . . .  9.0000e+00 var: (x[    4])\nMinimum Column Norm . . . . . .  2.0000e+00 var: (x[    1])\nCrash Log\nmajor  func  diff  size  residual    step       prox   (label)\n    0     0             1.2295e+01             0.0e+00 (f[    4])\n    1     2     4     2 1.0267e+01  8.0e-01    0.0e+00 (f[    1])\n    2     3     2     4 8.4839e-01  1.0e+00    0.0e+00 (f[    4])\n    3     4     0     3 4.4409e-16  1.0e+00    0.0e+00 (f[    3])\npn_search terminated: no basis change.\nMajor Iteration Log\nmajor minor  func  grad  residual    step  type prox    inorm  (label)\n    0     0     5     4 4.4409e-16           I 0.0e+00 4.4e-16 (f[    3])\nFINAL STATISTICS\nInf-Norm of Complementarity . .  3.5527e-16 eqn: (f[    3])\nInf-Norm of Normal Map. . . . .  4.4409e-16 eqn: (f[    3])\nInf-Norm of Fischer Function. .  4.4409e-16 eqn: (f[    3])\nInf-Norm of Grad Fischer Fcn. .  8.8818e-16 eqn: (f[    3])\nTwo-Norm of Grad Fischer Fcn. .  1.4043e-15\nFINAL POINT STATISTICS\nMaximum of X. . . . . . . . . .  2.8000e+00 var: (x[    1])\nMaximum of F. . . . . . . . . .  4.0000e-01 eqn: (f[    2])\nMaximum of Grad F . . . . . . .  4.0000e+00 eqn: (f[    4])\n                                            var: (x[    4])\n ** EXIT - solution found.\nMajor Iterations. . . . 0\nMinor Iterations. . . . 0\nRestarts. . . . . . . . 0\nCrash Iterations. . . . 3\nGradient Steps. . . . . 0\nFunction Evaluations. . 5\nGradient Evaluations. . 4\nBasis Time. . . . . . . 0.000046\nTotal Time. . . . . . . 0.060200\nResidual. . . . . . . . 4.440892e-16\nResidual of 4.44089e-16 is OK\nz = [2.8,0.0,0.8,1.2]\nf = [0.0,0.40000000000000013,4.440892098500626e-16,0.0]"
},

{
    "location": "#Labels-1",
    "page": "Readme",
    "title": "Labels",
    "category": "section",
    "text": "In the above output, the variable and function names are given as x and f automatically by the solver. If you want to give own names, you can do it as follows:var_name = [\"first var\", \"second var\", \"third var\", \"fourth var\"]\ncon_name = [\"func 1\", \"func 2\", \"func 3\", \"func 4\"]\n\nstatus, z, f = solveMCP(myfunc, lb, ub)\nstatus, z, f = solveMCP(myfunc, lb, ub, var_name)\nstatus, z, f = solveMCP(myfunc, lb, ub, var_name, con_name)\nstatus, z, f = solveMCP(myfunc, myjac, lb, ub)\nstatus, z, f = solveMCP(myfunc, myjac, lb, ub, var_name)\nstatus, z, f = solveMCP(myfunc, myjac, lb, ub, var_name, con_name)"
},

{
    "location": "#Warmstart-1",
    "page": "Readme",
    "title": "Warmstart",
    "category": "section",
    "text": "You can provide initial values.var_name = [\"first var\", \"second var\", \"third var\", \"fourth var\"]\ncon_name = [\"func 1\", \"func 2\", \"func 3\", \"func 4\"]\n\nz0 = [0.0, 1.0, 2.0, 3.0]\n\nstatus, z, f = solveMCP(myfunc, lb, ub, z0)\nstatus, z, f = solveMCP(myfunc, lb, ub, z0, var_name)\nstatus, z, f = solveMCP(myfunc, lb, ub, z0, var_name, con_name)\nstatus, z, f = solveMCP(myfunc, myjac, lb, ub, z0)\nstatus, z, f = solveMCP(myfunc, myjac, lb, ub, z0, var_name)\nstatus, z, f = solveMCP(myfunc, myjac, lb, ub, z0, var_name, con_name)"
},

{
    "location": "#Solver-Options-1",
    "page": "Readme",
    "title": "Solver Options",
    "category": "section",
    "text": "Before solving the problem, you can set the solver options; for example:options(convergence_tolerance=1e-2, output=:yes, time_limit=3600, lemke_start=:first, nms_searchtype=:line)The full list of options is available at: http://pages.cs.wisc.edu/~ferris/path/options.pdf"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [PATHSolver]\nOrder = [:type, :function]"
},

]}
