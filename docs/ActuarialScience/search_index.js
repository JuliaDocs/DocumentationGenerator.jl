var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ActuarialScience-v0.1.0-1",
    "page": "Readme",
    "title": "ActuarialScience -  v0.1.0",
    "category": "section",
    "text": ""
},

{
    "location": "#A-new-actuarial-modeling-library-1",
    "page": "Readme",
    "title": "A new actuarial modeling library",
    "category": "section",
    "text": ""
},

{
    "location": "#Code-Review:-[![Build-Status](https://travis-ci.org/alecloudenback/ActuarialScience.jl.svg?branchmaster)](https://travis-ci.org/alecloudenback/ActuarialScience.jl)-[![Coverage-Status](https://coveralls.io/repos/github/alecloudenback/ActuarialScience.jl/badge.svg?branchmaster)](https://coveralls.io/github/alecloudenback/ActuarialScience.jl?branchmaster)-[![codecov.io](http://codecov.io/github/alecloudenback/ActuarialScience.jl/coverage.svg?branchmaster)](http://codecov.io/github/alecloudenback/ActuarialScience.jl?branchmaster)-1",
    "page": "Readme",
    "title": "Code Review: (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)",
    "category": "section",
    "text": "A library to bring actuarial science to Julia."
},

{
    "location": "#Project-Goals-1",
    "page": "Readme",
    "title": "Project Goals",
    "category": "section",
    "text": "The goal is ultimately to build out a modeling package, capable of doing much more than simple commutations."
},

{
    "location": "#New-in-this-version-1",
    "page": "Readme",
    "title": "New in this version",
    "category": "section",
    "text": "Refine interest rate periods:\nPeriod 0 now is meaningless, period 1 now refers to the time period (0,1] \nAdd ability to use serial correlation to interest rates (see interest rate section for example)\nAdd memory of functional interest rates\nPrior calls to interest rates record the interst rate, so each call to a stochastic interest rate function don\'t generate an entirely new stream of interest rates, even if it\'s the same interest rate object "
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using ActuarialScience\nusing Plots\nplotlyjs()\nusing Distributions"
},

{
    "location": "#Mortality-1",
    "page": "Readme",
    "title": "Mortality",
    "category": "section",
    "text": "# ActuarialScience will have a number of mortality tables built into the package\n# for now, there are two Social Security tables built in, maleMort and femaleMort\n# e.g. femaleMort = femaleMort = [0.005728,0.000373,0.000241,...]\n\n# to turn a vector into an interactable mortality table object, create a MortalityTable Object\nm = MortalityTable(maleMort)\nf = MortalityTable(femaleMort)\n\nt = MortalityTable(maleMort)\n\n\n\n## Examples ##\n\n# 0.00699 ≈ qx(t,0)\n# 0.000447 ≈ qx(t,1)\n# 1000.0 == lx(t,0)  # the convention is that lx is based on 1000 lives\n# 993.010 ≈ lx(t,1) \n# 1000.0-1000*qx(t,0) ≈ lx(t,1)\n# 992.5661245 ≈ lx(t,2)\n# 120 == w(t)\n# 0 == dx(t,150)\n# 6.99 ≈ dx(t,0)\n# 76.8982069 ≈ ex(t,0)\n# tpx(t,15,3) >= tpx(t,15,4)\n# tqx(t,16,2) >= tqx(t,15,2)\n# 0 <= ex(t,15)\n# 0.003664839851 ≈ tpx(t,22,80)\n\n"
},

{
    "location": "#Interest-1",
    "page": "Readme",
    "title": "Interest",
    "category": "section",
    "text": "# ActuarialScience provides an easy way to specify interest rates:\n\ni = InterestRate(.05) # you can pass interest rate a decimal value, a vector, or a function that returns a value \n\n# ActuarialScience currently lets you use a basic stochastic interest rate form\n\ni2 = InterestRate((x -> rand(Normal(.05,.01))))  # anonymous function provides an easy way to add a stochastic interest rate\n\n# Serial correlation is also allowed:\ni3 = InterestRate((x -> rand(Normal(i(i3,-1),0.01))), .05)\n# InterestRate(f,x...) where x is the first x... interest rates\n# i(i3,-1) returns the prior period\'s interest rate\n\n# Julia\'s power as a language comes in really handy here!"
},

{
    "location": "#Modeling-1",
    "page": "Readme",
    "title": "Modeling",
    "category": "section",
    "text": "## the assumptiosn are joined with a \"LifeInsurance\" Object\ninsM = LifeInsurance(m,i2) \ninsF = LifeInsurance(f,i2)\n\n## from there, you can calculate a number of actuarial commutations:\n\nins = LifeInsurance(t,i)\n# Ax(ins,0) ≈ 0.04223728223\n\n# Axn(ins,26,1) ≈ 0.001299047619\n# Ax(ins,26) ≈ 0.1082172434\n# äx(ins,26) = 18.727437887738578 # Julia lets you use unicode characters, so you can use the a-dot-dot as the actual function\n# äx(ins,26) = 18.727437887738578 # many code editors make the unicode characters really easy, but helper functions provide compatibility# calculating the net premium for a whole life policy for males and females\n# using a random interest rate on\n\n\nplot([map((x->1000000*Ax(insM,x)/äx(insM,x)),0:100),map((x->1000000*Ax(insF,x)/äx(insF,x)),0:100)],xlabel=\"Age\",ylabel=\"Yearly Cost\",yscale = :log10)"
},

{
    "location": "#The-annual-net-premium-for-a-whole-life-policy,-by-age,-with-a-random-discount-rate.-1",
    "page": "Readme",
    "title": "The annual net premium for a whole life policy, by age, with a random discount rate.",
    "category": "section",
    "text": "(Image: plot of insurance premiums)This is different than what you\'d actually pay for a policy, which is called a \"gross premium\".  "
},

{
    "location": "#Roadmap-1",
    "page": "Readme",
    "title": "Roadmap",
    "category": "section",
    "text": "Continue building out basic life and annuity functions\nImplement lapses\nAdd reserves\nDocs\nMore robust tests\nMore built-in mortality tables\nTBD"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Sources for help with the commutation functions (since I have long since taken MLC)https://www.soa.org/files/pdf/edu-2009-fall-ea-sn-com.pdf\nwww.math.umd.edu/~evs/s470/BookChaps/Chp6.pdf\nwww.macs.hw.ac.uk/~angus/papers/eas_offprints/commfunc.pdfShout out to a similar Python project, whose Readme I one day hope to live up to and provided inspiration, including some of the function syntax.https://github.com/franciscogarate/pyliferisk "
},

{
    "location": "#Disclaimer-1",
    "page": "Readme",
    "title": "Disclaimer",
    "category": "section",
    "text": "I provide no warranty or guarantees. This is an open source project and I encourage you to submit feedback or pull requests. It\'s my first foray into the promising language of Juilia, so I encourage feedback about the package desgin and code architecture."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ActuarialScience]\nOrder = [:type, :function]"
},

]}
