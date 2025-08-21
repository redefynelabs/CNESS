import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchStatsSection() {
    const data = await fetchFromStrapi('/company?populate[StatsSection][populate]=*');
  
    const statsData = data.data;
  
    return statsData;
  }

