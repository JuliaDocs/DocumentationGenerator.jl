var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Jags-1",
    "page": "Readme",
    "title": "Jags",
    "category": "section",
    "text": "(Image: Travis Build Status)"
},

{
    "location": "#Purpose-1",
    "page": "Readme",
    "title": "Purpose",
    "category": "section",
    "text": "A package to use Jags (as an external program) from Julia.For more info on Jags, please go to http://mcmc-jags.sourceforge.net.For more info on Mamba, please go to http://mambajl.readthedocs.org/en/latest/."
},

{
    "location": "#What\'s-new-1",
    "page": "Readme",
    "title": "What\'s new",
    "category": "section",
    "text": ""
},

{
    "location": "#Version-2.0.0-(tagged-Jan-2019)-1",
    "page": "Readme",
    "title": "Version 2.0.0 (tagged Jan 2019)",
    "category": "section",
    "text": "Thanks to Hellema Jags.jl has been updated for Julia 1."
},

{
    "location": "#Version-1.0.5-(tagged-Jan-2018)-1",
    "page": "Readme",
    "title": "Version 1.0.5 (tagged Jan 2018)",
    "category": "section",
    "text": "Added an option to specify thinning by Jags. Jagsmodel() now accepts a jagsthin arguments. Default is jagsthin=1. Thanks to @hellemo. See examples Line3 and Line4.\nFurther updates by Hellemo (e.g. to improve readdlm performance).\nTested on Julia 0.6. Not yet on Julia 0.7-."
},

{
    "location": "#Version-1.0.2-1",
    "page": "Readme",
    "title": "Version 1.0.2",
    "category": "section",
    "text": "Requires Julia v\"0.5.0-rc3\".\nUpdated .travis.yml to jsut test on Julia 0.5"
},

{
    "location": "#Version-1.0.0-1",
    "page": "Readme",
    "title": "Version 1.0.0",
    "category": "section",
    "text": "Updated for Julia 0.5"
},

{
    "location": "#Version-0.2.0-1",
    "page": "Readme",
    "title": "Version 0.2.0",
    "category": "section",
    "text": "Added badges for Julia package listing\nExported JAGS_HOME in Jags.jl\nUpdated for to also run Julia 0.4 pre-releases"
},

{
    "location": "#Version-0.1.5-1",
    "page": "Readme",
    "title": "Version 0.1.5",
    "category": "section",
    "text": "Updated .travis.yml\nThe runtests.jl script now prints package version"
},

{
    "location": "#Version-0.1.4-1",
    "page": "Readme",
    "title": "Version 0.1.4",
    "category": "section",
    "text": "Allowed JAGSHOME and JULIASVG_BROWSER to be set from either ~/.juliarc.jl or as an evironment variable. Updated README accordingly."
},

{
    "location": "#Version-0.1.3-1",
    "page": "Readme",
    "title": "Version 0.1.3",
    "category": "section",
    "text": "Removed upper bound on Julia in REQUIRE. "
},

{
    "location": "#Version-0.1.2-1",
    "page": "Readme",
    "title": "Version 0.1.2",
    "category": "section",
    "text": "Fix for access to environment variables on Windows."
},

{
    "location": "#Version-0.1.1-1",
    "page": "Readme",
    "title": "Version 0.1.1",
    "category": "section",
    "text": "Stores Jags\'s input & output files in a subdirectory of the working directory.\nAdded Bones2 example."
},

{
    "location": "#Version-0.1.0-1",
    "page": "Readme",
    "title": "Version 0.1.0",
    "category": "section",
    "text": "The two most important features introduced in version 0.1.0 are:Using Mamba to display and diagnose simulation results. The call to jags() to sample now returns a Mamba Chains object (previously it returned a dictionary). \nAdded the ability to specify RNGs in the initializations file for running simulations in parallel."
},

{
    "location": "#Version-0.0.4-1",
    "page": "Readme",
    "title": "Version 0.0.4",
    "category": "section",
    "text": "Added the ability to start multiple Jags scripts in parallel."
},

{
    "location": "#Version-0.0.3-and-earlier-1",
    "page": "Readme",
    "title": "Version 0.0.3 and earlier",
    "category": "section",
    "text": "Parsing structure for input arguments to Stan.\nSingle process execution of a Jags simulations.\nRead created output files by Jags back into Julia."
},

