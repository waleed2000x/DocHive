import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useUser } from "../../context/UserContext";

export default function JoinButton() {

  const {userLoggedIn} = useUser();
  console.log(userLoggedIn);

  if (!userLoggedIn) {
    return (
      <Link to="/register">
        <StyledButton variant="filled" color="success">
          Register
        </StyledButton>
      </Link>
    );
  } else {
    return (
      <Link to="/dashboard">
        <StyledButton variant="filled" color="success">
          Dashboard
        </StyledButton>
      </Link>
    );
  }
}
const StyledButton = styled(Button)`
  && {
    color: black;
    border-color: #43ff64d9;
    margin: 0px 40px 40px 0px;
    padding: 10px;
    font-weight: bolder;
    font-size: 18px;
    background-color: rgba(0, 250, 67, 0.6);
    width: 150px;
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
