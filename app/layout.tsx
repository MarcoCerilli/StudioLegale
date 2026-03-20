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
    "Studio Legale Avvocato Anna Fusco. Assistenza legale specializzata a Terracina, Latina e Roma. Esperienza in diritto civile e consulenza professionale nel Lazio.",
  metadataBase: new URL("https://avvocatoannafusco.it"),
  keywords: [
    "avvocato terracina",
    "studio legale terracina",
    "avvocato anna fusco",
    "studio legale latina",
    "avvocato roma",
    "assistenza legale lazio",
  ],
  alternates: { canonical: "/" },
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
    "image": "https://avvocatoannafusco.it/logo.png", 
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.2858, 
      "longitude": 13.2431,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00",
    },
    "priceRange": "$$",
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
        <ConsultationPopup />
        <Footer />
      </body>
    </html>
  );
}