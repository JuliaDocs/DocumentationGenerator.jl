using ExtensibleScheduler
using TimeFrames
using Dates: now

function print_time_noparam()
    println("From print_time_noparam $(now(Dates.UTC))")
end

function print_time_args(x)
    println("From print_time_args $(now(Dates.UTC)) $x")
end

function print_time_kwargs(; a="default")
    println("From print_time_kwargs $(now(Dates.UTC)) $a")
end

function sample()
    # Use BlockingScheduler with default jobstore, default executor...
    sched = BlockingScheduler()

    # Define what action will be executed
    action = Action(print_time_kwargs; Dict(:a=>"keyword")...)

    # Define when job should be triggered
    trigger = Trigger(DateTime(2017, 12, 17, 20, 8, 0))  # execute one time at given DateTime
    #trigger = Trigger(DateTime(2017, 12, 17, 20, 8, 5))  # execute one time at given DateTime
    #trigger = Trigger(now(Dates.UTC) - Dates.Second(5))  # execute one time at given DateTime (misfire)
    #trigger = Trigger(now(Dates.UTC) + Dates.Second(5))  # execute one time at given DateTime
    #trigger = Trigger(Dates.Time(15, 58), n=1)  # execute one time at given Time (of current day or of next day)
    #trigger = Trigger(Seconds(5), n=1)  # execute one time (5 seconds after being add)
    #trigger = Trigger(tf"5s")  # periodic job ; priority=0 by default
    
    # Add job to jobstore
    add(sched, action, trigger)

    # Run scheduler
    run(sched)
end

sample()
