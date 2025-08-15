import { LoaderIcon } from 'lucide-react'
import React from 'react'
import { useThemeStore } from '../store/useThemeStore'

const PageLoader = () => {
  const {theme} = useThemeStore();
  return (
    <div className='h-screen flex flex-col items-center justify-center p-4' data-theme = {theme}>
      <LoaderIcon className="animate-spin size-10 text-primary"/>
    </div>
  )
}

export default PageLoader
