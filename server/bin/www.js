#!/usr/bin/env node

/**
 * Module dependencies.
 */
// Importing the server logic
// require is used to import code from an external file
import http from 'http';
import Debug from 'debug';
import app from '../app';
// Importing an external dependecy

const debug = Debug('projnotes');
// Module that allows to communicate with a client
// usign HTTP protocol

/**
 * Get port from environment and store in Express.
 */

/**
 * Create HTTP server.
 */

const server = http.createServer(app); // (req, res) => { acciones }

/**
 * Listen on provided port, on all network interfaces.
 */
// Specifying the port where the server will be listening

// Attaching Callbacks to events
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || '3000');
// Store the port info in the app
app.set('port', port);
server.listen(port);
/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
server.on('error', onError);

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`⭐⭐ Listening on ${process.env.APP_URL}:${addr.port} ⭐⭐`);
}
server.on('listening', onListening);
