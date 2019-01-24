var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GroupedErrors-1",
    "page": "Readme",
    "title": "GroupedErrors",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This package provides some macros to simplify the analysis and visualization of grouped data. It is based on the IterableTables framework (but uses IndexedTables internally) and can interface with Plots.jl for easy plotting."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install this package simply run:Pkg.add(\"GroupedErrors\")at the Julia REPL."
},

{
    "location": "#Example-use-1",
    "page": "Readme",
    "title": "Example use",
    "category": "section",
    "text": ""
},

{
    "location": "#Scatter-plots-1",
    "page": "Readme",
    "title": "Scatter plots",
    "category": "section",
    "text": "Let\'s start with an example, plotting one column against another in an example database. Here school is a DataFrame, but any IterableTable is supported. The data operations are concatenated using the @> macro which GroupedErrors reexports from Lazy.jl.using GroupedErrors\nusing DataFrames, RDatasets, Plots\nschool = RDatasets.dataset(\"mlmRev\",\"Hsb82\")\n@> school begin\n    @splitby _.Sx\n    @x _.MAch\n    @y _.SSS\n    @plot scatter()\nendThis will simply extract two columns (namely school[:MAch] and school[:SSS]) and plot them one against the other splitting by the variable school[:Sx], meaning it will actually produce two plots (one for males, one for females) and superimpose them with different colors.  The @plot macro takes care of passing the outcome of the the analysis to the plot command. If not plot command is given, it defaults to plot(). However it is often useful to give a plot command to specify that we want a scatter plot or to customize the plot with any Plots.jl attribute. For example, our two traces can be displayed side by side using @plot scatter(layout = 2).Now we have a dot per data point, which creates an overcrowded plot. Another option would be to plot across schools, namely each for each school we would compute the mean of :MAch and :SSS (always for males and females) and then plot with only one point per school. This can be achieved with:@> school begin\n    @splitby _.Sx\n    @across _.School\n    @x _.MAch\n    @y _.SSS\n    @plot scatter()\nend(Image: scatter)mean is the default estimator, but any other function transforming a vector to a scalar would work, for example median:@> school begin\n    @splitby _.Sx\n    @across _.School\n    @x _.MAch median\n    @y _.SSS median\n    @plot scatter()\nendOne can also give a tuple of 2 functions where the second should represent the error:using StatsBase\n@> school begin\n    @splitby _.Sx\n    @across _.School\n    @x _.MAch (mean, sem)\n    @y _.SSS (mean, sem)\n    @plot scatter()\nend(Image: scatter)Though admittedly these data are very noisy and error bars come out huge. This analysis would look cleaner in a dataset with less groups (i.e. schools) but with more data per group.Finally, we may want to represent this information differently. For example we may want to plot the same variable (e.g. :MAch) on the x and y axis where one axis is the value corresponding to males and the other axis to females. This is achieved with:@> school begin\n    @across _.School\n    @xy _.MAch\n    @compare _.Sx\n    @plot scatter(axis_ratio = :equal, xlabel = \"Female\", ylabel = \"Male\",\n        legend = :topleft, size = (400,450))\nend(Image: scatter)"
},

{
    "location": "#Analyzing-variability-across-groups-1",
    "page": "Readme",
    "title": "Analyzing variability across groups",
    "category": "section",
    "text": "It is also possible to get average value and variability of a given analysis (density, cumulative, hazard rate and local regression are supported so far, but one can also add their own function) across groups.As above, the data is first split according to @splitby, then according to @across (for example across schools, as in the examples in this README). The analysis is performed for each element of the \"across\" variable and then summarized. Default summary is (mean, sem) but it can be changed with @summarize to any pair of functions.The local regression uses Loess.jl and the density plot uses KernelDensity.jl. In case of discrete (i.e. non numerical) x variable, these function are computed by splitting the data across the x variable and then computing the density/average per bin. The choice of continuous or discrete axis can be forced as a second argument (the \"axis type\") to the @x macro. Acceptable values are :continuous, :discrete or :binned. This last option will bin the x axis in equally spaced bins (number given by an optional third argument to @x, e.g. @x _.MAch :binned 40, the default is 30), and continue the analysis with the binned data, treating it as discrete.Specifying an axis type is mandatory for local regression, to distinguish it from the scatter plots discussed above.Example use:@> school begin\n    @splitby _.Sx\n    @across _.School\n    @x _.MAch\n    @y :cumulative\n    @plot plot(legend = :topleft)\nend<img width=\"494\" alt=\"screenshot 2016-12-19 12 28 27\" src=\"https://user-images.githubusercontent.com/6333339/29280675-1a8df192-8114-11e7-878e-754ecdd9184d.png\">Keywords for loess or kerneldensity can be given to groupapply:@> school begin\n    @splitby _.Minrty\n    @across _.School\n    @x _.CSES\n    @y :density bandwidth = 0.2\n    @plot #if no more customization is needed one can also just type @plot\nendThe bar plot (here we use @across :all to compute the standard error across all observations):using StatPlots\n@> school begin\n    @splitby _.Minrty\n    @across :all\n    @x _.Sx :discrete\n    @y _.MAch\n    @plot groupedbar()\nend<img width=\"489\" alt=\"screenshot 2017-01-10 18 20 51\" src=\"https://user-images.githubusercontent.com/6333339/29280710-3998b310-8114-11e7-9a24-a93d5727cc52.png\">Density bar plot of binned data versus continuous estimation:@> school begin\n    @splitby _.Minrty\n    @x _.MAch :binned 40\n    @y :density\n    @plot groupedbar(color = [\"orange\" \"turquoise\"], legend = :topleft)\nend\n\n@> school begin\n    @splitby _.Minrty\n    @x _.MAch\n    @y :density\n    @plot plot!(color = [\"orange\" \"turquoise\"], label = \"\")\nend(Image: density)"
},

