import DiscoveryModal from "@/components/ui/DiscoveryModal";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nivaran Technologies",
  description:
    "AI-first Product Engineering & Technology Consulting Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar />

        <main>{children}</main>

        <Footer />

        <DiscoveryModal />

      </body>
    </html>
  );
}