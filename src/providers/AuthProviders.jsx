import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const authInfo = {
    name: "Saddam",
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProviders.propTypes = {
  children: PropTypes.node,
};

export default AuthProviders;
