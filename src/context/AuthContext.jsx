import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { createContext, useState, useEffect } from "react";

// Karena createContext ini function maka dipanggilnya createContext(); bukan createContext aja
// timestamp : 1:07:43
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  // Ni juga belum di return, jelas gak keluar apa"
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
