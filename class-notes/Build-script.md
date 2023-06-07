# Build script

## Introduction

In this section, we will cover the creation of the build script. This command instructs Babel to read the entire contents of the Server directory and generate the output in the Dist directory.

## Methods

Inside the Package.json file, under the Scripts section, two scripts will be created. The first one will be named Clean, which delete the Dist folder if it exits. The second will be named Build, and it will execute the Clean script. This command instructs Babel to read the entire contents of the Server directory and generate the output in the Dist directory.

## Results

When you run the command npm run build, a folder named Dist will be created in the root directory.

## Discussions

Babel allows you to transform code written with the latest and innovative features of JavaScript into code that can be understood by older browsers.

[Back to PROJNOTES2023-a](https://github.com/AlexisFlo/PROJNOTES-2023a)