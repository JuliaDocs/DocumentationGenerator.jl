var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AffineInvariantMCMC-1",
    "page": "Readme",
    "title": "AffineInvariantMCMC",
    "category": "section",
    "text": "(Image: AffineInvariantMCMC) (Image: AffineInvariantMCMC) (Image: AffineInvariantMCMC) (Image: Build Status) (Image: Coverage Status)AffineInvariantMCMC performs Bayesian sampling using Goodman & Weare\'s Affine Invariant Markov chain Monte Carlo (MCMC) Ensemble sampler. AffineInvariantMCMC is a module of MADS. Goodman & Weare\'s algorithm implementation in Python is called Emcee.Reference:Goodman, Jonathan, and Jonathan Weare. \"Ensemble samplers with affine invariance.\" Communications in applied mathematics and computational science 5.1 (2010): 65-80."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "import AffineInvariantMCMC\n\nnumdims = 5\nnumwalkers = 100\nthinning = 10\nnumsamples_perwalker = 1000\nburnin = 100\n\nconst stds = exp(5 * randn(numdims))\nconst means = 1 + 5 * rand(numdims)\nllhood = x->begin\n	retval = 0.\n	for i in 1:length(x)\n		retval -= .5 * ((x[i] - means[i]) / stds[i]) ^ 2\n	end\n	return retval\nend\nx0 = rand(numdims, numwalkers) * 10 - 5\nchain, llhoodvals = AffineInvariantMCMC.sample(llhood, numwalkers, x0, burnin, 1)\nchain, llhoodvals = AffineInvariantMCMC.sample(llhood, numwalkers, chain[:, :, end], numsamples_perwalker, thinning)\nflatchain, flatllhoodvals = AffineInvariantMCMC.flattenmcmcarray(chain, llhoodvals)"
},

{
    "location": "#MADS-1",
    "page": "Readme",
    "title": "MADS",
    "category": "section",
    "text": "MADS (Model Analysis & Decision Support) is an integrated open-source high-performance computational (HPC) framework in Julia. MADS can execute a wide range of data- and model-based analyses:Sensitivity Analysis\nParameter Estimation\nModel Inversion and Calibration\nUncertainty Quantification\nModel Selection and Model Averaging\nModel Reduction and Surrogate Modeling\nMachine Learning and Blind Source Separation\nDecision Analysis and SupportMADS has been tested to perform HPC simulations on a wide-range multi-processor clusters and parallel environments (Moab, Slurm, etc.). MADS utilizes adaptive rules and techniques which allows the analyses to be performed with a minimum user input. The code provides a series of alternative algorithms to execute each type of data- and model-based analyses."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "All the available MADS modules and functions are described at madsjulia.github.io"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"AffineInvariantMCMC\")"
},

{
    "location": "#Installation-behind-a-firewall-1",
    "page": "Readme",
    "title": "Installation behind a firewall",
    "category": "section",
    "text": "Julia uses git for the package management. To install Julia packages behind a firewall, add the following lines in the .gitconfig file in your home directory:[url \"https://\"]\n        insteadOf = git://or execute:git config --global url.\"https://\".insteadOf git://Set proxies:export ftp_proxy=http://proxyout.<your_site>:8080\nexport rsync_proxy=http://proxyout.<your_site>:8080\nexport http_proxy=http://proxyout.<your_site>:8080\nexport https_proxy=http://proxyout.<your_site>:8080\nexport no_proxy=.<your_site>For example, if you are doing this at LANL, you will need to execute the following lines in your bash command-line environment:export ftp_proxy=http://proxyout.lanl.gov:8080\nexport rsync_proxy=http://proxyout.lanl.gov:8080\nexport http_proxy=http://proxyout.lanl.gov:8080\nexport https_proxy=http://proxyout.lanl.gov:8080\nexport no_proxy=.lanl.gov"
},

{
    "location": "#MADS-examples-1",
    "page": "Readme",
    "title": "MADS examples",
    "category": "section",
    "text": "In Julia REPL, do the following commands:import MadsTo explore getting-started instructions, execute:Mads.help()There are various examples located in the examples directory of the Mads repository.For example, executeinclude(Mads.madsdir * \"/../examples/contamination/contamination.jl\")to perform various example analyses related to groundwater contaminant transport, or executeinclude(Mads.madsdir * \"/../examples/bigdt/bigdt.jl\")to perform Bayesian Information Gap Decision Theory (BIG-DT) analysis."
},

{
    "location": "#Developers-1",
    "page": "Readme",
    "title": "Developers",
    "category": "section",
    "text": "Velimir (monty) Vesselinov (publications)\nDaniel O\'Malley (publications)\nsee also"
},

{
    "location": "#Publications,-Presentations,-Projects-1",
    "page": "Readme",
    "title": "Publications, Presentations, Projects",
    "category": "section",
    "text": "mads.lanl.gov/\nees.lanl.gov/monty"
},

{
    "location": "autodocs/#AffineInvariantMCMC.flattenmcmcarray-Tuple{Array,Array}",
    "page": "Docstrings",
    "title": "AffineInvariantMCMC.flattenmcmcarray",
    "category": "method",
    "text": "Flatten MCMC arrays\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AffineInvariantMCMC.sample",
    "page": "Docstrings",
    "title": "AffineInvariantMCMC.sample",
    "category": "function",
    "text": "Bayesian sampling using Goodman & Weare\'s Affine Invariant Markov chain Monte Carlo (MCMC) Ensemble sampler (aka Emcee)\n\nAffineInvariantMCMC.sample(llhood, numwalkers=10, numsamples_perwalker=100, thinning=1)\n\nArguments:\n\nllhood : function estimating loglikelihood (for example, generated using Mads.makearrayloglikelihood())\nnumwalkers : number of walkers\nx0 : normalized initial parameters (matrix of size (length(params), numwalkers))\nthinning : removal of any thinning realization\na :\n\nReturns:\n\nmcmcchain : final MCMC chain\nllhoodvals : log likelihoods of the final samples in the chain\n\nReference:\n\nGoodman & Weare, \"Ensemble samplers with affine invariance\", Communications in Applied Mathematics and Computational Science, DOI: 10.2140/camcos.2010.5.65, 2010.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AffineInvariantMCMC]\nOrder = [:type, :function]"
},

]}
