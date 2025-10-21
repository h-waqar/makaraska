import React from "react";
import { Button } from "@/components/layout/Button";
import { Calendar, Users, Search } from "lucide-react";
// The video path is now correctly used in a <video> tag
// import islandVideo from "@/../public/videos/hero.mp4";

const Hero = () => {
  return (
    <section className="relative h-[676px] flex items-center justify-center text-center text-white">
      {/* Background Video and Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="https://res.cloudinary.com/hwaqar/video/upload/v1761049637/Makarska-homepage_bghlvh.mp4" // Ensure this path is correct
          // src="/videos/hero.mp4" // Ensure this path is correct
          autoPlay
          loop
          muted
          playsInline // Important for iOS and mobile browsers
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 pt-20 pb-12 md:pt-24 md:pb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 md:mt-24 md:mb-8 leading-none max-w-5xl">
          Die besten {<br className="md:hidden" />} Unterkünfte an der{" "}
          <span className="font-serif block mt-2">Makarska Riviera</span>
        </h1>

        {/* Search Bar */}
        <div className="w-full max-w-4xl mt-12 md:mt-20 lg:mt-24">
          {/* Desktop Layout - Original */}
          <div className="hidden md:block p-3 md:p-4 rounded">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
              {/* Date Input */}
              <div className="relative md:col-span-2 flex items-center bg-white/90 rounded">
                <Calendar
                  className="absolute left-3 text-muted pointer-events-none"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Anreise / Abreise"
                  className="w-full bg-transparent pl-10 pr-4 py-3 md:py-4 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary rounded"
                />
              </div>

              {/* Guests Input */}
              <div className="relative md:col-span-2 flex items-center bg-white/90 rounded">
                <Users
                  className="absolute left-3 text-muted pointer-events-none"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Gäste"
                  className="w-full bg-transparent pl-10 pr-4 py-3 md:py-4 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary rounded"
                />
              </div>

              {/* Search Button - Text */}
              <Button
                variant="primary"
                size="large"
                className="w-full md:w-auto"
              >
                Suche
              </Button>
            </div>
          </div>

          {/* Mobile Layout - Custom Pattern */}
          <div className="md:hidden space-y-3">
            {/* Date Input - Full Width */}
            <div className="relative flex items-center bg-white/90 rounded">
              <Calendar
                className="absolute left-3 text-muted pointer-events-none"
                size={20}
              />
              <input
                type="text"
                placeholder="Anreise / Abreise"
                className="w-full bg-transparent pl-10 pr-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary rounded"
              />
            </div>

            {/* Guests Input and Search Icon Button Row */}
            <div className="grid grid-cols-[1fr_auto] gap-3">
              {/* Guests Input */}
              <div className="relative flex items-center bg-white/90 rounded">
                <Users
                  className="absolute left-3 text-muted pointer-events-none"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Gäste"
                  className="w-full bg-transparent pl-10 pr-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary rounded"
                />
              </div>

              {/* Search Icon Button */}
              <Button
                variant="icon"
                size="large"
                className="aspect-square w-14 px-0 !bg-primary text-white border-none"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
