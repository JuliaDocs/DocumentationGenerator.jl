var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MDDatasets.jl:-Multi-Dimensional-Datasets-1",
    "page": "Readme",
    "title": "MDDatasets.jl: Multi-Dimensional Datasets",
    "category": "section",
    "text": ""
},

{
    "location": "#[:heavy*exclamation*mark:-Core-of-C-Data-Analysis/Visualization-Suite](https://github.com/ma-laforge/CData.jl)-1",
    "page": "Readme",
    "title": ":heavyexclamationmark: Core of C-Data Analysis/Visualization Suite",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Description-1",
    "page": "Readme",
    "title": "Description",
    "category": "section",
    "text": "The MDDatasets.jl module provides tools to simplify manipulation of multi-dimensional datasets.  MDDatasets.jl implements the core algorithms of the C-Data Analysis/Visualization Suite| <img src=\"https://github.com/ma-laforge/FileRepo/blob/master/SignalProcessing/sampleplots/demo15.png\" width=\"850\"> | | :–-: |"
},

{
    "location": "#Functions-Of-1-Argument-(DataF1)-and-Interpolation-1",
    "page": "Readme",
    "title": "Functions Of 1 Argument (DataF1) & Interpolation",
    "category": "section",
    "text": "Type DataF1 is used to represent continuous functions of 1 argument (y = f(x)).  DataF1 stores samples of said functions in its x & y vectors.Operations performed on two DataF1 objects will result in the interpolation of the corresponding {x, y} coordinates.  Furthermore, operations beyond the x-range of a DataF1 object \"extrapolate\" to 0.By grouping x & y vectors together, DataF1 objects can also lead to simpler/less error-prone interfaces:PlottingModule.plot(x, y, ...)gets simplified to:PlottingModule.plot(data, ...)NOTE: When dealing with complex algorithms, this simplification is rearkably quite significant."
},

{
    "location": "#Multi-Dimensional-Datasets-(DataHR,-DataRS)-and-Broadcasting-1",
    "page": "Readme",
    "title": "Multi-Dimensional Datasets (DataHR, DataRS) & Broadcasting",
    "category": "section",
    "text": "In order to identify trends, or simply to verify the repeatability of a process, one often needs to perform the same operation on multiple \"experiments\".  This module provides two types that store/organize/access experiment data in a convenient fashion:DataHR (Hyper-Rectangle): Collects simpler data elements (like DataF1) into a n-dimensional array.  Each element in DataHR is used to store the result of an \"experiment\", and each array dimension represents an independent control variable that was varied (swept).\nDataRS (Recursive Sweep): Collects simpler data elements (like DataF1) into a recursive data structure.  Each DataRS element is used to store the results on an \"experiment\" (or collection of experiments) where a control variable was varied (swept).  Due to the recursive nature of DataRS, each \"sweep\" can potentially represent a control variable that is dependent on a previous \"sweep\"."
},

{
    "location": "#Broadcast-Features-1",
    "page": "Readme",
    "title": "Broadcast Features",
    "category": "section",
    "text": "Operations performed on multi-dimensional data sets (DataHR and DataRS) will automatically be broadcast to each element of the dataset (see Known Limitations).Explicit looping over DataHR & DataRS structures is therefore typically not required.  Many algorithms can be used unmodified, even after changing the set of experimental points.By default, reducing functions (like maximum, minimum, or mean(::Vector) => Scalar) will operate on DataHR/DataRS structures by collapsing the inner-most dimension:#Assuming sig -> DataHR{sweeps={supply, temp, ctrlVoltage}} of DataF1{x=time}\nfreqVctrl = mean(measfreq(sig)) #DataHR{sweeps={supply, temp, ctrlVoltage}}\nmaxfVtemp = maximum(freqVctrl) #DataHR{sweeps={supply, temp}}\nmaxfVsupply = maximum(maxfVtemp) #DataHR{sweeps={supply}}As can be inferred from above, the sweep from the inner-most dimension can be thought as the x-coordinate of the data.  That is because subsequent operations will be applied along that dimension.TODO: Provide a means to re-order dimensions."
},

{
    "location": "#Principal-Types-1",
    "page": "Readme",
    "title": "Principal Types",
    "category": "section",
    "text": "DataInt, DataFloat, DataComplex: Useful aliases for largest practical data types on a platform (not yet platform dependent).\nDataMD: Abastract data type for multi-dimensional data.\nDataF1: Represents a function of 1 variable, y(x) using a x/y vector pair.\nDataHR{DataF1/DataInt/DataFloat/DataComplex}: A hyper-rectangular organizaton of data.  Principally designed to collect massive datasets with independent control variables (see examples).\nDataRS{DataF1/DataInt/DataFloat/DataComplex}: A recursive-sweep organization of data.  Principally designed to collect massive datasets with dependent control variables(see examples).\nPSweep: A parameter sweep (i.e. an independent control variable that generates experimental points in a DataHR dataset)."
},

