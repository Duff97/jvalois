import { client, urlFor } from '@/lib/sanity'
import React from 'react'
import { Painting } from '../interface'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import {getImageDimensions} from '@sanity/asset-utils'


const getData = async () => {
  const query = `*[_type=='painting'] {
      'id': _id,
      name,
      image,
      description,
      slug,
      'createdAt': _createdAt
  }`

  const data = await client.fetch(query)
  return data
}

const Dashboard = async () => {
  const data: Painting[] = await getData()
  return (
    <div className='flex flex-wrap gap-3 sm:gap-5 lg:gap-8 px-3 sm:px-12 lg:px-36 justify-center'>
      {data.map((painting) => {
        const image = urlFor(painting.image).url()
        const { aspectRatio, height, width } = getImageDimensions({
          url: image
        })
        return (
          <div key={painting.id} className='self-start cursor-pointer relative rounded-2xl bg-primary 
          overflow-hidden shadow-md hover:opacity-75 pb-8 max-w-[175px] sm:max-w-[250px] lg:max-w-[300px]'>
            <Image 
              src={image} 
              alt={painting.name} 
              className='object-contain' 
              width={width}
              height={height}
            />
            <p className='text-center py-3 px-1 font-semibold text-xl text-wrap'>
              {painting.name}
            </p>
            <p className='absolute bottom-3 right-3 text-right text-sm  text-sky-200'>
              {formatDate(painting.createdAt)}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard