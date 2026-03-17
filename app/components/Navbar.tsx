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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestione scroll body quando il menu è aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-9999 w-full transition-all duration-500 border-b 
      ${scrolled 
        ? "bg-sepia-dark/95 backdrop-blur-md py-2 border-rosewood/20 shadow-lg" 
        : "bg-sepia-dark py-4 border-transparent"}`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto relative">
        
        {/* LOGO - Dimensioni ottimizzate per mobile */}
        <Link href="/" className="flex items-center gap-3 md:gap-5 z-10001" onClick={closeMenu}>
          <div className="relative w-14 h-14 md:w-24 md:h-24 transition-all duration-300">
            <Image 
              src="/images/logo-fusco.png" 
              alt="Studio Legale Fusco" 
              fill 
              className="object-contain" 
              priority 
            />
          </div>
          <div className="flex flex-col border-l border-rosewood-light/30 pl-3 md:pl-5">
            <span className="font-serif font-bold text-base md:text-xl tracking-widest text-cream uppercase leading-none">Studio Legale</span>
            <span className="font-serif text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] text-rosewood-light uppercase mt-1">Fusco</span>
          </div>
        </Link>

        {/* HAMBURGER BUTTON */}
        <button
          className="md:hidden z-10001 text-cream p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Apri Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>

        {/* MENU OVERLAY MOBILE & DESKTOP */}
        <div className={`
          fixed md:relative inset-0 md:inset-auto h-screen md:h-auto w-full md:w-auto
          flex flex-col md:flex-row items-center justify-center md:justify-end
          gap-6 md:gap-8 bg-sepia-dark md:bg-transparent transition-all duration-500 ease-in-out
          ${isOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full md:translate-x-0 opacity-0 md:opacity-100 invisible md:visible"}
          z-10000 px-10 uppercase tracking-[0.2em] text-sm md:text-[10px]
        `}>
          
          <Link href="/" className="text-cream hover:text-rosewood-light transition-colors" onClick={closeMenu}>Home</Link>
          <Link href="/chi-sono" className="text-cream hover:text-rosewood-light transition-colors" onClick={closeMenu}>Chi Sono</Link>

          {/* DROP-DOWN AREE DI ATTIVITÀ */}
          <div className="relative group w-full md:w-auto text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Link href="/aree-di-attivita" className="text-cream py-2 hover:text-rosewood-light transition-colors" onClick={closeMenu}>
                Aree di attività
              </Link>
              <button 
                onClick={(e) => { e.preventDefault(); setIsDropdownOpen(!isDropdownOpen); }}
                className="md:hidden text-rosewood-light p-2"
                aria-expanded={isDropdownOpen}
              >
                <span className={`inline-block transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}>▼</span>
              </button>
              <span className="text-[8px] hidden md:inline opacity-50 text-cream group-hover:rotate-180 transition-transform duration-300">▼</span>
            </div>

            {/* Sottomenu */}
            <div className={`
              ${isDropdownOpen ? "max-h-[50vh] opacity-100 mt-4" : "max-h-0 md:max-h-none opacity-0 md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible"} 
              overflow-hidden md:overflow-visible transition-all duration-300
              md:absolute md:top-full md:right-0 md:pt-4 w-full md:w-72
            `}>
              <div className="bg-charcoal/40 md:bg-charcoal border border-rosewood/20 rounded-xl md:rounded-sm py-2 shadow-2xl">
                {services?.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/aree-di-attivita/${s.slug}`}
                    className="block px-6 py-4 md:py-3 text-[11px] md:text-[10px] text-cream hover:bg-rosewood transition-all border-b border-white/5 last:border-0"
                    onClick={closeMenu}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/attestati" className="text-cream hover:text-rosewood-light transition-colors" onClick={closeMenu}>Attestati</Link>
          <Link href="/contatti" className="text-cream hover:text-rosewood-light transition-colors" onClick={closeMenu}>Contatti</Link>
          
          <Link
            href="/prenota-consulenza"
            className="w-full md:w-auto text-center bg-rosewood text-white px-8 py-5 md:px-6 md:py-3 rounded-full font-bold shadow-xl hover:bg-rosewood-light transition-all active:scale-95 mt-4 md:mt-0"
            onClick={closeMenu}
          >
            Prenota Consulenza
          </Link>
        </div>
      </div>
    </nav>
  );
}