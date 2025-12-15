"use client";
import React from "react";
import banner from "../assets/Images/home//ban.png";
import Image from "next/image";
function TopBanner({ Page }) {
  return (
    <>
      <section className="relative w-full h-[300px] sm:h-[380px] md:h-[480px] flex items-end overflow-hidden">
        <Image
          src={banner}
          alt="About background"
          fill
          className="object-cover object-center h-full w-full"
          priority
        />

        <div className="relative z-[2] w-full px-6 sm:px-10 md:px-12 pb-10 sm:pb-12 md:pb-16 flex flex-col sm:flex-row justify-between items-start sm:items-center text-white gap-3 sm:gap-0">
          {/* Title */}
          <h1
            className="font-[Oregano] font-normal text-[36px] sm:text-[48px] md:text-[66px] leading-tight tracking-[-0.3px]"
            style={{ fontStyle: "normal" }}
          >
            {Page}
          </h1>

          {/* Breadcrumb */}
          <p
            className="font-[Oregano] text-[18px] sm:text-[24px] md:text-[30px] leading-[100%] tracking-[-0.3px] flex flex-wrap items-center"
            style={{ fontStyle: "normal" }}
          >
            <span className="opacity-80 hover:opacity-100 cursor-pointer transition">
              Home
            </span>
            <span className="mx-1 sm:mx-2">&gt;</span>
            <span> {Page}</span>
          </p>
        </div>
      </section>
     
    </>
  );
}

export default TopBanner;
