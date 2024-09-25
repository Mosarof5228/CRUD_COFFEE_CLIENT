import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { auth } from "../../Firebase.config";

export const AuthContext = createContext(null);
const goggleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const userCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const goggleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, goggleProvider);
  };

  const authInfo = {
    name: "Md.Mosarof Hossen",
    userCreate,
    loading,
    userLogin,
    goggleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
