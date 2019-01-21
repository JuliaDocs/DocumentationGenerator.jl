using Sched

sched = Scheduler()

# Time as Float64
# global _time = time

# Time as DateTime
global _time = UTCDateTimeFunc

function print_time_noparam()
    println("From print_time_noparam $(_time())")
end

function print_time_args(x)
    println("From print_time_args $(_time()) $x")
end

function print_time_kwargs(; a="default")
    println("From print_time_kwargs $(_time()) $a")
end

function print_some_times()
    println(_time())
    enter(sched, Dates.Second(10), 1, print_time_noparam)
    enter(sched, Dates.Second(5), 2, print_time_args, ("positional, argument"))
    enter(sched, Dates.Second(5), 1, print_time_kwargs; Dict(:a=>"keyword")...)
    run(sched)
    println(_time())
end

print_some_times()
