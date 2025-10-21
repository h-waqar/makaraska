// src/components/ReviewsSection.js

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, BadgeCheck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Add MORE reviews for a smoother visual loop! Example: 6+ items
const reviews = [
  {
    id: 1,
    name: "Mathias",
    date: "2025-04-07",
    // avatar: "/avatars/mathias.jpg", // Example path
    avatar: null,
    rating: 5,
    verified: true,
    text: "Unser letzter Urlaub in dem Haus mit Pool und traumhafter Aussicht war einfach fantastisch! Die Unterkunft war top ausgestattet, super sauber und perfekt zu erreichen. Wir haben uns sofort wohlgefühlt und die Zeit sehr genossen. Absolut empfehlenswert!",
    sourceIcon: "/icons/google.svg", // Example path
  },
  {
    id: 2,
    name: "Almin Muminovic",
    date: "2025-04-01",
    // avatar: "/avatars/almin.jpg", // Example path
    avatar: null,
    rating: 5,
    verified: true,
    text: "Wir hatten im August letzten Jahres das Vergnügen, in diesem wunderbaren Apartment in Tučepi zu übernachten – und es war einfach großartig! Von der ersten bis zur letzten Minute war alles perfekt organisiert. Die Lage ist unschlagbar.",
    sourceIcon: "/icons/google.svg", // Example path
  },
  {
    id: 3,
    name: "Vanesa Dzido",
    date: "2025-03-31",
    // avatar: "/avatars/vanesa.jpg",
    avatar: null,
    rating: 5,
    verified: true,
    text: "Ausgezeichneter Service! Die Kommunikation war schnell, lösungsorientiert und professionell. Alle unsere Anfragen wurden umgehend bearbeitet. Wir kommen gerne wieder!",
    sourceIcon: "/icons/google.svg", // Example path
  },
  {
    id: 4,
    name: "Another Guest",
    date: "2025-02-15",
    avatar: null, // No avatar
    rating: 4,
    verified: false,
    text: "Sehr schöne Unterkunft mit guter Lage. Kleinere Mängel wurden schnell behoben. Gutes Preis-Leistungs-Verhältnis. Wir würden wieder buchen.",
    sourceIcon: "/icons/google.svg", // Example path
  },
  {
    // Added another review
    id: 5,
    name: "Guest Five",
    date: "2025-01-10",
    avatar: null, // No avatar
    rating: 5,
    verified: true,
    text: "Einfach nur traumhaft! Die Villa übertraf all unsere Erwartungen. Sehr sauber, modern eingerichtet und der Poolbereich ist fantastisch. Wir kommen definitiv wieder!",
    sourceIcon: "/icons/google.svg", // Example path
  },
  {
    // Added another review
    id: 6,
    name: "Guest Six",
    date: "2024-12-20",
    // avatar: null, // No avatar
    avatar: null, // No avatar
    rating: 5,
    verified: true,
    text: "Perfekter Ort für einen entspannten Familienurlaub. Alles war wie beschrieben oder sogar besser. Die Gastgeber waren sehr freundlich und hilfsbereit. Sehr zu empfehlen, wir planen schon unseren nächsten Besuch!",
    sourceIcon: "/icons/google.svg", // Example path
  },
];

// --- Constants for Read More ---
const LINE_CLAMP_LINES = 3; // Number of lines to show initially (used for the class name)
const COLLAPSED_MAX_HEIGHT_CLASS = "max-h-[4rem]"; // Adjust visually (~3 lines of text-sm/leading-relaxed)
const EXPANDED_MAX_HEIGHT_CLASS = "max-h-[1000px]"; // Large value for expansion
const TRUNCATE_LENGTH_FOR_BUTTON = 100; // Rough estimate for when to show button

// --- Helper Components (Unchanged) ---
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

const AvatarPlaceholder = ({ name }: { name: string }) => {
  const initial = name ? name.charAt(0).toUpperCase() : "?";
  const bgColor = name === "Vanesa Dzido" ? "bg-purple-500" : "bg-gray-400";
  return (
    <div
      className={`flex items-center justify-center h-12 w-12 rounded-full ${bgColor} text-white font-semibold text-xl mr-4 flex-shrink-0`}
    >
      {initial}
    </div>
  );
};

// --- Updated Review Card ---
const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const showReadMoreButton = review.text.length > TRUNCATE_LENGTH_FOR_BUTTON;
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-white rounded shadow-md p-6 flex flex-col relative h-full">
      {/* Header */}
      <div className="flex items-center mb-4 flex-shrink-0">
        {review.avatar ? (
          <Image
            src={review.avatar}
            alt={review.name}
            width={48}
            height={48}
            className="rounded-full mr-4 flex-shrink-0"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <AvatarPlaceholder name={review.name} />
        )}
        <div className="flex-grow min-w-0">
          <p className="font-semibold text-gray-800 truncate">{review.name}</p>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
        {review.sourceIcon && (
          <Image
            src={review.sourceIcon}
            alt="Source"
            width={24}
            height={24}
            className="absolute top-4 right-4"
          />
        )}
      </div>
      {/* Rating */}
      <div className="flex items-center mb-3 flex-shrink-0">
        <StarRating rating={review.rating} />
        {review.verified && (
          <BadgeCheck className="h-5 w-5 text-blue-500 ml-2" />
        )}
      </div>

      {/* Animating Container */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isExpanded ? EXPANDED_MAX_HEIGHT_CLASS : COLLAPSED_MAX_HEIGHT_CLASS
        }`}
      >
        {/* --- FIX: Apply line-clamp class directly --- */}
        <p
          className={`text-gray-600 text-sm leading-relaxed mb-4 ${
            !isExpanded ? `line-clamp-${LINE_CLAMP_LINES}` : "" // Use the plugin's utility class
          }`}
        >
          {review.text}
        </p>
      </div>
      {/* --- End of FIX --- */}

      {/* Read More Button */}
      {showReadMoreButton && (
        <button
          onClick={toggleReadMore}
          className="text-sm text-blue-600 hover:underline self-start mt-auto pt-1 flex-shrink-0"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};

// --- Main Reviews Section (Unchanged) ---
export default function ReviewsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-12">
          Das sagen <br className="hidden md:block" /> unsere Gäste
        </h2>

        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 h-full">
                  <ReviewCard review={review} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
