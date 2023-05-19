import React from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
  return (
    <div>
      <div className="text-center">
        <button className="btn btn-circle btn-outline">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
