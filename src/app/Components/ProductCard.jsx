"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, ShoppingCart, Star } from "lucide-react";
import Productimg from "../assets/Images/category/Category1.webp";

export default function ProductCard({ product, adding = false }) {
  const outOfStock = product?.availability === "Out of stock";

  const goToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link
      href={`/product/${product._id}`}
      className="relative bg-white rounded-2xl shadow-md flex flex-col h-full border-2 border-gray-100"
    >
      <div className="relative z-20">
        {/* Rating Badge */}
        <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1 backdrop-blur-sm shadow-md">
          <Star className="w-4 h-4 text-yellow-500" /> {product?.rating}
        </span>

        {/* Eye Icon */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
          <Eye className="w-4 h-4 text-gray-700" />
        </div>
      </div>
      {/* 🖼 Product Image */}
      <div className="relative h-[200px] bg-gray-100 rounded-t-2xl overflow-hidden">
        <img
          src={product?.images?.[0]?.url || Productimg.src}
          alt={product?.name}
          className="w-full h-full object-fill"
        />

        {/* 🔴 Out of Stock overlay */}
        {outOfStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
            <span className="text-white text-lg font-semibold uppercase">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* 📜 Content */}
      <div className="relative flex flex-col flex-grow px-4 pt-10 pb-6">
        {/* Circle Image */}
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20
         rounded-full border-4 border-white overflow-hidden z-10"
        >
          <Image
            src={Productimg}
            alt={product?.name}
            className="w-full h-full object-fill"
            width={100}
            height={100}
          />
        </div>

        <p className="text-xs text-black uppercase mb-1">
          {product?.productCategory}
        </p>

        <h2 className="text-[20px] font-[Oregano] text-black underline mb-1">
          {product?.name}
        </h2>

        <p className="text-gray-600 text-[13px]">{product?.description}</p>

        <div className="text-sm text-gray-700 mt-4 space-y-1 flex items-center justify-between mb-2">
          <div className="">
            <p className="font-medium capitalize">{product.productType}</p>
            <p className="text-gray-500 text-xs">
              {product.color} • {product.size} • {product.fabric}
            </p>
          </div>
          <div className="">
            <span className="text-xl font-bold text-black">
              ₹ {product.price}
            </span>
          </div>
        </div>
      </div>

      {/* 🛒 Cart Button */}
      <button
        onClick={goToCart}
        disabled={adding || outOfStock}
        className={`absolute -bottom-5 left-1/2 -translate-x-1/2 text-black p-3 rounded-full transition z-20
          ${
            outOfStock
              ? "bg-gray-400 cursor-not-allowed"
              : adding
              ? "bg-[#f3bf03] opacity-50 cursor-wait"
              : "bg-[#f3bf03]"
          }`}
      >
        {adding ? (
          <span className="text-xs px-1">⏳</span>
        ) : (
          <ShoppingCart className="w-5 h-5" />
        )}
      </button>

      {outOfStock && (
        <div className="absolute inset-0 bg-black/10 rounded-2xl pointer-events-none" />
      )}
    </Link>
  );
}
