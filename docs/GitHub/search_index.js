var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GitHub.jl-1",
    "page": "Readme",
    "title": "GitHub.jl",
    "category": "section",
    "text": "(Image: GitHub) (Image: GitHub) (Image: Build Status) (Image: Build status) (Image: Coverage Status)GitHub.jl provides a Julia interface to the GitHub API v3. Using GitHub.jl, you can do things like:query for basic repository, organization, and user information\nprogrammatically take user-level actions (e.g. starring a repository, commenting on an issue, etc.)\nset up listeners that can detect and respond to repository events\ncreate and retrieve commit statuses (i.e. report CI pending/failure/success statuses to GitHub)Here\'s a table of contents for this rather lengthy README:1. Response Types2. REST Methods3. Authentication4. Pagination5. Handling Webhook Events"
},

{
    "location": "#Response-Types-1",
    "page": "Readme",
    "title": "Response Types",
    "category": "section",
    "text": "GitHub\'s JSON responses are parsed and returned to the caller as types of the form G<:GitHub.GitHubType. Here\'s some useful information about these types:All fields are Union{Nothing, T}.\nField names generally match the corresponding field in GitHub\'s JSON representation (the exception is \"type\", which has the corresponding field name typ to avoid the obvious language conflict).\nGitHubTypes can be passed as arguments to API methods in place of (and in combination with) regular identifying properties. For example, create_status(repo, commit) could be called as:\ncreate_status(::GitHub.Repo, ::GitHub.Commit)\ncreate_status(::GitHub.Repo, ::AbstractString) where the second argument is the SHA\ncreate_status(::AbstractString, ::GitHub.Commit) where the first argument is the full qualified repo name\ncreate_status(::AbstractString, ::AbstractString) where the first argument is the repo name, and the second is the SHAHere\'s a table that matches up the provided GitHubTypes with their corresponding API documentation, as well as alternative identifying values:type alternative identifying property link(s) to documentation\nOwner login, e.g. \"octocat\" organizations, users\nRepo full_name, e.g. \"JuliaWeb/GitHub.jl\" repositories\nCommit sha, e.g. \"d069993b320c57b2ba27336406f6ec3a9ae39375\" repository commits\nGitCommit sha, e.g. \"d069993b320c57b2ba27336406f6ec3a9ae39375\" raw git commits\nBranch name, e.g. master repository branches\nContent path, e.g. \"src/owners/owners.jl\" repository contents\nComment id, e.g. 162224613 commit comments, issue comments, PR review comments\nStatus id, e.g. 366961773 commit statuses\nPullRequest number, e.g. 44 pull requests\nIssue number, e.g. 31 issues\nTeam id, e.g. 1 teams\nGist id, e.g. 0bace7cc774df4b3a4b0ee9aaa271ef6 gists\nReview id, e.g. 1 reviews\nBlob sha, e.g. \"95c8d1aa2a7b1e6d672e15b67e0df4abbe57dcbe\" raw git blobs\nTree sha, e.g. \"78e524d5e979e326a7c144ce195bf94ca9b04fa0\" raw git trees\nTag tag name, e.g. v1.0 git tags\nReferences reference name, e.g. heads/master (note: omits leading refs/) git tagsYou can inspect which fields are available for a type G<:GitHubType by calling fieldnames(G)."
},

{
    "location": "#REST-Methods-1",
    "page": "Readme",
    "title": "REST Methods",
    "category": "section",
    "text": "GitHub.jl implements a bunch of methods that make REST requests to GitHub\'s API. The below sections list these methods (note that a return type of Tuple{Vector{T}, Dict} means the result is paginated)."
},

