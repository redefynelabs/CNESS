import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchVisionMissionHead() {
    const data = await fetchFromStrapi('/company?populate[VisionMissionHead][populate]=*');
  
    const VMHead = data.data;
  
    return VMHead;
  }

