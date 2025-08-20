import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchVideoBanner() {
    const data = await fetchFromStrapi('/home?populate[VideoBanner][populate]=*');
  
    const video = data?.data?.VideoBanner;

    // console.log(data)
  
    return video?.video.url;
  }

