# Updating to ES6

## Introduction
For this activity we will have to update our code to ES6 (ECMASCRIPT 2015), based on the teacher's repository

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