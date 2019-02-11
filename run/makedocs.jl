using DocumentationGenerator, DataStructures

packages = DocumentationGenerator.installable_on_version(VERSION)

max_packages = if isempty(ARGS)
    length(packages)
else
    parse(Int, ARGS[1])
end

processes = parse(Int, get(ENV, "NUM_PKG_PROCESSES", "8"))

docspath = normpath(joinpath(@__DIR__, ".."))

tstart = time()
DocumentationGenerator.build_documentations(packages[1:max_packages], processes = processes, basepath = docspath)
@info("DONE in $(round(time() - tstart, digits=1)) seconds")

##
@info("Building Website...")

distpath = joinpath(@__DIR__, "..", "dist")
distdocpath = joinpath(@__DIR__, "..", "dist", "packages")

rm(distpath, recursive=true, force=true)
isdir(distpath) || mkpath(distpath)
isdir(distdocpath) || mkdir(distdocpath)

printheader(io::IO, name; level = 1) = print(io, "#"^level, " ", name)

function printlink(io::IO, name, link)
    print(io, "[", name, "](", link, ")")
end

## get packages and versions
built_packages = OrderedDict{String, Vector{String}}()
for pkg in sort!(readdir(joinpath(docspath, "build")), by=x->lowercase(x))
    pkgpath = joinpath(docspath, "build", pkg)
    isdir(pkgpath) || continue

    cp(pkgpath, joinpath(distdocpath, pkg); force=true)
    open(joinpath(distdocpath, pkg, "versions.js"), "w") do io
        println(io, "var DOC_VERSIONS = [")
        vers = sort!(readdir(pkgpath), by=x->lowercase(x))
        for ver in vers
            isdir(joinpath(pkgpath, ver)) || continue
            push!(get!(built_packages, pkg, String[]), ver)
            println(io, "\"", ver, "\",")
            open(joinpath(distdocpath, pkg, ver, "siteinfo.js"), "w") do io
                println(io, """
                var DOCUMENTER_CURRENT_VERSION = "$(ver)";
                """)
            end
        end
        print(io, "];")
    end
    open(joinpath(distdocpath, pkg, "index.html"), "w") do io
        println(io, """
        <head>
        <meta http-equiv="refresh" content="0; url=$(last(built_packages[pkg]))" />
        </head>
        """)
    end
end

indexmd = joinpath(docspath, "build", "index.md")
open(indexmd, "w") do io
    lastchar = '0'
    println(io, "# Package Documentation")

    for (pkg, versions) in built_packages
        pkgpath = joinpath(distdocpath, pkg)
        isdir(pkgpath) || continue

        startchar = uppercase(first(pkg))
        if lastchar ≠ startchar
            printheader(io, startchar, level=2)
            println(io)
        end
        pkgindexfile = joinpath(pkgpath, "index.html")
        if isfile(pkgindexfile)
            printlink(io, pkg, string("file://", pkgindexfile))
        else
            print(io, pkg, " (Documentation build failed)")
        end
        println(io)
        println(io)
        lastchar = startchar
    end
end

distpath = joinpath(docspath, "dist")
isdir(joinpath(distpath, "src")) || mkdir(joinpath(distpath, "src"))
cp(indexmd, joinpath(distpath, "src", "index.md"); force=true)
pages = ["Documentation" => "index.md"]
@eval Module() begin
    using Documenter
    makedocs(
        format = Documenter.HTML(),
        sitename = "Documentation",
        modules = [Module()],
        root = $distpath,
        pages = $(reverse(pages))
    )
end

@info("Done building website in $(distpath)")
