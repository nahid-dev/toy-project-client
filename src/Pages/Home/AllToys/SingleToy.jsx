import React from "react";
import { Link } from "react-router-dom";

const SingleToy = ({ toy }) => {
  const {
    _id,
    seller_name,
    toy_name,
    sub_category,
    price,
    available_quantity,
  } = toy;
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
            <button className="btn-p">details</button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default SingleToy;
