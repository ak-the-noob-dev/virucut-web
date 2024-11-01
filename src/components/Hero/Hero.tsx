"use client";
import MotionBanner from "@/components/MotionBanner/Motion-Banner";
import HeroButton from "@/components/Buttons/Buttons";
import { IoConstruct } from "react-icons/io5";

export default function Hero() {
  const handleNavTo = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="bg-white min-h-[80vh] flex items-center">
      <div className="flex flex-col md:flex-row sm:flex-row sm:items-center bg-blue-100 p-6 pt-[100px] pb-[100px] md:p-10 md:pt-[100px] w-full h-[41em]">
        <div className="w-full max-w-4xl mb-8 text-left">
          <div className="flex flex-row items-center justify-left mb-4 gap-1">
            <IoConstruct style={{ fontSize: 18 }} color="hsl(119, 85%, 37%)" />
            <h6 className="">Your Productive Partner</h6>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 font-verdana">
            Powering Innovation, Precision & Performance
          </h1>
          <p className="text-sm border-l border-black text-cadet leading-7 pl-4 mb-5">
            Empowering industries with precision-engineered tools and
            cutting-edge solutions for unmatched productivity and excellence.
            Redefining efficiency with innovative technologies and tailored
            solutions that elevate your business to new heights.
          </p>
          <HeroButton
            className=""
            buttonText="Explore our products"
            onclick={() => handleNavTo("products")}
          />
        </div>
        <div className="w-full overflow-hidden">
          <MotionBanner />
        </div>
      </div>
    </section>
  );
}