{
    "location": "#Users-and-Organizations-1",
    "page": "Readme",
    "title": "Users and Organizations",
    "category": "section",
    "text": "method return type documentation\nowner(owner[, isorg = false]) Owner get owner as a user or organization\norgs(owner) Tuple{Vector{Owner}, Dict} get the owner\'s organizations\nfollowers(owner) Tuple{Vector{Owner}, Dict} get the owner\'s followers\nfollowing(owner) Tuple{Vector{Owner}, Dict} get the users followed by owner\nrepos(owner[, isorg = false]) Tuple{Vector{Repo}, Dict} get the owner\'s repositories/get an organization\'s repositories\nteams(owner) Tuple{Vector{Team}, Dict} get the organizations\'s teams repositories"
},

{
    "location": "#Teams-1",
    "page": "Readme",
    "title": "Teams",
    "category": "section",
    "text": "method return type documentation\nmembers(team) Tuple{Vector{Owner}, Dict} get team members as users"
},

{
    "location": "#Repositories-1",
    "page": "Readme",
    "title": "Repositories",
    "category": "section",
    "text": "method return type documentation\nrepo(repo) Repo get repo\ncreate_repo(owner, name, params=Dict{String,String}()) Repo create a repository of the given name in the given  owner\'s account\ncreate_fork(repo) Repo create a fork of repo\nforks(repo) Tuple{Vector{Repo}, Dict} get repo\'s forks\ncontributors(repo) Dict get repo\'s contributors\ncollaborators(repo) Tuple{Vector{Owner}, Dict} get repo\'s collaborators\niscollaborator(repo, user) Bool check if user is a collaborator on repo\nadd_collaborator(repo, user) HTTP.Response add user as a collaborator to repo\nremove_collaborator(repo, user) HTTP.Response remove user as a collaborator from repo\nstats(repo, stat[, attempts = 3]) HTTP.Response get information on stat (e.g. \"contributors\", \"codefrequency\", \"commitactivity\", etc.)\ncommit(repo, sha) Commit get the commit specified by sha\ncommits(repo) Tuple{Vector{Commit}, Dict} get repo\'s commits\nbranch(repo, branch) Branch get the branch specified by branch\nbranches(repo) Tuple{Vector{Branch}, Dict} get repo\'s branches\nfile(repo, path) Content get the file specified by path\ndirectory(repo, path) Tuple{Vector{Content}, Dict} get the contents of the directory specified by path\ncreate_file(repo, path) Dict create a file at path in repo\nupdate_file(repo, path) Dict update a file at path in repo\ndelete_file(repo, path) Dict delete a file at path in repo\npermalink(content::Content, commit) HTTP.URI get a permalink for content at the SHA specified by commit\nreadme(repo) Content get repo\'s README\ncreate_status(repo, sha) Status create a status for the commit specified by sha\nstatuses(repo, ref) Tuple{Vector{Status}, Dict} get the statuses posted to ref\nstatus(repo, ref) Status get the combined status for ref\ncreate_webhook(owner, repo) Webhook create a webhook for repo"
},

{
    "location": "#Pull-Requests-and-Issues-1",
    "page": "Readme",
    "title": "Pull Requests and Issues",
    "category": "section",
    "text": "method return type documentation\npull_request(repo, pr) PullRequest get the pull request specified by pr\npull_requests(repo) Tuple{Vector{PullRequest}, Dict} get repo\'s pull requests\ncreate_pull_request(repo) PullRequest create pull request in repo\nupdate_pull_request(repo, pr) PullRequest update the given pr in repo\nclose_pull_request(repo, pr) PullRequest close the given pr in repo\nissue(repo, issue) Issue get the issue specified by issue\nissues(repo) Tuple{Vector{Issue}, Dict} get repo\'s issues\ncreate_issue(repo) Issue create an issue in repo\nedit_issue(repo, issue) Issue edit issue in repo\nreviews(repo, pr) Tuple{Vector{PullRequest}, Dict} get a pr\'s reviews\ndismiss_review(repo, review) HTTP.Response dismiss review in repo"
},

