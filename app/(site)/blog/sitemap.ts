import { client } from "@/lib/sanity";
import { BlogCard } from "@/types/interface";
import { MetadataRoute } from "next/types";

type Articles = BlogCard & {
    _updatedAt: Date
}


export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    _createdAt,
      titleImage,
      "currentSlug": slug.current,
      smallDescription,
  }`;
  const blogs: BlogCard[] = await client.fetch(query);
  const count = blogs.length;

  // Create an array to store the sitemap objects
  const sitemaps = [];

  // Generate sitemap objects with IDs from 0 to count - 1
  for (let i = 0; i < count; i++) {
    sitemaps.push({ id: i });
  }

  // Return the array of sitemap objects
  return sitemaps;
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
//   const start = id * 50000;
//   const end = start + 50000;
    const query = `*[_type=="blog"] {
        "currentSlug": slug.current,
          _updatedAt
      }`
  const articles: Articles[] = await client.fetch(query);
  return articles.map((article) => ({
    url: `${process.env.APP_URL}/blog/${article.currentSlug}`,
    lastModified: article._updatedAt,
  }));
}