{
    "location": "#Analysis-of-time-varying-signals-1",
    "page": "Readme",
    "title": "Analysis of time varying signals",
    "category": "section",
    "text": "GroupedErrors allows (experimentally! use at your own risk!) aligning time varying signal using ShiftedArrays. You need to build a column of ShiftedArrays as follows. Let\'s say that v is your vector of signals and indices inds = [13, 456, 607] are those where meaningful event happens (assuming your dataset only have 3 rows, of course in practice inds will be much longer). You can create a column of ShiftedArrays with:[ShiftedArray(v, -i) for i in [13, 456, 607]]and add it to your data. GroupedErrors will then be able to leverage reducing functions from ShiftedArrays to run analysis.Let\'s run the following example step by step:#load the data\nusing JuliaDB\ndf = loadtable(joinpath(Pkg.dir(\"GroupedErrors\", \"test\", \"tables\"), \"test_data.csv\"))\n#load the time varying signal as a 1 dimentional array\nsignal = vec(readdlm(joinpath(Pkg.dir(\"GroupedErrors\", \"test\", \"tables\"), \"signal.txt\")))Now, the column event gives the indices on which we want to align, So, to create a column of ShiftedArrays we do:using ShiftedArrays\ndfs = pushcol(df, :signal, [ShiftedArray(signal, -i.event) for i in df])We are all set to plot! :subject is our grouping variable and :treatment is some variable we will use to split the data:@> dfs begin\n    @splitby _.treatment\n    @across _.subject\n    @x -100:100 :discrete\n    @y _.signal\n    @plot plot() :ribbon\nend(Image: signal)"
},

{
    "location": "#Non-parametric-bootstrap-error-computation-1",
    "page": "Readme",
    "title": "Non-parametric bootstrap error computation",
    "category": "section",
    "text": "Rather than computing the variability across groups, it is also possible to compute the overall variability using non-parametric bootstrap using the @bootstrap macro. The analysis will be run as many times as the specified number (defaults to 1000) on a fake dataset sampled with replacement from the actual data. Estimate and error are computed as mean and std of the different outcomes. Example:@> school begin\n    @splitby _.Minrty\n    @bootstrap 500\n    @x _.CSES\n    @y :density bandwidth = 0.2\n    @plot\nend(Image: bootstrap)"
},

{
    "location": "#Advanced-feature-(for-the-brave-user):-customized-analysis-function-1",
    "page": "Readme",
    "title": "Advanced feature (for the brave user): customized analysis function",
    "category": "section",
    "text": "If the set of preimplemented analysis functions turns out to be insufficient, it is possible to implement new ones as a user (should they be of sufficient generality, they could then be added to the package).For example, let\'s say we want to study the survival function, which is 1-cdf. Then we should define:function survival(T, xaxis, t)\n    data = StatsBase.ecdf(columns(t, :x))(xaxis)\n    GroupedErrors.tablify(xaxis, 1 .- data)\nend\n@> school begin\n    @splitby _.Sx\n    @across _.School\n    @x _.MAch\n    @y :custom survival\n    @plot\nend(Image: surv)For the moment there isn\'t good documentation on how to create your own analysis functions but as a start you can look at this code and try and follow the same pattern as those that are implemented already."
},

