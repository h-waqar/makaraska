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
            style={{ objectFit: "cover", objectPosition: "right top" }}
            priority
            className="md:rounded" // Apply rounding here too if overflow-hidden isn't perfect
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black opacity-20 rounded"></div>{" "}
          {/* Apply rounding here */}
        </div>

        {/* Content Container - Stays above background, uses internal padding */}
        <div className="relative z-10 h-full flex flex-col justify-between text-white min-h-[500px] md:min-h-[664px] py-16">
          {/* Top Left Logo */}
          <div className="self-start flex gap-2">
            <Image
              src="/logo.svg"
              alt="Logo Icon"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <Image
              src="/logo-text.svg"
              alt="Makarska Logo"
              width={74}
              height={32}
              className="h-9 md:h-9 w-auto"
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
              className="hover:text-white hover:border hover:border-white"
            >
              Jetzt kontaktieren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
