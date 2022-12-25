import React, { useState } from "react";
import { getHomeData } from "../Landing_page/home";
export const AuthContext = React.createContext();
function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const loginUser = (email, token) => {
    setIsAuth(true);
  };
  const logoutUser = () => {
    setIsAuth(false);
    window.localStorage.clear();
  };

  return (
    <div>
      <AuthContext.Provider
        value={{ isAuth, loginUser, logoutUser, getHomeData }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthContextProvider;
