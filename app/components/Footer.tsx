import Link from "next/link";
import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sepia-dark text-cream py-10 px-6 border-t border-rosewood/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        
        {/* Colonna 1: Identità Professionale */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-rosewood-light w-5 h-5" />
            <h3 className="font-serif text-rosewood-light text-base uppercase tracking-widest">
              Studio Legale Fusco
            </h3>
          </div>
          <p className="text-[13px] leading-relaxed text-cream/80 font-light max-w-sm">
            Consulenza legale specializzata in ambito civile e penale.
            Patrocinio presso il Foro di <strong>Roma</strong> e attività nelle
            province di <strong>Latina</strong> e <strong>Roma</strong>.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-rosewood-light/60 pt-2 border-t border-white/5">
            P. IVA: <span className="text-cream/80 ml-1">09857711007</span>
          </p>
        </div>

        {/* Colonna 2: Contatti e Mappa */}
        <div className="md:border-x md:border-white/5 md:px-12">
          <h3 className="font-serif text-rosewood-light text-[11px] mb-6 uppercase tracking-[0.2em]">
            Contatti e Sede
          </h3>

          <div className="flex flex-col gap-6">
            {/* Mappa Compatta - URL con Place ID corretto */}
            <div className="w-full h-28 overflow-hidden rounded-sm border border-white/5 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.4826139563276!2d13.245844876615805!3d41.287515002166545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132536fb7e73860b%3A0x6a053229b359f972!2sVia%20Palermo%2C%2016%2C%2004019%20Terracina%20LT!5e0!3m2!1sit!2sit!4v1710000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Recapiti */}
            <address className="not-italic space-y-4">
              <a
                href="https://maps.app.goo.gl/uXvG8pT8x7qBf9H17"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-[13px] text-cream/90 hover:text-white transition-all"
              >
                <MapPin className="w-4 h-4 text-rosewood-light shrink-0 mt-0.5" />
                <span className="leading-tight">
                  Via Palermo, 16, 04019 <br />
                  <strong className="text-white font-semibold">Terracina (LT)</strong>
                </span>
              </a>

              <div className="space-y-2 pt-1">
                <a
                  href="mailto:annafusco@ordineavvocatiroma.org"
                  className="group flex items-center gap-3 text-[12px] text-cream/80 hover:text-white transition-all underline decoration-rosewood-light/20 underline-offset-4"
                >
                  <Mail className="w-4 h-4 text-rosewood-light shrink-0" />
                  <span>PEC: annafusco@ordineavvocatiroma.org</span>
                </a>
                <a
                  href="mailto:ass.legale@gmail.com"
                  className="group flex items-center gap-3 text-[12px] text-cream/80 hover:text-white transition-all underline decoration-rosewood-light/20 underline-offset-4"
                >
                  <Mail className="w-4 h-4 text-rosewood-light shrink-0" />
                  <span>Email: ass.legale@gmail.com</span>
                </a>
              </div>

              <a
                href="tel:+393291246316"
                className="group flex items-center gap-3 text-base text-white hover:text-rosewood-light transition-all pt-2"
              >
                <Phone className="w-4 h-4 text-rosewood-light shrink-0" />
                <span className="font-bold tracking-tight italic">329 124 6316</span>
              </a>
            </address>
          </div>
        </div>

        {/* Colonna 3: Navigazione e Policy */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-rosewood-light text-[11px] mb-6 uppercase tracking-[0.2em]">
              Informazioni
            </h3>
            <nav className="grid grid-cols-1 gap-3">
              <Link
                href="/chi-sono"
                className="text-[13px] text-cream/80 hover:text-white hover:translate-x-1 transition-all"
              >
                Profilo Professionale
              </Link>
              <Link
                href="/aree-di-attivita"
                className="text-[13px] text-cream/80 hover:text-white hover:translate-x-1 transition-all"
              >
                Aree di Attività
              </Link>
            </nav>
          </div>

          <div className="flex gap-4 mt-8 pt-4 border-t border-white/5">
            <Link
              href="/privacy-policy"
              className="text-[9px] text-cream/40 hover:text-rosewood-light uppercase tracking-widest"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-[9px] text-cream/40 hover:text-rosewood-light uppercase tracking-widest"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-rosewood-light/50">
        <p>© 2026 Avv. Anna Fusco | Studio Legale Terracina</p>
        <p className="hidden md:block">Iscrizione Albo Roma n. A36343</p>
      </div>
    </footer>
  );
}