const Validator =
  ({ shape, getObject }) =>
  async (req, res, next) => {
    const dataObject = getObject(req);
    try {
      const validData = await shape.validate(dataObject, { abortEarly: false });
      req.validData = validData;
    } catch (error) {
      req.errorData = error;
    }

    return next();
  };

export default Validator;
