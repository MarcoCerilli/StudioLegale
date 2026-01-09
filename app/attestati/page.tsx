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
   <main className="min-h-screen bg-cream text-[#2d2424] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Sezione */}
        <div className="mb-24">
          <p className="text-[#4a3434] text-[10px] uppercase tracking-[0.5em] mb-4">Percorso Professionale</p>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter leading-none mb-8">
            Titoli e <span className="text-[#4a3434] italic font-light">Competenze</span>
          </h1>
          <div className="h-[1px] w-40 bg-[#c5a5a5]/30"></div>
        </div>

        {/* Griglia Certificazioni */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificazioni.map((cert, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white border border-[#c5a5a5]/10 hover:border-[#c5a5a5]/40 transition-all duration-500 rounded-sm"
            >
              {/* Anno */}
              <div className="text-[#4a3434] text-[10px] font-bold tracking-widest uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#c5a5a5]/30"></span>
                {cert.year}
              </div>

              {/* Titolo e Istituzione */}
              <h3 className="text-xl font-serif mb-4 leading-snug group-hover:text-[#4a3434] transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-zinc-500 mb-10 leading-relaxed font-light uppercase tracking-wider">
                {cert.institution}
              </p>

              {/* Pulsanti */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {cert.buttons.map((btn, bIndex) => (
                  <Link
                    key={bIndex}
                    href={btn.link}
                    target="_blank"
                    className="text-[9px] font-bold tracking-[0.2em] px-4 py-2 border border-[#c5a5a5]/20 text-[#4a3434] hover:bg-[#c5a5a5] hover:text-[#120d0d] transition-all uppercase"
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}