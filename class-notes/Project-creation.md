# Project Creation

## Introduction
In this part of the project we created the repository on GitHub and then we opened a GitHub Codespaces to modify and add new files to the project, the steps of the afore mentioned are described below

## Methods
### Project Requirements
To start this project we need to fulfill the following requirements: 

- Install Windows Terminal
- Install WSL on our computer (only if we have Windows 10 or Windows 11).
- Install Git.
- Install Node.js
- Have a GitHub account.

**What is WSL?**
WSL stands for "Windows Subsystem for Linux" (*Subsistema de Windows para Linux*) and is a feature of Windows 10 and 11 that allows running Linux applications directly on Windows without the need for a virtual machine or booting the Linux operating system.

**WSL installation guide**
1. Search for "Turn Windows features on or off" in the Start menu.
2. Click and wait for it load.
3. Verify that the following features are enabled: *Virtual Machine Platform* and *Windows Subsystem for Linux*.
4. If any of these features are not enabled, select them and click on "OK".
5. Wait for the process to finish, restart your computer, and verify that these two features are enabled.
6. Once these features are enabled, search for *PowerShell* in the Start menu.
7. Run *PowerShell* as an administrator.
8. Type the command `wsl --list` (it will show the distributions that we can download).
9. Choose Ubuntu using the command ```wsl --install -d Ubuntu```
10. Run the command ```wsl -l -v``` to list the distributions that we have installed.
11. To update to version 2, use the command `wsl --update`.
12. The command ```wsl --set-default-version2``` allows us to set version 2 as default.
13. To update the distribution, use the command `wsl --set-version Ubuntu 2`.
14. With this done, we proceed to open Ubuntu.
15. It will ask us for a username and password
16. Then we type the command `uname`, and if everything went well, we should see the word *Linux*

**Git Installation Guide**

1. Open the Ubuntu terminal.
2. Run ```sudo apt update``` to update the dependency repository info.
3. Run ```sudo apt install git-all```.
4. Make sure it is installed by running `git --version`.
5. Update your name and email by running the following commands:
 - ```git config --global user.name "Your Name"```
 - ```git config --global user.email "your_email@example.com"```

 **Node.js Installation Guide**

1. Open the Ubuntu terminal.
2. Run ```sudo apt-get install curl``` to install curl.
3. Run the following command to install NVM: "curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh) | bash"
4. Open a new tab in the terminal with "Ctrl + T" or close and reopen the Ubuntu terminal to load the new configuration.
5. Run ```nvm install --lts``` to install Node.js LTS.
6. Run `node --version` to verify that it installed correctly.

To start working on a project locally in Ubuntu, we must follow these steps in the terminal:
 1. Create a folder named *PROJNOTES-2023a* using the command `mkdir <folder name>`.
 2. Verify that the folder was created successfully using the comand `ls`
 3. Enter the newly created folder using the command `cd <folder name>`.
 4. Open Visual Studio Code using the command `code .`

 This way, we can work on our project locally.

 If we want to work remotely using GitHub Codespaces, we first need to [create a repository](https://github.com/AlexisFlo/PROJNOTES-2023a/blob/main/class-notes/Repository-creation.md) in our GitHub account. Inside Codespaces, we can view our first files, such as **README.md**, where we can add the project description, information about ourselves, and links to our project notes, where we will describe the project's progress. To have these changes locally, we need to clone our repository using the following command in our Ubuntu terminal ```git clone <repository url>```.

 ### Base Project
 
 **Node.js**
 As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

 **Web Frameworks**
 Web frameworks provide tools and libraries to simplify common web development operations. You don't have to use a server-side web framework, but it is strongly advised — it will make your life a lot easier.

**Express**
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

After opening our project, the first thing we will do is run the Express Application Generator.
We open our terminal, whether in *Visual Studio Code* or *Ubuntu*, verify that we are in the correct directory, and execute the command to start the generation application `npx express-generator <project name> -v hbs`

Once executed, we will have basic Express project with the Handlebars engine. This allows us to have a development starting point for our application. The project will have the following directories:
- **bin**
- **public**
- **routes**
- **views**
- **app.js**
- *package.json*

#### Dependency Installation

We need to install some dependencies, which will be listed in the *package.json* file. The dependencies are: 

- *cookie-parser*
- *debug*
- *express*
- *hbs* 
- *http-errors*
- *morgan*

To start the installation, we run the command `npm i`

## Results
The given text outlines the requirements and installation guides for starting a project using Node.js and Express web framework. The requirements include installing Windows Terminal, WSL, Git, Node.js, and having a GitHub account. The guide also provides instructions for installing and configuring each of these components, including enabling WSL, installing Git, and Node.js using NVM. Once these components are installed, the guide outlines the steps to create a local project directory and generate a basic Express project using the Handlebars engine using the Express Application Generator. Finally, the guide lists the required dependencies for the project and provides the command to install them using npm.

## Discussions

- Importance of having the necessary tools installed: The project requirements include installing various tools such as Windows Terminal, WSL, Git, Node.js, and having a GitHub account. One could discuss the importance of having the necessary tools installed and how it could help in the smooth functioning of the project.

- WSL and its usage: WSL stands for "Windows Subsystem for Linux" and allows running Linux applications directly on Windows without the need for a virtual machine or booting the Linux operating system. One could discuss the benefits of using WSL and its usage in the project.

- Git and its importance: Git is a version control system that helps in tracking changes made to the codebase. One could discuss the importance of using Git in the project and how it could help in maintaining the codebase.

- Node.js and its usage: Node.js is an asynchronous event-driven JavaScript runtime, designed to build scalable network applications. One could discuss the benefits of using Node.js and its usage in the project.

- Express framework: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. One could discuss the benefits of using the Express framework and how it could help in building web applications.

- Dependency Installation: The project requires the installation of various dependencies such as cookie-parser, debug, express, hbs, http-errors, morgan. One could discuss the importance of installing the required dependencies and how it could help in building the project.

- Using GitHub Codespaces: The project allows working remotely using GitHub Codespaces. One could discuss the benefits of using GitHub Codespaces and how it could help in collaborating and working remotely on the project.

- Project setup: The project setup includes creating a folder, installing the necessary dependencies, and generating an Express application using the Handlebars engine. One could discuss the importance of following the project setup and how it could help in starting the development process.

## References 
- [Official WSL Guide in Spanish](https://learn.microsoft.com/es-es/windows/wsl/install)
- [Official Git Guide in English]( https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Official Nodejs Guide in English](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)
- [Node.js](https://nodejs.org/en/about)
- [Web Frameworks](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Web_frameworks)
- [Express.js](https://expressjs.com/)


[Back to PROJNOTES2023-a](https://github.com/AlexisFlo/PROJNOTES-2023a)