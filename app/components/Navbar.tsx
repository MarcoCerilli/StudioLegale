'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ services }: { services: any[] }) {
  const [isOpen, setIsOpen] = useState(false);

  // Blocca lo scroll della pagina quando il menu mobile è aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-[999] w-full border-b border-[#c5a5a5]/10 bg-[#120d0d] text-[#f5f0f0]">
      <div className="flex justify-between items-center h-24 md:h-28 px-6 md:px-12 max-w-7xl mx-auto relative">

        {/* LOGO E TITOLO - Sempre visibili */}
        <Link href="/" className="flex items-center gap-4 group z-[1001]" onClick={closeMenu}>
          <div className="relative w-20 h-20 md:w-24 md:h-24 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/images/logo-fusco.png"
              alt="Logo Studio Legale Fusco"
              fill
              className="object-contain p-2"
              priority
            />
          </div>

          <div className="flex flex-col border-l border-[#c5a5a5]/20 pl-4 md:pl-6">
            <span className="font-serif font-bold text-base md:text-lg tracking-[0.1em] leading-tight uppercase">
              Studio Legale
            </span>
            <span className="font-serif text-[10px] md:text-xs tracking-[0.5em] text-[#c5a5a5] uppercase">
              Fusco
            </span>
          </div>
        </Link>

        {/* HAMBURGER - Z-index superiore al menu */}
        <button
          className="md:hidden relative z-[1001] w-12 h-12 flex items-center justify-center text-[#c5a5a5] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-6">
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
          </div>
        </button>

        {/* MENU OVERLAY - Entra da destra su mobile */}
        <div className={`
          fixed md:relative inset-0 md:inset-auto 
          h-screen md:h-auto w-full md:w-auto
          flex flex-col md:flex-row items-center justify-center md:justify-end
          gap-8 md:gap-8 font-medium text-[15px] md:text-[10px] uppercase tracking-[0.2em]
          bg-[#120d0d]/fb md:bg-transparent backdrop-blur-xl md:backdrop-blur-none
          transition-all duration-500 ease-in-out
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full md:translate-x-0 opacity-0 md:opacity-100 invisible md:visible'}
          z-[1000] px-10
        `}>

          {/* Label per Menu Mobile */}
          <div className="md:hidden mt-32 mb-4 w-full text-center border-b border-[#c5a5a5]/10 pb-4">
            <p className="font-serif text-[#c5a5a5] tracking-[0.4em] text-[10px] opacity-60">NAVIGAZIONE</p>
          </div>

          <Link href="/" className="hover:text-[#c5a5a5] transition-colors py-2" onClick={closeMenu}>Home</Link>
          <Link href="/chi-sono" className="hover:text-[#c5a5a5] transition-colors py-2" onClick={closeMenu}>Chi Sono</Link>
          <Link href="/attestati" className="hover:text-[#c5a5a5] transition-colors py-2" onClick={closeMenu}>Attestati</Link>

          {/* AREE DI ATTIVITÀ - Dropdown Desktop / Lista Mobile */}
          <div className="relative group flex flex-col items-center md:block">
            <Link
              href="/aree-di-attivita"
              className="hover:text-[#c5a5a5] transition-colors flex items-center gap-1 py-2"
              onClick={closeMenu}
            >
              Aree di attività <span className="text-[8px] hidden md:inline opacity-50">▼</span>
            </Link>

            {/* Desktop Dropdown */}
            <div className="hidden md:group-hover:block absolute top-full right-0 pt-4 w-64 translate-y-0">
              <div className="bg-[#1a1414] border border-[#c5a5a5]/20 shadow-2xl overflow-hidden rounded-sm">
                {services?.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/aree-di-attivita/${s.slug}`}
                    className="block px-6 py-4 text-[9px] hover:bg-[#c5a5a5] hover:text-[#120d0d] border-b border-[#c5a5a5]/5 last:border-0 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contatti" className="hover:text-[#c5a5a5] transition-colors py-2" onClick={closeMenu}>Contatti</Link>

          {/* CTA Button */}
          <Link
            href="/contatti"
            className="mt-6 md:mt-0 md:ml-4 bg-[#8b5e5e] text-white px-10 py-5 md:px-6 md:py-3 rounded-full text-[12px] md:text-[9px] font-bold hover:bg-[#a67c7c] transition-all shadow-xl text-center w-full md:w-auto active:scale-95"
            onClick={closeMenu}
          >
            Prenota Consulenza
          </Link>
        </div>
      </div>
    </nav>
  );
}