{
    "location": "#Requirements-1",
    "page": "Readme",
    "title": "Requirements",
    "category": "section",
    "text": "This version of the Jags.jl package assumes that: Jags is installed and the jags binary is on PATH. The variable JAGSHOME is currently initialized either from ~/.juliarc.jl or from an environment variable JAGSHOME. JAGS_HOME currently only used in runtests.jl to disable attempting to run tests that need the Jags executable on PATH.\nMamba (see https://github.com/brian-j-smith/Mamba.jl) is installed.\nDataArrays (see https://github.com/JuliaStats/DataArrays.jl) is installed.\nOn OSX, all Jags-j03-v0.2.0 examples check the environment variable JULIASVGBROWSER to automatically display (in a browser) the simulation results (after creating .svg files), e.g. on my system I have exported JULIASVGBROWSER=\"Google Chrome.app\". For other platforms the final lines in the Examples/xxxx.jl files may need to be adjusted (or removed). In any case, on all platforms, both a .svg and a .pdf file will be created and left behind in the working directory.JAGSHOME and JULIASVG_BROWSER can also be defined in ~/.juliarc.jl.This version of the package has primarily been tested on Mac OSX 10.10, Julia 0.3.3, Jags 3.4.0 and Mamba 0.4.3. A limited amount of testing has taken place on other platforms by other users of the package (see note 1 in the \'To Do\' section below).To test and run the examples:julia > Pkgtest(Jags)"
},

{
    "location": "#A-walk-through-example-1",
    "page": "Readme",
    "title": "A walk through example",
    "category": "section",
    "text": "As in the Jags.jl setting, the Jags program consumes and produces files in a \'tmp\' subdirectory of the current directory, it is useful to control the current working directory and restore the original directory at the end of the script.using Mamba, Jags\n\nProjDir = dirname(@__FILE__)\ncd(ProjDir)Variable line holds the model which will be writtten to a file named $(model.name).bugs in the \'tmp\' subdirectory. The value of model.name is set later on, see the call to Jagsmodel() below.line = \"\nmodel {\n  for (i in 1:n) {\n        mu[i] <- alpha + beta*(x[i] - x.bar);\n        y[i]   ~ dnorm(mu[i],tau);\n  }\n  x.bar   <- mean(x[]);\n  alpha    ~ dnorm(0.0,1.0E-4);\n  beta     ~ dnorm(0.0,1.0E-4);\n  tau      ~ dgamma(1.0E-3,1.0E-3);\n  sigma   <- 1.0/sqrt(tau);\n}\n\"Next, define which variables should be monitored (if => true).monitors = (String => Bool)[\n  \"alpha\" => true,\n  \"beta\" => true,\n  \"tau\" => true,\n  \"sigma\" => true,\n]The next step is to create and initialize a Jagsmodel:jagsmodel = Jagsmodel(\n  name=\"line1\", \n  model=line,\n  monitor=monitors,\n  #ncommands=1, nchains=4,\n  #deviance=true, dic=true, popt=true,\n  pdir=ProjDir);\n\nprintln(\"\\nJagsmodel that will be used:\")\njagsmodel |> displayNotice that by default a single command with 4 chains is created. It is possible to run each of the 4 chains in a separate process which has advantages. Using the Bones example as a testcase, on my machine running 1 command simulating a single chain takes 6 seconds, 4 (parallel) commands each simulating 1 chain takes about 9 seconds and a single command simulating 4 chains takes about 25 seconds. Of course this is dependent on the number of available cores and assumes the drawing of samples takes a reasonable chunk of time vs. running a command in a new shell.Running chains in separate commands does need additional data to be passed in through the initialization data and is demonstrated in Examples/Line2. Some more details are given below.If nchains is set to 1, this is updated in Jagsmodel() if dic and/or popt is requested. Jags needs minimally 2 chains to compute those.The input data for the line example is in below data dictionary:data = Dict(\n  \"x\" => [1, 2, 3, 4, 5],\n  \"y\" => [1, 3, 3, 3, 5],\n  \"n\" => 5\n)\n\nprintln(\"Input observed data dictionary:\")\ndata |> displayNext define an array of dictionaries with initial values for parameters. If the array of dictionaries has not enough elements, the elements will be recycled for chains/commands:inits = [\n  Dict(\"alpha\" => 0,\"beta\" => 0,\"tau\" => 1),\n  Dict(\"alpha\" => 1,\"beta\" => 2,\"tau\" => 1),\n  Dict(\"alpha\" => 3,\"beta\" => 3,\"tau\" => 2),\n  Dict(\"alpha\" => 5,\"beta\" => 2,\"tau\" => 5)\n]\n\nprintln(\"\\nInput initial values dictionary:\")\ninits |> display\nprintln()Run the mcmc simulation, passing in the model, the data, the initial values and the working directory. If \'inits\' is a single dictionary, it needs to be passed in as \'[inits]\', see the Bones example. sim = jags(jagsmodel, data, inits, ProjDir)\ndescribe(sim)\nprintln()Below Mamba.jl based tools are available to diagnose and plot the simulation results:###### Brooks, Gelman and Rubin Convergence Diagnostic\ntry\n  gelmandiag(sim1, mpsrf=true, transform=true) |> display\ncatch e\n  #println(e)\n  gelmandiag(sim, mpsrf=false, transform=true) |> display\nend\n\n###### Geweke Convergence Diagnostic\ngewekediag(sim) |> display\n\n###### Highest Posterior Density Intervals\nhpd(sim) |> display\n\n###### Cross-Correlations\ncor(sim) |> display\n\n###### Lag-Autocorrelations\nautocor(sim) |> display\n\n###### Plotting\np = plot(sim, [:trace, :mean, :density, :autocor], legend=true);\ndraw(p, nrow=4, ncol=4, filename=\"$(jagsmodel.name)-summaryplot\", fmt=:svg)\ndraw(p, nrow=4, ncol=4, filename=\"$(jagsmodel.name)-summaryplot\", fmt=:pdf)\n\n###### Below will only work on OSX, please adjust for your environment.\n###### JULIA_SVG_BROWSER is set from the environment variable JULIA_SVG_BROWSER\n@static Sys.isapple() ? if length(JULIA_SVG_BROWSER) > 0\n        for i in 1:3\n          isfile(\"$(jagsmodel.name)-summaryplot-$(i).svg\") &&\n            run(`open -a $(JULIA_SVG_BROWSER) \"$(jagsmodel.name)-summaryplot-$(i).svg\"`)\n        end\n      end : println()"
},

