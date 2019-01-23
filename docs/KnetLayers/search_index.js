var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Welcome-to-KnetLayers.jl\'s-documentation!-1",
    "page": "Home",
    "title": "Welcome to KnetLayers.jl\'s documentation!",
    "category": "section",
    "text": "(Image: ) (Image: ) (Image: ) (Image: codecov)KnetLayers provides configurable deep learning layers for Knet, fostering your model development. You are able to use Knet and AutoGrad functionalities without adding them to current workspace."
},

{
    "location": "#How-does-it-look-like-?-1",
    "page": "Home",
    "title": "How does it look like ?",
    "category": "section",
    "text": "model = Chain(\n          Dense(input=768, output=128, activation=Sigm()),\n          Dense(input=128, output=10, activation=nothing),\n          CrossEntropyLoss()\n        )\n\nloss(x, y) = model[end](model[1:end-1](x), y)"
},

{
    "location": "#Example-Layers-and-Usage-1",
    "page": "Home",
    "title": "Example Layers and Usage",
    "category": "section",
    "text": "using KnetLayers\n\n#Instantiate an MLP model with random parameters\nmlp = MLP(100,50,20; activation=Sigm()) # input size=100, hidden=50 and output=20\n\n#Do a prediction with the mlp model\nprediction = mlp(randn(Float32,100,1))\n\n#Instantiate a convolutional layer with random parameters\ncnn = Conv(height=3, width=3, inout=3=>10, padding=1, stride=1) # A conv layer\n\n#Filter your input with the convolutional layer\noutput = cnn(randn(Float32,224,224,3,1))\n\n#Instantiate an LSTM model\nlstm = LSTM(input=100, hidden=100, embed=50)\n\n#You can use integers to represent one-hot vectors.\n#Each integer corresponds to vocabulary index of corresponding element in your data.\n\n#For example a pass over 5-Length sequence\nrnnoutput = lstm([3,2,1,4,5];hy=true,cy=true)\n\n#After you get the output, you may acces to hidden states and\n#intermediate hidden states produced by the lstm model\nrnnoutput.y\nrnnoutput.hidden\nrnnoutput.memory\n\n#You can also use normal array inputs for low-level control\n#One iteration of LSTM with a random input\nrnnoutput = lstm(randn(100,1);hy=true,cy=true)\n\n#Pass over a random 10-length sequence:\nrnnoutput = lstm(randn(100,1,10);hy=true,cy=true)\n\n#Pass over a mini-batch data which includes unequal length sequences\nrnnoutput = lstm([[1,2,3,4],[5,6]];sorted=true,hy=true,cy=true)\n\n#To see and modify rnn params in a structured view\nlstm.gatesview"
},

{
    "location": "#Example-Models-1",
    "page": "Home",
    "title": "Example Models",
    "category": "section",
    "text": "ResNet\nSeq2Seq"
},

{
    "location": "#[Exported-Layers](https://ekinakyurek.github.io/KnetLayers.jl/latest/reference.html#Function-Index-1)-1",
    "page": "Home",
    "title": "Exported Layers",
    "category": "section",
    "text": ""
},

{
    "location": "#TO-DO-1",
    "page": "Home",
    "title": "TO-DO",
    "category": "section",
    "text": "Examples\nSpecial layers such Google\'s inception   \nKnown embeddings such Gloove   \nPretrained Models   "
},

{
    "location": "#Function-Documentation-1",
    "page": "Home",
    "title": "Function Documentation",
    "category": "section",
    "text": "Pages = [\n \"reference.md\",\n]"
},

{
    "location": "reference/#",
    "page": "Reference",
    "title": "Reference",
    "category": "page",
    "text": ""
},

{
    "location": "reference/#Reference-1",
    "page": "Reference",
    "title": "Reference",
    "category": "section",
    "text": "ContentsPages = [\"reference.md\"]"
},

