import { Router } from 'express';
// Imporntando controlador user
import userController from './user.controller';
// Importando el validador
import Validate from './validate';
// Importamos el esquema de validacion
import userValidator from './user.validator';
import userTokenValidator from './user.token.validator';
// Importando middleware de autenticación passport
// de estrategia loca
import { authLocal } from '../../services/auth.services';

// Creating an instance from the express router
const router = new Router();

// GET user/login
router.get('/login', userController.login);

// POST user/login
router.post('/login', authLocal);

// GET user/logout
router.get('/logout', userController.logout);

// GET user/register
router.get('/register', userController.register);

// GET user/confirm/<token>
router.get(
  '/confirm/:token',
  Validate(userTokenValidator.token), // Use the user token validator
  userController.confirm
);

// POST user/register
router.post(
  '/register',
  Validate(userValidator.signUp), // Use the user validator
  userController.registerUser
);

export default router;
