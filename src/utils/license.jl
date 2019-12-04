using JSON

function find_ruby_gem(gem)
    which = Sys.iswindows() ? "where" : "which"
    so = IOBuffer()
    p = run(pipeline(`$which $gem`, stdout = so), wait = false)
    # gem is on path
    success(p) && return chomp(String(take!(so)))
    so = IOBuffer()
    p = run(pipeline(`$which gem`, stdout = so), wait = false)

    gempath = "/bin/gem"

    if success(p)
        path = chomp(String(take!(so)))
        if isempty(path)
            @error("`gem` not found on PATH. Defaulting to `/bin/gem`.")
        else
            gempath = path
        end
    else
        @error("`gem` not found on PATH. Defaulting to `/bin/gem`.")
    end

    p = run(pipeline(`$gempath environment gempath`, stdout = so), wait = false)
    if success(p)
        paths = chomp(String(take!(so)))
        paths = split(paths, Sys.iswindows() ? ';' : ':')
        for path in paths
            gempath = joinpath(path, "bin", gem)
            isfile(gempath) && return gempath
        end
    end

    if Sys.isunix()
        fallback = joinpath("/usr/local/bin", gem)
        isfile(fallback) && return fallback
    end

    return ""
end

function license(path::String, confidence=85)
    out = IOBuffer()
    err = IOBuffer()
    try
        licensee = find_ruby_gem("licensee")
        cmd = `$licensee detect --json --confidence=$confidence $path`
        pipe = pipeline(cmd, stdout=out, stderr=err)
        run(pipe)
        output = JSON.parse((String(take!(out))))
        return uppercase(output["licenses"][1]["key"]), output["licenses"][1]["url"]
    catch ex
        @info "ERROR: License detection", ex
        return "UNKNOWN", "#"
    end
end
