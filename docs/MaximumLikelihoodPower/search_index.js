var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MaximumLikelihoodPower-1",
    "page": "Readme",
    "title": "MaximumLikelihoodPower",
    "category": "section",
    "text": "Linux, OSX: (Image: Build Status) &nbsp; Windows: (Image: Build Status) &nbsp; &nbsp; &nbsp; (Image: Coverage Status) (Image: codecov.io)Physicists love power laws. But, they don\'t always use the best methods for extracting powers from empirical data."
},

{
    "location": "#Notebook-example-1",
    "page": "Readme",
    "title": "Notebook example",
    "category": "section",
    "text": "Here is a notebook using MaximumLikelihoodPower.jl (this notebook is in the Notebooks folder in this distribution)."
},

{
    "location": "#Command-line-example-1",
    "page": "Readme",
    "title": "Command-line example",
    "category": "section",
    "text": "import MaximumLikelihoodPower\nconst MLE = MaximumLikelihoodPower\n\njulia> seed = 11; α = 0.5;\n\n# Get 10^6 samples from the Pareto distribution\njulia> data = MLE.Example.makeparetodata(α, seed);\n\n# Minimize the Kolmogorov-Smirnov statistic\n# The second value returned is the minimizing alpha\njulia> MLE.scanKS(data, range(.4, length=11, stop=.6))\n3-element Array{Float64,1}:\n 0.48\n 0.5\n 0.52"
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": ""
},

{
    "location": "#mle-1",
    "page": "Readme",
    "title": "mle",
    "category": "section",
    "text": "    (estimate, stderr) = mle(data::AbstractVector)Return the maximum likelihood estimate and standard error of the exponent of a power law applied to the sorted vector data."
},

{
    "location": "#KSstatistic-1",
    "page": "Readme",
    "title": "KSstatistic",
    "category": "section",
    "text": "    KSstatistic(data::AbstractVector, alpha) --> Float64Return the Kolmogorov-Smirnov statistic comparing data to a power law with power alpha. The elements of data are assumed to be unique. Minimizing the KS statistic over alpha is another way to estimate the parameter of the sample distribution. See testKS in the test directory."
},

{
    "location": "#scanKS(data,-powers)-1",
    "page": "Readme",
    "title": "scanKS(data, powers)",
    "category": "section",
    "text": "Compute the Kolmogorov Smirnov statistic for several values of α in the iterator powers. Return the value of α that minimizes the KS statistic and the two neighboring values."
},

{
    "location": "#mleKS-1",
    "page": "Readme",
    "title": "mleKS",
    "category": "section",
    "text": "    mleKS{T<:AbstractFloat}(data::AbstractVector{T})Return the maximum likelihood estimate and standard error of the exponent of a power law applied to the sorted vector data. Also return the Kolmogorov-Smirnov statistic. Results are returned in an instance of type MLEKS."
},

{
    "location": "#scanmle-1",
    "page": "Readme",
    "title": "scanmle",
    "category": "section",
    "text": "    scanmle(data::AbstractVector; ntrials=100, stderrcutoff=0.1, useKS=false)\n````\n\nPerform `mle` approximately `ntrials` times on `data`, increasing `xmin`. Stop trials\nif the `stderr` of the estimate `alpha` is greater than `stderrcutoff`. Return an object\ncontaining statistics about the scan.\n\n### comparescan\njulia     comparescan(mle::MLEKS, i, data, mlescan::MLEScan) ``compare the results of MLE estimationmleto record results inmlescanand updatemlescan`."
},

{
    "location": "#Reference-1",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": "Clauset, A., Shalizi, C. R., & Newman, M. E. J. (2009). Power-Law Distributions in Empirical Data. SIAM Review, 51(4), 661–703. http://dx.doi.org/10.1137/070710111, https://arxiv.org/abs/0706.1062<!–  LocalWords:  MaximumLikelihoodPower OSX nbsp codecov io  –> <!–  LocalWords:  mle stderr KSstatistic  –>"
},

