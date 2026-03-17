import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, Scale, Gavel, ShieldAlert, Globe2 } from "lucide-react";
import { dettagliServizi } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servizio = dettagliServizi[slug as keyof typeof dettagliServizi];

  if (!servizio) return { title: "Servizio non trovato" };

  return {
    title: `Avvocato ${servizio.title} Terracina | Studio Legale Fusco`,
    description: servizio.desc,
  };
}

export default async function ServizioSingolo({ params }: Props) {
  const { slug } = await params;
  
  // Recupero dati dal file data.ts
  const servizio = dettagliServizi[slug as keyof typeof dettagliServizi];

  // Se lo slug non esiste nel file dati, mostra la pagina 404
  if (!servizio) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cream text-charcoal pt-28 pb-20 px-6 selection:bg-rosewood-light/30">
      <div className="container mx-auto max-w-6xl">
        
        {/* Navigazione e Titolo */}
        <div className="mb-12">
          <Link href="/aree-di-attivita" className="text-rosewood text-[10px] uppercase tracking-[0.4em] font-bold hover:opacity-70 transition-all">
            ← Torna alle aree di attività
          </Link>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-charcoal leading-tight mt-6">
            {servizio.title}<span className="text-rosewood">.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-2 space-y-16">
            
            {/* Introduzione Dinamica */}
            <section className="space-y-8">
              <div className="flex items-start gap-6">
                <Scale className="w-10 h-10 text-rosewood/30 shrink-0 mt-1" />
                <p className="text-sepia-dark text-xl md:text-2xl font-serif italic leading-relaxed">
                  &quot;{servizio.desc}&quot;
                </p>
              </div>
              
              {/* Focus / Filosofia */}
              <div className="bg-charcoal p-10 rounded-[2.5rem] text-cream relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-rosewood text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Focus dello Studio</span>
                  <p className="text-2xl md:text-3xl font-serif italic leading-snug">
                    {servizio.focus}
                  </p>
                </div>
                <Gavel className="absolute -right-6 -bottom-6 w-32 h-32 text-white/5 rotate-12" />
              </div>
              
              <div className="h-px w-full bg-rosewood/10" />
            </section>

            {/* Ambiti di Intervento (Punti Chiave) */}
            <section className="space-y-8">
              <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-charcoal/40">Competenze Specifiche</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servizio.punti.map((punto, index) => (
                  <div key={index} className="flex items-center gap-3 p-5 bg-white border border-rosewood/5 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <CheckCircle2 className="w-5 h-5 text-rosewood shrink-0" />
                    <span className="text-sepia-dark font-medium">{punto}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer della sezione: Trasparenza */}
            <section className="bg-rosewood/5 border border-rosewood/10 p-8 rounded-4xl flex flex-col md:flex-row items-center gap-6">
              <ShieldAlert className="w-12 h-12 text-rosewood opacity-40" />
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Etica Professionale</h4>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Lo Studio garantisce massima trasparenza sui costi e una valutazione onesta della procedibilità, nel pieno rispetto del codice deontologico forense.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-1 lg:sticky lg:top-32">
            <div className="bg-white p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.06)] border border-rosewood/5 rounded-[3rem]">
              <div className="flex flex-col items-center text-center">
                <Globe2 className="w-10 h-10 text-rosewood/20 mb-6" />
                <h4 className="font-serif text-3xl text-charcoal mb-4 tracking-tight">Hai bisogno di assistenza?</h4>
                <p className="text-gray-400 font-light text-sm mb-10 leading-relaxed">
                  Prenota un colloquio conoscitivo per analizzare la tua posizione in ambito di <br/>
                  <span className="text-rosewood italic font-semibold">{servizio.title}</span>.
                </p>

                <Link
                  href="/prenota-consulenza"
                  className="w-full py-5 bg-charcoal text-white text-[10px] uppercase tracking-[0.2em] font-extrabold rounded-full transition-all duration-500 hover:bg-rosewood hover:-translate-y-1 text-center"
                >
                  Richiedi Appuntamento
                </Link>

                <div className="mt-10 pt-8 border-t border-gray-50 w-full">
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">Urgenze</p>
                   <a href="https://wa.me/393291246316" className="text-rosewood font-bold text-xs hover:underline flex items-center justify-center gap-2">
                     Invia messaggio WhatsApp <ArrowRight className="w-3 h-3" />
                   </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

// Icona freccia mancante nell'import precedente
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}