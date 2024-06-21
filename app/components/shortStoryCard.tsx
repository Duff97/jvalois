import React from 'react'
import { ShortStory } from '../interface'
import PublicationDate from './publicationDate'
import { Eye } from 'lucide-react'
import {PortableText} from '@portabletext/react'
import Link from 'next/link'

interface ShortStoryCardProps {
  shortStory: ShortStory
}

const ShortStoryCard = ({shortStory}: ShortStoryCardProps) => {
  return (
    <Link href={`/story/${shortStory.slug}`}>
      <div className='self-start relative rounded-2xl bg-primary pt-5 px-3 sm:px-5 shadow-md pb-20 hover:opacity-75 cursor-pointer'>
        <p className='font-bold text-3xl pb-5'>
          {shortStory.name}
        </p>
        <div className='text-lg leading-relaxed tracking-wide relative overflow-clip max-h-[150px] portable'>
          <PortableText value={shortStory.content} />
          <div className='absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/100' />
        </div>
        <PublicationDate createdAt={shortStory.createdAt} />
        <div className='flex justify-center'>
          <div className='bg-sky-200 rounded-full w-10 h-10 flex justify-center items-center absolute bottom-5'>
            <Eye />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ShortStoryCard