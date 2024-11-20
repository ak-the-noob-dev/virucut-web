import { NextResponse } from "next/server";
import home from "@/json/home.json";

export async function GET() {
  return NextResponse.json({
    data: home,
  });
}
