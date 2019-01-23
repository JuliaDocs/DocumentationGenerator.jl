var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AWSSQS-1",
    "page": "Readme",
    "title": "AWSSQS",
    "category": "section",
    "text": "AWS SQS Interface for Julia(Image: Build Status)Documentationusing AWSSQS\n\naws = AWSCore.aws_config()\n\nq = sqs_get_queue(aws, \"my-queue\")\n\nsqs_send_message(q, \"Hello!\")\n\nm = sqs_receive_message(q)\nprintln(m[:message])\nsqs_delete_message(q, m)"
},

{
    "location": "autodocs/#AWSSQS.sqs_arn-Tuple{Dict{Symbol,Any}}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_arn",
    "category": "method",
    "text": "sqs_arn(::AWSQueue)\n\nARN of a queue.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_busy_count-Tuple{Dict{Symbol,Any}}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_busy_count",
    "category": "method",
    "text": "sqs_busy_count(::AWSQueue)\n\nApproximate number of messages not visible in a queue.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_count-Tuple{Dict{Symbol,Any}}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_count",
    "category": "method",
    "text": "sqs_count(::AWSQueue)\n\nApproximate number of messages in a queue.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_create_queue-Tuple{Dict{Symbol,Any},Any}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_create_queue",
    "category": "method",
    "text": "sqs_create_queue([::AWSConfig], name; options...)\n\nCreate new queue with name. Returns ::AWSQueue.\n\noptions: VisibilityTimeout, MessageRetentionPeriod, DelaySeconds etc...\n\nSee SQS API Reference for detail.\n\nq = sqs_create_queue(\"my-queue\")\nsqs_send_message(q, \"my message\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_delete_message-Tuple{Dict{Symbol,Any},Any}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_delete_message",
    "category": "method",
    "text": "sqs_delete_message(::AWSQueue, message)\n\nDelete a message from a queue.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_delete_queue-Tuple{Dict{Symbol,Any}}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_delete_queue",
    "category": "method",
    "text": "sqs_delete_queue(::AWSQueue)\n\nDelete a queue.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_flush-Tuple{Dict{Symbol,Any}}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_flush",
    "category": "method",
    "text": "sqs_flush(::AWSQueue)\n\nDelete all messages from a queue.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_get_queue-Tuple{Dict{Symbol,Any},Any}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_get_queue",
    "category": "method",
    "text": "sqs_get_queue([::AWSConfig], name)\n\nLook up a queue by name. Returns ::AWSQueue.\n\nq = sqs_get_queue(\"my-queue\")\nsqs_send_message(q, \"my message\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_get_queue_attributes-Tuple{Dict{Symbol,Any}}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_get_queue_attributes",
    "category": "method",
    "text": "sqs_get_queue_attributes(::AWSQueue)\n\nGet Queue Attributes for a queue.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_list_queues",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_list_queues",
    "category": "function",
    "text": "sqs_list_queues([::AWSConfig], prefix=\"\")\n\nReturns a list of ::AWSQueue.\n\nfor q in sqs_list_queues()\n    println(\"$(sqs_name(q)) has ~$(sqs_count(q)) messages.\")\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_name-Tuple{Dict{Symbol,Any}}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_name",
    "category": "method",
    "text": "sqs_name(::AWSQueue)\n\nName of a queue.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_receive_message-Tuple{Dict{Symbol,Any}}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_receive_message",
    "category": "method",
    "text": "sqs_receive_message(::AWSQueue)\n\nReturns a Dict containing :message and :handle or nothing if the queue is empty.\n\nm = sqs_receive_message(q)\nprintln(m[:message])\nsqs_delete_message(m)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_send_message-Tuple{Dict{Symbol,Any},Any}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_send_message",
    "category": "method",
    "text": "sqs_send_message(::AWSQueue, message)\n\nSend a message to a queue.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_send_message_batch-Tuple{Dict{Symbol,Any},Any}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_send_message_batch",
    "category": "method",
    "text": "sqs_send_message_batch(::AWSQueue, messages)\n\nSend a collection of messages to a queue.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_set_policy-Tuple{Dict{Symbol,Any},String}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_set_policy",
    "category": "method",
    "text": "sqs_set_policy(::AWSQueue, policy)\n\nSet access policy for a queue.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSSQS.sqs_messages-Tuple{Dict{Symbol,Any}}",
    "page": "Docstrings",
    "title": "AWSSQS.sqs_messages",
    "category": "method",
    "text": "sqs_messages(::AWSQueue)\n\nReturns an iterator that retrieves messages from a queue.\n\nfor m in sqs_messages(q)\n    println(m[:message])\n    sqs_delete_message(m)\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AWSSQS]\nOrder = [:type, :function]"
},

]}
