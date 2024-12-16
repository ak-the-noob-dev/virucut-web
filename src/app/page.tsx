"use client";
import Head from "next/head";
import Header from "@/components/Header/Header";
import HeroSlider from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import ContactUsFormWithMap from "@/components/Contactus/Contactus";
import { OurProducts } from "@/components/ProductView/productView";
import FAQ from "@/components/FAQ/FAQ";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Clients, { InfiniteScroll } from "@/components/Clients/Clients";
import { useEffect, useState } from "react";
import HomeInterface, { FAQProps } from "@/types/home";
import { getImageUrl, makeApiCall } from "@/lib/utils";
import urls from "@/constant/url";
import Image from "next/image";
import { motion } from "framer-motion";

const getAboutUsData = async () => {
  try {
    const res = await makeApiCall({
      url: `${process.env.API_URL}${urls.home}`,
      method: "GET",
    });
    if (!res) {
      return;
    }
    return await res.data;
  } catch (error: unknown) {
    console.error("Failed to fetch home data:", error);
    return null;
  }
};

const getFaqData = async () => {
  try {
    const res = await makeApiCall({
      url: `${process.env.API_URL}${urls.faq}`,
      method: "GET",
    });
    if (!res) {
      return;
    }
    return await res.data;
  } catch (error: unknown) {
    console.error("Failed to fetch faq data:", error);
  }
};

