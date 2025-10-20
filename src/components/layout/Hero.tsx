// src/components/layout/Hero.tsx
import React from "react";
import { Button } from "@/components/ui/Button";
import { Calendar, Users } from "lucide-react";
import Image from "next/image";
import islandImage from "@/../public/images/island-shore.jpg";

const Hero = () => {
  return (
    // <section className="relative min-h-screen flex items-center justify-center text-center text-white">
    <section className="relative h-[676] flex items-center justify-center text-center text-white">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <Image
          src={islandImage}
          alt="Dalmatian Coast beach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 pt-20 pb-12 md:pt-24 md:pb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 md:mt-24 md:mb-8 leading-tight max-w-5xl">
          Die besten Unterkünfte an der{" "}
          <span className="font-serif block mt-2">Makarska Riviera</span>
        </h1>

        {/* Search Bar */}
        <div className="w-full max-w-4xl mt-12 md:mt-20 lg:mt-24">
          <div className=" p-3 md:p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
              {/* Date Input */}
              <div className="relative md:col-span-2 flex items-center bg-white/90 rounded-md">
                <Calendar
                  className="absolute left-3 text-muted pointer-events-none"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Anreise / Abreise"
                  className="w-full bg-transparent pl-10 pr-4 py-3 md:py-4 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                />
              </div>

              {/* Guests Input */}
              <div className="relative md:col-span-2 flex items-center bg-white/90 rounded-md">
                <Users
                  className="absolute left-3 text-muted pointer-events-none"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Gäste"
                  className="w-full bg-transparent pl-10 pr-4 py-3 md:py-4 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                />
              </div>

              {/* Search Button */}
              <Button
                variant="primary"
                size="large"
                className="w-full md:w-auto"
              >
                Suche
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
