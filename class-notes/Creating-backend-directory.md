# Creating dedicated Backend directory

## Introduction

For this activity, we must create a directory specifically for our Backend, which was already included in the project´s creation. In this case, we will be using Express (which is the most popular web framework for Node, and is the underlying library for many other popular Node web frameworks)

## Methods

The first thing we will do is create a directory called "server" (it can be created either from the terminal or from Visual). Once created, we will move the following files inside it:
 - bin.
 - routes.
 - views.
 - app.js.

**What are middlewares?**

Middlewares are functions that can be executed before the final request handler function is called. They can modify the request and response objects, execute additional code, or terminate the request-response cycle.
You can also create custom middlewares using app.use() or router.use() methods. These methods take a function as an argument that will be executed for every incoming request.

Then, we use the app.use() method to apply the middleware function to all incoming requests. Finally, we define a route handler for the root path and start the server.

When you run this code and make a request to the server, you should see the request method and URL logged to the console.

## Results

## Discussions
## References

[Express](https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction)

[Back to PROJNOTES2023-a](https://github.com/AlexisFlo/PROJNOTES-2023a)