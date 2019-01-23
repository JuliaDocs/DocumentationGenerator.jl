var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#FourierFlows.jl-Documentation-1",
    "page": "Home",
    "title": "FourierFlows.jl Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Install FourierFlows.jl from the julia REPL prompt withusing Pkg\nPkg.add(\"FourierFlows\")"
},

{
    "location": "#Overview-1",
    "page": "Home",
    "title": "Overview",
    "category": "section",
    "text": "FourierFlows provides a framework to write solvers for partial differential equations on periodic domains with Fourier-based pseudospectral methods. We support 1- and 2-dimensional domains at the moment."
},

{
    "location": "#Examples-1",
    "page": "Home",
    "title": "Examples",
    "category": "section",
    "text": "For examples of FourierFlows.jl in action, see  GeophysicalFlows.jl"
},

{
    "location": "#Developers-1",
    "page": "Home",
    "title": "Developers",
    "category": "section",
    "text": "FourierFlows is currently being developed by Gregory L. Wagner and  Navid C. Constantinou."
},

{
    "location": "#Cite-1",
    "page": "Home",
    "title": "Cite",
    "category": "section",
    "text": "The code is citable via zenodo."
},

{
    "location": "basics/#",
    "page": "Code Basics",
    "title": "Code Basics",
    "category": "page",
    "text": ""
},

{
    "location": "basics/#Code-Basics-1",
    "page": "Code Basics",
    "title": "Code Basics",
    "category": "section",
    "text": ""
},

{
    "location": "basics/#Notation-1",
    "page": "Code Basics",
    "title": "Notation",
    "category": "section",
    "text": "The code solves differential equations of the formpartial_t u = mathcalLu + mathcalN(u) using Fourier transforms on periodic domains. The right side term mathcalLu is a \'linear\' part of the equation. The term mathcalN(u) is, in general, a \'nonlinear\' part. In FourierFlows, mathcalLu is specified by  physical modules in Fourier space as an array with the same size as hat u, the Fourier transform of u. The nonlinear term mathcalNu is specified by a function.Boundary conditions in all spatial dimensions are periodic. That allows us to expand all variables using a Fourier  decomposition. For example, a variable phi(x t) that depends in one spatial dimension is expanded as:phi(x t) = sum_k widehatphi(k t)e^mathrmi k x where wavenumbers k take the values tfrac2piL_x0pm 1pm 2dots. The equation is time-stepped  forward in Fourier space. That way u becomes the array with all Fourier coefficients of the solution.The coefficients for the linear operator mathcalL are stored in an array called LC. The term mathcalN(u)  is computed for by calling the function calcN!."
},

{
    "location": "basics/#Basic-steps-for-solving-a-problem:-step-through-an-example-script-1",
    "page": "Code Basics",
    "title": "Basic steps for solving a problem: step through an example script",
    "category": "section",
    "text": "To illustrate the basic steps for solving a problem consider the 1D Kuramoto-Sivashinsky equation for u(x t):partial_t u + partial_x^4 u + partial_x^2 u + upartial_x u = 0 which in Fourier space reads:partial_t widehatu = underbrace(- k^4 + k^2) widehatu_mathcalLwidehatu\n+ underbracewidehat -upartial_x u _mathcalN(widehatu) A FourierFlows.Problem is composed of the following types:Grid (OneDGrid in this case)\nParams (empty in this case)\nVars, which holds u, partial_x u, upartial_x u and their Fourier transforms widehatu, widehatpartial_x u, widehatupartial_xu.\nEquation, which holds the linear coefficients LC and a function calcN! that computes mathcalN(widehatu).\nTimeStepper for stepping the solution forward,\nState, which holds the solution sol and current time t.The example script found in  examples/kuramotosivashinsky/trefethenexample.jl demonstrates the above steps  needed to construct a KuramotoSivashinsky Problem. For this we call  prob = Problem(nx=nx, Lx=Lx, dt=dt, stepper=\"ETDRK4\"). Looking into the  Problem  function we can see the above steps:function Problem(; nx=256, Lx=2π, dt=0.01, stepper=\"RK4\")\n    g  = OneDGrid(nx, Lx)\n    pr = Params()\n    vs = Vars(g)\n    eq = Equation(pr, g)\n    ts = TimeStepper(stepper, dt, eq.LC, g)\n    FourierFlows.Problem(g, vs, pr, eq, ts)\nendOneDGrid(nx, Lx) builds a one-dimensional grid with a Fourier wavenumber array kr:i1 = 0:Int(nx/2)\ni2 = Int(-nx/2+1):-1\nkr = Array{T}(2π/Lx*cat(1, i1))For real-valued fields we use rfft and thus only positive wavenumbers are involved: array kr.  Foe example, with nx=8 and Lx=2π the wavenumber grids are: k = [0, 1, 2, 3, 4, -3, -2, -1] and  kr = [0, 1, 2, 3, 4].The construction of the grids only works for an even number of grid points. Moreover, the Fourier transforms are  most efficient when the number of grid points is the product of powers of 2 and 3. For example:  2^7=128, 2^6 3^1=192, or 2^8=256.Vars(g) initializes variables u, ux, and uux as real valued arrays of length nx and variables  uh, uxh, and uuxh as complex valued arrays of length nkr = Int(nx/2+1) (the same length as kr).  We use the convention that the Fourier transform of a variable is appended with an h, which stands for \'hat\'. For example, the transform of phi is phih.The array LC is constructed by the Equation constructorfunction Equation(p, g)\n  LC = @. g.kr^2 - g.kr^4\n  FourierFlows.Equation(LC, calcN!)\nendOne of the fields of Equation is the function calcN!,  which computes the nonlinear term mathcalN(widehatu), storing the result in N:function calcN!(N, sol, t, s, v, p, g)\n  @. v.uh = sol\n  @. v.uxh = im*g.kr*sol\n  ldiv!(v.u, g.irfftplan, v.uh) # irfft\n  ldiv!(v.ux, g.irfftplan, v.uxh)\n  @. v.uux = v.u*v.ux\n  mul!(v.uuxh, g.rfftplan, v.uux)\n  @. N = -v.uuxh\n  dealias!(N, g)\n  nothing\nendThe time-stepper is constructed and stored as ts. Finally, all supertypes are gathered together as a  FourierFlows.Problem."
},

