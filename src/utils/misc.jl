using UUIDs

include("rewrite.jl")

function docs_url(deployment_url, name, uuid, version)
    isempty(deployment_url) && return nothing
    return join([deployment_url, DocumentationGenerator.get_docs_dir(name, uuid), version], '/')
end

get_docs_dir(name, uuid) = get_docs_dir(name, UUID(uuid))
get_docs_dir(name, uuid::UUID) = joinpath(name, Base.package_slug(uuid, 5))

function find_free_x_servernum()
    i = 99
    while isfile("/tmp/.X$(i)-lock")
        i += 1
    end

    return i
end

# Borrowed from Documenter.jl (MIT)
#
# https://github.com/JuliaDocs/Documenter.jl/blob/5dafb6488f90d173ca4fcfeead0396332bdc6de6/src/utilities/DOM.jl#L269-L296
"""
Escape characters in the provided string. This converts the following characters:

- `<` to `&lt;`
- `>` to `&gt;`
- `&` to `&amp;`
- `'` to `&#39;`
- `\"` to `&quot;`

When no escaping is needed then the same object is returned, otherwise a new
string is constructed with the characters escaped. The returned object should
always be treated as an immutable copy and compared using `==` rather than `===`.
"""
function escapehtml(text::AbstractString)
    if occursin(r"[<>&'\"]", text)
        buffer = IOBuffer()
        for char in text
            char === '<'  ? write(buffer, "&lt;")   :
            char === '>'  ? write(buffer, "&gt;")   :
            char === '&'  ? write(buffer, "&amp;")  :
            char === '\'' ? write(buffer, "&#39;")  :
            char === '"'  ? write(buffer, "&quot;") : write(buffer, char)
        end
        String(take!(buffer))
    else
        text
    end
end
