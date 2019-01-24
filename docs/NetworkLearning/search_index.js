var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NetworkLearning-1",
    "page": "Readme",
    "title": "NetworkLearning",
    "category": "section",
    "text": "A Julia package for network learning.(Image: License)  (Image: NetworkLearning) (Image: Build Status)  (Image: Coverage Status)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "NetworkLearning implements a generic framework for network classification. It could in theory be used to provide additional functionality (i.e. semi-supervised learning, regression), provided that appropriate methods for relational learning (i.e. relational variable generation) and collective inference are added. The framework is designed to make as little assumptions as possible on the elements involved in the process.  Two scenarios or usecases are covered:Observation-based learning, in which the network structure is pertinent to the observations and consequently, estimates (i.e. class probabilities) are associated to the observations; in the estimation process, relational structures can either make use the training data (in-graph learning) or not (out-of-graph learning). For example, in the case of document classifcation, an observation would correspond to a publication that has to be classified into an arbitrary category, given a representation of its local content-based information as well on the its relational information (links to other documents, citations etc.).  \nEntity-based learning, in which observations are pertinent to one or more abstract entities for which estimates are calculated. In entity-based network learning, observations can modify either the local or relational information of one or more entities."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Learner type- observation-based\n- entity-basedRelational learners- simple relational neighbour\n- weighted/probabilistic relational neighbour\n- naive bayes\n- class distributionCollective inference- relaxation labeling\n- collective classification\n- gibbs sampling (EXPERIMENTAL, slow)Adjacency strucures- matrices\n- graphs\n- tuples containing functions and data from which adjacency matrices or graphs can be computed"
},

{
    "location": "#Observation-based-network-learning-example-1",
    "page": "Readme",
    "title": "Observation-based network learning example",
    "category": "section",
    "text": "import DecisionTree\nusing NetworkLearning, MLDataPattern, MLLabelUtils, LossFunctions\n\n# Download the CORA dataset, and return data and citing/cited papers indices (relative to order in X,y)\n(X,y), cited_papers, citing_papers = NetworkLearning.grab_cora_data()\nn = nobs(X)\nyᵤ = sort(unique(y))\nC = length(yᵤ)\n\n# Split data\nidx = collect(1:n);\nshuffle!(idx)\np = 0.5\nidxtr,idxts = splitobs(idx,p)\nXtr = X[:,idxtr]\nytr = y[idxtr]\nXts = X[:,idxts]\n\n# Build adjacency matrices\nAtr = NetworkLearning.generate_partial_adjacency(cited_papers, citing_papers, idxtr);\n\n# Construct necessary arguments for training the network learner\nfl_train = (X::Tuple{Matrix{Float64}, Vector{Int}})->  DecisionTree.build_tree(X[2],X[1]\')\nfl_exec(C) = (m,X)-> DecisionTree.apply_tree_proba(m, X\', collect(1:C))\'\n\nfr_train = (X)->  DecisionTree.build_tree(X[2],X[1]\')\nfr_exec(C) = (m,X)-> DecisionTree.apply_tree_proba(m, X\', collect(1:C))\'\n\nAV = [adjacency(Atr)]\n\n# Train\ninfo(\"Training ...\")\nnlmodel = NetworkLearning.fit(NetworkLearnerObs, \n	      Xtr,\n	      ytr,\n	      AV,\n	      fl_train, fl_exec(C),\n	      fr_train, fr_exec(C);\n	      learner = :wrn,\n	      inference = :ic,\n	      use_local_data = false, # use only relational variables\n	      f_targets = x->targets(indmax,x),\n	      normalize = true,\n	      maxiter = 10,\n	      α = 0.95\n	  )\n\n\n\n#########################\n# Out-of-Graph learning #\n#########################\n\n# Add adjacency pertinent to the test data\nAts = NetworkLearning.generate_partial_adjacency(cited_papers, citing_papers, idxts);\nadd_adjacency!(nlmodel, [Ats])\n\n# Make predictions\ninfo(\"Predicting (out-of-graph) ...\")\nŷts = predict(nlmodel, Xts)\n\n# Squared loss\nyts = convertlabel(LabelEnc.OneOfK(C), y[idxts], yᵤ)\nprintln(\"\\tL2 loss (out-of-graph):\", value(L2DistLoss(), yts, ŷts, AvgMode.Mean()))\nprintln(\"\\tAverage error (out-of-graph):\", mean(targets(indmax,yts).!=targets(indmax,ŷts)))\n\n\n\n#####################\n# In-Graph learning #\n#####################\n\n# Initialize output structure\nXo = zeros(C,nobs(X))\nXo[:,idxtr] = convertlabel(LabelEnc.OneOfK(C), y[idxtr] ,yᵤ)\n\n# Add adjacency pertinent to the test data\nAts = NetworkLearning.generate_partial_adjacency(cited_papers, citing_papers, collect(1:nobs(X)));\nadd_adjacency!(nlmodel, [Ats])\n\n# Make predictions\ninfo(\"Predicting (in-graph) ...\")\nupdate_mask = trues(nobs(X));\nupdate_mask[idxtr] = false # estimates for training samples will not be used\npredict!(Xo, nlmodel, X, update_mask)\n\n# Squared loss\nŷts = Xo[:,idxts]\nyts = convertlabel(LabelEnc.OneOfK(C), y[idxts], yᵤ)\nprintln(\"\\tL2 loss (in-graph):\", value(L2DistLoss(), yts, ŷts, AvgMode.Mean()))\nprintln(\"\\tAverage error (in-graph):\", mean(targets(indmax,yts).!=targets(indmax,ŷts)))The output of the above code is:#   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n#                                  Dload  Upload   Total   Spent    Left  Speed\n# 100  163k  100  163k    0     0   163k      0  0:00:01  0:00:01 --:--:-- 86695\n# cora/\n# cora/README\n# cora/cora.content\n# cora/cora.cites\n# INFO: Training ...\n# INFO: Predicting (out-of-graph) ...\n# 	  L2 loss (out-of-graph):0.13011389156615571\n# 	  Average error (out-of-graph):0.5310192023633677\n# INFO: Predicting (in-graph) ...\n# 	  L2 loss (in-graph):0.06473003424857691\n#	  Average error (in-graph):0.24963072378138848"
},

