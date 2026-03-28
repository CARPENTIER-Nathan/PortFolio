"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const liens = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/competences", label: "Compétences" },
  { href: "/contact", label: "Contact" },
];

export default function BarreNavigation() {
  const cheminActuel = usePathname();
  const [menuMobileOuvert, setMenuMobileOuvert] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
          >
            Nathan CARPENTIER
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {liens.map((lien) => (
              <Link
                key={lien.href}
                href={lien.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  cheminActuel === lien.href
                    ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg shadow-violet-500/25"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {lien.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuMobileOuvert(!menuMobileOuvert)}
            aria-label="Menu"
          >
            {menuMobileOuvert ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuMobileOuvert && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200">
          <div className="px-4 py-3 space-y-1">
            {liens.map((lien) => (
              <Link
                key={lien.href}
                href={lien.href}
                onClick={() => setMenuMobileOuvert(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  cheminActuel === lien.href
                    ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {lien.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
