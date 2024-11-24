import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";
import BlogPage from "@/components/Blog/Blog";

export default async function Blog() {
  return (
    <main className="bg-blue-100">
      <Head>
        <title>ViruCut</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <section className="min-h-screen">
        <BlogPage />
      </section>
      <Footer />
    </main>
  );
}
