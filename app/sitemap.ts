import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shukurdev-blog.vercel.app',
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
        url: 'https://shukurdev-blog.vercel.app/search',
        lastModified: new Date()
    },
    {
        url: 'https://shukurdev-blog.vercel.app/blog',
        lastModified: new Date()
    }
  ]
}