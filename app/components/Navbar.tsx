"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Service {
  slug: string;
  title: string;
}

export default function Navbar({ services }: { services: Service[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // NUOVO STATO
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-999 w-full transition-all duration-300 border-b 
      ${scrolled ? "bg-sepia-dark/95 backdrop-blur-md py-2 border-rosewood/10" : "bg-sepia-dark py-4 border-transparent"}`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto relative">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-5 z-1001" onClick={closeMenu}>
          <div className="relative w-20 h-20 md:w-28 md:h-28 rounded overflow-hidden shadow-lg">
            <Image src="/images/logo-fusco.png" alt="Logo" fill className="object-contain" priority />
          </div>
          <div className="flex flex-col border-l border-rosewood-light/30 pl-5">
            <span className="font-serif font-bold text-lg md:text-xl tracking-widest text-cream uppercase">Studio Legale</span>
            <span className="font-serif text-[10px] tracking-[0.5em] text-rosewood-light uppercase">Fusco</span>
          </div>
        </Link>

        {/* HAMBURGER BUTTON */}
        <button
          className="md:hidden z-1001 text-cream"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-5 relative">
            <span className={`absolute block h-0.5 w-6 bg-current transition ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current top-2 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current bottom-0 transition ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>

        {/* MENU MOBILE & DESKTOP */}
        <div className={`
          fixed md:relative inset-0 md:inset-auto h-screen md:h-auto w-full md:w-auto
          flex flex-col md:flex-row items-center justify-center md:justify-end
          gap-8 bg-sepia-dark md:bg-transparent transition-all duration-500
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full md:translate-x-0 opacity-0 md:opacity-100 invisible md:visible"}
          z-1000 px-10 uppercase tracking-[0.2em] text-sm md:text-[10px]
        `}>
          
          <Link href="/" className="text-cream" onClick={closeMenu}>Home</Link>
          <Link href="/chi-sono" className="text-cream" onClick={closeMenu}>Chi Sono</Link>

          {/* DROP-DOWN AREE DI ATTIVITÀ */}
          <div className="relative group w-full md:w-auto text-center">
            <div className="flex items-center justify-center gap-2">
              <Link href="/aree-di-attivita" className="text-cream py-2" onClick={closeMenu}>
                Aree di attività
              </Link>
              {/* Bottone per espandere su mobile */}
              <button 
                onClick={(e) => { e.stopPropagation(); setIsDropdownOpen(!isDropdownOpen); }}
                className="md:hidden text-rosewood-light p-2"
              >
                <span className={`inline-block transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}>▼</span>
              </button>
              <span className="text-[8px] hidden md:inline opacity-50 text-cream">▼</span>
            </div>

            {/* Sottomenu: visibile se hover su desktop O se isDropdownOpen su mobile */}
            <div className={`
              ${isDropdownOpen ? "block" : "hidden"} 
              md:group-hover:block md:absolute top-full right-0 pt-2 w-full md:w-72
            `}>
              <div className="bg-charcoal/50 md:bg-charcoal border border-rosewood/20 rounded-sm py-2 max-h-[40vh] md:max-h-none overflow-y-auto">
                {services?.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/aree-di-attivita/${s.slug}`}
                    className="block px-6 py-4 md:py-3 text-[12px] md:text-[10px] text-cream hover:bg-rosewood transition-all"
                    onClick={closeMenu}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/attestati" className="text-cream" onClick={closeMenu}>Attestati</Link>
          <Link href="/contatti" className="text-cream" onClick={closeMenu}>Contatti</Link>
          <Link
            href="/prenota-consulenza"
            className="bg-rosewood text-white px-8 py-4 md:px-5 md:py-2.5 rounded-full font-bold shadow-lg"
            onClick={closeMenu}
          >
            Prenota Consulenza
          </Link>
        </div>
      </div>
    </nav>
  );
}