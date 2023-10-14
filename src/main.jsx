import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </UserProvider>
);
