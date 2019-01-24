var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DiffEqFlux.jl-1",
    "page": "Readme",
    "title": "DiffEqFlux.jl",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status)DiffEqFlux.jl fuses the world of differential equations with machine learning by helping users put diffeq solvers into neural networks. This package utilizes DifferentialEquations.jl and Flux.jl as its building blocks."
},

{
    "location": "#Example-Usage-1",
    "page": "Readme",
    "title": "Example Usage",
    "category": "section",
    "text": "For an overview of what this package is for, see this blog post."
},

{
    "location": "#Optimizing-parameters-of-an-ODE-1",
    "page": "Readme",
    "title": "Optimizing parameters of an ODE",
    "category": "section",
    "text": "First let\'s create a Lotka-Volterra ODE using DifferentialEquations.jl. For more details, see the DifferentialEquations.jl documentationusing DifferentialEquations\nfunction lotka_volterra(du,u,p,t)\n  x, y = u\n  α, β, δ, γ = p\n  du[1] = dx = α*x - β*x*y\n  du[2] = dy = -δ*y + γ*x*y\nend\nu0 = [1.0,1.0]\ntspan = (0.0,10.0)\np = [1.5,1.0,3.0,1.0]\nprob = ODEProblem(lotka_volterra,u0,tspan,p)\nsol = solve(prob,Tsit5())\nusing Plots\nplot(sol)(Image: LV Solution Plot)Next we define a single layer neural network that uses the diffeq_rd layer function that takes the parameters and returns the solution of the x(t) variable. Instead of being a function of the parameters, we will wrap our parameters in param to be tracked by Flux:using Flux, DiffEqFlux\np = param([2.2, 1.0, 2.0, 0.4]) # Initial Parameter Vector\nparams = Flux.Params([p])\n\nfunction predict_rd() # Our 1-layer neural network\n  Array(diffeq_rd(p,prob,Tsit5(),saveat=0.1))\nendNext we choose a loss function. Our goal will be to find parameter that make the Lotka-Volterra solution constant x(t)=1, so we defined our loss as the squared distance from 1:loss_rd() = sum(abs2,x-1 for x in predict_rd())Lastly, we train the neural network using Flux to arrive at parameters which optimize for our goal:data = Iterators.repeated((), 100)\nopt = ADAM(0.1)\ncb = function () #callback function to observe training\n  display(loss_rd())\n  # using `remake` to re-create our `prob` with current parameters `p`\n  display(plot(solve(remake(prob,p=Flux.data(p)),Tsit5(),saveat=0.1),ylim=(0,6)))\nend\n\n# Display the ODE with the initial parameter values.\ncb()\n\nFlux.train!(loss_rd, params, data, opt, cb = cb)(Image: Flux ODE Training Animation)Note that by using anonymous functions, this diffeq_rd can be used as a layer in a neural network Chain, for example likem = Chain(\n  Conv((2,2), 1=>16, relu),\n  x -> maxpool(x, (2,2)),\n  Conv((2,2), 16=>8, relu),\n  x -> maxpool(x, (2,2)),\n  x -> reshape(x, :, size(x, 4)),\n  # takes in the ODE parameters from the previous layer\n  p -> Array(diffeq_rd(p,prob,Tsit5(),saveat=0.1),\n  Dense(288, 10), softmax) |> gpuorm = Chain(\n  Dense(28^2, 32, relu),\n  # takes in the initial condition from the previous layer\n  x -> Array(diffeq_rd(p,prob,Tsit5(),saveat=0.1,u0=x))),\n  Dense(32, 10),\n  softmax)"
},

