import { Painting } from '@/app/interface'
import { client, fetchParams, urlFor } from '@/lib/sanity'
import { formatDate } from '@/lib/utils'
import { PortableText } from '@portabletext/react'
import {getImageDimensions} from '@sanity/asset-utils'
import Image from 'next/image'
import React from 'react'

const getData = async (slug: string) => {
  const query = `*[_type == 'painting' && slug.current == '${slug}'][0] {
      _type == 'painting' => {
        'id': _id,
        name,
        image,
        description,
        'slug': slug.current,
        'createdAt': _createdAt,
        'type': _type
      }
  }`

  const data : Painting = await client.fetch(query, {}, fetchParams)
  return data
}

const PaintingPage = async ({params} : {params: {slug: string}}) => {
  const painting = await getData(params.slug)
  const image = urlFor(painting.image).url()
  const { height, width } = getImageDimensions({
    url: image
  })
  return (
    <div className='flex justify-center'>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 px-3 sm:px-5 max-w-[1080px]'>
      <div className='flex justify-end self-start shadow-xl rounded-2xl overflow-hidden shadow-gray-400'>
        <Image
          className='object-contain'
          src={image}
          width={width}
          height={height}
          alt={painting.name}
        />
      </div>
      <div>
        <h1 className='text-3xl font-extrabold text-primary'>
          {painting.name}
        </h1>
        <div className='tracking-wide py-10 leading-relaxed text-lg portable'>
          <PortableText value={painting.description} />
        </div>
        <p className='text-right text-primary tracking-wide pb-5 font-semibold'>
          Publié le {formatDate(painting.createdAt)}
        </p>
      </div>
    </div>
    </div>
  )
}

export default PaintingPage