{
    "location": "#Entity-based-network-learning-example-1",
    "page": "Readme",
    "title": "Entity-based network learning example",
    "category": "section",
    "text": "import DecisionTree\nusing NetworkLearning, MLDataPattern, MLLabelUtils, LossFunctions\n\n# Download the CORA dataset, and return data and citing/cited papers indices (relative to order in X,y)\n(X,y), cited_papers, citing_papers = NetworkLearning.grab_cora_data()\nn = nobs(X)\nyᵤ = sort(unique(y))\nC = length(yᵤ)\n\n# Split data\nidx = collect(1:n);\nshuffle!(idx)\np = 0.5\nidxtr,idxts = splitobs(idx,p)\n\n### !!! ###### 	\nsort!(idxtr) # It is important to sort the indices, \nsort!(idxts) # because of the use of the update mask\n### !!! ######\n\nXtr = X[:,idxtr]\nytr = y[idxtr]\nXts = X[:,idxts]\n\n\n############### Remove 70% of the citations to papers in the test data ################## 	\nremoved_citations = Vector{Int}()							#\nfor (i, (ic,oc)) in enumerate(zip(cited_papers,citing_papers))				#\n	if ic in idxts && rand() > 0.3 							#\n		push!(removed_citations, i)						#	\n	end										#\nend											#\n											#\ncited_incomplete = cited_papers[setdiff(1:nobs(cited_papers), removed_citations)]	#\nciting_incomplete = citing_papers[setdiff(1:nobs(citing_papers), removed_citations)]	#\n											#\ncited_removed = cited_papers[removed_citations]						#\nciting_removed = citing_papers[removed_citations]					#\n#########################################################################################\n\n\n# Construct adjacencies, local model, etc\nAm = sparse(NetworkLearning.generate_partial_adjacency(cited_incomplete, citing_incomplete, collect(1:n)));\nAV = [adjacency(Am)]\nMl = DecisionTree.build_tree(ytr,Xtr\')\n\n# Initialize output estimates and update mask\nXo = zeros(C,n)\nupdate = falses(n);\nupdate[idx[findin(idx,idxts)]] = true # mark only test entities i.e. unknown as updateable\nXo[:,.!update] = convertlabel(LabelEnc.OneOfK(C), ytr ,yᵤ)\nXo[:,update] = DecisionTree.apply_tree_proba(Ml, Xts\', yᵤ)\'\nŷ_tree = copy(Xo[:, update])\n\n# Construct necessary arguments for training the entity network learner\nfr_train = (X)->  DecisionTree.build_tree(X[2],X[1]\')\nfr_exec(C) = (m,X)-> DecisionTree.apply_tree_proba(m, X\', collect(1:C))\'\n\n\n# Train\ninfo(\"Training ...\")\nnlmodel = NetworkLearning.fit(NetworkLearnerEnt, \n	      Xo,\n	      update,\n	      AV,\n	      fr_train, fr_exec(C);\n	      learner = :wrn,\n	      inference = :ic,\n	      f_targets = x->targets(indmax,x),\n	      normalize = true,\n	      maxiter = 10,\n	      α = 0.95\n	  )\n\n\n# Squared loss (with just a few citations)\nŷts = nlmodel.state.ê[:,update]\nyts = convertlabel(LabelEnc.OneOfK(C), y[idxts], yᵤ)\nprintln(\"\\tL2 loss (few citations):\", value(L2DistLoss(), yts, ŷts, AvgMode.Mean()))\nprintln(\"\\tAverage error (few citations):\", mean(targets(indmax,yts).!=targets(indmax,ŷts)))\n\n# Add citations (i.e. update adjacency matrices of the model)\n\n# Function that updates an adjacency matrix given two vectors (of same length)\n# of cited and citing paper; the function may be more complicated depending on\n# how easy the corresponding adjacency matrix coordinates can be determined\n# from the input data\nfunction add_citations!(Am, cited, citing)\n	for i in 1:nobs(cited)\n		Am[cited[i],citing[i]] += 1\n		Am[citing[i],cited[i]] += 1\n	end\n	return Am\nend\n\ninfo(\"Updating adjacencies ...\")\nf_update(ic,oc) = x->add_citations!(x, ic, oc)\nupdate_adjacency!(nlmodel.Adj[1], f_update(cited_removed, citing_removed))\n\n# Run again collective inference\ninfo(\"Re-running collective inference ...\")\ninfer!(nlmodel)\n\n# Squared loss (with all citations)\nŷts = nlmodel.state.ê[:,update]\nyts = convertlabel(LabelEnc.OneOfK(C), y[idxts], yᵤ)\nprintln(\"\\tL2 loss (all citations):\", value(L2DistLoss(), yts, ŷts, AvgMode.Mean()))\nprintln(\"\\tAverage error (all citations):\", mean(targets(indmax,yts).!=targets(indmax,ŷts)))The output of the above code is:#   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n#                                  Dload  Upload   Total   Spent    Left  Speed\n# 100  163k  100  163k    0     0   163k      0  0:00:01  0:00:01 --:--:-- 86382\n# cora/\n# cora/README\n# cora/cora.content\n# cora/cora.cites\n# INFO: Training ...\n# 	  L2 loss (few citations):0.061311528508626575\n#	  Average error (few citations):0.27843426883308714\n# INFO: Updating adjacencies ...\n# INFO: Re-running collective inference ...\n#	  L2 loss (all citations):0.04990883428571481\n#	  Average error (all citations):0.2119645494830133"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "The documentation is provided in Julia\'s native docsystem. "
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package can be installed by running Pkg.add(\"NetworkLearning\") or, to check out the latest version, Pkg.checkout(\"NetworkLearning.jl\") in the Julia REPL. From v0.1.0, only versions of Julia above 0.7  are supported. Julia v.0.6 support can be found in the support_julia_v0.6 branch (currently unmantained)."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This code has an MIT license and therefore it is free."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1] S.A. Macskassy, F. Provost \"Classification in networked data: A toolkit and a univariate case study\", Journal of Machine learning Research 8, 2007, 935-983[2] P. Sen, G. Namata, M. Bilgic, L. Getoor, B. Gallagher, T. Eliassi-Rad \"Collective classification in network data\", AI Magazine 29(3), 2008"
},

{
    "location": "autodocs/#NetworkLearning.BayesRN",
    "page": "Docstrings",
    "title": "NetworkLearning.BayesRN",
    "category": "type",
    "text": "Naive-Bayes relational neighbour learner (trainable).  Calculates neighbourhood likelihoods (i.e. given a vertex\'s class,  the class distribution in its neighbourhood) and uses the resulting information to compute class estimates for each vertex using a Bayesian approach.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.ClassDistributionRN",
    "page": "Docstrings",
    "title": "NetworkLearning.ClassDistributionRN",
    "category": "type",
    "text": "Class-distribution relational neighbour (trainable). Claculates a reference vector (RV) for each class (using the vertex neighbourhood information) and compares vertices to the reference vectors corresponding to each class using a similarity measure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.ComputableAdjacency",
    "page": "Docstrings",
    "title": "NetworkLearning.ComputableAdjacency",
    "category": "type",
    "text": "Adjacency type where the adjacency information is represented by a . function f and data on which the function can be applied. The result of f(data) has to be either a matrix or a graph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.EmptyAdjacency",
    "page": "Docstrings",
    "title": "NetworkLearning.EmptyAdjacency",
    "category": "type",
    "text": "Adjacency type indicating the lack of any adjacency information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.GibbsSamplingInferer",
    "page": "Docstrings",
    "title": "NetworkLearning.GibbsSamplingInferer",
    "category": "type",
    "text": "Gibbs sapmpling object. Stores the parameters necessary for the algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.GraphAdjacency",
    "page": "Docstrings",
    "title": "NetworkLearning.GraphAdjacency",
    "category": "type",
    "text": "Adjacency type where the adjacency information is represented by an AbstractGraph.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.IterativeClassificationInferer",
    "page": "Docstrings",
    "title": "NetworkLearning.IterativeClassificationInferer",
    "category": "type",
    "text": "Iterative classification object. Stores the parameters necessary for the algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.MatrixAdjacency",
    "page": "Docstrings",
    "title": "NetworkLearning.MatrixAdjacency",
    "category": "type",
    "text": "Adjacency type where the adjacency information is represented by an AbstractMatrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.NetworkLearnerEnt",
    "page": "Docstrings",
    "title": "NetworkLearning.NetworkLearnerEnt",
    "category": "type",
    "text": "Entity-based network learning model type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.NetworkLearnerObs",
    "page": "Docstrings",
    "title": "NetworkLearning.NetworkLearnerObs",
    "category": "type",
    "text": "Observation-based network learning model type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.PartialAdjacency",
    "page": "Docstrings",
    "title": "NetworkLearning.PartialAdjacency",
    "category": "type",
    "text": "Adjacency type where the adjacency information is represented by a function f which can be used to calculate an adjacency matrix or graph,  given proper data.\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.RelaxationLabelingInferer",
    "page": "Docstrings",
    "title": "NetworkLearning.RelaxationLabelingInferer",
    "category": "type",
    "text": "Relaxation labeling object. Stores the parameters necessary for the algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.SimpleRN",
    "page": "Docstrings",
    "title": "NetworkLearning.SimpleRN",
    "category": "type",
    "text": "Simple relational neighbour learner. Counts for  each vertex how many neighbours from each class are in its neighbourhood.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.WeightedRN",
    "page": "Docstrings",
    "title": "NetworkLearning.WeightedRN",
    "category": "type",
    "text": "Weighted relational neighbour learner. For each vertex, it sums up the estimates from neighboring vertices. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.add_adjacency!-Union{Tuple{T}, Tuple{M}, Tuple{M,Array{T,1}}} where T<:AbstractAdjacency where M<:NetworkLearnerObs",
    "page": "Docstrings",
    "title": "NetworkLearning.add_adjacency!",
    "category": "method",
    "text": "add_adjacency!(model, Av)\n\nFunction that adds or, creates and then adds, adjacency objects contained in a vector Av to a network  learning model. The method is used in \'ouf-of-graph\' learning i.e. the training data is not used in  the predictions for new samples. In such circumstances, the adjacency structures - graphs, matrices etc.  pertinent to the new observations have to be created either using the same functions used in training or,  separately supplied, so that relational variables can be created.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.adjacency-Union{Tuple{T}, Tuple{T}} where T<:AbstractAdjacency",
    "page": "Docstrings",
    "title": "NetworkLearning.adjacency",
    "category": "method",
    "text": "adjacency([a,data])\n\nConstructs an adjacency object. If a is a AbstractMatrix, AbstractGraph or  Tuple, it will return usable adjacencies. If a is a Function or PartialAdjacency, data has to be present. If both arguments are missing,  the function returns an EmptyAdjacency.\n\nExamples\n\njulia> using NetworkLearning, LightGraphs\n\njulia> A = [0 1 0; 1 0 0; 0 0 0];\n\njulia> Am = adjacency(A)\nMatrix adjacency, 3 obs\n\njulia> Ag = adjacency(Graph(A))\nGraph adjacency, 3 obs\n\njulia> Ac = adjacency(x->x,A)\nComputable adjacency\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.adjacency_graph-Union{Tuple{MatrixAdjacency{T}}, Tuple{T}} where T<:(AbstractArray{T,2} where T)",
    "page": "Docstrings",
    "title": "NetworkLearning.adjacency_graph",
    "category": "method",
    "text": "adjacency_graph(a)\n\nReturns an adjacency graph computed from the adjacency information of a.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.adjacency_matrix-Union{Tuple{MatrixAdjacency{T}}, Tuple{T}} where T<:(AbstractArray{T,2} where T)",
    "page": "Docstrings",
    "title": "NetworkLearning.adjacency_matrix",
    "category": "method",
    "text": "adjacency_matrix(a)\n\nReturns an adjacency matrix computed from the adjacency information of a.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.adjacency_obs-Tuple{AbstractArray{T,2} where T,UnitRange,LearnBase.ObsDim.Constant{2}}",
    "page": "Docstrings",
    "title": "NetworkLearning.adjacency_obs",
    "category": "method",
    "text": "adjacency_obs(A, r, obsdim)\n\nSelects a range r::UnitRange of observations from the matrix A, along the dimension obsdim::LearnBase.ObsDimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.fit-Tuple{Type{NetworkLearnerEnt},AbstractArray{T,2} where T,BitArray{1},Array{#s1596,1} where #s1596<:AbstractAdjacency,Any,Any}",
    "page": "Docstrings",
    "title": "NetworkLearning.fit",
    "category": "method",
    "text": "fit(::Type{NetworkLearnerEnt}, X, update, Adj, fl_train, fl_exec, fr_train, fr_exec [;kwargs])\n\nTraining method for the entity-based network learning framework.\n\nArguments\n\nXo::AbstractMatrix initial estimates for the entities\nupdate::BitVector mask that indicates wether estimates can be updated (true value) or not (false value); false values \n\ngenerally can be associated with estimates of training samples\n\nAdj::Vector{AbstractAdjacency} a vector containing the entity relational structures (adjacency objects)\nfr_train relational model training function; can be anything that suports the call fr_train((Xr,y)) where y = f_targets(Xo) \nfr_exec relational model prediction function; can be anything that suports the call fr_exec(Mr,Xr) where Mr = fr_train((Xr,y))\n\nand Xr is a dataset of relational variables generated by the relational learner using the estimates Xo and the  adjacency structures.\n\nKeyword arguments\n\npriors::Vector{Float64} class priors (if applicable)\nlearner::Symbol relational learner (i.e. variable generator); available options :rn, :wrn, :bayesrn and :cdrn (default :wrn)\ninference::Symbol collective inference method; available options :rl, :ic and :gs (default :rl)\nnormalize::Bool whether to normalize the relational variables per-entity to the L1 norm (default true)\nf_targets::Function function that extracts targets from estimates generated by the local/relational models \n\n(default f_targets = x->MLDataPattern.targets(indmax,x))\n\nobsdim::Int observation dimension (default 2)\ntol::Float64 maximum admissible mean estimate error for collective inference convergence (default 1e-6)\nκ::Float64 relaxation labeling starting constant, used if learner == :rl (default 1.0)\nα::Float64 relaxation labeling decay constant, used if learner == :rl (default 0.99)\nmaxiter::Int maximum number of iterations for collective inference (default 100)\nbratio::Float64 percentage of iterations i.e. maxiter used for Gibbs sampling burn-in (default 0.1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.fit-Tuple{Type{NetworkLearnerObs},AbstractArray{T,2} where T,AbstractArray,Array{#s1596,1} where #s1596<:AbstractAdjacency,Any,Any,Any,Any}",
    "page": "Docstrings",
    "title": "NetworkLearning.fit",
    "category": "method",
    "text": "fit(::Type{NetworkLearnerObs}, X, y, Adj, fl_train, fl_exec, fr_train, fr_exec [;kwargs])\n\nTraining method for the observation-based network learning framework.\n\nArguments\n\nX::AbstractMatrix training data (used by fl_train, fl_exec; if use_local_data==true, it is also used by fr_train)\nY::AbstractAray data targets (used by fl_train, fr_train)\nAdj::Vector{AbstractAdjacency} a vector containing the observation relational structures (adjacency objects)\nfl_train local model training \'function\'; can be anything that supports the call fl_train((X,y))\nfl_exec local model prediction \'function\'; can be anything that supports the call fl_exec(Ml,X) where Ml = fl_train((X,y))\nfr_train relational model training function; can be anything that suports the call fr_train((Xr,y)) \nfr_exec relational model prediction function; can be anything that suports the call fr_exec(Mr,Xr) where Mr = fr_train((Xr,y))\n\nand Xr is a dataset of relational variables generated by the relational learner using the results of the local model prediction   function and adjacency structures.\n\nKeyword arguments\n\npriors::Vector{Float64} class priors (if applicable)\nlearner::Symbol relational learner (i.e. variable generator); available options :rn, :wrn, :bayesrn and :cdrn (default :wrn)\ninference::Symbol collective inference method; available options :rl, :ic and :gs (default :rl)\nnormalize::Bool whether to normalize the relational variables per-observation to the L1 norm (default true)\nuse_local_data::Bool whether the relational model should use the local data provided (i.e. in X) (default true)\nf_targets::Function function that extracts targets from estimates generated by the local/relational models \n\n(default f_targets = x->MLDataPattern.targets(indmax,x))\n\nobsdim::Int observation dimension (default 2)\ntol::Float64 maximum admissible mean estimate error for collective inference convergence (default 1e-6)\nκ::Float64 relaxation labeling starting constant, used if learner == :rl (default 1.0)\nα::Float64 relaxation labeling decay constant, used if learner == :rl (default 0.99)\nmaxiter::Int maximum number of iterations for collective inference (default 100)\nbratio::Float64 percentage of iterations i.e. maxiter used for Gibbs sampling burn-in (default 0.1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.fit-Union{Tuple{U2}, Tuple{U}, Tuple{C}, Tuple{R}, Tuple{A}, Tuple{T}, Tuple{Type{NetworkLearnerEnt},T,BitArray{1},A,R,C,U,U2}} where U2 where U where C<:AbstractCollectiveInferer where R<:(Type{#s1589} where #s1589<:AbstractRelationalLearner) where A<:(Array{#s1590,1} where #s1590<:AbstractAdjacency) where T<:(AbstractArray{T,2} where T)",
    "page": "Docstrings",
    "title": "NetworkLearning.fit",
    "category": "method",
    "text": "Training method for the network learning framework. This method should not be called directly.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.fit-Union{Tuple{U4}, Tuple{U3}, Tuple{U2}, Tuple{U}, Tuple{C}, Tuple{R}, Tuple{A}, Tuple{S}, Tuple{T}, Tuple{Type{NetworkLearnerObs},T,S,A,R,C,U,U2,U3,U4}} where U4 where U3 where U2 where U where C<:AbstractCollectiveInferer where R<:(Type{#s1586} where #s1586<:AbstractRelationalLearner) where A<:(Array{#s1587,1} where #s1587<:AbstractAdjacency) where S<:AbstractArray where T<:(AbstractArray{T,2} where T)",
    "page": "Docstrings",
    "title": "NetworkLearning.fit",
    "category": "method",
    "text": "Training method for the network learning framework. This method should not be called directly.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.infer!-Union{Tuple{T}, Tuple{T}} where T<:NetworkLearnerEnt",
    "page": "Docstrings",
    "title": "NetworkLearning.infer!",
    "category": "method",
    "text": "Function that calls collective inference using the information in contained in the entity-based network learner\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.intdim-Tuple{LearnBase.ObsDim.Constant{1}}",
    "page": "Docstrings",
    "title": "NetworkLearning.intdim",
    "category": "method",
    "text": "intdim(::LearnBase.ObsDimension)\n\nReturns the integer associated to a dimension object  i.e. intdim(ObsDim.Constant{3})  returns 3.  The function is designed to work on matices so  intdim(::ObsDim.Last) will return 2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.matrix_prealloc-Union{Tuple{O}, Tuple{T}, Tuple{Int64,Int64,O}, Tuple{Int64,Int64,O,T}} where O<:LearnBase.ObsDimension where T",
    "page": "Docstrings",
    "title": "NetworkLearning.matrix_prealloc",
    "category": "method",
    "text": "matrix_prealloc(no, nv, obsdim, val)\n\nReturns a Matrix{T} filled with values equal to val::T, having the size no (number of observations) on dimension obsdim and  nv (number of variables) in the other dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.oppdim-Tuple{LearnBase.ObsDim.Constant{1}}",
    "page": "Docstrings",
    "title": "NetworkLearning.oppdim",
    "category": "method",
    "text": "oppdim(::LearnBase.ObsDimension)\n\nReturns the other dimension for a matrix i.e. if provided ObsDim.Constant{1}  returns ObsDim.Constant{2}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.predict!-Union{Tuple{S}, Tuple{T}, Tuple{M}, Tuple{S,M,T}, Tuple{S,M,T,BitArray{1}}} where S<:(AbstractArray{T,2} where T) where T<:(AbstractArray{T,2} where T) where M<:NetworkLearnerObs",
    "page": "Docstrings",
    "title": "NetworkLearning.predict!",
    "category": "method",
    "text": "In-place prediction method for the network learning framework.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.predict-Union{Tuple{T}, Tuple{M}, Tuple{M,T}, Tuple{M,T,BitArray{1}}} where T<:(AbstractArray{T,2} where T) where M<:NetworkLearnerObs",
    "page": "Docstrings",
    "title": "NetworkLearning.predict",
    "category": "method",
    "text": "Prediction method for the network learning framework.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.strip_adjacency-Union{Tuple{MatrixAdjacency{T}}, Tuple{T}} where T<:(AbstractArray{T,2} where T)",
    "page": "Docstrings",
    "title": "NetworkLearning.strip_adjacency",
    "category": "method",
    "text": "strip_adjacency(a)\n\nFunction that removes adjancency information (i.e. matrix, graph or other data) from adjacency objects and returns a PartialAdjacency that can be used in conjunction with the adjacency function to build a new adjacency object.\n\nExamples\n\njulia> using NetworkLearning, LightGraphs\n\njulia> A = [0 1 0; 1 0 0; 0 0 0];\n\njulia> Am = adjacency(A)\nMatrix adjacency, 3 obs\n\njulia> Ac = adjacency(x->x,A)\nComputable adjacency\n\njulia> Sm = strip_adjacency(Am)\nPartial adjacency, not computable\n\njulia> adjacency(Sm, A) # Sm has to be used with a matrix\nMatrix adjacency, 3 obs\n\njulia> Sc = strip_adjacency(Ac)\nPartial adjacency, not computable\n\njulia> adjacency(Sc, A) # Sc can be use with any data; calls f(A) where f = x->x\nMatrix adjacency, 3 obs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.update_adjacency!-Union{Tuple{T}, Tuple{MatrixAdjacency{T},Any}} where T<:(AbstractArray{T,2} where T)",
    "page": "Docstrings",
    "title": "NetworkLearning.update_adjacency!",
    "category": "method",
    "text": "update_adjacency!(a,f_update)\n\nFunction that updates the data of an adjacency object. a has to be a MatrixAdjacency or  GraphAdjacency while f_update has to of the form f_update = x->update_function!(x).\n\nExamples\n\njulia> using NetworkLearning, LightGraphs\n\njulia> A = [0 1 0; 1 0 0; 0 0 0];\n\njulia> Am = adjacency(A) Matrix adjacency, 3 obs\n\njulia> updatefunction!(X,x,y) = begin          X[x,y] += 1          X[y,x] += 1          return X        end updatefunction! (generic function with 2 methods)\n\njulia> fupdate(x,y) = X->updatefunction!(X,x,y) f_update (generic function with 1 method)\n\njulia> for i in 1:3          updateadjacency!(Am, fupdate(1,3)) # call function three times        end\n\njulia> adjacency_matrix(Am) 3×3 Array{Int64,2}:  0  1  3  1  0  0  3  0  0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.NetworkLearnerState",
    "page": "Docstrings",
    "title": "NetworkLearning.NetworkLearnerState",
    "category": "type",
    "text": "Entity-based network learning model state. It consists of an Array with estimates and a an update mask in the form of a BitVector indicating which observation estimates are to be updated (the ones that are not updated are considered training/stable observations).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NetworkLearning.nvars-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "NetworkLearning.nvars",
    "category": "method",
    "text": "Returns the number of variables given a data object which  supports the nobs function. The data object must ideally  present two dimensions i.e. matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NetworkLearning]\nOrder = [:type, :function]"
},

]}
