import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import styled from "styled-components";

const iValues = {
  username: "",
  password: "",
};

const Schema = Yup.object({
  username: Yup.string().required("User Name is Required"),
  password: Yup.string()
    .required("Password is Required")
    .min(8, "Password length must be > 7"),
});

export default function UserButton() {
  const { userLoggedIn: status } = useUser();

  const { values, errors, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: iValues,
    validationSchema: Schema,
    onSubmit: () => {
      resetForm();
    },
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDashboard = () => {
    setAnchorEl(null);
  };
  // ! DIALOUGE
  const [openDialouge, setopenDialouge] = useState(false);

  const handleClickOpen = () => {
    setopenDialouge(true);
  };

  const handleDialougeClose = () => {
    setopenDialouge(false);
  };
  return (
    <>
      {status === true ? (
        <>
          <Button
            variant="text"
            className="appbar-dropdown"
            size="large"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Avatar />
            <KeyboardArrowDownIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
            </Link>
            <Link
              to="/account"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleClose}>Account</MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <div className="dialouge">
            <StyledButton
              className="small-screen-login-trigger"
              onClick={handleClickOpen}
            >
              Login
            </StyledButton>
            <Dialog
              PaperProps={{
                style: {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  border: "2px solid #43ff64",
                  height: "90vh",
                  width: "80%",
                },
              }}
              open={openDialouge}
              onClose={handleDialougeClose}
            >
              <DialogTitle>Login</DialogTitle>
              <DialogContent>
                <form
                  method="post"
                  onSubmit={handleSubmit}
                  className="appbar-form-small-screen"
                >
                  <TextField
                    color="success"
                    variant="outlined"
                    size="small"
                    label="User Name"
                    className="appbar-inputs"
                    autoComplete="off"
                    placeholder="username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    error={Boolean(errors.username)}
                    helperText={errors?.username || " "}
                  />
                  <TextField
                    color="success"
                    variant="outlined"
                    size="small"
                    label="Password"
                    className="appbar-inputs"
                    autoComplete="off"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    error={Boolean(errors.password)}
                    helperText={errors?.password || " "}
                  />
                  <Button
                    variant="outlined"
                    size="large"
                    type="submit"
                    className="appbar-login-button-small-screen"
                  >
                    Login
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <div className="login">
            <form method="post" onSubmit={handleSubmit} className="appbar-form">
              <TextField
                color="success"
                variant="outlined"
                size="small"
                label="User Name"
                className="appbar-inputs"
                autoComplete="off"
                placeholder="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                error={Boolean(errors.username)}
                helperText={errors?.username || " "}
              />
              <TextField
                color="success"
                variant="outlined"
                size="small"
                label="Password"
                className="appbar-inputs"
                autoComplete="off"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={values.password}
                error={Boolean(errors.password)}
                helperText={errors?.password || " "}
              />
              <Button
                variant="outlined"
                size="large"
                type="submit"
                className="appbar-login-button"
              >
                Login
              </Button>
            </form>
          </div>
        </>
      )}
    </>
  );
}

const StyledButton = styled.button`
  margin: 0px 10px 4px 0px;
  & {
    color: #43ff64d9;
    border-color: transparent;
    padding: 5px 10px;
    font-weight: bold;
    background-color: transparent;
    border-radius: 5px;
    & svg {
      font-size: 30px;
    }
    &:hover {
      background-color: #43ff64d9;
      color: black;
      & svg {
        color: black;
      }
    }
  }
`;
