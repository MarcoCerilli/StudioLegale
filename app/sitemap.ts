import { MetadataRoute } from 'next'
import { getNavServices } from "@/lib/getWpData";

interface WpService {
  slug: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://avvocatoannafusco.it';
  
  // 1. Recupero dei servizi dinamici da WordPress (es. le singole prestazioni)
  const services: WpService[] = await getNavServices();
  const dynamicServices = services.map((s) => ({
    url: `${baseUrl}/aree-di-attivita/${s.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  // 2. Definizione delle macro-aree di attività (dal tuo menu)
  const mainAreas = [
    'diritto-civile-e-della-famiglia',
    'risarcimento-danni',
    'diritto-amministrativo-e-tributario',
    'diritto-societario-e-commerciale',
    'diritto-del-lavoro',
    'diritto-penale'
  ].map((area) => ({
    url: `${baseUrl}/aree-di-attivita/${area}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  // 3. Pagine statiche principali e sezione Attestati
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/chi-sono`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/contatti`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/prenota-consulenza`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/aree-di-attivita`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/attestati`, lastModified: new Date(), priority: 0.6 },
    // Esempio se hai sottopagine per i singoli attestati:
    // { url: `${baseUrl}/attestati/eipass`, lastModified: new Date(), priority: 0.5 },
  ];

  // Unione di tutte le rotte
  return [...staticRoutes, ...mainAreas, ...dynamicServices];
}