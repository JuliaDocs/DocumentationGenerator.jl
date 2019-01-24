var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MbedTLS-1",
    "page": "Readme",
    "title": "MbedTLS",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io) (Image: MbedTLS)A wrapper around the mbed TLS and cryptography C libary.Current supported mbedtls version: 2.13.1Usage:using Sockets\nsock = connect(\"httpbin.org\", 443)\nentropy = MbedTLS.Entropy()\nrng = MbedTLS.CtrDrbg()\nMbedTLS.seed!(rng, entropy)\n\nctx = MbedTLS.SSLContext()\nconf = MbedTLS.SSLConfig()\n\nMbedTLS.config_defaults!(conf)\nMbedTLS.authmode!(conf, MbedTLS.MBEDTLS_SSL_VERIFY_REQUIRED)\nMbedTLS.rng!(conf, rng)\n\nfunction show_debug(level, filename, number, msg)\n    @show level, filename, number, msg\nend\n\nMbedTLS.dbg!(conf, show_debug)\n\nMbedTLS.ca_chain!(conf)\n\nMbedTLS.setup!(ctx, conf)\nMbedTLS.set_bio!(ctx, sock)\n\nMbedTLS.handshake(ctx)\n\nwrite(ctx, \"GET / HTTP/1.1\\r\\nHost: httpbin.org\\r\\n\\r\\n\")\nbuf = String(read(ctx, 100))\n@test ismatch(r\"^HTTP/1.1 200 OK\", buf)Debugging with Wireshark.MbedTLS.jl can optionally log TLS session keys in NSS Key Log Format.e.g.using HTTP\nusing MbedTLS\nc = MbedTLS.SSLConfig(true, log_secrets=\"/Users/sam/stuff/secret_key_log\")\nHTTP.get(\"https://httpbin.org/ip\", sslconfig=c)Wireshark can be configrued to decrypt SSL traffic by setting the location of the key log file under:Wireshark Preferences -> Protocols -> SSL; (Pre-)Master Secret log filename.See: https://sharkfesteurope.wireshark.org/assets/presentations17eu/15.pdf"
},

