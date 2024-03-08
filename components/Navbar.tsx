import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './dark-mode-switcher'

function Navbar() {
  return (
    <nav className='w-full relative flex items-center justify-between max-w-2xl mx-auto py-5'>
        <Link href={"/"} className='font-bold text-3xl'>
            Shukur<span className='text-primary'>Blog</span>
        </Link>
        <ModeToggle/>
    </nav>
  )
}

export default Navbar