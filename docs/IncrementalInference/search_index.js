var documenterSearchIndex = {"docs": [

{
    "location": "#IncrementalInference.addFactor!-Union{Tuple{T}, Tuple{R}, Tuple{FactorGraph,Array{ExVertex,1},R}} where T<:AbstractString where R<:Union{FunctorInferenceType, InferenceType}",
    "page": "Home",
    "title": "IncrementalInference.addFactor!",
    "category": "method",
    "text": "addFactor!(fgl, Xi, usrfnc; multihypo, ready, api, labels, uid, autoinit, threadmodel)\n\n\nAdd factor with user defined type <: FunctorInferenceType to the factor graph object.  Define whether the automatic initialization of variables should be performed.  Use order sensitive multihypo keyword argument to define if any variables are related to data association uncertainty.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.addFactor!-Union{Tuple{T}, Tuple{R}, Tuple{FactorGraph,Array{Symbol,1},R}} where T<:AbstractString where R<:Union{FunctorInferenceType, InferenceType}",
    "page": "Home",
    "title": "IncrementalInference.addFactor!",
    "category": "method",
    "text": "addFactor!(fgl, xisyms, usrfnc; multihypo, ready, api, labels, uid, autoinit, threadmodel)\n\n\nAdd factor with user defined type <: FunctorInferenceType to the factor graph object.  Define whether the automatic initialization of variables should be performed.  Use order sensitive multihypo keyword argument to define if any variables are related to data association uncertainty.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.addNode!-Tuple{FactorGraph,Symbol,Type{#s2286} where #s2286<:InferenceVariable}",
    "page": "Home",
    "title": "IncrementalInference.addNode!",
    "category": "method",
    "text": "addNode!(fg, lbl, softtype; N, autoinit, ready, dontmargin, labels, api, uid, smalldata)\n\n\nAdd a node (variable) to a graph. Use this over the other dispatches.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.addNode!-Union{Tuple{T}, Tuple{FactorGraph,Symbol,T}} where T<:InferenceVariable",
    "page": "Home",
    "title": "IncrementalInference.addNode!",
    "category": "method",
    "text": "addNode!(fg, lbl, softtype; N, autoinit, ready, dontmargin, labels, api, uid, smalldata)\n\n\nAdd a node (variable) to a graph. Use this over the other dispatches.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.allnums-Union{Tuple{S}, Tuple{S}} where S<:AbstractString",
    "page": "Home",
    "title": "IncrementalInference.allnums",
    "category": "method",
    "text": "allnums(str)\n\n\nTest if all elements of the string is a number:  Ex, \"123\" is true, \"1_2\" is false.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.approxConv-Tuple{FactorGraph,Symbol,Symbol}",
    "page": "Home",
    "title": "IncrementalInference.approxConv",
    "category": "method",
    "text": "approxConv(fgl, fct, towards; api, N)\n\n\nDraw samples from the approximate convolution of towards symbol using factor fct relative to the other variables.  In addition the api can be adjusted to recover the data from elsewhere (likely to be replaced/removed in the future).\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.batchSolve!-Tuple{FactorGraph}",
    "page": "Home",
    "title": "IncrementalInference.batchSolve!",
    "category": "method",
    "text": "batchSolve!(fgl; drawpdf, show, N, recursive, dbg)\n\n\nPerform multimodal incremental smoothing and mapping (mm-iSAM) computations over given factor graph fgl::FactorGraph on the local computer.  A pdf of the Bayes (Junction) tree will be generated in the working folder with drawpdf=true\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.childCliqs-Tuple{BayesTree,ExVertex}",
    "page": "Home",
    "title": "IncrementalInference.childCliqs",
    "category": "method",
    "text": "childCliqs(treel, cliq)\n\n\nReturn a vector of child cliques to cliq.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.convert2packedfunctionnode",
    "page": "Home",
    "title": "IncrementalInference.convert2packedfunctionnode",
    "category": "function",
    "text": "convert2packedfunctionnode(fgl, fsym)\nconvert2packedfunctionnode(fgl, fsym, api)\n\n\nEncode complicated function node type to related \'Packed<type>\' format assuming a user supplied convert function .\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.decodefg-Tuple{FactorGraph}",
    "page": "Home",
    "title": "IncrementalInference.decodefg",
    "category": "method",
    "text": "decodefg(fgs; api)\n\n\nUnpack PackedFunctionNodeData formats back to regular FunctonNodeData.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.doautoinit!-Tuple{FactorGraph,Array{ExVertex,1}}",
    "page": "Home",
    "title": "IncrementalInference.doautoinit!",
    "category": "method",
    "text": "doautoinit!(fgl, Xi; api, singles, N)\n\n\ninitialize destination variable nodes based on this factor in factor graph, fg, generally called during addFactor!. Destination factor is first (singletons) or second (dim 2 pairwise) variable vertex in Xi.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.doautoinit!-Tuple{FactorGraph,Array{Symbol,1}}",
    "page": "Home",
    "title": "IncrementalInference.doautoinit!",
    "category": "method",
    "text": "doautoinit!(fgl, xsyms; api, singles, N)\n\n\nInitialize destination variable nodes based on this factor in factor graph, fg, generally called during addFactor!.  Destination factor is first (singletons) or second (dim 2 pairwise) variable vertex in Xi.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.dwnMsg-Tuple{ExVertex}",
    "page": "Home",
    "title": "IncrementalInference.dwnMsg",
    "category": "method",
    "text": "dwnMsg(cliq)\n\n\nReturn the last down message stored in cliq of Bayes (Junction) tree.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.emptyFactorGraph-Tuple{}",
    "page": "Home",
    "title": "IncrementalInference.emptyFactorGraph",
    "category": "method",
    "text": "emptyFactorGraph(; reference)\n\n\nConstruct an empty FactorGraph object with the minimum amount of information / memory populated.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.encodefg-Tuple{FactorGraph}",
    "page": "Home",
    "title": "IncrementalInference.encodefg",
    "category": "method",
    "text": "encodefg(fgl; api)\n\n\nMake a full memory copy of the graph and encode all composite function node types – assuming that convert methods for \'Packed<type>\' formats exist.  The same converters are used for database persistence with CloudGraphs.jl.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.evalFactor2-Tuple{FactorGraph,ExVertex,Int64}",
    "page": "Home",
    "title": "IncrementalInference.evalFactor2",
    "category": "method",
    "text": "evalFactor2(fgl, fct, solvefor; N, dbg)\n\n\nSingle entry point for evaluating factors from factor graph, using multiple dispatch to locate the correct evalPotentialSpecific function.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.fifoFreeze!-Tuple{FactorGraph}",
    "page": "Home",
    "title": "IncrementalInference.fifoFreeze!",
    "category": "method",
    "text": "fifoFreeze!(fgl)\n\n\nFreeze nodes that are older than the quasi fixed-lag length defined by fg.qfl, according to fg.fifo ordering.\n\nFuture:\n\nAllow different freezing strategies beyond fifo.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.findRelatedFromPotential",
    "page": "Home",
    "title": "IncrementalInference.findRelatedFromPotential",
    "category": "function",
    "text": "findRelatedFromPotential(fg, idfct, vertid, N)\nfindRelatedFromPotential(fg, idfct, vertid, N, dbg)\n\n\nCompute proposal belief on vertid through idfct representing some constraint in factor graph. Always full dimension variable node – partial constraints will only influence subset of variable dimensions. The remaining dimensions will keep pre-existing variable values.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.getCurrentWorkspaceFactors-Tuple{}",
    "page": "Home",
    "title": "IncrementalInference.getCurrentWorkspaceFactors",
    "category": "method",
    "text": "getCurrentWorkspaceFactors()\n\n\nReturn all factors currently registered in the workspace.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.getCurrentWorkspaceVariables-Tuple{}",
    "page": "Home",
    "title": "IncrementalInference.getCurrentWorkspaceVariables",
    "category": "method",
    "text": "getCurrentWorkspaceVariables()\n\n\nReturn all variables currently registered in the workspace.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.getKDE-Tuple{ExVertex}",
    "page": "Home",
    "title": "IncrementalInference.getKDE",
    "category": "method",
    "text": "getKDE(v)\n\n\nGet KernelDensityEstimate kde estimate stored in variable node.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.getNumPts-Tuple{ExVertex}",
    "page": "Home",
    "title": "IncrementalInference.getNumPts",
    "category": "method",
    "text": "getNumPts(v)\n\n\nGet the number of points used for the current marginal belief estimate represtation for a particular variable in the factor graph.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.getVal-Tuple{ExVertex}",
    "page": "Home",
    "title": "IncrementalInference.getVal",
    "category": "method",
    "text": "getVal(v)\n\n\nConvenience function to get point values sampled i.i.d from marginal of lbl variable in the current factor graph.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.getVertKDE-Tuple{ExVertex}",
    "page": "Home",
    "title": "IncrementalInference.getVertKDE",
    "category": "method",
    "text": "getVertKDE(v)\n\n\nGet KernelDensityEstimate kde estimate stored in variable node.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.initializeNode!-Tuple{FactorGraph,Symbol}",
    "page": "Home",
    "title": "IncrementalInference.initializeNode!",
    "category": "method",
    "text": "initializeNode!(fgl, sym; N, api)\n\n\nInitialize the belief of a variable node in the factor graph struct.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.landmarks-Tuple{FactorGraph,Symbol}",
    "page": "Home",
    "title": "IncrementalInference.landmarks",
    "category": "method",
    "text": "landmarks(fgl::FactorGraph, vsym::Symbol)\n\nReturn Vector{Symbol} of landmarks attached to vertex vsym in fgl.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.loadjld-Tuple{}",
    "page": "Home",
    "title": "IncrementalInference.loadjld",
    "category": "method",
    "text": "loadjld(; file)\n\n\nOpposite of savejld(fg, gt=gt, file=\"tempfg.jl\") to load data from file. This function uses the unpacking converters for converting all PackedInferenceType to FunctorInferenceType.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.localProduct-Tuple{FactorGraph,Symbol}",
    "page": "Home",
    "title": "IncrementalInference.localProduct",
    "category": "method",
    "text": "localProduct(fgl, sym; N, dbg, api)\n\n\nUsing factor graph object fg, project belief through connected factors (convolution with conditional) to variable sym followed by a approximate functional product.\n\nReturn: product belief, full proposals, partial dimension proposals, labels\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.ls-Tuple{FactorGraph,Array{Symbol,1}}",
    "page": "Home",
    "title": "IncrementalInference.ls",
    "category": "method",
    "text": "ls(fgl, lbls; api, ring)\n\n\nExperimental union of elements version of ls(::FactorGraph, ::Symbol).  Not mean\'t to replace broadcasting ls.(fg, [:x1;:x2])\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.ls-Tuple{FactorGraph,Symbol}",
    "page": "Home",
    "title": "IncrementalInference.ls",
    "category": "method",
    "text": "ls(fgl, lbl; api, ring)\n\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.ls-Tuple{FactorGraph}",
    "page": "Home",
    "title": "IncrementalInference.ls",
    "category": "method",
    "text": "ls(fgl; key1, key2)\n\n\nList the nodes in a factor graph.\n\nExamples\n\nls(fg)\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.lsRear",
    "page": "Home",
    "title": "IncrementalInference.lsRear",
    "category": "function",
    "text": "lsRear(fgl)\nlsRear(fgl, n)\n\n\nReturn array of all variable nodes connected to the last n many poses (:x*).\n\nExample:\n\n# Shallow copy the tail end of poses from a factor graph `fg1`\nvars = lsRear(fg1, 5)\nfg1_r5 = subgraphFromVerts(fg1, vars)\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.lsf-Tuple{FactorGraph,Symbol}",
    "page": "Home",
    "title": "IncrementalInference.lsf",
    "category": "method",
    "text": "lsf(fgl, lbl; api)\n\n\nList factors in a factor graph.\n\nExamples\n\nlsf(fg)\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.manualinit!-Tuple{FactorGraph,Symbol,Array{Symbol,1}}",
    "page": "Home",
    "title": "IncrementalInference.manualinit!",
    "category": "method",
    "text": "manualinit!(fgl, sym, usefcts)\n\n\nWorkaround function when first-version (factor graph based) auto initialization fails.  Usually occurs when using factors that have high connectivity to multiple variables.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.numericRootGenericRandomizedFnc!-Union{Tuple{CommonConvWrapper{T}}, Tuple{T}} where T<:FunctorPairwise",
    "page": "Home",
    "title": "IncrementalInference.numericRootGenericRandomizedFnc!",
    "category": "method",
    "text": "numericRootGenericRandomizedFnc!(ccwl; perturb, testshuffle)\n\n\nSolve free variable x by root finding residual function fgr.usrfnc(x, res) randomly shuffle x dimensions if underconstrained by measurement z dimensions small random perturbation used to prevent trivial solver cases, div by 0 etc. result stored in fgr.Y ccw.X must be set to memory ref the param[varidx] being solved, at creation of ccw\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.parentCliq-Tuple{BayesTree,ExVertex}",
    "page": "Home",
    "title": "IncrementalInference.parentCliq",
    "category": "method",
    "text": "parentCliq(treel, cliq)\n\n\nReturn cliq\'s parent clique.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.printgraphmax-Tuple{FactorGraph}",
    "page": "Home",
    "title": "IncrementalInference.printgraphmax",
    "category": "method",
    "text": "printgraphmax(fgl)\n\n\nPrint the maximum point values form all variables approximate marginals in the factor graph. The full marginal can be recovered for example X0 = getVertKDE(fg, :x0).\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.savejld-Tuple{FactorGraph}",
    "page": "Home",
    "title": "IncrementalInference.savejld",
    "category": "method",
    "text": "savejld(fgl; file, groundtruth)\n\n\nSave mostly complete Factor Graph type by converting complicated FunctionNodeData types to \'Packed\' types using user supplied converters. Ground truth can also be saved and recovered by the associated loadjld(file=\"tempfg.jld2\") method.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.setDwnMsg!-Tuple{ExVertex,Dict{Symbol,BallTreeDensity}}",
    "page": "Home",
    "title": "IncrementalInference.setDwnMsg!",
    "category": "method",
    "text": "setDwnMsg!(cliql, msgs)\n\n\nSet the downward passing message for Bayes (Junction) tree clique cliql.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.setUpMsg!-Tuple{ExVertex,Dict{Symbol,BallTreeDensity}}",
    "page": "Home",
    "title": "IncrementalInference.setUpMsg!",
    "category": "method",
    "text": "setUpMsg!(cliql, msgs)\n\n\nSet the upward passing message for Bayes (Junction) tree clique cliql.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.shuffleXAltD!-Tuple{CommonConvWrapper,Array{Float64,1}}",
    "page": "Home",
    "title": "IncrementalInference.shuffleXAltD!",
    "category": "method",
    "text": "shuffleXAltD!(ccwl, X)\n\n\nShuffle incoming X into random positions in fr.Y. Shuffled fr.Y will be placed back into fr.X[:,fr.gwp.particleidx] upon fr.gwp.usrfnc(x, res).\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.subgraphFromVerts-Tuple{FactorGraph,Union{Array{String,1}, Array{Symbol,1}}}",
    "page": "Home",
    "title": "IncrementalInference.subgraphFromVerts",
    "category": "method",
    "text": "subgraphFromVerts(fgl, verts; neighbors)\n\n\nExplore all shortest paths combinations in verts, add neighbors and reference subgraph using unique index into graph data structure.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.treeProductUp-Tuple{FactorGraph,BayesTree,Symbol,Symbol}",
    "page": "Home",
    "title": "IncrementalInference.treeProductUp",
    "category": "method",
    "text": "treeProductUp(fg, tree, cliq, sym; N, dbg)\n\n\nCalculate a fresh–-single step–-approximation to the variable sym in clique cliq as though during the upward message passing.  The full inference algorithm may repeatedly calculate successive apprimxations to the variable based on the structure of variables, factors, and incoming messages to this clique. Which clique to be used is defined by frontal variable symbols (cliq in this case) – see whichCliq(...) for more details.  The sym symbol indicates which symbol of this clique to be calculated.  Note that the sym variable must appear in the clique where cliq is a frontal variable.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.upMsg-Tuple{ExVertex}",
    "page": "Home",
    "title": "IncrementalInference.upMsg",
    "category": "method",
    "text": "upMsg(cliq)\n\n\nReturn the last up message stored in cliq of Bayes (Junction) tree.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.whichCliq-Union{Tuple{T}, Tuple{BayesTree,T}} where T<:AbstractString",
    "page": "Home",
    "title": "IncrementalInference.whichCliq",
    "category": "method",
    "text": "whichCliq(bt, frt)\n\n\nReturn the Graphs.ExVertex node object that represents a clique in the Bayes (Junction) tree, as defined by one of the frontal variables frt.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.wipeBuildNewTree!-Tuple{FactorGraph}",
    "page": "Home",
    "title": "IncrementalInference.wipeBuildNewTree!",
    "category": "method",
    "text": "wipeBuildNewTree!(fg; ordering, drawpdf, show, filepath, viewerapp)\n\n\nBuild a completely new Bayes (Junction) tree, after first wiping clean all temporary state in fg from a possibly pre-existing tree.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.writeGraphPdf-Union{Tuple{FactorGraph}, Tuple{AS}} where AS<:AbstractString",
    "page": "Home",
    "title": "IncrementalInference.writeGraphPdf",
    "category": "method",
    "text": "writeGraphPdf(fgl; viewerapp, filepath, engine, show)\n\n\nExport a dot and pdf file drawn by Graphviz showing the factor graph.\n\n\n\n\n\n"
},

{
    "location": "#KernelDensityEstimate.kde!-Tuple{EasyMessage}",
    "page": "Home",
    "title": "KernelDensityEstimate.kde!",
    "category": "method",
    "text": "kde!(em)\n\n\nConstruct a BallTreeDensity KDE object from an IIF.EasyMessage object.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.addNewVarVertInGraph!-Tuple{FactorGraph,ExVertex,Int64,Symbol,Int64,Any}",
    "page": "Home",
    "title": "IncrementalInference.addNewVarVertInGraph!",
    "category": "method",
    "text": "addNewVarVertInGraph!(fgl, vert, id, lbl, ready, smalldata)\n\n\nInitialize a new Graphs.ExVertex which will be added to some factor graph.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.approxConvOnElements!-Union{Tuple{T}, Tuple{CommonConvWrapper{T},Union{UnitRange{Int64}, Array{Int64,1}},Type{MultiThreaded}}} where T<:Union{FunctorPairwise, FunctorPairwiseMinimize}",
    "page": "Home",
    "title": "IncrementalInference.approxConvOnElements!",
    "category": "method",
    "text": "approxConvOnElements!(ccwl, elements, ?)\n\n\nPerform the nonlinear numerical operations to approximate the convolution with a particular user defined likelihood function (conditional), which as been prepared in the frl object.  This function uses root finding to enforce a non-linear function constraint.\n\nNotes:\n\nremember this is a deepcopy of original sfidx, since we are generating a proposal distribution and not directly replacing the existing variable belief estimate\n\nFuture work:\n\nonce Threads.@threads have been optmized JuliaLang/julia#19967, also see area4 branch\nimprove handling of n and particleidx, especially considering future multithreading support\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.approxConvOnElements!-Union{Tuple{T}, Tuple{CommonConvWrapper{T},Union{UnitRange{Int64}, Array{Int64,1}},Type{SingleThreaded}}} where T<:Union{FunctorPairwise, FunctorPairwiseMinimize}",
    "page": "Home",
    "title": "IncrementalInference.approxConvOnElements!",
    "category": "method",
    "text": "approxConvOnElements!(ccwl, elements, ?)\n\n\nPerform the nonlinear numerical operations to approximate the convolution with a particular user defined likelihood function (conditional), which as been prepared in the frl object.  This function uses root finding to enforce a non-linear function constraint.\n\nNotes:\n\nremember this is a deepcopy of original sfidx, since we are generating a proposal distribution and not directly replacing the existing variable belief estimate\n\nFuture work:\n\nonce Threads.@threads have been optmized JuliaLang/julia#19967, also see area4 branch\nimprove handling of n and particleidx, especially considering future multithreading support\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.approxConvOnElements!-Union{Tuple{T}, Tuple{CommonConvWrapper{T},Union{UnitRange{Int64}, Array{Int64,1}}}} where T<:Union{FunctorPairwise, FunctorPairwiseMinimize}",
    "page": "Home",
    "title": "IncrementalInference.approxConvOnElements!",
    "category": "method",
    "text": "approxConvOnElements!(ccwl, elements)\n\n\nPerform the nonlinear numerical operations to approximate the convolution with a particular user defined likelihood function (conditional), which as been prepared in the frl object.  This function uses root finding to enforce a non-linear function constraint.\n\nNotes:\n\nremember this is a deepcopy of original sfidx, since we are generating a proposal distribution and not directly replacing the existing variable belief estimate\n\nFuture work:\n\nonce Threads.@threads have been optmized JuliaLang/julia#19967, also see area4 branch\nimprove handling of n and particleidx, especially considering future multithreading support\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.assembleHypothesesElements!-Tuple{Categorical,Int64,Int64,Int64}",
    "page": "Home",
    "title": "IncrementalInference.assembleHypothesesElements!",
    "category": "method",
    "text": "assembleHypothesesElements!(mh, maxlen, sfidx, lenXi)\n\n\nThis function explicitly codes that marginalization of a discrete categorical selection variable for ambiguous data association situations.  Improved implementations should implicitly induce the same behaviour through summation (integration) when marginalizing any number of discrete variables.  This function populates allelements with particle indices associated with particular multihypothesis selection while activehypo simultaneously contains the hypothesis index and factor graph variables associated with that hypothesis selection.  The return value certainidx are the hypotheses that are not in question.\n\n# `allelements` example BearingRange [:x1, 0.5:l1a, 0.5:l1b]\n# sfidx = (1=:x1,2=:l1a,3=:l1b)\nif solvefor :x1, then allelem = [mhidx.==:l1a; mhidx.==l1b]\nif solvefor :l1a, then allelem = [mhidx.==:l1a] and ARR[solvefor][:,mhidx.==:l1b]=ARR[:l1b][:,mhidx.==:l1b]\nif solvefor :l1b, then allelem = [mhidx.==:l1b] and ARR[solvefor][:,mhidx.==:l1a]=ARR[:l1a][:,mhidx.==:l1a]\nif solvefor 1, then allelem = [mhidx.==2; mhidx.==3]\nif solvefor 2, then allelem = [mhidx.==2] and ARR[solvefor][:,mhidx.==3]=ARR[3][:,mhidx.==3]\nif solvefor 3, then allelem = [mhidx.==3] and ARR[solvefor][:,mhidx.==2]=ARR[2][:,mhidx.==2]\n\n# `activehypo` in example mh=[1.0;0.5;0.5]\nsfidx=1, mhidx=2:  ah = [1;2]\nsfidx=1, mhidx=3:  ah = [1;3]\nsfidx=2, mhidx=2:  ah = [1;2]\nsfidx=2, mhidx=3:  2 should take a value from 3\nsfidx=3, mhidx=2:  3 should take a value from 2\nsfidx=3, mhidx=3:  ah = [1;3]\n\n# `activehypo` in example mh=[1.0;0.33;0.33;0.34]\nsfidx=1, mhidx=2:  ah = [1;2]\nsfidx=1, mhidx=3:  ah = [1;3]\nsfidx=1, mhidx=4:  ah = [1;4]\n\nsfidx=2, mhidx=2:  ah = [1;2]\nsfidx=2, mhidx=3:  2 should take a value from 3\nsfidx=2, mhidx=4:  2 should take a value from 4\n\nsfidx=3, mhidx=2:  3 should take a value from 2\nsfidx=3, mhidx=3:  ah = [1;3]\nsfidx=3, mhidx=4:  3 should take a value from 4\n\nsfidx=4, mhidx=2:  4 should take a value from 2\nsfidx=4, mhidx=3:  4 should take a value from 3\nsfidx=4, mhidx=4:  ah = [1;4]\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.assembleNullHypothesis-Union{Tuple{T}, Tuple{CommonConvWrapper{T},Int64,Float64}} where T",
    "page": "Home",
    "title": "IncrementalInference.assembleNullHypothesis",
    "category": "method",
    "text": "assembleNullHypothesis(ccwl, maxlen, spreadfactor)\n\n\nPrepare data required for null hypothesis cases during convolution.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.cliqGibbs-Tuple{FactorGraph,ExVertex,Int64,Array{NBPMessage,1},Int64,Bool}",
    "page": "Home",
    "title": "IncrementalInference.cliqGibbs",
    "category": "method",
    "text": "cliqGibbs(fg, cliq, vertid, inmsgs, N, dbg)\n\n\nPerform one step of the minibatch clique Gibbs operation for solving the Chapman-Kolmogov trasit integral – here involving separate approximate functional convolution and product operations.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.computeAcrossHypothesis!-Union{Tuple{T}, Tuple{CommonConvWrapper{T},Any,Any,Any,Any}} where T<:Union{FunctorPairwise, FunctorPairwiseMinimize}",
    "page": "Home",
    "title": "IncrementalInference.computeAcrossHypothesis!",
    "category": "method",
    "text": "computeAcrossHypothesis!(ccwl, allelements, activehypo, certainidx, sfidx)\n\n\nCommon function to compute across a single user defined multi-hypothesis ambiguity per factor.  This function dispatches both FunctorPairwise and FunctorPairwiseMinimize factors.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.computeAcrossNullHypothesis!-Union{Tuple{T}, Tuple{CommonConvWrapper{T},Any,Any,Any}} where T<:FunctorPairwiseNH",
    "page": "Home",
    "title": "IncrementalInference.computeAcrossNullHypothesis!",
    "category": "method",
    "text": "computeAcrossNullHypothesis!(ccwl, allelements, nhc, ENT)\n\n\nDo true and null hypothesis computations based on data structures prepared earlier – specific to FunctorPairwiseNH.  This function will be merged into a standard case for FunctorPairwise/Minimize in the future.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.downMsgPassingRecursive-Tuple{ExploreTreeType}",
    "page": "Home",
    "title": "IncrementalInference.downMsgPassingRecursive",
    "category": "method",
    "text": "downMsgPassingRecursive(inp; N, dbg, drawpdf)\n\n\nPass NBPMessages back down the tree – pre order tree traversal.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.evalPotentialSpecific-Union{Tuple{T}, Tuple{Array{ExVertex,1},CommonConvWrapper{T},Int64}} where T<:FunctorSingleton",
    "page": "Home",
    "title": "IncrementalInference.evalPotentialSpecific",
    "category": "method",
    "text": "evalPotentialSpecific(Xi, ccwl, solvefor; N, dbg)\n\n\nMultiple dispatch wrapper for evaluating the ccwl::CommonConvWrapper{<: FunctorSingleton} types.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.evalPotentialSpecific-Union{Tuple{T}, Tuple{Array{ExVertex,1},CommonConvWrapper{T},Int64}} where T<:FunctorSingletonNH",
    "page": "Home",
    "title": "IncrementalInference.evalPotentialSpecific",
    "category": "method",
    "text": "evalPotentialSpecific(Xi, ccwl, solvefor; N, spreadfactor, dbg)\n\n\nMultiple dispatch wrapper for evaluating the ccwl::CommonConvWrapper{<: FunctorSingletonNH} types. Planned changes will fold null hypothesis in as a standard feature and no longer appear as a separate InferenceType.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.evalPotentialSpecific-Union{Tuple{T}, Tuple{Array{ExVertex,1},CommonConvWrapper{T},Int64}} where T<:Union{FunctorPairwise, FunctorPairwiseMinimize}",
    "page": "Home",
    "title": "IncrementalInference.evalPotentialSpecific",
    "category": "method",
    "text": "evalPotentialSpecific(Xi, ccwl, solvefor; N, dbg)\n\n\nMultiple dispatch wrapper for <:FunctorPairwise types, to prepare and execute the general approximate convolution with user defined factor residual functions.  This method also supports multihypothesis operations as one mechanism to introduce new modality into the proposal beliefs.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.fmcmc!",
    "page": "Home",
    "title": "IncrementalInference.fmcmc!",
    "category": "function",
    "text": "fmcmc!(fgl, cliq, fmsgs, IDs, N, MCMCIter)\nfmcmc!(fgl, cliq, fmsgs, IDs, N, MCMCIter, dbg)\n\n\nIterate successive approximations of clique marginal beliefs by means of the stipulated proposal convolutions and products of the functional objects for tree clique cliq.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.packFromLocalPotentials!",
    "page": "Home",
    "title": "IncrementalInference.packFromLocalPotentials!",
    "category": "function",
    "text": "packFromLocalPotentials!(fgl, dens, wfac, cliq, vertid, N)\npackFromLocalPotentials!(fgl, dens, wfac, cliq, vertid, N, dbg)\n\n\nAdd all potentials associated with this clique and vertid to dens.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.prepareCommonConvWrapper!-Union{Tuple{T}, Tuple{CommonConvWrapper{T},Array{ExVertex,1},Int64,Int64}} where T<:FunctorInferenceType",
    "page": "Home",
    "title": "IncrementalInference.prepareCommonConvWrapper!",
    "category": "method",
    "text": "prepareCommonConvWrapper!(ccwl, Xi, solvefor, N)\n\n\nPrepare a common functor computation object prepareCommonConvWrapper{T} containing the user factor functor along with additional variables and information using during approximate convolution computations.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.prepareparamsarray!-Tuple{Array{Array{Float64,2},1},Array{ExVertex,1},Int64,Int64}",
    "page": "Home",
    "title": "IncrementalInference.prepareparamsarray!",
    "category": "method",
    "text": "prepareparamsarray!(ARR, Xi, N, solvefor)\n\n\nPrepare the particle arrays ARR to be used for approximate convolution.  This function ensures that ARR has te same dimensions among all the parameters.  Function returns with ARR[sfidx] pointing at newly allocated deepcopy of the existing values in getVal(Xi[.index==solvefor]).  Return values sfidx is the element in ARR where Xi.index==solvefor and maxlen is length of all (possibly resampled) ARR contained particles.  Note Xi is order sensitive.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.prodmultiplefullpartials-Tuple{Array{BallTreeDensity,1},Dict{Int64,Array{BallTreeDensity,1}},Int64,Int64}",
    "page": "Home",
    "title": "IncrementalInference.prodmultiplefullpartials",
    "category": "method",
    "text": "prodmultiplefullpartials(dens, partials, Ndims, N)\n\n\nMultiply various full and partial dimension constraints.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.prodmultipleonefullpartials-Tuple{Array{BallTreeDensity,1},Dict{Int64,Array{BallTreeDensity,1}},Int64,Int64}",
    "page": "Home",
    "title": "IncrementalInference.prodmultipleonefullpartials",
    "category": "method",
    "text": "prodmultipleonefullpartials(dens, partials, Ndims, N)\n\n\nMultiply a single full and several partial dimension constraints.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.productpartials!-Tuple{Array{Float64,2},BallTreeDensity,Dict{Int64,Array{BallTreeDensity,1}}}",
    "page": "Home",
    "title": "IncrementalInference.productpartials!",
    "category": "method",
    "text": "productpartials!(pGM, dummy, partials)\n\n\nMultiply different dimensions from partial constraints individually.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.setfreeze!-Tuple{FactorGraph,Symbol}",
    "page": "Home",
    "title": "IncrementalInference.setfreeze!",
    "category": "method",
    "text": "setfreeze!(fgl, sym)\n\n\nSet variable(s) sym of factor graph to be marginalized – i.e. not be updated by inference computation.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.treeProductDwn-Tuple{FactorGraph,BayesTree,Symbol,Symbol}",
    "page": "Home",
    "title": "IncrementalInference.treeProductDwn",
    "category": "method",
    "text": "treeProductDwn(fg, tree, cliq, sym; N, dbg)\n\n\nCalculate a fresh–-single step–-approximation to the variable sym in clique cliq as though during the downward message passing.  The full inference algorithm may repeatedly calculate successive apprimxations to the variable based on the structure of variables, factors, and incoming messages to this clique. Which clique to be used is defined by frontal variable symbols (cliq in this case) – see whichCliq(...) for more details.  The sym symbol indicates which symbol of this clique to be calculated.  Note that the sym variable must appear in the clique where cliq is a frontal variable.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.upGibbsCliqueDensity",
    "page": "Home",
    "title": "IncrementalInference.upGibbsCliqueDensity",
    "category": "function",
    "text": "upGibbsCliqueDensity(inp)\nupGibbsCliqueDensity(inp, N)\nupGibbsCliqueDensity(inp, N, dbg)\n\n\nPerform computations required for the upward message passing during belief propation on the Bayes (Junction) tree. This function is usually called as part via remote_call for multiprocess dispatch.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.updateFGBT!-Tuple{FactorGraph,BayesTree,Int64,IncrementalInference.DownReturnBPType}",
    "page": "Home",
    "title": "IncrementalInference.updateFGBT!",
    "category": "method",
    "text": "updateFGBT!(fg, bt, cliqID, ddt; dbg, fillcolor)\n\n\nUpdate cliq cliqID in Bayes (Juction) tree bt according to contents of ddt – intended use is to update main clique after a downward belief propagation computation has been completed per clique.\n\n\n\n\n\n"
},

{
    "location": "#IncrementalInference.updateFGBT!-Tuple{FactorGraph,BayesTree,Int64,IncrementalInference.UpReturnBPType}",
    "page": "Home",
    "title": "IncrementalInference.updateFGBT!",
    "category": "method",
    "text": "updateFGBT!(fg, bt, cliqID, urt; dbg, fillcolor)\n\n\nUpdate cliq cliqID in Bayes (Juction) tree bt according to contents of urt – intended use is to update main clique after a upward belief propagation computation has been completed per clique.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [IncrementalInference]\nOrder = [:type, :function]"
},

]}
