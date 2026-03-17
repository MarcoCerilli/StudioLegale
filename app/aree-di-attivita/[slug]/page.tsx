import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  Scale,
  Gavel,
  ShieldAlert,
  Globe2,
  MessageCircle,
} from "lucide-react"; // Aggiunto MessageCircle
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
  const servizio = dettagliServizi[slug as keyof typeof dettagliServizi];

  if (!servizio) {
    notFound();
  }

  return (
    // Ridotto il pt-28 a pt-24 per alzare tutto il contenuto
    <main className="min-h-screen bg-cream text-charcoal pt-24 pb-20 px-6 selection:bg-rosewood-light/30">
      <div className="container mx-auto max-w-6xl">
        {/* Navigazione e Titolo */}
        <div className="mb-12">
          <Link
            href="/aree-di-attivita"
            className="text-rosewood text-[10px] uppercase tracking-[0.4em] font-bold hover:opacity-70 transition-all"
          >
            ← Torna alle aree di attività
          </Link>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-charcoal leading-tight mt-6">
            {servizio.title}
            <span className="text-rosewood">.</span>
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

              <div className="bg-charcoal p-10 rounded-[2.5rem] text-cream relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-rosewood text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">
                    Focus dello Studio
                  </span>
                  <p className="text-2xl md:text-3xl font-serif italic leading-snug">
                    {servizio.focus}
                  </p>
                </div>
                <Gavel className="absolute -right-6 -bottom-6 w-32 h-32 text-white/5 rotate-12" />
              </div>

              <div className="h-px w-full bg-rosewood/10" />
            </section>

            {/* Ambiti di Intervento */}
            <section className="space-y-8">
              <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-charcoal/40">
                Competenze Specifiche
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servizio.punti.map((punto, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-5 bg-white border border-rosewood/5 rounded-2xl shadow-sm hover:shadow-md transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-rosewood shrink-0" />
                    <span className="text-sepia-dark font-medium">{punto}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Etica */}
            <section className="bg-rosewood/5 border border-rosewood/10 p-8 rounded-4xl flex flex-col md:flex-row items-center gap-6">
              <ShieldAlert className="w-12 h-12 text-rosewood opacity-40" />
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-2">
                  Etica Professionale
                </h4>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Lo Studio garantisce massima trasparenza sui costi e una
                  valutazione onesta della procedibilità, nel pieno rispetto del
                  codice deontologico forense.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar CTA - Alzata con lg:top-24 */}
          <aside className="lg:col-span-1 lg:sticky lg:top-24">
            <div className="bg-white p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.06)] border border-rosewood-light/10 rounded-[3rem]">
              <div className="flex flex-col items-center text-center">
                <Globe2 className="w-10 h-10 text-rosewood/20 mb-6" />
                <h4 className="font-serif text-3xl text-charcoal mb-4 tracking-tight">
                  Hai bisogno di assistenza?
                </h4>
                <p className="text-gray-400 font-light text-sm mb-10 leading-relaxed">
                  Prenota un colloquio conoscitivo per analizzare la tua
                  posizione in ambito di <br />
                  <span className="text-rosewood italic font-semibold">
                    {servizio.title}
                  </span>
                  .
                </p>

                {/* Button 1: Rosewood Chiaro */}
                <Link
                  href="/prenota-consulenza"
                  className="w-full py-5 bg-rosewood-light/10 text-rosewood text-[10px] uppercase tracking-[0.2em] font-extrabold rounded-full transition-all duration-500 hover:bg-rosewood hover:text-white hover:-translate-y-1 text-center"
                >
                  Richiedi Appuntamento
                </Link>

                <div className="mt-10 pt-8 border-t border-gray-50 w-full">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">
                    Urgenze
                  </p>

                  {/* Button 2: WhatsApp con icona ufficiale e colore brand */}
                  <a
                    href="https://wa.me/393291246316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-5 px-6 bg-[#25D366] text-white rounded-full font-bold text-[10px] uppercase tracking-[0.1em] transition-all duration-500 hover:shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:-translate-y-1 group"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current transition-transform group-hover:scale-110"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.633 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat WhatsApp
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

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}
