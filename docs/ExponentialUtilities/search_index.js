var documenterSearchIndex = {"docs": [

{
    "location": "#ExponentialUtilities.KrylovSubspace",
    "page": "Home",
    "title": "ExponentialUtilities.KrylovSubspace",
    "category": "type",
    "text": "KrylovSubspace{T}(n,[maxiter=30]) -> Ks\n\nConstructs an uninitialized Krylov subspace, which can be filled by arnoldi!.\n\nThe dimension of the subspace, Ks.m, can be dynamically altered but should be smaller than maxiter, the maximum allowed arnoldi iterations.\n\ngetV(Ks) -> V\ngetH(Ks) -> H\n\nAccess methods for the (extended) orthonormal basis V and the (extended) Gram-Schmidt coefficients H. Both methods return a view into the storage arrays and has the correct dimensions as indicated by Ks.m.\n\nresize!(Ks, maxiter) -> Ks\n\nResize Ks to a different maxiter, destroying its contents.\n\nThis is an expensive operation and should be used scarcely.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.arnoldi!-Union{Tuple{U}, Tuple{T}, Tuple{B}, Tuple{KrylovSubspace{B,T,U},Any,AbstractArray{T,1}}} where U<:Number where T<:Number where B",
    "page": "Home",
    "title": "ExponentialUtilities.arnoldi!",
    "category": "method",
    "text": "arnoldi!(Ks,A,b[;tol,m,opnorm,iop]) -> Ks\n\nNon-allocating version of arnoldi.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.arnoldi-Tuple{Any,Any}",
    "page": "Home",
    "title": "ExponentialUtilities.arnoldi",
    "category": "method",
    "text": "arnoldi(A,b[;m,tol,opnorm,iop]) -> Ks\n\nPerforms m anoldi iterations to obtain the Krylov subspace K_m(A,b).\n\nThe n x (m + 1) basis vectors getV(Ks) and the (m + 1) x m upper Hessenberg matrix getH(Ks) are related by the recurrence formula\n\nv_1=b,\\quad Av_j = \\sum_{i=1}^{j+1}h_{ij}v_i\\quad(j = 1,2,\\ldots,m)\n\niop determines the length of the incomplete orthogonalization procedure [1]. The default value of 0 indicates full Arnoldi. For symmetric/Hermitian A, iop will be ignored and the Lanczos algorithm will be used instead.\n\nRefer to KrylovSubspace for more information regarding the output.\n\nHappy-breakdown occurs whenver norm(v_j) < tol * opnorm, in this case the dimension of Ks is smaller than m.\n\n[1]: Koskela, A. (2015). Approximating the matrix exponential of an\n\nadvection-diffusion operator using the incomplete orthogonalization method. In Numerical Mathematics and Advanced Applications-ENUMATH 2013 (pp. 345-353). Springer, Cham.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.expv!-Union{Tuple{HSC}, Tuple{T}, Tuple{B}, Tuple{AbstractArray{T,1},Number,Any,AbstractArray{T,1},KrylovSubspace{B,T,B},HSC}} where HSC<:ExponentialUtilities.HermitianSubspaceCache where T<:Number where B",
    "page": "Home",
    "title": "ExponentialUtilities.expv!",
    "category": "method",
    "text": "expv!(w, t, A, b, Ks, cache)\n\nAlternative interface for calculating the action of exp(t*A) on the vector b, storing the result in w. The Krylov iteration is terminated when an error estimate for the matrix exponential in the generated subspace is below the requested tolerance. Ks is a KrylovSubspace and typeof(cache)<:HermitianSubspaceCache, the exact type decides which algorithm is used to compute the subspace exponential.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.expv!-Union{Tuple{U}, Tuple{T}, Tuple{B}, Tuple{AbstractArray{T,1},Number,KrylovSubspace{B,T,U}}} where U<:Number where T<:Number where B",
    "page": "Home",
    "title": "ExponentialUtilities.expv!",
    "category": "method",
    "text": "expv!(w,t,Ks[;cache]) -> w\n\nNon-allocating version of expv that uses precomputed Krylov subspace Ks.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.expv-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ExponentialUtilities.expv",
    "category": "method",
    "text": "expv(t,A,b; kwargs) -> exp(tA)b\n\nCompute the matrix-exponential-vector product using Krylov.\n\nA Krylov subspace is constructed using arnoldi and exp! is called on the Hessenberg matrix. Consult arnoldi for the values of the keyword arguments. An alternative algorithm, where an error estimate generated on-the-fly is used to terminate the Krylov iteration, can be employed by setting the kwarg mode=:error_estimate.\n\nexpv(t,Ks; cache) -> exp(tA)b\n\nCompute the expv product using a pre-constructed Krylov subspace.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.expv_timestep!-Union{Tuple{tType}, Tuple{T}, Tuple{AbstractArray{T,1},tType,Any,AbstractArray{T,1}}} where tType<:Real where T<:Number",
    "page": "Home",
    "title": "ExponentialUtilities.expv_timestep!",
    "category": "method",
    "text": "expv_timestep!(u,t,A,b[;kwargs]) -> u\n\nNon-allocating version of expv_timestep.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.expv_timestep-Union{Tuple{tType}, Tuple{Array{tType,1},Any,Any}} where tType<:Real",
    "page": "Home",
    "title": "ExponentialUtilities.expv_timestep",
    "category": "method",
    "text": "exp_timestep(ts,A,b[;adaptive,tol,kwargs...]) -> U\n\nEvaluates the matrix exponentiation-vector product using time stepping\n\nu = exp(tA)b\n\nts is an array of time snapshots for u, with U[:,j] ≈ u(ts[j]). ts can also be just one value, in which case only the end result is returned and U is a vector.\n\nThe time stepping formula of Niesen & Wright is used [1]. If the time step tau is not specified, it is chosen according to (17) of Neisen & Wright. If adaptive==true, the time step and Krylov subsapce size adaptation scheme of Niesen & Wright is used, the relative tolerance of which can be set using the keyword parameter tol. The delta and gamma parameter of the adaptation scheme can also be adjusted.\n\nSet verbose=true to print out the internal steps (for debugging). For the other keyword arguments, consult arnoldi and phiv, which are used internally.\n\nNote that this function is just a special case of phiv_timestep with a more intuitive interface (vector b instead of a n-by-1 matrix B).\n\n[1]: Niesen, J., & Wright, W. (2009). A Krylov subspace algorithm for\n\nevaluating the φ-functions in exponential integrators. arXiv preprint arXiv:0907.4631.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.lanczos!-Union{Tuple{U}, Tuple{T}, Tuple{B}, Tuple{KrylovSubspace{B,T,U},Any,AbstractArray{T,1}}} where U<:Number where T<:Number where B",
    "page": "Home",
    "title": "ExponentialUtilities.lanczos!",
    "category": "method",
    "text": "lanczos!(Ks,A,b[;tol,m,opnorm]) -> Ks\n\nA variation of arnoldi! that uses the Lanczos algorithm for Hermitian matrices.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.phi!-Union{Tuple{T}, Tuple{Array{Array{T,2},1},AbstractArray{T,2},Integer}} where T<:Number",
    "page": "Home",
    "title": "ExponentialUtilities.phi!",
    "category": "method",
    "text": "phi!(out,A,k[;caches]) -> out\n\nNon-allocating version of phi for non-diagonal matrix inputs.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.phi-Union{Tuple{T}, Tuple{AbstractArray{T,2},Any}} where T<:Number",
    "page": "Home",
    "title": "ExponentialUtilities.phi",
    "category": "method",
    "text": "phi(A,k[;cache]) -> [phi_0(A),phi_1(A),...,phi_k(A)]\n\nCompute the matrix phi functions for all orders up to k. k >= 1.\n\nThe phi functions are defined as\n\nvarphi_0(z) = exp(z)quad varphi_k+1(z) = fracvarphi_k(z) - 1z\n\nCalls phiv_dense on each of the basis vectors to obtain the answer. If A is Diagonal, instead calls the scalar phi on each diagonal element and the return values are also Diagonals\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.phi-Union{Tuple{T}, Tuple{T,Integer}} where T<:Number",
    "page": "Home",
    "title": "ExponentialUtilities.phi",
    "category": "method",
    "text": "phi(z,k[;cache]) -> [phi_0(z),phi_1(z),...,phi_k(z)]\n\nCompute the scalar phi functions for all orders up to k.\n\nThe phi functions are defined as\n\nvarphi_0(z) = exp(z)quad varphi_k+1(z) = fracvarphi_k(z) - 1z\n\nInstead of using the recurrence relation, which is numerically unstable, a formula given by Sidje is used (Sidje, R. B. (1998). Expokit: a software package for computing matrix exponentials. ACM Transactions on Mathematical Software (TOMS), 24(1), 130-156. Theorem 1).\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.phiv!-Union{Tuple{U}, Tuple{T}, Tuple{B}, Tuple{AbstractArray{T,2},Number,KrylovSubspace{B,T,U},Integer}} where U<:Number where T<:Number where B",
    "page": "Home",
    "title": "ExponentialUtilities.phiv!",
    "category": "method",
    "text": "phiv!(w,t,Ks,k[;cache,correct,errest]) -> w[,errest]\n\nNon-allocating version of \'phiv\' that uses precomputed Krylov subspace Ks.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.phiv-NTuple{4,Any}",
    "page": "Home",
    "title": "ExponentialUtilities.phiv",
    "category": "method",
    "text": "phiv(t,A,b,k;correct,kwargs) -> [phi_0(tA)b phi_1(tA)b ... phi_k(tA)b][, errest]\n\nCompute the matrix-phi-vector products using Krylov. k >= 1.\n\nThe phi functions are defined as\n\nvarphi_0(z) = exp(z)quad varphi_k+1(z) = fracvarphi_k(z) - 1z\n\nA Krylov subspace is constructed using arnoldi and phiv_dense is called on the Hessenberg matrix. If correct=true, then phi0 through phik-1 are updated using the last Arnoldi vector v_m+1 [1]. If errest=true then an additional error estimate for the second-to-last phi is also returned. For the additional keyword arguments, consult arnoldi.\n\nphiv(t,Ks,k;correct,kwargs) -> [phi0(tA)b phi1(tA)b ... phi_k(tA)b][, errest]\n\nCompute the matrix-phi-vector products using a pre-constructed Krylov subspace.\n\n[1]: Niesen, J., & Wright, W. (2009). A Krylov subspace algorithm for evaluating\n\nthe φ-functions in exponential integrators. arXiv preprint arXiv:0907.4631. Formula (10).\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.phiv_timestep!-Union{Tuple{tType}, Tuple{T}, Tuple{AbstractArray{T,1},tType,Any,AbstractArray{T,2}}} where tType<:Real where T<:Number",
    "page": "Home",
    "title": "ExponentialUtilities.phiv_timestep!",
    "category": "method",
    "text": "phiv_timestep!(U,ts,A,B[;kwargs]) -> U\n\nNon-allocating version of phiv_timestep.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.phiv_timestep-Union{Tuple{tType}, Tuple{Array{tType,1},Any,Any}} where tType<:Real",
    "page": "Home",
    "title": "ExponentialUtilities.phiv_timestep",
    "category": "method",
    "text": "phiv_timestep(ts,A,B[;adaptive,tol,kwargs...]) -> U\n\nEvaluates the linear combination of phi-vector products using time stepping\n\nu = varphi_0(tA)b_0 + tvarphi_1(tA)b_1 + cdots + t^pvarphi_p(tA)b_p\n\nts is an array of time snapshots for u, with U[:,j] ≈ u(ts[j]). ts can also be just one value, in which case only the end result is returned and U is a vector.\n\nThe time stepping formula of Niesen & Wright is used [1]. If the time step tau is not specified, it is chosen according to (17) of Neisen & Wright. If adaptive==true, the time step and Krylov subsapce size adaptation scheme of Niesen & Wright is used, the relative tolerance of which can be set using the keyword parameter tol. The delta and gamma parameter of the adaptation scheme can also be adjusted.\n\nSet verbose=true to print out the internal steps (for debugging). For the other keyword arguments, consult arnoldi and phiv, which are used internally.\n\n[1]: Niesen, J., & Wright, W. (2009). A Krylov subspace algorithm for\n\nevaluating the φ-functions in exponential integrators. arXiv preprint arXiv:0907.4631.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.arnoldi_step!-Union{Tuple{U}, Tuple{T}, Tuple{Integer,Integer,Any,AbstractArray{T,2},AbstractArray{U,2}}} where U where T",
    "page": "Home",
    "title": "ExponentialUtilities.arnoldi_step!",
    "category": "method",
    "text": "arnoldi_step!(j, iop, n, A, V, H)\n\nTake the j:th step of the Lanczos iteration.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.coeff-Union{Tuple{T}, Tuple{Type{T},T}} where T",
    "page": "Home",
    "title": "ExponentialUtilities.coeff",
    "category": "method",
    "text": "coeff(::Type,α)\n\nHelper functions that returns the real part if that is what is required (for Hermitian matrices), otherwise returns the value as-is.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.expT!-Union{Tuple{R}, Tuple{T}, Tuple{AbstractArray{R,1},AbstractArray{R,1},Number,StegrCache{T,R}}} where R<:Real where T",
    "page": "Home",
    "title": "ExponentialUtilities.expT!",
    "category": "method",
    "text": "expT!(α, β, t, cache)\n\nCalculate the subspace exponential exp(t*T) for a tridiagonal subspace matrix T with α on the diagonal and β on the super-/subdiagonal, diagonalizing via stegr!.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.lanczos_step!-Union{Tuple{U}, Tuple{T}, Tuple{B}, Tuple{Integer,Any,AbstractArray{T,2},AbstractArray{U,1},AbstractArray{B,1}}} where U where T where B",
    "page": "Home",
    "title": "ExponentialUtilities.lanczos_step!",
    "category": "method",
    "text": "lanczos_step!(j, m, n, A, V, H)\n\nTake the j:th step of the Lanczos iteration.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.phiv_dense!-Union{Tuple{T}, Tuple{AbstractArray{T,2},AbstractArray{T,2},AbstractArray{T,1},Integer}} where T<:Number",
    "page": "Home",
    "title": "ExponentialUtilities.phiv_dense!",
    "category": "method",
    "text": "phiv_dense!(w,A,v,k[;cache]) -> w\n\nNon-allocating version of phiv_dense.\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.phiv_dense-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ExponentialUtilities.phiv_dense",
    "category": "method",
    "text": "phiv_dense(A,v,k[;cache]) -> [phi_0(A)v phi_1(A)v ... phi_k(A)v]\n\nCompute the matrix-phi-vector products for small, dense A. k` >= 1.\n\nThe phi functions are defined as\n\nvarphi_0(z) = exp(z)quad varphi_k+1(z) = fracvarphi_k(z) - 1z\n\nInstead of using the recurrence relation, which is numerically unstable, a formula given by Sidje is used (Sidje, R. B. (1998). Expokit: a software package for computing matrix exponentials. ACM Transactions on Mathematical Software (TOMS), 24(1), 130-156. Theorem 1).\n\n\n\n\n\n"
},

{
    "location": "#ExponentialUtilities.realview-Union{Tuple{C}, Tuple{R}, Tuple{Type{R},AbstractArray{C,1}}} where C<:Complex where R",
    "page": "Home",
    "title": "ExponentialUtilities.realview",
    "category": "method",
    "text": "realview(::Type, V) -> real view of `V`\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ExponentialUtilities]\nOrder = [:type, :function]"
},

]}
