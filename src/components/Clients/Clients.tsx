"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/DataCard/DataCard";
import { motion, AnimatePresence } from "framer-motion";

import "./clients.css";
import Home from "@/types/home";
// export default function Clients() {
//   return (
//     <section className="flex flex-col gap-4 p-4 bg-blue-100 items-center min-[40vh] ">
//       <h6 className="text-3xl font-bold tracking-tighter sm:text-5xl font-verdana">
//         Our Clients
//       </h6>
//       <div className="flex flex-row gap-4">
//         {[
//           {
//             id: "1",
//             imgUrl: "/images/client-1.png",
//           },
//           {
//             id: "2",
//             imgUrl: "/images/client-2.png",
//           },
//           {
//             id: "3",
//             imgUrl: "/images/client-3.png",
//           },
//           {
//             id: "4",
//             imgUrl: "/images/client-4.png",
//           },
//           {
//             id: "5",
//             imgUrl: "/images/client-5.png",
//           },
//           {
//             id: "6",
//             imgUrl: "/images/client-6.png",
//           },
//         ].map((client, i) => (
//           <Image
//             key={i}
//             src={client.imgUrl || "/images/default.png"}
//             alt={`Client ${client.id}`}
//             width={200}
//             height={150}
//             className="grid "
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

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

    // <section className="p-4 bg-blue-100 items-center min-[40vh] ">
    //   <div className="py-10 text-center ">
    //     <h2 className="text-2xl font-bold mb-6">Our Clients</h2>
    //     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    //       {clients.map((client, index) => (
    //         <div
    //           key={index}
    //           className="p-4 border rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
    //         >
    //           <Image
    //             src={client.imgUrl}
    //             alt={`client ${client.id}`}
    //             width={150}
    //             height={100}
    //             className="object-contain h-20 mx-auto"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
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
              className="h-14 w-36 md:w-full object-contain"
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
  if (!visiblePartners) {
    setVisiblePartners(partners);
  }

  // console.log("partners", partners);
  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setVisiblePartners((_prevPartners: unknown) => {
        const shuffled = [...partners].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.floor(Math.random() * 2) + 7);
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

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
                        src={
                          process.env.BASE_URL + `/api/static/images/${partner}`
                        }
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
