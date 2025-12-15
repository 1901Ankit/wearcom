"use client";
import Image from "next/image";
import TopBanner from "../Components/TopBanner";
import banner from "../assets/Images/home/ban.png";
import bgimage from "../assets/Images/home/ban.png";

export default function Offer() {


    return (
        <>
            <TopBanner Page={"Offer Details"} />
            <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-4  bg-white " style={{
                backgroundImage: `url(${bgimage.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left",
                backgroundSize: "300px auto",
            }}>
                <div className="p-4 md:p-10">

                    {/* MAIN BANNER */}
                    <div className="relative w-full">
                        <Image
                            src={banner}
                            alt="Offer Banner"
                            className="w-full h-auto rounded-xl object-cover"
                        />

                        {/* OFFER BOX */}
                        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-transparent backdrop-blur-xs
                         rounded-xl border border-white p-4  text-center text-white shadow-xl max-w-[270px]">
                            <h2 className="text-2xl font-normal font-heading">Offer Related</h2>
                            <p className="text-4xl font-normal mt-4 font-body">₹ 649</p>
                            <p className="mt-4 text-base leading-relaxed font-heading tracking-wider">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry
                            </p>
                        </div>
                    </div>

                    {/* BULLET LIST */}
                    <div className="mt-10">
                        <ul className="space-y-4">
                            {Array(8)
                                .fill(0)
                                .map((_, i) => (
                                    <li key={i} className="flex items-start gap-3 font-body font-normal text-black text-base">
                                        <span className="w-3 h-3 bg-black rounded-full mt-2"></span>
                                        <span>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s
                                        </span>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    {/* FOOTER INFO BOX */}
                    <div className="bg-[#E3D9F8] text-[#ffd232] font-body tracking-wide p-4 rounded-xl mt-10 flex items-start gap-3 border border-purple-200">
                        <span className="text-xl">🛈</span>
                        <p>
                            Each member is allowed to have 1 offer for this membership per month.{" "}
                            <a href="#" className="underline font-medium">
                                Terms and Conditions
                            </a>{" "}
                            &{" "}
                            <a href="#" className="underline font-medium">
                                Contact Us
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
