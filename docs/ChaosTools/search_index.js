var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: DynamicalSystems.jl logo: The Double Pendulum)Repository containing tools for the exploration of chaos and nonlinear dynamics. It is part of the library DynamicalSystems.jl.Documentation Travis AppVeyor Gitter\n(Image: ) (Image: Build Status) (Image: Build status) (Image: Gitter)The features of ChaosTools.jl are updated and expanded frequently and therefore we refer our users to the official documentation: https://juliadynamics.github.io/DynamicalSystems.jl/latest/chaos/overview/"
},

{
    "location": "autodocs/#ChaosTools.broomhead_king-Tuple{AbstractArray,Int64}",
    "page": "Docstrings",
    "title": "ChaosTools.broomhead_king",
    "category": "method",
    "text": "broomhead_king(s::AbstractVector, d::Int) -> U, S, Vtr\n\nReturn the Broomhead-King coordinates of a timeseries s by performing svd on the so-called trajectory matrix with dimension d.\n\nDescription\n\nBroomhead and King coordinates is an approach proposed in [1] that applies the Karhunen–Loève theorem to delay coordinates embedding with smallest possible delay.\n\nThe function performs singular value decomposition on the d-dimensional trajectory matrix X of s,\n\nX = frac1sqrtNleft(\nbeginarraycccc\nx_1  x_2  ldots  x_d \nx_2  x_3  ldots  x_d+1\nvdots  vdots  vdots  vdots \nx_N-d+1  x_N-d+2 ldots  x_N\nendarray\nright) = Ucdot S cdot V^tr\n\nwhere x = s - bars. The columns of U can then be used as a new coordinate system, and by considering the values of the singular values S you can decide how many columns of U are \"important\". See the documentation page for example application.\n\nReferences\n\n[1] :  D. S. Broomhead, R. Jones and G. P. King, J. Phys. A 20, 9, pp L563 (1987)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.capacity_dim-Tuple",
    "page": "Docstrings",
    "title": "ChaosTools.capacity_dim",
    "category": "method",
    "text": "capacitydim(args...) = generalizeddim(0, args...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.estimate_boxsizes-Union{Tuple{AbstractDataset{D,T}}, Tuple{T}, Tuple{D}} where T<:Number where D",
    "page": "Docstrings",
    "title": "ChaosTools.estimate_boxsizes",
    "category": "method",
    "text": "estimate_boxsizes(dataset::AbstractDataset; k::Int = 12, z = -1, w = 1)\n\nReturn k exponentially spaced values from 10^lower + w to 10^upper + z.\n\nlower is the magnitude of the minimum pair-wise distance between datapoints while upper is the magnitude of the maximum difference between greatest and smallest number among each timeseries.\n\n\"Magnitude\" here stands for order of magnitude, i.e. round(log10(x)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.gali-Tuple{DynamicalSystem,Real,Int64}",
    "page": "Docstrings",
    "title": "ChaosTools.gali",
    "category": "method",
    "text": "gali(ds::DynamicalSystem, tmax, k::Int | Q0; kwargs...) -> GALI_k, t\n\nCompute textGALI_k [1] for a given k up to time tmax. Return textGALI_k(t) and time vector t.\n\nThe third argument, which sets the order of gali, can be an integer k, or a matrix with its columns being the deviation vectors (then k = size(Q0)[2]). In the first case random orthonormal vectors are chosen.\n\nKeyword Arguments\n\nthreshold = 1e-12 : If GALI_k falls below the threshold iteration is terminated.\ndt = 1 : Time-step between deviation vector normalizations. For continuous systems this is approximate.\nu0 : Initial state for the system. Defaults to get_state(ds).\ndiffeq... : Keyword arguments propagated into init of DifferentialEquations.jl. See trajectory for examples. Only valid for continuous systems.\n\nDescription\n\nThe Generalized Alignment Index, textGALI_k, is an efficient (and very fast) indicator of chaotic or regular behavior type in D-dimensional Hamiltonian systems (D is number of variables). The asymptotic behavior of textGALI_k(t) depends critically on the type of orbit resulting from the initial condition. If it is a chaotic orbit, then\n\ntextGALI_k(t) sim\nexpleftsum_j=1^k (lambda_1 - lambda_j)t right\n\nwith lambda_j being the j-th Lyapunov exponent (see lyapunov, lyapunovs). If on the other hand the orbit is regular, corresponding to movement in d-dimensional torus with 1 le d le D2 then it holds\n\ntextGALI_k(t) sim\n    begincases\n      textconst  textif  2 le k le d    textand\n       d  1 \n      t^-(k - d)  textif   d  k le D - d \n      t^-(2k - D)  textif   D - d  k le D\n    endcases\n\nTraditionally, if textGALI_k(t) does not become less than the threshold until tmax the given orbit is said to be chaotic, otherwise it is regular.\n\nOur implementation is not based on the original paper, but rather in the method described in [2], which uses the product of the singular values of A, a matrix that has as columns the deviation vectors.\n\nPerformance Notes\n\nThis function uses a tangent_integrator. For loops over initial conditions and/or parameter values one should use the low level method that accepts an integrator, and reinit! it to new initial conditions. See the \"advanced documentation\" for info on the integrator object. The low level method is\n\nChaosTools.gali(tinteg, tmax, dt, threshold)\n\nReferences\n\n[1] : Skokos, C. H. et al., Physica D 231, pp 30–54 (2007)\n\n[2] : Skokos, C. H. et al., Chaos Detection and Predictability - Chapter 5 (section 5.3.1 and ref. [85] therein), Lecture Notes in Physics 915, Springer (2016)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.genentropy-Tuple{Real,Real,AbstractDataset}",
    "page": "Docstrings",
    "title": "ChaosTools.genentropy",
    "category": "method",
    "text": "genentropy(α, ε, dataset::AbstractDataset; base = e)\n\nCompute the α order generalized (Rényi) entropy [1] of a dataset, by first partitioning it into boxes of length ε using non0hist.\n\ngenentropy(α, p::AbstractArray; base = e)\n\nCompute the entropy of an array p directly, assuming that p is sum-normalized.\n\nOptionally use base for the logarithms.\n\nDescription\n\nLet p be an array of probabilities (summing to 1). Then the Rényi entropy is\n\nR_alpha(p) = frac11-alpha log left(sum_i pi^alpharight)\n\nand generalizes other known entropies, like e.g. the information entropy (alpha = 1, see [2]), the maximum entropy (alpha=0, also known as Hartley entropy), or the correlation entropy (alpha = 2, also known as collision entropy).\n\nReferences\n\n[1] : A. Rényi, Proceedings of the fourth Berkeley Symposium on Mathematics, Statistics and Probability, pp 547 (1960)\n\n[2] : C. E. Shannon, Bell Systems Technical Journal 27, pp 379 (1948)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.generalized_dim",
    "page": "Docstrings",
    "title": "ChaosTools.generalized_dim",
    "category": "function",
    "text": "generalized_dim(α, dataset [, sizes]) -> D_α\n\nReturn the α order generalized dimension of the dataset, by calculating the genentropy for each ε ∈ sizes.\n\nDescription\n\nThe returned dimension is approximated by the (inverse) power law exponent of the scaling of the genentropy versus the box size ε, where ε ∈ sizes.\n\nCalling this function performs a lot of automated steps:\n\nA vector of box sizes is decided by calling sizes = estimate_boxsizes(dataset), if sizes is not given.\nFor each element of sizes the appropriate entropy is calculated, through d = genentropy.(α, sizes, dataset). Let x = -log.(sizes).\nThe curve d(x) is decomposed into linear regions, using linear_regions(x, d).\nThe biggest linear region is chosen, and a fit for the slope of that region is performed using the function linear_region. This slope is the return value of generalized_dim.\n\nBy doing these steps one by one yourself, you can adjust the keyword arguments given to each of these function calls, refining the accuracy of the result.\n\nThe following aliases are provided:\n\nα = 0 : boxcounting_dim, capacity_dim\nα = 1 : information_dim\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.information_dim-Tuple",
    "page": "Docstrings",
    "title": "ChaosTools.information_dim",
    "category": "method",
    "text": "informationdim(args...) = generalizeddim(1, args...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.kaplanyorke_dim-Tuple{AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "ChaosTools.kaplanyorke_dim",
    "category": "method",
    "text": "kaplanyorke_dim(lyapunovs::AbstractVector)\n\nCalculate the Kaplan-Yorke dimension, a.k.a. Lyapunov dimension [1].\n\nDescription\n\nThe Kaplan-Yorke dimension is simply the point where cumsum(lyapunovs) becomes zero (interpolated). If the sum of the exponents never becomes negative the function will return the length of the input vector.\n\nUseful in combination with lyapunovs.\n\nReferences\n\n[1] :  J. Kaplan & J. Yorke, Chaotic behavior of multidimensional difference equations, Lecture Notes in Mathematics vol. 730, Springer (1979)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.lambdamatrix-Tuple{Real,AbstractArray{#s19491,1} where #s19491<:Integer,AbstractArray{#s19490,1} where #s19490<:Real}",
    "page": "Docstrings",
    "title": "ChaosTools.lambdamatrix",
    "category": "method",
    "text": "lambdamatrix(λ, inds::Vector{Int}, sings) -> Λk\n\nReturn the matrix mathbfLambda_k used to create a new dynamical system with some unstable fixed points turned to stable in the function periodicorbits.\n\nArguments\n\nλ<:Real : the multiplier of the C_k matrix, with 0<λ<1.\ninds::Vector{Int} : The ith entry of this vector gives the row of the nonzero element of the ith column of C_k.\nsings::Vector{<:Real} : The element of the ith column of C_k is +1 if signs[i] > 0 and -1 otherwise (sings can also be Bool vector).\n\nCalling lambdamatrix(λ, D::Int) creates a random mathbfLambda_k by randomly generating an inds and a signs from all possible combinations. The collections of all these combinations can be obtained from the function lambdaperms.\n\nDescription\n\nEach element of inds must be unique such that the resulting matrix is orthogonal and represents the group of special reflections and permutations.\n\nDeciding the appropriate values for λ, inds, sings is not trivial. However, in ref. [2] there is a lot of information that can help with that decision. Also, by appropriately choosing various values for λ, one can sort periodic orbits from e.g. least unstable to most unstable, see [3] for details.\n\nReferences\n\n[2] : D. Pingel et al., Phys. Rev. E 62, pp 2119 (2000)\n\n[3] : F. K. Diakonos et al., Phys. Rev. Lett. 81, pp 4349 (1998)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.lambdaperms-Tuple{Integer}",
    "page": "Docstrings",
    "title": "ChaosTools.lambdaperms",
    "category": "method",
    "text": "lambdaperms(D) -> indperms, singperms\n\nReturn two collections that each contain all possible combinations of indices (total of D) and signs (total of 2^D) for dimension D (see lambdamatrix).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.linear_region-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "ChaosTools.linear_region",
    "category": "method",
    "text": "linear_region(x, y; dxi::Int = 1, tol = 0.2) -> ([ind1, ind2], slope)\n\nCall linear_regions, identify the largest linear region and approximate the slope of the entire region using linreg. Return the indices where the region starts and stops (x[ind1:ind2]) as well as the approximated slope.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.linear_regions-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "ChaosTools.linear_regions",
    "category": "method",
    "text": "linear_regions(x, y; dxi::Int = 1, tol = 0.2) -> (lrs, tangents)\n\nIdentify regions where the curve y(x) is linear, by scanning the x-axis every dxi indices (e.g. at x[1] to x[5], x[5] to x[10], x[10] to x[15] and so on if dxi=5).\n\nIf the slope (calculated using LsqFit) of a region of width dxi is approximatelly equal to that of the previous region, within tolerance tol, then these two regions belong to the same linear region.\n\nReturn the indices of x that correspond to linear regions, lrs, and the approximated tangents at each region. lrs is a vector of Int.\n\nA function plot_linear_regions visualizes the result of using this linear_regions (requires PyPlot).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.lyapunov-Tuple{DynamicalSystem,Any}",
    "page": "Docstrings",
    "title": "ChaosTools.lyapunov",
    "category": "method",
    "text": "lyapunov(ds::DynamicalSystem, Τ; kwargs...) -> λ\n\nCalculate the maximum Lyapunov exponent λ using a method due to Benettin [1], which simply evolves two neighboring trajectories (one called \"given\" and one called \"test\") while constantly rescaling the test one. T  denotes the total time of evolution (should be Int for discrete systems).\n\nKeyword Arguments\n\nTtr = 0 : Extra \"transient\" time to evolve the trajectories before starting to measure the expontent. Should be Int for discrete systems.\nd0 = 1e-9 : Initial & rescaling distance between the two neighboring trajectories.\nupper_threshold = 1e-6 : Upper distance threshold for rescaling.\nlower_threshold = 1e-12 : Lower distance threshold for rescaling (in order to  be able to detect negative exponents).\ndt = 1 : Time of evolution between each check of distance exceeding the thresholds. For continuous systems this is approximate.\ninittest = (u1, d0) -> u1 .+ d0/sqrt(D) : A function that given (u1, d0) initializes the test state with distance d0 from the given state u1 (D is the dimension of the system). This function can be used when you want to avoid the test state appearing in a region of the phase-space where it would have e.g. different energy or escape to infinity.\ndiffeq... : Keyword arguments propagated into init of DifferentialEquations.jl. See trajectory for examples. Only valid for continuous systems.\n\nDescription\n\nTwo neighboring trajectories with initial distance d0 are evolved in time. At time t_i their distance d(t_i) either exceeds the upper_threshold, or is lower than lower_threshold, which initializes a rescaling of the test trajectory back to having distance d0 from the given one, while the rescaling keeps the difference vector along the maximal expansion/contraction direction: u_2 to u_1+(u_2u_1)(d(t_i)d_0).\n\nThe maximum Lyapunov exponent is the average of the time-local Lyapunov exponents\n\nlambda = frac1t_nsum_i=1^n\nlnleft( a_i right)quad a_i = fracd(t_i)d_0\n\nPerformance Notes\n\nThis function uses a parallel_integrator. For loops over initial conditions and/or parameter values one should use the low level method that accepts an integrator, and reinit! it to new initial conditions. See the \"advanced documentation\" for info on the integrator object. The low level method is\n\nlyapunov(pinteg, T, Ttr, dt, d0, ut, lt)\n\nReferences\n\n[1] : G. Benettin et al., Phys. Rev. A 14, pp 2338 (1976)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.lyapunovs",
    "page": "Docstrings",
    "title": "ChaosTools.lyapunovs",
    "category": "function",
    "text": "lyapunovs(ds::DynamicalSystem, N [, k::Int | Q0]; kwargs...) -> λs\n\nCalculate the spectrum of Lyapunov exponents [1] of ds by applying a QR-decomposition on the parallelepiped matrix N times. Return the spectrum sorted from maximum to minimum.\n\nThe third argument k is optional, and dictates how many lyapunov exponents to calculate (defaults to dimension(ds)). Instead of passing an integer k you can pass a pre-initialized matrix Q0 whose columns are initial deviation vectors (then k = size(Q0)[2]).\n\nKeyword Arguments\n\nu0 = get_state(ds) : State to start from.\nTtr = 0 : Extra \"transient\" time to evolve the system before application of the algorithm. Should be Int for discrete systems. Both the system and the deviation vectors are evolved for this time.\ndt : Time of individual evolutions between successive orthonormalization steps. Defaults to 1. For continuous systems this is approximate.\ndiffeq... : Keyword arguments propagated into init of DifferentialEquations.jl. See trajectory for examples. Only valid for continuous systems.\n\nDescription\n\nThe method we employ is \"H2\" of [2], originally stated in [3]. The deviation vectors defining a D-dimensional parallepiped in tangent space are evolved using the tangent dynamics of the system. A QR-decomposition at each step yields the local growth rate for each dimension of the parallepiped. The growth rates are then averaged over N successive steps, yielding the lyapunov exponent spectrum (at each step the parallepiped is re-normalized).\n\nPerformance Notes\n\nThis function uses a tangent_integrator. For loops over initial conditions and/or parameter values one should use the low level method that accepts an integrator, and reinit! it to new initial conditions. See the \"advanced documentation\" for info on the integrator object. The low level method is\n\nlyapunovs(tinteg, N, dt::Real, Ttr::Real)\n\nIf you want to obtain the convergence timeseries of the Lyapunov spectrum, use the method\n\nChaosTools.lyapunovs_convergence(tinteg, N, dt, Ttr)\n\n(not exported).\n\nReferences\n\n[1] : A. M. Lyapunov, The General Problem of the Stability of Motion, Taylor & Francis (1992)\n\n[2] : K. Geist et al., Progr. Theor. Phys. 83, pp 875 (1990)\n\n[3] : G. Benettin et al., Meccanica 15, pp 9-20 & 21-30 (1980)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.non0hist-Union{Tuple{T}, Tuple{D}, Tuple{Real,AbstractDataset{D,T}}} where T<:Real where D",
    "page": "Docstrings",
    "title": "ChaosTools.non0hist",
    "category": "method",
    "text": "non0hist(ε, dataset::AbstractDataset)\n\nPartition a dataset into tabulated intervals (boxes) of size ε and return the sum-normalized histogram in an unordered 1D form, discarding all zero elements and bin edge information.\n\nPerformances Notes\n\nThis method has a linearithmic time complexity (n log(n) for inn=length(data)) and a linear space complexity (lforl = dimension(data)). This allows computation of entropies of high-dimensional datasets and with small box sizesε` without memory overflow.\n\nUse e.g. fit(Histogram, ...) from StatsBase if you wish to keep information about the edges of the binning as well as the zero elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.numericallyapunov-Union{Tuple{T}, Tuple{D}, Tuple{AbstractDataset{D,T},Any}} where T where D",
    "page": "Docstrings",
    "title": "ChaosTools.numericallyapunov",
    "category": "method",
    "text": "numericallyapunov(R::Dataset, ks;  refstates, w, distance, ntype)\n\nReturn E = [E(k) for k ∈ ks], where E(k) is the average logarithmic distance between states of a neighborhood that are evolved in time for k steps (k must be integer).\n\nKeyword Arguments\n\nrefstates = 1:(length(R) - ks[end]) : Vector of indices that notes which states of the reconstruction should be used as \"reference states\", which means that the algorithm is applied for all state indices contained in refstates.\nw::Int = 1 : The Theiler window, which determines whether points are separated enough in time to be considered separate trajectories (see [1] and neighborhood).\nntype::AbstractNeighborhood = FixedMassNeighborhood(1) : The method to be used when evaluating the neighborhood of each reference state. See AbstractNeighborhood or neighborhood for more info.\ndistance::Metric = Cityblock() : The distance function used in the logarithmic distance of nearby states. The allowed distances are Cityblock() and Euclidean(). See below for more info.\n\nDescription\n\nIf the dataset/reconstruction exhibits exponential divergence of nearby states, then it should clearly hold\n\nE(k) approx lambdaDelta t k + E(0)\n\nfor a well defined region in the k axis, where lambda is the approximated maximum Lyapunov exponent. Delta t is the time between samples in the original timeseries. You can use linear_region with arguments (ks .* Δt, E) to identify the slope (= lambda) immediatelly, assuming you have choosen sufficiently good ks such that the linear scaling region is bigger than the saturated region.\n\nThe algorithm used in this function is due to Parlitz [1], which itself expands upon Kantz [2]. In sort, for each reference state a neighborhood is evaluated. Then, for each point in this neighborhood, the logarithmic distance between reference state and neighborhood state is calculated as the \"time\" index k increases. The average of the above over all neighborhood states over all reference states is the returned result.\n\nIf the Metric is Euclidean() then use the Euclidean distance of the full D-dimensional points (distance d_E in ref. [1]). If however the Metric is Cityblock(), calculate the absolute distance of only the first elements of the m+k and n+k points of the reconstruction R (distance d_F in ref. [1]).\n\nReferences\n\n[1] : Skokos, C. H. et al., Chaos Detection and Predictability - Chapter 1 (section 1.3.2), Lecture Notes in Physics 915, Springer (2016)\n\n[2] : Kantz, H., Phys. Lett. A 185, pp 77–87 (1994)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.orbitdiagram-Union{Tuple{D}, Tuple{S}, Tuple{IIP}, Tuple{DiscreteDynamicalSystem{IIP,S,D,F,P,JAC,JM,IAD} where IAD where JM where JAC where P where F,Any,Any,Any}} where D where S where IIP",
    "page": "Docstrings",
    "title": "ChaosTools.orbitdiagram",
    "category": "method",
    "text": "orbitdiagram(ds::DiscreteDynamicalSystem, i, p_index, pvalues; kwargs...)\n\nCompute the orbit diagram (also called bifurcation diagram) of the given system, saving the i variable(s) for parameter values pvalues. The p_index specifies which parameter of the equations of motion is to be changed.\n\ni can be Int or AbstractVector{Int}. If i is Int, returns a vector of vectors. Else it returns vectors of vectors of vectors. Each entry are the points at each parameter value.\n\nKeyword Arguments\n\nTtr::Int = 1000 : Transient steps; each orbit is evolved for Ttr first before saving output.\nn::Int = 100 : Amount of points to save for each initial condition.\ndt = 1 : Stepping time. Changing this will give you the orbit diagram of the dt order map.\nu0 = get_state(ds) : Initial condition. Besides a vector you can also give a vector of vectors such that length(u0) == length(pvalues). Then each parameter has a different initial condition.\n\nSee also poincaresos and produce_orbitdiagram.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.periodicorbits-Union{Tuple{S}, Tuple{DiscreteDynamicalSystem{false,S,D,F,P,JAC,JM,IAD} where IAD where JM where JAC where P where F where D,Int64,Any,Any,Any,Any}} where S",
    "page": "Docstrings",
    "title": "ChaosTools.periodicorbits",
    "category": "method",
    "text": "periodicorbits(ds::DiscreteDynamicalSystem,\n               o, ics [, λs, indss, singss]; kwargs...) -> FP\n\nFind fixed points FP of order o for the map ds using the algorithm due to Schmelcher & Diakonos [1]. ics is a collection of initial conditions (container of vectors) to be evolved.\n\nOptional Arguments\n\nThe optional arguments λs, indss, singss must be containers of appropriate values, besides λs which can also be a number. The elements of those containers are passed to: lambdamatrix(λ, inds, sings), which creates the appropriate mathbfLambda_k matrix. If these arguments are not given, a random permutation will be chosen for them, with λ=0.001.\n\nKeyword Arguments\n\nmaxiters::Int = 100000 : Maximum amount of iterations an i.c. will be iterated  before claiming it has not converged.\ndisttol = 1e-10 : Distance tolerance. If the 2-norm of a previous state with  the next one is ≤ disttol then it has converged to a fixed point.\ninftol = 10.0 : If a state reaches norm(state) ≥ inftol it is assumed that  it has escaped to infinity (and is thus abandoned).\nroundtol::Int = 4 : The found fixed points are rounded  to roundtol digits before pushed into the list of returned fixed points FP,  if they are not already contained in FP.  This is done so that FP doesn\'t contain duplicate fixed points (notice  that this has nothing to do with disttol). Turn this to typemax(Int)  to get the full precision of the algorithm.\n\nDescription\n\nThe algorithm used can detect periodic orbits by turning fixed points of the original map ds to stable ones, through the transformation\n\nmathbfx_n+1 = mathbfx_n +\nmathbfLambda_kleft(f^(o)(mathbfx_n) - mathbfx_nright)\n\nwith f = eom. The index k counts the various possible mathbfLambda_k.\n\nPerformance Notes\n\nAll initial conditions are evolved for all mathbfLambda_k which can very quickly lead to long computation times.\n\nReferences\n\n[1] : P. Schmelcher & F. K. Diakonos, Phys. Rev. Lett. 78, pp 4733 (1997)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.permentropy-Union{Tuple{T}, Tuple{AbstractArray{T,1},Integer}, Tuple{AbstractArray{T,1},Integer,Integer}} where T",
    "page": "Docstrings",
    "title": "ChaosTools.permentropy",
    "category": "method",
    "text": "permentropy(x::AbstractVector, order [, interval=1]; base = e)\n\nCompute the permutation entropy [1] of given order from the x timeseries.\n\nOptionally, interval can be specified to use x[t0:interval:t1] when calculating permutation of the sliding windows between t0 and t1 = t0 + interval * (order - 1).\n\nOptionally use base for the logarithms.\n\nReferences\n\n[1] : C. Bandt, & B. Pompe, Phys. Rev. Lett. 88 (17), pp 174102 (2002)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.poincaresos-Union{Tuple{D}, Tuple{S}, Tuple{IIP}, Tuple{ContinuousDynamicalSystem{IIP,S,D,F,P,JAC,JM,IAD} where IAD where JM where JAC where P where F,Any}, Tuple{ContinuousDynamicalSystem{IIP,S,D,F,P,JAC,JM,IAD} where IAD where JM where JAC where P where F,Any,Any}} where D where S where IIP",
    "page": "Docstrings",
    "title": "ChaosTools.poincaresos",
    "category": "method",
    "text": "poincaresos(ds::ContinuousDynamicalSystem, plane, tfinal = 1000.0; kwargs...)\n\nCalculate the Poincaré surface of section (also called Poincaré map) [1, 2] of the given system with the given plane. The system is evolved for total time of tfinal.\n\nIf the state of the system is mathbfu = (u_1 ldots u_D) then the equation intersecting the hyperplane is\n\na_1u_1 + dots + a_Du_D = mathbfacdotmathbfu=b\n\nwhere mathbfa b are the parameters that define the hyperplane.\n\nIn code, plane can be either:\n\nA Tuple{Int, <: Number}, like (j, r) : the planecrossing is defined as when the j variable of the system crosses the value r.\nA vector of length D+1. The first D elements of the vector correspond to mathbfa while the last element is b.\n\nReturns a Dataset of the points that are on the surface of section.\n\nKeyword Arguments\n\ndirection = -1 : Only crossings with sign(direction) are considered to belong to the surface of section. Positive direction means going from less than b to greater than b.\nidxs = 1:dimension(ds) : Optionally you can choose which variables to save. Defaults to the entire state.\nTtr = 0.0 : Transient time to evolve the system before starting to compute the PSOS.\nu0 = get_state(ds) : Specify an initial state.\nwarning = true : Throw a warning if the Poincaré section was empty.\nrootkw = (xrtol = 1e-6, atol = 1e-6) : A NamedTuple of keyword arguments passed to find_zero from Roots.jl.\ndiffeq... : All other extra keyword arguments are propagated into init of DifferentialEquations.jl. See trajectory for examples.\n\nReferences\n\n[1] : H. Poincaré, Les Methods Nouvelles de la Mécanique Celeste, Paris: Gauthier-Villars (1892)\n\n[2] : M. Tabor, Chaos and Integrability in Nonlinear Dynamics: An Introduction, §4.1, in pp. 118-126, New York: Wiley (1989)\n\nSee also orbitdiagram, produce_orbitdiagram.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.produce_orbitdiagram-Union{Tuple{D}, Tuple{S}, Tuple{IIP}, Tuple{ContinuousDynamicalSystem{IIP,S,D,F,P,JAC,JM,IAD} where IAD where JM where JAC where P where F,Any,Any,Any,Any}} where D where S where IIP",
    "page": "Docstrings",
    "title": "ChaosTools.produce_orbitdiagram",
    "category": "method",
    "text": "produce_orbitdiagram(ds::ContinuousDynamicalSystem, plane, i::Int,\n                     p_index, pvalues; kwargs...)\n\nProduce an orbit diagram (also called bifurcation diagram) for the i variable(s) of the given continuous system by computing Poincaré surfaces of section using plane for the given parameter values (see poincaresos).\n\ni can be Int or AbstractVector{Int}. If i is Int, returns a vector of vectors. Else it returns vectors of vectors of vectors. Each entry are the points at each parameter value.\n\nKeyword Arguments\n\nprintparams::Bool = false : Whether to print the parameter used during computation in order to keep track of running time.\ndirection, warning, Ttr, rootkw, diffeq... : Propagated into poincaresos.\nu0 = get_state(ds) : Initial condition. Besides a vector you can also give a vector of vectors such that length(u0) == length(pvalues). Then each parameter has a different initial condition.\n\nDescription\n\nFor each parameter, a PSOS reduces the system from a flow to a map. This then allows the formal computation of an \"orbit diagram\" for the i variable of the system, just like it is done in orbitdiagram.\n\nThe parameter change is done as p[p_index] = value taking values from pvalues and thus you must use a parameter container that supports this (either Array, LMArray, dictionary or other).\n\nSee also poincaresos, orbitdiagram.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ChaosTools.max_linear_region-Tuple{Array{Int64,1},Array{Float64,1}}",
    "page": "Docstrings",
    "title": "ChaosTools.max_linear_region",
    "category": "method",
    "text": "max_linear_region(lrs::Vector{Int}, tangents::Vector{Float64})\n\nFind the biggest linear region and return it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ChaosTools]\nOrder = [:type, :function]"
},

]}
