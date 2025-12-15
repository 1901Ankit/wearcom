import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter } from "react-icons/fa";
import { Search, X } from 'lucide-react';

function Mobileserch() {
    const [showMobileFilters, setShowMobileFilters] = useState(false);
  return (
    <>
      <div className="md:hidden flex items-center justify-between w-full mt-2 px-4 gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search products..."
           
           
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMobileFilters(true)}
          className="flex items-center gap-2 px-4 py-3 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200"
        >
          <FaFilter /> Filters
        </motion.button>
      </div>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setShowMobileFilters(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Product Type */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">
                    Shop by Products
                  </h4>
                  {filterOptions.products.map((item, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 mb-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="productType"
                        checked={selectedProductType === item}
                        onChange={() => setSelectedProductType(item)}
                      />
                      {item}
                    </label>
                  ))}
                </div>

                {/* Category */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">Category</h4>
                  {filterOptions.categories.map((item, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 mb-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === item}
                        onChange={() => setSelectedCategory(item)}
                      />
                      {item}
                    </label>
                  ))}
                </div>

                {/* Price */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">Price Range</h4>
                  {filterOptions.priceRanges.map((item, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 mb-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPrice === item}
                        onChange={() => setSelectedPrice(item)}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Mobileserch