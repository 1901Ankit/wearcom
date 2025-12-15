"use client";
import React, { useState, useMemo } from "react";
import ProductCard from "../Components/ProductCard";
import TopBanner from "../Components/TopBanner";
import product1 from "../assets/Images/category/Category1.webp";
import { Search, X } from "lucide-react";

// Sample data
const productsData = [
  {
    id: 1,
    name: "Blue Denim Shirt",
    description: "Comfortable premium cotton.",
    price: 549,
    category: "T-Shirts",
    productType: "Oversized Tshirt",
    productCategory: "Topwear",
    color: "Lilac",
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
    id: 2,
    name: "Blue Denim Shirt",
    description: "Comfortable premium cotton.",
    price: 549,
    category: "T-Shirts",
    productType: "Oversized Tshirt",
    productCategory: "Topwear",
    color: "Lilac",
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
    id: 3,
    name: "Blue Denim Shirt",
    description: "Comfortable premium cotton.",
    price: 549,
    category: "T-Shirts",
    productType: "Oversized Tshirt",
    productCategory: "Topwear",
    color: "Lilac",
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
    id: 4,
    name: "Blue Denim Shirt",
    description: "Comfortable premium cotton.",
    price: 549,
    category: "T-Shirts",
    productType: "Oversized Tshirt",
    productCategory: "Topwear",
    color: "Lilac",
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
    id: 5,
    name: "Blue Denim Shirt",
    description: "Comfortable premium cotton.",
    price: 549,
    category: "T-Shirts",
    productType: "Oversized Tshirt",
    productCategory: "Topwear",
    color: "Lilac",
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
    id: 6,
    name: "Blue Denim Shirt",
    description: "Comfortable premium cotton.",
    price: 549,
    category: "T-Shirts",
    productType: "Oversized Tshirt",
    productCategory: "Topwear",
    color: "Lilac",
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
    id: 7,
    name: "Blue Denim Shirt",
    description: "Comfortable premium cotton.",
    price: 549,
    category: "T-Shirts",
    productType: "Oversized Tshirt",
    productCategory: "Topwear",
    color: "Lilac",
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
    id: 8,
    name: "Blue Denim Shirt",
    description: "Comfortable premium cotton.",
    price: 549,
    category: "T-Shirts",
    productType: "Oversized Tshirt",
    productCategory: "Topwear",
    color: "Lilac",
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
    id: 9,
    name: "Blue Denim Shirt",
    description: "Comfortable premium cotton.",
    price: 549,
    category: "T-Shirts",
    productType: "Oversized Tshirt",
    productCategory: "Topwear",
    color: "Lilac",
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

export default function Products() {
  // SEARCH
  const [search, setSearch] = useState("");
  const [topSearch, setTopSearch] = useState("");

  // FILTERS
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFabric, setSelectedFabric] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [selectedPattern, setSelectedPattern] = useState("");
  const [selectedPatternCoverage, setSelectedPatternCoverage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProductType, setSelectedProductType] = useState("");
  const [selectedProductCategory, setSelectedProductCategory] = useState("");

  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });

  // ACTIVE FILTERS
  const activeFilters = [
    { label: "Size", value: selectedSize, clear: () => setSelectedSize("") },
    { label: "Color", value: selectedColor, clear: () => setSelectedColor("") },
    { label: "Fabric", value: selectedFabric, clear: () => setSelectedFabric("") },
    { label: "Availability", value: selectedAvailability, clear: () => setSelectedAvailability("") },
    { label: "Gender", value: selectedGender, clear: () => setSelectedGender("") },
    { label: "Character", value: selectedCharacter, clear: () => setSelectedCharacter("") },
    { label: "Pattern", value: selectedPattern, clear: () => setSelectedPattern("") },
    { label: "Pattern Coverage", value: selectedPatternCoverage, clear: () => setSelectedPatternCoverage("") },
    { label: "Category", value: selectedCategory, clear: () => setSelectedCategory("") },
    { label: "Product Type", value: selectedProductType, clear: () => setSelectedProductType("") },
    { label: "Product Category", value: selectedProductCategory, clear: () => setSelectedProductCategory("") },
  ].filter((f) => f.value !== "");

  const handleTopSearch = () => setSearch(topSearch);

  // FILTER LOGIC
  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const match = (value, key) => value === "" || p[key] === value;

      return (
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        match(selectedSize, "size") &&
        match(selectedColor, "color") &&
        match(selectedFabric, "fabric") &&
        match(selectedAvailability, "availability") &&
        match(selectedGender, "gender") &&
        match(selectedCharacter, "character") &&
        match(selectedPattern, "pattern") &&
        match(selectedPatternCoverage, "patternCoverage") &&
        match(selectedCategory, "category") &&
        match(selectedProductType, "productType") &&
        match(selectedProductCategory, "productCategory") &&
        p.price >= priceRange.min &&
        p.price <= priceRange.max
      );
    });
  }, [
    search,
    selectedSize,
    selectedColor,
    selectedFabric,
    selectedAvailability,
    selectedGender,
    selectedCharacter,
    selectedPattern,
    selectedPatternCoverage,
    selectedCategory,
    selectedProductType,
    selectedProductCategory,
    priceRange,
  ]);

  return (
    <main>
      <TopBanner Page="Products" />

      {/* TOP SEARCH */}
      <div className="p-4 hidden md:block">
        <div className="flex justify-between items-center">
          <div className="relative w-[30%]">
            <input
              value={topSearch}
              onChange={(e) => setTopSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full px-5 py-2 border rounded-full"
            />
            <button
              onClick={handleTopSearch}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-700 text-white p-2 rounded-full"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ACTIVE FILTERS */}
        {activeFilters.length > 0 && (
          <div className="bg-[#F2F3E2] mt-4 p-3 rounded-md flex flex-wrap gap-3">
            <span className="font-medium">Active Filters:</span>

            {activeFilters.map((f, i) => (
              <div key={i} className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border">
                {f.label}: {f.value}
                <X className="w-4 h-4 cursor-pointer" onClick={f.clear} />
              </div>
            ))}

            <button
              onClick={() => activeFilters.forEach((f) => f.clear())}
              className="text-red-600 ml-auto"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* MAIN LAYOUT */}
      <section className="p-2 flex gap-10">

        <aside className="w-full md:w-1/5 bg-white  p-2 space-y-4">

          <h2 className="text-[18px] font-bold text-gray-700 uppercase">Filters</h2>

          {/* SIZE */}
          <Accordion title="Size">
            {["S", "M", "L", "XL", "XXL"].map((s) => (
              <FilterCheckbox key={s} label={s} checked={selectedSize === s} onClick={() => setSelectedSize(s)} />
            ))}
          </Accordion>

          {/* PRICE */}
          <Accordion title="Price">
            <p className="text-[13px] text-gray-600">Selected Price Range</p>
            <p className="font-semibold">{priceRange.min} - {priceRange.max}</p>
            <input
              type="range"
              min="0"
              max="2000"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
              className="w-full accent-gray-600 mt-2"
            />
          </Accordion>

          {/* COLOR */}
          <Accordion title="Color">
            {[
              { name: "Lilac", color: "#D8C5E0" },
              { name: "Navy", color: "#001F3F" },
              { name: "Royal Blue", color: "#4169E1" },
              { name: "Sky Blue", color: "#87CEEB" },
              { name: "Aqua Blue", color: "#00FFFF" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-2 mb-2">
                <span
                  className="w-5 h-5 rounded-full border"
                  style={{ background: c.color }}
                ></span>
                <FilterCheckbox
                  label={c.name}
                  checked={selectedColor === c.name}
                  onClick={() => setSelectedColor(c.name)}
                />
              </div>
            ))}
            <button className="text-green-700 text-[13px] font-semibold">SHOW MORE</button>
          </Accordion>

          {/* FABRIC */}
          <Accordion title="Fabric">
            <FilterCheckbox
              label="100% Cotton"
              checked={selectedFabric === "100% Cotton"}
              onClick={() => setSelectedFabric("100% Cotton")}
            />
          </Accordion>

          {/* AVAILABILITY */}
          <Accordion title="Availability">
            <FilterCheckbox
              label="In stock"
              checked={selectedAvailability === "In stock"}
              onClick={() => setSelectedAvailability("In stock")}
            />
            <FilterCheckbox
              label="Out of stock"
              checked={selectedAvailability === "Out of stock"}
              onClick={() => setSelectedAvailability("Out of stock")}
            />
          </Accordion>

          {/* GENDER */}
          <Accordion title="Gender">
            <FilterCheckbox
              label="Men"
              checked={selectedGender === "Men"}
              onClick={() => setSelectedGender("Men")}
            />
          </Accordion>

          {/* CHARACTER */}
          <Accordion title="Character">
            {["Spiderman", "Thor", "Marvel", "Disney"].map((char) => (
              <FilterCheckbox
                key={char}
                label={char}
                checked={selectedCharacter === char}
                onClick={() => setSelectedCharacter(char)}
              />
            ))}
          </Accordion>

          {/* PATTERN */}
          <Accordion title="Pattern">
            {["Printed", "Puff Print"].map((p) => (
              <FilterCheckbox
                key={p}
                label={p}
                checked={selectedPattern === p}
                onClick={() => setSelectedPattern(p)}
              />
            ))}
          </Accordion>

          {/* PATTERN COVERAGE */}
          <Accordion title="Pattern Coverage">
            {["Back", "Front", "All Over"].map((pc) => (
              <FilterCheckbox
                key={pc}
                label={pc}
                checked={selectedPatternCoverage === pc}
                onClick={() => setSelectedPatternCoverage(pc)}
              />
            ))}
          </Accordion>

          {/* CATEGORY */}
          <Accordion title="Category">
            <FilterCheckbox
              label="T-Shirts"
              checked={selectedCategory === "T-Shirts"}
              onClick={() => setSelectedCategory("T-Shirts")}
            />
          </Accordion>

          {/* PRODUCT TYPE */}
          <Accordion title="Product Type">
            <FilterCheckbox
              label="T-shirt"
              checked={selectedProductType === "T-shirt"}
              onClick={() => setSelectedProductType("T-shirt")}
            />
            <FilterCheckbox
              label="Oversized Tshirt"
              checked={selectedProductType === "Oversized Tshirt"}
              onClick={() => setSelectedProductType("Oversized Tshirt")}
            />
          </Accordion>

          {/* PRODUCT CATEGORY */}
          <Accordion title="Product Category">
            <FilterCheckbox
              label="Topwear"
              checked={selectedProductCategory === "Topwear"}
              onClick={() => setSelectedProductCategory("Topwear")}
            />
          </Accordion>
        </aside>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5 h-fit">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">No products found.</p>
          )}
        </div>
      </section>
    </main>
  );
}

/* -------------------------------- COMPONENTS -------------------------------- */

function Accordion({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b pb-3">
      <div
        className="flex items-center justify-between cursor-pointer mb-2"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-[14px] font-semibold uppercase">{title}</h3>
        <span className="text-[20px]">{open ? "▲" : "▼"}</span>
      </div>

      {open && <div className="pl-1 space-y-2">{children}</div>}
    </div>
  );
}

function FilterCheckbox({ label, checked, onClick }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer text-[14px]">
      <input type="checkbox" checked={checked} onChange={onClick} />
      {label}
    </label>
  );
}
