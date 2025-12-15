"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation, Pagination } from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Category1 from "../assets/Images/category/Category1.webp";
import TopBanner from "../Components/TopBanner";

export default function Categories() {
  const swiperRef = useRef(null);

  const categories = [
    { name: "T-Shirts", image: Category1 },
    { name: "Shirts", image: Category1 },
    { name: "Jeans", image: Category1 },
    { name: "Joggers", image: Category1 },
    { name: "Cargo Pants", image: Category1 },
    { name: "Plus Size", image: Category1 },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* --- TOP BANNER --- */}
      <TopBanner Page={"Categories"} />

      {/* --- CATEGORY PAGINATED GRID --- */}
      <div className="relative sm:px-12 px-2 z-10 py-5">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {categories.map((cat, idx) => (
            <SwiperSlide key={idx}>
              <motion.div variants={cardVariants}>
                <div className="relative rounded-xl overflow-hidden shadow-lg">

                  {/* Category Image */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* FIXED BOTTOM BAR */}
                  <div className="absolute bottom-0 left-0 w-full
                   bg-black/40 backdrop-blur-sm p-4 flex justify-between items-center">
                    <h2 className="text-xl text-white font-semibold">
                      {cat.name}
                    </h2>

                    <a
                      href={`/categorie/${cat.name
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/\s+/g, "-")}`}
                    >
                      <button className="bg-[#ffd232] text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-2 text-sm sm:text-base">
                        Read Now <ArrowRight size={18} />
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-10 gap-4 z-20 relative">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 bg-main rounded-full transition cursor-pointer hover:bg-[#E49F5C]"
          >
            <ArrowLeft color="black" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 bg-main rounded-full transition cursor-pointer hover:bg-[#E49F5C]"
          >
            <ArrowRight color="black" />
          </button>
        </div>
      </div>
    </>
  );
}
