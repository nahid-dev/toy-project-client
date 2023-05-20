import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  //   console.log(toyDetails);
  const {
    toy_name,
    photoUrl,
    seller_name,
    seller_email,
    sub_category,
    price,
    rating,
    available_quantity,
    description,
  } = toyDetails;
  return (
    <div className="main-container">
      <div className="text-center bg-red-100 py-20 mt-5">
        <h3 className="font-light md:text-4xl text-3xl">Toy Details Here 🚒</h3>
      </div>

      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <img className="shadow-2xl" src={photoUrl} alt="" />
          </div>
          <div className="flex items-center">
            <div className="w-full">
              <div className="mb-5">
                <h4 className="title text-2xl md:text-4xl font-bold mb-4">
                  {toy_name}
                </h4>
                <p className="font-bold text-gray-500">Price: ${price}</p>
              </div>
              <hr />
              <div>
                <p className="font-bold text-gray-500">Rating: {rating}</p>
                <p className="font-bold text-gray-500">
                  Available Quantity: {available_quantity}
                </p>
              </div>
              <div className="text-gray-500 font-semibold space-x-2  mt-5">
                <span className=" p-2 border">Seller Name: {seller_name}</span>
                <span className=" p-2 border">
                  Seller Email: {seller_email}
                </span>
                <span className=" p-2 border">
                  Sub Category: {sub_category}
                </span>
              </div>
              <div className="my-5">
                <p>Description: {description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
