import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin/GoogleLogin";

const Login = () => {
  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen mb-5">
        <div className="w-full p-6 m-auto mt-12 bg-white rounded-md shadow-xl shadow-rose-600/40 lg:max-w-xl">
          <form className="mt-6">
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Enter Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter Email"
                name="email"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter Password"
                name="password"
                required
              />
            </div>

            <div className="mt-6 flex justify-center col-span-2">
              <div>
                <button className=" btn-wide px-4 py-2 tracking-wide text-white transition-colors duration-200 transform p-bg-color rounded-md hover:bg-[#146C94] focus:outline-none focus:bg-purple-600">
                  Login
                </button>
              </div>
            </div>
          </form>
          <div>
            <p className="my-4 text-center">
              Are you new here?
              <Link
                className="text-purple-600 font-bold ms-2"
                to="/registration"
              >
                Registration
              </Link>
            </p>
          </div>
          <div className="divider">OR</div>
          <GoogleLogin></GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
