'use client'
import React from 'react'
import { Painting, Quote, ShortStory } from '../interface'
import Masonry from 'react-masonry-css'
import { FilterWrapper } from '../providers/FilterProvider'
import PaintingCard from './paintingCard'
import QuoteCard from './quoteCard'
import ShortStoryCard from './shortStoryCard'

interface MasonryGridProps {
  publications: (Painting | Quote | ShortStory)[]
}

const MasonryGrid = ({publications} : MasonryGridProps) => {
  return (
    <Masonry
      breakpointCols={{
        default: 5,
        1280: 4,
        1024: 3,
        768: 2,
        640: 1
      }}
      className="masonry"
      columnClassName="masonry-col"
    >
      {publications.map((publication) => {
        
        return (
          <FilterWrapper key={publication.id} publicationType={publication.type}>
            <div className='my-3 break-inside-avoid-column'>
              {publication.type == 'painting' && <PaintingCard painting={publication as Painting} />}
              {publication.type == 'quote' && <QuoteCard quote={publication as Quote} />}
              {publication.type == 'shortStory' && <ShortStoryCard shortStory={publication as ShortStory} />}
            </div>
          </FilterWrapper>
        )
      })}
    </Masonry>
  )
}

export default MasonryGrid