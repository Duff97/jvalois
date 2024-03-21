import React from 'react'
import { ShortStory } from '../interface'
import PublicationDate from './publicationDate'

interface ShortStoryCardProps {
  shortStory: ShortStory
}

const ShortStoryCard = ({shortStory}: ShortStoryCardProps) => {
  return (
    <div className='self-start relative rounded-2xl bg-primary p-3 sm:p-5 lg:p-10 shadow-md xl:max-w-[45%] pb-10'>
      <p className='font-bold text-3xl pb-5'>
        {shortStory.name}
      </p>
      <p className='font-semibold text-lg text-wrap'>
        {shortStory.content}
      </p>
      <PublicationDate createdAt={shortStory.createdAt} />
    </div>
  )
}

export default ShortStoryCard