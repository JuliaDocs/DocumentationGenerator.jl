var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: AdaptiveRejectionSampling) (Image: AdaptiveRejectionSampling)(Image: Coverage Status) (Image: codecov)(Image: MIT Licence)"
},

{
    "location": "#AdaptiveRejectionSampling-1",
    "page": "Readme",
    "title": "AdaptiveRejectionSampling",
    "category": "section",
    "text": "using AdaptiveRejectionSampling\nusing Plots"
},

{
    "location": "#Sampling-from-a-shifted-normal-distribution-1",
    "page": "Readme",
    "title": "Sampling from a shifted normal distribution",
    "category": "section",
    "text": "# Define function to be sampled\nμ, σ = 1.0, 2.0\nf(x) = exp(-0.5(x - μ)^2 / σ^2) / sqrt(2pi * σ^2) \nsupport = (-Inf, Inf)\n\n# Build the sampler and simulate 10,000 samples\nsampler = RejectionSampler(f, support, max_segments = 5)\n@time sim = run_sampler!(sampler, 10000);  0.010434 seconds (192.15 k allocations: 3.173 MiB)Let\'s verify the result# Plot the results and compare to target distribution\nx = range(-10.0, 10.0, length=100)\nenvelop = [eval_envelop(sampler.envelop, xi) for xi in x]\ntarget = [f(xi) for xi in x]\n\nhistogram(sim, normalize = true, label = \"Histogram\")\nplot!(x, [target envelop], width = 2, label = [\"Normal(μ, σ)\" \"Envelop\"])(Image: )"
},

{
    "location": "#Let\'s-try-a-Gamma-1",
    "page": "Readme",
    "title": "Let\'s try a Gamma",
    "category": "section",
    "text": "α, β = 5.0, 2.0\nf(x) = β^α * x^(α-1) * exp(-β*x) / gamma(α)\nsupport = (0.0, Inf)\n\n# Build the sampler and simulate 10,000 samples\nsampler = RejectionSampler(f, support)\n@time sim = run_sampler!(sampler, 10000) \n\n# Plot the results and compare to target distribution\nx = range(0.0, 5.0, length=100)\nenvelop = [eval_envelop(sampler.envelop, xi) for xi in x]\ntarget = [f(xi) for xi in x]\n\nhistogram(sim, normalize = true, label = \"Histogram\")\nplot!(x, [target envelop], width = 2, label = [\"Gamma(α, β)\" \"Envelop\"])  0.007299 seconds (182.00 k allocations: 3.027 MiB)(Image: )"
},

{
    "location": "#Truncated-distributions-and-unknown-normalisation-constant-1",
    "page": "Readme",
    "title": "Truncated distributions and unknown normalisation constant",
    "category": "section",
    "text": "We don\'t to provide an exact density–it will sample up to proportionality–and we can do truncated distributionsα, β = 5.0, 2.0\nf(x) = β^α * x^(α-1) * exp(-β*x) / gamma(α)\nsupport = (1.0, 3.5)\n\n# Build the sampler and simulate 10,000 samples\nsampler = RejectionSampler(f, support)\n@time sim = run_sampler!(sampler, 10000) \n\n# Plot the results and compare to target distribution\nx = range(0.01, 8.0, length=100)\nenvelop = [eval_envelop(sampler.envelop, xi) for xi in x]\ntarget = [f(xi) for xi in x]\n\nhistogram(sim, normalize = true, label = \"histogram\")\nplot!(x, [target envelop], width = 2, label = [\"target density\" \"envelop\"])  0.007766 seconds (181.82 k allocations: 3.024 MiB)(Image: )"
},

{
    "location": "#Elastic-Net-distribution-1",
    "page": "Readme",
    "title": "Elastic Net distribution",
    "category": "section",
    "text": "The following example arises from elastic net regression and smoothing problems. In these cases, the integration constants are not available analytically.# Define function to be sampled\nfunction f(x, μ, λ1, λ2)\n      δ = x - μ\n      nl = λ1 * abs(δ) + λ2 * δ^2\n      return exp(-nl)\nend\nsupport = (-Inf, Inf)\n\n# Build the sampler and simulate 10,000 samples\nμ, λ1, λ2 = 0.0, 2.0, 1.0\nsampler = RejectionSampler(x -> f(x, μ, λ1, λ2), support, max_segments = 5)\n@time sim = run_sampler!(sampler, 10000);\n\n# Plot the results and compare to target distribution\nx = range(-2.3, 2.3, length=100)\nenvelop = [eval_envelop(sampler.envelop, xi) for xi in x]\ntarget = [f(xi, μ, λ1, λ2) for xi in x]\n\nhistogram(sim, normalize = true, label = \"histogram\")\nplot!(x, [target envelop], width = 2, label = [\"target density\" \"envelop\"])(Image: )"
},

