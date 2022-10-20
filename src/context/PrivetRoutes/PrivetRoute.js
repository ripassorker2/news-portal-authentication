import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return (
      <div className="h-50 w-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivetRoute;
