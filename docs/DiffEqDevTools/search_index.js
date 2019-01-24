var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DiffEqDevTools.jl-1",
    "page": "Readme",
    "title": "DiffEqDevTools.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)DiffEqDevTools.jl is a component package in the DifferentialEquations ecosystem. It holds the convergence testing, benchmarking, and error approximation functionality which is used by the other component packages in order to test for correctness. Users interested in using this functionality should check out DifferentialEquations.jl"
},

{
    "location": "autodocs/#DiffEqDevTools.TestSolution",
    "page": "Docstrings",
    "title": "DiffEqDevTools.TestSolution",
    "category": "type",
    "text": "TestSolution\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.appxtrue-Tuple{DiffEqBase.AbstractODESolution,DiffEqBase.AbstractODESolution}",
    "page": "Docstrings",
    "title": "DiffEqDevTools.appxtrue",
    "category": "method",
    "text": "appxtrue(sol::AbstractODESolution,sol2::AbstractODESolution)\n\nUses the interpolant from the higher order solution sol2 to approximate errors for sol. If sol2 has no interpolant, only the final error is calculated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.appxtrue-Tuple{DiffEqBase.AbstractODESolution,TestSolution}",
    "page": "Docstrings",
    "title": "DiffEqDevTools.appxtrue",
    "category": "method",
    "text": "appxtrue(sol::AbstractODESolution,sol2::TestSolution)\n\nUses the interpolant from the higher order solution sol2 to approximate errors for sol. If sol2 has no interpolant, only the final error is calculated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructBaker10",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructBaker10",
    "category": "function",
    "text": "Tom Baker, University of Teeside. Part of RK-Aid http://www.scm.tees.ac.uk/users/u0000251/research/researcht.htm http://www.scm.tees.ac.uk/users/u0000251/j.r.dormand/t.baker/rk10921m/rk10921m\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructBogakiShampine3",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructBogakiShampine3",
    "category": "function",
    "text": "constructBogakiShampine3()\n\nConstructs the tableau object for the Bogakai-Shampine Order 2/3 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructBogakiShampine5",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructBogakiShampine5",
    "category": "function",
    "text": "An Efficient Runge-Kutta (4,5) Pair by P.Bogacki and L.F.Shampine  Computers and Mathematics with Applications, Vol. 32, No. 6, 1996, pages 15 to 28\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructButcher6",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructButcher6",
    "category": "function",
    "text": "Butcher\'s First Order 6 method\n\nOn Runge-Kutta Processes of High Order, by J. C. Butcher,  Journal of the Australian Mathematical Society, Vol. 4, (1964), pages 179 to 194\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructButcher62",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructButcher62",
    "category": "function",
    "text": "Butcher\'s Second Order 6 method\n\nOn Runge-Kutta Processes of High Order, by J. C. Butcher,  Journal of the Australian Mathematical Society, Vol. 4, (1964), pages 179 to 194\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructButcher63",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructButcher63",
    "category": "function",
    "text": "Butcher\'s Third Order 6\n\nOn Runge-Kutta Processes of High Order, by J. C. Butcher,  Journal of the Australian Mathematical Society, Vol. 4, (1964), pages 179 to 194\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructCashKarp",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructCashKarp",
    "category": "function",
    "text": "constructCashKarp()\n\nConstructs the tableau object for the Cash-Karp Order 4/5 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructCassity5",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructCassity5",
    "category": "function",
    "text": "Cassity\'s Order 5 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructChummund6",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructChummund6",
    "category": "function",
    "text": "Chummund\'s First Order 6 method\n\nA three-dimensional family of seven-step Runge-Kutta methods of order 6, by G. M. Chammud (Hammud), Numerical Methods and programming, 2001, Vol.2, 2001, pages 159-166 (Advanced Computing Scientific journal published by the Research Computing Center of the Lomonosov Moscow State Univeristy)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructChummund62",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructChummund62",
    "category": "function",
    "text": "Chummund\'s Second Order 6 method\n\nA three-dimensional family of seven-step Runge-Kutta methods of order 6, by G. M. Chammud (Hammud), Numerical Methods and programming, 2001, Vol.2, 2001, pages 159-166 (Advanced Computing Scientific journal published by the Research Computing Center of the Lomonosov Moscow State Univeristy)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructClassicVerner6",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructClassicVerner6",
    "category": "function",
    "text": "EXPLICIT RUNGE-KUTFA METHODS WITH ESTIMATES OF THE LOCAL TRUNCATION ERROR\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructClassicVerner7",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructClassicVerner7",
    "category": "function",
    "text": "EXPLICIT RUNGE-KUTFA METHODS WITH ESTIMATES OF THE LOCAL TRUNCATION ERROR\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructClassicVerner8",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructClassicVerner8",
    "category": "function",
    "text": "EXPLICIT RUNGE-KUTFA METHODS WITH ESTIMATES OF THE LOCAL TRUNCATION ERROR\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructCooperVerner8",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructCooperVerner8",
    "category": "function",
    "text": "Some Explicit Runge-Kutta Methods of High Order, by G. J. Cooper and J. H. Verner,  SIAM Journal on Numerical Analysis, Vol. 9, No. 3, (September 1972), pages 389 to 405\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructCooperVerner82",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructCooperVerner82",
    "category": "function",
    "text": "Some Explicit Runge-Kutta Methods of High Order, by G. J. Cooper and J. H. Verner,  SIAM Journal on Numerical Analysis, Vol. 9, No. 3, (September 1972), pages 389 to 405\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructCurtis10",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructCurtis10",
    "category": "function",
    "text": "High-order Explicit Runge-Kutta Formulae, Their uses, and Limitations, A.R.Curtis, J. Inst. Maths Applics (1975) 16, 35-55.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructCurtis8",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructCurtis8",
    "category": "function",
    "text": "An Eighth Order Runge-Kutta process with Eleven Function Evaluations per Step, by A. R. Curtis,  Numerische Mathematik, Vol. 16, No. 3 (1970), pages 268 to 277\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructDormandLockyerMcCorriganPrince6",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructDormandLockyerMcCorriganPrince6",
    "category": "function",
    "text": "DormandLockyerMcCorriganPrince Order 6 Global Error Estimation\n\nGlobal Error estimation with Runge-Kutta triples, by J.R.Dormand, M.A.Lockyer, N.E.McCorrigan and P.J.Prince,  Computers and Mathematics with Applications, 18 (1989) pages 835-846.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructDormandPrince6",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructDormandPrince6",
    "category": "function",
    "text": "Dormand-Prince Order 5//6 method\n\nP.J. Prince and J. R. Dormand, High order embedded Runge-Kutta formulae, Journal of Computational and Applied Mathematics . 7 (1981), pp. 67-75.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructDormandPrince8",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructDormandPrince8",
    "category": "function",
    "text": "constructDormandPrice8()\n\nConstructs the tableau object for the Dormand-Prince Order 6/8 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructDormandPrince8_64bit",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructDormandPrince8_64bit",
    "category": "function",
    "text": "constructDormandPrice8_64bit()\n\nConstructs the tableau object for the Dormand-Prince Order 6/8 method with the approximated coefficients from the paper. This works until below 64-bit precision.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructEnrightVerner7",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructEnrightVerner7",
    "category": "function",
    "text": "The Relative Efficiency of Alternative Defect Control Schemes for High-Order Continuous Runge-Kutta Formulas  W. H. Enright SIAM Journal on Numerical Analysis, Vol. 30, No. 5. (Oct., 1993), pp. 1419-1445.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructEnrightVerner8",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructEnrightVerner8",
    "category": "function",
    "text": "The Relative Efficiency of Alternative Defect Control Schemes for High-Order Continuous Runge-Kutta Formulas  W. H. Enright SIAM Journal on Numerical Analysis, Vol. 30, No. 5. (Oct., 1993), pp. 1419-1445.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructEuler",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructEuler",
    "category": "function",
    "text": "Euler\'s method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructFeagin10Tableau",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructFeagin10Tableau",
    "category": "function",
    "text": "Feagin10 in Tableau form\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructFeagin12Tableau",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructFeagin12Tableau",
    "category": "function",
    "text": "Tableau form of Feagin12\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructFeagin14Tableau",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructFeagin14Tableau",
    "category": "function",
    "text": "Tableau form of Feagin14\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructHairer10",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructHairer10",
    "category": "function",
    "text": "A Runge-Kutta Method of Order 10, E. Hairer, J. Inst. Maths Applics (1978) 21, 47-59.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructHeun",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructHeun",
    "category": "function",
    "text": "Heun\'s Order 2 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructHuta6",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructHuta6",
    "category": "function",
    "text": "Anton Hutas First Order 6 method\n\nUne amélioration de la méthode de Runge-Kutta-Nyström pour la résolution numérique des équations différentielles du premièr ordre, by Anton Huta, Acta Fac. Nat. Univ. Comenian Math., Vol. 1, pages 201-224 (1956).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructHuta62",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructHuta62",
    "category": "function",
    "text": "Anton Hutas Second Order 6 method\n\nUne amélioration de la méthode de Runge-Kutta-Nyström pour la résolution numérique des équations différentielles du premièr ordre, by Anton Huta, Acta Fac. Nat. Univ. Comenian Math., Vol. 1, pages 201-224 (1956).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructImplicitEuler",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructImplicitEuler",
    "category": "function",
    "text": "Implicit Euler Method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructKutta3",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructKutta3",
    "category": "function",
    "text": "Kutta\'s Order 3 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructLawson5",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructLawson5",
    "category": "function",
    "text": "Lawson\'s 5th order scheme\n\nAn Order Five Runge Kutta Process with Extended Region of Stability, J. Douglas Lawson,  Siam Journal on Numerical Analysis, Vol. 3, No. 4, (Dec., 1966) pages 593-597\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructLawson6",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructLawson6",
    "category": "function",
    "text": "Lawson\'s Order 6\n\nAn Order 6 Runge-Kutta Process with an Extended Region of Stability, by J. D. Lawson,  Siam Journal on Numerical Analysis, Vol. 4, No. 4 (Dec. 1967) pages 620-625.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructLobattoIIIA4",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructLobattoIIIA4",
    "category": "function",
    "text": "LobattoIIIA Order 4 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructLobattoIIIB2",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructLobattoIIIB2",
    "category": "function",
    "text": "LobattoIIIB Order 2 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructLobattoIIIB4",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructLobattoIIIB4",
    "category": "function",
    "text": "LobattoIIIB Order 4 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructLobattoIIIC2",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructLobattoIIIC2",
    "category": "function",
    "text": "LobattoIIIC Order 2 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructLobattoIIIC4",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructLobattoIIIC4",
    "category": "function",
    "text": "LobattoIIIC Order 4 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructLobattoIIICStar2",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructLobattoIIICStar2",
    "category": "function",
    "text": "LobattoIIIC* Order 2 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructLobattoIIICStar4",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructLobattoIIICStar4",
    "category": "function",
    "text": "LobattoIIIC* Order 4 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructLobattoIIID2",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructLobattoIIID2",
    "category": "function",
    "text": "LobattoIIID Order 2 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructLobattoIIID4",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructLobattoIIID4",
    "category": "function",
    "text": "LobattoIIID Order 4 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructLutherKonen5",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructLutherKonen5",
    "category": "function",
    "text": "Luther and Konen\'s First Order 5 Some Fifth-Order Classical Runge Kutta Formulas, H.A.Luther and H.P.Konen,  Siam Review, Vol. 3, No. 7, (Oct., 1965) pages 551-558.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructLutherKonen52",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructLutherKonen52",
    "category": "function",
    "text": "Luther and Konen\'s Second Order 5 Some Fifth-Order Classical Runge Kutta Formulas, H.A.Luther and H.P.Konen,  Siam Review, Vol. 3, No. 7, (Oct., 1965) pages 551-558.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructLutherKonen53",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructLutherKonen53",
    "category": "function",
    "text": "Luther and Konen\'s Third Order 5 Some Fifth-Order Classical Runge Kutta Formulas, H.A.Luther and H.P.Konen,  Siam Review, Vol. 3, No. 7, (Oct., 1965) pages 551-558.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructMidpointRule",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructMidpointRule",
    "category": "function",
    "text": "Order 2 Midpoint Method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructMikkawyEisa",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructMikkawyEisa",
    "category": "function",
    "text": "Mikkawy-Eisa Order 6\n\nA general four-parameter non-FSAL embedded Runge–Kutta algorithm of orders 6 and 4 in seven stages,  by M.E.A. El-Mikkawy and M.M.M. Eisa,  Applied Mathematics and Computation, Vol. 143, No. 2, (2003) pages 259 to 267.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructOno10",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructOno10",
    "category": "function",
    "text": "Ono10\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructOno12",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructOno12",
    "category": "function",
    "text": "On the 25 stage 12th order explicit Runge-Kutta method, by Hiroshi Ono. Transactions of the Japan Society for Industrial and applied Mathematics, Vol. 6, No. 3, (2006) pages 177 to 186\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructPapakostas6",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructPapakostas6",
    "category": "function",
    "text": "Papakostas\'s Order 6\n\nOn Phase-Fitted modified Runge-Kutta Pairs of order 6(5), by Ch. Tsitouras and I. Th. Famelis,  International Conference of Numerical Analysis and Applied Mathematics, Crete, (2006)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructPapakostasPapaGeorgiou5",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructPapakostasPapaGeorgiou5",
    "category": "function",
    "text": "S.N. Papakostas and G. PapaGeorgiou higher error more stable\n\nA Family of Fifth-order Runge-Kutta Pairs, by S.N. Papakostas and G. PapaGeorgiou,  Mathematics of Computation,Volume 65, Number 215, July 1996, Pages 1165-1181.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructPapakostasPapaGeorgiou52",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructPapakostasPapaGeorgiou52",
    "category": "function",
    "text": "S.N. Papakostas and G. PapaGeorgiou less stable lower error  Strictly better than DP5\n\nA Family of Fifth-order Runge-Kutta Pairs, by S.N. Papakostas and G. PapaGeorgiou,  Mathematics of Computation,Volume 65, Number 215, July 1996, Pages 1165-1181.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructRK4",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructRK4",
    "category": "function",
    "text": "Classic RK4 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructRK438Rule",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructRK438Rule",
    "category": "function",
    "text": "Classic RK4 3/8\'s rule method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructRKF4",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructRKF4",
    "category": "function",
    "text": "Runge-Kutta-Fehberg Order 4/3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructRKF5",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructRKF5",
    "category": "function",
    "text": "Runge-Kutta-Fehlberg Order 4/5 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructRKF8",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructRKF8",
    "category": "function",
    "text": "constructRKF8()\n\nConstructs the tableau object for the Runge-Kutta-Fehlberg Order 7/8 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructRadauIA3",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructRadauIA3",
    "category": "function",
    "text": "RadauIA Order 3 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructRadauIA5",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructRadauIA5",
    "category": "function",
    "text": "RadauIA Order 5 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructRadauIIA3",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructRadauIIA3",
    "category": "function",
    "text": "RadauIIA Order 3 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructRadauIIA5",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructRadauIIA5",
    "category": "function",
    "text": "RadauIIA Order 5 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructRalston",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructRalston",
    "category": "function",
    "text": "Ralston\'s Order 2 method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructRungeFirst5",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructRungeFirst5",
    "category": "function",
    "text": "Runge\'s First Order 5 method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructSSPRK104",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructSSPRK104",
    "category": "function",
    "text": "Explicit SSP method of order 4 using 10 stages.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructSSPRK22",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructSSPRK22",
    "category": "function",
    "text": "Explicit SSP method of order 2 using 2 stages.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructSSPRK33",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructSSPRK33",
    "category": "function",
    "text": "Explicit SSP method of order 3 using 3 stages.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructSSPRK43",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructSSPRK43",
    "category": "function",
    "text": "Explicit SSP method of order 3 using 4 stages.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructSharp9",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructSharp9",
    "category": "function",
    "text": "Journal of Applied Mathematics & Decision Sciences, 4(2), 183-192 (2000),  \"High order explicit Runge-Kutta pairs for ephemerides of the Solar System and the Moon\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructSharpSmart5",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructSharpSmart5",
    "category": "function",
    "text": "Explicit Runge-Kutta Pairs with One More Derivative Evaluation than the Minimum, by P.W.Sharp and E.Smart,  Siam Journal of Scientific Computing, Vol. 14, No. 2, pages. 338-348, March 1993.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructSharpSmart7",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructSharpSmart7",
    "category": "function",
    "text": "Explicit Runge-Kutta Pairs with One More Derivative Evaluation than the Minimum, by P.W.Sharp and E.Smart,  Siam Journal of Scientific Computing, Vol. 14, No. 2, pages. 338-348, March 1993.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructSharpVerner6",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructSharpVerner6",
    "category": "function",
    "text": "Sharp-Verner Order 5/6 method\n\nCompletely Imbedded Runge-Kutta Pairs, by P. W. Sharp and J. H. Verner,  SIAM Journal on Numerical Analysis, Vol. 31, No. 4. (Aug., 1994), pages. 1169 to 1190.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructSharpVerner7",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructSharpVerner7",
    "category": "function",
    "text": "Completely Imbedded Runge-Kutta Pairs, by P.W.Sharp and J.H.Verner, Siam Journal on Numerical Analysis, Vol.31, No.4. (August 1994) pages 1169-1190.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructTanakaKasugaYamashitaYazaki6A",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructTanakaKasugaYamashitaYazaki6A",
    "category": "function",
    "text": "TanakaKasugaYamashitaYazaki Order 6 A\n\nOn the Optimization of Some Eight-stage Sixth-order Explicit Runge-Kutta Method,  by M. Tanaka, K. Kasuga, S. Yamashita and H. Yazaki,  Journal of the Information Processing Society of Japan, Vol. 34, No. 1 (1993), pages 62 to 74.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructTanakaKasugaYamashitaYazaki6B",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructTanakaKasugaYamashitaYazaki6B",
    "category": "function",
    "text": "constructTanakaKasugaYamashitaYazaki Order 6 B\n\nOn the Optimization of Some Eight-stage Sixth-order Explicit Runge-Kutta Method,  by M. Tanaka, K. Kasuga, S. Yamashita and H. Yazaki,  Journal of the Information Processing Society of Japan, Vol. 34, No. 1 (1993), pages 62 to 74.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructTanakaKasugaYamashitaYazaki6C",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructTanakaKasugaYamashitaYazaki6C",
    "category": "function",
    "text": "constructTanakaKasugaYamashitaYazaki Order 6 C\n\nOn the Optimization of Some Eight-stage Sixth-order Explicit Runge-Kutta Method,  by M. Tanaka, K. Kasuga, S. Yamashita and H. Yazaki,  Journal of the Information Processing Society of Japan, Vol. 34, No. 1 (1993), pages 62 to 74.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructTanakaKasugaYamashitaYazaki6D",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructTanakaKasugaYamashitaYazaki6D",
    "category": "function",
    "text": "constructTanakaKasugaYamashitaYazaki Order 6 D\n\nOn the Optimization of Some Eight-stage Sixth-order Explicit Runge-Kutta Method,  by M. Tanaka, K. Kasuga, S. Yamashita and H. Yazaki,  Journal of the Information Processing Society of Japan, Vol. 34, No. 1 (1993), pages 62 to 74.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructTanakaYamashitaEfficient7",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructTanakaYamashitaEfficient7",
    "category": "function",
    "text": "On the Optimization of Some Nine-Stage Seventh-order Runge-Kutta Method, by M. Tanaka, S. Muramatsu and S. Yamashita, Information Processing Society of Japan, Vol. 33, No. 12 (1992) pages 1512-1526.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructTanakaYamashitaStable7",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructTanakaYamashitaStable7",
    "category": "function",
    "text": "On the Optimization of Some Nine-Stage Seventh-order Runge-Kutta Method, by M. Tanaka, S. Muramatsu and S. Yamashita, Information Processing Society of Japan, Vol. 33, No. 12 (1992) pages 1512-1526.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructTrapezoidalRule",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructTrapezoidalRule",
    "category": "function",
    "text": "Order 2 Trapezoidal Rule (LobattoIIIA2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructTsitouras5",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructTsitouras5",
    "category": "function",
    "text": "Runge–Kutta pairs of orders 5(4) using the minimal set of simplifying assumptions,  by Ch. Tsitouras, TEI of Chalkis, Dept. of Applied Sciences, GR34400, Psahna, Greece.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructTsitouras9",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructTsitouras9",
    "category": "function",
    "text": "Optimized explicit Runge-Kutta pairs of order 9(8), by Ch. Tsitouras,  Applied Numerical Mathematics, 38 (2001) 123-134.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructTsitouras92",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructTsitouras92",
    "category": "function",
    "text": "Optimized explicit Runge-Kutta pairs of order 9(8), by Ch. Tsitouras,  Applied Numerical Mathematics, 38 (2001) 123-134.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructTsitourasPapakostas6",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructTsitourasPapakostas6",
    "category": "function",
    "text": "Tsitouras-Papakostas\'s Order 6\n\nCheap Error Estimation for Runge-Kutta methods, by Ch. Tsitouras and S.N. Papakostas, Siam Journal on Scientific Computing, Vol. 20, Issue 6, Nov 1999.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructTsitourasPapakostas8",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructTsitourasPapakostas8",
    "category": "function",
    "text": "Cheap Error Estimation for Runge-Kutta methods, by Ch. Tsitouras and S.N. Papakostas,  Siam Journal on Scientific Computing, Vol. 20, Issue 6, Nov 1999.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructVerner6",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructVerner6",
    "category": "function",
    "text": "Verner Order 5/6 method\n\nA Contrast of a New RK56 pair with DP56, by Jim Verner,  Department of Mathematics. Simon Fraser University, Burnaby, Canada, 2006.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructVerner8",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructVerner8",
    "category": "function",
    "text": "Verner Efficient 8\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructVerner916",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructVerner916",
    "category": "function",
    "text": "Verner 1991 First Order 5/6 method\n\nSome Ruge-Kutta Formula Pairs, by J.H.Verner,  SIAM Journal on Numerical Analysis, Vol. 28, No. 2 (April 1991), pages 496 to 511.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructVerner9162",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructVerner9162",
    "category": "function",
    "text": "Verner 1991 Second Order 5/6 method\n\nSome Ruge-Kutta Formula Pairs, by J.H.Verner,  SIAM Journal on Numerical Analysis, Vol. 28, No. 2 (April 1991), pages 496 to 511.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructVernerEfficient6",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructVernerEfficient6",
    "category": "function",
    "text": "From Verner\'s Website\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructVernerEfficient7",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructVernerEfficient7",
    "category": "function",
    "text": "From Verner\'s website\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructVernerEfficient9",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructVernerEfficient9",
    "category": "function",
    "text": "From Verner\'s Webiste\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructVernerRobust6",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructVernerRobust6",
    "category": "function",
    "text": "From Verner\'s Website\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructVernerRobust7",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructVernerRobust7",
    "category": "function",
    "text": "From Verner\'s website\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructVernerRobust9",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructVernerRobust9",
    "category": "function",
    "text": "From Verner\'s Webiste\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructdverk78",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructdverk78",
    "category": "function",
    "text": "Jim Verner\'s \"Maple\" (dverk78)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.stability_region-Tuple{Any,DiffEqBase.ODERKTableau}",
    "page": "Docstrings",
    "title": "DiffEqDevTools.stability_region",
    "category": "method",
    "text": "stability_region(z,tab::ODERKTableau)\n\nCalculates the stability function from the tableau at z. Stable if <1.\n\nr(z) = fracdet(I-zA+zeb^T)det(I-zA)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.stability_region-Tuple{DiffEqBase.ODERKTableau}",
    "page": "Docstrings",
    "title": "DiffEqDevTools.stability_region",
    "category": "method",
    "text": "stability_region(tab::ODERKTableau; initial_guess=-3.0)\n\nCalculates the length of the stability region in the real axis.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.length-Tuple{ConvergenceSimulation}",
    "page": "Docstrings",
    "title": "Base.length",
    "category": "method",
    "text": "length(simres::ConvergenceSimulation)\n\nReturns the number of simultations in the Convergence Simulation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.length-Tuple{DiffEqBase.ODERKTableau}",
    "page": "Docstrings",
    "title": "Base.length",
    "category": "method",
    "text": "Base.length(tab::ODERKTableau)\n\nDefines the length of a Runge-Kutta method to be the number of stages.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructGL2",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructGL2",
    "category": "function",
    "text": "Gauss-Legendre Order 2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructGL4",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructGL4",
    "category": "function",
    "text": "Gauss-Legendre Order 4.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiffEqDevTools.constructGL6",
    "page": "Docstrings",
    "title": "DiffEqDevTools.constructGL6",
    "category": "function",
    "text": "Gauss-Legendre Order 6.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DiffEqDevTools]\nOrder = [:type, :function]"
},

]}
