import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avvocato Anna Fusco | Studio Legale Terracina | Penale e Civile",
  description: "L'Avvocato Anna Fusco offre consulenza legale d'eccellenza a Terracina. Specializzata in risarcimento danni, diritto penale e civile.",
  keywords: ["Avvocato Terracina", "Anna Fusco", "Studio Legale Terracina", "Risarcimento Danni"],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#2d2424] selection:bg-[#c5a5a5]/30">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center overflow-hidden bg-[#120d0d]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-avvocato.jpg" 
            alt="Studio Legale Avv. Anna Fusco"
            fill
            className="object-cover opacity-50 brightness-75" // Ridotta luminosità per far leggere il testo
            priority
          />
          {/* Gradient scuro per leggibilità testo a sinistra */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#120d0d] via-[#120d0d]/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 mb-6 border border-[#c5a5a5]/30 bg-[#c5a5a5]/10 text-[#c5a5a5] rounded-full text-[10px] tracking-[0.3em] uppercase font-bold">
              Studio Legale Fusco — Terracina
            </span>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 leading-[0.9] tracking-tighter text-white">
              Esperienza. <br />
              <span className="text-[#c5a5a5] italic">Determinazione.</span> <br />
              Trasparenza.
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl leading-relaxed font-light">
              L&apos;Avvocato Anna Fusco definisce nuovi standard nella tutela legale, 
              unendo rigore accademico e una visione dinamica della professione forense.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/contatti" 
                className="group relative px-10 py-5 bg-[#c5a5a5] text-[#120d0d] font-bold rounded-full overflow-hidden transition-all hover:scale-105 text-center shadow-lg"
              >
                <span className="relative z-10 uppercase tracking-widest text-xs">Consulenza Diretta</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="/aree-di-attivita" 
                className="px-10 py-5 border border-white/30 hover:border-white text-white rounded-full transition-all backdrop-blur-sm text-center uppercase tracking-widest text-xs"
              >
                Aree di Attività
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE VALORI - Corretta visibilità titoli */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            
            {/* Valore 01 */}
            <div className="space-y-6 group">
              <div className="text-[#c5a5a5] text-5xl font-serif opacity-40 group-hover:opacity-100 transition-opacity duration-500">01</div>
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-[#2d2424]">Ascolto Attivo</h3>
              <p className="text-[#4a3434]/70 font-light leading-relaxed">
                Ogni controversia nasce da una storia umana. La nostra missione inizia con la comprensione profonda delle vostre necessità.
              </p>
            </div>

            {/* Valore 02 */}
            <div className="space-y-6 group">
              <div className="text-[#c5a5a5] text-5xl font-serif opacity-40 group-hover:opacity-100 transition-opacity duration-500">02</div>
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-[#2d2424]">Strategia Tecnica</h3>
              <p className="text-[#4a3434]/70 font-light leading-relaxed">
                Costruiamo difese basate su un&apos;analisi meticolosa del dato normativo e dei precedenti giurisprudenziali più recenti.
              </p>
            </div>

            {/* Valore 03 */}
            <div className="space-y-6 group">
              <div className="text-[#c5a5a5] text-5xl font-serif opacity-40 group-hover:opacity-100 transition-opacity duration-500">03</div>
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-[#2d2424]">Etica e Risultato</h3>
              <p className="text-[#4a3434]/70 font-light leading-relaxed">
                Il successo professionale è indissolubile dal rispetto del codice deontologico e dalla massima trasparenza verso il cliente.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}