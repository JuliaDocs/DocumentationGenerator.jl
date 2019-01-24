var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CancerSeqSim-1",
    "page": "Readme",
    "title": "CancerSeqSim",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Simulate tumour VAFs with different clonal structures. Package is written in the Julia programming language.Package hosts code related to the simulation framework used in the following publications:Quantification of subclonal selection in cancer from bulk sequencing data\nIdentification of neutral tumor evolution across cancer types"
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "To download the package, once you\'re in a Julia session type the following command:using Pkg\nPkg.add(\"CancerSeqSim.jl\")"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "To simulate a tumour and generate synthetic sequencing data simply invoke the simulate command. There are many arguments that can be changed, for example it is possible to change the mutation rate or the number of subclones introduced into the population. To see all the optional arguments you can type ?simulate in a julia session. The command below will simulate a tumour with a single subclone with frequency between 0.4 and 0.6, mutation rate = 10 and 200 clonalmutations.simdata = simulate(0.4, 0.6, μ = 10.0, clonalmutations = 200)A summary of the simulation will automatically be printed out.A VAF histogram can be generated which uses the Plots.jl package, so you\'ll need to install and load the package first:Pkg.add(\"Plots.jl\")\nusing PlotsThen using the plot function on a simulation object will generate the histogram, the red line shows the frequency of the subclone.plot(simdata)(Image: plot)"
},

{
    "location": "autodocs/#CancerSeqSim.simulate-Tuple{Any,Any,Bool}",
    "page": "Docstrings",
    "title": "CancerSeqSim.simulate",
    "category": "method",
    "text": "simulate(minclonesize, maxclonesize, independentclones::Bool; <keyword arguments>)\n\nReturn simulation with frequency of subclones >minclones & <maxclonesize and specify whether subclones are independent or not (ie nested or not). Only applicable to >1 subclone.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CancerSeqSim.simulate-Tuple{Any,Any,Float64,Int64}",
    "page": "Docstrings",
    "title": "CancerSeqSim.simulate",
    "category": "method",
    "text": "simulate(minclonesize, maxclonesize, mindiff; <keyword arguments>)\n\nReturn simulation with frequency of subclones >minclones & <maxclonesize and subclone frequency are at least mindiff and have at least minmutations mutations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CancerSeqSim.simulate-Tuple{Any,Any,Float64}",
    "page": "Docstrings",
    "title": "CancerSeqSim.simulate",
    "category": "method",
    "text": "simulate(minclonesize, maxclonesize, mindiff; <keyword arguments>)\n\nReturn simulation with frequency of subclones >minclones & <maxclonesize and subclone frequency are at least mindiff apart.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CancerSeqSim.simulate-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "CancerSeqSim.simulate",
    "category": "method",
    "text": "simulate(minclonesize, maxclonesize; <keyword arguments>)\n\nReturn simulation with frequency of subclones >minclones & <maxclonesize.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CancerSeqSim.simulate-Tuple{}",
    "page": "Docstrings",
    "title": "CancerSeqSim.simulate",
    "category": "method",
    "text": "simulate(; <keyword arguments>)\n\nSimulate a stochastic model of tumour growth with a single subclone introduced at a random time and with a random fitness advantage. Output return synthetic sequencing data. ...\n\nArguments\n\nread_depth = 200.0: Mean read depth of the target data set\ndetectionlimit = 5/read_depth: Ability to detect low frequency variants. Assumes 5 reads are needed to call a variant.\nμ = 10.0: Mutation rate per division per genome (this will timesed by ploidy for the mutation rate per cell). At each division a Poisson random variable with mean μ is sampled.\nclonalmutations = 100.0: Number of clonal mutations present in the first cell.\nnclones = 1: Number of subclones introduced\nNmax = 10^4: Maximum population size.\nρ = 0.0: Overdispersion parameter for beta-binomial model of sequencing data. ρ = 0.0 means model is binomial sampling\ntimefunction = exptime: Function for KMC algorithm timestep. exptime returns an exponentially distributed random variable, if you would rather return the mean of the distribution define a function that returns 1. ie returnone() = 1.\nploidy = 2: ploidy of the genome\nd = 0.0: Death rate of the thost population in the tumour\nb = log(2): Birth rate of the population. Set to log(2) so that tumour doubles with each unit increase in t in the absence of cell death.\nfixedmu = false: If set to false number of mutations per division is fixed and not sampled from a poisson distribution.\n\n...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CancerSeqSim.simulatestemcells-Tuple{}",
    "page": "Docstrings",
    "title": "CancerSeqSim.simulatestemcells",
    "category": "method",
    "text": "simulatestemcells(; <keyword arguments>)\n\nSimulate a stochastic model of tumour growth with a stem cell architecture. Output return synthetic sequencing data. ...\n\nArguments\n\nα = 0.1: Symmetric division rate\nmaxdivisions = 5: Maximum number of divisions of differentiated cells.\nread_depth = 200.0: Mean read depth of the target data set\ndetectionlimit = 5/read_depth: Ability to detect low frequency variants. Assumes 5 reads are needed to call a variant.\nμ = 10.0: Mutation rate per division. At each division a Poisson random variable with mean μ is sampled.\nclonalmutations = 100.0: Number of clonal mutations present in the first cell.\nNmax = 10^4: Maximum population size.\nρ = 0.0: Overdispersion parameter for beta-binomial model of sequencing data. ρ = 0.0 means model is binomial sampling\ntimefunction = exptime: Function for KMC algorithm timestep. exptime returns an exponentially distributed random variable, if you would rather return the mean of the distribution define a function that returns 1. ie returnone() = 1.\nploidy = 2: ploidy of the genome\nd = 0.0: Death rate of the thost population in the tumour\nb = log(2): Birth rate of the population. Set to log(2) so that tumour doubles with each unit increase in t in the absence of cell death.\nfixedmu = false: If set to false number of mutations per division is fixed and not sampled from a poisson distribution.\n\n...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.show-Tuple{IO,Simulation}",
    "page": "Docstrings",
    "title": "Base.show",
    "category": "method",
    "text": "show(sresult::Simulation)\n\nPrint out summary of simulation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CancerSeqSim]\nOrder = [:type, :function]"
},

]}
