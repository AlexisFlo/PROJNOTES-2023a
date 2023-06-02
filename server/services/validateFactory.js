// Usando el patrón Factory para la creación de un middelware de validación
// lo que sigue es una función que se regresa una función
const Validator =
  ({ schema, getObject }) =>
  async (req, _, next) => {
    // Construyendo el objeto de la validación
    const dataObject = getObject(req);
    // El proceso de validación se encierra en un bloque try
    try {
      // Se valida el objeto
      const validData = await schema.validate(dataObject, {
        abortEarly: false,
      });
      // Se inyecta el objeto valido en la petición
      req.validData = validData;
    } catch (error) {
      // Creando el objeto de validación
      req.errorData = error;
    }
    // Se invoca al siguiente middleware de la cadena
    return next();
  };
// Exportando validador
export default Validator;
