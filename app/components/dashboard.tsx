import { client } from '@/lib/sanity'
import React from 'react'
import PaintingCard from './paintingCard'
import { Quote, Painting } from '../interface'
import QuoteCard from './quoteCard'



const getData = async () => {
  const query = `*[_type in ['painting', 'quote']] | order(_createdAt desc) {
      _type == 'painting' => {
        'id': _id,
        name,
        image,
        description,
        slug,
        'createdAt': _createdAt,
        'type': _type
      },
      _type == 'quote' => {
        'id': _id,
        quote,
        autor,
        'createdAt': _createdAt,
        'type': _type
      }
  }`

  const data = await client.fetch(query)
  return data
}

const Dashboard = async () => {
  const data: (Painting | Quote)[] = await getData()
  return (
    <div className='flex flex-wrap gap-3 sm:gap-5 lg:gap-8 px-3 sm:px-12 lg:px-36 justify-center'>
      {data.map((publication) => {
        if (publication.type == 'painting'){
          return (
            <PaintingCard key={publication.id} painting={publication as Painting} />
          )
        }
        else if (publication.type == 'quote'){
          return (
            <QuoteCard key={publication.id} quote={publication as Quote} />
          )
        }
      })}
    </div>
  )
}

export default Dashboard