import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import Category1 from "../assets/Images/category/kid.webp";

const MissionVision = () => {
  const features = [
    "High-quality fashion at honest prices",
    "Trend-driven designs made for everyday wear",
    "Sustainable and responsible production approach",
    "Fast delivery and dedicated customer support",
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container-fluid mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-14 text-center">
          Our Mission & Vision
        </h2>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-black text-2xl md:text-4xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed">
                Our mission is to redefine everyday fashion in India by offering
                stylish, comfortable, and affordable apparel that lets people
                express their personality without compromise — just like brands
                Bewakoof & Beyoung do for today’s youth.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white shadow-md rounded-xl"
                >
                  <CheckCircle className="h-6 w-6 text-[#2380D9] mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src={Category1}
              alt="Fashion Mission Image"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-1 lg:order-none">
            <Image
              src={Category1}
              alt="Fashion Vision Image"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-5">
            <div>
              <h2 className="text-black text-2xl md:text-4xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed">
                Our vision is to become India’s most loved youth-centric fashion
                brand — creating trendsetting apparel, promoting
                self-expression, and making premium quality clothing accessible
                for everyone.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white shadow-md rounded-xl"
                >
                  <CheckCircle className="h-6 w-6 text-[#2380D9] mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
