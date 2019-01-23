var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#ExtractMacro.@extract-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "ExtractMacro.@extract",
    "category": "macro",
    "text": "@extract obj : exprs...\n\nExtracts fields from composite types. E.g.\n\n@extract x : a b\n\n# is translated to:\n\na = x.a\nb = x.b\n\nThe colon is optional: @extract x a b is the same as above. Destination variable names can be changed, and arbitrary functions (including indexing) applied, e.g.:\n\n@extract x : q=b a1=abs(a[1]) ai=abs(a[i]) y=max(a[1],b)\n\n# is translated to:\n\nq = x.b\na1 = abs(x.a[1])\nai = abs(x.a[i])\ny = max(x.a[1], x.b)\n\nNotice that the i within the indexing expression is left untouched: indexing is special in this regard.\n\nIn order to explicitly avoid symbol manipulation on the right hand side, use esc(), e.g.:\n\n@extract x : y=abs(a[1] + esc(b))\n\n# is translated to:\n\ny = abs(x.a[1] + b) # b is left untouched\n\n\n\n\n\n"
},

{
    "location": "#ExtractMacro.jl-documentation-1",
    "page": "Home",
    "title": "ExtractMacro.jl documentation",
    "category": "section",
    "text": "This package provides just one macro, @extract, which you can use by entering:using ExtractMacroThe macro creates local variables from expressions involving composite types (structs) fields. It is especially useful to avoid writing expressions of the form obj.field repeatedly. For example, instead of having code like this:potential(network::Network, i::Int) =\n    dot(unsafe(network.J[i]), unsafe(network.current_state.s)) - network.H0 -\n        network.lambda * (network.current_state.S - network.f * network.N)you could use the macro and get a more readable version:function potential(network::Network, i::Int)\n    @extract network : N f H0 lambda state=current_state Ji=unsafe(J[i])\n    @extract state   : S s=unsafe(s)\n\n    return dot(Ji, s) - H0 - lambda * (S - f * N)\nendThis makes the function look a little bit like a method in some standard OO languages (e.g., C++) where class methods bring the class fields in scope. Note however that the @extract macro does not work like that: it always works by creating local variables. The consequences of this are discussed after the macro documentation.Modules = [ExtractMacro]As mentioned above, since the assignments follow the usual Julia pass-by-reference rules, if you extract a scalar value (e.g. an Int) from a field, and subsequently modify it, the value of the field in the parent object will not be affected. But if you extract a container (e.g. a Vector) and modify its contents, the change will be reflected in the parent object. For example:mutable struct X\n    a::Int\n    v::Vector{Int}\nend\nx = X(1, [2,3,4])\n@extract x : a v\na = 5     # will not change x.a\nv[1] = 5  # will change x.v[1]"
},

]}
