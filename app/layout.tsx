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

import CookieBanner from "./components/CookieBanner";

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
    default: "Studio Legale Avvocato Anna Fusco | Terracina, Latina e Roma",
    template: "%s | Avvocato Anna Fusco",
  },
  description:
    "Studio Legale Avvocato Anna Fusco a Terracina. Specializzata in Diritto Civile, Penale e del Lavoro a Latina, Roma e provincia. Consulenza legale professionale nel Lazio.",
  metadataBase: new URL("https://avvocatoannafusco.it"),
  keywords: [
    "avvocato anna fusco",
    "studio legale fusco",
    "avvocato terracina",
    "studio legale terracina",
    "avvocato latina",
    "studio legale latina",
    "avvocato roma",
    "studio legale roma",
    "avvocato lazio",
    "avvocato civilista terracina",
    "avvocato divorzista terracina",
    "diritto di famiglia terracina",
    "separazione e divorzio terracina",
    "avvocato successioni terracina",
    "avvocato penalista terracina",
    "avvocato penalista latina",
    "difesa penale terracina",
    "avvocato del lavoro terracina",
    "avvocato giuslavorista latina",
    "impugnazione licenziamento terracina",
    "avvocato societario latina",
    "consulenza legale imprese latina",
    "avvocato amministrativista latina",
    "ricorso tar lazio",
    "ricorso tar latina",
    "risarcimento danni terracina",
    "infortunistica stradale terracina",
    "responsabilita medica terracina",
    "malasanita latina avvocato",
    "risarcimento danni malasanita",
    "infortunio sul lavoro risarcimento",
    "avvocato immigrazione latina",
    "cittadinanza italiana terracina",
    "permesso di soggiorno latina",
    "ricongiungimento familiare avvocato",
    "consulenza legale online",
    "assistenza legale latina",
    "consulenza legale terracina",
    "studio legale provincia latina"
  ],
  alternates: { canonical: "/" },
  // Aggiungi OpenGraph per quando condividi il sito su WhatsApp/Facebook
  openGraph: {
    title: "Avvocato Anna Fusco | Studio Legale Terracina e Latina",
    description: "Assistenza legale specializzata a Terracina, Latina e Roma.",
    url: "https://avvocatoannafusco.it",
    siteName: "Studio Legale Fusco",
    locale: "it_IT",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const services = Object.entries(dettagliServizi).map(([slug, value]) => ({
    slug,
    title: (value as { title: string }).title,
  }));

  // Dati Strutturati per Local SEO
 const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Studio Legale Avvocato Anna Fusco",
    "description": "Studio Legale specializzato a Terracina, Latina e Roma.",
    "image": "https://avvocatoannafusco.it/logo-fusco.png", 
    "telephone": "+39 329 124 6316",
    "url": "https://avvocatoannafusco.it",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Palermo 16",
      "addressLocality": "Terracina",
      "addressRegion": "LT",
      "postalCode": "04019",
      "addressCountry": "IT",
    },
    // QUESTO DICE A GOOGLE DOVE OPERI
    "areaServed": [
      { "@type": "City", "name": "Terracina" },
      { "@type": "City", "name": "Latina" },
      { "@type": "City", "name": "Roma" },
      { "@type": "AdministrativeArea", "name": "Lazio" }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.2858, 
      "longitude": 13.2431,
    },
    "priceRange": "€€",
  };

  return (
    <html
      lang="it"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-charcoal antialiased min-h-screen flex flex-col overflow-x-hidden">
        <Navbar services={services} />
        {/* Il tag main grow assicura che il footer stia sempre in fondo */}
        <main className="grow w-full pt-20 md:pt-28">{children}</main>
        <CookieBanner />
        <ConsultationPopup />
        <Footer />
      </body>
    </html>
  );
}