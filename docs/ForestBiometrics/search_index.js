var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "This package was inspired by its R counterpart, the lmfor package with the addition of equations from the western US. For more info on lmfor, please see http://cs.uef.fi/~lamehtat/rcodes.htmThis package defines a number of forestry domain specific equations and functions to allow users to quickly begin solving problems in the Julia language."
},

{
    "location": "#Constants-1",
    "page": "Home",
    "title": "Constants",
    "category": "section",
    "text": "This package exports a const K = 0.005454154to convert between diameter squared in square inches to square feet and const KMETRIC = 0.00007854 to convert diameter squared in centimeters to square meters when using metric units."
},

{
    "location": "functionality/height_diameter/#",
    "page": "Height-Diameter Equations",
    "title": "Height-Diameter Equations",
    "category": "page",
    "text": ""
},

{
    "location": "functionality/height_diameter/#Height-Diameter-Equations-1",
    "page": "Height-Diameter Equations",
    "title": "Height-Diameter Equations",
    "category": "section",
    "text": ""
},

{
    "location": "functionality/height_diameter/#Calculating-missing-tree-heights-using-a-height-diameter-equation-1",
    "page": "Height-Diameter Equations",
    "title": "Calculating missing tree heights using a height diameter equation",
    "category": "section",
    "text": "Height-diameter equations are widespread in forestry and have been the subject of extensive research over the past decades. As a result there is a large amount of formulas and parameter sets based on regional, operational and biological differences.In forest inventories, measuring heights on all trees may not be possible so formulas are used to fill in missing data."
},

{
    "location": "functionality/height_diameter/#Types-1",
    "page": "Height-Diameter Equations",
    "title": "Types",
    "category": "section",
    "text": "ForestBiometrics creates a type HeightDiameter that holds an equation form and its parameters for estimating a tree height given a diameter at a fixed height(usually 4.5 feet).struct HeightDiameter <: Function\nformula::Function\nb\nendformula can be one of the pre-named equation forms such as Wyckoff, Korf, etc.Wyckoff=(x,b)->4.5+exp(b[1]+(b[2]/(x+1)) #defined in HeightDub.jlb is a dictionary of species specific equation parameters in the form ofString: Array{Float64} #species specific coefficients stored as dictionary\n\ncoeffs =Dict{String,Array{Float64}}(\n\"WP\"=> [5.19988	-9.26718],\n\"WL\"=>[4.97407	-6.78347],\n\"DF\"=>[4.81519	-7.29306] )\n\nHD = HeightDiameter(Wyckoff,coeffs)If a user wanted to change model parameters, they can redefine them as needed independent of model form or change both equation form and associated parameters.Pre-defined equation forms available include:2 parameter equation forms, mainly from LMFOR package:Curtis: ht(diameter) = bh + b1(fracdbh1+dbh)^b2Michailoff: ht(diameter) = bh + b1e^b2dbh^-1Meyer: ht(diameter) = bh + b1(1-e^-b2dbh)Micment: ht(diameter) = bh + fracb1dbhb2+dbhMicment2: ht(diameter) = bh +fracdbhb1+b2*dbhNaslund: ht(diameter) = bh + fracdbh^2(b1+b2dbh)^2Naslund2: ht(diameter) = bh + fracdbh^2(b1+e^b2dbh)^2Naslund3: ht(diameter) = bh + fracdbh^2e^b1+b2dbh^2Naslund4: ht(diameter) = bh + fracdbh^2(e^b1+e^b2dbh)^2Power: ht(diameter) = bh + b1dbh^b2Wyckoff: ht(diameter) = bh + exp(b1+fracb2dbh+1)3 parameter equations, mainly from LMFOR R package:Chapman: ht(diameter) = bh + b1(1-e^-b2dbh)^b3Gompertz: ht(diameter) = bh + b1exp(-b2exp(-b3dbh))HossfeldIV: ht(diameter) = bh + fracb11+frac1b2dbh^b3Korf: ht(diameter) = bh + b1exp(-b2dbh^-b3)Logistic: ht(diameter) = bh + fracb11+b2e^-b3dbhMonserud: ht(diameter) = bh + exp(b1 + b2dbh^b3)Prodan: ht(diameter) = bh + fracdbh^2b1+b2dbh+b3dbh^2Ratkowsky: ht(diameter) = bh + b1exp(frac-b2dbh+b3)Sibbesen: ht(diameter) = bh + b1dbh^b2dbh^-b3Weibull: ht(diameter) = bh + b1(1-e^-b2dbh^b3)"
},

