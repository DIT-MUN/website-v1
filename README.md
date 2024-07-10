# dit-mun-web
This webapp is for Dit MUN Society!  
# Git Workflow Tutorial

This guide will walk you through the basic Git workflow of cloning a repository, creating a personal branch, committing changes, and submitting a pull request.

## Step 1: Cloning the Repository

First, you need to clone the repository to your local machine.

```bash
git clone https://github.com/26-divik/dit-mun-web.git
cd dit-mun-web
```

## Step 2: Creating a Branch

Once you have the repository on your local machine, create a branch with your name or a specific feature name.

```bash
git checkout -b your-name-branch
```

Replace `your-name-branch` with a name that makes sense for the changes you plan to make, like `divik-Navbar`.

## Step 3: Making Changes and Committing

After creating your branch, you can start making changes to the project. Once you are done:

1. Add the files to the staging area:

```bash
git add .
```

2. Commit the changes:

```bash
git commit -m "Your commit message"
```

Ensure your commit message is descriptive of the changes you made.

## Step 4: Pushing Changes

After committing your changes, push them to the remote repository.

```bash
git push origin your-name-branch
```

## Step 5: Creating a Pull Request

Finally, go to the GitHub page of the repository. You should see a button to create a pull request for the branch you just pushed. Click it, follow the instructions to create a pull request, and then submit it for review.

Congratulations! You've now successfully cloned a repository, created a branch, committed changes, and opened a pull request.
