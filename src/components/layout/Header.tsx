"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Phone, Menu, ChevronDown, Send } from "lucide-react";
import Image from "next/image";

// Language data structure
const languages = [
  { code: "DE", name: "Deutsch" },
  { code: "EN", name: "English" },
  { code: "PL", name: "Polish" },
  { code: "CS", name: "Czech" },
];

function Header() {
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // State to track scroll position
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to handle clicks outside the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLangSelect = (lang: (typeof languages)[0]) => {
    setSelectedLang(lang);
    setLangDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full py-4 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-background border-b border-foreground/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Left Section: Logo and Navigation */}
        <div className="flex items-center gap-28">
          <a href="#" className="flex items-center gap-2">
            {/* Conditionally swaps the SVG source based on scroll state */}
            <Image
              src={scrolled ? "/logo-primary.svg" : "/logo.svg"}
              alt="Logo Icon"
              width={34}
              height={34}
            />
            <Image
              src={scrolled ? "/logo-text-black.svg" : "/logo-text.svg"}
              alt="Makarska Logo"
              width={76}
              height={20}
            />
          </a>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="#"
                  className={`text-sm font-semibold transition-colors ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  Unterkünfte
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-sm font-semibold transition-colors ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  Inspiration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-sm font-semibold transition-colors ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  Über uns
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Section: Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="icon"
            className={
              scrolled ? "!border !border-black hover:bg-transparent" : ""
            }
          >
            <Phone
              className={`w-4 h-4 transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            />
          </Button>
          <Button
            variant="icon"
            className={
              scrolled ? "!border !border-black hover:bg-transparent" : ""
            }
          >
            <Send
              className={`w-4 h-4 transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            />
          </Button>

          <div className="flex items-center gap-2 pl-2 ml-2 ">
            <Button variant="primary" size="small">
              Jetzt buchen
            </Button>

            <div className="relative" ref={dropdownRef}>
              <Button
                variant="subtle"
                size="small"
                className={`!px-3 flex gap-1 bg-transparent border-none transition-colors ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
                onClick={() => setLangDropdownOpen(!isLangDropdownOpen)}
              >
                <span className="font-semibold">{selectedLang.code}</span>
                <ChevronDown
                  className={`w-4 h-4 opacity-70 transition-transform ${
                    isLangDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-max bg-background rounded-md shadow-lg border border-foreground/10 z-10 origin-top-right">
                  <ul className="p-2">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          onClick={() => handleLangSelect(lang)}
                          className="w-full flex items-center justify-between gap-4 p-2 rounded-md hover:bg-primary hover:text-white text-left"
                        >
                          <span className="text-sm">{lang.name}</span>
                          <span className="font-semibold">{lang.code}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden pe-2">
          <Button
            variant="icon"
            className={
              scrolled ? "!border !border-black hover:bg-transparent" : ""
            }
          >
            <Menu
              className={`w-5 h-5 transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
