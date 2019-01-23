var documenterSearchIndex = {"docs": [

{
    "location": "#FunctionalTables.FunctionalTable",
    "page": "Home",
    "title": "FunctionalTables.FunctionalTable",
    "category": "type",
    "text": "FunctionalTable(itr)\nFunctionalTable(itr, sortspecs)\nFunctionalTable(itr, sortspecs, sortingpolicy; cfg)\n\n\nCreate a FunctionalTable from an iterable that returns NamedTuples.\n\nReturned values need to have the same names (but not necessarily types).\n\nsorting specifies sorting, and is a tuple of :key or :key => reverse elements.\n\ncfg determines sink configuration for collecting elements of the columns, see SinkConfig.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.RLEVector",
    "page": "Home",
    "title": "FunctionalTables.RLEVector",
    "category": "type",
    "text": "struct RLEVector{C, T, S}\n\nAn RLE encoded vector, using negative lengths for missing values.\n\nWhen an elemenet in counts is positive, it encodes that many of the corresponding element in data.\n\nNegative counts encode missing values of type S (has to be a concrete singleton). In this case there is no corresponding value in data, ie data may have fewer elements than counts.\n\nAn RLEVector can also act as a column.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.SinkConfig",
    "page": "Home",
    "title": "FunctionalTables.SinkConfig",
    "category": "type",
    "text": "struct SinkConfig{M}\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.SinkConfig-Tuple{}",
    "page": "Home",
    "title": "FunctionalTables.SinkConfig",
    "category": "method",
    "text": "SinkConfig(; useRLE, missingvalue)\n\n\nMake a sink configuration, using defaults.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.TrustSorting",
    "page": "Home",
    "title": "FunctionalTables.TrustSorting",
    "category": "type",
    "text": "Accept the specified sorting to hold without any checks (except for verifying that column names are valid).\n\nnote: Note\nThis can lead to incorrect results, use cautiously. VerifySorting is recommended instead as it has little overhead.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.TrySorting",
    "page": "Home",
    "title": "FunctionalTables.TrySorting",
    "category": "type",
    "text": "Try the specified sorting, then gracefully degrade to a subset of it that holds.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.VerifySorting",
    "page": "Home",
    "title": "FunctionalTables.VerifySorting",
    "category": "type",
    "text": "Verify that the specified sorting holds. This is the default sorting policy.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.by-Tuple{Tuple{Vararg{Symbol,N} where N},FunctionalTable}",
    "page": "Home",
    "title": "FunctionalTables.by",
    "category": "method",
    "text": "by(indexkeys, ft; cfg)\n\n\nAn iterator that groups rows of tables by the columns indexkeys, returning (index::NamedTupe, table::FunctionalTable) for each contiguous block of the index keys.\n\ncfg is used for collecting table.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.collect_column-Tuple{SinkConfig,Any}",
    "page": "Home",
    "title": "FunctionalTables.collect_column",
    "category": "method",
    "text": "collect_column(cfg, itr)\n\n\nCollect results from itr into a sink (using config cfg), then finalize and return the column.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.collect_columns-Union{Tuple{K}, Tuple{SinkConfig,Any,ColumnSorting,SortingPolicy{K}}} where K",
    "page": "Home",
    "title": "FunctionalTables.collect_columns",
    "category": "method",
    "text": "columns, sorting = \n\ncollect_columns(cfg, itr, sorting, sortingpolicy)\n\n\nCollect results from itr, which are supposed to be NamedTuples with the same names, into sinks (using config cfg), then finalize and return the NamedTuple of the columns and the sorting (which is ≡ sorting unless sortingpolicy ≡ SortingPolicy(:prefix)).\n\nsorting is ignored when sortingpolicy ≡ SortingPolicy(:accept), otherwise used according to the value of the latter.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.columns-Tuple{FunctionalTable}",
    "page": "Home",
    "title": "FunctionalTables.columns",
    "category": "method",
    "text": "columns(ft; vector, mutable)\n\n\nReturn the columns in a NamedTuple.\n\nWhen mutable, all columns will be mutable <: AbstractVector, and not share (shallow) structure.\n\nWhen vector, all columns will be <: AbstractVector, but may be immutable or share structure.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.select-Tuple{FunctionalTable,Tuple{Vararg{Symbol,N} where N}}",
    "page": "Home",
    "title": "FunctionalTables.select",
    "category": "method",
    "text": "select(ft, keep)\n\n\nselect(ft, keep...) select(ft; drop)\n\nSelect a subset of columns from the table.\n\nselect(ft, keep) and select(ft, keep...) returns the table with the given columns.\n\nselect(ft; drop = keys) is a convenience form for keeping all but the given columns.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.ColumnSort",
    "page": "Home",
    "title": "FunctionalTables.ColumnSort",
    "category": "type",
    "text": "ColumnSort(key)\nColumnSort(key, rev)\n\n\nProcess an individual sort specification, called by column_sorting.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.ColumnSort",
    "page": "Home",
    "title": "FunctionalTables.ColumnSort",
    "category": "type",
    "text": "struct ColumnSort{K, R}\n\nSort specification for a column. K::Symbol is a key for sorting, R::Bool reverses sorting for this key.\n\nThis type is not part of the interface, for internal representation.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.ColumnSorting",
    "page": "Home",
    "title": "FunctionalTables.ColumnSorting",
    "category": "type",
    "text": "Type for sorting, used internally.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.Keys",
    "page": "Home",
    "title": "FunctionalTables.Keys",
    "category": "type",
    "text": "Type for keys, used internally.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.RepeatedValue",
    "page": "Home",
    "title": "FunctionalTables.RepeatedValue",
    "category": "type",
    "text": "RepeatedValue(value, len)\n\nEquivalent to a vector containing len instances of value. Used internally.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.SortingPolicy",
    "page": "Home",
    "title": "FunctionalTables.SortingPolicy",
    "category": "type",
    "text": "struct SortingPolicy{K}\n\nPolicy for dealing with specified sortings.\n\nSee VerifySorting, TrustSorting, and TrySorting.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.SplitTable",
    "page": "Home",
    "title": "FunctionalTables.SplitTable",
    "category": "type",
    "text": "struct SplitTable{K, T<:FunctionalTable, C<:SinkConfig}\n\nImplements by.\n\nIterator state is a tuple, with\n\nsinks and firstkey, created from the element with a non-matching key,\nitrstate, the iteration state for itr.\n\n\n\n\n\n"
},

{
    "location": "#Base.map-Tuple{Any,FunctionalTables.SplitTable}",
    "page": "Home",
    "title": "Base.map",
    "category": "method",
    "text": "map(f, st; cfg)\n\n\nMap a table split with by using f.\n\nSpecifically, f(indexkeys, table) receives the index keys (a NamedTuple) and a FunctionalTable.\n\nIt is supposed to return an iterable that returns rows (can be a FunctionalTable). These will be prepended with the corresponding index, and collected into a FunctionalTable with cfg.\n\nWhen f returns just a single row (eg aggregation), wrap by Ref to create a single-element iterable.\n\n\n\n\n\n"
},

{
    "location": "#Base.map-Tuple{Union{Function, Type},FunctionalTable}",
    "page": "Home",
    "title": "Base.map",
    "category": "method",
    "text": "map(f, ft; cfg)\n\n\n\n\n\n\n"
},

{
    "location": "#Base.merge-Tuple{FunctionalTable,FunctionalTable}",
    "page": "Home",
    "title": "Base.merge",
    "category": "method",
    "text": "merge(a, b; replace)\n\n\nMerge two FunctionalTables.\n\nWhen replace == true, columns in the first one are replaced by second one, otherwise an error is thrown if column names overlap.\n\n\n\n\n\n"
},

{
    "location": "#Base.merge-Tuple{FunctionalTable,Union{Function, Type}}",
    "page": "Home",
    "title": "Base.merge",
    "category": "method",
    "text": "merge(ft, f; cfg, replace)\n\n\nMap ft using f by rows, then merge the two. See map(::Callable,::FunctionalTable).\n\ncfg is passed to map, replace governs replacement of overlapping columns in merge.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.append1-Union{Tuple{S}, Tuple{T}, Tuple{Array{T,1},S}} where S where T",
    "page": "Home",
    "title": "FunctionalTables.append1",
    "category": "method",
    "text": "append1(v, elt)\n\n\nAppend elt to v, allocating a new vector and copying the contents.\n\nType of new collection is calculated using promote_type.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.cancontain-Union{Tuple{S}, Tuple{Any,S}} where S",
    "page": "Home",
    "title": "FunctionalTables.cancontain",
    "category": "method",
    "text": "cancontain(T, elt)\n\n\nTest if a collection of element type T can contain a new element elt without any loss of precision.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.checkvalidkeys-Tuple{Tuple{Vararg{Symbol,N} where N},Tuple{Vararg{Symbol,N} where N}}",
    "page": "Home",
    "title": "FunctionalTables.checkvalidkeys",
    "category": "method",
    "text": "checkvalidkeys(argkeys, validkeys)\n\n\nCheck that argkeys are a subset of the valid keys.\n\nWhen that does not hold, throw and error with an informative message.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.cmp_sorting-Tuple{FunctionalTables.ColumnSorting,Any,Any}",
    "page": "Home",
    "title": "FunctionalTables.cmp_sorting",
    "category": "method",
    "text": "cmp_sorting(cs, a, b)\n\n\nCompare rows a and b, which support the getproperty interface, with the given column sorting.\n\nInternal.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.column_sorting",
    "page": "Home",
    "title": "FunctionalTables.column_sorting",
    "category": "function",
    "text": "column_sorting(sortspecs)\ncolumn_sorting(sortspecs, colkeys)\n\n\nProcess sorting specifications for columns (an iterable or possibly a ColumnSorting), return a value of type ColumnSorting.\n\nVerify that sort keys are unique. When colkeys is given, verify that the sort keys are a subset of it.\n\nAccepted syntax:\n\n:key, for sorting a column in ascending order\n:key => reverse, for sorting a column in descending order\n\nAll functions which accept sort specs should use this, but the function itself is not part of the API.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.dropkeys-Tuple{Tuple{Vararg{Symbol,N} where N},Tuple{Vararg{Symbol,N} where N}}",
    "page": "Home",
    "title": "FunctionalTables.dropkeys",
    "category": "method",
    "text": "dropkeys(ftkeys, drop)\n\n\nCheck that drop ⊆ ftkeys, then return ftkeys ∖ drop.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.finalize_sink-Tuple{SinkConfig,Array{T,1} where T}",
    "page": "Home",
    "title": "FunctionalTables.finalize_sink",
    "category": "method",
    "text": "finalize_sink(?, sink)\n\n\nConvert sink to a column.\n\nsink may share structure with the result and is not supposed to be used for saving any more elements.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.finalize_sinks-Tuple{Any,Union{Tuple, NamedTuple}}",
    "page": "Home",
    "title": "FunctionalTables.finalize_sinks",
    "category": "method",
    "text": "finalize_sinks(cfg, sinks)\n\n\nFinalize a (named) tuple of sinks.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.fuse-Tuple{Any,NamedTuple,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "FunctionalTables.fuse",
    "category": "method",
    "text": "fuse(f, index, tables)\n\n\nPrepend the index as repeated columns to f(index, tables...).\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.make_sink-Tuple{SinkConfig,Any}",
    "page": "Home",
    "title": "FunctionalTables.make_sink",
    "category": "method",
    "text": "make_sink(cfg, elt)\n\n\nCreate and return a sink using configuration cfg that stores elt.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.make_sinks-Tuple{Any,Union{Tuple, NamedTuple}}",
    "page": "Home",
    "title": "FunctionalTables.make_sinks",
    "category": "method",
    "text": "make_sinks(cfg, elts)\n\n\nMake sinks for a (named) tuple pf elements.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.merge_repeated-Tuple{NamedTuple,FunctionalTable}",
    "page": "Home",
    "title": "FunctionalTables.merge_repeated",
    "category": "method",
    "text": "merge_repeated(index, ft)\n\n\nMake a functional table from index, repeating each value for a column to match the length of ft, then merge the two.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.merge_sorting-Tuple{FunctionalTables.ColumnSorting,Tuple{Vararg{Symbol,N} where N}}",
    "page": "Home",
    "title": "FunctionalTables.merge_sorting",
    "category": "method",
    "text": "merge_sorting(cs, otherkeys)\n\n\nCalculate sorting when a table with sorting is merged with a table containing otherkeys, which may replace columns.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.narrow-Tuple{Any}",
    "page": "Home",
    "title": "FunctionalTables.narrow",
    "category": "method",
    "text": "narrow(x)\n\n\nConvert the argument to a narrower type if possible without losing precision.\n\nnote: Note\nThis function is not type stable, use only when new container types are determined.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.retained_sorting-Tuple{FunctionalTables.ColumnSorting,Any,Any}",
    "page": "Home",
    "title": "FunctionalTables.retained_sorting",
    "category": "method",
    "text": "retained_sorting(cs, a, b)\n\n\nReturn the part of sorting under which a ≤ b.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.select_sorting-Tuple{FunctionalTables.ColumnSorting,Tuple{Vararg{Symbol,N} where N}}",
    "page": "Home",
    "title": "FunctionalTables.select_sorting",
    "category": "method",
    "text": "select_sorting(cs, keep)\n\n\nCalculate sorting when only keep keys are kept.\n\nkeep may contain keys not in the sorting, ie those of a FunctionalTable.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.sortkey-Union{Tuple{ColumnSort{K,R} where R}, Tuple{K}} where K",
    "page": "Home",
    "title": "FunctionalTables.sortkey",
    "category": "method",
    "text": "sortkey(cs)\n\n\nAccessor for sort key. Internal.\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.split_namedtuple-Tuple{Type{#s596} where #s596<:NamedTuple,NamedTuple}",
    "page": "Home",
    "title": "FunctionalTables.split_namedtuple",
    "category": "method",
    "text": "split_namedtuple(splitter, nt)\n\n\nSplits a named tuple in two, based on the names in splitter.\n\nReturns two NamedTuples; the first one is ordered as splitter, the second one with the remaining values as in the original argument.\n\njulia> split_namedtuple(NamedTuple{(:a, :c)}, (c = 1, b = 2, a = 3, d = 4))\n((a = 3, c = 1), (b = 2, d = 4))\n\n\n\n\n\n"
},

{
    "location": "#FunctionalTables.store!_or_reallocate-Union{Tuple{T}, Tuple{SinkConfig,Array{T,1},Any}} where T",
    "page": "Home",
    "title": "FunctionalTables.store!_or_reallocate",
    "category": "method",
    "text": "store!_or_reallocate(?, sink, elt)\n\n\nEither store elt in sink (in which case the returned value is ≡ sink), or allocate a new sink that can do this, copy the contents, save elt and return that (then the returned value is ≢ sink).\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FunctionalTables]\nOrder = [:type, :function]"
},

]}
