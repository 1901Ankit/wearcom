"use client";
import React from "react";
import { CheckCheck, User } from "lucide-react";
import Modal from "../Components/Modal";

/* ===== STATIC ORDER DATA ===== */
const STATIC_ORDER = {
  _id: "ORD123456",
  createdAt: "2025-01-10T10:30:00Z",
  totalAmount: 1499,
  paymentStatus: "PAID",
  productStatus: "Cancelled",
  products: [
    { name: "T-Shirt", quantity: 1 },
    { name: "Shoes", quantity: 2 },
  ],
};

export default function OrderDetailModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="mt-5 p-4 bg-white">
        {/* Header */}
        <div className="pb-4 mb-4 flex justify-between bg-[#E9E9CF] p-4 border border-[#ffd232]">
          <div>
            <h3 className="text-sm font-medium">
              #{STATIC_ORDER._id.slice(-6)}
            </h3>
            <p className="text-sm text-[#475156]">
              {STATIC_ORDER.products.length} Products • Placed{" "}
              {new Date(STATIC_ORDER.createdAt).toLocaleString()}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[#ffd232] text-base font-semibold">
              ₹{STATIC_ORDER.totalAmount}
            </p>
            <span className="text-sm text-[#5C7E63]">
              Payment: {STATIC_ORDER.paymentStatus}
            </span>
          </div>
        </div>

        {/* Status */}
        <p className="mb-2 text-sm font-bold">
          Status: {STATIC_ORDER.productStatus}
        </p>
        <p className="mb-5 text-sm font-bold text-red-600">
          Order Cancelled
        </p>

        {/* Timeline */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center">
              ✓
            </div>
            <p className="text-sm mt-1 font-medium">
              Order Confirmed
            </p>
          </div>

          <div className="h-[2px] bg-green-700 flex-1 mx-2"></div>

          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center">
              ✓
            </div>
            <p className="text-sm mt-1 font-medium">
              Cancelled
            </p>
          </div>
        </div>

        {/* Activity */}
        <h4 className="font-medium text-lg mb-6 text-[#353535]">
          Order Activity
        </h4>

        <ul className="space-y-6 text-sm">
          <li className="flex gap-3">
            <span className="bg-[#D5F0D3] p-2 rounded">
              <CheckCheck size={18} className="text-[#2DB224]" />
            </span>
            <div>
              <p className="font-medium">
                Your order has been processed successfully.
              </p>
              <p className="text-gray-500">
                {new Date(STATIC_ORDER.createdAt).toLocaleString()}
              </p>
            </div>
          </li>

          <li className="flex gap-3">
            <span className="bg-[#D5EDFD] p-2 rounded">
              <User size={18} className="text-[#2DA5F3]" />
            </span>
            <div>
              <p className="font-medium">
                Awaiting delivery pickup confirmation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Modal>
  );
}
