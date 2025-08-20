import { fetchFromStrapi } from "@/lib/strapi";

export async function fetchSolutionHomeData() {
  const query =
    `/home?populate[SolutionSection][populate][SolutionHead]=true&populate[SolutionSection][populate][cards][populate][image]=true`;
  const data = await fetchFromStrapi(query);

  // Extract Hero section
  const solutionsHome = data.data.SolutionSection;
  const solutionHead = solutionsHome.SolutionHead;

  // Transform the cards into an array of objects with all card fields
  const cardsArray = solutionsHome.cards?.map((card: any) => ({
    id: card.id,
    title: card.title,
    linkText: card.linkText,
    linkUrl: card.linkUrl,
    statText: card.statText,
    statValue: card.statValue,
    icon: card.icon ? { url: card.icon.url, name: card.icon.name } : null,
    isBackgroundImage: card.isBackgroundImage,
    image: card.image
      ? {
          url: card.image.url,
          name: card.image.name,
          
        }
      : null,
  })) || [];


  // Return normalized Hero metadata
  return [
    {
      solutionHead: solutionHead,
      cards: cardsArray,
    },
  ];
}
