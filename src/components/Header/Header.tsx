/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// src/components/Header/Header.tsx
"use client";

import React, { useState } from "react";
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

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProducts, setshowProducts] = useState(false);

  const handleToggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };
  // const handleNavTo = (id: string): void => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     window.scrollTo({
  //       top: element.offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <header className=" bg-prussian_blue font-sans tracking-wide relative z-50">
      {/* shadow-md */}
      {/* Top Bar */}
      <section className="text-white py-2 ">
        <p className="text-sm pl-20 flex flex-wrap items-center">
          <Link
            href={"mailto:inquiry@virucut.in"}
            className="flex gap-3 hover:text-[var(--main-green)]"
          >
            <IoMail style={{ fontSize: 18 }} color="hsl(119, 85%, 37%)" />{" "}
            inquiry@virucut.in
          </Link>
          <span className="lg:pl-7 flex flex-wrap items-center gap-3">
            <IoLocationSharp
              style={{ fontSize: 18 }}
              color="hsl(119, 85%, 37%)"
            />
            chennai, India.
          </span>
          <span className="lg:pl-7 flex flex-wrap items-center gap-3">
            <IoIosPhonePortrait
              style={{ fontSize: 18 }}
              color="hsl(119, 85%, 37%)"
            />
            {" +91 9385 611 054"}
          </span>
        </p>
      </section>

      {/* Main Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-white min-h-[100px] shadow">
        {/* Logo */}
        <Link href="/" passHref>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={144}
            height={60}
            className="w-36"
          />
        </Link>

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
              className={`${isMenuOpen ? "block" : "hidden"} mb-6 max-lg:block`}
            >
              <Link href="/" passHref>
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={144}
                  height={60}
                  className="w-36"
                />
              </Link>
            </li>
            {/* Navigation Items */}
            {[
              { name: "Home", href: "/", id: "home" },
              { name: "About", href: "/about-us", id: "about" },
              { name: "Products", href: "#", id: "products" },
              { name: "Blog", href: "#", id: "blog" },
              { name: "Contact", href: "/contact-us", id: "contact-us" },
            ].map((item) => (
              <li
                key={item.name}
                className="max-lg:border-b max-lg:py-3 px-3 font-sans"
              >
                <Link
                  href={item.href}
                  onClick={() => {
                    if (item.id === "products") {
                      setshowProducts(true);
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
              <IoMenuOutline className="w-7 h-7" color="hsl(119, 85%, 37%)" />
            )}
          </button>
        </div>
      </div>
      {showProducts ? (
        <BannerCard
          onClickOutside={() => setshowProducts(false)}
          productData={[
            {
              imgUrl: "/images/service1.jpg",
              productName: "Machining",
              id: "1",
            },
            {
              imgUrl: "/images/service1.jpg",
              productName: "Machining",
              id: "2",
            },
            {
              imgUrl: "/images/service1.jpg",
              productName: "Machining Machining",
              id: "3",
            },
          ]}
        />
      ) : null}
    </header>
  );
};

export default Header;