{
    "location": "#Using-Other-Differential-Equations-1",
    "page": "Readme",
    "title": "Using Other Differential Equations",
    "category": "section",
    "text": "Other differential equation problem types from DifferentialEquations.jl are supported. For example, we can build a layer with a delay differential equation like:function delay_lotka_volterra(du,u,h,p,t)\n  x, y = u\n  α, β, δ, γ = p\n  du[1] = dx = (α - β*y)*h(p,t-0.1)[1]\n  du[2] = dy = (δ*x - γ)*y\nend\nh(p,t) = ones(eltype(p),2)\nprob = DDEProblem(delay_lotka_volterra,[1.0,1.0],h,(0.0,10.0),constant_lags=[0.1])\n\np = param([2.2, 1.0, 2.0, 0.4])\nparams = Flux.Params([p])\nfunction predict_rd_dde()\n  Array(diffeq_rd(p,prob,MethodOfSteps(Tsit5()),saveat=0.1))\nend\nloss_rd_dde() = sum(abs2,x-1 for x in predict_rd_dde())\nloss_rd_dde()Or we can use a stochastic differential equation:function lotka_volterra_noise(du,u,p,t)\n  du[1] = 0.1u[1]\n  du[2] = 0.1u[2]\nend\nprob = SDEProblem(lotka_volterra,lotka_volterra_noise,[1.0,1.0],(0.0,10.0))\n\np = param([2.2, 1.0, 2.0, 0.4])\nparams = Flux.Params([p])\nfunction predict_fd_sde()\n  diffeq_fd(p,reduction,101,prob,SOSRI(),saveat=0.1)\nend\nloss_fd_sde() = sum(abs2,x-1 for x in predict_fd_sde())\nloss_fd_sde()\n\ndata = Iterators.repeated((), 100)\nopt = ADAM(0.1)\ncb = function ()\n  display(loss_fd_sde())\n  display(plot(solve(remake(prob,p=Flux.data(p)),SOSRI(),saveat=0.1),ylim=(0,6)))\nend\n\n# Display the ODE with the current parameter values.\ncb()\n\nFlux.train!(loss_fd_sde, params, data, opt, cb = cb)(Image: SDE NN Animation)"
},

{
    "location": "#Neural-Ordinary-Differential-Equations-1",
    "page": "Readme",
    "title": "Neural Ordinary Differential Equations",
    "category": "section",
    "text": "We can use DiffEqFlux.jl to define, solve, and train neural ordinary differential equations. A neural ODE is an ODE where a neural network defines its derivative function. Thus for example, with the multilayer perceptron neural network Chain(Dense(2,50,tanh),Dense(50,2)), a neural ODE would be defined as having the ODE function:model = Chain(Dense(2,50,tanh),Dense(50,2))\n# Define the ODE as the forward pass of the neural network with weights `p`\ndudt_(du,u,p,t) = du .= model(u)A convenience function which handles all of the details is neural_ode. To use neural_ode, you give it the initial condition, the internal neural network model to use, the timespan to solve on, and any ODE solver arguments. For example, this neural ODE would be defined as:tspan = (0.0f0,25.0f0)\nx->neural_ode(x,dudt,tspan,Tsit5(),saveat=0.1)where here we made it a layer that takes in the initial condition and spits out an array for the time series saved at every 0.1 time steps."
},

{
    "location": "#Training-a-Neural-Ordinary-Differential-Equation-1",
    "page": "Readme",
    "title": "Training a Neural Ordinary Differential Equation",
    "category": "section",
    "text": "Let\'s get a time series array from the Lotka-Volterra equation as data:function lotka_volterra(du,u,p,t)\n  x, y = u\n  α, β, δ, γ = p\n  du[1] = dx = α*x - β*x*y\n  du[2] = dy = -δ*y + γ*x*y\nend\nu0 = [1.0,1.0]\ntspan = (0.0,10.0)\np = [1.5,1.0,3.0,1.0]\nprob = ODEProblem(lotka_volterra,u0,tspan,p)\node_data = Array(solve(prob,Tsit5(),saveat=0.1))Now let\'s define a neural network with a neural_ode layer. First we define the layer:dudt = Chain(Dense(2,50,tanh),Dense(50,2))\ntspan = (0.0f0,10.0f0)\nn_ode = x->neural_ode(x,dudt,tspan,Tsit5(),saveat=0.1)And build a neural network around it. We will use the L2 loss of the network\'s output against the time series data:function predict_n_ode()\n  n_ode(u0)\nend\nloss_n_ode() = sum(abs2,ode_data .- predict_n_ode())and then train the neural network to learn the ODE:data = Iterators.repeated((), 100)\nopt = ADAM(0.1)\ncb = function () #callback function to observe training\n  display(loss_n_ode())\n  # plot current prediction against data\n  cur_pred = predict_n_ode()\n  pl = scatter(0.0:0.1:10.0,ode_data[1,:],label=\"data\")\n  scatter!(pl,0.0:0.1:10.0,cur_pred[1,:],label=\"prediction\")\n  plot(pl)\nend\n\n# Display the ODE with the initial parameter values.\ncb()\n\nFlux.train!(loss_n_ode, params, data, opt, cb = cb)"
},

