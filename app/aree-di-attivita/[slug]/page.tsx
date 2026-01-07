import Link from 'next/link';

// Definiamo il tipo per i parametri
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServizioSingolo({ params }: Props) {
  // Estraiamo lo slug attendendo la promessa
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-[#120d0d] text-[#f5f0f0] pt-40 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif capitalize tracking-tight">
          {slug.replace(/-/g, ' ')}
        </h1>
        
        <div className="mt-12 max-w-2xl border-l border-[#c5a5a5]/30 pl-8">
          <p className="text-zinc-400 text-lg leading-relaxed">
            Stiamo definendo i dettagli per l'area di specializzazione in 
            <span className="text-[#c5a5a5] italic"> {slug.replace(/-/g, ' ')}</span>.
          </p>
          <p className="mt-4 text-zinc-500 font-light">
            Lo Studio Legale Fusco garantisce una difesa tecnica solida e trasparente, 
            adattata alle specifiche esigenze di questa materia.
          </p>
        </div>

        <Link 
          href="/aree-di-attivita" 
          className="inline-flex items-center gap-4 mt-20 text-[#c5a5a5] text-xs uppercase tracking-[0.3em] group"
        >
          <span className="h-[1px] w-8 bg-[#c5a5a5] transition-all group-hover:w-16"></span>
          Torna alle aree di attività
        </Link>
      </div>
    </main>
  );
}