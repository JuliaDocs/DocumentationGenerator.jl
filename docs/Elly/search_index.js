var documenterSearchIndex = {"docs": [

{
    "location": "#Elly.HDFSClient",
    "page": "Home",
    "title": "Elly.HDFSClient",
    "category": "type",
    "text": "HDFSClient\n\nA client to the namenode in a HDFS cluster and holds a connection to it. It also stores the folder context for using relative paths in APIs that use the client.\n\n\n\n\n\n"
},

{
    "location": "#Elly.HDFSFile",
    "page": "Home",
    "title": "Elly.HDFSFile",
    "category": "type",
    "text": "HDFSFile\n\nHolds a HDFSClient and path pointing to a file on HDFS\n\n\n\n\n\n"
},

{
    "location": "#Elly.HDFSFileInfo",
    "page": "Home",
    "title": "Elly.HDFSFileInfo",
    "category": "type",
    "text": "HDFSFileInfo\n\nStat structure for file/foledr in HDFS\n\n\n\n\n\n"
},

{
    "location": "#Elly.YarnApp",
    "page": "Home",
    "title": "Elly.YarnApp",
    "category": "type",
    "text": "YarnApp represents one instance of application running on the yarn cluster\n\n\n\n\n\n"
},

{
    "location": "#Elly.YarnAppAttemptStatus",
    "page": "Home",
    "title": "Elly.YarnAppAttemptStatus",
    "category": "type",
    "text": "YarnAppAttemptStatus wraps the protobuf type for ease of use\n\n\n\n\n\n"
},

{
    "location": "#Elly.YarnAppMaster",
    "page": "Home",
    "title": "Elly.YarnAppMaster",
    "category": "type",
    "text": "YarnAppMaster is a skeleton application master. It provides the generic scafolding methods which can be used to create specific application masters for different purposes.\n\n\n\n\n\n"
},

{
    "location": "#Elly.YarnAppStatus",
    "page": "Home",
    "title": "Elly.YarnAppStatus",
    "category": "type",
    "text": "YarnAppStatus wraps the protobuf type for ease of use\n\n\n\n\n\n"
},

{
    "location": "#Elly.YarnClient",
    "page": "Home",
    "title": "Elly.YarnClient",
    "category": "type",
    "text": "YarnClient holds a connection to the Yarn Resource Manager and provides APIs for application clients to interact with Yarn.\n\n\n\n\n\n"
},

{
    "location": "#Elly.YarnNode",
    "page": "Home",
    "title": "Elly.YarnNode",
    "category": "type",
    "text": "YarnNode represents a node manager in the yarn cluster and its communication address, resource state and run state.\n\n\n\n\n\n"
},

{
    "location": "#Elly.hdfs_renewlease-Tuple{HDFSClient}",
    "page": "Home",
    "title": "Elly.hdfs_renewlease",
    "category": "method",
    "text": "Applications that write infrequently/slowly must call renewlease periodically to prevent the namenode from assuming the client from having abandoned the file or some other client from recovering the lease.\n\n\n\n\n\n"
},

{
    "location": "#Elly.HDFSBlockReader",
    "page": "Home",
    "title": "Elly.HDFSBlockReader",
    "category": "type",
    "text": "HDFSBlockReader reads one block of data from a datanode.\n\n\n\n\n\n"
},

{
    "location": "#Elly.HDFSBlockWriter",
    "page": "Home",
    "title": "Elly.HDFSBlockWriter",
    "category": "type",
    "text": "HDFSBlockWriter writes one block worth of data to a datanode.\n\nThe write method returns number of bytes accepted for writing into this block, which may be less than what was requested if block is full.\n\nPackets are sent and acks received as and when data being written exceed packet size limit.\n\nThe close operation flushes remaining data in the block and waits for all pending acks.\n\n\n\n\n\n"
},

{
    "location": "#Elly.HDFSException",
    "page": "Home",
    "title": "Elly.HDFSException",
    "category": "type",
    "text": "HDFSException\n\nThrown by HDFS APIs.\n\n\n\n\n\n"
},

{
    "location": "#Elly.HDFSFileReader",
    "page": "Home",
    "title": "Elly.HDFSFileReader",
    "category": "type",
    "text": "HDFSFileReader\n\nProvides Julia IO APIs for reading HDFS files. Communicates with namenode for file metadata (through HDFSClient) and to datanodes for file data (through HDFSBlockReader)\n\n\n\n\n\n"
},

{
    "location": "#Elly.HDFSFileWriter",
    "page": "Home",
    "title": "Elly.HDFSFileWriter",
    "category": "type",
    "text": "HDFSFileWriter\n\nProvides Julia IO APIs for writing HDFS files.\n\nSteps:\n\nget datanodes to write onto from namenode\nbreak bytes into packets\nwrite packets into first datanode\'s data channel (datanode will mirror packets to downstream datanodes)\nwhen complete, confirm namenode with a blockReceived\n\nOn close call NameNode.complete to:\n\nremove lease   lease is a write lock for file modification. no leases are required for reading files.   leases are managed by namenode   lease is added on file create or append   dfs client should start thread to renew leases periodically\nchange file from under construction to complete\n\n\n\n\n\n"
},

{
    "location": "#Elly.HDFSProtocol",
    "page": "Home",
    "title": "Elly.HDFSProtocol",
    "category": "type",
    "text": "HDFSProtocol: Hadoop RPC client for namenode protocol.\n\n\n\n\n\n"
},

{
    "location": "#Elly.HadoopDataChannel",
    "page": "Home",
    "title": "Elly.HadoopDataChannel",
    "category": "type",
    "text": "HadoopDataChannel is the connection to a datanode. Also associated with it is a buffer to help in message preparation.\n\n\n\n\n\n"
},

{
    "location": "#Elly.HadoopDataChannelPool",
    "page": "Home",
    "title": "Elly.HadoopDataChannelPool",
    "category": "type",
    "text": "HadoopDataChannelPool is a connection pool that holds connections to datanodes. Connections are deemed stale after keepalivesecs.\n\n\n\n\n\n"
},

{
    "location": "#Elly.HadoopRpcException",
    "page": "Home",
    "title": "Elly.HadoopRpcException",
    "category": "type",
    "text": "HadoopRpcException is thrown on Rpc interaction errors either with namenode or datanode. Field status contains error code (enum) if received from the connected entity or just ERROR (1) to indicate failure. Though HadoopRpcException is used while communicating with both namenodes and datanodes, SUCCESS and ERROR are coded with the same values in both cases. Other specific error codes need knowledge of the context to interpret.\n\n\n\n\n\n"
},

{
    "location": "#Elly.HadoopRpcProtocol",
    "page": "Home",
    "title": "Elly.HadoopRpcProtocol",
    "category": "type",
    "text": "HadoopRpcProtocol binds a channel and controller with a service protocol implementation. Used by actual service implementations.\n\n\n\n\n\n"
},

{
    "location": "#Elly.PipelinedPacket",
    "page": "Home",
    "title": "Elly.PipelinedPacket",
    "category": "type",
    "text": "PipelinedPacket holds a packet of data while it is sent to datanodes and acknowledged. The data bytes are reset once acks are received successfully to reduce memory usage.\n\n\n\n\n\n"
},

{
    "location": "#Elly.RequestPipeline",
    "page": "Home",
    "title": "Elly.RequestPipeline",
    "category": "type",
    "text": "RequestPipeline holds entities while they are requested for from yarn resource manager. Application master thread extracts pending items and requests them from RM, whereupon they are moved on to the requested state.\n\n\n\n\n\n"
},

{
    "location": "#Elly.WriterPipeline",
    "page": "Home",
    "title": "Elly.WriterPipeline",
    "category": "type",
    "text": "WriterPipeline holds all packets of data for a block and provides methods to maintain their states. Pipeline failed status is set if any of the acks received is a failure. Field acked_bytes contains the count of bytes successfully sent till an error is encountered.\n\n\n\n\n\n"
},

{
    "location": "#Elly.YarnAMNMProtocol",
    "page": "Home",
    "title": "Elly.YarnAMNMProtocol",
    "category": "type",
    "text": "YarnAMNMProtocol: Hadoop RPC client for Yarn application master to node manager protocol.\n\n\n\n\n\n"
},

{
    "location": "#Elly.YarnAMRMProtocol",
    "page": "Home",
    "title": "Elly.YarnAMRMProtocol",
    "category": "type",
    "text": "YarnAMRMProtocol: Hadoop RPC client for Yarn application master to resource manager protocol.\n\n\n\n\n\n"
},

{
    "location": "#Elly.YarnClientProtocol",
    "page": "Home",
    "title": "Elly.YarnClientProtocol",
    "category": "type",
    "text": "YarnClientProtocol: Hadoop RPC client for application client to Yarn resource manager protocol.\n\n\n\n\n\n"
},

{
    "location": "#Elly.YarnContainers",
    "page": "Home",
    "title": "Elly.YarnContainers",
    "category": "type",
    "text": "YarnContainers holds all containers related to the application. It also holds the allocation and release pipelines that are used by application master for requesting actions from resource manager. Also schedules callbacks as tasks when containers are allocated or terminated.\n\n\n\n\n\n"
},

{
    "location": "#Elly.YarnException",
    "page": "Home",
    "title": "Elly.YarnException",
    "category": "type",
    "text": "YarnException\n\nThrown by Yarn APIs.\n\n\n\n\n\n"
},

{
    "location": "#Elly.YarnNodes",
    "page": "Home",
    "title": "Elly.YarnNodes",
    "category": "type",
    "text": "YarnNodes holds node information as visible to the application master. It also caches connection to node masters. Connection are reused if they are required before a set keepalivesecs time.\n\n\n\n\n\n"
},

{
    "location": "#Elly.read_packet!-Tuple{Elly.HDFSBlockReader,Array{UInt8,1},UInt64}",
    "page": "Home",
    "title": "Elly.read_packet!",
    "category": "method",
    "text": "Read one packet into inbuff starting from offset. If inbuff has insufficient space, returns the minimum additional space required in inbuff to read the packet as a negative number. Otherwise, returns the number of bytes available in inbuff after reading the packet.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Elly]\nOrder = [:type, :function]"
},

]}
