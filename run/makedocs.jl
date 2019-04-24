using DocumentationGenerator, DataStructures, Pkg

packages = DocumentationGenerator.installable_on_version(VERSION)

max_packages = if isempty(ARGS)
    length(packages)
else
    parse(Int, ARGS[1])
end
# max_packages = 60

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
        vers = sort!(readdir(pkgpath), by=x->VersionNumber(x))
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

include("generate_json.jl")
