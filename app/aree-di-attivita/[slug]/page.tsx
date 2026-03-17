import Link from "next/link";
import { Metadata } from "next";
import { Phone, MapPin } from "lucide-react"; // Importiamo icone pulite

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");
  return {
    title: `Avvocato ${title.charAt(0).toUpperCase() + title.slice(1)} Terracina | Studio Legale Fusco`,
    description: `Assistenza legale specialistica in ${title} a Terracina.`,
  };
}

export default async function ServizioSingolo({ params }: Props) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");

  return (
    // CAMBIATO: pt-48 -> pt-24 (o pt-28 se vuoi un filo di respiro in più)
    <main className="min-h-screen bg-cream text-charcoal pt-24 pb-20 px-6 selection:bg-rosewood-light/30">
      <div className="container mx-auto max-w-5xl">
        
        {/* Navigazione Superiore */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <span className="text-rosewood text-[10px] uppercase tracking-[0.4em] block font-bold">
            Dettaglio Area Legale — Studio Fusco
          </span>
        </nav>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif capitalize tracking-tight text-charcoal leading-tight">
          {title}
          <span className="text-rosewood-light">.</span>
        </h1>

        <div className="h-px w-24 bg-rosewood-light mt-8 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Colonna Testo Principale */}
          <div className="lg:col-span-2 space-y-10 border-l border-rosewood-light/20 pl-8 md:pl-12">
            <p className="text-sepia-dark text-xl md:text-2xl font-serif italic leading-relaxed">
              &quot;L&apos;approccio dello Studio Legale Fusco alla materia del{" "}
              <span className="text-rosewood font-medium uppercase tracking-tight not-italic">
                {title}
              </span>{" "}
              si fonda su un aggiornamento costante.&quot;
            </p>

            <article className="space-y-6 text-sepia-dark/80 text-lg font-light leading-relaxed">
              <p>
                Lo Studio Legale dell&apos;<strong>Avv. Anna Fusco</strong> a
                Terracina offre assistenza specialistica completa.
              </p>
              <p>
                Il nostro metodo si articola attraverso un&apos;analisi
                meticolosa della giurisprudenza più recente.
              </p>
              <p className="font-serif italic text-rosewood">
                La tutela del cliente è per noi una missione umana.
              </p>
            </article>

            <div className="pt-10 border-t border-rosewood-light/10">
              <Link
                href="/aree-di-attivita"
                className="inline-flex items-center gap-4 text-rosewood text-[11px] uppercase tracking-[0.3em] font-bold group"
              >
                <span className="h-px w-8 bg-rosewood-light transition-all duration-500 group-hover:w-16 group-hover:bg-rosewood"></span>
                Tutte le aree di attività
              </Link>
            </div>
          </div>

          {/* Sidebar CTA - MODERN SOFT DESIGN */}
          <aside className="lg:col-span-1 sticky top-32">
            <div className="bg-white p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.04)] border border-gray-50 rounded-[2.5rem]">
              <div className="flex flex-col items-center text-center">
                <h4 className="font-serif text-3xl text-charcoal mb-6 tracking-tight">
                  Consulenza Diretta
                </h4>

                <div className="space-y-4 mb-10 text-gray-400 font-light leading-relaxed">
                  <p className="text-base">
                    Hai bisogno di assistenza legale per <br />
                    <span className="text-rosewood font-medium italic lowercase">
                      {title}
                    </span>?
                  </p>
                  <p className="text-sm">
                    Prenota un colloquio conoscitivo presso <br />
                    lo studio di <span className="text-charcoal font-medium">Terracina</span>.
                  </p>
                </div>

                {/* Pulsante Ottimizzato: w-full + padding bilanciato */}
                <Link
                  href="/contatti"
                  className="w-full py-5 px-6 bg-[#3d3330] text-white text-[10px] uppercase tracking-[0.2em] font-extrabold rounded-full shadow-[0_12px_24px_rgba(61,51,48,0.2)] transition-all duration-500 hover:bg-rosewood hover:-translate-y-1.5 active:scale-95 text-center"
                >
                  Richiedi un Appuntamento
                </Link>

                <div className="mt-12 pt-8 border-t border-gray-50 w-full space-y-4">
                  <div className="flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.2em] text-gray-300 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rosewood/40" />
                    <span>Via Palermo, 16 — Terracina</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.2em] text-gray-300 font-medium">
                    <Phone className="w-3.5 h-3.5 text-rosewood/40" />
                    <span>+39 329 124 6316</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}