{
    "location": "#Comments-1",
    "page": "Readme",
    "title": "Comments",
    "category": "section",
    "text": "method return type documentation\ncomment(repo, comment, :issue) Comment get an issue comment from repo\ncomment(repo, comment, :pr) Comment get a PR comment from repo\ncomment(repo, comment, :review) Comment get an review comment from repo\ncomment(repo, comment, :commit) Comment get a commit comment from repo\ncomments(repo, issue, :issue) Tuple{Vector{Comment}, Dict} get the comments on issue in repo\ncomments(repo, pr, :pr) Tuple{Vector{Comment}, Dict} get the comments on pr in repo\ncomments(repo, pr, :review) Tuple{Vector{Comment}, Dict} get the review comments on pr in repo\ncomments(repo, commit, :commit) Tuple{Vector{Comment}, Dict} get the comments on commit in repo\ncreate_comment(repo, issue, :issue) Comment create a comment on issue in repo\ncreate_comment(repo, pr, :pr) Comment create a comment on pr in repo\ncreate_comment(repo, pr, :review) Comment create a review comment on pr in repo\ncreate_comment(repo, commit, :commit) Comment create a comment on commit in repo\nedit_comment(repo, comment, :issue) Comment edit the issue comment in repo\nedit_comment(repo, comment, :pr) Comment edit the PR comment in repo\nedit_comment(repo, comment, :review) Comment edit the review comment in repo\nedit_comment(repo, comment, :commit) Comment edit the commit comment in repo\ndelete_comment(repo, comment, :issue) HTTP.Response delete the issue comment from repo\ndelete_comment(repo, comment, :pr) HTTP.Response delete the PR comment from repo\ndelete_comment(repo, comment, :review) HTTP.Response delete the review comment from repo\ndelete_comment(repo, comment, :commit) HTTP.Response delete the commitcomment from repo\ndelete_comment(repo, comment, :commit) HTTP.Response delete the commitcomment from repo\nreply_to(repo, review, comment, body) HTTP.Response reply to the comment (of review in repo) creating a new comment with the specified body"
},

{
    "location": "#Social-Activity-1",
    "page": "Readme",
    "title": "Social Activity",
    "category": "section",
    "text": "method return type documentation\nstar(repo) HTTP.Response star repo\nunstar(repo) HTTP.Response unstar repo\nstargazers(repo) Tuple{Vector{Owner}, Dict} get repo\'s stargazers\nstarred(user) Tuple{Vector{Repo}, Dict} get repositories starred by user\nwatchers(repo) Tuple{Vector{Owner}, Dict} get repo\'s watchers\nwatched(user) Tuple{Vector{Repo}, Dict} get repositories watched by user\nwatch(repo) HTTP.Response watch repo\nunwatch(repo) HTTP.Response unwatch repo"
},

{
    "location": "#Gists-1",
    "page": "Readme",
    "title": "Gists",
    "category": "section",
    "text": "method return type documentation\ngist(id) Gist get the gist specified by id\ngist(id, revision) Gist get the gist specified by id and revision\ngists() Tuple{Vector{Gist}, Dict} get all public gists\ngists(owner) Tuple{Vector{Gist}, Dict} get all gists for owner\ncreate_gist() Gist create a gist\nedit_gist(gist) Gist edit a gist\ndelete_gist(gist) HTTP.Response delete a gist\ncreate_gist_fork(gist) Gist fork a gist\ngist_forks(gist) Tuple{Vector{Gist}, Dict} list the forks of a gist\nstar_gist(gist) HTTP.Response star gist\nstarred_gists() Tuple{Vector{Gist}, Dict} get the starred gists\nunstar_gist(gist) HTTP.Response unstar gist"
},

