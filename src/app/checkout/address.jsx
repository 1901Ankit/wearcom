"use client";
import React, { useEffect, useState } from "react";
import { Info, PlusCircle } from "lucide-react";

import Loader from "../Components/Loader";
import AddAddressModal from "./AddAddressModal";

function Address({ onAddressSelect, onGstChange }) {

  return (
    <div className="px-8 py-4">
      <div className="bg-[#ffd232] text-white p-4 py-5 rounded-md mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <Info className="mr-2" />
          <span>Add GST Number</span>
        </div>
      </div>
      <div className="relative my-8">
        <label className="absolute -top-4 left-3 bg-white text-[#ffd232] text-sm px-1">
          GST No
        </label>
        <input
          type="text"
          placeholder="Enter GST number (optional)"
          value={gstNumber}
          onChange={(e) => setGstNumber(e.target.value)}
          className="w-96 px-5 py-2 border border-[#ffd232] rounded-full text-sm focus:outline-none"
        />
      </div>
      {/* Header Section */}
      <div className="bg-[#ffd232] text-white p-4 py-5 rounded-md mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <Info className="mr-2" />
          <span>Delivery Address</span>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1 bg-white text-[#ffd232] text-sm px-3 py-1.5 rounded-md hover:bg-gray-100 transition"
        >
          <PlusCircle size={16} />
          Add New
        </button>
      </div>
      {/* Address List */}
      <div className="space-y-4">
        {displayUser?.locations?.length > 0 ? (
          displayUser.locations.map((loc) => (
            <div
              key={loc._id}
              className={`bg-white shadow-md rounded-lg p-5 border transition-all ${
                loc.isPrimary ? "border-[#ffd232]" : "border-gray-200"
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    id={loc._id}
                    name="address"
                    checked={selectedAddressId === loc._id}
                    onChange={() => handleSelect(loc)}
                    className="accent-[#ffd232] w-4 h-4 mt-1 cursor-pointer"
                  />

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-[#ffd232] font-medium text-base">
                        {loc.firstName} {loc.lastName}
                      </p>
                    </div>

                    <p className="text-[#ffd232] font-medium text-sm mb-1">
                      {displayUser.phone}
                    </p>

                    <p className="text-gray-700 text-sm leading-relaxed">
                      {loc.address}, {loc.city}, {loc.state} - {loc.zipCode},{" "}
                      {loc.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No addresses found.</p>
        )}
      </div>
      {showModal && (
        <AddAddressModal
          onClose={() => setShowModal(false)}
          onSave={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default Address;
