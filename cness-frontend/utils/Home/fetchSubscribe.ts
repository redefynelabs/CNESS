import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchSubscribe() {
    const data = await fetchFromStrapi('/home?populate[SubscribeSection][populate]=*');
  
    const Subscribe = data?.data?.SubscribeSection;
  
    return Subscribe;
  }

