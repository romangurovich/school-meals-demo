# Contributors Guide

This guide is targeted towards non-technical folks. It is intended as an all-in-one document to indicate how to get started and how to contribute.

## One-time setup

### Dependencies

- Open your terminal
	- shortcut keys from desktop `command+space`
	- type "Terminal"
	- select first result

From here we do everything in our terminal
	
- Install the package manager brew
	- type the following `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

- Install the programming language manager asdf
	- type the following `brew install coreutils curl git`
	- then type `brew install asdf`
	- There may be a difference on what to do next depending on how old your mac is
		- type `cat ~/.bash_profile`
			- if you get "No such file or directory
				- then, type `echo -e "\n. $(brew --prefix asdf)/libexec/asdf.sh" >> ${ZDOTDIR:-~}/.zshrc`
				- then type `source ~/.zshrc`
			- otherwise
				- type `echo -e "\n. \"$(brew --prefix asdf)/libexec/asdf.sh\"" >> ~/.bash_profile`
				- then type `source ~/.bash_profile`

- Install specific version of python 2.7.18
	- `asdf plugin-add python`
	- `asdf install python 2.7.18`
			
- Install specific version of nodejs v14.21.3
	- `brew install gpg gawk`
	- `asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git`
	- `asdf install nodejs v14.21.3`


### Downloading the app from Github

- Create a Github account here: <https://github.com>
- Back in the terminal
	- `git config --global user.name "Firstname Lastname"`
	- `git config --global user.email "youremail@gmail.com"`
	- generate an SSH key (full process [here](https://docs.github.com/en/enterprise-server@3.9/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent), but we'll summarize)
		- `ssh-keygen -t ed25519 -C "youremail@gmail.com"`
			- if that doesn't work try `ssh-keygen -t rsa -b 4096 -C "youremail@gmail.com"`
		- press enter for every prompt
		- `eval "$(ssh-agent -s)"`
		- `cat ~/.ssh/config`
			- if you get any kind of error, then `touch ~/.ssh/config`
		- `echo -e "Host github.com\n\tAddKeysToAgent yes\n\tIdentityFile ~/.ssh/id_ed25519" >> ~/.ssh/config`
		- Connect the key you've created to your Github account as shown [here](https://docs.github.com/en/enterprise-server@3.9/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
			- To copy the key `pbcopy < ~/.ssh/id_ed25519.pub`
			- Refer to the linked instructions on how to add the key on Github's website
	- Now we can download the code for the school meals app
		- `cd ~` to go to our home directory
		- `git clone git@github.com:romangurovich/school-meals-demo.git`

### Building the app

- `cd school-meals-demo`
- `asdf local python 2.7.18`
- `asdf local nodejs v14.21.3`
- `npm install`


## Day-to-day workflow

### Running the app
- `npm run start`
- in your web browser go to <http://localhost:3000> to see the app running on your computer
- as you make code changes, the app will update in the browser with your changes
- to stop the app, go back to terminal and type shortcut keys `ctrl+c`


### Modifying and submitting code

We use a version control software called git, which has lots of features and ways to use it, but we'll learn just enough to be productive on this project.

For editing the code, we recommend [Visual Studio Code](https://code.visualstudio.com/).


Here's a very brief overview, no need to understand every detail-- just here for context-setting
- Github stores the project code in a remote repository.
- When you cloned the repository, you created a local version of the repository on your computer.
- When you change code in your computer's local repository and save or remove a file you're working on, the changes are recorded as unstaged changes on a branch of the local repository.
- Your local repository may have many branches, it starts with one called "main", and in this project we'll have you do all your work in your own custom branch that you create.
- When you are satisfied with your code changes, you'll add them to staging for the branch.
- After all changes are staged, you'll bundle them in a commit.
- When you're ready to share your code with the remote repository in Github, you'll push your commit.
- When you're ready for us to look at a your code on Github, you'll make a pull request.
- When you're ready to work on a new feature, and you'll delete your branch and create a new one.
