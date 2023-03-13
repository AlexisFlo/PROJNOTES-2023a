# Updating to ES6

## Introduction
ES6, also referred to as ECMAScript 2015, represents a significant upgrade to the JavaScript programming language. Launched in 2015, this version introduced an extensive array of new functions and improvements to the language, such as new syntax, data types, methods, and modules. Among the notable features of ES6 are arrow functions, template literals, destructuring, let and const keywords for variable declarations, classes, and modules. These functionalities have made JavaScript more dynamic and adaptable, empowering developers to produce more efficient, sustainable, and expandable code.

For this activity we will have to update our code to ES6 (ECMASCRIPT 2015), based on the teacher's repository

## ES6 functions

Arrow functions have a simplified syntax where the "fuction" ckeyword is replaced by an arrow (=>) after the function parameters. Also have some additional features, such as the ability to automatically bind the "this" keyword to the parent scope, which can help simplify code in certain situations.

 `import` and `export` are keywords used for importing and exporting modules, respectively. Modules are essentially separate pieces of code that can be imported into other files to provide additional functionality.
 
 Template literals are a new feature that allows for more flexible and dynamic string interpolation in JavaScript. They use backticks (`) instead of single or double quotes to enclose the string, and allow for the inclusion of  placeholders that are evaluated and interpolated at runtime. Can contain expressions, variables, and even functions, making it easier to create complex strings.

## Steps

The first step is search the professor's repository and find the updates of the code.
After that we can update the functions and interpolation of our code. 
Only 4 files have been to update.


## Results

The result for this activity you can see below

Before updating the code to match the professor's, I had already modified some imports. However, the only import I did not alter is located in the "www.js" file and this is the following one:

    import Debug from 'debug';// const debug = require('debug')('projnotes');
    const debug = Debug('projnotes');
    

In the api.js file, the three lines of code that have been updated are as follows

    const { Router } = express; 
    const router = Router()
    export default router; 

The lines of code updated in api.js hace also been updated in both the user and index files


[Back to PROJNOTES2023-a](https://github.com/AlexisFlo/PROJNOTES-2023a)