using GitHub, Pkg
using Pkg: TOML
include("DocumentationGenerator.jl")

const GIT_TOKEN_FILE = joinpath("/config/sync", "gh_auth.txt")

function create_docs(pspec::Pkg.Types.PackageSpec, buildpath)
    _module, rootdir = DocumentationGenerator.install_and_use(pspec)
    pkgname = pspec.name

    # package doesn't load, so let's only use the README
    if _module === nothing
        return mktempdir() do root
            DocumentationGenerator.readme_docs(pkgname, root, rootdir)
            cp(joinpath(root, "build"), buildpath, force = true)
            return :default, rootdir
        end
    end

    # actual Documenter docs
    try
        for docdir in joinpath.(rootdir, ("docs", "doc"))
            if isdir(docdir)
                makefile = joinpath(docdir, "make.jl")
                # create customized makefile with removed deploydocs + modified makedocs
                make_expr, builddir = DocumentationGenerator.rewrite_makefile(makefile)
                cd(docdir) do
                    eval(make_expr)
                end
                cp(builddir, buildpath, force=true)
                return :real, rootdir
            end
        end
    catch err
        @error("Tried building Documenter.jl docs but failed.", error=err)
    end
    @info("Building default docs.")

    # default docs
    mktempdir() do root
        DocumentationGenerator.default_docs(pkgname, root, rootdir)
        cp(joinpath(root, "build"), buildpath, force = true)
        return :default, rootdir
    end
end

function license(repo, api = GitHub.DEFAULT_API; options...)
    results, page_data = GitHub.gh_get_paged_json(api, "/repos/$(GitHub.name(repo))/license"; options...)
    return results, page_data
end

function topics(repo, api = GitHub.DEFAULT_API; options...)
    results, page_data = GitHub.gh_get_paged_json(api, "/repos/$(GitHub.name(repo))/topics";
                                                  headers = Dict("Accept" => "application/vnd.github.mercy-preview+json"), options...)
    return results, page_data
end

function contributor_user(dict)
    Dict(
        "name" => dict["contributor"].login,
        "contributions" => dict["contributions"]
    )
end

function package_docs(uuid, name, url, version, buildpath)
    pspec = PackageSpec(uuid = uuid, name = name, version = version)
    @info("Generating docs for $name")
    doctype = :default
    meta = Dict()
    meta["name"] = name
    meta["url"] = url
    meta["version"] = version
    meta["installs"] = false
    try
        @info("building: $name")
        mktempdir() do envdir
            Pkg.activate(envdir)
            doctype, rootdir = create_docs(pspec, buildpath)
            meta["doctype"] = string(doctype)
            meta["installs"] = true
            @info("Done generating docs for $name")
            package_source(uuid, name, rootdir, buildpath)
        end
    catch e
        @error("Package $name didn't build", error = e)
        meta["installs"] = false
    end

    return meta
end

function package_metadata(uuid, name, url, version, buildpath)
    meta = Dict()
    authpath = GIT_TOKEN_FILE
    if !isfile(authpath)
        @warn("No GitHub token found. Skipping metadata retrieval.")
        return meta
    end
    if !occursin("github.com", url)
        @warn("Can't retrieve metadata for $(name)-$(uuid) (not hosted on github)")
        return meta
    end

    @info("Querying metadata for $name")
    try
        gh_auth = authenticate(readchomp(GIT_TOKEN_FILE))
        matches = match(r".*/(.*)/(.*\.jl)(?:.git)?$", url)
        repo_owner = matches[1]
        repo_name = matches[2]
        repo_info = repo(repo_owner * "/" * repo_name, auth = gh_auth)
        meta["description"] = something(repo_info.description, "")
        meta["stargazers_count"]  = something(repo_info.stargazers_count, 0)
        license_dict, page = license(repo_info, auth = gh_auth)
        meta["license"] = something(license_dict["license"]["name"], "")
        meta["license_url"] = something(license_dict["license"]["url"], "")
        topics_dict, page = topics(repo_info, auth = gh_auth)
        meta["tags"] = something(topics_dict["names"], [])
        meta["owner"] = repo_owner
        meta["contributors"] = contributor_user.(contributors(repo_info, auth = gh_auth)[1])
    catch err
        @error(string("Couldn't get info for ", url), error = err)
    end
    @info("Done querying metadata for $name")

    return meta
end

function package_source(uuid, name, rootdir, buildpath)
    @info("Copying source code for $(name)-$(uuid)")
    if isdir(rootdir)
        cp(rootdir, joinpath(buildpath, "_packagesource"); force=true)
    end
    @info("Done copying source code for $(name)-$(uuid)")
end

function build(uuid, name, url, version, buildpath)
    meta = package_docs(uuid, name, url, version, buildpath)
    merge!(meta, package_metadata(uuid, name, url, version, buildpath))
    @info "making buildpath"
    isdir(buildpath) || mkpath(joinpath(buildpath))
    @info "opening meta.toml"
    open(joinpath(buildpath, "meta.toml"), "w") do io
        @info "writing meta.toml"
        TOML.print(io, meta)
    end
end

build(ARGS...)

@async begin
    while(true)
        Base.flush(stdout)
        sleep(1)
    end
end
