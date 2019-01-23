var documenterSearchIndex = {"docs": [

{
    "location": "#Git.attached-Tuple{}",
    "page": "Home",
    "title": "Git.attached",
    "category": "method",
    "text": "Git.attached(; dir=\"\")\n\nDetermine whether HEAD is attached to a commit in the given respository.\n\n\n\n\n\n"
},

{
    "location": "#Git.branch-Tuple{}",
    "page": "Home",
    "title": "Git.branch",
    "category": "method",
    "text": "Git.branch(; dir=\"\")\n\nReturn the name of the current active branch in the given repository.\n\n\n\n\n\n"
},

{
    "location": "#Git.cmd-Tuple{Cmd}",
    "page": "Home",
    "title": "Git.cmd",
    "category": "method",
    "text": "Git.cmd(args; dir=\"\")\n\nReturn a Git command from the given arguments, acting on the repository given in dir.\n\n\n\n\n\n"
},

{
    "location": "#Git.different-Tuple{AbstractString,AbstractString,AbstractString}",
    "page": "Home",
    "title": "Git.different",
    "category": "method",
    "text": "Git.different(verA, verB, path; dir=\"\")\n\nDetermine whether two trees are different with respect to the given path.\n\n\n\n\n\n"
},

{
    "location": "#Git.dir-Tuple{Any}",
    "page": "Home",
    "title": "Git.dir",
    "category": "method",
    "text": "Git.dir(d)\n\nReturn the path to the default .git for the given repository directory, or the path to use in place of the default .git.\n\n\n\n\n\n"
},

{
    "location": "#Git.dirty-Tuple{}",
    "page": "Home",
    "title": "Git.dirty",
    "category": "method",
    "text": "Git.dirty([paths]; dir=\"\")\n\nDetermine whether the paths in the given repository are dirty, i.e. contain modified but uncommitted tracked files.\n\n\n\n\n\n"
},

{
    "location": "#Git.git-Tuple{}",
    "page": "Home",
    "title": "Git.git",
    "category": "method",
    "text": "Git.git([d])\n\nReturn a Git command that refers to the work tree and directory given by d, or the current work tree and directory if d is not specified.\n\n\n\n\n\n"
},

{
    "location": "#Git.head-Tuple{}",
    "page": "Home",
    "title": "Git.head",
    "category": "method",
    "text": "Git.head(; dir=\"\")\n\nReturn the commit to which HEAD currently refers.\n\n\n\n\n\n"
},

{
    "location": "#Git.is_ancestor_of-Tuple{AbstractString,AbstractString}",
    "page": "Home",
    "title": "Git.is_ancestor_of",
    "category": "method",
    "text": "Git.is_ancestor_of(a, b; dir=\"\")\n\nDetermine whether the commit a is an ancestor of the commit b in the given repository.\n\n\n\n\n\n"
},

{
    "location": "#Git.iscommit-Tuple{Any}",
    "page": "Home",
    "title": "Git.iscommit",
    "category": "method",
    "text": "Git.iscommit(name; dir=\"\")\n\nDetermine whether name refers to a commit in the repository dir. name can be a single SHA1 or a vector of SHA1s.\n\n\n\n\n\n"
},

{
    "location": "#Git.modules-Tuple{Cmd}",
    "page": "Home",
    "title": "Git.modules",
    "category": "method",
    "text": "Git.modules(args; dir=\"\")\n\nApply the Git command with the given arguments on the given repository to the configuration file .gitmodules and read the result as a string.\n\n\n\n\n\n"
},

{
    "location": "#Git.normalize_url-Tuple{AbstractString}",
    "page": "Home",
    "title": "Git.normalize_url",
    "category": "method",
    "text": "Git.normalize_url(url)\n\nNormalize the given URL to a valid GitHub repository URL.\n\n\n\n\n\n"
},

{
    "location": "#Git.readchomp-Tuple{Cmd}",
    "page": "Home",
    "title": "Git.readchomp",
    "category": "method",
    "text": "Git.readchomp(args; dir=\"\")\n\nRead the result of the Git command using the given arguments on the given repository as a string, removing a single trailing newline if present.\n\n\n\n\n\n"
},

{
    "location": "#Git.readstring-Tuple{Cmd}",
    "page": "Home",
    "title": "Git.readstring",
    "category": "method",
    "text": "Git.readstring(args; dir=\"\")\n\nRead the result of the Git command using the given arguments on the given repository as a string.\n\n\n\n\n\n"
},

{
    "location": "#Git.restore-Tuple{Git.State}",
    "page": "Home",
    "title": "Git.restore",
    "category": "method",
    "text": "Git.restore(s::State; dir=\"\")\n\nRestore the given repository to the state s.\n\n\n\n\n\n"
},

{
    "location": "#Git.run-Tuple{Cmd}",
    "page": "Home",
    "title": "Git.run",
    "category": "method",
    "text": "Git.run(args; dir=\"\", out=stdout)\n\nExecute the Git command from the given arguments args on the repository dir, writing the results to the output stream out.\n\n\n\n\n\n"
},

{
    "location": "#Git.set_remote_url-Tuple{AbstractString}",
    "page": "Home",
    "title": "Git.set_remote_url",
    "category": "method",
    "text": "Git.set_remote_url(url; remote=\"origin\", dir=\"\")\n\nAdd a remote remote to the given repository from the URL url.\n\n\n\n\n\n"
},

{
    "location": "#Git.snapshot-Tuple{}",
    "page": "Home",
    "title": "Git.snapshot",
    "category": "method",
    "text": "Git.snapshot(; dir=\"\")\n\nReturn a State object that captures a snapshot of the given repository.\n\n\n\n\n\n"
},

{
    "location": "#Git.staged-Tuple{}",
    "page": "Home",
    "title": "Git.staged",
    "category": "method",
    "text": "Git.staged([paths]; dir=\"\")\n\nDetermine whether the paths in the given repository contain staged files.\n\n\n\n\n\n"
},

{
    "location": "#Git.success-Tuple{Cmd}",
    "page": "Home",
    "title": "Git.success",
    "category": "method",
    "text": "Git.success(args; dir=\"\")\n\nDetermine whether the Git command using the given arguments on the given repository executed successfully.\n\n\n\n\n\n"
},

{
    "location": "#Git.transact-Tuple{Function}",
    "page": "Home",
    "title": "Git.transact",
    "category": "method",
    "text": "Git.transact(f; dir=\"\")\n\nAttempt to execute the function f. If this fails, the repository is restored to its state prior to execution.\n\n\n\n\n\n"
},

{
    "location": "#Git.unstaged-Tuple{}",
    "page": "Home",
    "title": "Git.unstaged",
    "category": "method",
    "text": "Git.unstaged([paths]; dir=\"\")\n\nDetermine whether the paths in the given repository contain unstaged files.\n\n\n\n\n\n"
},

{
    "location": "#Git.version-Tuple{}",
    "page": "Home",
    "title": "Git.version",
    "category": "method",
    "text": "Git.version()\n\nReturn the version of Git being used by the package.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Git]\nOrder = [:type, :function]"
},

]}
