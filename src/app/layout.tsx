import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Notts Hack 2026 | Blockchain Hackathon",
  description: "Build. Hack. Decentralize. Join Notts Hack, a blockchain-themed hackathon by CSS at University of Nottingham. April 6-12, 2026.",
  keywords: ["hackathon", "blockchain", "web3", "university of nottingham", "CSS", "coding", "decentralized"],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Notts Hack 2026",
    description: "Build. Hack. Decentralize. A blockchain-themed hackathon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