{
    "location": "reference/#KnetLayers.Multiply",
    "page": "Reference",
    "title": "KnetLayers.Multiply",
    "category": "type",
    "text": "Multiply(input=inputDimension, output=outputDimension, winit=xavier, atype=KnetLayers.arrtype)\n\nCreates a matrix multiplication layer based on inputDimension and outputDimension.     (m::Multiply) = m.w * x\n\nBy default parameters initialized with xavier, you may change it with winit argument.\n\nKeywords\n\ninput=inputDimension: input dimension\noutput=outputDimension: output dimension\nwinit=xavier: weight initialization distribution\natype=KnetLayers.arrtype : array type for parameters.  Default value is KnetArray{Float32} if you have gpu device. Otherwise it is Array{Float32}\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.Embed",
    "page": "Reference",
    "title": "KnetLayers.Embed",
    "category": "type",
    "text": "Embed(input=inputSize, output=embedSize, winit=xavier, atype=KnetLayers.arrtype)\n\nCreates an embedding layer according to given inputSize and embedSize where inputSize is your number of unique items you want to embed, and embedSize is the size of output vectors. By default parameters initialized with xavier, you yam change it with winit argument.\n\n(m::Embed)(x::Array{T}) where T<:Integer\n(m::Embed)(x; keepsize=true)\n\nEmbed objects are callable with an input which is either and integer array (one hot encoding) or an N-dimensional matrix. For N-dimensional matrix, size(x,1)==inputSize\n\nKeywords\n\ninput=inputDimension: input dimension\noutput=embeddingDimension: output dimension\nwinit=xavier: weight initialization distribution\natype=KnetLayers.arrtype : array type for parameters.  Default value is KnetArray{Float32} if you have gpu device. Otherwise it is Array{Float32}\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.Linear",
    "page": "Reference",
    "title": "KnetLayers.Linear",
    "category": "type",
    "text": "Linear(input=inputSize, output=outputSize, winit=xavier, binit=zeros, atype=KnetLayers.arrtype)\n\nCreates and linear layer according to given inputSize and outputSize.\n\nKeywords\n\ninput=inputSize   input dimension\noutput=outputSize output dimension\nwinit=xavier: weight initialization distribution\nbias=zeros: bias initialization distribution\natype=KnetLayers.arrtype : array type for parameters.  Default value is KnetArray{Float32} if you have gpu device. Otherwise it is Array{Float32}\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.Dense",
    "page": "Reference",
    "title": "KnetLayers.Dense",
    "category": "type",
    "text": "Dense(input=inputSize, output=outputSize, activation=ReLU(), winit=xavier, binit=zeros, atype=KnetLayers.arrtype)\n\nCreates and deense layer according to given input=inputSize and output=outputSize. If activation is nothing, it acts like a Linear Layer.\n\nKeywords\n\ninput=inputSize   input dimension\noutput=outputSize output dimension\nwinit=xaiver: weight initialization distribution\nbias=zeros:   bias initialization distribution\nactivation=ReLU()  activation function(it does not broadcast) or an  activation layer\natype=KnetLayers.arrtype : array type for parameters.  Default value is KnetArray{Float32} if you have gpu device. Otherwise it is Array{Float32}\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.BatchNorm",
    "page": "Reference",
    "title": "KnetLayers.BatchNorm",
    "category": "type",
    "text": "BatchNorm(channels:Int;options...)\n(m::BatchNorm)(x;training=false) #forward run\n\nOptions\n\nmomentum=0.1: A real number between 0 and 1 to be used as the scale of\n\nlast mean and variance. The existing running mean or variance is multiplied by  (1-momentum).\n\n`mean=nothing\': The running mean.\nvar=nothing: The running variance.\nmeaninit=zeros: The function used for initialize the running mean. Should either be nothing or\n\nof the form (eltype, dims...)->data. zeros is a good option.\n\nvarinit=ones: The function used for initialize the run\ndataType=eltype(KnetLayers.arrtype) : element type ∈ {Float32,Float64} for parameters. Default value is eltype(KnetLayers.arrtype)\nusegpu=KnetLayers.arrtype <: KnetArray :\n\nKeywords\n\ntraining=nothing: When training is true, the mean and variance of x are used and moments\n\nargument is modified if it is provided. When training is false, mean and variance  stored in the moments argument are used. Default value is true when at least one  of x and params is AutoGrad.Value, false otherwise.\n\n\n\n\n\n"
},

