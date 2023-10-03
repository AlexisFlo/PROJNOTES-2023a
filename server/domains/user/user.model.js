import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import rndString from 'randomstring';

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
