import React from "react";
import { Button } from "@/components/ui/Button"; // Corrected path
import { Phone, Share2, Menu } from "lucide-react"; // Import necessary icons
import Image from "next/image";

function Header() {
  return (
    // The main header element, full-width with vertical padding.
    <header className="w-full py-4 border-b border-foreground/10">
      <div className="container flex items-center justify-between">
        {/* Left Section: Logo and Navigation */}
        <div className="flex items-center gap-28">
          {/* Logo - Using next/image is correct here */}
          <a href="#" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo Icon" width={34} height={34} />
            <Image
              src="/logo-text.svg"
              alt="Dalmatia Logo"
              width={76}
              height={20}
            />
          </a>

          {/* Main Navigation - Hidden on mobile */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="#"
                  className="text-base font-semibold text-white hover:text-primary transition-colors"
                >
                  Unterkünfte
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-semibold text-white hover:text-primary transition-colors"
                >
                  Inspiration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-semibold text-white hover:text-primary transition-colors"
                >
                  Über uns
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Section: Actions - Hidden on mobile */}
        {/* FIX: Using lucide-react icons allows them to be styled by parent text color */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="icon">
            <Phone className="w-4 h-4 text-white" />
          </Button>
          <Button variant="icon">
            <Share2 className="w-4 h-4 text-white" />
          </Button>
          <Button variant="primary" size="small">
            Jetzt buchen
          </Button>
        </div>

        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="md:hidden">
          <Button variant="icon">
            <Menu className="w-5 h-5 text-foreground" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
