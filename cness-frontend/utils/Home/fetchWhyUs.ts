import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchWhyUs() {
    const data = await fetchFromStrapi('/home?populate[WhyusSection][populate][WhyUsContent][populate]=imageUrl');
  
    const whyUsSection = data?.data?.WhyusSection;
  
    return whyUsSection.WhyUsContent;
  }

