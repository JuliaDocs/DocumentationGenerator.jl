var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#CloudWatchLogs-1",
    "page": "Home",
    "title": "CloudWatchLogs",
    "category": "section",
    "text": "(Image: Stable) (Image: Latest) (Image: Build Status) (Image: CodeCov)CloudWatchLogs.jl provides easy access to CloudWatch Log Streams, and provides a Memento log handler."
},

{
    "location": "#Usage-1",
    "page": "Home",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Direct-1",
    "page": "Home",
    "title": "Direct",
    "category": "section",
    "text": "CloudWatchLogs.jl uses AWSCore.jl for authentication and communication with Amazon Web Services. Many functions accept a config::AWSConfig parameter, which can be retrieved from AWSCore\'s aws_config function.CloudWatch Log Streams can be created and deleted by name using create_stream and delete_stream. Those streams (or previously-existing streams) can be wrapped in a CloudWatchLogStream.LogEvents are simply string messages and timestamps. By default, the timestamp is the current time. You can submit LogEvents to a CloudWatchLogStream using submit_logs or submit_log.Here is an example:using CloudWatchLogs\nusing AWSCore\n\nconfig = aws_config()\nstream = CloudWatchLogStream(\n    config, \"existing-log-group\", create_stream(\"my-stream-$(uuid1())\")\n)\nsubmit_log(stream, LogEvent(\"Hello, I\'m a log\"))\nsubmit_logs(stream, [LogEvent(\"I\'m log #$i\") for i in 1:3])"
},

{
    "location": "#With-Memento-1",
    "page": "Home",
    "title": "With Memento",
    "category": "section",
    "text": ""
},

{
    "location": "#Single-Process-1",
    "page": "Home",
    "title": "Single Process",
    "category": "section",
    "text": "CloudWatchLogs.jl also provides a log handler for Memento.jl.To add a handler to the root logger:push!(getlogger(\"root\"), CloudWatchLogHandler(aws_config(), \"my-log-group\", \"my-log-stream\"))Or, to add a handler to a package\'s logger:# in the package\'s root module\nconst LOGGER = getlogger(@__MODULE__)\n\nfunction __init__()\n    Memento.register(LOGGER)\n    push!(LOGGER, CloudWatchLogHandler(aws_config(), \"my-log-group\", \"my-log-stream\"))\nend"
},

{
    "location": "#Parallel-Usage-1",
    "page": "Home",
    "title": "Parallel Usage",
    "category": "section",
    "text": "Only one source can log to a CloudWatch Log Stream at a time, as each log submission must be submitted with the previous submission\'s sequence token. With Memento, this means you need a stream and handler for each process you will be logging to your logger from.To add a handler with a unique stream to the root logger on each process:@everywhere using Memento\n@everywhere using Compat.UUIDs\n@everywhere push!(getlogger(\"root\"), CloudWatchLogHandler(aws_config(), \"my-log-group\", \"my-log-stream-$(uuid1())\"))Or, to add a handler to a package\'s logger which will generate a new stream for each process it\'s loaded on:# in the package\'s root module\nconst LOGGER = getlogger(@__MODULE__)\n\nfunction __init__()\n    Memento.register(LOGGER)\n    push!(LOGGER, CloudWatchLogHandler(aws_config(), \"my-log-group\", \"my-log-stream-$(uuid1())\"))\nend"
},

{
    "location": "pages/api/#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": ""
},

{
    "location": "pages/api/#API-1",
    "page": "API",
    "title": "API",
    "category": "section",
    "text": ""
},

{
    "location": "pages/api/#CloudWatchLogs.LogEvent",
    "page": "API",
    "title": "CloudWatchLogs.LogEvent",
    "category": "type",
    "text": "LogEvent(message::AbstractString, datetime=Dates.now(tz\"UTC\"))\nLogEvent(message::AbstractString, timestamp)\n\nLog event for submission to CloudWatch Logs.\n\n\n\n\n\n"
},

{
    "location": "pages/api/#LogEvent-1",
    "page": "API",
    "title": "LogEvent",
    "category": "section",
    "text": "Modules = [CloudWatchLogs]\nPages = [\"event.jl\"]\nPrivate = false"
},

{
    "location": "pages/api/#CloudWatchLogs.CloudWatchLogStream-Tuple{Dict{Symbol,Any},AbstractString,AbstractString}",
    "page": "API",
    "title": "CloudWatchLogs.CloudWatchLogStream",
    "category": "method",
    "text": "CloudWatchLogStream(config::AWSConfig, log_group_name, log_stream_name)\n\nCreate a reference to a CloudWatch Log Stream on AWS with the log group name and log stream name. This constructor will automatically fetch the latest sequence token for the stream.\n\n\n\n\n\n"
},

