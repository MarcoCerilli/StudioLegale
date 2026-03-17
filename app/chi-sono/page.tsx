import Image from 'next/image';
import Link from 'next/link';

export default function ChiSonoPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal pt-48 pb-20 selection:bg-rosewood-light/30">

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Sezione Introduttiva / Hero Personale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          <div className="relative aspect-4/5 w-full max-w-md mx-auto lg:mx-0 border border-rosewood-light/30 p-4 bg-white shadow-sm">
            {/* Elemento decorativo dietro la foto */}
            <div className="absolute inset-0 border border-rosewood-light/20 translate-x-6 translate-y-6 -z-10" />
            
            <div className="relative w-full h-full bg-charcoal overflow-hidden">
               <Image 
                 src="/images/profilo.webp" 
                 alt="Avv. Anna Fusco - Studio Legale Terracina"
                 fill
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                 priority
               />
            </div>
          </div>

          <div>
            <span className="text-rosewood font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Profilo Professionale
            </span>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 text-charcoal tracking-tighter">
              Avv. Anna Fusco
            </h1>
            
            {/* Iscrizione Ordine - Stile Citation */}
            <div className="mb-10 border-l-2 border-rosewood-light pl-6 italic">
              <p className="text-xl md:text-2xl font-serif text-sepia-dark leading-relaxed">
                Iscritta all&apos;Ordine degli Avvocati di Roma
              </p>
              <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-sepia-dark/50">
                Tessera n. A36343
              </span>
            </div>

            <div className="space-y-6 text-sepia-dark/80 text-lg leading-relaxed font-light">
              <p>
                Con oltre 15 anni di esperienza maturata tra Roma e Terracina, la mia missione è offrire 
                un&apos;assistenza legale fondata sulla precisione tecnica e sulla comprensione umana.
              </p>
              <p>
                Dopo la laurea conseguita presso la LUMSA di Roma e un Master di II livello in 
                Giurista d’Impresa presso l&apos;Università Roma Tre, ho scelto di dedicare la mia attività alla tutela 
                di privati e imprese, specializzandomi in settori cruciali del diritto civile e tributario.
              </p>
              <p>
                Il mio studio a Terracina rappresenta un punto di riferimento per chi cerca una difesa 
                determinata ma sempre improntata all&apos;etica e alla massima trasparenza professionale.
              </p>
            </div>
          </div>
        </div>

        {/* Sezione Valori */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { title: "Esperienza", desc: "Oltre 15 anni di attività forense e consulenza specializzata in ambito civile e penale." },
            { title: "Metodo", desc: "Approccio multidisciplinare orientato alla risoluzione rapida ed efficace delle controversie." },
            { title: "Trasparenza", desc: "Rapporto fiduciario diretto con il cliente e preventivi chiari sin dal primo incontro." }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-white border border-rosewood-light/10 hover:border-rosewood-light transition-all duration-500 group shadow-sm">
              <h3 className="text-sm font-serif text-charcoal mb-4 uppercase tracking-widest group-hover:text-rosewood transition-colors font-bold">
                {item.title}
              </h3>
              <div className="h-px w-8 bg-rosewood-light/30 mb-6 group-hover:w-12 transition-all" />
              <p className="text-sepia-dark/70 leading-relaxed text-sm font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Finale */}
        <div className="text-center py-24 border-t border-rosewood-light/20">
          <h2 className="text-3xl md:text-5xl font-serif mb-12 italic text-charcoal max-w-4xl mx-auto leading-tight">
            &quot;Ogni controversia nasce da una storia, e ogni storia merita una tutela dedicata.&quot;
          </h2>
          <Link 
            href="/contatti" 
            className="inline-block bg-rosewood text-white px-12 py-5 rounded-sm font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-sepia-dark hover:scale-105 transition-all shadow-xl active:scale-95"
          >
            Fissa un colloquio in studio
          </Link>
        </div>

      </div>
    </main>
  );
}