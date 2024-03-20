import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='border-b mb-8 border-primary border-dashed'>
      <div className='relative m-4 w-[200px] lg:w-[300px]'>
        <Image
          className='w-full object-cover object-center' 
          src='/logo.svg' 
          alt='logo' 
          width={200} 
          height={70} 
        />
      </div>
    </header>
  )
}

export default Navbar