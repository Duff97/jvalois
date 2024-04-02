import { client } from '@/lib/sanity'
import React from 'react'
import PaintingCard from './paintingCard'
import { Quote, Painting, ShortStory } from '../interface'
import QuoteCard from './quoteCard'
import ShortTextCard from './shortStoryCard'
import { FilterWrapper } from '../providers/FilterProvider'



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
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-3'>
      {data.map((publication) => {
        
        return (
          <FilterWrapper key={publication.id} publicationType={publication.type}>
            <>
              {publication.type == 'painting' && <PaintingCard painting={publication as Painting} />}
              {publication.type == 'quote' && <QuoteCard quote={publication as Quote} />}
              {publication.type == 'shortStory' && <ShortTextCard shortStory={publication as ShortStory} />}
            </>
          </FilterWrapper>
        )
      })}
    </div>
  )
}

export default Dashboard