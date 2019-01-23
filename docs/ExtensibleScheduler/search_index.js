var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "ExtensibleScheduler Overview",
    "title": "ExtensibleScheduler Overview",
    "category": "page",
    "text": ""
},

{
    "location": "#ExtensibleScheduler-Overview-1",
    "page": "ExtensibleScheduler Overview",
    "title": "ExtensibleScheduler Overview",
    "category": "section",
    "text": "The ExtensibleScheduler package provides advanced and extensible Julia events schedulers inspired by Python schedulers APScheduler, schedule and sched.It\'s also inspired by Sched.jl, a Julia event scheduler inspired by Python sched.Schedulers can use real time clock (system time) or simulated time (for simulation purpose)."
},

{
    "location": "#Contents-1",
    "page": "ExtensibleScheduler Overview",
    "title": "Contents",
    "category": "section",
    "text": "Pages = [\n  \"getting_started.md\",\n]"
},

{
    "location": "getting_started/#",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "page",
    "text": ""
},

{
    "location": "getting_started/#Getting-Started-1",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "section",
    "text": "CurrentModule = ExtensibleScheduler"
},

{
    "location": "getting_started/#Install-1",
    "page": "Getting Started",
    "title": "Install",
    "category": "section",
    "text": "ExtensibleScheduler is a registered package. To add it to your Julia packages, simply do the following in REPL:Pkg.add(\"ExtensibleScheduler\")"
},

{
    "location": "getting_started/#Usage-1",
    "page": "Getting Started",
    "title": "Usage",
    "category": "section",
    "text": "using Markdown\nMarkdown.parse(\"\"\"\n```julia\n$(read(\"sample/sample.jl\", String))\n```\n\"\"\")Download example"
},

{
    "location": "getting_started/#ExtensibleScheduler.ExtensibleScheduler",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.ExtensibleScheduler",
    "category": "module",
    "text": "A generally useful event scheduler module.\n\nThe ExtensibleScheduler package provides advanced and extensible Julia events schedulers inspired by Python schedulers APScheduler, schedule and sched.\n\nIt\'s also inspired by Sched.jl, a Julia event scheduler inspired by Python sched.\n\nSchedulers can use real time clock (system time) or simulated time (for simulation purpose).\n\n\n\n\n\n"
},

{
    "location": "getting_started/#Library-Outline-1",
    "page": "Getting Started",
    "title": "Library Outline",
    "category": "section",
    "text": "ExtensibleScheduler"
},

{
    "location": "getting_started/#ExtensibleScheduler.AbstractScheduler",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.AbstractScheduler",
    "category": "type",
    "text": "AbstractScheduler is an abstract type for schedulers.\n\nSchedulers are structs which are responsible of running  Action at given instants (according a Trigger).\n\nSeveral kind of schedulers can implement AbstractScheduler.\n\nThe most simple scheduler is BlockingScheduler which is monothread.\n\n\n\n\n\n"
},

{
    "location": "getting_started/#ExtensibleScheduler.BlockingScheduler",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.BlockingScheduler",
    "category": "type",
    "text": "BlockingScheduler(; clock=real_time_clock, delayfunc=_sleep, jobconfig=JobConfig())\n\nBlockingScheduler is the simplest scheduler. It implements AbstractScheduler.\n\nThis is a monothread implementation of scheduling job.\n\nOptional arguments\n\nclock::AbstractClock: clock that will be used by scheduler (it\'s by default real_time_clock, which is system UTC time but a SimClock struct can also be passed for simulation purpose).\ndelayfunc::DelayFunc: functor which is responsible (when called) of waiting until next task should be fired (_sleep is used by default but a NoSleep struct can also be passed for simulation purpose).\njobconfig::JobConfig: job configuration default settings (misfire_grace_period...)\n\n\n\n\n\n"
},

{
    "location": "getting_started/#ExtensibleScheduler.add-Tuple{ExtensibleScheduler.AbstractScheduler,Action,ExtensibleScheduler.AbstractTrigger}",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.add",
    "category": "method",
    "text": "add(sched, action, trigger; name=DEFAULT_JOB_NAME, priority=DEFAULT_PRIORITY)\n\nSchedule when an Action named action should be triggered (according trigger).\n\n\n\n\n\n"
},

