import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-cream text-[#2d2424] pt-20 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Intestazione con Logo Arrotondato */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="relative w-40 h-40 mb-8 overflow-hidden rounded border border-[#c5a5a5]/20 shadow-2xl bg-white">
            <Image
              src="/images/logo-fusco.png"
              alt="Logo Studio Legale Fusco"
              fill
              className="object-cover p-4"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-[#4a3434] uppercase tracking-wider">
            Contatti
          </h1>
          <div className="w-24 h-px bg-[#8b5e5e] mt-8 opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* COLONNA SINISTRA: Recapiti reali dalle foto */}
          <div className="space-y-12">
            <div className="space-y-10 border-l border-[#c5a5a5]/20 pl-8">
              <section>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#4a3434] mb-4">Sede dello Studio</p>
                <p className="text-2xl font-serif leading-snug">
                  Via Palermo, 16 <br />
                  <span className="text-zinc-400">04019 Terracina (LT)</span>
                </p>
              </section>

              <section>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#4a3434] mb-4">Contatti Diretti</p>
                <div className="space-y-4">
                  {/* Telefono Cliccabile */}
                  <a
                    href="tel:+393291246316"
                    className="text-xl font-serif flex items-center gap-4 hover:text-[#4a3434] transition-colors group"
                  >
                    <span className="text-[#4a3434] group-hover:scale-110 transition-transform">📞</span>
                    329 124 6316
                  </a>

                  {/* Email Cliccabile */}
                  <a
                    href="mailto:ass.legale@gmail.com"
                    className="text-xl font-serif flex items-center gap-4 hover:text-[#4a3434] transition-colors group"
                  >
                    <span className="text-[#4a3434] group-hover:scale-110 transition-transform">✉️</span>
                    ass.legale@gmail.com
                  </a>
                </div>
              </section>

              <section className="pt-4 opacity-60">
                <p className="text-md text-zinc-200 font-medium italic">PEC: annafusco@ordineavvocatiroma.org</p>
                <p className="text-[15px] text-zinc-200 font-medium italic">P.IVA: 09857711007</p>
                <p className="text-[15px] text-zinc-200 font-medium italic">Avvocato iscritto all'Ordine degli Avvocati di Roma con n. A36343.</p>
              </section>
            </div>

            {/* Mappa stilizzata */}
            <div className="w-full h-72 rounded-sm overflow-hidden border border-[#c5a5a5]/10 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.4444555555!2d13.24!3d41.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13251234567890!2sVia+Palermo%2C+16%2C+04019+Terracina+LT!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'sepia(0.1) contrast(1.1) brightness(0.9)' }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>


            {/* COLONNA DESTRA: Modulo unico e pulito */}
            <div className="bg-white p-10 md:p-14 border border-[#c5a5a5]/10 rounded-sm shadow-2xl relative">
              <h3 className="text-3xl font-serif mb-2 text-[#4a3434]">Invia una Richiesta</h3>
              <p className="text-zinc-500 text-sm mb-10">Utilizzi il modulo per una consulenza diretta.</p>

              <ContactForm />
            </div>

          </div>
        </div>
    </main>
  );
}