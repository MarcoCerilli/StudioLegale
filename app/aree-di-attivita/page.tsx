'use client';
import Link from 'next/link';

const services = [
  {
    title: "Diritto Civile e Famiglia",
    slug: "diritto-civile-e-famiglia",
    description: "Assistenza legale completa per questioni familiari, contratti e successioni con massima sensibilità.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m8-10a4 4 0 100-8 4 4 0 000 8zm14-2h-6m3-3v6" />
      </svg>
    )
  },
  {
    title: "Diritto Penale",
    slug: "diritto-penale",
    description: "Difesa tecnica d'eccellenza in ogni fase del procedimento, garantendo la massima tutela dei diritti.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
        <path d="M3 6l3 12h12l3-12m-9 6v6m-4-6l1 6m7-6l-1 6M5 20h14M12 3v3" />
      </svg>
    )
  },
  {
    title: "Diritto del Lavoro",
    slug: "diritto-del-lavoro",
    description: "Tutela dei diritti dei lavoratori e consulenza aziendale su licenziamenti e contrattualistica.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Diritto Societario",
    slug: "diritto-societario",
    description: "Consulenza strategica per imprese, dalla costituzione alla gestione delle crisi d'impresa.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-4a1 1 0 011-1h2a1 1 0 011 1v4" />
      </svg>
    )
  },
  {
    title: "Diritto Amministrativo",
    slug: "diritto-amministrativo",
    description: "Rapporti con la Pubblica Amministrazione e gestione dei ricorsi presso i tribunali amministrativi.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
        <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  },
  {
    title: "Risarcimento Danni",
    slug: "risarcimento-danni",
    description: "Massima determinazione nell'ottenere il giusto ristoro per danni biologici e patrimoniali.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.67 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.407-2.67-1M12 16v-1m4-12H8a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2z" />
      </svg>
    )
  }
];

export default function AreeDiAttivitaPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#2d2424] pt-40 pb-20 selection:bg-[#c5a5a5]/30">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Sezione */}
        <div className="max-w-4xl mb-24">
          <span className="text-[#8b5e5e] text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
            Competenze Forensi
          </span>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-8 text-[#2d2424]">
            Aree di <span className="text-[#8b5e5e] italic font-light">Intervento</span>
          </h1>
          <div className="h-1 w-24 bg-[#c5a5a5]/40" />
        </div>

        {/* Grid Servizi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, index) => (
            <Link key={s.slug} href={`/aree-di-attivita/${s.slug}`} className="group block h-full">
              <div className="h-full bg-white p-12 border border-[#c5a5a5]/20 transition-all duration-700 relative overflow-hidden flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(74,52,52,0.1)] group-hover:-translate-y-2">
                
                {/* Background Decorativo Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#faf9f6] rounded-bl-full translate-x-32 -translate-y-32 group-hover:translate-x-16 group-hover:-translate-y-16 transition-transform duration-700 ease-out -z-0" />

                <div className="relative z-10">
                  {/* Icona */}
                  <div className="text-[#8b5e5e] mb-10 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                    {s.icon}
                  </div>

                  <h3 className="text-2xl font-serif mb-5 uppercase tracking-tight text-[#2d2424] group-hover:text-[#8b5e5e] transition-colors duration-300">
                    {s.title}
                  </h3>
                  
                  <p className="text-[#4a3434]/70 text-[15px] leading-relaxed mb-10 font-light">
                    {s.description}
                  </p>
                </div>

                {/* Pulsante "Vedi Dettagli" Animato */}
                <div className="relative z-10 flex items-center gap-4 text-[#8b5e5e] text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-300 group-hover:gap-6">
                  <span className="group-hover:text-[#4a3434]">Vedi dettagli</span>
                  <div className="relative flex items-center">
                    <div className="h-[1px] w-8 bg-[#c5a5a5] group-hover:w-16 group-hover:bg-[#8b5e5e] transition-all duration-500" />
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3 h-3 absolute -right-4 opacity-0 group-hover:opacity-100 group-hover:-right-1 transition-all duration-500">
                      <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Numero decorativo in background */}
                <span className="absolute bottom-6 right-8 text-8xl font-serif text-[#2d2424]/[0.03] pointer-events-none group-hover:text-[#8b5e5e]/10 transition-colors duration-700">
                  0{index + 1}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}