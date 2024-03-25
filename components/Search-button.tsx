"use client"
import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

function SearchButton() {
    const router = useRouter();
  return (
    <Button onClick={()=> router.push('/search')} className='' size={"icon"}>
        <Search />
    </Button>
  )
}

export default SearchButton