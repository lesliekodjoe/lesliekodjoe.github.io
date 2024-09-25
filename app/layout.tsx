import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

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
      <body className={manr.className}>
        {children}
      </body>
    </html>
  );
}
