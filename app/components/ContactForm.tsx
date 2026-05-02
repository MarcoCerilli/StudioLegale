"use client";
import { useState } from "react";
import Link from "next/link"; // Import aggiunto

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  // Stato per la gestione della checkbox privacy
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Protezione ulteriore: non inviare se la privacy non è spuntata
    if (!privacyAccepted) return;

    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-cream p-10 border border-rosewood-light/30 text-center animate-in fade-in zoom-in duration-500 rounded-2xl">
        <div className="w-16 h-16 bg-rosewood/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-rosewood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-charcoal font-serif text-2xl mb-2">Messaggio inviato.</p>
        <p className="text-sepia-dark/60 text-sm">La ricontatteremo entro 24 ore lavorative.</p>
        <button onClick={() => setStatus("idle")} className="mt-8 text-rosewood uppercase tracking-widest text-[10px] font-bold border-b border-rosewood/30 hover:border-rosewood transition-all">
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  const inputClass = "w-full bg-cream/50 border border-rosewood-light/20 rounded-xl p-4 text-charcoal placeholder:text-sepia-dark/40 focus:border-rosewood/40 focus:ring-1 focus:ring-rosewood/20 outline-none transition-all text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* RIGA 1: NOME E COGNOME */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="firstName" type="text" placeholder="Nome" required className={inputClass} />
        <input name="lastName" type="text" placeholder="Cognome" required className={inputClass} />
      </div>

      {/* RIGA 2: EMAIL E TELEFONO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="email" type="email" placeholder="Indirizzo Email" required className={inputClass} />
        <input name="phone" type="tel" placeholder="Telefono" required className={inputClass} />
      </div>

      {/* SELECT AREA LEGALE */}
      <select name="area" required defaultValue="" className={`${inputClass} appearance-none cursor-pointer`}>
        <option value="" disabled>Seleziona l&apos;area legale</option>
        <option value="diritto-civile-e-famiglia">Diritto Civile e Famiglia</option>
        <option value="risarcimento-danni">Risarcimento Danni (Infortunistica)</option>
        <option value="diritto-penale">Diritto Penale</option>
        <option value="diritto-del-lavoro">Diritto del Lavoro</option>
        <option value="immigrazione-e-cittadinanza">Immigrazione e Cittadinanza</option>
        <option value="altro">Altro</option>
      </select>

      {/* MESSAGGIO */}
      <textarea name="message" placeholder="Descriva brevemente il suo caso..." required rows={4} className={`${inputClass} resize-none`}></textarea>

      {/* PRIVACY SYSTEM */}
      <div className="flex items-start gap-3 py-2">
        <input 
          type="checkbox" 
          required 
          id="privacy" 
          checked={privacyAccepted}
          onChange={(e) => setPrivacyAccepted(e.target.checked)}
          className="mt-1 accent-rosewood w-4 h-4 cursor-pointer" 
        />
        <label htmlFor="privacy" className="text-[10px] text-sepia-dark/60 leading-tight cursor-pointer">
          Dichiaro di aver letto la <Link href="/privacy-policy" className="underline hover:text-rosewood">Privacy Policy</Link> e acconsento al trattamento dei dati personali secondo il Regolamento UE 2016/679 (GDPR).
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading" || !privacyAccepted}
        className={`w-full py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] transition-all shadow-lg active:scale-[0.98] ${
            !privacyAccepted || status === "loading"
            ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
            : "bg-charcoal text-white hover:bg-rosewood"
        }`}
      >
        {status === "loading" ? "Invio in corso..." : "Prenota la mia Consulenza"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-[10px] text-center italic">Errore nell&apos;invio. Riprova o chiamaci direttamente.</p>
      )}
    </form>
  );
}