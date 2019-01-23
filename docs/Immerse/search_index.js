var documenterSearchIndex = {"docs": [

{
    "location": "#Immerse.Figure-Tuple{Int64}",
    "page": "Home",
    "title": "Immerse.Figure",
    "category": "method",
    "text": "Figure(3) gets the underlying Figure object associated with figure #3. This can be useful if you need to layer on extra drawing on top of what Gadfly produces.\n\n\n\n\n\n"
},

{
    "location": "#Immerse.closeall-Tuple{}",
    "page": "Home",
    "title": "Immerse.closeall",
    "category": "method",
    "text": "closeall() closes all existing figure windows.\n\n\n\n\n\n"
},

{
    "location": "#Immerse.closefig-Tuple{}",
    "page": "Home",
    "title": "Immerse.closefig",
    "category": "method",
    "text": "closefig(n) closes the nth figure window.\n\nclosefig() closes the current figure window.\n\n\n\n\n\n"
},

{
    "location": "#Immerse.figure-Tuple{}",
    "page": "Home",
    "title": "Immerse.figure",
    "category": "method",
    "text": "figure(;name=\"Figure $n\", width=400, height=400) creates a new figure window for displaying plots.\n\nfigure(n) raises the nth figure window and makes it the current default plotting window, and returns the\n\n\n\n\n\n"
},

{
    "location": "#Immerse.gcf-Tuple{}",
    "page": "Home",
    "title": "Immerse.gcf",
    "category": "method",
    "text": "gcf() (\"get current figure\") returns the current figure number\n\n\n\n\n\n"
},

{
    "location": "#Immerse.hit",
    "page": "Home",
    "title": "Immerse.hit",
    "category": "function",
    "text": "hit((fig,tag), cb) turns on hit-testing for the plot element tagged with tag in figure fig. When the user clicks on the element, the callback function cb will be executed.\n\nThe callback should have the form\n\n    function my_callback(figtag, index, event, distance)\n        if distance < 2\n            # We clicked close enough to the object to \"count\"\n            # implement the action here\n        end\n    end\n\nfigtag = (figno,tag) identifies the figure and object, and index represents the specific item clicked on.  index might be a single Int (e.g., the 37th point in the plot), or for compound objects might be a more complex object.  event contains Gtk\'s information about the click event; this records the x,y position as well as any modifier keys.  distance measures how much the user \"missed\" the object, and is measured in screen-pixels.\n\nHere are a couple of examples:\n\n    fig = display(plot(x=1:10,y=rand(10),Geom.point(tag=:dots)))\n    hit((fig,:dots), (figtag, index, xy, dist) -> if dist < 1 println(\"You clicked on dot \", index) end)\n\nIn this case, index will be an Int.\n\n    x = rand(6)\n    y = rand(6)\n    label = [1,1,1,1,2,2]\n    df = DataFrame(Any[x,y,label], [:x,:y,:label])\n    fig = display(plot(df, x=:x, y=:y, color=:label, Geom.line(tag=:lines)))\n\n    hit((fig,:lines), (figtag, index, xy, dist) -> begin\n        if dist < 2\n            println(\"You clicked on line \", index[1], \" in segment \", index[2], \" at $(round(Int,100*index[3]))% along the segment\")\n        end\n    end)\n\nBy default, hit uses mouse button 1; you can customize the action with hit(figtag, cb, action) where the default is action = :button1press.  The choices correspond to the fields in Gtk\'s MouseHandler.\n\nYou can suspend hit-testing for an object with hit((fig,:tag), false) and re-enable it with hit((fig,:tag), true).\n\n\n\n\n\n"
},

{
    "location": "#Immerse.lasso_initialize",
    "page": "Home",
    "title": "Immerse.lasso_initialize",
    "category": "function",
    "text": "lasso_initialize(figno, cb) sets the callback cb to run when the user has selected points with the lasso.  When you have only one \"object\" (Geom) in your plot, your callback can be of the form\n\n    function my_simple_lasso_callback(figno, selections)\n        println(\"You selected points \", first(values(selections)))\n    end\n\nFor a Geom.point object, this would print a vector of integers corresponding to the selected points.\n\nMore generally, the callback should have the syntax\n\n    function my_lasso_callback(figno, selections)\n        for (form, indexes) in selections\n            if form.tag == :mydots\n                println(\"In figure $figno, from :mydots you selected \", indexes)\n            end\n        end\n    end\n\nselections is a Dict of form=>indexes pairs.  form is a Compose.Form, the raw objects rendered by Gadfly; you may especially want to query its tag to determine its identity (assuming you\'ve assigned a tag).  indexes is a vector describing the items selected; for Circle forms, each element will be an Int, whereas for Line Forms (which can hold multiple lines, perhaps drawn in different colors) each element will be an Tuple{Int,Int} describing the line number and vertex number.\n\nTo assign a tag to a Gadfly object, add the tag keyword argument to the geometry, e.g. Geom.point(tag = :mydots).\n\n\n\n\n\n"
},

{
    "location": "#Immerse.scf-Tuple{}",
    "page": "Home",
    "title": "Immerse.scf",
    "category": "method",
    "text": "scf() (\"show current figure\") raises (makes visible) the current figure\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Immerse]\nOrder = [:type, :function]"
},

]}
