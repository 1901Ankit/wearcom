import React from "react";
import DealsOfTheDay from "../Components/DealsOfTheDay";
import TopBanner from "../Components/TopBanner";
import KidsHero from "../Components/kidswear";
import MissionVision from "./mission";
import Category1 from "../assets/Images/category/image3.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main>
      <TopBanner Page={"About Us"} />

      <section className="relative w-full py-5">
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-8 md:gap-14">

            {/* Left Side Image */}
            <div className="relative w-full h-full flex justify-center">
              <Image
                src={Category1}
                alt="Fashion Model"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Right Side Content */}
            <div className="flex flex-col justify-center h-full  p-4 sm:p-6 md:p-0 rounded-2xl md:rounded-none">
              <h3 className="text-[#f3bf03] font-[Oregano] text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] leading-snug mb-2">
                About Us
              </h3>

              <h2 className="text-2xl sm:text-3xl md:text-[42px] lg:text-[50px] font-normal leading-snug mb-4">
                <span className="text-black font-heading">Wear Your Vibe </span>
                <span className="text-[#f3bf03] font-heading">
                  Discover Youth Fashion
                </span>
              </h2>

              <p className="text-black mb-4 leading-relaxed text-sm sm:text-base md:text-lg font-body">
                At <span className="font-semibold text-[#f3bf03]">logo</span>, we
                create fashion that matches your attitude. Inspired by the vibrant
                culture, bold expressions, and everyday comfort — our apparel is made
                for those who love to stand out effortlessly.
              </p>

              <p className="text-black mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
                From trendy tees to casual essentials, each design is crafted with premium
                fabrics, modern fits, and sustainable quality to ensure you look good and
                feel confident every single day.
              </p>

              <p className="text-black leading-relaxed text-sm sm:text-base md:text-lg">
                We’re not just a clothing brand — we’re a community that celebrates
                originality, comfort, and self-expression. Fashion that lets you be YOU.
                We’re not just a clothing brand — we’re a community that celebrates
                originality, comfort, and self-expression. Fashion that lets you be YOU.
              </p>
            </div>
          </div>
        </div>
      </section>


      <MissionVision />

      <DealsOfTheDay />
      <KidsHero />
    </main>
  );
}
