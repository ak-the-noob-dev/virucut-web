import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ViruCut",
    template: "%s | ViruCut",
  },
  description: "Your produtivity partner",
  twitter: {
    card: "summary_large_image",
    title: "ViruCut",
    description: "Your produtivity partner",
    creator: "@virucut",
  },
  openGraph: {
    type: "website",
    title: "ViruCut",
    description: "Your produtivity partner",
    url: "https://virucut.in",
    siteName: "ViruCut",
    images: [
      {
        url: "https://virucut.com/og.png",
        width: 800,
        height: 600,
        alt: "ViruCut",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-495EP8KC0X" />
    </html>
  );
}
