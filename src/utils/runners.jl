"""
    run_with_timeout(
        command; log=stdout, timeout = 5*60, name = "",
        wait_time = 1, verbose = true
    )

Runs `command` and pipes all output to `log`. The process will be terminated after
`timeout` seconds without any output. `name` describes the process in log messages,
and `verbose` determines whether meta-logs ("process started" etc.) will be printed.
"""
function run_with_timeout(
    command;
    log = stdout,
    timeout = 40 * 60,
    name = "",
    wait_time = 1,
    verbose = true,
    kill_timeout = 60,
    max_timeout = 3 * 60 * 60,
    )
    pushfirst!(command.exec, "setsid")
    @info ">> starting" command timeout kill_timeout max_timeout

    print_interval = 60 / wait_time
    print_in = print_interval

    out_io = IOBuffer()
    err_io = IOBuffer()
    out_file, err_file = "", ""
    if VERSION < v"1.1"
        out_file, out_io = mktemp()
        err_file, err_io = mktemp()
    end
    pipe = pipeline(command, stdout = out_io, stderr = err_io)
    process = run(pipe, wait = false)
    if VERSION < v"1.1"
        out_io = open(out_file)
        err_io = open(err_file)
    end
    job_start = timeout_start = time()
    task = @async begin
        logfallback = false
        io = try
            log isa String ? open(log, "w") : log
        catch err
            @error "Error opening logfile, falling back to stdout" error = err
            logfallback = true
            stdout
        end
        try
            tstart = time()
            verbose && @info("starting $name")
            while process_running(process)
                elapsed = time() - timeout_start
                total = time() - job_start
                if elapsed > timeout || total > max_timeout
                    verbose && @info("Terminating $name")
                    kill_pg(process)
                    # Handle scenarios where SIGTERM is blocked/ignored/handled by the process
                    start_time = time()
                    while process_running(process)
                        if time() - start_time > kill_timeout
                            verbose && @info("Killing $name")
                            kill_pg(process, true)
                        end
                        sleep(5)
                    end
                    break
                end
                errstr, outstr = readstr_buffer.((out_io, err_io))
                is_silent = length(errstr) == 0 && length(outstr) == 0
                isempty(outstr) || println(io, outstr)
                isempty(errstr) || println(io, errstr)

                # if something printed reset timeout
                if !is_silent
                    timeout_start = time()
                end

                sleep(wait_time)
                print_in -= 1

                if print_in <= 0 && verbose
                    print(".")
                    print_in = print_interval
                end
            end

            verbose && println()
            verbose &&
                @info("$name completed in $(round(time() - tstart, digits=1)) seconds")
        catch err
            @error "Error while running $(name) with timeout." error = err
        finally
            errstr, outstr = readstr_buffer.((out_io, err_io))
            isempty(outstr) || println(io, outstr)
            isempty(errstr) || println(io, errstr)

            flush(io)
            if log isa String && !logfallback
                close(io)
            end
        end
    end
    return process, task
end

function readstr_buffer(x::IOStream)
    return read(x, String)
end

function readstr_buffer(x::IOBuffer)
    return String(take!(x))
end

function get_pgid(pid::Int32)
    out = try
        readchomp(`ps -o pgid= -p $pid`)
    catch ex
        @warn("Failed to fetch pgid", exception = (ex, catch_backtrace()))
        nothing
    end
    isnothing(out) && return nothing
    return parse(Int32, strip(out))
end

function kill_pg(p::Base.Process, force = false)
    pgid = get_pgid(getpid(p))
    if isnothing(pgid)
        @warn "No process group found for $process"
        kill(p)
    else
        kill_process_group(pgid, force)
    end
end

function kill_process_group(pid::Int32, force)
    pgid = get_pgid(pid)
    type = if force
        "KILL"
    else
        "TERM"
    end
    cmd = ["kill", "-$type", "--", "-$pgid"]
    run(Cmd(cmd))
end
