var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GroundMotion.jl-1",
    "page": "Readme",
    "title": "GroundMotion.jl",
    "category": "section",
    "text": "The ground motion evaluation module (earthquake seismology)"
},

{
    "location": "#Build-Status-1",
    "page": "Readme",
    "title": "Build Status",
    "category": "section",
    "text": "(Image: Linux/MacOS) (Image: Windows) (Image: Coverage Status) (Image: GroundMotion) (Image: GroundMotion)"
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "Pkg.add(\"GroundMotion.jl\")"
},

{
    "location": "#Basic-principles-1",
    "page": "Readme",
    "title": "Basic principles",
    "category": "section",
    "text": "Names of GMPE functions looks like: gmpe_{Name_of_gmpe_function}. For example: gmpe_as2008, where as2008 is Abrahamson and Silva 2008 GMPE Model. The configuration for a model (see examples/*.conf) has ground_motion_type that can be PGA,PGV,PSA and define the type of output data points.Each GMPE function has at least 2 methods: for calculation based on input VS30-grid or without any grid."
},

{
    "location": "#GRID-case-1",
    "page": "Readme",
    "title": "GRID case",
    "category": "section",
    "text": "The GMPE function for each grid\'s point calculates {pga/pgv/psa} values using latitude, longitude [degrees for WGS84 ellipsoid] and VS30 [m/s]. The output data has return in custom type (depends by config) where latitude and longitude are copy from input grid and pga/pgv/pgd/psa is calculated by function. For example: the function gmpe_as2008 with parameterspga_as2008(eq::Earthquake,\n           config_as2008::Params_as2008,\n           grid::Array{Point_vs30};\n           min_val::Number)where ground_motion_type = \"PGA\" at config, returns 1-d is Array{Point_pga_out} with points based on input grid and pga > min_val (pga is Acceleration of gravity in percent (%g) rounded to ggg.gg)."
},

{
    "location": "#Without-grid-1",
    "page": "Readme",
    "title": "Without grid",
    "category": "section",
    "text": "In case of without any grid GMPE functions return simple 1-d Array{Float64} with {pga/pgv/pgd/psa} data. It calculates from epicenter to distance with 1 [km] step perpendicularly to the epicenter.Example:pga_as2008(eq::Earthquake,\n           config::Params_as2008;\n           VS30::Number=350,\n           distance::Int64=1000)where ground_motion_type = \"PGA\" at config, return is Array{Float64} with 1:distance values of pga (also rounded to ggg.gg)."
},

{
    "location": "#Short-example:-1",
    "page": "Readme",
    "title": "Short example:",
    "category": "section",
    "text": "using GroundMotion\n# init model parameters\ninclude(\"GroundMoution.jl/examples/as2008.conf\")\n# load vs30 grid\ngrid = read_vs30_file(\"Downloads/web/testvs30.txt\")\n# set earthquake location\neq = Earthquake(143.04,51.92,13,6)\n# run AS2008 PGA modeling on GRID\nout_grid = gmpe_as2008(eq,config_as2008,grid)\n# run AS2008 PGA FOR PLOTTING with VS30=30 [m/s^2], distance=1000 [km] by default.\nsimulation = pga_as2008(eq,config_as2008)"
},

{
    "location": "#How-to-get-VS30-grid-1",
    "page": "Readme",
    "title": "How to get VS30 grid",
    "category": "section",
    "text": "Download GMT grd file from USGS Vs30 Models and Data page\nUnzip it. It takes around 2,7G disk space for one file: unzip global_vs30_grd.zip\n...\nls -lh global_vs30.grd\n-rw-r--r--  1 jamm  staff   2,7G  8 сен  2016 global_vs30.grdUse GMT2XYZ man page from GMT to convert grd data to XYZ text file:# example:\ngrd2xyz global_vs30.grd -R145.0/146.0/50.0/51.0 > test_sea.txt\n# number of rows:\ncat test_sea.txt |wc -l\n   14641"
},

{
    "location": "#Read-and-Write-data-grids-1",
    "page": "Readme",
    "title": "Read and Write data grids",
    "category": "section",
    "text": "Use read_vs30_file to read data from vs30 file:grid = read_vs30_file(\"Downloads/web/somevs30.txt\")After some gmpe_* function on grid done, you will get Array{Point_{pga,pgv,pgd,psa}_out}. Use convert_to_float_array to convert Array{Point_{pga,pgv,pgd,psa}_out} to Nx3 Array{Float64}:typeof(A)\n#--> Array{GroundMoution.Point_pga_out,1}\nlength(A)\n#--> 17\nB = convert_to_float_array(A)\ntypeof(B)\n#--> Array{Float64,2}Use Base.writedlm to write XYZ (lon,lat,pga/pgv/pgd/psa) data to text file:writedlm(\"Downloads/xyz.txt\", B) # where B is N×3 Array{Float64}Use convert_to_point_vs30 to convert Array{Float64,2} array to Array{GroundMotion.Point_vs30,1}"
},