{
    "location": "getting_started/#Base.run-Tuple{BlockingScheduler}",
    "page": "Getting Started",
    "title": "Base.run",
    "category": "method",
    "text": "run(sched)\n\nRun (in a blocking loop) a scheduler named sched.\n\n\n\n\n\n"
},

{
    "location": "getting_started/#ExtensibleScheduler.run_pending-Tuple{BlockingScheduler}",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.run_pending",
    "category": "method",
    "text": "run_pending(sched)\n\nRun pending tasks of a scheduler sched.\n\nThis function should be called instead of run when using scheduler in simulation mode.\n\n\n\n\n\n"
},

{
    "location": "getting_started/#ExtensibleScheduler.shutdown-Tuple{BlockingScheduler}",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.shutdown",
    "category": "method",
    "text": "shutdown(sched)\n\nShutdown scheduler sched.\n\n\n\n\n\n"
},

{
    "location": "getting_started/#Schedulers-1",
    "page": "Getting Started",
    "title": "Schedulers",
    "category": "section",
    "text": "AbstractSchedulerBlockingScheduleradd(sched::AbstractScheduler, action::Action, trigger::AbstractTrigger; name=DEFAULT_JOB_NAME, priority=DEFAULT_PRIORITY)run(sched::BlockingScheduler)run_pending(sched::BlockingScheduler)shutdown(sched::BlockingScheduler)"
},

{
    "location": "getting_started/#ExtensibleScheduler.Action",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.Action",
    "category": "type",
    "text": "Action(func, args...; kwargs...)\n\nAn Action is a structure (a functor in fact) which stores function, arguments and keyword arguments.\n\nAn Action can be run (in fact it\'s run internally by a scheduler when a Job is triggered.)\n\n\n\n\n\n"
},

{
    "location": "getting_started/#Base.run-Tuple{Action}",
    "page": "Getting Started",
    "title": "Base.run",
    "category": "method",
    "text": "run(action::Action)\n\nRun action.\n\nThis function shouldn\'t be called directly. It\'s called by scheduler when a job is triggered.\n\n\n\n\n\n"
},

{
    "location": "getting_started/#Action-1",
    "page": "Getting Started",
    "title": "Action",
    "category": "section",
    "text": "Actionrun(action::Action)"
},

{
    "location": "getting_started/#ExtensibleScheduler.AbstractJobStore",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.AbstractJobStore",
    "category": "type",
    "text": "AbstractJobStore is an abstract type for jobstores\n\nA jobstore is a data structure which is responsible of storing jobs that should be executed later.\n\n\n\n\n\n"
},

{
    "location": "getting_started/#ExtensibleScheduler.MemoryJobStore",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.MemoryJobStore",
    "category": "type",
    "text": "MemoryJobStore()\n\nMemoryJobStore implements AbstractJobStore.\n\nThis is a data structure which is responsible of storing into memory jobs that should be executed later.\n\n\n\n\n\n"
},

{
    "location": "getting_started/#JobStore-1",
    "page": "Getting Started",
    "title": "JobStore",
    "category": "section",
    "text": "AbstractJobStoreMemoryJobStore"
},

{
    "location": "getting_started/#Triggers-1",
    "page": "Getting Started",
    "title": "Triggers",
    "category": "section",
    "text": ""
},

{
    "location": "getting_started/#ExtensibleScheduler.Trigger",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.Trigger",
    "category": "function",
    "text": "Trigger(dt::DateTime)\n\nReturn an InstantTrigger which should trigger job at a given DateTime dt\n\n\n\n\n\nTrigger(d::Date)\n\nReturn an InstantTrigger which should trigger job at a given Date d(at midnight)\n\n\n\n\n\nTrigger(t::Dates.Time[, n=number_of_times])\n\nReturn an TimeTrigger which should trigger a job daily at a given time (once, a finite number of times or indefinitely).\n\n\n\n\n\nTrigger(td::Dates.Period[, n=number_of_times])\n\nReturn an PeriodTrigger which should trigger a job after a given period (DatePeriod or TimePeriod).\n\n\n\n\n\nTrigger(tf::TimeFrame[, n=number_of_times])\n\nReturn an TimeFrameTrigger which should trigger a job at a given instant according timeframe periodicity. (from TimeFrames.jl)\n\n\n\n\n\nTrigger(f::Function[, n=number_of_times])\n\nReturn an CustomTrigger which should trigger a job according a function f.\n\n\n\n\n\n"
},

