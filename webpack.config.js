//
//

// Importing an file routing manager
const path = require('path');

// We export a configuration object that will be used by webpack
module.exports ={
    // 1. the entry file from which 
    // it will contain all the definitions to package
    entry: "./client/index.js",
    // 2. Specify the output file
    // Here it is detailed where the file will be final packaged
    output: {
        // 2.1 Absolute output path
        // Note that it is being placed in the directory
        // of the project's static files
        path: path.resolve(__dirname, "public"),
        // 2.2 Output file name
        filename: "bundle.js"
    },
    // 3. Configuring the development server
    // Thhe development server serves the packaged files
    // to avoid having to repack on each code change
    devServer: {
        // 3.1 Static files folder
        static: path.join(__dirname, "public"),
        // 3.2 Dvelopment server port
        port: 8080,
        // 3.3 Defining the host
        host: "localhost"
    }
}