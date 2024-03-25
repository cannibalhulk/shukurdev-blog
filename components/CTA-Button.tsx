"use client"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import React from "react";


function CTAButton( {children, link} : {
    children: React.ReactNode,
    link: string
}) {
    const router = useRouter();
  return ( 
    <Button
        className="w-full mt-7"
        onClick={() => router.push(link, {scroll:true})}
    >
        {children}
    </Button>
  )
}

export default CTAButton