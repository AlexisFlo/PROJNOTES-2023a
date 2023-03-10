// Helps to handle http errors
import createError from 'http-errors'; // const createError = require('http-errors');
// Import the express library
import express from 'express';// const express = require('express');
// Is a Core-Node library to manage system paths
import path from 'path';// const path = require('path');
// Helps to parse client cookies
import cookieParser from 'cookie-parser'; // const cookieParser = require('cookie-parser');
// Library to log http communication
import logger from 'morgan'; // const logger = require('morgan'); // Change var with const

// Importing subroutes
import indexRouter from '@server/routes/index';// const indexRouter = require('./routes/index'); // Change var with const
import usersRouter from '@server/routes/users';// const usersRouter = require('./routes/users');
import apiRouter from '@server/routes/api';// const apiRouter = require('./routes/api');

// We are creating the express instance
const app = express(); // Change var with let

// view engine setup
// We are declaring the localization of the views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Log all received requests
app.use(logger('dev'));
// Parse request data into json
app.use(express.json());
// Decode url info
app.use(express.urlencoded({ extended: false }));
// Parse client cookies into json
app.use(cookieParser());
// Set up the static file server
app.use(express.static(path.join(__dirname, 'public'))); // app.use(express.static(ruta))

// Registering routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => { // Change the function with arrow function
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => { // Change the function with arrow function
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app; // change export
