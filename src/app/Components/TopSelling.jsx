"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import ProductCard from "./ProductCard";
import product1 from "../assets/Images/category/Category1.webp";

function TopSelling() {
  const swiperRef = useRef(null);
  const categories = [
    { _id: "1", name: "T-Shirts" },
    { _id: "2", name: "Shirts" },
    { _id: "3", name: "Jeans" },
    { _id: "4", name: "Joggers" },
  ];
  const allSubcategories = {
    1: [
      { _id: "1a", name: "Oversized" },
      { _id: "1b", name: "Printed" },
      { _id: "1c", name: "Solid" },
      { _id: "1d", name: "Casual" },
      { _id: "1e", name: "Formal" },
    ],
    2: [
      { _id: "1a", name: "Oversized" },
      { _id: "1b", name: "Printed" },
      { _id: "1c", name: "Solid" },
      { _id: "1d", name: "Casual" },
      { _id: "1e", name: "Formal" },
    ],
    3: [
      { _id: "1a", name: "Oversized" },
      { _id: "1b", name: "Printed" },
      { _id: "1c", name: "Solid" },
      { _id: "1d", name: "Casual" },
      { _id: "1e", name: "Formal" },
    ],
    4: [
      { _id: "1a", name: "Oversized" },
      { _id: "1b", name: "Printed" },
      { _id: "1c", name: "Solid" },
      { _id: "1d", name: "Casual" },
      { _id: "1e", name: "Formal" },
    ],
  };

  const allProducts = [
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1a",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p2",
      name: "White Printed Tee",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1a",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p6",
      name: "White Plain Tee",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1a",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p7",
      name: "Casual Oversized Tee",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1a",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1b",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1b",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1b",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1b",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1c",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1c",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1c",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1c",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1d",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1d",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1d",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1e",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1e",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Black Oversized T-Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "1",
      subcategory: "1d",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Blue Denim Shirt",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "2",
      subcategory: "2a",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
    {
      _id: "p1",
      name: "Slim Fit Jeans",
      description:
        "Plain Tshirts for Men unbeatable comfort, effortless style, and lasting quality. ",
      category: "3",
      subcategory: "3a",
      price: 549,
      productType: "Oversized T-shirt",
      productCategory: "Topwear",
      color: "Beige",
      size: "M",
      fabric: "100% Cotton",
      availability: "In stock",
      gender: "Men",
      character: "Marvel",
      pattern: "Printed",
      patternCoverage: "Front",
      rating: 4.6,
      image: product1,
    },
  ];

  // ✔ Default category & subcategory
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeSubcategory, setActiveSubcategory] = useState(
    allSubcategories[categories[0]._id][0]
  );

  // ✔ Filter Products — ALWAYS ONLY 4 ITEMS
  const filteredProducts = allProducts
    .filter(
      (p) =>
        p.category === activeCategory._id &&
        p.subcategory === activeSubcategory._id
    )
    .slice(0, 4); // 👉 ALWAYS limit to 4

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="relative z-10 px-4 md:px-12 py-8">
        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap gap-4 mb-8 items-center justify-between w-full">
          {categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => {
                setActiveCategory(cat);
                setActiveSubcategory(allSubcategories[cat._id][0]);
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex-1 min-w-[200px] ${
                activeCategory._id === cat._id
                  ? "bg-[#f3bf03] text-black shadow-lg"
                  : "bg-white text-black border border-[#f3bf03]  "
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* HEADING */}
        {/* <h1 className="text-4xl md:text-5xl lg:text-[53px] font-semibold text-black py-4 text-center font-heading">
          {activeCategory.name}
        </h1> */}

        {/* SUBCATEGORIES */}
        <div className="flex flex-wrap justify-between mb-10 gap-6 w-full">
          {allSubcategories[activeCategory._id].map((sub) => (
            <button
              key={sub._id}
              onClick={() => setActiveSubcategory(sub)}
              className={`px-4 py-3 transition-all duration-300 text-center font-[Oregano] text-2xl md:text-[32px] leading-[100%] ${
                activeSubcategory._id === sub._id
                  ? "text-black border-b-4 border-[#f3bf03] font-semibold"
                  : "text-black border-b-4 border-transparent"
              }`}
            >
              {sub.name}
            </button>
          ))}
        </div>

        {/* DESCRIPTION */}
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Premium clothing styles inspired by Beyoung — stylish, high-quality
          and affordable. Premium clothing styles inspired by Beyoung — stylish,
          high-quality and affordable. Premium clothing styles inspired by
          Beyoung — stylish, high-quality and affordable.
        </p>

        {/* PRODUCT SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          slidesPerView={4}
          speed={900}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          pagination={false}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
          className="pb-10"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product._id}>
              <div className="transition-transform duration-300 pb-6">
                <div className="w-full md:max-w-[280px] h-[440px] bg-white rounded-3xl shadow-lg overflow-visible relative flex flex-col justify-between">
                  <ProductCard product={product} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* VIEW MORE */}
        <div className="flex justify-center mt-4">
          <Link href="/product">
            <button className="flex items-center gap-2 px-8 py-3 bg-[#f3bf03] rounded-full text-black font-heading text-lg  transition-all duration-300 hover:scale-105 shadow-lg">
              View More
              <ChevronRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopSelling;
