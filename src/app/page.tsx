import Head from "next/head";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import ContactUsFormWithMap from "@/components/Contactus/Contactus";
import { OurProducts } from "@/components/ProductView/productView";
// import Clients from "@/components/Clients";
import FAQ from "@/components/FAQ/FAQ";
import Clients from "@/components/Clients/Clients";

export default function Home() {
  return (
    <main>
      <Head>
        <title>ViruCut</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Hero />
      <About />
      {/* <Services /> */}
      <Clients />
      <OurProducts />
      <FAQ />
      <ContactUsFormWithMap />
      <Footer />
    </main>
  );
}
