"use client";
import React, { useState } from "react";
import { ArrowRight, Info, ArrowLeft, CheckCheck, User, MapPin, Map, CircleCheck, PackageCheck } from "lucide-react";
import TopBanner from "../Components/TopBanner";

const Track_order = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleTrackOrder = () => {
    setShowDetails(true);
  };

  const handleBack = () => {
    setShowDetails(false);
  };

  return (
    <div>
      {/* Banner */}
      <TopBanner Page={"Track Order"} />
      <div className=" p-8">
        {!showDetails ? (
          <div>
            <h2 className="text-[52px] font-normal text-[#000] mb-4">
              Track Order
            </h2>

            <p className="text-gray-700 mb-6 w-[80%]">
              To track your order please enter your order ID and Billing Emai
              below and press the “Track Order” button.
            </p>

            <div className="flex items-center justify-between gap-6">
              <div className="w-full md:w-1/2">

                <div className="relative">
                  <label className="absolute -top-3.5 left-3 text-sm sm:text-base text-[#353535] bg-white px-1">
                    Order ID
                  </label>
                  <input
                    type="text"
                    placeholder="ID....."
                    className="w-full px-4 sm:px-5 py-2.5 border border-gray-300 rounded-full text-sm focus:outline-none bg-white"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="relative mt-5">
                  <label className="absolute -top-3.5 left-3 text-sm sm:text-base text-[#353535] bg-white px-1">
                    Billing Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email address...."
                    className="w-full px-4 sm:px-5 py-2.5 border border-gray-300 rounded-full text-sm focus:outline-none bg-white"
                  />
                </div>
              </div>
            </div>

            <p className="flex items-center mt-5 text-[#585656]">
              <Info className="mx-2" />
              <span>Order ID was sent to your email address.</span>
            </p>

            <div className="flex mt-6">
              <button
                onClick={handleTrackOrder}
                className="flex items-center gap-2 bg-[#ffd232] text-black px-6 py-2 rounded-full transition-transform hover:scale-105"
              >
                Track Order
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full mx-auto border-2 border-[#E4E7E9] rounded-xl shadow-md p-4 bg-white">
            <button
              onClick={handleBack}
              className="flex items-center text-[#000] mb-4 hover:underline"
            >
              <ArrowLeft className="mr-2" />
              Back to Track Order
            </button>
            <div className=" pb-4 mb-4 flex items-center justify-between bg-[#ffd232] p-4 border border-[#ffd232]">
              <div>
                <h3 className="text-lg font-normal font-body">#96459761</h3>
                <p className="text-sm text-[#475156] font-body font-normal">
                  2 Products • Order Placed 17 Sept, 2025 at 7:32 PM
                </p>
              </div>
              <div>
                <p className="text-[#000] text-2xl font-semibold mt-2 text-end">
                  ₹1,184.55
                </p>
                <span className="text-sm text-[#000] font-body font-bold">
                  (Urgent Delivery ₹1,184.55 + ₹30)
                </span>
              </div>
            </div>

            {/* Order Progress */}
            <p className="mb-5 font-body text-sm">
              Order expected arrival 23 Sept, 2025
            </p>
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-[#ffd232] text-black rounded-full flex items-center justify-center">
                  ✓
                </div>
                <p className="text-sm mt-1 text-[#191C1F] font-medium">
                  Order Placed
                </p>
              </div>
              <div className="h-[2px] bg-[#ffd232] flex-1 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-[#ffd232] text-black rounded-full flex items-center justify-center">
                  ✓
                </div>
                <p className="text-sm mt-1 text-[#191C1F] font-medium">
                  Packaging
                </p>
              </div>
              <div className="h-[2px] bg-gray-300 flex-1 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 border-2 border-gray-400 rounded-full"></div>
                <p className="text-sm mt-1 text-[#191C1F] font-medium">
                  On The Road
                </p>
              </div>
              <div className="h-[2px] bg-gray-300 flex-1 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 border-2 border-gray-400 rounded-full"></div>
                <p className="text-sm mt-1 text-[#191C1F] font-medium">
                  Delivered
                </p>
              </div>
            </div>

            {/* Order Activity */}
            <h4 className="font-medium font-body text-lg mb-6 mt-10 text-[#353535]">
              Order Activity
            </h4>
            <ul className="space-y-6 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="bg-[#D5F0D3] p-2 rounded text-[#ffd232]">
                  <CheckCheck size={18} className="text-[#2DB224]" />
                </span>
                <div>
                  <p className="text-[#353535] font-body font-medium text-base">
                    Your order has been delivered. Thank you for shopping at
                    Clicon!
                  </p>
                  <p className="text-[#353535] text-sm font-normal font-body">
                    23 Sept, 2025 at 7:32 PM
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#D5EDFD] p-2 rounded text-[#ffd232]">
                  <User size={18} className="text-[#2DA5F3]" />
                </span>
                <div>
                  <p className="text-[#353535] font-body font-medium text-base">
                    Our delivery man (John Wick) Has picked-up your order for
                    delvery.{" "}
                  </p>
                  <p className="text-[#353535] text-sm font-normal font-body">
                    23 Sept, 2025 at 2:00 PM
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#D5EDFD] p-2 rounded text-[#ffd232]">
                  <MapPin size={18} className="text-[#2DA5F3]" />
                </span>
                <div>
                  <p className="text-[#353535] font-body font-medium text-base">
                    Your order has reached at last mile hub.
                  </p>
                  <p className="text-[#353535] text-sm font-normal font-body">
                    23 Sept, 2025 at 8:00 AM
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#D5EDFD] p-2 rounded text-[#ffd232]">
                  <Map size={18} className="text-[#2DA5F3]" />
                </span>
                <div>
                  <p className="text-[#353535] font-body font-medium text-base">
                    Your order on the way to (last mile) hub.
                  </p>
                  <p className="text-[#353535] text-sm font-normal font-body">
                    26 Sept, 2025 at 5:32 AM
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#D5F0D3] p-2 rounded text-[#ffd232]">
                  <CircleCheck size={18} className="text-[#2DB224]" />
                </span>
                <div>
                  <p className="text-[#353535] font-body font-medium text-base">
                    Your order is successfully verified.
                  </p>
                  <p className="text-[#353535] text-sm font-normal font-body">
                    23 Sept, 2025at 7:32 PM
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#D5EDFD] p-2 rounded text-[#ffd232]">
                  <PackageCheck size={18} className="text-[#2DA5F3]" />
                </span>
                <div>
                  <p className="text-[#353535] font-body font-medium text-base">
                    Your order has been confirmed.
                  </p>
                  <p className="text-[#353535] text-sm font-normal font-body">
                    23 Sept, 2025 at 2:61 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Track_order;
