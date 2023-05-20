import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-container">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <Link to="/" className="text-xl w-12 h-12 md:w-16 md:h-16 ">
            <img src="https://i.ibb.co/VqtqjRQ/Lego-main.jpg" alt="" />
          </Link>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
