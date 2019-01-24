var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DatagenCopulaBased.jl-1",
    "page": "Readme",
    "title": "DatagenCopulaBased.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: DOI)Copula based data generator. Returns data in a form of a matrix U: size(U) = (t,n) - being t realisations of n-variate random variable. Be default each marginal, i.e. U[:,i], is uniformly distributed on [0,1]. Interdependence between marginals is modelled by appropriate n-variate copula function, see e.g.: U. Cherubini, E. Luciano, W. Vecchiato, \'Copula Methods in Finance\', Wiley 2004.This module support following copula families:Elliptical copulas (Gaussian, t-Student),\nArchimedean copulas (Clayton, Frank, Gumbel, Ali-Mikhail-Haq), including nested ones,\nFrechet familly copulas (maximal, minimal, independent),\nMarshall-Olkin copulas."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia, runpkg> add DatagenCopulaBasedto install the files Julia 0.7 or higher is required."
},

{
    "location": "#Elliptical-copulas-1",
    "page": "Readme",
    "title": "Elliptical copulas",
    "category": "section",
    "text": "We use elliptical multivariate distribution (such as Gaussian or t-Student) to construct a copula. Suppose F(x₁, ..., xₙ) is a cumulative density function (cdf.) of such multivariate distribution, and Fᵢ(xᵢ) is univariate cdf. of its i th marginal. Hence uᵢ = Fᵢ(xᵢ) is from the uniform distribution on [0,1], and the elliptical copula is: C(u₁, ..., uₙ) = F(F₁⁻¹(u₁), ..., Fₙ⁻¹(uₙ))."
},

