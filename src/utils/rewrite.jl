function parseall(str)
    pos = firstindex(str)
    exs = []
    while pos <= lastindex(str)
        ex, pos = Meta.parse(str, pos)
        push!(exs, ex)
    end
    if length(exs) == 0
        throw(Meta.ParseError("end of input"))
    elseif length(exs) == 1
        return exs[1]
    else
        return Expr(:block, exs...)
    end
end

"""
    fix_makefile(makefile)

Takes in the path to a Documenter.jl-compatible `make.jl` file and
1. Removes all calls to `deploydocs`.
2. Records the custom `build` kwarg in the `makedocs` call.
3. Makes sure that `format` is set to `Documenter.HTML(...)` in the `makedocs` call.

Return a tuple of `new_make_expr, buildpath`.
"""
function fix_makefile(makefile, documenter_version = v"0.24")
    # default output path:
    buildpath = joinpath(dirname(makefile), "build")
    should_break = false

    ast = parseall(read(makefile, String))
    make_expr = Expr(:block)

    for elem in ast.args
        # skip deploydocs
        Meta.isexpr(elem, :call) && elem.args[1] == :deploydocs && continue
        if Meta.isexpr(elem, :call) && elem.args[1] == :makedocs
            should_break = true

            # rewrite makedoc call to respect our requirements
            new_args = []

            has_fmt = false
            has_sitename = false
            has_linkcheck = false
            html = documenter_version < v"0.21" ? QuoteNode(:html) : :(Documenter.HTML())

            fixkwarg = argument -> begin
                if Meta.isexpr(argument, :kw)
                    name, arg = argument.args
                    # assure that we generate HTML
                    if name == :format
                        has_fmt = true
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
                    if name == :sitename
                        has_sitename = true
                    end
                    if name == :linkcheck
                        has_linkcheck = true
                        argument.args[2] = false
                    end
                end
            end

            for argument in elem.args
                if Meta.isexpr(argument, :parameters)
                    for argument in argument.args
                        fixkwarg(argument)
                    end
                else
                    fixkwarg(argument)
                end

                push!(new_args, argument)
            end

            if !has_sitename && documenter_version < v"0.20"
                name = basename(dirname(dirname(dirname(makefile))))
                push!(new_args, Expr(:kw, :sitename, name))
            end

            if !has_fmt
                push!(new_args, Expr(:kw, :format, html))
            end
            
            if !has_linkcheck
                push!(new_args, Expr(:kw, :linkcheck, false))
            end

            # make sure to overwrite `root`:
            push!(new_args,
                Expr(:kw, :root, dirname(makefile)),
            )
            elem = Expr(:call, new_args...)
        end

        push!(make_expr.args, elem)

        # ignore everything after `makedocs` call
        should_break && break
    end

    fix_lnns(make_expr, makefile)

    return make_expr, buildpath
end

function fix_lnns(expr, filepath)
    for (i, el) in enumerate(expr.args)
        if el isa LineNumberNode
            expr.args[i] = LineNumberNode(el.line, Symbol(filepath))
        elseif el isa Expr
            fix_lnns(el, filepath)
        end
    end
end
