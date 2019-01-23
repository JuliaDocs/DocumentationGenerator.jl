var documenterSearchIndex = {"docs": [

{
    "location": "#DatagenCopulaBased.archcopulagen-Tuple{Int64,Int64,Union{Float64, Int64},String}",
    "page": "Home",
    "title": "DatagenCopulaBased.archcopulagen",
    "category": "method",
    "text": "archcopulagen(t::Int, n::Int, θ::Union{Float64, Int}, copula::String; rev::Bool = false)\n\nReturns: t x n Matrix{Float}, t realisations of n-variate data generated from Archimedean one parameter copula.\n\nFollowing copula families are supported: clayton, frank, gumbel and amh – Ali-Mikhail-Haq.\n\nIf rev == true, reverse the copula output i.e. u → 1-u (we call it reversed copula). It cor == pearson, kendall, uses correlation coeficient as a parameter\n\n```jldoctest julia> Random.seed!(43);\n\njulia> archcopulagen(10, 2, 1, \"clayton\") 10×2 Array{Float64,2}:  0.770331  0.932834  0.472847  0.0806845  0.970749  0.653029  0.622159  0.0518025  0.402461  0.228549  0.946375  0.842883  0.809076  0.129038  0.747983  0.433829  0.374341  0.437269  0.973066  0.910103\n\n```\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.chainfrechetcopulagen",
    "page": "Home",
    "title": "DatagenCopulaBased.chainfrechetcopulagen",
    "category": "function",
    "text": "chainfrechetcopulagen(t::Int, α::Vector{Float64}, β::Vector{Float64} = zeros(α))\n\nRetenares data from a chain of bivariate two parameter frechet copuls with parameters vectors α and β, such that ∀ᵢ 0 α[i] + β[i] ≤1 α[i] > 0, and β[i] > 0 |α| = |β|\n\njulia> Random.seed!(43)\n\njulia> julia> chainfrechetcopulagen(10, [0.6, 0.4], [0.3, 0.5])\n10×3 Array{Float64,2}:\n 0.996764  0.996764  0.996764\n 0.204033  0.795967  0.204033\n 0.979901  0.979901  0.0200985\n 0.120669  0.879331  0.120669\n 0.453027  0.453027  0.453027\n 0.800909  0.199091  0.800909\n 0.54892   0.54892   0.54892\n 0.933832  0.933832  0.0661679\n 0.396943  0.396943  0.396943\n 0.804096  0.851275  0.955881\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.cormatgen",
    "page": "Home",
    "title": "DatagenCopulaBased.cormatgen",
    "category": "function",
    "text": "cormatgen(n::Int, ρ::Float64 = 0.5, ordered::Bool = false, altersing::Bool = true)\n\nReturns symmetric correlation matrix Σ of size n x n, with reference correlation 0 < ρ < 1. If ordered = false, Σ elements varies arround ρ, i.e. σᵢⱼ ≈ ρ+δ else they drop as indices differences rise, i.e. σᵢⱼ ≳ σᵢₖ as |i-j| < |i-k|. If altersing = true, some σ are positive and some negative, else ∀ᵢⱼ σᵢⱼ ≥ 0.\n\njulia> Random.seed!(43);\n\njulia> julia> cormatgen(2)\n2×2 Array{Float64,2}:\n 1.0       0.660768\n 0.660768  1.0\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.frechetcopulagen-Tuple{Int64,Int64,Union{Float64, Int64},Union{Float64, Int64}}",
    "page": "Home",
    "title": "DatagenCopulaBased.frechetcopulagen",
    "category": "method",
    "text": "frechetcopulagen(t::Int, n::Int, α::Union{Int, Float64}, β::Union{Int, Float64})\n\nTwo parameters Frechet copula C = α C{max} + β C{min} + (1- α - β) C_{⟂}, supported only for n == 2\n\njulia> Random.seed!(43);\n\njulia> frechetcopulagen(10, 2, 0.4, 0.2)\n10×2 Array{Float64,2}:\n 0.180975  0.661781\n 0.775377  0.775377\n 0.888934  0.125437\n 0.924876  0.924876\n 0.408278  0.591722\n 0.912603  0.740184\n 0.828727  0.171273\n 0.400537  0.0288987\n 0.429437  0.429437\n 0.955881  0.851275\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.frechetcopulagen-Tuple{Int64,Int64,Union{Float64, Int64}}",
    "page": "Home",
    "title": "DatagenCopulaBased.frechetcopulagen",
    "category": "method",
    "text": "frechetcopulagen(t::Int, n::Int, α::Union{Int, Float64})\n\nReturns t realisation of n variate data generated from one parameter frechet multidimentional copula, a combination of maximal copla with  weight α and independent copula with  weight 1-α\n\njulia> Random.seed!(43);\n\njulia> frechetcopulagen(10, 2, 0.5)\n10×2 Array{Float64,2}:\n 0.180975  0.661781\n 0.775377  0.775377\n 0.888934  0.125437\n 0.924876  0.924876\n 0.408278  0.408278\n 0.912603  0.740184\n 0.828727  0.00463791\n 0.400537  0.0288987\n 0.429437  0.429437\n 0.955881  0.851275\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.gausscopulagen",
    "page": "Home",
    "title": "DatagenCopulaBased.gausscopulagen",
    "category": "function",
    "text": "gausscopulagen(t::Int, Σ::Matrix{Float64} = [1. 0.5; 0.5 1.])\n\nReturns: t x n matrix of t realisations of multivariate data generated using gaussian copula with Σ - correlation matrix. If the symmetric covariance matrix is imputed, it will be converted into a correlation matrix automatically.\n\n\njulia> Random.seed!(43);\n\njulia> gausscopulagen(10)\n10×2 Array{Float64,2}:\n 0.589188  0.815308\n 0.708285  0.924962\n 0.747341  0.156994\n 0.227634  0.183116\n 0.227575  0.957376\n 0.271558  0.364803\n 0.445691  0.52792\n 0.585362  0.23135\n 0.498593  0.48266\n 0.190283  0.594451\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.gcop2arch-Tuple{Array{Float64,2},Array{Pair{String,Array{Int64,1}},1}}",
    "page": "Home",
    "title": "DatagenCopulaBased.gcop2arch",
    "category": "method",
    "text": "gcop2arch(x::Matrix{Float64}, inds::VP)\n\nTakes x ∈ Rᵗˣⁿ a matrix of t realisations of data from Gaussin n-variate distribution. Return a matrix of size x, where chosen subset of marginals (inds[i][2]) has an Archimedean sub-copula (denoted by inds[i][1]), all univariate marginals are unchanged. e.g. inds = [\"clayton\" => [1,2]] a subset of marginals indexed by 1,2 to such with Clayton sub-copula\n\n\njulia> Σ = [1. 0.5 0.5; 0.5 1. 0.5; 0.5 0.5 1];\n\njulia> Random.seed!(42)\n\njulia> x = rand(MvNormal(Σ), 6)\'\n6×3 Array{Float64,2}:\n -0.556027  -0.662861   -0.384124\n -0.299484   1.38993    -0.571326\n -0.468606  -0.0990787  -2.3464\n  1.00331    1.43902     0.966819\n  0.518149   1.55065     0.989712\n -0.886205   0.149748   -1.54419\n\njulia> gcop2arch(x, [\"clayton\" => [1,2]]; naive::Bool = false, notnested::Bool = false)\n6×3 Array{Float64,2}:\n -0.742443   0.424851  -0.384124\n  0.211894   0.195774  -0.571326\n -0.989417  -0.299369  -2.3464\n  0.157683   1.47768    0.966819\n  0.154893   0.893253   0.989712\n -0.657297  -0.339814  -1.54419\n\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.gcop2frechet-Tuple{Array{Float64,2},Array{Int64,1}}",
    "page": "Home",
    "title": "DatagenCopulaBased.gcop2frechet",
    "category": "method",
    "text": "gcop2frechet(x::Matrix{Float64}, inds::VP)\n\nTakes x ∈ Rᵗˣⁿ a matrix of t realisations of data from Gaussin n-variate distribution. Return a matrix of size x, where chosen subset of marginals (inds) has Frechet maximal sub-copula, all univariate marginals are unchanged.\n\n\njulia> Σ = [1. 0.5 0.5; 0.5 1. 0.5; 0.5 0.5 1];\n\njulia> Random.seed!(42)\n\njulia> x = rand(MvNormal(Σ), 6)\'\n6×3 Array{Float64,2}:\n -0.556027  -0.662861   -0.384124\n -0.299484   1.38993    -0.571326\n -0.468606  -0.0990787  -2.3464\n  1.00331    1.43902     0.966819\n  0.518149   1.55065     0.989712\n -0.886205   0.149748   -1.54419\n\njulia> gcop2frechet(x, [1,2]; naive = false)\n6×3 Array{Float64,2}:\n -0.875777   -0.374723   -0.384124\n  0.0960334   0.905703   -0.571326\n -0.599792   -0.0110945  -2.3464\n  0.813717    1.8513      0.966819\n  0.599255    1.56873     0.989712\n -0.7223     -0.172507   -1.54419\n\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.gcop2marshallolkin",
    "page": "Home",
    "title": "DatagenCopulaBased.gcop2marshallolkin",
    "category": "function",
    "text": "gcop2marshallolkin(x::Matrix{Float64}, inds::Vector{Int}, λ1::Float64 = 1., λ2::Float64 = 1.5; naive::Bool = false)\n\nTakes x ∈ Rᵗˣⁿ a matrix of t realisations of data from Gaussin n-variate distribution. Return a matrix of size x, where chosen subset of marginals (inds) has bivariate Marshal Olkin sub-copula parametrised by free parameters λ1 and λ2. All univariate marginals are unchanged.\n\n\njulia> Σ = [1. 0.5 0.5; 0.5 1. 0.5; 0.5 0.5 1];\n\njulia> Random.seed!(42)\n\njulia> x = rand(MvNormal(Σ), 6)\'\n6×3 Array{Float64,2}:\n -0.556027  -0.662861   -0.384124\n -0.299484   1.38993    -0.571326\n -0.468606  -0.0990787  -2.3464\n  1.00331    1.43902     0.966819\n  0.518149   1.55065     0.989712\n -0.886205   0.149748   -1.54419\n\njulia> gcop2marshallolkin(x, [1,2], 1., 1.5; naive = false)\n6×3 Array{Float64,2}:\n -0.790756   0.784371  -0.384124\n -0.28088    0.338086  -0.571326\n -0.90688   -0.509684  -2.3464\n  0.738628   1.71026    0.966819\n  0.353654   1.19357    0.989712\n -0.867606  -0.589929  -1.54419\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.gcop2tstudent-Tuple{Array{Float64,2},Array{Int64,1},Int64}",
    "page": "Home",
    "title": "DatagenCopulaBased.gcop2tstudent",
    "category": "method",
    "text": "gcop2tstudent(x::Matrix{Float64}, ind::Vector{Int}, ν::Int)\n\nTakes x ∈ Rᵗˣⁿ a matrix of t realisations of data from Gaussin n-variate distribution.   Return a matrix of size x, where chosen subset of marginals (ind) has a    t-Student copula with ν degrees of freedom, all univariate marginals are    unchanged\n\n\njulia> Σ = [1. 0.5 0.5; 0.5 1. 0.5; 0.5 0.5 1];\n\njulia> Random.seed!(42)\n\njulia> x = rand(MvNormal(Σ), 6)\'\n6×3 Array{Float64,2}:\n -0.556027  -0.662861   -0.384124\n -0.299484   1.38993    -0.571326\n -0.468606  -0.0990787  -2.3464\n  1.00331    1.43902     0.966819\n  0.518149   1.55065     0.989712\n -0.886205   0.149748   -1.54419\n\njulia> gcop2tstudent(x, [1,2], 6)\n6×3 Array{Float64,2}:\n -0.514449  -0.49147    -0.384124\n -0.377933   1.66254    -0.571326\n -0.430426  -0.0165044  -2.3464\n  0.928668   1.50472     0.966819\n  0.223439   1.12372     0.989712\n -0.710786   0.239012   -1.54419\n\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.marshallolkincopulagen",
    "page": "Home",
    "title": "DatagenCopulaBased.marshallolkincopulagen",
    "category": "function",
    "text": "marshallolkincopulagen(t::Int, λ::Vector{Float64})\n\nReturns: t x n Matrix{Float}, t realisations of n-variate data generated from Marshall-Olkin copula with parameter vector λ of non-negative elements λₛ. Number of marginals is n = ceil(Int, log(2, length(λ)-1)). Parameters are ordered as follow: λ = [λ₁, λ₂, ..., λₙ, λ₁₂, λ₁₃, ..., λ₁ₙ, λ₂₃, ..., λₙ₋₁ₙ, λ₁₂₃, ..., λ₁₂...ₙ] If reversed = true, returns data from reversed Marshall-Olkin copula.\n\n```jldoctest\n\njulia> Random.seed!(43)\n\njulia> marshallolkincopulagen(10, [0.2, 1.2, 1.6]) 10×2 Array{Float64,2}:  0.99636   0.994344  0.167268  0.0619408  0.977418  0.965093  0.495167  0.0247053  0.410336  0.250159  0.778989  0.678064  0.50927   0.350059  0.925875  0.887095  0.353646  0.219006  0.782477  0.686799  ```\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.nestedarchcopulagen",
    "page": "Home",
    "title": "DatagenCopulaBased.nestedarchcopulagen",
    "category": "function",
    "text": "nestedarchcopulagen(t::Int, n::Vector{Int}, ϕ::Vector{Float64}, θ::Float64, copula::String, m::Int = 0)\n\nReturns Matrix{Float} of t realisations of sum(n)+m random variables generated using nested archimedean copula, outer copula parameter is θ, inner i\'th copulas parameter is ϕ[i] and size is n[i]. If m ≠ 0, last m variables are from outer copula only.\n\nFollowing copula families are supported: clayton, frank, gumbel and amh – Ali-Mikhail-Haq.\n\nNested archimedean copula in in a form Cθ(Cϕ₁(u₁₁, ..., u₁,ₙ₁), ..., C_ϕₖ(uₖ₁, ..., uₖ,ₙₖ), u₁ , ... uₘ). Parameters must fulfill ∀ᵢ ϕ[i] ≥ θ\n\nBasically uses Alg. 5 McNeil, A.J., 2008. \'Sampling nested Archimedean copulas\'. Journal of Statistical Computation and Simulation 78, 567–581.\n\njulia> Random.seed!(43);\n\njulia> nestedarchcopulagen(10, [2,2], [2., 3.], 1.1, \"clayton\", 1)\n10×5 Array{Float64,2}:\n 0.414567  0.683167   0.9953    0.607738  0.793386\n 0.533001  0.190563   0.17076   0.273119  0.78807\n 0.572782  0.161307   0.418821  0.110356  0.661781\n 0.623807  0.140974   0.295422  0.454368  0.477065\n 0.386276  0.266261   0.559423  0.449874  0.294137\n 0.219757  0.122586   0.371318  0.298965  0.507315\n 0.322658  0.0627113  0.738565  0.919912  0.19471\n 0.131938  0.0672061  0.364721  0.220329  0.662842\n 0.773414  0.812113   0.639333  0.527118  0.545043\n 0.958656  0.871822   0.958339  0.801866  0.862751\n\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.nestedarchcopulagen",
    "page": "Home",
    "title": "DatagenCopulaBased.nestedarchcopulagen",
    "category": "function",
    "text": "nestedarchcopulagen::Int, n::Vector{Vector{Int}}, Ψ::Vector{Vector{Float64}},                                                     ϕ::Vector{Float64}, θ₀::Float64,                                                     copula::String = \"gumbel\")\n\nReturns t realisations of ∑ᵢ ∑ⱼ nᵢⱼ variate data from double nested gumbel copula. Cθ(Cϕ₁(CΨ₁₁(u,...), ..., CCΨ₁,ₗ₁(u...)), ..., Cϕₖ(CΨₖ₁(u,...), ..., CΨₖ,ₗₖ(u,...)))  where lᵢ = length(n[i])\n\n```jldoctest   julia> Random.seed!(43)\n\njulia> nestedarchcopulagen(5, [[2,2],[2]], [[3., 2.], [4.]], [1.5, 2.1], 1.2, \"gumbel\")   5×6 Array{Float64,2}:    0.464403  0.711722   0.883035   0.896706   0.888614   0.826514    0.750596  0.768193   0.0659561  0.0252472  0.996014   0.989127    0.825211  0.712079   0.581356   0.507739   0.882675   0.84959    0.276326  0.0827071  0.240836   0.434629   0.0184611  0.031363    0.208422  0.504727   0.27561    0.639089   0.481855   0.573715   ```\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.nestedarchcopulagen",
    "page": "Home",
    "title": "DatagenCopulaBased.nestedarchcopulagen",
    "category": "function",
    "text": "nestedarchcopulagen(t::Int, θ::Vector{Float64}, copula::String = \"gumbel\")\n\nReturns t realisations of length(θ)+1 variate data from hierarchically nested Gumbel copula. Cθₙ(... Cθ₂(C_θ₁(u₁, u₂), u₃)...,  uₙ)\n\njulia> Random.seed!(43)\n\njulia> x = nestedarchcopulagen(5, [4., 3., 2.], \"gumbel\")\n5×4 Array{Float64,2}:\n 0.483466  0.621572  0.241025  0.312664\n 0.827237  0.696634  0.768802  0.730543\n 0.401159  0.462126  0.412573  0.72571\n 0.970726  0.964746  0.940314  0.934625\n 0.684486  0.614142  0.690664  0.401897\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.tstudentcopulagen",
    "page": "Home",
    "title": "DatagenCopulaBased.tstudentcopulagen",
    "category": "function",
    "text": "tstudentcopulagen(t::Int, Σ::Matrix{Float64} = [1. 0.5; 0.5 1.], ν::Int=10)\n\nGenerates data using t-student Copula given Σ - correlation matrix, ν - degrees of freedom. If the symmetric covariance matrix is imputed, it will be converted into a correlation matrix automatically.\n\n```jldoctest julia> Random.seed!(43);\n\njulia> tstudentcopulagen(10) 10×2 Array{Float64,2}:  0.658199  0.937148  0.718244  0.92602  0.809521  0.0980325  0.263068  0.222589  0.187187  0.971109  0.245373  0.346428  0.452336  0.524498  0.57113   0.272525  0.498443  0.48082  0.113788  0.633349  ```\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.AMHτ2θ-Tuple{Float64}",
    "page": "Home",
    "title": "DatagenCopulaBased.AMHτ2θ",
    "category": "method",
    "text": "AMHτ2θ(τ::Float64)\n\nReturns Ali-Mikhail-Haq copula θ parameter, givem Kendall\'s τ\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.Debye",
    "page": "Home",
    "title": "DatagenCopulaBased.Debye",
    "category": "function",
    "text": "Debye(x::Float64, k::Int)\n\nReturns float64, Debye function Dₖ(x) value\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.Ginv-Tuple{Float64,Float64}",
    "page": "Home",
    "title": "DatagenCopulaBased.Ginv",
    "category": "method",
    "text": "Ginv(y::Float64, α::Float64)\n\nReturns Float64, helper for the joe/frank nested copula generator\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.InvlaJ-Tuple{Int64,Float64}",
    "page": "Home",
    "title": "DatagenCopulaBased.InvlaJ",
    "category": "method",
    "text": "InvlaJ(n::Int, α::Float64)\n\nReturns Float64, n-th element of the inverse laplacea transform of generator of Joe nested copula\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.are_parameters_good-Tuple{Array{Float64,1},Float64}",
    "page": "Home",
    "title": "DatagenCopulaBased.are_parameters_good",
    "category": "method",
    "text": "areparametersgood(ϕ::Vector{Float64}, θ::Float64)\n\ntests sufficient nesting condition given parameters, returns bool\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.copulagen-Union{Tuple{T}, Tuple{String,Array{T,2},Union{Float64, Int64}}} where T<:AbstractFloat",
    "page": "Home",
    "title": "DatagenCopulaBased.copulagen",
    "category": "method",
    "text": "copulagen(copula::String, r::Matrix{Float}, θ::Union{Float64, Int})\n\nAuxiliary function used to generate data from archimedean copula (clayton, gumbel, frank or amh) parametrised by a single parameter θ given a matrix of independent [0,1] distributerd random vectors.\n\n  julia> copulagen(\"clayton\", [0.2 0.6 0.9; 0.4 0.5 0.8], 2.)\n  2×2 Array{Float64,2}:\n   0.675778  0.851993\n   0.687482  0.736394\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.elInvlaF-Tuple{Float64,Float64}",
    "page": "Home",
    "title": "DatagenCopulaBased.elInvlaF",
    "category": "method",
    "text": "elInvlaF(θ₁::Float64, θ₀::Float64)\n\nReturns Int, a single sample of the inverse laplacea transform of the generator of nested Frank copula\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.fncopulagen-Tuple{Array{Float64,1},Array{Float64,1},Array{Float64,2}}",
    "page": "Home",
    "title": "DatagenCopulaBased.fncopulagen",
    "category": "method",
    "text": "fncopulagen(α::Vector{Float64}, β::Vector{Float64}, u::Matrix{Float64})\n\n\njulia> fncopulagen(2, [0.2, 0.4], [0.1, 0.1], [0.2 0.4 0.6; 0.3 0.5 0.7])\n2×3 Array{Float64,2}:\n 0.6  0.4  0.2\n 0.7  0.5  0.3\n\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.frankτ2θ-Tuple{Float64}",
    "page": "Home",
    "title": "DatagenCopulaBased.frankτ2θ",
    "category": "method",
    "text": "frankτ2θ(τ::Float64)\n\nReturns a Frank copula θ parameter, givem Kendall\'s τ\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.frechet-Tuple{Float64,Array{Float64,2}}",
    "page": "Home",
    "title": "DatagenCopulaBased.frechet",
    "category": "method",
    "text": "frechet(α::Float64, u::Matrix{Float64})\n\nreturns a matrix of size u with data generated using Frechet maximal copula with parameter α\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.getV0-Tuple{Union{Float64, Int64},Array{Float64,1},String}",
    "page": "Home",
    "title": "DatagenCopulaBased.getV0",
    "category": "method",
    "text": "getV0(θ::Union{Float64, Int}, v::Vector{Float64}, copula::String)\n\nReturns Vector{Float} or Vector{Int} of realisations of axiliary variable V0 used to ganarate data from 1d archimedean copula with parameter Θ, given v: realisations of 1d variable uniformly distributed on [0,1]\n\n\njulia> getV0(2., [0.2, 0.4, 0.6, 0.8], \"clayton\")\n4-element Array{Float64,1}:\n 0.0641848\n 0.274996\n 0.708326\n 1.64237\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.getcors_advanced-Tuple{Array{Float64,2}}",
    "page": "Home",
    "title": "DatagenCopulaBased.getcors_advanced",
    "category": "method",
    "text": "getcors_advanced(x::Matrix{Float64})\n\nclusters data on a basis of a correlation\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.levyel-Tuple{Union{Float64, Int64}}",
    "page": "Home",
    "title": "DatagenCopulaBased.levyel",
    "category": "method",
    "text": "levyel(θ::Union{Int, Float64})\n\nAn element from Levy stable distribution with parameters α = 1/θ, β = 1, γ = (cos(pi/(2*θ)))^θ and δ = 0. Return Float, given parameter ϴ of dostribution\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.levygen-Tuple{Union{Float64, Int64},Array{Float64,1}}",
    "page": "Home",
    "title": "DatagenCopulaBased.levygen",
    "category": "method",
    "text": "Return a Vector{Float64} of  of pseudo cdf of Levy stable distribution with parameters α = 1/θ, β = 1, γ = (cos(pi/(2*θ)))^θ and δ = 0, given a vector of Float64 - u\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.logseriescdf-Tuple{Float64}",
    "page": "Home",
    "title": "DatagenCopulaBased.logseriescdf",
    "category": "method",
    "text": "logseriescdf(p::Float64)\n\nReturns a vector{Float} of the discrete cdf of logarithmic distribution\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.logseriesquantile-Tuple{Float64,Array{Float64,1}}",
    "page": "Home",
    "title": "DatagenCopulaBased.logseriesquantile",
    "category": "method",
    "text": "logseriesquantile(p::Float64, v::Vector{Float64})\n\nReturns a vector{Float} of the v[i] th quaintlie of logaritmic distribution with parameter p\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.mean_outer-Tuple{Array{Float64,2},Array{Array{Int64,1},1}}",
    "page": "Home",
    "title": "DatagenCopulaBased.mean_outer",
    "category": "method",
    "text": "mean_outer(Σ::Matrix{Float64}, part::Vector{Vector{Int}})\n\nreturns a mean correlation excluding internal one is subsets determined by part\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.meanΣ-Tuple{Array{Float64,2}}",
    "page": "Home",
    "title": "DatagenCopulaBased.meanΣ",
    "category": "method",
    "text": "meanΣ(Σ::Matrix{Float64})\n\nReturns Float64, a mean of the mean of lower diagal elements of a matrix\n\n\njulia> s= [1. 0.2 0.3; 0.2 1. 0.4; 0.3 0.4 1.];\n\njulia> meanΣ(s)\n0.3\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.mocopula-Tuple{Array{Float64,2},Int64,Array{Float64,1}}",
    "page": "Home",
    "title": "DatagenCopulaBased.mocopula",
    "category": "method",
    "text": "mocopula(u::Matrix{Float64}, n::Int, λ::Vector{Float64})\n\nReturns: t x n Matrix{Float}, t realisations of n-variate data generated from Marshall-Olkin   copula with parameter vector λ of non-negative elements λₛ, given [0,1]ᵗˣˡ ∋ u, where   l = 2ⁿ-1\n\n\n  julia> mocopula([0.2 0.3 0.4; 0.3 0.4 0.6; 0.4 0.5 0.7], 2, [1., 1.5, 2.])\n  3×2 Array{Float64,2}:\n   0.252982  0.201189\n   0.464758  0.409039\n   0.585662  0.5357\n\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.nestedcopulag-Tuple{String,Array{Array{Int64,1},1},Array{Float64,1},Float64,Array{Float64,2}}",
    "page": "Home",
    "title": "DatagenCopulaBased.nestedcopulag",
    "category": "method",
    "text": "nestedcopulag(copula::String, n::Vector{Int}, ϕ::Vector{Float64}, θ::Float64, r::Matrix{Float64})\n\nGiven [0,1]ᵗˣˡ ∋ r , returns t realisations of l-1 variate data from nested archimedean copula\n\n```jldoctest julia> Random.seed!(43)\n\njulia> nestedcopulag(\"clayton\", [2, 2], [2., 3.], 1.1, [0.1 0.2 0.3 0.4 0.5; 0.2 0.3 0.4 0.5 0.6]) 2×4 Array{Float64,2}:  0.193949  0.230553  0.515404  0.557686  0.712034  0.761276  0.190189  0.208867  ```\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.nestedfrankgen-Tuple{Float64,Float64,Array{Int64,1}}",
    "page": "Home",
    "title": "DatagenCopulaBased.nestedfrankgen",
    "category": "method",
    "text": "nestedfrankgen(θ₁::Float64, θ₀::Float64, V0::Vector{Int})\n\nReturn vector of int, samples of inverse laplacea trensform of nested Frank copula given parametes and V0 - vector of samples if invlaplace of perents copula\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.nestedstep-Tuple{String,Array{Float64,2},Union{Array{Float64,1}, Array{Int64,1}},Float64,Float64}",
    "page": "Home",
    "title": "DatagenCopulaBased.nestedstep",
    "category": "method",
    "text": "nestedstep(copula::String, u::Matrix{Float64}, V0::Union{Vector{Float64}, Vector{Int}}, ϕ::Float64, θ::Float64)\n\nGiven u ∈ [0,1]ᵗⁿ and V0 ∈ ℜᵗ returns u ∈ [0,1]ᵗⁿ for a given archimedean nested copula with inner copulas parameters ϕ anu auter copula parameter θ\n\njulia> nestedstep(\"clayton\", [0.2 0.8; 0.1 0.7], [0.2, 0.4], 2., 1.5)\n2×2 Array{Float64,2}:\n 0.283555  0.789899\n 0.322614  0.806915\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.norm2unifind",
    "page": "Home",
    "title": "DatagenCopulaBased.norm2unifind",
    "category": "function",
    "text": "norm2unifind(x::Matrix{Float64}, i::Vector{Int}, cop::String)\n\nReturn uniformly distributed data from x[:,i] given a copula familly.\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.parameters-Tuple{Array{Float64,2},Array{Array{Int64,1},1}}",
    "page": "Home",
    "title": "DatagenCopulaBased.parameters",
    "category": "method",
    "text": "parameters(x::Matrix{Float64}, part::Vector{Vector{Int}})\n\nReturns parametrization by correlation for data x and partition part for nested copulas.\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.phi-Tuple{Array{Float64,2},Union{Float64, Int64},String}",
    "page": "Home",
    "title": "DatagenCopulaBased.phi",
    "category": "method",
    "text": "phi(u::Matrix{Float64}, θ::Union{Float64, Int}, copula::String)\n\nGiven a matrix t realisations of n variate data ℜᵗⁿ ∋ u = -log(rand(t,n))./V0 returns it transformed through an inverse generator of archimedean copula. Output is distributed uniformly on [0,1]ⁿ\n\n\njulia> julia> phi([0.2 0.6; 0.4 0.8], 2., \"clayton\")\n2×2 Array{Float64,2}:\n 0.845154  0.6742\n 0.745356  0.620174\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.rand2cop-Tuple{Array{Float64,1},Union{Float64, Int64},String}",
    "page": "Home",
    "title": "DatagenCopulaBased.rand2cop",
    "category": "method",
    "text": "rand2cop(u1::Vector{Float64}, θ::Union{Int, Float64}, copula::String)\n\nReturns vector of data generated using copula::String given vector of uniformly distributed u1 and copula parameter θ.\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.sampleInvlaJ-Tuple{Float64,Float64}",
    "page": "Home",
    "title": "DatagenCopulaBased.sampleInvlaJ",
    "category": "method",
    "text": "sampleInvlaJ(α::Float64, v::Float64)\n\nReturns Int, a sample of inverce laplacea transform of generator of Joe nested copula, given a parameter α and a random numver v ∈ [0,1]\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.testbivθ-Tuple{Union{Float64, Int64},String}",
    "page": "Home",
    "title": "DatagenCopulaBased.testbivθ",
    "category": "method",
    "text": "testbivθ(θ::Union{Float64}, copula::String)\n\nTests bivariate copula parameter\n\nclayton bivariate sub-copulas with parameters (θᵢ ≥ -1) ^ ∧ (θᵢ ≠ 0). amh – Ali-Mikhail-Haq bivariate sub-copulas with parameters -1 ≥ θᵢ ≥ 1 frank bivariate sub-copulas with parameters (θᵢ ≠ 0)\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.testind-Tuple{Array{Pair{String,Array{Int64,1}},1}}",
    "page": "Home",
    "title": "DatagenCopulaBased.testind",
    "category": "method",
    "text": "testind(inds::Vector{Pair{String,Vector{Int64}}})\n\nTests if the sub copula name is supported and if their indices are disjoint.\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.testnestedθϕ-Tuple{Array{Int64,1},Array{Float64,1},Float64,String}",
    "page": "Home",
    "title": "DatagenCopulaBased.testnestedθϕ",
    "category": "method",
    "text": "testnestedθϕ(n::Vector{Int}, ϕ::Vector{Float64}, θ::Float64, copula::String)\n\nTests parameters, its hierarchy and size of parametes vector for nested archimedean copulas.\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.testθ-Tuple{Union{Float64, Int64},String}",
    "page": "Home",
    "title": "DatagenCopulaBased.testθ",
    "category": "method",
    "text": "function testθ(θ::Union{Float64, Int}, copula::String)\n\nTests the parameter θ value for archimedean copula, returns void\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.tiltedlevygen-Tuple{Array{Float64,1},Float64}",
    "page": "Home",
    "title": "DatagenCopulaBased.tiltedlevygen",
    "category": "method",
    "text": "tiltedlevygen(V0::Vector{Float64}, α::Float64)\n\nReturns a Vector{Float} genrated from the expotencialy tilted levy stable pdf f(x; V0, α) = exp(-V0^α) g(x; α)/exp(-V0), where g(x; α) is a stable Levy pdf with parameters α = 1/θ, β = 1, γ = (cos(pi/(2*θ)))^θ and δ = 0.\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.usebivρ-Tuple{Float64,String,String}",
    "page": "Home",
    "title": "DatagenCopulaBased.usebivρ",
    "category": "method",
    "text": "Returns Float64, a copula parameter given a pearson or kendall correlation\n\nFor clayton or frank copula correlation fulfulling (-1 > ρᵢ > 1) ∧ (ρᵢ ≠ 0) For amh copula pearson correlation fulfilling -0.2816 > ρᵢ >= .5. while kendall -0.18 < τ < 1/3\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.useρ-Tuple{Float64,String}",
    "page": "Home",
    "title": "DatagenCopulaBased.useρ",
    "category": "method",
    "text": "useρ(ρ::Float64, copula::String)\n\nTests the available pearson correlation for archimedean copula, returns Float, corresponding copula parameter θ.\n\n\njulia> useρ(0.75, \"gumbel\")\n2.294053859606698\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.useτ-Tuple{Float64,String}",
    "page": "Home",
    "title": "DatagenCopulaBased.useτ",
    "category": "method",
    "text": "useτ(ρ::Float64, copula::String)\n\nTests the available kendall\'s correlation for archimedean copula, returns Float, corresponding copula parameter θ.\n\n\njulia> useτ(0.5, \"clayton\")\n2.0\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.Σ_theor-Tuple{Array{Float64,1},Float64,Array{Array{Int64,1},1}}",
    "page": "Home",
    "title": "DatagenCopulaBased.Σ_theor",
    "category": "method",
    "text": "Σ_theor(ϕ::Vector{Float64}, θ::Float64, part::Vector{Vector{Int}})\n\nreturns a matrix indicating a theoretical correlation according togiven parameters and partition\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.ρ2θ-Tuple{Union{Float64, Int64},String}",
    "page": "Home",
    "title": "DatagenCopulaBased.ρ2θ",
    "category": "method",
    "text": "ρ2θ(ρ::Union{Float64, Int}, copula::String)\n\nReturns a Float, an archimedean copula parameter given expected Spermann correlation  ρ and a copula.\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.τ2θ-Tuple{Float64,String}",
    "page": "Home",
    "title": "DatagenCopulaBased.τ2θ",
    "category": "method",
    "text": "τ2θ(τ::Float64, copula::String)\n\nReturns Float, a single parameter of Archimedean copula, given the Kenalss τ correlation\n\n\n\n\n\n"
},

{
    "location": "#DatagenCopulaBased.τ2λ-Tuple{Array{Float64,1},Array{Float64,1}}",
    "page": "Home",
    "title": "DatagenCopulaBased.τ2λ",
    "category": "method",
    "text": "τ2λ(τ::Vector{Float64}, λ::Vector{Float64})\n\nSuplement the vector of λ patrameters of Marshall-Olkin copula, given some of those parameters and a vector fo Kendall\'s τ correlations. Wroks fo 2,3 variate MO copula\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DatagenCopulaBased]\nOrder = [:type, :function]"
},

]}
