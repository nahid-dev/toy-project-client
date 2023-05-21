import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const SingleToy = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    seller_name,
    toy_name,
    sub_category,
    price,
    available_quantity,
  } = toy;

  const handledetalsbtn = () => {
    if (!user) {
      Swal.fire({
        icon: "Not Login",
        title: "Oops...",
        text: "Please Login first!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };
  return (
    <>
      <tr>
        <th>
          <span>{seller_name}</span>
        </th>
        <td>
          <span>{toy_name}</span>
        </td>
        <td>
          <span>{sub_category}</span>
        </td>
        <td>
          <span>{price}</span>
        </td>
        <td className="text-center">
          <span>{available_quantity}</span>
        </td>
        <th className="text-center">
          <Link to={`/toyDetails/${_id}`}>
            <button onClick={handledetalsbtn} className="btn-p">
              details
            </button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default SingleToy;
