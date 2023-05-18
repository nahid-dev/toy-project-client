import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div>
        <h2>Fade</h2>
        <Slider {...settings}>
          <div>
            <h2 className="text-3xl font-bold">Slide 1</h2>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Slide 2</h2>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Slide 3</h2>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Slide 4</h2>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
