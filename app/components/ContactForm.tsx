'use client'
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    
    // NOTA: Sostituisci l'URL con il tuo endpoint REST di WordPress o una tua API Route
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) setStatus('success');
      else setStatus('error');
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 border border-[#c5a5a5]/20 text-center">
        <p className="text-[#4a3434] font-serif text-xl">Messaggio inviato con successo.</p>
        <p className="text-zinc-500 text-sm mt-2">La ricontatteremo al più presto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        name="name"
        type="text" 
        placeholder="Il tuo nome" 
        required
        className="w-full bg-cream border border-[#c5a5a5]/10 rounded p-4 text-white focus:border-[#c5a5a5]/50 outline-none transition-all"
      />
      <input 
        name="email"
        type="email" 
        placeholder="La tua email" 
        required
        className="w-full bg-cream border border-[#c5a5a5]/10 rounded p-4 text-white focus:border-[#c5a5a5]/50 outline-none transition-all"
      />
      <textarea 
        name="message"
        placeholder="Come posso aiutarla?" 
        required
        rows={4}
        className="w-full bg-cream border border-[#c5a5a5]/10 rounded p-4 text-white focus:border-[#c5a5a5]/50 outline-none transition-all resize-none"
      ></textarea>
      
      <button 
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#8b5e5e] text-white py-5 rounded font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-[#a67c7c] transition-all disabled:opacity-50"
      >
        {status === 'loading' ? 'Invio in corso...' : 'Invia Messaggio'}
      </button>
      {status === 'error' && <p className="text-red-400 text-xs mt-2">Si è verificato un errore. Riprova più tardi.</p>}
    </form>
  );
}