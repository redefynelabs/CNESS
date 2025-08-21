import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchNews() {
    const data = await fetchFromStrapi('/news-and-articles?populate=*');

    const news = data.data;

    return news;
}

export async function fetchNewsBySlug(slug: string) {
    const data = await fetchFromStrapi(`/news-and-articles?filters[slug][$eq]=${slug}&populate=*`);


    return data.data[0];
}
