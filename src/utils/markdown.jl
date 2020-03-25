using Markdown
using GithubMarkdown
using HTMLSanitizer

"""
    copylocallinks(originalreadme, readmepath)

Copy relative link targets in the `originalreadme` such that they are reachable from `readmepath` as well.
"""
function copylocallinks(originalreadme, readmepath)
    @info("Copying linked files in $(originalreadme).")

    basepath = dirname(originalreadme)
    newbasepath = dirname(readmepath)
    contents = String(read(readmepath))
    md = Markdown.parse(contents)
    links = []
    collect_links(md, links)
    for link in links
        # skip links to the interwebz
        occursin(r"^https?\:\/\/.*", link) && continue
        # skip absolute paths
        isabspath(link) && continue
        asset = normpath(basepath, link)
        newasset = joinpath(newbasepath, link)
        # skip relative paths outside of the package dir
        if !startswith(basepath, asset)
            @warn("Link outside of package root at `$asset`. Skipping.")
            continue
        end
        # only copy files
        isfile(asset) || continue
        # don't follow symlinks
        islink(asset) || continue

        @info("Copying $(asset) to ($newasset) (specified by `$(link)`).")

        ispath(dirname(asset)) || mkpath(dirname(newasset))
        try
            cp(asset, newasset)
        catch err
            @error("copying asset `$(link)` failed", exception=err)
        end
    end
end
collect_links(md, links) = isdefined(md, :content) && foreach(c -> collect_links(c, links), md.content)
collect_links(md::Markdown.Link, links) = push!(links, md.url)
collect_links(md::Markdown.Image, links) = push!(links, md.url)

function rendergfm(file, fileout; documenter = false)
    io = IOBuffer()
    try
        GithubMarkdown.rendergfm(io, file; documenter = false)
        out = sanitize(String(take!(io)), prettyprint = false)
        open(fileout, "w") do f
            documenter && println(f, "````````````@raw html")
            println(f, out)
            documenter && println(f, "````````````")
        end
    catch err
        cp(file, fileout)
        @error("Rendering GFM failed. Falling back to Julia implementation.", error = err)
    end
end
