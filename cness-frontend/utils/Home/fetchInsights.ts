import { fetchFromStrapi } from "@/lib/strapi";

export async function fetchInsightsHomeData() {
    const query =
        `/home?populate[InsightsSection][populate][InsightsHead]=true&populate[InsightsSection][populate][card][populate][image]=true`;
    const data = await fetchFromStrapi(query);

    // Extract Hero section
    const insightsHome = data.data.InsightsSection;
    const InsightsHead = insightsHome.InsightsHead;

    // Transform the cards into an array of objects with all card fields
    const cardsArray = insightsHome.card?.map((card: any) => ({
        id: card.id,
        cardId: card.cardId,
        title: card.title,
        category: card.category,
        url: card.url,
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
            InsightsHead: InsightsHead,
            card: cardsArray,
        },
    ];
}
