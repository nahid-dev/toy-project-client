import React from "react";
import { Link } from "react-router-dom";

const ToyCars = ({ legoCar }) => {
  const { photoUrl, toy_name, price, rating, _id } = legoCar;

  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="lg:h-64 w-full" src={photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy_name}</h2>
          <p className="font-bold text-left">Price: ${price}</p>
          <p className="font-bold text-left">Rating: {rating}</p>
          <div className="card-actions justify-end">
            <Link to={`/toyDetails/${_id}`}>
              <button className="btn-p">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyCars;
