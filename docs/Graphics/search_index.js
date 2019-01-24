var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Graphics.jl-1",
    "page": "Readme",
    "title": "Graphics.jl",
    "category": "section",
    "text": "A holding place for Base graphics(Image: Graphics) (Image: Graphics)Julia 0.3 Base.Graphics docs."
},

{
    "location": "autodocs/#Graphics.BoundingBox",
    "page": "Docstrings",
    "title": "Graphics.BoundingBox",
    "category": "type",
    "text": "BoundingBox(xmin, xmax, ymin, ymax) -> bb\n\nCreate a representation bb of a rectangular region, specifying the coordinates of the horizontal (x) and vertical (y) edges.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.BoundingBox-Tuple{BoundingBox,Vararg{BoundingBox,N} where N}",
    "page": "Docstrings",
    "title": "Graphics.BoundingBox",
    "category": "method",
    "text": "BoundingBox(bb0::BoundingBox, bboxes::BoundingBox...) -> bb\n\nCompute the BoundingBox bb that minimally encloses all of the input boxes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.BoundingBox-Tuple{Vec2,Vararg{Vec2,N} where N}",
    "page": "Docstrings",
    "title": "Graphics.BoundingBox",
    "category": "method",
    "text": "BoundingBox(p0::Point, points::Point...) -> bb\n\nCompute the BoundingBox bb that minimally encloses all of the input points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.Point",
    "page": "Docstrings",
    "title": "Graphics.Point",
    "category": "type",
    "text": "Point(x, y) -> p\n\nCreate a Cartesian representation p of a point in two dimensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.Vec2",
    "page": "Docstrings",
    "title": "Graphics.Vec2",
    "category": "type",
    "text": "Vec2(x, y) -> v\n\nCreate a Cartesian representation v of a vector (or point) in two dimensions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.aspect_ratio-Tuple{Any}",
    "page": "Docstrings",
    "title": "Graphics.aspect_ratio",
    "category": "method",
    "text": "aspect_ratio(bb::BoundingBox) -> r\n\nCompute the ratio r of the height and width of bb.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.deform-Tuple{BoundingBox,Any,Any,Any,Any}",
    "page": "Docstrings",
    "title": "Graphics.deform",
    "category": "method",
    "text": "deform(bb::BoundingBox, Δl, Δr, Δt, Δb) -> bbnew\n\nAdd Δl (left), Δr (right), Δt (top), and Δb (bottom) to the edges of a BoundingBox.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.inner_canvas-Tuple{GraphicsContext,BoundingBox,BoundingBox}",
    "page": "Docstrings",
    "title": "Graphics.inner_canvas",
    "category": "method",
    "text": "inner_canvas(c::GraphicsContext, device::BoundingBox, user::BoundingBox)\ninner_canvas(c::GraphicsContext, x, y, w, h, l, r, t, b)\n\nCreate a rectangular drawing area inside device (represented in device-coordinates), giving it user-coordinates user. Any drawing that occurs outside this box is clipped.\n\nx, y, w, and h are an alternative parametrization of device, and l, r, t, b parametrize user.\n\nSee also: set_coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.isinside-Tuple{BoundingBox,Any,Any}",
    "page": "Docstrings",
    "title": "Graphics.isinside",
    "category": "method",
    "text": "isinside(bb::BoundingBox, p::Point) -> tf::Bool\nisinside(bb::BoundingBox, x, y) -> tf::Bool\n\nDetermine whether the point lies within bb.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.rotate-Tuple{BoundingBox,Real,Vec2}",
    "page": "Docstrings",
    "title": "Graphics.rotate",
    "category": "method",
    "text": "rotate(bb::BoundingBox, angle, o) -> bbnew\n\nRotate bb around o by angle, returning the BoundingBox that encloses the vertices of the rotated box.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.rotate-Tuple{Vec2,Real,Vec2}",
    "page": "Docstrings",
    "title": "Graphics.rotate",
    "category": "method",
    "text": "rotate(p::Vec2, angle::Real, o::Vec2) -> pnew\n\nRotate p around o by angle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.set_coordinates-Tuple{GraphicsContext,BoundingBox,BoundingBox}",
    "page": "Docstrings",
    "title": "Graphics.set_coordinates",
    "category": "method",
    "text": "set_coordinates(c::GraphicsContext, device::BoundingBox, user::BoundingBox)\nset_coordinates(c::GraphicsContext, user::BoundingBox)\n\nSet the device->user coordinate transformation of c so that device, expressed in \"device coordinates\" (pixels), is equivalent to user as expressed in \"user coordinates\". If device is omitted, it defaults to the full span of c, BoundingBox(0, width(c), 0, height(c)).\n\nSee also get_matrix, set_matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Graphics.shift-Tuple{BoundingBox,Any,Any}",
    "page": "Docstrings",
    "title": "Graphics.shift",
    "category": "method",
    "text": "shift(bb::BoundingBox, Δx, Δy) -> bbnew\n\nShift center by (Δx,Δy), keeping width & height fixed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.:&-Tuple{BoundingBox,BoundingBox}",
    "page": "Docstrings",
    "title": "Base.:&",
    "category": "method",
    "text": "bb1 & bb2 -> bb\n\nCompute the intersection of two BoundingBoxes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.:*-Tuple{BoundingBox,Real}",
    "page": "Docstrings",
    "title": "Base.:*",
    "category": "method",
    "text": "s*bb -> bbnew\nbb*s -> bbnew\n\nScale width & height of BoundingBox bb by s, keeping center fixed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.:+-Tuple{BoundingBox,BoundingBox}",
    "page": "Docstrings",
    "title": "Base.:+",
    "category": "method",
    "text": "bb1 + bb2 -> bb\n\nCompute the BoundingBox bb that minimally contains bb1 and bb2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Graphics]\nOrder = [:type, :function]"
},

]}
