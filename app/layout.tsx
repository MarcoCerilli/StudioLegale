import "./globals.css";
import Navbar from "./components/Navbar";
import { getNavServices } from "@/lib/getWpData";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Recupero i servizi dal backend WordPress
  const services = await getNavServices();

  return (
    // suppressHydrationWarning è fondamentale quando si usa lo switch dark/light
    <html lang="it" suppressHydrationWarning>
      <body className="antialiased min-h-screen transition-colors duration-500
                       bg-white text-zinc-800 
                       dark:bg-[#0a0a0a] dark:text-[#f5f0f0]">
        
        {/* Passiamo i dati dinamici alla Navbar */}
        <Navbar services={services} />
        
        <main>
          {children}
        </main>

        {/* Footer opzionale qui */}
      </body>
    </html>
  );
}