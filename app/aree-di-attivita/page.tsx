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
    title: "Immigrazione e Cittadinanza",
    slug: "immigrazione-e-cittadinanza",
    tag: "Screening Gratuito", // BADGE
    description: "Gestione visti, permessi di soggiorno e cittadinanza italiana con aggiornamento costante sulle normative.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
        <path d="M12 21l-2-2m2 2l2-2m-2 2V12m0 0l-4-4m4 4l4-4M3 7h18" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  },
  {
    title: "Risarcimento Danni",
    slug: "risarcimento-danni",
    tag: "Zero Anticipi Spese", // BADGE
    description: "Massima determinazione nell'ottenere il giusto ristoro. In ambito infortunistico paghi solo a risultato ottenuto.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.67 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.407-2.67-1M12 16v-1m4-12H8a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2z" />
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
    title: "Diritto Amministrativo",
    slug: "diritto-amministrativo",
    description: "Rapporti con la Pubblica Amministrazione e gestione dei ricorsi presso i tribunali amministrativi.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
        <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  }
];

export default function AreeDiAttivitaPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal pt-20 pb-20 selection:bg-rosewood-light/30">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Sezione */}
        <div className="max-w-4xl mb-24">
          <span className="text-rosewood text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
            Competenze Forensi
          </span>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-8 text-charcoal">
            Aree di <span className="text-rosewood italic font-light">Intervento</span>
          </h1>
          <div className="h-1 w-24 bg-rosewood-light/40" />
        </div>

        {/* Grid Servizi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, index) => (
            <Link key={s.slug} href={`/aree-di-attivita/${s.slug}`} className="group block h-full">
              <div className="h-full bg-white p-12 border border-rosewood-light/10 rounded-4xl transition-all duration-700 relative overflow-hidden flex flex-col justify-between hover:shadow-[0_40px_80px_rgba(74,52,52,0.08)] group-hover:-translate-y-2">
                
                {/* Badge "Gratuito/Risultato" */}
                {s.tag && (
                  <div className="absolute top-6 right-6 bg-rosewood text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-20 shadow-lg">
                    {s.tag}
                  </div>
                )}

                {/* Decorazione Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cream rounded-bl-full translate-x-32 -translate-y-32 group-hover:translate-x-16 group-hover:-translate-y-16 transition-transform duration-700 ease-out z-0" />

                <div className="relative z-10">
                  {/* Icona */}
                  <div className="text-rosewood mb-10 transform group-hover:scale-110 transition-transform duration-500">
                    {s.icon}
                  </div>

                  <h3 className="text-2xl font-serif mb-5 uppercase tracking-tight text-charcoal group-hover:text-rosewood transition-colors duration-300">
                    {s.title}
                  </h3>
                  
                  <p className="text-sepia-dark/60 text-[15px] leading-relaxed mb-10 font-light">
                    {s.description}
                  </p>
                </div>

                {/* Footer Card */}
                <div className="relative z-10 flex items-center gap-4 text-rosewood text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-300 group-hover:gap-6">
                  <span className="group-hover:text-charcoal transition-colors">Dettagli</span>
                  <div className="relative flex items-center">
                    <div className="h-px w-8 bg-rosewood-light group-hover:w-12 group-hover:bg-rosewood transition-all duration-500" />
                  </div>
                </div>

                <span className="absolute bottom-6 right-8 text-8xl font-serif text-charcoal/30 pointer-events-none group-hover:text-rosewood/5 transition-colors duration-700">
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