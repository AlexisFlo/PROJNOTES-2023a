// importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import projectsController from './projects.controller';

// Creando una instancia del enrutador
const router = new Router();

// Enrutamos
// GET '/user/listp'
router.get('/', projectsController.projects);

// GET '/projects/add
router.get('/add', projectsController.add);

// Exporto este tramo de ruta
export default router;
