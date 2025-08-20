import { fetchFromStrapi } from "@/lib/strapi";

export async function fetchHomeHeroData() {
  const query =
    `/home?populate[Hero][populate][Button]=true&populate[Hero][populate][backgroundImage]=true&populate[Hero][populate][cards][populate]=*`;
  const data = await fetchFromStrapi(query);

  // Extract Hero section
  const hero = data.data.Hero;

  // Transform the cards into an array of objects with all card fields
  const cardsArray = hero.cards?.map((card: any) => ({
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

  // Normalize Buttons (always return array)
  const normalizeButton = (btn: any) => ({
    text: btn.text,
    url: btn.url,
    isPrimary: btn.isPrimary,
  });

  let buttonData: any[] = [];
  if (Array.isArray(hero.Button)) {
    buttonData = hero.Button.map(normalizeButton);
  } else if (hero.Button) {
    buttonData = [normalizeButton(hero.Button)];
  }

  // Normalize backgroundImage (object or array → pick first or return all?)
  let backgroundImageData: any = null;
  if (Array.isArray(hero.backgroundImage) && hero.backgroundImage.length > 0) {
    backgroundImageData = hero.backgroundImage.map((img: any) => ({
      url: img.url,
      name: img.name,
    }));
  } else if (hero.backgroundImage) {
    backgroundImageData = [{ url: hero.backgroundImage.url, name: hero.backgroundImage.name }];
  }

  // Return normalized Hero metadata
  return [
    {
      title: hero.title,
      highlight: hero.highlight,
      Button: buttonData, 
      backgroundImage: backgroundImageData,
      cards: cardsArray,
    },
  ];
}
