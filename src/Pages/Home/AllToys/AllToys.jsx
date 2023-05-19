import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleToy from "./SingleToy";

const AllToys = () => {
  const allToys = useLoaderData();

  console.log(allToys);
  return (
    <div className="main-container">
      <div className="text-center bg-red-100 py-20 mt-5">
        <h3 className="font-light md:text-4xl text-3xl">
          All Toys Are Here 🚒
        </h3>
      </div>

      {/* All Toys List */}
      <div className="overflow-x-auto w-full my-20">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th className="text-center">Available Quantity</th>
              <th className="text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allToys.map((toy) => (
              <SingleToy key={toy.is} toy={toy}></SingleToy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
