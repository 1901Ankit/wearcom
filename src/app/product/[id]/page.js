"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart, Tag } from "lucide-react";
import coin from "../../assets/Images/home/coin.png"; // Use your local coin image
import ProductsSection from "@/app/Components/Product";
import product1 from "../../assets/Images/category/Category1.webp";
import TopBanner from "@/app/Components/TopBanner";

export default function ProductDetail() {
  // Static Product Data
  const product = {
    _id: "1",
    name: "Blue Denim Shirt",
    description:
      "Comfortable premium cotton. Tulsi Walnuts combine the crunch of premium walnuts with the wellness of tulsi Comfortable premium cotton. Tulsi Walnuts combine the crunch of premium walnuts with the wellness of tulsi...",
    price: 549,
    offerPrice: 500,
    stock: "In Stock",
    category: { name: "Topwear" },
    subcategory: { name: "T-Shirts" },
    images: product1,
    isInWishlist: false,
  };

  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(product.isInWishlist);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) of ${product.name} to cart!`);
  };

  const handleAddToWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  return (
    <>
      {/* Banner */}
      <TopBanner Page="Products" />
      {/* Product Details */}
      <div className="mx-auto px-8 py-4 w-full">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* IMAGE */}
          <div className="flex justify-between items-center bg-[#E9E9CF] p-3 rounded-md">
            <Image
              src={product.images}
              alt={product.name}

              className="rounded-md object-cover"
            />
          </div>
          {/* PRODUCT INFO */}
          <div className="w-full md:w-1/2">
            <p className="uppercase text-sm text-[#000] font-semibold">
              {product.category.name}
            </p>

            <h1 className="text-[60px] font-heading text-[#000]">
              {product.name}
            </h1>

            <p className="text-[#585656] mb-2 leading-relaxed text-justify text-base">
              {product.description}
            </p>

            <div className="flex items-center gap-3">
              <p className="text-2xl font-semibold text-[#000]">
                ₹{product.price}
              </p>
            </div>

            <div className="flex items-center space-y-1">
              <p className="text-[#f3bf03] font-bold text-base">
                Or Pay ₹{product.offerPrice} +
              </p>
              <p className="mx-2">
                <Image
                  src={coin}
                  alt="coin"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </p>
              <p>9</p>
            </div>

            <p className="text-[#5C7E63] font-medium text-base mt-2">
              Availability: {product.stock}
            </p>

            {/* Quantity & Actions */}
            <div className="flex items-center gap-3 mt-2">
              <div className="flex border border-[#ffd232] rounded-full px-2">
                <button
                  className="px-3 py-1 text-[#ffd232]"
                  onClick={decrement}
                >
                  -
                </button>
                <span className="px-3 py-1 font-medium">{quantity}</span>
                <button
                  className="px-3 py-1 text-[#ffd232]"
                  onClick={increment}
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-[#ffd232] text-[#000] px-6 py-2 rounded-full  transition"
              >
                Add to Cart
              </button>

              <div
                onClick={handleAddToWishlist}
                className={`rounded-full p-2 cursor-pointer transition-all duration-300 ${isInWishlist ? "bg-red-500" : "bg-[#ffd232]"
                  }`}
              >
                <Heart
                  size={22}
                  className={`transition-all duration-300 ${isInWishlist ? "fill-white text-white" : "text-black"
                    }`}
                />
              </div>
            </div>

            {/* Category info */}
            <div className="text-[#5C7E63] font-medium text-sm pt-3">
              <p className="mb-1">
                <strong>Category:</strong>{" "}
                <span className="text-black">{product.subcategory.name}</span>
              </p>
              <p>
                <strong>Products:</strong>{" "}
                <span className="text-black">{product.category.name}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-4">
          <h2 className="text-[52px] font-normal text-[#ffd232] py-3 text-center">
            Product Description
          </h2>

          <div className=" text-gray-700 leading-relaxed space-y-4">
            <p className="text-black mb-4 leading-relaxed text-sm sm:text-base md:text-lg font-body">
              Tulsi Walnuts combine the crunch of premium walnuts with the wellness of tulsi, offering a perfect balance of taste and health in every bite Tulsi Walnuts are a powerhouse of nutrition, blending the earthy crunch of handpicked walnuts with the natural goodness of sacred tulsi. This unique fusion not only delights your taste buds but also supports immunity, heart health, and overall wellness in every bite. Rich in antioxidants, omega-3 fatty acids, and the healing properties of tulsi, these walnuts are a wholesome snack for mindful eaters. Perfect for daily snacking, gifting, or adding to your recipes, Tulsi Walnuts bring together health and flavor in the most natural way.


            </p>

            <p className="text-black mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              Tulsi Walnuts combine the crunch of premium walnuts with the wellness of tulsi, offering a perfect balance of taste and health in every bite Tulsi Walnuts are a powerhouse of nutrition, blending the earthy crunch of handpicked walnuts with the natural goodness of sacred tulsi. This unique fusion not only delights your taste buds but also supports immunity, heart health, and overall wellness in every bite. Rich in antioxidants, omega-3 fatty acids, and the healing properties of tulsi, these walnuts are a wholesome snack for mindful eaters. Perfect for daily snacking, gifting, or adding to your recipes, Tulsi Walnuts bring together health and flavor in the most natural way.
            </p>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <ProductsSection />
    </>
  );
}
