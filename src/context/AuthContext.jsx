import React, { createContext, useContext, useEffect, useState } from "react";
import { loginUser } from "../helpers/api-communicator.js";

// let userAuth = {
//   isLoggedIn: false,
//   user: { name: " ", email: " " },
//   login: (email, password) => {
//     return new Promise((resolve, reject) => {
//       // login implementation
//     });
//   },
//   signup: (name, email, password) => {
//     return new Promise((resolve, reject) => {
//       // signup implementation
//     });
//   },
//   logout: () => {
//     return new Promise((resolve, reject) => {
//       // logout implementation
//     });
//   },
// };

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // fetch if the user's token is in local storage are valid then skip login
  }, []);

  const login = async (email, password) => {
    try {
      const data = await loginUser(email, password);
      if (data) {
        setUser({ email: data.email });
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  const signup = (name, email, password) => {};
  const logout = () => {};

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    signup,
  };
  console.log("AuthProvider value:", value);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
