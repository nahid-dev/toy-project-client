import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <img
              src="https://i.ibb.co/pRrttMw/hong-lin-Ze-YQxq-EUn-WQ-unsplash.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/2nrhJw3/omar-albeik-I6g-WLzt-Kr-Yc-unsplash.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/cxnp5nB/Background-1920x1280.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/474jVxX/boukaih-p-RS6it-Ejhy-I-unsplash-1920x1280-200.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;