{
    "location": "getting_started/#Triggers-construction-1",
    "page": "Getting Started",
    "title": "Triggers construction",
    "category": "section",
    "text": "Trigger"
},

{
    "location": "getting_started/#Base.iterate-Tuple{ExtensibleScheduler.AbstractTrigger,Any}",
    "page": "Getting Started",
    "title": "Base.iterate",
    "category": "method",
    "text": "iterate(trigger, dt[, n=number_of_times])\n\nIterate from instant dt using trigger with a given iteration number n  if n < 0 (-1 by default), it iterates indefinitely.\n\nUsage\n\njulia> trigger = Trigger(Dates.Time(20, 30))\n\njulia> for dt in iterate(trigger, DateTime(2020, 1, 1), n=3)\n         @show dt\n       end\ndt = 2020-01-01T20:30:00\ndt = 2020-01-02T20:30:00\ndt = 2020-01-03T20:30:00\n\njulia> collect(iterate(trigger, DateTime(2020, 1, 1), n=3))\n3-element Array{Any,1}:\n 2020-01-01T20:30:00\n 2020-01-02T20:30:00\n 2020-01-03T20:30:00\n\n\n\n\n\n"
},

{
    "location": "getting_started/#Trigger-iteration-1",
    "page": "Getting Started",
    "title": "Trigger iteration",
    "category": "section",
    "text": "Iteration can help to know when job should be triggered.iterate(trigger::AbstractTrigger, dt; n=-1)"
},

{
    "location": "getting_started/#ExtensibleScheduler.InstantTrigger",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.InstantTrigger",
    "category": "type",
    "text": "InstantTrigger(dt::DateTime)\n\nA trigger which should trigger job at a given instant (a given DateTime for example)\n\n\n\n\n\n"
},

{
    "location": "getting_started/#ExtensibleScheduler.TimeTrigger",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.TimeTrigger",
    "category": "function",
    "text": "TimeTrigger(t::Dates.Time[, n=number_of_times])\n\nA trigger which should trigger a job daily at a given time.\n\nOptional parameter\n\nn=1: trigger once\nn=-1 (default): trigger every day indefinitely\nn=value: trigger just a number of times\n\n\n\n\n\n"
},

{
    "location": "getting_started/#ExtensibleScheduler.PeriodTrigger",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.PeriodTrigger",
    "category": "function",
    "text": "PeriodTrigger(t::Dates.Time[, n=number_of_times])\n\nA trigger which should trigger a job after a given period (DatePeriod or TimePeriod)\n\nOptional parameter\n\nn=1: trigger once\nn=-1 (default): trigger every day indefinitely\nn=value: trigger just a number of times\n\n\n\n\n\n"
},

{
    "location": "getting_started/#ExtensibleScheduler.TimeFrameTrigger",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.TimeFrameTrigger",
    "category": "function",
    "text": "TimeFrameTrigger(tf::TimeFrame)\n\nA trigger which should trigger a job at a given instant according timeframe periodicity (from TimeFrames.jl)\n\nExample\n\nTimeFrameTrigger(\"H\")\n\nshould run a job every hour\n\n\n\n\n\n"
},

{
    "location": "getting_started/#ExtensibleScheduler.CustomTrigger",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.CustomTrigger",
    "category": "function",
    "text": "CustomTrigger(f::Function[, n=number_of_times])\n\nA trigger which should trigger a job according a function f.\n\nIt\'s generally a better idea (cleaner implementation) to write your own  trigger from  AbstractTrigger, AbstractFiniteTrigger or AbstractInfiniteTrigger  but passing a function to a CustomTrigger can be quite handy\n\nJob can be triggered:\n\nonce (n=1)\na finite number of times (n=number_of_times)\nindefinitely (without setting n)\n\nExample\n\nf = (dt_previous_fire, dt_now) -> dt_now + Dates.Minute(5)\ntrigger = CustomTrigger(f)\n\nshould run a job every 5 minutes\n\n\n\n\n\n"
},