{
    "location": "forcing/#",
    "page": "Forcing",
    "title": "Forcing",
    "category": "page",
    "text": "newcommandsqrmboxsqr\nnewcommandsawmboxsaw\nnewcommandindmboxind\nnewcommandsgnmboxsgn\nnewcommanderfcmboxerfc\nnewcommanderfmboxerf\n\n An average\nnewcommandavg1mathrmavg 1 \n The right way to define new functions\nnewcommandsechmathoprm sechnolimits\nnewcommandcosechmathoprm cosechnolimits\n\n A nice definition\nnewcommanddefnstackrelmathrmdef=\n \n\nnewcommandol1overline1\n\n\n Various boldsymbols\nnewcommandbxboldsymbolx\nnewcommandbyboldsymboly\nnewcommandbqboldsymbolq\nnewcommandbpsiboldsymbolpsi\nnewcommandbuboldsymbolu\nnewcommandbGboldsymbolmathcalG\nnewcommandGmathcalG\nnewcommandbaboldsymbola\nnewcommandbbboldsymbolb\nnewcommandbcboldsymbolc\nnewcommandbvboldsymbolv\nnewcommandbkboldsymbolk\nnewcommandbXboldsymbolX\nnewcommandbrboldsymbolr\nnewcommandJmathsfJ\nnewcommandDmathsfD\nrenewcommandLmathsfL\nnewcommandsLmathsfL\nnewcommandGboldsymbolmathsfG\nnewcommandbAboldsymbol A\nnewcommandbUboldsymbol U\nnewcommandbEboldsymbol E\nnewcommandbJboldsymbol J\nnewcommandbXXboldsymbol mathcalX\nnewcommandbFFensuremath boldsymbol F\nnewcommandbFensuremath boldsymbol F^sharp\nnewcommandbLensuremath boldsymbol L\nnewcommandbIensuremath boldsymbol I\nnewcommandbNensuremath boldsymbol N\n\nnewcommandIensuremath mathsfI\nrenewcommandLensuremath mathsfL\nrenewcommandSensuremath mathsfS\n\nnewcommandbSigmaensuremath boldsymbol Sigma\nnewcommandkmaxk_mathrmmax\nnewcommandbnablaboldsymbolnabla\nnewcommandbcdotboldsymbolcdot\n\ndefiirm i\ndefddrm d\ndefeerm e\ndefDDrm D\n Cals here \n\n  Euler caligraphics \nnewcommandAmathscrA\n newcommandBmathscrB\nnewcommandBmathcalB\nnewcommandEmathscrE\nnewcommandFmathscrF\nnewcommandKmathscrK\nnewcommandNmathscrN\nnewcommandUmathscrU\nnewcommandLLmathscrL\nnewcommandMmathscrM\nnewcommandTmathscrT\ndeflalangle\ndefrarangle\ndeflaaleft langle\ndefraaright rangle\ndefEkmathrmEk\nnewcommandhzonh_mathrmzon\nnewcommandlaptriangle\nnewcommandppartial\nnewcommandhalf tfrac12\nnewcommandgradboldsymbol nabla\nnewcommandpdetextscpde\nnewcommandodetextscode\nnewcommandcctextsccc\nnewcommanddctextscdc\nnewcommanddbctextscdbc\nnewcommandbyutextscbyu\nnewcommandrhstextscrhs\nnewcommandlhstextsclhs\nnewcommandcom\nnewcommandper\nnewcommandzzeta\nnewcommandheta\nrenewcommand(left(\nrenewcommandleft\nrenewcommand)right)\nrenewcommandright\nnewcommandleftlangle\nrenewcommandrightrangle\nrenewcommandAmathcalA\nrenewcommandNmathcalN\nnewcommandCmathcalC\nnewcommandtransptextrmT\nnewcommandzhatwidehatmathbfz\n\nnewcommandbitvphantomdotW\nnewcommandsdb"
},

