import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

const UpdateToys = () => {
  const updateToyData = useLoaderData();
  console.log(updateToyData);
  const { user } = useContext(AuthContext);
  const {
    _id,
    toy_name,
    photoUrl,
    seller_name,
    seller_email,
    sub_category,
    price,
    rating,
    available_quantity,
    description,
  } = updateToyData;

  const handleUpdateToyButton = (e) => {
    e.preventDefault();

    const form = e.target;
    const price = form.price.value;
    const available_quantity = form.available_quantity.value;
    const description = form.textarea.value;
    const updateToyInfo = {
      toy_name,
      photoUrl,
      seller_name,
      seller_email,
      sub_category,
      price,
      rating,
      available_quantity,
      description,
    };
    console.log(updateToyInfo);
    // Udate data to the server
    fetch(`http://localhost:5000/legoSets/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Update Toy successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="main-container">
      <div className="text-center bg-red-100 py-20 mt-5">
        <h3 className="font-light md:text-4xl text-3xl">Update Your Toys 🚒</h3>
      </div>

      <div>
        <div className="relative flex flex-col justify-center min-h-screen mb-5">
          <div className="w-full p-6 m-auto mt-12 bg-white rounded-md shadow-xl shadow-rose-600/40 lg:max-w-4xl">
            <form
              onSubmit={handleUpdateToyButton}
              className="mt-6 grid grid-cols-2 gap-5"
            >
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Price
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Price"
                  required
                  name="price"
                  defaultValue={updateToyData.price}
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Available Quantity
                </label>
                <input
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Available Quantity"
                  name="available_quantity"
                  defaultValue={available_quantity}
                  required
                />
              </div>

              <div className="mb-2 col-span-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Details Description
                </label>
                <textarea
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  name="textarea"
                  defaultValue={description}
                  type="text"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div className="mt-6 flex justify-center col-span-2">
                <div>
                  <button className=" btn-wide px-4 py-2 tracking-wide text-white transition-colors duration-200 transform p-bg-color rounded-md hover:bg-[#146C94] focus:outline-none focus:bg-purple-600">
                    Update Toy
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToys;
