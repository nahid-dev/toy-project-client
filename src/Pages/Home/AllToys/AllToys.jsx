import React, { useEffect, useState } from "react";
import SingleToy from "./SingleToy";
import useTitle from "../../../hooks/useTitile";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showAll, setShowAll] = useState(false);

  useTitle("all toys");

  if (loading) {
    return (
      <div className="main-container flex justify-center">
        <button className="btn loading ">loading</button>;
      </div>
    );
  }
  useEffect(() => {
    fetch(`https://assignment-11-server-drab.vercel.app/legoSets`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setLoading(false);
      });
  }, []);

  const handleSearchBtn = () => {
    fetch(
      `https://assignment-11-server-drab.vercel.app/searchByText/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  return (
    <div className="main-container">
      <div className="text-center bg-red-100 py-20 mt-5">
        <h3 className="font-light md:text-4xl text-3xl">
          All Toys Are Here 🚒
        </h3>
      </div>

      {/* Search Field here */}
      <div className="text-center flex justify-center my-10">
        <div>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder=" Toy Name"
                className="input input-bordered"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button onClick={handleSearchBtn} className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
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
            {allToys.slice(0, showAll ? 1000 : 20).map((toy) => (
              <SingleToy key={toy._id} toy={toy}></SingleToy>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      {showAll || (
        <div className="flex justify-center my-5">
          <button onClick={() => setShowAll(true)} className="btn-p">
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default AllToys;