{
    "location": "forcing/#Forcing-1",
    "page": "Forcing",
    "title": "Forcing",
    "category": "section",
    "text": "The code implements forcing in various modules (currently in TwoDTurb and BarotropicQG). Forcing can be either deterministic or stochastic (random). For deterministic forcing the implementation is straightforward; for stochastic forcing there are two main train of thoughts: Itô calculus and Stratonovich calculus.Both stochastic calculi give the same results. But once we decide to use one of the two calculi we have to remain consistent and use that calculus for everywhere. There is a lot of confusion and mostly the confusion stems from not using the same stochastic calculus consistently throughout the computation but rather interchanging between the two.FourierFlows uses Stratonovich calculus throughout the code. This choise was made because Stratonovich calculus works the same with both stochastic and deterministic forcing, i.e. with Stratonovich calculus we have the same chain rules for differentiation for stochastic functions as the chain rules we learn in normal-deterministic calculus). Therefore, the code written as is does not really \"care\" of what forcing the user implements.If you are interested in learning more regarding the two stochastic calculi and how they are numerically implemented then read on; otherwise you can skip this section of the documentation and go to the Module Tutorials."
},

{
    "location": "forcing/#Stochastic-Differential-Equations-(SDEs)-1",
    "page": "Forcing",
    "title": "Stochastic Differential Equations (SDEs)",
    "category": "section",
    "text": "A differential equation in the form:beginequation\n	fracdd xdd t = f(x)comquad x(t_0)=0com\nendequationcan also be written in an integral form:beginequation\n	x(t) = int_t_0^t f(x(s))dd sper\nendequationIn a similar manner, a stochastic differential equationbeginequation\n	dd x = f(x)dd t + g(x)dd W_tcomquad x(t_0)=0com\nendequationwith dd W_t a white-noise process, can be written in an integral form as:beginequation\n	x(t) = int_t_0^t f(x(s))dd s + int_t_0^t g(x(s))dd W_s per\nendequationOf course now, the last integral is a stochastic integral and there is not a single straight-forward way of computing it –- there are a lot of different ways we can approximate it as a Riemannian sum and each of them leads to a different answer. The two most popular ways for computing such stochastic integrals are:colorGreentextItô int_t_0^t g(x(s))dd W_sapproxsum_j gleft(x(t_j)right)(W_j+1-W_j)com\ncolorMagentatextStratonovich int_t_0^t g(x(s))dd W_s approx sum_j gleft(xleft(half(t_j+t_j+1)right)right)(W_j+1-W_j)perBecause the white noise process is not continuous the two definitions do not converge to the same result; the two definitions give thoroughly different results. And to overcome that they come along with different chain rules, i.e., chain rules that are not necessarily the same as those in plain old calculus.An SDE can be written also in differential form. Because we cannot formally form dd Wdd t, since W is nowhere differentiable, we write an SDE in differential form as:colorGreentextItô dd x_t = f(x_t)dd t + g(x_t)dd W_tcom\ncolorMagentatextStratonovich dd x_t = f(x_t)dd t + g(x_t)circdd W_tperThe circle in g(x_t)circdd W_t is used to differentiate between Itô or Stratonovich calculus.A variable change y=G(x) is done as follows according to the two different calculi:colorGreentextItô dd y_t = fracdd Gdd xdd x_t + half g(x_t)^2 fracdd^2 Gdd x^2dd t =left fracdd Gdd xf(x_t) + half g(x_t)^2 fracdd^2 Gdd x^2rightdd t + fracdd Gdd xg(x_t)dd W_tcom\ncolorMagentatextStratonovich dd y_t  = fracdd Gdd xdd x_t =fracdd Gdd x f(x_t) dd t + fracdd Gdd xg(x_t)circdd W_tperThe above are the so called stochastic chain rules. All derivatives of G are evaluated at x_t.It\'s easy to see that the extra drift-term in Itô\'s interpretation of the stochastic integral, i.e., colorGreenhalf g^2 dd^2Gdd x^2  is exactly equal to the ensemble mean of the Stratonovich stochastic integral. That\'s because the Itô stochastic integral has, by construction, zero ensemble mean since at every instant the noise is multiplied with g evaluated before the action of the noise; g and dd W are uncorrelated and thus:beginequation\ncolorGreenlaa g(x_t)dd W_t raa =0quadtextwhilequad colorMagentalaa g(x_t)circdd W_t raa ne 0per\nendequationThe above is demonstrated by evaluating the simple stochastic integral:colorGreentextItô laa int_t_0^t W_sdd W_s raa approxsum_j laa W_j(W_j+1-W_j)raa\ncolorGreenhspace73em = sum_j laa W_j W_j+1raa - laa W_jW_jraa sim sum_j t_j - t_j = 0 com\ncolorMagentatextStratonovich laaint_t_0^t W_scircdd W_sraa approx sum_j laa frac12(W_j + W_j+1) (W_j+1-W_j)raa \ncolorMagentahspace73em = frac12sum_j laa W_j+1 W_j+1raa - laa W_j W_jraa  sim frac12sum_j t_j+1 - t_j = fract2perSDEs rarely can be solved in closed form; most often numerical solution of SDEs is brought to the rescue. Itô calculus has the advantage that is very easily implemented numerically. On the other hand, the chain rule in Stratonovich calculus coincides with that in normal calculus. This stems from the fact that in the Stratonovich interpretation the white noise process is as a series of colored noise processes with the de-correlation time tending to zero. This made Stratonovich calculus more popular in the physics community. A nice discussion on the differences and similarities between the two calculi is given by van Kampen."
},

