'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ services }: { services: any[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-[999] w-full border-b border-[#c5a5a5]/10 bg-[#120d0d] text-[#f5f0f0]">
      {/* Altezza contenuta per non rubare spazio alla Hero */}
      <div className="flex justify-between items-center h-24 md:h-28 px-6 md:px-12 max-w-7xl mx-auto">

        {/* GRUPPO LOGO + TITOLO (La tua Decentratura) */}
        <Link href="/" className="flex items-center gap-8 md:gap-4 group relative z-[1001]" onClick={closeMenu}>
          {/* Logo: w-20 garantisce visibilità senza alzare troppo la barra */}
          <div className="relative w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded shadow-2xl transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/images/logo-fusco.png"
              alt="Logo Studio Legale Fusco"
              fill
              className="object-contain p-2"
              priority
            />
          </div>

          {/* Titolo: Posizionato per creare quell'effetto asimmetrico rispetto alla Hero */}
          <div className="flex flex-col border-l border-[#c5a5a5]/20 pl-6 md:pl-8">
            <span className="font-serif font-bold text-lg md:text-xl tracking-[0.1em] leading-tight uppercase">
              Studio Legale
            </span>
            <span className="font-serif text-[10px] md:text-xs tracking-[0.5em] text-[#c5a5a5] uppercase">
              Fusco
            </span>
          </div>
        </Link>

        {/* HAMBURGER E X (Gestione unica) */}
        <button
          className="md:hidden relative z-[1001] w-10 h-10 flex items-center justify-center text-[#c5a5a5]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
          </div>
        </button>

        {/* MENU MOBILE & DESKTOP */}
        <div className={`
          fixed md:relative inset-0 md:inset-auto 
          flex flex-col md:flex-row items-center justify-center md:justify-end
          gap-10 md:gap-8 font-medium text-[13px] md:text-[10px] uppercase tracking-[0.2em]
          bg-[#120d0d] md:bg-transparent transition-all duration-500 ease-in-out
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full md:translate-y-0 opacity-0 md:opacity-100 invisible md:visible'}
          z-[1000]
        `}>
          
          {/* Titolo che appare nel menu mobile aperto */}
          {isOpen && (
            <div className="md:hidden absolute top-12 text-center">
              <p className="font-serif text-[#c5a5a5] tracking-[0.3em] text-[10px]">MENU</p>
            </div>
          )}

          <Link href="/" className="hover:text-[#c5a5a5] transition" onClick={closeMenu}>Home</Link>
          <Link href="/chi-sono" className="hover:text-[#c5a5a5] transition" onClick={closeMenu}>Chi Sono</Link>
          <Link href="/attestati" className="hover:text-[#c5a5a5] transition" onClick={closeMenu}>Attestati</Link>

          {/* AREE DI ATTIVITÀ */}
          <div className="relative group cursor-pointer py-2">
            <Link href="/aree-di-attivita" className="hover:text-[#c5a5a5] transition flex items-center gap-1" onClick={closeMenu}>
              Aree di attività <span className="text-[8px] ml-1">▼</span>
            </Link>
            
            <div className="absolute hidden md:group-hover:block top-full right-0 pt-4 w-64">
              <div className="bg-[#1a1414] border border-[#c5a5a5]/20 shadow-xl">
                {services?.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/aree-di-attivita/${s.slug}`}
                    className="block px-6 py-4 hover:bg-[#c5a5a5]/10 border-b border-[#c5a5a5]/5 last:border-0 transition"
                    onClick={closeMenu}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contatti" className="hover:text-[#c5a5a5] transition" onClick={closeMenu}>Contatti</Link>

          <Link 
            href="/contatti" 
            className="mt-6 md:mt-0 md:ml-4 bg-[#8b5e5e] text-white px-8 py-4 rounded-full text-[10px] font-bold hover:bg-[#a67c7c] transition-all shadow-xl"
            onClick={closeMenu}
          >
            Prenota Consulenza
          </Link>
        </div>
      </div>
    </nav>
  );
}