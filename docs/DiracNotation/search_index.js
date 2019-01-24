var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DiracNotation-1",
    "page": "Readme",
    "title": "DiracNotation",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)By using this package, matrix representation is changed into Dirac notation. This package supports QuantumOptics.jl(Image: mathjax)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "using Pkg\nPkg.pkg\"add https://github.com/goropikari/DiracNotation.jl\""
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Simple-example-1",
    "page": "Readme",
    "title": "Simple example",
    "category": "section",
    "text": "julia> using DiracNotation, LinearAlgebra, Random; Random.seed!(0);\n\njulia> ket = normalize(rand(4)); bra = ket\';\n\njulia> dirac(ket) # if the dimension of state is a power of 2 ( 2^n ), it is interpreted as n-qubit system.\n|ψ⟩ = 0.65825|00⟩+0.727547|01⟩+0.131519|10⟩+0.141719|11⟩\n\njulia> dirac(bra)\n⟨ψ| = 0.65825⟨00|+0.727547⟨01|+0.131519⟨10|+0.141719⟨11|\n\njulia> DiracNotation.set_properties(precision=3)\n\njulia> op = rand(2,2);\n\njulia> leftdims = [2];\n\njulia> rightdims = [2];\n\njulia> dirac(op, leftdims, rightdims)\nρ = 0.279|0⟩⟨0|+0.0423|0⟩⟨1|+0.203|1⟩⟨0|+0.0683|1⟩⟨1|\n\njulia> DiracNotation.set_properties(numhead=10, displayall=false) # display numhead terms\n\njulia> op = rand(6,4);\n\n# if the system is not a qubits system, you have to specify the dimensions explicitly.\njulia> dirac(op, [2,3], [2,2])\nρ = 0.362|00⟩⟨00|+0.167|00⟩⟨01|+0.469|00⟩⟨10|+0.0668|00⟩⟨11|+0.973|01⟩⟨00|+0.655|01⟩⟨01|+0.0624|01⟩⟨10|+0.157|01⟩⟨11|+0.586|02⟩⟨00|+0.576|02⟩⟨01| +..."
},

{
    "location": "#Display-a-state-with-arbitrary-state-name.-1",
    "page": "Readme",
    "title": "Display a state with arbitrary state name.",
    "category": "section",
    "text": "julia> dirac(ket, \"ϕ\")\n|ϕ⟩ = 0.658|00⟩+0.728|01⟩+0.132|10⟩+0.142|11⟩\n\njulia> dirac(op, [2,3], [2,2], \"A\")\nA = 0.362|00⟩⟨00|+0.167|00⟩⟨01|+0.469|00⟩⟨10|+0.0668|00⟩⟨11|+0.973|01⟩⟨00|+0.655|01⟩⟨01|+0.0624|01⟩⟨10|+0.157|01⟩⟨11|+0.586|02⟩⟨00|+0.576|02⟩⟨01| +..."
},

{
    "location": "#Restore-to-original-style-1",
    "page": "Readme",
    "title": "Restore to original style",
    "category": "section",
    "text": "julia> DiracNotation.reset_properties()\n\njulia> dirac(ket, \"ϕ\")\n|ϕ⟩ = 0.65825|00⟩+0.727547|01⟩+0.131519|10⟩+0.141719|11⟩\n\njulia> dirac(op, [2,3], [2,2], \"A\")\nA = 0.361828|00⟩⟨00|+0.167036|00⟩⟨01|+0.469304|00⟩⟨10|+0.0668464|00⟩⟨11|+0.973216|01⟩⟨00|+0.655448|01⟩⟨01|+0.0623676|01⟩⟨10|+0.156637|01⟩⟨11|+0.585812|02⟩⟨00|+0.575887|02⟩⟨01|+0.353129|02⟩⟨10|+0.605297|02⟩⟨11|+0.539289|10⟩⟨00|+0.868279|10⟩⟨01|+0.767602|10⟩⟨10|+0.135745|10⟩⟨11|+0.260036|11⟩⟨00|+0.9678|11⟩⟨01|+0.043141|11⟩⟨10|+0.838118|11⟩⟨11|+0.910047|12⟩⟨00|+0.76769|12⟩⟨01|+0.267985|12⟩⟨10|+0.914712|12⟩⟨11|"
},

{
    "location": "#Example-on-IJulia-1",
    "page": "Readme",
    "title": "Example on IJulia",
    "category": "section",
    "text": "On IJulia, Dirac notation is rendered as MathJax.Example"
},

