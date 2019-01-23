var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Dubins.jl-Documentation-1",
    "page": "Home",
    "title": "Dubins.jl Documentation",
    "category": "section",
    "text": "CurrentModule = Dubins"
},

{
    "location": "#Overview-1",
    "page": "Home",
    "title": "Overview",
    "category": "section",
    "text": "Dubins.jl is a Julia package for computing the shortest path between two configurations for the Dubins\' vehicle (see Dubins, 1957). The shortest path algorithm, implemented in this package, uses the algebraic solution approach in the paper \"Classification of the Dubins set\" by Andrei M. Shkel and Vladimir Lumelsky."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "The latest release of Dubins can be installed using the Julia package manager withPkg.add(\"Dubins\")Test that the package works by running Pkg.test(\"Dubins\")"
},

{
    "location": "api/#",
    "page": "API Documentation",
    "title": "API Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "api/#API-Documentation-and-Usage-1",
    "page": "API Documentation",
    "title": "API Documentation and Usage",
    "category": "section",
    "text": "Once the Dubins package is installed it can be imported using the commandusing DubinsThe methods that can be used without the qualifier Dubins. includedubins_shortest_path, dubins_path,\ndubins_path_length, dubins_segment_length,\ndubins_segment_length_normalized,\ndubins_path_type, dubins_path_sample,\ndubins_path_sample_many, dubins_path_endpoint,\ndubins_extract_subpathThe constants and other variables that can be used without the qualifier Dubins. includeDubinsPathType, SegmentType, DubinsPath,\nLSL, LSR, RSL, RSR, RLR, LRL,\nEDUBOK, EDUBCOCONFIGS, EDUBPARAM,\nEDUBBADRHO, EDUBNOPATH, EDUBBADINPUTAny method in the Dubins package would return an error code. The error codes that are defined within the package areconst EDUBOK = 0                # no error\nconst EDUBCOCONFIGS = 1         # colocated configurations\nconst EDUBPARAM = 2             # path parameterization error\nconst EDUBBADRHO = 3            # the rho value is invalid\nconst EDUBNOPATH = 4            # no connection between configurations with this word\nconst EDUBBADINPUT = 5          # uninitialized inputs to functions"
},

{
    "location": "api/#Dubins-paths/shortest-Dubins-path-1",
    "page": "API Documentation",
    "title": "Dubins paths/shortest Dubins path",
    "category": "section",
    "text": "The shortest path between two configurations is computed using the method dubins_shortest_path() aserrcode, path = dubins_shortest_path([0., 0., 0.], [1., 0., 0.], 1.)Here, path is an object of type DubinsPath, [0., 0., 0.] is the initial configuration, [1., 0., 0.] is the final configuration and 1. is the turn radius of the Dubins vehicle. A configuration is a 3-element vector with the x-coordinate, y-coordinate, and the heading angle. The above code would return a non-zero error code in case of any errors. If the error code is non-zero, then nothing is returned for the path.A Dubins path of a specific type can be computed usingerrcode, path = dubins_path(zeros(3), [10., 0., 0.], 1., RSL)where, the last argument is the type of Dubins path; it can take any value in LSL, LSR, RSL, RSR, RLR, LRL. Again here, tf the error code is non-zero, then nothing is returned for the path.The length of a Dubins path is computed after a function call to dubins_shortest_path() or dubins_path() asval = dubins_path_length(path)The length of each segment (1-3) in a Dubins path and the type of Dubins path can be queried usingval1 = dubins_segment_length(path, 1)\nval2 = dubins_segment_length(path, 2)\nval3 = dubins_segment_length(path, 3)\npath_type = dubins_path_type(path)The second argument in the method dubins_segment_length() is the segment number. If a segment number that is less than 1 or greater than 3 is used, the method will return Inf."
},

{
    "location": "api/#Sub-path-extraction-1",
    "page": "API Documentation",
    "title": "Sub-path extraction",
    "category": "section",
    "text": "A sub-path of a given Dubins path can be extracted aserrcode, path = dubins_path(zeros(3), [4., 0., 0.], 1., LSL)\n\nerrcode, subpath = dubins_extract_subpath(path, 2.)The second argument of the function dubins_extract_subpath() is a parameter that has to lie in the interval [0,dubins_path_length(path)], failing which the function will return a EDUBPARAM error-code and a nothing for the pathAfter extracting a sub-path, the end-point of the sub-path can be queried using the method dubins_path_endpoint(subpath),. This function returns EDUBOK on successful completion and a 3-element vector representing the configuration of the end-point of the sub-path."
},

