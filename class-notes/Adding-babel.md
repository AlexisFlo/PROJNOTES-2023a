# Adding babel 

## Introduction

In this section, we will discuss the implementation and installation of Babel within the project. Babel allows you to observe modifications made in the JavaScript code without the need to stop the local server and restart it. It also enables transpilation of older versions of JavaScriopt

## Methods

The first step to add Babel to the project is to install the following dependencies:
 - @babel/cli
 - @babel/core
 - @babel/preset-env
 - @babel-watch

Use the following command to install the mentioned dependencies:

 `npm i -D @babel/core@^7.13.15 @babel/cli@^7.13.14 @babel/preset-env@^7.13.15 babel-watch@^7.4.1`

Once the dependencies are installed, you need to configure the Start and Dev scripts in the Package.Json file.

In the root directory, create a file named .babelrc

## Results

By editing the Dev script with Babel, you will be able to observe modifications made in the JavaScript code without the need to stop the local server and restart it.

## Discussions

Babel allows you to observe modifications made in the JavaScript code without the need to stop the local server and restart it. It also enables transpilation of older versions of JavaScript.


[Back to PROJNOTES2023-a](https://github.com/AlexisFlo/PROJNOTES-2023a)