{
    "location": "#Gaussian-copula-1",
    "page": "Readme",
    "title": "Gaussian copula",
    "category": "section",
    "text": "julia> gausscopulagen(t::Int, Σ::Matrix{Float64} = [1. 0.5; 0.5 1.])The function returns U: size(U) = (t,n) - t realisations of n-variate random variable, each marginal, i.e. U[:,i], is uniformly distributed on [0,1] and a cross-correlation is modelled by a Gaussian copula, parametrised by the symmetric positively defined correlation matrix Σ with ones on diagonals Σᵢᵢ=1 and all elements -1 ≤ Σᵢⱼ ≤ 1. Number of marginal variables is n = size(Σ, 1) = size(Σ, 2). If the symmetric covariance matrix without ones on a diagonals is imputed, it will be converted into a correlation matrix automatically.\njulia> using Random\n\njulia> Random.seed!(43);\n\njulia> gausscopulagen(10)\n10×2 Array{Float64,2}:\n 0.589188  0.815308\n 0.708285  0.924962\n 0.747341  0.156994\n 0.227634  0.183116\n 0.227575  0.957376\n 0.271558  0.364803\n 0.445691  0.52792 \n 0.585362  0.23135 \n 0.498593  0.48266 \n 0.190283  0.594451\n ```\n\n### t-Student copula\njulia julia> tstudentcopulagen(t::Int, Σ::Matrix{Float64} = [1. 0.5; 0.5 1.], ν::Int=10)\nThe function returns `U`: `size(U) = (t,n)` - `t` realisations of `n`-variate random variable, each marginal, i.e. `U[:,i]`, is uniformly distributed on `[0,1]` and a cross-correlation is modelled by a t-Student copula parametrised by the symmetric matrix `Σ` (with ones on diagonals as in a Gaussian case) and by a numver `ν ∈ N`.\n\njulia julia> Random.seed!(43);julia> tstudentcopulagen(10) 10×2 Array{Float64,2}:  0.658199  0.937148   0.718244  0.92602    0.809521  0.0980325  0.263068  0.222589   0.187187  0.971109   0.245373  0.346428   0.452336  0.524498   0.57113   0.272525   0.498443  0.48082    0.113788  0.633349 \n## Archimedean copulas\n\nArchimedean one parameter bivariate copula `C(u₁,u₂) = φ⁻¹(φ(u₁)+φ(u₂))` is defined by using the continuous strictly\ndecreasing generator parametrised by `θ`, such that `φ(t): [0,1] →\n[0, ∞)` and `φ⁻¹(s)` is the pseudo-inverse.\n\nWe define similarly `n`-variate Archimedean copula `C(u₁,..., uₙ) = φ⁻¹(φ(u₁)+...+φ(uₙ))`. Here constrains for the`θ` parameter are more strict, see: M. Hofert, \'Sampling Archimedean copulas\', Computational Statistics & Data Analysis, 52 (2008), 5163-5174.\n\n * Clayton copula - keyword = \"clayton\": `θ ∈ (0, ∞)` for `n > 2` and `θ ∈ [-1, 0) ∪ (0, ∞)` for `n = 2`,\n * Frank copula - keyword = \"frank\": `θ ∈ (0, ∞)` for `n > 2` and `θ ∈ (-∞, 0) ∪ (0, ∞)` for `n = 2`,\n * Gumbel copula - keyword = \"gumbel\": `θ ∈ [1, ∞)`,\n * Ali-Mikhail-Haq copula - keyword = \"amh\": `θ ∈ (0, 1)` for `n > 2` and  `θ ∈ [-1, 1]` for `n = 2`.\n\nFor`2`-dimensional copula generate algorithms see P. Kumar, `Probability Distributions and Estimation\nof Ali-Mikhail-Haq Copula`, Applied Mathematical Sciences, Vol. 4, 2010, no. 14, 657 - 666, and R. Nelsen \'An Introduction to Copulas\', Springer Science & Business Media, 1999 - 216.\n\n\nTo generate `t` realisations of `n`-variate data from Archimedean copula with parameter θ run\njulia julia> archcopulagen(t::Int, n::Int, θ::Union{Float64, Int}, copula::String; rev::Bool = false, cor::String = \"\")The function returns `U`: `size(U) = (t,n)` - `t` realisations of `n`-variate random variable, each marginal, i.e. `U[:,i]`, is uniformly distributed on `[0,1]` and a cross-correlation is modelled by corresponding Archimedean copula.\njulia julia> Random.seed!(43);julia> archcopulagen(10, 2, 1, \"clayton\") 10×2 Array{Float64,2}:  0.770331  0.932834   0.472847  0.0806845  0.970749  0.653029   0.622159  0.0518025  0.402461  0.228549   0.946375  0.842883   0.809076  0.129038   0.747983  0.433829   0.374341  0.437269   0.973066  0.910103 \n * If `cor = Kendall`, uses Kendall\'s τ correlation coefficients `θ`.\n * If `cor = Spearman`, uses Spearman ρ correlation coefficient instead of `θ`.\n * If `reversed = true` returns data from reversed copula.\n\nTo generate data from reversed copula:\n\n * Generated data from corresponding copula `[u₁, ..., uᵢ, ..., uₙ]`,\n * Perform  transformation  `∀ᵢ uᵢ → 1-uᵢ`.\n\nFor modelling justification see: K. Domino, T. Błachowicz, M. Ciupak, \'The use of copula functions for predictive analysis of correlations between extreme storm tides\',\nPhysica A: Statistical Mechanics and its Applications 413, 489-497, 2014, and K. Domino, T. Błachowicz, \'The use of copula functions for modeling the risk of\ninvestment in shares traded on the Warsaw Stock Exchange\', Physica A: Statistical Mechanics and its Applications 413, 77-85, 2014.\n\n\n### Nested Archimedean copulas\n\nTo generate `t` realisations of `∑ᵢ nᵢ + m` variate data from nested\nArchimedean copulas,  McNeil, A.J., 2008. \'Sampling nested Archimedean\ncopulas\'. Journal of Statistical Computation and Simulation 78, 567–581, run:\njuliajulia> nestedarchcopulagen(t::Int, n::Vector{Int}, ϕ::Vector{Float64}, θ::Float64, copula::String, m::Int = 0)\nHere `n` is a vector of number of variates of child copulas, `ϕ` are their\nparameters, `θ` is a parameter of parents copula. Here last `m` variates are\ngenerated using parents copula only.\nOnly such nesting that child and parents copulas are from the same family is\nsupported. Nesting condition requires `0 < θ ≤ minimum(ϕ)`.\n\njuliajulia> Random.seed!(43);julia> nestedarchcopulagen(10, [2,2], [2., 3.], 1.1, \"clayton\", 1) 10×5 Array{Float64,2}:  0.333487  0.584206   0.970471  0.352363  0.793386  0.249313  0.0802689  0.298697  0.46432   0.78807   0.765832  0.272857   0.461754  0.125465  0.661781  0.897061  0.346811   0.745457  0.899775  0.477065  0.387096  0.268233   0.533175  0.42922   0.294137  0.42065   0.247676   0.641627  0.538728  0.507315  0.598049  0.138186   0.659411  0.876095  0.19471   0.125968  0.0643853  0.824152  0.601356  0.662842  0.57524   0.625373   0.688956  0.57825   0.545043  0.96839   0.899199   0.827176  0.544107  0.862751\n#### If `copula == \"gumbel\"` further nesting is supported.\n\n\nTo generate `t` realisations of `length(θ)+1` variate data from hierarchically\nnested Gumbel copula:\n`C_θₙ(... C_θ₂(C_θ₁(u₁, u₂), u₃)...,  uₙ)` run:\njuliajulia>   nestedarchcopulagen(t::Int, θ::Vector{Float64}, copula::String = \"gumbel\")\nNesting condition `1 ≤ θ_{i+1} ≤ θᵢ`\njuliajulia> Random.seed!(43);julia> x = nestedarchcopulagen(5, [4., 3., 2.], \"gumbel\") 5×4 Array{Float64,2}:  0.832902  0.915821   0.852532  0.903184   0.266333  0.293338   0.307899  0.0346497  0.152431  0.0432532  0.319465  0.42015    0.812182  0.685689   0.721783  0.554992   0.252867  0.521345   0.406719  0.511759 \nTo generate `t` realisations of `∑ᵢ ∑ⱼ nᵢⱼ` variate data from double nested gumbel copula:\n`C_θ(C_ϕ₁(C_Ψ₁₁(u,...), ..., C_C_Ψ₁,ₗ₁(u...)), ..., C_ϕₖ(C_Ψₖ₁(u,...), ..., C_Ψₖ,ₗₖ(u,...)))`\n where `lᵢ = length(n[i])` run:\njuliajulia> nestedarchcopulagen::Int, n::Vector{Vector{Int}}, Ψ::Vector{Vector{Float64}}, ϕ::Vector{Float64}, θ₀::Float64, copula::String = \"gumbel\")julia julia> Random.seed!(43);julia> x = nestedarchcopulagen(5, [[2,2],[2]], [[3., 2.], [4.]], [1.5, 2.1], 1.2, \"gumbel\") 5×6 Array{Float64,2}: 0.464403  0.711722   0.883035   0.896706   0.888614   0.826514 0.750596  0.768193   0.0659561  0.0252472  0.996014   0.989127 0.825211  0.712079   0.581356   0.507739   0.882675   0.84959 0.276326  0.0827071  0.240836   0.434629   0.0184611  0.031363 0.208422  0.504727   0.27561    0.639089   0.481855   0.573715\n### Chain of bivariate Archimedean copulas\n\n\nTo generate `t` realisations of `length(θ)+1` variate data, using a chain of one parameter bivariate Archimedean copulas parametrised by `θᵢ` for - i\'th and i+1\'th marginal:\njuliajulia> chaincopulagen(t::Int, θ::Union{Vector{Float64}, Vector{Int}}, copula::Vector{String}; rev::Bool = false, cor::String = \"\")\nIn other words `∀i∈[1, length(θ)]` data are generated form Archimedean copula `C_{θᵢ}(uᵢ, u_{i+1})`. Due to features of bivariate copulas, each marginal `uᵢ` is uniformly\ndistributed on `[0,1]`, hence we got a multivariate copula, defined by\nsubsequent bivariate sub-copulas. The cross-corelation between marginals `i` and `j`: `i ≠ j+1` are introduced by a chain of\nbivariate copulas.\n\nFollowing families are supported: \"clayton\", \"frank\" and\n\"amh\" -  Ali-Mikhail-Haq. Conditions for `θᵢ` parameters ranges such as in corresponding\nbivariate copula case.\njuliajulia> Random.seed!(43);julia> chaincopulagen(10, [4., 11.], [\"frank\", \"frank\"]) 10×3 Array{Float64,2}:  0.180975  0.386303   0.879254   0.775377  0.247895   0.144803   0.888934  0.426854   0.772457   0.924876  0.395564   0.223155   0.408278  0.139002   0.142997   0.912603  0.901252   0.949828   0.828727  0.0295759  0.0897796  0.400537  0.0337673  0.27872    0.429437  0.462771   0.425435   0.955881  0.953623   0.969038 \n\n## Marshall-Olkin copula\n\nTo generate `t` realisations of `n`-variate data from Marshall-Olkin copula with parameter series `λ` with non-negative elements `λₛ`, run:\njulia julia> marshallolkincopulagen(t::Int, λ::Vector{Float64}; reverse::Bool = false)\nNumber of marginals is `n = ceil(Int, log(2, length(λ)-1))`.\nParameters are ordered as follow: `λ = [λ₁, λ₂, ..., λₙ, λ₁₂, λ₁₃, ..., λ₁ₙ, λ₂₃, ..., λₙ₋₁ₙ, λ₁₂₃, ..., λ₁₂...ₙ]`\nIf `reversed = true`, returns data from reversed Marshall-Olkin copula , i.e. generates data `[u₁, ..., uᵢ, ..., uₙ]` from given Marshall-Olkin copula and perform transformation `∀ᵢ uᵢ → 1-uᵢ`\n\njuliajulia> Random.seed!(43);julia> marshallolkincopulagen(10, [0.2, 1.2, 1.6]) 10×2 Array{Float64,2}:  0.99636   0.994344   0.167268  0.0619408  0.977418  0.965093   0.495167  0.0247053  0.410336  0.250159   0.778989  0.678064   0.50927   0.350059   0.925875  0.887095   0.353646  0.219006   0.782477  0.686799 \nTo generate data from the Marshall-Olkin copula we use algorithm presented P. Embrechts, F. Lindskog, A McNeil \'Modelling Dependence with Copulas and Applications to Risk Management\', 2001\n∗∗\n\n\n## Frechet family copulas\n\nTo generate `t` realisation of `n` variate one parameter Frechet copula `Cf = α C_{max} + (1-α) C_{⟂}`, where `0 ≤ α ≤ 1` run:\n\njulia julia> frechetcopulagen(t::Int, n::Int, α::Union{Int, Float64})juliajulia> Random.seed!(43);julia> frechetcopulagen(10, 2, 0.5) 10×2 Array{Float64,2}:  0.180975  0.661781    0.775377  0.775377    0.888934  0.125437    0.924876  0.924876    0.408278  0.408278    0.912603  0.740184    0.828727  0.00463791  0.400537  0.0288987   0.429437  0.429437    0.955881  0.851275  \nTwo parameters Frechet copula, `C = α C_{max} + β C_{min} + (1- α - β) C_{⟂}`\nis supported only for `n == 2`:\njulia julia> frechetcopulagen(t::Int, n::Int, α::Union{Int, Float64}, β::Union{Int, Float64})\nHere where `0 ≤ α` , where `0 ≤ β` and `α + β ≤ 1`\njuliajulia> Random.seed!(43);julia> frechetcopulagen(10, 2, 0.4, 0.2) 10×2 Array{Float64,2}:  0.180975  0.661781   0.775377  0.775377   0.888934  0.125437   0.924876  0.924876   0.408278  0.591722   0.912603  0.740184   0.828727  0.171273   0.400537  0.0288987  0.429437  0.429437   0.955881  0.851275 \n### Chain of bivariate Frechet copulas\n\n\nTo generate `t` realisations of `length(α)+1` multivariate data using a chain two parameter bivariate Frechet copulas with parameter `αᵢ` and `βᵢ` for each neighbour (i\'th and i+1\'th) marginals run:\n\njuliajulia> chainfrechetcopulagen(t::Int, α::Vector{Float64}, β::Vector{Float64} = zeros(α))In other words `∀i∈[1, length(θ)]` data are generated from following Frechet copula `C_{αᵢ,βᵢ}(uᵢ, u_{i+1})`. Due to features of bivariate copulas, each marginal `uᵢ` is uniformly\ndistributed on `[0,1]`, hence we got a multivariate copula, defined by subsequent bivariate sub-copulas.\nThe relation between marginals `i` and `j`: `i ≠ j+1` are defined by a sequence of\nbivariate copulas.\n\njulia julia> srand(43)julia> chainfrechetcopulagen(10, [0.6, 0.4], [0.3, 0.5]) 10×3 Array{Float64,2}:  0.996764  0.996764  0.996764   0.204033  0.795967  0.204033   0.979901  0.979901  0.0200985  0.120669  0.879331  0.120669   0.453027  0.453027  0.453027   0.800909  0.199091  0.800909   0.54892   0.54892   0.54892    0.933832  0.933832  0.0661679  0.396943  0.396943  0.396943   0.804096  0.851275  0.955881 \n\n## Correlation matrix generation\n\nWe supply a few methods to generate a `n x n` correlation matrix `Σ`.\n\n### Fully random cases\n\nto generate randomly a correlation matrix run\njulia julia> cormatgen(n::Int)\nor\njulia julia> cormatgen_rand(n::Int)\nfor different methods we have different outputs:\njulia julia> Random.seed!(43);julia> cormatgen(4) 4×4 Array{Float64,2}:  1.0       0.396865  0.339354  0.193335  0.396865  1.0       0.887028  0.51934   0.339354  0.887028  1.0       0.551519  0.193335  0.51934   0.551519  1.0     julia> cormatgen_rand(4) 4×4 Array{Float64,2}:  1.0       0.659183  0.916879  0.486979  0.659183  1.0       0.676167  0.808264  0.916879  0.676167  1.0       0.731206  0.486979  0.808264  0.731206  1.0  \n### Deterministic cases\n\nTo generate a correlation matrix with constant elements run:\njulia julia> cormatgen_constant(n::Int, α::Float64)\nparameter `α` should satisfy `0 <= α <= 1`\njulia julia> cormatgen_constant(4, 0.4) 4×4 Array{Float64,2}:  1.0  0.4  0.4  0.4  0.4  1.0  0.4  0.4  0.4  0.4  1.0  0.4  0.4  0.4  0.4  1.0the generalisation is\njulia julia> cormatgentwoconstant(n::Int, α::Float64, β::Float64)parameters should satisfy `0 <= α <= 1` and `α > β`.\njulia julia> cormatgentwoconstant(4, 0.5, 0.2) 4×4 Array{Float64,2}:  1.0  0.5  0.2  0.2  0.5  1.0  0.2  0.2  0.2  0.2  1.0  0.2  0.2  0.2  0.2  1.0to generate Toeplitz matrix with parameter `0 <= ρ <= 1` run:\njulia julia> cormatgen_toeplitz(n::Int, ρ::Float64)julia> cormatgen_toeplitz(4, 0.5) 4×4 Array{Float64,2}:  1.0    0.5   0.25  0.125  0.5    1.0   0.5   0.25  0.25   0.5   1.0   0.5    0.125  0.25  0.5   1.0  \n### Partially random and partially deterministic cases\n\nTo generate constant matrix with noise run:\njulia julia> cormatgenconstantnoised(n::Int, α::Float64; ϵ::Float64 = (1.-α)/2.)where the parameter `ϵ` must satisfy `0 <= ϵ <= 1-α`\njulia julia> Random.seed!(43);julia> cormatgenconstantnoised(4, 0.5) 4×4 Array{Float64,2}:  1.0       0.314724  0.590368  0.346992  0.314724  1.0       0.314256  0.512183  0.590368  0.314256  1.0       0.538089  0.346992  0.512183  0.538089  1.0   \nAnalogically generate noised two constants matrix run\njulia julia> Random.seed!(43);julia> cormatgentwoconstant_noised(4, 0.5, 0.2) 4×4 Array{Float64,2}:  1.0        0.314724  0.290368  0.0469922  0.314724   1.0       0.014256  0.212183   0.290368   0.014256  1.0       0.238089   0.0469922  0.212183  0.238089  1.0   Finally to generate noised Toeplitz matrix run:\njulia julia> cormatgentoeplitznoised(n::Int, ρ::Float64; ϵ=(1-ρ)/(1+ρ)/2)where the parameter `ϵ must satisfy 0 <= ϵ <= (1-ρ)/(1+ρ)`\njulia julia> Random.seed!(43);julia> cormatgentoeplitznoised(4, 0.5) 4×4 Array{Float64,2}:  1.0        0.376483  0.310246  0.0229948  0.376483   1.0       0.376171  0.258122   0.310246   0.376171  1.0       0.525393   0.0229948  0.258122  0.525393  1.0  \n## Changes the subset of marginals of multivariate Gaussian distributed data\n\nTo change a chosen marginals subset `ind` of multivariate Gaussian distributed data `x` by means of t-Student sub-copula with\na parameter `ν` run:\njulia julia> gcop2tstudent(x::Matrix{Float64}, ind::Vector{Int}, ν::Int; naive::Bool = false)all univariate marginal distributions are Gaussian and unaffected by a transformation.\njuliajulia> Σ = [1. 0.5 0.5; 0.5 1. 0.5; 0.5 0.5 1];julia> Random.seed!(42);julia> x = Array(rand(MvNormal(Σ), 6)\') 6×3 Array{Float64,2}:  -0.556027  -0.662861   -0.384124  -0.299484   1.38993    -0.571326  -0.468606  -0.0990787  -2.3464     1.00331    1.43902     0.966819   0.518149   1.55065     0.989712  -0.886205   0.149748   -1.54419 julia> gcop2tstudent(x, [1,2], 6) 6×3 Array{Float64,2}:  -0.519458  -0.498377   -0.384124  -0.37937    1.66806    -0.571326  -0.432902  -0.0178933  -2.3464     1.01216    1.50814     0.966819   0.226484   1.12436     0.989712  -0.727203   0.238701   -1.54419 To change a chosen marginals subset `inds[i][2]` of multivariate Gaussian distributed data `x` by means of Archimedean sub-copula of family `inds[i][1]` run:\njulia julia> gcop2arch(x::Matrix{Float64}, inds::Vector{Pair{String,Vector{Int64}}}; naive::Bool = false, notnested::Bool = false)many disjoint subsets numbered by `i` with different Archimedean sub-copulas are possible. As before all univariate marginal distributions are Gaussian and unaffected by a transformation. Named parameter `naive` indicates a use of a naive algorithm of data substitution. Named parameter `notnested` means the use of one parameter Archimedean copula instead of a nested one.\njuliajulia> Σ = [1. 0.5 0.5; 0.5 1. 0.5; 0.5 0.5 1];julia> Random.seed!(42)julia> x = Array(rand(MvNormal(Σ), 6)\') 6×3 Array{Float64,2}:  -0.556027  -0.662861   -0.384124  -0.299484   1.38993    -0.571326  -0.468606  -0.0990787  -2.3464   1.00331    1.43902     0.966819   0.518149   1.55065     0.989712  -0.886205   0.149748   -1.54419julia> gcop2arch(x, [\"clayton\" => [1,2]]) 6×3 Array{Float64,2}:  -0.742443   0.424851  -0.384124   0.211894   0.195774  -0.571326  -0.989417  -0.299369  -2.3464   0.157683   1.47768    0.966819   0.154893   0.893253   0.989712  -0.657297  -0.339814  -1.54419\nTo change a chosen marginals subset `ind` of multivariate Gaussian distributed data `x` by means of Frechet maximal sub-copula:\njulia julia> gcop2frechet(x::Matrix{Float64}, ind::Vector{Int}; naive::Bool = false)all univariate marginal distributions are Gaussian and unaffected by a transformation.\njuliajulia> Σ = [1. 0.5 0.5; 0.5 1. 0.5; 0.5 0.5 1];julia> Random.seed!(42)julia> x = Array(rand(MvNormal(Σ), 6)\') 6×3 Array{Float64,2}:  -0.556027  -0.662861   -0.384124  -0.299484   1.38993    -0.571326  -0.468606  -0.0990787  -2.3464   1.00331    1.43902     0.966819   0.518149   1.55065     0.989712  -0.886205   0.149748   -1.54419julia> gcop2frechet(x, [1,2]) 6×3 Array{Float64,2}:  -0.875777   -0.374723   -0.384124   0.0960334   0.905703   -0.571326  -0.599792   -0.0110945  -2.3464   0.813717    1.8513      0.966819   0.599255    1.56873     0.989712  -0.7223     -0.172507   -1.54419\nTo change a chosen marginals subset `ind` of multivariate Gaussian distributed data `x` by means of bivariate Marshall-Olkin copula:\njulia julia> gcop2marshallolkin(x::Matrix{Float64}, ind::Vector{Int}, λ1::Float64 = 1., λ2::Float64 = 1.5; naive::Bool = false)all univariate marginal distributions are Gaussian and unaffected by a transformation.\nWe require `length(ind) = 2` `λ1 ≧ 0` and `λ2 ≧ 0`. The parameter `λ12` is computed from expected\ncorrelation between both changed marginals.\njuliajulia> Σ = [1. 0.5 0.5; 0.5 1. 0.5; 0.5 0.5 1];julia> Random.seed!(42);julia> x = Array(rand(MvNormal(Σ), 6)\') 6×3 Array{Float64,2}:  -0.556027  -0.662861   -0.384124  -0.299484   1.38993    -0.571326  -0.468606  -0.0990787  -2.3464     1.00331    1.43902     0.966819   0.518149   1.55065     0.989712  -0.886205   0.149748   -1.54419 julia> gcop2marshallolkin(x, [1,2]) 6×3 Array{Float64,2}:  -0.790756   0.784371  -0.384124  -0.28088    0.338086  -0.571326  -0.90688   -0.509684  -2.3464     0.738628   1.71026    0.966819   0.353654   1.19357    0.989712  -0.867606  -0.589929  -1.54419 \n## Helpers\n\n\n### Converting marginals\n\nTakes matrix `X`: `size(X) = (t, n)` ie `t` realisations of `n`-dimensional random variable, with all uniform marginal univariate distributions `∀ᵢ X[:,i] ∼ Uniform(0,1)`, and convert those marginals to common distribution `d` with parameters `p[i]`\njulia julia> convertmarg!(U::Matrix{T}, d::UnionAll, p::Union{Vector{Vector{Int64}}, Vector{Vector{Float64}}}; testunif::Bool = true)\nIf `testunif = true` each marginal is tested for uniformity.\njulia julia> using Distributionsjulia> Random.seed!(43);julia> U = gausscopulagen(10);julia> convertmarg!(U, Normal, [[0, 1],[0, 10]])julia> U 10×2 Array{Float64,2}:   0.225457      8.97627   0.548381     14.3926   0.666147    -10.0689                                                                                                                                                        -0.746662     -9.03553                                                                                                                                                       -0.746857     17.2101                                                                                                                                                        -0.608109     -3.45649  -0.136555      0.700419   0.215631     -7.34409  -0.00352701   -0.434793  -0.876853      2.39009\nTo convert `i` th marginal to univariate distribution `d` with parameters array\n`p` runjuliajulia> using Distributionsjulia> quantile.(d(p...), U[:,i])julia julia> Random.seed!(43);julia> U = gausscopulagen(10);julia> quantile.(Levy(0, 1), U[:,2]) 10-element Array{Float64,1}:   18.327904335047272   112.72788160148863      0.4992650891811052    0.5642861403809334  350.0676959136128       1.2175971128674394    2.510078079677982     0.6980591543550244    2.0290242635860944    3.527994542141473 To convert all marginals to the same `d` with the same parameters `p` run\njulia> using Distributionsjulia> quantile.(d(p...), U)julia julia> julia> quantile.(Levy(0, 1), U) 10×2 Array{Float64,2}:  3.42919    18.3279    7.14305   112.728     9.6359      0.499265  0.687009    0.564286  0.686835  350.068     0.827224    1.2176    1.71944     2.51008   3.3597      0.698059  2.18374     2.02902   0.582946    3.52799  ```"
},

