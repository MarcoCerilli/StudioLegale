'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  // FIX: Blocca lo scroll del body quando il popup è aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    // FIX: z-index con parentesi quadre e gestione touch
    <div className="fixed inset-0 z-10000 flex items-center justify-center px-6 bg-charcoal/40 backdrop-blur-md transition-all duration-500">
      {/* max-h-screen e overflow-y-auto per evitare che il popup venga tagliato su telefoni piccoli */}
      <div className="relative w-full max-w-lg bg-cream p-8 md:p-12 border border-rosewood/10 shadow-[0_30px_100px_rgba(0,0,0,0.3)] rounded-[2.5rem] animate-in fade-in zoom-in duration-500 text-center max-h-[90vh] overflow-y-auto">
        
        <button 
          onClick={closePopup} 
          className="absolute top-6 right-6 text-rosewood/40 hover:text-rosewood p-2 transition-colors z-10001"
          aria-label="Chiudi"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="inline-flex items-center gap-2 bg-rosewood/10 px-4 py-1.5 rounded-full mb-6">
          <span className="text-rosewood text-[9px] font-extrabold uppercase tracking-[0.2em]">
            Prima Consulenza Gratuita
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6 leading-tight tracking-tight">
          Valutazione Preliminare <br /> <span className="text-rosewood italic font-light">di 30 minuti.</span>
        </h2>

        <p className="text-charcoal/60 text-sm leading-relaxed mb-6 font-light">
          Un colloquio orientativo dedicato all&apos;inquadramento tecnico del suo caso e alla verifica delle strategie difensive applicabili.
        </p>

        <div className="bg-charcoal/5 rounded-2xl p-4 mb-8">
            <p className="text-[10px] text-sepia-dark/60 leading-relaxed italic">
              *L&apos;incontro è finalizzato all&apos;analisi di fattibilità e non costituisce parere legale esaustivo.
            </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <Link 
            href="/prenota-consulenza" 
            onClick={closePopup}
            className="block w-full py-5 bg-[#3d3330] text-white text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-rosewood transition-all shadow-xl active:scale-95"
          >
            Prenota il tuo spazio
          </Link>
          <button onClick={closePopup} className="text-[9px] uppercase tracking-widest text-sepia-dark/40 hover:text-rosewood transition-colors font-medium py-2">
            Continua a navigare
          </button>
        </div>
      </div>
    </div>
  );
}