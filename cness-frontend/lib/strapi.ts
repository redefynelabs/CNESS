const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

export async function fetchFromStrapi(path: string) {
  const res = await fetch(`${STRAPI_URL}/api${path}`, {
    next: { revalidate: 60 }, // ISR caching
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }

  return res.json();
}
