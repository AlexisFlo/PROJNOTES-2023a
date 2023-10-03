import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../domains/user/user.model';

const localOptions = {
  usernameField: 'email',
};

const localStrategy = new LocalStrategy(
  localOptions,
  async (mail, password, done) => {
    try {
      const user = await User.findOne({ mail });
      if (!user) {
        return done(null, false, {
          message: 'Usuario no encontrado',
        });
      }
      // En caso de que no este confirmado el usuario
      // falla la autenticación
      if (!user.emailConfirmedAt) {
        return done(null, false, {
          message: 'Usuario no ha confirmado su cuenta',
        });
      }
      // En caso de no proveer el password correcto se regresa a falso
      // Para ello se usa un método
      if (!user.authenticateUser(password)) {
        return done(null, false, {
          message: 'Password o usuario incorrecto',
        });
      }
      // En caso de pasar las anteriores prubas se regresa el usuario y un valor verdadero
      // que indica que se ha pasado la autenticación
      return done(user, true);
    } catch (error) {
      return done(error, false);
    }
  }
);

passport.use(localStrategy);

export const authLocal = passport.authenticate('local', {
  successRedirect: '/projects',
  failureRedirect: '/user/login',
  failureFlash: true,
});

export const authJwt = {};