{
    "location": "#Use-with-GPUs-1",
    "page": "Readme",
    "title": "Use with GPUs",
    "category": "section",
    "text": "Note that the differential equation solvers will run on the GPU if the initial condition is a GPU array. Thus for example, we can define a neural ODE by hand that runs on the GPU:u0 = [2.; 0.] |> gpu\ndudt = Chain(Dense(2,50,tanh),Dense(50,2)) |> gpu\n\nfunction ODEfunc(du,u,p,t)\n    du .= Flux.data(dudt(u))\nend\nprob = ODEProblem(ODEfunc, u0,tspan)\n\n# Runs on a GPU\nsol = solve(prob,BS3(),saveat=0.1)and the diffeq layer functions can be used similarly. Or we can directly use the neural ODE layer function, like:x->neural_ode(gpu(x),gpu(dudt),tspan,BS3(),saveat=0.1)"
},

{
    "location": "#API-Documentation-1",
    "page": "Readme",
    "title": "API Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "#DiffEq-Layer-Functions-1",
    "page": "Readme",
    "title": "DiffEq Layer Functions",
    "category": "section",
    "text": "diffeq_rd(p,prob, args...;u0 = prob.u0, kwargs...) uses Flux.jl\'s reverse-mode AD through the differential equation solver with parameters p and initial condition u0. The rest of the arguments are passed to the differential equation solver. The return is the DESolution.\ndiffeq_fd(p,reduction,n,prob,args...;u0 = prob.u0, kwargs...) uses ForwardDiff.jl\'s forward-mode AD through the differential equation solver with parameters p and initial condition u0. n is the output size where the return value is reduction(sol). The rest of the arguments are passed to the differential equation solver.\ndiffeq_adjoint(p,prob,args...;u0 = prob.u0, kwargs...) uses adjoint sensitivity analysis to  \"backprop the ODE solver\" via DiffEqSensitivity.jl. The return is the time series of the solution as an array solved with parameters p and initial condition u0. The rest of the arguments are passed to the differential equation solver or handled by the adjoint sensitivity algorithm (for more details on sensitivity arguments, see the diffeq documentation)"
},

{
    "location": "#Neural-DE-Layer-Functions-1",
    "page": "Readme",
    "title": "Neural DE Layer Functions",
    "category": "section",
    "text": "neural_ode(x,model,tspan,args...;kwargs...) defines a neural ODE layer where x is the initial condition, model is a Flux.jl model, tspan is the time span to integrate, and the rest of the arguments are passed to the ODE solver. The parameters should be implicit in the model.\nnueral_msde(x,model,mp,tspan,args...;kwargs) defines a neural multiplicative SDE layer where x is the initial condition, model is a Flux.jl model, tspan is the time span to integrate, and the rest of the arguments are passed to the SDE solver. The noise is assumed to be diagonal multiplicative, i.e. the Wiener term is mp.*u.*dW for some array of noise constants mp."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DiffEqFlux]\nOrder = [:type, :function]"
},

]}
