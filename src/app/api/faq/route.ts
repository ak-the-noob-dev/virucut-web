import { NextResponse } from "next/server";
import faq from "@/json/faq.json";

export async function GET() {
  return NextResponse.json({
    data: faq.map((e) => {
      return { q: e.q, ans: e.ans };
    }),
  });
}
