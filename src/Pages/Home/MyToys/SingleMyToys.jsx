import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleMyToys = ({ toy }) => {
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
  } = toy;
  return (
    <>
      <tr>
        <th>{toy_name}</th>
        <td>{seller_name}</td>
        <td>{seller_email}</td>
        <td>{sub_category}</td>
        <td>
          <span>{price}</span> | <span>{rating}</span>
        </td>
        <td className="text-center">{available_quantity}</td>
        <td className="text-center space-x-2">
          <span>
            <Link>
              <button className="btn btn-circle btn-outline">
                <FaPencilAlt></FaPencilAlt>
              </button>
            </Link>
          </span>
          <span>
            <Link>
              <button className="btn btn-circle btn-outline">
                <FaTrashAlt></FaTrashAlt>
              </button>
            </Link>
          </span>
        </td>
      </tr>
    </>
  );
};

export default SingleMyToys;
