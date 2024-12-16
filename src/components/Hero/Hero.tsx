"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn, getImageUrl } from "@/lib/utils";
import Image from "next/image";
import Home from "@/types/home";

export default function HeroSlider({ hero }: { hero: Home["hero"] }) {
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

  const navToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight - 1300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-[70vh] md:h-[95vh] w-full overflow-hidden">
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
              <div className="absolute inset-0 bg-black/30" />
              <Image
                src={getImageUrl(slide?.image?.url ?? "") || ""}
                alt={slide.subtitle ?? ""}
                className="h-full w-full object-cover"
                width={1600}
                height={800}
              />
              <div className="absolute inset-0 flex flex-col justify-end md:justify-center lg:justify-center px-8 sm:px-16 font-verdana mb-6 md:mb-0 lg:mb-0">
                {/* <h1 className="text-4xl font-bold text-white sm:text-6xl md:text-7xl">
                  {slide.title}
                </h1> */}
                <h2 className="mt-4 text-5xl font-bold text-green-500 sm:text-7xl md:text-8xl">
                  {slide.title}
                </h2>
                <p className="mt-4 max-w-md text-lg text-white/90">
                  {slide.description}
                </p>
                <div className="mt-8 flex gap-4">
                  <button
                    className="rounded-none bg-white px-6 py-2 text-sm font-semibold text-black transition-colors hover:bg-green-500 hover:text-white"
                    onClick={navToBottom}
                  >
                    GET A QUOTE
                  </button>
                  {/* <button className="rounded-none border border-white px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-500 hover:text-white">
                    DOWNLOAD CATALOG
                  </button> */}
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
      <div className="absolute bottom-8 left-1/2 md:flex lg:flex -translate-x-1/2 gap-4 hidden">
        {hero.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative h-24 w-32 overflow-hidden rounded-lg"
          >
            <Image
              src={getImageUrl(slide?.image?.url ?? "") || ""}
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