{
    "location": "reference/#Core-Layers-1",
    "page": "Reference",
    "title": "Core Layers",
    "category": "section",
    "text": "KnetLayers.Multiply\nKnetLayers.Embed   \nKnetLayers.Linear   \nKnetLayers.Dense   \nKnetLayers.BatchNorm   "
},

{
    "location": "reference/#KnetLayers.ReLU",
    "page": "Reference",
    "title": "KnetLayers.ReLU",
    "category": "type",
    "text": "ReLU()\n(l::ReLU)(x) = max(0,x)\n\nRectified Linear Unit function.\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.Sigm",
    "page": "Reference",
    "title": "KnetLayers.Sigm",
    "category": "type",
    "text": "Sigm()\n(l::Sigm)(x) = sigm(x)\n\nSigmoid function\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.Tanh",
    "page": "Reference",
    "title": "KnetLayers.Tanh",
    "category": "type",
    "text": "Tanh()\n(l::Tanh)(x) = tanh(x)\n\nTangent hyperbolic function\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.ELU",
    "page": "Reference",
    "title": "KnetLayers.ELU",
    "category": "type",
    "text": "ELU()\n(l::ELU)(x) = elu(x) -> Computes x < 0 ? exp(x) - 1 : x\n\nExponential Linear Unit nonlineariy.\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.LeakyReLU",
    "page": "Reference",
    "title": "KnetLayers.LeakyReLU",
    "category": "type",
    "text": "LeakyReLU(α=0.2)\n(l::LeakyReLU)(x) -> Computes x < 0 ? α*x : x\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.Dropout",
    "page": "Reference",
    "title": "KnetLayers.Dropout",
    "category": "type",
    "text": "Dropout(p=0)\n\nDropout Layer. p is the droput probability.\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.SoftMax",
    "page": "Reference",
    "title": "KnetLayers.SoftMax",
    "category": "type",
    "text": "SoftMax(dims=:)\n(l::SoftMax)(x)\n\nTreat entries in x as as unnormalized scores and return softmax probabilities.\n\ndims is an optional argument, if not specified the normalization is over the whole x, otherwise the normalization is performed over the given dimensions. In particular, if x is a matrix, dims=1 normalizes columns of x and dims=2 normalizes rows of x.\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.LogSoftMax",
    "page": "Reference",
    "title": "KnetLayers.LogSoftMax",
    "category": "type",
    "text": "LogSoftMax(dims=:)\n(l::LogSoftMax)(x)\n\nTreat entries in x as as unnormalized log probabilities and return normalized log probabilities.\n\ndims is an optional argument, if not specified the normalization is over the whole x, otherwise the normalization is performed over the given dimensions. In particular, if x is a matrix, dims=1 normalizes columns of x and dims=2 normalizes rows of x.\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.LogSumExp",
    "page": "Reference",
    "title": "KnetLayers.LogSumExp",
    "category": "type",
    "text": "LogSumExp(dims=:)\n(l::LogSumExp)(x)\n\nCompute log(sum(exp(x);dims)) in a numerically stable manner.\n\ndims is an optional argument, if not specified the summation is over the whole x, otherwise the summation is performed over the given dimensions. In particular if x   is a matrix, dims=1 sums columns of x and dims=2 sums rows of x.\n\n\n\n\n\n"
},

{
    "location": "reference/#Nonlinearities-1",
    "page": "Reference",
    "title": "Nonlinearities",
    "category": "section",
    "text": "KnetLayers.ReLU   \nKnetLayers.Sigm   \nKnetLayers.Tanh   \nKnetLayers.ELU   \nKnetLayers.LeakyReLU   \nKnetLayers.Dropout   \nKnetLayers.SoftMax   \nKnetLayers.LogSoftMax   \nKnetLayers.LogSumExp   "
},

