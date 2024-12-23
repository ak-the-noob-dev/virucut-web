import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactUsFormWithMap from "@/components/Contactus/Contactus";

export default function AboutUs() {
  return (
    <main>
      <Head>
        <title>ViruCut</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      {/* <AboutUsPage /> */}
      <ContactUsFormWithMap />
      <Footer />
    </main>
  );
}
