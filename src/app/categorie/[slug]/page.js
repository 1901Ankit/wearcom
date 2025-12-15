"use client";
import React, { useEffect, useState } from "react";
import TopBanner from "@/app/Components/TopBanner";
import TopSelling from "@/app/Components/TopSelling";
import Category1 from "../../assets/Images/category/sub/venom.webp";
import Image from "next/image";

export default function CategoryDetail({ params }) {
  const { slug } = params;
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const allCategories = [
      {
        name: "t-shirts",
        image: Category1,
      },
      {
        name: "shirts",
        image: Category1,
      },
      {
        name: "jeans",
        image: Category1,
      },
    ];

    const found = allCategories.find(
      (c) => c.name.toLowerCase() === slug.toLowerCase()
    );

    setCategory(found);
  }, [slug]);

  if (!category) {
    return (
      <main className="p-20 text-center text-xl">
        Loading / Category Not Found...
      </main>
    );
  }

  return (
    <main>
      <TopBanner Page={category.name} />

      <div className="px-8 py-5">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-10 items-stretch">

          {/* Left Image - SAME HEIGHT */}
          <div className="flex justify-center items-center p-3 rounded-md bg-[#E9E9CF] ">
            <Image
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-start h-full">
            <h2 className="text-[#ffd232] font-[Oregano] text-[64px] mt-3">
              {category.name}
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
            </p>
          </div>

        </div>
      </div>


      <TopSelling />
    </main>
  );
}
