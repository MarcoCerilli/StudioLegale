'use client';
import Link from 'next/link';

const services = [
  {
    title: "Diritto Civile e Famiglia",
    slug: "diritto-civile-e-famiglia",
    description: "Assistenza legale completa per questioni familiari, contratti e successioni con massima sensibilità.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m8-10a4 4 0 100-8 4 4 0 000 8zm14-2h-6m3-3v6" />
      </svg>
    )
  },
  {
    title: "Diritto Penale",
    slug: "diritto-penale",
    description: "Difesa tecnica d'eccellenza in ogni fase del procedimento, garantendo la massima tutela dei diritti.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M3 6l3 12h12l3-12m-9 6v6m-4-6l1 6m7-6l-1 6M5 20h14M12 3v3" />
      </svg>
    )
  },
  {
    title: "Diritto del Lavoro",
    slug: "diritto-del-lavoro",
    description: "Tutela dei diritti dei lavoratori e consulenza aziendale su licenziamenti e contrattualistica.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Diritto Societario",
    slug: "diritto-societario",
    description: "Consulenza strategica per imprese, dalla costituzione alla gestione delle crisi d'impresa.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-4a1 1 0 011-1h2a1 1 0 011 1v4" />
      </svg>
    )
  },
  {
    title: "Diritto Amministrativo",
    slug: "diritto-amministrativo",
    description: "Rapporti con la Pubblica Amministrazione e gestione dei ricorsi presso i tribunali amministrativi.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  },
  {
    title: "Risarcimento Danni",
    slug: "risarcimento-danni",
    description: "Massima determinazione nell'ottenere il giusto ristoro per danni biologici e patrimoniali.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.67 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.407-2.67-1M12 16v-1m4-12H8a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2z" />
      </svg>
    )
  }
];

export default function AreeDiAttivitaPage() {
  return (
    <main className="min-h-screen bg-[#120d0d] text-[#f5f0f0] pt-40 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-20">
          <span className="text-[#c5a5a5] text-xs uppercase tracking-[0.5em] mb-4 block">Competenze Professionali</span>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter mb-8">
            Aree di <span className="text-[#c5a5a5] italic font-light">Intervento</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <Link key={s.slug} href={`/aree-di-attivita/${s.slug}`} className="group">
              <div className="h-full bg-[#1a1414] p-10 border border-[#c5a5a5]/10 hover:border-[#c5a5a5]/40 transition-all duration-500 relative overflow-hidden shadow-2xl">
                
                {/* Icona SVG Dinamica */}
                <div className="text-[#c5a5a5] mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 opacity-80 group-hover:opacity-100">
                  {s.icon}
                </div>

                <h3 className="text-2xl font-serif mb-4 uppercase tracking-tight group-hover:text-[#c5a5a5] transition-colors">
                  {s.title}
                </h3>
                
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-light">
                  {s.description}
                </p>

                <div className="flex items-center gap-3 text-[#c5a5a5] text-[10px] uppercase tracking-[0.3em]">
                  <span>Vedi dettagli</span>
                  <div className="h-[1px] w-6 bg-[#c5a5a5]/30 group-hover:w-12 transition-all duration-500" />
                </div>

                {/* Numero decorativo sottile */}
                <span className="absolute -bottom-2 -right-2 text-7xl font-serif text-white/[0.02] pointer-events-none group-hover:text-[#c5a5a5]/5 transition-colors">
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