import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchTeamHero() {
    const data = await fetchFromStrapi('/team?populate[TeamHero][populate]=*');
  
    const teamHead = data.data;
  
    return teamHead;
  }

