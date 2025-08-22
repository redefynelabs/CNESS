import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchVideoPage() {
    const data = await fetchFromStrapi('/video?populate[VideoSection][populate]=*');

    const video = data.data;

    return video;
}