{
    "location": "#Git-Data-1",
    "page": "Readme",
    "title": "Git Data",
    "category": "section",
    "text": "method return type documentation\nblob(repo, sha) Blob Look up a blob in the repo by its SHA\ncreate_blob(repo) Blob Create a blob in the repo\ngitcommit(repo, sha) GitCommit Look up a commit in the repo by its SHA\ncreate_gitcommit(repo) GitCommit Create a commit in the repo\ntree(repo, sha) Tree Look up a tree in the repo by its SHA\ncreate_tree(repo) Tree Create a tree in the repo\ntag(repo, sha) Tag Look up a tag in the repo by its name\ncreate_tag(repo) Tag [Create a tag in the repo](\nhttps://developer.github.com/v3/git/tag/#create-a-tag)  \nreference(repo, name) Reference Look up a ref in the repo by its name\nreferences(repo) Vector{Reference} Get all refs of the repo\ncreate_reference(repo) Reference Create a reference in the repo\nupdate_reference(repo) Reference Update a reference in the repo\ndelete_reference(repo) GitCommit Delete a the repo\ntag(repo) Reference Update a reference in the repo\ndelete_reference(repo) GitCommit Delete a the repo"
},

{
    "location": "#GitHub-Apps-1",
    "page": "Readme",
    "title": "GitHub Apps",
    "category": "section",
    "text": "method return type documentation\napp(id) App get the GitHub app with the specified id\napp(slug) App get the GitHub app with the specified slug\napp(;auth=auth) App get the GitHub app authenticated by the corresponding auth\ninstallations(auth) Vector{Installation} get the installations for the GitHub app authenticated by the corresponding auth\nrepos(i::Installation) Tuple{Vector{Repo}, Dict} get the active repositories for this installation"
},

{
    "location": "#GitHub-Check-Runs-1",
    "page": "Readme",
    "title": "GitHub Check Runs",
    "category": "section",
    "text": "method return type documentation\ncreate_check_run(repo; params=...) CheckRun Create a new check run\nupdate_check_run(repo, id::Int; params=...) CheckRun Update the check run with the given id"
},

{
    "location": "#Miscellaneous-1",
    "page": "Readme",
    "title": "Miscellaneous",
    "category": "section",
    "text": "method return type documentation\nrate_limit() Dict get your rate limit status\nauthenticate(token) OAuth2 validate token and return an authentication object"
},

{
    "location": "#Keyword-Arguments-1",
    "page": "Readme",
    "title": "Keyword Arguments",
    "category": "section",
    "text": "All REST methods accept the following keyword arguments:keyword type default value description\nauth GitHub.Authorization GitHub.AnonymousAuth() The request\'s authorization\nparams Dict Dict() The request\'s query parameters\nheaders Dict Dict() The request\'s headers. Note that these headers will be mutated by GitHub.jl request methods.\nhandle_error Bool true If true, a Julia error will be thrown in the event that GitHub\'s response reports an error.\npage_limit Real Inf The number of pages to return (only applies to paginated results, obviously)"
},

{
    "location": "#Authentication-1",
    "page": "Readme",
    "title": "Authentication",
    "category": "section",
    "text": "To authenticate your requests to GitHub, you\'ll need to generate an appropriate access token. Then, you can do stuff like the following (this example assumes that you set an environmental variable GITHUB_AUTH containing the access token):import GitHub\nmyauth = GitHub.authenticate(ENV[\"GITHUB_AUTH\"]) # don\'t hardcode your access tokens!\nGitHub.star(\"JuliaWeb/GitHub.jl\"; auth = myauth)  # star the GitHub.jl repo as the user identified by myauthAs you can see, you can propagate the identity/permissions of the myauth token to GitHub.jl\'s methods by passing auth = myauth as a keyword argument.Note that if authentication is not provided, they\'ll be subject to the restrictions GitHub imposes on unauthenticated requests (such as stricter rate limiting)"
},