{
    "location": "forcing/#A-simple-Stochastic-Differential-Equation-(SDE):-the-Ornstein–Uhlenbeck-process-1",
    "page": "Forcing",
    "title": "A simple Stochastic Differential Equation (SDE): the Ornstein–Uhlenbeck process",
    "category": "section",
    "text": "One of the simpler SDEs is the Ornstein–Uhlenbeck process. A variation of which is:beginequation\n	x(t) = int_t_0^t -mu x(s)dd s + int_t_0^t sqrtsigmadd W_s perlabeleqOU\nendequationNote that in differential form this is:beginequation\n	dd x_t = -mu x_t dd t + sqrtsigmadd W_s perlabeleq1\nendequationLuckily, here there is no need to distinguish between Itô and Stratonovich. This is because g is independent of x(t). But we stress that  this is often not the case; it is only a fortuitous coincident here.How do we time-step this SDE numerically? Let us assume a discretization of time into time-steps of tau: t_j=(j-1)tau. (What follows can be easily transfer to non-uniform time discretization.) With that, we denote x_jdefn x(t_j). Then the Euler–Mayorama time-step scheme for \\eqref{eq:1} isbeginequation\n	x_j+1 = x_j + (-mu x_j)tau + sqrtsigma(W_j+1-W_j)per\nendequationNow let us ask the following question: How can we compute the work done by the noise? In other words, if we are interested in the evolution of the \"energy\" Edefn half x^2, how is the noise term attributing in the growth of E? To answer that we first have to find the SDE that energy E obeys. But, in doing so, it is important to adopt a single interpretation for computing stochastic integrals as now a transformation of variables is needed. That is, depending on whether we choose to interpret the stochastic integrals according to Itô or to Stratonovich calculus, E evolves as:beginequation\ncolorGreentextItô  dd E_t  = left( -2mu E_t + half sigma right)dd t  + x_t sqrtsigmadd W_tcomlabeleqE_ito\nendequationbeginequation\ncolorMagentatextStratonovich dd E_t  = -2mu E_t  dd t + x_tcirc sqrtsigmadd W_tperlabeleqE_str\nendequationHow do we compute the work P done by the noise? It is:colorGreentextItô P_t = half sigma dd t + sqrtsigma x_t dd W_t approx  half sigma + sqrtsigma x_j (W_j+1-W_j)com\ncolorMagentatextStratonovich P_t =  x_t circsqrtsigma dd W_t approx sqrtsigma xleft(half(t_j+t_j+1)right)(W_j+1-W_j)perSay we didn\'t know the rules for transforming Stratonovich to Itô and we were wondering what is the extra drift term we have to include in the Itô formulations, i.e. the halfsigma term. We can compute the Itô\'s drift-term using that it is exactly equal to la x_tcircsqrtsigmadd W_tra; and for the latter we can use the \"usual\" calculus. That is, rewrite \\eqref{eq:OU} as:beginequation\ndotx = -mu x + xicomlabeleqOUcont\nendequationwhere xi(t) is understood to be the \"continuous\" version of the white-noise process which is formally only understood in terms of distributions. The forcing xi has the properties:laa xi(t)raa = 0 quadtextandquad laa xi(t)xi(t)raa = sigma delta(t-t)perThus we need to compute la P_t ra = la x(t) xi(t) ra. But \\eqref{eq:OUcont} has formally the solution:x(t) = ee^-mu t x(0) + int_0^t ee^-mu(t-s)xi(s)dd sperand utilizing the above we getla P_t ra = la x(t) xi(t)  ra\n=  ee^-mu t underbracela x(0)xi(t)ra_=0 + int_0^t ee^-mu(t-s)la xi(t)xi(s)radd s\n= sigma int_0^t ee^-mu(t-s) delta(t-s)dd s =  fracsigma2 perAbove we used that int_0^tdelta(t-s)dd s = half, which is consistent with Stratonovich symmetric interpretation of stochastic integrals."
},

