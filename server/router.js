// Importando enrutador home
import homeRouter from './domains/home/home.router';

// Funcion que agrega rutas
const addRoutes = (app) => {
  // Agregando enrutado Home
  app.use('/', homeRouter);
  return app;
};
// Exportando objeto
export default { addRoutes };
