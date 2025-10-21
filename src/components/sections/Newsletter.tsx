// src/components/Newsletter.jsx

import React from "react";
// Corrected import paths based on your previous code
import { Button } from "@/components/layout/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Newsletter() {
  return (
    // Section with white background and padding
    <section className="bg-white text-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Grid layout: 1 column mobile, 2 columns desktop (40/60 split) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Empty Left Column (visible on md+) */}
          <div className="hidden md:block md:col-span-2">
            {/* This column is intentionally left empty */}
          </div>

          {/* Right Column (takes full width mobile, 60% desktop) */}
          <div className="md:col-span-3">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Makarska Exklusiv Newsletter
            </h2>
            {/* Description */}
            <p className="mb-8 md:mb-12 text-gray-600">
              Melde dich jetzt an und erfahre als
              <br className="block md:hidden" />
              Erste*r von exklusiven
              <br className="hidden md:block" />
              Angeboten für
              <br className="block md:hidden" />
              luxuriöse Ferienunterkünfte in Kroatien.
            </p>
            {/* Form */}
            <form className="space-y-6">
              {/* Name and Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {/* --- Name Input with Animation --- */}
                <div className="relative">
                  <Label htmlFor="newsletter-name" className="sr-only">
                    Name
                  </Label>
                  <Input
                    id="newsletter-name"
                    type="text"
                    placeholder="Name"
                    // --- FIX: Added shadow-none for focus states ---
                    className="peer rounded-none block w-full border-0 border-b-2 border-gray-300 bg-transparent p-2 placeholder-gray-500 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:shadow-none focus-visible:shadow-none"
                  />
                  {/* Underline animation element */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gray-800 transition-transform duration-300 ease-out peer-focus:scale-x-100"></div>
                </div>

                {/* --- Email Input with Animation --- */}
                <div className="relative mt-6 md:mt-0">
                  <Label htmlFor="newsletter-email" className="sr-only">
                    E-Mail
                  </Label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="E-Mail"
                    // --- FIX: Added shadow-none for focus states ---
                    className="peer rounded-none block w-full border-0 border-b-2 border-gray-300 bg-transparent p-2 placeholder-gray-500 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:shadow-none focus-visible:shadow-none"
                  />
                  {/* Underline animation element */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gray-800 transition-transform duration-300 ease-out peer-focus:scale-x-100"></div>
                </div>
              </div>

              {/* Checkbox and Privacy Policy */}
              <div className="flex items-start space-x-2 text-left">
                <Checkbox
                  id="newsletter-terms"
                  className="border-gray-400 data-[state=checked]:bg-gray-900 data-[state=checked]:text-white mt-1"
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="newsletter-terms"
                    className="text-sm font-medium text-gray-700"
                  >
                    Hiermit stimmst du unserer Datenschutzerklärung zu.
                    <br className="block" />
                    Bitte lies hier unsere Datenschutzbestimmungen.
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                variant="secondary"
                size="large"
                // className="bg-gray-900 mt-5 text-white hover:bg-gray-700 px-8 py-3 w-full sm:w-auto"
              >
                Jetzt anmelden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
