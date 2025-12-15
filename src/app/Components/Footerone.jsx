import Image from "next/image";
import loginimage from "../assets/Images/Loginimage.png";
import quality from "../assets/Images/quality.png";
import rewards from "../assets/Images/rewards.png";
import fotterbg1 from "../assets/Images/leftbg.png";
import repeat from "../assets/Images/repeat.png";
import Logo from "../assets/Images/Logo.png";

const Footerone = () => {
  return (
    <div className="w-full bg-[#ffd232] text-white rounded-t-2xl py-10 px-4 sm:px-6 lg:px-16 relative overflow-hidden">
      {/* Left Background */}
      <div
        className="absolute hidden lg:block left-0 top-0 h-full w-40 bg-contain bg-no-repeat opacity-40 pointer-events-none rotate-90 z-0"
        style={{
          backgroundImage: `url(${loginimage.src})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "right center",
        }}
      />

      {/* Main Grid Content */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center text-center">
        <div className="flex flex-col items-center">
          <Image
            src={quality}
            alt="Quality Guaranteed"
            width={80}
            height={80}
            className="object-contain w-16 sm:w-20 md:w-24"
          />
          <p className="mt-3 text-sm sm:text-base md:text-xl lg:text-2xl font-normal font-heading leading-snug text-secondary ">
            100% Quality <br /> Guaranteed
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={rewards}
            alt="Rewards"
            width={80}
            height={80}
            className="object-contain w-16 sm:w-20 md:w-24"
          />
          <p className="mt-3 text-sm sm:text-base md:text-xl lg:text-2xl font-normal font-heading leading-snug text-secondary ">
            Rewards Points On <br /> Every Purchase
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={repeat}
            alt="Repeat Order"
            width={80}
            height={80}
            className="object-contain w-16 sm:w-20 md:w-24"
          />
          <p className="mt-3 text-sm sm:text-base md:text-xl lg:text-2xl font-normal font-heading leading-snug text-secondary ">
            Repeat Order & Discount <br /> 1x + 2x Benefits / Points
          </p>
        </div>

        <div className="flex flex-col items-center mt-4 sm:mt-0">
          <Image
            src={Logo}
            alt="Zubeka Logo"
            width={200}
            height={100}
            className="object-contain w-32 sm:w-40 md:w-48"
          />
        </div>
      </div>

      {/* Right Background */}
      <div
        className="absolute hidden lg:block top-0 -right-10 md:-right-16 h-full w-40 md:w-64 bg-contain bg-no-repeat opacity-40 pointer-events-none scale-y-[-1] rotate-90 z-0"
        style={{
          backgroundImage: `url(${fotterbg1.src})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "right center",
        }}
      />
    </div>
  );
};

export default Footerone;
