// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

// Configure the primary font (Inter)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Configure the secondary font (Cormorant Garamond)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Makarska Riviera - Die besten Unterkünfte",
  description: "Finden Sie die besten Unterkünfte an der Makarska Riviera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased bg-background`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
