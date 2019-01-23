var documenterSearchIndex = {"docs": [

{
    "location": "#DataValues.DataValueArray",
    "page": "Home",
    "title": "DataValues.DataValueArray",
    "category": "type",
    "text": "DataValueArray{T, N} is an efficient alternative to Array{DataValue{T}, N}.\n\n\n\n\n\n"
},

{
    "location": "#DataValues.dropna!-Tuple{DataValueArray{T,1} where T}",
    "page": "Home",
    "title": "DataValues.dropna!",
    "category": "method",
    "text": "dropna!(X::DataValueVector)\n\nRemove missing entries of X in-place and return a Vector view of the unwrapped DataValue entries.\n\n\n\n\n\n"
},

{
    "location": "#DataValues.dropna!-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T",
    "page": "Home",
    "title": "DataValues.dropna!",
    "category": "method",
    "text": "dropna!(X::AbstractVector)\n\nRemove missing entries of X in-place and return a Vector view of the unwrapped DataValue entries. If no missing values are present, this is a no-op and X is returned.\n\n\n\n\n\n"
},

{
    "location": "#DataValues.dropna-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T",
    "page": "Home",
    "title": "DataValues.dropna",
    "category": "method",
    "text": "dropna(X::AbstractVector)\n\nReturn a vector containing only the non-missing entries of X, unwrapping DataValue entries. A copy is always returned, even when X does not contain any missing values.\n\n\n\n\n\n"
},

{
    "location": "#DataValues.padna!-Union{Tuple{T}, Tuple{DataValueArray{T,1},Integer,Integer}} where T",
    "page": "Home",
    "title": "DataValues.padna!",
    "category": "method",
    "text": "padna!(X::DataValueVector, front::Integer, back::Integer)\n\nInsert front null entries at the beginning of X and add back null entries at the end of X. Returns X.\n\n\n\n\n\n"
},

{
    "location": "#DataValues.padna-Tuple{DataValueArray{T,1} where T,Integer,Integer}",
    "page": "Home",
    "title": "DataValues.padna",
    "category": "method",
    "text": "padna(X::DataValueVector, front::Integer, back::Integer)\n\nreturn a copy of X with front null entries inserted at the beginning of the copy and back null entries inserted at the end.\n\n\n\n\n\n"
},

{
    "location": "#Base.append!-Tuple{DataValueArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "Base.append!",
    "category": "method",
    "text": "append!(X::DataValueVector, items::AbstractVector)\n\nAdd the elements of items to the end of X.\n\nNote that append!(X, [1, 2, 3]) is equivalent to push!(X, 1, 2, 3), where the items to be added to X are passed individually to push! and as a collection to append!.\n\n\n\n\n\n"
},

{
    "location": "#Base.convert-Union{Tuple{N}, Tuple{T}, Tuple{S}, Tuple{Type{Array{S,N}},DataValueArray{T,N}}} where N where T where S",
    "page": "Home",
    "title": "Base.convert",
    "category": "method",
    "text": "convert(T, X::DataValueArray)\n\nConvert X to an AbstractArray of type T. Note that if X contains any null entries then calling convert without supplying a replacement value for null entries will result in an error.\n\nCurrently supported return type arguments include: Array, Array{T}, Vector, Matrix.\n\nconvert(T, X::DataValueArray, replacement)\n\nConvert X to an AbstractArray of type T and replace all null entries of X with replacement in the result.\n\n\n\n\n\n"
},

{
    "location": "#Base.copy-Union{Tuple{DataValueArray{T,N} where N}, Tuple{T}} where T",
    "page": "Home",
    "title": "Base.copy",
    "category": "method",
    "text": "copy(X::DataValueArray)\n\nReturn a shallow copy of X; the outer structure of X will be copied, but all elements will be identical to those of X.\n\n\n\n\n\n"
},

{
    "location": "#Base.copyto!-Tuple{DataValueArray,DataValueArray}",
    "page": "Home",
    "title": "Base.copyto!",
    "category": "method",
    "text": "copyto!(dest::DataValueArray, src::DataValueArray)\n\nCopy the initialized values of a source DataValueArray into the respective indices of the destination DataValueArray. If an entry in src is null, then this method nullifies the respective entry in dest.\n\n\n\n\n\n"
},

{
    "location": "#Base.deepcopy-Tuple{DataValueArray}",
    "page": "Home",
    "title": "Base.deepcopy",
    "category": "method",
    "text": "Base.deepcopy(X::DataValueArray)\n\nReturn a DataValueArray object whose internal values and isna fields are deep copies of X.values and X.isna respectively.\n\n\n\n\n\n"
},

{
    "location": "#Base.deleteat!-Tuple{DataValueArray{T,1} where T,Any}",
    "page": "Home",
    "title": "Base.deleteat!",
    "category": "method",
    "text": "deleteat!(X::DataValueVector, inds)\n\nDelete the entry at inds from X and then return X. Note that inds may be either a single scalar index or a collection of sorted, pairwise unique indices. Subsequent items after deleted entries are shifted down to fill the resulting gaps.\n\n\n\n\n\n"
},

{
    "location": "#Base.empty!-Tuple{DataValueArray{T,1} where T}",
    "page": "Home",
    "title": "Base.empty!",
    "category": "method",
    "text": "empty!(X::DataValueVector) -> DataValueVector\n\nRemove all elements from a DataValueVector. Returns DataValueVector{T}(), where T is the eltype of X.\n\n\n\n\n\n"
},

{
    "location": "#Base.fill!-Tuple{DataValueArray,Any}",
    "page": "Home",
    "title": "Base.fill!",
    "category": "method",
    "text": "fill!(X::DataValueArray, x::DataValue)\n\nFill X with the value x and designate each entry as present. If x is an object reference, all elements will refer to the same object. Note that fill!(X, Foo()) will return X filled with the result of evaluating Foo() once.\n\n\n\n\n\n"
},

{
    "location": "#Base.fill!-Tuple{DataValueArray,DataValue}",
    "page": "Home",
    "title": "Base.fill!",
    "category": "method",
    "text": "fill!(X::DataValueArray, x::DataValue)\n\nFill X with the value x. If x is empty, then fill!(X, x) nullifies each entry of X. Otherwise, fill!(X, x) fills X.values with the value of x and designates each entry of X as present.\n\n\n\n\n\n"
},

{
    "location": "#Base.getindex-Tuple{DataValue}",
    "page": "Home",
    "title": "Base.getindex",
    "category": "method",
    "text": "getindex(x::DataValue)\n\nAttempt to access the value of x. Throw a DataValueException if the value is not present. Usually, this is written as x[].\n\n\n\n\n\n"
},

{
    "location": "#Base.getindex-Union{Tuple{N}, Tuple{T}, Tuple{DataValueArray{T,N},Vararg{DataValue{Int64},N} where N}} where N where T",
    "page": "Home",
    "title": "Base.getindex",
    "category": "method",
    "text": "getindex{T,N}(X::DataValueArray{T,N}, I::DataValue{Int}...)\n\nJust as above, with the additional behavior that this method throws an error if any component of the index I is missing.\n\n\n\n\n\n"
},

{
    "location": "#Base.getindex-Union{Tuple{N}, Tuple{T}, Tuple{DataValueArray{T,N},Vararg{Int64,N} where N}} where N where T",
    "page": "Home",
    "title": "Base.getindex",
    "category": "method",
    "text": "getindex{T,N}(X::DataValueArray{T,N}, I::Int...)\n\nRetrieve a single entry from a DataValueArray. If the value in the entry designated by I is present, then it will be returned wrapped in a DataValue{T} container. If the value is missing, then this method returns DataValue{T}().\n\n\n\n\n\n"
},

{
    "location": "#Base.lastindex-Tuple{DataValueArray}",
    "page": "Home",
    "title": "Base.lastindex",
    "category": "method",
    "text": "lastindex(X::DataValueArray)\n\nReturns the last entry of X.\n\n\n\n\n\n"
},

{
    "location": "#Base.length-Tuple{DataValueArray}",
    "page": "Home",
    "title": "Base.length",
    "category": "method",
    "text": "length(X::DataValueArray)\n\nReturns the maximum index i for which getindex(X, i) is valid.\n\n\n\n\n\n"
},

{
    "location": "#Base.mapreduce-Union{Tuple{T}, Tuple{S}, Tuple{N}, Tuple{Any,Function,T}} where T<:AbstractArray{S,N} where S<:DataValue where N",
    "page": "Home",
    "title": "Base.mapreduce",
    "category": "method",
    "text": "mapreduce(f, op::Function, X::DataValueArray; [skipna::Bool=false])\n\nMap a function f over the elements of X and reduce the result under the operation op. One can set the behavior of this method to skip the null entries of X by setting the keyword argument skipna equal to true. If skipna behavior is enabled, f will be automatically lifted over the elements of X. Note that, in general, mapreducing over a DataValueArray will return a DataValue object regardless of whether skipna is set to true or false.\n\n\n\n\n\n"
},

{
    "location": "#Base.ndims-Tuple{DataValueArray}",
    "page": "Home",
    "title": "Base.ndims",
    "category": "method",
    "text": "ndims(X::DataValueArray)\n\nReturns the number of dimensions of X.\n\n\n\n\n\n"
},

{
    "location": "#Base.pop!-Union{Tuple{DataValueArray{T,1}}, Tuple{T}} where T",
    "page": "Home",
    "title": "Base.pop!",
    "category": "method",
    "text": "pop!{T}(X::DataValueVector{T})\n\nRemove the last entry from X and return it. If the value in that entry is missing, then this method returns DataValue{T}().\n\n\n\n\n\n"
},

{
    "location": "#Base.popfirst!-Union{Tuple{DataValueArray{T,1}}, Tuple{T}} where T",
    "page": "Home",
    "title": "Base.popfirst!",
    "category": "method",
    "text": "popfirst!{T}(X::DataValueVector{T})\n\nRemove the first entry from X and return it as a DataValue object.\n\n\n\n\n\n"
},

{
    "location": "#Base.prepend!-Tuple{DataValueArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "Base.prepend!",
    "category": "method",
    "text": "prepend!(X::DataValueVector, items::AbstractVector)\n\nAdd the elements of items to the beginning of X.\n\nNote that prepend!(X, [1, 2, 3]) is equivalent to pushfirst!(X, 1, 2, 3), where the items to be added to X are passed individually to pushfirst! and as a collection to prepend!.\n\n\n\n\n\n"
},

{
    "location": "#Base.push!-Union{Tuple{V}, Tuple{T}, Tuple{DataValueArray{T,1},DataValue{V}}} where V where T",
    "page": "Home",
    "title": "Base.push!",
    "category": "method",
    "text": "push!{T,V}(X::DataValueVector{T}, v::DataValue{V})\n\nInsert a value at the end of X from a DataValue value v. If v is null then this method adds a null entry at the end of X. Returns X.\n\n\n\n\n\n"
},

{
    "location": "#Base.push!-Union{Tuple{V}, Tuple{T}, Tuple{DataValueArray{T,1},V}} where V where T",
    "page": "Home",
    "title": "Base.push!",
    "category": "method",
    "text": "push!{T,V}(X::DataValueVector{T}, v::V)\n\nInsert v at the end of X, which registers v as a present value.\n\n\n\n\n\n"
},

{
    "location": "#Base.pushfirst!-Tuple{DataValueArray{T,1} where T,Any}",
    "page": "Home",
    "title": "Base.pushfirst!",
    "category": "method",
    "text": "pushfirst!(X::DataValueVector, v)\n\nInsert a value v at the beginning of X and return X.\n\n\n\n\n\n"
},

{
    "location": "#Base.pushfirst!-Tuple{DataValueArray{T,1} where T,DataValue}",
    "page": "Home",
    "title": "Base.pushfirst!",
    "category": "method",
    "text": "pushfirst!(X::DataValueVector, v::DataValue)\n\nInsert a value at the beginning of X from a DataValue value v. If v is null then this method inserts a null entry at the beginning of X. Returns X.\n\n\n\n\n\n"
},

{
    "location": "#Base.reduce-Union{Tuple{T}, Tuple{S}, Tuple{N}, Tuple{Any,T}} where T<:AbstractArray{S,N} where S<:DataValue where N",
    "page": "Home",
    "title": "Base.reduce",
    "category": "method",
    "text": "reduce(f, op::Function, X::DataValueArray; [skipna::Bool=false])\n\nReduce Xunder the operation op. One can set the behavior of this method to skip the null entries of X by setting the keyword argument skipna equal to true. If skipna behavior is enabled, f will be automatically lifted over the elements of X. Note that, in general, mapreducing over a DataValueArray will return a DataValue object regardless of whether skipna is set to true or false.\n\n\n\n\n\n"
},

{
    "location": "#Base.resize!-Union{Tuple{T}, Tuple{DataValueArray{T,1},Int64}} where T",
    "page": "Home",
    "title": "Base.resize!",
    "category": "method",
    "text": "resize!(X::DataValueVector, n::Int)\n\nResize a one-dimensional DataValueArray X to contain precisely n elements. If n is greater than the current length of X, then each new entry will be designated as null.\n\n\n\n\n\n"
},

{
    "location": "#Base.reverse",
    "page": "Home",
    "title": "Base.reverse",
    "category": "function",
    "text": "reverse(X::DataValueVector, [s], [n])\n\nReturn a copy of X with the first n elements starting at index s (inclusive) reversed. If unspecified, s and n will default to 1 and length(X), respectively.\n\n\n\n\n\n"
},

{
    "location": "#Base.reverse!",
    "page": "Home",
    "title": "Base.reverse!",
    "category": "function",
    "text": "reverse!(X::DataValueVector, [s], [n])\n\nModify X by reversing the first n elements starting at index s (inclusive). If unspecified, s and n will default to 1 and length(X), respectively.\n\n\n\n\n\n"
},

{
    "location": "#Base.setindex!-Tuple{DataValueArray,Any,Vararg{Int64,N} where N}",
    "page": "Home",
    "title": "Base.setindex!",
    "category": "method",
    "text": "setindex!(X::DataValueArray, v::Any, I::Int...)\n\nSet the entry of X at position I equal to v. This method always updates X.isna to indicate that the entry at index I is present and X.values to store v at I.\n\n\n\n\n\n"
},

{
    "location": "#Base.setindex!-Tuple{DataValueArray,DataValue,Vararg{Int64,N} where N}",
    "page": "Home",
    "title": "Base.setindex!",
    "category": "method",
    "text": "setindex!(X::DataValueArray, v::DataValue, I::Int...)\n\nSet the entry of X at position I equal to a DataValue value v. If v is missing, then only X.isna is updated to indicate that the entry at index I is null. If v is not null, then X.isna is updated to indicate that the entry at index I is present and X.values is updated to store the value wrapped in v.\n\n\n\n\n\n"
},

{
    "location": "#Base.size-Tuple{DataValueArray}",
    "page": "Home",
    "title": "Base.size",
    "category": "method",
    "text": "size(X::DataValueArray, [d::Real])\n\nReturn a tuple containing the lengths of each dimension of X, or if d is specific, the length of X along dimension d.\n\n\n\n\n\n"
},

{
    "location": "#Base.sizehint!-Tuple{DataValueArray{T,1} where T,Integer}",
    "page": "Home",
    "title": "Base.sizehint!",
    "category": "method",
    "text": "sizehint!(X::DataValueVector, newsz::Integer)\n\nSuggest that collection X reserve capacity for at least newsz elements. This can improve performance.\n\n\n\n\n\n"
},

{
    "location": "#Base.splice!",
    "page": "Home",
    "title": "Base.splice!",
    "category": "function",
    "text": "splice!(X::DataValueVector, i::Integer, [ins])\n\nRemove the item at index i and return the removed item. Subsequent items are shifted down to fill the resulting gap. If specified, replacement values from an ordered collection will be spliced in place of the removed item.\n\n\n\n\n\n"
},

{
    "location": "#Base.splice!-Union{Tuple{T}, Tuple{DataValueArray{T,1} where T,UnitRange{T}}, Tuple{DataValueArray{T,1} where T,UnitRange{T},Any}} where T<:Integer",
    "page": "Home",
    "title": "Base.splice!",
    "category": "method",
    "text": "splice!{T<:Integer}(X::DataValueVector, rng::UnitRange{T}, [ins])\n\nRemove items in the specified index range, and return a collection containing the removed items. Subsequent items are shifted down to fill the resulting gap. If specified, replacement values from an ordered collection will be spliced in place of the removed items.\n\nTo insert ins before an index n without removing any items, use splice!(X, n:n-1, ins).\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DataValues]\nOrder = [:type, :function]"
},

]}
