import Image from "next/image";
import HeroButton from "../Buttons/Buttons";

interface ProductsHeroInterface {
  className?: string;
  imgUrl?: string;
}

export default function ProductsHero({
  imgUrl,
  className,
}: ProductsHeroInterface) {
  console.log("imgUrl", imgUrl);
  const defaultImgUrl = "/images/hero-banner.jpg";
  const backgroundImage = imgUrl || defaultImgUrl;

  return (
    <div className="relative min-h-[80vh] bg-white">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Minimalist interior design"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      <div className="absolute top-1/4 left-16 z-10 max-w-lg bg-gray-800 bg-opacity-90 p-8 text-white">
        <h2 className="text-4xl font-bold mb-4">We Design your Future</h2>
        <p className="mb-6">
          Caroline is the Health Editor at GoodHousekeeping.com covering
          nutrition, fitness, wellness, and other lifestyle news.
        </p>
        <p className="text-sm mb-6">
          Caroline is the Health Editor at GoodHousekeeping.com covering
          nutrition, fitness, wellness, and other lifestyle news.
        </p>
        <HeroButton className="" buttonText="Learn More" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-6 w-12 h-12 bg-gray-800 flex items-center justify-center z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
