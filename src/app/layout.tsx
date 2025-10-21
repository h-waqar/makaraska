// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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

const wulkan = localFont({
  src: [
    {
      path: "./fonts/WulkanDisplayRegular.woff2", // Path relative to layout.tsx
      weight: "400", // Assuming 'Regular' means weight 400
      style: "normal",
    },
    // Add more objects here if you have Bold, Italic etc. files
  ],
  display: "swap",
  variable: "--font-wulkan", // <-- Assign the CSS variable name
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
        className={`${inter.variable} ${wulkan.variable} ${cormorant.variable} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
