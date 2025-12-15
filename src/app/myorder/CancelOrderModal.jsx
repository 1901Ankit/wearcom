"use client";
import React, { useState } from "react";
import { CircleXIcon, CheckCircle2 } from "lucide-react";
import Modal from "../Components/Modal";

const CancelOrderModal = ({ isOpen, onClose }) => {
  const [remarks, setRemarks] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleConfirm = () => {
    setError("");
    setSuccessMessage("");
    setLoading(true);

    // ✅ Dummy cancel simulation
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Order cancelled successfully (static).");

      // auto close after success
      setTimeout(() => {
        onClose();
        setRemarks("");
        setSuccessMessage("");
      }, 1200);
    }, 1500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-center">
        {/* Header */}
        <p className="mt-2 text-[#D26B62] text-xl sm:text-2xl font-semibold">
          Are you sure you want to cancel this order?
        </p>

        <p className="text-[#585656] text-xs sm:text-sm mt-2">
          Please let us know the reason for cancellation (optional).
        </p>

        {/* Remarks */}
        <div className="relative mt-6">
          <label className="absolute -top-3 left-4 text-xs sm:text-sm bg-white px-1 font-medium">
            Remarks
          </label>
          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            placeholder="Enter your feedback or issue..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-sm resize-none focus:outline-none"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-600 text-xs sm:text-sm flex items-center justify-center gap-1 mt-3">
            <CircleXIcon className="w-4 h-4" /> {error}
          </p>
        )}

        {/* Success */}
        {successMessage && (
          <p className="text-green-600 text-xs sm:text-sm flex items-center justify-center gap-1 mt-3">
            <CheckCircle2 className="w-4 h-4" /> {successMessage}
          </p>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={onClose}
            disabled={loading}
            className="w-full sm:w-1/2 bg-[#ffd232] text-white py-2.5 rounded-full text-sm font-medium hover:bg-green-800 transition"
          >
            No
          </button>

          <button
            onClick={handleConfirm}
            disabled={loading}
            className="w-full sm:w-1/2 bg-[#D26B62] text-white py-2.5 rounded-full text-sm font-medium hover:bg-[#b15852] transition"
          >
            {loading ? "Cancelling..." : "Yes, Cancel"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CancelOrderModal;