{
    "location": "forcing/#Numerical-implementation-1",
    "page": "Forcing",
    "title": "Numerical implementation",
    "category": "section",
    "text": "How do we time-step \\eqref{eq:E_ito}? We use the Euler–Maruyama time-stepping scheme:	E_j+1 = E_j + left(-2mu E_j + fracsigma2right)tau + sqrtsigmax_j(W_j+1-W_j)perHowever, we cannot use Euler–Maruyama for time-stepping \\eqref{eq:Estr} since the Euler–Maruyama is \"Itô\"-thinking. To time-step \\eqref{eq:Estr} we have to approximate g in the middle of the time-step. There are many ways to do that, one of which is the, so called, Euler–Heun method:	widetildeE_j+1 = E_j + (-2mu E_j)tau + sqrtsigmax_j(W_j+1-W_j)com\n	E_j+1 = E_j + left(-2mu fracE_j+widetildeE_j+12right)tau + sqrtsigmafracx_j+x_j+12(W_j+1-W_j)per(Image: energy_comparison)Figure above shows a comparison of the energy evolution as done from:direct computation as half x_t^2,\ntime-integration of \\eqref{eq:E_ito}, and\ntime-integration of \\eqref{eq:E_str}.Figures below show the ensemble mean energy budgets (using 1000 ensemble members) as computed using Itô and Stratonovich. For the energy budget to close we have to be consistent: if we time-step the energy equation based on Stratonovich calculus then we must compute the work also according to Stratonovich. (For more details see examples/forcing/simpleSDEItoStratonovich.jl.(Image: energy_budgets_Ito) (Image: energy_budgets_Stratonovich)"
},

{
    "location": "forcing/#A-simple-Stochastic-Partial-Differential-Equation-(SPDE)-1",
    "page": "Forcing",
    "title": "A simple Stochastic Partial Differential Equation (SPDE)",
    "category": "section",
    "text": "We want now to transfer all the knowledge we got from the previous sections to PDEs. In particular we\'ll focus on the simple SPDE:\\begin{equation} \\partial_t \\nabla^2\\psi(\\bx, t) =  -\\mu \\nabla^2\\psi(\\bx, t) + \\xi(\\bx,t)\\com\\label{eq:PDEcont} \\end{equation}which is also equivalently written as:\\begin{equation} \\dd \\nabla^2\\psit(\\bx) =  -\\mu \\nabla^2\\psit(\\bx) \\dd t + \\sqrt{\\sigma} \\dd W_t(\\bx) \\end{equation}The form \\eqref{eq:PDEcont} is the continuous version understood in the Stratonovich interpretation (similar to \\eqref{eq:OUcont}). Thus, forcing xi obeys now:laxi(bxt)ra = 0 quadtextandquadlaxi(bxt)xi(bxt) ra= Q(bx-bx)delta(t-t)comthat is the forcing is white in time but spatially correlated; its spatial correlation is prescribed by the function Q which is, necessarily, homogeneous in all its arguments (see discussion by Constantinou; Appendix A).The above describes the vorticity evolution of a two-dimensional fluid nabla^2psi which is stochastically forced while dissipated by linear drag mu. The energy of the fluid is:E = halfoverlinegradpsi^2^xy = -halfoverlinepsinabla^2psi^xycomwhere the overbar denotes average over x and y. To obtain the energy equation we multiply \\eqref{eq:PDEcont} with -psi and average over the whole domain. Thus, the work done by the forcing is given by the term:P = -overlinepsixi^xycombut the above is a stochastic integral and it is meaningless without a rule for computing the stochastic integral.Numerically, the work done by the forcing can be obtained Stratonovich-wise as:beginalign\nP_j = -overlinefracpsi(bxt_j)+psi(bxt_j+1)2  xi(bxt_j+1) ^xycom\nendalignor Itô-wisebeginalign\nP_j = -overline psi(bxt_j) xi(bxt_j+1) ^xy + textdriftcom\nendalignBut how much is the Itô drift term in this case? As in the previous section, the drift is precisely the ensemble mean of the Stratonovich work, i.e.:textrmIto drift= -overline launderbracepsi(bxt)circ  xi(bxt)_textrmStratonovich ra ^xycomBut again the above can be computed relatively easy if we use the \"formal\" solution of \\eqref{eq:PDEcont}:psi(bxt) = ee^-mu tpsi(bx0) + int_0^t ee^-mu(t-s)nabla^-2xi(bxs)dd scomwhich impliestextdrift = -overlineee^-mu tunderbracelaapsi(bx0) xi(bxt)raa_=0 ^xy - int_0^t ee^-mu(t-s)overlinenabla^-2laa xi(bxs)xi(bxt)raa^xydd s \n= -int_0^t ee^-mu(t-s)overlineunderbraceleftnabla^-2 Q(bx)rightbig_bx=0_textindependent of xydelta(t-s)^xydd s = -frac12 nabla^-2 Q(bx)big_bx=0 \n= -frac12 leftnabla^-2 int fracdd^2bk(2pi)^2 widehatQ(bk)ee^iibkbcdotbx right _bx=0\n= int fracdd^2bk(2pi)^2 fracwidehatQ(bk)2k^2perThus, the drift, or in this case the mean energy input rate by the stochastic forcing, is precisely determined from the spatial correlation of the forcing. Let us denote:varepsilon defn int fracdd^2bk(2pi)^2 fracwidehatQ(bk)2k^2perlabeleqdef_epsilonTherefore, work for a single forcing realization is computed numerically as:beginalign\ncolorGreentextItô colorGreen P_j  =  -overline psi(bxt_j) xi(bxt_j+1) ^xy  + varepsiloncom\ncolorMagentatextStratonovich  colorMagentaP_j = -overlinefracpsi(bxt_j)+psi(bxt_j+1)2  xi(bxt_j+1) ^xyper labeleqPtStrat\nendalignRemember, previously the work done by the stochastic forcing was:dd P_t = colorGreenfracsigma2dd t + sqrtsigmax_tdd W_t = colorMagentasqrtsigma x_tcircdd W_tcomand by sampling over various forcing realizations:langle dd P_trangle = fracsigma2dd t = langlesqrtsigma x_tcircdd W_trangleThe code uses Stratonovich. For example, the work done by the forcing in the TwoDTurb module is computed based on \\eqref{eq:PtStrat} with the function@inline function work(s, v::ForcedVars, g)\n  @. v.Uh = g.invKKrsq * (v.prevsol + s.sol)/2.0 * conj(v.Fh)\n  1/(g.Lx*g.Ly)*FourierFlows.parsevalsum(v.Uh, g)\nend"
},

