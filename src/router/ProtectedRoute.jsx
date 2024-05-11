import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import loadingImg from "../assets/loading.gif";
import useAuthHooks from "../hooks/useAuthHooks";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthHooks();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[500px]">
        <img src={loadingImg} alt="" />
      </div>
    );
  }

  if (user) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
