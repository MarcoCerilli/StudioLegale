import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. REGOLE DI REDIRECT PER PULIRE WORDPRESS
  async redirects() {
    return [
      // Reindirizza tutto ciò che cerca cartelle tipiche di WordPress alla Home
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true, // Questo è il 301 che dice a Google: "Spostato per sempre"
      },
      {
        source: '/wp-includes/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: true,
      },
      // Esempio: Se avevi vecchi link tipo ?p=123 o categorie spazzatura
      {
        source: '/category/:path*',
        destination: '/aree-di-attivita',
        permanent: true,
      },
      {
        source: '/tag/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // rimosso il blocco headers che impediva il caching (nocivo per SEO)

  // 3. ID BUILD UNIVOCO
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },

  // Opzionale: Se hai immagini esterne (es. da WordPress o altri domini)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.avvocatoannafusco.it',
      },
    ],
  },
};

export default nextConfig;