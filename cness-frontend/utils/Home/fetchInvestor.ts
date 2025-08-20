import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchInvestorSection() {
    const data = await fetchFromStrapi('/home?populate[InvestorSection][populate][Content][populate]=imageUrl');
  
    const investorSection = data?.data?.InvestorSection;
  
    return investorSection.Content;
  }

