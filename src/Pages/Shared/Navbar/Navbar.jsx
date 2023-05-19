import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allToys"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myToys"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          My Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addAToy"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Add A Toy
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 main-container">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to="/" className="text-xl w-12 h-12 md:w-16 md:h-16 ">
            <img src="https://i.ibb.co/VqtqjRQ/Lego-main.jpg" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="avatar">
                <div
                  title={user?.displayName}
                  className="w-12 md:w-14 rounded-full ring ring-[#1A5F7A] ring-offset-base-100 ring-offset-2"
                >
                  <img src={user?.photoURL} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="me-5">
              <Link to="/login">
                <button className="btn-p">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