{
    "location": "#Earthquake-location-data-1",
    "page": "Readme",
    "title": "Earthquake location data",
    "category": "section",
    "text": "Lets define lat,lon,depth,Ml,Mw:eq = Earthquake(143.04,51.92,13,6,5.8)\n# OR\neq = Earthquake(143.04,51.92,13,6)Latitude and longitude assumes degrees for WGS84 ellipsoid. Depth in km. Mw usually not ready right after earthquake. Mw=0 in case of moment magnitude is not specified. All gmpe models uses Mw if it is or Ml otherwise."
},

{
    "location": "#Abrahamson-and-Silva-2008-GMPE-Model-1",
    "page": "Readme",
    "title": "Abrahamson and Silva 2008 GMPE Model",
    "category": "section",
    "text": "WORK IN PROGRESS!"
},

{
    "location": "#Reference-1",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": "Abrahamson, Norman, and Walter Silva. \"Summary of the Abrahamson & Silva NGA ground-motion relations.\" Earthquake spectra 24.1 (2008): 67-97."
},

{
    "location": "#PGA:-1",
    "page": "Readme",
    "title": "PGA:",
    "category": "section",
    "text": "## ON GRID\ngmpe_as2008(eq::Earthquake,\n           config_as2008::Params_as2008,\n           grid::Array{Point_vs30};\n           min_val::Number)\n## Without grid\ngmpe_as2008(eq::Earthquake,\n           config::Params_as2008;\n           VS30::Number=350,\n           distance::Int64=1000)Keyword arguments: min_val,VS30,distance."
},

{
    "location": "#Model-Parameters-1",
    "page": "Readme",
    "title": "Model Parameters",
    "category": "section",
    "text": "See examples/as2008.conf.The variables that always zero for current version:a12*Frv, a13*Fnm, a15*Fas, Fhw*f4(Rjb,Rrup,Rx,W,S,Ztor,Mw), f6(Ztor), f10(Z1.0, Vs30).Actually they are not presented at code.R_rup - is a distance to hypocenter"
},

{
    "location": "#Si-and-Midorikawa-1999-GMPE-Model-1",
    "page": "Readme",
    "title": "Si and Midorikawa 1999 GMPE Model",
    "category": "section",
    "text": "(Image: si-midorikawa-1999)"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Si, Hongjun, and Saburoh Midorikawa. \"New attenuation relations for peak ground acceleration and velocity considering effects of fault type and site condition.\" Proceedings of twelfth world conference on earthquake engineering. 2000.\nSi H., Midorikawa S. New Attenuation Relationships for Peak Ground Acceleration and Velocity Considering Effects of Fault Type and Site Condition // Journal of Structural and Construction Engineering, A.I.J. 1999. V. 523. P. 63-70, (in Japanese with English abstract)."
},

{
    "location": "#PGA:-2",
    "page": "Readme",
    "title": "PGA:",
    "category": "section",
    "text": "## ON GRID\ngmpe_simidorikawa1999(eq::Earthquake,\n                     config::Params_simidorikawa1999,\n                     grid::Array{Point_vs30};\n                     min_val::Number)\n## Without grid\ngmpe_simidorikawa1999(eq::Earthquake,\n                     config::Params_simidorikawa1999;\n                     VS30::Number=350,\n                     distance::Int64=1000)Keyword arguments: min_val,VS30,distance."
},

{
    "location": "#Model-Parameters-2",
    "page": "Readme",
    "title": "Model Parameters",
    "category": "section",
    "text": "See examples/si-midorikawa-1999.conf.X - is a distance to hypocenter"
},

{
    "location": "#Morikawa-and-Fujiwara-2013-GMPE-Model-1",
    "page": "Readme",
    "title": "Morikawa and Fujiwara 2013 GMPE Model",
    "category": "section",
    "text": "(Image: mf2013)"
},

{
    "location": "#Reference-2",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": "Morikawa N., Fujiwara H. A New Ground Motion Prediction Equation for Japan Applicable up to M9 Mega-Earthquake // Journal of Disaster Research. 2013. Vol. 5 (8). P. 878–888."
},

{
    "location": "#PGA,-PGV,-PSA-1",
    "page": "Readme",
    "title": "PGA, PGV, PSA",
    "category": "section",
    "text": "## On grid whithout Dl data\ngmpe_mf2013(eq::Earthquake,\n            config::Params_mf2013,\n            grid::Array{Point_vs30};\n            min_val::Number=0,\n            Dl::Number=250,\n            Xvf::Number=0)\n## On grid with Dl data\ngmpe_mf2013(eq::Earthquake,\n            config::Params_mf2013,g\n            rid::Array{Point_vs30_dl};\n            min_val::Number=0,\n            Xvf::Number=0)\n## without any grid\ngmpe_as2008(eq::Earthquake,\n            config::Params_mf2013;\n            VS30::Number=350,\n            distance::Int64=1000,\n            Dl::Number=250,\n            Xvf::Number=0)min_val=0, Xvf=0 [km] by default. Dl=250 [km] by default in case of grid pass without Dl data. NOTE that gmpe_mf2013 has next keyword arguments: min_val, min_val, Dl, VS30, distance. The keyword arguments should be pass with name. Example: gmpe_mf2013(eq,config,VS30=500,Xvf=40)."
},

