var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems",
    "category": "page",
    "text": ""
},

{
    "location": "#Introduction-1",
    "page": "PolynomialTestSystems",
    "title": "Introduction",
    "category": "section",
    "text": "PolynomialTestSystems.jl is a collection of systems of polynomials for benchmarking, testing etc. Most of the polynomial systems are obtained from the database of polynomial systems created by Jan Verschelde and available under http://homepages.math.uic.edu/~jan/."
},

{
    "location": "#PolynomialTestSystems.TestSystem",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.TestSystem",
    "category": "type",
    "text": "TestSystem(equations;\n    multi_bezout_number=nothing,\n    mixed_volume=nothing,\n    nsolutions=nothing,\n    nreal_solutions=nothing)\n\nCreate a TestSystem.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.equations",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.equations",
    "category": "function",
    "text": "equations(::TestSystem)\n\nGet the the polynomial system.\n\n\n\n\n\n"
},

{
    "location": "#StaticPolynomials.nvariables",
    "page": "PolynomialTestSystems",
    "title": "StaticPolynomials.nvariables",
    "category": "function",
    "text": "nvariables(f::Polynomial)\n\nReturn the number of variables of f.\n\n\n\n\n\nnvariables(F::AbstractSystem)\n\nThe number of variables of the system F.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.mixed_volume",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.mixed_volume",
    "category": "function",
    "text": "mixed_volume(system)::Union{Nothing, Int}\n\nReturns the number mixed volume of the system if known.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.nsolutions",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.nsolutions",
    "category": "function",
    "text": "nsolutions(system)::Union{Nothing, Int}\n\nReturns the number of (complex) solutions of the system if known.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.nreal_solutions",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.nreal_solutions",
    "category": "function",
    "text": "nreal_solutions(system)::Union{Nothing, Int}\n\nReturns the number of real solutions of the system if known.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.bezout_number",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.bezout_number",
    "category": "function",
    "text": "bezout_number(system)\n\nReturns the bezout number of the system.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.multi_bezout_number",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.multi_bezout_number",
    "category": "function",
    "text": "multi_bezout_number(system)::Union{Nothing, Tuple{Int, Vector{Vector{PolyVar{true}}}}}\n\nReturns a tuple containing the multi-homogenous bezout number as well as the corresponding grouping of the variables if known.\n\n\n\n\n\n"
},

{
    "location": "#Format-1",
    "page": "PolynomialTestSystems",
    "title": "Format",
    "category": "section",
    "text": "TestSystem\nequations\nnvariables\nmixed_volume\nnsolutions\nnreal_solutions\nbezout_number\nmulti_bezout_number"
},

