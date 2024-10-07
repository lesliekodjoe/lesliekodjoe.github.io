import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const manr = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leslie Kodjoe",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={manr.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
