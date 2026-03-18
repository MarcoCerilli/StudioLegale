"use client";

import ProfessionalQr from "../components/ProfessionalQr";
import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";

export default function QrPage() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Studio Legale Fusco",
          text: "Prenota una consulenza con l'Avv. Anna Fusco",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Errore condivisione:", err);
      }
    }
  };

  return (
    <main className="min-h-screen bg-cream flex flex-col items-center p-6 text-sepia-dark pt-24 md:pt-28">
      {/* Header di navigazione rapida */}
      <div className="fixed top-0 w-full p-6 flex justify-between items-center max-w-2xl">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Home
        </Link>
        <button
          onClick={handleShare}
          className="p-2 bg-rosewood/5 rounded-full hover:bg-rosewood/10 transition-all"
        >
          <Share2 className="w-5 h-5 text-rosewood" />
        </button>
      </div>

      <div className="w-full max-w-sm text-center space-y-8">
        <div className="space-y-2">
          <h1 className="font-serif text-3xl text-rosewood">
            Studio Legale Fusco
          </h1>
          <p className="text-xs uppercase tracking-[0.3em] opacity-60">
            Avv. Anna Fusco
          </p>
        </div>

        {/* Il QR qui lo rendiamo più grande tramite CSS nel componente o scale */}
        <div className="flex justify-center scale-150 py-4">
          {" "}
          <ProfessionalQr className="text-sepia-dark!" />
        </div>

        <div className="space-y-4 pt-1 border-t border-sepia-dark/10">
          {" "}
          <p className="text-sm font-light italic">
            Inquadra il codice per prenotare una consulenza
            <br />o clicca per scaricare l&apos;immagine.
          </p>
          <div className="pt-4">
            <Link
              href="/contatti"
              className="block w-full bg-rosewood text-cream py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-rosewood-dark transition-all shadow-lg"
            >
              Prenota ora
            </Link>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-8 text-[10px] uppercase tracking-widest opacity-40">
        Terracina • Latina • Roma
      </footer>
    </main>
  );
}
