import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";
import { redirect } from "react-router-dom";
export default function AuthButtons() {
  const status = "authenticated";
  status === "authenticated" ? redirect("/dashboard") : null;

  return (
    <>
      <Button
        startIcon={<GoogleIcon style={{ fontSize: "25px" }} />}
        variant="text"
        className="googleButton"
        // onClick={() => signIn("google")}
      >
        Google
      </Button>
      <Button
        startIcon={<FacebookIcon style={{ fontSize: "25px" }} />}
        variant="text"
        className="googleButton"
        // onClick={() => signIn("google")}
      >
        Facebook
      </Button>
      <Button
        startIcon={<GitHubIcon style={{ fontSize: "25px", color: "black" }} />}
        variant="text"
        className="googleButton"
        // onClick={() => signIn("github")}
      >
        Github
      </Button>
      <Button
        startIcon={<LinkedInIcon style={{ fontSize: "25px" }} />}
        variant="text"
        className="googleButton"
        // onClick={() => signIn("google")}
      >
        LinkedIn
      </Button>
    </>
  );
}
