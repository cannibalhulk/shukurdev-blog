"use client"
import React from 'react'

function Footer() {
  return (
    <div className='dark:bg-black h-[60px] flex text-center justify-center items-center'>
      <p className='dark:text-white/40 text-black/80'>Copyright © {new Date().getFullYear().toString()} - by <span className='hover:underline decoration-green-600'><a rel='noopener' target='_blank' href='https://github.com/cannibalhulk'>Shukur Huseynli</a></span></p>

    </div>
  )
}

export default Footer