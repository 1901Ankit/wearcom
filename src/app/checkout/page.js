"use client";
import React, { useState } from "react";
import TopBanner from "../Components/TopBanner";
import Ordersummary from "./ordersummary";

/* ===== STATIC ADDRESS DATA ===== */
const STATIC_ADDRESSES = [
  {
    id: 1,
    name: "John Doe",
    address: "123 Main Street, New Delhi, India",
    phone: "9999999999",
  },
  {
    id: 2,
    name: "Jane Smith",
    address: "456 Park Avenue, Mumbai, India",
    phone: "8888888888",
  },
];

const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState(STATIC_ADDRESSES[0]);
  const [gstNumber, setGstNumber] = useState("22AAAAA0000A1Z5");

  /* ===== STATIC CHECKOUT INFO ===== */
  const staticCheckout = {
    offerCode: "FLAT10",
    shippingMethod: "STANDARD",
    applyPoints: true,
    breakdown: {
      finalAmount: 1297,
      shippingCost: 50,
      discountsApplied: [{ type: "OFFER", code: "FLAT10", amount: 150 }],
    },
  };

  return (
    <>
      <TopBanner Page={"Checkout"} />

      {/* Address Section */}
      <div className="container-fluid max-w-6xl mx-auto my-6 p-4 bg-[#ffd232] rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Select Address</h2>
        {STATIC_ADDRESSES.map((addr) => (
          <div
            key={addr.id}
            className={`p-4 mb-3 rounded border cursor-pointer ${
              selectedAddress?.id === addr.id
                ? "border-green-700 bg-green-50"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedAddress(addr)}
          >
            <p className="font-medium">{addr.name}</p>
            <p className="text-sm">{addr.address}</p>
            <p className="text-sm">{addr.phone}</p>
          </div>
        ))}

        {/* GST Input */}
        <div className="mt-4">
          <label className="block mb-2 font-medium">GST Number</label>
          <input
            type="text"
            value={gstNumber}
            onChange={(e) => setGstNumber(e.target.value)}
            className="w-full px-4 py-2 border border-green-700 rounded-md"
          />
        </div>
      </div>

      {/* Ordersummary */}
      <Ordersummary
        selectedAddress={selectedAddress}
        gstNumber={gstNumber}
        offerCode={staticCheckout.offerCode}
        shippingMethod={staticCheckout.shippingMethod}
        breakdown={staticCheckout.breakdown}
        applyPoints={staticCheckout.applyPoints}
      />
    </>
  );
};

export default Checkout;
