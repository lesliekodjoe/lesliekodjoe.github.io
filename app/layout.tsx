import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnimatedContent from "@/components/AnimatedContent";

const manr = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leslie Kodjoe",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manr.className}>
        <Navbar />
        <AnimatedContent>{children}</AnimatedContent>
      </body>
    </html>
  );
}
