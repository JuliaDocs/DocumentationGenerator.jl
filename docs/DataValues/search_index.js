var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DataValues-1",
    "page": "Readme",
    "title": "DataValues",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: DataValues) (Image: codecov)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package provides the type DataValue that is used to represent missing data.Currently the main use of this type is in the Query.jl and IterableTables.jl packages.This repo is based on the following principles/ideas:This type is meant to make life for data scientists as easy as possible.That is the main guiding principle.We hook into the dot broadcasting mechanism from julia 0.7 to providelifting functionality for functions that don\'t have specific methods for DataValue arguments.The  and  operators follow the 3VLsemantics for DataValues.Comparison operators like ==,  etc. on DataValues returnBool values, i.e. they are normal predicates.The package provides many lifted methods.\nOne can access or unpack the value within a DataValue either via theget(x) function, or use the x syntax.Any help with this package would be greatly appreciated!"
},

{
    "location": "autodocs/#DataValues.DataValueArray",
    "page": "Docstrings",
    "title": "DataValues.DataValueArray",
    "category": "type",
    "text": "DataValueArray{T, N} is an efficient alternative to Array{DataValue{T}, N}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataValues.dropna!-Tuple{DataValueArray{T,1} where T}",
    "page": "Docstrings",
    "title": "DataValues.dropna!",
    "category": "method",
    "text": "dropna!(X::DataValueVector)\n\nRemove missing entries of X in-place and return a Vector view of the unwrapped DataValue entries.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataValues.dropna!-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "DataValues.dropna!",
    "category": "method",
    "text": "dropna!(X::AbstractVector)\n\nRemove missing entries of X in-place and return a Vector view of the unwrapped DataValue entries. If no missing values are present, this is a no-op and X is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataValues.dropna-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "DataValues.dropna",
    "category": "method",
    "text": "dropna(X::AbstractVector)\n\nReturn a vector containing only the non-missing entries of X, unwrapping DataValue entries. A copy is always returned, even when X does not contain any missing values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataValues.padna!-Union{Tuple{T}, Tuple{DataValueArray{T,1},Integer,Integer}} where T",
    "page": "Docstrings",
    "title": "DataValues.padna!",
    "category": "method",
    "text": "padna!(X::DataValueVector, front::Integer, back::Integer)\n\nInsert front null entries at the beginning of X and add back null entries at the end of X. Returns X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataValues.padna-Tuple{DataValueArray{T,1} where T,Integer,Integer}",
    "page": "Docstrings",
    "title": "DataValues.padna",
    "category": "method",
    "text": "padna(X::DataValueVector, front::Integer, back::Integer)\n\nreturn a copy of X with front null entries inserted at the beginning of the copy and back null entries inserted at the end.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.append!-Tuple{DataValueArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "Base.append!",
    "category": "method",
    "text": "append!(X::DataValueVector, items::AbstractVector)\n\nAdd the elements of items to the end of X.\n\nNote that append!(X, [1, 2, 3]) is equivalent to push!(X, 1, 2, 3), where the items to be added to X are passed individually to push! and as a collection to append!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.convert-Union{Tuple{N}, Tuple{T}, Tuple{S}, Tuple{Type{Array{S,N}},DataValueArray{T,N}}} where N where T where S",
    "page": "Docstrings",
    "title": "Base.convert",
    "category": "method",
    "text": "convert(T, X::DataValueArray)\n\nConvert X to an AbstractArray of type T. Note that if X contains any null entries then calling convert without supplying a replacement value for null entries will result in an error.\n\nCurrently supported return type arguments include: Array, Array{T}, Vector, Matrix.\n\nconvert(T, X::DataValueArray, replacement)\n\nConvert X to an AbstractArray of type T and replace all null entries of X with replacement in the result.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.copy-Union{Tuple{DataValueArray{T,N} where N}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "Base.copy",
    "category": "method",
    "text": "copy(X::DataValueArray)\n\nReturn a shallow copy of X; the outer structure of X will be copied, but all elements will be identical to those of X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.copyto!-Tuple{DataValueArray,DataValueArray}",
    "page": "Docstrings",
    "title": "Base.copyto!",
    "category": "method",
    "text": "copyto!(dest::DataValueArray, src::DataValueArray)\n\nCopy the initialized values of a source DataValueArray into the respective indices of the destination DataValueArray. If an entry in src is null, then this method nullifies the respective entry in dest.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.deepcopy-Tuple{DataValueArray}",
    "page": "Docstrings",
    "title": "Base.deepcopy",
    "category": "method",
    "text": "Base.deepcopy(X::DataValueArray)\n\nReturn a DataValueArray object whose internal values and isna fields are deep copies of X.values and X.isna respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.deleteat!-Tuple{DataValueArray{T,1} where T,Any}",
    "page": "Docstrings",
    "title": "Base.deleteat!",
    "category": "method",
    "text": "deleteat!(X::DataValueVector, inds)\n\nDelete the entry at inds from X and then return X. Note that inds may be either a single scalar index or a collection of sorted, pairwise unique indices. Subsequent items after deleted entries are shifted down to fill the resulting gaps.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.empty!-Tuple{DataValueArray{T,1} where T}",
    "page": "Docstrings",
    "title": "Base.empty!",
    "category": "method",
    "text": "empty!(X::DataValueVector) -> DataValueVector\n\nRemove all elements from a DataValueVector. Returns DataValueVector{T}(), where T is the eltype of X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.fill!-Tuple{DataValueArray,Any}",
    "page": "Docstrings",
    "title": "Base.fill!",
    "category": "method",
    "text": "fill!(X::DataValueArray, x::DataValue)\n\nFill X with the value x and designate each entry as present. If x is an object reference, all elements will refer to the same object. Note that fill!(X, Foo()) will return X filled with the result of evaluating Foo() once.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.fill!-Tuple{DataValueArray,DataValue}",
    "page": "Docstrings",
    "title": "Base.fill!",
    "category": "method",
    "text": "fill!(X::DataValueArray, x::DataValue)\n\nFill X with the value x. If x is empty, then fill!(X, x) nullifies each entry of X. Otherwise, fill!(X, x) fills X.values with the value of x and designates each entry of X as present.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.getindex-Tuple{DataValue}",
    "page": "Docstrings",
    "title": "Base.getindex",
    "category": "method",
    "text": "getindex(x::DataValue)\n\nAttempt to access the value of x. Throw a DataValueException if the value is not present. Usually, this is written as x[].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.getindex-Union{Tuple{N}, Tuple{T}, Tuple{DataValueArray{T,N},Vararg{DataValue{Int64},N} where N}} where N where T",
    "page": "Docstrings",
    "title": "Base.getindex",
    "category": "method",
    "text": "getindex{T,N}(X::DataValueArray{T,N}, I::DataValue{Int}...)\n\nJust as above, with the additional behavior that this method throws an error if any component of the index I is missing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.getindex-Union{Tuple{N}, Tuple{T}, Tuple{DataValueArray{T,N},Vararg{Int64,N} where N}} where N where T",
    "page": "Docstrings",
    "title": "Base.getindex",
    "category": "method",
    "text": "getindex{T,N}(X::DataValueArray{T,N}, I::Int...)\n\nRetrieve a single entry from a DataValueArray. If the value in the entry designated by I is present, then it will be returned wrapped in a DataValue{T} container. If the value is missing, then this method returns DataValue{T}().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.lastindex-Tuple{DataValueArray}",
    "page": "Docstrings",
    "title": "Base.lastindex",
    "category": "method",
    "text": "lastindex(X::DataValueArray)\n\nReturns the last entry of X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.length-Tuple{DataValueArray}",
    "page": "Docstrings",
    "title": "Base.length",
    "category": "method",
    "text": "length(X::DataValueArray)\n\nReturns the maximum index i for which getindex(X, i) is valid.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.mapreduce-Union{Tuple{T}, Tuple{S}, Tuple{N}, Tuple{Any,Function,T}} where T<:AbstractArray{S,N} where S<:DataValue where N",
    "page": "Docstrings",
    "title": "Base.mapreduce",
    "category": "method",
    "text": "mapreduce(f, op::Function, X::DataValueArray; [skipna::Bool=false])\n\nMap a function f over the elements of X and reduce the result under the operation op. One can set the behavior of this method to skip the null entries of X by setting the keyword argument skipna equal to true. If skipna behavior is enabled, f will be automatically lifted over the elements of X. Note that, in general, mapreducing over a DataValueArray will return a DataValue object regardless of whether skipna is set to true or false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.ndims-Tuple{DataValueArray}",
    "page": "Docstrings",
    "title": "Base.ndims",
    "category": "method",
    "text": "ndims(X::DataValueArray)\n\nReturns the number of dimensions of X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.pop!-Union{Tuple{DataValueArray{T,1}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "Base.pop!",
    "category": "method",
    "text": "pop!{T}(X::DataValueVector{T})\n\nRemove the last entry from X and return it. If the value in that entry is missing, then this method returns DataValue{T}().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.popfirst!-Union{Tuple{DataValueArray{T,1}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "Base.popfirst!",
    "category": "method",
    "text": "popfirst!{T}(X::DataValueVector{T})\n\nRemove the first entry from X and return it as a DataValue object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.prepend!-Tuple{DataValueArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "Base.prepend!",
    "category": "method",
    "text": "prepend!(X::DataValueVector, items::AbstractVector)\n\nAdd the elements of items to the beginning of X.\n\nNote that prepend!(X, [1, 2, 3]) is equivalent to pushfirst!(X, 1, 2, 3), where the items to be added to X are passed individually to pushfirst! and as a collection to prepend!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.push!-Union{Tuple{V}, Tuple{T}, Tuple{DataValueArray{T,1},DataValue{V}}} where V where T",
    "page": "Docstrings",
    "title": "Base.push!",
    "category": "method",
    "text": "push!{T,V}(X::DataValueVector{T}, v::DataValue{V})\n\nInsert a value at the end of X from a DataValue value v. If v is null then this method adds a null entry at the end of X. Returns X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.push!-Union{Tuple{V}, Tuple{T}, Tuple{DataValueArray{T,1},V}} where V where T",
    "page": "Docstrings",
    "title": "Base.push!",
    "category": "method",
    "text": "push!{T,V}(X::DataValueVector{T}, v::V)\n\nInsert v at the end of X, which registers v as a present value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.pushfirst!-Tuple{DataValueArray{T,1} where T,Any}",
    "page": "Docstrings",
    "title": "Base.pushfirst!",
    "category": "method",
    "text": "pushfirst!(X::DataValueVector, v)\n\nInsert a value v at the beginning of X and return X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.pushfirst!-Tuple{DataValueArray{T,1} where T,DataValue}",
    "page": "Docstrings",
    "title": "Base.pushfirst!",
    "category": "method",
    "text": "pushfirst!(X::DataValueVector, v::DataValue)\n\nInsert a value at the beginning of X from a DataValue value v. If v is null then this method inserts a null entry at the beginning of X. Returns X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.reduce-Union{Tuple{T}, Tuple{S}, Tuple{N}, Tuple{Any,T}} where T<:AbstractArray{S,N} where S<:DataValue where N",
    "page": "Docstrings",
    "title": "Base.reduce",
    "category": "method",
    "text": "reduce(f, op::Function, X::DataValueArray; [skipna::Bool=false])\n\nReduce Xunder the operation op. One can set the behavior of this method to skip the null entries of X by setting the keyword argument skipna equal to true. If skipna behavior is enabled, f will be automatically lifted over the elements of X. Note that, in general, mapreducing over a DataValueArray will return a DataValue object regardless of whether skipna is set to true or false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.resize!-Union{Tuple{T}, Tuple{DataValueArray{T,1},Int64}} where T",
    "page": "Docstrings",
    "title": "Base.resize!",
    "category": "method",
    "text": "resize!(X::DataValueVector, n::Int)\n\nResize a one-dimensional DataValueArray X to contain precisely n elements. If n is greater than the current length of X, then each new entry will be designated as null.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.reverse",
    "page": "Docstrings",
    "title": "Base.reverse",
    "category": "function",
    "text": "reverse(X::DataValueVector, [s], [n])\n\nReturn a copy of X with the first n elements starting at index s (inclusive) reversed. If unspecified, s and n will default to 1 and length(X), respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.reverse!",
    "page": "Docstrings",
    "title": "Base.reverse!",
    "category": "function",
    "text": "reverse!(X::DataValueVector, [s], [n])\n\nModify X by reversing the first n elements starting at index s (inclusive). If unspecified, s and n will default to 1 and length(X), respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.setindex!-Tuple{DataValueArray,Any,Vararg{Int64,N} where N}",
    "page": "Docstrings",
    "title": "Base.setindex!",
    "category": "method",
    "text": "setindex!(X::DataValueArray, v::Any, I::Int...)\n\nSet the entry of X at position I equal to v. This method always updates X.isna to indicate that the entry at index I is present and X.values to store v at I.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.setindex!-Tuple{DataValueArray,DataValue,Vararg{Int64,N} where N}",
    "page": "Docstrings",
    "title": "Base.setindex!",
    "category": "method",
    "text": "setindex!(X::DataValueArray, v::DataValue, I::Int...)\n\nSet the entry of X at position I equal to a DataValue value v. If v is missing, then only X.isna is updated to indicate that the entry at index I is null. If v is not null, then X.isna is updated to indicate that the entry at index I is present and X.values is updated to store the value wrapped in v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.size-Tuple{DataValueArray}",
    "page": "Docstrings",
    "title": "Base.size",
    "category": "method",
    "text": "size(X::DataValueArray, [d::Real])\n\nReturn a tuple containing the lengths of each dimension of X, or if d is specific, the length of X along dimension d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.sizehint!-Tuple{DataValueArray{T,1} where T,Integer}",
    "page": "Docstrings",
    "title": "Base.sizehint!",
    "category": "method",
    "text": "sizehint!(X::DataValueVector, newsz::Integer)\n\nSuggest that collection X reserve capacity for at least newsz elements. This can improve performance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.splice!",
    "page": "Docstrings",
    "title": "Base.splice!",
    "category": "function",
    "text": "splice!(X::DataValueVector, i::Integer, [ins])\n\nRemove the item at index i and return the removed item. Subsequent items are shifted down to fill the resulting gap. If specified, replacement values from an ordered collection will be spliced in place of the removed item.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.splice!-Union{Tuple{T}, Tuple{DataValueArray{T,1} where T,UnitRange{T}}, Tuple{DataValueArray{T,1} where T,UnitRange{T},Any}} where T<:Integer",
    "page": "Docstrings",
    "title": "Base.splice!",
    "category": "method",
    "text": "splice!{T<:Integer}(X::DataValueVector, rng::UnitRange{T}, [ins])\n\nRemove items in the specified index range, and return a collection containing the removed items. Subsequent items are shifted down to fill the resulting gap. If specified, replacement values from an ordered collection will be spliced in place of the removed items.\n\nTo insert ins before an index n without removing any items, use splice!(X, n:n-1, ins).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DataValues]\nOrder = [:type, :function]"
},

]}