{
    "location": "autodocs/#MaximumLikelihoodPower.KSstatistic-Union{Tuple{T}, Tuple{AbstractArray{T,1},Any}} where T",
    "page": "Docstrings",
    "title": "MaximumLikelihoodPower.KSstatistic",
    "category": "method",
    "text": "KSstatistic(data::AbstractVector, alpha)\n\nReturn the Колмогоров-Смирнов (Kolmogorov-Smirnov) statistic comparing data to a power law with power alpha. The elements of data are assumed to be unique.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MaximumLikelihoodPower.mle-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "MaximumLikelihoodPower.mle",
    "category": "method",
    "text": "(estimate, stderr) = mle(data::AbstractVector)\n\nReturn the maximum likelihood estimate and standard error of the exponent of a power law applied to the sorted vector data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MaximumLikelihoodPower.mleKS-Tuple{AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "MaximumLikelihoodPower.mleKS",
    "category": "method",
    "text": "mleKS{T<:AbstractFloat}(data::AbstractVector{T})\n\nReturn the maximum likelihood estimate and standard error of the exponent of a power law applied to the sorted vector data. Also return the Kolmogorov-Smirnov statistic. Results are returned in an instance of type MLEKS.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MaximumLikelihoodPower.scanKS-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "MaximumLikelihoodPower.scanKS",
    "category": "method",
    "text": "scanKS(data, powers)\n\nCompute the Kolmogorov Smirnov statistic for several values of α in the iterator powers. Return the value of α that minimizes the KS statistic and the two neighboring values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MaximumLikelihoodPower.scanmle-Tuple{Any}",
    "page": "Docstrings",
    "title": "MaximumLikelihoodPower.scanmle",
    "category": "method",
    "text": "scanmle(data; ntrials=100, stderrcutoff=0.1, useKS=false)\n\nPerform mle approximately ntrials times on data, increasing xmin. Stop trials if the standard error of the estimate alpha is greater than stderrcutoff. If useKS is true, then the application of mle giving the smallest KS statistic is returned. Return an object containing statistics of the scan.\n\nscanmle is intended to analayze the power-law behavior of the tail of data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MaximumLikelihoodPower.MLEKS",
    "page": "Docstrings",
    "title": "MaximumLikelihoodPower.MLEKS",
    "category": "type",
    "text": "MLEKS{T}\n\nContainer for storing results of MLE estimate and Kolmogorov-Smirnov statistic of the exponent of a power law.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MaximumLikelihoodPower.MLEScan",
    "page": "Docstrings",
    "title": "MaximumLikelihoodPower.MLEScan",
    "category": "type",
    "text": "MLEScan{T <: AbstractFloat}\n\nRecord best estimate of alpha and associated parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MaximumLikelihoodPower._scanmle-Tuple{Any,AbstractArray{#s35,1} where #s35<:Integer,Any,Any}",
    "page": "Docstrings",
    "title": "MaximumLikelihoodPower._scanmle",
    "category": "method",
    "text": "_scanmle{T<:AbstractFloat, V <: Integer}(data::AbstractVector{T}, range::AbstractVector{V},stderrcutoff)\n\nInner function for scanning power-law mle for power alpha over xmin. range specifies which xmin to try. stderrcutoff specifies a standard error in alpha at which we stop trials. range should be increasing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MaximumLikelihoodPower.comparescan-Tuple{MaximumLikelihoodPower.MLEScan,MaximumLikelihoodPower.MLEKS,Any,Integer}",
    "page": "Docstrings",
    "title": "MaximumLikelihoodPower.comparescan",
    "category": "method",
    "text": "comparescan(mle::MLEKS, i, data, mlescan::MLEScan)\n\nCompare the results of MLE estimation mle to record results in mlescan and update mlescan.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [MaximumLikelihoodPower]\nOrder = [:type, :function]"
},

]}