{
    "location": "getting_started/#ExtensibleScheduler.NoTrigger",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.NoTrigger",
    "category": "type",
    "text": "NoTrigger define a trigger that never trigger.\n\nIt\'s a useful struct for triggers operations such as applying offset or jitter to a trigger.\n\n\n\n\n\n"
},

{
    "location": "getting_started/#Private-1",
    "page": "Getting Started",
    "title": "Private",
    "category": "section",
    "text": "InstantTriggerTimeTriggerPeriodTriggerTimeFrameTriggerCustomTriggerNoTrigger"
},

{
    "location": "getting_started/#ExtensibleScheduler.TriggerOffset",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.TriggerOffset",
    "category": "type",
    "text": "TriggerOffset(trigger, offset)\n\nor\n\nTriggerOffset(offset)\n\nA trigger operation to shift instant when a job should be triggered (adding an offset)\n\nAddition + and substraction - are implemented so it\'s possible to define a new trigger using\n\nTrigger(\"H\") + TriggerOffset(Date.Minute(3))\n\nto be able to run a job every hour at 3 minutes after round after.\n\nThis is same as:\n\nTriggerOffset(Trigger(\"H\"), Date.Minute(3))\n\n\n\n\n\n"
},

{
    "location": "getting_started/#ExtensibleScheduler.TriggerJitter",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.TriggerJitter",
    "category": "type",
    "text": "TriggerJitter(trigger, offset)\n\nor\n\nTriggerOffset(offset)\n\nA trigger operation that apply jitter to instant when a job should be triggered.\n\nAddition + and substraction - are implemented so it\'s possible to define a new trigger using\n\nTrigger(\"H\") + TriggerJitter(Date.Minute(3))\n\nto be able to run a job every hour with a random jitter of 3 minutes. This is same as:\n\nTriggerJitter(Trigger(\"H\"), Date.Minute(3))\n\nRandomize next_dt_fire by adding or subtracting a random value (the jitter). If the resulting DateTime is in the past, returns the initial next_dt_fire without jitter.\n\nnextdtfire - jitter <= result <= nextdtfire + jitter\n\n\n\n\n\n"
},

{
    "location": "getting_started/#Triggers-operations-1",
    "page": "Getting Started",
    "title": "Triggers operations",
    "category": "section",
    "text": "TriggerOffsetTriggerJitter"
},

{
    "location": "getting_started/#Internals-1",
    "page": "Getting Started",
    "title": "Internals",
    "category": "section",
    "text": ""
},

{
    "location": "getting_started/#ExtensibleScheduler.Job",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.Job",
    "category": "type",
    "text": "Job(id, action, trigger, name, priority, dt_created, dt_updated, dt_next_fire, n_triggered, config)\n\nA job is an internal structure which store what action  should be executed when triggered.\n\nIt also store several properties such as priority level, number of time a job is triggered, when will next trigger should occur...\n\n\n\n\n\n"
},

{
    "location": "getting_started/#Job-1",
    "page": "Getting Started",
    "title": "Job",
    "category": "section",
    "text": "Job"
},

{
    "location": "getting_started/#ExtensibleScheduler.Priority",
    "page": "Getting Started",
    "title": "ExtensibleScheduler.Priority",
    "category": "type",
    "text": "Priority(time_, priority)\n\nPriority of events.\n\nComparison is first done by time, and after (if same time) using priority value.\n\nAs in UNIX, lower priority numbers mean higher priority.\n\n\n\n\n\n"
},

{
    "location": "getting_started/#Priority-1",
    "page": "Getting Started",
    "title": "Priority",
    "category": "section",
    "text": "Priority"
},

{
    "location": "getting_started/#See-also-1",
    "page": "Getting Started",
    "title": "See also",
    "category": "section",
    "text": "Sched.jl A Julia events scheduler inspired by Python sched.\nhttps://discourse.julialang.org/t/julia-cron-like-event-scheduler/6899"
},

]}
