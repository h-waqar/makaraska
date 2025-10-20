// src/app/page.tsx
import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/Hero";

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />

      {/* Example content section to demonstrate scroll behavior */}
      <div className="min-h-screen bg-background-subtle">
        <div className="container px-4 md:px-6 py-12 md:py-20">
          <h2 className="font-serif text-4xl md:text-6xl mb-6">
            Page Content Starts Here
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            This section demonstrates the header&apos;s scroll behavior. As you
            scroll down, the header background and logo colors will change
            smoothly.
          </p>
        </div>
      </div>
    </main>
  );
}