{
    "location": "reference/#KnetLayers.CrossEntropyLoss",
    "page": "Reference",
    "title": "KnetLayers.CrossEntropyLoss",
    "category": "type",
    "text": "CrossEntropyLoss(dims=1)\n(l::CrossEntropyLoss)(scores, answers; average=true)\n\nCalculates negative log likelihood error on your predicted scores. answers should be integers corresponding to correct class indices. If an answer is 0, loss from that answer will not be included. This is usefull feature when you are working with unequal length sequences.\n\nif dims==1\n\nsize(scores) = C,[B,T1,T2,...]\nsize(answers)= [B,T1,T2,...]\n\nelseif dims==2\n\nsize(scores) = [B,T1,T2,...],C\nsize(answers)= [B,T1,T2,...]\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.BCELoss",
    "page": "Reference",
    "title": "KnetLayers.BCELoss",
    "category": "type",
    "text": "BCELoss(average=true)\n(l::BCELoss)(scores, answers)\nComputes binary cross entropy given scores(predicted values) and answer labels. answer values should be {0,1}, then it returns negative of\nmean|sum(answers * log(p) + (1-answers)*log(1-p)) where p is equal to 1/(1 + exp.(scores)). See also LogisticLoss.\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.LogisticLoss",
    "page": "Reference",
    "title": "KnetLayers.LogisticLoss",
    "category": "type",
    "text": "LogisticLoss(average=true)\n(l::LogisticLoss)(scores, answers)\nComputes logistic loss given scores(predicted values) and answer labels. answer values should be {-1,1}, then it returns mean|sum(log(1 +\nexp(-answers*scores))). See also `BCELoss`.\n\n\n\n\n\n"
},

{
    "location": "reference/#Loss-Functions-1",
    "page": "Reference",
    "title": "Loss Functions",
    "category": "section",
    "text": "KnetLayers.CrossEntropyLoss\nKnetLayers.BCELoss\nKnetLayers.LogisticLoss"
},

{
    "location": "reference/#KnetLayers.Conv",
    "page": "Reference",
    "title": "KnetLayers.Conv",
    "category": "function",
    "text": "Conv(;height=filterHeight, width=filterWidth, inout = 1 => 1, kwargs...)\n\nCreates and convolutional layer Filtering{typeof(conv4)} according to given filter dimensions.\n\n(m::Filtering{typeof(conv4)})(x) #forward run\n\nIf m.w has dimensions (W1,W2,...,I,O) and x has dimensions (X1,X2,...,I,N), the result y will have dimensions (Y1,Y2,...,O,N) where\n\nYi=1+floor((Xi+2*padding[i]-Wi)/stride[i])\n\nHere I is the number of input channels, O is the number of output channels, N is the number of instances, and Wi,Xi,Yi are spatial dimensions. padding and stride are keyword arguments that can be specified as a single number (in which case they apply to all dimensions), or an tuple with entries for each spatial dimension.\n\nKeywords\n\ninout=input_channels => output_channels\nactivation=identity: nonlinear function applied after convolution\npool=nothing: Pooling layer or window size of pooling\nwinit=xavier: weight initialization distribution\nbias=zeros: bias initialization distribution\npadding=0: the number of extra zeros implicitly concatenated at the start and at the end of each dimension.\nstride=1: the number of elements to slide to reach the next filtering window.\nupscale=1: upscale factor for each dimension.\nmode=0: 0 for convolution and 1 for cross-correlation.\nalpha=1: can be used to scale the result.\nhandle: handle to a previously created cuDNN context. Defaults to a Knet allocated handle.\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.DeConv",
    "page": "Reference",
    "title": "KnetLayers.DeConv",
    "category": "function",
    "text": "DeConv(;height=filterHeight, width=filterWidth, inout=1=>1, kwargs...)\n\nCreates and deconvolutional layer Filtering{typeof(deconv4)}  according to given filter dimensions.\n\n(m::Filtering{typeof(deconv4)})(x) #forward run\n\nIf m.w has dimensions (W1,W2,...,I,O) and x has dimensions (X1,X2,...,I,N), the result y will have dimensions (Y1,Y2,...,O,N) where\n\nYi = Wi+stride[i](Xi-1)-2padding[i]\n\nHere I is the number of input channels, O is the number of output channels, N is the number of instances, and Wi,Xi,Yi are spatial dimensions. padding and stride are keyword arguments that can be specified as a single number (in which case they apply to all dimensions), or an tuple with entries for each spatial dimension.\n\nKeywords\n\ninout=input_channels => output_channels\nactivation=identity: nonlinear function applied after convolution\nunpool=nothing: Unpooling layer or window size of unpooling\nwinit=xavier: weight initialization distribution\nbias=zeros: bias initialization distribution\npadding=0: the number of extra zeros implicitly concatenated at the start and at the end of each dimension.\nstride=1: the number of elements to slide to reach the next filtering window.\nupscale=1: upscale factor for each dimension.\nmode=0: 0 for convolution and 1 for cross-correlation.\nalpha=1: can be used to scale the result.\nhandle: handle to a previously created cuDNN context. Defaults to a Knet allocated handle.\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.Pool",
    "page": "Reference",
    "title": "KnetLayers.Pool",
    "category": "function",
    "text": "Pool(kwargs...)\n(::Sampling{typeof(pool)})(x)\n\nCompute pooling of input values (i.e., the maximum or average of several adjacent values) to produce an output with smaller height and/or width.\n\nCurrently 4 or 5 dimensional KnetArrays with Float32 or Float64 entries are supported. If x has dimensions (X1,X2,...,I,N), the result y will have dimensions (Y1,Y2,...,I,N) where\n\nYi=1+floor((Xi+2*padding[i]-window[i])/stride[i])\n\nHere I is the number of input channels, N is the number of instances, and Xi,Yi are spatial dimensions. window, padding and stride are keyword arguments that can be specified as a single number (in which case they apply to all dimensions), or an array/tuple with entries for each spatial dimension.\n\nKeywords:\n\nwindow=2: the pooling window size for each dimension.\npadding=0: the number of extra zeros implicitly concatenated at the\n\nstart and at the end of each dimension.\n\nstride=window: the number of elements to slide to reach the next pooling\n\nwindow.\n\nmode=0: 0 for max, 1 for average including padded values, 2 for average\n\nexcluding padded values.\n\nmaxpoolingNanOpt=0: Nan numbers are not propagated if 0, they are\n\npropagated if 1.\n\nalpha=1: can be used to scale the result.\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.UnPool",
    "page": "Reference",
    "title": "KnetLayers.UnPool",
    "category": "function",
    "text": "UnPool(kwargs...)\n(::Sampling{typeof(unpool)})(x)\n\nReverse of pooling. It has same kwargs with Pool\n\nx == pool(unpool(x;o...); o...)\n\n\n\n\n\n"
},

