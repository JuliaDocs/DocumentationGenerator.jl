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
        command; log=stdout, timeout = 20*60, name = "",
        wait_time = 1, verbose = true, kill_timeout = 60
    )
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
    timeout_start = time()
    task = @async begin
        logfallback = false
        io = try
            log isa String ? open(log, "w") : log
        catch err
            @error "Error opening logfile, falling back to stdout" error=err
            logfallback = true
            stdout
        end
        try
            tstart = time()
            verbose && @info("starting $name")
            while process_running(process)
                elapsed = (time() - timeout_start)
                if elapsed > timeout
                    verbose && @info("Terminating $name")
                    kill(process)
                    # Handle scenarios where SIGTERM is blocked/ignored/handled by the process
                    start_time = time()
                    while process_running(process)
                        if time() - start_time > kill_timeout
                            verbose && @info("Killing $name")
                            kill(process, Base.SIGKILL)
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
            end

            verbose && @info("$name completed in $(round(time() - tstart, digits=1)) seconds")
        catch err
            @error "Error while running $(name) with timeout." error=err
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

function readstr_buffer(x::Base.GenericIOBuffer{Array{UInt8,1}})
    return String(take!(x))
end
