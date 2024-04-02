import { client } from '@/lib/sanity'
import React from 'react'
import PaintingCard from './paintingCard'
import { Quote, Painting, ShortStory } from '../interface'
import QuoteCard from './quoteCard'
import ShortTextCard from './shortStoryCard'
import { FilterWrapper } from '../providers/FilterProvider'

export const dynamic = 'force-dynamic'

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
    <div className='columns-1 sm:columns-3 lg:columns-4 xl:columns-5 px-3'>
      {data.map((publication) => {
        
        return (
          <FilterWrapper key={publication.id} publicationType={publication.type}>
            <div className='my-3 break-inside-avoid-column'>
              {publication.type == 'painting' && <PaintingCard painting={publication as Painting} />}
              {publication.type == 'quote' && <QuoteCard quote={publication as Quote} />}
              {publication.type == 'shortStory' && <ShortTextCard shortStory={publication as ShortStory} />}
            </div>
          </FilterWrapper>
        )
      })}
    </div>
  )
}

export default Dashboard