import React from "react";
import BannerSlider from "./BannerSlider";
import Gallery from "./Gallery";
import HomeTab from "./HomeTab";

const Home = () => {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <Gallery></Gallery>
      <HomeTab></HomeTab>
    </div>
  );
};

export default Home;
