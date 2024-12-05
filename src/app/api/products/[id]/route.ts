import { NextResponse } from "next/server";
import products from "@/json/products.json";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  let id = params.id;
  if (!id) {
    id = "fabrication-products";
  }
  const resp = products.find((p) => p.id === id);

  return NextResponse.json({ data: resp });
}
