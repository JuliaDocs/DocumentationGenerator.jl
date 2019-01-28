using Serialization, GitHub, Pkg
using Pkg: TOML

include("DocumentationGenerator.jl")

function create_docs(pspec::Pkg.Types.PackageSpec, buildpath)
    _module, rootdir = DocumentationGenerator.install_and_use(pspec)
    pkgname = pspec.name
    # actual Documenter docs
    for docdir in joinpath.(rootdir, ("docs", "doc"))
        if isdir(docdir)
            makefile = joinpath(docdir, "make.jl")
            # create customized makefile with removed deploydocs + modified makedocs
            make_expr, builddir = DocumentationGenerator.rewrite_makefile(makefile)
            cd(docdir) do
                eval(make_expr)
            end
            cp(builddir, buildpath, force=true)
            return :real
        end
    end

    # our default docs
    mktempdir() do root
        DocumentationGenerator.default_docs(pkgname, root, rootdir)
        cp(joinpath(root, "build"), buildpath, force = true)
        return :default
    end
end

function license(repo, api = GitHub.DEFAULT_API; options...)
    results, page_data = GitHub.gh_get_paged_json(api, "/repos/$(GitHub.name(repo))/license"; options...)
    return results, page_data
end

function contributor_user(dict)
    Dict(
        "name" => dict["contributor"].login,
        "contributions" => dict["contributions"]
    )
end

function package_docs(name, url, version, buildpath)
    pspec = PackageSpec(name = name, url = url, rev = string('v', version))
    # buildpath = joinpath(@__DIR__, "..", "build")
    @info("Generating docs for $name")
    doctype = :default
    meta = Dict()
    meta["version"] = version
    meta["installs"] = false
    try
        # I'm not sure how and why, but lots of packages get stuck. So we need
        # to spawn processes and interrupt them after certain time outs.
        # sadly, we won't be able to make the time out low, since some packages
        # take really long building.
        @info("building: $name")
        mktempdir() do envdir
            Pkg.activate(envdir)
            meta["doctype"] = string(create_docs(pspec, buildpath))
            meta["installs"] = true
            @info("Done generating docs for $name")
        end
    catch e
        @error("Package $name didn't build", error = e)
        meta["installs"] = false
    end
    try
        gh_auth = authenticate(readchomp(joinpath(@__DIR__, "gh_auth.txt")))
        matches = match(r".*/(.*)/(.*\.jl)(?:.git)?$", url)
        repo_owner = matches[1]
        repo_name = matches[2]
        repo_info = repo(repo_owner * "/" * repo_name, auth = gh_auth)
        meta["description"] = something(repo_info.description, "")
        meta["stargazers_count"]  = something(repo_info.stargazers_count, 0)
        license_dict, page = license(repo_info, auth = gh_auth)
        meta["license"] = something(license_dict["license"]["name"], "")
        meta["license_url"] = something(license_dict["license"]["url"], "")
        meta["owner"] = repo_owner
        meta["contributors"] = contributor_user.(contributors(repo_info, auth = gh_auth)[1])
    catch err
        @error(string("Couldn't get info for ", url), error = err)
        nothing
    end
    isdir(buildpath) || mkpath(joinpath(buildpath))
    open(joinpath(buildpath, "meta.toml"), "w") do io
        TOML.print(io, meta)
    end
end

package_docs(ARGS...)
