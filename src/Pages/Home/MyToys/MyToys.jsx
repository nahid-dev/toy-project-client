import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import SingleMyToys from "./SingleMyToys";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);

  console.log(myToys);

  useEffect(() => {
    fetch(`http://localhost:5000/legoSets?seller_email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);
  return (
    <div className="main-container">
      <div className="text-center bg-red-100 py-20 mt-5">
        <h3 className="font-light md:text-4xl text-3xl">Only My Toys 🚒</h3>
      </div>

      <div className="overflow-x-auto my-10">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Sub Category</th>
              <th>
                <span>Price</span>|<span>Rating</span>
              </th>
              <th className="text-center">Available Quantity</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <SingleMyToys key={toy._id} toy={toy}></SingleMyToys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
