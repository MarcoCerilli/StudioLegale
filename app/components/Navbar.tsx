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
  const [scrolled, setScrolled] = useState(false);

  // Gestione scroll per cambiare opacità navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blocca lo scroll quando il menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`sticky top-0 z-999 w-full transition-all duration-300 border-b 
      ${scrolled ? "bg-sepia-dark/95 backdrop-blur-md py-2 border-rosewood/10" : "bg-sepia-dark py-4 border-transparent"}`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto relative">
        {/* LOGO E TITOLO */}
        {/* LOGO E TITOLO */}
        <Link
          href="/"
          className="flex items-center gap-5 group z-1001"
          onClick={closeMenu}
        >
          <div className="relative w-24 h-24 md:w-28 md:h-28 transition-all duration-500 group-hover:scale-105 rounded overflow-hidden shadow-lg">
            <Image
              src="/images/logo-fusco.png"
              alt="Logo Studio Legale Fusco"
              fill
              className="object-contain" // Mantiene le proporzioni e mostra i colori originali
              priority
            />
          </div>

          <div className="flex flex-col border-l border-rosewood-light/30 pl-5 md:pl-7">
            <span className="font-serif font-bold text-lg md:text-xl tracking-widest leading-tight uppercase text-cream">
              Studio Legale
            </span>
            <span className="font-serif text-[10px] md:text-xs tracking-[0.5em] text-rosewood-light uppercase">
              Fusco
            </span>
          </div>
        </Link>

        {/* HAMBURGER BUTTON (Mobile) */}
        <button
          className="md:hidden relative z-1001 w-10 h-10 flex items-center justify-center text-cream"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : "translate-y-0"}`}
            ></span>
            <span
              className={`absolute block h-0.5 w-6 bg-current top-2 transition duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`absolute block h-0.5 w-6 bg-current bottom-0 transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : "translate-y-0"}`}
            ></span>
          </div>
        </button>

        {/* MENU NAVIGAZIONE */}
        <div
          className={`
          fixed md:relative inset-0 md:inset-auto 
          h-screen md:h-auto w-full md:w-auto
          flex flex-col md:flex-row items-center justify-center md:justify-end
          gap-8 md:gap-8 font-medium text-sm md:text-[10px] uppercase tracking-[0.2em]
          bg-sepia-dark md:bg-transparent
          transition-all duration-500
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full md:translate-x-0 opacity-0 md:opacity-100 invisible md:visible"}
          z-1000 px-10
        `}
        >
          <Link
            href="/"
            className="text-cream hover:text-rosewood-light transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/chi-sono"
            className="text-cream hover:text-rosewood-light transition-colors"
            onClick={closeMenu}
          >
            Chi Sono
          </Link>
          <Link
            href="/attestati"
            className="text-cream hover:text-rosewood-light transition-colors"
            onClick={closeMenu}
          >
            Attestati
          </Link>

          {/* DROP-DOWN AREE DI ATTIVITÀ */}
          <div className="relative group text-center md:text-left">
            <Link
              href="/aree-di-attivita"
              className="text-cream hover:text-rosewood-light transition-colors flex items-center justify-center gap-1 py-2"
              onClick={closeMenu}
            >
              Aree di attività{" "}
              <span className="text-[8px] hidden md:inline opacity-50">▼</span>
            </Link>

            {/* Desktop Dropdown */}
            <div className="hidden md:group-hover:block absolute top-full right-0 pt-2 w-72 translate-y-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-charcoal border border-rosewood/20 shadow-2xl rounded-sm py-2">
                {services?.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/aree-di-attivita/${s.slug}`}
                    className="block px-6 py-3 text-[10px] text-cream hover:bg-rosewood hover:text-white transition-all"
                    onClick={closeMenu}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contatti"
            className="text-cream hover:text-rosewood-light transition-colors"
            onClick={closeMenu}
          >
            Contatti
          </Link>

          {/* CTA BUTTON */}
          <Link
            href="/contatti"
            className="mt-6 md:mt-0 bg-rosewood text-white px-8 py-4 md:px-5 md:py-2.5 rounded-full text-xs md:text-[9px] font-bold 
            hover:bg-rosewood-light hover:text-charcoal transition-all shadow-lg active:scale-95 text-center"
            onClick={closeMenu}
          >
            Prenota Consulenza
          </Link>
        </div>
      </div>
    </nav>
  );
}
