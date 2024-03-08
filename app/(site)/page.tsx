import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import { BlogCard } from "@/types/interface";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc){
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: BlogCard[] = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
      {data.map((blog, i) => (
        <Card key={i}>
          <Image
          className="rounded-t-lg h-[200px] object-cover"
            width={500}
            height={500}
            src={urlFor(blog.titleImage).url()}
            alt="blog_image"
          />

          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-bold">{blog.title}</h3>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{blog.smallDescription}</p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
