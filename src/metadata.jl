using GitHub

const GIT_TOKEN_FILE = if haskey(ENV, "DOCGEN_GITHUB_AUTH_FILE") && isfile(ENV["DOCGEN_GITHUB_AUTH_FILE"])
    ENV["DOCGEN_GITHUB_AUTH_FILE"]
else
    joinpath(@__DIR__, "gh_auth.txt")
end

function init_metadata(packagespec, url)
    return Dict(
        "name" => packagespec.name,
        "uuid" => packagespec.uuid,
        "slug" => Base.package_slug(packagespec.uuid, 5),
        "url" => url,
        "version" => packagespec.version,
        "installable" => missing,
        "doctype" => missing,
        "success" => false,
        "documenter_errored" => missing
    )
end

function package_metadata(packagespec, url)
    meta = init_metadata(packagespec, url)

    rmatch = match(r".*/(.*)/(.*?(?:\.jl)?)(?:.git)?$", url)
    if rmatch !== nothing
        meta["owner"] = rmatch[1]
        meta["name"] = rmatch[2]
    end

    merge!(meta, update_metadata(packagespec, url, rmatch[1], rmatch[2]))

    return meta
end

function update_metadata(packagespec, url, repo_owner, repo_name)
    meta = Dict{String, Any}()

    authpath = GIT_TOKEN_FILE
    if !isfile(authpath)
        @warn("No GitHub token found. Skipping metadata retrieval.")
        return meta
    end
    if !occursin("github.com", url)
        @warn("Can't retrieve metadata (not hosted on GitHub).")
        return meta
    end

    @info("Querying metadata.")
    meta["metadata_error"] = false
    try
        gh_auth = authenticate(readchomp(authpath))
        repo = repo_owner * "/" * repo_name
        repo_info = repo_dict(repo, auth = gh_auth)
        meta["description"] = something(repo_info["description"], "")
        meta["archived"] = something(repo_info["archived"], false)
        meta["private"] = something(repo_info["private"], false)
        meta["stargazers_count"]  = something(repo_info["stargazers_count"], 0)
        meta["homepage"]  = something(repo_info["homepage"], 0)
        meta["tags"] = topics(repo, auth = gh_auth)
        meta["contributors"] = contributors_dict(repo, auth = gh_auth)
    catch err
        meta["metadata_error"] = true
        @error(string("Couldn't get info for ", url), exception = (err, catch_backtrace()))
    end
    @info("Done querying metadata.")

    return meta
end

function contributor_user(dict)
    Dict(
        "name" => dict["login"],
        "type" => dict["type"],
        "url" => dict["html_url"],
        "contributions" => dict["contributions"]
    )
end

function topics(name, api = GitHub.DEFAULT_API; options...)
    return GitHub.gh_get_json(api, "/repos/$(name)/topics";
                              headers = Dict(
                                "Accept" => "application/vnd.github.mercy-preview+json"
                              ), options...)["names"]
end

function repo_dict(name, api = GitHub.DEFAULT_API; options...)
    return GitHub.gh_get_json(api, string("/repos/", name); options...)
end

function contributors_dict(name, api = GitHub.DEFAULT_API; options...)
    return contributor_user.(GitHub.gh_get_json(api, "/repos/$(name)/contributors"; options...))
end