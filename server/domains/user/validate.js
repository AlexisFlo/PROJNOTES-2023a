// Using the Factory pattern to create a validation middleware
const Validator =
  ({ shape, getObject }) =>
  async (req, res, next) => {
    // Building the validation object
    const dataObject = getObject(req);
    // The validation process is wrapped in a try-catch block
    try {
      // Validating the object
      const validData = await shape.validate(dataObject, { abortEarly: false });
      // Injecting the validated object into the request
      req.validData = validData;
    } catch (error) {
      // Creating validation object
      req.errorData = error;
    }
    // Invoking the next middleware in the chain
    return next();
  };
// Exporting validator
export default Validator;
