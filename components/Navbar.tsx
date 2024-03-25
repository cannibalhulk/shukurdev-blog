import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './dark-mode-switcher'
import SearchButton from './Search-button'

function Navbar() {
  return (
    <nav className='w-full relative flex items-center justify-between max-w-2xl mx-auto py-5'>
        <Link href={"/"} className='font-bold text-3xl'>
            Shukur<span className='text-primary'>Blog</span>
        </Link>
        <div className='flex gap-5'>
          <SearchButton/>
          <ModeToggle/>
        </div>
    </nav>
  )
}

export default Navbar