"use client";
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
  productData: {
    imgUrl: string;
    productName: string;
    id: string;
  }[];
}

export default function BannerCard({
  onClickOutside,
  productData,
}: BannerCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClickOutside);

  return (
    <div
      className="flex flex-row p-2 gap-2 overflow-x-auto items-center justify-center bg-white shadow-sm"
      ref={ref}
    >
      {productData.map((item, index) => (
        <Link key={item.id} href={`/products/${item.id}`}>
          <div className="w-[120px] h-32 max-h-36 mx-2 overflow-hidden flex flex-col items-center justify-start text-center text-black transition-transform duration-300 hover:scale-110 hover:bg-gray-300">
            <Image
              src={item.imgUrl}
              alt={`Banner image ${index + 1}`}
              width={500}
              height={400}
              className="object-contain w-[100px] h-[120px] rounded-lg"
            />
            <p className="text-center text-xs">{item.productName}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
