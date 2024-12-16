/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IoCloseCircleOutline,
  IoLocationSharp,
  IoMail,
  IoMenuOutline,
} from "react-icons/io5";
import "@/styles/header.css";
import { IoIosPhonePortrait } from "react-icons/io";
import BannerCard from "../BannerCard/BannerCard";
import { makeApiCall } from "@/lib/utils";
import urls from "@/constant/url";
import { ProductsList } from "@/types/products";
import { sendGTMEvent } from "@next/third-parties/google";

// const getProducts = async () => {
//   const res = await fetch(process.env.BASE_URL + "/api/products");
//   const data = await res.json();
//   return data?.data || [];
// };

const getProductsFromStrapi = async () => {
  try {
    const res = await makeApiCall({
      url: `${process.env.API_URL}${urls.productsList}`,
      method: "GET",
    });
    if (!res) {
      return;
    }
    return await res.data;
  } catch (error: unknown) {
    console.error("Failed to fetch home data:", error);
  }
};

const sendEventAnalytics = (event: string, value: string) =>
  sendGTMEvent({ event, value });

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProducts, setshowProducts] = useState(false);
  const [productData, setsProductData] = useState<ProductsList[]>([]);

  const handleToggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  if (productData.length === 0) {
    // getProducts()
    //   .then((data) => setsProductData(data || []))
    //   .catch((err) => console.log(err));
  }

  useEffect(() => {
    getProductsFromStrapi()
      .then((data) => setsProductData(data || []))
      .catch((err) => console.log(err));
  }, []);

  return (
    <header className="font-sans tracking-wide relative z-50">
      <section className="text-white py-2 bg-prussian_blue ">
        <p className="text-sm pl-5 md:pl-20 flex flex-wrap items-center">
          <Link
            href={"mailto:inquiry@virucut.in"}
            className="flex gap-3 hover:text-[var(--main-green)]"
          >
            <IoMail style={{ fontSize: 18 }} color="hsl(119, 85%, 37%)" />{" "}
            inquiry@virucut.in
          </Link>
          <span className=" pl-5 lg:pl-7 flex flex-wrap items-center gap-2">
            <IoLocationSharp
              style={{ fontSize: 18 }}
              color="hsl(119, 85%, 37%)"
            />
            Chennai, India.
          </span>
          <span className="lg:pl-7 flex flex-wrap items-center gap-2 mt-2 md:mt-0 lg:mt-0">
            <IoIosPhonePortrait
              style={{ fontSize: 18 }}
              color="hsl(119, 85%, 37%)"
            />
            {"+91 9385 611 054 / 8870 042 007"}
          </span>
        </p>
      </section>

      {/* Main Header */}
      <div className="flex flex-wrap items-center justify-between gap-4  px-5 md:px-10 lg:px-10 py-4 bg-white min-h-[100px] shadow">
        {/* Logo */}
        <Link href="/" passHref>
          <Image
            src={process.env.BASE_URL + `/api/static/images/${"logo.png"}`}
            alt="logo"
            width={144}
            height={60}
            className="w-36"
          />
        </Link>
        <Image
          src={process.env.BASE_URL + `/api/static/images/${"vrv-logo.jpeg"}`}
          alt="vrv logo"
          width={144}
          height={60}
          className="w-16 block md:hidden lg:hidden"
        />
        {/* Navigation Menu */}
        <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:!block max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
        >
          {/* Navigation Links */}
          <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 ">
            {/* Logo for Mobile Menu */}
            <li
              className={`${
                isMenuOpen ? "block" : "hidden"
              } mb-2 md:mb-6 lg:mb-6 max-lg:block`}
            >
              <Link href="/" passHref className="flex flex-row">
                <Image
                  src={
                    process.env.BASE_URL + `/api/static/images/${"logo.png"}`
                  }
                  alt="logo"
                  width={144}
                  height={60}
                  className="w-32 md:mx-auto md:w-36 lg:w-36 h-auto"
                />
                {isMenuOpen ? (
                  <Image
                    src={
                      process.env.BASE_URL +
                      `/api/static/images/${"vrv-logo.jpeg"}`
                    }
                    alt="vrv logo"
                    width={144}
                    height={60}
                    className="w-16 h-14 mt-3 ml-3"
                  />
                ) : (
                  <></>
                )}
                <div className="flex max-lg:ml-auto">
                  {/* Open Menu Button */}
                  <button
                    id="toggleOpen"
                    className="lg:hidden"
                    aria-label="Open Menu"
                    onClick={handleToggleMenu}
                  >
                    {isMenuOpen ? (
                      <IoCloseCircleOutline
                        className="w-7 h-7"
                        color="hsl(119, 85%, 37%)"
                      />
                    ) : (
                      <></>
                    )}
                  </button>
                </div>
              </Link>
            </li>
            {/* Navigation Items */}
            {[
              { name: "Home", href: "/", id: "home" },
              { name: "About", href: "/about-us", id: "about" },
              { name: "Products", href: "#", id: "products" },
              // { name: "Blog", href: "/blog", id: "blog" },
              { name: "Careers", href: "/careers", id: "careers" },
              { name: "Contact Us", href: "/contact-us", id: "contact-us" },
            ].map((item) => (
              <li
                key={item.name}
                className="max-lg:border-b max-lg:py-3 px-3 font-sans"
              >
                <Link
                  href={item.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (item.id === "products") {
                      sendEventAnalytics("product_clicked", "header");
                      setshowProducts(true);
                    } else {
                      sendEventAnalytics("page_clicked", item.id);

                      setshowProducts(false);
                    }
                  }}
                  passHref
                  className="hover:text-[var(--main-green)] text-[#333] block font-bold text-[15px]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center max-lg:ml-auto space-x-4">
          {/* Open Menu Button */}
          <button
            id="toggleOpen"
            className="lg:hidden"
            aria-label="Open Menu"
            onClick={handleToggleMenu}
          >
            {isMenuOpen ? (
              <></>
            ) : (
              <IoMenuOutline className="w-7 h-7" color="hsl(119, 85%, 37%)" />
            )}
          </button>

          {/* VRV Logo */}

          <div className="hidden lg:block md:block">
            <Image
              src={
                process.env.BASE_URL + `/api/static/images/${"vrv-logo.jpeg"}`
              }
              alt="vrv logo"
              width={144}
              height={60}
              className="w-16"
            />
          </div>
        </div>
      </div>
      {showProducts ? (
        <div className="absolute m-auto md:right-20 lg:right-20 right-0 sm:top-1/2 md:top-full">
          <span className="block md:hidden lg:hidden text-2xl font-verdana text-center bg-gray-200 p-2">
            Our Products
          </span>
          <BannerCard
            onClickOutside={() => setshowProducts(false)}
            productData={productData}
          />
        </div>
      ) : null}
    </header>
  );
};

export default Header;
