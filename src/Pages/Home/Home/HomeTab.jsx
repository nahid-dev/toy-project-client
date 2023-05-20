import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCity from "./ToyCity";
import ToyCars from "./ToyCars";
import ToyArchitecture from "./ToyArchitecture";
const HomeTab = () => {
  const [tabToys, setTabToys] = useState([]);

  //   console.log(tabToys);
  useEffect(() => {
    fetch("http://localhost:5000/legoSets")
      .then((res) => res.json())
      .then((data) => setTabToys(data));
  }, []);

  const legoCity = tabToys.filter((toy) => toy.sub_category === "Lego City");
  const legoCars = tabToys.filter((toy) => toy.sub_category === "Lego Cars");
  const legoArchitecture = tabToys.filter(
    (toy) => toy.sub_category === "Lego Architecture"
  );
  //   console.log(legoArchitecture);

  return (
    <div className="main-container my-10 py-10 text-center">
      <div className="my-10 text-center">
        <h2 className="md:text-4xl text-3xl font-bold mb-3">
          Shop by Category
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
          accusamus!
        </p>
      </div>

      <Tabs>
        <TabList>
          <Tab>Lego City</Tab>
          <Tab>Lego Cars</Tab>
          <Tab>Lego Architecture</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 gap-y-4">
            {legoCity.slice(0, 3).map((legoCity) => (
              <ToyCity key={legoCity._id} legoCity={legoCity}></ToyCity>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {legoCars.slice(0, 3).map((legoCar) => (
              <ToyCars key={legoCar._id} legoCar={legoCar}></ToyCars>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {legoArchitecture.slice(0, 3).map((legoArch) => (
              <ToyArchitecture
                key={legoArch._id}
                legoArch={legoArch}
              ></ToyArchitecture>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HomeTab;
