var documenterSearchIndex = {"docs": [

{
    "location": "#ImageView.CLim",
    "page": "Home",
    "title": "ImageView.CLim",
    "category": "type",
    "text": "CLim(cmin, cmax)\n\nSpecify contrast limits where x <= cmin will be rendered as black, and x >= cmax will be rendered as white.\n\n\n\n\n\n"
},

{
    "location": "#ImageView.canvasgrid",
    "page": "Home",
    "title": "ImageView.canvasgrid",
    "category": "function",
    "text": "grid, frames, canvases = canvasgrid((ny, nx))\n\nCreate a grid of ny-by-nx canvases for drawing. grid is a GtkGrid layout, frames is an ny-by-nx array of GtkAspectRatioFrames that contain each canvas, and canvases is an ny-by-nx array of canvases.\n\n\n\n\n\n"
},

{
    "location": "#ImageView.imlink-Tuple",
    "page": "Home",
    "title": "ImageView.imlink",
    "category": "method",
    "text": "imlink(imgs...; gridsize=(1,length(imgs)), dims=(1,2))\n\nShow multiple images in a single window, linking higher-dimensional axes to shared GUI control(s).\n\n\n\n\n\n"
},

{
    "location": "#ImageView.imshow!-Union{Tuple{T}, Tuple{Canvas{UserUnit},Signal,Signal{ZoomRegion{T}}}, Tuple{Canvas{UserUnit},Signal,Signal{ZoomRegion{T}},Signal{Dict{UInt64,Any}}}} where T<:Union{RSigned, RUnsigned}",
    "page": "Home",
    "title": "ImageView.imshow!",
    "category": "method",
    "text": "imshow!(canvas, img) -> drawsignal\nimshow!(canvas, img::Signal, zr::Signal{ZoomRegion}) -> drawsignal\nimshow!(frame::Frame, canvas, img::Signal, zr::Signal{ZoomRegion}) -> drawsignal\nimshow!(..., annotations=Signal(Dict{UInt,Any}()))\n\nDisplay the image img, in the specified canvas. Use the version with zr if you have already turned on rubber-banding or other pan/zoom interactivity for canvas. Returns the Reactive drawsignal used for updating the canvas.\n\nIf you supply frame, then the pixel aspect ratio will be set to that of pixelspacing(img).\n\nWith any of these forms, you may optionally supply annotations.\n\nThis only creates the draw method for canvas; mouse- or key-based interactivity can be set up via imshow or, at a lower level, using GtkReactive\'s tools:\n\ninit_zoom_rubberband\ninit_zoom_scroll\ninit_pan_scroll\ninit_pan_drag\n\nExample\n\n```julia using ImageView, GtkReactive, Gtk.ShortNames, TestImages\n\nCreate a window with a canvas in it\n\nwin = Window() c = canvas(UserUnit) push!(win, c) Gtk.showall(win)\n\nLoad images\n\nmri = testimage(\"mri\")\n\nDisplay the image\n\nimshow!(c, mri[:,:,1])\n\nUpdate with a different image\n\nimshow!(c, mri[:,:,8])\n\n\n\n\n\n"
},

{
    "location": "#ImageView.imshow-Tuple{AbstractArray}",
    "page": "Home",
    "title": "ImageView.imshow",
    "category": "method",
    "text": "imshow(img; axes=(1,2), name=\"ImageView\") -> guidict\nimshow(img, clim; axes=(1,2), name=\"ImageView\") -> guidict\nimshow(img, clim, zoomregion, slicedata, annotations; axes=(1,2), name=\"ImageView\") -> guidict\n\nDisplay the image img in a new window titled with name, returning a dictionary guidict containing any Reactive signals or GtkReactive widgets. If the image is 3 or 4 dimensional, GUI controls will be added for slicing along \"extra\" axes. By default the two-dimensional slice containing axes 1 and 2 are shown, but that can be changed by passing a different setting for axes.\n\nIf the image is grayscale, by default contrast is set by a scaleminmax object whose end-points can be modified by right-clicking on the image. If clim == nothing, the image\'s own native contrast is used (clamp01nan).  You may also pass a custom contrast function.\n\nFinally, you may specify GtkReactive.ZoomRegion and SliceData signals. See also roi, as well as any annotations that you wish to apply.\n\n\n\n\n\n"
},

{
    "location": "#ImageView.imshow-Tuple{}",
    "page": "Home",
    "title": "ImageView.imshow",
    "category": "method",
    "text": "imshow()\n\nChoose an image to display via a file dialog.\n\n\n\n\n\n"
},

{
    "location": "#ImageView.imshow-Union{Tuple{T}, Tuple{Canvas{UserUnit},Signal}, Tuple{Canvas{UserUnit},Signal,Signal{ZoomRegion{T}}}, Tuple{Canvas{UserUnit},Signal,Signal{ZoomRegion{T}},Signal{Dict{UInt64,Any}}}} where T<:Union{RSigned, RUnsigned}",
    "page": "Home",
    "title": "ImageView.imshow",
    "category": "method",
    "text": "imshow(canvas, imgsig::Signal) -> guidict\nimshow(canvas, imgsig::Signal, zr::Signal{ZoomRegion}) -> guidict\nimshow(frame::Frame, canvas, imgsig::Signal, zr::Signal{ZoomRegion}) -> guidict\n\nDisplay imgsig (a Signal of an image) in canvas, setting up panning and zooming. Optionally include a frame for preserving aspect ratio. imgsig must be two-dimensional (but can be a Signal-view of a higher-dimensional object).\n\nExample\n\nusing ImageView, TestImages, Gtk\nmri = testimage(\"mri\");\n# Create a canvas `c`. There are other approaches, like stealing one from a previous call\n# to `imshow`, or using GtkReactive directly.\nguidict = imshow_gui((300, 300))\nc = guidict[\"canvas\"];\n# To see anything you have to call `showall` on the window (once)\nGtk.showall(guidict[\"window\"])\n# Create the image Signal\nimgsig = Signal(mri[:,:,1]);\n# Show it\nimshow(c, imgsig)\n# Now anytime you want to update, just push! a new image\npush!(imgsig, mri[:,:,8])\n\n\n\n\n\n"
},

{
    "location": "#ImageView.imshow_gui",
    "page": "Home",
    "title": "ImageView.imshow_gui",
    "category": "function",
    "text": "guidict = imshow_gui(canvassize; name=\"ImageView\", aspect=:auto)\nguidict = imshow_gui(canvassize, slicedata, gridsize=(1,1); name=\"ImageView\", aspect=:auto)\n\nCreate an image-viewer GUI. By default creates a single canvas, but with custom gridsize you can create a grid of canvases. canvassize = (szx, szy) describes the desired size of the (or each) canvas. slicedata is an object created by roi that encodes the necessary information for creating player widgets for viewing multidimensional images.\n\n\n\n\n\n"
},

{
    "location": "#ImageView.roi-Tuple{Any}",
    "page": "Home",
    "title": "ImageView.roi",
    "category": "method",
    "text": "roi(A) -> zr::Signal(ZoomRegion), slicedata::SliceData\nroi(A, dims=(1,2)) -> zr::Signal(ZoomRegion), slicedata::SliceData\nroi(A, (:namey, :namex)) -> zr::Signal(ZoomRegion), slicedata::SliceData\n\nCreate the initial \"region of interest\" for viewing A. For multidimensional objects, optionally select two dimensions (the first two, by default) for slicing. The outputs zr and slicedata describe the within-view and player-controlled axes, respectively.\n\nSee also: slice2d.\n\n\n\n\n\n"
},

{
    "location": "#ImageView.scalebar-Tuple{Dict,Any}",
    "page": "Home",
    "title": "ImageView.scalebar",
    "category": "method",
    "text": "scalebar(guidict::Dict, length; x = 0.8, y = 0.1, color = RGB(1,1,1))\n\nAdd a scale bar annotation to the image display controlled by guidict (returned by imshow). If the pixelspacing of the image is set using Unitful quantities, length should also be expressed in physical units.\n\nx and y control the placement of the scalebar, and color its rendered color.\n\n\n\n\n\n"
},

{
    "location": "#ImageView.slice2d-Tuple{Any,GtkReactive.ZoomRegion,ImageView.SliceData{false,N,Axs} where Axs where N}",
    "page": "Home",
    "title": "ImageView.slice2d",
    "category": "method",
    "text": "slice2d(A, zr, sd) -> A2\n\nCreate a two-dimensional slice A2 using the current ZoomRegion zr and SliceData sd.\n\n\n\n\n\n"
},

{
    "location": "#ImageView.SliceData-Union{Tuple{N}, Tuple{transpose}, Tuple{Tuple{Vararg{Signal{Int64},N}},Tuple{Vararg{Axis,N}}}} where N where transpose",
    "page": "Home",
    "title": "ImageView.SliceData",
    "category": "method",
    "text": "SliceData{transpose::Bool}(signals::NTuple{N,Signal{Int}}, axes::NTuple{N,Axes})\n\nSpecify slice information for a (possibly) multidimensional image. signals hold the currently-selected slices for the selected axes, all of which are effectively \"orthogonal\" to the plane in the viewer.\n\n\n\n\n\n"
},

{
    "location": "#ImageView.canvas_size-Tuple{Gtk.GtkWindowLeaf,Any}",
    "page": "Home",
    "title": "ImageView.canvas_size",
    "category": "method",
    "text": "canvas_size(win, requested_size) -> (xsz, ysz)\ncanvas_size(screensize, requested_size) -> (xsz, ysz)\n\nLimit the requested canvas size by the screen size. Both the output and screensize are supplied in Gtk order (x, y).\n\nWhen supplying a GtkWindow win, the canvas size is limited to 60% of the total screen size.\n\n\n\n\n\n"
},

{
    "location": "#ImageView.closeall-Tuple{}",
    "page": "Home",
    "title": "ImageView.closeall",
    "category": "method",
    "text": "closeall()\n\nCloses all windows opened by ImageView2.\n\n\n\n\n\n"
},

{
    "location": "#ImageView.default_canvas_size",
    "page": "Home",
    "title": "ImageView.default_canvas_size",
    "category": "function",
    "text": "default_canvas_size(imagesize, pixelaspectratio=1) -> (xsz, ysz)\n\nCompute the canvas size for an image of size imagesize with the defined pixelaspectratio. Note that imagesize is supplied in coordinate order, i.e., (y, x) order, whereas the returned canvas size is in Gtk order, i.e., (x, y) order.\n\n\n\n\n\n"
},

{
    "location": "#ImageView.imshowlabeled-Tuple{AbstractArray,AbstractArray}",
    "page": "Home",
    "title": "ImageView.imshowlabeled",
    "category": "method",
    "text": "imshowlabeled(img, label)\n\nDisplay img, but showing the pixel\'s label rather than the color value in the status bar.\n\n\n\n\n\n"
},

{
    "location": "#ImageView.normalized_lengths-Tuple{AbstractArray{T,2} where T,Any,Any}",
    "page": "Home",
    "title": "ImageView.normalized_lengths",
    "category": "method",
    "text": "wnorm, hnorm = normalized_lengths(img, width, height)\n\nConvert absolute width and height into normalized variants. Depends on the pixelspacing of img.\n\n\n\n\n\n"
},

{
    "location": "#ImageView.sliceinds-Tuple{Any,Any,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "ImageView.sliceinds",
    "category": "method",
    "text": "inds = sliceinds(img, roi, slices...)\ninds = sliceinds(axs, roi, slices...)\n\nReturn an indices-tuple inds that selects the region-of-interest roi at particular slices along orthogonal coordinates. Use AxisArrays.Axis to indicate out-of-order axes, either by dimension number (e.g., Axis{3}) or by name (Axis{:z}). If you\'re using dimension numbers, slices must list them in increasing order.\n\nExamples:\n\njulia> using AxisArrays: Axis\n\n# Mimic a 4d array\njulia> axs = (1:1080, 1:1920, 1:20, 1:1000)\n(1:1080, 1:1920, 1:20, 1:1000)\n\njulia> ImageView.sliceinds(axs, (6:10, 1:5), Axis{3}(7), Axis{4}(15))\n(6:10, 1:5, 7, 15)\n\njulia> ImageView.sliceinds(axs, (6:10, 1:5), Axis{2}(7), Axis{4}(15))\n(6:10, 7, 1:5, 15)\n\n# Mimic a 4d AxisArray\njulia> axs = (Axis{:y}(1:1080), Axis{:x}(1:1920), Axis{:z}(1:20), Axis{:t}(1:1000))\n(Axis{:y,UnitRange{Int64}}(1:1080), Axis{:x,UnitRange{Int64}}(1:1920), Axis{:z,UnitRange{Int64}}(1:20), Axis{:t,UnitRange{Int64}}(1:1000))\n\njulia> ImageView.sliceinds(axs, (6:10, 1:5), Axis{:t}(15), Axis{:z}(7))   # out-of-order OK\n(6:10, 1:5, 7, 15)\n\njulia> ImageView.sliceinds(axs, (6:10, 1:5), Axis{:y}(15), Axis{:z}(7))\n(15, 6:10, 7, 1:5)\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ImageView]\nOrder = [:type, :function]"
},

]}
