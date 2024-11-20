"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const bannerImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/offerings-1.png",
  "/images/offerings-2.png",
];

export default function MotionBanner() {
  return (
    <motion.div
      animate={{
        x: [0, -1800],
      }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
      className="flex"
    >
      {[...bannerImages, ...bannerImages].map((src, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[600px] h-[500px] mx-2 overflow-hidden"
        >
          <Image
            src={process.env.BASE_URL + `/api/static/images/${src}`}
            alt={`Banner image ${index + 1}`}
            width={500}
            height={400}
            className="rounded-lg shadow-md object-cover w-full h-full"
          />
        </div>
      ))}
    </motion.div>
  );
}
