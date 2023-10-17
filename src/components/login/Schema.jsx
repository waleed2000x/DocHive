import * as Yup from 'yup';

const RegisterSchema = Yup.object({
  email: Yup.string()
  .required('Email is required')
  .email('Invalid email address'),
  fullname: Yup.string()
  .required('Full name is required'),
  password: Yup.string()
  .required('Password is required')
  .min(7, 'Password must be > 7 characters')
  .max(10, 'Password must <= 10 characters')
  .matches(
    /^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
    'Uppercase, Number, Special Char'
  ),
  contact: Yup.string()
  .required('Contact is required')
  .matches(/^\d+$/, 'Contact must contain only numbers'),
  gender: Yup.string()
  .required('Gender is required')
  .oneOf(['Male', 'Female'], 'Type "Male" or "Female".'),
  city: Yup.string().required('City is required'),
  country : Yup.string().required("Country is required")
})

export default RegisterSchema;
