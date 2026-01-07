import Image from 'next/image';
import Link from 'next/link';

export default function ChiSonoPage() {
  return (
    <main className="min-h-screen bg-[#120d0d] text-[#f5f0f0] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Sezione Introduttiva / Hero Personale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 border border-[#c5a5a5]/20 p-4">
            <div className="absolute inset-0 border border-[#c5a5a5]/10 translate-x-6 translate-y-6 -z-10" />
            <div className="relative w-full h-full bg-zinc-900 overflow-hidden">
               {/* Sostituisci con la foto reale della cliente */}
               <Image 
                 src="/images/avvocato-anna-fusco-ritratto.jpg" 
                 alt="Avv. Anna Fusco"
                 fill
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>

          <div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 text-[#c5a5a5]">
              Avv. Anna Fusco
            </h1>
            
            {/* Richiesta Esplicita Cliente */}
            <p className="text-xl md:text-2xl font-serif text-[#c5a5a5] mb-8 border-l-2 border-[#8b5e5e] pl-6 italic">
              Avvocato iscritto all'Ordine degli Avvocati di Roma con n. A36343.
            </p>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Con oltre 15 anni di esperienza maturata tra Roma e Terracina, la mia missione è offrire 
                un'assistenza legale fondata sulla precisione tecnica e sulla comprensione umana.
              </p>
              <p>
                Dopo la laurea conseguita presso la LUMSA di Roma e un Master di II livello in 
                Giurista d’Impresa (Roma Tre), ho scelto di dedicare la mia attività alla tutela 
                di privati e imprese, specializzandomi in settori cruciali del diritto civile e tributario.
              </p>
            </div>
          </div>
        </div>

        {/* Sezione Competenze / Valori */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Esperienza", desc: "Oltre 15 anni di attività forense e consulenza specializzata." },
            { title: "Metodo", desc: "Approccio multidisciplinare orientato alla risoluzione rapida delle controversie." },
            { title: "Trasparenza", desc: "Rapporto diretto e preventivi chiari sin dal primo incontro." }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-[#1a1414] border border-[#c5a5a5]/10 hover:border-[#c5a5a5]/30 transition-all">
              <h3 className="text-xl font-serif text-[#c5a5a5] mb-4 uppercase tracking-widest">{item.title}</h3>
              <p className="text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Finale */}
        <div className="text-center py-20 border-t border-[#c5a5a5]/10">
          <h2 className="text-3xl md:text-4xl font-serif mb-10 italic text-[#c5a5a5]">
            "Ogni controversia nasce da una storia, e ogni storia merita una tutela dedicata."
          </h2>
          <Link 
            href="/contatti" 
            className="inline-block bg-[#8b5e5e] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#a67c7c] transition-all"
          >
            Fissa un colloquio conoscitivo
          </Link>
        </div>

      </div>
    </main>
  );
}