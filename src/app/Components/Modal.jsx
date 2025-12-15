import React from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    // Background overlay
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      {/* Modal container */}
      <div
        className="bg-white rounded-xl shadow-2xl w-11/12 md:w-6/12 relative animate-fadeIn
                   max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#ffd232]/50 scrollbar-track-transparent"
      >
        {/* Close Button */}
        <button
          className="absolute top-2 font-bold cursor-pointer right-3 text-gray-700 hover:text-red-500 transition"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