{
    "location": "#Authenticating-as-a-GitHub-app-1",
    "page": "Readme",
    "title": "Authenticating as a GitHub app",
    "category": "section",
    "text": "GitHub apps (formerly called integrations) have their own authentication format based on JSON Web Tokens. When creating a GitHub app, you will be prompted to download your app\'s private key. You can use this private key to authenticate as a Github App using the JWTAuth type:appauth = JWTAuth(1234, \"privkey.pem\") # Replace with your app id/privkey fileThe following shows a complete example that opens an issue on every repository on which your application gets installed:listener = GitHub.EventListener() do event\n    # On installation, open an issue on every repository we got installed in\n    if event.kind == \"installation\"\n        # Authenticate as the application\n        appauth = GitHub.JWTAuth(1234, \"privkey.pem\")\n        # Now, get permissions for this particular installation\n        installation = Installation(event.payload[\"installation\"])\n        auth = create_access_token(installation, appauth)\n        for repo in event.payload[\"repositories\"]\n            create_issue(GitHub.Repo(repo), auth=auth,\n                params = Dict(\n                    :title => \"Hello World\",\n                    :body => \"Thank you for installing me - I needed that\"\n            ))\n        end\n    end\n    return HTTP.Response(200)\nend\nGitHub.run(listener, host=IPv4(0,0,0,0), port=8888)"
},

{
    "location": "#Pagination-1",
    "page": "Readme",
    "title": "Pagination",
    "category": "section",
    "text": "GitHub will often paginate results for requests that return multiple items. On the GitHub.jl side of things, it\'s pretty easy to see which methods return paginated results by referring to the REST Methods documentation; if a method returns a Tuple{Vector{T}, Dict}, that means its results are paginated.Paginated methods return both the response values, and some pagination metadata. You can use the per_page/page query parameters and the page_limit keyword argument to configure result pagination.For example, let\'s request a couple pages of GitHub.jl\'s PRs, and configure our result pagination to see how it works:# show all PRs (both open and closed), and give me 3 items per page starting at page 2\njulia> myparams = Dict(\"state\" => \"all\", \"per_page\" => 3, \"page\" => 2);\n\njulia> prs, page_data = pull_requests(\"JuliaWeb/GitHub.jl\"; params = myparams, page_limit = 2);\n\njulia> prs # 3 items per page * 2 page limit == 6 items, as expected\n6-element Array{GitHub.PullRequest,1}:\n GitHub.PullRequest(44)\n GitHub.PullRequest(43)\n GitHub.PullRequest(42)\n GitHub.PullRequest(41)\n GitHub.PullRequest(39)\n GitHub.PullRequest(38)\n\njulia> page_data\nDict{String,String} with 4 entries:\n  \"prev\"  => \"https://api.github.com/repositories/16635105/pulls?page=2&per_page=3&state=all\"\n  \"next\"  => \"https://api.github.com/repositories/16635105/pulls?page=4&per_page=3&state=all\"\n  \"first\" => \"https://api.github.com/repositories/16635105/pulls?page=1&per_page=3&state=all\"\n  \"last\"  => \"https://api.github.com/repositories/16635105/pulls?page=7&per_page=3&state=all\"In the above, prs contains the results from page 2 and 3. We know this because we specified page 2 as our starting page (\"page\" => 2), and limited the response to 2 pages max (page_limit = 2). In addition, we know that exactly 2 pages were actually retrieved, since there are 6 items and we said each page should only contain 3 items (\"per_page\" => 3).The values provided by page_data are the same values that are included in the Link header of the last requested item. You can continue paginating by starting a new paginated request at one of these links using the start_page keyword argument:# Continue paging, starting with `page_data[\"next\"]`.\n# Note that the `params` kwarg can\'t be used here because\n# the link passed to `start_page` has its own parameters\njulia> prs2, page_data2 = pull_requests(\"JuliaWeb/GitHub.jl\"; page_limit = 2, start_page = page_data[\"next\"]);\n\njulia> prs2\n6-element Array{GitHub.PullRequest,1}:\n GitHub.PullRequest(37)\n GitHub.PullRequest(34)\n GitHub.PullRequest(32)\n GitHub.PullRequest(30)\n GitHub.PullRequest(24)\n GitHub.PullRequest(22)\n\njulia> page_data2\nDict{String,String} with 4 entries:\n  \"prev\"  => \"https://api.github.com/repositories/16635105/pulls?page=4&per_page=3&state=all\"\n  \"next\"  => \"https://api.github.com/repositories/16635105/pulls?page=6&per_page=3&state=all\"\n  \"first\" => \"https://api.github.com/repositories/16635105/pulls?page=1&per_page=3&state=all\"\n  \"last\"  => \"https://api.github.com/repositories/16635105/pulls?page=7&per_page=3&state=all\""
},

