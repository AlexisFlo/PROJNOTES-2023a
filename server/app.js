import createError from 'http-errors';
import express from 'express';
import methodOverride from 'method-override';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import configTemplateEngine from './config/templateEngine';
import webpackConfig from '../webpack.dev.config';
import configSession from './config/configSessions';
import log from './config/winston';
import router from './router';

// Creando varible del directorio raiz
// eslint-disable-next-line
global['__rootdir'] = path.resolve(process.cwd());

// We are creating the express instance
const app = express(); // Change var with let

const nodeEnviroment = process.env.NODE_ENV || 'production';

// Deciding if we add webpack middleware or not
if (nodeEnviroment === 'development') {
  // Start Webpack dev server
  console.log('🏗 Ejecutando el modo desarrollo');
  // Adding the key mode with its value "development"
  webpackConfig.mode = nodeEnviroment;
  webpackConfig.devServer.port = process.env.PORT;
  // Setting up the HMR (Hot Module Replacement)
  webpackConfig.entry = [
    'webpack-hot-middleware/client?reload=true&timeout=1000',
    webpackConfig.entry,
  ];
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  const bundle = webpack(webpackConfig);
  // Enabling the webpack middleware
  app.use(
    WebpackDevMiddleware(bundle, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  // Enabling webpack HMR
  app.use(WebpackHotMiddleware(bundle));
} else {
  console.log('🏬 Ejecutando el modo producción');
}

configTemplateEngine(app);

app.use(morgan('dev', { stream: log.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));
configSession(app);
app.use(express.static(path.join(__dirname, '../public')));

// Registering routes
router.addRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  log.info(`404 Pagina no encontrada ${req.method} ${req.originalUrl}`);
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  log.error(`${err.status || 500} - ${err.message}`);
  res.render('error');
});

export default app;
