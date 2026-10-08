import type { Metadata } from "next";
import { Anek_Bangla } from "next/font/google";
import "./globals.css";

const anekBangla = Anek_Bangla({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bazar Dor  | Compare Prices, Save Money",
  description: "Compare prices of products in Bazar and save money.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" className={`${anekBangla}`} data-theme="light">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
