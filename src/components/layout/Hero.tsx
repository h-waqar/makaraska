import React from "react";
import { Button } from "@/components/ui/Button";
import { Calendar, Users } from "lucide-react";
import Image from "next/image";
import islandImage from "@/../public/images/island-shore.jpg";

const Hero = () => {
  return (
    <section className="relative h-[676] flex items-center justify-center text-center text-white">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <Image
          src={islandImage}
          alt="Dalmatian Coast beach"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center mt-20 px-4">
        <h1 className="text-6xl md:text-6xl font-medium mb-4 leading-none">
          Die besten Unterkünfte an der <br />{" "}
          <span className="font-serif">Makarska Riviera</span>
        </h1>

        {/* Search Bar */}
        <div className="w-full max-w-4xl   p-4 rounded-lg  grid grid-cols-1 md:grid-cols-5 gap-4 items-center mt-24">
          <div className="relative md:col-span-2 flex items-center bg-white/90 rounded">
            <Calendar className="absolute left-3 text-muted" size={20} />
            <input
              type="text"
              placeholder="Anreise / Abreise"
              className="w-full bg-transparent pl-10 p-4 text-foreground placeholder:text-muted focus:outline-none"
            />
          </div>

          <div className="relative md:col-span-2 flex items-center bg-white/90 rounded">
            <Users className="absolute left-3 text-muted" size={20} />
            <input
              type="text"
              placeholder="Gäste"
              className="w-full bg-transparent pl-10 p-4 text-foreground placeholder:text-muted focus:outline-none"
            />
          </div>

          <Button variant="primary" size="large">
            Suche
          </Button>
        </div>
      </div>

      {/*  */}
    </section>
  );
};

export default Hero;