{
    "location": "#Function-Listing-1",
    "page": "Readme",
    "title": "Function Listing",
    "category": "section",
    "text": ""
},

{
    "location": "#Imported-From-Base-1",
    "page": "Readme",
    "title": "Imported From Base",
    "category": "section",
    "text": "Single-argument functions:\nzeros, ones, abs, abs2, angle,<br>imag, real, exponent, <br>exp, exp2, exp10, expm1, <br>log, log10, log1p, log2, <br>ceil, floor, <br>asin, asind, asinh, acos, acosd, acosh, <br>atan, atand, atanh, acot, acotd, acoth, <br>asec, asecd, asech, acsc, acscd, acsch, <br>sin, sind, sinh, cos, cosd, cosh, <br>tan, tand, tanh, cot, cotd, coth, <br>sec, secd, sech, csc, cscd, csch, <br>sinpi, cospi, <br>sinc, cosc, <br>deg2rad, rad2deg,Two-argument functions:\n+, -, *, /,<br>max, min, <br>atan, hypot, <br>maximum, minimum, <br>prod, sum, <br>mean, median, middle,"
},

{
    "location": "#Differential/Integral-Math-1",
    "page": "Readme",
    "title": "Differential/Integral Math",
    "category": "section",
    "text": "deriv(d::DataF1, shiftx=[Bool]): Returns dataset with derivative of d\ninteg(d::DataF1, shiftx=[Bool]): Returns definite integral of d\niinteg(d::DataF1, shiftx=[Bool]): Returns dataset with indefinite integral of d"
},

{
    "location": "#Basic-Dataset-Operations-1",
    "page": "Readme",
    "title": "Basic Dataset Operations",
    "category": "section",
    "text": "xval(::DataF1): Returns a dataset with where y(x) = x.\nvalue(y::DataF1, x=[Real]): Returns y(x)\nclip(): Returns a dataset clipped within an x-range\nclip(::DataF1, xrng::Range)\nclip(::DataF1, xmin=[Real], xmax=[Real])\nsample(::DataF1, xrng::Range): Returns dataset sampled @ each point in xrng\nxshift(::DataF1, offset::Number): Returns dataset with all x-values shifted by offset (negative values \"shift left\")\nxscale(::DataF1, fact::Number): Returns dataset with all x-values scaled by fact\nyvsx(yv::DataF1, xv::DataF1): Returns dataset with {xv(x), yv(x)} (interpolating, when necessary)"
},

{
    "location": "#Cross-Based-Operations-1",
    "page": "Readme",
    "title": "Cross-Based Operations",
    "category": "section",
    "text": "Note: The Event object makes functions return x-vectors that represent the current event number.xcross(): Returns x-values of d1 (up-to nmax) when d1 crosses 0 (nmax=0: get all crossings):\nxcross([Event,] d1::DataF1, [nmax::Int,] xstart=[Real], allow=[CrossType])\nycross(): Returns y-values of d2 (up-to nmax) when d1 crosses d2 (nmax=0: get all crossings):\nycross([Event,] d1::DataF1, d2::DataF1, [nmax::Int,] xstart=[Real], allow=[CrossType])\nxcross1(): Returns scalar x-value of d1 on n-th zero-crossing:\nxcross1([Event,] d1::DataF1, n=[Int], xstart=[Real], allow=[CrossType])\nycross1(): Returns scalar y-value of d1 on n-th crossing of d1 & d2:\nycross1([Event,] d1::DataF1, n=[Int], xstart=[Real], allow=[CrossType])"
},

{
    "location": "#Operations-On-Clock-Signals-1",
    "page": "Readme",
    "title": "Operations On Clock Signals",
    "category": "section",
    "text": "measperiod(d::DataF1, nmax=[Int], tstart=[Real], xing=[CrossType], shiftx=[Bool])\nmeasfreq(d::DataF1, nmax=[Int], tstart=[Real], xing=[CrossType], shiftx=[Bool])"
},

{
    "location": "#Operations-On-Binary-Signals-1",
    "page": "Readme",
    "title": "Operations On Binary Signals",
    "category": "section",
    "text": "measdelay(dref::DataF1, dmain::DataF1, nmax=[Int], tstart_ref=[Real], tstart_main=[Real], xing_ref=[CrossType], xing_main=[CrossType])\nmeasck2q(ck::DataF1, q::DataF1, delaymin=[Real], tstart_ck=[Real], tstart_q=[Real], xing_ck=[CrossType], xing_q=[CrossType])"
},

