"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/effect-fade";
import image1 from "../assets/Images/home/banner1.jpg";
import image2 from "../assets/Images/home/banner2.jpg";
import image3 from "../assets/Images/home/banner3.jpg";
import Loader from "./Loader";

function Slider({ loading = false, sliderBanners = [] }) {
  const bannerImages =
    sliderBanners.length > 0 ? sliderBanners : [image1, image2,image3]; 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  if (loading && sliderBanners.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-full h-[500px]"
    >
      {bannerImages.map((img, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-[500px] flex items-center"
            style={{
              backgroundImage: `url(${img.src || img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
