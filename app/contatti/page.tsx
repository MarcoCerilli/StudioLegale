import ContactForm from "@/app/components/ContactForm";

export default function ContattiPage() {
  // Sostituire con l'URL embed reale di Google Maps per Via Palermo 16, Terracina
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.444!2d13.245!3d41.285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzA2LjAiTiAxM8KwMTQnNDIuMCJF!5e0!3m2!1sit!2sit!4v1626880000000!5m2!1sit!2sit";

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#2d2424] pt-40 pb-24 selection:bg-[#c5a5a5]/30">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* COLONNA SINISTRA: Titolo, Dati Legali e Mappa */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* Titolo Sezione */}
            <div className="space-y-4">
              <span className="text-[#8b5e5e] text-[10px] font-bold uppercase tracking-[0.5em] block">
                Direct Line
              </span>
              <h1 className="text-7xl md:text-8xl font-serif text-[#2d2424] tracking-tighter leading-none">
                Contatti<span className="text-[#8b5e5e]">.</span>
              </h1>
              <div className="w-20 h-[1px] bg-[#c5a5a5] mt-8"></div>
            </div>

            <div className="space-y-12 border-l-2 border-[#c5a5a5]/30 pl-8">
              
              {/* 1. DATI PROFESSIONALI (Priorità Massima) */}
              <section className="space-y-5">
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#8b5e5e] font-bold">Riferimenti Professionali</p>
                <div className="space-y-4 text-[#2d2424]">
                  <p className="text-xl font-serif italic text-[#4a3434] leading-snug">
                    Avvocato iscritto all&apos;Ordine degli Avvocati di Roma (n. A36343)
                  </p>
                  <div className="space-y-3 pt-2">
                    <p className="flex flex-col">
                      <span className="text-[9px] uppercase opacity-50 font-sans tracking-widest font-bold">PEC Certificata</span>
                      <span className="text-base font-medium">annafusco@ordineavvocatiroma.org</span>
                    </p>
                    <p className="flex flex-col">
                      <span className="text-[9px] uppercase opacity-50 font-sans tracking-widest font-bold">Partita IVA</span>
                      <span className="text-base font-medium tracking-widest">09857711007</span>
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. RECAPITI E SEDE */}
              <section className="space-y-8 pt-4 border-t border-[#c5a5a5]/10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#8b5e5e] font-bold mb-4">Segreteria e Sede</p>
                  <div className="space-y-4">
                    <a href="tel:+393291246316" className="text-2xl font-serif block hover:text-[#8b5e5e] transition-colors">
                      329 124 6316
                    </a>
                    <a href="mailto:ass.legale@gmail.com" className="text-2xl font-serif block hover:text-[#8b5e5e] transition-colors">
                      ass.legale@gmail.com
                    </a>
                    <p className="text-xl font-serif pt-4 leading-relaxed">
                      Via Palermo, 16 <br />
                      <span className="text-[#4a3434]/60 text-sm font-sans tracking-widest uppercase">04019 Terracina (LT)</span>
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Mappa Reinserita con Iframe */}
            <div className="w-full h-80 rounded-sm overflow-hidden border border-[#c5a5a5]/20 shadow-lg relative group">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.6) contrast(1.1) brightness(0.9)' }}
                allowFullScreen
                loading="lazy"
                title="Posizione Studio Legale Fusco"
                className="group-hover:filter-none transition-all duration-1000"
              ></iframe>
            </div>
          </div>

          {/* COLONNA DESTRA: Modulo (Larghezza Contenuta) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end lg:pt-24">
            <div className="w-full max-w-xl bg-white p-10 md:p-14 border border-[#c5a5a5]/20 shadow-[0_30px_80px_rgba(74,52,52,0.05)]">
              <div className="mb-12">
                <h3 className="text-3xl font-serif mb-4 text-[#2d2424]">Richiesta di Consulenza</h3>
                <p className="text-[#4a3434]/60 text-sm font-light leading-relaxed">
                  Compili il modulo sottostante per sottoporre il suo caso o richiedere informazioni.
                </p>
              </div>

              <ContactForm />
              
              <div className="mt-12 pt-8 border-t border-[#c5a5a5]/10 text-center lg:text-left">
                <p className="text-[10px] text-[#4a3434]/40 uppercase tracking-widest leading-tight">
                  I dati sono trattati in conformità al GDPR (UE 2016/679).
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}