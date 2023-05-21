import React from "react";
import legoAnimation from "../../../assets/97630-lego.json";
import Lottie from "lottie-react";

const LegoAnimation = () => {
  return (
    <div className="main-container my-10">
      {/* <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Lottie animationData={legoAnimation}></Lottie>
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="w-full" data-aos="fade-right">
          <Lottie animationData={legoAnimation}></Lottie>
        </div>
        <div
          className="flex items-center md:ms-5 justify-center"
          data-aos="fade-left"
        >
          <div className="px-5 md:px-0">
            <h2 className="text-2xl md:text-4xl font-bold mb-5">
              Make Your Toy With Block !
            </h2>
            <p>
              This 2x4, rectangular LEGO® brick-shaped drawer sits neatly on
              desks or shelves to provide convenient, easy-access storage for a
              variety of uses. It’s ideal for use in offices, kids’ rooms,
              bathrooms and anywhere else that needs to be tidy and organized.
              The 8 oversized studs on the top surface mean colorful, customized
              storage systems can be built and adapted to suit changing storage
              needs.
            </p>
            <div className=" my-5">
              <button className="btn-p">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegoAnimation;
