"use client";

import React from "react";
import { Button } from "@/components/layout/Button";
import Image from "next/image";
import { Star, Users, BedDouble, MapPin } from "lucide-react";

// Mock data based on your design
const accommodations = [
  {
    href: "#",
    imageUrl: "/images/villa.png",
    rating: 5,
    reviews: 6,
    title: "Villa Ester - Stunning View !",
    location: "Podgora",
    guests: 8,
    bedrooms: 4,
    price: 180,
  },
  {
    href: "#",
    imageUrl: "/images/villa.png",
    rating: 5,
    reviews: 11,
    title: "Villa Marta - Luxury Villa",
    location: "Baška Voda",
    guests: 8,
    bedrooms: 4,
    price: 280,
  },
  {
    href: "#",
    imageUrl: "/images/villa.png",
    rating: 5,
    reviews: 26,
    title: "Villa De Linda",
    location: "Makarska",
    guests: 8,
    bedrooms: 3,
    price: 280,
  },
  {
    href: "#",
    imageUrl: "/images/villa.png",
    rating: 5,
    reviews: 21,
    title: "Villa Panorama - Incredible Seaview",
    location: "Makarska",
    guests: 6,
    bedrooms: 3,
    price: 220,
  },
  {
    href: "#",
    imageUrl: "/images/villa.png",
    rating: 5,
    reviews: 13,
    title: 'Incredibly beautiful Stone House "Villa Lota"',
    location: "Baška Voda, Bast",
    guests: 5,
    bedrooms: 2,
    price: 230,
  },
  {
    href: "#",
    imageUrl: "/images/villa.png",
    rating: 5,
    reviews: 23,
    title: "Villa Montes",
    location: "Makarska",
    guests: 6,
    bedrooms: 3,
    price: 360,
  },
];

// =================================================================
// Reusable AccommodationCard Component
// =================================================================
interface AccommodationCardProps {
  data: (typeof accommodations)[0];
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ data }) => {
  return (
    <div className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded">
        <a href={data.href} className="absolute inset-0 z-10">
          <span className="sr-only">View Details</span>
        </a>
        <Image
          src={data.imageUrl}
          alt={data.title}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded bg-white/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm shadow-sm">
            <Star className="h-3.5 w-3.5 text-white fill-white/90 drop-shadow-sm" />
            <span>
              {data.rating} ({data.reviews})
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <h3 className="font-sans text-lg font-semibold text-foreground truncate">
          {data.title}
        </h3>
        {/* Updated Details Line */}
        <div className="mt-2 flex items-center text-sm text-muted">
          <span>
            <MapPin className="h-5 w-5 inline-block mr-1" />
          </span>
          <span>{data.location}</span>
          <span className="mx-2">|</span>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{data.guests}</span>
          </div>
          <span className="mx-2">|</span>
          <div className="flex items-center gap-1">
            <BedDouble className="h-4 w-4" />
            <span>{data.bedrooms}</span>
          </div>
        </div>
        <p className="mt-3 font-sans text-lg font-semibold text-foreground">
          <span className="text-base font-normal text-muted">ab </span>€
          {data.price}
          <span className="text-sm font-normal text-muted">/night</span>
        </p>
      </div>
    </div>
  );
};

// =================================================================
// Main FeaturedAccommodations Component
// =================================================================
const FeaturedAccommodations = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 md:mb-10">
          <h2 className="font-serif text-4xl text-foreground md:text-5xl">
            Our selection of <br /> accommodations
          </h2>
          <div className="hidden sm:block">
            <Button variant="secondary" size="small">
              All accommodations
            </Button>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {accommodations.map((acc, index) => (
            <AccommodationCard key={index} data={acc} />
          ))}
        </div>

        {/* Mobile-only Button */}
        <div className="mt-8 sm:hidden">
          <Button variant="secondary" size="small" className="w-full">
            All accommodations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAccommodations;