{
    "location": "api/#Sampling-a-Dubins-path-1",
    "page": "API Documentation",
    "title": "Sampling a Dubins path",
    "category": "section",
    "text": "Sampling the configurations along a Dubins path is a useful feature that can aid in writing additional plotting features. To that end, the package includes two functions that can achieve the same goal of sampling in two different ways; they are dubins_path_sample() and dubins_path_sample_many(). The usage of the method dubins_path_sample() is illustrated by the following code snippet:errcode, path = dubins_path([0., 0., 0.], [4., 0., 0.], 1., LSL)\n\nerrcode, qsamp = dubins_path_sample(path, 0.)\n# qsamp will take a value [0., 0., 0.], which is the initial configuration\n# the call to dubins_path_sample() should always be preceded by a successful call to dubins_path() or dubins_shortest_path()\n\nerrcode, qsamp = dubins_path_sample(path, 4.)\n# qsamp will take a value [4., 0., 0.], which is the final configuration\n\nerrcode, qsamp = dubins_path_sample(path, 2.)\n# qsamp will take a value [2., 0., 0.], the configuration of the vehicle after travelling for 2 unitsThe second argument of the function dubins_path_sample() is a parameter that has to lie in the interval [0,dubins_path_length(path)], failing which the function will return a EDUBPARAM error-code and nothing  As one can observe from the above code snippet, dubins_path_sample() samples the Dubins path only once. Sampling an entire Dubins path using a step size, can be achieved using the method dubins_path_sample_many(). The dubins_path_sample_many() takes in two arguments:the Dubins path that needs to be sampled, and\nthe step size denoting the distance along the path for subsequent samples.The following code snippet samples a Dubins path using a step size:errcode, path = dubins_path([0., 0., 0.], [4., 0., 0.], 1., LSL)\nerrcode, configurations = dubins_path_sample_many(path, 1.)The output of the above code snippet isjulia> errcode\n0\njulia> configurations\n4-element Array{Any,1}:\n [0.0, 0.0, 0.0]\n [1.0, 0.0, 0.0]\n [2.0, 0.0, 0.0]\n [3.0, 0.0, 0.0]The same behaviour can also be achieved by using the dubins_path_sample() multiple times, one for each step. For more examples, the readers are refered to the unit tests in the file test/test_api.jl."
},

{
    "location": "library/#",
    "page": "Library",
    "title": "Library",
    "category": "page",
    "text": ""
},

