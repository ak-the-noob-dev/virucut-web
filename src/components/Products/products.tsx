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
