import Image from "next/image";
import Link from "next/link";
import shirt from "../assets/Images/category/kid.webp";

export default function KidsHero() {
  return (
    <section className=" bg-white">
      <div className="grid lg:grid-cols-2 items-center">
        {/* Left Content */}
        <div className="px-8  py-20 text-center lg:text-center bg-[#EFEFEF]">
          <p className="text-black font-medium text-xl mb-3 tracking-wide">
            Collection Of Cothing
          </p>

          <h1 className="text-5xl  font-bold text-gray-900 leading-snug mb-5">
            Kids Wear <br /> With Perfect Fit
          </h1>

          <p className="text-black font-medium text-sm mb-8">
            Huge collection of mens Wear offer price & discounts.
          </p>

          <Link href="/product">
            <button className="bg-[#ffd232] text-black px-6 py-3 text-s rounded-sm transition-all">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative h-full ">
          <Image
            src={shirt}
            alt="Kids Eyewear"
            fill
            className="object-cover h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
