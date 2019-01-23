var documenterSearchIndex = {"docs": [

{
    "location": "#IndexedTables.All",
    "page": "Home",
    "title": "IndexedTables.All",
    "category": "type",
    "text": "All(cols::Union{Symbol, Int}...)\n\nSelect the union of the selections in cols. If cols == (), select all columns.\n\nExamples\n\nt = table([1,1,2,2], [1,2,1,2], [1,2,3,4], [0, 0, 0, 0], names=[:a,:b,:c,:d])\nselect(t, All(:a, (:b, :c)))\nselect(t, All())\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.Between",
    "page": "Home",
    "title": "IndexedTables.Between",
    "category": "type",
    "text": "Between(first, last)\n\nSelect the columns between first and last.\n\nExamples\n\nt = table([1,1,2,2], [1,2,1,2], 1:4, \'a\':\'d\', names=[:a,:b,:c,:d])\nselect(t, Between(:b, :d))\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.ColDict-Tuple{Any}",
    "page": "Home",
    "title": "IndexedTables.ColDict",
    "category": "method",
    "text": "d = ColDict(t)\n\nCreate a mutable dictionary of columns in t.\n\nTo get the immutable iterator of the same type as t call d[]\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.IndexedTable",
    "page": "Home",
    "title": "IndexedTables.IndexedTable",
    "category": "type",
    "text": "A tabular data structure that extends Columns.  Create an IndexedTable with the  table function.\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.Keys",
    "page": "Home",
    "title": "IndexedTables.Keys",
    "category": "type",
    "text": "Keys()\n\nSelect the primary keys.\n\nExamples\n\nt = table([1,1,2,2], [1,2,1,2], [1,2,3,4], names=[:a,:b,:c], pkey = (:a, :b))\nselect(t, Keys())\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.NDSparse-Tuple",
    "page": "Home",
    "title": "IndexedTables.NDSparse",
    "category": "method",
    "text": "NDSparse(columns...; names=Symbol[...], kwargs...)\n\nConstruct an NDSparse array from columns. The last argument is the data column, and the rest are index columns. The names keyword argument optionally specifies names for the index columns (dimensions).\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.Not",
    "page": "Home",
    "title": "IndexedTables.Not",
    "category": "type",
    "text": "Not(cols::Union{Symbol, Int}...)\n\nSelect the complementary of the selection in cols. Not can accept several arguments, in which case it returns the complementary of the union of the selections.\n\nExamples\n\nt = table([1,1,2,2], [1,2,1,2], [1,2,3,4], names=[:a,:b,:c], pkey = (:a, :b))\nselect(t, Not(:a))\nselect(t, Not(:a, (:a, :b)))\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.aggregate!-Tuple{Any,NDSparse}",
    "page": "Home",
    "title": "IndexedTables.aggregate!",
    "category": "method",
    "text": "aggregate!(f::Function, arr::NDSparse)\n\nCombine adjacent rows with equal indices using the given 2-argument reduction function, in place.\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.asofjoin-Tuple{NDSparse,NDSparse}",
    "page": "Home",
    "title": "IndexedTables.asofjoin",
    "category": "method",
    "text": "asofjoin(left::NDSparse, right::NDSparse)\n\nJoin rows from left with the \"most recent\" value from right.\n\nExample\n\nusing Dates\nakey1 = [\"A\", \"A\", \"B\", \"B\"]\nakey2 = [Date(2017,11,11), Date(2017,11,12), Date(2017,11,11), Date(2017,11,12)]\navals = collect(1:4)\n\nbkey1 = [\"A\", \"A\", \"B\", \"B\"]\nbkey2 = [Date(2017,11,12), Date(2017,11,13), Date(2017,11,10), Date(2017,11,13)]\nbvals = collect(5:8)\n\na = ndsparse((akey1, akey2), avals)\nb = ndsparse((bkey1, bkey2), bvals)\n\nasofjoin(a, b)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.collect_columns-Tuple{Any}",
    "page": "Home",
    "title": "IndexedTables.collect_columns",
    "category": "method",
    "text": "collect_columns(itr)\n\nCollect an iterable as a Columns object if it iterates Tuples or NamedTuples, as a normal Array otherwise.\n\nExamples\n\ns = [(1,2), (3,4)]\ncollect_columns(s)\n\ns2 = Iterators.filter(isodd, 1:8)\ncollect_columns(s2)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.colnames",
    "page": "Home",
    "title": "IndexedTables.colnames",
    "category": "function",
    "text": "colnames(itr)\n\nReturns the names of the \"columns\" in itr.\n\nExamples:\n\ncolnames(1:3)\ncolnames(Columns([1,2,3], [3,4,5]))\ncolnames(table([1,2,3], [3,4,5]))\ncolnames(Columns(x=[1,2,3], y=[3,4,5]))\ncolnames(table([1,2,3], [3,4,5], names=[:x,:y]))\ncolnames(ndsparse(Columns(x=[1,2,3]), Columns(y=[3,4,5])))\ncolnames(ndsparse(Columns(x=[1,2,3]), [3,4,5]))\ncolnames(ndsparse(Columns(x=[1,2,3]), [3,4,5]))\ncolnames(ndsparse(Columns([1,2,3], [4,5,6]), Columns(x=[6,7,8])))\ncolnames(ndsparse(Columns(x=[1,2,3]), Columns([3,4,5],[6,7,8])))\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.columns",
    "page": "Home",
    "title": "IndexedTables.columns",
    "category": "function",
    "text": "columns(itr, select::Selection = All())\n\nSelect one or more columns from an iterable of rows as a tuple of vectors.\n\nselect specifies which columns to select. Refer to the select function for the  available selection options and syntax.\n\nitr can be NDSparse, Columns, AbstractVector, or their distributed counterparts.\n\nExamples\n\nt = table(1:2, 3:4; names = [:x, :y])\n\ncolumns(t)\ncolumns(t, :x)\ncolumns(t, (:x,))\ncolumns(t, (:y, :x => -))\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.columns-Tuple{Any,Any}",
    "page": "Home",
    "title": "IndexedTables.columns",
    "category": "method",
    "text": "columns(itr, which)\n\nReturns a vector or a tuple of vectors from the iterator.\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.convertdim-Tuple{NDSparse,Union{Int64, Symbol},Any}",
    "page": "Home",
    "title": "IndexedTables.convertdim",
    "category": "method",
    "text": "convertdim(x::NDSparse, d::DimName, xlate; agg::Function, vecagg::Function, name)\n\nApply function or dictionary xlate to each index in the specified dimension. If the mapping is many-to-one, agg or vecagg is used to aggregate the results. If agg is passed, it is used as a 2-argument reduction function over the data. If vecagg is passed, it is used as a vector-to-scalar function to aggregate the data. name optionally specifies a new name for the translated dimension.\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.dimlabels-Tuple{NDSparse}",
    "page": "Home",
    "title": "IndexedTables.dimlabels",
    "category": "method",
    "text": "dimlabels(t::NDSparse)\n\nReturns an array of integers or symbols giving the labels for the dimensions of t. ndims(t) == length(dimlabels(t)).\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.dropmissing",
    "page": "Home",
    "title": "IndexedTables.dropmissing",
    "category": "function",
    "text": "dropmissing(t        )\ndropmissing(t, select)\n\nDrop rows of table t which contain missing values (either Missing or DataValue),  optionally only using the columns in select.  Column types will be converted to  non-missing types.  For example:\n\nVector{Union{Int, Missing}} -> Vector{Int}\nDataValueArray{Int} -> Vector{Int}\n\nExample\n\nt = table([0.1,0.5,missing,0.7], [2,missing,4,5], [missing,6,missing,7], names=[:t,:x,:y])\ndropmissing(t)\ndropmissing(t, (:t, :x))\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.flatten",
    "page": "Home",
    "title": "IndexedTables.flatten",
    "category": "function",
    "text": "flatten(t::Table, col=length(columns(t)))\n\nFlatten col column which may contain a vector of vectors while repeating the other fields. If column argument is not provided, default to last column.\n\nExamples:\n\nx = table([1,2], [[3,4], [5,6]], names=[:x, :y])\nflatten(x, 2)\n\nt1 = table([3,4],[5,6], names=[:a,:b])\nt2 = table([7,8], [9,10], names=[:a,:b])\nx = table([1,2], [t1, t2], names=[:x, :y]);\nflatten(x, :y)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.flush!-Tuple{NDSparse}",
    "page": "Home",
    "title": "IndexedTables.flush!",
    "category": "method",
    "text": "flush!(arr::NDSparse)\n\nCommit queued assignment operations, by sorting and merging the internal temporary buffer.\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.groupby",
    "page": "Home",
    "title": "IndexedTables.groupby",
    "category": "function",
    "text": "groupby(f, t, by = pkeynames(t); select, flatten=false)\n\nApply f to the select-ed columns (see select) in groups defined by the  unique values of by. \n\nIf f returns a vector, split it into multiple columns with flatten = true.\n\nExamples\n\nusing Statistics\n\nt=table([1,1,1,2,2,2], [1,1,2,2,1,1], [1,2,3,4,5,6], names=[:x,:y,:z])\n\ngroupby(mean, t, :x, select=:z)\ngroupby(identity, t, (:x, :y), select=:z)\ngroupby(mean, t, (:x, :y), select=:z)\n\ngroupby((mean, std, var), t, :y, select=:z)\ngroupby((q25=z->quantile(z, 0.25), q50=median, q75=z->quantile(z, 0.75)), t, :y, select=:z)\n\n# apply different aggregation functions to different columns\ngroupby((ymean = :y => mean, zmean = :z => mean), t, :x)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.groupjoin-Tuple{Union{IndexedTable, NDSparse},Union{IndexedTable, NDSparse}}",
    "page": "Home",
    "title": "IndexedTables.groupjoin",
    "category": "method",
    "text": "groupjoin(left, right; kw...)\ngroupjoin(f, left, right; kw...)\n\nJoin left and right creating groups of values with matching keys.\n\nFor keyword argument options, see join.\n\nExamples\n\nl = table([1,1,1,2], [1,2,2,1], [1,2,3,4], names=[:a,:b,:c], pkey=(:a, :b))\nr = table([0,1,1,2], [1,2,2,1], [1,2,3,4], names=[:a,:b,:d], pkey=(:a, :b))\n\ngroupjoin(l, r)\ngroupjoin(l, r; how = :left)\ngroupjoin(l, r; how = :outer)\ngroupjoin(l, r; how = :anti)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.groupreduce",
    "page": "Home",
    "title": "IndexedTables.groupreduce",
    "category": "function",
    "text": "groupreduce(f, t, by = pkeynames(t); select)\n\nCalculate a reduce operation f over table t on groups defined by the values  in selection by.  The result is put in a table keyed by the unique by values.\n\nExamples\n\nt = table([1,1,1,2,2,2], 1:6, names=[:x, :y])\ngroupreduce(+,        t, :x; select = :y)\ngroupreduce((sum=+,), t, :x; select = :y)  # change output column name to :sum\n\nt2 = table([1,1,1,2,2,2], [1,1,2,2,3,3], 1:6, names = [:x, :y, :z])\ngroupreduce(+, t2, (:x, :y), select = :z)\n\n# different reducers for different columns\ngroupreduce((sumy = :y => +, sumz = :z => +), t2, :x)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.insertcol-Tuple{Any,Integer,Any,Any}",
    "page": "Home",
    "title": "IndexedTables.insertcol",
    "category": "method",
    "text": "insertcol(t, position::Integer, name, x)\n\nInsert a column x named name at position. Returns a new table.\n\nExample\n\nt = table([0.01, 0.05], [2,1], [3,4], names=[:t, :x, :y], pkey=:t)\ninsertcol(t, 2, :w, [0,1])\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.insertcolafter-NTuple{4,Any}",
    "page": "Home",
    "title": "IndexedTables.insertcolafter",
    "category": "method",
    "text": "insertcolafter(t, after, name, col)\n\nInsert a column col named name after after. Returns a new table.\n\nExample\n\nt = table([0.01, 0.05], [2,1], [3,4], names=[:t, :x, :y], pkey=:t)\ninsertcolafter(t, :t, :w, [0,1])\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.insertcolbefore-NTuple{4,Any}",
    "page": "Home",
    "title": "IndexedTables.insertcolbefore",
    "category": "method",
    "text": "insertcolbefore(t, before, name, col)\n\nInsert a column col named name before before. Returns a new table.\n\nExample\n\nt = table([0.01, 0.05], [2,1], [3,4], names=[:t, :x, :y], pkey=:t)\ninsertcolbefore(t, :x, :w, [0,1])\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.map_rows-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "IndexedTables.map_rows",
    "category": "method",
    "text": "map_rows(f, c...)\n\nTransform collection c by applying f to each element. For multiple collection arguments, apply f elementwise. Collect output as Columns if f returns Tuples or NamedTuples with constant fields, as Array otherwise.\n\nExamples\n\nmap_rows(i -> (exp = exp(i), log = log(i)), 1:5)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.ncols",
    "page": "Home",
    "title": "IndexedTables.ncols",
    "category": "function",
    "text": "ncols(itr)\n\nReturns the number of columns in itr.\n\nExamples\n\nncols([1,2,3]) == 1\nncols(rows(([1,2,3],[4,5,6]))) == 2\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.ndsparse",
    "page": "Home",
    "title": "IndexedTables.ndsparse",
    "category": "function",
    "text": "ndsparse(keys, values; kw...)\n\nConstruct an NDSparse array with the given keys and values columns. On construction,  the keys and data are sorted in lexicographic order of the keys.\n\nKeyword Argument Options:\n\nagg = nothing – Function to aggregate values with duplicate keys.\npresorted = false – Are the key columns already sorted?\ncopy = true – Should the columns in keys and values be copied?\nchunks = nothing – Provide an integer to distribute data into chunks chunks.\nA good choice is nworkers() (after using Distributed)\nSee also: distribute\n\nExamples:\n\nx = ndsparse([\"a\",\"b\"], [3,4])\nkeys(x)\nvalues(x)\nx[\"a\"]\n\n# Dimensions are named if constructed with a named tuple of columns \nx = ndsparse((index = 1:10,), rand(10))\nx[1]\n\n# Multiple dimensions by passing a (named) tuple of columns\nx = ndsparse((x = 1:10, y = 1:2:20), rand(10))\nx[1, 1]\n\n# Value columns can also have names via named tuples\nx = ndsparse(1:10, (x=rand(10), y=rand(10)))\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.pkeynames-Tuple{IndexedTables.AbstractIndexedTable}",
    "page": "Home",
    "title": "IndexedTables.pkeynames",
    "category": "method",
    "text": "pkeynames(t::Table)\n\nNames of the primary key columns in t.\n\nExamples\n\nt = table([1,2], [3,4]);\npkeynames(t)\n\nt = table([1,2], [3,4], pkey=1);\npkeynames(t)\n\nt = table([2,1],[1,3],[4,5], names=[:x,:y,:z], pkey=(1,2));\npkeynames(t)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.pkeynames-Tuple{NDSparse}",
    "page": "Home",
    "title": "IndexedTables.pkeynames",
    "category": "method",
    "text": "pkeynames(t::NDSparse)\n\nNames of the primary key columns in t.\n\nExample\n\nx = ndsparse([1,2],[3,4])\npkeynames(x)\n\nx = ndsparse((x=1:10, y=1:2:20), rand(10))\npkeynames(x)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.pkeys-Tuple{IndexedTable}",
    "page": "Home",
    "title": "IndexedTables.pkeys",
    "category": "method",
    "text": "pkeys(itr::IndexedTable)\n\nPrimary keys of the table. If Table doesn\'t have any designated primary key columns (constructed without pkey argument) then a default key of tuples (1,):(n,) is generated.\n\nExample\n\na = table([\"a\",\"b\"], [3,4]) # no pkey\npkeys(a)\n\na = table([\"a\",\"b\"], [3,4], pkey=1)\npkeys(a)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.popcol-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "IndexedTables.popcol",
    "category": "method",
    "text": "popcol(t, cols...)\n\nRemove the column(s) cols from the table. Returns a new table.\n\nExample\n\nt = table([0.01, 0.05], [2,1], [3,4], names=[:t, :x, :y], pkey=:t)\npopcol(t, :x)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.pushcol-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "IndexedTables.pushcol",
    "category": "method",
    "text": "pushcol(t, name, x)\n\nPush a column x to the end of the table. name is the name for the new column. Returns a new table.\n\npushcol(t, map::Pair...)\n\nPush many columns at a time.\n\nExample\n\nt = table([0.01, 0.05], [2,1], [3,4], names=[:t, :x, :y], pkey=:t)\npushcol(t, :z, [1//2, 3//4])\npushcol(t, :z => [1//2, 3//4])\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.reducedim_vec-Tuple{Any,NDSparse,Any}",
    "page": "Home",
    "title": "IndexedTables.reducedim_vec",
    "category": "method",
    "text": "reducedim_vec(f::Function, arr::NDSparse, dims)\n\nLike reduce, except uses a function mapping a vector of values to a scalar instead of a 2-argument scalar function.\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.reindex",
    "page": "Home",
    "title": "IndexedTables.reindex",
    "category": "function",
    "text": "reindex(t::IndexedTable, by)\nreindex(t::IndexedTable, by, select)\n\nReindex table t with new primary key by, optionally keeping a subset of columns via select.  For NDSparse, use selectkeys.\n\nExample\n\nt = table([2,1],[1,3],[4,5], names=[:x,:y,:z], pkey=(1,2))\n\nt2 = reindex(t, (:y, :z))\n\npkeynames(t2)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.renamecol-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "IndexedTables.renamecol",
    "category": "method",
    "text": "renamecol(t, col, newname)\n\nSet newname as the new name for column col in t. Returns a new table.\n\nrenamecol(t, map::Pair...)\n\nRename multiple columns at a time.\n\nExample\n\nt = table([0.01, 0.05], [2,1], names=[:t, :x])\nrenamecol(t, :t, :time)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.rows",
    "page": "Home",
    "title": "IndexedTables.rows",
    "category": "function",
    "text": "rows(itr, select = All())\n\nSelect one or more fields from an iterable of rows as a vector of their values.  Refer to  the select function for selection options and syntax.\n\nitr can be NDSparse, Columns, AbstractVector, or their distributed counterparts.\n\nExamples\n\nt = table([1,2],[3,4], names=[:x,:y])\nrows(t)\nrows(t, :x)\nrows(t, (:x,))\nrows(t, (:y, :x => -))\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.select-Tuple{IndexedTables.AbstractIndexedTable,Any}",
    "page": "Home",
    "title": "IndexedTables.select",
    "category": "method",
    "text": "select(t::Table, which::Selection)\n\nSelect all or a subset of columns, or a single column from the table.\n\nSelection is a type union of many types that can select from a table. It can be:\n\nInteger – returns the column at this position.\nSymbol – returns the column with this name.\nPair{Selection => Function} – selects and maps a function over the selection, returns the result.\nAbstractArray – returns the array itself. This must be the same length as the table.\nTuple of Selection – returns a table containing a column for every selector in the tuple. The tuple may also contain the type Pair{Symbol, Selection}, which the selection a name. The most useful form of this when introducing a new column.\nRegex – returns the columns with names that match the regular expression.\nType – returns columns with elements of the given type.\n\nExamples:\n\nt = table(1:10, randn(10), rand(Bool, 10); names = [:x, :y, :z])\n\n# select the :x vector\nselect(t, 1)\nselect(t, :x)\n\n# map a function to the :y vector\nselect(t, 2 => abs)\nselect(t, :y => x -> x > 0 ? x : -x)\n\n# select the table of :x and :z\nselect(t, (:x, :z))\nselect(t, r\"(x|z)\")\n\n# map a function to the table of :x and :y\nselect(t, (:x, :y) => row -> row[1] + row[2])\nselect(t, (1, :y) => row -> row.x + row.y)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.selectkeys-Tuple{NDSparse,Any}",
    "page": "Home",
    "title": "IndexedTables.selectkeys",
    "category": "method",
    "text": "selectkeys(x::NDSparse, sel)\n\nReturn an NDSparse with a subset of keys.\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.selectvalues-Tuple{NDSparse,Any}",
    "page": "Home",
    "title": "IndexedTables.selectvalues",
    "category": "method",
    "text": "selectvalues(x::NDSparse, sel)\n\nReturn an NDSparse with a subset of values\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.setcol-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "IndexedTables.setcol",
    "category": "method",
    "text": "setcol(t::Table, col::Union{Symbol, Int}, x::Selection)\n\nSets a x as the column identified by col. Returns a new table.\n\nsetcol(t::Table, map::Pair{}...)\n\nSet many columns at a time.\n\nExamples:\n\nt = table([1,2], [3,4], names=[:x, :y])\n\n# change second column to [5,6]\nsetcol(t, 2 => [5,6])\nsetcol(t, :y , :y => x -> x + 2)\n\n# add [5,6] as column :z \nsetcol(t, :z => 5:6)\nsetcol(t, :z, :y => x -> x + 2)\n\n# replacing the primary key results in a re-sorted copy\nt = table([0.01, 0.05], [1,2], [3,4], names=[:t, :x, :y], pkey=:t)\nt2 = setcol(t, :t, [0.1,0.05])\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.stack-Union{Tuple{D}, Tuple{D}, Tuple{D,Any}} where D<:Union{IndexedTable, NDSparse}",
    "page": "Home",
    "title": "IndexedTables.stack",
    "category": "method",
    "text": "stack(t, by = pkeynames(t); select = Not(by), variable = :variable, value = :value)`\n\nReshape a table from the wide to the long format. Columns in by are kept as indexing columns. Columns in select are stacked. In addition to the id columns, two additional columns labeled  variable and value are added, containing the column identifier and the stacked columns. See also unstack.\n\nExamples\n\nt = table(1:4, names = [:x], pkey=:x)\nt = pushcol(t, :xsquare, :x => x -> x^2)\nt = pushcol(t, :xcube  , :x => x -> x^3)\n\nstack(t)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.summarize",
    "page": "Home",
    "title": "IndexedTables.summarize",
    "category": "function",
    "text": "summarize(f, t, by = pkeynames(t); select = Not(by), stack = false, variable = :variable)\n\nApply summary functions column-wise to a table. Return a NamedTuple in the non-grouped case and a table in the grouped case. Use stack=true to stack results of the same summary function  for different columns.\n\nExamples\n\nusing Statistics\n\nt = table([1, 2, 3], [1, 1, 1], names = [:x, :y])\n\nsummarize((mean, std), t)\nsummarize((m = mean, s = std), t)\nsummarize(mean, t; stack=true)\nsummarize((mean, std), t; select = :y)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.table",
    "page": "Home",
    "title": "IndexedTables.table",
    "category": "function",
    "text": "table(cols; kw...)\n\nCreate a table from a (named) tuple of AbstractVectors.\n\ntable(cols::AbstractVector...; names::Vector{Symbol}, kw...)\n\nCreate a table from the provided cols, optionally with names.\n\ntable(cols::Columns; kw...)\n\nConstruct a table from a vector of tuples. See rows and Columns.\n\ntable(t::Union{IndexedTable, NDSparse}; kw...)\n\nCopy a Table or NDSparse to create a new table. The same primary keys as the input are used.\n\ntable(x; kw...)\n\nCreate an IndexedTable from any object x that follows the Tables.jl interface.\n\nKeyword Argument Options:\n\npkey: select columns to sort by and be the primary key.\npresorted = false: is the data pre-sorted by primary key columns? \ncopy = true: creates a copy of the input vectors if true. Irrelevant if chunks is specified.\nchunks::Integer: distribute the table.  Options are:\nInt – (number of chunks) a safe bet is nworkers() after using Distributed.\nVector{Int} – Number of elements in each of the length(chunks) chunks.\n\nExamples:\n\ntable(rand(10), rand(10), names = [:x, :y], pkey = :x)\n\ntable(rand(Bool, 20), rand(20), rand(20), pkey = [1,2])\n\ntable((x = 1:10, y = randn(10)))\n\ntable([(1,2), (3,4)])\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.unstack-Union{Tuple{D}, Tuple{D}, Tuple{D,Any}} where D<:Union{IndexedTable, NDSparse}",
    "page": "Home",
    "title": "IndexedTables.unstack",
    "category": "method",
    "text": "unstack(t, by = pkeynames(t); variable = :variable, value = :value)\n\nReshape a table from the long to the wide format. Columns in by are kept as indexing columns. Keyword arguments variable and value denote which column contains the column identifier and which the corresponding values.  See also stack.\n\nExamples\n\nt = table(1:4, [1, 4, 9, 16], [1, 8, 27, 64], names = [:x, :xsquare, :xcube], pkey = :x);\n\nlong = stack(t)\n\nunstack(long)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.update!-Union{Tuple{N}, Tuple{Union{Function, Type},NDSparse,Vararg{Any,N}}} where N",
    "page": "Home",
    "title": "IndexedTables.update!",
    "category": "method",
    "text": "update!(f::Function, arr::NDSparse, indices...)\n\nReplace data values x with f(x) at each location that matches the given indices.\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.where-Union{Tuple{N}, Tuple{NDSparse,Vararg{Any,N}}} where N",
    "page": "Home",
    "title": "IndexedTables.where",
    "category": "method",
    "text": "where(arr::NDSparse, indices...)\n\nReturns an iterator over data items where the given indices match. Accepts the same index arguments as getindex.\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.Perm",
    "page": "Home",
    "title": "IndexedTables.Perm",
    "category": "type",
    "text": "A permutation\n\nFields:\n\ncolumns: The columns being indexed as a vector of integers (column numbers)\nperm: the permutation - an array or iterator which has the sorted permutation\n\n\n\n\n\n"
},

{
    "location": "#Base.Broadcast.broadcast-Tuple{Function,NDSparse,NDSparse}",
    "page": "Home",
    "title": "Base.Broadcast.broadcast",
    "category": "method",
    "text": "broadcast(f, A::NDSparse, B::NDSparse; dimmap::Tuple{Vararg{Int}})\nA .* B\n\nCompute an inner join of A and B using function f, where the dimensions of B are a subset of the dimensions of A. Values from B are repeated over the extra dimensions.\n\ndimmap optionally specifies how dimensions of A correspond to dimensions of B. It is a tuple where dimmap[i]==j means the ith dimension of A matches the jth dimension of B. Extra dimensions that do not match any dimensions of j should have dimmap[i]==0.\n\nIf dimmap is not specified, it is determined automatically using index column names and types.\n\nExample\n\na = ndsparse(([1,1,2,2], [1,2,1,2]), [1,2,3,4])\nb = ndsparse([1,2], [1/1, 1/2])\nbroadcast(*, a, b)\n\ndimmap maps dimensions that should be broadcasted:\n\nbroadcast(*, a, b, dimmap=(0,1))\n\n\n\n\n\n"
},

{
    "location": "#Base.convert-Tuple{Type{IndexedTable},Any,Any}",
    "page": "Home",
    "title": "Base.convert",
    "category": "method",
    "text": "convert(IndexedTable, pkeys, vals; kwargs...)\n\nConstruct a table with pkeys as primary keys and vals as corresponding non-indexed items. keyword arguments will be forwarded to table constructor.\n\nExample\n\nconvert(IndexedTable, Columns(x=[1,2],y=[3,4]), Columns(z=[1,2]), presorted=true)\n\n\n\n\n\n"
},

{
    "location": "#Base.filter-Tuple{Any,Union{IndexedTable, NDSparse}}",
    "page": "Home",
    "title": "Base.filter",
    "category": "method",
    "text": "filter(f, t::Union{IndexedTable, NDSparse}; select)\n\nIterate over t and Return the rows for which f(row) returns true.  select determines  the rows that are given as arguments to f (see select).\n\nf can also be a tuple of column => function pairs.  Returned rows will be those for which all conditions are true.\n\nExample\n\n# filter iterates over ROWS of a IndexedTable\nt = table(rand(100), rand(100), rand(100), names = [:x, :y, :z])\nfilter(r -> r.x + r.y + r.z < 1, t)\n\n# filter iterates over VALUES of an NDSparse\nx = ndsparse(1:100, randn(100))\nfilter(val -> val > 0, x)\n\n\n\n\n\n"
},

{
    "location": "#Base.join-Tuple{Any,Union{IndexedTable, NDSparse},Union{IndexedTable, NDSparse}}",
    "page": "Home",
    "title": "Base.join",
    "category": "method",
    "text": "join(left, right; kw...)\njoin(f, left, right; kw...)\n\nJoin tables left and right.\n\nIf a function f(leftrow, rightrow) is provided, the returned table will have a single  output column.  See the Examples below.\n\nIf the same key occurs multiple times in either table, each left row will get matched  with each right row, resulting in n_occurrences_left * n_occurrences_right output rows.\n\nOptions (keyword arguments)\n\nhow = :inner \nJoin method to use. Described below.\nlkey = pkeys(left) \nFields from left to match on (see pkeys).\nrkey = pkeys(right) \nFields from right to match on.\nlselect = Not(lkey) \nOutput columns from left (see Not)\nrselect = Not(rkey)\nOutput columns from right.\nmissingtype = Missing \nType of missing values that can be created through :left and :outer joins.\nOther supported option is DataValue.\n\nJoin methods (how = :inner)\n\n:inner – rows with matching keys in both tables\n:left – all rows from left, plus matched rows from right (missing values can occur)\n:outer – all rows from both tables (missing values can occur)\n:anti – rows in left WITHOUT matching keys in right\n\nExamples\n\na = table((x = 1:10,   y = rand(10)), pkey = :x)\nb = table((x = 1:2:20, z = rand(10)), pkey = :x)\n\njoin(a, b; how = :inner)\njoin(a, b; how = :left)\njoin(a, b; how = :outer)\njoin(a, b; how = :anti)\n\njoin((l, r) -> l.y + r.z, a, b)\n\n\n\n\n\n"
},

{
    "location": "#Base.keys-Tuple{NDSparse,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "Base.keys",
    "category": "method",
    "text": "keys(x::NDSparse[, select::Selection])\n\nGet the keys of an NDSparse object. Same as rows but acts only on the index columns of the NDSparse.\n\n\n\n\n\n"
},

{
    "location": "#Base.map-Tuple{Any,IndexedTables.AbstractIndexedTable}",
    "page": "Home",
    "title": "Base.map",
    "category": "method",
    "text": "map(f, t::IndexedTable; select)\n\nApply f to every item in t selected by select (see also the select function).   Returns a new table if f returns a tuple or named tuple.  If not, returns a vector.\n\nExamples\n\nt = table([1,2], [3,4], names=[:x, :y])\n\npolar = map(p -> (r = hypot(p.x, p.y), θ = atan(p.y, p.x)), t)\n\nback2t = map(p -> (x = p.r * cos(p.θ), y = p.r * sin(p.θ)), polar)\n\n\n\n\n\n"
},

{
    "location": "#Base.map-Tuple{Any,NDSparse}",
    "page": "Home",
    "title": "Base.map",
    "category": "method",
    "text": "map(f, x::NDSparse; select = values(x))\n\nApply f to every value of select selected from x (see select).\n\nApply f to every data value in x. select selects fields passed to f. By default, the data values are selected.\n\nIf the return value of f is a tuple or named tuple the result will contain many data columns.\n\nExamples\n\nx = ndsparse((t=[0.01, 0.05],), (x=[1,2], y=[3,4]))\n\npolar = map(row -> (r = hypot(row.x, row.y), θ = atan(row.y, row.x)), x)\n\nback2x = map(row -> (x = row.r * cos(row.θ), y = row.r * sin(row.θ)), polar)\n\n\n\n\n\n"
},

{
    "location": "#Base.merge-Tuple{Union{IndexedTable, NDSparse},Any}",
    "page": "Home",
    "title": "Base.merge",
    "category": "method",
    "text": "merge(a::IndexedTable, b::IndexedTable; pkey)\n\nMerge rows of a with rows of b and remain ordered by the primary key(s).  a and b must have the same column names.\n\nmerge(a::NDSparse, a::NDSparse; agg)\n\nMerge rows of a with rows of b.  To keep unique keys, the value from b takes priority. A provided function agg will aggregate values from a and b that have the same key(s).\n\nExample:\n\na = table((x = 1:5, y = rand(5)); pkey = :x)\nb = table((x = 6:10, y = rand(5)); pkey = :x)\nmerge(a, b)\n\na = ndsparse([1,3,5], [1,2,3])\nb = ndsparse([2,3,4], [4,5,6])\nmerge(a, b)\nmerge(a, b; agg = (x,y) -> x)\n\n\n\n\n\n"
},

{
    "location": "#Base.pairs-Union{Tuple{N}, Tuple{NDSparse,Vararg{Any,N}}} where N",
    "page": "Home",
    "title": "Base.pairs",
    "category": "method",
    "text": "pairs(arr::NDSparse, indices...)\n\nSimilar to where, but returns an iterator giving index=>value pairs. index will be a tuple.\n\n\n\n\n\n"
},

{
    "location": "#Base.reduce-Tuple{Any,IndexedTable}",
    "page": "Home",
    "title": "Base.reduce",
    "category": "method",
    "text": "reduce(f, t::IndexedTable; select::Selection)\n\nApply reducer function f pair-wise to the selection select in t.  The reducer f  can be:\n\nA function\nAn OnlineStat\nA (named) tuple of functions and/or OnlineStats\nA (named) tuple of (selector => function) or (selector => OnlineStat) pairs\n\nExamples\n\nt = table(1:5, 6:10, names = [:t, :x])\n\nreduce(+, t, select = :t)\nreduce((a, b) -> (t = a.t + b.t, x = a.x + b.x), t)\n\nusing OnlineStats\nreduce(Mean(), t, select = :t)\nreduce((Mean(), Variance()), t, select = :t)\n\ny = reduce((min, max), t, select=:x)\nreduce((sum = +, prod = *), t, select=:x)\n\n# combining reduction and selection\nreduce((xsum = :x => +, negtsum = (:t => -) => +), t)\n\n\n\n\n\n"
},

{
    "location": "#Base.reduce-Tuple{Any,NDSparse}",
    "page": "Home",
    "title": "Base.reduce",
    "category": "method",
    "text": "reduce(f, x::NDSparse; dims)\n\nDrop the dims dimension(s) and aggregate values with f.\n\nx = ndsparse((x=[1,1,1,2,2,2],\n              y=[1,2,2,1,2,2],\n              z=[1,1,2,1,1,2]), [1,2,3,4,5,6])\n              \nreduce(+, x; dims=1)\nreduce(+, x; dims=(1,3))\n\n\n\n\n\n"
},

{
    "location": "#Base.sort!-Tuple{IndexedTable,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "Base.sort!",
    "category": "method",
    "text": "sort!(t    ; kw...)\nsort!(t, by; kw...)\n\nSort rows of t by by in place. All of Base.sort keyword arguments can be used.\n\nExamples\n\nt = table([1,1,1,2,2,2], [1,1,2,2,1,1], [1,2,3,4,5,6], names=[:x,:y,:z]);\nsort!(t, :z, rev = true)\nt\n\n\n\n\n\n"
},

{
    "location": "#Base.sort-Tuple{IndexedTable,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "Base.sort",
    "category": "method",
    "text": "sort(t    ; select, kw...)\nsort(t, by; select, kw...)\n\nSort rows by by. All of Base.sort keyword arguments can be used.\n\nExamples\n\nt=table([1,1,1,2,2,2], [1,1,2,2,1,1], [1,2,3,4,5,6],\nsort(t, :z; select = (:y, :z), rev = true)\n\n\n\n\n\n"
},

{
    "location": "#Base.values-Tuple{NDSparse,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "Base.values",
    "category": "method",
    "text": "values(x::NDSparse[, select::Selection])\n\nGet the values of an NDSparse object. Same as rows but acts only on the value columns of the NDSparse.\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.arrayof-Tuple{Any}",
    "page": "Home",
    "title": "IndexedTables.arrayof",
    "category": "method",
    "text": "arrayof(T)\n\nReturns the type of Columns or Vector suitable to store values of type T. Nested tuples beget nested Columns.\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.best_perm_estimate-Tuple{Any,Any}",
    "page": "Home",
    "title": "IndexedTables.best_perm_estimate",
    "category": "method",
    "text": "Returns: (n, perm) where n is the number of columns in the beginning of cols, perm is one possible permutation of those first n columns.\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.convertmissing-Tuple{IndexedTable,Type{Missing}}",
    "page": "Home",
    "title": "IndexedTables.convertmissing",
    "category": "method",
    "text": "convertmissing(tbl, missingtype)\n\nConvert the missing value representation in tbl to be of type missingtype.\n\nExample\n\nusing IndexedTables, DataValues\nt = table([1,2,missing], [1,missing,3])\nIndexedTables.convertmissing(t, DataValue)\n\n\n\n\n\n"
},

{
    "location": "#IndexedTables.excludecols-Tuple{Any,Any}",
    "page": "Home",
    "title": "IndexedTables.excludecols",
    "category": "method",
    "text": "excludecols(itr, cols) -> Tuple of Int\n\nNames of all columns in itr except cols. itr can be any of Table, NDSparse, Columns, or AbstractVector\n\nExamples\n\nusing IndexedTables: excludecols\n\nt = table([2,1],[1,3],[4,5], names=[:x,:y,:z], pkey=(1,2))\n\nexcludecols(t, (:x,))\nexcludecols(t, (2,))\nexcludecols(t, pkeynames(t))\nexcludecols([1,2,3], (1,))\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [IndexedTables]\nOrder = [:type, :function]"
},

]}
