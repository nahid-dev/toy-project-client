import React from "react";

const AddToy = () => {
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
            <form className="mt-6 grid grid-cols-2 gap-5">
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">
                  Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter Name"
                  name="name"
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
                  placeholder="Seller Name"
                  name="sellerName"
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
                  placeholder="Seller Email"
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
                  <option value="">Lego City</option>
                  <option value="">Lego Cars</option>
                  <option value="">Lego Architecture</option>
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
