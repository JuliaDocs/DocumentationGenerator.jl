using DocumentationGenerator

packages = DocumentationGenerator.installable_on_version(VERSION)

# max_packages = if isempty(ARGS)
#     length(packages)
# else
#     parse(Int, ARGS[1])
# end

max_packages = 100

processes = parse(Int, get(ENV, "NUM_PKG_PROCESSES", "8"))

docspath = normpath(joinpath(@__DIR__, ".."))

tstart = time()
DocumentationGenerator.build_documentations(packages[1:max_packages], processes = processes, basepath = docspath)
@info("DONE in $(round(time() - tstart, digits=1)) seconds")

##

@info("Building Website...")

printheader(io::IO, name; level = 1) = print(io, "#"^level, " ", name)

function printlink(io::IO, name, link)
    print(io, "[", name, "](", link, ")")
end

indexmd = joinpath(docspath, "build", "index.md")
open(indexmd, "w") do io
    lastchar = '0'
    println(io, "# Package Documentation")
    for pkg in readdir(joinpath(docspath, "build"))
        pkgpath = joinpath(docspath, "build", pkg)
        isdir(pkgpath) || continue

        startchar = uppercase(first(pkg))
        if lastchar ≠ startchar
            printheader(io, startchar, level=2)
            println(io)
        end
        print(io, pkg)
        print(io, " - ")
        vers = readdir(pkgpath)
        for (i, ver) in enumerate(vers)
            isdir(joinpath(pkgpath, ver)) || continue
            pkgindexfile = joinpath(pkgpath, ver, "index.html")
            if isfile(pkgindexfile)
                printlink(io, ver, string("file://", pkgindexfile))
            else
                print(io, ver)
            end
            i ≠ length(vers) && print(io, ", ")
        end
        println(io)
        println(io)
        lastchar = startchar
    end
end

distpath = joinpath(docspath, "dist")
mktempdir() do tmpdir
    mkdir(joinpath(tmpdir, "src"))
    cp(indexmd, joinpath(tmpdir, "src", "index.md"))
    pages = ["Documentation" => "index.md"]
    @eval Module() begin
        using Documenter
        makedocs(
            format = Documenter.HTML(),
            sitename = "Documentation",
            modules = [Main],
            root = $tmpdir,
            pages = $(reverse(pages))
        )
    end
    cp(tmpdir, distpath; force=true)
end

@info("Done building website in $(distpath)")
