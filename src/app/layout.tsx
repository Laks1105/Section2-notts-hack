import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#5D4777",
};

const OG_IMAGE_PATH = "/NottsHack23.png";
const OG_IMAGE_WIDTH = 1154;
const OG_IMAGE_HEIGHT = 543;

async function getBaseUrl(): Promise<string> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const protocol = process.env.VERCEL ? "https" : "http";
  if (host) return `${protocol}://${host}`;
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();
  const ogImageUrl = `${baseUrl}${OG_IMAGE_PATH}`;

  return {
    metadataBase: new URL(baseUrl),
    title: "NottsHack 2026 | Blockchain Hackathon",
    description:
      "Build. Hack. Decentralize. Join NottsHack, a blockchain-themed hackathon by CSS at University of Nottingham. April 6-12, 2026.",
    keywords: [
      "hackathon",
      "blockchain",
      "web3",
      "university of nottingham",
      "CSS",
      "coding",
      "decentralized",
    ],
    icons: { icon: "/favicon.png" },
    openGraph: {
      title: "NottsHack 2026",
      description: "Build. Hack. Decentralize. A blockchain-themed hackathon.",
      type: "website",
      url: baseUrl,
      images: [
        {
          url: ogImageUrl,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: "NottsHack 2026",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "NottsHack 2026 | Blockchain Hackathon",
      description: "Build. Hack. Decentralize. A blockchain-themed hackathon.",
      images: [
        {
          url: ogImageUrl,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: "NottsHack 2026",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
