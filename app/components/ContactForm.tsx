"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // Endpoint API di Next.js (da creare in app/api/contact/route.ts)
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-cream p-10 border border-rosewood-light/30 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-rosewood/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-rosewood"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-charcoal font-serif text-2xl mb-2">
          Messaggio inviato.
        </p>
        <p className="text-sepia-dark/60 text-sm">
          La ricontatteremo entro 24 ore lavorative.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-rosewood uppercase tracking-widest text-[10px] font-bold border-b border-rosewood/30 hover:border-rosewood transition-all"
        >
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input
          name="name"
          type="text"
          placeholder="Nome e Cognome"
          required
          className="w-full bg-cream border border-rosewood-light/20 rounded-sm p-4 text-charcoal placeholder:text-sepia-dark/40 focus:border-rosewood focus:ring-1 focus:ring-rosewood outline-none transition-all"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Telefono"
          required
          className="w-full bg-cream border border-rosewood-light/20 rounded-sm p-4 text-charcoal placeholder:text-sepia-dark/40 focus:border-rosewood focus:ring-1 focus:ring-rosewood outline-none transition-all"
        />
      </div>

      <input
        name="email"
        type="email"
        placeholder="Indirizzo Email"
        required
        className="w-full bg-cream border border-rosewood-light/20 rounded-sm p-4 text-charcoal placeholder:text-sepia-dark/40 focus:border-rosewood focus:ring-1 focus:ring-rosewood outline-none transition-all"
      />

      {/* SELECT ZONE - FONDAMENTALE PER SEO LOCALE */}
      <select
        name="location"
        required
        defaultValue=""
        className="w-full bg-cream border border-rosewood-light/20 rounded-sm p-4 text-charcoal focus:border-rosewood focus:ring-1 focus:ring-rosewood outline-none transition-all appearance-none"
      >
        <option value="" disabled>
          Sede di interesse
        </option>
        <option value="Terracina">Studio Terracina</option>
        <option value="Latina">Sede Latina</option>
        <option value="Roma">Sede Roma</option>
      </select>

      {/* SELECT AREE DI INTERESSE */}
      <select
        name="area"
        required
        defaultValue=""
        className="w-full bg-cream border border-rosewood-light/20 rounded-sm p-4 text-charcoal focus:border-rosewood focus:ring-1 focus:ring-rosewood outline-none transition-all appearance-none"
      >
        <option value="" disabled>
          Seleziona l&apos;area legale
        </option>
        <option value="diritto-civile-e-famiglia">
          Diritto Civile e Famiglia
        </option>
        <option value="risarcimento-danni">
          Risarcimento Danni (Infortunistica)
        </option>
        <option value="diritto-penale">Diritto Penale</option>
        <option value="diritto-del-lavoro">Diritto del Lavoro</option>
        <option value="immigrazione-e-cittadinanza">
          Immigrazione e Cittadinanza
        </option>
        <option value="altro">Altro</option>
      </select>

      <textarea
        name="message"
        placeholder="Descriva brevemente il suo caso..."
        required
        rows={5}
        className="w-full bg-cream border border-rosewood-light/20 rounded-sm p-4 text-charcoal placeholder:text-sepia-dark/40 focus:border-rosewood focus:ring-1 focus:ring-rosewood outline-none transition-all resize-none"
      ></textarea>

      <div className="flex items-start gap-3 py-2">
        <input
          type="checkbox"
          required
          id="privacy"
          className="mt-1 accent-rosewood"
        />
        <label
          htmlFor="privacy"
          className="text-[10px] text-sepia-dark/60 leading-tight"
        >
          Acconsento al trattamento dei dati personali secondo la Privacy Policy
          dello Studio.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-rosewood text-white py-5 rounded-sm font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-sepia-dark transition-all disabled:opacity-50 shadow-md active:scale-[0.98]"
      >
        {status === "loading"
          ? "Elaborazione in corso..."
          : "Invia Richiesta di Consulenza"}
      </button>

      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-100 rounded text-red-600 text-[11px] text-center">
          Si è verificato un errore. Per urgenze, la preghiamo di chiamare il{" "}
          <a href="tel:+393291246316" className="font-bold underline">
            329 124 6316
          </a>
          .
        </div>
      )}
    </form>
  );
}
