"use client";
import { useEffect, useState } from "react";
import {
  Alert,
  AlertTitle,
  Chip,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Button,
} from "@mui/material";
import LoginLottie from "./LoginLottie";
import { styled } from "styled-components";
import AuthButtons from "./AuthButtons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload";
import Countries from "./Countries";
import { useUser } from "../../context/UserContext";
import { useFormik } from "formik";
import RegisterSchema from "./Schema";
export default function Resigter() {

  const navigate = useNavigate()
  const{ userLoggedIn} = useUser();
  useEffect(() => {
    if(userLoggedIn){
      navigate('/')
    }
  }, [userLoggedIn, navigate])
  // eslint-disable-next-line no-unused-vars
  const [alert, setAlert] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [alertErr, setAlertErr] = useState(false);
  // const [selectedCountry, setSelectedCountry] = useState("");

  // const handleChangeCountry = (event) => {
  //   setSelectedCountry(event.target.value);
  // };

  const iValues = {
    image : "",
    email: '',
    fullname : '',
    password:'',
    contact:'',
    gender:'',
    city:'',
    country:''
  }
const {errors, values, handleBlur, handleChange, handleSubmit, resetForm} = useFormik({
  validationSchema:RegisterSchema,
  initialValues: iValues,
  onSubmit: ()=>{
    resetForm()
  },
})
  return (
    <div className="login-parent">
      {alertErr ? (
        <div
          style={{
            position: "fixed",
            top: "20px",
            color: "black",
            zIndex: "2",
          }}
        >
          <Alert severity="error">
            <b>Error!</b> Try with <b>Google</b> or <b>Github</b>
            <b>
              <Link
                style={{ color: "red", marginLeft: "5px" }}
                to="https://waleeddev.vercel.app"
                target="blank"
              >
                Contact Developer
              </Link>
            </b>
          </Alert>
        </div>
      ) : null}
      {alert ? (
        <div
          style={{
            position: "fixed",
            top: "20px",
            color: "black",
            zIndex: "2",
          }}
        >
          <Alert severity="success">
            <AlertTitle>
              <b>
                Email Sent to <b>someone@something.com</b>!
              </b>
            </AlertTitle>
            An Email has been sent to your email address.
          </Alert>
        </div>
      ) : null}
      <div className="login-card">
        <div className="login-lottie">
          <LoginLottie />
        </div>
        <div className="inputs-login">
          <div className="signup-inputs">
            <div className="input">
              <ImageUpload handleChange={handleChange} values={values} errors={errors} handleBlur={handleBlur} />
              <TextField
                variant="outlined"
                label="Email"
                className="MUI-textfield-Email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                error={errors.email}
                onBlur={handleBlur}
                helperText={errors?.email || ' '}
              />
            </div>
            <div className="input">
              <TextField
                variant="outlined"
                label="Full Name"
                className="MUI-textfield"
                placeholder="Full Name"
                onChange={handleChange}
                name="fullname"
                error={errors.fullname}
                onBlur={handleBlur}
                helperText={errors?.fullname || ' '}
              />
              <TextField
                variant="outlined"
                label="Password"
                className="MUI-textfield"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                error={errors.password}
                onBlur={handleBlur}
                helperText={errors?.password || ' '}
              />
            </div>
            <div className="input">
              <TextField
                variant="outlined"
                label="Contact"
                className="MUI-textfield"
                placeholder="Contact"
                onChange={handleChange}
                name="contact"
                error={errors.contact}
                onBlur={handleBlur}
                helperText={errors?.contact || ' '}
              />
              <TextField
                variant="outlined"
                label="Gender"
                className="MUI-textfield"
                placeholder="Male/Female"
                onChange={handleChange}
                name="gender"
                error={errors.gender}
                onBlur={handleBlur}
                helperText={errors?.gender || ' '}
              />
            </div>
            <div className="input">
              <TextField
                variant="outlined"
                label="City"
                className="MUI-textfield"
                placeholder="City"
                onChange={handleChange}
                name="city"
                error={errors.city}
                onBlur={handleBlur}
                helperText={errors?.city || ' '}
              />
              <FormControl variant="outlined" className="MUI-textfield">
                <InputLabel>Country</InputLabel>
                <Select 
                  value={values.country}
                  onChange={handleChange}
                name="country"
                error={errors.country}
                onBlur={handleBlur}
                helperText={errors?.country || ' '}
                  input={<OutlinedInput label="Country" />}
                >
                  {Countries.map((country, index) => (
                    <MenuItem key={index} value={country}>
                      {country}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <StyledButton variant="outlined" onClick={handleSubmit} color="success">
              Continue
            </StyledButton>
          </div>
          <StyledDivider>
            <Chip
              style={{
                backgroundColor: "#04bf3c",
                color: "black",
                fontWeight: "800",
                fontSize: "20px",
              }}
              label="OR"
            />
          </StyledDivider>
          <div className="auth-buttons">
            <AuthButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

const StyledDivider = styled(Divider)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #43ff64d9;
    background-color: #43ff64d9;
    height: 1px;
    margin: 35px 0px 0px 0px;
    width: 95%;
  }
`;
const StyledButton = styled(Button)`
  align-self: center;
  && {
    color: black;
    border-color: #43ff64d9;
    margin: 25px 0px 10px 0px;
    padding: 10px;
    font-weight: bolder;
    font-size: 15px;
    background-color: #00fa43;
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
