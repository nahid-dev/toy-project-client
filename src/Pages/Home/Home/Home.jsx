import React from "react";
import BannerSlider from "./BannerSlider";
import Gallery from "./Gallery";
import HomeTab from "./HomeTab";
import useTitle from "../../../hooks/useTitile";
import ExtraSection01 from "./ExtraSection01";
import LegoAnimation from "./LegoAnimation";

const Home = () => {
  useTitle("home");
  return (
    <div>
      <BannerSlider></BannerSlider>
      <Gallery></Gallery>
      <HomeTab></HomeTab>
      <ExtraSection01></ExtraSection01>
      <LegoAnimation></LegoAnimation>
    </div>
  );
};

export default Home;
