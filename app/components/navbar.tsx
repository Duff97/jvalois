import React from 'react'
import Image from 'next/image'
import Filters from './filters'

const Navbar = () => {
  return (
    <header className='border-b mb-8 border-primary border-dashed grid grid-cols-1 md:grid-cols-2 xl:px-60 lg:px-40 sm:px-20'>
      <div className='relative m-4 w-[200px] lg:w-[300px]'>
        <Image
          className='w-full object-cover object-center' 
          src='/logo.svg' 
          alt='logo' 
          width={200} 
          height={70} 
        />
      </div>
      <div className='self-center flex justify-center'>
        <Filters />
      </div>
    </header>
  )
}

export default Navbar