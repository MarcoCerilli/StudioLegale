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


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const services = Object.entries(dettagliServizi).map(([slug, value]) => ({
    slug,
    title: (value as { title: string }).title,
  }));

  return (
    <html
      lang="it"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-cream text-charcoal antialiased min-h-screen flex flex-col overflow-x-hidden">
        <Navbar services={services} />
        {/* Il tag main grow assicura che il footer stia sempre in fondo */}
        <main className="grow w-full pt-20 md:pt-28">
          {children}
        </main>
        <ConsultationPopup />
        <Footer />
      </body>
    </html>
  );
}