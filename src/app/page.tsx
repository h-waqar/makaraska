// src/app/page.tsx
import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/Hero";
import DoubleImage from "@/components/sections/DoubleImage";
import FeaturedAccommodations from "@/components/sections/FeaturedAccommodations";
import FeaturedLocations from "@/components/sections/FeaturedLocations";
import Partners from "@/components/sections/Partners";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Reviews from "@/components/sections/Reviews";
import NotFound from "@/components/sections/NotFound";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <FeaturedLocations />
      <FeaturedAccommodations />
      <DoubleImage />
      <Services />
      <Partners />
      <Contact />
      <Reviews />
      <NotFound />
      <Newsletter />
      <Footer />
    </main>
  );
}
