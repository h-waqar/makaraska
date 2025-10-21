// src/components/Footer.jsx

import React from "react";
import Link from "next/link"; // Use Next.js Link for internal navigation
import { Instagram, Facebook } from "lucide-react";

// Footer Navigation Data (for easier management)
const navLinks1 = [
  { href: "/unterkuenfte", label: "Unterkünfte" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/inspiration", label: "Inspiration" },
];

const navLinks2 = [
  { href: "/straende", label: "Strände" },
  { href: "/restaurants", label: "Restaurants" },
  { href: "/sehenswuerdigkeiten", label: "Sehenswürdigkeiten" },
  { href: "/rafting-tour", label: "Rafting Tour" },
];

const legalLinks = [
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/impressum", label: "Impressum" },
  { href: "/agb", label: "AGB" },
];

// --- Social Links Component ---
const SocialIcons = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-4 ${className}`}>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="text-gray-600 hover:text-gray-900"
    >
      <Instagram size={24} />
    </a>
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="text-gray-600 hover:text-gray-900"
    >
      <Facebook size={24} />
    </a>
  </div>
);

// --- Main Footer Component ---
export default function Footer() {
  return (
    // Use a background color consistent with your theme, e.g., bg-background-subtle or similar from your CSS
    <footer className="bg-[#F7F5F2] text-gray-700 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* --- Top Section: Tagline, Contact, Nav (Grid on Large Screens) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10">
          {/* Tagline & Mobile Social Icons */}
          <div className="lg:col-span-4">
            {" "}
            {/* Takes more space on large screens */}
            <h2 className="text-3xl lg:text-4xl font-serif text-gray-800 mb-6 leading-tight">
              Makarska erleben – mit der perfekten Unterkunft für deinen Urlaub
            </h2>
            {/* Social Icons - Visible only on mobile/tablet */}
            <SocialIcons className="lg:hidden" />
          </div>

          {/* Spacer on Large Screens */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Contact Info */}
          <div className="lg:col-span-3 text-sm leading-relaxed">
            <p className="font-semibold text-gray-800 mb-1">
              Makarska Exklusiv
            </p>
            <p>Kralja Zvonimira 1 12</p>
            <p>21300 Makarska</p>
            <p className="mb-3">Croatia</p>
            <p>
              <a href="tel:+491732065450" className="hover:text-gray-900">
                +491732065450
              </a>
            </p>
            <p>
              <a
                href="mailto:info@makarska-exklusive.com"
                className="hover:text-gray-900"
              >
                info@makarska-exklusive.com
              </a>
            </p>
          </div>

          {/* Navigation Links Column 1 */}
          <div className="lg:col-span-2 text-sm">
            <nav className="flex flex-col space-y-2">
              {navLinks1.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-gray-900 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Navigation Links Column 2 */}
          <div className="lg:col-span-2 text-sm">
            {" "}
            {/* Takes slightly more space */}
            <nav className="flex flex-col space-y-2">
              {navLinks2.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-gray-900 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* --- Bottom Section: Legal Links & Desktop Social Icons --- */}
        <div className="border-t border-gray-300 pt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between text-sm">
          {/* Legal Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-4 lg:mb-0">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons - Hidden on mobile/tablet, shown on large */}
          <SocialIcons className="hidden lg:flex" />
        </div>
      </div>
    </footer>
  );
}
