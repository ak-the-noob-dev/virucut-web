import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// import CareersPage from "@/components/Careers/Careers";
// import CareersPage from "@/components/Careers/Careers";

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
      <section className="py-12 bg-gray-100 min-h-[60vh] flex items-center font-verdana">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            We&apos;re Hiring!
          </h1>
          <p className="text-lg text-center text-gray-700 mb-4 md:flex lg:flex md:flex-col lg:flex-col md:w-[50rem] lg:w-[50rem]">
            <strong>VIRUCUT India Private Limited</strong> is growing, and we
            are excited to announce multiple openings across various positions.
            If you are passionate, skilled, and ready to take on new challenges,
            we want to hear from you!
          </p>
          <p className="text-lg text-center text-gray-700">
            Please send your resume to:{" "}
            <a
              href="mailto:inquiry@virucut.in"
              className="text-blue-600 underline hover:text-blue-800"
            >
              inquiry@virucut.in
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
