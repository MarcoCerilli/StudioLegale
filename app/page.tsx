import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Gavel, Users, ShieldCheck, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Avvocato Anna Fusco | Studio Legale a Terracina | Civile e Penale",
  description:
    "L'Avvocato Anna Fusco offre consulenza legale d'eccellenza a Terracina. Specializzata in diritto civile, penale e risarcimento danni.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-charcoal selection:bg-rosewood/20 overflow-x-hidden">
      
      {/* 1. HERO SECTION - REATTIVA */}
      <section className="relative h-[90vh] md:h-[85vh] min-h-125 flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-avvocato.jpg"
            alt="Studio Legale Avvocato Anna Fusco Terracina"
            fill
            className="object-cover opacity-70"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent md:from-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="h-px w-8 md:w-12 bg-white" />
              <span className="text-white/80 text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold">
                Eccellenza Legale — Terracina
              </span>
            </div>

            {/* TITOLO OTTIMIZZATO: text-4xl su mobile */}
            <h1 className="text-4xl md:text-7xl lg:text-[100px] font-serif mb-8 md:mb-10 leading-[1.1] md:leading-[0.9] tracking-tighter text-white">
              Difesa tecnica, <br />
              <span className="italic font-light text-white">valore umano.</span>
            </h1>

            <p className="text-base md:text-xl text-white/90 mb-10 md:mb-12 max-w-xl leading-relaxed font-light">
              Assistenza legale specialistica fondata sul rigore accademico e sulla tutela dinamica dei diritti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link
                href="/prenota-consulenza"
                className="flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-white text-charcoal font-bold transition-all hover:bg-neutral-200 rounded-full group shadow-xl"
              >
                <span className="uppercase tracking-[0.2em] text-[10px]">Prenota Consulenza</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/aree-di-attivita"
                className="flex items-center justify-center px-8 py-4 md:px-10 md:py-5 border border-white/40 hover:border-white text-white transition-all rounded-full backdrop-blur-md bg-white/5"
              >
                <span className="uppercase tracking-[0.2em] text-[10px]">Aree di Competenza</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEZIONE VALORI - GRID OTTIMIZZATA */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { num: "01", title: "Ascolto Attivo", desc: "Comprendiamo le vostre necessità per trasformarle in una strategia legale vincente." },
              { num: "02", title: "Strategia Tecnica", desc: "Analisi meticolosa dei precedenti giurisprudenziali per garantire la massima efficacia." },
              { num: "03", title: "Etica Forense", desc: "Trasparenza totale sui costi e sulle probabilità di successo in ogni fase." },
            ].map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-8 md:p-10 rounded-4xl md:rounded-[2.5rem] border border-rosewood/5 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <span className="text-rosewood text-xl font-serif italic mb-4 md:mb-6 block">
                  {val.num}.
                </span>
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-charcoal mb-4">
                  {val.title}
                </h3>
                <p className="text-charcoal/60 text-[14px] md:text-[15px] leading-relaxed font-light italic">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEZIONE COMPETENZE - RESPONSIVE BOX */}
      <section className="px-4 md:px-6 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto bg-rosewood text-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-3 gap-10 md:gap-12 items-center">
            <div className="lg:col-span-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6 italic leading-tight text-white">
                Aree di <br className="hidden md:block" /> Intervento
              </h2>
              <p className="text-white/80 font-light mb-8 leading-relaxed text-sm md:text-base">
                Supporto legale integrato tra diritto civile e penale.
              </p>
              <Link
                href="/aree-di-attivita"
                className="inline-block text-white uppercase tracking-widest text-[10px] font-bold border-b border-white/40 pb-2 hover:border-white transition-all"
              >
                Vedi tutte le aree
              </Link>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Diritto Civile", icon: <Users className="w-5 h-5" /> },
                { title: "Penale & Difesa", icon: <ShieldCheck className="w-5 h-5" /> },
                { title: "Risarcimento Danni", icon: <Scale className="w-5 h-5" /> },
                { title: "Famiglia & Minori", icon: <Gavel className="w-5 h-5" /> },
              ].map((area, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 md:gap-6 bg-white/5 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="text-rosewood-light shrink-0">{area.icon}</div>
                  <h4 className="text-base md:text-lg font-serif italic text-white">{area.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-4xl font-serif italic text-charcoal mb-8 leading-snug">
              “La giustizia non è solo un verdetto, è il percorso umano che facciamo insieme.”
            </blockquote>
            <cite className="not-italic uppercase tracking-[0.5em] text-[9px] md:text-[10px] font-bold text-charcoal/40">
              Avv. Anna Fusco
            </cite>
          </div>
        </div>
      </section>
    </main>
  );
}