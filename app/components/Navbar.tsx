'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ services }: { services: any[] }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300
                    bg-[#faf9f6]/90 border-[#8b5e5e]/10 text-[#4a3434]
                    dark:bg-[#120d0d]/90 dark:border-[#c5a5a5]/10 dark:text-[#f5f0f0]">
      
      <div className="flex justify-between items-center py-5 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* LOGO - Font Serif per autorevolezza */}
        <Link href="/" className="font-serif font-bold text-xl tracking-wider hover:text-[#8b5e5e] dark:hover:text-[#c5a5a5] transition">
          STUDIO LEGALE FUSCO
        </Link>
        
        {/* MENU */}
        <div className="flex gap-10 items-center font-medium text-sm uppercase tracking-widest">
          
          <Link href="/" className="hover:text-[#8b5e5e] dark:hover:text-[#c5a5a5] transition">Home</Link>
          
          {/* Dropdown Chi Sono */}
          <div className="relative group cursor-pointer">
            <span className="flex items-center gap-1 group-hover:text-[#8b5e5e] dark:group-hover:text-[#c5a5a5] transition">
              Chi Sono <span className="text-[10px]">▼</span>
            </span>
            <div className="absolute hidden group-hover:block top-full left-0 pt-4 w-72">
              <div className="bg-[#faf9f6] dark:bg-[#1a1414] border border-[#8b5e5e]/10 shadow-2xl rounded-sm overflow-hidden">
                <Link href="/attestati" className="block px-6 py-4 text-xs hover:bg-[#8b5e5e]/5 transition border-l-4 border-transparent hover:border-[#8b5e5e] text-[#4a3434] dark:text-[#f5f0f0]">
                  Attestati e Formazione
                </Link>
              </div>
            </div>
          </div>

          {/* Dropdown Servizi (Dinamico) */}
          <div className="relative group cursor-pointer">
            <span className="flex items-center gap-1 group-hover:text-[#8b5e5e] dark:group-hover:text-[#c5a5a5] transition">
              Servizi <span className="text-[10px]">▼</span>
            </span>
            <div className="absolute hidden group-hover:block top-full left-0 pt-4 w-80">
              <div className="bg-[#faf9f6] dark:bg-[#1a1414] border border-[#8b5e5e]/10 shadow-2xl rounded-sm overflow-hidden">
                {services?.length > 0 ? (
                  services.map((s) => (
                    <Link 
                      key={s.slug} 
                      href={`/servizi/${s.slug}`} 
                      className="block px-6 py-4 text-xs border-b last:border-0 border-[#8b5e5e]/5 hover:bg-[#8b5e5e]/5 transition border-l-4 border-transparent hover:border-[#8b5e5e] dark:hover:border-[#c5a5a5] text-[#4a3434] dark:text-[#f5f0f0]"
                      dangerouslySetInnerHTML={{ __html: s.title }}
                    />
                  ))
                ) : (
                  <div className="px-6 py-4 text-[10px] italic text-zinc-400">Caricamento aree legali...</div>
                )}
              </div>
            </div>
          </div>

          <Link href="/contatti" className="hover:text-[#8b5e5e] dark:hover:text-[#c5a5a5] transition">Contatti</Link>

          {/* BOTTONI TEMA E CTA */}
          <div className="flex items-center gap-6 ml-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="text-xl hover:scale-110 transition opacity-70 hover:opacity-100"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            <Link href="/contatti" className="bg-[#8b5e5e] dark:bg-[#c5a5a5] text-white dark:text-[#120d0d] px-7 py-2.5 rounded-full text-xs font-bold hover:brightness-110 transition-all shadow-lg active:scale-95">
              Prenota Consulenza
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}