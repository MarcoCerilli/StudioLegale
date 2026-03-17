import Link from "next/link";

const certificazioni = [
  {
    title: "Corso di Abilitazione alla Difesa d'Ufficio",
    institution: "Ordine degli avvocati di Roma",
    year: "2010",
    buttons: [{ label: "VEDI ATTESTATO", link: "/attestati/difesa-ufficio.pdf" }]
  },
  {
    title: "Difensori d'Ufficio Tribunale Minorenni",
    institution: "Iscrizione nell'elenco ufficiale dell'Ordine degli avvocati di Roma",
    year: "2010",
    buttons: [{ label: "VEDI ISCRIZIONE", link: "/attestati/minorenni.pdf" }]
  },
  {
    title: "Corso Pratico per Curatore Fallimentare",
    institution: "Università Roma Tre – Facoltà di Giurisprudenza",
    year: "2006",
    buttons: [{ label: "VEDI ATTESTATO", link: "/attestati/curatore.pdf" }]
  },
  {
    title: "Nomina a Cultore della Materia",
    institution: "Diritto Societario – Lumsa Università",
    year: "2015",
    buttons: [{ label: "VEDI NOMINA", link: "/attestati/nomina.pdf" }]
  },
  {
    title: "Master in Diritto Condominiale",
    institution: "Assemblea, Regolamento, Impugnazione delibere e Recupero crediti",
    year: "2017",
    buttons: [
      { label: "PARTE 1", link: "/attestati/condominio-1.pdf" },
      { label: "PARTE 2", link: "/attestati/condominio-2.pdf" },
      { label: "PARTE 3", link: "/attestati/condominio-3.pdf" }
    ]
  },
  {
    title: "Operatore RAO (Firma Digitale e SPID)",
    institution: "Certificazione professionale Namirial",
    year: "2024-2025",
    buttons: [
      { label: "CERTIFICATO 1", link: "/attestati/rao-1.pdf" },
      { label: "CERTIFICATO 2", link: "/attestati/rao-2.pdf" }
    ]
  }
];

export default function AttestatiPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal pt-48 pb-24 selection:bg-rosewood-light/30">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Sezione */}
        <div className="mb-24">
          <p className="text-rosewood text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
            Curriculum Professionale
          </p>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none mb-8 text-charcoal">
            Titoli e <span className="text-rosewood italic font-medium">Competenze.</span>
          </h1>
          <div className="h-1px w-40 bg-rosewood-light/30"></div>
        </div>

        {/* Griglia Certificazioni */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificazioni.map((cert, index) => (
            <div 
              key={index}
              className="group relative flex flex-col p-10 bg-white border border-rosewood-light/10 hover:border-rosewood-light/40 transition-all duration-500 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(74,52,52,0.05)]"
            >
              {/* Anno stilizzato */}
              <div className="text-rosewood text-[10px] font-bold tracking-widest uppercase mb-8 flex items-center gap-3">
                <span className="w-8 h-1px bg-rosewood-light/40"></span>
                {cert.year}
              </div>

              {/* Titolo e Istituzione */}
              <h3 className="text-2xl font-serif mb-6 leading-tight text-charcoal group-hover:text-rosewood transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-[11px] text-sepia-dark/60 mb-12 leading-relaxed font-light uppercase tracking-wider">
                {cert.institution}
              </p>

              {/* Pulsanti Minimali - Spinti in basso */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {cert.buttons.map((btn, bIndex) => (
                  <Link
                    key={bIndex}
                    href={btn.link}
                    target="_blank"
                    className="text-[9px] font-bold tracking-widest px-5 py-3 border border-rosewood-light/20 text-sepia-dark hover:bg-sepia-dark hover:text-white hover:border-sepia-dark transition-all duration-300 uppercase shadow-sm"
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nota di chiusura */}
        <div className="mt-32 pt-12 border-t border-rosewood-light/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sepia-dark/50 text-xs font-light max-w-2xl leading-relaxed text-center md:text-left">
            Il costante aggiornamento professionale presso istituzioni di rilievo come l&apos;Ordine degli Avvocati di Roma e l&apos;Università Roma Tre garantisce un&apos;assistenza legale d&apos;eccellenza basata sulle più recenti evoluzioni del diritto.
          </p>
          <Link 
            href="/contatti"
            className="text-rosewood text-[10px] font-bold uppercase tracking-widest border-b border-rosewood-light/40 hover:border-rosewood transition-all"
          >
            Contatta lo studio per una consulenza
          </Link>
        </div>
      </div>
    </main>
  );
}