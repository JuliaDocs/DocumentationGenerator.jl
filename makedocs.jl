using Pkg
using Pkg.TOML
include("util.jl")

registry_path = joinpath(homedir(), ".julia", "registries", "General")
registry = TOML.parsefile(joinpath(registry_path, "Registry.toml"))
packages = registry["packages"]

# Create a new environment to add all packages

# path were we move build docs
buildpath = joinpath(@__DIR__, "build")
using Pkg

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

for (uuid, dict) in packages
    pkgname = dict["name"]
    pkgname == "GtkUtilities" && continue
    pkgname == "Gtk" && continue

    try
        if !isdir(buildpath, pkgname)
            println("building: $pkgname")
            mktempdir() do envdir
                Pkg.activate(envdir)
                pspec = PackageSpec(name = pkgname, uuid = uuid)
                val = create_docs(pspec, buildpath)
                if val == :real
                    push!(build_real_docs, pkgname)
                else
                    push!(build_default_docs, pkgname)
                end
            end
        end
    catch e
        if e isa PkgNoWork
            push!(dont_work, e.name)
        else
            @warn("Package $pkgname didn't build")
            Base.showerror(stderr, e)
            push!(dont_work, pkgname => e)
        end
    end
end
