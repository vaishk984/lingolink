import { LoaderIcon } from 'lucide-react'
import React from 'react'

const PageLoader = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center p-4'>
      <LoaderIcon className="animate-spin size-10 text-primary"/>
    </div>
  )
}

export default PageLoader
