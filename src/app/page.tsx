import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/Hero";

export default function HomePage() {
  return (
    // Add a main tag with a relative position to ensure proper layout stacking
    <main className="relative">
      <Header />
      <HeroSection />

      {/* Add a placeholder div to see the scroll effect */}
      {/* This gives the page content to scroll past the hero section */}
      <div className="h-screen bg-background-subtle">
        <div className="container py-20">
          <h2 className="font-serif text-6xl">Page Content Starts Here</h2>
        </div>
      </div>
    </main>
  );
}
