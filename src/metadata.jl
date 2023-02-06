using GitHub
using GitForge.Bitbucket: BitbucketAPI, Token, get_repo
using Base64

function init_metadata(packagespec, url)
    meta = Dict(
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
    rmatch = match(r".*/(.*)/(.*?(?:\.jl)?)(?:.git)?$", url)
    if rmatch !== nothing
        meta["owner"] = rmatch[1]
        meta["name"] = rmatch[2]
    end
    return meta
end

function package_metadata(packagespec, url, server_type; api_url="")
    meta = init_metadata(packagespec, url)
    new_metadata = try
        additional_metadata(meta["owner"], meta["name"], server_type; api_url = api_url)
    catch ex
        @error(string("Couldn't get info for ", url), error = ex)
        Dict()
    end
    return merge!(meta, new_metadata)
end

function additional_metadata(repo_owner, repo_name, server_type; api_url="")
    meta = Dict{String, Any}()

    authpath = if haskey(ENV, "DOCGEN_AUTH_FILE")
        ENV["DOCGEN_AUTH_FILE"]
    else
        joinpath(@__DIR__, "gh_auth.txt")
    end

    token = if isfile(authpath)
        readchomp(authpath)
    else
        get(ENV, "DOCGEN_AUTH_TOKEN", "")
    end

    if isempty(token)
        @warn("No token found. Skipping metadata retrieval")
        return meta
    end

    @debug("Querying metadata.")
    if server_type == "github"
        tokenparts = split(token, ":")
        if length(tokenparts) != 2
            error("DOCGEN_AUTH_TOKEN must be of form `user:token`")
        end
        gh_auth = authenticate(tokenparts[2])
        repo_info = repo(repo_owner * "/" * repo_name, auth = gh_auth)
        meta["description"] = something(repo_info.description, "")
        meta["stargazers_count"]  = something(repo_info.stargazers_count, 0)
        meta["homepage"]  = string(something(repo_info.homepage, ""))
        topics_dict, page = topics(repo_info, auth = gh_auth)
        meta["tags"] = something(topics_dict["names"], [])
        meta["contributors"] = contributor_user.(contributors(repo_info, auth = gh_auth)[1])
    elseif server_type == "bitbucket"
        forge = BitbucketAPI(; token = Token(Base64.base64encode(token)),
                             (!isempty(api_url) ? (; url=api_url) : (;))...)
        info = get_repo(forge, repo_owner, repo_name)[1]
        meta["description"] = isnothing(info.description) ? "" : string(info.description)
        meta["homepage"]  = isnothing(info.website) ? "" : string(info.website)
        ## metadata not supported by Bitbucket yet
        meta["tags"] = []
        meta["contributors"] = []
        meta["stargazers_count"]  = 0
    else
        @warn "Unsupported server type $(server_type)"
    end
    @debug("Done querying metadata.")

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
