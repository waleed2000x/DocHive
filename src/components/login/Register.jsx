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
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChangeCountry = (event) => {
    setSelectedCountry(event.target.value);
  };

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
              <ImageUpload />
              <TextField
                variant="outlined"
                label="Email"
                className="MUI-textfield-Email"
                placeholder="Email"
              />
            </div>
            <div className="input">
              <TextField
                variant="outlined"
                label="Full Name"
                className="MUI-textfield"
                placeholder="Full Name"
              />
              <TextField
                variant="outlined"
                label="Password"
                className="MUI-textfield"
                placeholder="Password"
              />
            </div>
            <div className="input">
              <TextField
                variant="outlined"
                label="Contact"
                className="MUI-textfield"
                placeholder="Contact"
              />
              <TextField
                variant="outlined"
                label="Gender"
                className="MUI-textfield"
                placeholder="Male/Female"
              />
            </div>
            <div className="input">
              <TextField
                variant="outlined"
                label="City"
                className="MUI-textfield"
                placeholder="City"
              />
              <FormControl variant="outlined" className="MUI-textfield">
                <InputLabel>Country</InputLabel>
                <Select
                  value={selectedCountry}
                  onChange={handleChangeCountry}
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
            <StyledButton variant="outlined" color="success">
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