{
    "location": "forcing/#A-less-simple-SPDE-1",
    "page": "Forcing",
    "title": "A less-simple SPDE",
    "category": "section",
    "text": "It turns out that nothing changes if we include the nonlinear terms in the vorticity equation:beginequation\npartial_t nabla^2psi(bx t) + J(psinabla^2psi) =  -mu nabla^2psi(bx t) + xi(bxt)perperlabeleqPDEcont2\nendequationThe nonlinearity does not alter the Itô drift; thus the ensemble mean energy input by the stochastic forcing, remains the same. We can easily verify this from the \"formal\" solution of \\eqref{eq:PDEcont2}:psi(bxt) = ee^-mu tpsi(bx0) + int_0^t ee^-mu(t-s)nabla^-2xi(bxs)dd s - int_0^t nabla^-2Jleft(psi(bxs)nabla^2psi(bxs)right)dd scomWhen multiplied with xi(bxt) the last term vanishes since its only non-zero contribution comes from the point s=t which is of measure zero (in the integrated sense).Figure below shows the energy budgets for a numerical solution of \\eqref{eq:PDEcont2}  starting from rest (psi(bx0)=0) in a doubly periodic square domain of size L (examples/twodturb/IsotropicRingForcing.jl). The forcing was prescribed to have power in a narrow ring in wavenumber space:widehatQ(bk)propto ee^-(bk-k_f)^2(2delta_f^2)comwith k_f L(2pi) = 12 and delta_f L(2pi) = 2. The mean energy input rate was set to varepsilon = 01.(Image: energy_budgets_SPDE_Stratonovich)"
},

{
    "location": "modules/kuramotosivashinsky/#",
    "page": "Kuramoto-Sivashinsky Module",
    "title": "Kuramoto-Sivashinsky Module",
    "category": "page",
    "text": ""
},

{
    "location": "modules/kuramotosivashinsky/#Kuramoto-Sivashinsky-Module-1",
    "page": "Kuramoto-Sivashinsky Module",
    "title": "Kuramoto-Sivashinsky Module",
    "category": "section",
    "text": ""
},

{
    "location": "modules/kuramotosivashinsky/#Basic-Equations-1",
    "page": "Kuramoto-Sivashinsky Module",
    "title": "Basic Equations",
    "category": "section",
    "text": "This module solves the Kuramoto-Sivashinsky equation for u(xt):partial_t u + partial_x^4 u + partial_x^2 u + upartial_x u = 0 "
},

