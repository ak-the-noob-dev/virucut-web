"use client";

import Image from "next/image";
import { CardWithBackImage } from "../DataCard/DataCard";
import { useEffect, useRef, useState } from "react";
import {
  Product,
  ProductSingleViewLimitProps,
  ProductsList,
} from "@/types/products";
import ModalWithForm from "../Modal/modalWForm";
import { getImageUrl } from "@/lib/utils";
import urls from "@/constant/url";
// import HeroButton from "../Buttons/Buttons";

export function ProductSingleViewLimit({
  bgColor,
  reverseImage,
  productName,
  image,
  desc,
}: ProductSingleViewLimitProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className={`font-sans p-16 tracking-wide max-lg:max-w-2xl mx-auto ${bgColor}`}
    >
      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
        <div
          className={`space-y-4 text-center lg:sticky top-8 ${
            reverseImage ? "lg:order-last" : ""
          }`}
        >
          <div className="bg-gray-100 p-1 flex items-center  w-auto rounded-lg">
            <Image
              src={image ?? "/images/placeholder.png"}
              alt="Product"
              className="w-full max-h-full object-contain object-top"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="max-w-xl">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800">
              {productName}
            </h2>
            <p className="text-sm text-gray-600 mt-2">Fine edge product</p>
          </div>

          <div className="flex space-x-1 mt-4">{/* Rating stars */}</div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="min-w-[200px] px-4 py-3 bg-green-400 hover:bg-green-500 text-white text-sm font-semibold rounded-lg"
            >
              Download PDF
            </button>
          </div>
          <ModalWithForm
            id="crud-modal"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            isEnquiry={false}
          />
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800">
              Product Description
            </h3>
            <p className="text-sm text-gray-600 mt-4">
              {desc ? desc : "No description provided"}
            </p>

            {/* <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-600">
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export function OurProducts() {
  const defaultScroll = 50; // Initial scroll position
  const [productData, setProductData] = useState<ProductsList[]>([]); // Store fetched product data
  const scrollContainerRef = useRef<HTMLDivElement | null>(null); // Ref for the scrollable container
  // Fetch products on component mount
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(`${process.env.API_URL}${urls.productsList}`);
        const data = await res.json();
        setProductData(data?.data || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    getProducts();
  }, []); // Runs once when the component mounts

  // Set default scroll position after products are loaded
  useEffect(() => {
    if (scrollContainerRef.current && productData.length > 0) {
      scrollContainerRef.current.scrollLeft = defaultScroll;
    }
  }, [productData]); // Runs when productData changes

  return (
    <section
      className="bg-white flex flex-col items-center mx-1 md:mx-5"
      id="products"
    >
      <div className="text-center text-black text-3xl font-bold tracking-tighter sm:text-5xl mt-5 mb-5 md:mb-10 font-verdana">
        Our Products Verticals
      </div>
      {/* Outer container with a fixed height and horizontal scrolling */}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 mt-4 mb-6 w-full pb-4 scrollbar scrollbar-track-gray-200 scrollbar-thumb-gray-800"
        >
          {/* Flex container for the scrollable cards */}
          <div className="flex flex-nowrap gap-0 md:gap-5">
            {productData.map((product, i) => (
              <CardWithBackImage
                href={`/products/${product?.categoryId}`}
                key={i}
                cardKey={i}
                imagePath={getImageUrl(product?.image?.url ?? "")}
                productName={product?.categoryName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// simplified

export function ProductsWCategory({
  subCategories,
}: {
  subCategories: Product["subcategories"];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!subCategories || subCategories.length === 0) {
    return (
      <section className="w-full bg-blue-100 pt-10 pb-10 flex items-center flex-col">
        <h6 className="text-2xl font-bold tracking-tighter sm:text-5xl font-verdana text-center mb-16 pt-10">
          Tailored Solutions, Crafted for Your Unique Needs.
        </h6>
        <h3 className="text-sm font-bold tracking-tighter md:text-lg font-verdana text-center mb-4">
          Contact Us for Customized Solutions
        </h3>
        <button
          className="rounded-none bg-white px-6 py-2 text-sm font-semibold text-black transition-colors hover:bg-green-500 hover:text-white"
          onClick={() => setIsModalOpen(true)}
        >
          GET A QUOTE
        </button>
        <ModalWithForm
          id="crud-modal"
          isOpen={isModalOpen}
          isEnquiry={true}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
    );
  }

  const subWItems = [];
  const subWOutItems = [];

  for (let i = 0; i < subCategories?.length; i++) {
    if (subCategories[i].items && (subCategories[i]?.items?.length ?? 0) > 0) {
      subWItems.push(subCategories[i]);
    } else {
      subWOutItems.push(subCategories[i]);
    }
  }

  const handleDownload = async (file: string) => {
    try {
      if (file === "") {
        return;
      }
      let downloadUrl = file;
      if (file === "companyProfilePdf" || file === "#") {
        downloadUrl = urls?.companyProfilePdf;
      }
      const url1 = `${process.env.API_URL}${downloadUrl}`;
      const response = await fetch(url1, {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
        },
      });
      if (!response.ok) throw new Error("Failed to download file");
      const success = await Promise.all([
        response.blob(),
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 6000);
        }),
      ]);
      // console.log("success", success[0]);
      // const blo = await response.blob();
      const url = window.URL.createObjectURL(success[0]);
      const link = document.createElement("a");
      link.href = url;
      link.download = url.split("/").pop() || "downloaded-file";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 0);
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  return (
    <section className=" w-full bg-blue-100 pt-10">
      <h6 className="text-3xl font-bold tracking-tighter sm:text-5xl font-verdana text-center mb-4 pt-10">
        Our Products
      </h6>

      {subWItems &&
        subWItems.map((sub, index) => {
          return (
            <div key={index} className="my-4 gap-8 bg-blue-100">
              <ProductSingleViewLimit
                key={index}
                desc={sub?.desc ?? ""}
                // bgColor={index % 2 === 0 ? "bg-blue-100" : "bg-white"}
                bgColor="bg-blue-100"
                reverseImage={index % 2 !== 0}
                productName={sub.name ?? ""}
                image={getImageUrl(sub?.image?.url || "") || ""}
              />
              <div className="mb-10">
                <h6 className="text-xl font-bold tracking-tighter sm:text-3xl font-verdana text-center py-14 bg-white">
                  Collections of : {sub?.name}
                </h6>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-20 bg-white">
                  {sub?.items &&
                    sub?.items?.map((subcategory, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
                      >
                        <div className="w-full h-64 bg-gray-100 bg-center bg-cover rounded-lg shadow-md">
                          <Image
                            src={getImageUrl(subcategory?.image?.url || "")}
                            alt={subcategory?.name}
                            width={300}
                            height={300}
                            className="w-72 h-26 md:w-full md:h-full object-contain p-5"
                          />
                        </div>

                        <div className="w-56 -mt-10 overflow-hidden bg-white border-1 rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                            {subcategory?.name}
                          </h3>

                          <div className="flex items-center  px-3 py-2 bg-gray-300 dark:bg-gray-700 justify-center">
                            <button
                              className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                              onClick={() => {
                                handleDownload(
                                  subcategory?.catalog?.url || "#"
                                );
                                setIsModalOpen(true);
                              }}
                            >
                              know more
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      {subWOutItems?.length > 0 && (
        <div className="bg-blue-100">
          {subWItems?.length !== 0 && (
            <h6 className="text-xl font-bold tracking-tighter sm:text-3xl font-verdana text-center ">
              Our other Collections
            </h6>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-20 py-10 bg-blue-100">
            {subWOutItems &&
              subWOutItems?.map((subcategory, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
                >
                  <div className="w-full h-64 bg-white bg-center bg-cover rounded-lg shadow-md">
                    <Image
                      src={getImageUrl(subcategory?.image?.url ?? "")}
                      alt={subcategory?.name ?? ""}
                      width={300}
                      height={300}
                      className="w-full h-full object-contain p-5"
                    />
                  </div>

                  <div className="w-56 -mt-10 overflow-hidden bg-gray-100 rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                      {subcategory?.name}
                    </h3>

                    <div className="flex items-center  px-3 py-2 bg-gray-300 dark:bg-gray-700 justify-center">
                      <button
                        className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                        onClick={() => {
                          handleDownload(subcategory?.catalog?.url || "#");
                          setIsModalOpen(true);
                        }}
                      >
                        know more
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      <ModalWithForm
        id="crud-modal"
        isOpen={isModalOpen}
        isEnquiry={false}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
