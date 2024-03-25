import React, { Suspense } from 'react'
import SearchField from '@/components/Search-field'
import Articles from "@/components/Articles"
import Loading from '@/app/(site)/blog/loading'

function Searchpage() {
  return (
    <div className='h-full pb-7'>
        <SearchField />
        <Suspense fallback={<Loading/>}>
          <Articles />
        </Suspense>
    </div>
  )
}

export default Searchpage