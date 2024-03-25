"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { client } from "@/lib/sanity";
import { BlogCard } from "@/types/interface";
import SearchItems from "./Search-items";
import Loading from "@/app/(site)/blog/loading";



function Articles() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const [blogs, setBlogs] = useState<BlogCard[]>()

  

  useEffect(() => {
    async function getData() {
    const query = `*[_type=='blog' && (title match "${q}" || body[].children[].text match "chatgpt")] | order(_createdAt desc) {
          title,
          _createdAt,
            titleImage,
            "currentSlug": slug.current,
            smallDescription,
        }`;

    const data = await client.fetch(query);
    return data;
  }

    async function fetchBlogsWithQuery() {
        const data: BlogCard[] = await getData();
        setBlogs(data);
    }

    fetchBlogsWithQuery();
    
  }, [q]);

  return (
    <div className="flex flex-col py-6">
        <div>
            {blogs?.length == 0 && <h1 className="text-center text-content1-foreground">Nothing to show here</h1>}
        </div>
        <div>
            <Suspense fallback={<Loading />}>
                <SearchItems blogs={blogs} />
            </Suspense>
        </div>
      
    </div>
  );
}

export default Articles;
