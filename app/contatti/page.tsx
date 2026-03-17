import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Componente Icona WhatsApp Ufficiale
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContattiPage() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.484!2d13.245!3d41.285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzA2LjAiTiAxM8KwMTQnNDIuMCJF!5e0!3m2!1sit!2sit!4v123456789";

  return (
    // FIX SPAZIO: pt-40 -> pt-24
    <main className="min-h-screen bg-cream text-charcoal pt-24 pb-24 selection:bg-rosewood-light/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* COLONNA SINISTRA */}
          <div className="flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="text-rosewood text-[10px] font-bold uppercase tracking-[0.5em] block">
                  Direct Line
                </span>
                <h1 className="text-7xl md:text-8xl font-serif text-charcoal tracking-tighter leading-none">
                  Contatti<span className="text-rosewood">.</span>
                </h1>
                <div className="w-20 h-px bg-rosewood-light mt-8"></div>
              </div>

              <div className="space-y-10 border-l border-rosewood-light/30 pl-8 mt-12">
                <section className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-rosewood font-bold">Riferimenti Professionali</p>
                  <p className="text-xl font-serif italic text-sepia-dark leading-snug">
                    Avvocato iscritto all&apos;Ordine di Roma (n. A36343)
                  </p>
                  <div className="text-sm space-y-1 opacity-60 font-medium">
                    <p>PEC: annafusco@ordineavvocatiroma.org</p>
                    <p>P.IVA: 09857711007</p>
                  </div>
                </section>

                <section className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-rosewood font-bold">Sede Legale</p>
                  <p className="text-2xl font-serif leading-relaxed">
                    Via Palermo, 16 <br />
                    <span className="text-sepia-dark/60 text-sm font-sans tracking-widest uppercase">04019 Terracina (LT)</span>
                  </p>
                </section>
              </div>
            </div>

            <div className="pt-12 flex flex-col space-y-6 border-t border-sepia-dark/10">
              <a href="tel:+393291246316" className="text-3xl font-serif hover:text-rosewood transition-colors italic">
                329 124 6316
              </a>
              <a href="mailto:ass.legale@gmail.com" className="text-xl font-serif hover:text-rosewood transition-colors">
                ass.legale@gmail.com
              </a>
            </div>
          </div>

          {/* COLONNA DESTRA */}
          <div className="flex flex-col space-y-6">
            {/* Mappa con bordi arrotondati e ombra morbida */}
            <div className="h-96 rounded-4xl overflow-hidden border border-rosewood-light/20 shadow-lg bg-white grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mappa Studio"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* WhatsApp Box - Arrotondato */}
              <a 
                href="https://wa.me/393291246316"
                className="group bg-white border border-sepia-dark/5 p-8 flex flex-col justify-between transition-all duration-500 rounded-4xl hover:-translate-y-2 hover:shadow-2xl hover:border-rosewood/20"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-cream rounded-full text-charcoal group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-charcoal/20 group-hover:text-charcoal group-hover:translate-x-1 transition-all" />
                </div>
                <div>
                  <h4 className="font-serif text-xl italic mb-1 text-sepia-dark">WhatsApp Business</h4>
                  <p className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Risposta rapida</p>
                </div>
              </a>

              {/* Consulenza Box - Arrotondato */}
              <Link 
                href="/prenota-consulenza"
                className="group bg-[#3d3330] p-8 flex flex-col justify-between transition-all duration-500 rounded-4xl hover:bg-rosewood hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(100,30,30,0.2)]"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-white/10 rounded-full text-white">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-xl italic mb-1 text-white">Consulenza</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Prenota Appuntamento</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}