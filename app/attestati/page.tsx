import Link from "next/link";

export default function AttestatiPage() {
  const certificazioni = [
    {
      title: "Competenze Digitali – EIPASS Standard",
      institution: "Certificazione Internazionale di Alfabetizzazione Digitale (Accredia)",
      year: "2025",
      buttons: [
        { label: "EIPASS STANDARD", link: "/attestati/attestato-09.png" },
        { label: "7 MODULI USER", link: "/attestati/attestato-08.png" },
      ],
    },
    {
      title: "Patrocinio davanti alle Magistrature Superiori",
      institution: "Abilitazione all'esercizio innanzi alla Corte di Cassazione",
      year: "2024",
      buttons: [
        { label: "VEDI ABILITAZIONE", link: "/attestati/INSERISCI_NOME_FILE.png" },
      ],
    },
    {
      title: "Operatore RAO (Firma Digitale e SPID)",
      institution: "Certificazione professionale Namirial – Idoneità e Cyber Security",
      year: "2024-2025",
      buttons: [
        { label: "IDONEITÀ 2024", link: "/attestati/attestato-01.png" },
        { label: "CYBER SECURITY 2025", link: "/attestati/attestato-02.png" },
      ],
    },
    {
      title: "Master e Corsi in Diritto Condominiale",
      institution: "Specializzazione Didaxo: Impugnazione delibere, morosità e parti comuni",
      year: "2017",
      buttons: [
        { 
          label: "IMPUGNAZIONE", 
          link: "/attestati/attestato-10.png" 
        },
        { 
          label: "RECUPERO CREDITI", 
          link: "/attestati/attestato-12.png" 
        },
        { 
          label: "GESTIONE PARTI COMUNI", 
          link: "/attestati/attestato-11.png" 
        },
      ],
    },
    {
      title: "Processo Amministrativo e Notifiche Telematiche",
      institution: "Formazione specialistica su PAT e notifiche presso Tribunali e Corti d'Appello",
      year: "2015-2017",
      buttons: [
        { label: "PAT 2015", link: "/attestati/INSERISCI_NOME_FILE.png" },
        { label: "NOTIFICHE I", link: "/attestati/attestato-14.png" },
        { label: "NOTIFICHE II", link: "/attestati/attestato-13.png" },
      ],
    },
    {
      title: "Conciliazione e Mediazione Civile",
      institution: "Mediatore Professionista ex D.Lgs. 28/2010 – Formazione accreditata",
      year: "2011-2013",
      buttons: [
        { label: "MEDIATORE 2011", link: "/attestati/INSERISCI_NOME_FILE.png" },
        { label: "AGGIORNAMENTO", link: "/attestati/INSERISCI_NOME_FILE.png" },
      ],
    },
    {
      title: "Diritto di Famiglia e Minorile",
      institution: "Formazione specialistica sui diritti e la tutela dei minori",
      year: "2012",
      buttons: [
        { label: "CORSO 2012", link: "/attestati/INSERISCI_NOME_FILE.png" },
        { label: "ATTESTATO", link: "/attestati/INSERISCI_NOME_FILE.png" },
      ],
    },
    {
      title: "Nomina a Cultore della Materia",
      institution: "Istituzioni di Diritto Privato e Commerciale – LUMSA Università",
      year: "2015",
      buttons: [
        { label: "VEDI NOMINA", link: "/attestati/attestato-04.png" },
      ],
    },
    {
      title: "Difensori d'Ufficio Tribunale Minorenni",
      institution: "Iscrizione nell'elenco ufficiale dell'Ordine degli Avvocati di Roma",
      year: "2010",
      buttons: [
        { label: "VEDI ISCRIZIONE", link: "/attestati/attestato-03.png" },
      ],
    },
    {
      title: "Corso di Abilitazione alla Difesa d'Ufficio",
      institution: "Idoneità conseguita presso l'Ordine degli Avvocati di Roma",
      year: "2009-2010",
      buttons: [
        { label: "VEDI ATTESTATO", link: "/attestati/attestato-07.png" },
      ],
    },
    {
      title: "Corso Pratico per Curatore Fallimentare",
      institution: "Università Roma Tre – Facoltà di Giurisprudenza",
      year: "2006",
      buttons: [
        { label: "VEDI ATTESTATO", link: "/attestati/attestato-06.png" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-cream text-charcoal pt-24 pb-24 selection:bg-rosewood-light/30">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-24">
          <p className="text-rosewood text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
            Curriculum Professionale
          </p>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none mb-8 text-charcoal">
            Titoli e{" "}
            <span className="text-rosewood italic font-medium">
              Competenze.
            </span>
          </h1>
          <div className="h-px w-40 bg-rosewood-light/30"></div>
        </div>

        {/* Griglia */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificazioni.map((cert, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-10 bg-white border border-rosewood-light/10 hover:border-rosewood/30 transition-all duration-500 rounded-4xl shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(74,52,52,0.08)] hover:-translate-y-2"
            >
              <div className="text-rosewood text-[10px] font-bold tracking-widest uppercase mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-rosewood-light/40"></span>
                {cert.year}
              </div>

              <h3 className="text-2xl font-serif mb-6 leading-tight text-charcoal group-hover:text-rosewood transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-[11px] text-sepia-dark/60 mb-12 leading-relaxed font-light uppercase tracking-wider">
                {cert.institution}
              </p>

              {/* Pulsanti */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {cert.buttons.map((btn, bIndex) => (
                  <Link
                    key={bIndex}
                    href={btn.link}
                    target="_blank"
                    className="text-[9px] font-extrabold tracking-widest px-5 py-3 border border-gray-100 text-sepia-dark rounded-full hover:bg-[#3d3330] hover:text-white hover:border-[#3d3330] transition-all duration-300 uppercase shadow-sm"
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-32 pt-12 border-t border-rosewood-light/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sepia-dark/50 text-xs font-light max-w-2xl leading-relaxed text-center md:text-left">
            Il costante aggiornamento professionale garantisce
            un&apos;assistenza legale d&apos;eccellenza basata sulle più recenti
            evoluzioni del diritto.
          </p>
          <Link
            href="/contatti"
            className="text-rosewood text-[10px] font-bold uppercase tracking-widest border-b border-rosewood-light/40 hover:border-rosewood transition-all py-1"
          >
            Contatta lo studio per una consulenza
          </Link>
        </div>
      </div>
    </main>
  );
}