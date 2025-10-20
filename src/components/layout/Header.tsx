// src/components/layout/Header.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Phone, Menu, ChevronDown, Send, X, Tally2 } from "lucide-react";
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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
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
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLangSelect = (lang: (typeof languages)[0]) => {
    setSelectedLang(lang);
    setLangDropdownOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full py-3 md:py-4 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? "bg-background border-b border-foreground/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container px-4 md:px-6 flex items-center justify-between">
          {/* Left Section: Logo and Navigation */}
          <div className="flex items-center gap-8 lg:gap-28">
            <a href="#" className="flex items-center gap-2">
              <Image
                src={scrolled ? "/logo-primary.svg" : "/logo.svg"}
                alt="Logo Icon"
                width={34}
                height={34}
                className="w-7 h-7 md:w-[34px] md:h-[34px]"
              />
              <Image
                src={scrolled ? "/logo-text-black.svg" : "/logo-text.svg"}
                alt="Makarska Logo"
                width={76}
                height={20}
                className="h-4 md:h-5 w-auto"
              />
            </a>
            <nav className="hidden lg:flex">
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

          {/* Right Section: Actions - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="icon"
              size="small"
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
              size="small"
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

            <div className="flex items-center gap-2 pl-2 ml-2">
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
                  <div className="absolute top-full right-0 mt-2 w-max bg-background rounded-md shadow-lg border border-foreground/10 z-10">
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
          <div className="lg:hidden">
            <Button
              variant="icon"
              size="small"
              className={
                // scrolled ? "!border !border-black hover:bg-transparent" : ""
                // scrolled ? " hover:bg-transparent" : ""
                "border-none hover:bg-transparent"
              }
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X
                  className={`w-5 h-5 transition-colors ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                />
              ) : (
                <Tally2
                  className={`transform rotate-90 w-5 h-5 transition-colors ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-foreground/10 shadow-lg">
            <nav className="container px-4 py-6">
              <ul className="space-y-4 mb-6">
                <li>
                  <a
                    href="#"
                    className="block text-base font-semibold text-foreground py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Unterkünfte
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-base font-semibold text-foreground py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Inspiration
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-base font-semibold text-foreground py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Über uns
                  </a>
                </li>
              </ul>

              <div className="space-y-4 pt-4 border-t border-foreground/10">
                <div className="flex gap-2">
                  <Button variant="icon" size="small" className="flex-1">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="icon" size="small" className="flex-1">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>

                <Button variant="primary" size="small" className="w-full">
                  Jetzt buchen
                </Button>

                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLangSelect(lang);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex-1 p-3 rounded-md border text-sm font-semibold transition-colors ${
                        selectedLang.code === lang.code
                          ? "bg-primary text-white border-primary"
                          : "bg-transparent text-foreground border-foreground/20 hover:border-primary"
                      }`}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
