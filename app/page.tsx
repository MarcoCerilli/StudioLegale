import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Gavel, Users, ShieldCheck, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Avvocato Anna Fusco | Studio Legale a Terracina | Civile e Penale",
  description:
    "L'Avvocato Anna Fusco offre consulenza legale d'eccellenza a Terracina. Specializzata in diritto civile, penale e risarcimento danni. Difesa tecnica e valore umano.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-charcoal selection:bg-rosewood/20">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] min-h-162.5 flex items-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-avvocato.jpg"
            alt="Studio Legale Avvocato Anna Fusco Terracina"
            fill
            className="object-cover opacity-60 brightness-110"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-rosewood" />
              <span className="text-white/60 text-[10px] tracking-[0.5em] uppercase font-bold">
                Eccellenza Legale — Terracina
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-serif mb-10 leading-[0.9] tracking-tighter text-white">
              Difesa tecnica, <br />
              <span className="text-rosewood-light italic font-light">
                valore umano.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-xl leading-relaxed font-light">
              Assistenza legale specialistica fondata sul rigore accademico e
              sulla tutela dinamica dei diritti.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contatti"
                className="flex items-center justify-center gap-3 px-12 py-5 bg-rosewood text-white font-bold transition-all hover:bg-white hover:text-rosewood rounded-full group shadow-xl"
              >
                <span className="uppercase tracking-[0.2em] text-[10px]">Prenota Analisi</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEZIONE VALORI - CARD CHE SI ALZANO */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Ascolto Attivo",
                desc: "Comprendiamo le vostre necessità per trasformarle in una strategia legale vincente.",
              },
              {
                num: "02",
                title: "Strategia Tecnica",
                desc: "Analisi meticolosa dei precedenti giurisprudenziali per garantire la massima efficacia.",
              },
              {
                num: "03",
                title: "Etica Forense",
                desc: "Trasparenza totale sui costi e sulle probabilità di successo in ogni fase.",
              },
            ].map((val, idx) => (
              <div 
                key={idx} 
                className="bg-white p-10 rounded-4xl border border-rosewood/5 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group"
              >
                <span className="text-rosewood text-xl font-serif italic mb-6 block group-hover:scale-110 transition-transform origin-left">
                  {val.num}.
                </span>
                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-charcoal mb-4 group-hover:text-rosewood transition-colors">
                  {val.title}
                </h3>
                <p className="text-charcoal/60 text-[15px] leading-relaxed font-light italic">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEZIONE COMPETENZE - COMPATTA CON TESTI CHIARI */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-rosewood text-white rounded-[3.5rem] p-10 md:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            
            {/* Header Colonna Sinistra */}
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 italic leading-tight text-white">
                Aree di <br /> Intervento
              </h2>
              <p className="text-white/80 font-light mb-8 leading-relaxed text-sm md:text-base">
                Supporto legale integrato tra diritto civile e penale, con particolare attenzione al valore umano.
              </p>
              <Link
                href="/aree-di-attivita"
                className="inline-block text-white uppercase tracking-widest text-[10px] font-bold border-b border-white/40 pb-2 hover:border-white transition-all"
              >
                Vedi tutte le aree
              </Link>
            </div>

            {/* Griglia Competenze Destra - Testi forzati White */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Diritto Civile", icon: <Users className="w-6 h-6" /> },
                { title: "Penale & Difesa", icon: <ShieldCheck className="w-6 h-6" /> },
                { title: "Risarcimento Danni", icon: <Scale className="w-6 h-6" /> },
                { title: "Famiglia & Minori", icon: <Gavel className="w-6 h-6" /> },
              ].map((area, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 bg-white/5 p-8 rounded-4xl hover:bg-white/10 transition-all duration-300 group border border-white/5"
                >
                  <div className="text-rosewood-light group-hover:text-white transition-colors">
                    {area.icon}
                  </div>
                  <h4 className="text-lg font-serif italic text-white">
                    {area.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION / CITAZIONE */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-4xl font-serif italic text-charcoal mb-8 leading-snug">
              “La giustizia non è solo un verdetto, è il percorso umano che
              facciamo insieme.”
            </blockquote>
            <cite className="not-italic uppercase tracking-[0.5em] text-[10px] font-bold text-charcoal/40">
              Avv. Anna Fusco
            </cite>
          </div>
        </div>
      </section>

    </main>
  );
}