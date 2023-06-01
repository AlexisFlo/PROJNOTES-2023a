// Importando enrutador home
import homeRouter from './domains/home/home.router';
// Importando enrutador user
import userRouter from './domains/user/user.router';
// Importando enrutador proyects
import projectRouter from './domains/project/project.router';

// Funcion que agrega rutas
const addRoutes = (app) => {
  // Agregando enrutado Home
  app.use('/', homeRouter);
  // Agregar enrutado de User
  app.use('/user', userRouter);
  // Agregando enrutador Proyects
  app.use('/project', projectRouter);
  return app;
};
// Exportando objeto
export default { addRoutes };
