// /home/marco/progetti/studio-legale-fusco/lib/getWpData.ts

export async function getWpData(query: string, variables = {}) {
  const endpoint = "https://www.avvocatoannafusco.it/graphql";

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables
      }),
      // 'no-store' è perfetto per vedere le modifiche al menu istantaneamente
      cache: 'no-store',
    });

    const result = await response.json();

    if (result.errors) {
      throw new Error(result.errors[0].message);
    }

    return result.data;
  } catch (error: any) {
    console.error("ERRORE FETCH DETTAGLIATO:", error.message);
    throw error;
  }
}

export async function getNavServices() {
  // MODIFICA: Ordiniamo per MENU_ORDER (l'ordine impostato su WP)
  const query = `
    query GetNav { 
      pages(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 100) { 
        nodes { 
          title 
          uri 
          slug 
          menuOrder
        } 
      } 
    }`;

  try {
    const data = await getWpData(query);

    // Invece di filtrare per slug (che ti costringe a modificare il codice ogni volta),
    // ti consiglio di filtrare per le pagine che hanno un ordine impostato (> 0)
    // o mantenere il tuo filtro ma ordinare il risultato.

    const servicesSlugs = [
      'avvocato-familiarista-terracina',
      'risarcimento-danni-terracina',
      'avvocato-tributarista-terracina',
      'avvocato-societario-terracina',
      'avvocato-del-lavoro-terracina',
      'avvocato-penalista-terracina',
    ];

    if (!data?.pages?.nodes) return [];

    // Filtriamo e manteniamo l'ordine restituito da GraphQL (MENU_ORDER)
    return data.pages.nodes.filter((page: any) => servicesSlugs.includes(page.slug));

  } catch (error) {
    console.error("Errore nel recupero servizi nav:", error);
    return [];
  }
}

export async function getPageContent(slug: string) {
  const query = `
    query GetPageBySlug($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        title
        content
      }
    }
  `;

  try {
    const data = await getWpData(query, { id: slug, idType: 'URI' });
    return data?.page;
  } catch (error) {
    console.error(`Errore nel recupero della pagina ${slug}:`, error);
    return null;
  }
}