{
    "location": "#Experimental:-set-plot-attributes-according-to-groups-1",
    "page": "Readme",
    "title": "Experimental: set plot attributes according to groups",
    "category": "section",
    "text": "As an experimental features, it is possible to pass attributes to plot that depend on the value of the group that each trace belong to. For example:@> school begin\n    @splitby (_.Minrty, _.Sx)\n    @across _.School\n    @set_attr :linestyle _[1] == \"Yes\" ? :solid : :dash\n    @set_attr :color _[2] == \"Male\" ? :black : :blue\n    @x _.CSES\n    @y :density bandwidth = 0.2\n    @plot\nend(Image: set_attr)Here, the \"label\" of each trace we are plotting is a tuple, whose first element corresponds to the :Minrty and second element to the :Sx. With the following code, we decide to represent males in black, females in blue, minority with solid line and no-minority with dashed line. It is a bit inconvenient to use index rather than name to refer to the group but this may change when there will be support for NamedTuples in base Julia."
},

{
    "location": "#Saving-the-result-of-the-statistical-analysis-1",
    "page": "Readme",
    "title": "Saving the result of the statistical analysis",
    "category": "section",
    "text": "Sometimes it is useful to save the result of an analysis rather than just plotting it. This can be achieved as follows:processed_data = @> school begin\n    @splitby _.Minrty\n    @x _.MAch :binned 40\n    @y :density\n    ProcessedTable\nendNow plotting can be done as usual with our plotting macro:@plot processed_data groupedbar(color = [\"orange\" \"turquoise\"], legend = :topleft)without repeating the statistical analysis (especially useful when the analysis is computationally expensive)."
},

{
    "location": "#Query-compatibility-1",
    "page": "Readme",
    "title": "Query compatibility",
    "category": "section",
    "text": "Of course the amount of data preprocessing in this package is very limited and misses important features (for example data selection). To address this issue, this package is compatible with the excellent querying package Query.jl. If you are using Query.jl version 0.8 or above, the Query standalone macros (such as @filter, @map etc.) can be combined with a GroupedErrors.jl pipeline as follows:using Query\n@> school begin\n    @filter _.SSS > 0.5\n    @splitby _.Minrty\n    @x _.MAch\n    @y :density\n    @plot plot(color = [\"orange\" \"turquoise\"], legend = :topleft)\nend"
},

{
    "location": "#Missing-data-support-1",
    "page": "Readme",
    "title": "Missing data support",
    "category": "section",
    "text": "This package supports missing data. In case of missing data, all rows with missing data in a column that is being used in the analysis will be discarded."
},

{
    "location": "autodocs/#GroupedErrors._cumulative-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "GroupedErrors._cumulative",
    "category": "method",
    "text": "`_cumulative!(df, xaxis, x) = ecdf(df[x])(xaxis)`\n\nCumulative density function of x, computed along xaxis\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GroupedErrors._density-Tuple{Val{:continuous},Any,Any}",
    "page": "Docstrings",
    "title": "GroupedErrors._density",
    "category": "method",
    "text": "`_density(df,xaxis::AbstractRange, x; kwargs...)`\n\nKernel density of x, computed along xaxis\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GroupedErrors._density-Tuple{Val{:discrete},Any,Any}",
    "page": "Docstrings",
    "title": "GroupedErrors._density",
    "category": "method",
    "text": "`_density(df, xaxis, x)`\n\nNormalized histogram of x (which is discrete: every value is its own bin)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GroupedErrors._hazard-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "GroupedErrors._hazard",
    "category": "method",
    "text": "`_hazard(df,xaxis, x; kwargs...)`\n\nHazard rate of x, computed along xaxis. Keyword arguments are passed to the function computing the density\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GroupedErrors._locreg-Tuple{Val{:continuous},Any,Any}",
    "page": "Docstrings",
    "title": "GroupedErrors._locreg",
    "category": "method",
    "text": "`_locreg(df, xaxis::AbstractRange, x, y; kwargs...)`\n\nApply loess regression, training the regressor with x and y and predicting xaxis\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GroupedErrors._locreg-Tuple{Val{:discrete},Any,Any}",
    "page": "Docstrings",
    "title": "GroupedErrors._locreg",
    "category": "method",
    "text": "`_locreg(df, xaxis, x, y; estimator = mean)`\n\nIn the discrete case, the function computes the estimate of y for a given value of x using the function estimator (default is mean)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GroupedErrors]\nOrder = [:type, :function]"
},

]}