{
    "location": "#PolynomialTestSystems.chandra",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.chandra",
    "category": "function",
    "text": "chandra(n)\n\nThe Chandrasekhar H-Equation for n.\n\nReferences\n\nLaureano Gonzalez-Vega: \"Some examples on problem solving by using the   symbolic viewpoint when dealing with polynomial systems of equations\".   in: \"Computer Algebra in Science and Engineering\", Editors: J. Fleischer,   J. Grabmeier, F.W. Hehl and W. Kuechlin.  Pages 102-116   World Scientific Publishing, 1995.\n\nS. Chandrasekhar: \"Radiative Transfer\", Dover, NY, 1960.\n\nC.T. Kelley: \"Solution of the Chandrasekhar H-equation by Newton\'s method\".   J. Math. Phys., 21 (1980), pp. 1625-1628.\n\nJorge J. More\': \"A collection of nonlinear model problems\"   in: \"Computational Solution of Nonlinear Systems of Equations\",   Editors: Eugene L. Allgower and Kurt Georg.  Pages 723-762.   Lectures in Applied Mathematics, Volume 26, AMS, 1990.\n\nNOTE : the parameter c equals 0.51234.   In general c can be any number in the interval (0,1]\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.cyclic",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.cyclic",
    "category": "function",
    "text": "cyclic(n)\n\nThe cyclic n-roots problems.\n\nReferences\n\nGöran Björck and Ralf Fröberg: `A faster way to count the solutions of inhomogeneous systems  of algebraic equations, with applications to cyclic n-roots\', in J. Symbolic Computation (1991) 12, pp 329–336.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.katsura",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.katsura",
    "category": "function",
    "text": "katsura(n)\n\nA problem of magnetism in physics.\n\nReferences\n\nFrom the PoSSo test suite.\n\nShigetoshi Katsura: \"Users posing problems to PoSSO\", in the PoSSo Newsletter, no. 2, July 1994, edited by L. Gonzalez-Vega and T. Recio. Available at http://janet.dm.unipi.it/\n\nS. Katsura, W. Fukuda, S. Inawashiro, N.M. Fujiki and R. Gebauer, Cell Biophysics, Vol 11, pages 309–319, 1987.\n\nW. Boege, R. Gebauer, and H. Kredel: \"Some examples for solving systems of algebraic equations by  calculating Groebner bases\", J. Symbolic Computation, 2:83-98, 1986.\n\nShigetoshi Katsura:  \"Spin Glass Problem by the Method of Integral Equation   of the Effective Field\".  In \"New Trends in Magnetism\", edited by Mauricio D. Coutinho-Filho and Sergio M. Resende, pages 110-121, World Scientific, 1990.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.fourbar",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.fourbar",
    "category": "function",
    "text": "fourbar()\n\nA four-bar design problem, so-called 5-point problem.\n\nReferences\n\nSee Morgan, A.P. and Wampler, C.W. :  `Solving a planar four-bar design problem using continuation\' in Transaction of the ASME, J. of Mechanical Design, Vol. 112 pages 544-550, 1990.\n\nFor the coefficients, see Table 2, a = (1,0). This is the start system, with five random precision points, that has been used to solve twenty other test systems.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.rps10",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.rps10",
    "category": "function",
    "text": "rps10()\n\nRPS Serial Chains for 10 positions on a circular hyperboloid\n\nReferences\n\nHai-Jun Su and J. Micheal McCarthy: \"Kinematics Synthesis of RPS Serial Chains\", In Proceedings of the ASME Design Engineering Technical Conferences (CDROM).  Paper DETC03/DAC-48813.  Chicago, IL, Sept.02-06, 2003.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.ipp",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.ipp",
    "category": "function",
    "text": "ipp()\n\nThe six-revolute-joint problem of mechanics.\n\nReferences\n\nA. Morgan and A. Sommese `Computing all solutions to polynomial systems  using homotopy continuation\',  Appl. Math. Comput., Vol. 24, pp 115-138, 1987.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.ipp2",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.ipp2",
    "category": "function",
    "text": "ipp2()\n\nThe 6R inverse position problem.\n\nReferences\n\nThis system occurs as Example 3.3 in a paper by Charles Wampler: `Bezout Number Calculations for Multi-Homogeneous Polynomial Systems\', Appl. Math. Comput. vol. 51 No. 2–3, pp. 143–157.\n\nFor the original formulation of the problem, see  Charles Wampler and Alexander Morgan:  `Solving the 6R inverse position problem using a generic-case solution   methodology\', Mech. Mach. Theory, Vol. 26, No. 1, pp. 91-106, 1991.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.boon",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.boon",
    "category": "function",
    "text": "boon()\n\nNeurofysiology, posted by Sjirk Boon. Note that the system\n\nReferences\n\nThe system has been posted to the newsgroup sci.math.num-analysis by Sjirk Boon.\n\nP. Van Hentenryck, D. McAllester and D. Kapur: `Solving Polynomial Systems Using a Branch and Prune Approach\' SIAM J. Numerical Analysis, Vol. 34, No. 2, pp 797-827, 1997.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.heart",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.heart",
    "category": "function",
    "text": "heart()\n\nThe heart-dipole problem.\n\nReferences\n\nNelsen, C.V. and Hodgkin, B.C.: `Determination of magnitudes, directions, and locations of two independent dipoles in a circular conducting region from boundary potential measurements\' IEEE Trans. Biomed. Engrg. Vol. BME-28, No. 12, pages 817-823, 1981.\n\nMorgan, A.P. and Sommese, A.J.: `Coefficient-Parameter Polynomial Continuation\' Appl. Math. Comput. Vol. 29, No. 2, pages 123-160, 1989. Errata: Appl. Math. Comput. 51:207 (1992)\n\nMorgan, A.P. and Sommese, A. and Watson, L.T.: `Mathematical reduction of a heart dipole model\' J. Comput. Appl. Math. Vol. 27, pages 407-410, 1989.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialTestSystems.d1",
    "page": "PolynomialTestSystems",
    "title": "PolynomialTestSystems.d1",
    "category": "function",
    "text": "d1()\n\nA a sparse system, known as benchmark D1.\n\nReferences\n\nH. Hong and V. Stahl: `Safe Starting Regions by Fixed Points and Tightening\', Computing 53(3-4): 322-335, 1995.\n\n\n\n\n\n"
},

{
    "location": "#Systems-1",
    "page": "PolynomialTestSystems",
    "title": "Systems",
    "category": "section",
    "text": "chandra\ncyclic\nkatsura\nfourbar\nrps10\nipp\nipp2\nboon\nheart\nd1"
},

]}
