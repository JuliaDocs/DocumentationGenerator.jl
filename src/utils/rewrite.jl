function parseall(str)
    pos = firstindex(str)
    exs = []
    while pos <= lastindex(str)
        ex, pos = Meta.parse(str, pos)
        push!(exs, ex)
    end
    if length(exs) == 0
        throw(ParseError("end of input"))
    elseif length(exs) == 1
        return exs[1]
    else
        return Expr(:block, exs...)
    end
end

"""
Rewrites the docs/make.jl for a given package to not deploy and respect
our build folders. This respects any custom scripts needed to build the docs
while disabling deploy + putting the right args into makedocs
"""
function rewrite_makefile(makefile)
    ast = parseall(read(makefile, String))
    make_expr = Expr(:block)
    push!(make_expr.args, :(using Pkg))
    buildpath = joinpath(dirname(makefile), "build")
    for elem in ast.args
        # skip deply(...) - we don't want to deploy
        Meta.isexpr(elem, :call) && elem.args[1] == :deploydocs && continue
        if Meta.isexpr(elem, :call) && elem.args[1] == :makedocs
            # rewrite makedoc call to respect our requirements
            new_args = []
            for argument in elem.args
                if Meta.isexpr(argument, :kw)
                    name, arg = argument.args
                    # assure that we generate HTML
                    if name == :format
                        html = :(Documenter.HTML())
                        if Meta.isexpr(arg, :call) && arg.args[1] == :(Documenter.HTML)
                            append!(html.args, arg.args[2:end])
                        end
                        argument.args[2] = html
                    end
                    # filter out root + build dir
                    if name == :build
                        # if there is a custom build folder, record it!
                        cd(dirname(makefile)) do
                            buildpath = abspath(arg)
                        end
                    end
                end
                push!(new_args, argument)
            end
            # push!(new_args,
            #     Expr(:kw, :root, dirname(makefile)),
            # )
            elem = Expr(:call, new_args...)
        end
        # Pkg.add packages required by package build script
        if Meta.isexpr(elem, :using)
            pkgs = Symbol[]
            for arg in elem.args
                if Meta.isexpr(arg, :.) && length(arg.args) == 1
                    push!(pkgs, arg.args[1])
                end
            end
            push!(make_expr.args, Expr(:call, :(Pkg.add), [string.(pkgs)...]))
        end

        push!(make_expr.args, elem)
    end
    return make_expr, buildpath
end

"""
    fix_makefile(makefile)

Takes in the path to a Documenter.jl-compatible `make.jl` file and
1. Removes all calls to `deploydocs`.
2. Records the custom `build` kwarg in the `makedocs` call.
3. Makes sure that `format` is set to `Documenter.HTML(...)` in the `makedocs` call.

Return a tuple of `new_make_expr, buildpath`.
"""
function fix_makefile(makefile)
    # default output path:
    buildpath = joinpath(dirname(makefile), "build")

    ast = parseall(read(makefile, String))
    make_expr = Expr(:block)

    for elem in ast.args
        # skip deploydocs
        Meta.isexpr(elem, :call) && elem.args[1] == :deploydocs && continue
        if Meta.isexpr(elem, :call) && elem.args[1] == :makedocs
            # rewrite makedoc call to respect our requirements
            new_args = []
            for argument in elem.args
                if Meta.isexpr(argument, :kw)
                    name, arg = argument.args
                    # assure that we generate HTML
                    if name == :format
                        html = :(Documenter.HTML())
                        if Meta.isexpr(arg, :call) && arg.args[1] == :(Documenter.HTML)
                            append!(html.args, arg.args[2:end])
                        end
                        argument.args[2] = html
                    end
                    # filter out root + build dir
                    if name == :build
                        # record custom output dir
                        buildpath = joinpath(dirname(makefile), arg)
                    end
                end
                push!(new_args, argument)
            end
            # make sure to overwrite `root`:
            push!(new_args,
                Expr(:kw, :root, dirname(makefile)),
            )
            elem = Expr(:call, new_args...)
        end
        push!(make_expr.args, elem)
    end

    return make_expr, buildpath
end
