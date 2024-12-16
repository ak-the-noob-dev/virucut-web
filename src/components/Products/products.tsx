"use client";
import Image from "next/image";
import HeroButton from "../Buttons/Buttons";
import ModalWithForm from "../Modal/modalWForm";
import { useState } from "react";

interface ProductsHeroInterface {
  className?: string;
  imgUrl?: string;
  name?: string;
  desc?: string;
  id?: string;
}

export default function ProductsHero({
  imgUrl,
  className,
  name,
  desc,
}: ProductsHeroInterface) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const defaultImgUrl = "hero-banner.jpg";
  const backgroundImage = imgUrl || defaultImgUrl;
  const productName = name || "Some product";
  const productDesc = desc || "Some description";

  return (
    <div className={`relative min-h-[80vh] h-[100vh] ${className} bg-gray-100`}>
      <Image
        src={process.env.BASE_URL + `/api/static/images/${backgroundImage}`}
        alt={"Product Hero " + backgroundImage}
        layout="fill"
        objectFit="cover"
        className="z-0 obaject-fill"
      />

      <div className="absolute top-1/4 left-16 z-10 max-w-lg bg-gray-800 bg-opacity-90 p-8 text-white">
        <h2 className="text-4xl font-bold mb-4">{productName}</h2>
        <p className="mb-6">{productDesc}</p>
        <div>
          <HeroButton
            onclick={() => setIsModalOpen(true)}
            buttonText="Click here to download Catalog"
          ></HeroButton>
          <ModalWithForm
            id="crud-modal"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}

export function HeroSlider({
  imgUrl,
  className,
  name,
  desc,
}: ProductsHeroInterface) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEnquiry, setIsEnquiry] = useState(false);
  return (
    <div
      className={`relative h-screen md:h-[95vh] w-full overflow-hidden ${className}`}
    >
      {/* Main Slide */}
      <div className="relative h-full w-full">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-black/40" />
          <Image
            src={imgUrl ?? ""}
            alt={name ?? ""}
            className="h-full w-full object-cover"
            width={1600}
            height={800}
          />
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 font-verdana">
            {/* <h1 className="text-3xl font-bold text-white sm:text-6xl md:text-7xl">
              {name}
            </h1> */}
            <h2 className="mt-4 text-4xl font-bold text-green-500 sm:text-7xl md:text-8xl">
              {name}
            </h2>
            <p className="mt-4 max-w-md text-lg text-white/90">{desc}</p>
            <div className="mt-8 flex gap-4">
              <button
                className="rounded-none bg-white px-6 py-2 text-sm font-semibold text-black transition-colors hover:bg-green-500 hover:text-white"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsEnquiry(true);
                }}
              >
                GET A QUOTE
              </button>
              <button
                className="rounded-none border border-white px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-500 hover:text-white"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsEnquiry(false);
                }}
              >
                DOWNLOAD CATALOG
              </button>
              {/* <HeroButton
                onclick={() => setIsModalOpen(true)}
                buttonText="Click here to download Catalog"
              ></HeroButton> */}
              <ModalWithForm
                id="crud-modal"
                isOpen={isModalOpen}
                isEnquiry={isEnquiry}
                onClose={() => setIsModalOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