{
    "location": "#Model-Parameters-3",
    "page": "Readme",
    "title": "Model Parameters",
    "category": "section",
    "text": "See examples/morikawa-fujiwara-2013.confAbout Dl variableThe Dl is the top depth to the layer whose S-wave velocity is l (in [m/s]) at the site. Actually it should be another one grid with Dl depths on each grid point (Point_vs30_dl type). If you pass grid without Dl, then Dl variable pass to GMPE functions as a constant.X - is a distance to hypocenter"
},

{
    "location": "#LICENSE-1",
    "page": "Readme",
    "title": "LICENSE",
    "category": "section",
    "text": "Copyright (c) 2018 GEOPHYSTECH LLCLicensed under the Apache License, Version 2.0 (the \"License\");    you may not use this file except in compliance with the License.    You may obtain a copy of the License at   http://www.apache.org/licenses/LICENSE-2.0Unless required by applicable law or agreed to in writing, software    distributed under the License is distributed on an \"AS IS\" BASIS,    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.    See the License for the specific language governing permissions and    limitations under the License."
},

{
    "location": "autodocs/#GroundMotion.Earthquake",
    "page": "Docstrings",
    "title": "GroundMotion.Earthquake",
    "category": "type",
    "text": "Mutable type for earthquake location data.\n\nEarthquake(lat,lon,depth,localmag,momentmag)\n\nLatitude and longitude assumes degrees for WGS84 ellipsoid. Depth in km. Mw=0 in case of moment magnitude is not specified.  All fields are ::Float64.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GroundMotion.Point_pga_out",
    "page": "Docstrings",
    "title": "GroundMotion.Point_pga_out",
    "category": "type",
    "text": "Mutable type for output PGA data from GMPE modeling funtions\n\nFields:\n\n  lon   :: Float64 \n  lat   :: Float64 \n  pga   :: Float64 \n\nLatitude and longitude assumes degrees for WGS84 ellipsoid. pga is Acceleration of gravity in percent (%g) rounded to ggg.gg.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GroundMotion.Point_vs30",
    "page": "Docstrings",
    "title": "GroundMotion.Point_vs30",
    "category": "type",
    "text": "Mutable type for fill vs30 grid (Array).\n\nPoint_vs30(lon,lat,vs30)\n\nLatitude and longitude assumes degrees for WGS84 ellipsoid. vs30 in meters per second. All fields are ::Float64.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GroundMotion.convert_to_float_array-Tuple{Array{Point_pga_out,N} where N}",
    "page": "Docstrings",
    "title": "GroundMotion.convert_to_float_array",
    "category": "method",
    "text": "converttofloatarray(B::Array{T,N})   where T is Point{pga,pgv,pgd}out, Pointvs30\n\nConvert 1-d array of custom type to Array{Float64}(N,X)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GroundMotion.Point_pgv_out",
    "page": "Docstrings",
    "title": "GroundMotion.Point_pgv_out",
    "category": "type",
    "text": "Mutable type for output PGV data from GMPE modeling funtions\n\nFields:\n\n  lon   :: Float64 \n  lat   :: Float64 \n  pgv   :: Float64 \n\nLatitude and longitude assumes degrees for WGS84 ellipsoid. pgv is [cm/s].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GroundMotion.Point_psa_out",
    "page": "Docstrings",
    "title": "GroundMotion.Point_psa_out",
    "category": "type",
    "text": "Mutable type for output PSA data\n\nFields:\n\n  lon   :: Float64 \n  lat   :: Float64 \n  psa   :: Float64 \n\nLatitude and longitude assumes degrees for WGS84 ellipsoid. psa is damped pseudo-spectral acceleration (%g) in percent rounded to ggg.gg.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GroundMotion.Point_vs30_dl",
    "page": "Docstrings",
    "title": "GroundMotion.Point_vs30_dl",
    "category": "type",
    "text": "Mutable type for fill vs30 grid (Array) with Dl data. Dl is the top depth to the layer whose S-wave velocity is l (in [m/s]) at the site. See Morikawa Fujiwara 2013 for further reading.\n\nPoint_vs30(lon,lat,vs30,dl)\n\nLatitude and longitude assumes degrees for WGS84 ellipsoid. vs30 in meters per second. dl in kilometers. All fields are ::Float64.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GroundMotion]\nOrder = [:type, :function]"
},

]}
