"use client"; // This is now a client component because it uses hooks

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

// Data for the cards using the specified placeholder image
const locations = [
  {
    href: "/brela",
    imageUrl: "/images/island-shore.jpg",
    title: "Brela",
    subtitle: "Kristallklares Wasser",
  },
  {
    href: "/makarska",
    imageUrl: "/images/island-shore.jpg",
    title: "Makarska",
    subtitle: "Unterkünfte für Entdecker",
  },
  {
    href: "/tucepi",
    imageUrl: "/images/island-shore.jpg",
    title: "Tucepi",
    subtitle: "Historische Schönheit",
  },
  {
    href: "/baska-voda",
    imageUrl: "/images/island-shore.jpg",
    title: "Baška Voda",
    subtitle: "Lebhafte Promenaden",
  },
];

// =================================================================
// Reusable LocationCard Component
// =================================================================
interface LocationCardProps {
  href: string;
  imageUrl: string;
  title: string;
  subtitle: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  href,
  imageUrl,
  title,
  subtitle,
}) => {
  return (
    <a
      href={href}
      className="group relative block w-[316] h-[422]  overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-out hover:scale-105"
    >
      {/* Background Image using Next.js Image component */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 w-full p-5 text-white md:p-6 text-center">
        <h3 className="mb-1 font-serif text-3xl font-medium md:text-4xl">
          {title}
        </h3>
        <p className="font-sans text-sm tracking-wide opacity-90">{subtitle}</p>
      </div>
    </a>
  );
};

// =================================================================
// Main FeaturedLocations Component
// =================================================================
const FeaturedLocations = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    containScroll: "trimSnaps",
  });

  return (
    <section className=" md:py-24 overflow-hidden">
      {/* Removed .container, added padding directly for full-width effect */}
      {/* <div className="mx-auto max-w-[1600px]"> */}
      <div className="container">
        {/* Main layout grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-1  ">
            <h2 className="mb-6 max-w-md font-serif text-3xl text-foreground md:text-4xl">
              Entdecken Sie unsere Ferienhäuser und Apartments an den schönsten
              Orten an der Makarska Riviera
            </h2>
            {/* Desktop-only Button */}
            <div className="hidden lg:block">
              <Button variant="secondary" size="small">
                Alle Unterkünfte
              </Button>
            </div>
          </div>

          {/* Right Column: Carousel */}
          <div className="lg:col-span-2">
            {/* Embla: Viewport */}
            <div className="overflow-hidden lg:pl-4" ref={emblaRef}>
              {/* Embla: Container */}
              <div className="flex">
                {/* Embla: Slides */}
                {locations.map((loc, index) => (
                  <div
                    key={index}
                    // Adjusted basis for desktop to show ~2.5 slides
                    className="relative flex-shrink-0 flex-grow-0 basis-1/5 pl-4 first:pl-0"
                    // className="relative flex-shrink-0 flex-grow-0 basis-4/5 pl-4 sm:basis-3/5 md:basis-1/2 lg:basis-2/5"
                  >
                    <LocationCard
                      href={loc.href}
                      imageUrl={loc.imageUrl}
                      title={loc.title}
                      subtitle={loc.subtitle}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only Button */}
        <div className="mt-8 block lg:hidden  sm:px-6">
          <Button variant="secondary" size="small">
            Alle Unterkünfte
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLocations;