{
    "location": "#Running-a-Jags-script,-some-details-1",
    "page": "Readme",
    "title": "Running a Jags script, some details",
    "category": "section",
    "text": "Jags.jl really only consists of 2 functions, Jagsmodel() and jags().Jagsmodel() is used to define and set up the basic structure to run a simulation. The full signature of Jagsmodel() is:function Jagsmodel(;\n  name=\"Noname\", \n  model=\"\", \n  ncommands=1,\n  nchains=4,\n  adapt=1000,\n  update=10000,\n  thin=10,\n  jagsthin=1,\n  monitor=Dict(), \n  deviance=false,\n  dic=false,\n  popt=false,\n  updatejagsfile=true,\n  pdir=pwd())All arguments are keyword arguments and have default values, although usually at least the name and model arguments will be provided.After a Jagsmodel has been created, the workhorse function jags() is called to run the simulation, passing in the Jagsmodel, the data and the initialization for the chains.As Jags needs quite a few input files and produces several output files, these are all stored in a subdirectory of the working directory, typically called \'tmp\'.The full signature of jags() is:function jags(\n  model::Jagsmodel,\n  data::Dict{String, Any}=Dict{String, Any}(),\n  init::Array{Dict{String, Any}, 1} = Dict{String, Any}[],\n  ProjDir=pwd();\n  updatedatafile::Bool=true,\n  updateinitfiles::Bool=true\n  )All parameters to compile and run the Jags script are implicitly passed in through the model argument.The Line2 example shows how to run multiple Jags simulations in parallel. The most simple case, e.g. 4 commands, each with a single chain, can be initialized with an \'inits\' like shown below:inits = [\n  Dict(\"alpha\" => 0,\"beta\" => 0,\"tau\" => 1,\".RNG.name\" => \"base::Wichmann-Hill\"),\n  Dict(\"alpha\" => 1,\"beta\" => 2,\"tau\" => 1,\".RNG.name\" => \"base::Marsaglia-Multicarry\"),\n  Dict(\"alpha\" => 3,\"beta\" => 3,\"tau\" => 2,\".RNG.name\" => \"base::Super-Duper\"),\n  Dict(\"alpha\" => 5,\"beta\" => 2,\"tau\" => 5,\".RNG.name\" => \"base::Mersenne-Twister\")\n]The first entry in the \'inits\' array will be passed into the first chain in the first command process, the second entry to the second process, etc. A second chain in the first command would be initialized with the second entry, etc. "
},

{
    "location": "#To-do-1",
    "page": "Readme",
    "title": "To do",
    "category": "section",
    "text": "More features will be added as requested by users and as time permits. Please file an issue/comment/request.Note 1: In order to support platforms other than OS X, help is needed to test on such platforms."
},

{
    "location": "autodocs/#Jags.set_JAGS_HOME!-Tuple{Any}",
    "page": "Docstrings",
    "title": "Jags.set_JAGS_HOME!",
    "category": "method",
    "text": "Set the path for Jags.\n\nExample: set_JAGS_HOME!(homedir() * \"/src/src/cmdstan-2.11.0/\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Jags.par-Tuple{Array{Base.AbstractCmd,1}}",
    "page": "Docstrings",
    "title": "Jags.par",
    "category": "method",
    "text": "par\n\nRewrite dct to R format in file. \n\nMethod\n\npar(cmds)\n\nRequired arguments\n\n* `cmds::Array{Base.AbstractCmd,1}`    : Multiple commands to concatenate\n\nor\n\n* `cmd::Base.AbstractCmd`              : Single command to be\n* `n::Number`                            inserted n times into cmd\n\n\nor\n* `cmd::Array{String, 1}`              : Array of cmds as Strings\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Jags]\nOrder = [:type, :function]"
},

]}
