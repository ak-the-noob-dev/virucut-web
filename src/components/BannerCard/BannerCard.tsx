"use client";
import { getImageUrl } from "@/lib/utils";
import { ProductsList } from "@/types/products";
import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useEffect, useRef } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLElement | undefined>,
  callback: () => void,
  addEventListener = true
) => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      callback();
    }
  };

  useEffect(() => {
    if (addEventListener) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

interface BannerCardProps {
  onClickOutside: () => void;
  productData: ProductsList[];
}
const sendEventAnalytics = (event: string, value: string) =>
  sendGTMEvent({ event, value });

export default function BannerCard({
  onClickOutside,
  productData,
}: BannerCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClickOutside);

  return (
    <div
      ref={ref}
      className="h-[50vh] overflow-y-scroll md:h-auto p-4 mx-auto max-w-7xl bg-gray-200 shadow-md rounded-lg flex md:flex-row lg:flex-row flex-wrap gap-4 justify-center w-auto"
    >
      {productData.map((item) => (
        <Link
          key={item.categoryId}
          href={`/products/${item.categoryId}`}
          className="group"
          onClick={() => {
            sendEventAnalytics("Product_click", item.categoryId);
          }}
        >
          {/* <div className="w-[100px] h-[120px] sm:w-[140px] sm:h-[160px] lg:w-[160px] lg:h-[180px] flex flex-col items-center justify-start gap-2 overflow-hidden text-center text-black transition-transform duration-300 group-hover:scale-105 bg-gray-50 rounded-lg shadow-sm">
            <Image
              src={`/images/${item.image}`}
              alt={item.category}
              width={160}
              height={140}
              className="object-contain w-full h-[80px] sm:h-[100px] rounded-t-lg transition-all duration-300"
            />
            <p className="text-xs sm:text-sm text-gray-700 group-hover:text-black mt-2">
              {item.category}
            </p>
          </div> */}

          <SmallCard
            imageSrc={getImageUrl(item.image.url || "") || ""}
            text={item.categoryName}
          />
        </Link>
      ))}
    </div>
  );
}

// import Image from "next/image";

export function SmallCard({
  imageSrc,
  text,
}: {
  imageSrc: string;
  text: string;
}) {
  return (
    <div className="md:w-40 md:h-48 w-[140px] h-[160px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform duration-100 group-hover:scale-110 ">
      {/* Image Section: 80% of the card height */}
      <div className="h-4/5 w-full relative">
        <Image
          src={imageSrc}
          alt="Card Image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg p-1"
        />
      </div>

      {/* Text Section: 20% of the card height */}
      <div className="h-1/5 p-2 flex items-center text-center">
        <p className="text-xs text-gray-700 w-full leading-tight break-words">
          {text}
        </p>
      </div>
    </div>
  );
}
