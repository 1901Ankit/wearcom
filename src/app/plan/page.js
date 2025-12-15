"use client";
import { Check, Zap } from "lucide-react";
import TopBanner from "../Components/TopBanner";
import bgimage from "../assets/Images/home/Bg.png";

export default function PricingPlans() {
  const plans = [
    {
      title: "Monthly Plan",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      price: "₹199 / Month",
      features: Array(7).fill("Lorem Ipsum is simply dummy text of the.."),
      buttonColor: "bg-green-700 hover:bg-green-800",
      borderColor: "border-green-700",
      textColor: "text-green-700",
      bgColor: "#f7f7eb",
    },
    {
      title: "Annual Plan",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      price: "₹789 / Year",
      features: Array(7).fill("Lorem Ipsum is simply dummy text of the.."),
      buttonColor: "bg-green-700 hover:bg-green-800",
      borderColor: "border-transparent",
      textColor: "text-green-700",
      bgColor: "bg-white",
    },
  ];

  return (
    <>
      <TopBanner Page={"Subscription Plan"} />
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-6  bg-white "  style={{
              backgroundImage: `url(${bgimage.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top left",
              backgroundSize: "300px auto",
            }}>
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`w-full md:w-96 rounded-2xl border ${plan.borderColor} shadow-sm ${plan.bgColor} p-6`}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-main rounded-full">
                <Zap className="w-4 h-4 text-white " />
              </div>
              <h2 className={`font-semibold text-2xl ${plan.textColor}`}>
                {plan.title.split(" ")[0]}{" "}
                <span className="text-orange-500">
                  {plan.title.split(" ")[1]}
                </span>
              </h2>
            </div>

            <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
            <p className="text-2xl text-main font-semibold mb-4">{plan.price}</p>

            <button
              className={`w-full text-black border  rounded-full py-2 mb-6 transition`}
            >
              Get Plan
            </button>

            <ul className="space-y-2">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-sm text-gray-600"
                >
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
