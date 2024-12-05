"use client";
import MotionBanner from "@/components/MotionBanner/Motion-Banner";
import HeroButton from "@/components/Buttons/Buttons";
import { IoConstruct } from "react-icons/io5";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Home from "@/types/home";

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
        <div className="w-full overflow-hidden hidden md:block lg:block">
          <MotionBanner />
        </div>
      </div>
    </section>
  );
}

export const Hero2 = () => {
  return (
    <div className="bg-deep-purple-accent-700">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
                <svg
                  className="w-10 h-10 text-deep-purple-900"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">The</span>
                </span>{" "}
                quick, brown fox jumps over a lazy dog
              </h2>
              <p className="text-base text-indigo-100 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function HeroSlider({ hero }: { hero: Home["hero"] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hero.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + hero.length) % hero.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const autoScroll = () => {
    if (currentSlide === hero.length - 1) {
      return setCurrentSlide(0);
    }
    return setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(autoScroll, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative h-screen md:h-[95vh] w-full overflow-hidden">
      {/* Main Slider */}
      <div
        className="relative h-full w-full"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {hero.map((slide, index) => (
          <div
            key={index}
            className="absolute h-full w-full"
            style={{ left: `${index * 100}%` }}
          >
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-black/40" />
              <Image
                src={process.env.BASE_URL + `/api/static/images/${slide.image}`}
                alt={slide.subtitle ?? ""}
                className="h-full w-full object-cover"
                width={1600}
                height={800}
              />
              <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 font-verdana">
                <h1 className="text-4xl font-bold text-white sm:text-6xl md:text-7xl">
                  {slide.title}
                </h1>
                <h2 className="mt-4 text-5xl font-bold text-green-500 sm:text-7xl md:text-8xl">
                  {slide.subtitle}
                </h2>
                <p className="mt-4 max-w-md text-lg text-white/90">
                  {slide.description}
                </p>
                <div className="mt-8 flex gap-4">
                  <button className="rounded-none bg-white px-6 py-2 text-sm font-semibold text-black transition-colors hover:bg-green-500 hover:text-white">
                    GET A QUOTE
                  </button>
                  <button className="rounded-none border border-white px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-500 hover:text-white">
                    DOWNLOAD CATALOG
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4">
        {hero.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative h-24 w-32 overflow-hidden rounded-lg"
          >
            <Image
              src={process.env.BASE_URL + `/api/static/images/${slide.image}`}
              alt={slide.subtitle ?? ""}
              className="h-full w-full object-cover"
              width={1600}
              height={800}
            />
            <div
              className={cn(
                "absolute inset-0 flex flex-col justify-end bg-black/40 p-2 text-white transition-opacity",
                currentSlide === index
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              )}
            >
              <div className="text-sm font-semibold">{slide.subtitle}</div>
              <div className="text-xs text-white/80">{slide.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
