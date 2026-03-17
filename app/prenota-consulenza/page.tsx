import { ArrowRight, Scale, HeartPulse, Car, CheckCircle2 } from "lucide-react";

// Componente Icona WhatsApp (SVG)
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

export default function PrenotaPage() {
  return (
    <main className="bg-cream min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-rosewood/10 px-4 py-2 rounded-full mb-4">
            <span className="text-rosewood text-[10px] font-bold uppercase tracking-[0.2em]">
              Informativa Professionale — Studio Legale Fusco
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-charcoal tracking-tighter">
            Analisi del Caso e <br />
            <span className="text-rosewood italic font-light">
              Criteri di Compenso.
            </span>
          </h1>
          <p className="text-charcoal/70 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            Per le pratiche di Risarcimento Danni, lo Studio garantisce la
            massima tutela senza barriere d&apos;ingresso economiche iniziali.
          </p>
        </div>

        {/* Materie Specialistiche */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-[3rem] border border-rosewood/10 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl">Incidenti Stradali</h3>
            </div>
            <p className="text-sm text-charcoal/60 mb-6 leading-relaxed">
              Gestione sinistri e{" "}
              <strong>Fondo di Garanzia Vittime della Strada</strong>. Il
              servizio è <strong>gratuito per l&apos;assistito</strong>:
              l&apos;onorario è corrisposto direttamente dalla compagnia
              assicurativa.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 w-fit px-3 py-1 rounded-full">
              Senza costi per l&apos;assistito
            </div>
          </div>

          <div className="bg-white p-8 rounded-[3rem] border border-rosewood/10 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-50 rounded-2xl text-red-600">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl">Responsabilità Medica</h3>
            </div>
            <p className="text-sm text-charcoal/60 mb-6 leading-relaxed">
              Tutela per errori medici. Lo Studio valuta il caso gratuitamente e
              concorda un{" "}
              <strong>
                compenso dovuto esclusivamente a risultato ottenuto
              </strong>{" "}
              (ottenimento del risarcimento).
            </p>
            <div className="flex items-center gap-2 text-[10px] font-extrabold text-red-600 uppercase tracking-widest bg-red-50 w-fit px-3 py-1 rounded-full">
              Onorario solo a risultato
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form Sinistro */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-rosewood/5">
            <h3 className="font-serif text-3xl mb-8">Invia la tua richiesta</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  placeholder="Nome e Cognome"
                  className="w-full p-4 bg-cream/30 rounded-2xl text-sm outline-none border border-transparent focus:border-rosewood/20"
                />
                <input
                  placeholder="Telefono"
                  className="w-full p-4 bg-cream/30 rounded-2xl text-sm outline-none border border-transparent focus:border-rosewood/20"
                />
              </div>
              <select className="w-full p-4 bg-cream/30 rounded-2xl text-sm outline-none border border-transparent focus:border-rosewood/20 appearance-none cursor-pointer">
                <option value=" " disabled selected>
                  Seleziona Materia
                </option>

                {/* Focus Risarcimento Danni */}
                <option value="incidente-stradale">
                  Incidente Stradale / Fondo Garanzia
                </option>
                <option value="malasanita">Malasanità / Errore Medico</option>

                {/* Aree Principali dal tuo data.ts */}
                <option value="diritto-civile-e-famiglia">
                  Diritto Civile e Famiglia
                </option>
                <option value="diritto-penale">Diritto Penale</option>
                <option value="immigrazione-e-cittadinanza">
                  Immigrazione e Cittadinanza
                </option>

                {/* Altre Competenze */}
                <option value="diritto-del-lavoro">Diritto del Lavoro</option>
                <option value="diritto-societario">
                  Diritto Societario e Imprese
                </option>
                <option value="diritto-amministrativo">
                  Diritto Amministrativo / TAR
                </option>

                <option value="altro">Altra esigenza legale</option>
              </select>
              <textarea
                rows={4}
                className="w-full p-4 bg-cream/30 rounded-2xl text-sm outline-none border border-transparent focus:border-rosewood/20 resize-none"
                placeholder="Descriva brevemente i fatti per una valutazione preliminare..."
              ></textarea>

              <div className="p-6 bg-rosewood/5 rounded-2xl">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="transparency"
                    className="mt-1 accent-rosewood h-4 w-4"
                    required
                  />
                  <label
                    htmlFor="transparency"
                    className="text-[11px] text-charcoal/70 leading-tight"
                  >
                    Richiedo una valutazione gratuita e un{" "}
                    <strong>preventivo scritto</strong>, consapevole che
                    l&apos;esame dei fatti non costituisce parere esaustivo fino
                    al conferimento dell&apos;incarico.
                  </label>
                </div>
              </div>

              <button className="w-full bg-charcoal text-white font-bold py-5 rounded-full hover:bg-rosewood transition-all shadow-xl uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 active:scale-95">
                Invia Richiesta Valutazione
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Colonna Destra: WhatsApp + Etica */}
          <div className="space-y-8">
            {/* Box WhatsApp Business */}
            <div className="bg-white p-10 rounded-[3rem] border border-emerald-500/20 shadow-sm relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal italic">
                    Canale Urgenze
                  </h3>
                </div>
                <p className="text-charcoal/60 mb-8 font-light text-sm leading-relaxed">
                  Per inviare documentazione fotografica o richiedere un
                  contatto immediato, utilizzi il canale{" "}
                  <strong>WhatsApp Business</strong> dello Studio.
                </p>
                <a
                  href="https://wa.me/393291246316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-4 bg-[#25D366] text-white hover:bg-[#20ba5a] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-[#25D366]/30 uppercase text-[11px] tracking-widest antialiased"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Invia Sintesi Caso
                </a>
              </div>
            </div>

            {/* Box Etica Professionale - TESTO CHIARO FORZATO */}
            <div className="bg-charcoal p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
              {/* Icona di sfondo decorativa per profondità */}
              <Scale className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 -rotate-12" />

              <div className="relative z-10">
                <Scale className="w-10 h-10 text-rosewood mb-6" />

                {/* Titolo forzato in Cream */}
                <h3 className="font-serif text-3xl mb-4 italic text-cream">
                  Etica e Trasparenza.
                </h3>

                {/* Paragrafo forzato in Cream con opacità per gerarchia */}
                <p className="font-light text-cream/80 leading-relaxed mb-8">
                  Ogni incarico professionale è preceduto dalla sottoscrizione
                  di un <strong>accordo scritto sui compensi</strong>, nel pieno
                  rispetto dei parametri forensi e della dignità della
                  professione.
                </p>

                {/* Lista con icone e testo chiaro */}
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-cream">
                    <CheckCircle2 className="w-5 h-5 text-rosewood shrink-0" />
                    <span>Nessun acconto per infortunistica</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-cream">
                    <CheckCircle2 className="w-5 h-5 text-rosewood shrink-0" />
                    <span>Valutazione clinica preliminare</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-cream">
                    <CheckCircle2 className="w-5 h-5 text-rosewood shrink-0" />
                    <span>Preventivo analitico obbligatorio</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
