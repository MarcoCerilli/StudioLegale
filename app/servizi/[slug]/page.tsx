// app/servizi/[slug]/page.tsx
import { getWpData } from "@/lib/getWpData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

// --- SEO DINAMICA ---
// Questa funzione dice a Google esattamente cosa sta indicizzando per ogni servizio
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getWpData(`
    query GetMeta($id: ID!) {
      page(id: $id, idType: URI) {
        title
      }
    }
  `, { id: `/${slug}/` });

  if (!data?.page) return { title: "Servizio non trovato" };

  return {
    title: `${data.page.title} | Avvocato Anna Fusco Terracina`,
    description: `Consulenza legale specialistica in ${data.page.title.toLowerCase()} a Terracina. Assistenza professionale dell'Avvocato Anna Fusco.`,
    openGraph: {
      title: `${data.page.title} - Studio Legale Fusco`,
      description: `Esperti in ${data.page.title.toLowerCase()}. Contattaci per una consulenza a Terracina.`,
    },
  };
}

export default async function ServizioPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  try {
    const data = await getWpData(`
      query GetServizioBySlug($id: ID!) {
        page(id: $id, idType: URI) {
          title
          content
        }
      }
    `, { id: `/${slug}/` });

    if (!data?.page) return notFound();

    const sanitizedHtml: string = data.page.content
      .replace(/<style[^>]*>([\S\s]*?)<\/style>/gmi, "")
      .replace(/style="[^"]*"/gi, "")
      .replace(/class="[^"]*"/gi, "")
      .replace(/<h2[^>]*>.*?<\/h2>/i, "") // Rimuove duplicato estetico
      .replace(/>\s+</g, '><') // Fix Hydration
      .replace(/&nbsp;/g, " ")
      .trim();

    return (
      <main className="min-h-screen py-24 md:py-32 bg-[#faf9f6] dark:bg-[#120d0d] transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-6">
          
          <header className="mb-16 md:mb-24 text-center md:text-left">
            {/* SEO: H1 è il tag più importante per i motori di ricerca */}
            <h1 className="text-5xl md:text-7xl font-serif text-[#4a3434] dark:text-[#f5f0f0] mb-6 leading-tight">
              {data.page.title}
            </h1>
            <div className="h-1 w-20 bg-[#8b5e5e] rounded-full opacity-80"></div>
          </header>

          <article className="bg-white dark:bg-[#1a1414] p-8 md:p-16 rounded-[3rem] border border-[#8b5e5e]/10 shadow-[0_20px_60px_rgba(139,94,94,0.04)]">
            <div 
              className="prose prose-stone dark:prose-invert max-w-none
                [&_h2]:text-2xl [&_h2]:font-serif [&_h2]:text-[#4a3434] [&_h2]:dark:text-[#f5f0f0] [&_h2]:mb-6 [&_h2]:mt-10
                [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-stone-600 [&_p]:dark:text-zinc-400 [&_p]:mb-6
                [&_ul]:list-none [&_ul]:pl-0 [&_li]:relative [&_li]:pl-8 [&_li]:mb-4 
                [&_li::before]:content-['—'] [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:text-[#8b5e5e]/50"
              dangerouslySetInnerHTML={{ __html: sanitizedHtml }} 
            />

            <div className="mt-16 pt-12 border-t border-stone-100 dark:border-white/5">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-xl font-serif text-[#4a3434] dark:text-white mb-2">Richiedi una consulenza</h3>
                  <p className="text-sm text-stone-500 dark:text-zinc-500 text-center md:text-left">
                    Analisi dettagliata della posizione giuridica presso lo studio a Terracina.
                  </p>
                </div>
                <Link 
                  href="/contatti" 
                  className="whitespace-nowrap bg-[#8b5e5e] text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#4a3434] transition-all shadow-lg shadow-[#8b5e5e]/20"
                >
                  Contatta l&apos;Avvocato
                </Link>
              </div>
            </div>
          </article>

          <footer className="mt-12 text-center">
            <p className="text-[10px] text-stone-400 dark:text-zinc-600 uppercase tracking-[0.3em]">
              Studio Legale Fusco — Terracina
            </p>
          </footer>
        </div>
      </main>
    );
  } catch (error) {
    return notFound();
  }
}