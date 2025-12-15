import React from "react";
import image1 from "../../../src/app/assets/Images/category/image1.png";
import image2 from "../../../src/app/assets/Images/category/image2.png";
import image3 from "../../../src/app/assets/Images/category/image3.png";
import image4 from "../../../src/app/assets/Images/category/image4.png";
import image5 from "../../../src/app/assets/Images/category/image5.png";
import image6 from "../../../src/app/assets/Images/category/image6.png";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "SHOES",
    image: image1,
  },
  {
    id: 2,
    name: "APPAREL",
    image: image2,
  },
  {
    id: 3,
    name: "ACCESSORIES",
    image: image3,
  },
  {
    id: 4,
    name: "KIDS",
    image: image4,
  },
  {
    id: 5,
    name: "WOMEN",
    image: image5,
  },
  {
    id: 6,
    name: "MEN",
    image: image6,
  },
];

const DealsOfTheDay = () => {
  return (
    <div className="container-fluid mx-auto px-4 py-10">
      {/* grid-rows-3 hata diya */}
      <div className="grid grid-cols-4 gap-4">
        {categories.map((cat, index) => {
          let colSpan = "col-span-1 row-span-1";
          if (cat.name === "SHOES") colSpan = "col-span-1 row-span-1";
          if (index === 1) colSpan = "col-span-1 row-span-2";
          if (cat.name === "MEN") colSpan = "col-span-1 sm:col-span-2";

          return (
            <div
              key={cat.id}
              className={`relative group overflow-hidden rounded-xl ${colSpan}`}
            >
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={cat.image}
                  className="w-full h-full object-cover transform transition duration-500 ease-in-out group-hover:scale-110"
                  alt={cat.name}
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold bg-[#f3bf03] px-6 py-2 rounded">
                  {cat.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DealsOfTheDay;
