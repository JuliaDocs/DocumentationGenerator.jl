var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JWTs-1",
    "page": "Readme",
    "title": "JWTs",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)JSON Web Tokens (JWT) are an open, industry standard RFC 7519 method for representing and transferring claims securely between two parties."
},

{
    "location": "#Keys-and-Key-Sets-1",
    "page": "Readme",
    "title": "Keys and Key Sets",
    "category": "section",
    "text": "JWK represents a JWK Key (either for signing or verification). JWK can be either a JWKRSA or JWKSymmetric. A RSA key can represent either the public or private key.JWKSet holds a set of keys, fetched from a OpenId key URL, each key identified by a key id. The OpenId key URL is usually found in the OpenId configuration (e.g. jwks_uri element in https://accounts.google.com/.well-known/openid-configuration).To create or verify JWT, using a JWKSet is preferred as it provides mechanism of dealing with key rotation. To refresh a JWKSet, or to load keys for the first time, call the refresh! method on it.julia> using JWTs\n\njulia> keyset = JWKSet(\"https://www.googleapis.com/oauth2/v3/certs\")\nJWKSet 0 keys (https://www.googleapis.com/oauth2/v3/certs)\n\njulia> refresh!(keyset)\n\njulia> keyset\nJWKSet 2 keys (https://www.googleapis.com/oauth2/v3/certs)\n\njulia> for (k,v) in keyset.keys\n           println(\"    \", k, \" => \", v.key)\n       end\n    7978a91347261a291bd71dcab4a464be7d279666 => MbedTLS.RSA(Ptr{MbedTLS.mbedtls_rsa_context} @0x0000000001e337e0)\n    8aad66bdefc1b43d8db27e65e2e2ef301879d3e8 => MbedTLS.RSA(Ptr{MbedTLS.mbedtls_rsa_context} @0x0000000001d77390)"
},

{
    "location": "#Tokens-1",
    "page": "Readme",
    "title": "Tokens",
    "category": "section",
    "text": "JWT represents a JSON Web Token containing the payload at the minimum. When signed, it holds the header (with key id and algorithm used) and signature too. The parts are stored in encoded form.julia> using JSON\n\njulia> using JWTs\n\njulia> payload = JSON.parse(\"\"\"{\n           \"iss\": \"https://auth2.juliacomputing.io/dex\",\n           \"sub\": \"ChUxjfgsajfurjsjdut0483672kdhgstgy283jssZQ\",\n           \"aud\": \"example-audience\",\n           \"exp\": 1536080651,\n           \"iat\": 1535994251,\n           \"nonce\": \"1777777777777aaaaaaaaabbbbbbbbbb\",\n           \"at_hash\": \"222222-G-JJJJJJJJJJJJJ\",\n           \"email\": \"user@example.com\",\n           \"email_verified\": true,\n           \"name\": \"Example User\"\n       }\"\"\");\n\njulia> jwt = JWT(; payload=payload)\neyJuYW1lIjoiRXhhbXBsZSBVc2VyIiwiZXhwIjoxNTM2MDgwNjUxLCJhdWQiOiJleGFtcGxlLWF1ZGllbmNlIiwic3ViIjoiQ2hVeGpmZ3NhamZ1cmpzamR1dDA0ODM2NzJrZGhnc3RneTI4M2pzc1pRIiwiaWF0IjoxNTM1OTk0MjUxLCJpc3MiOiJodHRwczovL2F1dGgyLmp1bGlhY29tcHV0aW5nLmlvL2RleCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiMjIyMjIyLUctSkpKSkpKSkpKSkpKSiIsIm5vbmNlIjoiMTc3Nzc3Nzc3Nzc3N2FhYWFhYWFhYWJiYmJiYmJiYmIiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQA JWT can be signed using the sign! method, passing a key set and a key id to sign it with.julia> issigned(jwt)\nfalse\n\njulia> keyset = JWKSet(\"file:///my/secret/location/jwkkey.json\");\n\njulia> refresh!(keyset)\n\njulia> keyid = first(first(keyset.keys)) # using the first key in the key set\n\"4Fytp3LfBhriD0eZ-k3aNS042bDiCZXg6bQNJmYoaE\"\n\njulia> sign!(jwt, keyset, keyid)\n\njulia> issigned(jwt)\ntrue\n\njulia> jwt # note the additional header and signature\neyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6IjRGeXRwM0xmQmhyaUQwZVotazNhTlMwNDJiRGlDWlhnNmJRTkptWW9hRSJ9.eyJuYW1lIjoiRXhhbXBsZSBVc2VyIiwiZXhwIjoxNTM2MDgwNjUxLCJhdWQiOiJleGFtcGxlLWF1ZGllbmNlIiwic3ViIjoiQ2hVeGpmZ3NhamZ1cmpzamR1dDA0ODM2NzJrZGhnc3RneTI4M2pzc1pRIiwiaWF0IjoxNTM1OTk0MjUxLCJpc3MiOiJodHRwczovL2F1dGgyLmp1bGlhY29tcHV0aW5nLmlvL2RleCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiMjIyMjIyLUctSkpKSkpKSkpKSkpKSiIsIm5vbmNlIjoiMTc3Nzc3Nzc3Nzc3N2FhYWFhYWFhYWJiYmJiYmJiYmIiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.zfq-DT4Ft_MSU34pwFrMaealWGs0j7Ynhs9iKjf5Uf4The kid method shows the key id used to sign a JWT. This is useful while validating a JWT.julia> kid(jwt)\n\"4Fytp3LfBhriD0eZ-k3aNS042bDiCZXg6bQNJmYoaE\""
},

{
    "location": "#Validation-1",
    "page": "Readme",
    "title": "Validation",
    "category": "section",
    "text": "To validate a JWT against a key, call the validate! method, passing a key set and the key id to use.The isvalid method can be used to check if a JWT is valid (or has been validated at all). It returns nothing if validation has not been attempted and a Bool indicating validity if it has been validated earlier.julia> isvalid(jwt2)\n\njulia> validate!(jwt, keyset, keyname)\ntrue\n\njulia> isvalid(jwt)\ntrue"
},

{
    "location": "autodocs/#JWTs.JWKSet",
    "page": "Docstrings",
    "title": "JWTs.JWKSet",
    "category": "type",
    "text": "JWKSet holds a set of keys, fetched from a OpenId key URL, each key identified by a key id.\n\nThe key URL can either be of http(s):// or file:// type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JWTs.JWT",
    "page": "Docstrings",
    "title": "JWTs.JWT",
    "category": "type",
    "text": "JWT represents a JWT payload at the minimum.\n\nWhen signed, it holds the header and signature too. The parts are stored in encoded form.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [JWTs]\nOrder = [:type, :function]"
},

]}
