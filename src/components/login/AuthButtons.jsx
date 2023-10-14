import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";
import Google from '../../assets/Google.svg.webp'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import { redirect } from "react-router-dom";
export default function AuthButtons() {
  const status = "authenticated";
  status === "authenticated" ? redirect("/dashboard") : null;

  return (
    <>
      <IconButton
        variant="text"
        className="googleButton"
        // onClick={() => signIn("google")}
        
      >
        <img src={Google} alt="" className="google-img"/>
      </IconButton>
      <IconButton
        variant="text"
        className="googleButton"
        // onClick={() => signIn("google")}
      >
      <FacebookIcon style={{color:'#4267B2'}}/>
      </IconButton>
      <IconButton
        variant="text"
        className="googleButton"
        // onClick={() => signIn("github")}
      >
<GitHubIcon style={{ color: "black" }} />
      </IconButton>
      <IconButton
        variant="text"
        className="googleButton"
        // onClick={() => signIn("google")}
      >
<LinkedInIcon style={{ color:'#0A66C2' }} />
      </IconButton>
    </>
  );
}
