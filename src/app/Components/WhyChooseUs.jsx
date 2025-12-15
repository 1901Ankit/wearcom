import Image from "next/image";
import Link from "next/link";
import shirt from "../assets/Images/category/Category1.webp";

export default function OfferBanner() {
  return (
    <section className="py-10  w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-4 w-full">
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <Image
            src={shirt}
            alt="Offer Shirt Left"
            className="w-52 md:w-64 lg:w-72 object-contain"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="text-center px-4">
          <h2 className="text-4xl md:text-6xl font-baunk font-normal text-gray-900 leading-tight">
            BUY 1 GET 1 <span className="block">FREE</span>
          </h2>

          <p className="text-gray-600 mt-4 text-lg md:text-xl">
            Double the Style. Zero Extra Cost.
          </p>

          <Link href="/product">
            <button
              className="mt-6 bg-black text-white px-8 py-3 rounded-md font-semibold 
              hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-md"
            >
              Shop Now
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src={shirt}
            alt="Offer Shirt Right"
            className="w-52 md:w-64 lg:w-72 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
