import * as Yup from "yup";

const Schema = Yup.object().shape({
  email: Yup.string()
  .required('Email is required')
  .email('Invalid email address'),
  fullname: Yup.string()
  .required('Full name is required'),
  contact: Yup.string()
    .required("Contact is required")
    .matches(/^\d{11}$/, "Contact must be a 11-digit number"),
  city: Yup.string().required("City is required"),
  specialization: Yup.string().required("Specialization is required"),
});

export default Schema;
