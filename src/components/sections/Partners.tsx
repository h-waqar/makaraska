"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// =================================================================
// 1. Partner Logos Data
// =================================================================
// NOTE: Replace these placeholder URLs with your actual logo files in /public/logos/
const partners = [
  {
    name: "Airbnb",
    logoUrl: "/logos/airbnb.svg",
    width: 115,
    height: 36,
  },
  {
    name: "Booking.com",
    logoUrl: "/logos/booking.svg",
    width: 180,
    height: 28,
  },
  {
    name: "Atraveo",
    logoUrl: "/logos/atraveo.svg",
    width: 155,
    height: 34,
  },
  {
    name: "Vrbo",
    logoUrl: "/logos/vrbo.svg",
    width: 100,
    height: 46,
  },
  {
    name: "Holidu",
    logoUrl: "/logos/holidu.svg",
    width: 120,
    height: 30,
  },
  // Duplicate for seamless looping effect if needed
  {
    name: "Airbnb",
    logoUrl: "/logos/airbnb.svg",
    width: 115,
    height: 36,
  },
  {
    name: "Booking.com",
    logoUrl: "/logos/booking.svg",
    width: 180,
    height: 28,
  },
];

// =================================================================
// 2. Main Partners Component
// =================================================================
const Partners = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      Autoplay({
        delay: 1000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <section className="bg-background-subtle py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <h2 className="mb-8 text-2xl font-medium md:mb-12">Unsere Partner</h2>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {/* Slides */}
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-shrink-0 flex-grow-0 basis-1/2 items-center justify-center sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <Image
                  src={partner.logoUrl}
                  alt={`${partner.name} logo`}
                  width={partner.width}
                  height={partner.height}
                  className="h-auto w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