{
    "location": "functionality/height_diameter/#Functions-1",
    "page": "Height-Diameter Equations",
    "title": "Functions",
    "category": "section",
    "text": "calculate_height(params::HeightDiameter,dbh,species)This takes a HeightDiameter type and applies the function given a species and dbh."
},

{
    "location": "functionality/density/#",
    "page": "Measures of forest density",
    "title": "Measures of forest density",
    "category": "page",
    "text": ""
},

{
    "location": "functionality/density/#Measures-of-forest-density-1",
    "page": "Measures of forest density",
    "title": "Measures of forest density",
    "category": "section",
    "text": ""
},

{
    "location": "functionality/density/#Reineke\'s-Stand-Density-Index-(SDI)-1",
    "page": "Measures of forest density",
    "title": "Reineke\'s Stand Density Index (SDI)",
    "category": "section",
    "text": "sdi(tpa,qmd)will return the Stand Density Index calculated as:sdi = tpa * (fracqmd10)^1605"
},

{
    "location": "functionality/other_functions/#",
    "page": "Other functions",
    "title": "Other functions",
    "category": "page",
    "text": ""
},

{
    "location": "functionality/other_functions/#Other-functions-1",
    "page": "Other functions",
    "title": "Other functions",
    "category": "section",
    "text": ""
},

{
    "location": "functionality/other_functions/#Calculating-limiting-distance-for-a-variable-radius-plot-1",
    "page": "Other functions",
    "title": "Calculating limiting distance for a variable radius plot",
    "category": "section",
    "text": "While this may not be useful in a programming context, it is a relatively simple function and may be useful for demonstration purposes.limiting_distance(baf, dbh, horizontal distance)"
},

{
    "location": "functionality/other_functions/#Calculating-equilibrium-moisture-content-1",
    "page": "Other functions",
    "title": "Calculating equilibrium moisture content",
    "category": "section",
    "text": "Equilibrium moisture content is the content where a piece of wood neither gains or loses moisture. The equation is from The National Fire Danger Rating System: Basic Equations; Jack D Cohen, John E. Deeming. GTR PSW-82emc(relative_humidity::Float64,temp::Float64)"
},

{
    "location": "volume_equations/volume_eqs/#",
    "page": "Volume Equations",
    "title": "Volume Equations",
    "category": "page",
    "text": ""
},

{
    "location": "volume_equations/volume_eqs/#Volume-Equations-1",
    "page": "Volume Equations",
    "title": "Volume Equations",
    "category": "section",
    "text": ""
},

{
    "location": "volume_equations/volume_eqs/#Calculating-the-volume-of-an-individual-tree-1",
    "page": "Volume Equations",
    "title": "Calculating the volume of an individual tree",
    "category": "section",
    "text": "This functionality is under active development and may change, I haven\'t fully fleshed out what a Julia-esque volume equations API looks like. Suggestions and issues are welcome.ForestBiometrics has functions to calculate log volumes using a variety of scaling rules"
},

{
    "location": "volume_equations/volume_eqs/#Doyle-Rule-1",
    "page": "Volume Equations",
    "title": "Doyle Rule",
    "category": "section",
    "text": "  doyle_volume(small end diameter, log length)calculates the doyle volume"
},

{
    "location": "volume_equations/volume_eqs/#Scribner-1",
    "page": "Volume Equations",
    "title": "Scribner",
    "category": "section",
    "text": "  scribner_volume(small end diameter, log length; decimal_C=false)calculates the scribner volume calculated using the formulaV = (079D^2 - 2D - 4)fracL16where V is the Scribner board foot volume, D is the small end diameter in inches and L is the log length in feet.decimal_C=true will return the board feet in the standard Scribner Decimal C lookup table for trees dib >5\" and log lengths <20\'. Oversize logs are calculated using the formula above."
},