{
    "location": "#Handling-Webhook-Events-1",
    "page": "Readme",
    "title": "Handling Webhook Events",
    "category": "section",
    "text": "GitHub.jl comes with configurable EventListener and CommentListener types that can be used as basic servers for parsing and responding to events delivered by GitHub\'s repository Webhooks."
},

{
    "location": "#EventListener-1",
    "page": "Readme",
    "title": "EventListener",
    "category": "section",
    "text": "When an EventListener receives an event, it performs some basic validation and wraps the event payload (and some other data) in a WebhookEvent type. This WebhookEvent instance, along with the provided Authorization, is then fed to the server\'s handler function, which the user defines to determine the server\'s response behavior. The handler function is expected to return an HTTP.Response that is then sent back to GitHub.The EventListener constructor takes the following keyword arguments:auth: GitHub authorization (usually with repo-level permissions).\nsecret: A string used to verify the event source. If the event is from a GitHub Webhook, it\'s the Webhook\'s secret. If a secret is not provided, the server won\'t validate the secret signature of incoming requests.\nrepos: A vector of Repos (or fully qualified repository names) listing all acceptable repositories. All repositories are whitelisted by default.\nevents: A vector of event names listing all acceptable events (e.g. [\"commitcomment\", \"pullrequest\"]). All events are whitelisted by default.\nforwards: A vector of HTTP.URIs (or URI strings) to which any incoming requests should be forwarded (after being validated by the listener)Here\'s an example that demonstrates how to construct and run an EventListener that does benchmarking on every commit and PR:import GitHub\n\n# EventListener settings\nmyauth = GitHub.authenticate(ENV[\"GITHUB_AUTH\"])\nmysecret = ENV[\"MY_SECRET\"]\nmyevents = [\"pull_request\", \"push\"]\nmyrepos = [GitHub.Repo(\"owner1/repo1\"), \"owner2/repo2\"] # can be Repos or repo names\nmyforwards = [HTTP.URI(\"http://myforward1.com\"), \"http://myforward2.com\"] # can be HTTP.URIs or URI strings\n\n# Set up Status parameters\npending_params = Dict(\n    \"state\" => \"pending\",\n    \"context\" => \"Benchmarker\",\n    \"description\" => \"Running benchmarks...\"\n)\n\nsuccess_params = Dict(\n    \"state\" => \"success\",\n    \"context\" => \"Benchmarker\",\n    \"description\" => \"Benchmarks complete!\"\n)\n\nerror_params(err) = Dict(\n    \"state\" => \"error\",\n    \"context\" => \"Benchmarker\",\n    \"description\" => \"Error: $err\"\n)\n\n# We can use Julia\'s `do` notation to set up the listener\'s handler function\nlistener = GitHub.EventListener(auth = myauth,\n                                secret = mysecret,\n                                repos = myrepos,\n                                events = myevents,\n                                forwards = myforwards) do event\n    kind, payload, repo = event.kind, event.payload, event.repository\n\n    if kind == \"pull_request\" && payload[\"action\"] == \"closed\"\n        return HTTP.Response(200)\n    end\n\n    if event.kind == \"push\"\n        sha = event.payload[\"after\"]\n    elseif event.kind == \"pull_request\"\n        sha = event.payload[\"pull_request\"][\"head\"][\"sha\"]\n    end\n\n    GitHub.create_status(repo, sha; auth = myauth, params = pending_params)\n\n    try\n        # run_and_log_benchmarks isn\'t actually a defined function, but you get the point\n        run_and_log_benchmarks(event, \"\\$(sha)-benchmarks.csv\")\n    catch err\n        GitHub.create_status(repo, sha; auth = myauth, params = error_params(err))\n        return HTTP.Response(500)\n    end\n\n    GitHub.create_status(repo, sha; auth = myauth, params = success_params)\n\n    return HTTP.Response(200)\nend\n\n# Start the listener on localhost at port 8000\nGitHub.run(listener, IPv4(127,0,0,1), 8000)"
},

