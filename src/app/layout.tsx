import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import clsx from 'clsx';

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
    <html lang="en">
      <body className={clsx(manr.className, "antialiased bg-white")}>{children}</body>
    </html>
  );
}

