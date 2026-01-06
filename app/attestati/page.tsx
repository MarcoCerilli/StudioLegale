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
    <main className="min-h-screen py-32 bg-[#faf9f6] dark:bg-[#120d0d] transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Header Sezione con stile prestigioso */}
        <div className="mb-20 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-serif text-[#4a3434] dark:text-[#f5f0f0] mb-6 tracking-tight">
            Titoli e <span className="text-[#8b5e5e] dark:text-[#c5a5a5]">Competenze</span>
          </h1>
          <div className="h-1.5 w-24 bg-[#8b5e5e] dark:bg-[#c5a5a5] mx-auto md:mx-0"></div>
        </div>

        {/* Griglia Certificazioni */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificazioni.map((cert, index) => (
            <div 
              key={index}
              className="group relative p-10 rounded-[2rem] border transition-all duration-500
                         bg-white border-[#8b5e5e]/10 shadow-[0_10px_40px_rgba(139,94,94,0.05)]
                         dark:bg-[#1a1414] dark:border-[#c5a5a5]/10 dark:hover:border-[#c5a5a5]/30"
            >
              {/* Badge Anno - Rosewood */}
              <div className="inline-block px-3 py-1 rounded-md text-[11px] font-bold tracking-[0.15em] 
                              bg-[#8b5e5e]/10 text-[#8b5e5e] dark:bg-[#c5a5a5]/10 dark:text-[#c5a5a5] mb-6 uppercase">
                Sessione {cert.year}
              </div>

              {/* Titolo e Istituzione */}
              <h3 className="text-2xl font-serif text-[#4a3434] dark:text-[#f5f0f0] mb-4 leading-tight group-hover:text-[#8b5e5e] dark:group-hover:text-[#c5a5a5] transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-stone-500 dark:text-zinc-400 mb-10 leading-relaxed italic">
                {cert.institution}
              </p>

              {/* Pulsanti Dinamici - Glossy Soft */}
              <div className="flex flex-wrap gap-3">
                {cert.buttons.map((btn, bIndex) => (
                  <Link
                    key={bIndex}
                    href={btn.link}
                    target="_blank"
                    className="text-[10px] font-bold tracking-widest px-5 py-2.5 rounded-full border transition-all uppercase
                               border-[#8b5e5e]/20 text-[#8b5e5e] hover:bg-[#8b5e5e] hover:text-white
                               dark:border-[#c5a5a5]/20 dark:text-[#c5a5a5] dark:hover:bg-[#c5a5a5] dark:hover:text-[#120d0d]"
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>

              {/* Decorazione Sottile (Solo Dark) */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#c5a5a5]/5 blur-3xl rounded-full pointer-events-none hidden dark:block" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}