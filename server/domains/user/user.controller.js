// Action methods

import winston from 'winston/lib/winston/config';
import User from './user.model';

// GET "/user/login"
const login = (req, res) => {
  res.render('user/loginView');
};

// GET "/user/logout"
const logout = (req, res) => {
  res.send(' ⚠️ UNDER CONSTRUCTION: GET /user/logout ⚠️ ');
};

// GET "/user/register"
const register = (req, res) => {
  res.render('user/registerView');
};

const confirm = async (req, res) => {
  const { validData, errorData } = req;
  if (errorData) return res.json(errorData);
  const { token } = validData;
  const user = await User.findByToken(token);
  if (!user) {
    return res.send('USER WITH TOKEN NOT FOUND');
  }

  await user.activate();
  return res.send(`Usuario: ${user.firstName} Validado}`);
};

// POST "/user/register"
const registerUser = async (req, res) => {
  const { validData, errorData } = req;
  if (errorData) {
    return res.json(errorData);
  }
  try {
    const { firstName, lastName, email, password } = validData;

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    const viewModel = user.toJSON();
    winston.info('Se manda a generar la vista "user/registrationSuccessful"');
    return res.render('user/registrationSuccessful', {
      ...viewModel,
      backgroundColor: 'cyan darken-2',
    });
  } catch (error) {
    return res.json(error);
  }
};

// Controlador user
export default {
  // Action methods
  login,
  logout,
  register,
  registerUser,
  confirm,
};
