import TopBanner from "@/app/Components/TopBanner";
import TopSelling from "@/app/Components/TopSelling";
import Image from "next/image";

import Category1 from "../../assets/Images/category/sub/venom.webp";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [
    { slug: "t-shirts" },
    { slug: "shirts" },
    { slug: "jeans" },
  ];
}
const CATEGORY_DATA = {
  "t-shirts": {
    name: "T-Shirts",
    image: Category1,
  },
  shirts: {
    name: "Shirts",
    image: Category1,
  },
  jeans: {
    name: "Jeans",
    image: Category1,
  },
};

export default function CategoryDetail({ params }) {
  const category = CATEGORY_DATA[params.slug];

  if (!category) {
    return (
      <main>
        <TopBanner Page="Category" />
        <p className="text-center py-10 text-lg">Category not found</p>
      </main>
    );
  }

  return (
    <main>
      <TopBanner Page={category.name} />

      <div className="px-8 py-5">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-10 items-stretch">

          <div className="flex justify-center items-center p-3 rounded-md bg-[#E9E9CF]">
            <Image
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="flex flex-col justify-start h-full">
            <h2 className="text-[#ffd232] font-[Oregano] text-[64px] mt-3">
              {category.name}
            </h2>

            <p className="text-black mb-4 leading-relaxed text-lg">
              At <span className="font-semibold text-[#f3bf03]">logo</span>, we
              create fashion that matches your attitude.
            </p>

            <p className="text-black mb-4 leading-relaxed text-lg">
              From trendy tees to casual essentials, crafted with premium fabrics.
            </p>

            <p className="text-black leading-relaxed text-lg">
              Fashion that lets you be YOU.
            </p>
          </div>

        </div>
      </div>

      <TopSelling />
    </main>
  );
}
