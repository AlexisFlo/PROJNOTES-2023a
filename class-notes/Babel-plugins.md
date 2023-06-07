# Babel plugins

## Introduction

In this section, we will implement the Babel plugin module resolver. This plugin allows you to add new "root" directories and configure custom aliases for directories.

## Methods

To install the Babel plugin module resolver, run the following command in the terminal:
 
 `npm i -D babel-plugin-module-resolver`

This command installs the Babel plugin module resolver as a dependency. After the installation is complete, you need to configure the paths with their respective aliases in the Babelrc file.

## Results

Configuring aliases for paths helps avoid lengthy paths like ../../../server/app.js

## Discussions

Using aliases prevents the need for creating paths like ../../../server/app.js. As the project grows, this becomes unavoidable. To overcome this, we utilize the Babel plugin module resolver, allowing aliases to be written as @server/app.js.

[Back to PROJNOTES2023-a](https://github.com/AlexisFlo/PROJNOTES-2023a)