import { fetchFromStrapi } from "@/lib/strapi";


export async function getHomeData() {
  const query = `/home?populate[HeroBanner][populate]=*`;

  const data = await fetchFromStrapi(query);
  return data.data; // Return only the "data" part
}
