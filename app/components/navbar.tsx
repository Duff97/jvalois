import React from 'react'
import Image from 'next/image'
import Filters from './filters'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='border-b mb-8 border-primary border-dashed grid grid-cols-1 md:grid-cols-2 xl:px-60 lg:px-40 sm:px-20 sticky'>
      <div className='relative m-4 w-[200px] lg:w-[300px]'>
        <Link href='/'>
          <Image
            className='w-full h-auto object-contain' 
            src='/logo.svg' 
            alt='logo' 
            width={200} 
            height={70} 
          />
        </Link>
      </div>
      <div className='self-center flex justify-center'>
        <Filters />
      </div>
    </header>
  )
}

export default Navbar