{
    "location": "modules/kuramotosivashinsky/#Implementation-1",
    "page": "Kuramoto-Sivashinsky Module",
    "title": "Implementation",
    "category": "section",
    "text": "The equation is time-stepped forward in Fourier space:partial_t widehatu + k_x^4 widehatu - k_x^2 widehatu + widehat upartial_x u  = 0 Thus:mathcalL = k_x^2 - k_x^4 mathcalN(widehatu) = - mathrmFFT(u partial_x u) The function calcN! implements dealiasing to avoid energy piling up at the grid-scale."
},

{
    "location": "modules/traceradvdiff/#",
    "page": "TracerAdvDiff Module",
    "title": "TracerAdvDiff Module",
    "category": "page",
    "text": ""
},

{
    "location": "modules/traceradvdiff/#TracerAdvDiff-Module-1",
    "page": "TracerAdvDiff Module",
    "title": "TracerAdvDiff Module",
    "category": "section",
    "text": ""
},

{
    "location": "modules/traceradvdiff/#Basic-Equations-1",
    "page": "TracerAdvDiff Module",
    "title": "Basic Equations",
    "category": "section",
    "text": "This module solves the advection diffusion equation for a passive tracer concentration c(x y t) in two-dimensions:partial_t c + boldsymbolu boldsymbolcdot boldsymbolnabla c = underbraceeta partial_x^2 c + kappa partial_y^2 c_textrmdiffusivity + underbracekappa_h (-1)^n_h nabla^2n_hc_textrmhyper-diffusivity where boldsymbolu = (uv) is the two-dimensional advecting flow, eta the x-diffusivity and kappa is the y-diffusivity. If eta is not defined then the code uses isotropic diffusivity, i.e., eta partial_x^2 c + kappa partial_y^2 cmapstokappanabla^2. The advecting flow could be either compressible or incompressible. "
},

{
    "location": "modules/traceradvdiff/#Implementation-1",
    "page": "TracerAdvDiff Module",
    "title": "Implementation",
    "category": "section",
    "text": "The equation is time-stepped forward in Fourier space:partial_t widehatc = - widehatboldsymbolu boldsymbolcdot boldsymbolnabla c - left (eta k_x^2 + kappa k_y^2) +kappa_h k^2nu_h rightwidehatc Thus:beginalign*\nmathcalL = -eta k_x^2 - kappa k_y^2 - kappa_h k^2nu_h  \nmathcalN(widehatc) = - mathrmFFT(u partial_x c + upsilon partial_y c) \nendalign*"
},

{
    "location": "man/types/#",
    "page": "Private types",
    "title": "Private types",
    "category": "page",
    "text": ""
},

{
    "location": "man/types/#Private-types-1",
    "page": "Private types",
    "title": "Private types",
    "category": "section",
    "text": ""
},

{
    "location": "man/types/#FourierFlows.Problem",
    "page": "Private types",
    "title": "FourierFlows.Problem",
    "category": "type",
    "text": "Problem(sol, clock, grid, eqn, vars, params, timestepper)\n\nInitialize a FourierFlows problem on grid g, with variables v, parameters p, equation eq, and timestepper ts.\n\n\n\n\n\n"
},

{
    "location": "man/types/#Private-types-in-module-FourierFlows:-1",
    "page": "Private types",
    "title": "Private types in module FourierFlows:",
    "category": "section",
    "text": "Modules = [FourierFlows]\nPublic = false\nOrder = [:type]"
},

{
    "location": "man/types/#Private-types-in-module-KuramotoSivashinsky:-1",
    "page": "Private types",
    "title": "Private types in module KuramotoSivashinsky:",
    "category": "section",
    "text": "Modules = [FourierFlows.KuramotoSivashinsky]\nPublic = false\nOrder = [:type]"
},

{
    "location": "man/types/#Private-types-in-module-TracerAdvDiff:-1",
    "page": "Private types",
    "title": "Private types in module TracerAdvDiff:",
    "category": "section",
    "text": "Modules = [FourierFlows.TracerAdvDiff]\nPublic = false\nOrder = [:type]"
},

{
    "location": "man/functions/#",
    "page": "Functions",
    "title": "Functions",
    "category": "page",
    "text": ""
},

{
    "location": "man/functions/#Functions-1",
    "page": "Functions",
    "title": "Functions",
    "category": "section",
    "text": ""
},

