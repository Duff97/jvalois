import { client, urlFor } from '@/lib/sanity'
import React from 'react'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import PaintingCard from './paintingCard'
import { Painting } from '../interface'



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
      {data.map((painting: Painting) => {
        
        return (
          <PaintingCard key={painting.id} painting={painting} />
        )
      })}
    </div>
  )
}

export default Dashboard