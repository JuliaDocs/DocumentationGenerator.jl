using UUIDs

include("rewrite.jl")

function docs_url(deployment_url, name, uuid, version)
    isempty(deployment_url) && return nothing
    return join([deployment_url, DocumentationGenerator.get_docs_dir(name, uuid), version], '/')
end

get_docs_dir(name, uuid) = get_docs_dir(name, UUID(uuid))
get_docs_dir(name, uuid::UUID) = joinpath(name, Base.package_slug(uuid, 5))
