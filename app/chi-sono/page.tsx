import Image from 'next/image';
import Link from 'next/link';

export default function ChiSonoPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#2d2424] pt-32 pb-20 selection:bg-[#c5a5a5]/30">

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Sezione Introduttiva / Hero Personale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 border border-[#c5a5a5]/30 p-4 bg-white shadow-sm">
            {/* Elemento decorativo dietro la foto */}
            <div className="absolute inset-0 border border-[#c5a5a5]/20 translate-x-6 translate-y-6 -z-10" />
            
            <div className="relative w-full h-full bg-[#2d2424] overflow-hidden">
               <Image 
                 src="/images/avvocato-anna-fusco-ritratto.jpg" 
                 alt="Avv. Anna Fusco - Studio Legale Terracina"
                 fill
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                 priority
               />
            </div>
          </div>

          <div>
            <span className="text-[#8b5e5e] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Profilo Professionale</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 text-[#2d2424]">
              Avv. Anna Fusco
            </h1>
            
            {/* Iscrizione Ordine - Stile Citation */}
            <p className="text-xl md:text-2xl font-serif text-[#4a3434] mb-10 border-l-2 border-[#c5a5a5] pl-6 italic leading-relaxed">
              Iscritta all'Ordine degli Avvocati di Roma <br className="hidden md:block" />
              <span className="text-sm font-sans font-bold uppercase tracking-tighter opacity-60">Tessera n. A36343</span>
            </p>

            <div className="space-y-6 text-[#4a3434]/80 text-lg leading-relaxed font-light">
              <p>
                Con oltre 15 anni di esperienza maturata tra Roma e Terracina, la mia missione è offrire 
                un'assistenza legale fondata sulla **precisione tecnica** e sulla **comprensione umana**.
              </p>
              <p>
                Dopo la laurea conseguita presso la LUMSA di Roma e un Master di II livello in 
                Giurista d’Impresa (Roma Tre), ho scelto di dedicare la mia attività alla tutela 
                di privati e imprese, specializzandomi in settori cruciali del diritto civile e tributario.
              </p>
            </div>
          </div>
        </div>

        {/* Sezione Competenze / Valori - Palette Ottimizzata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { title: "Esperienza", desc: "Oltre 15 anni di attività forense e consulenza specializzata in ambito civile e penale." },
            { title: "Metodo", desc: "Approccio multidisciplinare orientato alla risoluzione rapida ed efficace delle controversie." },
            { title: "Trasparenza", desc: "Rapporto fiduciario diretto con il cliente e preventivi chiari sin dal primo incontro." }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-white border border-[#c5a5a5]/20 hover:border-[#c5a5a5] transition-all duration-500 group">
              <h3 className="text-xl font-serif text-[#2d2424] mb-4 uppercase tracking-widest group-hover:text-[#8b5e5e] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#4a3434]/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Finale - Coordinata con la Home */}
        <div className="text-center py-20 border-t border-[#c5a5a5]/20">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 italic text-[#2d2424] max-w-3xl mx-auto leading-snug">
            "Ogni controversia nasce da una storia, e ogni storia merita una tutela dedicata."
          </h2>
          <Link 
            href="/contatti" 
            className="inline-block bg-[#8b5e5e] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#4a3434] hover:scale-105 transition-all shadow-xl"
          >
            Fissa un colloquio conoscitivo
          </Link>
        </div>

      </div>
    </main>
  );
}