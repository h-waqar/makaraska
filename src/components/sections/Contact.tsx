import React from "react";
import Image from "next/image";
import { Button } from "@/components/layout/Button";

// =================================================================
// Contact Section Component
// =================================================================

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-20 overflow-hidden">
      {" "}
      {/* Added overflow-hidden */}
      <div className="container mx-auto px-4">
        {/* Grid layout for desktop, single column for mobile */}
        {/* REMOVED w-1/2 to allow full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center">
          {" "}
          {/* Increased gap */}
          {/* --- Left Column --- */}
          <div className="flex flex-col space-y-6 md:mt-48">
            <div className="md:max-w-[316]">
              <h2 className="text-2xl md:text-3xl">
                {" "}
                {/* Slightly larger text */}
                Wir sind jederzeit für Sie erreichbar
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Fühlen Sie sich nie mit einem Problem allein gelassen, unser
                Team wird alle Wünsche erfüllen, um Ihren Aufenthalt perfekt zu
                machen.
              </p>
              <div className="mt-10">
                <Button
                  size="large" // Correct size prop for shadcn/ui Button
                  className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-3" // Added padding for size
                >
                  Jetzt kontaktieren
                </Button>
              </div>
            </div>
            {/* Image shown below text */}
            {/* Adjusted aspect ratio to be wider */}
            <div className="relative aspect-[4/5] md:h-[422] md:w-[316] mt-6 md:mt-10">
              <Image
                src="/images/gallery-two.png"
                alt="Beautiful turquoise sea and cliffs"
                fill // Use fill instead of layout="fill"
                style={{ objectFit: "cover" }} // Use style for objectFit with fill
                className="rounded shadow-md"
              />
            </div>
          </div>
          {/* --- Right Column (Hidden on Mobile) --- */}
          {/* Made width full and adjusted aspect ratio */}
          <div className="hidden md:block relative w-full h-full overflow-hidden rounded">
            {" "}
            {/* Use aspect ratio and let height be auto */}
            <div className="md:h-[644] md:w-[644] relative">
              <Image
                src="/images/tower.png"
                alt="Coastal town with bell tower and pink flowers"
                fill
                style={{ objectFit: "cover" }}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
