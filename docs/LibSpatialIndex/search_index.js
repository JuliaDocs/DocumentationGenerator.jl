var documenterSearchIndex = {"docs": [

{
    "location": "#LibSpatialIndex.RTree",
    "page": "Home",
    "title": "LibSpatialIndex.RTree",
    "category": "type",
    "text": "The RTree index [guttman84] is a balanced tree structure that consists of index nodes, leaf nodes and data.\n\nEvery node (leaf and index) has a fixed capacity of entries, (the node capacity) chosen at index creation An RTree abstracts the data with their Minimum Bounding Region (MBR) and clusters these MBRs according to various heuristics in the leaf nodes. Queries are evaluated from the root of the tree down the leaves. Since the index is balanced nodes can be under full. They cannot be empty though. A fillfactor specifies the minimum number of entries allowed in any node. The fill factor is usually close to 70%.\n\nOptions\n\nndim: Dimensionality of the data that will be inserted.\nindextype: one of RT_RTree (default), RT_MVRTree, or RT_TPRTree.\nvariant: one of RT_Linear, RT_Quadratic, or RT_Star (default).\nstorage: one of RT_Memory (default), RT_Disk, or RT_Custom.\nindexcapacity: The index node capacity. Default is 100.\nleafcapacity: The leaf node capacity. Default is 100.\nleafpoolcapacity: Default is 100.\nindexpoolcapacity: Default is 100.\nregionpoolcapacity: Default is 1000.\npointpoolcapacity: Default is 500.\ntightMBR: Default is true.\nnearminimumoverlapfactor: Default is 32.\nfillfactor: The fill factor. Default is 0.7.\nsplitdistributionfactor: Default is 0.4.\nreinsertfactor: Default is 0.3.\n\nPerformance\n\nDataset size, data density, etc. have nothing to do with capacity and page size. What you are trying to achieve is fast reads from the disk and take advantage of disk buffering and prefetching.\n\nNormally, you select the page size to be equal to the disk page size (depends on how you format the drive). Then you choose the node capacity to be enough to fill the whole page (including data entries if you have any).\n\nThere is a tradeoff though in making node capacity too large. The larger the capacity, the longer the “for loops” for inserting, deleting, locating node entries take (CPU time). On the other hand, the larger the capacity the shorter the tree becomes, reducing the number of random IOs to reach the leaves. Hence, you might want to fit multiple nodes (of smaller capacity) inside a single page to balance I/O and CPU cost, in case your disk page size is too large.\n\nFinally, if you have enough buffer space to fit most of the index nodes in main memory, then large capacities do not make too much sense, because the height of the tree does not matter any more. Of course, the smaller the capacity, the larger the number of leaf nodes you will have to retrieve from disk for range queries (point queries and nearest neighbor queries will not suffer that much). So very small capacities hurt as well.\n\nThere is another issue when trying to fit multiple nodes per page: Leftover space. You might have leftover space due to data entries that do not have a fixed size. Unfortunately, in that case, leftover space per page is lost, negatively impacting space usage.\n\nSelecting the right page size is easy; make it equal to the disk page size. Selecting the right node capacity is an art.\n\nReferences\n\n[guttman84] “R-Trees: A Dynamic Index Structure for Spatial Searching”     Antonin Guttman, Proc. 1984 ACM-SIGMOD Conference on Management of     Data (1985), 47-57.\n\n\n\n\n\n"
},

{
    "location": "#LibSpatialIndex.insert!-Tuple{LibSpatialIndex.RTree,Integer,Array{Float64,1},Array{Float64,1}}",
    "page": "Home",
    "title": "LibSpatialIndex.insert!",
    "category": "method",
    "text": "Inserts an item into the rtree with given id and boundingbox specified by minvalues and maxvalues, where the item lies within the interval [minvalues[i],maxvalues[i]] for each axis i in 1, ..., ndim.\n\n\n\n\n\n"
},

{
    "location": "#LibSpatialIndex.intersects-Tuple{LibSpatialIndex.RTree,Array{Float64,1},Array{Float64,1}}",
    "page": "Home",
    "title": "LibSpatialIndex.intersects",
    "category": "method",
    "text": "Returns a vector of ids corresponding to items in rtree that intersects the box specified by minvalues and maxvalues.\n\nEach item intersects the interval [minvalues[i],maxvalues[i]] for each axis i in 1, ..., ndim.\n\n\n\n\n\n"
},

{
    "location": "#LibSpatialIndex.intersects-Tuple{LibSpatialIndex.RTree,Array{Float64,1}}",
    "page": "Home",
    "title": "LibSpatialIndex.intersects",
    "category": "method",
    "text": "Returns a vector of ids corresponding to items in rtree that intersects the coordinates specified by point.\n\n\n\n\n\n"
},

{
    "location": "#LibSpatialIndex.knn-Tuple{LibSpatialIndex.RTree,Array{Float64,1},Array{Float64,1},Integer}",
    "page": "Home",
    "title": "LibSpatialIndex.knn",
    "category": "method",
    "text": "Returns a vector of ids corresponding to the k items in rtree that are nearest to the box specified by minvalues and maxvalues.\n\nEach item intersects the interval [minvalues[i],maxvalues[i]] for each axis i in 1, ..., ndim. If there are fewer than k items in rtree, it will return less than k items. On the other hand, if there are ties between some of the items, it might return more than k items.\n\n\n\n\n\n"
},

{
    "location": "#LibSpatialIndex.knn-Tuple{LibSpatialIndex.RTree,Array{Float64,1},Integer}",
    "page": "Home",
    "title": "LibSpatialIndex.knn",
    "category": "method",
    "text": "Returns a vector of ids corresponding to the k items in rtree that are nearest to the box specified by minvalues and maxvalues.\n\nIf there are fewer than k items in rtree, it will return less than k items. On the other hand, if there are ties between some of the items, it might return more than k items.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LibSpatialIndex]\nOrder = [:type, :function]"
},

]}
