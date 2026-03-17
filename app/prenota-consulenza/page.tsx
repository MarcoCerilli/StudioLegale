import { ShieldCheck, Clock, ArrowRight } from "lucide-react";

// Componente Icona WhatsApp Ufficiale (SVG)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function PrenotaPage() {
  return (
    // FIX SPAZIO: pt-32 -> pt-20
    <main className="bg-cream min-h-screen pt-20 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Pagina */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-rosewood text-[10px] font-bold uppercase tracking-[0.5em] block">
            Servizio Prioritario
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal tracking-tighter">
            Richiedi <span className="text-rosewood italic font-light">Consulenza</span>
          </h1>
          <p className="text-charcoal/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Un&apos;analisi preliminare del caso per definire insieme la strategia migliore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* COLONNA SINISTRA: FORM */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.04)] border border-rosewood/5">
            <div className="mb-10">
              <h3 className="font-serif text-2xl text-sepia-dark mb-2">Modulo di Contatto</h3>
              <p className="text-[10px] text-charcoal/40 uppercase tracking-[0.2em] font-bold">Tempo di risposta: 24h</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-sepia-dark/60 ml-1">Nome Completo</label>
                  <input required type="text" className="w-full p-4 bg-cream/30 border border-transparent rounded-2xl focus:bg-white focus:border-rosewood/20 outline-none transition-all text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-sepia-dark/60 ml-1">Email</label>
                  <input required type="email" className="w-full p-4 bg-cream/30 border border-transparent rounded-2xl focus:bg-white focus:border-rosewood/20 outline-none transition-all text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-sepia-dark/60 ml-1">Ambito Legale</label>
                <select className="w-full p-4 bg-cream/30 border border-transparent rounded-2xl focus:bg-white focus:border-rosewood/20 outline-none transition-all text-sm appearance-none">
                  <option value="">Seleziona Area</option>
                  <option value="civile">Diritto Civile</option>
                  <option value="penale">Diritto Penale</option>
                  <option value="lavoro">Diritto del Lavoro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-sepia-dark/60 ml-1">Messaggio</label>
                <textarea rows={4} className="w-full p-4 bg-cream/30 border border-transparent rounded-2xl focus:bg-white focus:border-rosewood/20 outline-none transition-all text-sm resize-none"></textarea>
              </div>
              
              <button className="w-full bg-[#3d3330] text-white font-bold py-5 rounded-full hover:bg-rosewood transition-all shadow-xl uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3">
                Invia Richiesta
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* COLONNA DESTRA: WHATSAPP & BENEFIT */}
          <div className="space-y-8">
            <div className="bg-[#3d3330] p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="font-serif text-3xl mb-6 italic">Urgenza?</h3>
                <p className="text-cream/70 mb-10 font-light text-sm leading-relaxed">
                  Per questioni che richiedono attenzione immediata, il canale WhatsApp Business è attivo per comunicazioni rapide con lo studio.
                </p>
                <a 
                  href="https://wa.me/393291246316"
                  className="inline-flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold transition-all hover:scale-105 shadow-lg"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span className="tracking-widest uppercase text-[10px]">Avvia Chat Live</span>
                </a>
              </div>
              <WhatsAppIcon className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.05]" />
            </div>

            {/* Benefit arrotondati */}
            <div className="space-y-4">
              {[
                { icon: ShieldCheck, title: "Segretezza", desc: "Dati trattati secondo i più alti standard di privacy forense." },
                { icon: Clock, title: "Velocità", desc: "Primo contatto garantito entro le 24 ore lavorative." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-rosewood/5 shadow-sm">
                  <div className="bg-cream p-3 rounded-2xl">
                    <item.icon className="w-5 h-5 text-rosewood" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-sepia-dark">{item.title}</h4>
                    <p className="text-xs text-charcoal/50 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}