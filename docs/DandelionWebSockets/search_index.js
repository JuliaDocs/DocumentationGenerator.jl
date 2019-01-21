var documenterSearchIndex = {"docs": [

{
    "location": "#DandelionWebSockets.AbstractMatcher",
    "page": "Home",
    "title": "DandelionWebSockets.AbstractMatcher",
    "category": "type",
    "text": "Abstract type for objects that match actual arguments against expected arguments. For instance, we sometimes don\'t care what value is provided a mock function, only what type it is. Also, this can be used to parse an actual argument as JSON and compare the resulting object, rather than relying on a string comparison.\n\nAll AbstractMatcher types T must define a function mock_match(::T, v::Any).\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.Backoff",
    "page": "Home",
    "title": "DandelionWebSockets.Backoff",
    "category": "type",
    "text": "A backoff that follows a atan curve, and reaches about 90% of max backoff in 12 attempts.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.Backoff-Tuple{}",
    "page": "Home",
    "title": "DandelionWebSockets.Backoff",
    "category": "method",
    "text": "Get the next backoff value.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.ClientProtocol",
    "page": "Home",
    "title": "DandelionWebSockets.ClientProtocol",
    "category": "type",
    "text": "Type for the logic of a client WebSocket.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.MockCall",
    "page": "Home",
    "title": "DandelionWebSockets.MockCall",
    "category": "type",
    "text": "An expected function call, along with expected arguments, and an action it should perform.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.MockExpectationException",
    "page": "Home",
    "title": "DandelionWebSockets.MockExpectationException",
    "category": "type",
    "text": "An exception thrown when an unexpected argument was found or a function was called.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.RandomizedBackoff",
    "page": "Home",
    "title": "DandelionWebSockets.RandomizedBackoff",
    "category": "type",
    "text": "Randomize another backoff by adding some randomness to the backoff time.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.Retry",
    "page": "Home",
    "title": "DandelionWebSockets.Retry",
    "category": "type",
    "text": "Start a timer for some function, based on a backoff.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.Throws",
    "page": "Home",
    "title": "DandelionWebSockets.Throws",
    "category": "type",
    "text": "Tells a mock function that it should throw an exception.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.TypeMatcher",
    "page": "Home",
    "title": "DandelionWebSockets.TypeMatcher",
    "category": "type",
    "text": "Match a value by checking its type only.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.ValueMatcher",
    "page": "Home",
    "title": "DandelionWebSockets.ValueMatcher",
    "category": "type",
    "text": "Simply match a value by equality. This is the default.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.WSClient",
    "page": "Home",
    "title": "DandelionWebSockets.WSClient",
    "category": "type",
    "text": "A WebSocket client, used to connect to a server, and send messages.\n\nNote: The keyword arguments in the constructor are primarily for testing.\n\n\n\n\n\n"
},

{
    "location": "#Base.reset-Tuple{Backoff}",
    "page": "Home",
    "title": "Base.reset",
    "category": "method",
    "text": "Reset the backoff to its initial state.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.on_binary-Tuple{WebSocketHandler,AbstractArray{UInt8,1}}",
    "page": "Home",
    "title": "DandelionWebSockets.on_binary",
    "category": "method",
    "text": "Handle a binary frame.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.on_text-Tuple{WebSocketHandler,String}",
    "page": "Home",
    "title": "DandelionWebSockets.on_text",
    "category": "method",
    "text": "Handle a text frame.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.send_binary-Tuple{WebSocketConnection,AbstractArray{UInt8,1}}",
    "page": "Home",
    "title": "DandelionWebSockets.send_binary",
    "category": "method",
    "text": "Send a single binary frame.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.send_text-Tuple{WebSocketConnection,String}",
    "page": "Home",
    "title": "DandelionWebSockets.send_text",
    "category": "method",
    "text": "Send a single text frame.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.state_closed-Tuple{WebSocketHandler}",
    "page": "Home",
    "title": "DandelionWebSockets.state_closed",
    "category": "method",
    "text": "The WebSocket was closed.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.state_closing-Tuple{WebSocketHandler}",
    "page": "Home",
    "title": "DandelionWebSockets.state_closing",
    "category": "method",
    "text": "The WebSocket is about to close.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.state_connecting-Tuple{WebSocketHandler,WebSocketConnection}",
    "page": "Home",
    "title": "DandelionWebSockets.state_connecting",
    "category": "method",
    "text": "The WebSocket is trying to connect.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.state_open-Tuple{WebSocketHandler}",
    "page": "Home",
    "title": "DandelionWebSockets.state_open",
    "category": "method",
    "text": "The WebSocket is open and ready to send and receive messages.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.stop-Tuple{WebSocketConnection}",
    "page": "Home",
    "title": "DandelionWebSockets.stop",
    "category": "method",
    "text": "Close the WebSocket connection.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.wsconnect-Tuple{WSClient,String,WebSocketHandler}",
    "page": "Home",
    "title": "DandelionWebSockets.wsconnect",
    "category": "method",
    "text": "Connect the client to a WebSocket server at uri, and use handler for the callbacks.\n\nArguments\n\nfix_small_message_latency::Bool = false: Set the TCP_NODELAY flag to improve small message latency.\n\nFix small message latency\n\nThe TCP protocol can buffer small messages (1448 bytes and smaller). The reason is that this reduces the overhead when sending large amounts of small packets. However, it also means that latency can be much higher for small messages. This buffering can be disabled by setting a flag TCPNODELAY. By default, the WebSocket client will now set the TCPNODELAY flag.\n\nIf your application will send and receive primarily small messages (1448 bytes or smaller), and it is sensitive to latency, then leave fix_small_message_latency set to true (now the default). This sets the TCPNODELAY flag. If you are not concerned about latency, but concerned about throughput for many small messages, then you can set `fixsmallmessagelatency = false`. Then you may get higher throughput, at the expense of higher latency for small messages.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.AbnormalNoCloseResponseReceived",
    "page": "Home",
    "title": "DandelionWebSockets.AbnormalNoCloseResponseReceived",
    "category": "type",
    "text": "No Close frame response was received by the client after a reasonable time\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.AbnormalSocketNotClosedByServer",
    "page": "Home",
    "title": "DandelionWebSockets.AbnormalSocketNotClosedByServer",
    "category": "type",
    "text": "The socket did not close the socket in a reasonable timeframe.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.AbstractHandshakeResult",
    "page": "Home",
    "title": "DandelionWebSockets.AbstractHandshakeResult",
    "category": "type",
    "text": "AbstractHandshakeResult is a  supertype for either a successful or an unsuccessful handshake.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.BadHandshake",
    "page": "Home",
    "title": "DandelionWebSockets.BadHandshake",
    "category": "type",
    "text": "BadHandshake is returned when an unsuccessful handshake has been made.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.ClientInitiatedCloseBehaviour",
    "page": "Home",
    "title": "DandelionWebSockets.ClientInitiatedCloseBehaviour",
    "category": "type",
    "text": "Closing the WebSocket connection is a procedure for closing the connection during the normal course the protocol lifetime.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.ClientPingRequest",
    "page": "Home",
    "title": "DandelionWebSockets.ClientPingRequest",
    "category": "type",
    "text": "Send a ping request to the server.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.ClientProtocolInput",
    "page": "Home",
    "title": "DandelionWebSockets.ClientProtocolInput",
    "category": "type",
    "text": "Abstract type for all commands sent to ClientProtocol.\n\nThese commands are sent as arguments to the different handle functions on ClientProtocol. Each command represents an action on a WebSocket, such as sending a text frame, ping request, or closing the connection.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.CloseRequest",
    "page": "Home",
    "title": "DandelionWebSockets.CloseRequest",
    "category": "type",
    "text": "A request to close the WebSocket.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.CloseStatus",
    "page": "Home",
    "title": "DandelionWebSockets.CloseStatus",
    "category": "type",
    "text": "CloseStatusCode indicates a reason for closing the connection. It is optionally sent as the first two bytes of a Close frames payload.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.FailTheConnectionBehaviour",
    "page": "Home",
    "title": "DandelionWebSockets.FailTheConnectionBehaviour",
    "category": "type",
    "text": "Failing the WebSocket connection is an action taken at certain points in the protocol specification, in response to error conditions.\n\nThe closing behaviour is to optionally send a Close frame, with an appropriate status code, and then close the socket.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.FinalFrameAlreadySentException",
    "page": "Home",
    "title": "DandelionWebSockets.FinalFrameAlreadySentException",
    "category": "type",
    "text": "FinalFrameAlreadySentException is thrown when sendframe is called again after the last frame.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.FrameFromServer",
    "page": "Home",
    "title": "DandelionWebSockets.FrameFromServer",
    "category": "type",
    "text": "A frame was received from the server.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.FrameSender",
    "page": "Home",
    "title": "DandelionWebSockets.FrameSender",
    "category": "type",
    "text": "FrameSender is used to send multi-frame messages.\n\nYou are provided a FrameSender via the client. You then send data using the sendframe(sender, data; isfinal=false) method. For the last frame you set isfinal = true.\n\nAfter the last frame has been sent, you MAY NOT use the FrameSender again. Trying to send another frame with the same instance of FrameSender WILL lead to an exception of type FinalFrameAlreadySentException.\n\nNOTE: While you have a FrameSender in which you have not sent the last frame, then       you MAY NOT use the client to send any other messages. Interleaving messages is       prohibited by the WebSocket protocol and will lead to the socket being closed.\n\nNOTE: You may send frames that are individually invalid UTF-8. However, the complete message, which       is all frames concatenated, MUST be valid UTF-8, or the other endpoint is required to fail       the WebSocket connection.       With the TextFrameSender you can use both a String or a Vector{UInt8} as the payload.       The Vector{UInt8} alternative can be used to send invalid UTF-8, or possibly invalid UTF-8.\n\nExample\n\nsender = sendmultiframetext(client)\nsendframe(sender, \"Hello\")\nsendframe(sender, \"world\")\nsendframe(sender, \"Goodbye\"; isfinal=true)\n\nExample\n\nsender = sendmultiframebinary(client)\nsendframe(sender, b\"Hello\")\nsendframe(sender, b\"world\")\nsendframe(sender, b\"Goodbye\"; isfinal=true)\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.FrameWriter",
    "page": "Home",
    "title": "DandelionWebSockets.FrameWriter",
    "category": "type",
    "text": "FrameWriter is used by the protocols to write frames to a socket.\n\nThis is separate from the client protocol code, because the protocol for closing a connection is separate from the rest of the client protocol, and both need to send frames.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.GoodHandshake",
    "page": "Home",
    "title": "DandelionWebSockets.GoodHandshake",
    "category": "type",
    "text": "GoodHandshake is returned when a successful handshake has been made.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.HTTPAdapter",
    "page": "Home",
    "title": "DandelionWebSockets.HTTPAdapter",
    "category": "type",
    "text": "HTTPAdapter is an abstract type for an HTTP package that can be used for a handshake GET.\n\nAny subtype of HTTPAdapter should implement the dohandshake method.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.HTTPHandshake",
    "page": "Home",
    "title": "DandelionWebSockets.HTTPHandshake",
    "category": "type",
    "text": "HTTPHandshake implements the HTTP handshake from the WebSocket specification.\n\nIt requires a random number generator to generate the WebSocket random key used to verify that the other side is actually a WebSocket server. The HTTPAdapter supplied implements the actual HTTP GET request, which returns an HTTPUpgradeResponse.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.HTTPUpgradeResponse",
    "page": "Home",
    "title": "DandelionWebSockets.HTTPUpgradeResponse",
    "category": "type",
    "text": "HTTPUpgradeResponse is a collection of data returned by a HTTP upgrade, regardless of package.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.PongMissed",
    "page": "Home",
    "title": "DandelionWebSockets.PongMissed",
    "category": "type",
    "text": "A pong reply was expected, but never received.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.SendBinaryFrame",
    "page": "Home",
    "title": "DandelionWebSockets.SendBinaryFrame",
    "category": "type",
    "text": "Send a binary frame, sent to ClientProtocol.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.SendTextFrame",
    "page": "Home",
    "title": "DandelionWebSockets.SendTextFrame",
    "category": "type",
    "text": "Send a text frame, sent to ClientProtocol.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.ServerInitiatedCloseBehaviour",
    "page": "Home",
    "title": "DandelionWebSockets.ServerInitiatedCloseBehaviour",
    "category": "type",
    "text": "The server can initiate a Close, in which case this behaviour ensures a proper close.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.ServerReader",
    "page": "Home",
    "title": "DandelionWebSockets.ServerReader",
    "category": "type",
    "text": "Reading from a network socket and placing the resulting frame on a channel.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.SocketClosed",
    "page": "Home",
    "title": "DandelionWebSockets.SocketClosed",
    "category": "type",
    "text": "Used when the underlying network socket was closed.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.SocketState",
    "page": "Home",
    "title": "DandelionWebSockets.SocketState",
    "category": "type",
    "text": "Enum value for the different states a WebSocket can be in.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.StopTaskException",
    "page": "Home",
    "title": "DandelionWebSockets.StopTaskException",
    "category": "type",
    "text": "An exception thrown into a task in order to stop it.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.TLSBufferedIO",
    "page": "Home",
    "title": "DandelionWebSockets.TLSBufferedIO",
    "category": "type",
    "text": "TLSBufferedIO adapts a TLS socket so we can do byte I/O.\n\nThe stream returned by MbedTLS when using a TLS socket does not support the byte I/O used when reading a frame. It only supports reading a chunk of data. This is a fake stream that buffers some data and lets us do byte I/O.\n\nNote: This should have been done by the BufferedStreams.jl package. However, I couldn\'t get it to work with the MbedTLS stream, for reasons unknown. If we can investigate and fix that problem, then we should really replace this type with a BufferedInputStream.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.WebSocketHandshake",
    "page": "Home",
    "title": "DandelionWebSockets.WebSocketHandshake",
    "category": "type",
    "text": "WebSocketHandshake represents a way to make a WebSocket connection handshake.\n\nThe only handshake detailed in the specification is an HTTP handshake, represented by the HTTPHandshake type (regardless of HTTP package used to implement it). The specification does mention the possibility of other types of handshakes, even though these would be outside of the specification.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.connection_result_-Tuple{WSClient,DandelionWebSockets.BadHandshake,WebSocketHandler,Bool}",
    "page": "Home",
    "title": "DandelionWebSockets.connection_result_",
    "category": "method",
    "text": "The HTTP Upgrade failed, for whatever reason.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.connection_result_-Tuple{WSClient,DandelionWebSockets.GoodHandshake,WebSocketHandler,Bool}",
    "page": "Home",
    "title": "DandelionWebSockets.connection_result_",
    "category": "method",
    "text": "connection_result(::WSClient, ::GoodHandshake, ::WebSocketHandler, fix_small_message_latency::Bool)\n\nFor a valid handshake, start all background tasks for this connection. This includes tasks for reading and writing from the socket, as well as a task for user callback.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.do_reader-Tuple{IO,AbstractClientProtocol}",
    "page": "Home",
    "title": "DandelionWebSockets.do_reader",
    "category": "method",
    "text": "Read frames from the network, until an exception is thrown in this task.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.dohandshake-Tuple{DandelionWebSockets.HTTPAdapter,String,AbstractArray{Pair{String,String},N} where N}",
    "page": "Home",
    "title": "DandelionWebSockets.dohandshake",
    "category": "method",
    "text": "dohandshake(http::HTTPAdapter, uri::String, headers::HeaderList)\n\nDo an HTTP GET request to uri including headers headers.\n\nThe headers list will contain all WebSocket upgrade specific headers, such as Connection, Upgrade, and Sec-WebSocket-Key.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.fill_buffer-Tuple{DandelionWebSockets.TLSBufferedIO,Int64}",
    "page": "Home",
    "title": "DandelionWebSockets.fill_buffer",
    "category": "method",
    "text": "Read all available data, and block until we have enough to fulfíll the next read.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.handle-Tuple{ClientProtocol,DandelionWebSockets.CloseRequest}",
    "page": "Home",
    "title": "DandelionWebSockets.handle",
    "category": "method",
    "text": "Handle a user request to close the WebSocket.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.handle-Tuple{ClientProtocol,DandelionWebSockets.FrameFromServer}",
    "page": "Home",
    "title": "DandelionWebSockets.handle",
    "category": "method",
    "text": "Handle a frame from the server.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.handle-Tuple{ClientProtocol,DandelionWebSockets.SendBinaryFrame}",
    "page": "Home",
    "title": "DandelionWebSockets.handle",
    "category": "method",
    "text": "Send a single binary frame.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.handle-Tuple{ClientProtocol,DandelionWebSockets.SendTextFrame}",
    "page": "Home",
    "title": "DandelionWebSockets.handle",
    "category": "method",
    "text": "Send a single text frame.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.handle-Tuple{ClientProtocol,DandelionWebSockets.SocketClosed}",
    "page": "Home",
    "title": "DandelionWebSockets.handle",
    "category": "method",
    "text": "The underlying socket was closed. This is sent by the reader.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.issuccessful-Tuple{DandelionWebSockets.GoodHandshake}",
    "page": "Home",
    "title": "DandelionWebSockets.issuccessful",
    "category": "method",
    "text": "issuccessful(::AbstractHandshakeResult)\n\nTrue if a handshake was succcessful, false otherwise.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.name_args_-Tuple{Expr}",
    "page": "Home",
    "title": "DandelionWebSockets.name_args_",
    "category": "method",
    "text": "Define a name for an argument, if no name is provided.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.performhandshake-Tuple{DandelionWebSockets.HTTPHandshake,String}",
    "page": "Home",
    "title": "DandelionWebSockets.performhandshake",
    "category": "method",
    "text": "performhandshake(h::HTTPHandshake, uri::String)\n\nDo a handshake with the server at uri, with parameters supplied by h. Validate the handshake, and return a good or bad result, depending on the validation.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.protocolstate-Tuple{ClientProtocol}",
    "page": "Home",
    "title": "DandelionWebSockets.protocolstate",
    "category": "method",
    "text": "The state of the connection.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.send-Tuple{DandelionWebSockets.FrameWriter,Bool,Opcode,AbstractArray{UInt8,1}}",
    "page": "Home",
    "title": "DandelionWebSockets.send",
    "category": "method",
    "text": "Send a frame to the other endpoint, using the supplied payload and opcode.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.sendframe-Tuple{DandelionWebSockets.FrameSender{DandelionWebSockets.SendTextFrame,Opcode(0x01)},String}",
    "page": "Home",
    "title": "DandelionWebSockets.sendframe",
    "category": "method",
    "text": "Specialization of sendframe for TextFrameSender, for sending Strings as data.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.sendframe-Union{Tuple{Op}, Tuple{T}, Tuple{FrameSender{T,Op},AbstractArray{UInt8,1}}} where Op where T",
    "page": "Home",
    "title": "DandelionWebSockets.sendframe",
    "category": "method",
    "text": "Send a frame with a payload to the other endpoint. isfinal must be set to true for the last frame.\n\nAfter the call with isfinal = true, then this method MAY NOT be called again. If it is, then a FinalFrameAlreadySentException will be thrown.\n\n\n\n\n\n"
},

{
    "location": "#DandelionWebSockets.tcpnodelay-Tuple{Sockets.TCPSocket}",
    "page": "Home",
    "title": "DandelionWebSockets.tcpnodelay",
    "category": "method",
    "text": "tcpnodelay(::IO)\n\nSets the TCP_NODELAY flag on a socket. This is a separate function only for testing purposes. It can be implemented with a more specific type if the flag makes no sense for another IO subtype.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DandelionWebSockets]\nOrder = [:type, :function]"
},

]}
