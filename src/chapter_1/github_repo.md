# Create GitHub Repo

Login to [GitHub](https://github.com) and [Create a Repository](https://github.com/new).

Give it a name, like `map-api`. 

I'll keep mine public and I **won't** create the README, .gitignore, or License files at this time.

Click `Create Repository`.

It will then display instructions on how to add code... Head back to VSCode. In the terminal, in the project directory, enter:
```bash
git init
# Returns: Initialized empty Git repository ...
```

> At this point, we want to create a `.gitignore` file! 
```bash
touch .gitignore
```
Any files or folders we list in the `.gitignore` will be ignored by Git and won't be pushed to our remote repository.

Edit `.gitignore` and add `node_modules/`, and `mongo-volume/`:
```bash,ignore
node_modules/
mongo-volume/
```

Then enter;
```bash
git add --all
git commit -m "First commit - basic express app"
# Returns: create mode...
git branch -M main
```

The instructions on GitHub will tell you to add the remote origin, something like this (replace `<your-username>` below):
```bash
git remote add origin git@github.com:<your-username>/map-api.git
```

We can now push our code to GitHub! Enter;
```bash
git push -u origin main
```

Now if we refresh the GitHub page with the instructions on it, it will have all of our code!