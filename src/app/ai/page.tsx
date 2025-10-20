// app/page.tsx
import {
  Search,
  MapPin,
  Calendar,
  Users,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Tag,
  Wifi,
  Star,
  ArrowRight,
} from "lucide-react";

// A theme object to easily manage colors and styles
const theme = {
  primary: "text-zinc-800",
  secondary: "text-zinc-500",
  accent: "#00A799", // A teal color for buttons and highlights
  background: "bg-white",
  cardBackground: "bg-zinc-50",
  button:
    "bg-[#00A799] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#008F83] transition-colors",
  sectionPadding: "py-16 sm:py-20",
};

// Reusable Section Component for consistent padding and layout
const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`${theme.sectionPadding} ${className}`}>
    <div className="container mx-auto px-4">{children}</div>
  </section>
);

// Reusable Heading Component
const SectionHeading = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`flex justify-between items-center mb-8 ${className}`}>
    <h2 className={`text-3xl font-bold ${theme.primary}`}>{children}</h2>
    <a
      href="#"
      className="text-sm font-semibold flex items-center gap-2 hover:text-zinc-900"
      style={{ color: theme.accent }}
    >
      Show All <ChevronRight size={16} />
    </a>
  </div>
);

// --- Individual Components ---

const Hero = () => (
  <div className="relative h-[600px] text-white">
    {/* Background Image - Replace with your own */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723a9ce6890?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
    </div>

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
        The Best Accommodations on the <br /> Dalmatian Coast
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        Discover hand-picked villas, apartments, and holiday homes for your
        perfect getaway.
      </p>
      <SearchBar />
    </div>
  </div>
);

const SearchBar = () => (
  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
    <div className="relative col-span-1 md:col-span-2">
      <MapPin
        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
        size={20}
      />
      <input
        type="text"
        placeholder="Where are you going?"
        className="w-full bg-transparent pl-10 pr-4 py-3 focus:outline-none text-zinc-800 placeholder-zinc-500"
      />
    </div>
    <div className="relative col-span-1 border-y md:border-y-0 md:border-x border-zinc-200">
      <Calendar
        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
        size={20}
      />
      <input
        type="text"
        placeholder="Check in - Check out"
        className="w-full bg-transparent pl-10 pr-4 py-3 focus:outline-none text-zinc-800 placeholder-zinc-500"
      />
    </div>
    <button
      className="col-span-1 flex items-center justify-center gap-2"
      style={{
        backgroundColor: theme.accent,
        color: "white",
        padding: "14px",
        borderRadius: "8px",
      }}
    >
      <Search size={20} />
      <span className="font-bold">Search</span>
    </button>
  </div>
);

const PopularDestinations = () => {
  const destinations = [
    {
      name: "Makarska Riviera",
      img: "https://images.unsplash.com/photo-1616027477382-39f86468407a?q=80&w=1964&auto=format&fit=crop",
    },
    {
      name: "Split",
      img: "https://images.unsplash.com/photo-1579513360938-3cda558f654b?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Hvar",
      img: "https://images.unsplash.com/photo-159042212239-55610a74703a?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Dubrovnik",
      img: "https://images.unsplash.com/photo-1562268393-703a42d38519?q=80&w=1964&auto=format&fit=crop",
    },
  ];

  return (
    <Section>
      <SectionHeading>Popular Destinations</SectionHeading>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <div
            key={dest.name}
            className="relative rounded-xl overflow-hidden h-80 group"
          >
            <img
              src={dest.img}
              alt={dest.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
              {dest.name}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

const AccommodationCard = ({
  img,
  title,
  location,
  guests,
  price,
}: {
  img: string;
  title: string;
  location: string;
  guests: number;
  price: number;
}) => (
  <div>
    <div className="relative rounded-xl overflow-hidden mb-4 aspect-square">
      <img src={img} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className={`font-bold ${theme.primary}`}>{title}</h3>
        <p className={`text-sm ${theme.secondary}`}>{location}</p>
        <p
          className={`text-sm ${theme.secondary} flex items-center gap-1 mt-1`}
        >
          <Users size={14} /> up to {guests} guests
        </p>
      </div>
      <div className="text-right">
        <p className={`font-bold text-lg ${theme.primary}`}>{price}€</p>
        <p className={`text-sm ${theme.secondary}`}>/ night</p>
      </div>
    </div>
  </div>
);

const CoastalAccommodations = () => {
  const accommodations = [
    {
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      title: "Villa Ivka",
      location: "Brela",
      guests: 8,
      price: 160,
    },
    {
      img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop",
      title: "Apartment Mare",
      location: "Tucepi",
      guests: 4,
      price: 95,
    },
    {
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      title: "Seaside House",
      location: "Podgora",
      guests: 6,
      price: 210,
    },
    {
      img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1949&auto=format&fit=crop",
      title: "Villa Sunset",
      location: "Makarska",
      guests: 10,
      price: 320,
    },
    {
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
      title: "Studio Bepo",
      location: "Baska Voda",
      guests: 2,
      price: 70,
    },
    {
      img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
      title: "Holiday Home Olive",
      location: "Igrane",
      guests: 5,
      price: 150,
    },
  ];

  return (
    <Section className={theme.cardBackground}>
      <SectionHeading>Accommodations on the Coast</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {accommodations.map((item) => (
          <AccommodationCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
};

const Advantages = () => {
  const advantages = [
    {
      icon: Tag,
      title: "Best Price Guarantee",
      description: "Find the lowest prices for your stay.",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Your data is safe with our secure payment system.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Properties",
      description: "Every property is checked by our team.",
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "Stay connected with free internet in most properties.",
    },
  ];
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop"
            alt="Relaxing by the pool"
            className="rounded-xl object-cover w-full h-full max-h-[500px]"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Advantages</h2>
          <div className="space-y-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="flex gap-4 items-start">
                <div
                  className="p-3 bg-teal-100 rounded-full"
                  style={{ backgroundColor: `${theme.accent}20` }}
                >
                  <adv.icon size={24} style={{ color: theme.accent }} />
                </div>
                <div>
                  <h3 className="font-bold">{adv.title}</h3>
                  <p className={theme.secondary}>{adv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

const CallToAction = () => (
  <div className="relative py-24 sm:py-32 text-white">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
    </div>
    <div className="relative z-10 text-center container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-4">Dream. Book. Travel.</h2>
      <p className="max-w-xl mx-auto mb-8">
        Your next unforgettable journey is just a few clicks away. Let us help
        you find the perfect spot.
      </p>
      <button className={theme.button}>
        Explore Properties <ArrowRight size={20} className="inline ml-2" />
      </button>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-zinc-100 text-zinc-600">
    <div className="container mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
      <div className="col-span-2 lg:col-span-1">
        <h3 className="font-bold text-lg text-zinc-800 mb-2">CoastalStays</h3>
        <p className="text-sm">
          Your expert for holidays on the Dalmatian Coast.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-zinc-800 mb-4">Information</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="hover:text-zinc-900">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-zinc-900">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-zinc-900">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-zinc-800 mb-4">Support</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="hover:text-zinc-900">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-zinc-900">
              Booking Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-zinc-900">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-zinc-800 mb-4">Destinations</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="hover:text-zinc-900">
              Makarska
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-zinc-900">
              Split
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-zinc-900">
              Hvar
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-zinc-900">
              Dubrovnik
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-zinc-800 mb-4">Follow Us</h4>
        {/* Add social icons here */}
      </div>
    </div>
    <div className="border-t border-zinc-200">
      <div className="container mx-auto px-4 py-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} CoastalStays. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// --- Main Page Component ---

export default function HomePage() {
  return (
    <main className={theme.background}>
      <Hero />
      <PopularDestinations />
      <CoastalAccommodations />
      <Advantages />
      <CallToAction />
      <Footer />
    </main>
  );
}
