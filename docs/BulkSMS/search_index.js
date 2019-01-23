var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "BulkSMS Overview",
    "title": "BulkSMS Overview",
    "category": "page",
    "text": ""
},

{
    "location": "#BulkSMS",
    "page": "BulkSMS Overview",
    "title": "BulkSMS",
    "category": "module",
    "text": "A Julia package to send SMS (Short Message Service) using  BulkSMS API  (more exactly HTTP to SMS API)\n\n\n\n\n\n"
},

{
    "location": "#BulkSMS-Overview-1",
    "page": "BulkSMS Overview",
    "title": "BulkSMS Overview",
    "category": "section",
    "text": "BulkSMS"
},

{
    "location": "#Install-1",
    "page": "BulkSMS Overview",
    "title": "Install",
    "category": "section",
    "text": "Pkg.clone(\"https://github.com/scls19fr/BulkSMS.jl\")"
},

{
    "location": "#Usage-1",
    "page": "BulkSMS Overview",
    "title": "Usage",
    "category": "section",
    "text": "using Markdown\nMarkdown.parse(\"\"\"\n```\n$(read(\"../../sample/send_message.jl\", String))\n```\n\"\"\")See examples"
},

{
    "location": "#API-1",
    "page": "BulkSMS Overview",
    "title": "API",
    "category": "section",
    "text": ""
},

{
    "location": "#BulkSMS.BulkSMSClient",
    "page": "BulkSMS Overview",
    "title": "BulkSMS.BulkSMSClient",
    "category": "type",
    "text": "BulkSMSClient(msisdn, username, password;\n        base_url=_DEFAULT_BASE_URL,\n        max_message_len=_DEFAULT_MAX_MESSAGE_LEN)\n\nCreate a client that can connect to BulkSMS HTTP to SMS API.\n\n\n\n\n\n"
},

{
    "location": "#BulkSMS.send",
    "page": "BulkSMS Overview",
    "title": "BulkSMS.send",
    "category": "function",
    "text": "send(client, message_text; msisdn=nothing, action_when_long::ActionWhenLong=shorten)\n\nSend a text message message_text to BulkSMS using HTTP to SMS API with BulkSMSClient client.\n\n\n\n\n\n"
},

{
    "location": "#BulkSMS.ActionWhenLong",
    "page": "BulkSMS Overview",
    "title": "BulkSMS.ActionWhenLong",
    "category": "type",
    "text": "ActionWhenLong\n\nEnumeration that defines how long message treated\n\nshorten: if message is too long, it will be shorten.\nmultiple: if message is too long, several messages will be sent\n\n\n\n\n\n"
},

{
    "location": "#Public-1",
    "page": "BulkSMS Overview",
    "title": "Public",
    "category": "section",
    "text": "BulkSMSClient\nsend\nBulkSMS.ActionWhenLong"
},

{
    "location": "#BulkSMS.BulkSMSClientException",
    "page": "BulkSMS Overview",
    "title": "BulkSMS.BulkSMSClientException",
    "category": "type",
    "text": "BulkSMSClientException(s)\n\nBulkSMS client exception.\n\n\n\n\n\n"
},

{
    "location": "#BulkSMS.BulkSMSResponse",
    "page": "BulkSMS Overview",
    "title": "BulkSMS.BulkSMSResponse",
    "category": "type",
    "text": "BulkSMSResponse(response)\n\nBulkSMS response (from response::Requests.Response).\n\n\n\n\n\n"
},

{
    "location": "#BulkSMS._crop",
    "page": "BulkSMS Overview",
    "title": "BulkSMS._crop",
    "category": "function",
    "text": "_crop(msg, max_len) -> cropped_msg\n\nCrop a message to max_len.\n\n\n\n\n\n"
},

{
    "location": "#BulkSMS._send",
    "page": "BulkSMS Overview",
    "title": "BulkSMS._send",
    "category": "function",
    "text": "_send(client, message_text, msisdn)\n\nSend a text message message_text using client.\n\nThis is a \"low level\" function. You should probably use send(...) insted of _send(...)\n\n\n\n\n\n"
},

{
    "location": "#Private-1",
    "page": "BulkSMS Overview",
    "title": "Private",
    "category": "section",
    "text": "BulkSMS.BulkSMSClientException\nBulkSMS.BulkSMSResponse\nBulkSMS._crop\nBulkSMS._send"
},

{
    "location": "#See-also-1",
    "page": "BulkSMS Overview",
    "title": "See also",
    "category": "section",
    "text": "Pushover.jl - A Julia package to send notifications using the Pushover Notification Service"
},

]}
