import React from "react";
import errEnimation from "../../assets/84918-404-error-doodle-animation.json";
import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div>
      <div>
        <div className="main-container flex justify-center">
          <div className="w-8  md:w-96">
            <Lottie animationData={errEnimation}></Lottie>
            <div>
              <div className="max-w-md text-center">
                <h2 className="mb-5 font-light text-2xl md:text-9xl text-gray-600">
                  <span className="sr-only">Error</span> {status || 404}
                </h2>
                <p className="text-xl font-semibold mb-8">{error?.message}</p>
                <Link to="/" className="btn-p">
                  Back to homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
