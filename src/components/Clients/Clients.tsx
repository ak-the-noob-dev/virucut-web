"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/DataCard/DataCard";
import { motion, AnimatePresence } from "framer-motion";

import "./clients.css";
import Home from "@/types/home";
export default function Clients({ partners }: { partners: Home["partners"] }) {
  return (
    <section className="p-4 bg-blue-100 items-center min-[40vh] flex flex-col ">
      <h6 className="text-3xl font-bold tracking-tighter sm:text-5xl font-verdana m-3">
        Our Channel Partners
      </h6>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-8 md:m-6">
        {partners.map((client, index) => (
          <div key={index} className=" h-12 md:h-24 rounded-lg bg-white">
            <Image
              src={process.env.BASE_URL + `/api/static/images/${client}`}
              alt={`client ${client}`}
              width={150}
              height={100}
              className="object-fill w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export function InfiniteScroll({ clients }: { clients: Home["clients"] }) {
  const extendedClients = [...clients, ...clients, ...clients]; // Extend list for smoother scroll

  return (
    <div className="relative w-full overflow-hidden py-4 md:py-12">
      <div className="scroller-container animate-scroll flex gap-4">
        {extendedClients.map((image, index) => (
          <div
            key={index}
            className="relative h-24 w-auto flex-shrink-0 overflow-hidden rounded-lg transition-all hover:scale-105"
          >
            <Image
              src={process.env.BASE_URL + `/api/static/images/${image}`}
              alt={`client ${image}`}
              className="h-28 w-36 md:w-full object-contain"
              width={300}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// This would typically come from a database or API

export function OurPartners({ partners }: { partners: Home["partners"] }) {
  const [visiblePartners, setVisiblePartners] = useState<
    Home["partners"] | null
  >(null);

  useEffect(() => {
    setVisiblePartners(partners);

    const interval = setInterval(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setVisiblePartners((_prevPartners) => {
        const shuffled = [...partners].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.floor(Math.random() * 2) + 7);
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [partners]); // Include partners here

  return (
    <section className="bg-background py-16 bg-blue-100">
      <div className="container mx-auto px-4">
        <h6 className="text-3xl font-bold tracking-tighter sm:text-5xl font-verdana m-3 text-center">
          Our Channel Partners
        </h6>
        <p className="text-center text-muted-foreground mb-12">
          Proud to work with industry-leading organizations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {visiblePartners &&
              visiblePartners.map((partner, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden h-full transition-shadow duration-300 hover:shadow-lg bg-white">
                    <CardContent className="p-6 flex items-center justify-center h-32">
                      <Image
                        src={`${process.env.BASE_URL}/api/static/images/${partner}`}
                        alt={`${partner} logo`}
                        className="max-w-full max-h-full object-contain"
                        width={300}
                        height={300}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
