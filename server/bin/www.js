#!/usr/bin/env node

/**
 * Module dependencies.
 */
// Importing the server logic 
// Require is used to import code from an external file
const app = require('../app');
// Importing an external dependency
const debug = require('debug')('projnotes');
// Module that allows to communicate with a client using HTTP protocol
const http = require('http'); // change the word var with const

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
// Store the port info in the app
app.set('port', port); // (req, res) => {actions}

/**
 * Create HTTP server.
 */

const server = http.createServer(app); // req información de la petición, res métodos para responder

/**
 * Listen on provided port, on all network interfaces.
 */
// Specifying the port where the server will be listen 
server.listen(port);
// Attaching Callbacks to events
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10); // Change var with let

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string' // change var with let
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address(); // Change var with let 
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  // debug('Listening on ' + bind);
  debug(`⭐⭐Listening on ${process.env.APP_URL}:${addr.port} ⭐⭐`)
}
