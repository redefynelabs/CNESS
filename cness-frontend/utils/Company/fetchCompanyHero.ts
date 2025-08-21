import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchCompanyHero() {
    const data = await fetchFromStrapi('/company?populate[CompanyHero][populate]=*');
  
    const companyHead = data.data;
  
    return companyHead;
  }

