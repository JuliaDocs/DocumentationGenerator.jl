var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ImageSegmentation-1",
    "page": "Readme",
    "title": "ImageSegmentation",
    "category": "section",
    "text": "Julia package for multiple Image Segmentation Algorithms(Image: Build Status)Read the documentation here:(Image: )"
},

{
    "location": "autodocs/#ImageSegmentation.ImageEdge",
    "page": "Docstrings",
    "title": "ImageSegmentation.ImageEdge",
    "category": "type",
    "text": "edge = ImageEdge(index1, index2, weight)\n\nConstruct an edge in a Region Adjacency Graph. index1 and index2 are the integers corresponding to individual pixels/voxels (in the sense of linear indexing via sub2ind), and weight is the edge weight (measures the dissimilarity between pixels/voxels).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.SegmentedImage",
    "page": "Docstrings",
    "title": "ImageSegmentation.SegmentedImage",
    "category": "type",
    "text": "SegmentedImage type contains the index-label mapping, assigned labels, segment mean intensity and pixel count of each segment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.fast_scanning-Union{Tuple{N}, Tuple{CT}, Tuple{AbstractArray{CT,N},Union{Real, AbstractArray}}, Tuple{AbstractArray{CT,N},Union{Real, AbstractArray},Function}} where N where CT<:Union{Real, Colorant}",
    "page": "Docstrings",
    "title": "ImageSegmentation.fast_scanning",
    "category": "method",
    "text": "seg_img = fast_scanning(img, threshold, [diff_fn])\n\nSegments the N-D image using a fast scanning algorithm and returns a SegmentedImage containing information about the segments.\n\nArguments:\n\nimg         : N-D image to be segmented (arbitrary axes are allowed)\nthreshold   : Upper bound of the difference measure (δ) for considering                 pixel into same segment; an AbstractArray can be passed                 having same number of dimensions as that of img for adaptive                 thresholding\ndiff_fn     : (Optional) Function that returns a difference measure (δ)                 between the mean color of a region and color of a point\n\nExamples:\n\njulia> img = zeros(Float64, (3,3));\n\njulia> img[2,:] .= 0.5;\n\njulia> img[:,2] .= 0.6;\n\njulia> seg = fast_scanning(img, 0.2);\n\njulia> labels_map(seg)\n3×3 Array{Int64,2}:\n 1  4  5\n 4  4  4\n 3  4  6\n\nCitation:\n\nJian-Jiun Ding, Cheng-Jin Kuo, Wen-Chih Hong, \"An efficient image segmentation technique by fast scanning and adaptive merging\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.felzenszwalb",
    "page": "Docstrings",
    "title": "ImageSegmentation.felzenszwalb",
    "category": "function",
    "text": "segments                = felzenszwalb(img, k, [min_size])\nindex_map, num_segments = felzenszwalb(edges, num_vertices, k, [min_size])\n\nSegments an image using Felzenszwalb\'s graph-based algorithm. The function can be used in either of two ways -\n\nsegments = felzenszwalb(img, k, [min_size])\n\nSegments an image using Felzenszwalb\'s segmentation algorithm and returns the result as SegmentedImage. The algorithm uses euclidean distance in color space as edge weights for the region adjacency graph.\n\nParameters:\n\nimg            = input image\nk              = Threshold for region merging step. Larger threshold will result in bigger segments.\nmin_size       = Minimum segment size\n\nindex_map, num_segments = felzenszwalb(edges, num_vertices, k, [min_size])\n\nSegments an image represented as Region Adjacency Graph(RAG) using Felzenszwalb\'s segmentation algorithm. Each pixel/region  corresponds to a node in the graph and weights on each edge measure the dissimilarity between pixels. The function returns the number of segments and index mapping from nodes of the RAG to segments.\n\nParameters:\n\nedges          = Array of edges in RAG. Each edge is represented as ImageEdge.\nnum_vertices   = Number of vertices in RAG\nk              = Threshold for region merging step. Larger threshold will result in bigger segments.\nmin_size       = Minimum segment size\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.hmin_transform-Union{Tuple{N}, Tuple{T}, Tuple{Array{T,N},Real}} where N where T<:Union{Number, Color{T,1} where T}",
    "page": "Docstrings",
    "title": "ImageSegmentation.hmin_transform",
    "category": "method",
    "text": "out = hmin_transform(img, h)\n\nSuppresses all minima in grayscale image whose depth is less than h.\n\nH-minima transform is defined as the reconstruction by erosion of (img + h) by img. See Morphological image analysis by Soille pg 170-172.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.labels_map-Tuple{SegmentedImage}",
    "page": "Docstrings",
    "title": "ImageSegmentation.labels_map",
    "category": "method",
    "text": "img_labeled = labels_map(seg)\n\nReturn an array containing the label assigned to each pixel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.meanshift-Union{Tuple{CT}, Tuple{Array{CT,2},Real,Real}} where CT",
    "page": "Docstrings",
    "title": "ImageSegmentation.meanshift",
    "category": "method",
    "text": "segments                = meanshift(img, spatial_radius, range_radius; iter=50, eps=0.01))\n\nSegments the image using meanshift clustering. Returns a SegmentedImage.\n\nParameters:\n\nimg                            = input grayscale image\nspatialradius/rangeradius    = bandwidth parameters of truncated normal kernel. Controlling the size of the kernel determines the resolution of the mode detection.\niter/eps                       = stopping criterion for meanshift procedure. The algorithm stops after iter iterations or if kernel center moves less than eps distance in an update step, whichever comes first.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.prune_segments-Tuple{SegmentedImage,Function,Function}",
    "page": "Docstrings",
    "title": "ImageSegmentation.prune_segments",
    "category": "method",
    "text": "new_seg = prune_segments(seg, rem_labels, diff_fn)\n\nRemoves all segments that have labels in rem_labels replacing them with their neighbouring segment having least diff_fn. rem_labels is a Vector of labels.\n\nnew_seg = prune_segments(seg, is_rem, diff_fn)\n\nRemoves all segments for which is_rem returns true replacing them with their neighbouring segment having least diff_fn.\n\nis_rem(label) -> Bool\n\nReturns true if label label is to be removed otherwise false.\n\nd = diff_fn(rem_label, neigh_label)\n\nA difference measure between label to be removed and its neighbors. isless must be defined for objects of the type of d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.region_adjacency_graph-Tuple{SegmentedImage,Function}",
    "page": "Docstrings",
    "title": "ImageSegmentation.region_adjacency_graph",
    "category": "method",
    "text": "G, vert_map = region_adjacency_graph(seg, weight_fn)\n\nConstructs a region adjacency graph (RAG) from the SegmentedImage. It returns the RAG along with a Dict(label=>vertex) map. weight_fn is used to assign weights to the edges.\n\nweight_fn(label1, label2)\n\nReturns a real number corresponding to the weight of the edge between label1 and label2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.region_splitting-Union{Tuple{T}, Tuple{N}, Tuple{AbstractArray{T,N},Function}} where T<:Union{Real, Colorant} where N",
    "page": "Docstrings",
    "title": "ImageSegmentation.region_splitting",
    "category": "method",
    "text": "seg = region_splitting(img, homogeneous)\n\nSegments img by recursively splitting it until all the segments are homogeneous.\n\nb = homogeneous(img)\n\nReturns true if img is homogeneous.\n\nExamples\n\njulia> img = 0.1*rand(6, 6);\n\njulia> img[4:end, 4:end] .+= 10;\n\njulia> function homogeneous(img)\n           min, max = extrema(img)\n           max - min < 0.2\n       end\nhomogeneous (generic function with 1 method)\n\njulia> seg = region_splitting(img, homogeneous);\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.region_tree-Union{Tuple{N}, Tuple{T}, Tuple{AbstractArray{T,N},Function}} where N where T<:Union{Real, Colorant}",
    "page": "Docstrings",
    "title": "ImageSegmentation.region_tree",
    "category": "method",
    "text": "t = region_tree(img, homogeneous)\n\nCreates a region tree from img by splitting it recursively until all the regions are homogeneous.\n\nb = homogeneous(img)\n\nReturns true if img is homogeneous.\n\nExamples\n\njulia> img = 0.1*rand(6, 6);\n\njulia> img[4:end, 4:end] .+= 10;\n\njulia> function homogeneous(img)\n           min, max = extrema(img)\n           max - min < 0.2\n       end\nhomogeneous (generic function with 1 method)\n\njulia> t = region_tree(img, homogeneous);\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.rem_segment!-Tuple{SegmentedImage,Int64,Function}",
    "page": "Docstrings",
    "title": "ImageSegmentation.rem_segment!",
    "category": "method",
    "text": "rem_segment!(seg, label, diff_fn)\n\nIn place removal of the segment having label label, replacing it with the neighboring segment having least diff_fn value.\n\nd = diff_fn(rem_label, neigh_label)\n\nA difference measure between label to be removed and its neighbors. isless must be defined for objects of the type of d.\n\nExamples\n\n    # This removes the label `l` and replaces it with the label of\n    # neighbor having maximum pixel count.\n    julia> rem_segment!(seg, l, (i,j)->(-seg.segment_pixel_count[j]))\n\n    # This removes the label `l` and replaces it with the label of\n    # neighbor having the least value of euclidian metric.\n    julia> rem_segment!(seg, l, (i,j)->sum(abs2, seg.segment_means[i]-seg.segment_means[j]))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.rem_segment-Tuple{SegmentedImage,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "ImageSegmentation.rem_segment",
    "category": "method",
    "text": "new_seg = rem_segment(seg, label, diff_fn)\n\nRemoves the segment having label label and returns the new SegmentedImage. For more info, see remove_segment!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.seeded_region_growing-Union{Tuple{N}, Tuple{CT}, Tuple{AbstractArray{CT,N},AbstractArray{Tuple{CartesianIndex{N},Int64},1}}, Tuple{AbstractArray{CT,N},AbstractArray{Tuple{CartesianIndex{N},Int64},1},Union{Array{Int64,1}, Tuple{Vararg{Int64,N}}}}, Tuple{AbstractArray{CT,N},AbstractArray{Tuple{CartesianIndex{N},Int64},1},Union{Array{Int64,1}, Tuple{Vararg{Int64,N}}},Function}} where N where CT<:Union{Real, Colorant}",
    "page": "Docstrings",
    "title": "ImageSegmentation.seeded_region_growing",
    "category": "method",
    "text": "seg_img = seeded_region_growing(img, seeds, [kernel_dim], [diff_fn])\nseg_img = seeded_region_growing(img, seeds, [neighbourhood], [diff_fn])\n\nSegments the N-D image img using the seeded region growing algorithm and returns a SegmentedImage containing information about the segments.\n\nArguments:\n\nimg             :  N-D image to be segmented (arbitrary axes are allowed)\nseeds           :  Vector containing seeds. Each seed is a Tuple of a                      CartesianIndex{N} and a label. See below note for more                      information on labels.\nkernel_dim      :  (Optional) Vector{Int} having length N or a NTuple{N,Int}                      whose ith element is an odd positive integer representing                      the length of the ith edge of the N-orthotopic neighbourhood\nneighbourhood   :  (Optional) Function taking CartesianIndex{N} as input and                      returning the neighbourhood of that point.\ndiff_fn         :  (Optional) Function that returns a difference measure(δ)                      between the mean color of a region and color of a point\n\nnote: Note\nThe labels attached to points must be positive integers, although multiple points can be assigned the same label. The output includes a labelled array that has same indexing as that of input image. Every index is assigned to either one of labels or a special label \'0\' indicating that the algorithm was unable to assign that index to a unique label.\n\nExamples\n\njulia> img = zeros(Gray{N0f8},4,4);\n\njulia> img[2:4,2:4] .= 1;\n\njulia> seeds = [(CartesianIndex(3,1),1),(CartesianIndex(2,2),2)];\n\njulia> seg = seeded_region_growing(img, seeds);\n\njulia> labels_map(seg)\n4×4 Array{Int64,2}:\n 1  1  1  1\n 1  2  2  2\n 1  2  2  2\n 1  2  2  2\n\nCitation:\n\nAlbert Mehnert, Paul Jackaway (1997), \"An improved seeded region growing algorithm\", Pattern Recognition Letters 18 (1997), 1065-1071\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.segment_labels-Tuple{SegmentedImage}",
    "page": "Docstrings",
    "title": "ImageSegmentation.segment_labels",
    "category": "method",
    "text": "labels = segment_labels(seg)\n\nReturns the list of assigned labels\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.segment_mean-Tuple{SegmentedImage,Int64}",
    "page": "Docstrings",
    "title": "ImageSegmentation.segment_mean",
    "category": "method",
    "text": "m = segment_mean(seg, l)\n\nReturns the mean intensity of label l. If no label is supplied, it returns a Dict(label=>mean) of all the labels.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.segment_pixel_count-Tuple{SegmentedImage,Int64}",
    "page": "Docstrings",
    "title": "ImageSegmentation.segment_pixel_count",
    "category": "method",
    "text": "c = segment_pixel_count(seg, l)\n\nReturns the count of pixels that are assigned label l. If no label is supplied, it returns a Dict(label=>pixel_count) of all the labels.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.unseeded_region_growing-Union{Tuple{N}, Tuple{CT}, Tuple{AbstractArray{CT,N},Real}, Tuple{AbstractArray{CT,N},Real,Union{Array{Int64,1}, Tuple{Vararg{Int64,N}}}}, Tuple{AbstractArray{CT,N},Real,Union{Array{Int64,1}, Tuple{Vararg{Int64,N}}},Function}} where N where CT<:ColorTypes.Colorant",
    "page": "Docstrings",
    "title": "ImageSegmentation.unseeded_region_growing",
    "category": "method",
    "text": "seg_img = unseeded_region_growing(img, threshold, [kernel_dim], [diff_fn])\nseg_img = unseeded_region_growing(img, threshold, [neighbourhood], [diff_fn])\n\nSegments the N-D image using automatic (unseeded) region growing algorithm and returns a SegmentedImage containing information about the segments.\n\nArguments:\n\nimg             :  N-D image to be segmented (arbitrary axes are allowed)\nthreshold       :  Upper bound of the difference measure (δ) for considering                      pixel into same segment\nkernel_dim      :  (Optional) Vector{Int} having length N or a NTuple{N,Int}                      whose ith element is an odd positive integer representing                      the length of the ith edge of the N-orthotopic neighbourhood\nneighbourhood   :  (Optional) Function taking CartesianIndex{N} as input and                      returning the neighbourhood of that point.\ndiff_fn         :  (Optional) Function that returns a difference measure (δ)                      between the mean color of a region and color of a point\n\nExamples\n\njulia> img = zeros(Gray{N0f8},4,4);\n\njulia> img[2:4,2:4] .= 1;\n\njulia> seg = unseeded_region_growing(img, 0.2);\n\njulia> labels_map(seg)\n4×4 Array{Int64,2}:\n 1  1  1  1\n 1  2  2  2\n 1  2  2  2\n 1  2  2  2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageSegmentation.watershed-Union{Tuple{N}, Tuple{S}, Tuple{T}, Tuple{AbstractArray{T,N},AbstractArray{S,N}}} where N where S<:Integer where T<:Union{Number, Color{T,1} where T}",
    "page": "Docstrings",
    "title": "ImageSegmentation.watershed",
    "category": "method",
    "text": "segments                = watershed(img, markers)\n\nSegments the image using watershed transform. Each basin formed by watershed transform corresponds to a segment. If you are using image local minimas as markers, consider using hmin_transform to avoid oversegmentation.\n\nParameters:\n\nimg            = input grayscale image\nmarkers        = An array (same size as img) with each region\'s marker assigned a index starting from 1. Zero means not a marker.                     If two markers have the same index, their regions will be merged into a single region.                     If you have markers as a boolean array, use label_components.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ImageSegmentation]\nOrder = [:type, :function]"
},

]}