{
    "location": "volume_equations/volume_eqs/#International-1",
    "page": "Volume Equations",
    "title": "International",
    "category": "section",
    "text": "  international_volume(small end diameter, log length)calculates the volume using international rule"
},

{
    "location": "volume_equations/volume_eqs/#Types-1",
    "page": "Volume Equations",
    "title": "Types",
    "category": "section",
    "text": "In addition, we introduce two abstract types, VolumeEquation, and MerchSpecs.MerchSpecs is a super type to allow for merchandizing specifications to be stored and referenced by product and some common ones have been predefined.  type Sawtimber<:MerchSpecs\n  std_length\n  trim\n  min_length\n  max_length\n  min_dib\n  end\n  Sawtimber(16.0,0.5,8.0,20.0,6.0)There are also other types including Log and LogSegment where LogSegment<:Log . I have created a few base types based on the possible geometric shapes a log segment can be and use a volume equation that dispatches on that type.type Cone\nlength\nlarge_end_diam\nend\n\ntype Cylinder\nlength\nlarge_end_diam\nend\n\ntype Paraboloid\nlength\nlarge_end_diam\nend\n\ntype Neiloid\nlength\nlarge_end_diam\nend\n\ntype ParaboloidFrustrum\nlength\nlarge_end_diam\nmid_point_diam #can set to nothing ( or missing in 0.7.0+?)\nsmall_end_diam\nendsome shapes have additonal kwargs to modify the formula used such as:function volume(solid::ParaboloidFrustrum; huber=false, newton = false)\nfunction volume(solid::ConeFrustrum; newton=false)`where huber = true uses the form V=A_mL and newton=true uses the form V=L6(A_l + 4A_m + A_s) otherwise smalian\'s form V=L2(A_l + A_s)  is used for ParaboloidFrustrum and V=L3(A_l + sqrtA_l*A_s + A_s for ConeFrustrum.type ConeFrustrum\nlength\nlarge_end_diam\nmid_point_diam #can set to nothing\nsmall_end_diam\nend\n\ntype NeiloidFrustrum\nlength\nlarge_end_diam\nmid_point_diam #can set to nothing\nsmall_end_diam\nendarea() is a helper function to convert between diameter and area using the exported constant K"
},

{
    "location": "visualizations/visualizations/#",
    "page": "Forestry charts",
    "title": "Forestry charts",
    "category": "page",
    "text": ""
},

{
    "location": "visualizations/visualizations/#Forestry-charts-1",
    "page": "Forestry charts",
    "title": "Forestry charts",
    "category": "section",
    "text": "ForestBiometrics.jl has some graphing functionality including:"
},

{
    "location": "visualizations/visualizations/#Gingrich-stocking-chart-1",
    "page": "Forestry charts",
    "title": "Gingrich stocking chart",
    "category": "section",
    "text": "  gingrich_chart(tpa_in,basal_area_in)will return a gingrich style stocking chart with a point (See example on Readme.md on project Github)"
},

{
    "location": "visualizations/visualizations/#Reineke-SDI-chart-1",
    "page": "Forestry charts",
    "title": "Reineke SDI chart",
    "category": "section",
    "text": "  sdi_chart(tpa,qmd;max_sdi=450)will return a stand density index chart with a point placed on tpa and qmd and lines at 35%(crown closure), 55%(competition-induced mortality bound) and 100% of max. maxsdi is an optional kwarg that can be used to change the upper bound. Default maxsdi used is 450. (See example on Readme.md on project Github)"
},

{
    "location": "data/data/#",
    "page": "FVS database",
    "title": "FVS database",
    "category": "page",
    "text": ""
},

{
    "location": "data/data/#FVS-database-1",
    "page": "FVS database",
    "title": "FVS database",
    "category": "section",
    "text": "This package comes with a FVS ready database in the test/data folder. This database contains tree, plot and stand records within multiple FVS variants across the United States."
},

]}
