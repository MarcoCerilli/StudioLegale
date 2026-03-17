import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generazione dinamica dei Metadata per ogni area legale
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ');
  
  return {
    title: `Avvocato ${title.charAt(0).toUpperCase() + title.slice(1)} Terracina | Studio Legale Fusco`,
    description: `Assistenza legale specialistica in ${title} a Terracina, Latina e Roma. Affidati all'esperienza dell'Avv. Anna Fusco per la tutela dei tuoi diritti.`,
  };
}

export default async function ServizioSingolo({ params }: Props) {
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ');

  return (
    <main className="min-h-screen bg-cream text-charcoal pt-48 pb-20 px-6 selection:bg-rosewood-light/30">
      <div className="container mx-auto max-w-5xl">
        
        {/* Navigazione Superiore */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <span className="text-rosewood text-[10px] uppercase tracking-[0.4em] block font-bold">
            Dettaglio Area Legale — Studio Fusco
          </span>
        </nav>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif capitalize tracking-tight text-charcoal leading-tight">
          {title}<span className="text-rosewood-light">.</span>
        </h1>
        
        {/* Linea di accento dinamica */}
        <div className="h-px w-24 bg-rosewood-light mt-8 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Colonna Testo Principale */}
          <div className="lg:col-span-2 space-y-10 border-l border-rosewood-light/20 pl-8 md:pl-12">
            <p className="text-sepia-dark text-xl md:text-2xl font-serif italic leading-relaxed">
              &quot;L&apos;approccio dello Studio Legale Fusco alla materia del <span className="text-rosewood font-medium uppercase tracking-tight not-italic">{title}</span> si fonda su un aggiornamento costante e una strategia mirata al caso concreto.&quot;
            </p>
            
            <article className="space-y-6 text-sepia-dark/80 text-lg font-light leading-relaxed">
              <p>
                Lo Studio Legale dell&apos;<strong>Avv. Anna Fusco</strong> a Terracina offre assistenza specialistica completa in questo ambito, garantendo una difesa tecnica solida e trasparente.
              </p>
              <p>
                Il nostro metodo di lavoro si articola attraverso un&apos;analisi meticolosa della giurisprudenza più recente, supportando il cliente sia nella fase di consulenza stragiudiziale (per prevenire il contenzioso) sia nella fase giudiziale dinanzi ai Tribunali di <strong>Latina</strong>, <strong>Roma</strong> e su tutto il territorio nazionale.
              </p>
              <p className="font-serif italic text-rosewood">
                La tutela del cliente è per noi una missione umana, prima che professionale.
              </p>
            </article>

            {/* Pulsante Torna Indietro */}
            <div className="pt-10 border-t border-rosewood-light/10">
              <Link 
                href="/aree-di-attivita" 
                className="inline-flex items-center gap-4 text-rosewood text-[11px] uppercase tracking-[0.3em] font-bold group"
              >
                <span className="h-[px] w-8 bg-rosewood-light transition-all duration-500 group-hover:w-16 group-hover:bg-rosewood"></span>
                Tutte le aree di attività
              </Link>
            </div>
          </div>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-1 sticky top-40">
            <div className="bg-white border border-rosewood-light/20 p-10 shadow-[0_20px_50px_rgba(74,52,52,0.05)] text-center lg:text-left">
              <h4 className="font-serif text-2xl mb-6 text-charcoal">Consulenza Diretta</h4>
              <p className="text-sm text-sepia-dark/70 mb-8 leading-relaxed">
                Hai bisogno di assistenza legale per <strong>{title}</strong>? <br />
                Prenota un colloquio conoscitivo presso lo studio di <strong>Terracina</strong>.
              </p>
              <Link 
                href="/contatti"
                className="block w-full py-5 bg-sepia-dark text-white text-center text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-rosewood transition-all shadow-lg active:scale-95"
              >
                Richiedi un Appuntamento
              </Link>
              <div className="mt-6 flex flex-col gap-2 text-[9px] uppercase tracking-widest text-sepia-dark/40">
                <span>📍 Via Palermo, 16 — Terracina</span>
                <span>📞 +39 329 124 6316</span>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}