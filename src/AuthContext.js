import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = {
      username: localStorage.getItem("uname"),
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      mobile: localStorage.getItem("mobile"),
    };
    if (storedUser.username) {
      setUser(storedUser);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("uname");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("mobile");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;