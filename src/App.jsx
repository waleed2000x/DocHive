import { Route, Routes } from "react-router-dom";
import Appbar from "./components/appbar/Appbar";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import Account from "./components/account/Account";
import Register from "./components/login/Register";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import "./scss/global.css";
import UserProvider, { useUser } from "./context/UserContext";
import Error from "./components/error/Error";

function App() {
  // eslint-disable-next-line no-unused-vars
  const { userLoggedIn, setUserLoggedIn } = useUser();
  return (
    <>
    <UserProvider>
      <BackgroundAnimation />
      <Appbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </UserProvider>
    </>
  );
}

export default App;
