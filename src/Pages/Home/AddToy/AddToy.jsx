import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToyButton = (e) => {
    e.preventDefault();

    const form = e.target;
    const toy_name = form.toyName.value;
    const photoUrl = form.photoURL.value;
    const seller_name = user?.displayName;
    const seller_email = user?.email;
    const sub_category = form.sub_category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const available_quantity = form.available_quantity.value;
    const description = form.textarea.value;
    const toyInfo = {
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
    console.log(toyInfo);
    // Send data to the server
    fetch("http://localhost:5000/legoSets", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New Toy added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="main-container">
      <div className="text-center bg-red-100 py-20 mt-5">
        <h3 className="font-light md:text-4xl text-3xl">
          Add Your Toy Here 🚒
        </h3>
      </div>

      <div>
        <div className="relative flex flex-col justify-center min-h-screen mb-5">
          <div className="w-full p-6 m-auto mt-12 bg-white rounded-md shadow-xl shadow-rose-600/40 lg:max-w-4xl">
            <form
              onSubmit={handleAddToyButton}
              className="mt-6 grid grid-cols-2 gap-5"
            >
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Toy Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter Name"
                  name="toyName"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Picture URL
                </label>
                <input
                  type="url"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Picture URL"
                  name="photoURL"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Seller Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  readOnly
                  name="sellerName"
                  defaultValue={user?.displayName}
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Seller Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  name="sellerEmail"
                  readOnly
                  defaultValue={user?.email}
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Sub-Category
                </label>
                <select
                  name="sub_category"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                >
                  <option value="Lego City">Lego City</option>
                  <option value="Lego Cars">Lego Cars</option>
                  <option value="Lego Architecture">Lego Architecture</option>
                </select>
              </div>
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
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Rating
                </label>
                <input
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="rating"
                  name="rating"
                  required
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
                  type="text"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div className="mt-6 flex justify-center col-span-2">
                <div>
                  <button className=" btn-wide px-4 py-2 tracking-wide text-white transition-colors duration-200 transform p-bg-color rounded-md hover:bg-[#146C94] focus:outline-none focus:bg-purple-600">
                    Add Toy
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

export default AddToy;
