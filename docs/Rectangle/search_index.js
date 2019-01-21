var documenterSearchIndex = {"docs": [

{
    "location": "#Base.length-Tuple{Rectangle.Line}",
    "page": "Home",
    "title": "Base.length",
    "category": "method",
    "text": "    length(l::Line) -> Float64\n\nThe length of the line segment.\n\n\n\n\n\n"
},

{
    "location": "#Rectangle.avg_min_dist-Tuple{Rect,Rect}",
    "page": "Home",
    "title": "Rectangle.avg_min_dist",
    "category": "method",
    "text": "    avg_min_dist(r1::Rect, r2::Rect) -> dx::Float64, dy::Float64\n\nRectangles are essentially point sets. Hence, one can perceive existence of a minimum distance of one point in r1 from r2. Similar, distance would also exist for every point in r2 from r1. While, technically Euclidean distance metric can exist, the computation is fairly cumborsome. Here, we use the city block distance or L1-metric.\n\ndx: The distance in the x-direction dy: The distance in the y-direction\n\nThe minimum distance will be zero when the rectangles are intersecting. The distance also will be lower in a specific direction if there is an overlap of  the rectangles in that direction\n\n\n\n\n\n"
},

{
    "location": "#Rectangle.intersects-Union{Tuple{T}, Tuple{Line{T},Line{T}}} where T<:Real",
    "page": "Home",
    "title": "Rectangle.intersects",
    "category": "method",
    "text": "    intersects(l1::Line{T}, l2::Line{T}) where {T <: Real} -> Bool\n\nIf l1 and l2 intersect each other. \n\n\n\n\n\n"
},

{
    "location": "#Rectangle.isHorizontal-Tuple{Rectangle.Line}",
    "page": "Home",
    "title": "Rectangle.isHorizontal",
    "category": "method",
    "text": "    isHorizontal(l::Line) -> Bool\n    isVertcal(l::Line) -> Bool\n\nIf the Line is horizontal or vertical.\n\n\n\n\n\n"
},

{
    "location": "#Rectangle.merge_axis_aligned-Union{Tuple{Array{Line{T},1}}, Tuple{T}, Tuple{Array{Line{T},1},Int64}, Tuple{Array{Line{T},1},Int64,Symbol}, Tuple{Array{Line{T},1},Int64,Symbol,T}} where T",
    "page": "Home",
    "title": "Rectangle.merge_axis_aligned",
    "category": "method",
    "text": "    merge_axis_aligned(alines::Vector{Line{T}}, \n                       axis::Int=1, \n                       order::Symbol=:increasing,\n                       tol::T=pcTol(T)) -> Vector{Line{T}}\n\nGiven an array of axis aligned lines, if the line ends touch the lines are  merged into a larger segment. Lines which are not touching the other lines are left  intact.\n\norder parameter can be in :increasing or :decreasing order in the direction of the axis. \n\naxis parameter can be 1 for horizontal lines and 2 for vertical lines. \n\n\n\n\n\n"
},

{
    "location": "#Rectangle.min_dist-Union{Tuple{T}, Tuple{Rect{T},Rect{T}}} where T<:Number",
    "page": "Home",
    "title": "Rectangle.min_dist",
    "category": "method",
    "text": "    min_dist(r1::Rect, r2::Rect) -> dx, dy\n\nMinimum distance or gap between two rectangles.\n\ndx: The distance in the x-direction dy: The distance in the y-direction\n\nThe minimum distance will be zero when the rectangles are overlapping in a direction.\n\n\n\n\n\n"
},

{
    "location": "#Rectangle.parallelogram_area-Union{Tuple{Array{T,2}}, Tuple{T}} where T<:Number",
    "page": "Home",
    "title": "Rectangle.parallelogram_area",
    "category": "method",
    "text": "    parallelogram_area(m::Matrix) -> Float64\n\nArea of the parallelogram. The matrix is a 2x3 matrix.\n\n\n\n\n\n"
},

{
    "location": "#Rectangle.projectX-Tuple{Rect,Rect}",
    "page": "Home",
    "title": "Rectangle.projectX",
    "category": "method",
    "text": "    projectX(r1::Rect, r2::Rect) -> (left, overlap, right)\n\nProjects the rectangles along the X-axis and returns three parts of rectangles.\n\nleft: The left segment of the projection overlap: If there is any overlap between the rectangles right: The right segment of the projection\n\nEach portion is returned as a tuple.\n\nIf the rectangle is part of the first rectangle, it\'s returned as the first element of the tuple. nothing is returned for a part when a portion is not available.\n\n\n\n\n\n"
},

{
    "location": "#Rectangle.projectY-Tuple{Rect,Rect}",
    "page": "Home",
    "title": "Rectangle.projectY",
    "category": "method",
    "text": "    projectY(r1::Rect, r2::Rect) -> (bottom, overlap, top)\n\nProjects the rectangles along the Y-axis and returns three parts of rectangles.\n\nbottom: The bottom segment of the projection overlap: If there is any overlap between the rectangles top: The top segment of the projection\n\nEach portion is returned as a tuple.\n\nIf the rectangle is part of the first rectangle, it\'s returned as the first element of the tuple. nothing is returned for a part when a portion is not available.\n\n\n\n\n\n"
},

{
    "location": "#Rectangle.ratio-Union{Tuple{T}, Tuple{Line{T},Array{T,1}}} where T<:Real",
    "page": "Home",
    "title": "Rectangle.ratio",
    "category": "method",
    "text": "    ratio(l1::Line{T}, p::Vector{T}) -> r::Real\n\nIf p is on l1 it divides the line at ratio r:(1-r) else nothing.\n\n\n\n\n\n"
},

{
    "location": "#Rectangle.visibleX-Tuple{Rect,Rect}",
    "page": "Home",
    "title": "Rectangle.visibleX",
    "category": "method",
    "text": "    visibleX(r1::Rect, r2::Rect) -> Rect\n    visibleY(r1::Rect, r2::Rect) -> Rect\n\nProjects the rectangles along the X-axis (Y-axis) and returns a rectangle area which is completely visible from both rectangles.\n\nnothing is returned when there is no overlap along the X-axis.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Rectangle]\nOrder = [:type, :function]"
},

]}
