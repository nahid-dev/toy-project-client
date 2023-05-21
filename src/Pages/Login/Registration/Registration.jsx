import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import useTitle from "../../../hooks/useTitile";

const Registration = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  useTitle("Register");

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    const register = { name, email, password, photoUrl };
    console.log(register);

    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        console.log(registerUser);
        form.reset();
        setError("");
        Swal.fire({
          title: "Success!",
          text: "Register Successfully!",
          icon: "success",
          confirmButtonText: "Cool",
        });
        updateUserData(result.user, name, photoUrl);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // update User
  const updateUserData = (user, name, photoUrl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        console.log("user name update");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen mb-5">
      <div className="w-full p-6 m-auto mt-12 bg-white rounded-md shadow-xl shadow-rose-600/40 lg:max-w-xl">
        <form onSubmit={handleRegistration} className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Enter Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Enter Name"
              name="name"
              required
            />
          </div>
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
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Enter Photo
            </label>
            <input
              type="url"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Photo URL"
              name="photoUrl"
              required
            />
          </div>
          <p className="text-red-500">{error && error}</p>
          <div className="mt-6 flex justify-center col-span-2">
            <div>
              <button className=" btn-wide px-4 py-2 tracking-wide text-white transition-colors duration-200 transform p-bg-color rounded-md hover:bg-[#146C94] focus:outline-none focus:bg-purple-600">
                Registration
              </button>
            </div>
          </div>
        </form>
        <div>
          <p className="my-4 text-center">
            Already have account?
            <Link className="text-purple-600 font-bold ms-2" to="/login">
              Login
            </Link>
          </p>
        </div>
        <div className="divider">OR</div>
        <GoogleLogin></GoogleLogin>
      </div>
    </div>
  );
};

export default Registration;
