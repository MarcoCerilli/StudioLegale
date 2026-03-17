const WP_GRAPHQL_ENDPOINT = "https://www.avvocatoannafusco.it/graphql";

// --- INTERFACCE ---

export interface WpPageNode {
  title: string;
  uri: string;
  slug: string;
  content?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

interface WpGraphQLResponse<T> {
  data: T;
  errors?: Array<{ message: string }>;
}

interface NavPagesData {
  pages: {
    nodes: WpPageNode[];
  };
}

interface SinglePageData {
  page: WpPageNode | null;
}

// --- FUNZIONI ---

/**
 * Funzione core tipizzata
 */
export async function getWpData<T>(query: string, variables = {}): Promise<T | null> {
  try {
    const response = await fetch(WP_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    });

    const json: WpGraphQLResponse<T> = await response.json();

    if (json.errors) {
      console.error("[GraphQL Errors]:", json.errors);
      return null;
    }

    return json.data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Errore sconosciuto";
    console.error("ERRORE NETWORK/WP:", errorMessage);
    return null;
  }
}

/**
 * Recupera i servizi per la navigazione con tipi espliciti
 */
export async function getNavServices(): Promise<WpPageNode[]> {
  const query = `
    query GetNav { 
      pages(first: 100) { 
        nodes { 
          title 
          uri 
          slug 
        } 
      } 
    }`;

  const servicesSlugs = [
    'avvocato-familiarista-terracina',
    'risarcimento-danni-terracina',
    'avvocato-tributarista-terracina',
    'avvocato-societario-terracina',
    'avvocato-del-lavoro-terracina',
    'avvocato-penalista-terracina',
  ];

  const data = await getWpData<NavPagesData>(query);
  
  if (!data?.pages?.nodes) return [];

  return data.pages.nodes
    .filter((page) => servicesSlugs.includes(page.slug))
    .sort((a, b) => servicesSlugs.indexOf(a.slug) - servicesSlugs.indexOf(b.slug));
}

/**
 * Recupera il contenuto di una singola pagina
 */
export async function getPageContent(uri: string): Promise<WpPageNode | null> {
  const query = `
    query GetPageByUri($uri: ID!) {
      page(id: $uri, idType: URI) {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;

  const data = await getWpData<SinglePageData>(query, { uri });
  return data?.page ?? null;
}