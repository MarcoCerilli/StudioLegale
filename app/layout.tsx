// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import { getNavServices } from "@/lib/getWpData";
import Footer from "./components/Footer";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const services = await getNavServices();

  return (
    <html lang="it" suppressHydrationWarning>
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
      </head>
      <body className="bg-cream text-[#2d2424] antialiased min-h-screen">
        
        <Navbar services={services} />
        
        <main>
          {children}
        </main>
          <Footer />
      </body>
    </html>
  );
}