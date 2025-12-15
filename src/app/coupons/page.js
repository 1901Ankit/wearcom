"use client";

import React from "react";
import { Gift, Star, Tag } from "lucide-react";
import Image from "next/image";
import TopBanner from "../Components/TopBanner";

import Coupon from "../assets/Images/Coupon.png";
import coin from "../assets/Images/Coins.png";

/* ================= STATIC DATA ================= */
const STATIC_POINTS = 250;

const STATIC_OFFERS = [
  {
    _id: "1",
    title: "Flat 10% OFF",
    items: 2,
    discountPercent: 10,
    uptoAmount: 300,
  },
  {
    _id: "2",
    title: "Special Festival Offer",
    items: 3,
    discountPercent: 15,
    uptoAmount: 500,
  },
  {
    _id: "3",
    title: "Loyalty Reward",
    items: 1,
    discountPercent: 5,
    uptoAmount: 150,
  },
];

export default function Coupons() {
  const points = STATIC_POINTS;
  const offers = STATIC_OFFERS;

  return (
    <>
      <TopBanner Page={"Coupons / Rewards Coins"} />

      {/* TOP SECTION */}
      <section className="w-full bg-[#FAF8F4] py-8 px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
          {/* LEFT BOXES */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="flex flex-col items-center border bg-white p-6 rounded-xl w-64">
              <Image src={Coupon} alt="Earn" className="w-12 h-12 mb-3" />
              <p className="text-center font-semibold text-[#ffd232] text-lg">
                Earn Rewards Points <br /> On Purchase
              </p>
            </div>

            <div className="flex flex-col items-center border bg-white p-6 rounded-xl w-64">
              <Gift className="w-12 h-12 mb-3 text-amber-500" />
              <p className="text-center font-semibold text-[#ffd232] text-lg">
                Redeem Points
              </p>
            </div>
          </div>

          {/* POINTS BOX */}
          <div className="flex flex-col sm:flex-row justify-between border bg-white rounded-xl px-6 py-6 gap-6">
            <div className="flex items-center gap-2 text-[#ffd232] font-semibold">
              <Star className="w-6 h-6" />
              <span>Points Available</span>
            </div>

            <div className="flex flex-col items-center sm:items-end gap-1">
              <div className="flex items-center gap-2 bg-green-900 text-white px-5 py-1.5 rounded-full">
                <span className="text-xl font-semibold">{points}</span>
                <Image src={coin} alt="Coins" width={28} height={28} />
              </div>
              <p className="text-main text-lg">Total Rewards Coins</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS LIST */}
      <div className="w-full bg-white py-4 px-4 sm:px-6 lg:px-12">
        <div className="p-4 border rounded-lg shadow">
          <h4 className="text-[#ffd232] font-semibold mb-3">
            Available Offers
          </h4>

          {offers.length > 0 ? (
            offers.map((offer) => (
              <p key={offer._id} className="mb-3 text-sm">
                <Tag className="inline w-4 h-4 mr-1" />
                <span className="font-semibold">{offer.title}</span> — Buy{" "}
                {offer.items} item(s) & get {offer.discountPercent}% off (up to ₹
                {offer.uptoAmount})
              </p>
            ))
          ) : (
            <p className="text-gray-500">No offers available.</p>
          )}
        </div>
      </div>
    </>
  );
}
