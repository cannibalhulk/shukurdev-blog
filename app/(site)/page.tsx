import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import { BlogCard } from "@/types/interface";
import { Card, CardContent } from "@/components/ui/card";
import dayjs from "dayjs";
import CTAButton from "@/components/CTA-Button";

async function getData() {
  const query = `*[_type=='blog'] | order(_createdAt desc) {
    title,
    _createdAt,
      titleImage,
      "currentSlug": slug.current,
      smallDescription,
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: BlogCard[] = await getData();
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {data.map((blog, i) => (
          <Card
            key={i}
            className="drop-shadow-xl dark:drop-shadow-none dark:shadow-none shadow-slate-400"
          >
            <Image
              className="rounded-t-lg h-[200px] object-cover"
              width={800}
              height={500}
              src={urlFor(blog.titleImage).url()}
              alt="blog_image"
            />

            <CardContent className="mt-5">
              <h4 className="text-[13px] mb-2 text-neutral-400">
                <span className="font-bold">Created at: </span>
                {dayjs(blog._createdAt).format("MMM DD, YYYY HH:mm")}
              </h4>
              <h3 className="text-lg line-clamp-2 font-bold">{blog.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {blog.smallDescription}
              </p>
              <CTAButton
              link={`/blog/${blog.currentSlug}`}
              >
                Read More
              </CTAButton>
            </CardContent>
          </Card>
        ))}
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
