"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/DataCard/DataCard";
import { motion, AnimatePresence } from "framer-motion";

import "./clients.css";
import Home from "@/types/home";
import { getImageUrl } from "@/lib/utils";
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
  const extendedClients = [...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden py-4 md:py-12">
      <div className="gap-4 md:gap-8 scroller-container flex ">
        <motion.div
          className="flex gap-8 w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {extendedClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[120px] md:w-[180px] lg:w-[200px]"
            >
              <Image
                src={getImageUrl(client.url ?? "") || ""}
                alt={`Client ${index + 1}`}
                className="w-[600px] h-auto object-contain"
                width={300}
                height={200}
              />
            </div>
          ))}
        </motion.div>
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
  }, [partners]); // Include partners here`

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
                        src={getImageUrl(partner.url) || ""}
                        alt={`${partner.name} logo`}
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

export function PartnerLogoGrid({ clients }: { clients: Home["clients"] }) {
  return (
    <section className="bg-blue-200 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl tracking-tighter sm:text-5xl font-verdana text-center font-bold mb-4">
          Some of our valuable clients
        </h1>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {clients.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={getImageUrl(partner.url) || ""}
                alt={`${partner.alternativeText || partner.name} logo`}
                width={150}
                height={50}
                className="w-auto object-contain h-16 md:h-36 lg:h-28"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
