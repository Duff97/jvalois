import React from 'react'
import Image from 'next/image'
import { Painting } from '../interface'
import { urlFor } from '@/lib/sanity'
import {getImageDimensions} from '@sanity/asset-utils'
import { formatDate } from '@/lib/utils'
import PublicationDate from './publicationDate'

interface ContentWrapperProps {
  portrait: boolean
  children: React.ReactNode
}

const ContentWrapper = ({portrait, children}: ContentWrapperProps) => {
  if (portrait){
    return (
      <div className='self-start cursor-pointer relative rounded-2xl bg-primary 
      overflow-hidden shadow-md hover:opacity-75 pb-8 max-w-[45%] sm:max-w-[30%] lg:max-w-[25%]'>
        {children}
      </div>
    )
  }
  else {
    return (
      <div className='self-start cursor-pointer relative rounded-2xl bg-primary 
      overflow-hidden shadow-md hover:opacity-75 pb-8'>
        {children}
      </div>
    )
  }
}

const PaintingCard = ({painting}: {painting: Painting}) => {
  const image = urlFor(painting.image).url()
  const { aspectRatio, height, width } = getImageDimensions({
    url: image
  })
  return (
    <ContentWrapper portrait={aspectRatio <= 1}>
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
    </ContentWrapper>
  )
}

export default PaintingCard