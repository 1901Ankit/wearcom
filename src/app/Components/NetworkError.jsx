import React from "react";
import { WifiOff, RefreshCw } from "lucide-react";

const NetworkError = ({ onRetry }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#F8F8F8] text-[#ffd232] z-[9999]">
      <div className="flex flex-col items-center gap-4 text-center px-6">
        {/* Icon */}
        <div className="p-6 bg-[#ffd232]/10 rounded-full">
          <WifiOff className="w-16 h-16 text-[#ffd232]" />
        </div>

        {/* Message */}
        <h2 className="text-2xl font-semibold">Network Error</h2>
        <p className="text-gray-600 max-w-md">
          Oops! Something went wrong while connecting to the server. Please
          check your internet connection or try again.
        </p>

        {/* Retry Button */}
        <button
          onClick={onRetry}
          className="mt-4 flex items-center gap-2 bg-[#ffd232] text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
        >
          <RefreshCw className="w-5 h-5" />
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default NetworkError;
