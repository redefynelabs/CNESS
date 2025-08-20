import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchIntroHero() {
    const data = await fetchFromStrapi('/home?populate[IntroHead][populate]=*');
  
    const introHead = data?.data?.IntroHead;
  
    return introHead;
  }

