import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/legoSets?seller_email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default MyToys;