{
    "location": "#The-CrossType-Object-1",
    "page": "Readme",
    "title": "The CrossType Object",
    "category": "section",
    "text": "The CrossType object is used to filter out undersired events.sing: Include singularities (points that cross at a single point).\nflat: Include middle of crossings that are detected at multiple consecutive points.\nthru: Include crossings make it all the way through the crossing point.\nrev: Include crossings that hit the crossing point, then reverse back.\nfirstlast: Include first/last crossing points (when data starts or ends @ crossing point itself).Constructors:CrossType: Indicates which crossings are allowed in the result.\nCrossType(rise=[Bool], fall=[Bool], sing=[Bool], flat=[Bool], thru=[Bool], rev=[Bool], firstlast=[Bool])\nCrossType(:rise): Preset to selecting rising edges\nCrossType(:fall): Preset to selecting falling edges\nCrossType(:risefall): Preset to selecting both rising & falling edges<a name=\"SampleUsage\"></a>"
},

{
    "location": "#Sample-Usage-1",
    "page": "Readme",
    "title": "Sample Usage",
    "category": "section",
    "text": "Examples of the MDDatasets.jl capabilities can be found under the test directory.More advanced usage examples can be found in the sample directory of the SignalProcessing.jl module.<a name=\"SampleUsage_DataHR\"></a>"
},

{
    "location": "#Usage:-Constructing-A-Hyper-Rectangular-Dataset-1",
    "page": "Readme",
    "title": "Usage: Constructing A Hyper-Rectangular Dataset",
    "category": "section",
    "text": "Assuming input data can be generated using the following:t = DataF1((0:.01:10)*1e-9) #Time vector stored as a function of 1 argument\n\n#NOTE: get_ydata returns type \"DataF1\" (stores data as a function of 1 argument):\nget_ydata(t::DataF1, tbit, vdd, trise) = sin(2pi*t/tbit)*(trise/tbit)+vddOne can create a relatively complex Hyper-Rectangular (DataHR) dataset using the following pattern:#Parametric sweep representing independent variables of an experiment:\nsweeplist = PSweep[\n	PSweep(\"tbit\", [1, 3, 9] * 1e-9)\n	PSweep(\"VDD\", 0.9 * [0.9, 1, 1.1])\n	PSweep(\"trise_frac\", [0.1, 0.15, 0.2]) #Rise time as fraction of bit rate\n]\n\n#Generate Hyper-Recangular dataset (DataHR, using dimensions from sweeplist)\ndatahr = fill(DataHR{DataF1}, sweeplist) do tbit, vdd, trise_frac\n	trise = trise_frac*tbit\n	return get_ydata(t, tbit, vdd, trise)\nend<a name=\"SampleUsage_DataRS\"></a>"
},

{
    "location": "#Usage:-Constructing-A-Recursive-Sweep-Dataset-1",
    "page": "Readme",
    "title": "Usage: Constructing A Recursive-Sweep Dataset",
    "category": "section",
    "text": "Assuming input data can be generated using the following:t = DataF1((0:.01:10)*1e-9) #Time vector stored as a function of 1 argument\n\n#NOTE: get_ydata returns type \"DataF1\" (stores data as a function of 1 argument):\nget_ydata(t::DataF1, tbit, vdd, trise) = sin(2pi*t/tbit)*(trise/tbit)+vddOne can create a relatively complex Recursive-Sweep (DataRS) dataset using the following pattern:datars = fill(DataRS, PSweep(\"tbit\", [1, 3, 9] * 1e-9)) do tbit\n	fill(DataRS, PSweep(\"VDD\", 0.9 * [0.9, 1, 1.1])) do vdd\n\n		#Inner-most sweep: need to specify element type (DataF1):\n		fill(DataRS{DataF1}, PSweep(\"trise\", [0.1, 0.15, 0.2] * tbit)) do trise\n			return get_ydata(t, tbit, vdd, trise)\n		end\n	end\nend<a name=\"KnownLimitations\"></a>"
},

{
    "location": "#Known-Limitations-1",
    "page": "Readme",
    "title": "Known Limitations",
    "category": "section",
    "text": ""
},

{
    "location": "#Implementation-1",
    "page": "Readme",
    "title": "Implementation",
    "category": "section",
    "text": "Support for broadcasting functions over DataHR & DataRS types is fairly extensive.\nNonetheless, the system is incomplete/imperfect, and unexpected failures will occur."
},

{
    "location": "#Compatibility-1",
    "page": "Readme",
    "title": "Compatibility",
    "category": "section",
    "text": "Extensive compatibility testing of MDDatasets.jl has not been performed.  The module has been tested using the following environment(s):Linux / Julia-0.7.0 (64-bit)"
},

{
    "location": "#Disclaimer-1",
    "page": "Readme",
    "title": "Disclaimer",
    "category": "section",
    "text": "The MDDatasets.jl module is not yet mature.  Expect significant changes."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [MDDatasets]\nOrder = [:type, :function]"
},

]}
