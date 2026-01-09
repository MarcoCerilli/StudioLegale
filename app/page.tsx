import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avvocato Anna Fusco | Studio Legale a Terracina | Civile e Penale",
  description: "L'Avvocato Anna Fusco offre consulenza legale d'eccellenza a Terracina. Specializzata in diritto civile, penale e risarcimento danni. Difesa tecnica e valore umano.",
  keywords: ["Avvocato Terracina", "Anna Fusco", "Studio Legale Terracina", "Risarcimento Danni", "Diritto Civile", "Diritto Penale"],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#2d2424] selection:bg-[#c5a5a5]/30">
      
      {/* HERO SECTION - FULL WIDTH CON TESTO SOVRAPPOSTO */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#1a1515]">
        
        {/* Immagine di Sfondo Full Width */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-avvocato.jpg" 
            alt="Studio Legale Avvocato Anna Fusco Terracina"
            fill
            className="object-cover opacity-60 brightness-[0.85]" // Opacità bilanciata: non troppo scura
            priority
            quality={100}
          />
          {/* Overlay gradiente per garantire la leggibilità SEO dei testi bianchi */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1515]/80 via-[#1a1515]/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            {/* Tagline SEO */}
            <span className="inline-block px-4 py-1.5 mb-8 border border-[#c5a5a5]/40 bg-[#c5a5a5]/10 text-[#c5a5a5] text-[11px] tracking-[0.4em] uppercase font-bold backdrop-blur-sm">
              Studio Legale Fusco — Terracina
            </span>
            
            {/* Titolo H1 principale */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-10 leading-[0.95] tracking-tighter text-white">
              Difesa tecnica, <br />
              <span className="text-[#c5a5a5] italic font-medium">valore umano.</span>
            </h1>

            {/* Descrizione SEO con keyword */}
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed font-light">
              L&apos;<strong>Avvocato Anna Fusco</strong> offre assistenza legale specialistica a Terracina, fondendo rigore accademico e una visione dinamica della tutela dei diritti.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/contatti" 
                className="group relative px-10 py-5 bg-[#c5a5a5] text-[#1a1515] font-bold overflow-hidden transition-all hover:scale-105 text-center shadow-2xl"
              >
                <span className="relative z-10 uppercase tracking-widest text-xs">Richiedi Consulenza</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="/aree-di-attivita" 
                className="px-10 py-5 border border-white/40 hover:border-white text-white transition-all backdrop-blur-sm text-center uppercase tracking-widest text-xs"
              >
                Aree di Attività
              </Link>
            </div>
          </div>
        </div>

        {/* Decorazione sottile in basso */}
        <div className="absolute bottom-10 left-12 hidden lg:block">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.5em] [writing-mode:vertical-lr]">
            Based in Terracina
          </p>
        </div>
      </section>

      {/* SEZIONE VALORI - Leggibilità migliorata */}
      <section className="py-24 bg-white border-t border-[#c5a5a5]/10">
        <div className="container mx-auto px-6 max-w-6xl text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            
            <div className="space-y-6">
              <div className="h-px w-12 bg-[#c5a5a5] mx-auto md:mx-0" />
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#2d2424]">Ascolto Attivo</h3>
              <p className="text-[#4a3434]/70 text-[15px] leading-relaxed font-light italic font-serif">
                &quot;Ogni controversia nasce da una storia umana. La nostra missione inizia con la comprensione profonda delle vostre necessità.&quot;
              </p>
            </div>

            <div className="space-y-6">
              <div className="h-px w-12 bg-[#c5a5a5] mx-auto md:mx-0" />
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#2d2424]">Strategia Tecnica</h3>
              <p className="text-[#4a3434]/70 text-[15px] leading-relaxed font-light">
                Costruiamo difese basate su un&apos;analisi meticolosa del dato normativo e dei precedenti giurisprudenziali più recenti.
              </p>
            </div>

            <div className="space-y-6">
              <div className="h-px w-12 bg-[#c5a5a5] mx-auto md:mx-0" />
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#2d2424]">Etica Forense</h3>
              <p className="text-[#4a3434]/70 text-[15px] leading-relaxed font-light">
                Il successo professionale è indissolubile dal rispetto del codice deontologico e dalla massima trasparenza verso il cliente.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}