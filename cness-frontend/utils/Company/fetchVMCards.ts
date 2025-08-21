import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchVisionMissionCards() {
    const data = await fetchFromStrapi('/company?populate[VisionMissionCards][populate]=*');
  
    const VMCards = data.data;
  
    return VMCards;
  }

