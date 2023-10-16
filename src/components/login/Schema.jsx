import * as Yup from 'yup'

const RegisterSchema = Yup.object({
    email: Yup.string()
    .required('Email is required')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      'Invalid email address'
    ),
    fullname: Yup.string()
    .required('Full name is required')
    .matches(
      /^[a-zA-Z]+\s[a-zA-Z]+$/,
      'Please enter two names separated by a space'
    ),
    password: Yup.string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters')
    .max(10, 'Password must not exceed 10 characters')
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
      'Password must include at least one uppercase letter, one number, and one special character'
    ),
    contact: Yup.string()
    .required('Contact is required')
    .matches(/^\d+$/, 'Contact must contain only numbers'),
    gender: Yup.string()
    .required('Gender is required')
    .oneOf(['male', 'female'], 'Invalid gender. Choose "male" or "female".'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required')
})
export default RegisterSchema;