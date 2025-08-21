import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchMilestones() {
    const data = await fetchFromStrapi('/company?populate[MilestoneSection][populate][MilestoneCards][populate]=*');
  
    const milestones = data.data;
  
    return milestones;
  }

