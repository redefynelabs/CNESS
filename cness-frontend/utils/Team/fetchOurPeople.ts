import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchOurPeople() {
    const data = await fetchFromStrapi('/team?populate[OurPeople][populate]=*');
  
    const ourPeopleData = data.data;
  
    return ourPeopleData;
  }

