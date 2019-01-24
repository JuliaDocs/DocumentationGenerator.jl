var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LinkedLists.jl-1",
    "page": "Readme",
    "title": "LinkedLists.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status)LinkedList collections for JuliaThis package provides a singly linked list and a doubly linked list implementation, as Julia collections. Singly linked lists are supported with cons, car, and cdr, but not as a standard collection. Doubly linked lists are included in the samples but, again, not as a collection. This doesn\'t do anything fancy like create an array of nodes. Maybe it should."
},

{
    "location": "#LinkedList-1",
    "page": "Readme",
    "title": "LinkedList",
    "category": "section",
    "text": "LinkedList is a doubly linked list. Deletions happen in constant time. If code contains an index to an item in the list, then removing other items in the list won\'t invalidate that index.Usage:a = LinkedList{Int}()    # Create a list of the given type.\nisempty(l)         # Test whether there are any items.\nempty!(l)          # Remove all items.\nlength(l)          # The number of entries. An O(n) operation.\n2 in l             # Test whether the given item is an entry in the list. returns Bool or missing. O(n).\neltype(l)          # Returns the item type, here Int.\nindexin(a, l)      # Highest index in list for each value of a that is member.\nfirst(l)           # First item in the list.\nlast(l)            # Last item in the list, the item value.\npush!(l, d)        # Add item d to end of list. Returns index of item.\npop!(l, d)         # Remove and return item at end of list.\npushfirst!(l, d)   # Add item to start of list. Return index of item.\npopfirst!(l)       # Remove first item and return value.\nappend!(l, items)  # Add items to end of list.\nprepend!(l, items) # Add items to start of list.There can be an index into the list. It is a reference to a list node but can be treated as an opaque index. Two wrapper functions are provided to convert from nodes to integer positions.getindex(l, index)          # Returns value of item at this index.\nsetindex!(l, index, d)      # Sets item value at this index.\nlastindex(l)                # Returns index of last node. An O(n) operation.\ninsert!(l, index, d)        # Insert item at index, pushing values back. Return index.\ndeleteat!(l, index)         # Delete item at index. Return list.\nsplice!(l, index)           # Remove value at index, returning data value.\nsplice!(l, index, d)        # Replace item at index with data value.\nfindfirst(predicate, l)     # find the index of the first element of l for which predicate returns true\nindextoposition(index , l)  # Returns the position of a Node in l\nindextoposition(indexes,l)  # Returns a vector of positions of Nodes in l\npositiontoindex(p, l)       # Returns the node in a list at a position p\npositiontoindex(ps, l)      # Returns a vector of the nodes in a list at a positions given by the elements of psThere are two kinds of iterators for LinkedList. One access items. The other loops over indices.l = LinkedList{Int}()\nprepend!(l, [2, 4, 6])\nfor item::Int in l\n    println(item)\nend\n\nfor index in keys(l)\n    item=getindex(l, index)\n    println(item)\nend\n"
},

{
    "location": "#SLinkedList-1",
    "page": "Readme",
    "title": "SLinkedList",
    "category": "section",
    "text": "SLinkedList is a singly linked list over items of a given type. Appending to the end of this list takes an order of the number of the items in the list.Usage:a = SLinkedList{Int}()    # Create a list of the given type.\nisempty(l)         # Test whether there are any items.\nempty!(l)          # Remove all items.\neltype(l)          # Returns the item type, here Int.\nfirst(l)           # First item in the list.\nunshift!(l, d)     # Add item to start of list. Return index of item.\nshift!(l)          # Remove first item and return value.\nprepend!(l, items) # Add items to start of list.There can be an index into the list. It is a reference to a list node but can be treated as an opaque index. Two wrapper functions are provided to convert from nodes to integer positions.getindex(l, index)          # Returns value of item at this index.\nsetindex!(l, index, d)      # Sets item value at this index.\ninsert!(l, index, d)        # Inserts *after* the given index. Returns index.\nindextoposition(index , l)  # Returns the position of a Node in l\nindextoposition(indexes,l)  # Returns a vector of positions of Nodes in l\npositiontoindex(p, l)       # Returns the node in a list at a position p\npositiontoindex(ps, l)      # Returns a vector of the nodes in a list at a positions given by the elements of psThe following methods are O(n) for singly linked lists. They are included for completeness, but needing these is an indication that using a doubly linked list, or Vector, might be a better choice.length(l)                 # The number of entries.\n2 in l                    # Test whether the given item is an entry in the list. Returns Bool or missing\nindexin(a, l)             # Highest index in list for each value of a that is member.\nlast(l)                   # Last item in the list, the item value.\npush!(l, d)               # Add item d to end of list. Returns index of item.\npop!(l, d)                # Remove and return item at end of list.\nappend!(l, items)         # Add items to end of list.\nlastindex(l)              # Returns index of last node.\ndeleteat!(l, index)       # Delete item at index. Return list.\nsplice!(l, index)         # Remove value at index, returning data value.\nsplice!(l, index, d)      # Replace item at index with data value.\nfindfirst(predicate, l)   # find the index of the first element of l for which predicate returns trueAs with LinkedList, there are two kinds of iterators for SLinkedList. One access items. The other loops over indices.l = SLinkedList{Int}()\nprepend!(l, [2, 4, 6])\nfor item::Int in l\n    println(item)\nend\n\nfor index in keys(l)\n    item=getindex(l, index)\n    println(item)\nend\n"
},

{
    "location": "#Implementation-Notes-1",
    "page": "Readme",
    "title": "Implementation Notes",
    "category": "section",
    "text": "The code comments each time a method for these classes differs from interfaces described for collections in the manual. All differences stem from an assumption that the index to a collection will be an integer.If you have comments, or especially if I have the wrong idea about how to write good code in Julia, please send me an email."
},

{
    "location": "#Credit-1",
    "page": "Readme",
    "title": "Credit",
    "category": "section",
    "text": "Lots of credit goes to @adolgert as this library was adapted from his code."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LinkedLists]\nOrder = [:type, :function]"
},

]}