{
    "location": "reference/#Convolutional-Layers-1",
    "page": "Reference",
    "title": "Convolutional Layers",
    "category": "section",
    "text": "KnetLayers.Conv   \nKnetLayers.DeConv   \nKnetLayers.Pool   \nKnetLayers.UnPool  "
},

{
    "location": "reference/#KnetLayers.AbstractRNN",
    "page": "Reference",
    "title": "KnetLayers.AbstractRNN",
    "category": "type",
    "text": "SRNN(;input=inputSize, hidden=hiddenSize, activation=:relu, options...)\nLSTM(;input=inputSize, hidden=hiddenSize, options...)\nGRU(;input=inputSize, hidden=hiddenSize, options...)\n\n(1) (l::T)(x; kwargs...) where T<:AbstractRNN\n(2) (l::T)(x::Array{Int}; batchSizes=nothing, kwargs...) where T<:AbstractRNN\n(3) (l::T)(x::Vector{Vector{Int}}; sorted=false, kwargs...) where T<:AbstractRNN\n\nAll RNN layers has above forward run(1,2,3) functionalities.\n\n(1) x is an input array with size equals d,[B,T]\n\n(2) For this You need to have an RNN with embedding layer. x is an integer array and inputs coressponds one hot vector indices. You can give 2D array for minibatching as rows corresponds to one instance. You can give 1D array with minibatching by specifying batch batchSizes argument. Checkout Knet.rnnforw for this.\n\n(3) For this You need to have an RNN with embedding layer. x is an vector of integer vectors. Every integer vector corresponds to an instance. It automatically batches inputs. It is better to give inputs as sorted. If your inputs sorted you can make sorted argument true to increase performance.\n\nsee RNNOutput\n\noptions\n\nembed=nothing: embedding size or and embedding layer\nnumLayers=1: Number of RNN layers.\nbidirectional=false: Create a bidirectional RNN if true.\ndropout=0: Dropout probability. Ignored if numLayers==1.\nskipInput=false: Do not multiply the input with a matrix if true.\ndataType=eltype(KnetLayers.arrtype): Data type to use for weights. Default is Float32.\nalgo=0: Algorithm to use, see CUDNN docs for details.\nseed=0: Random number seed for dropout. Uses time() if 0.\nwinit=xavier: Weight initialization method for matrices.\nbinit=zeros: Weight initialization method for bias vectors.\nusegpu=(KnetLayers.arrtype <: KnetArray): GPU used by default if one exists.\n\nKeywords\n\nhx=nothing : initial hidden states\ncx=nothing : initial memory cells\nhy=false   : if true returns h\ncy=false   : if true returns c\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.RNNOutput",
    "page": "Reference",
    "title": "KnetLayers.RNNOutput",
    "category": "type",
    "text": "struct RNNOutput\n    y\n    hidden\n    memory\n    indices\nend\n\nOutputs of the RNN models are always RNNOutput hidden,memory and indices may be nothing depending on the kwargs you used in forward.\n\ny is last hidden states of each layer. size(y)=(H/2H,[B,T]). If you use unequal length instances in a batch input, y becomes 2D array size(y)=(H/2H,sum_of_sequence_lengths). See indices and PadRNNOutput to get correct time outputs for a specific instance or to pad whole output.\n\nh is the hidden states in each timesstep. size(h) = h,B,L/2L\n\nc is the hidden states in each timesstep. size(h) = h,B,L/2L\n\nindices is corresponding instace indices for your RNNOutput.y. You may call yi = y[:,indices[i]].\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.PadSequenceArray",
    "page": "Reference",
    "title": "KnetLayers.PadSequenceArray",
    "category": "function",
    "text": "PadSequenceArray(batch::Vector{Vector{T}}) where T<:Integer\n\nPads a batch of integer arrays with zeros\n\njulia> PadSequenceArray([[1,2,3],[1,2],[1]]) 3×3 Array{Int64,2}:  1  2  3  1  2  0  1  0  0\n\n\n\n\n\n"
},

