import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import rndString from 'randomstring';
import winston from 'winston/lib/winston/config';
import MailSender from '@server/services/mial';
import configKeys from '@server/config/configKeys';

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  mail: {
    type: String,
    unique: true,
    required: [true, 'El correo es obligatorio'],
    trim: true,
    validade: {
      validator(mail) {
        return validator.isEmail(mail);
      },
      message: '{VALUE} no es un correo valido',
    },
  },
  password: {
    type: String,
    required: [true, 'Es necesario ingresar una contraseña'],
    trim: true,
    minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
  },
  image: {
    type: String,
    default: 'https://img.icons8.com/fluent/48/000000/user-male-circle.png',
  },
  emailConfirmationToken: String,
  createdAt: Date,
  updatedAt: Date,
  emailConfirmedAt: Date,
});

// HOOKS
// Se ejecuta antes de guardar en la base de datos

UserSchema.pre('save', function presave(next) {
  // Si el usuario no esta modificado
  if (this.isModified('password')) {
    this.password = this.hashPassword(this.password);
  }
  this.createdAt = new Date();
  this.updatedAt = new Date();
  return next();
});
UserSchema.post('save', async function sendConfirmationMail() {
  const options = {
    host: configKeys.smtpHost,
    port: configKeys.smptPort,
    secure: false,
    auth: {
      user: configKeys.mailUsername, // generated ethereal user
      pass: configKeys.mailPassword, // generated ethereal password
    },
  };
  const mailSender = new MailSender(options);
  mailSender.mail = {
    from: 'L191130053@gamadero.tecnm.mx',
    to: this.mail,
    subject: 'Account confirmation',
  };
  try {
    const info = await mailSender.sendMail(
      'confirmation',
      { user: this.firstName, lastname: this.lastname, mail: this.mail },
      `Estimado ${this.firstName} ${this.lastname} para confirmar su cuenta haga click en el enlace de dicho correo}`
    );
    if (!info) return winston.info('No se pudo enviar el correo');
    winston.info('🎉 Correo enviado con exito');
    return info;
  } catch (error) {
    winston.error(`🚨ERROR al enviar correo: ${error.message}`);
    return null;
  }
});
// METODOS
UserSchema.methods = {
  hashPassword(password) {
    return bcrypt.hashSync(password, 10);
  },
  generateComfirmationToken() {
    return rndString.generate(64);
  },
};

export default mongoose.model('user', UserSchema);
