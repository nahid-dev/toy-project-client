import React from "react";

const SingleToy = ({ toy }) => {
  const { seller_name, toy_name, sub_category, price, available_quantity } =
    toy;
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
          <button className="btn-p">details</button>
        </th>
      </tr>
    </>
  );
};

export default SingleToy;
