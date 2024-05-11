import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LoginUser
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // LoginWithGoogle
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Login WithGithub
  const loginWithGithub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  // LogoutUser
  const logoutUser = () => {
    return signOut(auth)
  }

  // Observation function
  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubScribe();
    };
  }, []);

  const authInfo = {
    loading,
    user,
    createUser,
    loginUser,
    loginWithGoogle,
    loginWithGithub,
    logoutUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProviders.propTypes = {
  children: PropTypes.node,
};

export default AuthProviders;
