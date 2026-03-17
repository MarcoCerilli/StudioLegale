import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConsultationPopup from "./components/ConsultationPopup";

// 1. IMPORTA I DATI LOCALI
import { dettagliServizi } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const viewport: Viewport = {
  themeColor: "#faf9f6",
};

export const metadata: Metadata = {
  title: {
    default: "Avvocato Anna Fusco | Studio Legale Terracina, Latina e Roma",
    template: "%s | Avvocato Anna Fusco",
  },
  description:
    "Studio Legale Avvocato Anna Fusco. Assistenza legale a Terracina, Latina e Roma. Esperienza in diritto civile e consulenza professionale nel Lazio.",
  metadataBase: new URL("https://avvocatoannafusco.it"),
  keywords: [
    "avvocato terracina",
    "studio legale latina",
    "avvocato roma",
    "Anna Fusco",
    "assistenza legale lazio",
  ],
  alternates: { canonical: "/" },
};

interface ServizioDettaglio {
  title: string;
  desc: string;
  focus: string;
  punti: string[];
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. GENERA LA LISTA DEI SERVIZI DAI DATI LOCALI INVECE CHE DA getNavServices()
  const services = Object.entries(dettagliServizi).map(([slug, value]) => {
    const data = value as ServizioDettaglio; // Cast del valore
    return {
      slug: slug,
      title: data.title,
    };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Avvocato Anna Fusco",
    image: "https://avvocatoannafusco.it/og-image.jpg",
    telephone: "+393291246316", // Corretto errore di battitura 'telephon'
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Palermo, 16",
      addressLocality: "Terracina",
      addressRegion: "LT",
      postalCode: "04019",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.2858",
      longitude: "13.2486",
    },
    areaServed: [
      { "@type": "City", name: "Terracina" },
      { "@type": "City", name: "Latina" },
      { "@type": "City", name: "Roma" },
      { "@type": "AdministrativeArea", name: "Lazio" },
    ],
  };

  return (
    <html
      lang="it"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.remove('dark');
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-charcoal antialiased min-h-screen flex flex-col">
        {/* 3. ORA PASSA I SERVIZI LOCALI AGGIORNATI ALLA NAVBAR */}
        <Navbar services={services} />
        <main className="grow">
          {children}
          <ConsultationPopup />
        </main>
        <Footer />
      </body>
    </html>
  );
}
