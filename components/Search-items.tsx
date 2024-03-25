"use client";
import { urlFor } from "@/lib/sanity";
import { BlogCard } from "@/types/interface";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Fragment, Suspense } from "react";
import Loading from "@/app/(site)/blog/loading";
import { useRouter } from "next/navigation";

type PageProps = {
  blogs: BlogCard[] | undefined;
};

function SearchItems(props: PageProps) {
    const router = useRouter();
  return (
    <Fragment>
        <Suspense fallback={<Loading />} >
            <div className="flex flex-col gap-8">

                {props.blogs?.map((blog, i) => (
                    <Card
                    onClick={()=>router.push(`/blog/${blog.currentSlug}`)}
                    key={i}
                    className="h-[160px] cursor-pointer drop-shadow-xl flex w-full dark:drop-shadow-none dark:shadow-none shadow-slate-400 overflow-hidden"
                    >
                    <Image 
                    className=" min-h-full object-cover"
                    width={160} 
                    height={300} 
                    src={urlFor(blog.titleImage).url()} alt={blog.title} />

                    <CardContent className="ml-4 mt-4">
                            <h1  className="text-lg line-clamp-2 font-bold">{blog.title}</h1>
                            <h2 className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{blog.smallDescription}</h2>
                    </CardContent>
                    </Card>
                ))}
            </div>
        </Suspense>
     
    </Fragment>
  );
}

export default SearchItems;
