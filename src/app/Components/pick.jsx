import Image from "next/image";
import Link from "next/link";
import shirt from "../assets/Images/category/Category1.webp";

const products = [
  {
    id: 1,
    title: "Oversized",
    image: shirt,
  },
  {
    id: 2,
    title: "Oversized",
    image: shirt,
  },
  {
    id: 3,
    title: "Oversized",
    image: shirt,
  },
  {
    id: 4,
    title: "Oversized",
    image: shirt,
  },
];

export default function HotPicksMotion() {
  return (
    <section className=" bg-white">
      <h2 className="text-center text-xl md:text-2xl font-semibold mb-10">
        HOT PICKS IN MOTION
      </h2>

      <div className="max-w-9xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl overflow-hidden h-[480px] group shadow-lg"
          >
            {/* IMAGE */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-6 w-full text-center text-white">
              <p className="text-lg font-medium font-baunk mb-4 group-hover:-translate-y-0.5 transition">
                {item.title}
              </p>
              <Link href="/product">
                <button className="bg-[#f3bf03] text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
