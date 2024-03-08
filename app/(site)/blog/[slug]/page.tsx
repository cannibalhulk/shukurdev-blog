import { client, urlFor } from "@/lib/sanity"
import { FullBlog } from "@/types/interface";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
    const query=`*[_type == 'blog' && slug.current == '${slug}']{
        title,
          content,
          "currentSlug": slug.current,
          titleImage
      }[0]`
    const data = await client.fetch(query);
    return data;
    
}


async function BlogPage({params}: {params:{slug:string}}) {
    const blog:FullBlog = await getData(params.slug);
  return (
    <div className="mt-8">
        <h1>
            <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
                ShukurDev - Blog
            </span>

            <span className="mt-2 block text-3xl text-center font-bold tracking-tight sm:text-4xl leading-8">
                {blog.title}
            </span>
        </h1>

        <Image className="mt-8 rounded-lg border"
        src={urlFor(blog.titleImage).url()} 
        alt="blog_img" 
        width={800}
        height={800}
        priority />

        <div className="mt-16 prose prose-green prose-lg dark:prose-invert">
            <PortableText  value={blog.content} />
        </div>
    </div>
  )
}

export default BlogPage