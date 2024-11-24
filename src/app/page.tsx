"use client";
import Head from "next/head";
import Header from "@/components/Header/Header";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Hero, { HeroSlider } from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import ContactUsFormWithMap from "@/components/Contactus/Contactus";
import { OurProducts } from "@/components/ProductView/productView";
import FAQ from "@/components/FAQ/FAQ";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Clients, {
  InfiniteScroll,
  OurPartners,
} from "@/components/Clients/Clients";
import { useState } from "react";
import HomeInterface from "@/types/home";

export default function Home() {
  const [homeData, setHomeData] = useState<HomeInterface | null>(null);
  const getHomeData = async () => {
    const res = await fetch(process.env.BASE_URL + "/api/home/", {
      method: "GET",
    });
    const data = await res.json();
    setHomeData(data?.data || {});
  };

  if (!homeData) {
    getHomeData();
  }

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
        <About />
      </section>
      <section className="my-12 md:my-32 lg:my-32 bg-blue-200">
        <div className="text-center text-black text-3xl font-bold tracking-tighter sm:text-5xl py-5 font-verdana">
          Our Clients
        </div>
        {homeData?.clients && (
          <InfiniteScroll clients={homeData?.clients || []} />
        )}
      </section>
      <section className="my-10 md:my-32 lg:my-32 mx-0 md:mx-10">
        <OurProducts />
      </section>

      {homeData?.partners && (
        <section className="my-10 md:my-32 lg:my-32">
          <OurPartners partners={homeData?.partners || []} />
        </section>
      )}
      <section className="my-10 md:my-32 lg:my-32">
        <FAQ />
      </section>
      <section className="my-10 md:my-32 lg:my-32">
        <ContactUsFormWithMap />
      </section>
      <Footer />
    </main>
  );
}