{
    "location": "pages/api/#CloudWatchLogs.create_group",
    "page": "API",
    "title": "CloudWatchLogs.create_group",
    "category": "function",
    "text": "create_group(config::AWSConfig) -> String\ncreate_group(config::AWSConfig, log_group_name) -> String\n\nCreate a CloudWatch Log Group. If the log group name is not provided, one is generated using a UUID4.\n\nReturns the log group name.\n\n\n\n\n\n"
},

{
    "location": "pages/api/#CloudWatchLogs.create_stream",
    "page": "API",
    "title": "CloudWatchLogs.create_stream",
    "category": "function",
    "text": "create_stream(config::AWSConfig, log_group_name) -> String\ncreate_stream(config::AWSConfig, log_group_name, log_stream_name) -> String\n\nCreate a CloudWatch Log Stream under a given Log Group. If the log stream name is not provided, one is generated using a UUID4.\n\nReturns the log stream name.\n\n\n\n\n\n"
},

{
    "location": "pages/api/#CloudWatchLogs.delete_group-Tuple{Dict{Symbol,Any},AbstractString}",
    "page": "API",
    "title": "CloudWatchLogs.delete_group",
    "category": "method",
    "text": "delete_stream(config::AWSConfig, log_group_name)\n\nDelete a CloudWatch Log Group.\n\n\n\n\n\n"
},

{
    "location": "pages/api/#CloudWatchLogs.delete_stream-Tuple{Dict{Symbol,Any},AbstractString,AbstractString}",
    "page": "API",
    "title": "CloudWatchLogs.delete_stream",
    "category": "method",
    "text": "delete_stream(config::AWSConfig, log_group_name, log_stream_name)\n\nDelete a CloudWatch Log Stream from a given Log Group.\n\n\n\n\n\n"
},

{
    "location": "pages/api/#CloudWatchLogs.submit_log-Tuple{CloudWatchLogStream,LogEvent}",
    "page": "API",
    "title": "CloudWatchLogs.submit_log",
    "category": "method",
    "text": "submit_log(stream::CloudWatchLogStream, event::LogEvent) -> Int\n\nCall submit_logs with one event.\n\n\n\n\n\n"
},

{
    "location": "pages/api/#CloudWatchLogs.submit_logs-Tuple{CloudWatchLogStream,AbstractArray{LogEvent,1}}",
    "page": "API",
    "title": "CloudWatchLogs.submit_logs",
    "category": "method",
    "text": "submit_logs(stream::CloudWatchLogStream, events::AbstractVector{LogEvent}) -> Int\n\nSubmit a list of log events to AWS.\n\nNone of the log events can be more than 2 hours in the future, or older than 14 days or the retention period of the log group. If this occurs, those log messages will be rejected but the rest will succeed.\n\nSubmission of all log events will fail if:\n\nthe log events are more than 1 MiB of data\nthe log events are not in chronological order by timestamp\nthere are more than 10000 log events in events\nthe log events span more than 24 hours\n\nReturns the number of events successfully submitted.\n\n\n\n\n\n"
},

{
    "location": "pages/api/#Streams-1",
    "page": "API",
    "title": "Streams",
    "category": "section",
    "text": "Modules = [CloudWatchLogs]\nPages = [\"stream.jl\", \"exceptions.jl\"]\nPrivate = false"
},

{
    "location": "pages/api/#CloudWatchLogs.CloudWatchLogHandler-Union{Tuple{F}, Tuple{Dict{Symbol,Any},AbstractString,AbstractString}, Tuple{Dict{Symbol,Any},AbstractString,AbstractString,F}} where F<:Memento.Formatter",
    "page": "API",
    "title": "CloudWatchLogs.CloudWatchLogHandler",
    "category": "method",
    "text": "CloudWatchLogHandler(\n    config::AWSConfig,\n    log_group_name,\n    log_stream_name,\n    formatter::Memento.Formatter,\n)\n\nConstruct a Memento Handler for logging to a CloudWatch Log Stream. This constructor creates a task which asynchronously submits logs to the stream.\n\nA CloudWatch Log Event has only two properties: timestamp and message.\n\nIf a Record has a date property it will be used as the timestamp, otherwise the current time will be captured when Memento.emit is called. All DateTimes will be assumed to be in UTC.\n\nThe message will be generated by calling Memento.format on the Record with this handler\'s formatter.\n\n\n\n\n\n"
},

{
    "location": "pages/api/#Handler-1",
    "page": "API",
    "title": "Handler",
    "category": "section",
    "text": "Modules = [CloudWatchLogs]\nPages = [\"handler.jl\"]\nPrivate = false"
},

