import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchTeamMembers() {
    const data = await fetchFromStrapi('/team?populate[TeamMembersSection][populate]=*');
  
    const teamMembersData = data.data;
  
    return teamMembersData;
  }

