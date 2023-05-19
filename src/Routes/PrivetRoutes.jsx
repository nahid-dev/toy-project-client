import React, { useContext } from "react";
import { AuthContext } from "../Pages/Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="main-container flex justify-center">
        <button className="btn loading ">loading</button>;
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" replace></Navigate>;
};

export default PrivetRoutes;
