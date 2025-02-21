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
function fix_makefile(makefile, documenter_version = v"1.8.1")
    # default output path:
    buildpath = joinpath(dirname(makefile), "build")
    should_break = false

    ast = parseall(read(makefile, String))
    make_expr = Expr(:block)

    for top_level_elem in ast.args
        # skip deploydocs, if it appears on the top level
        if Meta.isexpr(top_level_elem, :call) && (top_level_elem.args[1] == :deploydocs || top_level_elem.args[1] == :(Documenter.deploydocs))
            continue
        end

        # Update the makedocs() call, if we find it.
        should_break, new_elem = rewrite_makedocs_call(top_level_elem) do elem
            # rewrite makedoc call to respect our requirements
            new_args = []

            has_fmt = false
            has_sitename = false
            has_linkcheck = false
            has_doctest = false
            has_root = false
            has_remotes = false
            has_repo = false
            has_warnonly = false
            html = documenter_version < v"0.21" ? QuoteNode(:html) : :(Documenter.HTML())

            fixkwarg = argument -> begin
                if Meta.isexpr(argument, :kw)
                    name, arg = argument.args
                    # ensure that we generate HTML
                    if name == :format
                        has_fmt = true
                        if Meta.isexpr(arg, :call) && arg.args[1] == :(Documenter.HTML) && !(html isa QuoteNode)
                            append!(html.args, arg.args[2:end])
                        end
                        argument.args[2] = html
                    end
                    # filter out root + build dir
                    if name == :build
                        # record custom output dir if we can infer it statically, otherwise just use `build`
                        if arg isa String
                            buildpath = joinpath(dirname(makefile), arg)
                        else
                            argument.args[2] = "build"
                            buildpath = joinpath(dirname(makefile), "build")
                        end
                    end
                    if name == :sitename
                        has_sitename = true
                    end
                    if name == :linkcheck
                        has_linkcheck = true
                        argument.args[2] = false
                    end
                    if name == :root
                        has_root = true
                        argument.args[2] = dirname(makefile)
                    end
                    if name == :remotes
                        has_remotes = true
                        argument.args[2] = nothing
                    end
                    if name == :repo
                        has_repo = true
                        argument.args[2] = ""
                    end
                    if name == :doctest
                        has_doctest = true
                        argument.args[2] = false
                    end
                    if name == :warnonly
                        has_warnonly = true
                        argument.args[2] = true
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
            if !has_doctest
                push!(new_args, Expr(:kw, :doctest, false))
            end
            if !has_root
                push!(new_args,Expr(:kw, :root, dirname(makefile)))
            end
            if !has_remotes && documenter_version >= v"1"
                push!(new_args, Expr(:kw, :remotes, nothing))
            end
            if !has_repo
                push!(new_args, Expr(:kw, :repo, ""))
            end
            if !has_warnonly && documenter_version >= v"1"
                push!(new_args, Expr(:kw, :warnonly, true))
            end

            return Expr(:call, new_args...)
        end

        push!(make_expr.args, new_elem)

        # ignore everything after `makedocs` call
        should_break && break
    end

    # it's possible a make.jl-file doesn't have `using Documenter` at all, so let's just unconditionally add that here
    pushfirst!(make_expr.args, Expr(:using, Expr(:., :Documenter)))

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

function rewrite_makedocs_call(f!, ast)
    if ast isa Expr
        if Meta.isexpr(ast, :call) && (ast.args[1] == :makedocs || ast.args[1] == :(Documenter.makedocs))
            return true, f!(ast)
        else
            should_break = false
            for i in eachindex(ast.args)
                if isa(ast.args[i], Expr)
                    should_break_i, elem = rewrite_makedocs_call(f!, ast.args[i])
                    ast.args[i] = elem
                    should_break |= should_break_i
                end
            end
            return should_break, ast
        end
    end
    return false, ast
end
