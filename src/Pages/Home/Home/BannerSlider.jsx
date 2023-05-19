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
      <div className="mb-20">
        <Slider {...settings}>
          <div>
            <img
              src="https://i.ibb.co/pRrttMw/hong-lin-Ze-YQxq-EUn-WQ-unsplash.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#151515c4] to-[rgba(21, 21, 21, 0)] w-full h-full">
              <div className="w-5/6 md:w-1/2 ps-6 md:ps-14 h-full md:h-[500px] flex items-center">
                <div className="space-y-4">
                  <h1 className="text-white md:font-bold  md:text-6xl text-3xl font-bold ">
                    Buy Your Favorite Lego Set From Here
                  </h1>
                  <p className="text-gray-200 hidden md:block">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deserunt expedita tenetur aliquam tempora tempore, illum cum
                    ad officia vel qui.
                  </p>
                  <div className="space-x-5 flex">
                    <button className="btn-p">Shop Now</button>
                    <button className="btn-p-outline">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://i.ibb.co/2nrhJw3/omar-albeik-I6g-WLzt-Kr-Yc-unsplash.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#151515c4] to-[rgba(21, 21, 21, 0)] w-full h-full">
              <div className="w-5/6 md:w-1/2 ps-6 md:ps-14 h-full md:h-[500px] flex items-center">
                <div className="space-y-4">
                  <h1 className="text-white md:font-bold  md:text-6xl text-3xl font-bold ">
                    Buy Your Favorite Lego Set From Here
                  </h1>
                  <p className="text-gray-200 hidden md:block">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deserunt expedita tenetur aliquam tempora tempore, illum cum
                    ad officia vel qui.
                  </p>
                  <div className="space-x-5 flex">
                    <button className="btn-p">Shop Now</button>
                    <button className="btn-p-outline">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://i.ibb.co/cxnp5nB/Background-1920x1280.png"
              alt=""
            />
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#151515c4] to-[rgba(21, 21, 21, 0)] w-full h-full">
              <div className="w-5/6 md:w-1/2 ps-6 md:ps-14 h-full md:h-[500px] flex items-center">
                <div className="space-y-4">
                  <h1 className="text-white md:font-bold  md:text-6xl text-3xl font-bold ">
                    Buy Your Favorite Lego Set From Here
                  </h1>
                  <p className="text-gray-200 hidden md:block">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deserunt expedita tenetur aliquam tempora tempore, illum cum
                    ad officia vel qui.
                  </p>
                  <div className="space-x-5 flex">
                    <button className="btn-p">Shop Now</button>
                    <button className="btn-p-outline">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://i.ibb.co/474jVxX/boukaih-p-RS6it-Ejhy-I-unsplash-1920x1280-200.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#151515c4] to-[rgba(21, 21, 21, 0)] w-full h-full">
              <div className="w-5/6 md:w-1/2 ps-6 md:ps-14 h-full md:h-[500px] flex items-center">
                <div className="space-y-4">
                  <h1 className="text-white md:font-bold  md:text-6xl text-3xl font-bold ">
                    Buy Your Favorite Lego Set From Here
                  </h1>
                  <p className="text-gray-200 hidden md:block">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deserunt expedita tenetur aliquam tempora tempore, illum cum
                    ad officia vel qui.
                  </p>
                  <div className="space-x-5 flex">
                    <button className="btn-p">Shop Now</button>
                    <button className="btn-p-outline">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;