{
    "location": "autodocs/#DiracNotation.dirac",
    "page": "Docstrings",
    "title": "DiracNotation.dirac",
    "category": "function",
    "text": "dirac(state::PureState, statename::String=\"ψ\"; header::Bool=false)\ndirac(io::IO, state::PureState, statename::String=\"ψ\"; header::Bool=false)\ndirac(state::PureState, dims::Vector{Int}, statename::String=\"ψ\"; header::Bool=false)\ndirac(io::IO, state::PureState, dims::Vector{Int}, statename::String=\"ψ\"; header::Bool=false)\n\nDisplay a vector as Dirac notation.\n\nExample\n\njulia> using Random; Random.seed!(0);\n\njulia> dirac(randn(Complex{Float64}, 2))\n|ψ⟩ = (0.480201+0.585777im)|0⟩+(-0.249614-0.0953561im)|1⟩\n\njulia> qutrit = rand(Complex{Float64},3);\n\njulia> dirac(qutrit, [3])\n|ψ⟩ = (0.27888+0.203477im)|0⟩+(0.0423017+0.0682693im)|1⟩+(0.361828+0.973216im)|2⟩\n\ndirac(qubitqutrit, [2,3])\n|ψ⟩ = (-0.487131-0.539384im)|00⟩+(0.281063+0.573909im)|01⟩+(-0.24491-0.132634im)|02⟩+(-1.1365-1.75419im)|10⟩+(1.60954+0.155347im)|11⟩+(-0.0828287-0.42515im)|12⟩\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiracNotation.dirac",
    "page": "Docstrings",
    "title": "DiracNotation.dirac",
    "category": "function",
    "text": "dirac(state::MixedState, statename::String=\"ρ\"; header::Bool=false)\ndirac(io::IO, state::MixedState, statename::String=\"ρ\"; header::Bool=false)\ndirac(state::MixedState, dims::Vector{Int}, statename::String=\"ρ\"; header::Bool=false)\ndirac(state::MixedState, ldims::Vector{Int}, rdims::Vector{Int}, statename::String=\"ρ\"; header::Bool=false)\ndirac(io::IO, state::MixedState, ldims::Vector{Int}, rdims::Vector{Int}, statename::String=\"ρ\"; header::Bool=false)\n\nDisplay a matrix as Dirac notation.\n\nExample\n\njulia> using Random; Random.seed!(0);\n\njulia> op1 = randn(Complex{Float64}, 2,2);\n\njulia> dirac(op1)\nρ = (0.480201+0.585777im)|0⟩⟨0|+(0.414801+0.210248im)|0⟩⟨1|+(-0.249614-0.0953561im)|1⟩⟨0|+(0.0459249-0.0770869im)|1⟩⟨1|\n\njulia> op2 = randn(Complex{Float64}, 4,3);\n\njulia> dirac(op2, [2,2], [3])\nρ = (-0.363602+1.11322im)|00⟩⟨0|+(-1.1365-1.75419im)|00⟩⟨1|+(0.197612+0.078787im)|00⟩⟨2|+(-0.487131-0.539384im)|01⟩⟨0|+(1.60954+0.155347im)|01⟩⟨1|+(-0.253062+0.334967im)|01⟩⟨2|+(0.281063+0.573909im)|10⟩⟨0|+(-0.0828287-0.42515im)|10⟩⟨1|+(0.212297-0.539294im)|10⟩⟨2|+(-0.24491-0.132634im)|11⟩⟨0|+(0.807711-0.0626612im)|11⟩⟨1|+(1.00625+0.288773im)|11⟩⟨2|\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiracNotation.ind2Nary-Tuple{Int64,Array{Int64,1}}",
    "page": "Docstrings",
    "title": "DiracNotation.ind2Nary",
    "category": "method",
    "text": "ind2Nary(n::Int, dims::Vector{Int})\n\nArguments\n\nn::Int: n th row(column) of qudit/operator array.\ndims::Vector{Int}: N-ary array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiracNotation.print_dirac",
    "page": "Docstrings",
    "title": "DiracNotation.print_dirac",
    "category": "function",
    "text": "print_dirac(io::IO, state::PureState, dims::Vector{Int}, statename::String=\"ψ\")\nprint_dirac(io::IO, state::MixedState,\n                    ldims::Vector{Int},\n                    rdims::Vector{Int},\n                    statename::String=\"ρ\") where T <: Number\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiracNotation.print_dirac_term-Union{Tuple{T}, Tuple{IO,Int64,T,Array{Int64,1}}, Tuple{IO,Int64,T,Array{Int64,1},Any}} where T<:Number",
    "page": "Docstrings",
    "title": "DiracNotation.print_dirac_term",
    "category": "method",
    "text": "print_dirac_term(io::IO, idx::Int, value::T, dims::Vector{Int}, isfirstterm=false) where T\nprint_dirac_term(io::IO, row::Int, col::Int,\n                         value::T, ldims::Vector{Int}, rdims::Vector{Int}, isfirstterm=false) where T\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DiracNotation.set_properties-Tuple{}",
    "page": "Docstrings",
    "title": "DiracNotation.set_properties",
    "category": "method",
    "text": "set_properties(; kw...)\n\nArguments\n\nprecision::Int.\nislatex::Bool. true -> rendered by mathjax on IJulia\ndisplayall::Bool. true -> display all terms.\nnumhead: Display the first part of terms. Default is 5 terms.\nnewline::Bool.\nimag_suffix::String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DiracNotation]\nOrder = [:type, :function]"
},

]}
