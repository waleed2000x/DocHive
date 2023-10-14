import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Avatar, Button, Menu, MenuItem, TextField } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

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
  const { userLoggedIn : status } = useUser();

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
          {/* {location.pathname === "/login" ? null : ( */}
            <div className="login">
              <form
                method="post"
                onSubmit={handleSubmit}
                className="appbar-form"
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
                  className="appbar-login-button"
                >
                  Login
                </Button>
              </form>
            </div>
          {/* )} */}
        </>
      )}
    </>
  );
}
