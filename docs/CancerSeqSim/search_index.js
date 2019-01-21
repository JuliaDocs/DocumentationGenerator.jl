var documenterSearchIndex = {"docs": [

{
    "location": "#CancerSeqSim.simulate-Tuple{Any,Any,Bool}",
    "page": "Home",
    "title": "CancerSeqSim.simulate",
    "category": "method",
    "text": "simulate(minclonesize, maxclonesize, independentclones::Bool; <keyword arguments>)\n\nReturn simulation with frequency of subclones >minclones & <maxclonesize and specify whether subclones are independent or not (ie nested or not). Only applicable to >1 subclone.\n\n\n\n\n\n"
},

{
    "location": "#CancerSeqSim.simulate-Tuple{Any,Any,Float64,Int64}",
    "page": "Home",
    "title": "CancerSeqSim.simulate",
    "category": "method",
    "text": "simulate(minclonesize, maxclonesize, mindiff; <keyword arguments>)\n\nReturn simulation with frequency of subclones >minclones & <maxclonesize and subclone frequency are at least mindiff and have at least minmutations mutations.\n\n\n\n\n\n"
},

{
    "location": "#CancerSeqSim.simulate-Tuple{Any,Any,Float64}",
    "page": "Home",
    "title": "CancerSeqSim.simulate",
    "category": "method",
    "text": "simulate(minclonesize, maxclonesize, mindiff; <keyword arguments>)\n\nReturn simulation with frequency of subclones >minclones & <maxclonesize and subclone frequency are at least mindiff apart.\n\n\n\n\n\n"
},

{
    "location": "#CancerSeqSim.simulate-Tuple{Any,Any}",
    "page": "Home",
    "title": "CancerSeqSim.simulate",
    "category": "method",
    "text": "simulate(minclonesize, maxclonesize; <keyword arguments>)\n\nReturn simulation with frequency of subclones >minclones & <maxclonesize.\n\n\n\n\n\n"
},

{
    "location": "#CancerSeqSim.simulate-Tuple{}",
    "page": "Home",
    "title": "CancerSeqSim.simulate",
    "category": "method",
    "text": "simulate(; <keyword arguments>)\n\nSimulate a stochastic model of tumour growth with a single subclone introduced at a random time and with a random fitness advantage. Output return synthetic sequencing data. ...\n\nArguments\n\nread_depth = 200.0: Mean read depth of the target data set\ndetectionlimit = 5/read_depth: Ability to detect low frequency variants. Assumes 5 reads are needed to call a variant.\nμ = 10.0: Mutation rate per division per genome (this will timesed by ploidy for the mutation rate per cell). At each division a Poisson random variable with mean μ is sampled.\nclonalmutations = 100.0: Number of clonal mutations present in the first cell.\nnclones = 1: Number of subclones introduced\nNmax = 10^4: Maximum population size.\nρ = 0.0: Overdispersion parameter for beta-binomial model of sequencing data. ρ = 0.0 means model is binomial sampling\ntimefunction = exptime: Function for KMC algorithm timestep. exptime returns an exponentially distributed random variable, if you would rather return the mean of the distribution define a function that returns 1. ie returnone() = 1.\nploidy = 2: ploidy of the genome\nd = 0.0: Death rate of the thost population in the tumour\nb = log(2): Birth rate of the population. Set to log(2) so that tumour doubles with each unit increase in t in the absence of cell death.\nfixedmu = false: If set to false number of mutations per division is fixed and not sampled from a poisson distribution.\n\n...\n\n\n\n\n\n"
},

{
    "location": "#CancerSeqSim.simulatestemcells-Tuple{}",
    "page": "Home",
    "title": "CancerSeqSim.simulatestemcells",
    "category": "method",
    "text": "simulatestemcells(; <keyword arguments>)\n\nSimulate a stochastic model of tumour growth with a stem cell architecture. Output return synthetic sequencing data. ...\n\nArguments\n\nα = 0.1: Symmetric division rate\nmaxdivisions = 5: Maximum number of divisions of differentiated cells.\nread_depth = 200.0: Mean read depth of the target data set\ndetectionlimit = 5/read_depth: Ability to detect low frequency variants. Assumes 5 reads are needed to call a variant.\nμ = 10.0: Mutation rate per division. At each division a Poisson random variable with mean μ is sampled.\nclonalmutations = 100.0: Number of clonal mutations present in the first cell.\nNmax = 10^4: Maximum population size.\nρ = 0.0: Overdispersion parameter for beta-binomial model of sequencing data. ρ = 0.0 means model is binomial sampling\ntimefunction = exptime: Function for KMC algorithm timestep. exptime returns an exponentially distributed random variable, if you would rather return the mean of the distribution define a function that returns 1. ie returnone() = 1.\nploidy = 2: ploidy of the genome\nd = 0.0: Death rate of the thost population in the tumour\nb = log(2): Birth rate of the population. Set to log(2) so that tumour doubles with each unit increase in t in the absence of cell death.\nfixedmu = false: If set to false number of mutations per division is fixed and not sampled from a poisson distribution.\n\n...\n\n\n\n\n\n"
},

{
    "location": "#Base.show-Tuple{IO,CancerSeqSim.Simulation}",
    "page": "Home",
    "title": "Base.show",
    "category": "method",
    "text": "show(sresult::Simulation)\n\nPrint out summary of simulation.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CancerSeqSim]\nOrder = [:type, :function]"
},

]}