{
    "location": "man/functions/#FourierFlows.TimeStepper",
    "page": "Functions",
    "title": "FourierFlows.TimeStepper",
    "category": "function",
    "text": "TimeStepper(stepper, eq, dt=nothing)\n\nGeneralized timestepper constructor. If stepper is explicit, dt is not used.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#FourierFlows.cxtype-Union{Tuple{Type{T}}, Tuple{T}} where T<:Number",
    "page": "Functions",
    "title": "FourierFlows.cxtype",
    "category": "method",
    "text": "cxtype(T)\n\nReturns T when T is Complex, or Complex{T} when T is Real.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#FourierFlows.dealias!-Tuple{Any,OneDGrid}",
    "page": "Functions",
    "title": "FourierFlows.dealias!",
    "category": "method",
    "text": "dealias!(a, g, kalias)\n\nDealias a on the grid g with aliased x-wavenumbers kalias.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#FourierFlows.fltype-Union{Tuple{Type{T}}, Tuple{T}} where T<:AbstractFloat",
    "page": "Functions",
    "title": "FourierFlows.fltype",
    "category": "method",
    "text": "fltype(T)\n\nReturns T when T<:AbstractFloat or Tf when T<:Complex{Tf}.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#FourierFlows.gridpoints-Tuple{Any}",
    "page": "Functions",
    "title": "FourierFlows.gridpoints",
    "category": "method",
    "text": "gridpoints(g)\n\nReturns the collocation points of the grid g in 2D arrays X, Y.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#FourierFlows.increment!-Tuple{Any}",
    "page": "Functions",
    "title": "FourierFlows.increment!",
    "category": "method",
    "text": "increment!(diag)\n\nIncrement the Diagnostic diag, or an array of Diagnostics diags.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#FourierFlows.innereltype-Tuple{Any}",
    "page": "Functions",
    "title": "FourierFlows.innereltype",
    "category": "method",
    "text": "innereltype(x)\n\nRecursively determine the \'innermost\' type in by the collection x (which may be, for example, a collection of a collection).\n\n\n\n\n\n"
},

{
    "location": "man/functions/#FourierFlows.savediagnostic-Tuple{Any,Any,Any}",
    "page": "Functions",
    "title": "FourierFlows.savediagnostic",
    "category": "method",
    "text": "savediagnostic(diag, diagname)\n\nSave diagnostics in diag to file, labeled by diagname.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#FourierFlows.saveoutput-Tuple{Any}",
    "page": "Functions",
    "title": "FourierFlows.saveoutput",
    "category": "method",
    "text": "saveoutput(out)\n\nSave the fields in out.fields to out.path.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#FourierFlows.saveproblem-Tuple{Any,Any}",
    "page": "Functions",
    "title": "FourierFlows.saveproblem",
    "category": "method",
    "text": "saveproblem(prob, filename)\n\nSave certain aspects of a problem.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#FourierFlows.stepforward!-Tuple{FourierFlows.Problem,Any,Int64}",
    "page": "Functions",
    "title": "FourierFlows.stepforward!",
    "category": "method",
    "text": "stepforward!(prob, diags, nsteps)\n\nStep forward prob for nsteps, incrementing diags along the way. diags may be a single Diagnostic or a Vector of Diagnostics.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#FourierFlows.stepforward!-Tuple{FourierFlows.Problem,Int64}",
    "page": "Functions",
    "title": "FourierFlows.stepforward!",
    "category": "method",
    "text": "stepforward!(prob, nsteps)\n\nStep forward prob for nsteps.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#FourierFlows.stepforward!-Tuple{FourierFlows.Problem}",
    "page": "Functions",
    "title": "FourierFlows.stepforward!",
    "category": "method",
    "text": "stepforward!(prob)\n\nStep forward prob one time step.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#FourierFlows.superzeros-Tuple{Any,AbstractArray}",
    "page": "Functions",
    "title": "FourierFlows.superzeros",
    "category": "method",
    "text": "superzeros(T, A)\n\nReturns an array like A, but full of zeros. If innereltype(A) can be promoted to T, then the innermost elements of the array will have type T.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#FourierFlows.update!-Tuple{Any,Any}",
    "page": "Functions",
    "title": "FourierFlows.update!",
    "category": "method",
    "text": "update!(diag)\n\nUpdate diag.\n\n\n\n\n\n"
},

{
    "location": "man/functions/#Functions-exported-from-FourierFlows:-1",
    "page": "Functions",
    "title": "Functions exported from FourierFlows:",
    "category": "section",
    "text": "Modules = [FourierFlows]\nPrivate = false\nOrder = [:function]"
},

{
    "location": "man/functions/#Functions-exported-from-KuramotoSivashinsky:-1",
    "page": "Functions",
    "title": "Functions exported from KuramotoSivashinsky:",
    "category": "section",
    "text": "Modules = [FourierFlows.KuramotoSivashinsky]\nPrivate = false\nOrder = [:function]"
},

{
    "location": "man/functions/#Functions-exported-from-TracerAdvDiff:-1",
    "page": "Functions",
    "title": "Functions exported from TracerAdvDiff:",
    "category": "section",
    "text": "Modules = [FourierFlows.TracerAdvDiff]\nPrivate = false\nOrder = [:function]"
},

]}