{
    "location": "#Citing-this-work-1",
    "page": "Readme",
    "title": "Citing this work",
    "category": "section",
    "text": "This project was partially financed by the National Science Centre, Poland – project number 2014/15/B/ST6/05204.while reffering to gcop2arch(), gcop2frechet(), and gcop2marshallolkin() - cite K. Domino, A. Glos: \'Introducing higher order correlations to marginals\' subset of multivariate data by means of Archimedean copulas\', arXiv:1803.07813.\nwhile reffering to gcop2tstudent() - cite K. Domino: \' The use of the Higher Order Singular Value Decomposition of the 4-cumulant\'s tensors in features selection and outlier detection\', arXiv:1804.00541."
},

{
    "location": "autodocs/#DatagenCopulaBased.archcopulagen-Tuple{Int64,Int64,Union{Float64, Int64},String}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.archcopulagen",
    "category": "method",
    "text": "archcopulagen(t::Int, n::Int, θ::Union{Float64, Int}, copula::String; rev::Bool = false)\n\nReturns: t x n Matrix{Float}, t realisations of n-variate data generated from Archimedean one parameter copula.\n\nFollowing copula families are supported: clayton, frank, gumbel and amh – Ali-Mikhail-Haq.\n\nIf rev == true, reverse the copula output i.e. u → 1-u (we call it reversed copula). It cor == pearson, kendall, uses correlation coeficient as a parameter\n\n```jldoctest julia> Random.seed!(43);\n\njulia> archcopulagen(10, 2, 1, \"clayton\") 10×2 Array{Float64,2}:  0.770331  0.932834  0.472847  0.0806845  0.970749  0.653029  0.622159  0.0518025  0.402461  0.228549  0.946375  0.842883  0.809076  0.129038  0.747983  0.433829  0.374341  0.437269  0.973066  0.910103\n\n```\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.chainfrechetcopulagen",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.chainfrechetcopulagen",
    "category": "function",
    "text": "chainfrechetcopulagen(t::Int, α::Vector{Float64}, β::Vector{Float64} = zeros(α))\n\nRetenares data from a chain of bivariate two parameter frechet copuls with parameters vectors α and β, such that ∀ᵢ 0 α[i] + β[i] ≤1 α[i] > 0, and β[i] > 0 |α| = |β|\n\njulia> Random.seed!(43)\n\njulia> julia> chainfrechetcopulagen(10, [0.6, 0.4], [0.3, 0.5])\n10×3 Array{Float64,2}:\n 0.996764  0.996764  0.996764\n 0.204033  0.795967  0.204033\n 0.979901  0.979901  0.0200985\n 0.120669  0.879331  0.120669\n 0.453027  0.453027  0.453027\n 0.800909  0.199091  0.800909\n 0.54892   0.54892   0.54892\n 0.933832  0.933832  0.0661679\n 0.396943  0.396943  0.396943\n 0.804096  0.851275  0.955881\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.cormatgen",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.cormatgen",
    "category": "function",
    "text": "cormatgen(n::Int, ρ::Float64 = 0.5, ordered::Bool = false, altersing::Bool = true)\n\nReturns symmetric correlation matrix Σ of size n x n, with reference correlation 0 < ρ < 1. If ordered = false, Σ elements varies arround ρ, i.e. σᵢⱼ ≈ ρ+δ else they drop as indices differences rise, i.e. σᵢⱼ ≳ σᵢₖ as |i-j| < |i-k|. If altersing = true, some σ are positive and some negative, else ∀ᵢⱼ σᵢⱼ ≥ 0.\n\njulia> Random.seed!(43);\n\njulia> julia> cormatgen(2)\n2×2 Array{Float64,2}:\n 1.0       0.660768\n 0.660768  1.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.frechetcopulagen-Tuple{Int64,Int64,Union{Float64, Int64},Union{Float64, Int64}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.frechetcopulagen",
    "category": "method",
    "text": "frechetcopulagen(t::Int, n::Int, α::Union{Int, Float64}, β::Union{Int, Float64})\n\nTwo parameters Frechet copula C = α C{max} + β C{min} + (1- α - β) C_{⟂}, supported only for n == 2\n\njulia> Random.seed!(43);\n\njulia> frechetcopulagen(10, 2, 0.4, 0.2)\n10×2 Array{Float64,2}:\n 0.180975  0.661781\n 0.775377  0.775377\n 0.888934  0.125437\n 0.924876  0.924876\n 0.408278  0.591722\n 0.912603  0.740184\n 0.828727  0.171273\n 0.400537  0.0288987\n 0.429437  0.429437\n 0.955881  0.851275\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.frechetcopulagen-Tuple{Int64,Int64,Union{Float64, Int64}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.frechetcopulagen",
    "category": "method",
    "text": "frechetcopulagen(t::Int, n::Int, α::Union{Int, Float64})\n\nReturns t realisation of n variate data generated from one parameter frechet multidimentional copula, a combination of maximal copla with  weight α and independent copula with  weight 1-α\n\njulia> Random.seed!(43);\n\njulia> frechetcopulagen(10, 2, 0.5)\n10×2 Array{Float64,2}:\n 0.180975  0.661781\n 0.775377  0.775377\n 0.888934  0.125437\n 0.924876  0.924876\n 0.408278  0.408278\n 0.912603  0.740184\n 0.828727  0.00463791\n 0.400537  0.0288987\n 0.429437  0.429437\n 0.955881  0.851275\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.gausscopulagen",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.gausscopulagen",
    "category": "function",
    "text": "gausscopulagen(t::Int, Σ::Matrix{Float64} = [1. 0.5; 0.5 1.])\n\nReturns: t x n matrix of t realisations of multivariate data generated using gaussian copula with Σ - correlation matrix. If the symmetric covariance matrix is imputed, it will be converted into a correlation matrix automatically.\n\n\njulia> Random.seed!(43);\n\njulia> gausscopulagen(10)\n10×2 Array{Float64,2}:\n 0.589188  0.815308\n 0.708285  0.924962\n 0.747341  0.156994\n 0.227634  0.183116\n 0.227575  0.957376\n 0.271558  0.364803\n 0.445691  0.52792\n 0.585362  0.23135\n 0.498593  0.48266\n 0.190283  0.594451\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.gcop2arch-Tuple{Array{Float64,2},Array{Pair{String,Array{Int64,1}},1}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.gcop2arch",
    "category": "method",
    "text": "gcop2arch(x::Matrix{Float64}, inds::VP)\n\nTakes x ∈ Rᵗˣⁿ a matrix of t realisations of data from Gaussin n-variate distribution. Return a matrix of size x, where chosen subset of marginals (inds[i][2]) has an Archimedean sub-copula (denoted by inds[i][1]), all univariate marginals are unchanged. e.g. inds = [\"clayton\" => [1,2]] a subset of marginals indexed by 1,2 to such with Clayton sub-copula\n\n\njulia> Σ = [1. 0.5 0.5; 0.5 1. 0.5; 0.5 0.5 1];\n\njulia> Random.seed!(42)\n\njulia> x = rand(MvNormal(Σ), 6)\'\n6×3 Array{Float64,2}:\n -0.556027  -0.662861   -0.384124\n -0.299484   1.38993    -0.571326\n -0.468606  -0.0990787  -2.3464\n  1.00331    1.43902     0.966819\n  0.518149   1.55065     0.989712\n -0.886205   0.149748   -1.54419\n\njulia> gcop2arch(x, [\"clayton\" => [1,2]]; naive::Bool = false, notnested::Bool = false)\n6×3 Array{Float64,2}:\n -0.742443   0.424851  -0.384124\n  0.211894   0.195774  -0.571326\n -0.989417  -0.299369  -2.3464\n  0.157683   1.47768    0.966819\n  0.154893   0.893253   0.989712\n -0.657297  -0.339814  -1.54419\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.gcop2frechet-Tuple{Array{Float64,2},Array{Int64,1}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.gcop2frechet",
    "category": "method",
    "text": "gcop2frechet(x::Matrix{Float64}, inds::VP)\n\nTakes x ∈ Rᵗˣⁿ a matrix of t realisations of data from Gaussin n-variate distribution. Return a matrix of size x, where chosen subset of marginals (inds) has Frechet maximal sub-copula, all univariate marginals are unchanged.\n\n\njulia> Σ = [1. 0.5 0.5; 0.5 1. 0.5; 0.5 0.5 1];\n\njulia> Random.seed!(42)\n\njulia> x = rand(MvNormal(Σ), 6)\'\n6×3 Array{Float64,2}:\n -0.556027  -0.662861   -0.384124\n -0.299484   1.38993    -0.571326\n -0.468606  -0.0990787  -2.3464\n  1.00331    1.43902     0.966819\n  0.518149   1.55065     0.989712\n -0.886205   0.149748   -1.54419\n\njulia> gcop2frechet(x, [1,2]; naive = false)\n6×3 Array{Float64,2}:\n -0.875777   -0.374723   -0.384124\n  0.0960334   0.905703   -0.571326\n -0.599792   -0.0110945  -2.3464\n  0.813717    1.8513      0.966819\n  0.599255    1.56873     0.989712\n -0.7223     -0.172507   -1.54419\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.gcop2marshallolkin",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.gcop2marshallolkin",
    "category": "function",
    "text": "gcop2marshallolkin(x::Matrix{Float64}, inds::Vector{Int}, λ1::Float64 = 1., λ2::Float64 = 1.5; naive::Bool = false)\n\nTakes x ∈ Rᵗˣⁿ a matrix of t realisations of data from Gaussin n-variate distribution. Return a matrix of size x, where chosen subset of marginals (inds) has bivariate Marshal Olkin sub-copula parametrised by free parameters λ1 and λ2. All univariate marginals are unchanged.\n\n\njulia> Σ = [1. 0.5 0.5; 0.5 1. 0.5; 0.5 0.5 1];\n\njulia> Random.seed!(42)\n\njulia> x = rand(MvNormal(Σ), 6)\'\n6×3 Array{Float64,2}:\n -0.556027  -0.662861   -0.384124\n -0.299484   1.38993    -0.571326\n -0.468606  -0.0990787  -2.3464\n  1.00331    1.43902     0.966819\n  0.518149   1.55065     0.989712\n -0.886205   0.149748   -1.54419\n\njulia> gcop2marshallolkin(x, [1,2], 1., 1.5; naive = false)\n6×3 Array{Float64,2}:\n -0.790756   0.784371  -0.384124\n -0.28088    0.338086  -0.571326\n -0.90688   -0.509684  -2.3464\n  0.738628   1.71026    0.966819\n  0.353654   1.19357    0.989712\n -0.867606  -0.589929  -1.54419\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.gcop2tstudent-Tuple{Array{Float64,2},Array{Int64,1},Int64}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.gcop2tstudent",
    "category": "method",
    "text": "gcop2tstudent(x::Matrix{Float64}, ind::Vector{Int}, ν::Int)\n\nTakes x ∈ Rᵗˣⁿ a matrix of t realisations of data from Gaussin n-variate distribution.   Return a matrix of size x, where chosen subset of marginals (ind) has a    t-Student copula with ν degrees of freedom, all univariate marginals are    unchanged\n\n\njulia> Σ = [1. 0.5 0.5; 0.5 1. 0.5; 0.5 0.5 1];\n\njulia> Random.seed!(42)\n\njulia> x = rand(MvNormal(Σ), 6)\'\n6×3 Array{Float64,2}:\n -0.556027  -0.662861   -0.384124\n -0.299484   1.38993    -0.571326\n -0.468606  -0.0990787  -2.3464\n  1.00331    1.43902     0.966819\n  0.518149   1.55065     0.989712\n -0.886205   0.149748   -1.54419\n\njulia> gcop2tstudent(x, [1,2], 6)\n6×3 Array{Float64,2}:\n -0.514449  -0.49147    -0.384124\n -0.377933   1.66254    -0.571326\n -0.430426  -0.0165044  -2.3464\n  0.928668   1.50472     0.966819\n  0.223439   1.12372     0.989712\n -0.710786   0.239012   -1.54419\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.marshallolkincopulagen",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.marshallolkincopulagen",
    "category": "function",
    "text": "marshallolkincopulagen(t::Int, λ::Vector{Float64})\n\nReturns: t x n Matrix{Float}, t realisations of n-variate data generated from Marshall-Olkin copula with parameter vector λ of non-negative elements λₛ. Number of marginals is n = ceil(Int, log(2, length(λ)-1)). Parameters are ordered as follow: λ = [λ₁, λ₂, ..., λₙ, λ₁₂, λ₁₃, ..., λ₁ₙ, λ₂₃, ..., λₙ₋₁ₙ, λ₁₂₃, ..., λ₁₂...ₙ] If reversed = true, returns data from reversed Marshall-Olkin copula.\n\n```jldoctest\n\njulia> Random.seed!(43)\n\njulia> marshallolkincopulagen(10, [0.2, 1.2, 1.6]) 10×2 Array{Float64,2}:  0.99636   0.994344  0.167268  0.0619408  0.977418  0.965093  0.495167  0.0247053  0.410336  0.250159  0.778989  0.678064  0.50927   0.350059  0.925875  0.887095  0.353646  0.219006  0.782477  0.686799  ```\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.nestedarchcopulagen",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.nestedarchcopulagen",
    "category": "function",
    "text": "nestedarchcopulagen(t::Int, n::Vector{Int}, ϕ::Vector{Float64}, θ::Float64, copula::String, m::Int = 0)\n\nReturns Matrix{Float} of t realisations of sum(n)+m random variables generated using nested archimedean copula, outer copula parameter is θ, inner i\'th copulas parameter is ϕ[i] and size is n[i]. If m ≠ 0, last m variables are from outer copula only.\n\nFollowing copula families are supported: clayton, frank, gumbel and amh – Ali-Mikhail-Haq.\n\nNested archimedean copula in in a form Cθ(Cϕ₁(u₁₁, ..., u₁,ₙ₁), ..., C_ϕₖ(uₖ₁, ..., uₖ,ₙₖ), u₁ , ... uₘ). Parameters must fulfill ∀ᵢ ϕ[i] ≥ θ\n\nBasically uses Alg. 5 McNeil, A.J., 2008. \'Sampling nested Archimedean copulas\'. Journal of Statistical Computation and Simulation 78, 567–581.\n\njulia> Random.seed!(43);\n\njulia> nestedarchcopulagen(10, [2,2], [2., 3.], 1.1, \"clayton\", 1)\n10×5 Array{Float64,2}:\n 0.414567  0.683167   0.9953    0.607738  0.793386\n 0.533001  0.190563   0.17076   0.273119  0.78807\n 0.572782  0.161307   0.418821  0.110356  0.661781\n 0.623807  0.140974   0.295422  0.454368  0.477065\n 0.386276  0.266261   0.559423  0.449874  0.294137\n 0.219757  0.122586   0.371318  0.298965  0.507315\n 0.322658  0.0627113  0.738565  0.919912  0.19471\n 0.131938  0.0672061  0.364721  0.220329  0.662842\n 0.773414  0.812113   0.639333  0.527118  0.545043\n 0.958656  0.871822   0.958339  0.801866  0.862751\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.nestedarchcopulagen",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.nestedarchcopulagen",
    "category": "function",
    "text": "nestedarchcopulagen(t::Int, θ::Vector{Float64}, copula::String = \"gumbel\")\n\nReturns t realisations of length(θ)+1 variate data from hierarchically nested Gumbel copula. Cθₙ(... Cθ₂(C_θ₁(u₁, u₂), u₃)...,  uₙ)\n\njulia> Random.seed!(43)\n\njulia> x = nestedarchcopulagen(5, [4., 3., 2.], \"gumbel\")\n5×4 Array{Float64,2}:\n 0.483466  0.621572  0.241025  0.312664\n 0.827237  0.696634  0.768802  0.730543\n 0.401159  0.462126  0.412573  0.72571\n 0.970726  0.964746  0.940314  0.934625\n 0.684486  0.614142  0.690664  0.401897\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.nestedarchcopulagen",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.nestedarchcopulagen",
    "category": "function",
    "text": "nestedarchcopulagen::Int, n::Vector{Vector{Int}}, Ψ::Vector{Vector{Float64}},                                                     ϕ::Vector{Float64}, θ₀::Float64,                                                     copula::String = \"gumbel\")\n\nReturns t realisations of ∑ᵢ ∑ⱼ nᵢⱼ variate data from double nested gumbel copula. Cθ(Cϕ₁(CΨ₁₁(u,...), ..., CCΨ₁,ₗ₁(u...)), ..., Cϕₖ(CΨₖ₁(u,...), ..., CΨₖ,ₗₖ(u,...)))  where lᵢ = length(n[i])\n\n```jldoctest   julia> Random.seed!(43)\n\njulia> nestedarchcopulagen(5, [[2,2],[2]], [[3., 2.], [4.]], [1.5, 2.1], 1.2, \"gumbel\")   5×6 Array{Float64,2}:    0.464403  0.711722   0.883035   0.896706   0.888614   0.826514    0.750596  0.768193   0.0659561  0.0252472  0.996014   0.989127    0.825211  0.712079   0.581356   0.507739   0.882675   0.84959    0.276326  0.0827071  0.240836   0.434629   0.0184611  0.031363    0.208422  0.504727   0.27561    0.639089   0.481855   0.573715   ```\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.tstudentcopulagen",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.tstudentcopulagen",
    "category": "function",
    "text": "tstudentcopulagen(t::Int, Σ::Matrix{Float64} = [1. 0.5; 0.5 1.], ν::Int=10)\n\nGenerates data using t-student Copula given Σ - correlation matrix, ν - degrees of freedom. If the symmetric covariance matrix is imputed, it will be converted into a correlation matrix automatically.\n\n```jldoctest julia> Random.seed!(43);\n\njulia> tstudentcopulagen(10) 10×2 Array{Float64,2}:  0.658199  0.937148  0.718244  0.92602  0.809521  0.0980325  0.263068  0.222589  0.187187  0.971109  0.245373  0.346428  0.452336  0.524498  0.57113   0.272525  0.498443  0.48082  0.113788  0.633349  ```\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.AMHτ2θ-Tuple{Float64}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.AMHτ2θ",
    "category": "method",
    "text": "AMHτ2θ(τ::Float64)\n\nReturns Ali-Mikhail-Haq copula θ parameter, givem Kendall\'s τ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.Debye",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.Debye",
    "category": "function",
    "text": "Debye(x::Float64, k::Int)\n\nReturns float64, Debye function Dₖ(x) value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.Ginv-Tuple{Float64,Float64}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.Ginv",
    "category": "method",
    "text": "Ginv(y::Float64, α::Float64)\n\nReturns Float64, helper for the joe/frank nested copula generator\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.InvlaJ-Tuple{Int64,Float64}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.InvlaJ",
    "category": "method",
    "text": "InvlaJ(n::Int, α::Float64)\n\nReturns Float64, n-th element of the inverse laplacea transform of generator of Joe nested copula\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.are_parameters_good-Tuple{Array{Float64,1},Float64}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.are_parameters_good",
    "category": "method",
    "text": "areparametersgood(ϕ::Vector{Float64}, θ::Float64)\n\ntests sufficient nesting condition given parameters, returns bool\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.copulagen-Union{Tuple{T}, Tuple{String,Array{T,2},Union{Float64, Int64}}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.copulagen",
    "category": "method",
    "text": "copulagen(copula::String, r::Matrix{Float}, θ::Union{Float64, Int})\n\nAuxiliary function used to generate data from archimedean copula (clayton, gumbel, frank or amh) parametrised by a single parameter θ given a matrix of independent [0,1] distributerd random vectors.\n\n  julia> copulagen(\"clayton\", [0.2 0.6 0.9; 0.4 0.5 0.8], 2.)\n  2×2 Array{Float64,2}:\n   0.675778  0.851993\n   0.687482  0.736394\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.elInvlaF-Tuple{Float64,Float64}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.elInvlaF",
    "category": "method",
    "text": "elInvlaF(θ₁::Float64, θ₀::Float64)\n\nReturns Int, a single sample of the inverse laplacea transform of the generator of nested Frank copula\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.fncopulagen-Tuple{Array{Float64,1},Array{Float64,1},Array{Float64,2}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.fncopulagen",
    "category": "method",
    "text": "fncopulagen(α::Vector{Float64}, β::Vector{Float64}, u::Matrix{Float64})\n\n\njulia> fncopulagen(2, [0.2, 0.4], [0.1, 0.1], [0.2 0.4 0.6; 0.3 0.5 0.7])\n2×3 Array{Float64,2}:\n 0.6  0.4  0.2\n 0.7  0.5  0.3\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.frankτ2θ-Tuple{Float64}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.frankτ2θ",
    "category": "method",
    "text": "frankτ2θ(τ::Float64)\n\nReturns a Frank copula θ parameter, givem Kendall\'s τ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.frechet-Tuple{Float64,Array{Float64,2}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.frechet",
    "category": "method",
    "text": "frechet(α::Float64, u::Matrix{Float64})\n\nreturns a matrix of size u with data generated using Frechet maximal copula with parameter α\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.getV0-Tuple{Union{Float64, Int64},Array{Float64,1},String}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.getV0",
    "category": "method",
    "text": "getV0(θ::Union{Float64, Int}, v::Vector{Float64}, copula::String)\n\nReturns Vector{Float} or Vector{Int} of realisations of axiliary variable V0 used to ganarate data from 1d archimedean copula with parameter Θ, given v: realisations of 1d variable uniformly distributed on [0,1]\n\n\njulia> getV0(2., [0.2, 0.4, 0.6, 0.8], \"clayton\")\n4-element Array{Float64,1}:\n 0.0641848\n 0.274996\n 0.708326\n 1.64237\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.getcors_advanced-Tuple{Array{Float64,2}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.getcors_advanced",
    "category": "method",
    "text": "getcors_advanced(x::Matrix{Float64})\n\nclusters data on a basis of a correlation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.levyel-Tuple{Union{Float64, Int64}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.levyel",
    "category": "method",
    "text": "levyel(θ::Union{Int, Float64})\n\nAn element from Levy stable distribution with parameters α = 1/θ, β = 1, γ = (cos(pi/(2*θ)))^θ and δ = 0. Return Float, given parameter ϴ of dostribution\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.levygen-Tuple{Union{Float64, Int64},Array{Float64,1}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.levygen",
    "category": "method",
    "text": "Return a Vector{Float64} of  of pseudo cdf of Levy stable distribution with parameters α = 1/θ, β = 1, γ = (cos(pi/(2*θ)))^θ and δ = 0, given a vector of Float64 - u\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.logseriescdf-Tuple{Float64}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.logseriescdf",
    "category": "method",
    "text": "logseriescdf(p::Float64)\n\nReturns a vector{Float} of the discrete cdf of logarithmic distribution\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.logseriesquantile-Tuple{Float64,Array{Float64,1}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.logseriesquantile",
    "category": "method",
    "text": "logseriesquantile(p::Float64, v::Vector{Float64})\n\nReturns a vector{Float} of the v[i] th quaintlie of logaritmic distribution with parameter p\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.mean_outer-Tuple{Array{Float64,2},Array{Array{Int64,1},1}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.mean_outer",
    "category": "method",
    "text": "mean_outer(Σ::Matrix{Float64}, part::Vector{Vector{Int}})\n\nreturns a mean correlation excluding internal one is subsets determined by part\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.meanΣ-Tuple{Array{Float64,2}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.meanΣ",
    "category": "method",
    "text": "meanΣ(Σ::Matrix{Float64})\n\nReturns Float64, a mean of the mean of lower diagal elements of a matrix\n\n\njulia> s= [1. 0.2 0.3; 0.2 1. 0.4; 0.3 0.4 1.];\n\njulia> meanΣ(s)\n0.3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.mocopula-Tuple{Array{Float64,2},Int64,Array{Float64,1}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.mocopula",
    "category": "method",
    "text": "mocopula(u::Matrix{Float64}, n::Int, λ::Vector{Float64})\n\nReturns: t x n Matrix{Float}, t realisations of n-variate data generated from Marshall-Olkin   copula with parameter vector λ of non-negative elements λₛ, given [0,1]ᵗˣˡ ∋ u, where   l = 2ⁿ-1\n\n\n  julia> mocopula([0.2 0.3 0.4; 0.3 0.4 0.6; 0.4 0.5 0.7], 2, [1., 1.5, 2.])\n  3×2 Array{Float64,2}:\n   0.252982  0.201189\n   0.464758  0.409039\n   0.585662  0.5357\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.nestedcopulag-Tuple{String,Array{Array{Int64,1},1},Array{Float64,1},Float64,Array{Float64,2}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.nestedcopulag",
    "category": "method",
    "text": "nestedcopulag(copula::String, n::Vector{Int}, ϕ::Vector{Float64}, θ::Float64, r::Matrix{Float64})\n\nGiven [0,1]ᵗˣˡ ∋ r , returns t realisations of l-1 variate data from nested archimedean copula\n\n```jldoctest julia> Random.seed!(43)\n\njulia> nestedcopulag(\"clayton\", [2, 2], [2., 3.], 1.1, [0.1 0.2 0.3 0.4 0.5; 0.2 0.3 0.4 0.5 0.6]) 2×4 Array{Float64,2}:  0.193949  0.230553  0.515404  0.557686  0.712034  0.761276  0.190189  0.208867  ```\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.nestedfrankgen-Tuple{Float64,Float64,Array{Int64,1}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.nestedfrankgen",
    "category": "method",
    "text": "nestedfrankgen(θ₁::Float64, θ₀::Float64, V0::Vector{Int})\n\nReturn vector of int, samples of inverse laplacea trensform of nested Frank copula given parametes and V0 - vector of samples if invlaplace of perents copula\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.nestedstep-Tuple{String,Array{Float64,2},Union{Array{Float64,1}, Array{Int64,1}},Float64,Float64}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.nestedstep",
    "category": "method",
    "text": "nestedstep(copula::String, u::Matrix{Float64}, V0::Union{Vector{Float64}, Vector{Int}}, ϕ::Float64, θ::Float64)\n\nGiven u ∈ [0,1]ᵗⁿ and V0 ∈ ℜᵗ returns u ∈ [0,1]ᵗⁿ for a given archimedean nested copula with inner copulas parameters ϕ anu auter copula parameter θ\n\njulia> nestedstep(\"clayton\", [0.2 0.8; 0.1 0.7], [0.2, 0.4], 2., 1.5)\n2×2 Array{Float64,2}:\n 0.283555  0.789899\n 0.322614  0.806915\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.norm2unifind",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.norm2unifind",
    "category": "function",
    "text": "norm2unifind(x::Matrix{Float64}, i::Vector{Int}, cop::String)\n\nReturn uniformly distributed data from x[:,i] given a copula familly.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.parameters-Tuple{Array{Float64,2},Array{Array{Int64,1},1}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.parameters",
    "category": "method",
    "text": "parameters(x::Matrix{Float64}, part::Vector{Vector{Int}})\n\nReturns parametrization by correlation for data x and partition part for nested copulas.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.phi-Tuple{Array{Float64,2},Union{Float64, Int64},String}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.phi",
    "category": "method",
    "text": "phi(u::Matrix{Float64}, θ::Union{Float64, Int}, copula::String)\n\nGiven a matrix t realisations of n variate data ℜᵗⁿ ∋ u = -log(rand(t,n))./V0 returns it transformed through an inverse generator of archimedean copula. Output is distributed uniformly on [0,1]ⁿ\n\n\njulia> julia> phi([0.2 0.6; 0.4 0.8], 2., \"clayton\")\n2×2 Array{Float64,2}:\n 0.845154  0.6742\n 0.745356  0.620174\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.rand2cop-Tuple{Array{Float64,1},Union{Float64, Int64},String}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.rand2cop",
    "category": "method",
    "text": "rand2cop(u1::Vector{Float64}, θ::Union{Int, Float64}, copula::String)\n\nReturns vector of data generated using copula::String given vector of uniformly distributed u1 and copula parameter θ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.sampleInvlaJ-Tuple{Float64,Float64}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.sampleInvlaJ",
    "category": "method",
    "text": "sampleInvlaJ(α::Float64, v::Float64)\n\nReturns Int, a sample of inverce laplacea transform of generator of Joe nested copula, given a parameter α and a random numver v ∈ [0,1]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.testbivθ-Tuple{Union{Float64, Int64},String}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.testbivθ",
    "category": "method",
    "text": "testbivθ(θ::Union{Float64}, copula::String)\n\nTests bivariate copula parameter\n\nclayton bivariate sub-copulas with parameters (θᵢ ≥ -1) ^ ∧ (θᵢ ≠ 0). amh – Ali-Mikhail-Haq bivariate sub-copulas with parameters -1 ≥ θᵢ ≥ 1 frank bivariate sub-copulas with parameters (θᵢ ≠ 0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.testind-Tuple{Array{Pair{String,Array{Int64,1}},1}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.testind",
    "category": "method",
    "text": "testind(inds::Vector{Pair{String,Vector{Int64}}})\n\nTests if the sub copula name is supported and if their indices are disjoint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.testnestedθϕ-Tuple{Array{Int64,1},Array{Float64,1},Float64,String}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.testnestedθϕ",
    "category": "method",
    "text": "testnestedθϕ(n::Vector{Int}, ϕ::Vector{Float64}, θ::Float64, copula::String)\n\nTests parameters, its hierarchy and size of parametes vector for nested archimedean copulas.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.testθ-Tuple{Union{Float64, Int64},String}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.testθ",
    "category": "method",
    "text": "function testθ(θ::Union{Float64, Int}, copula::String)\n\nTests the parameter θ value for archimedean copula, returns void\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.tiltedlevygen-Tuple{Array{Float64,1},Float64}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.tiltedlevygen",
    "category": "method",
    "text": "tiltedlevygen(V0::Vector{Float64}, α::Float64)\n\nReturns a Vector{Float} genrated from the expotencialy tilted levy stable pdf f(x; V0, α) = exp(-V0^α) g(x; α)/exp(-V0), where g(x; α) is a stable Levy pdf with parameters α = 1/θ, β = 1, γ = (cos(pi/(2*θ)))^θ and δ = 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.usebivρ-Tuple{Float64,String,String}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.usebivρ",
    "category": "method",
    "text": "Returns Float64, a copula parameter given a pearson or kendall correlation\n\nFor clayton or frank copula correlation fulfulling (-1 > ρᵢ > 1) ∧ (ρᵢ ≠ 0) For amh copula pearson correlation fulfilling -0.2816 > ρᵢ >= .5. while kendall -0.18 < τ < 1/3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.useρ-Tuple{Float64,String}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.useρ",
    "category": "method",
    "text": "useρ(ρ::Float64, copula::String)\n\nTests the available pearson correlation for archimedean copula, returns Float, corresponding copula parameter θ.\n\n\njulia> useρ(0.75, \"gumbel\")\n2.294053859606698\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.useτ-Tuple{Float64,String}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.useτ",
    "category": "method",
    "text": "useτ(ρ::Float64, copula::String)\n\nTests the available kendall\'s correlation for archimedean copula, returns Float, corresponding copula parameter θ.\n\n\njulia> useτ(0.5, \"clayton\")\n2.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.Σ_theor-Tuple{Array{Float64,1},Float64,Array{Array{Int64,1},1}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.Σ_theor",
    "category": "method",
    "text": "Σ_theor(ϕ::Vector{Float64}, θ::Float64, part::Vector{Vector{Int}})\n\nreturns a matrix indicating a theoretical correlation according togiven parameters and partition\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.ρ2θ-Tuple{Union{Float64, Int64},String}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.ρ2θ",
    "category": "method",
    "text": "ρ2θ(ρ::Union{Float64, Int}, copula::String)\n\nReturns a Float, an archimedean copula parameter given expected Spermann correlation  ρ and a copula.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.τ2θ-Tuple{Float64,String}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.τ2θ",
    "category": "method",
    "text": "τ2θ(τ::Float64, copula::String)\n\nReturns Float, a single parameter of Archimedean copula, given the Kenalss τ correlation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatagenCopulaBased.τ2λ-Tuple{Array{Float64,1},Array{Float64,1}}",
    "page": "Docstrings",
    "title": "DatagenCopulaBased.τ2λ",
    "category": "method",
    "text": "τ2λ(τ::Vector{Float64}, λ::Vector{Float64})\n\nSuplement the vector of λ patrameters of Marshall-Olkin copula, given some of those parameters and a vector fo Kendall\'s τ correlations. Wroks fo 2,3 variate MO copula\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DatagenCopulaBased]\nOrder = [:type, :function]"
},

]}
