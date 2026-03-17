import Link from "next/link";
import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    // RIDUZIONE ALTEZZA: Da py-10 a py-8 e border-t più discreto
    <footer className="bg-sepia-dark text-cream py-12 px-6 border-t border-rosewood-light/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {/* Colonna 1: Identità Professionale */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-rosewood-light w-4 h-4" />
            <h3 className="font-serif text-rosewood-light text-sm uppercase tracking-widest">
              Studio Legale Fusco
            </h3>
          </div>
          <p className="text-[12px] leading-relaxed text-cream/60 font-light max-w-xs italic">
            Consulenza legale fondata sulla precisione tecnica e sulla
            comprensione umana.
          </p>
          <div className="pt-3">
            <p className="text-[9px] uppercase tracking-widest text-rosewood-light/40">
              P. IVA: <span className="text-cream/50 ml-1">09857711007</span>
            </p>
          </div>
        </div>

        {/* Colonna 2: Contatti - Più compatta */}
        <div className="md:border-x md:border-white/5 md:px-12 flex flex-col justify-center">
          <address className="not-italic space-y-4">
            <a
              href="https://maps.app.goo.gl/vostrolink"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[12px] text-cream/70 hover:text-white transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-rosewood-light shrink-0" />
              <span>
                Via Palermo, 16, 04019{" "}
                <strong className="text-cream">Terracina (LT)</strong>
              </span>
            </a>

            <div className="space-y-1.5">
              <a
                href="mailto:annafusco@ordineavvocatiroma.org"
                className="group flex items-center gap-3 text-[11px] text-cream/50 hover:text-white transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-rosewood-light/50 group-hover:text-rosewood-light shrink-0" />
                <span>PEC: annafusco@ordineavvocatiroma.org</span>
              </a>
              <a
                href="tel:+393291246316"
                className="group flex items-center gap-3 text-[14px] text-white hover:text-rosewood-light transition-all pt-1"
              >
                <Phone className="w-3.5 h-3.5 text-rosewood-light shrink-0" />
                <span className="font-bold tracking-tight">329 124 6316</span>
              </a>
            </div>
          </address>
        </div>

        {/* Sostituisci la terza colonna con questa */}
        <div className="flex flex-col justify-between md:items-end">
          <div className="text-right">
            <h3 className="font-serif text-rosewood-light text-[11px] mb-4 uppercase tracking-[0.2em]">
              Consulenza Legale
            </h3>
            <Link
              href="/contatti"
              className="inline-block border border-rosewood-light/30 px-6 py-2 text-[10px] uppercase tracking-widest text-cream hover:bg-rosewood-light hover:text-sepia-dark transition-all duration-300"
            >
              Prenota un colloquio
            </Link>
          </div>

          <nav className="flex gap-6 mt-8">
            <Link
              href="/chi-sono"
              className="text-[10px] uppercase tracking-widest text-cream/40 hover:text-rosewood-light"
            >
              Profilo
            </Link>
            <Link
              href="/aree-di-attivita"
              className="text-[10px] uppercase tracking-widest text-cream/40 hover:text-rosewood-light"
            >
              Attività
            </Link>
          </nav>
        </div>
      </div>

      {/* Copyright Line - Più sottile e scura */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] uppercase tracking-[0.4em] text-white/20">
        <p>© 2026 Avv. Anna Fusco | Studio Legale</p>
        <p className="hidden md:block">Iscrizione Albo Roma n. A36343</p>
      </div>
    </footer>
  );
}
