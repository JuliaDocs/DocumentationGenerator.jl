using GitHub

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
    new_metadata = try
        fetch_updated_metadata(packagespec, url)
    catch ex
        @error(string("Couldn't get info for ", url), error = ex)
        Dict()
    end
    return merge!(meta, new_metadata)
end

function fetch_updated_metadata(packagespec, url)
    rmatch = match(r".*/(.*)/(.*?(?:\.jl)?)(?:.git)?$", url)
    if rmatch !== nothing
        meta["owner"] = rmatch[1]
        meta["name"] = rmatch[2]
    end
    return update_metadata(packagespec, url, rmatch[1], rmatch[2])
end

function update_metadata(packagespec, url, repo_owner, repo_name)
    meta = Dict{String, Any}()

    authpath = if haskey(ENV, "DOCGEN_GITHUB_AUTH_FILE")
        ENV["DOCGEN_GITHUB_AUTH_FILE"]
    else
        joinpath(@__DIR__, "gh_auth.txt")
    end

    token = if isfile(authpath)
        readchomp(authpath)
    else
        get(ENV, "DOCGEN_GITHUB_AUTH_TOKEN", "")
    end

    if isempty(token)
        @warn("No GitHub token found. Skipping metadata retrieval")
        return meta
    end

    if !occursin("github.com", url)
        @warn("Can't retrieve metadata (not hosted on GitHub).")
        return meta
    end
    @info("Querying metadata.")
    repo_info = repo(repo_owner * "/" * repo_name, auth = gh_auth)
    meta["description"] = something(repo_info.description, "")
    meta["stargazers_count"]  = something(repo_info.stargazers_count, 0)
    meta["homepage"]  = string(something(repo_info.homepage, ""))
    topics_dict, page = topics(repo_info, auth = gh_auth)
    meta["tags"] = something(topics_dict["names"], [])
    meta["contributors"] = contributor_user.(contributors(repo_info, auth = gh_auth)[1])
    @info("Done querying metadata.")

    return meta
end

function contributor_user(dict)
    Dict(
        "name" => dict["contributor"].login,
        "type" => dict["contributor"].typ,
        "url" => string(dict["contributor"].html_url),
        "contributions" => dict["contributions"]
    )
end

function topics(repo, api = GitHub.DEFAULT_API; options...)
    results, page_data = GitHub.gh_get_paged_json(api, "/repos/$(GitHub.name(repo))/topics";
                                                  headers = Dict("Accept" => "application/vnd.github.mercy-preview+json"), options...)
    return results, page_data
end
