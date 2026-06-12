For each of your answers you need screenshots showing that you solved the questions. If you are unsure about you answer, ask the facilitar.
A. The Action:

1. Create a folder on your local machine named recipe-finder.
2. Create a file inside it called index.html and write <h1>Recipe Finder</h1> inside it.
3. Initialize Git, stage the file, and commit it with the message "Initial commit".
4. Link your local repository to the instructor's template GitHub link using remote add origin.
5. Try to push your master/main branch to GitHub using git push origin main.
6. The Roadblock (The Error): The push will fail! Because the GitHub repository has a README.md that the student doesn't have locally, Git will reject the push with this terrifying error:
   "
   error: failed to push some refs to 'github.com/matthew-dean-brown/recipe-finder-template.git'
   hint: Updates were rejected because the remote contains work that you do
   hint: not have locally. This is usually caused by another repository pushing
   hint: to the same ref. You may want to first integrate the remote changes
   hint: (e.g., 'git pull ...') before pushing again.
   "
   Solve the roadblock: Why is this error here and explain why it's happening.

B. The Action:

1. Create a new branch to work on a login feature, but make a typo: name it login-featur.(Create it using git checkout -b login-featur).

2. Create two new files: login.js (working code) and broken-experiment.tmp (scratchpad notes).

3. Run git status to see both files.

The Roadblock: Your team lead sees your screen and says: "Fix that branch name typo immediately, and do NOT commit that .tmp file to GitHub!"
Solve the roadblock: What must you do?(commands only)

C. The Action:

1. Simulate a teammate's action: Go directly to the GitHub website UI and create a repo called 'Sarahs-code' with a readme file, open README.md, edit it by adding the text "Alternative text added by Sarah", and commit it directly on GitHub.
2. Go back to your local terminal. Do not use git pull.
3. Run git status. Notice that Git locally thinks everything is perfectly up-to-date.

The Roadblock: Your teammate Sarah texts you: "I just updated the main branch documentation on GitHub, check if it looks right!" But when you type git log or look at your local files, Sarah’s changes aren't there.
Solve the road block: Why are you not seeing her changes and what must you do to fix it.(commands only).

D. The Action:

1. Switch back to your login-feature branch (git switch login-feature).

2. Try to run just git push.

The Roadblock (The Error): Because this branch only exists on their computer and not on GitHub yet, Git will throw this error:
""
fatal: The current branch login-feature has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin login-feature

""
Solve the roadblock: What5 is wrong and how do we fix this error?

E. The action

1. Now, create and switch to a new branch, called design update: git checkout -b design-update.
2. Open index.html. On that exact same line, change the headline to <h1>Recipe Finder App</h1>.
3. Commit this change locally on the design-update branch.
4. Switch back to the main branch (git switch main) and run git pull to ensure they have the latest code.
5. Try to merge their design branch into main: git merge design-update.

The Roadblock (The Error): Because the same line was changed in two different ways on two different branches, Git will halt the merge and throw this famous error:

''
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
''

F. The Action:

1. You need to start working on a new feature called "User Profiles".

2. Open your text editor immediately and create a new file called profile.js and type console.log("User Profile Loaded"); inside it.

3. Run git status.

The Roadblock: Look closely at the git status output.
Solve the road block: Is there anything that is off? Explain.
