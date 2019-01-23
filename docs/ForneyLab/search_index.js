var documenterSearchIndex = {"docs": [

{
    "location": "#ForneyLab.Addition",
    "page": "Home",
    "title": "ForneyLab.Addition",
    "category": "type",
    "text": "Description:\n\nAn addition constraint factor node\n\nf(out,in1,in2) = δ(in1 + in2 - out)\n\nInterfaces:\n\n1. out\n2. in1\n3. in2\n\nConstruction:\n\nAddition(out, in1, in2, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Bernoulli",
    "page": "Home",
    "title": "ForneyLab.Bernoulli",
    "category": "type",
    "text": "Description:     Bernoulli factor node\n\nout ∈ {0, 1}\np ∈ [0, 1]\n\nf(out, p) = Ber(out|p) = p^out (1 - p)^{1 - out}\n\nInterfaces:     1. out     2. p\n\nConstruction:     Bernoulli(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Beta",
    "page": "Home",
    "title": "ForneyLab.Beta",
    "category": "type",
    "text": "Description:     Beta factor node\n\nReal scalars\na > 0\nb > 0\n\nf(out, a, b) = Beta(out|a, b) = Γ(a + b)/(Γ(a) Γ(b)) out^{a - 1} (1 - out)^{b - 1}\n\nInterfaces:     1. out     2. a     3. b\n\nConstruction:     Beta(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Categorical",
    "page": "Home",
    "title": "ForneyLab.Categorical",
    "category": "type",
    "text": "Description:     Categorical factor node\n\nThe categorical node defines a one-dimensional probability\ndistribution over the normal basis vectors of dimension d\n\nout ∈ {0, 1}^d where Σ_k out_k = 1\np ∈ [0, 1]^d, where Σ_k p_k = 1\n\nf(out, p) = Cat(out | p)\n          = Π_i p_i^{out_i}\n\nInterfaces:     1. out     2. p\n\nConstruction:     Categorical(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Clamp",
    "page": "Home",
    "title": "ForneyLab.Clamp",
    "category": "type",
    "text": "Description:\n\nA factor that clamps a variable to a constant value.\n\nf(out) = δ(out - value)\n\nInterfaces:\n\n1. out\n\nConstruction:\n\nClamp(out, value, id=:some_id)\nClamp(value, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Contingency",
    "page": "Home",
    "title": "ForneyLab.Contingency",
    "category": "type",
    "text": "Description:     Contingency factor node\n\nThe contingency distribution is a multivariate generalization of\nthe categorical distribution. As a bivariate distribution, the\ncontingency distribution defines the joint probability\nover two unit vectors. The parameter p encodes a contingency matrix\nthat specifies the probability of co-occurrence.\n\nout1 ∈ {0, 1}^d1 where Σ_j out1_j = 1\nout2 ∈ {0, 1}^d2 where Σ_k out2_k = 1\np ∈ [0, 1]^{d1 × d2}, where Σ_jk p_jk = 1\n\nf(out1, out2, p) = Con(out1, out2 | p)\n                 = Π_jk p_jk^{out1_j * out2_k}\n\nA Contingency distribution over more than two variables requires\nhigher-order tensors as parameters; these are not implemented in ForneyLab.\n\nInterfaces:     1. out1     2. out2     3. p\n\nConstruction:     Contingency(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Dirichlet",
    "page": "Home",
    "title": "ForneyLab.Dirichlet",
    "category": "type",
    "text": "Description:     Dirichlet factor node\n\nReal vector\na .> 0\n\nMultivariate:\nf(out, a) = Dir(out|a)\n          = Γ(Σ_i a_i)/(Π_i Γ(a_i)) Π_i out_i^{a_i}\n\nMatrix variate with independent rows:\nf(out, a) = Π_j Dir(out|a_j.)\n          = Π_j Γ(Σ_k a_jk)/(Π_k Γ(a_jk)) Π_k out_jk^{a_jk}\n\nInterfaces:     1. out     2. a\n\nConstruction:     Dirichlet(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.DotProduct",
    "page": "Home",
    "title": "ForneyLab.DotProduct",
    "category": "type",
    "text": "Description:\n\nout = in1\'*in2\n\nin1: d-dimensional vector\nin2: d-dimensional vector\nout: scalar\n\n       in2\n       |\n  in1  V   out\n----->[⋅]----->\n\nf(out, in1, in2) =  δ(out - in1\'*in2)\n\nInterfaces:\n\n1 i[:out], 2 i[:in1], 3 i[:in2]\n\nConstruction:\n\nDotProduct(out, in1, in2, id=:my_node)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Edge",
    "page": "Home",
    "title": "ForneyLab.Edge",
    "category": "type",
    "text": "An Edge joins two interfaces (half-edges) a and b.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Equality",
    "page": "Home",
    "title": "ForneyLab.Equality",
    "category": "type",
    "text": "Description:\n\nAn equality constraint factor node\n\nf([1],[2],[3]) = δ([1] - [2]) δ([1] - [3])\n\nInterfaces:\n\n1, 2, 3\n\nConstruction:\n\nEquality(id=:some_id)\n\nThe interfaces of an Equality node have to be connected manually.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Exponential",
    "page": "Home",
    "title": "ForneyLab.Exponential",
    "category": "type",
    "text": "Description:\n\nMaps a location to a scale parameter by exponentiation\n\nf(out,in1) = δ(out - exp(in1))\n\nInterfaces:\n\n1. out\n2. in1\n\nConstruction:\n\nExponential(out, in1, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.FactorGraph",
    "page": "Home",
    "title": "ForneyLab.FactorGraph",
    "category": "type",
    "text": "A factor graph consisting of factor nodes and edges.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Gamma",
    "page": "Home",
    "title": "ForneyLab.Gamma",
    "category": "type",
    "text": "Description:\n\nA gamma node with shape-rate parameterization:\n\nf(out,a,b) = Gam(out|a,b) = 1/Γ(a) b^a out^{a - 1} exp(-b out)\n\nInterfaces:\n\n1. out\n2. a (shape)\n3. b (rate)\n\nConstruction:\n\nGamma(out, a, b, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.GaussianMeanPrecision",
    "page": "Home",
    "title": "ForneyLab.GaussianMeanPrecision",
    "category": "type",
    "text": "Description:\n\nA Gaussian with mean-precision parameterization:\n\nf(out,m,w) = 𝒩(out|m,w) = (2π)^{-D/2} |w|^{1/2} exp(-1/2 (out - m)\' w (out - m))\n\nInterfaces:\n\n1. out\n2. m (mean)\n3. w (precision)\n\nConstruction:\n\nGaussianMeanPrecision(out, m, w, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.GaussianMeanVariance",
    "page": "Home",
    "title": "ForneyLab.GaussianMeanVariance",
    "category": "type",
    "text": "Description:\n\nA Gaussian with mean-variance parameterization:\n\nf(out,m,v) = 𝒩(out|m,v) = (2π)^{-D/2} |v|^{-1/2} exp(-1/2 (out - m)\' v^{-1} (out - m))\n\nInterfaces:\n\n1. out\n2. m (mean)\n3. v (covariance)\n\nConstruction:\n\nGaussianMeanVariance(out, m, v, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.GaussianMixture",
    "page": "Home",
    "title": "ForneyLab.GaussianMixture",
    "category": "type",
    "text": "Description:\n\nA Gaussian mixture with mean-precision parameterization:\n\nf(out, z, m1, w1, m2, w2, ...) = 𝒩(out|m1, w1)^z_1 * 𝒩(out|m2, w2)^z_2 * ...\n\nInterfaces:\n\n1. out\n2. z (switch)\n3. m1 (mean)\n4. w1 (precision)\n5. m2 (mean)\n6. w2 (precision)\n...\n\nConstruction:\n\nGaussianMixture(out, z, m1, w1, m2, w2, ..., id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Interface",
    "page": "Home",
    "title": "ForneyLab.Interface",
    "category": "type",
    "text": "An Interface belongs to a FactorNode and represents a half-edge. An Interface has at most one partner interface, with wich it forms an edge.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.LogNormal",
    "page": "Home",
    "title": "ForneyLab.LogNormal",
    "category": "type",
    "text": "Description:\n\nA log-normal node with location-scale parameterization:\n\nf(out,m,s) = logN(out|m, s) = 1/out (2π s)^{-1/2} exp(-1/(2s) (log(out) - m)^2))\n\nInterfaces:\n\n1. out\n2. m (location)\n3. s (squared scale)\n\nConstruction:\n\nLogNormal(out, m, s, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.MarginalRule",
    "page": "Home",
    "title": "ForneyLab.MarginalRule",
    "category": "type",
    "text": "MarginalRule{factortype} specifies a joint marginal update rule with respect to a node of type `factortype`.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.MarginalScheduleEntry",
    "page": "Home",
    "title": "ForneyLab.MarginalScheduleEntry",
    "category": "type",
    "text": "A MarginalScheduleEntry defines a marginal computation. The marginal_update_rule <: MarginalUpdateRule defines the rule that is used to calculate the (joint) marginal over target.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.MarginalScheduleEntry-Tuple{ForneyLab.Cluster,Dict{Interface,Type}}",
    "page": "Home",
    "title": "ForneyLab.MarginalScheduleEntry",
    "category": "method",
    "text": "Construct a MarginalScheduleEntry for computing the marginal over cluster through a node-specific joint marginal update rule.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.MarginalScheduleEntry-Tuple{Variable}",
    "page": "Home",
    "title": "ForneyLab.MarginalScheduleEntry",
    "category": "method",
    "text": "Construct a MarginalScheduleEntry for computing the marginal over variable through multiplication of colliding messages.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.MarginalUpdateRule",
    "page": "Home",
    "title": "ForneyLab.MarginalUpdateRule",
    "category": "type",
    "text": "A MarginalUpdateRule specifies how a (joint) marginal is calculated from incoming messages (and a node function).\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Message",
    "page": "Home",
    "title": "ForneyLab.Message",
    "category": "type",
    "text": "Encodes a message, which is a probability distribution with a scaling factor\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.MessageUpdateRule",
    "page": "Home",
    "title": "ForneyLab.MessageUpdateRule",
    "category": "type",
    "text": "A MessageUpdateRule specifies how a Message is calculated from the node function and the incoming messages. Use subtypes(MessageUpdateRule) to list the available rules.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Multiplication",
    "page": "Home",
    "title": "ForneyLab.Multiplication",
    "category": "type",
    "text": "Description:\n\nFor continuous random variables, the multiplication node acts\nas a (matrix) multiplication constraint, with node function\n\nf(out, in1, a) = δ(out - a*in1)\n\nInterfaces:\n\n1. out\n2. in1\n3. a\n\nConstruction:\n\nMultiplication(out, in1, a, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Nonlinear",
    "page": "Home",
    "title": "ForneyLab.Nonlinear",
    "category": "type",
    "text": "Description:\n\nNonlinear node modeling a nonlinear relation. Updates for\nthe nonlinear node are computed through local linearization.\n\nf(out, in1) = δ(out - g(in1))\n\nInterfaces:\n\n1. out\n2. in1\n\nConstruction:\n\nNonlinear(out, in1, g::Function, J_g::Function, id=:my_node)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.PointMass",
    "page": "Home",
    "title": "ForneyLab.PointMass",
    "category": "type",
    "text": "PointMass is an abstract type used to describe point mass distributions. It never occurs in a FactorGraph, but it is used as a probability distribution type.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.ProbabilityDistribution",
    "page": "Home",
    "title": "ForneyLab.ProbabilityDistribution",
    "category": "type",
    "text": "Encodes a probability distribution as a FactorNode of type family with fixed interfaces\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.RecognitionFactor",
    "page": "Home",
    "title": "ForneyLab.RecognitionFactor",
    "category": "type",
    "text": "A RecognitionFactor specifies the subset of variables that comprise a joint factor in the recognition factorization.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.RecognitionFactorization",
    "page": "Home",
    "title": "ForneyLab.RecognitionFactorization",
    "category": "type",
    "text": "A RecognitionFactorization holds a collection of (non-overlapping) recognition factors that specify the recognition factorization over a factor graph that is used for variational inference.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.RecognitionFactorization-Tuple",
    "page": "Home",
    "title": "ForneyLab.RecognitionFactorization",
    "category": "method",
    "text": "Construct a RecognitionFactorization consisting of one RecognitionFactor for each argument\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.ScheduleEntry",
    "page": "Home",
    "title": "ForneyLab.ScheduleEntry",
    "category": "type",
    "text": "A ScheduleEntry defines a message computation. The msg_update_rule <: MessageUpdateRule defines the rule that is used to calculate the message coming out of interface.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Sigmoid",
    "page": "Home",
    "title": "ForneyLab.Sigmoid",
    "category": "type",
    "text": "Description:     Constrains a continuous, real-valued variable with a binary (boolean) variable.\n\nf(bin, real) = σ(bin⋅real)\n\nInterfaces:     1. bin     2. real\n\nConstruction:     Sigmoid(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Terminal",
    "page": "Home",
    "title": "ForneyLab.Terminal",
    "category": "type",
    "text": "Description:\n\nTerminal is a special type of node that is only used in the internal\ngraph of a CompositeNode. A Terminal is used to terminate an Edge in the\ninternal graph that is linked to an interface of the CompositeNode.\n\nA Terminal is linked to an interface of the\nCompositeNode containing the Terminal.\n\nInterfaces:\n\n1. out\n\nConstruction:\n\nTerminal(id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Transition",
    "page": "Home",
    "title": "ForneyLab.Transition",
    "category": "type",
    "text": "Description:\n\nThe transition node models a transition between discrete\nrandom variables, with node function\n\nf(out, in1, a) = Cat(out | a*in1)\n\nInterfaces:\n\n1. out\n2. in1\n3. a\n\nConstruction:\n\nTransition(out, in1, a, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Variable",
    "page": "Home",
    "title": "ForneyLab.Variable",
    "category": "type",
    "text": "A Variable encompasses one or more edges in a FactorGraph.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Wishart",
    "page": "Home",
    "title": "ForneyLab.Wishart",
    "category": "type",
    "text": "Description:\n\nA Wishart node:\n\nf(out,v,nu) = W(out|v, nu) = B(v, nu) |out|^{(nu - D - 1)/2} exp(-1/2 tr(v^{-1} out))\n\nInterfaces:\n\n1. out\n2. v (scale matrix)\n3. nu (degrees of freedom)\n\nConstruction:\n\nWishart(out, v, nu, id=:some_id)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.conditionalDifferentialEntropy-Tuple{ProbabilityDistribution{Multivariate,family} where family<:FactorNode,Vararg{ProbabilityDistribution,N} where N}",
    "page": "Home",
    "title": "ForneyLab.conditionalDifferentialEntropy",
    "category": "method",
    "text": "Compute conditional differential entropy: H(Y|X) = H(Y, X) - H(X)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.constant-Tuple{Any}",
    "page": "Home",
    "title": "ForneyLab.constant",
    "category": "method",
    "text": "constant creates a Variable which is linked to a new Clamp, and returns this variable.\n\ny = constant(3.0, id=:y)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.currentGraph-Tuple{}",
    "page": "Home",
    "title": "ForneyLab.currentGraph",
    "category": "method",
    "text": "Return currently active FactorGraph. Create one if there is none.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.currentRecognitionFactorization-Tuple{}",
    "page": "Home",
    "title": "ForneyLab.currentRecognitionFactorization",
    "category": "method",
    "text": "Return currently active RecognitionFactorization. Create one if there is none.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.edges-Tuple{Variable}",
    "page": "Home",
    "title": "ForneyLab.edges",
    "category": "method",
    "text": "Collect all edges corresponding with variable(s)\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.expectationPropagationAlgorithm-Tuple{Array{Variable,1}}",
    "page": "Home",
    "title": "ForneyLab.expectationPropagationAlgorithm",
    "category": "method",
    "text": "Create a sum-product algorithm to infer marginals over variables, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.expectationPropagationSchedule-Tuple{Array{Variable,1}}",
    "page": "Home",
    "title": "ForneyLab.expectationPropagationSchedule",
    "category": "method",
    "text": "expectationPropagationSchedule() generates a expectation propagation message passing schedule.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.handle-Tuple{Interface}",
    "page": "Home",
    "title": "ForneyLab.handle",
    "category": "method",
    "text": "Return interface handle name\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.marginalSchedule-Tuple{Array{Variable,1}}",
    "page": "Home",
    "title": "ForneyLab.marginalSchedule",
    "category": "method",
    "text": "marginalSchedule() generates a marginal schedule that computes the marginals for each target entry\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.mat-Tuple{Any}",
    "page": "Home",
    "title": "ForneyLab.mat",
    "category": "method",
    "text": "Helper function to construct 1x1 Matrix\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.placeholder-Tuple{Variable,Symbol}",
    "page": "Home",
    "title": "ForneyLab.placeholder",
    "category": "method",
    "text": "placeholder(...) creates a Clamp node and registers this node as a data placeholder with the current graph.\n\n# Link variable y to buffer with id :y,\n# indicate that Clamp will hold Float64 values.\nplaceholder(y, :y, datatype=Float64)\n\n# Link variable y to index 3 of buffer with id :y.\n# Specify the data type by passing a default value for the Clamp.\nplaceholder(y, :y, index=3, default=0.0)\n\n# Indicate that the Clamp will hold an array of size `dims`,\n# with Float64 elements.\nplaceholder(X, :X, datatype=Float64, dims=(3,2))\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.sumProductAlgorithm-Tuple{Array{Variable,1}}",
    "page": "Home",
    "title": "ForneyLab.sumProductAlgorithm",
    "category": "method",
    "text": "Create a sum-product algorithm to infer marginals over variables, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.sumProductSchedule-Tuple{Array{Variable,1}}",
    "page": "Home",
    "title": "ForneyLab.sumProductSchedule",
    "category": "method",
    "text": "sumProductSchedule() generates a sum-product message passing schedule that computes the marginals for each of the argument variables.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.ultimatePartner-Tuple{Interface}",
    "page": "Home",
    "title": "ForneyLab.ultimatePartner",
    "category": "method",
    "text": "ultimatePartner(interface) finds the \'ultimate partner\' of interface. If interface.partner does not belong to a Terminal, it simply returns interface.partner. In case of a Terminal node, it finds the first non-Terminal partner on a higher level factor graph.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.variationalAlgorithm-Tuple{Array{RecognitionFactor,1}}",
    "page": "Home",
    "title": "ForneyLab.variationalAlgorithm",
    "category": "method",
    "text": "Create a variational algorithm to infer marginals over a recognition distribution, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.variationalExpectationPropagationAlgorithm-Tuple{RecognitionFactor}",
    "page": "Home",
    "title": "ForneyLab.variationalExpectationPropagationAlgorithm",
    "category": "method",
    "text": "Create a variational EP algorithm to infer marginals over a recognition distribution, and compile it to Julia code\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.variationalExpectationPropagationSchedule-Tuple{RecognitionFactor}",
    "page": "Home",
    "title": "ForneyLab.variationalExpectationPropagationSchedule",
    "category": "method",
    "text": "variationalExpectationPropagationSchedule() generates an expectation propagation message passing schedule that is limited to the recognition_factor. Updates on EP sites are computed with an ExpectationPropagationRule.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.variationalSchedule-Tuple{Array{RecognitionFactor,1}}",
    "page": "Home",
    "title": "ForneyLab.variationalSchedule",
    "category": "method",
    "text": "variationalSchedule() generates a variational message passing schedule that computes the marginals for each of the recognition distributions in the recognition factor.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.Cluster",
    "page": "Home",
    "title": "ForneyLab.Cluster",
    "category": "type",
    "text": "A Cluster specifies a collection of edges adjacent to node that belong to the same RecognitionFactor. A joint marginal can be computed over a cluster.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.DependencyGraph",
    "page": "Home",
    "title": "ForneyLab.DependencyGraph",
    "category": "type",
    "text": "A DependencyGraph is a directed graph in which an edge v -> w represents a dependency of vertex v on vertex w. Dependency graphs are used for example by message scheduling algorithms.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.addNode!-Tuple{FactorGraph,FactorNode}",
    "page": "Home",
    "title": "ForneyLab.addNode!",
    "category": "method",
    "text": "Add a FactorNode to a FactorGraph\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.addVariable!-Tuple{FactorGraph,Variable}",
    "page": "Home",
    "title": "ForneyLab.addVariable!",
    "category": "method",
    "text": "Add a Variable to a FactorGraph\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.approximate-Tuple{Union{Float64, Array{Float64,1}},Function,Function}",
    "page": "Home",
    "title": "ForneyLab.approximate",
    "category": "method",
    "text": "Find a local linear approximation to the nonlinear vector function g at x_hat\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.associate!-Tuple{Interface,Variable}",
    "page": "Home",
    "title": "ForneyLab.associate!",
    "category": "method",
    "text": "associate!(interface, variable) associates interface with variable by connecting interface to an Edge belonging to variable.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.breakerTypes-Tuple{Array{Interface,1}}",
    "page": "Home",
    "title": "ForneyLab.breakerTypes",
    "category": "method",
    "text": "Constructs breaker types dictionary for breaker sites\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.clusterId-Tuple{FactorNode,Edge}",
    "page": "Home",
    "title": "ForneyLab.clusterId",
    "category": "method",
    "text": "Return the id of the cluster/variable that the node-edge combination belongs to \n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.collectEPSites-Tuple{Set{FactorNode}}",
    "page": "Home",
    "title": "ForneyLab.collectEPSites",
    "category": "method",
    "text": "Find default EP sites present in node_set\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.collectInboundTypes-Tuple{ForneyLab.Cluster,Dict{Interface,Type}}",
    "page": "Home",
    "title": "ForneyLab.collectInboundTypes",
    "category": "method",
    "text": "Find the inbound types that are required to compute a joint marginal over target. Returns a vector with inbound types that correspond with required interfaces.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.collectInboundTypes-Union{Tuple{T}, Tuple{ScheduleEntry,Type{T},Dict{Interface,Type}}} where T<:NaiveVariationalRule",
    "page": "Home",
    "title": "ForneyLab.collectInboundTypes",
    "category": "method",
    "text": "Find the inbound types that are required to compute the message for entry. Returns a vector with inbound types that correspond with required interfaces.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.collectInboundTypes-Union{Tuple{T}, Tuple{ScheduleEntry,Type{T},Dict{Interface,Type}}} where T<:StructuredVariationalRule",
    "page": "Home",
    "title": "ForneyLab.collectInboundTypes",
    "category": "method",
    "text": "Find the inbound types that are required to compute the message for entry. Returns a vector with inbound types that correspond with required interfaces.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.collectInbounds-Tuple{MarginalScheduleEntry,Dict{Interface,Int64}}",
    "page": "Home",
    "title": "ForneyLab.collectInbounds",
    "category": "method",
    "text": "Construct the inbound code that computes the marginal for entry. Allows for overloading and for a user the define custom node-specific inbounds collection. Returns a vector with inbounds that correspond with required interfaces.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.collectInbounds-Union{Tuple{T}, Tuple{ScheduleEntry,Type{T},Dict{Interface,Int64}}} where T<:ExpectationPropagationRule",
    "page": "Home",
    "title": "ForneyLab.collectInbounds",
    "category": "method",
    "text": "Find the inbound types that are required to compute the message for entry. Returns a vector with inbound types that correspond with required interfaces.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.collectInbounds-Union{Tuple{T}, Tuple{ScheduleEntry,Type{T},Dict{Interface,Int64}}} where T<:NaiveVariationalRule",
    "page": "Home",
    "title": "ForneyLab.collectInbounds",
    "category": "method",
    "text": "Construct argument code for naive VB updates\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.collectInbounds-Union{Tuple{T}, Tuple{ScheduleEntry,Type{T},Dict{Interface,Int64}}} where T<:StructuredVariationalRule",
    "page": "Home",
    "title": "ForneyLab.collectInbounds",
    "category": "method",
    "text": "Construct argument code for structured VB updates\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.collectInbounds-Union{Tuple{T}, Tuple{ScheduleEntry,Type{T},Dict{Interface,Int64}}} where T<:SumProductRule",
    "page": "Home",
    "title": "ForneyLab.collectInbounds",
    "category": "method",
    "text": "Collect and construct SP update code for each inbound.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.collectNaiveVariationalNodeInbounds-Tuple{FactorNode,ScheduleEntry,Dict{Interface,Int64}}",
    "page": "Home",
    "title": "ForneyLab.collectNaiveVariationalNodeInbounds",
    "category": "method",
    "text": "Construct the inbound code that computes the message for entry. Allows for overloading and for a user the define custom node-specific inbounds collection. Returns a vector with inbounds that correspond with required interfaces.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.collectStructuredVariationalNodeInbounds-Tuple{FactorNode,ScheduleEntry,Dict{Interface,Int64}}",
    "page": "Home",
    "title": "ForneyLab.collectStructuredVariationalNodeInbounds",
    "category": "method",
    "text": "Construct the inbound code that computes the message for entry. Allows for overloading and for a user the define custom node-specific inbounds collection. Returns a vector with inbounds that correspond with required interfaces.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.collectSumProductNodeInbounds-Tuple{FactorNode,ScheduleEntry,Dict{Interface,Int64}}",
    "page": "Home",
    "title": "ForneyLab.collectSumProductNodeInbounds",
    "category": "method",
    "text": "Construct the inbound code that computes the message for entry. Allows for overloading and for a user the define custom node-specific inbounds collection. Returns a vector with inbounds that correspond with required interfaces.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.condense-Tuple{Array{ScheduleEntry,1}}",
    "page": "Home",
    "title": "ForneyLab.condense",
    "category": "method",
    "text": "Contruct a condensed schedule.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.connect!-Tuple{Edge,Interface}",
    "page": "Home",
    "title": "ForneyLab.connect!",
    "category": "method",
    "text": "Connect loose end of edge to interface b.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.disconnect!-Tuple{Edge,Interface}",
    "page": "Home",
    "title": "ForneyLab.disconnect!",
    "category": "method",
    "text": "Disconnect edge from interface.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.ensureMatrix-Union{Tuple{AbstractArray{T,2}}, Tuple{T}} where T<:Number",
    "page": "Home",
    "title": "ForneyLab.ensureMatrix",
    "category": "method",
    "text": "ensureMatrix: cast input to a Matrix if necessary\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.extend-Tuple{Set{Edge}}",
    "page": "Home",
    "title": "ForneyLab.extend",
    "category": "method",
    "text": "Find the smallest legal subgraph that includes the argument edges. Default setting terminates the search at soft factors and does not constrain the search to a limiting set (as specified by an empty limit_set argument).\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.find_vertex_indexes-Union{Tuple{V}, Tuple{V,DependencyGraph{V}}} where V",
    "page": "Home",
    "title": "ForneyLab.find_vertex_indexes",
    "category": "method",
    "text": "children(vertices, graph; allowcycles=false, breakersites=[], restrict_to=[])\n\nReturn a vector consisting of vertices and all their children in graph. v is a child of u iff there exists a path from u to v. The resulting array is sorted in reverse topological order, i.e. for each directed edge u -> v, v (child of u) appears before u.\n\nOptional keyword arguments:\n\nallow_cycles: set to true to accept cycles.\nbreaker_sites: a Set of vertices on which the search will terminate.\nrestrict_to: a Set of vertices to restrict the search to.\n\nThis function can be used to generate message passing schedules if graph is a dependency graph.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.flatten-Tuple{Array{ScheduleEntry,1}}",
    "page": "Home",
    "title": "ForneyLab.flatten",
    "category": "method",
    "text": "Flatten a schedule by inlining all internal message passing schedules. This yields a simple, linear schedule.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.generateId-Tuple{Type}",
    "page": "Home",
    "title": "ForneyLab.generateId",
    "category": "method",
    "text": "Automatically generate a unique id based on the current counter value for the element type.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.hasCollider-Tuple{RecognitionFactor}",
    "page": "Home",
    "title": "ForneyLab.hasCollider",
    "category": "method",
    "text": "Return whether the subgraph contains a collider. If a collider is found, this will lead to conditional dependencies in the recognition distribution (posterior).\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.hasCollider-Tuple{Set{Edge}}",
    "page": "Home",
    "title": "ForneyLab.hasCollider",
    "category": "method",
    "text": "Return whether connectedcluster contains a collider. This function assumes the graph for connectedcluster is a connected tree.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.hasNode-Tuple{FactorGraph,FactorNode}",
    "page": "Home",
    "title": "ForneyLab.hasNode",
    "category": "method",
    "text": "hasNode(graph, node) checks if node is part of graph.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.hasVariable-Tuple{FactorGraph,Variable}",
    "page": "Home",
    "title": "ForneyLab.hasVariable",
    "category": "method",
    "text": "hasVariable(graph, var) checks if var is part of graph.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.inferMarginalRule-Tuple{ForneyLab.Cluster,Array{#s35,1} where #s35<:Type}",
    "page": "Home",
    "title": "ForneyLab.inferMarginalRule",
    "category": "method",
    "text": "Infer the rule that computes the joint marginal over cluster\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.inferUpdateRule!-Union{Tuple{T}, Tuple{ScheduleEntry,Type{T},Dict{Interface,Type}}} where T<:NaiveVariationalRule",
    "page": "Home",
    "title": "ForneyLab.inferUpdateRule!",
    "category": "method",
    "text": "Infer the update rule that computes the message for entry, as dependent on the inbound types\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.inferUpdateRule!-Union{Tuple{T}, Tuple{ScheduleEntry,Type{T},Dict{Interface,Type}}} where T<:StructuredVariationalRule",
    "page": "Home",
    "title": "ForneyLab.inferUpdateRule!",
    "category": "method",
    "text": "Infer the update rule that computes the message for entry, as dependent on the inbound types\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.inferUpdateRules!-Tuple{Array{ScheduleEntry,1}}",
    "page": "Home",
    "title": "ForneyLab.inferUpdateRules!",
    "category": "method",
    "text": "inferUpdateRules!(schedule) infers specific message update rules for all schedule entries.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.interfaceToScheduleEntryIdx-Tuple{Array{ScheduleEntry,1}}",
    "page": "Home",
    "title": "ForneyLab.interfaceToScheduleEntryIdx",
    "category": "method",
    "text": "Generate a mapping from interface to schedule entry index. Multiple interfaces can map to the same schedule entry if the graph contains composite nodes.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.internalSumProductSchedule-Tuple{CompositeNode,Interface,Dict{Interface,#s33} where #s33<:Type}",
    "page": "Home",
    "title": "ForneyLab.internalSumProductSchedule",
    "category": "method",
    "text": "internalSumProductSchedule() generates a sum-product message passing schedule for the inner graph of a CompositeNode. This schedule produces the sum-product message out of the specified outbound_interface.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.isApproxEqual-Tuple{Any,Any}",
    "page": "Home",
    "title": "ForneyLab.isApproxEqual",
    "category": "method",
    "text": "isApproxEqual: check approximate equality\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.isRoundedPosDef-Tuple{AbstractArray{Float64,2}}",
    "page": "Home",
    "title": "ForneyLab.isRoundedPosDef",
    "category": "method",
    "text": "isRoundedPosDef: is input matrix positive definite? Round to prevent fp precision problems that isposdef() suffers from.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.isValid-Tuple{ProbabilityDistribution,Symbol}",
    "page": "Home",
    "title": "ForneyLab.isValid",
    "category": "method",
    "text": "isValid: return true if the parameter field exists and (the first element of) the parameter is not NaN\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.laplace-Tuple{Type{Gamma},ProbabilityDistribution{Univariate,LogNormal}}",
    "page": "Home",
    "title": "ForneyLab.laplace",
    "category": "method",
    "text": "Gamma approximation to the log-normal distribution using Laplace\'s method\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.leaftypes-Tuple{Type}",
    "page": "Home",
    "title": "ForneyLab.leaftypes",
    "category": "method",
    "text": "leaftypes(datatype) returns all subtypes of datatype that are leafs in the type tree.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.localClusterIds-Tuple{FactorNode}",
    "page": "Home",
    "title": "ForneyLab.localClusterIds",
    "category": "method",
    "text": "Return the ids of the clusters/variables to which edges connected to node belong\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.localRecognitionFactorIds-Tuple{FactorNode}",
    "page": "Home",
    "title": "ForneyLab.localRecognitionFactorIds",
    "category": "method",
    "text": "Return the ids of the recognition factors to which edges connected to node belong\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.localRecognitionFactorization-Tuple{FactorNode}",
    "page": "Home",
    "title": "ForneyLab.localRecognitionFactorization",
    "category": "method",
    "text": "Return a dictionary from recognition factor-id to variable/cluster-ids local to node\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.mapToBernoulliParameterRange-Tuple{Any}",
    "page": "Home",
    "title": "ForneyLab.mapToBernoulliParameterRange",
    "category": "method",
    "text": "Map m to range of Bernoulli parameter p ∈ [0, 1]\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.marginalString-Union{Tuple{Clamp{T}}, Tuple{T}} where T<:ForneyLab.VariateType",
    "page": "Home",
    "title": "ForneyLab.marginalString",
    "category": "method",
    "text": "Depending on the origin of the Clamp node message, contruct the marginal code.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.matches-Union{Tuple{T}, Tuple{Type{T},Type{T}}} where T<:Message",
    "page": "Home",
    "title": "ForneyLab.matches",
    "category": "method",
    "text": "Special inheritance rules for parametric Message types\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.messageString-Union{Tuple{Clamp{T}}, Tuple{T}} where T<:ForneyLab.VariateType",
    "page": "Home",
    "title": "ForneyLab.messageString",
    "category": "method",
    "text": "Depending on the origin of the Clamp node message, contruct the outbound message code.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.nodesConnectedToExternalEdges-Tuple{RecognitionFactor}",
    "page": "Home",
    "title": "ForneyLab.nodesConnectedToExternalEdges",
    "category": "method",
    "text": "Find the nodes in recognition_factor that are connected to external edges\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.nodesConnectedToExternalEdges-Tuple{Set{Edge}}",
    "page": "Home",
    "title": "ForneyLab.nodesConnectedToExternalEdges",
    "category": "method",
    "text": "Find the nodes connected to internal_edges that are also connected to external edges\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.pack-Tuple{Any}",
    "page": "Home",
    "title": "ForneyLab.pack",
    "category": "method",
    "text": "This function ensures the argument expression is evaluated at runtime, allowing access to local variables\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.recognitionFactorId-Tuple{Edge}",
    "page": "Home",
    "title": "ForneyLab.recognitionFactorId",
    "category": "method",
    "text": "Return the id of the RecognitionFactor that edge belongs to\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.summaryDependencyGraph-Tuple{Set{Edge}}",
    "page": "Home",
    "title": "ForneyLab.summaryDependencyGraph",
    "category": "method",
    "text": "summaryDependencyGraph(edgeset)\n\nReturns a DependencyGraph (directed graph) that encodes the dependencies among summary messages (such as sum-product messages) in edgeset. All Interfaces in edgeset are vertices in the dependency graph. The dependency graph can be used for loop detection, scheduling, etc.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.summaryPropagationSchedule-Tuple{Array{Variable,1}}",
    "page": "Home",
    "title": "ForneyLab.summaryPropagationSchedule",
    "category": "method",
    "text": "summaryPropagationSchedule(variables) builds a generic summary propagation Schedule for calculating the marginal distributions of every variable in variables. The message update rule in each schedule entry is set to Nothing.\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.trigammaInverse-Tuple{Float64}",
    "page": "Home",
    "title": "ForneyLab.trigammaInverse",
    "category": "method",
    "text": "trigammaInverse(x): solve trigamma(y) = x for y.\n\nUses Newton\'s method on the convex function 1/trigramma(y). Iterations converge monotonically. Based on trigammaInverse implementation in R package \"limma\" by Gordon Smyth: https://github.com/Bioconductor-mirror/limma/blob/master/R/fitFDist.R\n\n\n\n\n\n"
},

{
    "location": "#ForneyLab.variateType-Union{Tuple{ProbabilityDistribution{V,F}}, Tuple{F}, Tuple{V}} where F<:FactorNode where V<:ForneyLab.VariateType",
    "page": "Home",
    "title": "ForneyLab.variateType",
    "category": "method",
    "text": "Extract VariateType from dist\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ForneyLab]\nOrder = [:type, :function]"
},

]}
