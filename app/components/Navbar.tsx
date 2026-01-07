'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ services }: { services: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
   <nav className="sticky top-0 z-[999] w-full border-b border-[#c5a5a5]/10 bg-[#120d0d] text-[#f5f0f0]">
  {/* Altezza portata a h-32 o h-40 per un look più prestigioso */}
  <div className="flex justify-between items-center h-32 md:h-40 px-6 md:px-12 max-w-7xl mx-auto">
    
    {/* GRUPPO LOGO + TITOLO */}
<Link href="/" className="flex items-center gap-4 group">
      {/* Logo Simbolo: Ingrandito sia su mobile che su desktop */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded shadow-lg">
        <Image 
          src="/images/logo-fusco.png" 
          alt="Logo Studio Legale Fusco"
          fill
          className="object-contain transition-transform group-hover:scale-105"
          priority
        />
      </div>
      
      {/* Titolo Testuale: Aumentato il font per reggere la grandezza del logo */}
      <div className="flex flex-col">
        <span className="font-serif font-bold text-md md:text-3xl tracking-[0.1em] leading-tight uppercase">
          Studio Legale
        </span>
        <span className="font-serif text-lg md:text-xl tracking-[0.4em] text-[#c5a5a5] uppercase">
          Fusco
        </span>
      </div>
    </Link>
        
        {/* HAMBURGER (Solo Mobile) */}
        <button 
          className="md:hidden p-2 text-[#c5a5a5]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <span className="text-3xl">✕</span> : "☰"}
        </button>

        {/* MENU DESKTOP */}
        <div className={`
          fixed md:relative inset-0 md:inset-auto 
          flex flex-col md:flex-row items-center justify-center md:justify-end
          gap-8 md:gap-8 font-medium text-[11px] uppercase tracking-[0.2em]
          bg-[#120d0d] md:bg-transparent transition-all
          ${isOpen ? 'visible opacity-100' : 'invisible opacity-0 md:visible md:opacity-100'}
        `}>
          <Link href="/" className="hover:text-[#c5a5a5] transition">Home</Link>
          <Link href="/chi-sono" className="hover:text-[#c5a5a5] transition">Chi Sono</Link>
          <Link href="/attestati" className="hover:text-[#c5a5a5] transition">Attestati</Link>

          {/* SERVIZI DROP DOWN */}
          <div className="relative group cursor-pointer">
            <span className="hover:text-[#c5a5a5] transition flex items-center gap-1">
              Servizi <span className="text-[8px]">▼</span>
            </span>
            <div className="absolute hidden group-hover:block top-full right-0 pt-4 w-64">
              <div className="bg-[#1a1414] border border-[#c5a5a5]/20 shadow-xl">
                {services?.map((s) => (
                  <Link 
                    key={s.slug} 
                    href={`/servizi/${s.slug}`}
                    className="block px-6 py-4 hover:bg-[#c5a5a5]/10 border-b border-[#c5a5a5]/5 last:border-0 transition"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contatti" className="hover:text-[#c5a5a5] transition">Contatti</Link>

          <Link href="/contatti" className="ml-4 bg-[#8b5e5e] text-white px-6 py-3 rounded-full hover:bg-[#a67c7c] transition-all">
            Prenota Consulenza
          </Link>
        </div>
      </div>
    </nav>
  );
}