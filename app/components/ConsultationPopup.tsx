'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mostra la popup dopo 5 secondi
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenPopup', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center px-6 bg-charcoal/60 backdrop-blur-sm transition-all">
      <div className="relative w-full max-w-lg bg-cream p-8 md:p-12 border border-rosewood-light/30 shadow-2xl scale-in-center">
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-rosewood hover:text-charcoal transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <span className="text-rosewood text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
            Esclusivo Online
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6 leading-tight">
            Prima Consulenza <br /> <span className="italic">Gratuita.</span>
          </h2>
          <p className="text-sepia-dark/70 text-sm leading-relaxed mb-8">
            Lo Studio Legale Fusco offre un primo colloquio orientativo gratuito per valutare la fattibilità del suo caso. Prenoti ora il suo appuntamento a Terracina.
          </p>
          
          <Link 
            href="/contatti#prenota" 
            onClick={closePopup}
            className="block w-full py-4 bg-rosewood text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-sepia-dark transition-all shadow-lg"
          >
            Prenota Ora
          </Link>
          
          <button 
            onClick={closePopup}
            className="mt-6 text-[9px] uppercase tracking-widest text-sepia-dark/40 hover:text-rosewood transition-colors"
          >
            Magari più tardi
          </button>
        </div>
      </div>
    </div>
  );
}