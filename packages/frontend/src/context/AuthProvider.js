import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    if (saved !== "undefined") {
      const initialValue = JSON.parse(saved);
      return initialValue;
    }
    return "";
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
