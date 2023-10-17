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
  FormHelperText,
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
  const{ userLoggedIn, setUserLoggedIn } = useUser();
  useEffect(() => {
    if(userLoggedIn){
      navigate('/')
    }
  }, [userLoggedIn, navigate])
  // eslint-disable-next-line no-unused-vars
  const [alert, setAlert] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [alertErr, setAlertErr] = useState(false);

  const iValues = {
    email: '',
    fullname : '',
    password:'',
    contact:'',
    gender:'',
    city:'',
    country:''
  }

  const {values, errors, handleBlur, handleChange, handleSubmit, resetForm} = useFormik({
    initialValues:iValues,
    validationSchema:RegisterSchema,
    onSubmit: () => {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 4000);
      setTimeout(() => {
        resetForm()
        navigate('/')
      }, 1000);
      setUserLoggedIn(true)
      console.log(userLoggedIn);
    }
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
                Registration Successful!
              </b>
            </AlertTitle>
            Your account has been successfully created!
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
              <ImageUpload />
              <TextField
                variant="outlined"
                label="Email"
                className="MUI-textfield-Email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors?.email}
                helperText={errors?.email || ' '}
              />
            </div>
            <div className="input">
              <TextField
                variant="outlined"
                label="Full Name"
                className="MUI-textfield"
                placeholder="Full Name"
                name="fullname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullname}
                error={errors?.fullname}
                helperText={errors?.fullname || ' '}
              />
              <TextField
                variant="outlined"
                label="Password"
                className="MUI-textfield"
                placeholder="Password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors?.password}
                helperText={errors?.password || ' '}
              />
            </div>
            <div className="input">
              <TextField
                variant="outlined"
                label="Contact"
                className="MUI-textfield"
                placeholder="Contact"
                name="contact"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contact}
                error={errors?.contact}
                helperText={errors?.contact || ' '}
              />
              <TextField
                variant="outlined"
                label="Gender"
                className="MUI-textfield"
                placeholder="Male/Female"
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender}
                error={errors?.gender}
                helperText={errors?.gender || ' '}
              />
            </div>
            <div className="input">
              <TextField
                variant="outlined"
                label="City"
                className="MUI-textfield"
                placeholder="City"
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                error={errors?.city}
                helperText={errors?.city || ' '}
              />
              <FormControl variant="outlined" className="MUI-textfield">
                <InputLabel>Country</InputLabel>
                <Select 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
                name="country"
                  input={<OutlinedInput label="Country" />}
                >
                  {Countries.map((country, index) => (
                    <MenuItem key={index} value={country}>
                      {country}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText style={{color:'#d43d35', fontWeight:'400'}}>{errors?.country || ' '}</FormHelperText>
                {/* <p style={{color:'red', margin:'0px', padding:'5px 0px',fontWeight:'200', fontSize:'12px'}}>{errors?.country || ' '}</p> */}
              </FormControl>
            </div>
            <StyledButton onClick={handleSubmit} variant="outlined" color="success">
              Continue
            </StyledButton>
          </div>
          <StyledDivider>
            <Chip
              style={{
                backgroundColor: "#04bf3c",
                color: "black",
                fontWeight: "600",
                fontSize: "15px",
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
    height: 0.5px;
    margin: 20px 0px 20px 0px;
    width: 95%;
  }
`;
const StyledButton = styled(Button)`
  align-self: center;
  && {
    color: black;
    border-color: #43ff64d9;
    margin: 10px 0px 5px 0px;
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
