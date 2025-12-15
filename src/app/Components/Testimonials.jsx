"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import shirt from "../assets/Images/category/Category1.webp";

const testimonials = [
  {
    id: 1,
    name: "Rohit Sharma",
    role: "Regular Customer",
    text: "The product quality is amazing! I have been using their products for months and it has been a great experience every time.Fast delivery and excellent customer service. Highly recommended for everyone looking for quality products.",
  },
  {
    id: 2,
    name: "Sneha Verma",
    role: "Verified Buyer",
    text: "The product quality is amazing! I have been using their products for months and it has been a great experience every time.Fast delivery and excellent customer service. Highly recommended for everyone looking for quality products.",
  },
  {
    id: 3,
    name: "Vikas Singh",
    role: "Happy Customer",
    text: "The product quality is amazing! I have been using their products for months and it has been a great experience every time.Fast delivery and excellent customer service. Highly recommended for everyone looking for quality products.",
  },
];

function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <div className="relative py-5">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Section Title */}
        <p className="text-xl sm:text-2xl xl:text-4xl font-heading mt-4 leading-relaxed text-center">
          Testimonials
        </p>

        <div className="relative flex flex-col items-center justify-center">
          <div className="text-center mb-5 relative z-10">
            <h1 className="text-[54px] text-black font-normal">
              What Our <span className="text-[#f3bf03]">Customers</span>
            </h1>
          </div>
          {/* Custom Navigation Arrows */}
          <div className="absolute top-12 md:top-1/2 transform -translate-y-1/2 right-0 flex gap-2 z-20">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2 bg-[#ffd232] rounded-full hover:bg-orange-500 transition cursor-pointer"
            >
              <ArrowLeft color="#000" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2 bg-[#ffd232] rounded-full hover:bg-orange-500 transition cursor-pointer"
            >
              <ArrowRight color="#000" />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="grid md:grid-cols-3 py-4">
                {/* Left Image */}
                <div className="flex justify-center items-center bg-[#E9E9CF] p-2 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none w-full md:w-[250px]">
                  <Image
                    src={shirt}
                    alt="Customer"
                    className="w-full md:w-[250px] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none object-cover"
                  />
                </div>

                {/* Right Content */}
                <div className="md:col-span-2 bg-[#E9E9CF] py-10 md:py-0 px-4 rounded-r-2xl md:rounded-tl-none flex flex-col justify-center relative mt-5 md:mt-0">
                  <p className="text-slate-700 text-sm md:text-[18px] font-body font-normal leading-7 pr-0 md:pr-10">
                    {item.text}
                  </p>
                  <p className="mt-2 font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
