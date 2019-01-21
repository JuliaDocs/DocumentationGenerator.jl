var documenterSearchIndex = {"docs": [

{
    "location": "#SimpleGraphAlgorithms.ad-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.ad",
    "category": "method",
    "text": "ad(G) is the average degree of a vertex in G.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.chrome_poly-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.chrome_poly",
    "category": "method",
    "text": "chrome_poly(G) computes the chromatic polynomial of the graph G. If G is a directe graph, this returns the chromatic polynomial of G\'s underlying simple graph.\n\nThis function builds a datastructure to prevent computing the chromatic polynomial of the same graph twice. To do this, it uses frequent isomorphism checks.\n\nSee size_cpm and reset_cpm.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.color-Tuple{SimpleGraphs.SimpleGraph,Int64}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.color",
    "category": "method",
    "text": "color(G,k): Return a k-coloring of G (or error if none exists).\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.degdeg-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.degdeg",
    "category": "method",
    "text": "degdeg(G) creates an n-by-n matrix where the nonzero entries in a row are the degrees of the neighbors of that vertex. The rows are lexicographically sorted.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.edge_chromatic_number-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.edge_chromatic_number",
    "category": "method",
    "text": "edge_chromatic_number(G) returns the edge chromatic number of the graph G.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.edge_color-Tuple{SimpleGraphs.SimpleGraph,Int64}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.edge_color",
    "category": "method",
    "text": "edge_color(G,k) returns a proper k-edge coloring of G or throws an error if one does not exist.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.fast_iso_test-Tuple{SimpleGraphs.SimpleGraph,SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.fast_iso_test",
    "category": "method",
    "text": "fast_iso_test(G,H) applies various heuristics to see if the graphs might be isomorphic. A false return certifies the graphs are not isomorphic; a true result indicates the graphs might be (indeed, likely are) isomorphic.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.info_map-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.info_map",
    "category": "method",
    "text": "info_map(G): We create a dictionary mapping the vertices of G to 128-bit integer values in such a way that twin vertices will have the same value but, we hope, nontwin vertices will have different values. (By twin we mean a pair of vertices such that there is an automorphism of the graph mapping one to the other.)\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.iso-Tuple{SimpleGraphs.SimpleGraph,SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.iso",
    "category": "method",
    "text": "iso(G,H) finds an isomorphism from G to H (or throws an error if the graphs are not isomorphic). Returns a dictionary mapping the vertices of G to H.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.iso2-Tuple{SimpleGraphs.SimpleGraph,SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.iso2",
    "category": "method",
    "text": "iso2(G,H) is a variant of iso(G,H) that first applies various heuristics that should speed up processing if the graphs are \"far\" from vertex transitive.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.iso_check-Tuple{SimpleGraphs.SimpleGraph,SimpleGraphs.SimpleGraph,Dict}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.iso_check",
    "category": "method",
    "text": "iso_check(G,H,d) checks if d is an isomorphism from G to H.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.iso_matrix-Tuple{SimpleGraphs.SimpleGraph,SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.iso_matrix",
    "category": "method",
    "text": "iso_matrix(G,H) returns a permutation matrix P such that A*P==P*B where A is the adjacency matrix of G and B is the adjacency matrix of H.  If the graphs are not isomorphic, an error is raised.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.mad-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.mad",
    "category": "method",
    "text": "mad(G) computes the maximum average degree of G. See also mad_core.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.mad_core-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.mad_core",
    "category": "method",
    "text": "mad_core(G) returns a subgraph H of G for which ad(H)==mad(G).\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.max_clique-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.max_clique",
    "category": "method",
    "text": "max_clique(G) returns a maximum size clique of a SimpleGraph.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.max_indep_set-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.max_indep_set",
    "category": "method",
    "text": "max_indep_set(G) returns a maximum size independent set of a SimpleGraph.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.max_matching-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.max_matching",
    "category": "method",
    "text": "max_matching(G) returns a maximum matching of a SimpleGraph.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.min_dom_set-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.min_dom_set",
    "category": "method",
    "text": "min_dom_set(G) returns a smallest dominating set of a SimpleGraph. That is, a smallest set S with the property that every vertex of G either is in S or is adjacent to a vertex of S.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.min_edge_cover-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.min_edge_cover",
    "category": "method",
    "text": "min_edge_cover(G) finds a smallest subset F of the edges such that every vertex of G is the end point of at least one edge in F. An error is raised if G has a vertex of degree 0.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.min_vertex_cover-Tuple{Any}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.min_vertex_cover",
    "category": "method",
    "text": "min_vertex_cover(G) returns a smallest vertex cover S of G. This is a smallest possible set of vertices such that every edge of G has one or both end points in S.\n\nmin_vertex_cover(G,k) returns the smallest set of vertices S such that at least k edges are indicent with a vertex in S.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.reset_cpm-Tuple{}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.reset_cpm",
    "category": "method",
    "text": "reset_cpm() clears the datastructure of previously computed chromatic polynomials.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.set_solver-Tuple{Any}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.set_solver",
    "category": "method",
    "text": "set_solver(function) selects which optimization solver to use. For example, set_solver(CbcSolver). To use Gurobi, so this:\n\nusing Gurobi\nset_solver(GurobiSolver)\n\nChoice remains in effect until there\'s a subsequent call to set_solver.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.size_cpm-Tuple{}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.size_cpm",
    "category": "method",
    "text": "size_cpm() reports the number of graphs held in the datastructure of previously computed chromatic polynomials.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.uhash-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.uhash",
    "category": "method",
    "text": "uhash(G) creates an UInt64 hash of the graph such that isomorphic graphs will produce the same value. We hope that nonisomorphic graphs will create different values, but, alas, that need not be the case.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.fast_iso_test_basic-Tuple{SimpleGraphs.SimpleGraph,SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.fast_iso_test_basic",
    "category": "method",
    "text": "fast_iso_test_basic(G,H) is a very quick test to rule out graphs being isomorphic by considering the number of vertices, number of edges, and degree sequences. Returns false if the graphs fail this very basic test of isomorphism. A true result does not imply the graphs are isomorphic.\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.mad_model-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.mad_model",
    "category": "method",
    "text": "mad_model(G) returns the solved linear program whose optimum value is mad(G).\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.recall-Tuple{SimpleGraphAlgorithms.ChromePolyMemo,SimpleGraphs.SimpleGraph}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.recall",
    "category": "method",
    "text": "recall(CPM,G) look up in CPM to see if we have already computed the chromatic polynomial of this graph (or something isomorphic to it).\n\nShort form: P = CPM[G].\n\n\n\n\n\n"
},

{
    "location": "#SimpleGraphAlgorithms.remember!-Tuple{SimpleGraphAlgorithms.ChromePolyMemo,SimpleGraphs.SimpleGraph,Polynomials.Poly{Int64}}",
    "page": "Home",
    "title": "SimpleGraphAlgorithms.remember!",
    "category": "method",
    "text": "remember!(CPM,G,P) save the polynomial P associated with G in this data structure (if it wasn\'t in there already).\n\nShort form: CPM[G] = P.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [SimpleGraphAlgorithms]\nOrder = [:type, :function]"
},

]}