{
    "location": "pages/setup/#",
    "page": "Setup a Test Stack",
    "title": "Setup a Test Stack",
    "category": "page",
    "text": ""
},

{
    "location": "pages/setup/#Setting-up-a-Test-Environment-1",
    "page": "Setup a Test Stack",
    "title": "Setting up a Test Environment",
    "category": "section",
    "text": ""
},

{
    "location": "pages/setup/#Prerequisites-1",
    "page": "Setup a Test Stack",
    "title": "Prerequisites",
    "category": "section",
    "text": "You must have an AWS account. Setting up the test stack will require permissions for IAM, CloudFormation, and CloudWatch Logs.The instructions below will sometimes use the AWS CLI.At Invenia we have a dedicated account for public CI, so the actions below are performed with an administrator role in that account."
},

{
    "location": "pages/setup/#Setting-up-the-Account-1",
    "page": "Setup a Test Stack",
    "title": "Setting up the Account",
    "category": "section",
    "text": "These are manual steps to take when setting up the testing account."
},

{
    "location": "pages/setup/#Create-a-Testing-User-1",
    "page": "Setup a Test Stack",
    "title": "Create a Testing User",
    "category": "section",
    "text": "This user will be responsible for actually running the tests. The user will be passed to CloudFormation on stack creation and given permission to assume the stack\'s testing role. This approach allows the same user to be used for multiple testing stacks in the same account, which is useful for iterating on stack design.Since the user is given permissions by CloudFormation, it needs no permissions at creation time. It will, however, need access keys. Save these for running tests, ideally as a profile in your AWS credentials file.At Invenia, we create a user dedicated to the project, in this case called CloudWatchLogsJL."
},

{
    "location": "pages/setup/#Create-a-Dedicated-Stack-Creation-Role-(Optional)-1",
    "page": "Setup a Test Stack",
    "title": "Create a Dedicated Stack Creation Role (Optional)",
    "category": "section",
    "text": "If you wish to have greater control and visibility over stack creation, create a dedicated administrator role which will manage the creation of resources in the test stack. Edit the Trust Relationship for this role in the IAM console to allow access from CloudFormation. Adding this to the role\'s policy statement will accomplish this:{\n  \"Effect\": \"Allow\",\n  \"Principal\": {\n    \"Service\": \"cloudformation.amazonaws.com\"\n  },\n  \"Action\": \"sts:AssumeRole\"\n}"
},

{
    "location": "pages/setup/#Creating-the-Stack-1",
    "page": "Setup a Test Stack",
    "title": "Creating the Stack",
    "category": "section",
    "text": ""
},

{
    "location": "pages/setup/#Variables-1",
    "page": "Setup a Test Stack",
    "title": "Variables",
    "category": "section",
    "text": "# relative to the package directory\nexport TEMPLATE=file://test/aws/cwl_test.yml\n\n# the testing user created above\nexport PUBLIC_CI_USER=CloudWatchLogsJL\n\n# your stack name\n# all the Invenia stack names will be CloudWatchLogs-jl-#####, counting up\n# do not attempt to give two stacks the same name\nexport STACK_NAME=CloudWatchLogs-jl-00011"
},

{
    "location": "pages/setup/#Command-1",
    "page": "Setup a Test Stack",
    "title": "Command",
    "category": "section",
    "text": "To create a basic stack with your current profile:aws cloudformation create-stack \\\n    --template-body $TEMPLATE \\\n    --parameters ParameterKey=PublicCIUser,ParameterValue=$PUBLIC_CI_USER \\\n    --stack-name $STACK_NAMEOr if you created a dedicated stack creation role in the optional step above:export STACK_ROLE_ARN=arn:aws:iam::263813748431:role/CloudFormationAdmin\n\naws cloudformation create-stack \\\n    --template-body $TEMPLATE \\\n    --capabilities CAPABILITY_NAMED_IAM \\\n    --role-arn $STACK_ROLE_ARN \\\n    --parameters ParameterKey=PublicCIUser,ParameterValue=$PUBLIC_CI_USER \\\n    --stack-name $STACK_NAMEYou can check the status of stack creation with the AWS CloudFormation console or with the AWS CLI."
},

{
    "location": "pages/setup/#Running-Tests-1",
    "page": "Setup a Test Stack",
    "title": "Running Tests",
    "category": "section",
    "text": "You must authenticate with the testing user, either by setting environment variables or using an AWS profile. The environment variables for Invenia\'s stack are privately set in the Travis CI repository settings.The stack used to test is versioned with the tests, in the test/online.jl file. If you wish to override this for your own testing, set the CLOUDWATCHLOGSJL_STACK_NAME environment variable.After this, running Julia tests normally should work!"
},

]}
