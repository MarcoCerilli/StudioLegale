import { ArrowRight, Scale, CheckCircle2, Clock } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function PrenotaPage() {
  return (
    <main className="bg-cream min-h-screen pt-20 md:pt-28 pb-10 md:pb-20 px-4 md:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Sezione */}
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-rosewood/10 px-4 py-2 rounded-full mb-2">
            <Clock className="w-3 h-3 text-rosewood" />
            <span className="text-rosewood text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em]">
              Analisi Gratuita — 30 Minuti
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-7xl text-charcoal tracking-tighter leading-tight">
            Prenota la tua <br className="hidden md:block" />
            <span className="text-rosewood italic font-light">
              Prima Consulenza Gratuita.
            </span>
          </h1>
          <p className="text-charcoal/70 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed px-2">
            Un colloquio conoscitivo di circa 30 minuti per analizzare i fatti e definire insieme la strategia legale migliore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* Form di Prenotazione */}
          <div className="bg-white p-6 md:p-12 rounded-4xl md:rounded-[3rem] shadow-2xl border border-rosewood/5 order-2 lg:order-1">
            <h3 className="font-serif text-2xl md:text-3xl mb-6 md:mb-8">
              Richiedi un Appuntamento
            </h3>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input
                  placeholder="Nome e Cognome"
                  className="w-full p-4 bg-cream/30 rounded-2xl text-sm outline-none border border-transparent focus:border-rosewood/20 transition-all"
                />
                <input
                  placeholder="Telefono"
                  className="w-full p-4 bg-cream/30 rounded-2xl text-sm outline-none border border-transparent focus:border-rosewood/20 transition-all"
                />
              </div>

              <select
                defaultValue="default"
                className="w-full p-4 bg-cream/30 rounded-2xl text-sm outline-none border border-transparent focus:border-rosewood/20 appearance-none cursor-pointer"
              >
                <option value="default" disabled>Seleziona l&apos;area di interesse</option>
                <option value="diritto-civile">Diritto Civile e Famiglia</option>
                <option value="risarcimento">Risarcimento Danni</option>
                <option value="penale">Diritto Penale</option>
                <option value="lavoro">Diritto del Lavoro</option>
                <option value="altro">Altra esigenza legale</option>
              </select>

              <textarea
                rows={4}
                className="w-full p-4 bg-cream/30 rounded-2xl text-sm outline-none border border-transparent focus:border-rosewood/20 resize-none transition-all"
                placeholder="Descriva brevemente il motivo della richiesta..."
              ></textarea>

              <div className="p-4 md:p-6 bg-rosewood/5 rounded-2xl">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="transparency"
                    className="mt-1 accent-rosewood h-4 w-4 shrink-0"
                    required
                  />
                  <label htmlFor="transparency" className="text-[10px] md:text-[11px] text-charcoal/70 leading-tight">
                    Confermo la richiesta di <strong>consulenza gratuita (30 min)</strong> e acconsento al trattamento dei dati.
                  </label>
                </div>
              </div>

              <button className="w-full bg-charcoal text-white font-bold py-5 rounded-full hover:bg-rosewood transition-all shadow-xl uppercase tracking-widest text-[9px] md:text-[10px] flex items-center justify-center gap-3 active:scale-95">
                Prenota la mia Consulenza
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Colonna Destra: Info & WhatsApp */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            
            {/* Box Etica Professionale */}
            <div className="bg-charcoal p-8 md:p-10 rounded-4xl md:rounded-[3rem] shadow-xl relative overflow-hidden">
              <Scale className="absolute -right-4 -bottom-4 w-24 h-24 md:w-32 md:h-32 text-white/5 -rotate-12" />
              <div className="relative z-10">
                <Scale className="w-8 h-8 md:w-10 md:h-10 text-rosewood mb-4 md:mb-6" />
                <h3 className="font-serif text-2xl md:text-3xl mb-3 md:mb-4 italic text-cream">
                  Trasparenza Totale.
                </h3>
                <p className="font-light text-cream/80 leading-relaxed mb-6 md:mb-8 text-sm">
                  La prima consulenza è finalizzata all&apos;inquadramento del problema. Verrà fornito un <strong>preventivo scritto dettagliato</strong> prima di procedere con l&apos;incarico.
                </p>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    "Analisi preliminare dei documenti",
                    "Valutazione dei tempi e dei costi",
                    "Nessun obbligo di conferimento incarico",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-cream">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-rosewood shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Box WhatsApp Business */}
            <div className="bg-white p-8 md:p-10 rounded-4xl md:rounded-[3rem] border border-emerald-500/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-charcoal italic">Contatto Rapido</h3>
              </div>
              <p className="text-charcoal/60 mb-6 md:mb-8 font-light text-sm leading-relaxed">
                Preferisce un contatto immediato? Inviando un messaggio su WhatsApp può anticipare la documentazione.
              </p>
              <a
                href="https://wa.me/393291246316"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-[#25D366] text-white hover:bg-[#20ba5a] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg uppercase text-[10px] tracking-widest w-full text-center"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chatta con lo Studio
              </a>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}