{
    "location": "library/#Dubins.DubinsPath",
    "page": "Library",
    "title": "Dubins.DubinsPath",
    "category": "type",
    "text": "The data structure that holds the full dubins path.\n\nIts data fields are as follows:\n\nthe initial configuration, qi,\nthe params vector that contains the length of each segment, params,\nthe turn-radius, ρ, and,\nthe Dubins path type given by the @enum DubinsPathType\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.DubinsPath-Tuple{}",
    "page": "Library",
    "title": "Dubins.DubinsPath",
    "category": "method",
    "text": "Empty constructor for the DubinsPath type\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.dubins_extract_subpath-Tuple{DubinsPath,Float64}",
    "page": "Library",
    "title": "Dubins.dubins_extract_subpath",
    "category": "method",
    "text": "Convenience function to extract a sub-path\n\npath          - an initialized path\nt             - a length measure, where 0 < t < dubinspathlength(path)\nreturn        - zero on successful completion and the subpath\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.dubins_path-Tuple{Array{Float64,1},Array{Float64,1},Float64,DubinsPathType}",
    "page": "Library",
    "title": "Dubins.dubins_path",
    "category": "method",
    "text": "Generate a path with a specified word from an initial configuratioon to a target configuration, with a specified turning radius\n\nq0        - a configuration specified by a 3-element vector x, y, theta\nq1        - a configuration specified by a 3-element vector x, y, theta\nρ         - turning radius of the vehicle\npath_type - the specified path type to use\nreturn    - tuple (error code, dubins path). If error code != 0, then nothing is returned as the second argument\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.dubins_path_endpoint-Tuple{DubinsPath}",
    "page": "Library",
    "title": "Dubins.dubins_path_endpoint",
    "category": "method",
    "text": "Convenience function to identify the endpoint of a path\n\npath          - an initialized path\nreturn        - tuple containing (zero on successful completion and the end configuration [x,y,Θ])\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.dubins_path_length-Tuple{DubinsPath}",
    "page": "Library",
    "title": "Dubins.dubins_path_length",
    "category": "method",
    "text": "Calculate the length of an initialized path\n\npath      - path to find the length of\nreturn    - path length\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.dubins_path_sample-Tuple{DubinsPath,Float64}",
    "page": "Library",
    "title": "Dubins.dubins_path_sample",
    "category": "method",
    "text": "Calculate the configuration along the path, using the parameter t\n\npath      - an initialized path\nt         - length measure where 0 <= t < dubinspathlength(path)\nreturn    - tuple containing non-zero error code if \'t\' is not in the correct range and the configuration result [x, y, θ]\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.dubins_path_sample_many-Tuple{DubinsPath,Float64}",
    "page": "Library",
    "title": "Dubins.dubins_path_sample_many",
    "category": "method",
    "text": "Walk along the path at a fixed sampling interval, calling the callback function at each interval\n\nThe sampling process continues until the whole path is sampled, or the callback returns a non-zero value\n\npath         - the path to sample\nstep_size    - the distance along the path for subsequent samples\nreturn       - tuple (error code, configuration vector). If error code != 0, then nothing is returned as the second argument\n\n\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.dubins_path_type-Tuple{DubinsPath}",
    "page": "Library",
    "title": "Dubins.dubins_path_type",
    "category": "method",
    "text": "Extract the integer that represents which path type was used\n\npath      - an initialized path\nreturn    - one of LSL-0, LSR-1, RSL-2, RSR-3, RLR-4, LRL-5\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.dubins_segment_length-Tuple{DubinsPath,Int64}",
    "page": "Library",
    "title": "Dubins.dubins_segment_length",
    "category": "method",
    "text": "Calculate the length of a specific segment of  an initialized path\n\npath      - path to find the length of\ni         - the segment for which the length is required (1-3)\nreturn    - segment length\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.dubins_segment_length_normalized-Tuple{DubinsPath,Int64}",
    "page": "Library",
    "title": "Dubins.dubins_segment_length_normalized",
    "category": "method",
    "text": "Calculate the normalized length of a specific segment of  an initialized path\n\npath      - path to find the length of\ni         - the segment for which the length is required (1-3)\nreturn    - normalized segment length\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.dubins_shortest_path-Tuple{Array{Float64,1},Array{Float64,1},Float64}",
    "page": "Library",
    "title": "Dubins.dubins_shortest_path",
    "category": "method",
    "text": "Generate a path from an initial configuration to a target configuration with a specified maximum turning radius\n\nA configuration is given by [x, y, θ], where θ is in radians,\n\nq0        - a configuration specified by a 3-element vector [x, y, θ]\nq1        - a configuration specified by a 3-element vector [x, y, θ]\nρ         - turning radius of the vehicle\nreturn    - tuple (error code, dubins path). If error code != 0, then nothing is returned as the second argument\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.DubinsIntermediateResults",
    "page": "Library",
    "title": "Dubins.DubinsIntermediateResults",
    "category": "type",
    "text": "This data structure holds the information to compute the Dubins path in the transformed coordinates where the initial (x,y) is translated to the origin, the final the coordinate axis is rotated to make the x-axis aligned with the line joining the two points. The variable names follow the convention used in the paper \"Classification of the Dubins set\" by Andrei M. Shkel and Vladimir Lumelsky\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.DubinsIntermediateResults-Tuple{Array{Float64,1},Array{Float64,1},Float64}",
    "page": "Library",
    "title": "Dubins.DubinsIntermediateResults",
    "category": "method",
    "text": "Empty constructor for the DubinsIntermediateResults data type\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.dubins_segment-Tuple{Float64,Array{Float64,1},SegmentType}",
    "page": "Library",
    "title": "Dubins.dubins_segment",
    "category": "method",
    "text": "Operators that transform an arbitrary point qi, [x, y, θ], into an image point given a parameter t and segment type\n\nThe three operators correspond to LSEG, RSEG, and S_SEG\n\nL_SEG(x, y, θ, t) = [x, y, θ] + [ sin(θ + t) - sin(θ), -cos(θ + t) + cos(θ),  t]\nR_SEG(x, y, θ, t) = [x, y, θ] + [-sin(θ - t) + sin(θ),  cos(θ - t) - cos(θ), -t]\nS_SEG(x, y, θ, t) = [x, y, θ] + [ cos(θ) * t,           sin(θ) * t,           0]\nreturn    -  the image point as a 3-element vector\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.dubins_word-Tuple{Dubins.DubinsIntermediateResults,DubinsPathType}",
    "page": "Library",
    "title": "Dubins.dubins_word",
    "category": "method",
    "text": "The function to call the corresponding Dubins path based on the path_type\n\nreturn        - tuple (error code, path length as a vector for corresponding path type)\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.set_tolerance-Tuple{Float64}",
    "page": "Library",
    "title": "Dubins.set_tolerance",
    "category": "method",
    "text": "Reset tolerance value\n\n\n\n\n\n"
},

{
    "location": "library/#Dubins.jl-Library-1",
    "page": "Library",
    "title": "Dubins.jl Library",
    "category": "section",
    "text": "Modules = [Dubins]"
},

]}
