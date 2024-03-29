import { client, urlFor } from "@/lib/sanity"
import { BlogCard, FullBlog } from "@/types/interface";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "../loading";
import { Metadata } from "next";

type Props = {
    params: { slug: string }
  }

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

export async function generateMetadata({params}: Props): Promise<Metadata>  {
    const query=`*[_type=="blog" && slug.current=="${params.slug}" ]{
        title,
        _createdAt,
          titleImage,
          "currentSlug": slug.current,
          smallDescription,
      }[0]`
    const data: BlogCard = await client.fetch(query);

    return {
        title: data.title,
        description: data.smallDescription,
        openGraph: {
            title: data.title,
            description: data.smallDescription,
            url: process.env.APP_URL+`/blog/${data.currentSlug}` ,
            images: [
                {
                    url: urlFor(data.titleImage).url(), 
                    width: 800,
                    height: 600,
                },  
            ],
            type:"article"
        },
        
    }
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
            <Suspense fallback={<Loading/>}>
                <PortableText  value={blog.content} />
            </Suspense>
        </div>
        <br/>
        <br/>
        <br/>
    </div>
  )
}

export default BlogPage