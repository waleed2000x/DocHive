/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);


  return (
    <UserContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;
