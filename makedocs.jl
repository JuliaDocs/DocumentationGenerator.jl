using Distributed
using Pkg
using Pkg.TOML
include("util.jl")

registry_path = joinpath(homedir(), ".julia", "registries", "General")
registry = TOML.parsefile(joinpath(registry_path, "Registry.toml"))
packages = registry["packages"]

# Create a new environment to add all packages

# path were we move build docs
buildpath = joinpath(@__DIR__, "build")

function create_docs(pspec::PackageSpec, buildpath)
    _module, rootdir = install_and_use(pspec)
    pkgname = pspec.name
    final_docs = joinpath(buildpath, pkgname)
    docdir = joinpath(rootdir, "docs")
    if isdir(docdir)
        makefile = joinpath(docdir, "make.jl")
        # create customized makefile with removed deploydocs + modified makedocs
        make_expr, builddir = rewrite_makefile(makefile)
        cd(docdir) do
            eval(make_expr)
        end
        cp(builddir, final_docs)
        return :real
    else
        mktempdir() do root
            default_docs(pkgname, root)
            cp(joinpath(root, "build"), final_docs, force = true)
            return :default
        end
    end
end

dont_work = []
build_default_docs = []
build_real_docs = []

function package_docs(uuid, dict)
    pkgname = dict["name"]
    println("Generating docs for $pkgname")
    installs = false
    doctype = :default
    try
        if !isdir(buildpath, pkgname)
            # I'm not sure how and why, but lots of packages get stuck. So we need
            # to spawn processes and interrupt them after certain time outs.
            # sadly, we won't be able to make the time out low, since some packages
            # take really long building.
            println("building: $pkgname")
            mktempdir() do envdir
                Pkg.activate(envdir)
                pspec = PackageSpec(name = pkgname, uuid = uuid)
                doctype = create_docs(pspec, buildpath)
                installs = true
                println("Done generating docs for $pkgname")
            end
        end
    catch e
        if e isa PkgNoWork
        else
            @warn("Package $pkgname didn't build")
            Base.showerror(stderr, e)
        end
        installs = false
    end
    open(joinpath(buildpath, pkgname, "meta.toml"), "w") do io
        println(io, """
        installs = $installs
        doctype = $doctype
        """)
    end
end

for (uuid, dict) in packages
    pkgname = dict["name"]
    #those somehow get stuck - might be random
    pkgname in ("Gtk", "OpenStreetMapPlotter", "GtkUtilities") && continue
    t1 = time()
    println("running example $pkgname")
    package_docs(uuid, dict)
    # p = @spawnat 2 package_docs(uuid, dict)
    # while true
    #     isready(p) && break # continue
    #     # time out after 10 min
    #     if time() - t1 > (10*60)
    #         interrupt([2])
    #         break
    #     end
    # end
end
