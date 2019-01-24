var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Flatten-1",
    "page": "Readme",
    "title": "Flatten",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io) (Image: Coverage Status)Flatten.jl converts data between nested and flat structures, using flatten(),  construct and reconstruct() functions. This facilitates building modular, compostable code while still providing access to differentiation, solvers and optimisers that require flat vectors of parameters. Importantly it\'s also fast and type-stable.Flatten.jl uses FieldMetadata.jl to provide @flattenable macro to define which struct fields are to be flattened. It also provides metaflatten() to flatten any other FieldMetadata.jl meta-fields into the same sized vector as flatten(). This can be useful for attaching Bayesian priors or optional units to each field. Regular field data can also be collected with metaflatten: fieldnameflatten, parentflatten, fieldtypeflatten and parenttypeflatten provide  lists of fieldnames and types that may be useful for building parameter display tables. Any user-defined function of the form func(::T, ::Type{Val{fn}}) = can be used in metaflatten, where T is the struct type and fn is the fieldname symbol.One limitation of using reconstruct is that it requires an inner consstructor that accept all fields in the order they come in the type.  If some fields are recalculated at construction time, they should be calculateed in this final inner constructor. UnitlessFlatten.jl extends Flatten.jl to automatically strip and add Unitful units.This basis of this package was originally written by Robin Deits (@rdeits). The current form owes much to discussions and ideas from Jan Weidner (@jw3126) and Robin Deits. "
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Let\'s define a data type:julia> \ntype Foo{T}\n   a::T\n   b::T\n   c::T\nend\n\njulia> f = Foo(1,2,3)\nFoo{Int64}(1,2,3)Now we can flatten this data type into a tuple:julia> flatten(Tuple, f)\n(1, 2, 3)or a vector:julia> flatten(Vector, f)\n3-element Array{Int64,1}:\n 1\n 2\n 3We can also reconstruct the data to recover the original structure. construct() rebuilds from a type and tuple containing values for every field.julia> construct(Foo{Int64}, (1,2,3))\nFoo{Int64}(1,2,3)reconstruct() rebuilds from an object and a partial tuple or vector, useful when some fields have been deactivated with the @flattenable macro.julia> construct(foo, (1, 2, 3))\nFoo{Int64}(1, 2, 3)Nested types work too:type Nested{T1, T2}\n    f::Foo{T1}\n    b::T2\n    c::T2\nend\n\njulia> n = Nested(Foo(1,2,3), 4.0, 5.0)\nNested{Int64,Float64}(Foo{Int64}(1,2,3),4.0,5.0)\n\njulia> flatten(Tuple, n)\n(1, 2, 3, 4.0, 5.0)\n\njulia> flatten(Vector, n)\n5-element Array{Float64,1}:\n 1.0\n 2.0\n 3.0\n 4.0\n 5.0\n\njulia> construct(Nested{Int64,Int64}, (1, 2, 3, 4, 5))\n\nNested{Int64,Int64}(Foo{Int64}(1, 2, 3), 4, 5)Fields can be excluded from flattening with the flattenable(struct, field) method, easily defined using @flattenable on a struct. I\'ll also define a @foobar metadata to use later:using FieldMetadata\nusing Flatten \nimport Flatten: flattenable\n\n@metadata foobar :nobar\n\n@flattenable @foobar struct Partial{T}\n    a::T | :foo | true\n    b::T | :foo | true\n    c::T | :foo | false\nend\n\n@flattenable @foobar struct NestedPartial{P,T}\n    np::P | :bar | true\n    nb::T | :bar | true\n    nc::T | :bar | false\nend\n\njulia> partial = Partial(1.0, 2.0, 3.0)                                      \nPartial{Float64}(1.0, 2.0, 3.0)                                              \n                                                                             \njulia> nestedpartial = NestedPartial(Partial(1.0, 2.0, 3.0), 4, 5)           \nNestedPartial{Partial{Float64},Int64}(Partial{Float64}(1.0, 2.0, 3.0), 4, 5) \n\njulia> flatten(Tuple, nestedpartial)\n(1.0, 2.0, 4)\n\njulia> flatten(Vector, nestedpartial)\n5-element Array{Float64,1}:\n 1.0\n 2.0\n 4.0We can also flatten the @foobar metadata defined above:julia> metaflatten(typeof(partial), foobar) \n(:foo, :foo)\n\njulia> metaflatten(nestedpartial, foobar)\n(:foo, :foo, :bar)And flatten the fieldnames:julia> fieldnameflatten(nestedpartial)                                            \n(:a, :b, :nb) "
},

{
    "location": "autodocs/#Flatten.flatten-Union{Tuple{V}, Tuple{Type{V},Any}} where V<:(AbstractArray{T,1} where T)",
    "page": "Docstrings",
    "title": "Flatten.flatten",
    "category": "method",
    "text": "Flattening. Flattens a nested type to a Tuple or Vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Flatten.metaflatten-Tuple{Type{Tuple},Any,Any}",
    "page": "Docstrings",
    "title": "Flatten.metaflatten",
    "category": "method",
    "text": "Tag flattening. Flattens data attached to a field by methods of a passed in function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Flatten.reconstruct-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Flatten.reconstruct",
    "category": "method",
    "text": "Reconstruct an object from partial Tuple or Vector data and another object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Flatten.retype-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Flatten.retype",
    "category": "method",
    "text": "Retype an object from partial Tuple or Vector data and another object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Flatten.update!-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Flatten.update!",
    "category": "method",
    "text": "Update a mutable object with partial Tuple or Vector data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Flatten]\nOrder = [:type, :function]"
},

]}
