# Adding a bundler

## Introduction

In the following work the installation of webpack dependencies is observed, at the end of the installation a series of steps will be seen that will allow configuring webpack for the client development serve. The main objective is to write a report that details the configuration of the client development serve.

## Methods

Dependencies we will give to install
```bash

    npm i -D webpack-cli@4.6.0
    npm i -D webpack-dev-server@4.11.0
```

This dependedency generate a bundle
```bash
    npm i webpack-dev-middleware@4.2.0
```
    

The last one is so important when we are development 
```bash
    npm i webpack-hot-middleware@2.25.0
```

A script with the name dev-c is created, this script will have the code shown below:
  
  ```bash
    "scripts": {
    "start": "PORT=3000 APP_URL='http://localhost' DEBUG=projnotes node ./dist/bin/www",
    "dev": "NODE_ENV=development PORT=3000 APP_URL='http://localhost' DEBUG=projnotes babel-watch --watch ./server/views ./server/bin/www",
    "devc" : "NODE_ENV=development webpack serve --config ./webpack.config.js --mode development",
    "build": "npm run clean && babel ./server --out-dir dist --copy-files",
    "clean": "rm -rf dist"
  }
```
  

  To test the webpack configuration, a folder called client is created, inside this a file called index.js is created, this file will contain the code shown below:

  `console.log("🎉 Client Server working powered by Webpack 🎉")`

  Next, inside the public folder, a file called index.html is created, this file will contain the code shown below:

  ```bash
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello Webpack Dev Server</title>
</head>
<body>
  <div class="">
    <h1>🎉 Client Server working powered by Webpack 🎉</h1>
  </div>
  <script src="./bundle.js"></script>
</body>
</html>
```

To run the job, the following code must be executed in the terminal:

`npm run devc`

## Results

When executing the code, the correct installation of webpack is checked, in addition to confirming the functionality of the code entered in the Indexes and the script entered in the package.json

## Discussions

During the development of the report, update the webpack dependencies, since in previous classes different versions were installed than those needed for the webpack configuration, when updating these dependencies, the configuration shown in the development of this report was started.

[Back to PROJNOTES2023-a](https://github.com/AlexisFlo/PROJNOTES-2023a)