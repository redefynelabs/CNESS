import { fetchFromStrapi } from "@/lib/strapi";


export async function fetchBlogs() {
  const data = await fetchFromStrapi('/blogs?populate=*');

  const blogs = data.data;

  return blogs;
}

export async function fetchBlogBySlug(slug: string) {
    const data = await fetchFromStrapi(`/blogs?filters[slug][$eq]=${slug}&populate=*`);
    
  
    return data.data[0];
  }
  