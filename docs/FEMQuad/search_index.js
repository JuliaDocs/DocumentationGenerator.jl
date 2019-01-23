var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "FEMQuad.jl documentation",
    "title": "FEMQuad.jl documentation",
    "category": "page",
    "text": ""
},

{
    "location": "#FEMQuad.jl-documentation-1",
    "page": "FEMQuad.jl documentation",
    "title": "FEMQuad.jl documentation",
    "category": "section",
    "text": "Pages = [\"index.md\", \"api.md\"]FEMQuad.jl contains various of integration schemes for cartesian and tetrahedron domains. The most common integration rules are tabulated and focus is on speed.Usage is straightforward. For example, to integrate function f(x) = 1 + x[1] + x[2] + x[1]*x[2] in standard rectangular domain [-1,1]^2, 4 point Gauss-Legendre integration rule is needed:using FEMQuad\nf(x) = 1 + x[1] + x[2] + x[1]*x[2]\nI = 0.0\nfor (w, gp) in get_quadrature_points(Val{:GLQUAD4})\n    I += w*f(gp)\nendResult can be verified to be 4. w is integration weight, gp is integration point location and GLQUAD4 is integration rule used. In the same principle we have integration rules for tetrahedrons, hexahedrons and so on. For example, GLTET15 is 15-point tetrahedron rule."
},

{
    "location": "#References-1",
    "page": "FEMQuad.jl documentation",
    "title": "References",
    "category": "section",
    "text": "Wikipedia contributors. \"Gaussian quadrature.\" Wikipedia, The Free Encyclopedia. Wikipedia, The Free Encyclopedia, 24 Jul. 2017. Web. 29 Jul. 2017."
},

{
    "location": "api/#",
    "page": "API documentation",
    "title": "API documentation",
    "category": "page",
    "text": ""
},

{
    "location": "api/#API-documentation-1",
    "page": "API documentation",
    "title": "API documentation",
    "category": "section",
    "text": "DocTestSetup = quote\n    using FEMQuad\nend"
},

{
    "location": "api/#Index-1",
    "page": "API documentation",
    "title": "Index",
    "category": "section",
    "text": ""
},

{
    "location": "api/#Functions-1",
    "page": "API documentation",
    "title": "Functions",
    "category": "section",
    "text": ""
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLSEG1}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 1 point rule on segment. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLSEG2}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 2 point rule on segment. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLSEG3}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 3 point rule on segment. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLSEG4}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 4 point rule on segment. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLSEG5}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 5 point rule on segment. \n\n\n\n\n\n"
},

{
    "location": "api/#Gauss-Legendre-rules-in-segments-1",
    "page": "API documentation",
    "title": "Gauss-Legendre rules in segments",
    "category": "section",
    "text": "FEMQuad.get_quadrature_points(::Type{Val{:GLSEG1}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLSEG2}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLSEG3}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLSEG4}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLSEG5}})"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLTRI1}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 1 point rule on triangle. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLTRI3}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 3 point rule on triangle. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLTRI3B}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 3 point rule on triangle. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLTRI4}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 4 point rule on triangle. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLTRI4B}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 4 point rule on triangle. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLTRI6}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 6 point rule on triangle. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLTRI7}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 7 point rule on triangle. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLTRI12}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 12 point rule on triangle. \n\n\n\n\n\n"
},

{
    "location": "api/#Gauss-Legendre-rules-in-triangles-1",
    "page": "API documentation",
    "title": "Gauss-Legendre rules in triangles",
    "category": "section",
    "text": "These rules are from literature.FEMQuad.get_quadrature_points(::Type{Val{:GLTRI1}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLTRI3}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLTRI3B}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLTRI4}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLTRI4B}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLTRI6}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLTRI7}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLTRI12}})"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLQUAD1}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 1 point rule on quadrilateral. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLQUAD4}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 4 point rule on quadrilateral. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLQUAD9}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 9 point rule on quadrilateral. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLQUAD16}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 16 point rule on quadrilateral. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLQUAD25}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 25 point rule on quadrilateral. \n\n\n\n\n\n"
},

{
    "location": "api/#Gauss-Legendre-rules-in-quadrangles-1",
    "page": "API documentation",
    "title": "Gauss-Legendre rules in quadrangles",
    "category": "section",
    "text": "These rules are get from 1d quadratures by using tensor production.FEMQuad.get_quadrature_points(::Type{Val{:GLQUAD1}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLQUAD4}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLQUAD9}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLQUAD16}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLQUAD25}})"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLTET1}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 1 point rule on tetrahedron. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLTET4}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 4 point rule on tetrahedron. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLTET5}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 5 point rule on tetrahedron. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLTET15}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 15 point rule on tetrahedron. \n\n\n\n\n\n"
},

{
    "location": "api/#Gauss-Legendre-rules-in-tetrahedrons-1",
    "page": "API documentation",
    "title": "Gauss-Legendre rules in tetrahedrons",
    "category": "section",
    "text": "These rules are from literature.FEMQuad.get_quadrature_points(::Type{Val{:GLTET1}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLTET4}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLTET5}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLTET15}})"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLHEX1}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 1 point rule on hexahedron. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLHEX8}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 8 point rule on hexahedron. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLHEX27}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 27 point rule on hexahedron. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLHEX81}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 81 point rule on hexahedron. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLHEX243}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 243 point rule on quadrilateral. \n\n\n\n\n\n"
},

{
    "location": "api/#Gauss-Legendre-rules-in-hexahedrons-1",
    "page": "API documentation",
    "title": "Gauss-Legendre rules in hexahedrons",
    "category": "section",
    "text": "These rules are get from 1d quadratures by using tensor production.FEMQuad.get_quadrature_points(::Type{Val{:GLHEX1}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLHEX8}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLHEX27}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLHEX81}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLHEX243}})"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLWED6}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 6 point rule on wedge. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLWED6B}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 6 point rule on wedge. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLWED21}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 21 point rule on wedge. \n\n\n\n\n\n"
},

{
    "location": "api/#Gauss-Legendre-rules-in-prismatic-domain-1",
    "page": "API documentation",
    "title": "Gauss-Legendre rules in prismatic domain",
    "category": "section",
    "text": "These rules for wedge are mainly tensor products of triangular domain and 1d domainFEMQuad.get_quadrature_points(::Type{Val{:GLWED6}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLWED6B}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLWED21}})"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLPYR5}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 5 point rule on pyramid. \n\n\n\n\n\n"
},

{
    "location": "api/#FEMQuad.get_quadrature_points-Tuple{Type{Val{:GLPYR5B}}}",
    "page": "API documentation",
    "title": "FEMQuad.get_quadrature_points",
    "category": "method",
    "text": "Gauss-Legendre quadrature, 5 point rule on pyramid. \n\n\n\n\n\n"
},

{
    "location": "api/#Gauss-Legendre-rules-in-pyramidal-domains-1",
    "page": "API documentation",
    "title": "Gauss-Legendre rules in pyramidal domains",
    "category": "section",
    "text": "FEMQuad.get_quadrature_points(::Type{Val{:GLPYR5}})\nFEMQuad.get_quadrature_points(::Type{Val{:GLPYR5B}})"
},

]}
