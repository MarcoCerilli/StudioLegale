import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Applica queste regole a tutte le rotte (o specifica una rotta come "/api/:path*")
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            // no-store: impedisce qualsiasi salvataggio locale (fondamentale per Android)
            // must-revalidate: obbliga il browser a chiedere al server se c'è roba nuova
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
    ];
  },
  // Opzionale: Genera un ID build univoco per ogni deploy 
  // per forzare il refresh dei file JS/CSS
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
};

export default nextConfig;