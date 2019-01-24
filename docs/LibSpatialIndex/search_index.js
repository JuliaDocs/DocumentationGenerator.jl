var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LibSpatialIndex-1",
    "page": "Readme",
    "title": "LibSpatialIndex",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)LibSpatialIndex.jl is a julia wrapper around the C API of libspatialindex, for spatially indexing kD bounding box data."
},

{
    "location": "#Quick-Guide-1",
    "page": "Readme",
    "title": "Quick Guide",
    "category": "section",
    "text": "A new RTree with 2 dimensions can be created using this package as follows:import LibSpatialIndex\nrtree = LibSpatialIndex.RTree(2)"
},

{
    "location": "#Insertion-1",
    "page": "Readme",
    "title": "Insertion",
    "category": "section",
    "text": "Items can be inserted using the insert! method, whereLibSpatialIndex.insert!(rtree, 1, [0.,0.], [1.,1.])\nLibSpatialIndex.insert!(rtree, 2, [0.,0.], [2.,2.])inserts two items,the first with id 1, associated with the box specified by [xmin=0.0,ymin=0.0] and [xmax=1.0,ymax=1.0].\nthe second with id 2, associated with the box specified by [xmin=0.0,ymin=0.0] and [xmax=2.0,ymax=2.0]."
},

{
    "location": "#Queries-1",
    "page": "Readme",
    "title": "Queries",
    "category": "section",
    "text": "Thereafter, you can perform queries on the rtree using either (i) intersects(rtree, minvalues, maxvalues) for all items intersecting the box specified by minvalues and maxvalues, or (ii) knn(rtree, minvalues, maxvalues, k) for the k nearest items in rtree to the box specified by minvalues and maxvalues."
},

{
    "location": "#Intersection-1",
    "page": "Readme",
    "title": "Intersection",
    "category": "section",
    "text": "So for instance,LibSpatialIndex.intersects(rtree, [0.,0.],[1.,1.])will return the vector [1,2] on the rtree constructed earlier, to indicate that items with ids 1 and 2 intersects the box specified by [xmin=0.0,ymin=0.0] and [xmax=1.0,ymax=1.0].You can also perform queries on an individual point, so LibSpatialIndex.intersects(rtree, [1.,1.])will return the ids [1,2] in the rtree constructed earlier, andLibSpatialIndex.intersects(rtree, [2.,2.])will only return the vector [2], because item 1 does not contain the point [2,2]."
},

{
    "location": "#k-Nearest-Neighbors-1",
    "page": "Readme",
    "title": "k Nearest Neighbors",
    "category": "section",
    "text": "For knn queries,LibSpatialIndex.knn(rtree, [2.,2.], 1)returns the vector [2] because the item with id 2 is closest to the point [2.0, 2.0], andsort(LibSpatialIndex.knn(rtree, [2.,2.], 2))returns the vector [1,2]. If the value of k exceeds the number of items in the rtree, then fewer than k items will be returned, sosort(SI.knn(rtree, [2.,2.], 3))will return the vector [1,2]."
},

