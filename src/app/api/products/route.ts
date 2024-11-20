import { NextResponse } from "next/server";
import products from "@/json/products.json";

export async function GET() {
  return NextResponse.json({
    data: products.map((e) => {
      return { id: e.id, category: e.category, image: e.image };
    }),
  });
}