{
    "location": "#CommentListener-1",
    "page": "Readme",
    "title": "CommentListener",
    "category": "section",
    "text": "A CommentListener is a special kind of EventListener that allows users to pass data to the listener\'s handler function via commenting. This is useful for triggering events on repositories that require configuration settings.A CommentListener automatically filters out all non-comment events, and then checks the body of each comment event against a trigger Regex supplied by the user. If a match is found in the comment, then the CommentListener calls its handler function, passing it the event and the corresponding RegexMatch.The CommentListener constructor takes the following keyword arguments:auth: same as EventListener\nsecret: same as EventListener\nrepos: same as EventListener\nforwards: same as EventListener\ncheck_collab: If true, only acknowledge comments made by repository collaborators. Note that, if check_collab is true, auth must have the appropriate permissions to query the comment\'s repository for the collaborator status of the commenter. check_collab is true by default.For example, let\'s set up a silly CommentListener that responds to the commenter with a greeting. To give a demonstration of the desired behavior, if a collaborator makes a comment like:Man, I really would like to be greeted today.\n\n`sayhello(\"Bob\", \"outgoing\")`We want the CommentLister to reply:Hello, Bob, you look very outgoing today!Here\'s the code that will make this happen:import GitHub\n\n# CommentListener settings\ntrigger = r\"`sayhello\\(.*?\\)`\"\nmyauth = GitHub.authenticate(ENV[\"GITHUB_AUTH\"])\nmysecret = ENV[\"MY_SECRET\"]\n\n# We can use Julia\'s `do` notation to set up the listener\'s handler function.\n# Note that, in our example case, `phrase` will be \"`sayhello(\\\"Bob\\\", \\\"outgoing\\\")`\"\nlistener = GitHub.CommentListener(trigger; auth = myauth, secret = mysecret) do event, phrase\n    # In our example case, this code sets name to \"Bob\" and adjective to \"outgoing\"\n    name, adjective = matchall(r\"\\\".*?\\\"\", phrase)\n    comment_params = Dict(\"body\" => \"Hello, $name, you look very $adjective today!\")\n\n    # Parse the original comment event for all the necessary reply info\n    comment = GitHub.Comment(event.payload[\"comment\"])\n\n    if event.kind == \"issue_comment\"\n        comment_kind = :issue\n        reply_to = event.payload[\"issue\"][\"number\"]\n    elseif event.kind == \"commit_comment\"\n        comment_kind = :commit\n        reply_to = comment.commit_id\n    elseif event.kind == \"pull_request_review_comment\"\n        comment_kind = :review\n        reply_to = event.payload[\"pull_request\"][\"number\"]\n        # load required query params for review comment creation\n        comment_params[\"commit_id\"] = comment.commit_id\n        comment_params[\"path\"] = comment.path\n        comment_params[\"position\"] = comment.position\n    end\n\n    # send the comment creation request to GitHub\n    GitHub.create_comment(event.repository, reply_to, comment_kind; auth = myauth, params = comment_params)\n\n    return HTTP.Response(200)\nend\n\n# Start the listener on localhost at port 8000\nGitHub.run(listener, IPv4(127,0,0,1), 8000)"
},

{
    "location": "autodocs/#GitHub.GitHubAPI",
    "page": "Docstrings",
    "title": "GitHub.GitHubAPI",
    "category": "type",
    "text": "Represents the API to interact with, either an actual GitHub instance, or a mock API for testing purposes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GitHub]\nOrder = [:type, :function]"
},

]}
