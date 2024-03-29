// importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import projectController from './project.controller';
// Importando factory de validación
import ValidateFactory from '../../services/validateFactory';
// Importando el validador de proyectos
import projectValidator from './project.validator';

// Creando una instancia del enrutador
const router = new Router();

// Enrutamos
// GET '/user/listp'
router.get('/', projectController.showDashboard);

// GET '/project/add
router.get('/add', projectController.add);

// POST "/project/add"
router.post(
  '/add',
  ValidateFactory({
    schema: projectValidator.projectSchema,
    getObject: projectValidator.getProject,
  }),
  projectController.addPost
);

// GET "project/edit/:id"
router.get('/edit/:id', projectController.edit);

// PUT "/project/edit/:id"
router.put(
  '/edit/:id',
  ValidateFactory({
    schema: projectValidator.projectSchema,
    getObject: projectValidator.getProject,
  }),
  projectController.editPut
);

// DELETE "/project/:id"
router.delete('/:id', projectController.deleteProject);

// Exporto este tramo de ruta
export default router;
