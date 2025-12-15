'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import images from "../app/Utils/Images/Image";
import CategorySection from "./Components/Category";
import Product from "./Components/Product";
import DealsOfTheDay from "./Components/DealsOfTheDay";
import TopSelling from "./Components/TopSelling";
import WhyChooseUs from "./Components/WhyChooseUs";
import Testimonials from "./Components/Testimonials";
import Slider from "./Components/Slider";
import Link from "next/link";
import OfferBanner from "./Components/WhyChooseUs";
import HotPicksMotion from "./Components/pick";
import KidsHero from "./Components/kidswear";

function Home() {
  const heroImages = [
    images.heroimage,
    images.mirch,
  ];

  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setOpenModal(true);
  }, []);

  return (
    <>
      {/* {openModal && (
        <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-black/60">

          <div
            className="bg-white rounded-2xl w-[90%] md:w-[800px] overflow-hidden shadow-lg relative"
            style={{
              backgroundImage: `url(${promo.src})`,
              backgroundSize: "cover",
            }}
          >

            <button
              className="absolute top-3 right-3 font-bold cursor-pointer text-white hover:text-red-500 transition"
              onClick={() => setOpenModal(false)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">

              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-green-900">
                  Get Fit, <span className="text-yellow-600">Save Big!</span>
                </h2>

                <p className="mt-4 text-gray-600 text-lg">
                  Enjoy exclusive discounts on memberships and fitness programs.
                  Join today and start your transformation journey!
                </p>

                <Link href="/offer">
                  <button
                    className="mt-6 bg-green-900 text-white px-6 py-3 rounded-full w-fit hover:bg-green-800"
                  >
                    Know More →
                  </button>
                </Link>
              </div>

            </div>

          </div>
        </div>
      )} */}


      <Slider />
      <CategorySection />
      <Product />
      <DealsOfTheDay />
      <TopSelling />
      <OfferBanner />
      <HotPicksMotion/>
      <Testimonials />
      <KidsHero/>
    </>
  );
}

export default Home;
