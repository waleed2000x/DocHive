import { useUser } from "../../context/UserContext";

export default function User() {
  const { userLoggedIn  } = useUser();

  const name = "John";
  let firstName = "";

  if (name) {
    const spliter = name.split(" ");
    firstName = spliter[0];
  }
  return (
    <>
      {userLoggedIn && 
        <div className="appbar-name">
          <p>
            Welcome,<span>{firstName}</span>!
          </p>
        </div>
      }
    </>
  );
}
