import Link from "next/link";
import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";
import ProfessionalQr from "./ProfessionalQr";

export default function Footer() {
  return (
    <footer className="bg-sepia-dark text-cream py-10 px-6 border-t border-rosewood-light/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
        
        {/* Colonna 1: Brand - Testi più chiari per accessibilità */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-rosewood-light w-4 h-4" />
            <h3 className="font-serif text-rosewood-light text-[13px] uppercase tracking-widest font-medium">
              Studio Legale Fusco
            </h3>
          </div>
          <p className="text-[11px] leading-relaxed text-cream/90 font-light italic max-w-[240px]">
            Consulenza legale fondata sulla precisione tecnica e sulla comprensione umana.
          </p>
          <p className="text-[9px] uppercase tracking-widest text-rosewood-light/60 font-medium">
            P. IVA: 09857711007
          </p>
        </div>

        {/* Colonna 2: Contatti - Contrastati per WCAG */}
        <div className="md:border-x md:border-white/10 md:px-10 flex flex-col justify-center">
          <address className="not-italic space-y-4">
            <div className="flex items-center gap-3 text-[12px] text-cream">
              <MapPin className="w-4 h-4 text-rosewood-light shrink-0" />
              <span>Via Palermo, 16, <strong className="text-white font-semibold">Terracina (LT)</strong></span>
            </div>
            
            <div className="flex flex-col space-y-1.5 ml-7">
              <a href="mailto:ass.legale@gmail.com" className="text-[11px] text-cream/80 hover:text-white underline decoration-rosewood-light/30 underline-offset-4 transition-all">
                ass.legale@gmail.com
              </a>
              <a href="mailto:annafusco@ordineavvocatiroma.org" className="text-[11px] text-cream/80 hover:text-white underline decoration-rosewood-light/30 underline-offset-4 transition-all">
                PEC: annafusco@ordineavvocatiroma.org
              </a>
            </div>

            <a href="tel:+393291246316" className="flex items-center gap-3 text-[15px] text-white font-bold hover:text-rosewood-light transition-all">
              <Phone className="w-4 h-4 text-rosewood-light" />
              329 124 6316
            </a>
          </address>
        </div>

        {/* Colonna 3: QR + Azione - Accorpati a destra */}
        <div className="flex flex-row md:justify-end items-center gap-6">
          {/* QR Code spostato qui accanto alla CTA */}
          <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
            <ProfessionalQr />
          </div>

          <div className="flex flex-col justify-between items-end h-full py-1">
            <div className="text-right">
              <h3 className="font-serif text-rosewood-light text-[11px] mb-3 uppercase tracking-widest font-bold">
                Consulenza
              </h3>
              <Link
                href="/contatti"
                className="inline-block border-2 border-rosewood-light/40 bg-rosewood-light/5 px-5 py-2 text-[10px] uppercase tracking-[0.2em] text-white font-bold hover:bg-rosewood-light hover:text-sepia-dark transition-all shadow-sm"
              >
                Prenota Colloquio
              </Link>
            </div>

            <nav className="flex gap-5 mt-6">
              <Link href="/chi-sono" className="text-[10px] uppercase tracking-widest text-cream/70 hover:text-white font-medium">Profilo</Link>
              <Link href="/aree-di-attivita" className="text-[10px] uppercase tracking-widest text-cream/70 hover:text-white font-medium">Attività</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright - Leggermente più visibile */}
      <div className="max-w-7xl mx-auto mt-10 pt-5 border-t border-white/10 flex justify-between text-[8px] uppercase tracking-[0.3em] text-cream/40">
        <p>© 2026 Avv. Anna Fusco | Studio Legale</p>
        <p className="hidden md:block">Iscrizione Albo Roma N. A36343</p>
      </div>
    </footer>
  );
}