// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

// SEO al TOP: Metadati per Google
export const metadata: Metadata = {
  title: "Avvocato Anna Fusco | Studio Legale Terracina | Penale e Civile",
  description: "L'Avvocato Anna Fusco offre consulenza legale d'eccellenza a Terracina. Specializzata in risarcimento danni, diritto penale e civile. Difesa tecnica solida e trasparente.",
  keywords: ["Avvocato Terracina", "Anna Fusco", "Studio Legale Terracina", "Risarcimento Danni", "Diritto Penale", "Diritto Civile"],
  openGraph: {
    title: "Avvocato Anna Fusco - Tutela Legale a Terracina",
    description: "Esperienza e determinazione al servizio dei tuoi diritti.",
    images: [{ url: '/images/hero-avvocato.jpg' }],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#120d0d] text-[#f5f0f0] selection:bg-[#8b5e5e]">
      
      {/* Sezione Hero con Estetica Sofisticata */}
      <section className="relative h-screen flex items-center overflow-hidden">
  
  {/* Overlay con immagine - Resa più chiara e visibile */}
  <div className="absolute inset-0 z-0">
    <Image 
      src="/images/hero-avvocato.jpg" 
      alt="Studio Legale Avv. Anna Fusco a Terracina"
      fill
      className="object-cover opacity-70 brightness-90" // Aumentata opacità (70) e luminosità (90)
      priority
    />
    {/* Gradient per leggibilità testo: leggermente più morbido per mostrare più foto a destra */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#120d0d] via-[#120d0d]/40 to-transparent" />
  </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 mb-6 border border-[#c5a5a5]/30 bg-[#c5a5a5]/10 text-[#c5a5a5] rounded-full text-xs tracking-[0.2em] uppercase font-bold">
              Studio Legale Fusco — Terracina
            </span>
            
            <h1 className="text-6xl md:text-9xl font-serif mb-8 leading-[0.85] tracking-tighter">
              Esperienza. <br />
              <span className="text-[#c5a5a5] italic">Determinazione.</span> <br />
              Trasparenza.
            </h1>

            <p className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-2xl leading-relaxed font-light">
              L&apos;Avvocato Anna Fusco definisce nuovi standard nella tutela legale, 
              unendo rigore accademico e una visione dinamica della professione forense.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/contatti" 
                className="group relative px-12 py-5 bg-[#c5a5a5] text-[#120d0d] font-bold rounded-full overflow-hidden transition-all hover:scale-105 text-center"
              >
                <span className="relative z-10 uppercase tracking-widest text-xs">Consulenza Diretta</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="/servizi" 
                className="px-12 py-5 border border-[#c5a5a5]/50 hover:border-[#c5a5a5] text-white rounded-full transition-all backdrop-blur-sm text-center uppercase tracking-widest text-xs"
              >
                Aree di Attività
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Valori - Design Minimale */}
      <section className="py-32 bg-[#1a1414] border-y border-[#c5a5a5]/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6 group">
              <div className="text-[#8b5e5e] text-5xl font-serif opacity-50 group-hover:opacity-100 transition-opacity">01</div>
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-zinc-100">Ascolto Attivo</h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                Ogni controversia nasce da una storia umana. La nostra missione inizia con la comprensione profonda delle vostre necessità.
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="text-[#8b5e5e] text-5xl font-serif opacity-50 group-hover:opacity-100 transition-opacity">02</div>
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-zinc-100">Strategia Tecnica</h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                Costruiamo difese basate su un&apos;analisi meticolosa del dato normativo e dei precedenti giurisprudenziali più recenti.
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="text-[#8b5e5e] text-5xl font-serif opacity-50 group-hover:opacity-100 transition-opacity">03</div>
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-zinc-100">Etica e Risultato</h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                Il successo professionale è indissolubile dal rispetto del codice deontologico e dalla massima trasparenza verso il cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}