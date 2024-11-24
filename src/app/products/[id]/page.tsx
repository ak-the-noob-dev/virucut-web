"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { HeroSlider } from "@/components/Products/products";
import { ProductsWCategory } from "@/components/ProductView/productView";
import Head from "next/head";
import { useParams } from "next/navigation";
import { useState } from "react";
import {} from "@/components/ProductView/productView";
import { Product } from "@/types/products";

export default function SingleProductView() {
  const [productData, setsProductData] = useState<Product | null>(null);

  const router = useParams();
  let id = router.id;
  if (!id) {
    id = "fabrication-products";
  }

  // get product data from api
  const getProducts = async (id: string) => {
    const res = await fetch(process.env.BASE_URL + "/api/products/" + id);
    const data = await res.json();
    setsProductData(data?.data || {});
  };
  if (!productData) {
    getProducts(id as string);
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

      {/* This hero component will cover the name and desc image of the product type*/}
      <HeroSlider
        imgUrl={productData?.image ?? ""}
        className=""
        name={`${productData?.category}`}
        desc={`${productData?.desc?.substring(0, 20)}`}
      />

      <section className="my-0 bg-gray-100">
        {/* This component will cover the subcategoreis of the product type*/}
        <ProductsWCategory subCategories={productData?.subcategories ?? []} />
      </section>

      <Footer />
    </main>
  );
}
