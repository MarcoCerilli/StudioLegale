import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "./globals.css";
import Navbar from "./components/Navbar";
import { getNavServices } from "@/lib/getWpData";
import Footer from "./components/Footer";
import ConsultationPopup from "./components/ConsultationPopup";

// Caricamento Font Google
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const viewport: Viewport = {
  themeColor: "#faf9f6",
};

// METADATA SEO PER LAZIO (Terracina, Latina, Roma)
export const metadata: Metadata = {
  title: {
    default: "Avvocato Anna Fusco | Studio Legale Terracina, Latina e Roma",
    template: "%s | Avvocato Anna Fusco",
  },
  description: "Studio Legale Avvocato Anna Fusco. Assistenza legale a Terracina, Latina e Roma. Esperienza in diritto civile e consulenza professionale nel Lazio.",
  metadataBase: new URL("https://avvocatoannafusco.it"),
  keywords: ["avvocato terracina", "studio legale latina", "avvocato roma", "Anna Fusco", "assistenza legale lazio"],
  alternates: { canonical: "/" },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const services = await getNavServices();

  // JSON-LD Dati Strutturati per Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Avvocato Anna Fusco",
    "image": "https://avvocatoannafusco.it/og-image.jpg",
    "telephon": "+393291246316",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Palermo, 16",
      "addressLocality": "Terracina",
      "addressRegion": "LT",
      "postalCode": "04019",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.2858",
      "longitude": "13.2486"
    },
    "areaServed": [
      { "@type": "City", "name": "Terracina" },
      { "@type": "City", "name": "Latina" },
      { "@type": "City", "name": "Roma" },
      { "@type": "AdministrativeArea", "name": "Lazio" }
    ]
  };

  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
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