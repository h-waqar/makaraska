"use client";

import React, { useState, useEffect, useRef } from "react"; // Import hooks
import { Button } from "@/components/ui/Button";
import { Phone, Share2, Menu, ChevronDown } from "lucide-react";
import Image from "next/image";

// Language data structure
const languages = [
  { code: "EN", name: "English" },
  { code: "PL", name: "Polish" },
  { code: "CZ", name: "Czech" },
];

function Header() {
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);
  // State for the currently selected language
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown

  // Custom hook logic to handle clicks outside the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLangSelect = (lang: (typeof languages)[0]) => {
    setSelectedLang(lang);
    setLangDropdownOpen(false); // Close dropdown on selection
  };

  return (
    <header className="w-full py-4 border-b border-foreground/10">
      <div className="container flex items-center justify-between">
        {/* Left Section: Logo and Navigation */}
        <div className="flex items-center gap-28">
          <a href="#" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo Icon" width={34} height={34} />
            <Image
              src="/logo-text.svg"
              alt="Dalmatia Logo"
              width={76}
              height={20}
            />
          </a>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-white hover:text-primary transition-colors"
                >
                  Unterkünfte
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-white hover:text-primary transition-colors"
                >
                  Inspiration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold text-white hover:text-primary transition-colors"
                >
                  Über uns
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Section: Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="icon">
            <Phone className="w-4 h-4 text-white" />
          </Button>
          <Button variant="icon">
            <Share2 className="w-4 h-4 text-white" />
          </Button>

          <div className="flex items-center gap-2 pl-2 ml-2 border-l border-foreground/20">
            <Button variant="primary" size="small">
              Jetzt buchen
            </Button>

            {/* Language Switcher Dropdown */}
            <div className="relative w-14" ref={dropdownRef}>
              <Button
                variant="subtle"
                size="small"
                className="!px-3 flex gap-1 bg-transparent border-none text-white"
                onClick={() => setLangDropdownOpen(!isLangDropdownOpen)}
              >
                {/* DYNAMIC: Display selected language code */}
                <span className="font-semibold">{selectedLang.code}</span>
                <ChevronDown
                  className={`w-4 h-4 opacity-70 transition-transform ${
                    isLangDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {/* Dropdown Menu - Conditionally Rendered with Animation */}
              {isLangDropdownOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-max bg-background rounded-md shadow-lg border border-foreground/10 z-10 origin-top-right transition-all duration-200 ease-out"
                  style={{ transform: "scale(1)", opacity: 1 }} // Simplified animation states
                >
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
        <div className="md:hidden">
          <Button variant="icon">
            <Menu className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
