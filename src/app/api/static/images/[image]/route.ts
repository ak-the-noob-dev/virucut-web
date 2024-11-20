import { readFile } from "fs/promises";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { join } from "path";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { image: string } }
) {
  const image = params.image;
  const imagePath = join(process.cwd(), "public", "images", image);

  try {
    const imageData = await readFile(imagePath);
    return new NextResponse(imageData, {
      status: 200,
      headers: { "Content-Type": "image/jpeg" },
    });
  } catch (err: unknown) {
    console.log(err);
    const response = await fetch("https://placehold.co/800?text=virucut");
    const blob = await response.blob();
    return new NextResponse(blob, {
      status: 200,
      headers: { "Content-Type": "image/jpeg" },
    });
  }
}
