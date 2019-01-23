var documenterSearchIndex = {"docs": [

{
    "location": "#AllanDeviations.allandev-Union{Tuple{U}, Tuple{T}, Tuple{Array{T,1},AbstractFloat}} where U<:AllanTauDescriptor where T",
    "page": "Home",
    "title": "AllanDeviations.allandev",
    "category": "method",
    "text": "allandev(data, rate; [frequency=false], [overlapping=true], [taus=Octave]) Calculates the allan deviation\n\n#parameters:\n\n<data>:			The data array to calculate the deviation from either as as phases or frequencies.\n<rate>:			The rate of the data given.\n[frequency]:		True if data contains frequency data otherwise (default) phase data is assumed.\n[overlapping]:	True (default) to calculate overlapping deviation, false otherwise.\n[taus]:			Taus to calculate the deviation at. This can either be an AllanTauDescriptor type AllTaus, Decadade, HalfDecade, Octave, HalfOctave, QuarterOctave, an array of taus to calculate at, a float number to build a custom log-scale on or an integer to build a specific number of log spaced points.\n\n#returns: named tupple (tau, deviation, error, count)\n\ntau:		Taus which where used.\ndeviation:	Deviations calculated.\nerror:		Respective errors.\ncount:		Number of contributing terms for each deviation.\n\n\n\n\n\n"
},

{
    "location": "#AllanDeviations.hadamarddev-Union{Tuple{U}, Tuple{T}, Tuple{Array{T,1},AbstractFloat}} where U<:AllanTauDescriptor where T",
    "page": "Home",
    "title": "AllanDeviations.hadamarddev",
    "category": "method",
    "text": "hadamarddev(data, rate; [frequency=false], [overlapping=true], [taus=Octave]) Calculates the hadamard deviation\n\n#parameters:\n\n<data>:			The data array to calculate the deviation from either as as phases or frequencies.\n<rate>:			The rate of the data given.\n[frequency]:		True if data contains frequency data otherwise (default) phase data is assumed.\n[overlapping]:	True (default) to calculate overlapping deviation, false otherwise.\n[taus]:			Taus to calculate the deviation at. This can either be an AllanTauDescriptor type AllTaus, Decadade, HalfDecade, Octave, HalfOctave, QuarterOctave, an array of taus to calculate at, a float number to build a custom log-scale on or an integer to build a specific number of log spaced points.\n\n#returns: named tupple (tau, deviation, error, count)\n\ntau:		Taus which where used.\ndeviation:	Deviations calculated.\nerror:		Respective errors.\ncount:		Number of contributing terms for each deviation.\n\n\n\n\n\n"
},

{
    "location": "#AllanDeviations.mallandev-Union{Tuple{U}, Tuple{T}, Tuple{Array{T,1},AbstractFloat}} where U<:AllanTauDescriptor where T",
    "page": "Home",
    "title": "AllanDeviations.mallandev",
    "category": "method",
    "text": "mallandev(data, rate; [frequency=false], [overlapping=true], [taus=Octave]) Calculates the modified allan deviation\n\n#parameters:\n\n<data>:			The data array to calculate the deviation from either as as phases or frequencies.\n<rate>:			The rate of the data given.\n[frequency]:		True if data contains frequency data otherwise (default) phase data is assumed.\n[overlapping]:	True (default) to calculate overlapping deviation, false otherwise.\n[taus]:			Taus to calculate the deviation at. This can either be an AllanTauDescriptor type AllTaus, Decadade, HalfDecade, Octave, HalfOctave, QuarterOctave, an array of taus to calculate at, a float number to build a custom log-scale on or an integer to build a specific number of log spaced points.\n\n#returns: named tupple (tau, deviation, error, count)\n\ntau:		Taus which where used.\ndeviation:	Deviations calculated.\nerror:		Respective errors.\ncount:		Number of contributing terms for each deviation.\n\n\n\n\n\n"
},

{
    "location": "#AllanDeviations.mtie-Union{Tuple{U}, Tuple{T}, Tuple{Array{T,1},AbstractFloat}} where U<:AllanTauDescriptor where T",
    "page": "Home",
    "title": "AllanDeviations.mtie",
    "category": "method",
    "text": "mtie(data, rate; [frequency=false], [overlapping=true], [taus=Octave]) Calculates the maximal time interval error\n\nparameters:\n\n<data>:			The data array to calculate the deviation from either as as phases or frequencies.\n<rate>:			The rate of the data given.\n[frequency]:	True if data contains frequency data otherwise (default) phase data is assumed.\n[overlapping]:	True (default) to calculate overlapping deviation, false otherwise.\n[taus]:			Taus to calculate the deviation at. This can either be an AllanTauDescriptor type AllTaus, Decadade, HalfDecade, Octave, HalfOctave, QuarterOctave, an array of taus to calculate at, a float number to build a custom log-scale on or an integer to build a specific number of log spaced points.\n\nreturns: named tupple (tau, deviation, error, count)\n\ntau:		Taus which where used.\ndeviation:	Deviations calculated.\nerror:		Respective errors.\ncount:		Number of contributing terms for each deviation.\n\n\n\n\n\n"
},

{
    "location": "#AllanDeviations.timedev-Union{Tuple{U}, Tuple{T}, Tuple{Array{T,1},AbstractFloat}} where U<:AllanTauDescriptor where T",
    "page": "Home",
    "title": "AllanDeviations.timedev",
    "category": "method",
    "text": "timedev(data, rate; [frequency=false], [overlapping=true], [taus=Octave]) Calculates the time deviation\n\n#parameters:\n\n<data>:			The data array to calculate the deviation from either as as phases or frequencies.\n<rate>:			The rate of the data given.\n[frequency]:		True if data contains frequency data otherwise (default) phase data is assumed.\n[overlapping]:	True (default) to calculate overlapping deviation, false otherwise.\n[taus]:			Taus to calculate the deviation at. This can either be an AllanTauDescriptor type AllTaus, Decadade, HalfDecade, Octave, HalfOctave, QuarterOctave, an array of taus to calculate at, a float number to build a custom log-scale on or an integer to build a specific number of log spaced points.\n\n#returns: named tupple (tau, deviation, error, count)\n\ntau:		Taus which where used.\ndeviation:	Deviations calculated.\nerror:		Respective errors.\ncount:		Number of contributing terms for each deviation.\n\n\n\n\n\n"
},

{
    "location": "#AllanDeviations.totaldev-Union{Tuple{U}, Tuple{T}, Tuple{Array{T,1},AbstractFloat}} where U<:AllanTauDescriptor where T",
    "page": "Home",
    "title": "AllanDeviations.totaldev",
    "category": "method",
    "text": "totaldev(data, rate; [frequency=false], [overlapping=true], [taus=Octave]) Calculates the total deviation\n\n#parameters:\n\n<data>:			The data array to calculate the deviation from either as as phases or frequencies.\n<rate>:			The rate of the data given.\n[frequency]:		True if data contains frequency data otherwise (default) phase data is assumed.\n[overlapping]:	True (default) to calculate overlapping deviation, false otherwise.\n[taus]:			Taus to calculate the deviation at. This can either be an AllanTauDescriptor type AllTaus, Decadade, HalfDecade, Octave, HalfOctave, QuarterOctave, an array of taus to calculate at, a float number to build a custom log-scale on or an integer to build a specific number of log spaced points.\n\n#returns: named tupple (tau, deviation, error, count)\n\ntau:		Taus which where used.\ndeviation:	Deviations calculated.\nerror:		Respective errors.\ncount:		Number of contributing terms for each deviation.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AllanDeviations]\nOrder = [:type, :function]"
},

]}