{
    "location": "reference/#KnetLayers.PadRNNOutput",
    "page": "Reference",
    "title": "KnetLayers.PadRNNOutput",
    "category": "function",
    "text": "PadRNNOutput(s::RNNOutput)\n\nPads a rnn output if it is produces by unequal length batches size(s.y)=(H/2H,sum_of_sequence_lengths) becomes (H/2H,B,Tmax)\n\n\n\n\n\n"
},

{
    "location": "reference/#Recurrent-Layers-1",
    "page": "Reference",
    "title": "Recurrent Layers",
    "category": "section",
    "text": "KnetLayers.AbstractRNN  \nKnetLayers.RNNOutput\nKnetLayers.PadSequenceArray\nKnetLayers.PadRNNOutput"
},

{
    "location": "reference/#KnetLayers.MLP",
    "page": "Reference",
    "title": "KnetLayers.MLP",
    "category": "type",
    "text": "MLP(h::Int...;kwargs...)\n\nCreates a multi layer perceptron according to given hidden states. First hidden state is equal to input size and the last one equal to output size.\n\n(m::MLP)(x;prob=0)\n\nRuns MLP with given input x. prob is the dropout probability.\n\nKeywords\n\nwinit=xavier: weight initialization distribution\nbias=zeros: bias initialization distribution\nactivation=ReLU(): activation layer or function\natype=KnetLayers.arrtype : array type for parameters.  Default value is KnetArray{Float32} if you have gpu device. Otherwise it is Array{Float32}\n\n\n\n\n\n"
},

{
    "location": "reference/#Special-Layers-1",
    "page": "Reference",
    "title": "Special Layers",
    "category": "section",
    "text": "KnetLayers.MLP   "
},

{
    "location": "reference/#Function-Index-1",
    "page": "Reference",
    "title": "Function Index",
    "category": "section",
    "text": "Pages = [\"reference.md\"]"
},

]}
