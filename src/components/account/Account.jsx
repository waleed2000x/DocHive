import { Alert, AlertTitle, Avatar, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import Schema from "./schema";
import Chart from "./Chart";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
export default function Account() {
  const { userLoggedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate('/');
    }
  }, [userLoggedIn, navigate]);

  if (!userLoggedIn) {
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [alert, setAlert] = useState(false);
  let iValues = {
    fullname:'',
    email : '',
    contact: "",
    city: "",
    specialization: "",
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { errors, values, handleChange, handleSubmit } = useFormik({
    initialValues: iValues,
    validationSchema: Schema,
    onSubmit: () => {
      iValues = {
        contact: values.contact,
        city: values.city,
        specialization: values.specialization,
      };
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 5000);
    },
  });
  return (
    <div className="profile">
      <div className="profile-center">
        <Chart values={values} />
        {alert ? (
          <div
            style={{
              position: "fixed",
              top: "-100px",
              color: "black",
              zIndex: "2",
            }}
          >
            <Alert>
              <AlertTitle>Form Submitted Successfully</AlertTitle>
              Your information has been stored <b>successfully</b>
            </Alert>
          </div>
        ) : null}
        <Avatar
          sx={{ width: 120, height: 120 }}
          style={{
            margin: "10px 0px",
            border: "5px solid rgba(255, 255, 255, 0.06)",
          }}
        />
        <StyledTextField
          color="success"
          label="Full Name"
          name="fullname"
          value={values.fullname}
          onChange={handleChange}
          placeholder="fullname"
          error={errors?.fullname}
          helperText={errors?.fullname || ' '}
        />
        <StyledTextField
          label="Email"
          color="success"
          name="email"
          value={values.email}
          error={errors?.email}
          onChange={handleChange}
          placeholder="email"
          helperText={errors?.email || ' '}
        />
        <StyledTextField
          color="success"
          name="specialization"
          label="Specialization"
          value={values.specialization}
          onChange={handleChange}
          placeholder="Specialization"
          error={errors.specialization}
          helperText={errors?.specialization || " "}
        />
        <StyledTextField
          color="success"
          label="Contact"
          name="contact"
          value={values.contact}
          onChange={handleChange}
          placeholder="Contact"
          error={errors.contact}
          helperText={errors?.contact || " "}
        />
        <StyledTextField
          color="success"
          label="City"
          name="city"
          value={values.city}
          onChange={handleChange}
          placeholder="City"
          error={errors.city}
          helperText={errors?.city || " "}
        />
        {errors.city || errors.contact || errors.email || errors.fullname ||errors.specialization ?
         <StyledButtonError disabled>Save</StyledButtonError>
         : 
        <StyledButton  onClick={handleSubmit} variant="filled">
          Save
        </StyledButton>
        }
      </div>
    </div>
  );
}

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    text-align: center;
    color: white;
    width: 350px;
  }

  .MuiInputLabel-root {
    color: #43ff64d9;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: #43ff64d9;
  }
  `;
const StyledButtonError = styled(Button)`
&& {
  color: black;
  border-color: red;
  margin: 0px 0px 20px 0px;
  padding: 10px;
  font-weight: bolder;
  font-size: 15px;
  background-color: red;
  width: 130px;
  & svg {
    font-size: 30px;
  }
  &:hover {
    background-color: #00fa43;
    color: black;
    & svg {
      color: black;
    }
  }
}
`
const StyledButton = styled(Button)`
  && {
    color: black;
    border-color: #43ff64d9;
    margin: 0px 0px 20px 0px;
    padding: 10px;
    font-weight: bolder;
    font-size: 15px;
    background-color: rgba(0, 250, 67, 0.6);
    width: 130px;
    & svg {
      font-size: 30px;
    }
    &:hover {
      background-color: #00fa43;
      color: black;
      & svg {
        color: black;
      }
    }
  }
`;
