import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

// RIFERIMENTI SEO RIPRISTINATI E PROTETTI
export const metadata: Metadata = {
  title: "Avvocato Anna Fusco | Studio Legale a Terracina | Civile e Penale",
  description:
    "L'Avvocato Anna Fusco offre consulenza legale d'eccellenza a Terracina. Specializzata in diritto civile, penale e risarcimento danni. Difesa tecnica e valore umano.",
  keywords: [
    "Avvocato Terracina",
    "Anna Fusco",
    "Studio Legale Terracina",
    "Risarcimento Danni",
    "Diritto Civile",
    "Diritto Penale",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-charcoal selection:bg-rosewood/20">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-175 flex items-center overflow-hidden bg-[#1a1515]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-avvocato.jpg"
            alt="Studio Legale Avvocato Anna Fusco Terracina"
            fill
            className="object-cover opacity-40 grayscale-20 brightness-[0.6]"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#1a1515] via-[#1a1515]/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-rosewood" />
              <span className="text-white/60 text-[10px] tracking-[0.5em] uppercase font-medium">
                Studio Legale Anna Fusco — Terracina
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif mb-10 leading-[0.9] tracking-tighter text-white">
              Difesa tecnica, <br />
              <span className="text-cream italic font-light opacity-90">
                valore umano.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl leading-relaxed font-light">
              Assistenza legale specialistica fondata sul rigore accademico e
              sulla tutela dinamica dei diritti. Eccellenza nel{" "}
              <strong>Diritto Civile</strong> e <strong>Penale</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* BUTTON 1: MORBIDO E IMPORTANTE */}
              <Link
                href="/contatti"
                className="flex items-center justify-center gap-3 px-12 py-5 bg-rosewood text-white font-bold transition-all hover:bg-white hover:text-rosewood shadow-[0_20px_40px_rgba(169,76,76,0.3)] rounded-full group"
              >
                <span className="uppercase tracking-[0.2em] text-[10px]">
                  Prenota Analisi Gratuita
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* BUTTON 2: MORBIDO E MINIMAL */}
              <Link
                href="/aree-di-attivita"
                className="flex items-center justify-center px-12 py-5 border border-white/20 hover:border-white/60 text-white transition-all text-center uppercase tracking-[0.2em] text-[10px] rounded-full bg-white/5 backdrop-blur-sm"
              >
                Esplora Competenze
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-12 hidden lg:block">
          <div className="flex flex-col items-center gap-6">
            <p className="text-white/20 text-[9px] uppercase tracking-[0.6em] [writing-mode:vertical-lr] font-medium">
              Legal Excellence
            </p>
            <div className="h-12 w-px bg-white/10" />
          </div>
        </div>
      </section>

      {/* SEZIONE VALORI - DESIGN AMMORBIDITO */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: "01",
                title: "Ascolto Attivo",
                desc: "Ogni caso inizia da una storia. Comprendiamo le vostre necessità per trasformarle in una strategia legale vincente.",
              },
              {
                num: "02",
                title: "Strategia Tecnica",
                desc: "Analisi meticolosa dei precedenti giurisprudenziali per garantire la massima efficacia difensiva tra Latina e Roma.",
              },
              {
                num: "03",
                title: "Etica Forense",
                desc: "Trasparenza totale sui costi e sulle probabilità di successo, nel pieno rispetto del codice deontologico.",
              },
            ].map((val, idx) => (
              <div 
                key={idx} 
                className="p-10 bg-cream/10 rounded-[2.5rem] border border-rosewood/5 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
              >
                <span className="text-rosewood text-xs font-serif italic block mb-6">
                  {val.num}.
                </span>
                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-charcoal mb-4">
                  {val.title}
                </h3>
                <p className="text-charcoal/60 text-[15px] leading-relaxed font-light">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}