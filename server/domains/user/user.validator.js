import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  firstName: Yup.string().required('El nombre es obligatorio'),
  lastname: Yup.string().required('El apellido es obligatorio'),
  mail: Yup.string()
    .email('El correo no es valido')
    .required('El correo es obligatorio'),
  password: Yup.string()
    .min(6)
    .required('Se requiere una contraseña de al menos 6 caracteres'),
  cpasword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Las contraseñas no coinciden'
  ),
});

const signUpGetter = (req) => {
  const { firstName, lastname, mail, password } = req.body;
  return { firstName, lastname, mail, password, cpassword: password };
};

const signUp = { shape: signUpSchema, getObject: signUpGetter };

export default signUp;
