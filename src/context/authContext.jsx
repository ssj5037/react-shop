import { createContext, useEffect } from "react";
import RSAuth from "../api/auth";
import { useState } from "react";

export const AuthContext = createContext();
const auth = new RSAuth();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const login = auth.auth.onAuthStateChanged((data) => {
      setUser(data);
    });
    return login;
  }, []);

  return (
    <AuthContext.Provider value={{ auth, user }}>
      {children}
    </AuthContext.Provider>
  );
}