export default function Home() {
  const [homeData, setHomeData] = useState<HomeInterface>({
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    about_content:
      "At VIRUCUT India, we are driven by a commitment to quality, precision, and innovation. We provide tailored solutions in industrial tooling, designed to enhance productivity and performance across industries. With a focus on excellence, we are your trusted partner in success.",
    clients: [
      {
        name: "wheels-india.png",
        alternativeText: "wheels-india",
        url: "/uploads/wheels_india_d1c4953bca.png",
      },
      {
        name: "yamaha.png",
        alternativeText: null,
        url: "/uploads/yamaha_456addd2f2.png",
      },
      {
        name: "tvs.png",
        alternativeText: null,
        url: "/uploads/thumbnail_tvs_35c41a11c6.png",
      },
      {
        name: "toshiba.png",
        alternativeText: null,
        url: "/uploads/toshiba_efc3117301.png",
      },
      {
        name: "tvs-2.png",
        alternativeText: null,
        url: "/uploads/tvs_2_083cca6524.png",
      },
      {
        name: "triveni.png",
        alternativeText: null,
        url: "/uploads/triveni_d9780536b6.png",
      },
      {
        name: "sri.png",
        alternativeText: null,
        url: "/uploads/sri_2a0979833a.png",
      },
      {
        name: "tafe.png",
        alternativeText: null,
        url: "/uploads/tafe_4f3ddb88c8.png",
      },
      {
        name: "pmi.png",
        alternativeText: null,
        url: "/uploads/pmi_5b8f1d2b1d.png",
      },
      {
        name: "infimental.png",
        alternativeText: null,
        url: "/uploads/infimental_4f859e06ac.png",
      },
    ],
    partners: [
      {
        name: "vrvA2Z.png",
        alternativeText: null,
        url: "/uploads/vrv_A2_Z_212a44dfa0.png",
      },
      {
        name: "strauss.png",
        alternativeText: null,
        url: "/uploads/strauss_2cfcd6c6ff.png",
      },
      {
        name: "smooth.png",
        alternativeText: null,
        url: "/uploads/smooth_0bbb72bae1.png",
      },
      {
        name: "kingdom.png",
        alternativeText: null,
        url: "/uploads/kingdom_79ee968c28.png",
      },
      {
        name: "san.png",
        alternativeText: null,
        url: "/uploads/san_a4e732debc.png",
      },
      {
        name: "ematec.png",
        alternativeText: null,
        url: "/uploads/ematec_210688e42e.png",
      },
      {
        name: "bibielle.png",
        alternativeText: null,
        url: "/uploads/bibielle_fa40f8a89b.png",
      },
    ],
    hero: [
      {
        title: "Thread Milling",
        subtitle: "",
        description:
          "Achieve precision threading with our advanced thread milling tools, designed for high accuracy and durability. Perfect for creating internal or external threads across various materials.",
        image: {
          name: "thread-milling.jpeg",
          alternativeText: null,
          url: "/uploads/thread_milling_bf726dc621.jpeg",
        },
      },
      {
        title: "Milling Cutters",
        subtitle: "",
        description:
          "Versatile milling cutters for superior cutting performance and extended tool life. Tailored for high-speed machining and intricate milling operations.",
        image: {
          name: "milling-cutters.jpeg",
          alternativeText: null,
          url: "/uploads/milling_cutters_e7608e05d5.jpeg",
        },
      },
      {
        title: "SC Tc Burr Cutters",
        subtitle: "",
        description:
          "High-performance SC Tc Burr Cutters for precise material removal and smooth finishes. Ideal for deburring, shaping, and finishing tasks across industries.",
        image: {
          name: "sc-tc-burr-cutters.jpeg",
          alternativeText: null,
          url: "/uploads/sc_tc_burr_cutters_a54f5876b1.jpeg",
        },
      },
      {
        title: "Drilling",
        subtitle: "",
        description:
          "Experience efficient and precise drilling with our premium drill bits, crafted to reduce wear and maximize performance. Suitable for both metal and non-metal materials.",
        image: {
          name: "drilling.jpeg",
          alternativeText: null,
          url: "/uploads/drilling_2325b8213b.jpeg",
        },
      },
      {
        title: "Hole Making",
        subtitle: "",
        description:
          "Simplify hole creation with our specialized hole-making tools, ensuring clean and accurate results. Ideal for diverse applications in industrial machining.",
        image: {
          name: "hole-making.jpeg",
          alternativeText: null,
          url: "/uploads/hole_making_d782660c2d.jpeg",
        },
      },
    ],
    about_image_1: {
      name: "aboutus-banner-1.jpg",
      alternativeText: null,
      url: "/uploads/aboutus_banner_1_5eda0d3fa5.jpg",
    },
    about_image_2: {
      name: "aboutus-banner-2.jpg",
      alternativeText: null,
      url: "/uploads/aboutus_banner_2_bd074ea8fc.jpg",
    },
  });
  const [faqData, setFaqData] = useState<FAQProps[] | null>(null);

  const handleDownload = async () => {
    try {
      const url1 = `${process.env.API_URL}${urls.companyProfilePdf}`;
      const response = await fetch(url1, {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
        },
      });
      if (!response.ok) throw new Error("Failed to download file");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
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

  useEffect(() => {
    const fetchHomeData = async () => {
      const res = await getAboutUsData();
      if (res) setHomeData(res);
    };
    const fetchFaqData = async () => {
      const res = await getFaqData();
      if (res) setFaqData(res);
    };
    fetchHomeData();
    fetchFaqData();
  }, []);

  return (
    <main>
      <Head>
        <title>ViruCut</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />

      {homeData?.hero && <HeroSlider hero={homeData?.hero || []} />}

      <section className="my-10 md:my-32 lg:my-32">
        {homeData && <About aboutUs={homeData} />}
      </section>

      <section className="min-h-[30vh] my-12 md:my-32 lg:my-32 bg-blue-200 flex flex-col justify-center items-center">
        <div className=" mb-6 text-center text-black text-3xl font-bold tracking-tighter sm:text-5xl py-5 font-verdana">
          Some of our valuable clients
        </div>
        {homeData?.clients && (
          <InfiniteScroll clients={homeData?.clients || []} />
        )}
      </section>
      {/* 
      {homeData?.clients && (
        <motion.div
          className="h-[500px]flex items-center justify-center "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <PartnerLogoGrid clients={homeData?.clients || []} />
        </motion.div>
      )} */}

      <section className="my-10 md:my-32 lg:my-32 mx-0 md:mx-10">
        <OurProducts />
      </section>

      {homeData?.partners && (
        <section className="py-24 bg-blue-200">
          <motion.div
            className="h-[500px]flex items-center justify-center " //animate-fade-up animate-duration-1000 animate-delay-1000 animate-ease-in
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-fade-up animate-duration-1000  animate-ease-in">
              <div className="mb-20 text-center">
                <h1 className="text-3xl tracking-tighter sm:text-5xl font-verdana text-center font-bold">
                  We work with the best partners
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-4">
                {homeData?.partners &&
                  homeData?.partners.map((client, index) => (
                    <a
                      key={index}
                      href="#"
                      className="  bg-white flex justify-center items-center border border-solid border-gray-200 shadow-sm h-28 w-full rounded-2xl"
                    >
                      <Image
                        src={getImageUrl(client.url ?? "") || ""}
                        alt="Partner"
                        width={200}
                        height={200}
                        className="w-full h-full object-contain rounded-2xl p-2"
                      />
                    </a>
                  ))}
              </div>
            </div>
          </motion.div>
        </section>
      )}

      <section className="my-10 md:my-32 lg:my-32">
        <FAQ data={faqData || []} />
      </section>
      <section className="my-10 md:my-32 lg:my-32">
        <ContactUsFormWithMap />
      </section>
      <div
        className="fixed bottom-3 left-1/2 transform -translate-x-1/4"
        onClick={handleDownload}
      >
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
          download company profile
        </button>
      </div>
      <Footer />
    </main>
  );
}
