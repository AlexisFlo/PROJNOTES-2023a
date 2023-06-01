// Importando Mongoose
import mongoose from 'mongoose';
// Destructurando un generador de Schemas de moongose
const { Schema } = mongoose;

// Creando el esquema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Exportando la compilacion de ProjectSchema
// en un modelo mongoose
export default mongoose.model('project', ProjectSchema);
