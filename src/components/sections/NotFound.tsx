// src/components/NotFound.jsx

import React from "react";
import Image from "next/image";
import { Button } from "@/components/layout/Button"; // Make sure this path is correct

export default function NotFound() {
  return (
    // Section wrapper for vertical padding
    <section className="py-12 md:py-20">
      {/* THIS div is now the main container. 
        It centers, adds horizontal padding, AND acts as the boundary 
        for the background image and content.
      */}
      <div className="container mx-auto px-4 relative overflow-hidden md:rounded shadow-lg">
        {/* Background Image & Overlay Container */}
        <div className="absolute inset-0 z-0">
          {" "}
          {/* Fills the container */}
          <Image
            src="/images/sea-yacht.png" // Your image path
            alt="Scenic view of the sea with a yacht"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="md:rounded" // Apply rounding here too if overflow-hidden isn't perfect
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>{" "}
          {/* Apply rounding here */}
        </div>

        {/* Content Container - Stays above background, uses internal padding */}
        <div className="relative z-10 h-full flex flex-col justify-between text-white min-h-[500px] md:min-h-[600px] p-8 md:p-12 lg:p-16">
          {/* Top Left Logo */}
          <div className="self-start">
            <Image
              src="/images/logo-makarska-white.svg" // Your white logo path
              alt="Makarska Exklusiv Logo"
              width={180} // Adjust as needed
              height={40} // Adjust as needed
              className="h-auto"
            />
          </div>

          {/* Bottom Left Content */}
          <div className="self-start max-w-md md:max-w-lg">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 md:mb-6 leading-tight shadow-sm">
              Noch nicht gefunden wonach du suchst?
            </h2>
            <Button
              size="large" // Use shadcn size prop
              variant="subtle"
              className="bg-white text-gray-800 hover:bg-gray-200 border-white px-6 py-3 rounded-md" // Ensure button has styles
            >
              Jetzt kontaktieren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