{
    "location": "autodocs/#LibSpatialIndex.RTree",
    "page": "Docstrings",
    "title": "LibSpatialIndex.RTree",
    "category": "type",
    "text": "The RTree index [guttman84] is a balanced tree structure that consists of index nodes, leaf nodes and data.\n\nEvery node (leaf and index) has a fixed capacity of entries, (the node capacity) chosen at index creation An RTree abstracts the data with their Minimum Bounding Region (MBR) and clusters these MBRs according to various heuristics in the leaf nodes. Queries are evaluated from the root of the tree down the leaves. Since the index is balanced nodes can be under full. They cannot be empty though. A fillfactor specifies the minimum number of entries allowed in any node. The fill factor is usually close to 70%.\n\nOptions\n\nndim: Dimensionality of the data that will be inserted.\nindextype: one of RT_RTree (default), RT_MVRTree, or RT_TPRTree.\nvariant: one of RT_Linear, RT_Quadratic, or RT_Star (default).\nstorage: one of RT_Memory (default), RT_Disk, or RT_Custom.\nindexcapacity: The index node capacity. Default is 100.\nleafcapacity: The leaf node capacity. Default is 100.\nleafpoolcapacity: Default is 100.\nindexpoolcapacity: Default is 100.\nregionpoolcapacity: Default is 1000.\npointpoolcapacity: Default is 500.\ntightMBR: Default is true.\nnearminimumoverlapfactor: Default is 32.\nfillfactor: The fill factor. Default is 0.7.\nsplitdistributionfactor: Default is 0.4.\nreinsertfactor: Default is 0.3.\n\nPerformance\n\nDataset size, data density, etc. have nothing to do with capacity and page size. What you are trying to achieve is fast reads from the disk and take advantage of disk buffering and prefetching.\n\nNormally, you select the page size to be equal to the disk page size (depends on how you format the drive). Then you choose the node capacity to be enough to fill the whole page (including data entries if you have any).\n\nThere is a tradeoff though in making node capacity too large. The larger the capacity, the longer the “for loops” for inserting, deleting, locating node entries take (CPU time). On the other hand, the larger the capacity the shorter the tree becomes, reducing the number of random IOs to reach the leaves. Hence, you might want to fit multiple nodes (of smaller capacity) inside a single page to balance I/O and CPU cost, in case your disk page size is too large.\n\nFinally, if you have enough buffer space to fit most of the index nodes in main memory, then large capacities do not make too much sense, because the height of the tree does not matter any more. Of course, the smaller the capacity, the larger the number of leaf nodes you will have to retrieve from disk for range queries (point queries and nearest neighbor queries will not suffer that much). So very small capacities hurt as well.\n\nThere is another issue when trying to fit multiple nodes per page: Leftover space. You might have leftover space due to data entries that do not have a fixed size. Unfortunately, in that case, leftover space per page is lost, negatively impacting space usage.\n\nSelecting the right page size is easy; make it equal to the disk page size. Selecting the right node capacity is an art.\n\nReferences\n\n[guttman84] “R-Trees: A Dynamic Index Structure for Spatial Searching”     Antonin Guttman, Proc. 1984 ACM-SIGMOD Conference on Management of     Data (1985), 47-57.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LibSpatialIndex.insert!-Tuple{LibSpatialIndex.RTree,Integer,Array{Float64,1},Array{Float64,1}}",
    "page": "Docstrings",
    "title": "LibSpatialIndex.insert!",
    "category": "method",
    "text": "Inserts an item into the rtree with given id and boundingbox specified by minvalues and maxvalues, where the item lies within the interval [minvalues[i],maxvalues[i]] for each axis i in 1, ..., ndim.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LibSpatialIndex.intersects-Tuple{LibSpatialIndex.RTree,Array{Float64,1},Array{Float64,1}}",
    "page": "Docstrings",
    "title": "LibSpatialIndex.intersects",
    "category": "method",
    "text": "Returns a vector of ids corresponding to items in rtree that intersects the box specified by minvalues and maxvalues.\n\nEach item intersects the interval [minvalues[i],maxvalues[i]] for each axis i in 1, ..., ndim.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LibSpatialIndex.intersects-Tuple{LibSpatialIndex.RTree,Array{Float64,1}}",
    "page": "Docstrings",
    "title": "LibSpatialIndex.intersects",
    "category": "method",
    "text": "Returns a vector of ids corresponding to items in rtree that intersects the coordinates specified by point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LibSpatialIndex.knn-Tuple{LibSpatialIndex.RTree,Array{Float64,1},Array{Float64,1},Integer}",
    "page": "Docstrings",
    "title": "LibSpatialIndex.knn",
    "category": "method",
    "text": "Returns a vector of ids corresponding to the k items in rtree that are nearest to the box specified by minvalues and maxvalues.\n\nEach item intersects the interval [minvalues[i],maxvalues[i]] for each axis i in 1, ..., ndim. If there are fewer than k items in rtree, it will return less than k items. On the other hand, if there are ties between some of the items, it might return more than k items.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LibSpatialIndex.knn-Tuple{LibSpatialIndex.RTree,Array{Float64,1},Integer}",
    "page": "Docstrings",
    "title": "LibSpatialIndex.knn",
    "category": "method",
    "text": "Returns a vector of ids corresponding to the k items in rtree that are nearest to the box specified by minvalues and maxvalues.\n\nIf there are fewer than k items in rtree, it will return less than k items. On the other hand, if there are ties between some of the items, it might return more than k items.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LibSpatialIndex]\nOrder = [:type, :function]"
},

]}
