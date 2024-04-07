import React from 'react'
import Image from 'next/image'
import { Painting } from '../interface'
import { urlFor } from '@/lib/sanity'
import {getImageDimensions} from '@sanity/asset-utils'
import PublicationDate from './publicationDate'
import Link from 'next/link'


const PaintingCard = ({painting}: {painting: Painting}) => {
  const image = urlFor(painting.image).url()
  const { height, width } = getImageDimensions({
    url: image
  })
  return (
    <div className='self-start cursor-pointer relative rounded-2xl bg-primary 
    overflow-hidden shadow-md hover:opacity-75 pb-8'>
      <Link href={`/painting/${painting.slug}`}>
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
        <PublicationDate createdAt={painting.createdAt} />
      </Link>
    </div>
  )
}

export default PaintingCard