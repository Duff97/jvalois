'use client'
import React, { useState } from 'react'
import { ShortStory } from '../interface'
import PublicationDate from './publicationDate'
import { FoldVertical, UnfoldVertical } from 'lucide-react'
import {PortableText, PortableTextBlock} from '@portabletext/react'

interface ShortStoryCardProps {
  shortStory: ShortStory
}

const ShortStoryContentPreview = ({content} : {content: PortableTextBlock[]}) => {
  return (
    <div className='text-lg leading-relaxed tracking-wide relative overflow-clip max-h-[150px] portable'>
      <PortableText value={content} />
      <div className='absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/100' />
    </div>
  )
}

const ShortStoryCard = ({shortStory}: ShortStoryCardProps) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div onClick={() => {setExpanded(!expanded)}} className='self-start relative rounded-2xl bg-primary pt-5 px-3 sm:px-5 shadow-md pb-20 hover:opacity-75 cursor-pointer'>
      <p className='font-bold text-3xl pb-5'>
        {shortStory.name}
      </p>
      {!expanded && <ShortStoryContentPreview content={shortStory.content} />}
      {expanded && <div className='text-lg leading-relaxed tracking-wide portable'>
        <PortableText value={shortStory.content} />
      </div>}
      <PublicationDate createdAt={shortStory.createdAt} />
      <div className='flex justify-center'>
        <div className='bg-sky-200 rounded-full w-10 h-10 flex justify-center items-center absolute bottom-5'>
          {!expanded && <UnfoldVertical />}
          {expanded && <FoldVertical />}
        </div>
      </div>
    </div>
  )
}

export default ShortStoryCard