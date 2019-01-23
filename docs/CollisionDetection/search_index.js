var documenterSearchIndex = {"docs": [

{
    "location": "#CollisionDetection.Octree",
    "page": "Home",
    "title": "CollisionDetection.Octree",
    "category": "type",
    "text": "T: type of the coordinates P: type of the points stored in the Octree.\n\n\n\n\n\n"
},

{
    "location": "#CollisionDetection.Octree-Tuple{Any}",
    "page": "Home",
    "title": "CollisionDetection.Octree",
    "category": "method",
    "text": "Octree(points)\n\nInsert zero radius objects at positions points in an Octree\n\n\n\n\n\n"
},

{
    "location": "#CollisionDetection.boxesoverlap-NTuple{4,Any}",
    "page": "Home",
    "title": "CollisionDetection.boxesoverlap",
    "category": "method",
    "text": "Predicate used for iteration over an Octree. Returns true if two boxes specified by their centers and halfsizes overlap. More carefull investigation of the objects within is required to assess collision. False positives are possible.\n\nboxesoverlap(c1, hs1, c2, hs2)\n\n\n\n\n\n"
},

{
    "location": "#CollisionDetection.find-Tuple{Octree,Any}",
    "page": "Home",
    "title": "CollisionDetection.find",
    "category": "method",
    "text": "find(octree, pos, tolerance=sqrt(eps(eltype(pos))))\n\nReturn an array containing the indices of values at pos (up to a tolerance)\n\n\n\n\n\n"
},

{
    "location": "#CollisionDetection.fitsinbox-NTuple{4,Any}",
    "page": "Home",
    "title": "CollisionDetection.fitsinbox",
    "category": "method",
    "text": "fitsinbox(pos, radius, center, halfsize) -> true/fasle\n\nFinds out if the object with position (pos) and (raduis) fits inside the box. It uses the box dimension (centre, and halfsize(w/2)) to do the comparsion\n\n\n\n\n\n"
},

{
    "location": "#CollisionDetection.fitsinbox-NTuple{5,Any}",
    "page": "Home",
    "title": "CollisionDetection.fitsinbox",
    "category": "method",
    "text": "itsinbox(Opjc, Objrad, boxc, boxhf, ratio) -> true/fasle\n\nFinds out if the object with center position (Opjc) and (Objrad) fits inside the box.   It uses the box dimension (boxc, and boxhf(w/2)) to do the comparsion   ratio is relative to box half width, so if you want to be just within the box   then ratio =1, if the boundaries of the object is slightly bigger and you still   want to include them make ratio bigger ex:1.2\n\n\n\n\n\n"
},

{
    "location": "#CollisionDetection.searchtree-Tuple{Any,Octree,Any}",
    "page": "Home",
    "title": "CollisionDetection.searchtree",
    "category": "method",
    "text": "searchtree(pred, tree, bb)\n\nReturn an iterator that returns indices stores in tree that correspond to objects for which the supplied predicate holds.\n\npred takes an integer an returns true is the corresponding object stores in tree collides with the target object. bb is a bounding box containing the target. This bounding box is used for effiently excluding entire branches of the tree.\n\n\n\n\n\n"
},

{
    "location": "#CollisionDetection.advance-Tuple{CollisionDetection.BoxIterator,Any}",
    "page": "Home",
    "title": "CollisionDetection.advance",
    "category": "method",
    "text": "advance(it, state)\n\nMoves state ahead to point at either the next valid position or one-off-end.\n\n\n\n\n\n"
},

{
    "location": "#CollisionDetection.boundingbox-Union{Tuple{Array{P,1}}, Tuple{P}} where P",
    "page": "Home",
    "title": "CollisionDetection.boundingbox",
    "category": "method",
    "text": "boundingbox(v)\n\nCompute the bounding cube/square for a Array of Point. The return values are the center of the bounding box and the half size of the cube.\n\n\n\n\n\n"
},

{
    "location": "#CollisionDetection.childcentersize-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "CollisionDetection.childcentersize",
    "category": "method",
    "text": "childcentersize(center, halfsize, sector) -> center, halfsize\n\nComputes the center and halfsize of the child of the input box that resides in octant sector\n\n\n\n\n\n"
},

{
    "location": "#CollisionDetection.childsector-Tuple{Any,Any}",
    "page": "Home",
    "title": "CollisionDetection.childsector",
    "category": "method",
    "text": "childsector(point, center) -> sector\n\nComputes the sector w.r.t. center that contains  point. Sector is an Int that encodes the position of point along each axis in its bit representation\n\n\n\n\n\n"
},

{
    "location": "#CollisionDetection.insert!-Union{Tuple{P}, Tuple{T}, Tuple{Any,Any,P,T,P,T,Any}} where P where T",
    "page": "Home",
    "title": "CollisionDetection.insert!",
    "category": "method",
    "text": "insert!(tree, box, center, halfsize, point, radius, id)\n\ntree:     the tree in which to insert box:      the box in which to try insertion center:   center of the box halfsize: 0.5 times the length of the box side point:    the point at which to insert radius:   the radius of the item to insert id:       a unique id that identifies the inserted item uniquely\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CollisionDetection]\nOrder = [:type, :function]"
},

]}
