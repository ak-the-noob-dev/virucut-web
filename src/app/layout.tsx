import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "ViruCut",
  description: "Your produtivity partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
