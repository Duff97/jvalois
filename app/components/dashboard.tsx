import { client } from '@/lib/sanity'
import React from 'react'
import PaintingCard from './paintingCard'
import { Quote, Painting, ShortStory } from '../interface'
import QuoteCard from './quoteCard'
import ShortTextCard from './shortStoryCard'



const getData = async () => {
  const query = `*[_type in ['painting', 'quote', 'shortStory']] | order(_createdAt desc) {
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
      },
      _type == 'shortStory' => {
        'id': _id,
        name,
        content,
        'createdAt': _createdAt,
        'type': _type
      }
  }`

  const data : (Painting | Quote | ShortStory)[] = await client.fetch(query)
  return data
}

const Dashboard = async () => {
  const data = await getData()
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
        else if (publication.type == 'shortStory') {
          return (
            <ShortTextCard key={publication.id} shortStory={publication as ShortStory} />
          )
        }
      })}
    </div>
  )
}

export default Dashboard