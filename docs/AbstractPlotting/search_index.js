var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AbstractPlotting-1",
    "page": "Readme",
    "title": "AbstractPlotting",
    "category": "section",
    "text": ""
},

{
    "location": "autodocs/#AbstractPlotting.Billboard",
    "page": "Docstrings",
    "title": "AbstractPlotting.Billboard",
    "category": "type",
    "text": "Billboard attribute to always have a primitive face the camera. Can be used for rotation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.PlotList",
    "page": "Docstrings",
    "title": "AbstractPlotting.PlotList",
    "category": "type",
    "text": "Plotlist(plots...)\n\nExperimental feature. Create an object that can encode multiple series.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.PlotSpec",
    "page": "Docstrings",
    "title": "AbstractPlotting.PlotSpec",
    "category": "type",
    "text": "PlotSpec{P<:AbstractPlot}(args...; kwargs...)\n\nObject encoding positional arguments (args), a NamedTuple of attributes (kwargs) as well as plot type P of a basic plot.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.Reverse",
    "page": "Docstrings",
    "title": "AbstractPlotting.Reverse",
    "category": "type",
    "text": "Reverses the attribute T uppon conversion\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.VideoStream-Tuple{Scene}",
    "page": "Docstrings",
    "title": "AbstractPlotting.VideoStream",
    "category": "method",
    "text": "VideoStream(scene::Scene, dir = mktempdir(), name = \"video\")\n\nreturns a stream and a buffer that you can use to not allocate for new frames. Use add_frame!(stream, window, buffer) to add new video frames to the stream. Use save(stream) to save the video to \'dir/name.mkv\'. You can also call save(stream, \"mkv\"), save(stream, \"mp4\"), save(stream, \"gif\") or save(stream, \"webm\") to convert the stream to those formats.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.annotations",
    "page": "Docstrings",
    "title": "AbstractPlotting.annotations",
    "category": "function",
    "text": "`annotations(strings::Vector{String}, positions::Vector{Point})`\n\nPlots an array of texts at each position in positions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.annotations!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.annotations!",
    "category": "method",
    "text": "AbstractPlotting.annotations!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.annotations!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.annotations!",
    "category": "method",
    "text": "AbstractPlotting.annotations!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.annotations!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.annotations!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.annotations!",
    "category": "method",
    "text": "AbstractPlotting.annotations!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.annotations!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.annotations!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.annotations!",
    "category": "method",
    "text": "AbstractPlotting.annotations!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.annotations-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.annotations",
    "category": "method",
    "text": "AbstractPlotting.annotations(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.annotations-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.annotations",
    "category": "method",
    "text": "AbstractPlotting.annotations(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.annotations(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arc!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.arc!",
    "category": "method",
    "text": "AbstractPlotting.arc!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arc!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.arc!",
    "category": "method",
    "text": "AbstractPlotting.arc!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arc!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arc!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.arc!",
    "category": "method",
    "text": "AbstractPlotting.arc!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arc!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arc!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.arc!",
    "category": "method",
    "text": "AbstractPlotting.arc!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arc-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.arc",
    "category": "method",
    "text": "AbstractPlotting.arc(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arc-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.arc",
    "category": "method",
    "text": "AbstractPlotting.arc(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arc(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arrows!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.arrows!",
    "category": "method",
    "text": "AbstractPlotting.arrows!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arrows!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.arrows!",
    "category": "method",
    "text": "AbstractPlotting.arrows!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arrows!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arrows!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.arrows!",
    "category": "method",
    "text": "AbstractPlotting.arrows!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arrows!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arrows!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.arrows!",
    "category": "method",
    "text": "AbstractPlotting.arrows!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arrows-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.arrows",
    "category": "method",
    "text": "AbstractPlotting.arrows(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.arrows-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.arrows",
    "category": "method",
    "text": "AbstractPlotting.arrows(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.arrows(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis2d!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis2d!",
    "category": "method",
    "text": "AbstractPlotting.axis2d!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis2d!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis2d!",
    "category": "method",
    "text": "AbstractPlotting.axis2d!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.axis2d!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis2d!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis2d!",
    "category": "method",
    "text": "AbstractPlotting.axis2d!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.axis2d!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis2d!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis2d!",
    "category": "method",
    "text": "AbstractPlotting.axis2d!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis2d-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis2d",
    "category": "method",
    "text": "AbstractPlotting.axis2d(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis2d-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis2d",
    "category": "method",
    "text": "AbstractPlotting.axis2d(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.axis2d(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis3d!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis3d!",
    "category": "method",
    "text": "AbstractPlotting.axis3d!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis3d!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis3d!",
    "category": "method",
    "text": "AbstractPlotting.axis3d!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.axis3d!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis3d!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis3d!",
    "category": "method",
    "text": "AbstractPlotting.axis3d!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.axis3d!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis3d!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis3d!",
    "category": "method",
    "text": "AbstractPlotting.axis3d!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis3d-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis3d",
    "category": "method",
    "text": "AbstractPlotting.axis3d(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.axis3d-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.axis3d",
    "category": "method",
    "text": "AbstractPlotting.axis3d(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.axis3d(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.band!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.band!",
    "category": "method",
    "text": "AbstractPlotting.band!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.band!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.band!",
    "category": "method",
    "text": "AbstractPlotting.band!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.band!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.band!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.band!",
    "category": "method",
    "text": "AbstractPlotting.band!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.band!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.band!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.band!",
    "category": "method",
    "text": "AbstractPlotting.band!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.band-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.band",
    "category": "method",
    "text": "AbstractPlotting.band(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.band-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.band",
    "category": "method",
    "text": "AbstractPlotting.band(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.band(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.barplot!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.barplot!",
    "category": "method",
    "text": "AbstractPlotting.barplot!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.barplot!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.barplot!",
    "category": "method",
    "text": "AbstractPlotting.barplot!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.barplot!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.barplot!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.barplot!",
    "category": "method",
    "text": "AbstractPlotting.barplot!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.barplot!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.barplot!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.barplot!",
    "category": "method",
    "text": "AbstractPlotting.barplot!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.barplot-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.barplot",
    "category": "method",
    "text": "AbstractPlotting.barplot(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.barplot-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.barplot",
    "category": "method",
    "text": "AbstractPlotting.barplot(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.barplot(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.broadcast_foreach-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.broadcast_foreach",
    "category": "method",
    "text": "Like broadcast but for foreach. Doesn\'t care about shape and treats Tuples && StaticVectors as scalars.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.button!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.button!",
    "category": "method",
    "text": "AbstractPlotting.button!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.button!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.button!",
    "category": "method",
    "text": "AbstractPlotting.button!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.button!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.button!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.button!",
    "category": "method",
    "text": "AbstractPlotting.button!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.button!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.button!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.button!",
    "category": "method",
    "text": "AbstractPlotting.button!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.button-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.button",
    "category": "method",
    "text": "AbstractPlotting.button(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.button-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.button",
    "category": "method",
    "text": "AbstractPlotting.button(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.button(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.cam2d-Tuple{Scene}",
    "page": "Docstrings",
    "title": "AbstractPlotting.cam2d",
    "category": "method",
    "text": "Creates a subscene with a pixel camera\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.colorlegend",
    "page": "Docstrings",
    "title": "AbstractPlotting.colorlegend",
    "category": "function",
    "text": "colorlegend(scene, colormap, range)\n\ncreates a legend from a colormap\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.colorlegend!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.colorlegend!",
    "category": "method",
    "text": "AbstractPlotting.colorlegend!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.colorlegend!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.colorlegend!",
    "category": "method",
    "text": "AbstractPlotting.colorlegend!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.colorlegend!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.colorlegend!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.colorlegend!",
    "category": "method",
    "text": "AbstractPlotting.colorlegend!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.colorlegend!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.colorlegend!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.colorlegend!",
    "category": "method",
    "text": "AbstractPlotting.colorlegend!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.colorlegend-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.colorlegend",
    "category": "method",
    "text": "AbstractPlotting.colorlegend(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.colorlegend-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.colorlegend",
    "category": "method",
    "text": "AbstractPlotting.colorlegend(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.colorlegend(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour",
    "category": "function",
    "text": "contour(x, y, z)\n\nCreates a contour plot of the plane spanning x::Vector, y::Vector, z::Matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour!",
    "category": "method",
    "text": "AbstractPlotting.contour!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour!",
    "category": "method",
    "text": "AbstractPlotting.contour!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.contour!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour!",
    "category": "method",
    "text": "AbstractPlotting.contour!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.contour!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour!",
    "category": "method",
    "text": "AbstractPlotting.contour!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour",
    "category": "method",
    "text": "AbstractPlotting.contour(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour",
    "category": "method",
    "text": "AbstractPlotting.contour(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.contour(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour3d",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour3d",
    "category": "function",
    "text": "contour3d(x, y, z)\n\nCreates a 3D contour plot of the plane spanning x::Vector, y::Vector, z::Matrix, with z-elevation for each level\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour3d!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour3d!",
    "category": "method",
    "text": "AbstractPlotting.contour3d!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour3d!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour3d!",
    "category": "method",
    "text": "AbstractPlotting.contour3d!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.contour3d!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour3d!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour3d!",
    "category": "method",
    "text": "AbstractPlotting.contour3d!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.contour3d!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour3d!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour3d!",
    "category": "method",
    "text": "AbstractPlotting.contour3d!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour3d-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour3d",
    "category": "method",
    "text": "AbstractPlotting.contour3d(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.contour3d-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.contour3d",
    "category": "method",
    "text": "AbstractPlotting.contour3d(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.contour3d(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Any,IntervalSets.Interval{:closed,:closed,T} where T,IntervalSets.Interval{:closed,:closed,T} where T,AbstractArray{T,2} where T}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(P, x, y, z)::Tuple{ClosedInterval, ClosedInterval, Matrix}\n\nTakes 2 ClosedIntervals\'s x, y, and an AbstractMatrix z, and converts the closed range to linspaces with size(z, 1/2) P is the plot Type (it is optional).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Type{#s828} where #s828<:(Volume{...}),AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T,Function}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(P, x, y, z, f)::(Vector, Vector, Vector, Matrix)\n\nTakes AbstractVector x, y, and z and the function f, evaluates f on the volume spanned by x, y and z, and puts x, y, z and f(x,y,z) in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Type{#s828} where #s828<:Union{Surface{...}, Heatmap{...}, Image{...}},AbstractArray{T,2} where T}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(P, Matrix)::Tuple{ClosedInterval, ClosedInterval, Matrix}\n\nTakes an AbstractMatrix, converts the dimesions n and m into ClosedInterval, and stores the ClosedInterval to n and m, plus the original matrix in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Type{#s829} where #s829<:(Mesh{...}),AbstractArray,AbstractArray}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(Mesh, vertices, indices)::GLNormalMesh\n\nTakes vertices and indices, and creates a triangle mesh out of those. See to_vertices and to_triangles for more informations about accepted types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Type{#s829} where #s829<:(Mesh{...}),AbstractArray{T,1} where T<:Number,AbstractArray{T,1} where T<:Number,AbstractArray{T,1} where T<:Number,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(Mesh, x, y, z, indices)::GLNormalMesh\n\nTakes real vectors x, y, z and constructs a triangle mesh out of those, using the faces in indices, which can be integers (every 3 -> one triangle), or GeometryTypes.Face{N, <: Integer}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Type{#s829} where #s829<:(Mesh{...}),AbstractArray{T,1} where T<:Number,AbstractArray{T,1} where T<:Number,AbstractArray{T,1} where T<:Number}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(Mesh, x, y, z)::GLNormalMesh\n\nTakes real vectors x, y, z and constructs a mesh out of those, under the assumption that every 3 points form a triangle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Type{#s829} where #s829<:(Mesh{...}),AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(Mesh, xyz::AbstractVector)::GLNormalMesh\n\nTakes an input mesh and a vector xyz representing the vertices of the mesh, and creates indices under the assumption, that each triplet in xyz forms a triangle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Type{#s829} where #s829<:Union{MeshScatter{...}, Scatter{...}, Lines{...}, LineSegments{...}},AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,2} where T}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "Enables to use scatter like a surface plot with x::Vector, y::Vector, z::Matrix spanning z over the grid spanned by x y\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Type{#s829} where #s829<:Union{MeshScatter{...}, Scatter{...}, Lines{...}, LineSegments{...}},AbstractArray{T,1} where T<:Number,AbstractArray{T,1} where T<:Number,AbstractArray{T,1} where T<:Number}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(P, x, y, z)::(Vector)\n\nTakes vectors x, y, and z and turns it into a vector of 3D points of the values from x, y, and z. P is the plot Type (it is optional).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Type{#s829} where #s829<:Union{MeshScatter{...}, Scatter{...}, Lines{...}, LineSegments{...}},AbstractArray{T,1} where T<:Number,AbstractArray{T,1} where T<:Number}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(P, x, y)::(Vector)\n\nTakes vectors x and y and turns it into a vector of 2D points of the values from x and y.\n\nP is the plot Type (it is optional).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Type{#s829} where #s829<:Union{MeshScatter{...}, Scatter{...}, Lines{...}, LineSegments{...}},AbstractArray{T,1} where T<:Number}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(P, y)::Vector\n\nTakes vector y and generates a range from 1 to the length of y, for plotting on an arbitrary x axis.\n\nP is the plot Type (it is optional).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Type{#s829} where #s829<:Union{MeshScatter{...}, Scatter{...}, Lines{...}, LineSegments{...}},GeometryTypes.GeometryPrimitive}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(P, x)::(Vector)\n\nTakes an input GeometryPrimitive x and decomposes it to points. P is the plot Type (it is optional).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Type{#s829} where #s829<:Union{MeshScatter{...}, Scatter{...}, Lines{...}, LineSegments{...}},GeometryTypes.HyperRectangle{2,T} where T}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(P, x)::(Vector)\n\nTakes an input HyperRectangle x and decomposes it to points.\n\nP is the plot Type (it is optional).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Type{#s829} where #s829<:Union{Surface{...}, Heatmap{...}, Image{...}},Union{AbstractArray{T,1}, AbstractArray{T,2}} where T,Union{AbstractArray{T,1}, AbstractArray{T,2}} where T,AbstractArray{T,2} where T}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(P, x::VecOrMat, y::VecOrMat, z::Matrix)\n\nTakes 3 AbstractMatrix x, y, and z, converts them to Float32 and outputs them in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Tuple{Type{Text{...}},AbstractString}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(x)::(String)\n\nTakes an input AbstractString x and converts it to a string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Union{Tuple{E}, Tuple{A}, Tuple{T}, Tuple{N}, Tuple{Type{#s829} where #s829<:(LineSegments{...}),AbstractArray{E,1}}} where E<:Union{Pair{A,A}, Tuple{A,A}} where A<:Union{Tuple{Vararg{T,N}}, StaticArray{Tuple{N},T,1}} where T where N",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "Accepts a Vector of Pair of Points (e.g. [Point(0, 0) => Point(1, 1), ...]) to encode e.g. linesegments or directions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Union{Tuple{T2}, Tuple{T1}, Tuple{Type{#s829} where #s829<:Union{Surface{...}, Heatmap{...}, Image{...}},AbstractArray{T1,1},AbstractArray{T2,1},Function}} where T2 where T1",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(P, x, y, f)::(Vector, Vector, Matrix)\n\nTakes vectors x and y and the function f, and applies f on the grid that x and y span. This is equivalent to f.(x, y\'). P is the plot Type (it is optional).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Union{Tuple{T}, Tuple{Type{#s828} where #s828<:(Volume{...}),Array{T,3}}} where T",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(P, Matrix)::Tuple{ClosedInterval, ClosedInterval, ClosedInterval, Matrix}\n\nTakes an array of {T, 3} where T, converts the dimesions n, m and k into ClosedInterval, and stores the ClosedInterval to n, m and k, plus the original array in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_arguments-Union{Tuple{T}, Tuple{Type{#s829} where #s829<:(Volume{...}),AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,3}}} where T",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_arguments",
    "category": "method",
    "text": "convert_arguments(P, x, y, z, i)::(Vector, Vector, Vector, Matrix)\n\nTakes 3 AbstractVector x, y, and z and the AbstractMatrix i, and puts everything in a Tuple.\n\nP is the plot Type (it is optional).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_attribute",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_attribute",
    "category": "function",
    "text": "A Symbol/String naming the gradient. For more on what names are available please see: `available_gradients()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_attribute-Tuple{AbstractArray{T,1} where T,AbstractPlotting.Key{:colormap}}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_attribute",
    "category": "method",
    "text": "to_colormap(b, x)\n\nAn AbstractVector{T} with any object that to_color accepts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_attribute-Tuple{AbstractArray{T,1} where T,AbstractPlotting.Key{:linestyle}}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_attribute",
    "category": "method",
    "text": "`AbstractVector{<:AbstractFloat}` for denoting sequences of fill/nofill. e.g.\n\n[0.5, 0.8, 1.2] will result in 0.5 filled, 0.3 unfilled, 0.4 filled. 1.0 unit is one linewidth!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_attribute-Tuple{Any,AbstractPlotting.Key{:algorithm}}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_attribute",
    "category": "method",
    "text": "to_volume_algorithm(b, x)\n\nEnum values: IsoValue Absorption MaximumIntensityProjection AbsorptionRGBA IndexedAbsorptionRGBA\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_attribute-Tuple{Quaternion,AbstractPlotting.Key{:rotation}}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_attribute",
    "category": "method",
    "text": "rotation accepts:\nto_rotation(b, quaternion)\nto_rotation(b, tuple_float)\nto_rotation(b, vec4)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_attribute-Tuple{Symbol,AbstractPlotting.Key{:linestyle}}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_attribute",
    "category": "method",
    "text": "A `Symbol` equal to `:dash`, `:dot`, `:dashdot`, `:dashdotdot`\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_attribute-Tuple{Tuple{Symbol,Symbol},AbstractPlotting.Key{:align}}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_attribute",
    "category": "method",
    "text": "Text align, e.g.:\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_attribute-Tuple{Union{String, Symbol},AbstractPlotting.Key{:algorithm}}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_attribute",
    "category": "method",
    "text": "Symbol/String: iso, absorption, mip, absorptionrgba, indexedabsorption\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_attribute-Tuple{Union{String, Symbol},AbstractPlotting.Key{:font}}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_attribute",
    "category": "method",
    "text": "font conversion\n\na string naming a font, e.g. helvetica\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.convert_attribute-Tuple{Union{Tuple, Pair},AbstractPlotting.Key{:colormap}}",
    "page": "Docstrings",
    "title": "AbstractPlotting.convert_attribute",
    "category": "method",
    "text": "Tuple(A, B) or Pair{A, B} with any object that to_color accepts\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.fill_between!-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "AbstractPlotting.fill_between!",
    "category": "method",
    "text": "fill_between!(x, y1, y2; where = nothing, scene = current_scene(), kw_args...)\n\nfill the section between 2 lines with the condition where\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.force_update!-Tuple{}",
    "page": "Docstrings",
    "title": "AbstractPlotting.force_update!",
    "category": "method",
    "text": "Forces to rerender the scnee\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.heatmap",
    "page": "Docstrings",
    "title": "AbstractPlotting.heatmap",
    "category": "function",
    "text": "`heatmap(x, y, values)` or `heatmap(values)`\n\nPlots a heatmap as an image on x, y (defaults to interpretation as dimensions).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.heatmap!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.heatmap!",
    "category": "method",
    "text": "AbstractPlotting.heatmap!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.heatmap!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.heatmap!",
    "category": "method",
    "text": "AbstractPlotting.heatmap!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.heatmap!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.heatmap!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.heatmap!",
    "category": "method",
    "text": "AbstractPlotting.heatmap!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.heatmap!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.heatmap!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.heatmap!",
    "category": "method",
    "text": "AbstractPlotting.heatmap!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.heatmap-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.heatmap",
    "category": "method",
    "text": "AbstractPlotting.heatmap(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.heatmap-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.heatmap",
    "category": "method",
    "text": "AbstractPlotting.heatmap(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.heatmap(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.help-Tuple{Any}",
    "page": "Docstrings",
    "title": "AbstractPlotting.help",
    "category": "method",
    "text": "help(func[; extended = false])\n\nWelcome to the main help function of Makie.jl / AbstractPlotting.jl.\n\nFor help on a specific function\'s arguments, type help_arguments(function_name).\n\nFor help on a specific function\'s attributes, type help_attributes(plot_Type).\n\nUse the optional extended = true keyword argument to see more details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.help_arguments-Tuple{Any}",
    "page": "Docstrings",
    "title": "AbstractPlotting.help_arguments",
    "category": "method",
    "text": "help_arguments([io], func)\n\nReturns a list of signatures for function func.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.help_attributes-Tuple{Any}",
    "page": "Docstrings",
    "title": "AbstractPlotting.help_attributes",
    "category": "method",
    "text": "help_attributes([io], Union{PlotType, PlotFunction}; extended = false)\n\nReturns a list of attributes for the plot type Typ. The attributes returned extend those attributes found in the default_theme.\n\nUse the optional keyword argument extended (default = false) to show in addition the default values of each attribute. usage:\n\n>help_attributes(scatter)\n	alpha\n	color\n	colormap\n	colorrange\n	distancefield\n	glowcolor\n	glowwidth\n	linewidth\n	marker\n	marker_offset\n	markersize\n	overdraw\n	rotations\n	strokecolor\n	strokewidth\n	transform_marker\n	transparency\n	uv_offset_width\n	visible\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.hovered_scene-Tuple{}",
    "page": "Docstrings",
    "title": "AbstractPlotting.hovered_scene",
    "category": "method",
    "text": "hovered_scene()\n\nReturn the scene that the mouse is currently hovering over.\n\nProperly identifies the scene for a plot with multiple sub-plots.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.image",
    "page": "Docstrings",
    "title": "AbstractPlotting.image",
    "category": "function",
    "text": "`image(x, y, image)` / `image(image)`\n\nPlots an image on range x, y (defaults to dimensions).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.image!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.image!",
    "category": "method",
    "text": "AbstractPlotting.image!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.image!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.image!",
    "category": "method",
    "text": "AbstractPlotting.image!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.image!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.image!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.image!",
    "category": "method",
    "text": "AbstractPlotting.image!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.image!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.image!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.image!",
    "category": "method",
    "text": "AbstractPlotting.image!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.image-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.image",
    "category": "method",
    "text": "AbstractPlotting.image(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.image-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.image",
    "category": "method",
    "text": "AbstractPlotting.image(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.image(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.ispressed-Tuple{Union{AbstractScene, ScenePlot},Union{Tuple, Array{T,1} where T}}",
    "page": "Docstrings",
    "title": "AbstractPlotting.ispressed",
    "category": "method",
    "text": "returns true if button is pressed in scene[:mousebuttons or :keyboardbuttons] You can use nothing, to indicate it should always return true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.legend!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.legend!",
    "category": "method",
    "text": "AbstractPlotting.legend!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.legend!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.legend!",
    "category": "method",
    "text": "AbstractPlotting.legend!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.legend!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.legend!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.legend!",
    "category": "method",
    "text": "AbstractPlotting.legend!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.legend!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.legend!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.legend!",
    "category": "method",
    "text": "AbstractPlotting.legend!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.legend-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.legend",
    "category": "method",
    "text": "AbstractPlotting.legend(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.legend-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.legend",
    "category": "method",
    "text": "AbstractPlotting.legend(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.legend(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.lines",
    "page": "Docstrings",
    "title": "AbstractPlotting.lines",
    "category": "function",
    "text": "`lines(x, y, z)` / `lines(x, y)` / or `lines(positions)`\n\nCreates a connected line plot for each element in (x, y, z), (x, y) or positions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.lines!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.lines!",
    "category": "method",
    "text": "AbstractPlotting.lines!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.lines!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.lines!",
    "category": "method",
    "text": "AbstractPlotting.lines!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.lines!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.lines!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.lines!",
    "category": "method",
    "text": "AbstractPlotting.lines!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.lines!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.lines!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.lines!",
    "category": "method",
    "text": "AbstractPlotting.lines!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.lines-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.lines",
    "category": "method",
    "text": "AbstractPlotting.lines(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.lines-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.lines",
    "category": "method",
    "text": "AbstractPlotting.lines(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.lines(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.linesegments",
    "page": "Docstrings",
    "title": "AbstractPlotting.linesegments",
    "category": "function",
    "text": "`linesegments(x, y, z)` / `linesegments(x, y)` / `linesegments(positions)`\n\nPlots a line for each pair of points in (x, y, z), (x, y), or positions.\n\nAttributes: The same as for lines\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.linesegments!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.linesegments!",
    "category": "method",
    "text": "AbstractPlotting.linesegments!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.linesegments!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.linesegments!",
    "category": "method",
    "text": "AbstractPlotting.linesegments!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.linesegments!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.linesegments!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.linesegments!",
    "category": "method",
    "text": "AbstractPlotting.linesegments!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.linesegments!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.linesegments!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.linesegments!",
    "category": "method",
    "text": "AbstractPlotting.linesegments!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.linesegments-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.linesegments",
    "category": "method",
    "text": "AbstractPlotting.linesegments(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.linesegments-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.linesegments",
    "category": "method",
    "text": "AbstractPlotting.linesegments(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.linesegments(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.map_once-Tuple{Any,Observables.Observable,Vararg{Observables.Observable,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.map_once",
    "category": "method",
    "text": "map_once(closure, inputs::Node....)::Node\n\nLike Reactive.foreach, in the sense that it will be preserved even if no reference is kept. The difference is, that you can call map once multiple times with the same closure and it will close the old result Node and register a new one instead.\n\n``` function test(s1::Node)     s3 = maponce(x-> (println(\"1 \", x); x), s1)     s3 = maponce(x-> (println(\"2 \", x); x), s1)\n\nend test(Node(1), Node(2))\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mesh",
    "page": "Docstrings",
    "title": "AbstractPlotting.mesh",
    "category": "function",
    "text": "`mesh(x, y, z)`, `mesh(mesh_object)`, `mesh(x, y, z, faces)`, or `mesh(xyz, faces)`\n\nPlots a 3D mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mesh!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.mesh!",
    "category": "method",
    "text": "AbstractPlotting.mesh!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mesh!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.mesh!",
    "category": "method",
    "text": "AbstractPlotting.mesh!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.mesh!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mesh!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.mesh!",
    "category": "method",
    "text": "AbstractPlotting.mesh!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.mesh!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mesh!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.mesh!",
    "category": "method",
    "text": "AbstractPlotting.mesh!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mesh-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.mesh",
    "category": "method",
    "text": "AbstractPlotting.mesh(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mesh-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.mesh",
    "category": "method",
    "text": "AbstractPlotting.mesh(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.mesh(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.meshscatter",
    "page": "Docstrings",
    "title": "AbstractPlotting.meshscatter",
    "category": "function",
    "text": "`meshscatter(x, y, z)` / `meshscatter(x, y)` / `meshscatter(positions)`\n\nPlots a mesh for each element in (x, y, z), (x, y), or positions (similar to scatter). markersize is a scaling applied to the primitive passed as marker\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.meshscatter!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.meshscatter!",
    "category": "method",
    "text": "AbstractPlotting.meshscatter!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.meshscatter!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.meshscatter!",
    "category": "method",
    "text": "AbstractPlotting.meshscatter!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.meshscatter!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.meshscatter!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.meshscatter!",
    "category": "method",
    "text": "AbstractPlotting.meshscatter!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.meshscatter!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.meshscatter!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.meshscatter!",
    "category": "method",
    "text": "AbstractPlotting.meshscatter!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.meshscatter-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.meshscatter",
    "category": "method",
    "text": "AbstractPlotting.meshscatter(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.meshscatter-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.meshscatter",
    "category": "method",
    "text": "AbstractPlotting.meshscatter(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.meshscatter(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mouseposition",
    "page": "Docstrings",
    "title": "AbstractPlotting.mouseposition",
    "category": "function",
    "text": "mouseposition(scene = hovered_scene()) -> pos\n\nReturn the current position of the mouse pos in data points of the given scene.\n\nBy default uses the scene that the mouse is currently hovering over.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.multipleplot!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.multipleplot!",
    "category": "method",
    "text": "AbstractPlotting.multipleplot!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.multipleplot!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.multipleplot!",
    "category": "method",
    "text": "AbstractPlotting.multipleplot!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.multipleplot!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.multipleplot!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.multipleplot!",
    "category": "method",
    "text": "AbstractPlotting.multipleplot!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.multipleplot!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.multipleplot!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.multipleplot!",
    "category": "method",
    "text": "AbstractPlotting.multipleplot!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.multipleplot-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.multipleplot",
    "category": "method",
    "text": "AbstractPlotting.multipleplot(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.multipleplot-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.multipleplot",
    "category": "method",
    "text": "AbstractPlotting.multipleplot(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.multipleplot(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.must_update-Tuple{}",
    "page": "Docstrings",
    "title": "AbstractPlotting.must_update",
    "category": "method",
    "text": "Returns wether a scene needs updating\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.onpick",
    "page": "Docstrings",
    "title": "AbstractPlotting.onpick",
    "category": "function",
    "text": "onpick(func, plot)\n\nCalls func if one clicks on plot\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.pick",
    "page": "Docstrings",
    "title": "AbstractPlotting.pick",
    "category": "function",
    "text": "Picks a mouse position\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plot!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.plot!",
    "category": "method",
    "text": "AbstractPlotting.plot!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plot!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.plot!",
    "category": "method",
    "text": "AbstractPlotting.plot!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.plot!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plot!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.plot!",
    "category": "method",
    "text": "AbstractPlotting.plot!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.plot!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plot!-Tuple{Union{AbstractScene, ScenePlot},Union{Type{Any}, Type{#s830} where #s830<:AbstractPlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.plot!",
    "category": "method",
    "text": "Main plotting signatures that plot/plot! route to if no Plot Type is given\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plot!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.plot!",
    "category": "method",
    "text": "AbstractPlotting.plot!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plot!-Tuple{Wireframe{...}}",
    "page": "Docstrings",
    "title": "AbstractPlotting.plot!",
    "category": "method",
    "text": "`wireframe(x, y, z)`, `wireframe(positions)`, or `wireframe(mesh)`\n\nDraws a wireframe, either interpreted as a surface or as a mesh.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plot-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.plot",
    "category": "method",
    "text": "AbstractPlotting.plot(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plot-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.plot",
    "category": "method",
    "text": "AbstractPlotting.plot(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.plot(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.poly!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.poly!",
    "category": "method",
    "text": "AbstractPlotting.poly!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.poly!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.poly!",
    "category": "method",
    "text": "AbstractPlotting.poly!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.poly!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.poly!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.poly!",
    "category": "method",
    "text": "AbstractPlotting.poly!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.poly!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.poly!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.poly!",
    "category": "method",
    "text": "AbstractPlotting.poly!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.poly-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.poly",
    "category": "method",
    "text": "AbstractPlotting.poly(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.poly-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.poly",
    "category": "method",
    "text": "AbstractPlotting.poly(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.poly(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.record-NTuple{4,Any}",
    "page": "Docstrings",
    "title": "AbstractPlotting.record",
    "category": "method",
    "text": "record(func, scene, path, iter)\n\nusage:\n\n    record(scene, \"test.gif\", 1:100) do i\n        scene.plots[:color] = ...# animate scene\n    end\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.record-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "AbstractPlotting.record",
    "category": "method",
    "text": "record(func, scene, path)\n\nusage:\n\n    record(scene, \"test.gif\") do io\n        for i = 1:100\n            scene.plots[:color] = ...# animate scene\n            recordframe!(io) # record a new frame\n        end\n    end\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.record_events-Tuple{Any,Scene,String}",
    "page": "Docstrings",
    "title": "AbstractPlotting.record_events",
    "category": "method",
    "text": "Record all window events that happen while executing function f for scene and serializes them to path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.recordframe!-Tuple{VideoStream}",
    "page": "Docstrings",
    "title": "AbstractPlotting.recordframe!",
    "category": "method",
    "text": "Adds a video frame to the VideoStream\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.replace_automatic!-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "AbstractPlotting.replace_automatic!",
    "category": "method",
    "text": "Like get!(f, dict, key) but also calls f and replaces key when the corresponding value is nothing\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.replay_events-Tuple{Scene,String}",
    "page": "Docstrings",
    "title": "AbstractPlotting.replay_events",
    "category": "method",
    "text": "Replays the serialized events recorded with record_events in path in scene.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatter",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatter",
    "category": "function",
    "text": "`scatter(x, y, z)` / `scatter(x, y)` / `scatter(positions)`\n\nPlots a marker for each element in (x, y, z), (x, y), or positions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatter!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatter!",
    "category": "method",
    "text": "AbstractPlotting.scatter!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatter!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatter!",
    "category": "method",
    "text": "AbstractPlotting.scatter!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.scatter!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatter!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatter!",
    "category": "method",
    "text": "AbstractPlotting.scatter!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.scatter!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatter!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatter!",
    "category": "method",
    "text": "AbstractPlotting.scatter!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatter-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatter",
    "category": "method",
    "text": "AbstractPlotting.scatter(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatter-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatter",
    "category": "method",
    "text": "AbstractPlotting.scatter(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.scatter(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatterlines!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatterlines!",
    "category": "method",
    "text": "AbstractPlotting.scatterlines!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatterlines!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatterlines!",
    "category": "method",
    "text": "AbstractPlotting.scatterlines!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.scatterlines!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatterlines!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatterlines!",
    "category": "method",
    "text": "AbstractPlotting.scatterlines!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.scatterlines!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatterlines!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatterlines!",
    "category": "method",
    "text": "AbstractPlotting.scatterlines!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatterlines-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatterlines",
    "category": "method",
    "text": "AbstractPlotting.scatterlines(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.scatterlines-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.scatterlines",
    "category": "method",
    "text": "AbstractPlotting.scatterlines(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.scatterlines(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.select_rectangle-Tuple{Any}",
    "page": "Docstrings",
    "title": "AbstractPlotting.select_rectangle",
    "category": "method",
    "text": "select_rectangle(scene; kwargs...) -> rect\n\nInteractively select a rectangle on a scene by clicking the left mouse button, dragging and then un-clicking. The function returns an observable rect whose value corresponds to the selected rectangle on the scene. In addition the function plots the selected rectangle on the scene as the user clicks and moves the mouse around. When the button is not clicked any more, the plotted rectangle disappears.\n\nThe value of the returned observable is updated only when the user un-clicks (i.e. when the final value of the rectangle has been decided) and only if the rectangle has area > 0.\n\nThe kwargs... are propagated into lines! which plots the selected rectangle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.series!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.series!",
    "category": "method",
    "text": "AbstractPlotting.series!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.series!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.series!",
    "category": "method",
    "text": "AbstractPlotting.series!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.series!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.series!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.series!",
    "category": "method",
    "text": "AbstractPlotting.series!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.series!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.series!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.series!",
    "category": "method",
    "text": "AbstractPlotting.series!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.series-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.series",
    "category": "method",
    "text": "AbstractPlotting.series(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.series-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.series",
    "category": "method",
    "text": "AbstractPlotting.series(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.series(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.slider!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.slider!",
    "category": "method",
    "text": "AbstractPlotting.slider!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.slider!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.slider!",
    "category": "method",
    "text": "AbstractPlotting.slider!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.slider!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.slider!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.slider!",
    "category": "method",
    "text": "AbstractPlotting.slider!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.slider!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.slider!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.slider!",
    "category": "method",
    "text": "AbstractPlotting.slider!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.slider-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.slider",
    "category": "method",
    "text": "AbstractPlotting.slider(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.slider-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.slider",
    "category": "method",
    "text": "AbstractPlotting.slider(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.slider(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.step!-Tuple{Stepper}",
    "page": "Docstrings",
    "title": "AbstractPlotting.step!",
    "category": "method",
    "text": "step!(s::Stepper)\n\nsteps through a Makie.Stepper and outputs a file with filename filename-step.jpg. This is useful for generating progressive plot examples.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.streamlines!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.streamlines!",
    "category": "method",
    "text": "AbstractPlotting.streamlines!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.streamlines!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.streamlines!",
    "category": "method",
    "text": "AbstractPlotting.streamlines!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.streamlines!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.streamlines!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.streamlines!",
    "category": "method",
    "text": "AbstractPlotting.streamlines!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.streamlines!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.streamlines!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.streamlines!",
    "category": "method",
    "text": "AbstractPlotting.streamlines!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.streamlines-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.streamlines",
    "category": "method",
    "text": "AbstractPlotting.streamlines(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.streamlines-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.streamlines",
    "category": "method",
    "text": "AbstractPlotting.streamlines(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.streamlines(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.surface",
    "page": "Docstrings",
    "title": "AbstractPlotting.surface",
    "category": "function",
    "text": "`surface(x, y, z)`\n\nPlots a surface, where (x, y, z) are supposed to lie on a grid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.surface!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.surface!",
    "category": "method",
    "text": "AbstractPlotting.surface!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.surface!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.surface!",
    "category": "method",
    "text": "AbstractPlotting.surface!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.surface!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.surface!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.surface!",
    "category": "method",
    "text": "AbstractPlotting.surface!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.surface!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.surface!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.surface!",
    "category": "method",
    "text": "AbstractPlotting.surface!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.surface-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.surface",
    "category": "method",
    "text": "AbstractPlotting.surface(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.surface-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.surface",
    "category": "method",
    "text": "AbstractPlotting.surface(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.surface(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.text",
    "page": "Docstrings",
    "title": "AbstractPlotting.text",
    "category": "function",
    "text": "`text(string)`\n\nPlots a text.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.text!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.text!",
    "category": "method",
    "text": "AbstractPlotting.text!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.text!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.text!",
    "category": "method",
    "text": "AbstractPlotting.text!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.text!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.text!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.text!",
    "category": "method",
    "text": "AbstractPlotting.text!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.text!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.text!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.text!",
    "category": "method",
    "text": "AbstractPlotting.text!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.text-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.text",
    "category": "method",
    "text": "AbstractPlotting.text(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.text-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.text",
    "category": "method",
    "text": "AbstractPlotting.text(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.text(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_color-Tuple{Any}",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_color",
    "category": "method",
    "text": "to_color(color)\n\nConverts a color symbol (e.g. :blue) to a color RGBA.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_colormap-Tuple{Any}",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_colormap",
    "category": "method",
    "text": "to_colormap(cm[, N = 20])\n\nConverts a colormap cm symbol (e.g. :Spectral) to a colormap RGB array, where N specifies the number of color points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volume",
    "page": "Docstrings",
    "title": "AbstractPlotting.volume",
    "category": "function",
    "text": "`volume(volume_data)`\n\nPlots a volume. Available algorithms are:\n\n:iso => IsoValue\n:absorption => Absorption\n:mip => MaximumIntensityProjection\n:absorptionrgba => AbsorptionRGBA\n:indexedabsorption => IndexedAbsorptionRGBA\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volume!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.volume!",
    "category": "method",
    "text": "AbstractPlotting.volume!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volume!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.volume!",
    "category": "method",
    "text": "AbstractPlotting.volume!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.volume!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volume!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.volume!",
    "category": "method",
    "text": "AbstractPlotting.volume!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.volume!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volume!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.volume!",
    "category": "method",
    "text": "AbstractPlotting.volume!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volume-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.volume",
    "category": "method",
    "text": "AbstractPlotting.volume(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volume-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.volume",
    "category": "method",
    "text": "AbstractPlotting.volume(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.volume(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volumeslices!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.volumeslices!",
    "category": "method",
    "text": "AbstractPlotting.volumeslices!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volumeslices!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.volumeslices!",
    "category": "method",
    "text": "AbstractPlotting.volumeslices!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.volumeslices!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volumeslices!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.volumeslices!",
    "category": "method",
    "text": "AbstractPlotting.volumeslices!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.volumeslices!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volumeslices!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.volumeslices!",
    "category": "method",
    "text": "AbstractPlotting.volumeslices!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volumeslices-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.volumeslices",
    "category": "method",
    "text": "AbstractPlotting.volumeslices(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.volumeslices-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.volumeslices",
    "category": "method",
    "text": "AbstractPlotting.volumeslices(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.volumeslices(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.wireframe!-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.wireframe!",
    "category": "method",
    "text": "AbstractPlotting.wireframe!(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to current_scene()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.wireframe!-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.wireframe!",
    "category": "method",
    "text": "AbstractPlotting.wireframe!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.wireframe!(args...; attributes...) but accepts a theme as first argument. Adds new plot to current_scene()!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.wireframe!-Tuple{Union{AbstractScene, ScenePlot},Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.wireframe!",
    "category": "method",
    "text": "AbstractPlotting.wireframe!(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.wireframe!(scene, args...; attributes...) but accepts a theme as second argument. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.wireframe!-Tuple{Union{AbstractScene, ScenePlot},Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.wireframe!",
    "category": "method",
    "text": "AbstractPlotting.wireframe!(scene::SceneLike, args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Adds new plot to scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.wireframe-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.wireframe",
    "category": "method",
    "text": "AbstractPlotting.wireframe(args...; attributes...)\n\nCommand works on plot args 1:N and accepts keyword arguments to style the plot. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.wireframe-Tuple{Attributes,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.wireframe",
    "category": "method",
    "text": "AbstractPlotting.wireframe(attributes::Attributes, args...; attributes...)\n\nLike AbstractPlotting.wireframe(args...; attributes...) but accepts a theme as first argument. Creates a new scene!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Observables.on-Tuple{Any,Camera,Vararg{Observables.Observable,N} where N}",
    "page": "Docstrings",
    "title": "Observables.on",
    "category": "method",
    "text": "When mapping over nodes for the camera, we store them in the steering_node vector, to make it easier to disconnect the camera steering signals later!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.Automatic",
    "page": "Docstrings",
    "title": "AbstractPlotting.Automatic",
    "category": "type",
    "text": "Type to indicate that an attribute will get calculated automatically\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.Plot-Union{Tuple{Vararg{Any,N}}, Tuple{N}} where N",
    "page": "Docstrings",
    "title": "AbstractPlotting.Plot",
    "category": "method",
    "text": "Returns the Combined type that represents the signature of args.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.apply_convert!-Tuple{Any,Attributes,Tuple}",
    "page": "Docstrings",
    "title": "AbstractPlotting.apply_convert!",
    "category": "method",
    "text": "apply for return type     (args...,)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.apply_convert!-Union{Tuple{S}, Tuple{Any,Attributes,PlotSpec{S}}} where S",
    "page": "Docstrings",
    "title": "AbstractPlotting.apply_convert!",
    "category": "method",
    "text": "apply for return type PlotSpec\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.argument_names-Union{Tuple{P}, Tuple{P}} where P<:AbstractPlot",
    "page": "Docstrings",
    "title": "AbstractPlotting.argument_names",
    "category": "method",
    "text": "Each argument can be named for a certain plot type P. Falls back to arg1, arg2, etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.atomic_limits-Union{Tuple{Union{Text{...}, MeshScatter{...}, Scatter{...}, Mesh{...}, LineSegments{...}, Lines{...}, Surface{...}, Volume{...}, Heatmap{...}, Image{...}} where #s829<:Tuple{Arg1}}, Tuple{Arg1}} where Arg1",
    "page": "Docstrings",
    "title": "AbstractPlotting.atomic_limits",
    "category": "method",
    "text": "Data limits calculate a minimal boundingbox from the data points in a plot. This doesn\'t include any transformations, markers etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.available_gradients-Tuple{}",
    "page": "Docstrings",
    "title": "AbstractPlotting.available_gradients",
    "category": "method",
    "text": "available_gradients()\n\nPrints all available gradient names.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.available_marker_symbols-Tuple{}",
    "page": "Docstrings",
    "title": "AbstractPlotting.available_marker_symbols",
    "category": "method",
    "text": "available_marker_symbols()\n\nDisplays all available marker symbols.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.calculated_attributes!-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "AbstractPlotting.calculated_attributes!",
    "category": "method",
    "text": "`calculated_attributes!(trait::Type{<: AbstractPlot}, plot)`\n\ntrait version of calculated_attributes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.calculated_attributes!-Union{Tuple{T}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "AbstractPlotting.calculated_attributes!",
    "category": "method",
    "text": "`calculated_attributes!(plot::AbstractPlot)`\n\nFill in values that can only be calculated when we have all other attributes filled\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.close2square-Tuple{Real}",
    "page": "Docstrings",
    "title": "AbstractPlotting.close2square",
    "category": "method",
    "text": "Returns (N1, N2) with N1 x N2 == n. N2 might become 1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.current_scene-Tuple{}",
    "page": "Docstrings",
    "title": "AbstractPlotting.current_scene",
    "category": "method",
    "text": "Returns the current active scene (the last scene that got created)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.default_plot_signatures-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "AbstractPlotting.default_plot_signatures",
    "category": "method",
    "text": " default_plot_signatures(funcname, PlotType)\n\nCreates all the different overloads for funcname that need to be supported for the plotting frontend! Since we add all these signatures to different functions, we make it reusable with this function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.detach!-Tuple{Combined}",
    "page": "Docstrings",
    "title": "AbstractPlotting.detach!",
    "category": "method",
    "text": "Remove combined from the current parent, and add it to a new subscene of the parent scene. Returns the new parent.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.dont_touch-Union{Tuple{N}, Tuple{GeometryPrimitive{N,T} where T,GeometryPrimitive{N,T} where T,Vec{N,T} where T}} where N",
    "page": "Docstrings",
    "title": "AbstractPlotting.dont_touch",
    "category": "method",
    "text": "Moves child so that it doesn\'t touch parent. Leaves a gap to parent defined by pad.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.elconvert-Union{Tuple{N}, Tuple{T2}, Tuple{T1}, Tuple{Type{T1},AbstractArray{T2,N}}} where N where T2 where T1",
    "page": "Docstrings",
    "title": "AbstractPlotting.elconvert",
    "category": "method",
    "text": "Converts the elemen array type to T1 without making a copy if the element type matches\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.fit_factor-Union{Tuple{N}, Tuple{Any,Tuple{Vararg{Any,N}}}} where N",
    "page": "Docstrings",
    "title": "AbstractPlotting.fit_factor",
    "category": "method",
    "text": "fit_factor(rect, lims::NTuple{N}) where N\n\nCalculates the scaling one needs to apply to lims to fit rect without changing aspect ratio. Returns float scaling and the full strech as given by fit_factor_stretch\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.fit_factor_stretch-Union{Tuple{N}, Tuple{Any,Tuple{Vararg{Any,N}}}} where N",
    "page": "Docstrings",
    "title": "AbstractPlotting.fit_factor_stretch",
    "category": "method",
    "text": "fit_factor_stretch(rect, lims::NTuple{N}) where N\n\nCalculates the stretch factor to fill rect in all dimension. Returns a stretch N dimensional fit factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.fit_ratio-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "AbstractPlotting.fit_ratio",
    "category": "method",
    "text": "fit_ratio(rect, lims)\n\nCalculates the ratio one needs to stretch lims in order to get the same aspect ratio\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.flatten_combined",
    "page": "Docstrings",
    "title": "AbstractPlotting.flatten_combined",
    "category": "function",
    "text": "Flattens all the combined plots and returns a Vector of Atomic plots\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.from_dict-Union{Tuple{T}, Tuple{Type{T},Any}} where T",
    "page": "Docstrings",
    "title": "AbstractPlotting.from_dict",
    "category": "method",
    "text": "from_dict(::Type{T}, dict)\n\nCreates the type T from the fields in dict. Automatically converts to the correct node types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.frustum-Union{Tuple{T}, NTuple{6,T}} where T",
    "page": "Docstrings",
    "title": "AbstractPlotting.frustum",
    "category": "method",
    "text": "Create view frustum\n\nParameters\n----------\n    left : float\n     Left coordinate of the field of view.\n    right : float\n     Left coordinate of the field of view.\n    bottom : float\n     Bottom coordinate of the field of view.\n    top : float\n     Top coordinate of the field of view.\n    znear : float\n     Near coordinate of the field of view.\n    zfar : float\n     Far coordinate of the field of view.\n\nReturns\n-------\n    M : array\n     View frustum matrix (4x4).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.interpolated_getindex-Union{Tuple{T}, Tuple{AbstractArray{T,N} where N,AbstractFloat}, Tuple{AbstractArray{T,N} where N,AbstractFloat,Any}} where T",
    "page": "Docstrings",
    "title": "AbstractPlotting.interpolated_getindex",
    "category": "method",
    "text": "interpolated_getindex(cmap::AbstractArray, value::AbstractFloat, norm = (0.0, 1.0))\n\nLike getindex, but accepts values between 0..1 and interpolates those to the full range. You can use norm, to change the range of 0..1 to whatever you want.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.lookat-Union{Tuple{T}, Tuple{Vec{3,T},Vec{3,T},Vec{3,T}}} where T",
    "page": "Docstrings",
    "title": "AbstractPlotting.lookat",
    "category": "method",
    "text": "view = lookat(eyeposition, lookat, up) creates a view matrix with the eye located at eyeposition and looking at position lookat, with the top of the window corresponding to the direction up. Only the component of up that is perpendicular to the vector pointing from eyeposition to lookat will be used.  All inputs must be supplied as 3-vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mergekeys!-Union{Tuple{N}, Tuple{Tuple{Vararg{Symbol,N}},Attributes,Attributes}} where N",
    "page": "Docstrings",
    "title": "AbstractPlotting.mergekeys!",
    "category": "method",
    "text": "mergekeys!(keys::NTuple{N, Symbol}, target::Attributes, source::Attributes)\n\nMerges only keys from source into target.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.mergekeys-Union{Tuple{N}, Tuple{Tuple{Vararg{Symbol,N}},Attributes,Attributes}} where N",
    "page": "Docstrings",
    "title": "AbstractPlotting.mergekeys",
    "category": "method",
    "text": "mergekeys(keys::NTuple{N, Symbol}, target::Attributes, source::Attributes)\n\nMerges only keys from source into target. Creates a copy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.move_from_touch-Union{Tuple{T}, Tuple{N}, Tuple{GeometryPrimitive{N,T},GeometryPrimitive{N,T} where T,Vec{N,T} where T}} where T where N",
    "page": "Docstrings",
    "title": "AbstractPlotting.move_from_touch",
    "category": "method",
    "text": "calculates how much child rectangle needs to move to not touch the parent\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.notify!-Tuple{Observables.Observable}",
    "page": "Docstrings",
    "title": "AbstractPlotting.notify!",
    "category": "method",
    "text": "Pushes an updates to all listeners of node\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.perspectiveprojection-Union{Tuple{T}, NTuple{4,T}} where T",
    "page": "Docstrings",
    "title": "AbstractPlotting.perspectiveprojection",
    "category": "method",
    "text": "proj = perspectiveprojection([T], fovy, aspect, znear, zfar) defines a projection matrix with a given angular field-of-view fovy along the y-axis (measured in degrees), the specified aspect ratio, and near and far clipping planes znear, zfar. Optionally specify the element type T of the matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.perspectiveprojection-Union{Tuple{T}, Tuple{SimpleRectangle,T,T,T}} where T",
    "page": "Docstrings",
    "title": "AbstractPlotting.perspectiveprojection",
    "category": "method",
    "text": "proj = perspectiveprojection([T], rect, fov, near, far) defines the projection ratio in terms of the rectangular view size rect rather than the aspect ratio.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plots_from_camera-Tuple{Scene}",
    "page": "Docstrings",
    "title": "AbstractPlotting.plots_from_camera",
    "category": "method",
    "text": "Fetches all plots sharing the same camera\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plottype-Tuple",
    "page": "Docstrings",
    "title": "AbstractPlotting.plottype",
    "category": "method",
    "text": "`plot_type(plot_args...)`\n\nThe default plot type for any argument is lines. Any custom argument combination that has only one meaningful way to be plotted should overload this. e.g.:\n\n    # make plot(rand(5, 5, 5)) plot as a volume\n    plottype(x::Array{<: AbstractFlot, 3}) = Volume\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.plottype-Union{Tuple{T}, Tuple{Type{#s828} where #s828<:(Combined{Any,T} where T),Type{#s827} where #s827<:(Combined{T,T1} where T1)}} where T",
    "page": "Docstrings",
    "title": "AbstractPlotting.plottype",
    "category": "method",
    "text": "plottype(P1::Type{<: Combined{T1}}, P2::Type{<: Combined{T2}})\n\nChooses the more concrete plot type ```example function convert_arguments(P::PlotFunc, args...)     ptype = plottype(P, Lines)     ... end\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.primary_resolution-Tuple{}",
    "page": "Docstrings",
    "title": "AbstractPlotting.primary_resolution",
    "category": "method",
    "text": "Returns the resolution of the primary monitor. If the primary monitor can\'t be accessed, returns (1920, 1080) (full hd)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.print_rec",
    "page": "Docstrings",
    "title": "AbstractPlotting.print_rec",
    "category": "function",
    "text": "print_rec(io::IO, dict, indent::Int = 1[; extended = false])\n\nTraverses a dictionary dict and recursively print out its keys and values in a nicely-indented format.\n\nUse the optional extended = true keyword argument to see more details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.raw_boundingbox-Tuple{Union{Text{...}, MeshScatter{...}, Scatter{...}, Mesh{...}, LineSegments{...}, Lines{...}, Surface{...}, Volume{...}, Heatmap{...}, Image{...}} where Arg}",
    "page": "Docstrings",
    "title": "AbstractPlotting.raw_boundingbox",
    "category": "method",
    "text": "Calculates the exact boundingbox of a Scene/Plot, without considering any transformation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.reasonable_resolution-Tuple{}",
    "page": "Docstrings",
    "title": "AbstractPlotting.reasonable_resolution",
    "category": "method",
    "text": "Returns a reasonable resolution for the main monitor. (right now just half the resolution of the main monitor)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.resample-Tuple{AbstractArray{T,1} where T,Integer}",
    "page": "Docstrings",
    "title": "AbstractPlotting.resample",
    "category": "method",
    "text": "resample(A::AbstractVector, len::Integer)\n\nResample a vector with linear interpolation to have length len\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.resampled_colors-Tuple{Any,Integer}",
    "page": "Docstrings",
    "title": "AbstractPlotting.resampled_colors",
    "category": "method",
    "text": "resampled_colors(attributes::Attributes, levels::Integer)\n\nResample the color attribute from attributes. Resamples :colormap if present, or repeats :color.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.safe_off-Tuple{Observables.AbstractObservable,Any}",
    "page": "Docstrings",
    "title": "AbstractPlotting.safe_off",
    "category": "method",
    "text": "Observables.off but without throwing an error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.save-Tuple{String,VideoStream}",
    "page": "Docstrings",
    "title": "AbstractPlotting.save",
    "category": "method",
    "text": "save(path::String, io::VideoStream)\n\nFlushes the video stream and converts the file to the extension found in path which can be mkv is default and doesn\'t need convert, gif, mp4 and webm. mp4 is recommended for the internet, since it\'s the most supported format. webm yields the smallest file size, mp4 and mk4 are marginally bigger and gifs are up to 6 times bigger with same quality!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_func-Union{Tuple{Type{#s829} where #s829<:AbstractPlot{F}}, Tuple{F}} where F",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_func",
    "category": "method",
    "text": "to_func(Typ)\n\nMaps the input of a Type name to its cooresponding function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_spritemarker-Tuple{AbstractArray{#s829,2} where #s829<:ColorTypes.Colorant}",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_spritemarker",
    "category": "method",
    "text": "Any AbstractMatrix{<: Colorant} or other image type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_spritemarker-Tuple{AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_spritemarker",
    "category": "method",
    "text": "Vector of anything that is accepted as a single marker will give each point it\'s own marker. Note that it needs to be a uniform vector with the same element type!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_spritemarker-Tuple{Array{#s829,2} where #s829<:AbstractFloat}",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_spritemarker",
    "category": "method",
    "text": "Matrix of AbstractFloat will be interpreted as a distancefield (negative numbers outside shape, positive inside)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_spritemarker-Tuple{Char}",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_spritemarker",
    "category": "method",
    "text": "to_spritemarker(b, marker::Char)\n\nAny Char, including unicode\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_spritemarker-Tuple{GeometryTypes.HyperSphere{2,T} where T}",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_spritemarker",
    "category": "method",
    "text": "to_spritemarker(b, x::Circle)\n\nGeometryTypes.Circle(Point2(...), radius)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_spritemarker-Tuple{Symbol}",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_spritemarker",
    "category": "method",
    "text": "A Symbol - Available options can be printed with available_marker_symbols()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_spritemarker-Tuple{Type{#s829} where #s829<:(GeometryTypes.HyperSphere{2,T} where T)}",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_spritemarker",
    "category": "method",
    "text": "to_spritemarker(b, ::Type{Circle})\n\nType{GeometryTypes.Circle}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_spritemarker-Tuple{Type{#s829} where #s829<:GeometryTypes.SimpleRectangle}",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_spritemarker",
    "category": "method",
    "text": "to_spritemarker(b, ::Type{Rectangle})\n\nType{GeometryTypes.Rectangle}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_string-Tuple{Function}",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_string",
    "category": "method",
    "text": "to_string(func)\n\nTurns the input of a function name or plot Type into a string.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.to_type-Tuple{Function}",
    "page": "Docstrings",
    "title": "AbstractPlotting.to_type",
    "category": "method",
    "text": "to_type(func)\n\nMaps the input of a function name to its cooresponding Type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractPlotting.used_attributes-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "AbstractPlotting.used_attributes",
    "category": "method",
    "text": "used_attributes(args...) = ()\n\nfunction used to indicate what keyword args one wants to get passed in convert_arguments. Usage:\n\n    struct MyType end\n    used_attributes(::MyType) = (:attribute,)\n    function convert_arguments(x::MyType; attribute = 1)\n        ...\n    end\n    # attribute will get passed to convert_arguments\n    # without keyword_verload, this wouldn\'t happen\n    plot(MyType, attribute = 2)\n    #You can also use the convenience macro, to overload convert_arguments in one step:\n    @keywords convert_argumetns(x::MyType; attribute = 1)\n        ...\n    end\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AbstractPlotting]\nOrder = [:type, :function]"
},

]}
