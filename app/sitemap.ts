import { MetadataRoute } from 'next'
import { getNavServices } from "@/lib/getWpData";

interface WpService {
  slug: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://avvocatoannafusco.it';
  
  // Recupero aree dinamiche da WP
  const services: WpService[] = await getNavServices();
  const dynamicRoutes = services.map((s) => ({
    url: `${baseUrl}/aree-di-attivita/${s.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  // Pagine statiche basate sulla tua struttura
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/chi-sono`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/contatti`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/aree-di-attivita`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/attestati`, lastModified: new Date(), priority: 0.5 },
  ];

  return [...staticRoutes, ...dynamicRoutes];
}