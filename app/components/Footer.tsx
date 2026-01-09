import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#4a3434] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Colonna 1 */}
        <div>
          <h3 className="font-serif text-[#c5a5a5] text-lg mb-6 uppercase tracking-widest">
            Studio Legale Anna Fusco
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            Avvocato iscritto all'Ordine degli Avvocati di <strong>Roma</strong> con n. <strong>A36343</strong>.
          </p>
          <p className="text-sm">
            Partita IVA: <strong>09857711007</strong>
          </p>
        </div>

        {/* Colonna 2 */}
        <div>
          <h3 className="font-serif text-[#c5a5a5] text-lg mb-6 uppercase tracking-widest">
            Contatti Studio Legale
          </h3>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Via+Palermo+16+04019+Terracina+LT"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm mb-2 hover:text-[#c5a5a5] transition-colors cursor-pointer"
          >
            Via Palermo, 16, 04019 Terracina (LT)
          </a>

          <a
            href="mailto:ass.legale@gmail.com"
            className="block text-sm mb-2 hover:text-[#c5a5a5] transition-colors cursor-pointer"
          >
            Email: ass.legale@gmail.com
          </a>

          <a
            href="mailto:annafusco@ordineavvocatiroma.org"
            className="block text-sm mb-2 hover:text-[#c5a5a5] transition-colors cursor-pointer"
          >
            PEC: annafusco@ordineavvocatiroma.org
          </a>

          <a
            href="tel:+393291246316"
            className="block text-sm hover:text-[#c5a5a5] transition-colors cursor-pointer"
          >
            Tel: <strong>329 124 6316</strong>
          </a>
        </div>

        {/* Colonna 3 */}
        <div>
          <h3 className="font-serif text-[#c5a5a5] text-lg mb-6 uppercase tracking-widest">
            Informazioni Legali
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-[#c5a5a5] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-[#c5a5a5] transition-colors">Cookie Policy</Link></li>
            <li><Link href="/termini-utilizzo" className="hover:text-[#c5a5a5] transition-colors">Termini di Utilizzo</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center">
        <p className="text-xs text-zinc-400">
          © 2026 Avv. Anna Fusco. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}