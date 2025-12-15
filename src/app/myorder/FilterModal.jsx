"use client";
import React, { useState } from "react";
import { Check, Plus } from "lucide-react";
import Modal from "../Components/Modal";

/* ===== Static Status Options ===== */
const STATUS_LIST = ["On the way", "Delivered", "Cancelled", "Returned"];

const FilterModal = ({ isOpen, onClose, onApply }) => {
  const [status, setStatus] = useState("");

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full mx-auto bg-white rounded-2xl shadow-lg p-6 text-center">
        {/* Header */}
        <div className="bg-[#ffd232] text-white px-4 py-3 rounded-md text-lg font-heading flex items-center justify-between">
          <span>Filters</span>
          <span
            className="cursor-pointer text-sm underline"
            onClick={() => setStatus("")}
          >
            Clear Filters
          </span>
        </div>

        {/* Order Status */}
        <div className="mt-6 text-left">
          <p className="font-heading font-medium text-lg mb-3">
            Order Status
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {STATUS_LIST.map((item) => (
              <button
                key={item}
                onClick={() => setStatus(item)}
                className={`border rounded-full px-4 py-2 text-sm flex items-center justify-between transition
                  ${
                    status === item
                      ? "bg-[#ffd232] text-white border-[#ffd232]"
                      : "border-gray-300 text-[#ffd232] hover:bg-[#ffd232]/10"
                  }
                `}
              >
                <span>{item}</span>
                {status === item ? (
                  <Check size={14} />
                ) : (
                  <Plus size={12} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Order Time (Static UI Only) */}
        <div className="mt-6 text-left">
          <p className="font-heading font-medium text-lg mb-3">
            Order Time
          </p>

          <button
            type="button"
            className="border border-gray-300 text-[#ffd232] rounded-full px-4 py-2 text-sm w-full flex justify-between items-center hover:bg-[#ffd232] hover:text-white transition"
          >
            <span>Last 30 Days</span>
            <Plus size={12} />
          </button>
        </div>

        {/* Footer */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={onClose}
            className="w-1/2 bg-gray-200 text-[#ffd232] py-2.5 rounded-full text-sm font-medium hover:bg-gray-300 transition"
          >
            Cancel
          </button>

          <button
            onClick={() => onApply?.(status)}
            className="w-1/2 bg-[#ffd232] text-white py-2.5 rounded-full text-sm font-medium hover:bg-green-800 transition"
          >
            Apply
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
