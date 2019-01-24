var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DPClustering-1",
    "page": "Readme",
    "title": "DPClustering",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Perform Dirichlet clustering on Varaint Allele Frequncies (VAFs) from sequencing data of cancers a la Nik-Zainal et al."
},

{
    "location": "#Getting-started-1",
    "page": "Readme",
    "title": "Getting started",
    "category": "section",
    "text": "Package is written in the Julia programming language.To download this package use the Pkg.add function as below, which will download the package and install all the dependencies.Pkg.add(\"DPClustering\")"
},

{
    "location": "#Clustering-1",
    "page": "Readme",
    "title": "Clustering",
    "category": "section",
    "text": "Clustering is invoked using the dpclustering function which takes 2 vectors of equal size: y - the number of reads reporting the mutation and N - the depth of coverage at that locus. With these, clustering can be performed and the function will return a DPresults type. There are a number of optional arguments which are all set to reasonable defaults, you may want to change the number of iterations or set verbose to false. the default is to show a log of the time taken in the gibbs sampler. To see the optional arguments and their defaults use ?dpclustering in a julia session.dp = dpclustering(y, N, iterations = 10000, verbose = false);You can then plot the output using plotresults(dp).At the moment, clustering will only work with single samples and mutations in copy neutral regions. So the input mutations should either be filtered for copy number alterations or corrected for copy number before inputting."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "There is some example data provided originally in Nik-Zainal et al in the examples folder. So an analysis would proceed as follows. There is a built in function to plot the data and associated clustering.using DPClustering\ndata = readcsv(\"example/data.csv\", header = true)\ny = data[1][:, 1]\nN = data[1][:, 2]\n\nout = dpclustering(y, N)\nmyplot = plotresults(out, save = true)(Image: plot)"
},

{
    "location": "#Speed-1",
    "page": "Readme",
    "title": "Speed",
    "category": "section",
    "text": "Due to Julia\'s just in time compilation the sampling is relatively fast. For example, the analysis above (600 mutations) the time taken to generate 10,000 iterations/samples should be on the order of 2-3 minutes on a reasonably specced laptop."
},

{
    "location": "#Acknowledgments-1",
    "page": "Readme",
    "title": "Acknowledgments",
    "category": "section",
    "text": "The model used in the Gibbs sampler is as described in Nik-Zainal et al. Bugs code provided in the supplementary information of this publication and code available from David Wedge\'s group (https://github.com/Wedge-Oxford/dpclust_docker) were used in the development of the package."
},

{
    "location": "autodocs/#DPClustering.dpclustering-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "DPClustering.dpclustering",
    "category": "method",
    "text": "dpclustering(y::Array{Real, 1}, N::Array{Real, 1}; <keyword arguments>)\n\nPerform dirichlet clustering on the variant allele frequency distribution of cancer sequencing data and find the number of clusters that the data supports, y is a vector of the number of reads reporting each mutant, N is the total depth at each locus.\n\n...\n\nArguments\n\niterations = 1000: number of iterations of the gibbs samples\nC = 30: Max number of clusters to consider\nburninstart = round(Int64, iterations/2): Burn in of the gibbs samples\nbw = 0.01: Bandwidth of density estimation\nmaxxaxis = 0.7:\ncutoffweight = 0.05: Minimum weight to be called a cluster\nverbose = true: Show progress of gibbs sampling with ProgressMeter package\nA = 0.01: Hyperparameter for α, see Nik-Zainal et al\nB = 0.01: Hyperparameter for α, see Nik-Zainal et al\n\n...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DPClustering.plotresults-Tuple{Any}",
    "page": "Docstrings",
    "title": "DPClustering.plotresults",
    "category": "method",
    "text": "plotresults(dp; <keyword arguments>)\n\nPlot results from DPClustering object. Will plot histogram of raw data with density estimates from Gibbs sampling. ...\n\nArguments\n\nsave = false: Set to true if you want the plot to be saved\ndir = \"\": Directory where the plot will be saved to. Default is the current working directory.\nplotname = \"DPclustering\": Name to call plot when saving.\n\n...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DPClustering]\nOrder = [:type, :function]"
},

]}