{
    "location": "autodocs/#MbedTLS.Cipher-Tuple{Union{CipherID, CipherKind}}",
    "page": "Docstrings",
    "title": "MbedTLS.Cipher",
    "category": "method",
    "text": "Cipher(info::Union{CipherID, CipherKind}) -> Cipher\n\nConstruct a cipher object and set it to use the specified cipher algorithm.\n\nThe algorithm can either be specific (ie, CIPHER_AES_256_CBC), or general (ie, CIPHER_AES). In the latter case, a default choice of specific cipher will be used. See ?CipherInfo for more details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.decrypt",
    "page": "Docstrings",
    "title": "MbedTLS.decrypt",
    "category": "function",
    "text": "decrypt(cipher, key, msg, [iv]) -> Vector{UInt8}\n\nDecrypt a message using the given cipher. The cipher can be specified as\n\na generic cipher (like CIPHER_AES)\na specific cipher (like CIPHERAES256_CBC)\na Cipher object\n\nkey is the symmetric key used for cryptography, given as either a String or a Vector{UInt8}. It must be the right length for the chosen cipher; for example, CIPHERAES256_CBC requires a 32-byte (256-bit) key.\n\nmsg is the message to be encoded. It should either be convertible to a String or be a Vector{UInt8}.\n\niv is the initialization vector, whose size must match the block size of the cipher (eg, 16 bytes for AES) and correspond to the iv used by the encryptor. By default, it will be set to all zeros.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.digest",
    "page": "Docstrings",
    "title": "MbedTLS.digest",
    "category": "function",
    "text": "digest(kind::MDKind, msg::Vector{UInt8}, [key::Vector{UInt8}]) -> Vector{UInt8}\n\nPerform a digest of the given type on the given message (a byte array), return a byte array with the digest.\n\nIf an optional key is given, perform an HMAC digest.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.digest!",
    "page": "Docstrings",
    "title": "MbedTLS.digest!",
    "category": "function",
    "text": "digest!(kind::MDKind, msg::Vector{UInt8}, [key::Vector{UInt8}, ], buffer::Vector{UInt8})\n\nIn-place version of digest that stores the digest to buffer.\n\nIt is the user\'s responsibility to ensure that buffer is long enough to contain the digest. get_size(kind::MDKind) returns the appropriate size.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.encrypt",
    "page": "Docstrings",
    "title": "MbedTLS.encrypt",
    "category": "function",
    "text": "encrypt(cipher, key, msg, [iv]) -> Vector{UInt8}\n\nEncrypt a message using the given cipher. The cipher can be specified as\n\na generic cipher (like CIPHER_AES)\na specific cipher (like CIPHERAES256_CBC)\na Cipher object\n\nkey is the symmetric key used for cryptography, given as either a String or a Vector{UInt8}. It must be the right length for the chosen cipher; for example, CIPHERAES256_CBC requires a 32-byte (256-bit) key.\n\nmsg is the message to be encoded. It should either be convertible to a String or be a Vector{UInt8}.\n\niv is the initialization vector, whose size must match the block size of the cipher (eg, 16 bytes for AES). By default, it will be set to all zeros, which is not secure. For security reasons, it should be set to a different value for each encryption operation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.CipherInfo-Tuple{MbedTLS.CipherID,Any,MbedTLS.CipherMode}",
    "page": "Docstrings",
    "title": "MbedTLS.CipherInfo",
    "category": "method",
    "text": "CipherInfo(id::CipherID, key_bitlength, mode::CipherMode) -> CipherInfo\n\nConstruct a custom cipher info object.\n\nid: A CipherID, such as CIPHERAES of CIPHERBLOWFIHS\nkey_bitlength: The bit length of the secret key. Available options depend\n\non the specific cipher id.\n\nmode: Either Encrypt or Decrypt to indicate which cipher operation will\n\nbe performed with this cipher info.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.CipherInfo-Tuple{MbedTLS.CipherID}",
    "page": "Docstrings",
    "title": "MbedTLS.CipherInfo",
    "category": "method",
    "text": "CipherInfo(id::CipherID) -> CipherInfo\n\nBuild a CipherInfo for the given cipher id using the strongest available key size and the CBC block mode.\n\nWarning: In CBC block mode, it is imperative that you use a unique IV (initial value) for each encryption operation to maintain security.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.close-Tuple{MbedTLS.SSLContext}",
    "page": "Docstrings",
    "title": "Base.close",
    "category": "method",
    "text": "Send a TLS close_notify message to the peer.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.eof-Tuple{MbedTLS.SSLContext}",
    "page": "Docstrings",
    "title": "Base.eof",
    "category": "method",
    "text": "True if not isreadable and there are no more bytesavailable to read.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.isopen-Tuple{MbedTLS.SSLContext}",
    "page": "Docstrings",
    "title": "Base.isopen",
    "category": "method",
    "text": "Same as iswritable(ctx).\n\n\"...a closed stream may still have data to read in its buffer,  use eof to check for the ability to read data.\" [?Base.isopen]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.isreadable-Tuple{MbedTLS.SSLContext}",
    "page": "Docstrings",
    "title": "Base.isreadable",
    "category": "method",
    "text": "True unless:\n\nTLS close_notify was received, or\nthe peer closed the connection (and the TLS buffer is empty), or\nan un-handled exception occurred while reading.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.iswritable-Tuple{MbedTLS.SSLContext}",
    "page": "Docstrings",
    "title": "Base.iswritable",
    "category": "method",
    "text": "True unless:\n\nclose(::SSLContext) is called, or\nthe peer closed the connection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.readavailable-Tuple{MbedTLS.SSLContext}",
    "page": "Docstrings",
    "title": "Base.readavailable",
    "category": "method",
    "text": "Read available decrypted data from ctx, but don\'t wait for more data to arrive.\n\nThe amount of decrypted data that can be read at once is limited by MBEDTLS_SSL_MAX_CONTENT_LEN.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.readbytes!",
    "page": "Docstrings",
    "title": "Base.readbytes!",
    "category": "function",
    "text": "Copy at most nbytes of decrypted data from ctx into buf. If all=true: wait for sufficient decrypted data to be available. Less than nbytes may be copied if the peer sends TLS close_notify or closes the connection. Returns number of bytes copied into buf (<= nbytes).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.unsafe_read-Tuple{MbedTLS.SSLContext,Ptr{UInt8},UInt64}",
    "page": "Docstrings",
    "title": "Base.unsafe_read",
    "category": "method",
    "text": "Copy nbytes of decrypted data from ctx into buf. Wait for sufficient decrypted data to be available. Throw EOFError if the peer sends TLS close_notify or closes the connection before nbytes have been copied. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.f_recv-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "MbedTLS.f_recv",
    "category": "method",
    "text": "Copy at most nbytes of encrypted data to buf from the bio connection. If no encrypted bytes are available return:\n\nMBEDTLS_ERR_SSL_WANT_READ if the connection is still open, or\nMBEDTLS_ERR_NET_CONN_RESET if it is closed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.f_send-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "MbedTLS.f_send",
    "category": "method",
    "text": "Copy nbytes of encrypted data from buf to the underlying bio connection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.get_size-Tuple{MbedTLS.MDInfo}",
    "page": "Docstrings",
    "title": "MbedTLS.get_size",
    "category": "method",
    "text": "get_size(kind::MDKind) -> Int\n\nReturns the size of the digest in bytes that the given digest type requires.\n\nFor example,\n\nget_size(MD_SHA256) == 32\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.set_bio!-Union{Tuple{T}, Tuple{SSLContext,T}} where T<:IO",
    "page": "Docstrings",
    "title": "MbedTLS.set_bio!",
    "category": "method",
    "text": "Connect f_send and f_recv callback functions to SSLContext.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.ssl_abandon-Tuple{MbedTLS.SSLContext}",
    "page": "Docstrings",
    "title": "MbedTLS.ssl_abandon",
    "category": "method",
    "text": "The documentation for ssl_read, ssl_write and ssl_close_notify all say:\n\nIf this function returns something other than 0 or MBEDTLSERRSSLWANTREAD/WRITE, you must stop using the SSL context for reading or writing, and either free it or call\n\nThis function ensures that the SSLContext is won\'t be used again.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.ssl_check_pending-Tuple{MbedTLS.SSLContext}",
    "page": "Docstrings",
    "title": "MbedTLS.ssl_check_pending",
    "category": "method",
    "text": "ssl_check_pending(::SSLContext)::Bool\n\nCheck if there is data already read from the underlying transport but not yet processed.\n\nIf the SSL/TLS module successfully returns from an operation - e.g. a handshake or an application record read - and you\'re awaiting incoming data next, you must not immediately idle on the underlying transport to have data ready, but you need to check the value of this function first.  The reason is that the desired data might already be read but not yet processed.  If, in contrast, a previous call to the SSL/TLS module returned MBEDTLSERRSSLWANTREAD, it is not necessary to call this function, as the latter error code entails that all internal data has been processed.\n\nhttps://tls.mbed.org/api/ssl_8h.html#a4075f7de9877fd667bcfa2e819e33426\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.ssl_close_notify-Tuple{MbedTLS.SSLContext}",
    "page": "Docstrings",
    "title": "MbedTLS.ssl_close_notify",
    "category": "method",
    "text": "ssl_close_notify(::SSLContext)\n\nNotify the peer that the connection is being closed. 0 if successful, or a specific SSL error code.\n\nIf this function returns something other than 0 or MBEDTLSERRSSLWANTREAD/WRITE, you must stop using the SSL context for reading or writing, and either free it or call mbedtlssslsession_reset() on it before re-using it for a new connection; the current connection must be closed.\n\nhttps://tls.mbed.org/api/ssl_8h.html#ac2c1b17128ead2df3082e27b603deb4c\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.ssl_conf_renegotiation!-Tuple{SSLConfig,Any}",
    "page": "Docstrings",
    "title": "MbedTLS.ssl_conf_renegotiation!",
    "category": "method",
    "text": "Enable / Disable renegotiation support for connection when initiated by peer (MBEDTLSSSLRENEGOTIATIONENABLED or MBEDTLSSSLRENEGOTIATIONDISABLED). See: https://tls.mbed.org/api/ssl_8h.html#aad4f50fc1c0a018fd5eb18fd9621d0d3\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.ssl_get_bytes_avail-Tuple{MbedTLS.SSLContext}",
    "page": "Docstrings",
    "title": "MbedTLS.ssl_get_bytes_avail",
    "category": "method",
    "text": "Return the number of application data bytes remaining to be read from the current record.\n\nhttps://tls.mbed.org/api/ssl_8h.html#ad43142085f3182e9b0dc967ec582032b:\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.ssl_read-Tuple{MbedTLS.SSLContext,Any,Any}",
    "page": "Docstrings",
    "title": "MbedTLS.ssl_read",
    "category": "method",
    "text": "ssl_read(::SSLContext, ptr, n)\n\nReturns One of the following: 0 if the read end of the underlying transport was closed, the (positive) number of bytes read, or a negative error code on failure.\n\nIf MBEDTLSERRSSLWANTREAD is returned, no application data is available from the underlying transport. In this case, the function needs to be called again at some later stage.\n\nIf this function returns something other than a positive value or MBEDTLSERRSSLWANTREAD/WRITE or MBEDTLSERRSSLCLIENTRECONNECT, you must stop using the SSL context for reading or writing, and either free it or call mbedtlssslsession_reset() on it before re-using it for a new connection; the current connection must be closed.\n\nhttps://tls.mbed.org/api/ssl_8h.html#aa2c29eeb1deaf5ad9f01a7515006ede5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.ssl_session_reset-Tuple{MbedTLS.SSLContext}",
    "page": "Docstrings",
    "title": "MbedTLS.ssl_session_reset",
    "category": "method",
    "text": "Reset an already initialized SSL context for re-use while retaining application-set variables, function pointers and data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.ssl_unsafe_read-Tuple{MbedTLS.SSLContext,Ptr{UInt8},UInt64}",
    "page": "Docstrings",
    "title": "MbedTLS.ssl_unsafe_read",
    "category": "method",
    "text": "ssl_unsafe_read(::SSLContext, buf, nbytes)\n\nCopies at most nbytes of decrypted data into buf. Never blocks to wait for more data to arrive. Returns number of bytes copied into buf (<= nbytes). Updates ctx.bytesavailable with the number of decrypted bytes remaining in the TLS buffer.\n\nStops when:\n\nnbytes have been copied, or\nthere are no more decrypted bytes available in the TLS buffer, or\na TLS close_notify message is received.\n\nWhen TLS close_notify is received:\n\nisreadable is set to false and bytesavailable is set to zero. [RFC5246 7.2.1]: \"Any data received after a closure alert is ignored.\"\nthe number of bytes read before the close_notify is returned as usual.\n\nThrows a MbedException if ssl_read returns an unhandled error code.\n\nWhen an unhandled exception occurs isreadable is set to false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.ssl_unsafe_write-Tuple{MbedTLS.SSLContext,Ptr{UInt8},UInt64}",
    "page": "Docstrings",
    "title": "MbedTLS.ssl_unsafe_write",
    "category": "method",
    "text": "Copy nbytes from buf to ctx.\n\nThe TLS library function ssl_write is called as many times as needed to send all the data. The TLS library encrypts the data and passes it to the f_send function which sends it to the underlying connection (ctx.bio). See f_send and set_bio! below.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.ssl_write-Tuple{MbedTLS.SSLContext,Any,Any}",
    "page": "Docstrings",
    "title": "MbedTLS.ssl_write",
    "category": "method",
    "text": "ssl_write(::SSLContext, ptr, n)\n\nWhen this function returns MBEDTLSERRSSLWANTWRITE/READ, it must be called later with the same arguments, until it returns a value greater that or equal to 0. When the function returns MBEDTLSERRSSLWANTWRITE there may be some partial data in the output buffer, however this is not yet sent.\n\nIf this function returns something other than 0, a positive value or MBEDTLSERRSSLWANTREAD/WRITE, you must stop using the SSL context for reading or writing, and either free it or call mbedtlssslsession_reset() on it before re-using it for a new connection; the current connection must be closed.\n\nhttps://tls.mbed.org/api/ssl_8h.html#a5bbda87d484de82df730758b475f32e5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.update!-Tuple{Cipher,Any,Any}",
    "page": "Docstrings",
    "title": "MbedTLS.update!",
    "category": "method",
    "text": "update!(cipher::Cipher, buf_in, buf_out::Vector{UInt8}) -> Int\n\nRun the given cipher on buf_in (a String or Vector{UInt8}) and store the result of the cipher in buf_out (a Vector{UInt8}).\n\nIt is your responsibility to ensure that buf_out is at least as large as necessary to hold the result. It should be at least as big as the size of buf_in plus the block size associated with cipher.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MbedTLS.wait_for_decrypted_data-Tuple{Any}",
    "page": "Docstrings",
    "title": "MbedTLS.wait_for_decrypted_data",
    "category": "method",
    "text": "While there are no decrypted bytes available but the connection is readable:\n\nIf the TLS buffer has no pending (unprocessed) data wait for more encrypted data to arrive on the underlying connection.\nRun a zero-byte read to allow the library to process its internal buffer, and/or read from the underlying connection.\nssl_unsafe_read updates the isreadable and bytesavailable state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [MbedTLS]\nOrder = [:type, :function]"
},

]}
