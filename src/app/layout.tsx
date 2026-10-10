import type { Metadata } from "next";
import { Anek_Bangla } from "next/font/google";
import Navbar from "@/components/ui/navbar/Navbar";
import Marquee from "@/components/ui/marquee/Marquee";
import Footer from "@/components/layout/Footer";

import "./globals.css";
import ToasterProvider from "@/components/ui/ToasterProvider";

const anekBangla = Anek_Bangla({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bazar Dor  | Compare Prices, Save Money",
  description: "Compare prices of products in Bazar and save money.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" className={`${anekBangla} bg-gray-100`} data-theme="light">
      <body>
        <Navbar />
        <Marquee />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <ToasterProvider />
      </body>
    </html>
  );
}
