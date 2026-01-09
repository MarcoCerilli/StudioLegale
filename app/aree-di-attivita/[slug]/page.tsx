import Link from 'next/link';

// Definiamo il tipo per i parametri
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServizioSingolo({ params }: Props) {
  // Estraiamo lo slug attendendo la promessa
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ');

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#2d2424] pt-40 pb-20 px-6 selection:bg-[#c5a5a5]/30">
      <div className="container mx-auto max-w-5xl">
        
        {/* Navigazione Superiore Soft */}
        <span className="text-[#8b5e5e] text-[10px] uppercase tracking-[0.4em] mb-4 block font-bold">
          Dettaglio Area Legale
        </span>

        <h1 className="text-5xl md:text-7xl font-serif capitalize tracking-tight text-[#2d2424] leading-tight">
          {title}
        </h1>
        
        {/* Linea di accento */}
        <div className="h-[1px] w-24 bg-[#c5a5a5] mt-8 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Colonna Testo Principale */}
          <div className="lg:col-span-2 space-y-8 border-l border-[#c5a5a5]/30 pl-8 md:pl-12">
            <p className="text-[#4a3434] text-xl md:text-2xl font-serif italic leading-relaxed">
              "L&apos;approccio dello Studio Legale Fusco alla materia del <span className="text-[#8b5e5e]">{title}</span> si fonda su un aggiornamento costante e una strategia mirata al caso concreto."
            </p>
            
            <div className="space-y-6 text-[#4a3434]/80 text-lg font-light leading-relaxed">
              <p>
                Stiamo attualmente curando l&apos;approfondimento digitale per questa sezione. 
                Tuttavia, lo Studio è già pienamente operativo e offre assistenza specialistica completa in questo ambito.
              </p>
              <p>
                Il metodo di lavoro dell&apos;Avv. Anna Fusco garantisce una difesa tecnica solida e trasparente, 
                supportando il cliente in ogni fase giudiziale e stragiudiziale, con l&apos;obiettivo di 
                massimizzare la tutela dei diritti e ridurre i tempi del contenzioso.
              </p>
            </div>

            {/* Pulsante Torna Indietro */}
            <div className="pt-10">
              <Link 
                href="/aree-di-attivita" 
                className="inline-flex items-center gap-4 text-[#8b5e5e] text-[11px] uppercase tracking-[0.3em] font-bold group"
              >
                <span className="h-[1px] w-8 bg-[#c5a5a5] transition-all duration-500 group-hover:w-16 group-hover:bg-[#8b5e5e]"></span>
                Torna alle aree di attività
              </Link>
            </div>
          </div>

          {/* Sidebar Contatti Rapidi */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[#c5a5a5]/20 p-8 shadow-sm">
              <h4 className="font-serif text-xl mb-6 text-[#2d2424]">Richiedi Consulenza</h4>
              <p className="text-sm text-[#4a3434]/70 mb-8 leading-relaxed">
                Hai bisogno di assistenza legale in <strong>{title}</strong>? Prenota un colloquio presso lo studio di Terracina.
              </p>
              <Link 
                href="/contatti"
                className="block w-full py-4 bg-[#4a3434] text-white text-center text-xs uppercase tracking-widest font-bold hover:bg-[#8b5e5e] transition-colors"
              >
                Contatta lo Studio
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}