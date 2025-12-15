"use client";
import React from "react";
import Image from "next/image";
import { CircleX, ShoppingCart } from "lucide-react";
import TopBanner from "../Components/TopBanner";
import product1 from "../assets/Images/category/Category1.webp";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Blue Denim Shirt",
      price: 549,
      stock: 10,
      image:
product1    },
    {
      id: 2,
      name: "Black Oversized T-shirt",
      price: 499,
      stock: 0,
      image:
product1    },
  ];

  return (
    <>
      {/* Banner Section */}
      <TopBanner Page={"Wishlist"} />

      {/* Wishlist Table */}
      <div className="mx-auto px-4 py-5">
        <div className="bg-[#ffd232] text-black p-4 py-5 rounded-md mb-4 text-lg font-normal font-body">
          Wishlist Updated
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse border border-gray-400">
            <thead className="bg-[#E9E9CF]">
              <tr className="text-[#000] font-heading text-lg leading-normal border">
                <th className="p-4">
                  <input type="checkbox" />
                </th>
                <th className="p-3"></th>
                <th className="p-3">Image</th>
                <th className="p-3">Product Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Stock Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {wishlistItems.map((product) => (
                <tr key={product.id} className="border hover:bg-gray-50">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>

                  <td className="p-3 cursor-pointer">
                    <CircleX className="text-[#000]" />
                  </td>

                  <td className="p-3 border">
                    <Image
                      src={product.image}
                      width={96}
                      height={56}
                      className="w-24 h-14 rounded-md object-cover border-2 border-[#ffd232]"
                      alt={product.name}
                    />
                  </td>

                  <td className="p-3 border text-[#000] font-body font-medium text-base">
                    {product.name}
                  </td>

                  <td className="p-3 border text-[#000] font-body font-medium text-base">
                    ₹ {product.price}
                  </td>

                  <td
                    className={`p-3 border font-body font-medium text-base ${product.stock === 0
                        ? "text-red-500"
                        : "text-[#000]"
                      }`}
                  >
                    {product.stock === 0 ? "OUT OF STOCK" : "IN STOCK"}
                  </td>

                  <td className="p-3">
                    <button
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm 
                        ${product.stock === 0
                          ? "bg-[#E9E9CF] text-[#000] cursor-not-allowed"
                          : "bg-[#ffd232] text-black "
                        }`}
                    >
                      Add To Cart <ShoppingCart size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