{
    "location": "autodocs/#AdaptiveRejectionSampling.Envelop",
    "page": "Docstrings",
    "title": "AdaptiveRejectionSampling.Envelop",
    "category": "type",
    "text": "Envelop(lines::Vector{Line}, support::Tuple{Float64, Float64})\n\nA piecewise linear function with k segments defined by the lines L_1, ..., L_k and cutpoints c_1, ..., c_k+1 with c1 = support[1] and c2 = support[2]. A line Lk is active in the segment [ck, ck+1], and it\'s assigned a weight wk based on exp_integral. The weighted integral over c1 to ck+1 is one, so that the envelop is interpreted as a density.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AdaptiveRejectionSampling.Line",
    "page": "Docstrings",
    "title": "AdaptiveRejectionSampling.Line",
    "category": "type",
    "text": "Line(slope::Float64, intercept::Float64)\n\nBasic ensamble-unit for an envelop.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AdaptiveRejectionSampling.Objective",
    "page": "Docstrings",
    "title": "AdaptiveRejectionSampling.Objective",
    "category": "type",
    "text": "Objective(logf::Function, support:)\nObjective(logf::Function, grad::Function)\n\nConvenient structure to store the objective function to be sampled. It must receive the logarithm of f and not f directly. It uses automatic differentiation by default, but the user can provide the derivative optionally.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AdaptiveRejectionSampling.RejectionSampler",
    "page": "Docstrings",
    "title": "AdaptiveRejectionSampling.RejectionSampler",
    "category": "type",
    "text": "RejectionSampler(f::Function, support::Tuple{Float64, Float64}[ ,δ::Float64])\nRejectionSampler(f::Function, support::Tuple{Float64, Float64}, init::Tuple{Float64, Float64})\n\nAn adaptive rejection sampler to obtain iid samples from a logconcave function f, supported in the domain support = (support[1], support[2]). To create the object, two initial points init = init[1], init[2] such that loff\'(init[1]) > 0 and logf\'(init[2]) < 0 are necessary. If they are not provided, the constructor will perform a greedy search based on δ.\n\nThe argument support must be of the form (-Inf, Inf), (-Inf, a), (b, Inf), (a,b), and it represent the interval in which f has positive value, and zero elsewhere.\n\nKeyword arguments\n\nmax_segments::Int = 10 : max size of envelop, the rejection-rate is usually slow with a small number of segments\nmax_failed_factor::Float64 = 0.001: level at which throw an error if one single sample has a rejection rate   exceeding this value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AdaptiveRejectionSampling.add_segment!-Tuple{Envelop,Line}",
    "page": "Docstrings",
    "title": "AdaptiveRejectionSampling.add_segment!",
    "category": "method",
    "text": "add_segment!(e::Envelop, l::Line)\n\nAdds a new line segment to an envelop based on the value of its slope (slopes must be decreasing always in the envelop). The cutpoints are automatically determined by intersecting the line with the adjacent lines.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AdaptiveRejectionSampling.eval_envelop-Tuple{Envelop,Float64}",
    "page": "Docstrings",
    "title": "AdaptiveRejectionSampling.eval_envelop",
    "category": "method",
    "text": "eval_envelop(e::Envelop, x::Float64)\n\nEval point a point x in the piecewise linear function defined by e. Necessary for evaluating the density assigned to the point x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AdaptiveRejectionSampling.run_sampler!-Tuple{RejectionSampler,Int64}",
    "page": "Docstrings",
    "title": "AdaptiveRejectionSampling.run_sampler!",
    "category": "method",
    "text": "run_sampler!(sampler::RejectionSampler, n::Int)\n\nIt draws n iid samples of the objective function of sampler, and at each iteration it adapts the envelop of sampler by adding new segments to its envelop.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AdaptiveRejectionSampling.sample_envelop-Tuple{Envelop}",
    "page": "Docstrings",
    "title": "AdaptiveRejectionSampling.sample_envelop",
    "category": "method",
    "text": "sample_envelop(p::Envelop)\n\nSamples an element from the density defined by the envelop e with it\'s exponential weights. See Envelop for details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AdaptiveRejectionSampling.exp_integral-Tuple{Line,Float64,Float64}",
    "page": "Docstrings",
    "title": "AdaptiveRejectionSampling.exp_integral",
    "category": "method",
    "text": "exp_integral(l::Line, x1::Float64, x2::Float64)\n\nComputes the integral     LaTeX int_x_1 ^ x_2 expax + b dx The resulting value is the weight assigned to the segment [x1, x2] in the envelop\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AdaptiveRejectionSampling.intersection-Tuple{Line,Line}",
    "page": "Docstrings",
    "title": "AdaptiveRejectionSampling.intersection",
    "category": "method",
    "text": "intersection(l1::Line, l2::Line)\n\nFinds the horizontal coordinate of the intersection between lines\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AdaptiveRejectionSampling]\nOrder = [:type, :function]"
},

]}
