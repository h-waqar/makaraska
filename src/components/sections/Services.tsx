import React from "react";
import {
  Search,
  Phone,
  Car,
  Sparkles,
  ShieldCheck,
  Bookmark,
} from "lucide-react";

// =================================================================
// Data for Service Items
// =================================================================
const serviceItems = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Exklusive Unterkünfte",
    description:
      "Qualität vor Quantität. Alle Unterkünfte entsprechen den höchsten Ansprüchen.",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Erreichbarkeit",
    description:
      "Wir sind 24/7 für euch erreichbar. Telefon, WhatsApp oder Email.",
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "Flughafentransfer",
    description: "Wir organisieren, je nach Bedarf, alle Fahrten für euch.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Reinigung",
    description:
      "Zusätzliche Reinigungen während des Aufenthalts können gerne in Auftrag gegeben werden.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Qualitätskontrolle",
    description:
      "Sauberkeit und eine hochwertige Ausstattung sind unsere Priorität.",
  },
  {
    icon: <Bookmark className="h-6 w-6" />,
    title: "Direkte Buchungen",
    description:
      "Unnötige Kosten & Servicegebühren vermeiden und direkt bei uns buchen",
  },
];

// =================================================================
// Main Services Component
// =================================================================
const Services = () => {
  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container">
        {/* Main layout grid: 1 col on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Left Column: Section Header */}
          <div className="lg:col-span-1 text-left">
            <h2 className="text-3xl">Unser Service im Überblick</h2>
          </div>

          {/* Right Column: Responsive Grid for Service Items */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-2">
            {serviceItems.map((item, index) => (
              <div key={index}>
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0 rounded bg-foreground text-background p-2">
                    {item.icon}
                  </div>
                  <h3 className="text-xl text-foreground">{item.title}</h3>
                </div>
                {/* Description */}
                <p className="text-base text-color-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
