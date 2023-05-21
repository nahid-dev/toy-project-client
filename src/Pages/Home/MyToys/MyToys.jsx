import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import SingleMyToys from "./SingleMyToys";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitile";
import { useLoaderData } from "react-router-dom";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);
  useTitle("my toys");
  const allToys = useLoaderData();
  const { price } = allToys;

  const p = parseInt(price);
  // console.log(myToys);

  useEffect(() => {
    fetch(`http://localhost:5000/legoSets?seller_email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/legoSets/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = myToys.filter((toy) => toy._id !== id);
            setMyToys(remaining);
          });
      }
    });
  };
  return (
    <div className="main-container">
      <div className="text-center bg-red-100 py-20 mt-5">
        <h3 className="font-light md:text-4xl text-3xl">Only My Toys 🚒</h3>
      </div>

      <div className="flex justify-center mt-10">
        <div>
          <select className="select w-full max-w-xs  bg-gray-100">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
          </select>
        </div>
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
              <SingleMyToys
                key={toy._id}
                toy={toy}
                handleDeleteToy={handleDeleteToy}
              ></SingleMyToys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
